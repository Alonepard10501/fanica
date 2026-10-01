/// Inhalte der Produktseite ZeitAnker (Stand 1.0.0, 06.09.2026).
window.PRODUKT_DATEN = {
  app: "zeitwissen", seite: "zeitwissen", stil: "b-heat",
  symbol: "bilder/marke/app-zeitwissen.webp",
  bilder: [
    { datei: "bilder/app/zeitanker-1-heute.webp", b: 540, h: 1200 },
    { datei: "bilder/app/zeitanker-2-zeitraum.webp", b: 540, h: 1200 },
    { datei: "bilder/app/zeitanker-3-projekte.webp", b: 540, h: 1200 },
    { datei: "bilder/app/zeitanker-4-mehr.webp", b: 540, h: 1200 }
  ],
  de: {
    fakten: ["Android · iOS", "Ohne Konto", "Erfassen ohne Netz"],
    blickSatz: "Eine Arbeitszeit-App mit Zeitkonto: einstempeln, ausstempeln — Über- und Fehlstunden laufen von allein mit.",
    vorteile: [
      { symbol: "uhr", titel: "Ein Knopf", text: "Ein Tipp startet die Uhr, ein zweiter beendet sie. Alles andere ist freiwillig." },
      { symbol: "sanduhr", titel: "Zeitkonto", text: "Plus- und Minusstunden laufen fortlaufend gegen dein Soll zusammen, mit Startsaldo und Korrekturen." },
      { symbol: "ordner", titel: "Projekte und Aufgaben", text: "Aufgaben teilen die Arbeitszeit nur auf, sie verlängern sie nie; das Projekt-Soll bleibt vom eigenen getrennt." },
      { symbol: "rechner", titel: "Eine Rechenstelle", text: "Jede Zahl kommt aus derselben Stelle im Code — der Bericht sagt nie etwas anderes als der Bildschirm." }
    ],
    erlebnis: { titel: "Die Woche gegen das Soll", kurz: "Konto", text: "Jeder abgeschlossene Tag rechnet gearbeitet minus Soll; der laufende Tag zählt erst mit, wenn du ausstempelst." },
    galerie: { text: "Vier Aufnahmen aus der laufenden Fassung im Dunkelmodus. Die Zeiten darin sind Beispiele.", bilder: [
      { titel: "Die Stempeluhr", text: "Einstempeln, das aktuelle Projekt, der heutige Stand und das Zeitkonto auf einem Schirm." },
      { titel: "Tag, Woche, Monat, Jahr", text: "Gearbeitet, Soll und Differenz oben, darunter jeder Tag mit seinem eigenen Saldo." },
      { titel: "Projekte und Aufgaben", text: "Zeiten unter Projekten bündeln, je Projekt mit eigenen Aufgaben — ohne Premium sind es drei Projekte." },
      { titel: "Mehr", text: "Sollzeit und Pausen, Zeitkonto, Aufgaben-Verhalten, Premium und der Bericht an einem Ort." }
    ] },
    funktionen: [
      { gruppe: "Erfassen", symbol: "uhr", liste: [
        { symbol: "uhr", name: "Ein- und ausstempeln", text: "Ein Fingertipp startet die laufende Uhr, ein zweiter beendet sie." },
        { symbol: "liste", name: "Aufgaben je Projekt", text: "Aufgaben laufen innerhalb der Arbeitszeit mit; eine neue kann die vorige automatisch pausieren." },
        { symbol: "sanduhr", name: "Pausen automatisch", text: "Ab einer eingestellten Dauer zieht die App die Pause selbst ab." },
        { symbol: "kreuz", name: "Überschneidungen", text: "Zwei Einträge zur selben Zeit meldet die App, bevor sie gespeichert werden." },
        { symbol: "stift", name: "Zwei Notizfelder", text: "Je Eintrag eine Arbeitsnotiz für den Kunden und eine Notiz für dich." }
      ] },
      { gruppe: "Soll und Konto", symbol: "ziel", liste: [
        { symbol: "ziel", name: "Sollzeit frei wählbar", text: "Feste Zeit je Wochentag, Wochen-, Monats- oder Jahresstunden." },
        { symbol: "sanduhr", name: "Zeitkonto", text: "Über- und Fehlstunden mit Startsaldo und Korrekturen von Hand." },
        { symbol: "kalender", name: "Vier Zeiträume", text: "Tag, Woche, Monat und Jahr zeigen dieselben Zeiten in vier Zoomstufen." },
        { symbol: "ordner", name: "Eigenes Projekt-Soll", text: "Jedes Projekt kann eigene Stunden und ein eigenes Zeitkonto führen, getrennt vom persönlichen." },
        { symbol: "glocke", name: "Erinnerungen", text: "Meldungen zu Tages-, Wochen- und Monatssoll und ans Einstempeln, einzeln schaltbar." }
      ] },
      { gruppe: "Premium", symbol: "stern", liste: [
        { symbol: "export", name: "Bericht", text: "Der gewählte Zeitraum als Excel, PDF oder HTML zum Weitergeben." },
        { symbol: "euro", name: "Verdienst", text: "Stunden-, Wochen- oder Monatssatz je Projekt, mit Verdienst je Tag, Woche und Monat." },
        { symbol: "diagramm", name: "Jahresübersicht", text: "Das ganze Jahr auf einen Blick, mit Soll und Differenz je Monat." },
        { symbol: "kalender", name: "Urlaub und Krankheit", text: "Urlaub, Krankheit, Feiertag und freie Tage zählen als geleistete Zeit." },
        { symbol: "ebenen", name: "Beliebig viele Projekte", text: "Statt drei Projekten so viele, wie du brauchst." },
        { symbol: "telefon", name: "Startbildschirm-Widget", text: "Auf Android ein- und ausstempeln, ohne die App zu öffnen." }
      ] }
    ],
    schritte: [
      { titel: "Einrichten", text: "Arbeitstage, Stunden, Wochenbeginn und Erinnerungen — vier Fragen beim ersten Start." },
      { titel: "Einstempeln", text: "Auf „Heute“ Projekt wählen und einstempeln. Die Uhr läuft sichtbar mit." },
      { titel: "Ausstempeln", text: "Am Feierabend ein Tipp — Pause, Saldo und Zeitkonto rechnet die App selbst." }
    ],
    fragen: [
      { frage: "Was ist kostenlos?", antwort: "Stempeln, Aufgaben, Pausen, Zeitkonto, Tages-, Wochen- und Monatsansicht sowie drei Projekte. Premium öffnet Bericht, Verdienst, Jahresübersicht, Urlaub, beliebig viele Projekte und auf Android das Widget." },
      { frage: "Kann ich Premium schon kaufen?", antwort: "Nein. ZeitAnker steht noch in keinem Store; der Preis kommt später allein aus dem Store." },
      { frage: "Brauche ich ein Konto oder Internet?", antwort: "Ein Konto gibt es nicht. Das Erfassen läuft ohne Verbindung; die Daten bleiben auf dem Gerät." },
      { frage: "Warum zählt der laufende Tag noch nicht?", antwort: "Er steht neutral auf der Soll-Linie, bis du ausstempelst — sonst stündest du jeden Morgen im Minus." },
      { frage: "Gibt es die App auf Englisch?", antwort: "Nein, die Oberfläche ist bisher nur auf Deutsch." }
    ],
    abschluss: { titel: "Einstempeln. Fertig.", text: "Den Rest rechnet die App.", stand: "Im Test — noch in keinem Store und nichts zu kaufen." }
  },
  en: {
    fakten: ["Android · iOS", "No account", "Tracking works offline"],
    blickSatz: "A working-time app with a time account: clock in, clock out — overtime and shortfall add up on their own.",
    vorteile: [
      { symbol: "uhr", titel: "One button", text: "One tap starts the clock, a second one stops it. Everything else is optional." },
      { symbol: "sanduhr", titel: "Time account", text: "Plus and minus hours add up against your target, with an opening balance and corrections." },
      { symbol: "ordner", titel: "Projects and tasks", text: "Tasks only split your working time, they never extend it; the project target stays separate from yours." },
      { symbol: "rechner", titel: "One place to calculate", text: "Every figure comes from the same place in the code — the report never says anything other than the screen." }
    ],
    erlebnis: { titel: "The week against the target", kurz: "Account", text: "Every finished day counts worked minus target; the running day only counts once you clock out." },
    galerie: { text: "Four screens from the current build in dark mode. The times shown are examples. The app itself is in German.", bilder: [
      { titel: "The time clock", text: "Clock in, the current project, today’s status and the time account on one screen." },
      { titel: "Day, week, month, year", text: "Worked, target and difference at the top, below each day with its own balance." },
      { titel: "Projects and tasks", text: "Group times under projects, each with its own tasks — three projects without Premium." },
      { titel: "More", text: "Target time and breaks, time account, task behaviour, Premium and the report in one place." }
    ] },
    funktionen: [
      { gruppe: "Tracking", symbol: "uhr", liste: [
        { symbol: "uhr", name: "Clock in and out", text: "One tap starts the running clock, a second one stops it." },
        { symbol: "liste", name: "Tasks per project", text: "Tasks run inside your working time; a new one can pause the previous one automatically." },
        { symbol: "sanduhr", name: "Automatic breaks", text: "Beyond a set duration the app deducts the break itself." },
        { symbol: "kreuz", name: "Overlaps", text: "Two entries at the same time are flagged before they are saved." },
        { symbol: "stift", name: "Two note fields", text: "Per entry a work note for the client and a note for yourself." }
      ] },
      { gruppe: "Target and account", symbol: "ziel", liste: [
        { symbol: "ziel", name: "Flexible target", text: "Fixed time per weekday, or weekly, monthly or yearly hours." },
        { symbol: "sanduhr", name: "Time account", text: "Overtime and shortfall with an opening balance and manual corrections." },
        { symbol: "kalender", name: "Four periods", text: "Day, week, month and year show the same times at four zoom levels." },
        { symbol: "ordner", name: "Own project target", text: "Each project can keep its own hours and time account, separate from your personal one." },
        { symbol: "glocke", name: "Reminders", text: "Alerts for daily, weekly and monthly target and for clocking in, each switchable." }
      ] },
      { gruppe: "Premium", symbol: "stern", liste: [
        { symbol: "export", name: "Report", text: "The chosen period as Excel, PDF or HTML to pass on." },
        { symbol: "euro", name: "Earnings", text: "Hourly, weekly or monthly rate per project, with earnings per day, week and month." },
        { symbol: "diagramm", name: "Year overview", text: "The whole year at a glance, with target and difference per month." },
        { symbol: "kalender", name: "Holiday and sick days", text: "Holiday, sick days, public holidays and days off count as time worked." },
        { symbol: "ebenen", name: "Unlimited projects", text: "As many projects as you need instead of three." },
        { symbol: "telefon", name: "Home screen widget", text: "Clock in and out on Android without opening the app." }
      ] }
    ],
    schritte: [
      { titel: "Set up", text: "Working days, hours, start of the week and reminders — four questions on first launch." },
      { titel: "Clock in", text: "Pick a project on “Today” and clock in. The clock runs visibly." },
      { titel: "Clock out", text: "One tap at the end of the day — the app works out break, balance and time account." }
    ],
    fragen: [
      { frage: "What is free?", antwort: "Clocking, tasks, breaks, time account, day, week and month views and three projects. Premium unlocks the report, earnings, year overview, holidays, unlimited projects and the widget on Android." },
      { frage: "Can I buy Premium yet?", antwort: "No. ZeitAnker is not in any store yet; the price will come from the store alone." },
      { frage: "Do I need an account or internet?", antwort: "There is no account. Tracking works without a connection; the data stays on the device." },
      { frage: "Why does today not count yet?", antwort: "It sits neutrally on the target line until you clock out — otherwise you would start every morning in the minus." },
      { frage: "Is the app available in English?", antwort: "No, the interface is in German only so far." }
    ],
    abschluss: { titel: "Clock in. Done.", text: "The app does the maths.", stand: "In testing — not in any store yet and nothing to buy." }
  }
};
