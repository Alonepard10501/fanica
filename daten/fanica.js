/// Inhalte der Produktseite FaNiCa Fun (Stand 1.200.0, 27.09.2026).
window.PRODUKT_DATEN = {
  app: "fanica", seite: "fanica-fun", stil: "b-ripple",
  symbol: "bilder/marke/app-fanica.webp",
  bilder: [
    { datei: "bilder/app/fanica-start.webp", b: 540, h: 1200 },
    { datei: "bilder/app/fanica-tippen.webp", b: 540, h: 1200 },
    { datei: "bilder/app/fanica-ergebnisse.webp", b: 540, h: 1200 },
    { datei: "bilder/app/fanica-fahrerwahl.webp", b: 540, h: 1200 }
  ],
  de: {
    fakten: ["Android · iOS", "Ohne Geldeinsatz", "Bis zu zehn Spieler je Runde"],
    blickSatz: "Eine private Tipprunde für Motorsport-Freunde: Vor jedem Rennen tippt ihr die ersten Fünf — um Punkte, Trophäen und Ehre.",
    vorteile: [
      { symbol: "auge", titel: "Kein Abschreiben", text: "Die Tipps der anderen bleiben verborgen und werden erst mit dem Rennstart sichtbar." },
      { symbol: "pokal", titel: "Klare Wertung", text: "Drei Punkte für den exakten Platz, einer für den richtigen Fahrer auf falschem Platz." },
      { symbol: "gruppe", titel: "Private Runden", text: "Bis zu zehn Spieler je Runde, hinein kommt nur, wer einen Code vom Organisator hat." },
      { symbol: "sync", titel: "Ergebnis kommt selbst", text: "Die App holt Ergebnis und Startaufstellung aus öffentlichen Datenquellen und rechnet die Punkte aus." }
    ],
    erlebnis: { titel: "Das nächste Rennen und eine echte Runde", kurz: "Live", text: "Der Countdown zum nächsten Lauf und die Zahlen der Tipprunde, für die FaNiCa Fun gebaut wurde." },
    galerie: { text: "Vier Aufnahmen aus Fassung 1.200.0 im Dunkelmodus, mit einem Prüfkonto ohne echte Mitspieler.", bilder: [
      { titel: "Start und Tabelle", text: "Countdown zum Tippschluss, die Führung der Runde, deine Platzierung und darunter die Rangliste mit Trefferquote und Punkten." },
      { titel: "Dein Top-5-Tipp", text: "Fünf Fahrer in der Reihenfolge wählen; die Quali-Top-5 oder die Startaufstellung lassen sich zum Tippschluss automatisch eintragen." },
      { titel: "Die letzten Rennen", text: "Ergebnis und Qualifying des gewählten Rennens nebeneinander, darunter die Tipps der Runde und das Wochenende als PDF." },
      { titel: "Fahrerwahl in Teamfarben", text: "Die Liste zeigt jeden Fahrer in der Farbe seines Teams; ein bereits gewählter Fahrer fällt aus der Auswahl." }
    ] },
    funktionen: [
      { gruppe: "Tippen", symbol: "ziel", liste: [
        { symbol: "liste", name: "Top-5-Tipp", text: "Fünf Fahrer in der Reihenfolge wählen, in der sie ins Ziel kommen." },
        { symbol: "kalender", name: "Ab dem Qualifying", text: "Die Tippliste öffnet mit dem Qualifying — mit genau den Fahrern, die dort antreten." },
        { symbol: "stift", name: "Vorläufig oder final", text: "Vorläufig bleibt änderbar, final ist verbindlich." },
        { symbol: "haken", name: "Automatisch eintragen", text: "Ein Haken setzt zum Tippschluss die Quali-Top-5 oder die Startaufstellung als Tipp." },
        { symbol: "uhr", name: "Tippschluss", text: "Acht Stunden vor dem Rennstart ist Schluss, der Countdown zeigt die Restzeit." },
        { symbol: "glocke", name: "Erinnerungen", text: "Hinweis zum Rennwochenende und, wenn der Tipp fehlt, einen Tag und zwei Stunden vor Schluss." }
      ] },
      { gruppe: "Runde leiten", symbol: "gruppe", liste: [
        { symbol: "plus", name: "Runde gründen", text: "Wer eine Runde gründet, ist ihr Organisator." },
        { symbol: "schloss", name: "Beitritts-Code", text: "Jeder Code gilt für genau einen Mitspieler und nur einmal." },
        { symbol: "teilen", name: "Einladung teilen", text: "Den Code per Nachricht oder E-Mail verschicken." },
        { symbol: "zahnrad", name: "Spiel steuern", text: "Starten, pausieren und beenden — eine Pause verschiebt den Tippschluss um dieselbe Zeit." },
        { symbol: "rechner", name: "Eigene Punkteregeln", text: "Punkte für exakt und dabei, Zahl der Tipps und Diamant-Schwelle festlegen." },
        { symbol: "stift", name: "Tipp nachtragen", text: "Zwischen Tippschluss und Rennstart trägt der Organisator für andere nach." }
      ] },
      { gruppe: "Auswertung", symbol: "diagramm", liste: [
        { symbol: "sync", name: "Ergebnis automatisch", text: "Das amtliche Ergebnis kommt von selbst, bis dahin springt die Live-Zeitmessung ab der Zielflagge ein." },
        { symbol: "liste", name: "Tabelle mit Stechen", text: "Gleiche Punkte teilen den Platz, im letzten Rennen entscheidet das Stechen." },
        { symbol: "stern", name: "Vier Trophäen", text: "Diamant, Krone, Podest und GoldTipp — dazu der Pokal für die Plätze eins bis drei der Saison." },
        { symbol: "kurve", name: "Punkte- und Rangverlauf", text: "Zwei Diagramme über die Saison, im Querformat als Vollbild." },
        { symbol: "person", name: "Karriere", text: "Alle Saisons und Gruppen zusammen, mit Bestenliste je Jahr." },
        { symbol: "pokal", name: "Erfolge", text: "Erfolge je Strecke und gesamt in Stufen — ohne Einfluss auf die Runde." }
      ] },
      { gruppe: "Rund um die App", symbol: "telefon", liste: [
        { symbol: "chat", name: "Runden-Chat", text: "Nachrichten bleiben 14 Tage, angepinnte länger." },
        { symbol: "export", name: "Wochenende als PDF", text: "Ein Blatt mit Ergebnis, Punkten und Bestenliste zum Teilen." },
        { symbol: "monitor", name: "Widgets", text: "Rangliste oder nächstes Rennen auf dem Startbildschirm, auf Android und iPhone." },
        { symbol: "kalender", name: "Rennkalender", text: "Jedes kommende Rennen mit Countdown und Tippschluss." },
        { symbol: "download", name: "Sicherung", text: "Gruppen, Punkte und Profil überstehen eine Neuinstallation." },
        { symbol: "globus", name: "Deutsch und Englisch", text: "Die ganze App in beiden Sprachen." }
      ] }
    ],
    schritte: [
      { titel: "Profil anlegen", text: "E-Mail, Name, Spielername und Passwort — anmelden kannst du dich danach auf jedem Gerät." },
      { titel: "Runde gründen oder beitreten", text: "Eine eigene Runde gründen oder mit dem Beitritts-Code des Organisators dazukommen." },
      { titel: "Tippen und abwarten", text: "Bis acht Stunden vor dem Start tippen — Ergebnis, Punkte und Tabelle kommen von selbst." }
    ],
    neu: { version: "1.200.0", datum: "27.09.2026", punkte: [
      "Neue Einführung mit Rundgang an den echten Reitern, jederzeit über Profil › Hilfe",
      "Haken für Quali-Top-5 oder Startaufstellung: der Tipp wird zum Tippschluss eingetragen",
      "Die Tipps der anderen werden erst mit dem Rennstart sichtbar",
      "Erfolge je Strecke und gesamt, Karriere je Saison",
      "Symbol- und Schriftfarbe wählbar, Farbwähler nach Farbfamilien"
    ] },
    preise: {
      satz: "Tippen kostet nichts, dauerhaft. Premium öffnet den Rückblick.",
      karten: [
        { name: "Gratis", preis: "0 €", zusatz: "für immer", punkte: [
          "Mitspielen und tippen", "Punkte und Tabelle fortlaufend", "Aktuelles und letztes Rennen", "Gruppen, Chat und Profil"
        ] },
        { name: "Premium", preis: "1,99 €", zusatz: "je 4 Wochen · oder 14,99 € im Jahr, nur 1,15 € je 4 Wochen", punkte: [
          "Alle gefahrenen Rennen der Saison", "Saison- und Rangverlauf", "Beste Strecken und Rekorde",
          "Ewige, Saison- und Trophäen-Bestenliste", "Karriere über alle Saisons und Gruppen", "Alle 54 Spielerfarben statt 15"
        ] }
      ],
      fuss: "Ein bezahltes Jahr bleibt erhalten: Seine Historie siehst du weiter, auch wenn Premium endet. Das Abo verlängert sich automatisch und ist im Store-Konto kündbar."
    },
    fragen: [
      { frage: "Was kostet FaNiCa Fun?", antwort: "Tippen, Punkte, Tabelle und Chat sind dauerhaft kostenlos. Premium für den Rückblick kostet 1,99 € je 4 Wochen oder 14,99 € im Jahr." },
      { frage: "Wird um Geld gespielt?", antwort: "Nein. Getippt wird ohne Geldeinsatz, nur um Punkte und Trophäen. Die App ist ab 18 Jahren; Hilfe bei Glücksspielsucht gibt es unter check-dein-spiel.de." },
      { frage: "Was passiert, wenn ich einen Tipp vergesse?", antwort: "Ohne Tipp und ohne Haken gibt es für das Rennen null Punkte, Strafpunkte gibt es nicht. Erinnerungen und der Haken für Quali oder Startaufstellung helfen dabei, nichts zu verpassen." },
      { frage: "Gibt es einen Server?", antwort: "Nein. Die Geräte einer Runde tauschen sich direkt aus — öffne die App am Rennwochenende einmal, damit alles ankommt." },
      { frage: "Gehört die App zur Formel 1?", antwort: "Nein. FaNiCa Fun ist eine unabhängige Fan-App ohne Verbindung zur Formula One Group; die Rennergebnisse stammen aus öffentlichen Datenquellen." }
    ],
    abschluss: { titel: "Tippe die ersten Fünf.", text: "Die anderen siehst du erst danach." }
  },
  en: {
    fakten: ["Android · iOS", "No money involved", "Up to ten players per round"],
    blickSatz: "A private prediction game for motorsport friends: before every race you predict the top five — for points, trophies and bragging rights.",
    vorteile: [
      { symbol: "auge", titel: "No copying", text: "Everyone else’s picks stay hidden and only appear when the race starts." },
      { symbol: "pokal", titel: "Clear scoring", text: "Three points for the exact place, one for the right driver in the wrong place." },
      { symbol: "gruppe", titel: "Private rounds", text: "Up to ten players per round; only those with a code from the organizer get in." },
      { symbol: "sync", titel: "Results arrive by themselves", text: "The app fetches the result and starting grid from public data sources and works out the points." }
    ],
    erlebnis: { titel: "The next race and a real round", kurz: "Live", text: "The countdown to the next race and the numbers of the prediction round FaNiCa Fun was built for." },
    galerie: { text: "Four captures of version 1.200.0 in dark mode, from a test account without real fellow players.", bilder: [
      { titel: "Home and table", text: "Countdown to the deadline, the round’s leader, your position and below it the table with hit rate and points." },
      { titel: "Your top-five pick", text: "Choose five drivers in order; the qualifying top five or the starting grid can be entered automatically at the deadline." },
      { titel: "The latest races", text: "Result and qualifying of the chosen race side by side, below them the round’s picks and the weekend as a PDF." },
      { titel: "Driver list in team colours", text: "The list shows every driver in his team’s colour; a driver who is already picked drops out of the choice." }
    ] },
    funktionen: [
      { gruppe: "Predicting", symbol: "ziel", liste: [
        { symbol: "liste", name: "Top-five pick", text: "Choose five drivers in the order you expect them to finish." },
        { symbol: "kalender", name: "From qualifying", text: "The pick list opens with qualifying — with exactly the drivers taking part." },
        { symbol: "stift", name: "Provisional or final", text: "Provisional stays editable, final is binding." },
        { symbol: "haken", name: "Fill in automatically", text: "One tick sets the qualifying top five or the starting grid as your pick at the deadline." },
        { symbol: "uhr", name: "Deadline", text: "Picks close eight hours before the race start; the countdown shows the time left." },
        { symbol: "glocke", name: "Reminders", text: "A note for the race weekend and, if your pick is missing, one day and two hours before the deadline." }
      ] },
      { gruppe: "Running a round", symbol: "gruppe", liste: [
        { symbol: "plus", name: "Start a round", text: "Whoever starts a round is its organizer." },
        { symbol: "schloss", name: "Join code", text: "Each code is valid for exactly one player, once." },
        { symbol: "teilen", name: "Share the invite", text: "Send the code by message or e-mail." },
        { symbol: "zahnrad", name: "Control the game", text: "Start, pause and end — a pause moves the deadline by the same time." },
        { symbol: "rechner", name: "Own scoring rules", text: "Set points for exact and in the top five, the number of picks and the diamond threshold." },
        { symbol: "stift", name: "Enter picks for others", text: "Between the deadline and the race start the organizer can fill in for others." }
      ] },
      { gruppe: "Results", symbol: "diagramm", liste: [
        { symbol: "sync", name: "Automatic result", text: "The official result arrives by itself; until then live timing steps in from the chequered flag." },
        { symbol: "liste", name: "Table with tie-break", text: "Equal points share the place; in the last race the tie-break decides." },
        { symbol: "stern", name: "Four trophies", text: "Diamond, crown, podium and GoldTipp — plus the cup for places one to three of the season." },
        { symbol: "kurve", name: "Points and rank over time", text: "Two charts across the season, full screen in landscape." },
        { symbol: "person", name: "Career", text: "All seasons and groups together, with a table per year." },
        { symbol: "pokal", name: "Achievements", text: "Achievements per track and overall in tiers — with no effect on the round." }
      ] },
      { gruppe: "Around the app", symbol: "telefon", liste: [
        { symbol: "chat", name: "Round chat", text: "Messages stay for 14 days, pinned ones longer." },
        { symbol: "export", name: "Weekend as PDF", text: "One sheet with result, points and table to share." },
        { symbol: "monitor", name: "Widgets", text: "Table or next race on your home screen, on Android and iPhone." },
        { symbol: "kalender", name: "Race calendar", text: "Every upcoming race with countdown and deadline." },
        { symbol: "download", name: "Backup", text: "Groups, points and profile survive a reinstall." },
        { symbol: "globus", name: "German and English", text: "The whole app in both languages." }
      ] }
    ],
    schritte: [
      { titel: "Create your profile", text: "E-mail, name, player name and password — then you can sign in on any device." },
      { titel: "Start or join a round", text: "Start your own round or join with the organizer’s join code." },
      { titel: "Predict and wait", text: "Pick until eight hours before the start — result, points and table follow by themselves." }
    ],
    neu: { version: "1.200.0", datum: "27 Sep 2026", punkte: [
      "New introduction with a tour of the real tabs, any time via Profile › Help",
      "Tick for qualifying top five or starting grid: your pick is filled in at the deadline",
      "Everyone else’s picks only appear when the race starts",
      "Achievements per track and overall, career per season",
      "Symbol and text colour to choose, colour picker sorted by colour family"
    ] },
    preise: {
      satz: "Predicting is free, for good. Premium opens the look back.",
      karten: [
        { name: "Free", preis: "€0", zusatz: "forever", punkte: [
          "Play along and predict", "Points and table, always up to date", "Current and last race", "Groups, chat and profile"
        ] },
        { name: "Premium", preis: "€1.99", zusatz: "per 4 weeks · or €14.99 a year, just €1.15 per 4 weeks", punkte: [
          "Every race of the season so far", "Season and rank charts", "Best tracks and records",
          "All-time, season and trophy tables", "Career across all seasons and groups", "All 54 player colours instead of 15"
        ] }
      ],
      fuss: "A paid year stays yours: you keep seeing its history even after Premium ends. The subscription renews automatically and can be cancelled in your store account."
    },
    fragen: [
      { frage: "What does FaNiCa Fun cost?", antwort: "Predicting, points, table and chat are free for good. Premium for the look back costs €1.99 per 4 weeks or €14.99 a year." },
      { frage: "Is money involved?", antwort: "No. You predict without any stake, only for points and trophies. The app is rated 18+; help with gambling addiction is available at check-dein-spiel.de." },
      { frage: "What if I forget a pick?", antwort: "Without a pick and without a tick the race scores zero; there are no penalty points. Reminders and the tick for qualifying or starting grid help you not to miss one." },
      { frage: "Is there a server?", antwort: "No. The devices of a round talk to each other directly — open the app once on race weekend so everything arrives." },
      { frage: "Is the app part of Formula 1?", antwort: "No. FaNiCa Fun is an independent fan app with no connection to the Formula One Group; race results come from public data sources." }
    ],
    abschluss: { titel: "Predict the top five.", text: "You only see the others afterwards." }
  }
};
