/// Inhalte der Produktseite SetUpLeiste (Stand 1.0.0, 19.08.2026).
window.PRODUKT_DATEN = {
  app: "setupleiste", seite: "setupleiste", stil: "b-lantern",
  symbol: "bilder/marke/app-setupleiste.webp",
  bilder: [],
  de: {
    fakten: ["Windows · 64 Bit", "Kostenlos", "Ohne Konto"],
    blickSatz: "Eine schmale Leiste mittig am oberen Bildschirmrand, die live zeigt, was der Rechner gerade tut — und nebenbei Bestwerte sammelt.",
    vorteile: [
      { symbol: "monitor", titel: "Immer im Blick", text: "Die Leiste bleibt über allen Fenstern — im Spiel, beim Rendern, beim Arbeiten." },
      { symbol: "zahnrad", titel: "Fünfzehn Anzeigen", text: "Von Ping über FPS bis Watt, jede einzeln an- und abschaltbar." },
      { symbol: "pokal", titel: "Bestwerte", text: "Höchst- und Tiefstwerte von elf Messwerten für Heute, Woche, Monat, Jahr und gesamt." },
      { symbol: "schild", titel: "Ehrlich beschriftet", text: "Was geschätzt oder umgerechnet ist, steht dabei — auch in der Leiste selbst." }
    ],
    erlebnis: { titel: "So sieht die Leiste aus", kurz: "Leiste", text: "Nachgebaut im Hausstil — dieselben Felder und Beschriftungen wie im Programm." },
    funktionen: [
      { gruppe: "Live-Werte", symbol: "monitor", liste: [
        { symbol: "globus", name: "Ping und Netz", text: "Antwortzeit ins Internet, dazu was gerade empfangen und gesendet wird." },
        { symbol: "spiel", name: "FPS", text: "Bilder je Sekunde im laufenden Spiel." },
        { symbol: "chip", name: "Prozessor und Arbeitsspeicher", text: "Auslastung, geschätzte Watt und belegter Arbeitsspeicher gegen die Gesamtgröße." },
        { symbol: "diagramm", name: "Grafikkarte", text: "Auslastung, Takt, Grafikspeicher und gemessene Watt einer NVIDIA-Karte." },
        { symbol: "thermometer", name: "Temperatur", text: "Grafikkarte immer, Prozessor nur mit Administratorrechten." },
        { symbol: "blitz", name: "Akku, Strom, Laufzeit, Auflösung", text: "Ladebalken, Leistung samt Verbrauch heute, Laufzeit seit dem Start und Bildwiederholrate." }
      ] },
      { gruppe: "Bestwerte", symbol: "pokal", liste: [
        { symbol: "pokal", name: "Elf Messwerte", text: "Temperaturen, Leistungen, Ping, Leitung, Datenmengen und Laufzeit mit Höchst- und Tiefstwert." },
        { symbol: "kalender", name: "Sechs Spalten", text: "Heute, Woche, Monat, Jahr und Gesamt, dazu „Möglich“ — das technische Maximum des Bauteils." },
        { symbol: "download", name: "Leitung messen", text: "Ein Knopf lädt kurz Testdaten und führt das Ergebnis getrennt nach WLAN und Kabel." },
        { symbol: "flamme", name: "Stromzähler", text: "Grafikkarte und Prozessor zusammen, aufsummiert für Tag, Woche, Monat, Jahr und gesamt." },
        { symbol: "auge", name: "Aufzeichnen und Anzeigen getrennt", text: "Je Bestwert zwei Schalter: ob er weiter aufgezeichnet wird und ob er in der Liste steht." }
      ] },
      { gruppe: "Bedienung", symbol: "zahnrad", liste: [
        { symbol: "zahnrad", name: "Zahnrad", text: "Klappliste zum An- und Abwählen jeder Anzeige, dazu die Größe Klein, Mittel oder Groß." },
        { symbol: "pokal", name: "Pokal", text: "Öffnet die Bestwerte-Liste samt Stromverbrauch und Geschwindigkeitsmessung." },
        { symbol: "rechts", name: "Pfeil und X", text: "Der Pfeil klappt die Leiste ein und wieder aus, das X beendet sie." },
        { symbol: "ordner", name: "Bleibt nach dem Neustart", text: "Anzeigen, Größe, Stromzähler und Bestwerte liegen in drei Textdateien im Benutzerordner." }
      ] },
      { gruppe: "Einrichtung", symbol: "download", liste: [
        { symbol: "download", name: "Installer", text: "Deutschsprachiger Assistent mit Startmenü-Eintrag und wahlweise Desktop-Symbol." },
        { symbol: "uhr", name: "Autostart", text: "Auf Wunsch startet die Leiste beim Anmelden, als Administrator samt Prozessor-Temperatur." },
        { symbol: "kreuz", name: "Deinstallieren mit Rückfrage", text: "Die gesammelten Werte verschwinden nur, wenn du es bestätigst." }
      ] }
    ],
    schritte: [
      { titel: "Installieren", text: "Den Installer starten, auf Wunsch mit Desktop-Symbol und Autostart." },
      { titel: "Leiste erscheint oben", text: "Sie sitzt mittig am oberen Bildschirmrand und zeigt sofort die Live-Werte." },
      { titel: "Anzeigen wählen", text: "Über das Zahnrad Werte und Größe einstellen, über den Pokal die Bestwerte ansehen." }
    ],
    fragen: [
      { frage: "Was kostet die SetUpLeiste?", antwort: "Nichts. Die SetUpLeiste ist kostenlos, ohne Konto und ohne Werbung." },
      { frage: "Warum fehlen bei mir die Grafikkarten-Felder?", antwort: "Die vier GPU-Felder brauchen eine NVIDIA-Karte. Auf Rechnern mit AMD- oder nur Intel-Grafik blenden sie sich aus." },
      { frage: "Warum bleibt die Prozessor-Temperatur leer?", antwort: "Windows gibt sie nur mit Administratorrechten heraus. Die Grafikkarten-Temperatur kommt immer." },
      { frage: "Sind alle Werte gemessen?", antwort: "Nein. Die Prozessor-Watt sind aus der Auslastung geschätzt, die Akku-mAh umgerechnet. Der Stromverbrauch zählt nur Grafikkarte und Prozessor, nicht den ganzen Rechner." },
      { frage: "Wo liegen meine Daten?", antwort: "In drei Textdateien unter %APPDATA%\\SetUpLeiste. Übertragen wird nichts; nur die Geschwindigkeitsmessung lädt auf Knopfdruck kurz Testdaten." }
    ],
    abschluss: { titel: "Was dein Rechner gerade tut.", text: "Eine schmale Zeile, ganz oben." }
  },
  en: {
    fakten: ["Windows · 64-bit", "Free", "No account"],
    blickSatz: "A slim bar centred at the top of the screen that shows live what your machine is doing — and collects records along the way.",
    vorteile: [
      { symbol: "monitor", titel: "Always in view", text: "The bar stays above every window — while gaming, rendering or working." },
      { symbol: "zahnrad", titel: "Fifteen readings", text: "From ping to FPS to watts, each one can be switched on and off." },
      { symbol: "pokal", titel: "Records", text: "Highs and lows of eleven readings for today, week, month, year and in total." },
      { symbol: "schild", titel: "Honestly labelled", text: "Whatever is estimated or converted says so — in the bar itself, too." }
    ],
    erlebnis: { titel: "What the bar looks like", kurz: "Bar", text: "Rebuilt in the house style — the same fields and labels as in the program." },
    funktionen: [
      { gruppe: "Live readings", symbol: "monitor", liste: [
        { symbol: "globus", name: "Ping and network", text: "Response time to the internet, plus what is being received and sent right now." },
        { symbol: "spiel", name: "FPS", text: "Frames per second in the running game." },
        { symbol: "chip", name: "Processor and memory", text: "Load, estimated watts and memory in use against the total." },
        { symbol: "diagramm", name: "Graphics card", text: "Load, clock, video memory and measured watts of an NVIDIA card." },
        { symbol: "thermometer", name: "Temperature", text: "Graphics card always, processor only with administrator rights." },
        { symbol: "blitz", name: "Battery, power, uptime, resolution", text: "Charge bar, power with today’s consumption, uptime since boot and refresh rate." }
      ] },
      { gruppe: "Records", symbol: "pokal", liste: [
        { symbol: "pokal", name: "Eleven readings", text: "Temperatures, power, ping, line speed, data volumes and uptime with high and low." },
        { symbol: "kalender", name: "Six columns", text: "Today, week, month, year and total, plus “possible” — the component’s technical maximum." },
        { symbol: "download", name: "Measure your line", text: "One button briefly loads test data and keeps the result separately for Wi-Fi and cable." },
        { symbol: "flamme", name: "Power meter", text: "Graphics card and processor together, summed up for day, week, month, year and total." },
        { symbol: "auge", name: "Recording and showing apart", text: "Two switches per record: whether it keeps recording and whether it appears in the list." }
      ] },
      { gruppe: "Controls", symbol: "zahnrad", liste: [
        { symbol: "zahnrad", name: "Gear", text: "Drop-down to pick every reading, plus the size small, medium or large." },
        { symbol: "pokal", name: "Trophy", text: "Opens the records list with power consumption and the speed test." },
        { symbol: "rechts", name: "Arrow and X", text: "The arrow folds the bar in and out, the X closes it." },
        { symbol: "ordner", name: "Survives a restart", text: "Readings, size, power meter and records sit in three text files in your user folder." }
      ] },
      { gruppe: "Setup", symbol: "download", liste: [
        { symbol: "download", name: "Installer", text: "German-language wizard with a Start menu entry and an optional desktop icon." },
        { symbol: "uhr", name: "Autostart", text: "If you like, the bar starts at sign-in, as administrator including the processor temperature." },
        { symbol: "kreuz", name: "Uninstall with a question", text: "Your collected values are only removed if you confirm it." }
      ] }
    ],
    schritte: [
      { titel: "Install", text: "Run the installer, with a desktop icon and autostart if you like." },
      { titel: "The bar appears at the top", text: "It sits centred at the top edge and shows the live readings straight away." },
      { titel: "Choose your readings", text: "Set readings and size via the gear, see the records via the trophy." }
    ],
    fragen: [
      { frage: "What does SetUpLeiste cost?", antwort: "Nothing. SetUpLeiste is free, with no account and no ads." },
      { frage: "Is it available in English?", antwort: "No. The program and its installer are in German only." },
      { frage: "Why are the graphics card fields missing?", antwort: "The four GPU fields need an NVIDIA card. On machines with AMD or Intel-only graphics they hide themselves." },
      { frage: "Are all values measured?", antwort: "No. Processor watts are estimated from the load, battery mAh is converted. Power consumption counts only graphics card and processor, not the whole machine." },
      { frage: "Where is my data stored?", antwort: "In three text files under %APPDATA%\\SetUpLeiste. Nothing is sent; only the speed test briefly loads test data at the push of a button." }
    ],
    abschluss: { titel: "What your machine is doing.", text: "One slim line, right at the top." }
  }
};
