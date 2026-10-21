/// Inhalte der Produktseite FaNiCa Fun.
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
      { symbol: "auge", titel: "Kein Abschreiben", text: "Die Tipps der anderen siehst du erst, wenn du selbst final getippt hast — ohne eigenen Tipp erst zum Rennstart." },
      { symbol: "pokal", titel: "Klare Wertung", text: "Drei Punkte für den exakten Platz, einer für den richtigen Fahrer auf falschem Platz." },
      { symbol: "gruppe", titel: "Private Runden", text: "Bis zu zehn Spieler je Runde, hinein kommt nur, wer einen Code vom Organisator hat." },
      { symbol: "sync", titel: "Ergebnis kommt selbst", text: "Die App holt Ergebnis und Startaufstellung aus öffentlichen Datenquellen und rechnet die Punkte aus." }
    ],
    erlebnis: { titel: "Das nächste Rennen und eine echte Runde", kurz: "Live", text: "Der Countdown zum nächsten Lauf und die Zahlen der Tipprunde, für die FaNiCa Fun gebaut wurde." },
    galerie: { text: "Vier Aufnahmen aus Fassung 1.200.0 im Dunkelmodus, mit einem Prüfkonto ohne echte Mitspieler.", bilder: [
      { titel: "Start und Tabelle", text: "Countdown zum Tippschluss, die Führung der Runde, deine Platzierung und darunter die Rangliste mit Trefferquote und Punkten." },
      { titel: "Dein Top-5-Tipp", text: "Fünf Fahrer in der Reihenfolge wählen; darüber die Haken, mit denen die Quali-Top-5 oder die Startaufstellung automatisch eingetragen wird." },
      { titel: "Die letzten Rennen", text: "Ergebnis und Qualifying des gewählten Rennens nebeneinander, darunter die Tipps der Runde und das Wochenende als PDF." },
      { titel: "Fahrerwahl in Teamfarben", text: "Die Liste zeigt jeden Fahrer in der Farbe seines Teams; ein bereits gewählter Fahrer fällt aus der Auswahl." }
    ] },
    funktionenSatz: "Stand 1.210 im App Store. Google Play erhält Erfolge in fünf Stufen, Triumphe, Gruppen-Erfolge, den Haken je Wochenende und die 13 Sprachen mit dem nächsten Update.",
    funktionen: [
      { gruppe: "Tippen", symbol: "ziel", liste: [
        { symbol: "liste", name: "Top-5-Tipp", text: "Fünf Fahrer in der Reihenfolge wählen, in der sie ins Ziel kommen." },
        { symbol: "kalender", name: "Ab dem Qualifying", text: "Die Tippliste öffnet mit dem Qualifying — mit genau den Fahrern, die an diesem Wochenende fahren, Ersatzfahrer eingeschlossen." },
        { symbol: "stift", name: "Nur final", text: "Ein abgeschickter Tipp ist verbindlich; wann er abgegeben wurde, sieht jeder in der Runde." },
        { symbol: "haken", name: "Automatisch eintragen", text: "Ein Haken übernimmt die Quali-Top-5 oder die Startaufstellung: Liegt sie schon vor, fragt die App, sonst trägt sie vier Stunden vor Tippschluss ein. Der Haken gilt nur für das laufende Wochenende." },
        { symbol: "uhr", name: "Tippschluss", text: "Acht Stunden vor dem Rennstart ist Schluss, der Countdown zeigt die Restzeit." },
        { symbol: "glocke", name: "Erinnerungen", text: "Zur Rennwoche, vor dem Qualifying und, wenn der Tipp fehlt, einen Tag und zwei Stunden vor Schluss — nachts von 22 bis 8 Uhr deutscher Zeit ist Ruhe." }
      ] },
      { gruppe: "Runde leiten", symbol: "gruppe", liste: [
        { symbol: "plus", name: "Runde gründen", text: "Wer eine Runde gründet, ist ihr Organisator." },
        { symbol: "schloss", name: "Beitritts-Code", text: "Jeder Code gilt für genau einen Mitspieler und nur einmal; verschickt wird er per Nachricht oder E-Mail." },
        { symbol: "zahnrad", name: "Spiel steuern", text: "Starten, pausieren und beenden — eine Pause verschiebt den Tippschluss um dieselbe Zeit." },
        { symbol: "rechner", name: "Eigene Punkteregeln", text: "Punkte für exakt und dabei und die Zahl der Tipps festlegen. Die Diamant-Schwelle ist in der Saison 2026 einstellbar, ab 2027 gibt es den Diamanten nur, wenn alle Tipps exakt sitzen." },
        { symbol: "stift", name: "Tipp nachtragen", text: "Zwischen Tippschluss und Rennstart trägt der Organisator für andere nach." },
        { symbol: "glocke", name: "Anstupsen", text: "Erinnert alle ohne finalen Tipp per Benachrichtigung, höchstens einmal pro Stunde." }
      ] },
      { gruppe: "Auswertung", symbol: "diagramm", liste: [
        { symbol: "sync", name: "Ergebnis automatisch", text: "Das amtliche Ergebnis kommt von selbst, bis dahin springt die Live-Zeitmessung ab der Zielflagge ein." },
        { symbol: "liste", name: "Tabelle mit Stechen", text: "Gleiche Punkte teilen den Platz, im letzten Rennen entscheidet das Stechen." },
        { symbol: "chat", name: "Rennbericht", text: "Nach jedem Rennen steht im Gruppenchat ein Bericht mit Ergebnis, Punkten des Tages und Tabelle; in den letzten fünf Rennen kommt dazu ein persönlicher Ausblick in die Benachrichtigungen." },
        { symbol: "pokal", name: "Vier Trophäen", text: "Diamant, Tagessieg, Podest und GoldTipp — dazu die Pokale für die Plätze eins bis drei der Saison." },
        { symbol: "kurve", name: "Punkte- und Rangverlauf", text: "Zwei Diagramme über die Saison, im Querformat als Vollbild (Premium)." },
        { symbol: "person", name: "Karriere und Rückblick", text: "Alle Saisons und Gruppen zusammen, mit Bestenliste je Jahr und dem Saison-Rückblick in Karten, die sich als Bild teilen lassen (Premium)." }
      ] },
      { gruppe: "Erfolge und Vergleich", symbol: "pokal", liste: [
        { symbol: "ebenen", name: "Erfolge in fünf Stufen", text: "Gesamt-, Strecken- und Fahrer-Erfolge von Grau bis Orange, mit Sammler-Rang — ohne Einfluss auf die Runde (Premium)." },
        { symbol: "stern", name: "Triumphe", text: "Bis zu zehn eigene Erfolge mit einem Stern markieren (Premium); alle Mitspieler sehen sie in deiner Spieler-Ansicht." },
        { symbol: "gruppe", name: "Gruppen-Erfolge", text: "Wer in der Gruppe bei den Erfolgen vorn liegt, je Saison und mit Diagrammen (Premium)." },
        { symbol: "duell", name: "Kopf-an-Kopf", text: "Zwei oder drei Spieler im direkten Vergleich, mit Saison- und Rangverlauf (Premium)." },
        { symbol: "ziel", name: "Fahrer-Trefferquote", text: "Mit welchem Fahrer du am häufigsten richtig liegst, beste Quote zuerst (Premium)." },
        { symbol: "wiederholen", name: "Was wäre wenn", text: "Nach dem eigenen finalen Tipp ein anderes Ergebnis durchspielen und die Tabelle dazu sehen — das echte bleibt unberührt (Premium)." }
      ] },
      { gruppe: "Rund um die App", symbol: "telefon", liste: [
        { symbol: "chat", name: "Chat und Nachrichtenbox", text: "Gruppennachrichten bleiben 14 Tage, angepinnte länger; die Nachrichtenbox sammelt die Einzelchats mit Mitspielern aus allen Gruppen und die Benachrichtigungen." },
        { symbol: "export", name: "Wochenende als PDF", text: "Ein Blatt mit Ergebnis, Punkten und Bestenliste zum Teilen." },
        { symbol: "monitor", name: "Widgets", text: "Rangliste oder nächstes Rennen auf dem Startbildschirm; Antippen öffnet die Bestenliste (Android)." },
        { symbol: "kalender", name: "Rennkalender", text: "Jedes kommende Rennen mit Countdown und Tippschluss; Quali, Tippschluss und Rennen lassen sich einzeln in den eigenen Kalender übernehmen." },
        { symbol: "download", name: "Sicherung", text: "Gruppen, Punkte und Profil überstehen eine Neuinstallation und ziehen mit auf ein neues Handy um." },
        { symbol: "globus", name: "13 Sprachen", text: "Deutsch, Englisch, Französisch, Spanisch, Italienisch, Portugiesisch, Niederländisch, Ungarisch, Japanisch, Chinesisch, Arabisch, Malaiisch und Aserbaidschanisch." }
      ] }
    ],
    schritte: [
      { titel: "Profil anlegen", text: "E-Mail, Name, Spielername und Passwort — anmelden kannst du dich danach auf jedem Gerät." },
      { titel: "Runde gründen oder beitreten", text: "Eine eigene Runde gründen oder mit dem Beitritts-Code des Organisators dazukommen." },
      { titel: "Tippen und abwarten", text: "Bis acht Stunden vor dem Start tippen — Ergebnis, Punkte und Tabelle kommen von selbst." }
    ],
    neu: { version: "1.210.0 (App Store)", datum: "20.10.2026", punkte: [
      "13 Sprachen: Neu installiert startet die App in der Sprache des Geräts, umstellbar im Profil unter „Sprache“",
      "Die Haken bei Qualifying und Startaufstellung bleiben leer, bis du selbst einen setzt, und gelten nur für das laufende Rennwochenende",
      "Erfolge in fünf Stufen von Grau bis Orange, mit Sammler-Rang und neuen Gesamt- und Fahrer-Erfolgen",
      "Gruppen-Erfolge je Saison: Ein Knopf unter der Bestenliste zeigt, wer in der Gruppe vorn liegt (Premium)",
      "Triumphe: bis zu zehn eigene Erfolge mit einem Stern markieren, sichtbar für alle Mitspieler (Premium)"
    ] },
    preise: {
      satz: "Tippen kostet nichts, dauerhaft. Premium öffnet den Rückblick.",
      karten: [
        { name: "Gratis", preis: "0 €", zusatz: "für immer", punkte: [
          "Mitspielen und tippen", "Punkte und Tabelle fortlaufend", "Aktuelles und letztes Rennen", "Gruppen, Chat und Profil", "Triumphe der Mitspieler ansehen"
        ] },
        { name: "Premium", preis: "1,99 €", zusatz: "je 4 Wochen · oder 14,99 € im Jahr, nur 1,15 € je 4 Wochen", punkte: [
          "Alle gefahrenen Rennen der Saison", "Saison- und Rangverlauf, Strecken und Rekorde", "Ewige, Saison- und Trophäen-Bestenliste",
          "Karriere und Erfolge über alle Saisons und Gruppen", "Gruppen-Erfolge je Saison und eigene Triumphe",
          "Kopf-an-Kopf, Fahrer-Trefferquote und Was wäre wenn", "Alle 54 Spielerfarben statt 15"
        ] }
      ],
      fuss: "Ein bezahltes Jahr bleibt erhalten: Seine Historie siehst du weiter, auch wenn Premium endet. Das Abo verlängert sich automatisch und ist im Store-Konto kündbar."
    },
    fragen: [
      { frage: "Was kostet FaNiCa Fun?", antwort: "Tippen, Punkte, Tabelle und Chat sind dauerhaft kostenlos. Premium für den Rückblick kostet 1,99 € je 4 Wochen oder 14,99 € im Jahr." },
      { frage: "Wird um Geld gespielt?", antwort: "Nein. Getippt wird ohne Geldeinsatz und ohne Gewinne, nur um Punkte und Trophäen. Gedacht ist die App ab 18 Jahren; die Store-Freigabe hängt vom Land ab, im App Store 17+. Hilfe bei Glücksspielsucht gibt es unter check-dein-spiel.de." },
      { frage: "Was passiert, wenn ich einen Tipp vergesse?", antwort: "Ohne Tipp und ohne Haken gibt es für das Rennen null Punkte, Strafpunkte gibt es nicht. Zwischen Tippschluss und Rennstart kann der Organisator deinen Tipp noch nachtragen; Erinnerungen und der Haken für Quali oder Startaufstellung helfen, nichts zu verpassen." },
      { frage: "Gibt es einen Server?", antwort: "Einen eigenen Server gibt es nicht. Die Geräte einer Runde gleichen sich über die Weiterleitungsdienste ntfy.sh und ntfy.envs.net ab — öffne die App am Rennwochenende einmal, damit alles ankommt." },
      { frage: "Gehört die App zur Formel 1?", antwort: "Nein. FaNiCa Fun ist eine unabhängige Fan-App ohne Verbindung zur Formula One Group; die Rennergebnisse stammen aus öffentlichen Datenquellen." }
    ],
    abschluss: { titel: "Tippe die ersten Fünf.", text: "Die anderen siehst du erst danach." }
  },
  en: {
    fakten: ["Android · iOS", "No money involved", "Up to ten players per round"],
    blickSatz: "A private prediction game for motorsport friends: before every race you predict the top five — for points, trophies and bragging rights.",
    vorteile: [
      { symbol: "auge", titel: "No copying", text: "You only see everyone else’s picks once you have made your own final pick — without one, not until the race starts." },
      { symbol: "pokal", titel: "Clear scoring", text: "Three points for the exact place, one for the right driver in the wrong place." },
      { symbol: "gruppe", titel: "Private rounds", text: "Up to ten players per round; only those with a code from the organizer get in." },
      { symbol: "sync", titel: "Results arrive by themselves", text: "The app fetches the result and starting grid from public data sources and works out the points." }
    ],
    erlebnis: { titel: "The next race and a real round", kurz: "Live", text: "The countdown to the next race and the numbers of the prediction round FaNiCa Fun was built for." },
    galerie: { text: "Four captures of version 1.200.0 in dark mode, from a test account without real fellow players.", bilder: [
      { titel: "Home and table", text: "Countdown to the deadline, the round’s leader, your position and below it the table with hit rate and points." },
      { titel: "Your top-five pick", text: "Choose five drivers in order; above them the ticks that fill in the qualifying top five or the starting grid automatically." },
      { titel: "The latest races", text: "Result and qualifying of the chosen race side by side, below them the round’s picks and the weekend as a PDF." },
      { titel: "Driver list in team colours", text: "The list shows every driver in his team’s colour; a driver who is already picked drops out of the choice." }
    ] },
    funktionenSatz: "As of 1.210 on the App Store. Google Play gets achievements in five tiers, triumphs, group achievements, the per-weekend tick and the 13 languages with the next update.",
    funktionen: [
      { gruppe: "Predicting", symbol: "ziel", liste: [
        { symbol: "liste", name: "Top-five pick", text: "Choose five drivers in the order you expect them to finish." },
        { symbol: "kalender", name: "From qualifying", text: "The pick list opens with qualifying — with exactly the drivers racing that weekend, reserve drivers included." },
        { symbol: "stift", name: "Final only", text: "A submitted pick is binding; everyone in the round sees when it was made." },
        { symbol: "haken", name: "Fill in automatically", text: "A tick takes over the qualifying top five or the starting grid: if it is already known the app asks, otherwise it fills in four hours before the deadline. The tick only applies to the current weekend." },
        { symbol: "uhr", name: "Deadline", text: "Picks close eight hours before the race start; the countdown shows the time left." },
        { symbol: "glocke", name: "Reminders", text: "For race week, before qualifying and, if your pick is missing, one day and two hours before the deadline — quiet from 10 pm to 8 am German time." }
      ] },
      { gruppe: "Running a round", symbol: "gruppe", liste: [
        { symbol: "plus", name: "Start a round", text: "Whoever starts a round is its organizer." },
        { symbol: "schloss", name: "Join code", text: "Each code is valid for exactly one player, once; send it by message or e-mail." },
        { symbol: "zahnrad", name: "Control the game", text: "Start, pause and end — a pause moves the deadline by the same time." },
        { symbol: "rechner", name: "Own scoring rules", text: "Set points for exact and in the top five and the number of picks. The diamond threshold can be set in the 2026 season; from 2027 a diamond needs every pick exact." },
        { symbol: "stift", name: "Enter picks for others", text: "Between the deadline and the race start the organizer can fill in for others." },
        { symbol: "glocke", name: "Nudge", text: "Reminds everyone without a final pick by notification, at most once an hour." }
      ] },
      { gruppe: "Results", symbol: "diagramm", liste: [
        { symbol: "sync", name: "Automatic result", text: "The official result arrives by itself; until then live timing steps in from the chequered flag." },
        { symbol: "liste", name: "Table with tie-break", text: "Equal points share the place; in the last race the tie-break decides." },
        { symbol: "chat", name: "Race report", text: "After every race the group chat gets a report with result, points of the day and table; in the last five races you also get a personal outlook in your notifications." },
        { symbol: "pokal", name: "Four trophies", text: "Diamond, race win, podium and GoldTipp — plus the cups for places one to three of the season." },
        { symbol: "kurve", name: "Points and rank over time", text: "Two charts across the season, full screen in landscape (Premium)." },
        { symbol: "person", name: "Career and review", text: "All seasons and groups together, with a table per year and the season review as cards you can share as images (Premium)." }
      ] },
      { gruppe: "Achievements and comparison", symbol: "pokal", liste: [
        { symbol: "ebenen", name: "Achievements in five tiers", text: "Overall, track and driver achievements from grey to orange, with a collector rank — with no effect on the round (Premium)." },
        { symbol: "stern", name: "Triumphs", text: "Mark up to ten of your achievements with a star (Premium); all players see them in your player view." },
        { symbol: "gruppe", name: "Group achievements", text: "Who leads the group in achievements, per season and with charts (Premium)." },
        { symbol: "duell", name: "Head-to-head", text: "Two or three players compared directly, with season and rank charts (Premium)." },
        { symbol: "ziel", name: "Driver hit rate", text: "Which driver you most often get right, best rate first (Premium)." },
        { symbol: "wiederholen", name: "What if", text: "After your own final pick, play through a different result and see the table for it — the real one stays untouched (Premium)." }
      ] },
      { gruppe: "Around the app", symbol: "telefon", liste: [
        { symbol: "chat", name: "Chat and inbox", text: "Group messages stay for 14 days, pinned ones longer; the inbox collects your one-to-one chats with players from all groups and the notifications." },
        { symbol: "export", name: "Weekend as PDF", text: "One sheet with result, points and table to share." },
        { symbol: "monitor", name: "Widgets", text: "Table or next race on your home screen; a tap opens the standings (Android)." },
        { symbol: "kalender", name: "Race calendar", text: "Every upcoming race with countdown and deadline; qualifying, deadline and race can each be added to your own calendar." },
        { symbol: "download", name: "Backup", text: "Groups, points and profile survive a reinstall and move with you to a new phone." },
        { symbol: "globus", name: "13 languages", text: "German, English, French, Spanish, Italian, Portuguese, Dutch, Hungarian, Japanese, Chinese, Arabic, Malay and Azerbaijani." }
      ] }
    ],
    schritte: [
      { titel: "Create your profile", text: "E-mail, name, player name and password — then you can sign in on any device." },
      { titel: "Start or join a round", text: "Start your own round or join with the organizer’s join code." },
      { titel: "Predict and wait", text: "Pick until eight hours before the start — result, points and table follow by themselves." }
    ],
    neu: { version: "1.210.0 (App Store)", datum: "20 Oct 2026", punkte: [
      "13 languages: a fresh install starts in your device’s language, switch in Profile under “Language”",
      "The ticks for qualifying and starting grid stay empty until you set one yourself and only apply to the current race weekend",
      "Achievements in five tiers from grey to orange, with a collector rank and new overall and driver achievements",
      "Group achievements per season: a button below the standings shows who leads the group (Premium)",
      "Triumphs: mark up to ten of your achievements with a star, visible to all players (Premium)"
    ] },
    preise: {
      satz: "Predicting is free, for good. Premium opens the look back.",
      karten: [
        { name: "Free", preis: "€0", zusatz: "forever", punkte: [
          "Play along and predict", "Points and table, always up to date", "Current and last race", "Groups, chat and profile", "View other players’ triumphs"
        ] },
        { name: "Premium", preis: "€1.99", zusatz: "per 4 weeks · or €14.99 a year, just €1.15 per 4 weeks", punkte: [
          "Every race of the season so far", "Season and rank charts, tracks and records", "All-time, season and trophy tables",
          "Career and achievements across all seasons and groups", "Group achievements per season and your own triumphs",
          "Head-to-head, driver hit rate and what if", "All 54 player colours instead of 15"
        ] }
      ],
      fuss: "A paid year stays yours: you keep seeing its history even after Premium ends. The subscription renews automatically and can be cancelled in your store account."
    },
    fragen: [
      { frage: "What does FaNiCa Fun cost?", antwort: "Predicting, points, table and chat are free for good. Premium for the look back costs €1.99 per 4 weeks or €14.99 a year." },
      { frage: "Is money involved?", antwort: "No. You predict without any stake and without prizes, only for points and trophies. The app is meant for ages 18 and up; the store rating depends on the country, 17+ on the App Store. Help with gambling addiction is available at check-dein-spiel.de." },
      { frage: "What if I forget a pick?", antwort: "Without a pick and without a tick the race scores zero; there are no penalty points. Between the deadline and the race start the organizer can still enter your pick; reminders and the tick for qualifying or starting grid help you not to miss one." },
      { frage: "Is there a server?", antwort: "There is no server of my own. The devices of a round sync through the relay services ntfy.sh and ntfy.envs.net — open the app once on race weekend so everything arrives." },
      { frage: "Is the app part of Formula 1?", antwort: "No. FaNiCa Fun is an independent fan app with no connection to the Formula One Group; race results come from public data sources." }
    ],
    abschluss: { titel: "Predict the top five.", text: "You only see the others afterwards." }
  }
};
