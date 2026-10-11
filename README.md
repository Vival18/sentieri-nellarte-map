# Mappa Bianca – WebApp PWA per mappe interattive

**Versione:** 2.0.0  
**Autore:** Fabio Vivaldi  
**Licenza:** Commerciale - Tutti i diritti riservati

---

Mappa Bianca è una **Progressive Web App (PWA)** installabile che visualizza una mappa interattiva con marker raggruppabili (clustering), filtri per tipologia, geolocalizzazione e funzionalità offline.

I marker sono caricati da un file JSON (`data/poi.json`), facilmente esportabile dal plugin WordPress **ArchaeoMap** (o creato manualmente).

**Ideale per:** percorsi turistici, festival culturali, mappe di territorio, itinerari artistici, guide interattive.

---

## ✨ Funzionalità principali

- 🗺️ **Mappa basata su Leaflet** (OpenStreetMap) con controlli zoom personalizzati.
- 📍 **Marker colorati per tipologia** (es. Storico, Religioso, Enogastronomico, Opera, Parcheggio, Info).
- 🔍 **Clustering automatico** dei marker in base allo zoom (per una visualizzazione pulita).
- 🎛️ **Filtri dinamici** a bottoni per mostrare/nascondere marker per categoria.
- 📌 **Popup informativi sicuri** con titolo, tipologia, immagine, estratto e link a Google Maps.
- 🧭 **Geolocalizzazione** con pulsante “La mia posizione” (centra la mappa e mostra marker blu + cerchio di accuratezza).
- 🏠 **Pulsante Reset Vista** per tornare rapidamente alla visuale iniziale del sentiero.
- 💬 **Modulo Feedback integrato** con valutazione a stelle, nome, email e commenti (via Formspree).
- ℹ️ **Punto Informazioni personalizzato** con dettagli su sentiero, eventi, visite guidate e contatti.
- 🌍 **Multilingua (Italiano/Inglese)** con cambio dinamico istantaneo (senza ricaricare la pagina).
- 📴 **Offline** (dopo prima visita): interfaccia, marker e legenda funzionano senza connessione (i tile richiedono rete o caching avanzato).
- ⬇️ **Installabile** su Android/Chrome/Edge come app nativa e su iOS tramite “Aggiungi a Home”.
- ♿ **Responsive** (ottimizzato per smartphone, tablet e desktop con media query specifiche).

---

## 🚀 Come usare la webapp (per utenti finali)

La webapp è pubblicata su GitHub Pages (es. `https://vival18.github.io/mappa-bianca-webapp/`).

1. **Navigare**: zoom, click sui marker, utilizzo dei filtri in alto a destra.
2. **Geolocalizzazione**: clicca sul pulsante verde **“📍 La mia posizione”** (concedi il permesso al browser).
3. **Reset vista**: usa il pulsante **🏠** in basso a sinistra per tornare alla visuale iniziale.
4. **Feedback**: clicca su **💬 Feedback** in basso a sinistra per inviare suggerimenti o valutazioni.
5. **Cambiare lingua**: usa i pulsanti **🇮🇹 / 🇬🇧** in alto a destra (il cambio è istantaneo).
6. **Installare su telefono**:
   - **Android/Chrome**: apri la webapp → menu browser → “Installa app” (o “Aggiungi a schermata Home”).
   - **iOS/Safari**: tocca “Condividi” → “Aggiungi a Home”.
7. **Offline**: dopo aver visitato la mappa online una volta, i file principali (`index.html`, `config.js`, `data/poi.json`, librerie) restano disponibili offline. I tile delle mappe vengono cachati durante la navigazione.

---

## 🛠️ Personalizzazione (per sviluppatori)

### 1. Struttura dei file

La webapp è organizzata in modo modulare per facilitare la manutenzione e la personalizzazione:

