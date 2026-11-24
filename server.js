// Le serveur de FormiLife.
// Son travail : envoyer les fichiers du dossier "public" au navigateur.
// Il n'utilise que des outils fournis avec Node.js, rien à installer en plus.

const http = require('http');
const fs = require('fs');
const path = require('path');

// Railway choisit le port et le donne dans la variable PORT.
// Sur notre ordinateur, on utilise 3000.
const PORT = process.env.PORT || 3000;

const PUBLIC = path.join(__dirname, 'public');
const THREE = path.join(__dirname, 'node_modules', 'three', 'build', 'three.min.js');

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

function send(res, status, type, body) {
  res.writeHead(status, { 'Content-Type': type });
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

  // La bibliothèque 3D, installée par "npm install".
  let file = url === '/vendor/three.min.js' ? THREE : path.join(PUBLIC, url === '/' ? 'index.html' : url);

  // Sécurité : on ne sert jamais un fichier en dehors du dossier "public".
  if (file !== THREE && !file.startsWith(PUBLIC + path.sep)) {
    return send(res, 403, 'text/plain; charset=utf-8', 'Interdit');
  }

  fs.readFile(file, (err, data) => {
    if (err) return send(res, 404, 'text/plain; charset=utf-8', 'Page introuvable');
    send(res, 200, TYPES[path.extname(file)] || 'application/octet-stream', data);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('FormiLife tourne sur le port ' + PORT);
});
