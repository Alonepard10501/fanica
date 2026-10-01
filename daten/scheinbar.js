/// Inhalte der Produktseite ScheinBar (Stand 1.0.16, 22.09.2026).
window.PRODUKT_DATEN = {
  app: "scheinbar", seite: "scheinbar", stil: "b-lantern",
  symbol: "bilder/marke/app-scheinbar.webp",
  bilder: [
    { datei: "bilder/app/scheinbar-start.webp", b: 540, h: 1200 },
    { datei: "bilder/app/scheinbar-scheine.webp", b: 540, h: 1200 },
    { datei: "bilder/app/scheinbar-erfassen.webp", b: 540, h: 1200 },
    { datei: "bilder/app/scheinbar-schein.webp", b: 540, h: 1200 },
    { datei: "bilder/app/scheinbar-ziehungen.webp", b: 540, h: 1200 },
    { datei: "bilder/app/scheinbar-statistik.webp", b: 540, h: 1200 }
  ],
  de: {
    fakten: ["Android", "BINGO! · Lotto · Eurojackpot", "Daten nur auf dem Gerät"],
    blickSatz: "Ein Begleiter für BINGO!, Lotto 6aus49 und Eurojackpot: Schein fotografieren, Zahlen prüfen — und sehen, ob und in welcher Gewinnklasse etwas dabei ist.",
    vorteile: [
      { symbol: "scan", titel: "Foto statt Abtippen", text: "Die Texterkennung auf dem Gerät liest Tippzahlen, Superzahl, Losnummer und Teilnahme vom Schein." },
      { symbol: "pokal", titel: "Gewinnklasse statt Trefferzahl", text: "Jeder Schein wird gegen alle Ziehungen seines Zeitraums gerechnet, Zusatzspiele inklusive." },
      { symbol: "kugel", titel: "Ziehungen von selbst", text: "Beim Start holt die App die Ziehungen der letzten zwölf Monate und ergänzt nur, was fehlt." },
      { symbol: "schild", titel: "Kein Glücksspiel", text: "Keine Tippabgabe, kein Scheinverkauf, keine Vorhersage — die App verwaltet, was schon gespielt ist." }
    ],
    erlebnis: { titel: "Eine BINGO!-Ziehung zum Ausprobieren", kurz: "Trommel", text: "Die Trommel zieht Kugel um Kugel auf eine Beispielkarte und zählt mit, welche Reihe voll wird — so prüft die App jeden BINGO!-Schein." },
    galerie: {
      text: "Sechs Aufnahmen aus Fassung 1.0.16 im Dunkelmodus. Die Scheine darin sind Beispiele; die Statistik ist ein Premium-Bereich und stammt aus einer früheren Testfassung.",
      bilder: [
        { titel: "Der Einstieg", text: "Scannen, von Hand eingeben oder BINGO! live — darunter die aktiven Scheine, unten die vier Bereiche." },
        { titel: "Die Scheine", text: "Nach Teilnahmezeitraum gruppiert, je Schein ein Zeichen: Uhr bei ausstehender Ziehung, Pokal bei Gewinn. Aktiv und Archiv liegen hinter einem Schalter." },
        { titel: "Schein erfassen", text: "Spielart, Teilnahmezeitraum, Losnummer, Zusatzspiele, Superzahl und das Zahlenraster — grau hinterlegt, was zuletzt gezogen wurde." },
        { titel: "Der Schein im Detail", text: "Oben der Stand mit Gewinnklasse, darunter die gezogenen Zahlen je Ziehung und dein Feld mit den Treffern." },
        { titel: "Alle Ziehungen", text: "BINGO!, Lotto 6aus49 und Eurojackpot je mit eigenem Reiter, jede Ziehung mit Datum und Zusatzzahl; ohne Premium sind es die letzten zehn." },
        { titel: "Was die Zahlen sagen", text: "Premium: häufigste Zahlen mit Zähler — umschaltbar auf eigene Zahlen und Gewinne, je Zeitfenster und Ziehungstag." }
      ]
    },
    funktionen: [
      { gruppe: "Erfassen", symbol: "scan", liste: [
        { symbol: "kamera", name: "Schein fotografieren", text: "Aus Kamera oder Galerie; nach der Texterkennung wird die Bildkopie gelöscht." },
        { symbol: "stift", name: "Korrigieren statt raten", text: "Das Erkannte landet immer zuerst in der Erfassung und kann vor dem Speichern geändert werden." },
        { symbol: "liste", name: "Scan erklärt sich", text: "Über dem Formular steht, welche Angaben aus dem Bild kamen — einzelne Zahlen werden vorgewählt." },
        { symbol: "rechner", name: "Auch von Hand", text: "Zahlen im Raster antippen ist ein gleichwertiger Weg, kein Notbehelf." },
        { symbol: "schein", name: "Alles vom Schein", text: "Losnummer, Einsatz, Quittungsnummer und die angekreuzten Zusatzlotterien werden mit erfasst." }
      ] },
      { gruppe: "Prüfen", symbol: "pokal", liste: [
        { symbol: "pokal", name: "Gewinnklasse je Ziehung", text: "Neun Klassen bei Lotto, zwölf bei Eurojackpot — je Ziehung im Teilnahmezeitraum." },
        { symbol: "ebenen", name: "BINGO!-Reihen", text: "Volle Reihen der 25er-Karte zählen: waagerecht, senkrecht und diagonal." },
        { symbol: "ziel", name: "Zusatzspiele", text: "Spiel 77, SUPER 6 und die BINGO!-Superchance werden aus Losnummer, Serie und Los mitgerechnet." },
        { symbol: "wiederholen", name: "Immer frisch gerechnet", text: "Gewinne werden nie gespeichert — kommt eine Ziehung dazu, stimmt jeder Schein sofort." },
        { symbol: "auge", name: "Zuletzt gezogen", text: "Zahlen aus den letzten fünf Ziehungen sind grau hinterlegt, per Augen-Symbol abschaltbar." }
      ] },
      { gruppe: "Ziehungen", symbol: "kugel", liste: [
        { symbol: "download", name: "Automatisch nachladen", text: "Eine gepflegte Liste der letzten zwölf Monate kommt beim Start, Vorhandenes bleibt unberührt." },
        { symbol: "kalender", name: "Archiv je Spiel", text: "BINGO!, Lotto 6aus49 und Eurojackpot getrennt, jede Ziehung mit Datum und Zusatzzahl." },
        { symbol: "kugel", name: "BINGO! live", text: "Während der Sendung Zahlen im B-I-N-G-O-Raster antippen; gespeichert wird ab 22 Zahlen." },
        { symbol: "offline", name: "Auf dem Gerät", text: "Geholte Ziehungen liegen lokal — Prüfen und Auswerten gehen auch ohne Verbindung." }
      ] },
      { gruppe: "Statistik und Daten", symbol: "diagramm", liste: [
        { symbol: "diagramm", name: "Drei Bereiche", text: "Gezogen, Meine Zahlen und Gewinne — mit häufigsten, überfälligen Zahlen und Zahlenpaaren." },
        { symbol: "uhr", name: "Zeitfenster und Ziehungstag", text: "30 Tage, 3, 6 oder 12 Monate oder alles, dazu ein Filter nach Ziehungstag." },
        { symbol: "export", name: "Sichern und einspielen", text: "Scheine und Ziehungen als Datei sichern; beim Einspielen wird nur Fehlendes ergänzt." },
        { symbol: "ordner", name: "BINGO!-Startbestand", text: "Frühere BINGO!-Ziehungen aus Excel übernehmen — jede Abweichung wird gemeldet." },
        { symbol: "palette", name: "Aussehen", text: "Hell, dunkel oder wie das System, dazu neun Farben für die Treffer-Markierung." }
      ] }
    ],
    schritte: [
      { titel: "Schein aufnehmen", text: "Auf der Startseite scannen oder die Zahlen von Hand eingeben." },
      { titel: "Prüfen und speichern", text: "Erkannte Angaben kontrollieren, Teilnahmezeitraum setzen — nur echte Ziehungstage sind wählbar." },
      { titel: "Ergebnis ablesen", text: "Der Schein zeigt je Ziehung Treffer und Gewinnklasse, die Zusatzspiele auf eigener Karte." }
    ],
    neu: { version: "1.0.16", datum: "22.09.2026", punkte: [
      "Aus einem Foto kommen Tippzahlen, Superzahl, Losnummer, Teilnahme, Einsatz und Quittungsnummer",
      "Nach dem Scan steht über dem Formular, welche Angaben aus dem Bild kamen",
      "Erkannte Einzelzahlen werden vorgewählt, auch wenn kein volles Feld zusammenkommt",
      "GlücksSpirale und Sieger-Chance lassen sich am Schein vermerken",
      "Der Code auf der Quittung wird als Scheinkennung gespeichert"
    ] },
    fragen: [
      { frage: "Ist ScheinBar ein Glücksspiel?", antwort: "Nein. Die App nimmt keine Tipps an, verkauft und vermittelt keine Scheine, lost nichts aus und zahlt nichts aus. Sie verwaltet Scheine, die schon gespielt sind." },
      { frage: "Sagt die Statistik Zahlen voraus?", antwort: "Nein. Sie beschreibt, was gezogen wurde, und verspricht keine besseren Gewinnchancen." },
      { frage: "Kostet ScheinBar etwas?", antwort: "Scannen, Gewinnprüfung, BINGO! live, Sicherung, zehn aktive Scheine und die letzten zehn Ziehungen je Spiel sind frei. Premium öffnet die Statistik, das Zwölf-Monats-Archiv, unbegrenzt viele Scheine und den Excel-Import; kaufen lässt es sich erst über den Store." },
      { frage: "Brauche ich Internet?", antwort: "Nur zum Holen der Ziehungen, für einen Abo-Kauf und die Update-Prüfung. Erfassen, Prüfen und Auswerten laufen ohne Verbindung." },
      { frage: "Wann kommt die App in die Stores?", antwort: "ScheinBar läuft als Testfassung außerhalb der Stores und kommt über einen Update-Knopf in der App. Ein Store-Eintrag steht noch aus." }
    ],
    abschluss: { titel: "Dein Schein, nachgerechnet.", text: "Fotografieren genügt — den Rest prüft die App.", stand: "Im Test — Testfassung außerhalb der Stores, noch nichts zu kaufen." }
  },
  en: {
    fakten: ["Android", "BINGO! · Lotto · Eurojackpot", "Data stays on the device"],
    blickSatz: "A companion for BINGO!, Lotto 6aus49 and Eurojackpot: photograph the ticket, check the numbers — and see whether anything came up, and in which prize tier.",
    vorteile: [
      { symbol: "scan", titel: "Photo, not typing", text: "On-device text recognition reads numbers, bonus ball, ticket number and entry dates from the ticket." },
      { symbol: "pokal", titel: "Prize tier, not hit count", text: "Every ticket is checked against all draws in its period, extra games included." },
      { symbol: "kugel", titel: "Draws arrive by themselves", text: "On start the app fetches the last twelve months of draws and only adds what is missing." },
      { symbol: "schild", titel: "Not gambling", text: "No betting, no ticket sales, no predictions — the app manages what has already been played." }
    ],
    erlebnis: { titel: "A BINGO! draw to try", kurz: "Drum", text: "The drum draws ball after ball onto a sample card and counts which line fills up — the same way the app checks every BINGO! ticket." },
    galerie: {
      text: "Six captures of version 1.0.16 in dark mode. The tickets in them are examples; the statistics are a Premium area and come from an earlier test build.",
      bilder: [
        { titel: "The starting point", text: "Scan, type it in or BINGO! live — your active tickets below, the four areas at the bottom." },
        { titel: "Your tickets", text: "Grouped by participation period, one sign per ticket: a clock while the draw is pending, a trophy for a win. Active and archive sit behind one switch." },
        { titel: "Capture a ticket", text: "Game, participation period, lot number, extra games, super number and the number grid — greyed out are the numbers drawn most recently." },
        { titel: "The ticket in detail", text: "At the top the status with prize class, below the drawn numbers per draw and your field with its hits." },
        { titel: "Every draw", text: "BINGO!, Lotto 6aus49 and Eurojackpot each on their own tab, every draw with date and bonus number; without Premium it is the last ten." },
        { titel: "What the numbers say", text: "Premium: most frequent numbers with their count — switchable to your own numbers and wins, per time window and draw day." }
      ]
    },
    funktionen: [
      { gruppe: "Capture", symbol: "scan", liste: [
        { symbol: "kamera", name: "Photograph the ticket", text: "From camera or gallery; the image copy is deleted after text recognition." },
        { symbol: "stift", name: "Correct, do not guess", text: "What was recognised always lands in the entry form first and can be changed before saving." },
        { symbol: "liste", name: "The scan explains itself", text: "Above the form it says which details came from the image — single numbers are preselected." },
        { symbol: "rechner", name: "By hand as well", text: "Tapping numbers in the grid is an equal route, not a fallback." },
        { symbol: "schein", name: "Everything on the ticket", text: "Ticket number, stake, receipt number and the ticked extra lotteries are captured too." }
      ] },
      { gruppe: "Check", symbol: "pokal", liste: [
        { symbol: "pokal", name: "Prize tier per draw", text: "Nine tiers for Lotto, twelve for Eurojackpot — for every draw in the entry period." },
        { symbol: "ebenen", name: "BINGO! lines", text: "Full lines on the 25-number card count: across, down and diagonal." },
        { symbol: "ziel", name: "Extra games", text: "Spiel 77, SUPER 6 and the BINGO! Superchance are worked out from ticket number, series and draw number." },
        { symbol: "wiederholen", name: "Always freshly calculated", text: "Wins are never stored — when a draw is added, every ticket is right at once." },
        { symbol: "auge", name: "Recently drawn", text: "Numbers from the last five draws are greyed, switchable with the eye icon." }
      ] },
      { gruppe: "Draws", symbol: "kugel", liste: [
        { symbol: "download", name: "Fetched automatically", text: "A maintained list of the last twelve months arrives on start; what is there stays untouched." },
        { symbol: "kalender", name: "Archive per game", text: "BINGO!, Lotto 6aus49 and Eurojackpot apart, every draw with date and bonus number." },
        { symbol: "kugel", name: "BINGO! live", text: "Tap the numbers in the B-I-N-G-O grid during the broadcast; saving works from 22 numbers." },
        { symbol: "offline", name: "On the device", text: "Fetched draws are stored locally — checking and analysing work without a connection." }
      ] },
      { gruppe: "Statistics and data", symbol: "diagramm", liste: [
        { symbol: "diagramm", name: "Three areas", text: "Drawn, My numbers and Wins — with most frequent and overdue numbers and number pairs." },
        { symbol: "uhr", name: "Time window and draw day", text: "30 days, 3, 6 or 12 months or everything, plus a filter by draw day." },
        { symbol: "export", name: "Back up and restore", text: "Save tickets and draws as a file; restoring only adds what is missing." },
        { symbol: "ordner", name: "BINGO! starting data", text: "Take over past BINGO! draws from Excel — every mismatch is reported." },
        { symbol: "palette", name: "Appearance", text: "Light, dark or like the system, plus nine colours for marking hits." }
      ] }
    ],
    schritte: [
      { titel: "Capture the ticket", text: "Scan it on the start page or type in the numbers by hand." },
      { titel: "Check and save", text: "Review what was recognised and set the entry period — only real draw days can be picked." },
      { titel: "Read the result", text: "The ticket shows hits and prize tier for every draw, the extra games on a card of their own." }
    ],
    neu: { version: "1.0.16", datum: "22 Sep 2026", punkte: [
      "One photo yields numbers, bonus ball, ticket number, entry date, stake and receipt number",
      "After a scan, the form says which details came from the image",
      "Single recognised numbers are preselected, even when no full field comes together",
      "GlücksSpirale and Sieger-Chance can be noted on the ticket",
      "The code on the receipt is stored as the ticket ID"
    ] },
    fragen: [
      { frage: "Is ScheinBar gambling?", antwort: "No. The app takes no bets, neither sells nor brokers tickets, draws nothing and pays nothing out. It manages tickets that have already been played." },
      { frage: "Do the statistics predict numbers?", antwort: "No. They describe what was drawn and promise no better chances of winning." },
      { frage: "Does ScheinBar cost anything?", antwort: "Scanning, checking wins, BINGO! live, backups, ten active tickets and the last ten draws per game are free. Premium unlocks the statistics, the twelve-month archive, unlimited tickets and the Excel import; it can only be bought through the store." },
      { frage: "Do I need internet?", antwort: "Only to fetch draws, for a subscription purchase and the update check. Capturing, checking and analysing work offline." },
      { frage: "When will it be in the stores?", antwort: "ScheinBar runs as a test build outside the stores and is updated through a button inside the app. A store listing is still to come." }
    ],
    abschluss: { titel: "Your ticket, checked.", text: "A photo is enough — the app checks the rest.", stand: "In testing — test build outside the stores, nothing to buy yet." }
  }
};
