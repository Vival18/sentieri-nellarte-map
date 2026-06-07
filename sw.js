const CACHE_NAME = 'mappa-bianca-v2';
const urlsToCache = [
  '/mappa-bianca-webapp/',
  '/mappa-bianca-webapp/index.html',
  '/mappa-bianca-webapp/markers.json',
  '/mappa-bianca-webapp/manifest.json',
  '/mappa-bianca-webapp/icon-192.png',
  '/mappa-bianca-webapp/icon-512.png',
  '/mappa-bianca-webapp/libs/leaflet.css',
  '/mappa-bianca-webapp/libs/leaflet.js',
  '/mappa-bianca-webapp/libs/MarkerCluster.css',
  '/mappa-bianca-webapp/libs/MarkerCluster.Default.css',
  '/mappa-bianca-webapp/libs/leaflet.markercluster.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => console.warn('Cache fallita per qualche risorsa', err))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );

  // ----- Geolocalizzazione -----
const locateBtn = document.getElementById('locateBtn');
let userMarker = null;  // per memorizzare il marker della posizione utente

function onLocationFound(e) {
    const lat = e.latitude;
    const lng = e.longitude;
    const radius = e.accuracy;

    // Centra la mappa sulla posizione con zoom 15
    map.setView([lat, lng], 15);

    // Se esiste già un marker utente, rimuovilo
    if (userMarker) {
        map.removeLayer(userMarker);
    }

    // Aggiungi un marker personalizzato per l'utente (icona blu)
    const userIcon = L.divIcon({
        html: `<div style="background-color: #2196f3; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 4px black;"></div>`,
        iconSize: [20, 20],
        className: 'user-marker'
    });
    userMarker = L.marker([lat, lng], { icon: userIcon })
        .addTo(map)
        .bindPopup('Sei qui').openPopup();

    // Opzionale: disegna un cerchio per l'accuratezza
    L.circle([lat, lng], { radius: radius, color: '#2196f3', weight: 1, fillOpacity: 0.1 }).addTo(map);
}

function onLocationError(e) {
    let message = '';
    switch (e.code) {
        case 1: message = 'Permesso negato. Attiva la geolocalizzazione.'; break;
        case 2: message = 'Posizione non disponibile.'; break;
        case 3: message = 'Timeout della richiesta.'; break;
        default: message = 'Errore sconosciuto.';
    }
    alert('⚠️ ' + message);
    console.error(e);
}

// Evento click sul bottone
locateBtn.addEventListener('click', () => {
    if (!navigator.geolocation) {
        alert('Il tuo browser non supporta la geolocalizzazione.');
        return;
    }
    // Mostra un indicatore di caricamento (opzionale)
    locateBtn.textContent = '📍 Ricerca...';
    locateBtn.disabled = true;
    navigator.geolocation.getCurrentPosition(
        (position) => {
            locateBtn.textContent = '📍 La mia posizione';
            locateBtn.disabled = false;
            onLocationFound({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                accuracy: position.coords.accuracy
            });
        },
        (error) => {
            locateBtn.textContent = '📍 La mia posizione';
            locateBtn.disabled = false;
            onLocationError(error);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
});
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});