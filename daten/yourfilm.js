/// Inhalte der Produktseite YourFilm (Stand 2.8.0, 26.09.2026).
window.PRODUKT_DATEN = {
  app: "yourfilm", seite: "yourfilm", stil: "b-heat",
  symbol: "bilder/marke/app-yourfilm.webp",
  bilder: [
    { datei: "bilder/app/yourfilm-start.webp", b: 540, h: 1200 },
    { datei: "bilder/app/yourfilm-sammlung.webp", b: 540, h: 1200 },
    { datei: "bilder/app/yourfilm-filmseite.webp", b: 540, h: 1200 },
    { datei: "bilder/app/yourfilm-regal.webp", b: 540, h: 1200 },
    { datei: "bilder/app/yourfilm-statistik.webp", b: 540, h: 1200 }
  ],
  de: {
    fakten: ["Android · iOS", "Ohne Konto", "Bis 40 Exemplare kostenlos"],
    blickSatz: "Eine Datenbank für die eigene DVD-, Blu-ray- und 4K-Sammlung: Barcode scannen, und die App ordnet Film, Ausgabe und dein Exemplar zu.",
    vorteile: [
      { symbol: "barcode", titel: "Scannen statt tippen", text: "Der Barcode auf der Hülle führt über einen Warenkatalog und Wikidata zum Film — jeder Vorschlag will bestätigt werden." },
      { symbol: "ebenen", titel: "Drei Ebenen", text: "Film, Veröffentlichung und Exemplar bleiben getrennt: Blu-ray, 4K und Steelbook desselben Films sind ein Eintrag." },
      { symbol: "euro", titel: "Vier getrennte Preise", text: "UVP und damaliger Ladenpreis an der Ausgabe, Kaufpreis und heutiger Wert am eigenen Stück — keiner wird aus einem anderen abgeleitet." },
      { symbol: "schloss", titel: "Ohne Konto", text: "Kein Konto, kein eigener Server: Die Sammlung liegt in einer Datenbank auf deinem Handy." }
    ],
    erlebnis: { titel: "Vom Barcode zum Regalplatz", kurz: "Scan", text: "Die App prüft die Prüfziffer und ordnet danach Film, Ausgabe und Exemplar zu — hier mit erfundenen Beispielen." },
    galerie: { text: "Fünf Aufnahmen aus Fassung 2.8.0 im Dunkelmodus. Die Filme darin sind Beispiele; die Cover zeigen den Platzhalter der App.", bilder: [
      { titel: "Die Startseite", text: "Anzahl der Filme, Exemplare und Formate, darunter Film scannen, Sammlung öffnen und Suchen — dazu Ungesehen, Verliehen, Statistik sowie Schauspieler und Regie." },
      { titel: "Die Sammlung", text: "Alle Filme als Cover-Raster mit Schnellfiltern, Formatplakette und Herz für Favoriten; oben schaltest du auf Liste, Sortierung und Filter." },
      { titel: "Die Filmseite", text: "Der Steckbrief mit Jahr, Laufzeit, Land, Freigabe und Exemplaren, mit Knöpfen für Favorit und Gesehen — darunter Handlung, Veröffentlichungen und Besetzung." },
      { titel: "Zimmer, Regal, Fach", text: "Der Reiter Regal gliedert die Sammlung nach Standort; jedes Fach zeigt seine Filme und deren Zahl. Neue Standorte legst du oben an." },
      { titel: "Auswerten", text: "Statistik mit Ausgaben und Preisvergleich zur UVP; zwei weitere Reiter bieten Filter und Suche." }
    ] },
    funktionen: [
      { gruppe: "Erfassen", symbol: "scan", liste: [
        { symbol: "barcode", name: "Barcode scannen", text: "EAN-13, EAN-8, UPC-A, UPC-E und ISBN werden erkannt und auf ihre Prüfziffer geprüft." },
        { symbol: "haken", name: "Treffer bestätigen", text: "Der Scanner zeigt immer ein Ergebnisblatt; übernommen wird nur, was du bestätigst." },
        { symbol: "stapel", name: "Dubletten melden", text: "Steht der Barcode schon in der Sammlung, wählst du: weiteres Exemplar, vorhandenen Film öffnen oder abbrechen." },
        { symbol: "kamera", name: "Hülle fotografieren", text: "Ohne Barcodetreffer führt die Erfassung durch Vorder- und Rückseite; Titel und FSK werden von der Hülle gelesen." },
        { symbol: "stift", name: "Von Hand erfassen", text: "Ohne Kamera und ohne Netz lässt sich jeder Film vollständig eintragen." },
        { symbol: "globus", name: "Filmdaten ohne Anmeldung", text: "Titel, Jahr, Laufzeit und Regie kommen aus Wikidata; ein eigener TMDb-Schlüssel ergänzt auf Wunsch Cover und Besetzung." }
      ] },
      { gruppe: "Sammlung ordnen", symbol: "regal", liste: [
        { symbol: "film", name: "Raster oder Liste", text: "Alle Filme als Cover-Raster oder Liste, mit Schnellfiltern für 4K, Blu-ray, DVD, FSK 18, Ungesehen, Steelbooks und Verliehen." },
        { symbol: "liste", name: "13 Sortierungen", text: "Nach Titel, Jahr, Kaufdatum, Kaufpreis, Bewertung, Laufzeit, Freigabe und weiteren Schlüsseln." },
        { symbol: "suche", name: "Suche über alles", text: "Ein Feld findet über Titel, Originaltitel, Schauspieler, Regie, Genre, Studio und Barcode." },
        { symbol: "haus", name: "Zimmer, Regal, Fach", text: "Ein frei verschachtelter Standort-Baum; ein Tipp auf ein Regal zeigt seine Filme samt Fächern." },
        { symbol: "herz", name: "Favoriten-Karussell", text: "Die Startseite dreht genau die Filme mit Herz, jeden in seiner eigenen Rahmenfarbe." }
      ] },
      { gruppe: "Preise und Statistik", symbol: "diagramm", liste: [
        { symbol: "euro", name: "Vier getrennte Preise", text: "UVP, damaliger Ladenpreis, Kaufpreis und heutiger Wert stehen getrennt nebeneinander." },
        { symbol: "muenze", name: "Preise automatisch", text: "UVP und damaliger Ladenpreis werden über den Barcode ermittelt — nur in Euro, sonst bleibt das Feld leer." },
        { symbol: "diagramm", name: "Statistik", text: "Ausgaben je Monat und Jahr, Vergleich mit der UVP, Formate, Genres, Altersfreigaben und Jahrzehnte." },
        { symbol: "auge", name: "Gesehen und bewertet", text: "Je Exemplar Gesehen-Haken, Datum, Bewertung und Favoriten-Herz." },
        { symbol: "export", name: "Sichern und einlesen", text: "Die ganze Sammlung als Sicherung oder CSV-Tabelle; eine Sicherung wird vor dem Einspielen geprüft." }
      ] },
      { gruppe: "Freunde und Ausleihe", symbol: "gruppe", liste: [
        { symbol: "teilen", name: "Freundescode", text: "Freunde verbinden sich per QR-Code oder Text — gibt einer den Code ein, sind beide verbunden." },
        { symbol: "regal", name: "Sammlungen ansehen", text: "Die Sammlung eines Freundes erscheint auch dann, wenn eure Apps nie gleichzeitig offen sind." },
        { symbol: "chat", name: "Ausleihe anfragen", text: "Einen Film anfragen; der Besitzer verleiht oder lehnt im Postfach ab." },
        { symbol: "glocke", name: "Benachrichtigungen", text: "Anfragen, Zusagen, Absagen und neue Freundschaften erscheinen als Hinweis und als Benachrichtigung des Telefons." },
        { symbol: "kalender", name: "Verleih festhalten", text: "An wen die Disc ging, seit wann und bis wann sie zurück sein soll." }
      ] }
    ],
    schritte: [
      { titel: "Barcode scannen", text: "Die Kamera auf die Hülle halten — oder die Ziffern von Hand eingeben, wenn der Code nicht lesbar ist." },
      { titel: "Treffer bestätigen", text: "Den Vorschlag prüfen und auf „Was hast du bezahlt?“ antworten — oder überspringen." },
      { titel: "Cover und Platz", text: "Cover fotografieren und Zimmer, Regal und Fach wählen; beides lässt sich später nachholen." }
    ],
    neu: { version: "2.8.0", datum: "26.09.2026", punkte: [
      "Ein Freundescode verbindet jetzt beide Seiten",
      "Ausleihe mit „Verleihen“ und „Ablehnen“ im Postfach",
      "Benachrichtigungen bei Anfrage, Zusage, Absage und neuer Freundschaft",
      "Das Karussell der Startseite zeigt nur noch Favoriten",
      "UVP und damaliger Ladenpreis kommen automatisch über den Barcode"
    ] },
    fragen: [
      { frage: "Kostet YourFilm etwas?", antwort: "Bis 40 Exemplare ist YourFilm kostenlos. Für mehr ist das Abo „YourFilm Voll“ vorbereitet, aber in noch keinem Store angelegt — zu kaufen gibt es nichts." },
      { frage: "Zählt ein Film oder eine Disc?", antwort: "Gezählt werden Exemplare, also deine Stücke. Läuft ein Abo später ab, bleiben die 40 zuerst erfassten sichtbar; Ausfuhr und Sicherung gehen immer." },
      { frage: "Brauche ich ein Konto oder einen Schlüssel?", antwort: "Nein. Die Filmdaten kommen ohne Anmeldung aus Wikidata und Wikipedia. Ein TMDb-Schlüssel ist freiwillig und wird nur auf dem Gerät gespeichert." },
      { frage: "Was, wenn der Barcode nicht gefunden wird?", antwort: "Nicht jeder Code steht im Warenkatalog. Dann führt die App durch Fotos von Vorder- und Rückseite, oder du trägst den Film von Hand ein." },
      { frage: "Wann kommt die App in die Stores?", antwort: "YourFilm ist im Test. In Google Play und im App Store steht die App noch nicht; bis dahin kann sich am Umfang noch einiges ändern." }
    ],
    abschluss: { titel: "Deine Sammlung, sauber geordnet.", text: "Vom Barcode bis zum Regalfach.", stand: "Im Test — noch in keinem Store und nichts zu kaufen." }
  },
  en: {
    fakten: ["Android · iOS", "No account", "Free up to 40 copies"],
    blickSatz: "A database for your own DVD, Blu-ray and 4K collection: scan the barcode and the app sorts out film, edition and your copy.",
    vorteile: [
      { symbol: "barcode", titel: "Scan, don’t type", text: "The barcode on the case leads through a product catalogue and Wikidata to the film — every suggestion needs your confirmation." },
      { symbol: "ebenen", titel: "Three layers", text: "Film, release and copy stay separate: Blu-ray, 4K and steelbook of the same film are one entry." },
      { symbol: "euro", titel: "Four separate prices", text: "RRP and original shop price belong to the release, purchase price and current value to your copy — none is derived from another." },
      { symbol: "schloss", titel: "No account", text: "No account, no own server: the collection lives in a database on your phone." }
    ],
    erlebnis: { titel: "From barcode to shelf", kurz: "Scan", text: "The app checks the check digit, then assigns film, release and copy — shown here with made-up examples." },
    galerie: { text: "Five captures of version 2.8.0 in dark mode. The films shown are examples; the covers show the app’s placeholder.", bilder: [
      { titel: "The home screen", text: "Number of films, copies and formats, then Scan movie, Open collection and Search — plus Not watched yet, Lent out, Statistics and Cast & crew." },
      { titel: "The collection", text: "All films as a cover grid with quick filters, format badge and a heart for favourites; the top bar switches to a list, sorting and filters." },
      { titel: "The film page", text: "The fact sheet with year, running time, country, age rating and copies, with buttons for Favorite and Watched — below it plot, releases and cast." },
      { titel: "Room, shelf, compartment", text: "The Shelf tab arranges the collection by location; each compartment shows its films and their count. New locations are added at the top." },
      { titel: "Insights", text: "Statistics with spending and a price comparison against the RRP; two more tabs offer Filter and Search." }
    ] },
    funktionen: [
      { gruppe: "Adding", symbol: "scan", liste: [
        { symbol: "barcode", name: "Scan the barcode", text: "EAN-13, EAN-8, UPC-A, UPC-E and ISBN are recognised and checked against their check digit." },
        { symbol: "haken", name: "Confirm the match", text: "The scanner always shows a result sheet; only what you confirm is taken over." },
        { symbol: "stapel", name: "Duplicates reported", text: "If the barcode is already in the collection, you choose: another copy, open the existing film or cancel." },
        { symbol: "kamera", name: "Photograph the case", text: "Without a barcode match, adding guides you through front and back; title and age rating are read from the case." },
        { symbol: "stift", name: "Enter by hand", text: "Without a camera and without a connection, every film can be entered completely." },
        { symbol: "globus", name: "Film data without sign-up", text: "Title, year, running time and director come from Wikidata; your own TMDb key adds covers and cast if you like." }
      ] },
      { gruppe: "Organising", symbol: "regal", liste: [
        { symbol: "film", name: "Grid or list", text: "All films as a cover grid or list, with quick filters for 4K, Blu-ray, DVD, rated 18, unwatched, steelbooks and on loan." },
        { symbol: "liste", name: "13 sort orders", text: "By title, year, purchase date, purchase price, rating, running time, age rating and more." },
        { symbol: "suche", name: "Search across everything", text: "One field searches title, original title, actors, director, genre, studio and barcode." },
        { symbol: "haus", name: "Room, shelf, compartment", text: "A freely nested location tree; tapping a shelf shows its films and compartments." },
        { symbol: "herz", name: "Favourites carousel", text: "The home screen spins exactly the films with a heart, each in its own frame colour." }
      ] },
      { gruppe: "Prices and statistics", symbol: "diagramm", liste: [
        { symbol: "euro", name: "Four separate prices", text: "RRP, original shop price, purchase price and current value sit side by side." },
        { symbol: "muenze", name: "Prices filled in", text: "RRP and original shop price are looked up by barcode — in euros only, otherwise the field stays empty." },
        { symbol: "diagramm", name: "Statistics", text: "Spending per month and year, comparison with the RRP, formats, genres, age ratings and decades." },
        { symbol: "auge", name: "Watched and rated", text: "Per copy a watched tick, date, rating and favourite heart." },
        { symbol: "export", name: "Back up and restore", text: "The whole collection as a backup or CSV table; a backup is checked before it is restored." }
      ] },
      { gruppe: "Friends and loans", symbol: "gruppe", liste: [
        { symbol: "teilen", name: "Friend code", text: "Friends connect by QR code or text — once one enters the code, both are connected." },
        { symbol: "regal", name: "Browse collections", text: "A friend’s collection shows up even if your apps are never open at the same time." },
        { symbol: "chat", name: "Ask to borrow", text: "Request a film; the owner lends or declines in the inbox." },
        { symbol: "glocke", name: "Notifications", text: "Requests, approvals, refusals and new friendships appear as a hint and as a phone notification." },
        { symbol: "kalender", name: "Track loans", text: "Who has the disc, since when and when it is due back." }
      ] }
    ],
    schritte: [
      { titel: "Scan the barcode", text: "Hold the camera to the case — or type the digits if the code cannot be read." },
      { titel: "Confirm the match", text: "Check the suggestion and answer “What did you pay?” — or skip it." },
      { titel: "Cover and place", text: "Photograph the cover and pick room, shelf and compartment; both can be done later." }
    ],
    neu: { version: "2.8.0", datum: "26 Sep 2026", punkte: [
      "One friend code now connects both sides",
      "Loans with “Lend” and “Decline” in the inbox",
      "Notifications for requests, approvals, refusals and new friendships",
      "The home carousel now shows favourites only",
      "RRP and original shop price are filled in by barcode"
    ] },
    fragen: [
      { frage: "Does YourFilm cost anything?", antwort: "YourFilm is free for up to 40 copies. A “YourFilm Full” subscription for more is prepared but not set up in any store yet — there is nothing to buy." },
      { frage: "Does it count films or discs?", antwort: "It counts copies, i.e. your items. If a subscription ends later, the first 40 copies stay visible; export and backup always work." },
      { frage: "Do I need an account or a key?", antwort: "No. Film data comes from Wikidata and Wikipedia without sign-up. A TMDb key is optional and stored only on the device." },
      { frage: "What if the barcode is not found?", antwort: "Not every code is in the product catalogue. The app then guides you through photos of front and back, or you enter the film by hand." },
      { frage: "When will it be in the stores?", antwort: "YourFilm is in testing and not yet on Google Play or the App Store; until then the scope may still change." }
    ],
    abschluss: { titel: "Your collection, neatly sorted.", text: "From barcode to shelf compartment.", stand: "In testing — not in any store yet and nothing to buy." }
  }
};
