/**
 * config.js – Configurazione personalizzabile per l'app Mappa Bianca
 * Tutte le costanti e le traduzioni sono centralizzate qui.
 */
window.APP_CONFIG = {

    // -------- MAPPA --------
    map: {
        center: [45.620474, 10.829623],
        zoom: 15,
        tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        tileAttribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    },

    // -------- CLUSTER MARKER --------
    cluster: {
        showCoverageOnHover: false,
        maxClusterRadius: 80,
        disableClusteringAtZoom: 18,
        spiderfyOnMaxZoom: false
    },

    // ============================================================
    // CATEGORIE – Unifica colore + etichette + filtri + legenda
    // Per aggiungere una categoria: aggiungi una voce in "items"
    // e (opzionale) il suo key in "order" per controllare l'ordine.
    // ============================================================
    categories: {
        // Ordine di apparizione in filtri e legenda
        order: ['opera', 'storico', 'attivita'],

        items: {
            opera: {
                color: '#e31a23',
                label: { it: 'Opere', en: 'Artworks' },
                filterLabel: { it: 'Opere', en: 'Artworks' },
                inFilter: true,
                inLegend: true
            },
            storico: {
                color: '#ff8c00',
                label: { it: 'Punti storici', en: 'Historical Sites' },
                filterLabel: { it: 'Punti Storici', en: 'Historical Sites' },
                inFilter: true,
                inLegend: true
            },
            attivita: {
                color: '#9b59b6',
                label: { it: 'Attività locali', en: 'Local businesses' },
                filterLabel: { it: 'Attività Locali', en: 'Local businesses' },
                inFilter: true,
                inLegend: true
            },
            // Categorie speciali (non filtrabili, sempre in legenda)
            parcheggio: {
                color: '#2ecc71',
                label: { it: 'Parcheggio', en: 'Parking' },
                inFilter: false,
                inLegend: true,
                alwaysInLegend: true
            },
            info: {
                color: '#1e90ff',
                label: { it: 'Info', en: 'Info' },
                inFilter: false,
                inLegend: true,
                alwaysInLegend: true
            }
        }
    },

    // ============================================================
    // ALIAS TIPOLOGIE – Normalizzazione delle "tipologia" nel JSON
    // (case-insensitive). Aggiungi qui eventuali varianti.
    // ============================================================
    typeAliases: {
        'opera': 'opera',
        'opere': 'opera',
        'storico': 'storico',
        'punti storici': 'storico',
        'parcheggio': 'parcheggio',
        'attivita': 'attivita',
        'attività locali': 'attivita',
        'info': 'info'
    },

    // -------- PERCORSI FILE --------
    paths: {
        geojson: './data/mappaturasentieroarte.geojson',
        poiData: 'data/poi.json',
        manifest: '/sentieri-nellarte-map/manifest.json',
        serviceWorker: '/sentieri-nellarte-map/sw.js',
        brochure: './assets/volantino-sentieri-arte.pdf'
    },

    // -------- COORDINATE PER SENTIERO DI FALLBACK --------
    fallbackTrail: [
        [45.618771, 10.824897],
        [45.618800, 10.825000]
    ],

    // -------- COORDINATE PUNTO INFO --------
    infoPoint: {
        lat: 45.618739,
        lng: 10.824881
    },

    // -------- OPZIONI GEOLOCALIZZAZIONE --------
    geolocation: {
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 60000
    },

    // -------- LINGUA DI DEFAULT --------
    defaultLanguage: 'it',

    // -------- FORMSPREE ID --------
    formspreeId: 'mykqqgdb',

    // -------- TRADUZIONI --------
    translations: {
        it: {
            legend: 'Legenda',
            trail: 'Sentiero',
            locate: '📍 GPS',
            locating: '📍 Ricerca...',
            noMarkers: 'ℹ️ Nessun punto d’interesse (solo sentiero)',
            offline: '⚠️ Mappa offline. Alcune funzionalità potrebbero non essere disponibili.',
            navigate: '📍 Naviga al parcheggio',
            openMaps: '📍 Apri in Google Maps',
            typeLabel: 'Tipologia',
            poi: 'Punti di interesse',
            trailLabel: 'Sentiero',
            install: '📲 Installa l\'app',
            resetTooltip: 'Torna alla vista iniziale',
            feedback: '💬 Feedback',
            feedbackTooltip: 'Valuta la mappa',
            geoError: {
                permission: 'Permesso negato. Attiva la geolocalizzazione.',
                unavailable: 'Posizione non disponibile.',
                timeout: 'Timeout della richiesta.',
                unknown: 'Errore sconosciuto.',
                notSupported: 'Il tuo browser non supporta la geolocalizzazione.'
            },
            trailNotFound: 'Sentiero GeoJSON non trovato. Verifica che "mappaturasentieroarte.geojson" sia nella cartella.',
            feedbackTitle: '💬 Il tuo feedback',
            feedbackSubtitle: 'Aiutaci a migliorare la mappa! La tua opinione è preziosa.',
            feedbackNameLabel: 'Nome (opzionale)',
            feedbackNamePlaceholder: 'Il tuo nome',
            feedbackEmailLabel: 'Email (opzionale)',
            feedbackEmailPlaceholder: 'email@esempio.it',
            feedbackRatingLabel: 'Valutazione',
            feedbackStarsLabel: 'Seleziona un voto',
            feedbackStarsLabels: ['Seleziona un voto', '★ Terribile', '★★ Scarso', '★★★ Sufficiente', '★★★★ Buono', '★★★★★ Eccellente'],
            feedbackMessageLabel: 'Suggerimenti / Commenti',
            feedbackMessagePlaceholder: 'Cosa ne pensi? Come possiamo migliorare?',
            feedbackSubmit: '📨 Invia feedback',
            feedbackSending: '⏳ Invio in corso...',
            feedbackSuccessTitle: 'Grazie per il tuo feedback!',
            feedbackSuccessText: 'La tua opinione ci aiuterà a migliorare l\'esperienza.',
            feedbackSuccessClose: 'Chiudi',
            feedbackError: '❌ Errore durante l\'invio. Riprova più tardi o contattaci direttamente.',
            feedbackAlert: 'Per favore, compila almeno un campo o dai un voto.',
            info: {
                title: 'Partenza sentiero (senso orario)',
                sections: [
                    { icon: '📏', title: 'Caratteristiche', content: 'Lunghezza: ~3.25 km (anello)\nDurata: 1 - 1.5 ore\nDifficoltà: facile\nDislivello: ~130 m' },
                ],
                contacts: { email: 'baldofestival@baldofestival.org', phone: '+39 333 582 1964' },
                brochureLabel: 'Scarica volantino'
            },
            iosInstructions: '📲 Per installare l\'app su iPhone/iPad:\n\n1. Tocca l\'icona "Condividi" (quadrato con freccia).\n2. Scorri e seleziona "Aggiungi alla schermata Home".\n3. Tocca "Aggiungi".',
            chromeInstructions: 'Apri questo link da Chrome e tocca "Installa" per aggiungere alla home.'
        },
        en: {
            legend: 'Legend',
            trail: 'Trail',
            locate: '📍 GPS',
            locating: '📍 Searching...',
            noMarkers: 'ℹ️ No points of interest (trail only)',
            offline: '⚠️ Offline map. Some features may be unavailable.',
            navigate: '📍 Navigate to parking',
            openMaps: '📍 Open in Google Maps',
            typeLabel: 'Type',
            poi: 'Points of interest',
            trailLabel: 'Trail',
            install: '📲 Install app',
            resetTooltip: 'Reset view',
            feedback: '💬 Feedback',
            feedbackTooltip: 'Rate the map',
            geoError: {
                permission: 'Permission denied. Enable geolocation.',
                unavailable: 'Position unavailable.',
                timeout: 'Request timeout.',
                unknown: 'Unknown error.',
                notSupported: 'Your browser does not support geolocation.'
            },
            trailNotFound: 'GeoJSON trail not found. Please ensure "mappaturasentieroarte.geojson" is in the folder.',
            feedbackTitle: '💬 Your feedback',
            feedbackSubtitle: 'Help us improve the map! Your opinion is valuable.',
            feedbackNameLabel: 'Name (optional)',
            feedbackNamePlaceholder: 'Your name',
            feedbackEmailLabel: 'Email (optional)',
            feedbackEmailPlaceholder: 'email@example.com',
            feedbackRatingLabel: 'Rating',
            feedbackStarsLabel: 'Select a rating',
            feedbackStarsLabels: ['Select a rating', '★ Terrible', '★★ Poor', '★★★ Average', '★★★★ Good', '★★★★★ Excellent'],
            feedbackMessageLabel: 'Suggestions / Comments',
            feedbackMessagePlaceholder: 'What do you think? How can we improve?',
            feedbackSubmit: '📨 Send feedback',
            feedbackSending: '⏳ Sending...',
            feedbackSuccessTitle: 'Thank you for your feedback!',
            feedbackSuccessText: 'Your opinion will help us improve the experience.',
            feedbackSuccessClose: 'Close',
            feedbackError: '❌ Error sending feedback. Please try again later or contact us directly.',
            feedbackAlert: 'Please fill at least one field or give a rating.',
            info: {
                title: 'Starting point (clockwise direction)',
                sections: [
                    { icon: '📏', title: 'Features', content: 'Length: ~3.25 km (loop)\nDuration: 1 - 1.5 hours\nDifficulty: easy\nElevation gain: ~130 m' },
                ],
                contacts: { email: 'baldofestival@baldofestival.org', phone: '+39 333 582 1964' },
                brochureLabel: 'Download brochure'
            },
            iosInstructions: '📲 To install the app on iPhone/iPad:\n\n1. Tap the "Share" icon (square with arrow).\n2. Scroll and select "Add to Home Screen".\n3. Tap "Add".',
            chromeInstructions: 'Open this link in Chrome and tap "Install" to add to home screen.'
        }
    }
};