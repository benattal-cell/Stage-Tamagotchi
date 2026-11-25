// Le serveur de FormiLife.
// Il fait deux choses :
//   1. envoyer les fichiers du dossier "public" au navigateur ;
//   2. gérer les comptes, les amis et les classements (les adresses qui commencent par /api/).
// Il n'utilise que des outils fournis avec Node.js.

const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Railway choisit le port et le donne dans la variable PORT. Sur notre ordinateur, on utilise 3000.
const PORT = process.env.PORT || 3000;

const PUBLIC = path.join(__dirname, 'public');
const THREE = path.join(__dirname, 'node_modules', 'three', 'build', 'three.min.js');
const GLTF_LOADER = path.join(__dirname, 'node_modules', 'three', 'examples', 'js', 'loaders', 'GLTFLoader.js');

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.gltf': 'model/gltf+json',
  '.glb': 'model/gltf-binary',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.md': 'text/plain; charset=utf-8',
};

// ---------------------------------------------------------------------------------------------
// La base de données : un fichier JSON.
// Sur Railway, le disque est effacé à chaque mise à jour. Pour garder les comptes, il faut ajouter
// un « Volume » au service et donner son chemin dans la variable DATA_DIR (par exemple /data).
// ---------------------------------------------------------------------------------------------
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'formilife.json');
let db = { users: {}, sessions: {} };
try {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  if (fs.existsSync(DB_FILE)) db = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
  if (!db.users) db.users = {};
  if (!db.sessions) db.sessions = {};
} catch (e) {
  console.error('Impossible de lire la base de données, on repart de zéro :', e.message);
  db = { users: {}, sessions: {} };
}
let saveTimer = null;
function saveDb() {
  // On attend un court instant pour regrouper plusieurs changements, puis on écrit dans un fichier
  // temporaire qu'on renomme : si le serveur s'arrête pendant l'écriture, l'ancien fichier reste entier.
  if (saveTimer) return;
  saveTimer = setTimeout(() => {
    saveTimer = null;
    try {
      fs.writeFileSync(DB_FILE + '.tmp', JSON.stringify(db));
      fs.renameSync(DB_FILE + '.tmp', DB_FILE);
    } catch (e) { console.error('Sauvegarde impossible :', e.message); }
  }, 200);
}

// ---------------------------------------------------------------------------------------------
// Les mots de passe et les sessions
// ---------------------------------------------------------------------------------------------
// On ne garde JAMAIS un mot de passe tel quel. On garde une « empreinte » calculée avec du sel :
// même si quelqu'un vole le fichier, il ne peut pas retrouver les mots de passe.
function hashPassword(password, salt) {
  return crypto.scryptSync(password, salt, 32).toString('hex');
}
function checkPassword(user, password) {
  const a = Buffer.from(hashPassword(password, user.salt), 'hex');
  const b = Buffer.from(user.hash, 'hex');
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
const SESSION_DAYS = 30;
function sha(text) { return crypto.createHash('sha256').update(text).digest('hex'); }
function openSession(res, req, key) {
  // Le navigateur reçoit un jeton tiré au hasard dans un cookie. Le serveur n'en garde que l'empreinte.
  const token = crypto.randomBytes(32).toString('hex');
  db.sessions[sha(token)] = { u: key, exp: Date.now() + SESSION_DAYS * 864e5 };
  const secure = (req.headers['x-forwarded-proto'] || '').split(',')[0] === 'https' ? '; Secure' : '';
  // HttpOnly : le code de la page ne peut pas lire le cookie. SameSite : un autre site ne peut pas l'utiliser.
  res.setHeader('Set-Cookie', `fl_session=${token}; HttpOnly; Path=/; SameSite=Lax; Max-Age=${SESSION_DAYS * 86400}${secure}`);
}
function readCookie(req, name) {
  const found = (req.headers.cookie || '').split(';').map((c) => c.trim()).find((c) => c.startsWith(name + '='));
  return found ? found.slice(name.length + 1) : '';
}
function currentUser(req) {
  const token = readCookie(req, 'fl_session');
  if (!/^[0-9a-f]{64}$/.test(token)) return null;
  const s = db.sessions[sha(token)];
  if (!s || s.exp < Date.now() || !db.users[s.u]) return null;
  return db.users[s.u];
}

// ---------------------------------------------------------------------------------------------
// Les garde-fous
// ---------------------------------------------------------------------------------------------
// Limiter le nombre d'essais : sans ça, un programme pourrait tester des milliers de mots de passe.
const hits = new Map();
function tooMany(req, bucket, max, minutes) {
  const ip = String(req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim();
  const key = bucket + '|' + ip, now = Date.now();
  let h = hits.get(key);
  if (!h || h.reset < now) { h = { n: 0, reset: now + minutes * 60000 }; hits.set(key, h); }
  h.n++;
  return h.n > max;
}
setInterval(() => {
  const now = Date.now();
  for (const [k, h] of hits) if (h.reset < now) hits.delete(k);
  let changed = false;
  for (const k of Object.keys(db.sessions)) if (db.sessions[k].exp < now) { delete db.sessions[k]; changed = true; }
  if (changed) saveDb();
}, 10 * 60000).unref();

function sendJson(res, status, obj) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(JSON.stringify(obj));
}
function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0; const parts = [];
    req.on('data', (c) => { size += c.length; if (size > 10000) { reject(new Error('trop gros')); req.destroy(); } else parts.push(c); });
    req.on('end', () => { try { resolve(parts.length ? JSON.parse(Buffer.concat(parts).toString('utf8')) : {}); } catch (e) { reject(e); } });
    req.on('error', reject);
  });
}