mappa-bianca-webapp/
├── index.html # Pagina principale
├── config.js # Configurazione centralizzata (colori, percorsi, traduzioni)
├── manifest.json # PWA manifest
├── sw.js # Service Worker (per offline e installazione)
├── data/
│ ├── poi.json # Punti d'interesse (ex markers.json)
│ └── mappaturasentieroarte.geojson # Percorso/sentiero (opzionale)
├── assets/
│ ├── volantino-sentieri-arte.pdf # Brochure (opzionale)
│ └── img/ # Immagini e thumbnail
└── icons/ # Icone per la PWA (192x192, 512x512)
text


---

### 2. Cambiare i marker (file `data/poi.json`)

Il file `data/poi.json` deve contenere un array di oggetti con questa struttura:

```json
[
  {
    "title": "Forte di Rivoli",
    "title_en": "Rivoli Fortress",
    "excerpt": "Descrizione breve...",
    "excerpt_en": "Short description...",
    "content": "Descrizione completa...",
    "thumbnail": "https://example.com/thumb.jpg",
    "lat": 45.574720,
    "lng": 10.818423,
    "google_maps_url": "https://maps.google.com/?q=45.574720,10.818423",
    "tipologia": "Storico"
  }
]

Campi supportati:
Campo	Obbligatorio	Descrizione
title	✅	Titolo del punto (in italiano)
title_en	❌	Titolo in inglese (usato se lingua = 'en')
excerpt	❌	Descrizione breve (in italiano)
excerpt_en	❌	Descrizione breve in inglese
content	❌	Descrizione lunga (non usata direttamente, ma disponibile)
thumbnail	❌	URL dell'immagine (max 100px nel popup)
lat	✅	Latitudine (decimale)
lng	✅	Longitudine (decimale)
google_maps_url	❌	Link a Google Maps (appare come pulsante nel popup)
tipologia	✅	Categoria: opera, storico, parcheggio, info (o altre, ma vanno aggiunte in config.js)
3. Configurazione centralizzata (config.js)

Tutte le impostazioni personalizzabili sono raccolte in config.js:
javascript

window.APP_CONFIG = {
    map: {
        center: [45.620474, 10.829623],   // centro iniziale
        zoom: 15,
        tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        tileAttribution: '&copy; OpenStreetMap'
    },
    colors: {
        opera: '#e31a23',      // rosso
        storico: '#ff8c00',    // arancione
        parcheggio: '#2ecc71', // verde
        info: '#1e90ff'        // blu
    },
    labels: {
        it: { opera: 'Opere', storico: 'Punti storici', parcheggio: 'Parcheggio', info: 'Info' },
        en: { opera: 'Artworks', storico: 'Historical Sites', parcheggio: 'Parking', info: 'Info' }
    },
    paths: {
        geojson: './data/mappaturasentieroarte.geojson',
        poiData: 'data/poi.json',
        manifest: '/manifest.json',
        serviceWorker: '/sw.js',
        brochure: './assets/volantino-sentieri-arte.pdf'
    },
    infoPoint: { lat: 45.618739, lng: 10.824881 },
    defaultLanguage: 'it',
    formspreeId: 'mykqqgdb',   // ID del tuo form su Formspree
    translations: { /* ... */ } // Tutti i testi dell'interfaccia
};

Cosa puoi modificare:

    Colori – associa un colore a ciascuna tipologia di marker.

    Etichette – nomi visualizzati per le tipologie (in italiano e inglese).

    Percorsi – dove si trovano i file (GeoJSON, POI, manifest, service worker, brochure).

    Punto Informazioni – coordinate del marker informativo personalizzato.

    Lingua di default – 'it' o 'en'.

    Formspree ID – per ricevere i feedback via email.

    Traduzioni – tutti i testi dell'interfaccia (filtri, legenda, pulsanti, messaggi, errori, modulo feedback).

4. Gestione del sentiero (GeoJSON)

La webapp può caricare un tracciato da un file GeoJSON (es. mappaturasentieroarte.geojson).
Il tracciato viene disegnato in rosso con linea tratteggiata.

Se il file non viene trovato, la webapp usa un fallback (un piccolo segmento di prova) e mostra un toast di errore.

Formato GeoJSON richiesto:
json

{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Nome del sentiero",
        "description": "Descrizione (opzionale)"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [10.824897, 45.618771],
          [10.825000, 45.618800]
        ]
      }
    }
  ]
}

5. Modulo Feedback

Il modulo Feedback invia i dati a Formspree (gratuito, senza backend).
Per utilizzarlo, sostituisci formspreeId in config.js con il tuo ID (crea un form su formspree.io).

I campi inviati:

    Nome (opzionale)

    Email (opzionale)

    Valutazione a stelle (1-5)

    Commento / suggerimento

    Lingua corrente

    URL della pagina

    User Agent (per debug)

6. Traduzioni e multilinguismo

Tutti i testi dell'interfaccia sono centralizzati in config.js (sezione translations).
Le lingue supportate sono italiano (it) e inglese (en).

Per aggiungere una nuova lingua:

    Aggiungi un nuovo oggetto in translations (es. de per tedesco).

    Copia la struttura da it o en e traducila.

    Aggiungi un pulsante nell'HTML con data-lang="de".

7. Service Worker e offline

Il Service Worker (sw.js) permette il funzionamento offline.
Per un caching completo, puoi espandere sw.js per mettere in cache anche immagini, tile e altri asset.

Esempio minimo di sw.js:
javascript

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

Per un caching più avanzato, consulta la documentazione di Workbox.
8. SRI (Subresource Integrity)

In produzione, è consigliabile usare integrity e crossorigin per le risorse CDN (Leaflet e MarkerCluster).
Genera gli hash con srihash.org o da terminale:
bash

curl -s https://unpkg.com/leaflet@1.9.4/dist/leaflet.css | openssl dgst -sha384 -binary | openssl base64 -A

Poi sostituisci sha384-... negli attributi integrity dei tag <link> e <script> in index.html.
📦 Dipendenze

    Leaflet v1.9.4 – licenza BSD-2-Clause

    Leaflet.markercluster v1.5.3 – licenza MIT

    Formspree – servizio di backend per il modulo feedback

    Google Analytics (opzionale, ID G-6L90M4TJHC)

📄 Licenza
Software proprietario – Tutti i diritti riservati

Questo software è di proprietà di Fabio Vivaldi ed è protetto dalle leggi sul diritto d'autore e dai trattati internazionali.

Non è consentito:

    Copiare, modificare, distribuire, pubblicare, trasferire o vendere questo software o sue parti senza esplicita autorizzazione scritta dell'autore.

    Utilizzare questo software per scopi commerciali senza aver stipulato un accordo di licenza commerciale con l'autore.

    Rimuovere o alterare gli avvisi di copyright, marchi o altre note di proprietà presenti nel software.

È consentito:

    Utilizzare questo software per uso personale o interno (non commerciale) previo acquisto di una licenza.

    Utilizzare questo software come servizio (SaaS) previo accordo commerciale con l'autore.

Licenze delle librerie di terze parti

Le librerie utilizzate in questo progetto (Leaflet, Leaflet.markercluster) sono coperte da licenze open source permissive (BSD, MIT) e possono essere utilizzate liberamente secondo i loro termini. Il codice proprietario di Mappa Bianca è invece protetto da copyright e non è open source.
💼 Modello di business

Mappa Bianca è un servizio a pagamento per la creazione di mappe interattive su misura.

Offro:

    Pacchetti predefiniti (Light, Standard, Premium) con tempi di consegna e prezzi fissi.

    Personalizzazione completa della webapp (marcatori, filtri, colori, testi, sentieri).

    Installazione e configurazione su server o su GitHub Pages.

    Supporto e manutenzione post-lancio.

    Formazione per l'utilizzo e l'aggiornamento dei contenuti.

Per maggiori informazioni, prezzi e preventivi personalizzati:

    Landing page: https://vival18.github.io/mappa-bianca/

    Email: contatti.mappabianca@gmail.com

🤝 Contributi e segnalazioni

Segnalazioni di bug e suggerimenti sono benvenuti.
Apri una issue su GitHub o contatta l'autore direttamente.

Mappa Bianca – WebApp PWA per mappe interattive
Versione 2.0.0 – Luglio 2026
Copyright © 2026 Fabio Vivaldi. Tutti i diritti riservati.