const CACHE_NAME = 'sentieri-arte-v1';
const urlsToCache = [
  '/sentieri-nellarte-map/',
  '/sentieri-nellarte-map/index.html',
  // Aggiungi qui i link ai tuoi file CSS/JS se esterni, altrimenti lascia cosi per cacheare la root
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});