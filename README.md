# Sentieri nell’Arte – Mappa interattiva per il Baldo Festival

Mappa web interattiva che visualizza il sentiero artistico del **Baldo Festival** (Caprino Veronese). Realizzata con **Leaflet** e **Mappa Bianca** (PWA base). I punti di interesse sono divisi in tre categorie (opere, servizi, punti storici) con filtri, geolocalizzazione e clustering.

## 🔗 Link alla mappa pubblicata
[https://vival18.github.io/sentieri-nellarte-map/](https://vival18.github.io/sentieri-nellarte-map/)

## 📦 Contenuto del repository

sentieri-nellarte-map/
├── index.html # Pagina principale (mappa, filtri, stili)
├── markers.json # Elenco dei punti di interesse (modificabile)
├── mappaturasentieroarte.geojson # Tracciato del sentiero (GeoJSON)
├── manifest.json # Configurazione PWA (opzionale)
├── sw.js # Service Worker per offline caching
├── screenshot.png # (anteprima, non necessaria per il funzionamento)
└── README.md # Questo file
text


## 🎨 Categorie e colori

| Categoria | Colore | Valore in `markers.json` |
|-----------|--------|---------------------------|
| Opere d’arte | Rosso (`#e31a23`) | `"tipologia": "opera"` |
| Servizi (parcheggio, info) | Blu (`#1e90ff`) | `"tipologia": "servizio"` |
| Punti storici (chiesa, lavatoio, fontana) | Arancione (`#ff8c00`) | `"tipologia": "storico"` |

## 🛠 Come modificare i dati

### Aggiungere / modificare un punto di interesse
1. Apri `markers.json` con un editor di testo.
2. Segui la struttura di un elemento esistente:
   ```json
   {
        "title": "Nome del punto",
        "lat": "45.618771",
        "lng": "10.824897",
        "tipologia": "storico",
        "excerpt": "Breve descrizione",
        "thumbnail": "https://esempio.it/foto.jpg"  // opzionale
   }

    Salva e ricarica la pagina (hard refresh: Ctrl+F5).

## Modificare il tracciato del sentiero

    Sostituisci il file mappaturasentieroarte.geojson con un nuovo GeoJSON (deve contenere una LineString o MultiLineString).

    Puoi creare/ modificare un GeoJSON con strumenti online come geojson.io.

## Cambiare colori o nomi delle categorie

    Nel file index.html, cerca le variabili colorMap e categoryNames (nella sezione <script>). Modifica i valori esadecimali o i testi.

 ## Funzionalità

    Marker cluster → raggruppa automaticamente i punti quando si zoomma.

    Filtri → pulsanti in alto a destra (Tutti, Opere, Servizi, Storici).

    Geolocalizzazione → pulsante in alto a sinistra (mostra la tua posizione sulla mappa).

    Offline → l’interfaccia e i marker restano accessibili (i tile richiedono connessione iniziale, ma possono essere cached).

    Responsive → su smartphone i controlli zoom sono nascosti, la legenda si sposta in alto, il banner “Lavori in corso” è centrato e non occupa tutta la larghezza.

    Versione inglese

## 🧪 Debug per sviluppatori

    Ottenere coordinate cliccando sulla mappa (utile per aggiungere nuovi punti):
    La mappa ha un evento click che stampa in console (F12) le coordinate nel formato [lat, lng]. L’utente finale non vede nulla.

## 📄 Licenza e crediti

    Mappa Bianca – progetto base realizzato da Vival18.

    Leaflet – libreria open source (BSD 2-Clause).

    OpenStreetMap – tile layer (© contributori OSM).

    Baldo Festival – ideatore del percorso “Sentieri nell’Arte”.

## Questa demo è un pilota gratuito in cambio di referenza e crediti. Per usi commerciali o integrazioni avanzate, contattare lo sviluppatore.

Ultimo aggiornamento: luglio 2026