/// Inhalte der Produktseite Grow All-In-One.
window.PRODUKT_DATEN = {
  app: "grow", seite: "grow-all-in-one", stil: "b-grass",
  symbol: "bilder/marke/app-grow.webp",
  bilder: [],
  de: {
    fakten: ["Android", "Ohne Konto", "Nur für Erwachsene"],
    blickSatz: "Ein Anbau-Tagebuch und eine Lernhilfe für Erwachsene, im Rahmen der geltenden Gesetze.",
    vorteile: [
      { symbol: "buch", titel: "Tagebuch", text: "Pflanzen, Durchgänge, Werte und Fotos an einem Ort." },
      { symbol: "kalender", titel: "Planen", text: "Wochenplan und Zielbereiche für jede Phase." },
      { symbol: "hut", titel: "Lernen", text: "Grundlagen in einem eigenen Lernteil." },
      { symbol: "schloss", titel: "Auf dem Gerät", text: "Kein Konto, die Daten bleiben auf dem Handy." }
    ],
    funktionen: [
      { gruppe: "Tagebuch", symbol: "buch", liste: [
        { symbol: "liste", name: "Einträge", text: "Pflanzen und Durchgänge mit Werten, Notizen und Fotos." },
        { symbol: "suche", name: "Diagnose", text: "Ein Regelwerk prüft Werte und Beobachtungen und nennt mögliche Ursachen." },
        { symbol: "kamera", name: "Fortschritt", text: "Fotos eines Durchgangs nebeneinander vergleichen." }
      ] },
      { gruppe: "Planen", symbol: "kalender", liste: [
        { symbol: "kalender", name: "Wochenplan", text: "Was in welcher Woche ansteht." },
        { symbol: "ziel", name: "Zielbereiche", text: "Richtwerte je Phase zum Abgleichen." },
        { symbol: "rechner", name: "Rechner", text: "Hilfen zum Nachrechnen, etwa Erde je Topf." }
      ] },
      { gruppe: "Lernen", symbol: "hut", liste: [
        { symbol: "hut", name: "Lernteil", text: "Grundlagen zu Licht, Klima, Erde und Ablauf." },
        { symbol: "werkzeug", name: "Ausrüstung", text: "Ausrüstung im Überblick, etwa Zelt und Abluft." },
        { symbol: "auge", name: "Bildanalyse (freiwillig)", text: "Nur mit eigenem Zugangsschlüssel oder eigenem Rechner im Heimnetz." }
      ] }
    ],
    schritte: [
      { titel: "Anlegen", text: "Pflanze und Durchgang eintragen." },
      { titel: "Festhalten", text: "Werte, Notizen und Fotos ergänzen." },
      { titel: "Nachlesen", text: "Plan, Diagnose und Lernteil nutzen." }
    ],
    fragen: [
      { frage: "Für wen ist die App?", antwort: "Nur für Erwachsene, im Rahmen der geltenden Gesetze. Sie dokumentiert und erklärt, sie wirbt für nichts." },
      { frage: "Wo bekomme ich sie?", antwort: "Grow All-In-One ist im Test und in keinem Store; auf dieser Seite gibt es keinen Download." },
      { frage: "Brauche ich ein Konto oder Internet?", antwort: "Kein Konto, die Daten liegen auf dem Gerät. Netz braucht nur die freiwillige Bildanalyse (mit eigenem Schlüssel bei Anthropic oder auf einem eigenen Rechner) und die Update-Prüfung bei GitHub." }
    ],
    abschluss: { titel: "Festhalten. Planen. Lernen.", text: "Nur für Erwachsene, im Rahmen der geltenden Gesetze.", stand: "Im Test — kein Store, kein Download, nichts zu kaufen." }
  },
  en: {
    fakten: ["Android", "No account", "Adults only"],
    blickSatz: "A growing diary and learning aid for adults, within the applicable laws.",
    vorteile: [
      { symbol: "buch", titel: "Diary", text: "Plants, runs, values and photos in one place." },
      { symbol: "kalender", titel: "Planning", text: "A weekly plan and target ranges for every phase." },
      { symbol: "hut", titel: "Learning", text: "The basics in a learning section of its own." },
      { symbol: "schloss", titel: "On the device", text: "No account, your data stays on the phone." }
    ],
    funktionen: [
      { gruppe: "Diary", symbol: "buch", liste: [
        { symbol: "liste", name: "Entries", text: "Plants and runs with values, notes and photos." },
        { symbol: "suche", name: "Diagnosis", text: "A rule set checks values and observations and names possible causes." },
        { symbol: "kamera", name: "Progress", text: "Compare photos of a run side by side." }
      ] },
      { gruppe: "Planning", symbol: "kalender", liste: [
        { symbol: "kalender", name: "Weekly plan", text: "What is due in which week." },
        { symbol: "ziel", name: "Target ranges", text: "Reference values per phase to compare against." },
        { symbol: "rechner", name: "Calculators", text: "Helpers for the maths, such as soil per pot." }
      ] },
      { gruppe: "Learning", symbol: "hut", liste: [
        { symbol: "hut", name: "Learning section", text: "Basics on light, climate, soil and the process." },
        { symbol: "werkzeug", name: "Equipment", text: "Equipment at a glance, such as tent and exhaust." },
        { symbol: "auge", name: "Image analysis (optional)", text: "Only with your own access key or your own computer on the home network." }
      ] }
    ],
    schritte: [
      { titel: "Create", text: "Enter the plant and the run." },
      { titel: "Record", text: "Add values, notes and photos." },
      { titel: "Look up", text: "Use the plan, the diagnosis and the learning section." }
    ],
    fragen: [
      { frage: "Who is the app for?", antwort: "Adults only, within the applicable laws. It records and explains; it promotes nothing." },
      { frage: "Where can I get it?", antwort: "Grow All-In-One is in testing and in no store; there is no download on this site." },
      { frage: "Do I need an account or internet?", antwort: "No account, the data stays on the device. A connection is only needed for the optional image analysis (with your own key at Anthropic or on your own computer) and the update check at GitHub." }
    ],
    abschluss: { titel: "Record. Plan. Learn.", text: "Adults only, within the applicable laws.", stand: "In testing — no store, no download, nothing to buy." }
  }
};
