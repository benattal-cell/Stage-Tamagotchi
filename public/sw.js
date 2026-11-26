/* Le « service worker » : un petit programme que le navigateur garde de côté.
   Il met le jeu en réserve pour qu'on puisse l'ouvrir sans connexion. Les comptes et les classements, eux, ont besoin d'Internet. */
const CACHE = 'formilife-v1';
const BASE = ['/', '/vendor/three.min.js', '/vendor/GLTFLoader.js', '/manifest.webmanifest', '/icon-192.png'];
self.addEventListener('install', (ev) => { self.skipWaiting(); ev.waitUntil(caches.open(CACHE).then((c) => c.addAll(BASE)).catch(() => {})); });
self.addEventListener('activate', (ev) => { ev.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (ev) => {
  const req = ev.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin || url.pathname.startsWith('/api/') || url.pathname === '/health') return;
  if (req.mode === 'navigate' || url.pathname === '/') {
    /* la page : on prend la plus récente si on a du réseau, sinon celle en réserve */
    ev.respondWith(fetch(req).then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put('/', copy)); return res; }).catch(() => caches.match('/')));
    return;
  }
  /* le reste (modèles 3D, images) ne change presque jamais : on sert la réserve, et on la remplit au premier passage */
  ev.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); } return res; })));
});