// Tout ce qui arrive du navigateur est vérifié : on ne fait jamais confiance à ce qu'on reçoit.
const PSEUDO = /^[A-Za-z0-9_-]{3,16}$/;
const SPECIES = /^[A-Za-z_]{1,20}$/;
function int(v, min, max) { v = Math.floor(Number(v)); return Number.isFinite(v) ? Math.max(min, Math.min(max, v)) : min; }
function cleanMonster(m) {
  m = (m && typeof m === 'object') ? m : {};
  return {
    name: String(m.name || '').replace(/[\u0000-\u001f<>]/g, '').slice(0, 12),
    species: SPECIES.test(m.species) ? m.species : 'peluche',
    color: int(m.color, 0, 9), hue: int(m.hue, 0, 7), level: int(m.level, 1, 50),
  };
}
// La semaine en cours, au format 2026-W48. Le classement de la semaine repart à zéro chaque lundi.
function isoWeek(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return d.getUTCFullYear() + '-W' + String(Math.ceil(((d - yearStart) / 864e5 + 1) / 7)).padStart(2, '0');
}
function publicMe(u) {
  return {
    pseudo: u.pseudo,
    friends: u.friends.map((k) => db.users[k]).filter(Boolean).map((f) => ({ pseudo: f.pseudo, monster: f.monster })),
    incoming: u.reqIn.map((k) => db.users[k]).filter(Boolean).map((f) => f.pseudo),
    outgoing: u.reqOut.map((k) => db.users[k]).filter(Boolean).map((f) => f.pseudo),
  };
}
function drop(list, key) { const i = list.indexOf(key); if (i >= 0) list.splice(i, 1); }

