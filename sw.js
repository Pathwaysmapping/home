/* Pathways Mapping Nigeria Limited — Progressive Web App Service Worker */
const CACHE_NAME = 'pathways-mapping-v2.3.0';

const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/about.html',
  '/services.html',
  '/projects.html',
  '/training.html',
  '/contact.html',
  '/assets/css/style.css',
  '/assets/js/main.js',
  '/manifest.webmanifest',
  '/assets/img/logo.png',
  '/assets/img/favicon.png',
  '/assets/img/icon-192.png',
  '/assets/img/icon-512.png',
  '/assets/img/equipment-rtk.jpg',
  '/assets/img/profile-bayode.jpg',
  '/assets/img/project-aviation-hangar.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Ignore non-GET and API endpoints
  if (req.method !== 'GET' || url.pathname.startsWith('/api/')) {
    return;
  }

  // Navigation requests (HTML pages): Network-first with Cache fallback
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((networkRes) => {
          if (networkRes.ok) {
            const copy = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return networkRes;
        })
        .catch(async () => {
          const cached = await caches.match(req);
          if (cached) return cached;
          const fallback = await caches.match('/index.html');
          return fallback || new Response('You are currently offline. Please reconnect to load new pages.', {
            headers: { 'Content-Type': 'text/html' }
          });
        })
    );
    return;
  }

  // Static Assets (CSS, JS, Images, Fonts): Stale-while-revalidate / Cache-first
  event.respondWith(
    caches.match(req).then((cached) => {
      const fetchPromise = fetch(req)
        .then((networkRes) => {
          if (networkRes.ok) {
            const copy = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return networkRes;
        })
        .catch(() => cached);

      return cached || fetchPromise;
    })
  );
});
