/// Inhalte der Produktseite Instinct Scoring (Stand 1.0.1, 04.08.2026).
window.PRODUKT_DATEN = {
  app: "instinct", seite: "instinct-scoring", stil: "b-grass",
  symbol: "bilder/marke/app-instinct.webp",
  bilder: [
    { datei: "bilder/app/instinct-1-start.webp", b: 540, h: 1170 },
    { datei: "bilder/app/instinct-2-ziel.webp", b: 540, h: 1170 },
    { datei: "bilder/app/instinct-3-statistik.webp", b: 540, h: 1170 }
  ],
  de: {
    fakten: ["Fünf Wertungssysteme", "Komplett offline", "Werten bleibt gratis"],
    blickSatz: "Die Scoring-App für traditionelles und instinktives Bogenschießen auf 3D- und Feldparcours — sie ersetzt den Papierzettel.",
    vorteile: [
      { symbol: "ziel", titel: "Ein Tipp je Treffer", text: "Trefferzone antippen, die App rechnet die Punkte im gewählten Wertungssystem aus." },
      { symbol: "offline", titel: "Komplett offline", text: "Alles bleibt auf dem Gerät, ohne Werbung und ohne Tracking — im Wald wie zu Hause." },
      { symbol: "telefon", titel: "Gebaut für draußen", text: "Große Tasten für Kill, Körper und Vorbei, gut zu treffen auch mit Handschuh." },
      { symbol: "schild", titel: "Der Schütze entscheidet", text: "Die App bewertet und korrigiert nichts. Abgeschlossene Runden bleiben unverändert." }
    ],
    erlebnis: { titel: "Fünf Wertungssysteme, eine Scheibe", kurz: "Scheibe", text: "Tipp auf eine Zone — du siehst sofort, was sie in jedem System zählt. Genau diese Umrechnung nimmt dir die App im Parcours ab." },
    galerie: { text: "Aufnahmen aus der laufenden App, im Dunkelmodus.", bilder: [
      { titel: "Die Startseite", text: "Neue Runde, Profil, Spine-Rechner und Statistik — der grüne Knopf führt direkt zur Runde." },
      { titel: "Ziel für Ziel", text: "Entfernung, Pflock und Steigung oben, darunter das Zielfoto und die großen Trefferzonen." },
      { titel: "Die Statistik", text: "Punkteschnitt, Trefferquote je Zone und Rekord, filterbar nach Schütze, Zuggewicht und Modus." }
    ] },
    funktionen: [
      { gruppe: "Runde", symbol: "ziel", liste: [
        { symbol: "ziel", name: "Fünf Wertungssysteme", text: "IFAA Hunter, IFAA Animal, Scheibe, WA 3D und Freizeit 3D, je mit wählbarer Variante." },
        { symbol: "wiederholen", name: "Training oder Turnier", text: "Der Modus ist ein Schalter; die Statistik trennt beides auf Wunsch." },
        { symbol: "gruppe", name: "Mehrere Schützen", text: "Gruppen und Teams in derselben Runde, jeder mit eigener Farbe und eigenem Symbol." },
        { symbol: "duell", name: "Duell-Modus", text: "Teams treten gegeneinander an, ihre Punkte werden zusammengezählt (Premium+)." },
        { symbol: "pokal", name: "Zwischenstand und Podium", text: "Rangliste mitten in der Runde, am Ende die Plätze eins bis drei mit allen Kennzahlen." },
        { symbol: "uhr", name: "Unterbrechen und fortsetzen", text: "Eine laufende Runde lässt sich jederzeit später weiterspielen." }
      ] },
      { gruppe: "Parcours und Ausrüstung", symbol: "ort", liste: [
        { symbol: "ort", name: "Eigene Parcours", text: "Jedes Ziel mit Tiermotiv, Entfernung, Pflock und Steigung — einmal angelegt, immer in der Runde." },
        { symbol: "kamera", name: "Foto je Ziel", text: "Das Zielfoto direkt aus der App aufnehmen." },
        { symbol: "suche", name: "Parcours-Suche", text: "Parcours in der Nähe nach Postleitzahl und Umkreis finden (Premium+)." },
        { symbol: "pfeil", name: "Bögen und Pfeilsetups", text: "Typ, Zuggewicht, Standhöhe und Tiller, dazu Schaft, Spine, Länge, FOC, Befiederung und Spitze." },
        { symbol: "stapel", name: "Ausrüstung je Runde", text: "Die Ausrüstung wird je Runde festgehalten — die Historie stimmt auch nach einem Umbau." },
        { symbol: "rechner", name: "Spine-Rechner", text: "Empfiehlt den passenden Holzspine in Pfund und Carbonspine als Zahl und übernimmt ihn als Pfeilsetup (Premium)." }
      ] },
      { gruppe: "Statistik", symbol: "diagramm", liste: [
        { symbol: "diagramm", name: "Schnitt und Trefferquote", text: "Punkteschnitt, Trefferquote je Zone, Runden, Ziele, Pfeile und dein Rekord." },
        { symbol: "kurve", name: "Punkteverlauf", text: "Deine Punkte über die Zeit als Liniendiagramm." },
        { symbol: "hoch", name: "Zuggewicht-Vergleich", text: "Mit welcher Bogenstärke du tatsächlich besser triffst." },
        { symbol: "stern", name: "Nach Tierart", text: "Der Punkteschnitt je Tiermotiv zeigt, welche Ziele dir liegen." },
        { symbol: "gruppe", name: "Duelle und Teams", text: "Eigene Auswertung, wenn ihr in Gruppen oder gegeneinander schießt." },
        { symbol: "export", name: "Export als CSV", text: "Die Statistik als Tabelle ausgeben (Premium+)." }
      ] },
      { gruppe: "Daten und Turniere", symbol: "schild", liste: [
        { symbol: "offline", name: "Ohne Internet", text: "Werten, Parcours und Statistik laufen ohne Netz; das Profil liegt nur auf dem Gerät." },
        { symbol: "download", name: "Backup als Datei", text: "Vollständige Sicherung mit Prüfsumme, jederzeit wieder einspielbar." },
        { symbol: "teilen", name: "Bericht als PDF", text: "Den Rundenbericht als PDF teilen." },
        { symbol: "kalender", name: "Turniere", text: "Termine aus einer Turnierliste verfolgen und eigene Turniere anlegen (Premium)." },
        { symbol: "globus", name: "Deutsch und Englisch", text: "Die Sprache lässt sich in den Einstellungen wechseln." }
      ] }
    ],
    schritte: [
      { titel: "Runde einrichten", text: "Wertungssystem, Modus, Schützen und Parcours wählen — alles auf einer Seite." },
      { titel: "Ziel für Ziel werten", text: "Trefferzone antippen, weiter zum nächsten Ziel. Die Punkte rechnet die App." },
      { titel: "Auswerten", text: "Podium am Ende, alles Weitere in der Statistik und im Bericht als PDF." }
    ],
    neu: { version: "1.0.1 (App Store)", datum: "04.08.2026", punkte: [
      "Weißes App-Symbol als Standard",
      "Das App-Symbol lässt sich jetzt auch auf dem iPhone wechseln",
      "Die Datensicherung sitzt direkt im Profil unter den Profil-Einstellungen",
      "Kleinere Verbesserungen an den Einstellungen"
    ] },
    preise: {
      satz: "Runden schießen und werten bleibt dauerhaft kostenlos. Premium+ lässt sich einmalig sieben Tage gratis testen — ohne Zahlung und ohne Abo.",
      karten: [
        { name: "Gratis", preis: "0 €", zusatz: "für immer", punkte: ["Spielen und Runden komplett", "3 Schützen, je 1 Bogen und Setup", "Historie: letzte Runde", "Backup erstellen, Name ändern", "Eigene Parcours anlegen"] },
        { name: "Premium", preis: "1,99 €", zusatz: "je 4 Wochen · oder 19,99 € im Jahr", punkte: ["Unbegrenzt Schützen und Gruppen", "Statistik komplett, Profil, Turniere", "Mehrere Bögen und Setups, Equipment ändern", "Löschen, Backup einspielen", "Spine-Rechner (1 Pfeil-Profil)", "Historie: letzte 3 Runden", "7 Farben und 10 Symbole"] },
        { name: "Premium+", preis: "2,99 €", zusatz: "je 4 Wochen · oder 29,99 € im Jahr", punkte: ["Alles aus Premium", "Duell-Modus", "Volle Historie", "Parcours-Suche (PLZ und Umkreis)", "Alle 30 Farben und 30 Symbole", "Spine-Profile speichern und vergleichen", "Statistik-Export (CSV)", "Turnier-Ergebnisliste teilen", "App-Symbol wechseln"] }
      ],
      fuss: "Alle Preise inkl. MwSt. Das Abo verlängert sich automatisch und ist jederzeit über den App Store bzw. Google Play kündbar."
    },
    fragen: [
      { frage: "Was kostet Instinct Scoring?", antwort: "Die App ist gratis, und Runden werten bleibt kostenlos. Premium kostet 1,99 € je 4 Wochen, Premium+ 2,99 € — im Jahr 19,99 € bzw. 29,99 €." },
      { frage: "Brauche ich Internet oder ein Konto?", antwort: "Nein. Die App läuft komplett offline; das Profil liegt nur auf deinem Gerät. Für ein anderes Gerät gibt es die Sicherungsdatei." },
      { frage: "Welche Wertungen kennt die App?", antwort: "IFAA Hunter und Animal mit 20/16/12, WA 3D mit 11/10/8/5, dazu „Scheibe“ und „Freizeit 3D“. Die beiden letzten sind Vereinsvarianten, keine Verbandsregeln." },
      { frage: "Kann die App nach DSB-Regeln werten?", antwort: "Noch nicht in der Store-Fassung. Eine Fassung für den Wettkampf nach der DSB-Sportordnung entsteht — mit Klassen aus dem Jahrgang, Turnierleitung, gesperrten Passen und Übergabe per QR-Code." },
      { frage: "Wer steckt hinter der App?", antwort: "Instinct Scoring entsteht in Kooperation von Bogensport Instinct und FaNiCa Fun — entwickelt von Bogenschützen für Bogenschützen." }
    ],
    abschluss: { titel: "Dein Parcours. Deine Leistung. Dein Fortschritt.", text: "Der Schütze entscheidet. Die App dokumentiert.", stand: "Im App Store erhältlich — bei Google Play noch im Test." }
  },
  en: {
    fakten: ["Five scoring systems", "Fully offline", "Scoring stays free"],
    blickSatz: "The scoring app for traditional and instinctive archery on 3D and field courses — it replaces the paper sheet.",
    vorteile: [
      { symbol: "ziel", titel: "One tap per hit", text: "Tap the hit zone; the app works out the points in the chosen scoring system." },
      { symbol: "offline", titel: "Fully offline", text: "Everything stays on the device, without ads or tracking — in the woods as at home." },
      { symbol: "telefon", titel: "Built for outdoors", text: "Large buttons for kill, body and miss, easy to hit even with a glove." },
      { symbol: "schild", titel: "The archer decides", text: "The app neither judges nor corrects. Finished rounds stay unchanged." }
    ],
    erlebnis: { titel: "Five scoring systems, one target", kurz: "Target", text: "Tap a zone and see at once what it counts in every system. That is exactly the conversion the app does for you on the course." },
    galerie: { text: "Screens from the running app, in dark mode.", bilder: [
      { titel: "The home screen", text: "New round, profile, spine calculator and statistics — the green button leads straight to the round." },
      { titel: "Target by target", text: "Distance, peg and slope at the top, below them the target photo and the large hit zones." },
      { titel: "The statistics", text: "Average score, hit rate per zone and record, filtered by archer, draw weight and mode." }
    ] },
    funktionen: [
      { gruppe: "Round", symbol: "ziel", liste: [
        { symbol: "ziel", name: "Five scoring systems", text: "IFAA Hunter, IFAA Animal, target face, WA 3D and leisure 3D, each with a choice of variant." },
        { symbol: "wiederholen", name: "Training or tournament", text: "The mode is a switch; the statistics can keep the two apart." },
        { symbol: "gruppe", name: "Several archers", text: "Groups and teams in the same round, each with their own colour and symbol." },
        { symbol: "duell", name: "Duel mode", text: "Teams compete against each other, their points are added up (Premium+)." },
        { symbol: "pokal", name: "Interim score and podium", text: "Ranking in the middle of the round, places one to three with all figures at the end." },
        { symbol: "uhr", name: "Pause and resume", text: "A running round can be continued later at any time." }
      ] },
      { gruppe: "Courses and gear", symbol: "ort", liste: [
        { symbol: "ort", name: "Your own courses", text: "Every target with animal, distance, peg and slope — set up once, always in the round." },
        { symbol: "kamera", name: "Photo per target", text: "Take the target photo straight from the app." },
        { symbol: "suche", name: "Course search", text: "Find courses nearby by postcode and radius (Premium+)." },
        { symbol: "pfeil", name: "Bows and arrow setups", text: "Type, draw weight, brace height and tiller, plus shaft, spine, length, FOC, fletching and point." },
        { symbol: "stapel", name: "Gear per round", text: "The gear is recorded for each round — the history stays right even after a change." },
        { symbol: "rechner", name: "Spine calculator", text: "Recommends the matching wood spine in pounds and carbon spine as a number and saves it as an arrow setup (Premium)." }
      ] },
      { gruppe: "Statistics", symbol: "diagramm", liste: [
        { symbol: "diagramm", name: "Average and hit rate", text: "Average score, hit rate per zone, rounds, targets, arrows and your record." },
        { symbol: "kurve", name: "Score history", text: "Your points over time as a line chart." },
        { symbol: "hoch", name: "Draw weight comparison", text: "Which bow weight you actually hit better with." },
        { symbol: "stern", name: "By animal", text: "The average per animal shows which targets suit you." },
        { symbol: "gruppe", name: "Duels and teams", text: "A separate analysis when you shoot in groups or against each other." },
        { symbol: "export", name: "CSV export", text: "Export the statistics as a table (Premium+)." }
      ] },
      { gruppe: "Data and tournaments", symbol: "schild", liste: [
        { symbol: "offline", name: "No internet needed", text: "Scoring, courses and statistics work without a connection; the profile stays on the device." },
        { symbol: "download", name: "Backup as a file", text: "A complete backup with checksum, restorable at any time." },
        { symbol: "teilen", name: "Report as PDF", text: "Share the round report as a PDF." },
        { symbol: "kalender", name: "Tournaments", text: "Follow dates from a tournament list and create your own tournaments (Premium)." },
        { symbol: "globus", name: "German and English", text: "Switch the language in the settings." }
      ] }
    ],
    schritte: [
      { titel: "Set up the round", text: "Pick scoring system, mode, archers and course — all on one page." },
      { titel: "Score target by target", text: "Tap the hit zone, move on to the next target. The app does the maths." },
      { titel: "Review", text: "Podium at the end, everything else in the statistics and the PDF report." }
    ],
    neu: { version: "1.0.1 (App Store)", datum: "4 Aug 2026", punkte: [
      "White app icon as the default",
      "The app icon can now be changed on the iPhone too",
      "Backup now sits directly in the profile under the profile settings",
      "Minor improvements to the settings"
    ] },
    preise: {
      satz: "Shooting and scoring rounds stays free for good. Premium+ can be tried once for seven days — no payment and no subscription.",
      karten: [
        { name: "Free", preis: "€0", zusatz: "forever", punkte: ["Full rounds and scoring", "3 archers, 1 bow and setup each", "History: last round", "Create backup, change name", "Create your own courses"] },
        { name: "Premium", preis: "€1.99", zusatz: "per 4 weeks · or €19.99 a year", punkte: ["Unlimited archers and groups", "Full statistics, profile, tournaments", "Several bows and setups, edit equipment", "Delete, restore backup", "Spine calculator (1 arrow profile)", "History: last 3 rounds", "7 colours and 10 symbols"] },
        { name: "Premium+", preis: "€2.99", zusatz: "per 4 weeks · or €29.99 a year", punkte: ["Everything in Premium", "Duel mode", "Full history", "Course search (postcode and radius)", "All 30 colours and 30 symbols", "Save and compare spine profiles", "Statistics export (CSV)", "Share tournament results", "Change app icon"] }
      ],
      fuss: "All prices incl. VAT. The subscription renews automatically and can be cancelled at any time via the App Store or Google Play."
    },
    fragen: [
      { frage: "What does Instinct Scoring cost?", antwort: "The app is free, and scoring rounds stays free. Premium costs €1.99 per 4 weeks, Premium+ €2.99 — or €19.99 and €29.99 a year." },
      { frage: "Do I need internet or an account?", antwort: "No. The app runs fully offline; the profile stays on your device only. For another device there is the backup file." },
      { frage: "Which scoring systems does it know?", antwort: "IFAA Hunter and Animal with 20/16/12, WA 3D with 11/10/8/5, plus “target face” and “leisure 3D”. The last two are club variants, not federation rules." },
      { frage: "Can the app score under DSB rules?", antwort: "Not in the store version yet. A version for competition under the DSB sports regulations is in the works — with classes from the year of birth, a tournament director role, locked ends and hand-over by QR code." },
      { frage: "Who is behind the app?", antwort: "Instinct Scoring is a cooperation between Bogensport Instinct and FaNiCa Fun — made by archers for archers." }
    ],
    abschluss: { titel: "Your course. Your performance. Your progress.", text: "The archer decides. The app documents.", stand: "Available on the App Store — still in testing on Google Play." }
  }
};