// ---------------------------------------------------------------------------------------------
// Les adresses de l'API
// ---------------------------------------------------------------------------------------------
async function api(req, res, url) {
  if (tooMany(req, 'api', 240, 1)) return sendJson(res, 429, { error: 'Trop de demandes, attends un peu.' });
  // Une demande qui modifie quelque chose doit venir de notre propre site.
  if (req.method === 'POST') {
    const origin = req.headers.origin;
    if (origin) { try { if (new URL(origin).host !== req.headers.host) return sendJson(res, 403, { error: 'Demande refusée.' }); } catch (e) { return sendJson(res, 403, { error: 'Demande refusée.' }); } }
    if (!String(req.headers['content-type'] || '').startsWith('application/json')) return sendJson(res, 415, { error: 'Format non accepté.' });
  }
  let body = {};
  if (req.method === 'POST') { try { body = await readBody(req); } catch (e) { return sendJson(res, 400, { error: 'Demande illisible.' }); } }
  if (!body || typeof body !== 'object') body = {};
  const me = currentUser(req);
  const route = req.method + ' ' + url;

  if (route === 'GET /api/me') return sendJson(res, 200, { me: me ? publicMe(me) : null });

  if (route === 'POST /api/signup') {
    if (tooMany(req, 'auth', 12, 10)) return sendJson(res, 429, { error: 'Trop d\'essais. Réessaie dans quelques minutes.' });
    const pseudo = String(body.pseudo || ''), password = String(body.password || '');
    if (!PSEUDO.test(pseudo)) return sendJson(res, 400, { error: 'Le pseudo doit faire 3 à 16 caractères : lettres, chiffres, tiret ou tiret bas.' });
    if (password.length < 6 || password.length > 72) return sendJson(res, 400, { error: 'Le mot de passe doit faire au moins 6 caractères.' });
    const key = pseudo.toLowerCase();
    if (db.users[key]) return sendJson(res, 409, { error: 'Ce pseudo est déjà pris.' });
    const salt = crypto.randomBytes(16).toString('hex');
    db.users[key] = { pseudo, salt, hash: hashPassword(password, salt), created: Date.now(), friends: [], reqIn: [], reqOut: [], monster: cleanMonster(body.monster), week: '', weekPts: 0, best: 0 };
    openSession(res, req, key); saveDb();
    return sendJson(res, 200, { me: publicMe(db.users[key]) });
  }

  if (route === 'POST /api/login') {
    if (tooMany(req, 'auth', 12, 10)) return sendJson(res, 429, { error: 'Trop d\'essais. Réessaie dans quelques minutes.' });
    const key = String(body.pseudo || '').toLowerCase(), user = db.users[key];
    // Le même message dans les deux cas : on ne dit pas si c'est le pseudo ou le mot de passe qui est faux.
    if (!user || !checkPassword(user, String(body.password || ''))) return sendJson(res, 401, { error: 'Pseudo ou mot de passe incorrect.' });
    openSession(res, req, key); saveDb();
    return sendJson(res, 200, { me: publicMe(user) });
  }

  if (route === 'POST /api/logout') {
    const token = readCookie(req, 'fl_session');
    if (token) { delete db.sessions[sha(token)]; saveDb(); }
    res.setHeader('Set-Cookie', 'fl_session=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0');
    return sendJson(res, 200, { me: null });
  }

  // À partir d'ici, il faut être connecté.
  if (!me) return sendJson(res, 401, { error: 'Il faut être connecté.' });
  const myKey = me.pseudo.toLowerCase();

  if (route === 'POST /api/score') {
    // On n'envoie que des scores et l'apparence du monstre : jamais les heures de sommeil ou d'écran.
    me.monster = cleanMonster(body.monster);
    me.best = Math.max(me.best || 0, int(body.best, 0, 200000));
    const week = isoWeek(new Date());
    if (body.week === week) { me.week = week; me.weekPts = int(body.weekPts, 0, 6300); }
    saveDb();
    return sendJson(res, 200, { ok: true });
  }

  if (route === 'GET /api/leaderboard') {
    const q = new URL(req.url, 'http://x').searchParams;
    const kind = q.get('kind') === 'run' ? 'run' : 'week', scope = q.get('scope') === 'friends' ? 'friends' : 'world';
    const week = isoWeek(new Date());
    let list = scope === 'friends' ? [myKey].concat(me.friends).map((k) => db.users[k]).filter(Boolean) : Object.values(db.users);
    list = list.map((u) => ({ pseudo: u.pseudo, monster: u.monster, score: kind === 'run' ? (u.best || 0) : (u.week === week ? u.weekPts : 0), me: u === me }))
      .filter((r) => r.score > 0 || r.me)
      .sort((a, b) => b.score - a.score || a.pseudo.localeCompare(b.pseudo));
    list.forEach((r, i) => { r.rank = i + 1; });
    const top = list.slice(0, 50), mine = list.find((r) => r.me);
    if (mine && mine.rank > 50) top.push(mine);
    return sendJson(res, 200, { kind, scope, week, total: list.length, rows: top });
  }

  if (route === 'POST /api/friends/add') {
    const key = String(body.pseudo || '').toLowerCase(), other = db.users[key];
    if (!other) return sendJson(res, 404, { error: 'Aucun joueur ne porte ce pseudo.' });
    if (key === myKey) return sendJson(res, 400, { error: 'Tu ne peux pas t\'ajouter toi-même.' });
    if (me.friends.includes(key)) return sendJson(res, 200, { me: publicMe(me), info: 'Vous êtes déjà amis.' });
    if (me.friends.length >= 100 || me.reqOut.length >= 50) return sendJson(res, 400, { error: 'Tu as atteint la limite d\'amis.' });
    let info = 'Demande envoyée à ' + other.pseudo + '.';
    if (me.reqIn.includes(key)) {              // l'autre m'avait déjà demandé : on devient amis tout de suite
      drop(me.reqIn, key); drop(other.reqOut, myKey); me.friends.push(key); other.friends.push(myKey); info = 'Vous êtes maintenant amis !';
    } else if (!me.reqOut.includes(key)) {
      if (other.reqIn.length >= 50) return sendJson(res, 400, { error: 'Ce joueur a trop de demandes en attente.' });
      me.reqOut.push(key); other.reqIn.push(myKey);
    }
    saveDb();
    return sendJson(res, 200, { me: publicMe(me), info });
  }

  if (route === 'POST /api/friends/accept') {
    const key = String(body.pseudo || '').toLowerCase(), other = db.users[key];
    if (!other || !me.reqIn.includes(key)) return sendJson(res, 404, { error: 'Cette demande n\'existe plus.' });
    drop(me.reqIn, key); drop(other.reqOut, myKey);
    if (!me.friends.includes(key)) me.friends.push(key);
    if (!other.friends.includes(myKey)) other.friends.push(myKey);
    saveDb();
    return sendJson(res, 200, { me: publicMe(me) });
  }

  if (route === 'POST /api/friends/remove') {    // retirer un ami, refuser une demande ou annuler la sienne
    const key = String(body.pseudo || '').toLowerCase(), other = db.users[key];
    [me.friends, me.reqIn, me.reqOut].forEach((l) => drop(l, key));
    if (other) [other.friends, other.reqIn, other.reqOut].forEach((l) => drop(l, myKey));
    saveDb();
    return sendJson(res, 200, { me: publicMe(me) });
  }

  if (route === 'POST /api/account/delete') {
    // Chacun a le droit de faire effacer ses données. On redemande le mot de passe par sécurité.
    if (!checkPassword(me, String(body.password || ''))) return sendJson(res, 401, { error: 'Mot de passe incorrect.' });
    for (const u of Object.values(db.users)) [u.friends, u.reqIn, u.reqOut].forEach((l) => drop(l, myKey));
    for (const k of Object.keys(db.sessions)) if (db.sessions[k].u === myKey) delete db.sessions[k];
    delete db.users[myKey];
    saveDb();
    res.setHeader('Set-Cookie', 'fl_session=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0');
    return sendJson(res, 200, { me: null });
  }

  return sendJson(res, 404, { error: 'Adresse inconnue.' });
}

// ---------------------------------------------------------------------------------------------
// Les fichiers du jeu
// ---------------------------------------------------------------------------------------------
function send(res, status, type, body) {
  res.writeHead(status, { 'Content-Type': type, 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'same-origin' });
  res.end(body);
}

const server = http.createServer((req, res) => {
  let url;
  try {
    url = decodeURIComponent(req.url.split('?')[0]);
  } catch (e) {
    return send(res, 400, 'text/plain; charset=utf-8', 'Adresse invalide');
  }

  // Une adresse pour vérifier que le serveur est vivant.
  if (url === '/health') return send(res, 200, 'text/plain; charset=utf-8', 'ok');

  if (url.startsWith('/api/')) {
    return api(req, res, url).catch((e) => { console.error(e); if (!res.headersSent) sendJson(res, 500, { error: 'Erreur du serveur.' }); });
  }
  if (req.method !== 'GET' && req.method !== 'HEAD') return send(res, 405, 'text/plain; charset=utf-8', 'Méthode non autorisée');

  // La bibliothèque 3D et son lecteur de modèles, installés par "npm install".
  const VENDOR = { '/vendor/three.min.js': THREE, '/vendor/GLTFLoader.js': GLTF_LOADER };
  const file = VENDOR[url] || path.join(PUBLIC, url === '/' ? 'index.html' : url);

  // Sécurité : on ne sert jamais un fichier en dehors du dossier "public".
  if (!VENDOR[url] && !file.startsWith(PUBLIC + path.sep)) {
    return send(res, 403, 'text/plain; charset=utf-8', 'Interdit');
  }

  fs.readFile(file, (err, data) => {
    if (err) return send(res, 404, 'text/plain; charset=utf-8', 'Page introuvable');
    send(res, 200, TYPES[path.extname(file)] || 'application/octet-stream', data);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('FormiLife tourne sur le port ' + PORT + ' (données dans ' + DATA_DIR + ')');
});
