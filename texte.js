/* ============================================================
   texte.js — ALLE Texte der Seite an EINER Stelle.
   Übersetzen = hier den EN-Block füllen, kein Umbau nötig.
   Sprache umschalten: window.SPRACHE = 'de' | 'en'
   ============================================================ */

const TEXTE = {

/* ---------------------------------------------------------- DEUTSCH */
de: {

  meta: {
    kapitelWort: "Kapitel",
    titel: "FaNiCa — Falk Carstensen · Apps aus einem Ein-Mann-Studio",
    beschreibung: "Elf Produkte aus einem Ein-Mann-Medienstudio: FaNiCa Fun, Instinct Scoring, NeonPunkt, die SetUpLeiste für Windows sowie Campus Clash, YourFilm, ZeitAnker, Tankspur, ScheinBar, AblesBar und die Instinct Familie.",
    sprachknopf: "EN",
    sprachtitel: "Switch to English"
  },

  nav: {
    apps: "Die Apps",
    vergleich: "Vergleich",
    ueber: "Über mich",
    kontakt: "Kontakt",
    sprung: "Zum Inhalt springen"
  },

  hero: {
    augenbraue: "Ein-Mann-Medienstudio · Nordfriesland",
    text: "Von der ersten Idee bis in Google Play und den App Store. Ohne Team, ohne Agentur, ohne Buzzwords.",
    karussellHinweis: "Wischen oder die Pfeile drehen das Karussell — Antippen öffnet das Produkt."
  },

  /* ====================== KAPITEL 1 — INSTINCT SCORING ================ */
  instinct: {
    untertitel: "Die Scoring-App für Bogensport",
    karteKurz: "Bogenrunden werten auf 3D- und Feldparcours",
    statusPille: "Im App Store · bei Play im Test",
    kooperation: "by Bogensport Instinct · in Kooperation mit FaNiCa Fun",
    claimDeutsch: "Dein Parcours. Deine Leistung. Dein Fortschritt.",
    positionierung: "Die Scoring-App für traditionelles und instinktives Bogenschießen auf 3D- und Feldparcours. Sie ersetzt den Papierzettel. Komplett offline. Sie bewertet nichts und korrigiert nichts — sie dokumentiert.",

    scheibeSpalte: "Zone",
    scheibeFussnote: "Werte des ersten Pfeils. „Freizeit 3D“ ist eine Vereinsvariante, keine offizielle DSB-Wertung.",
    scheibeZonen: [
      { name: "Spot", farbe: "#A7BC55",
        punkte: { "IFAA Hunter": 20, "IFAA Animal": 20, "Scheibe": 5, "WA 3D": 11, "Freizeit 3D": 18 } },
      { name: "Kill", farbe: "#8DA046",
        punkte: { "IFAA Hunter": 16, "IFAA Animal": 16, "Scheibe": 4, "WA 3D": 10, "Freizeit 3D": 16 } },
      { name: "Körper", farbe: "#5E6B33",
        punkte: { "IFAA Hunter": 12, "IFAA Animal": 12, "Scheibe": 3, "WA 3D": 8, "Freizeit 3D": 10 } },
      { name: "Vorbei", farbe: "#2A2E24",
        punkte: { "IFAA Hunter": 0, "IFAA Animal": 0, "Scheibe": 0, "WA 3D": 0, "Freizeit 3D": 0 } }
    ],
    scheibeSysteme: ["IFAA Hunter", "IFAA Animal", "Scheibe", "WA 3D", "Freizeit 3D"],

    mehrKnopf: "Alles über Instinct Scoring"
  },

  /* ====================== KAPITEL 2 — FANICA FUN ====================== */
  fanica: {
    merksatzKeiner: "In <b>{n}</b> abgegebenen Tippreihen lag noch <b>kein einziges Mal</b> jemand auf allen fünf Plätzen richtig.",
    merksatzTreffer: "In {n} Tippreihen gab es {t}× alle fünf Plätze richtig.",
    karteKurz: "Mit Freunden auf die ersten Fünf tippen",
    statusPille: "Live bei Google Play & im App Store",
    untertitel: "Die Tipprunde für Motorsport-Freunde",
    claim: "Tippe die ersten Fünf.",
    claimZwei: "Die anderen siehst du erst danach.",
    positionierung: "Getippt wird auf die Top 5 jedes Rennens — ohne Geldeinsatz, nur um Punkte, Pokale und Ehre. Du kannst allein gegen deine eigene Bestleistung antreten oder eine private Runde mit Freunden eröffnen, zu der die anderen per Code dazukommen. Ein Profil legst du einmal an, danach zählt jeder Tipp auf deine Karriere ein.",

    mehrKnopf: "Alles über FaNiCa Fun",
    rundeTitel: "Wie es wirklich aussieht",
    rundeQuelle: "Stand: nach neun von zweiundzwanzig Rennen der Saison 2026. Echte Zahlen einer laufenden Runde, mit den Profilnamen der Mitspieler.",

    rundeZahlen: [
      { einheit: "Jahre",   text: "läuft die Runde schon" },
      { einheit: "Tipps",   text: "insgesamt abgegeben" },
      { einheit: "Spieler", text: "in dieser Saison" },
      { einheit: "Punkt",   text: "trennt Platz 1 von Platz 2" }
    ],
    rundeBilanz: ["exakt richtig", "Fahrer richtig, Platz daneben", "daneben"],
    rundePunkte: "Punkte",
    rundeLaeuftNoch: "läuft noch",
    rundeTrefferTitel: "Wie oft trifft man überhaupt?",

    rundeSiegerTitel: "Fünf Jahre, fünf Geschichten"
  },

  /* ====================== KAPITEL 3 — NEONPUNKT ======================= */
  neonpunkt: {
    rafferStunden: "{h} Std {m} Min",
    karteKurz: "Ein Punkt, 48 Stunden, sonst nichts",
    statusPille: "Im Store-Test",
    untertitel: "Das minimalistischste Spiel der Welt",
    claim: "Ein Punkt. 48 Stunden.",
    claimZwei: "Du kannst ihn nie aufhalten.",
    positionierung: "Ein Neon-Punkt wächst achtundvierzig Stunden lang, bis er den ganzen Bildschirm füllt. Tippst du ihn an, beginnt er klein von vorn — in der nächsten von sechzehn Neonfarben. Aufhalten kannst du ihn nicht. Nur hinauszögern.",

    /* --- Zeitraffer: die 48 Stunden in 12 Sekunden (Falk 30.07.) --- */
    rafferTitel: "48 Stunden in zwölf Sekunden",
    rafferText: "So läuft es wirklich ab — nur im Zeitraffer. Der Punkt wächst, die Uhr läuft mit. Tipp ihn an, dann beginnt er klein von vorn und wechselt die Farbe.",
    rafferKnopfStart: "▶ Zeitraffer starten",
    rafferKnopfStopp: "■ Anhalten",
    rafferZeit: "Vergangen",
    rafferGroesse: "Größe",
    rafferHinweis: "Tipp den Punkt an, während er läuft",
    rafferStatisch: "Der Punkt wächst gleichmäßig über 48 Stunden, bis er den Bildschirm füllt.",

    spielKlicks: "Klicks",
    spielFarbe: "Farbe",
    spielVon: "von 16",
    spielHinweis: "Tipp den Punkt an",

    mehrKnopf: "Alles über NeonPunkt"
  },

  /* ============ KAPITEL 4 — SETUPLEISTE (Windows-Programm) ============
     Alle Angaben aus dem Quellcode und der LIESMICH.txt des Programms:
     KI-Workflow\Programme\SetUpLeiste     Messwerte-Liste = enum RekordId in sensoren.h (11 Eintraege),
     Version + Herausgeber aus installer.iss. ============================ */
  setupleiste: {
    vorschauText: "Nachgebaut im Hausstil — dieselben Felder, dieselbe Beschriftung wie im Programm.",
    vorschauFelder: [{ name: "PING", wert: "18 ms" }, { name: "NETZ ↓↑", wert: "94 / 41" }, { name: "FPS", wert: "142" }, { name: "RAM", wert: "18,4 / 32 GB" }, { name: "CPU", wert: "23 %" }, { name: "CPU-W", wert: "46 W" }, { name: "GPU", wert: "67 %" }, { name: "TAKT", wert: "2 610 MHz" }, { name: "VRAM", wert: "7,1 / 12 GB" }, { name: "GPU-W", wert: "184 W" }, { name: "TEMP", wert: "62 / 51 °C" }, { name: "STROM", wert: "230 W · 1,84 kWh" }, { name: "LAUFZEIT", wert: "4:12 h" }, { name: "AUFLÖSUNG", wert: "2560×1440 · 165 Hz" }],
    karteKurz: "Sehen, was der Rechner gerade tut",
    statusPille: "Fertig · Gratis-Download für Windows",
    untertitel: "Die Leistungsanzeige für den Bildschirmrand",
    claim: "Was dein Rechner gerade tut.",
    claimZwei: "Eine schmale Zeile, ganz oben.",
    positionierung: "Kein Fenster, kein Programm im Vordergrund — eine schmale Leiste am oberen Bildschirmrand, die dir zeigt, was gerade wirklich läuft: Auslastung, Temperatur, Watt, Ping, Datenfluss, Akku. Sie sitzt immer mittig oben, klappt auf Wunsch ein und sammelt nebenbei deine Bestwerte.",

    mehrKnopf: "Alles über die SetUpLeiste"
  },

  /* ============ KAPITEL 5 — CAMPUS CLASH (IN BEARBEITUNG) ============
     Alle Zahlen aus dem Projekt (docs/01_PRODUCT.md, 02_FEATURES.md,
     15_CURRENT_STATUS.md, skill_catalog.dart 40 Fächer, allianz_rolle.dart
     4 Rollen/13 Rechte). 🔴 KEIN Preis nennen — es existiert noch keine
     Bezahlfunktion (nur beschrifteter Testmodus). ===================== */
  campus: {
    planTitel: "Dein Stundenplan läuft weiter",
    planFachEins: "Deutsch",
    planFachZwei: "Chemie",
    planFachDrei: "Kraftraum",
    planStufe: "Level {n}",
    planAbholen: "Fertig · abholen",
    planStd: "{h} h {m} min",
    planMin: "{m} min {s} s",
    planSek: "{s} s",
    planFuss: "Läuft weiter, auch wenn die App zu ist — Stufe für Stufe.",
    planRuhig: "Standbild: Stand nach zweieinhalb Stunden Abwesenheit.",

    karteKurz: "Endlos aufsteigen im Schulspiel",
    statusPille: "In Arbeit — spielbar gebaut",
    untertitel: "Das endlose Schulspiel",
    claim: "Deine Schulzeit läuft weiter.",
    claimZwei: "Auch wenn du das Handy weglegst.",
    positionierung: "Ein endloses Schul-Aufstiegsspiel: Du entwickelst einen Schüler über Jahre — lernst Fächer, verdienst mit Jobs Geld, steigst Level um Level auf. Trainiert wird mit echter Zeit, und das Training läuft weiter, wenn die App geschlossen ist. Das Einzelspiel läuft offline, ohne Konto und ohne eigenen Server.",

    mehrKnopf: "Alles über Campus Clash"
  },

  yourfilm: {
    scanTitel: "Eine Zahl, drei Ebenen",
    scanPruefungGut: "{art} · Prüfziffer {ziffer} stimmt",
    scanEbeneFilm: "Film — das Werk",
    scanEbeneAusgabe: "Veröffentlichung — die Ausgabe",
    scanEbeneExemplar: "Exemplar — dein Stück",
    scanScheiben: [
      {
        code: "402356712088", art: "EAN-13", format: "4K UHD",
        film: "Nachtblende", filmZusatz: "1987 · Thriller · 118 Min · FSK 16",
        ausgabe: "4K UHD Blu-ray · Steelbook", ausgabeZusatz: "2 Discs · Dolby Atmos · UVP 34,99 €",
        exemplar: "Sehr gut · gekauft 12.03.2026", exemplarZusatz: "24,90 € bezahlt · noch nicht gesehen",
        regal: "Wohnzimmer › Schrank links › Regal 2 › Fach C"
      },
      {
        code: "507103364117", art: "EAN-13", format: "Blu-ray",
        film: "Der lange Zug", filmZusatz: "2004 · Drama · 141 Min · FSK 12",
        ausgabe: "Blu-ray · Mediabook", ausgabeZusatz: "1 Disc · DTS-HD · UVP 24,99 €",
        exemplar: "Gut · verliehen an Marek", exemplarZusatz: "zurück erwartet am 19.09.2026",
        regal: "Arbeitszimmer › Regal Fenster › Fach 4"
      },
      {
        code: "88857420311", art: "UPC-A", format: "DVD",
        film: "Salzwind", filmZusatz: "1996 · Doku · 92 Min · FSK 0",
        ausgabe: "DVD · Standard Edition", ausgabeZusatz: "1 Disc · Stereo · UVP 12,99 €",
        exemplar: "Neu / versiegelt · Favorit", exemplarZusatz: "9,50 € bezahlt · gesehen 04.08.2026",
        regal: "Keller › Filmschrank › Regal 1 › Fach A"
      }
    ],
    karteKurz: "Filmsammlung scannen und ordnen",
    statusPille: "Im Test — noch nicht in den Stores",
    untertitel: "Deine Filmsammlung im Griff",
    claim: "Scannen. Einsortieren. Fertig.",
    claimZwei: "Deine Sammlung, sauber geordnet.",
    positionierung: "Eine Filmsammlungs-App für DVDs und Blu-rays: Barcode scannen, die App ordnet den Film automatisch zu — das Werk, die Ausgabe, dein Exemplar. Vier getrennte Preise zeigen, was deine Sammlung gekostet hat und was sie heute wert ist. Komplett auf dem Gerät, ohne Konto.",

    mehrKnopf: "Alles über YourFilm"
  },

  zeitwissen: {
    kontoUeber: "Dein Zeitkonto",
    kontoLaeuft: "Arbeitszeit läuft",
    kontoSoll: "Soll",
    kontoIst: "Ist",
    kontoOffen: "läuft noch",
    kontoFehlt: "noch offen bis Soll",
    kontoPlus: "So viele Überstunden hast du angesammelt.",
    kontoMinus: "So viel Zeit fehlt dir noch.",
    kontoNull: "Du bist genau im Soll.",
    kontoHeute: "Heute läuft noch — der Stand bleibt, bis du ausstempelst.",
    kontoFuss: "Jeder abgeschlossene Tag rechnet gearbeitet minus Soll. Der laufende Tag steht neutral auf der Soll-Linie und zählt erst mit, wenn du ausstempelst — sonst stündest du jeden Morgen im Minus.",
    kontoTage: ["Mo", "Di", "Mi", "Do", "Fr"],
    karteKurz: "Arbeitszeit mit Zeitkonto",
    statusPille: "Im Test — noch nicht in den Stores",
    untertitel: "Arbeitszeit, die sich selbst erklärt",
    claim: "Einstempeln. Fertig.",
    claimZwei: "Den Rest rechnet die App.",
    positionierung: "Eine Arbeitszeit-App mit Zeitkonto: einstempeln, ausstempeln — Über- und Fehlstunden laufen von allein mit. Wer will, teilt die Zeit auf Projekte und Aufgaben auf und holt am Monatsende einen Bericht als Excel, PDF oder HTML heraus. Komplett auf dem Gerät, ohne Konto.",

    mehrKnopf: "Alles über ZeitAnker"
  },
  familie: {
    drehDaten: [
      { id: "weather",   zahl: 26,   von: 0,  bis: 20,  skalaVon: 0, skalaBis: 40,  einheit: "km/h" },
      { id: "range",     zahl: 54,   von: 60, bis: 100, skalaVon: 0, skalaBis: 100, einheit: "" },
      { id: "builder",   zahl: 7.4,  von: 8,  bis: 12,  skalaVon: 6, skalaBis: 14,  einheit: "gr/lbs" },
      { id: "coach",     zahl: 140,  von: 0,  bis: 0,   einheit: "" },
      { id: "tune",      zahl: 2,    von: 0,  bis: 0,   einheit: "" },
      { id: "scoring",   zahl: 86,   von: 80, bis: 100, skalaVon: 0, skalaBis: 100, einheit: "%" },
      { id: "pack",      zahl: 96,   von: 90, bis: 100, skalaVon: 0, skalaBis: 100, einheit: "%" },
      { id: "community", zahl: null, von: 0,  bis: 0,   einheit: "" },
      { id: "trade",     zahl: null, von: 0,  bis: 0,   einheit: "" },
      { id: "ai",        zahl: null, von: 0,  bis: 0,   einheit: "" }
    ],
    drehTitel: "Die Drehscheibe, live",
    drehMitte: "Drehscheibe",
    drehSammelt: "sammelt ein",
    drehBewertet: "bewertet",
    drehSchickt: "schickt zurück",
    drehBand: "Zielbereich",
    drehUrteilGut: "im Band",
    drehUrteilKnapp: "knapp",
    drehUrteilRaus: "außerhalb",
    drehStatisch: "Wind 26 km/h liegt außerhalb von 0–20 km/h, der Eye Score bei 54 von 100. Der Coach verbindet beides und schickt an Instinct Range: Distanzschätzen heute verschieben.",
    drehWerte: [
      { id: "weather",   app: "Instinct Weather",   kurz: "Weather",   label: "Wind",               wert: "26 km/h" },
      { id: "range",     app: "Instinct Range",     kurz: "Range",     label: "Eye Score",          wert: "54 von 100" },
      { id: "builder",   app: "Instinct Builder",   kurz: "Builder",   label: "Grain je Pfund",     wert: "7,4 gr/lbs" },
      { id: "coach",     app: "Instinct Coach",     kurz: "Coach",     label: "Pfeile diese Woche", wert: "140" },
      { id: "tune",      app: "Instinct Tune",      kurz: "Tune",      label: "Fällige Wartungen",  wert: "2" },
      { id: "scoring",   app: "Instinct Scoring",   kurz: "Scoring",   label: "Trefferquote",       wert: "86 %" },
      { id: "pack",      app: "Instinct Pack",      kurz: "Pack",      label: "Packliste",          wert: "96 %" },
      { id: "community", app: "Instinct Community", kurz: "Community", label: "Nächstes Event",     wert: "in 6 Tagen" },
      { id: "trade",     app: "Instinct Trade",     kurz: "Trade",     label: "Offene Anzeigen",    wert: "1" },
      { id: "ai",        app: "Instinct AI",        kurz: "AI",        label: "Offene Fragen",      wert: "0" }
    ],
    drehRat: [
      { anId: "range",   stufe: "Hinweis",  titel: "Distanzschätzen heute verschieben", grund: "Bei 26 km/h Wind trennt keine Schätzung mehr, ob der Fehler vom Auge oder vom Abdrift kommt. Übe an einem ruhigen Tag." },
      { anId: "builder", stufe: "Dringend", titel: "Pfeilgewicht erhöhen",              grund: "Bei 7,4 gr/lbs bleibt Energie in den Wurfarmen statt im Pfeil. Schwerere Spitzen sind billiger als Wurfarme." },
      { anId: "tune",    stufe: "Dringend", titel: "Wartung nachholen",                 grund: "Zwei Wartungen offen, das Training läuft weiter. Verschleiß wächst mit jedem Schuss, nicht mit der Zeit." }
    ],
    karteKurz: "Zehn Apps rund um den Bogensport",
    statusPille: "In Arbeit — die Apps entstehen gerade",
    untertitel: "Aus einer App wird eine Familie",
    claim: "Zehn Apps. Ein Bogensport.",
    claimZwei: "Jede für sich. Alle zusammen.",
    positionierung: "Instinct Scoring deckt eine Sache ab: die Runde werten. Aber zum Bogenschießen gehört mehr — Training, Material, Wetter, Ausrüstung, Gemeinschaft. Daraus wird eine Familie eigenständiger Apps, die dieselbe Sprache sprechen und ihre Daten miteinander teilen können. Wer nur werten will, nimmt weiter nur Instinct Scoring.",

    apps: [
      { bild: "scoring", name: "Instinct Scoring", rolle: "Der Kern — im App Store", text: "Runden werten auf 3D- und Feldparcours. Die einzige App der Familie, die schon im Store steht." },
      { bild: "coach", name: "Instinct Coach", rolle: "In Arbeit", text: "Trainingsbegleitung, die sich dem Schützen anpasst — statt eines festen Plans für alle." },
      { bild: "builder", name: "Instinct Builder", rolle: "In Arbeit", text: "Pfeile zusammenstellen und verwalten: Spine, Länge, Befiederung, Farben." },
      { bild: "tune", name: "Instinct Tune", rolle: "In Arbeit", text: "Bögen einstellen und den Verlauf festhalten — mit Fotovergleich über die Zeit." },
      { bild: "weather", name: "Instinct Weather", rolle: "In Arbeit", text: "Wetter am Parcours: Wind, Licht, Temperatur — die Bedingungen, unter denen geschossen wurde." },
      { bild: "pack", name: "Instinct Pack", rolle: "In Arbeit", text: "Ausrüstung im Blick: Inventar führen und Packlisten, damit vor dem Turnier nichts fehlt." },
      { bild: "range", name: "Instinct Range", rolle: "In Arbeit", text: "Training auf dem Platz: Einheiten festhalten und auswerten, getrennt vom Parcours." },
      { bild: "community", name: "Instinct Community", rolle: "In Arbeit", text: "Der Austausch mit anderen Schützen — Verein, Gruppe, gemeinsame Termine." },
      { bild: "trade", name: "Instinct Trade", rolle: "In Arbeit", text: "Material weitergeben: anbieten, suchen, finden — Bogensport-Zubehör aus zweiter Hand." },
      { bild: "ai", name: "AI-Instinct", rolle: "In Arbeit", text: "Fachberatung zum traditionellen Bogenschießen — fragen statt suchen." },
      { bild: "familie", name: "Instinct Familie", rolle: "Die Dach-App", text: "Führt zusammen, was in den einzelnen Apps liegt: ein Blick auf alle Schützen, alle Ergebnisse, das Zusammenspiel." }
    ],

    mehrKnopf: "Alles über die Instinct Familie"
  },
  tankspur: {
    saeuleZapft: "Zapfsäule · zählt mit",
    saeuleBetrag: "Zu zahlen",
    saeuleWaehrung: "€",
    saeuleLiter: "Liter",
    saeulePreis: "Preis je Liter",
    saeuleMal: "mal",
    saeuleErgibt: "ergibt",
    saeuleGeprueft: "nachgerechnet",
    saeuleLaeuft: "Der Preis je Liter steht fest — Menge und Betrag laufen mit.",
    saeuleNochmal: "Noch einmal",
    karteKurz: "Was das Auto wirklich kostet",
    statusPille: "Im Test — noch nicht in den Stores",
    untertitel: "Was das Auto wirklich kostet",
    claim: "Tanken. Eintippen.",
    claimZwei: "Den Rest rechnet die App.",
    positionierung: "Eine Tankspur, die mitdenkt: Preis je Liter und Liter eintragen — den Gesamtpreis füllt die App selbst aus. Aus Kilometern und Litern wird der Verbrauch, aus Verbrauch und Preis werden die Kosten je 100 Kilometer. Am Jahresende steht da, was das Fahren wirklich gekostet hat. Komplett auf dem Gerät.",

    mehrKnopf: "Alles über Tankspur"
  },

  scheinbar: {
    trommelGezogen: "Gezogen",
    trommelReihen: "Volle Reihen",
    trommelVon: "{a} von {b}",
    trommelLeer: "—",
    trommelBingo: "Bingo!",
    trommelDoppelt: "Doppelt-Bingo!",
    trommelJackpot: "Jackpot!",
    trommelKnopf: "Neue Ziehung",
    trommelKnopfLaeuft: "Läuft …",
    trommelText: "22 von 75 Zahlen fallen — und die App zählt mit, welche der zwölf Reihen dabei voll wird: fünf quer, fünf längs, zwei diagonal. Genau diese Rechnung steckt hinter jedem BINGO!-Schein.",

    karteKurz: "Schein fotografieren, Gewinn sehen",
    statusPille: "Im Test — Testfassung außerhalb der Stores",
    untertitel: "Schein fotografieren, Gewinn sehen",
    claim: "Fotografieren.",
    claimZwei: "Nachrechnen übernimmt die App.",
    positionierung: "Ein Begleiter für BINGO!, Lotto 6aus49 und Eurojackpot: Spielschein abfotografieren, Zahlen kurz prüfen, fertig. Die Ziehungen holt sich die App selbst — beim ersten Start die letzten sechs Monate, danach laufend die neuen. Sie sagt dir, ob und in welcher Gewinnklasse etwas dabei ist. Die Texterkennung läuft auf dem Gerät, gespeichert wird ausschließlich dort.",

    mehrKnopf: "Alles über ScheinBar"
  },

  ablesbar: {
    zaehlerwerkStand: "Zählerstand",
    zaehlerwerkVerbrauch: "Verbrauch im Monat",
    zaehlerwerkVormonat: "Stand im Vormonat",
    zaehlerwerkSaldo: "Gegen die Abschläge",
    zaehlerwerkBereich: "Bereich wählen",
    zaehlerwerkGas: "Gas",
    zaehlerwerkWasser: "Wasser",
    zaehlerwerkStrom: "Strom",
    zaehlerwerkVorlesen: "{bereich}: Zählerstand {stand}, Verbrauch im Monat {verbrauch}.",

    karteKurz: "Ablesen, fotografieren, abrechnen",
    statusPille: "Im Test — Testfassung außerhalb der Stores",
    untertitel: "Zählerstände ablesen, Betriebskosten prüfen",
    claim: "Ablesen. Abrechnen. Fertig.",
    claimZwei: "Einmal im Monat jeden Zähler fotografieren — den Rest rechnet die App.",
    positionierung: "Anfang des Monats ein Foto je Zähler — Gas, Wasser, Strom. Die App liest die Ziffern, rechnet den Verbrauch je Monat und je Abrechnungsperiode und stellt die Kosten den gezahlten Abschlägen gegenüber. So steht jederzeit da, ob eine Nachzahlung oder ein Guthaben aufläuft.",
    mehrKnopf: "Alles über AblesBar"
  },

  /* ============ LIVE — automatisch geladene Renndaten ============ */
  produkt: {
    inhaltName: "Auf dieser Seite",
    alleZeigen: "Alle {anzahl} anzeigen",
    weniger: "Weniger anzeigen"
  },

  start: {
    alleProdukte: "Alle Produkte im Überblick",
    karussellName: "Die Produkte als Karussell",
    karussellLinks: "Nach links drehen",
    karussellRechts: "Nach rechts drehen",
    karussellWahl: "Produkt nach vorn holen",
    karussellStand: "{name} vorn — {nr} von {anzahl}",
    produkteKennung: "Die Produkte",
    produkteTitel: "Elf Produkte, ein Studio",
    produkteText: "Apps fürs Handy und ein Programm für Windows — jedes mit eigener Farbe und eigener Seite. Hier steht das Wichtigste in einem Satz, alle Einzelheiten stehen auf der Seite des Produkts.",
    filterName: "Produkte nach Stand filtern",
    filterAlle: "Alle",
    filterLive: "Erhältlich",
    filterTest: "Im Test",
    filterBau: "In Arbeit",
    filterStand: "{anzahl} Produkte angezeigt",
    wegWindows: "Download für Windows · {groesse}"
  },

  live: {
    naechstesTitel: "Das nächste Rennen",
    lauf: "Lauf",
    von: "von",
    start: "Start",
    uhr: "Uhr",
    rest: "Noch",
    laeuft: "läuft gerade",
    tag: "Tag",
    tage: "Tage",
    quelle: "Automatisch geladen — dieselbe öffentliche Quelle, aus der sich auch die App versorgt. Kalender, Ergebnisse und Countdown aktualisieren sich von selbst."
  },

  /* ====================== AKTIONEN / STORE ============================ */
  aktion: {
    androidUnter: "Google Play",
    appleUnter: "App Store",
    webseiteKnopf: "Website",
    zurWebseite: "Zur App-Webseite ↗",
    standTest: "im Test",
    standPruefung: "in Prüfung",
    standSpaeter: "kommt später"
  },

  /* ====================== ÜBER DEN ENTWICKLER ========================= */
  ueber: {
    kennung: "Über mich",
    titel: "Ein Mensch, ein Studio",
    text: "Ich bin aus Nordfriesland und arbeite allein. Kein Team, kein Büro, kein Investor. Was ich habe, ist eine klare Vorstellung davon, wie eine App sich anfühlen soll — und KI als Werkzeugkasten, der mir die Arbeit abnimmt, für die früher fünf Leute nötig waren.",

    ablaufTitel: "Wie ein Projekt entsteht",
    ablauf: [
      { nr: "01", titel: "Idee", text: "Meist ein Ärgernis aus dem Alltag. Instinct Scoring entstand, weil der Papierzettel im Regen aufweicht." },
      { nr: "02", titel: "Spezifikation", text: "Alles wird aufgeschrieben, bevor eine Zeile Code entsteht. Was die App NICHT kann, steht genauso drin." },
      { nr: "03", titel: "Bau", text: "Flutter für alles, was auf Android und iPhone gleich aussehen soll, Kotlin dort, wo es näher ans Gerät geht. KI schreibt mit, ich entscheide." },
      { nr: "04", titel: "Test", text: "Auf echten Geräten, draußen, mit Handschuh. Was am Schreibtisch gut aussieht, versagt oft im Wald." },
      { nr: "05", titel: "Store", text: "Google Play und App Store, beide Prüfungen, alle Formulare. Der langweiligste und lehrreichste Teil." }
    ],

    zahlen: [
      { zahl: "11", text: "Produkte" },
      { zahl: "2", text: "Stores" },
      { zahl: "16", text: "Sprachen" }
    ]
  },

  /* ====================== VERGLEICH & FRAGEN ========================= */
  vergleich: {
    kennung: "Auf einen Blick",
    titel: "Welche App ist für dich?",
    text: "Zehn Produkte, zehn völlig verschiedene Zwecke — drei zu haben, sechs im Test, eines noch im Bau. Was sie verbindet: Ihr Kern läuft ohne Netz, sie sammeln nichts über dich und verlangen kein Konto bei uns. Die Instinct Familie steht hier nicht mit drin — sie ist keine einzelne App, sondern zehn, und noch ist keine davon zu haben.",
    spalten: ["", "FaNiCa Fun", "Instinct Scoring", "NeonPunkt", "SetUpLeiste", "Campus Clash", "YourFilm", "ZeitAnker", "Tankspur", "ScheinBar", "AblesBar"],
    zeilen: [
      { name: "Wofür",        werte: ["Mit Freunden tippen", "Bogensport dokumentieren", "Nichts. Genau das ist der Reiz.", "Sehen, was der Rechner gerade tut", "Endlos aufsteigen im Schulspiel", "Filmsammlung ordnen und bewerten", "Arbeitszeit erfassen und nachweisen", "Spritkosten im Blick behalten", "Spielscheine prüfen und auswerten", "Zählerstände ablesen, Nebenkosten prüfen"] },
      { name: "Stand",        werte: ["Live in beiden Stores", "Im App Store · Play im Test", "Im Store-Test", "Fertig zum Download", "In Arbeit", "Im Test · noch nicht im Store", "Im Test · noch nicht im Store", "Im Test · noch nicht im Store", "Testfassung außerhalb der Stores", "Testfassung außerhalb der Stores"] },
      { name: "Allein oder zu mehreren", werte: ["Beides — allein oder in der Gruppe", "Beides", "Allein", "Allein", "Beides — mit Freunden & Allianz", "Allein", "Allein", "Allein", "Allein", "Allein"] },
      { name: "Internet nötig", werte: ["Nur zum Abgleich", "Nur für Turniere", "Nie", "Nur zum Messen der Leitung", "Nie", "Nur für Filmdaten (freiwillig)", "Nie", "Nie", "Nur fürs Abo und Nachladen", "Nur für die Update-Prüfung"] },
      { name: "Profil nötig",  werte: ["Ja — einmal anlegen", "Nein", "Nein", "Nein", "Nein", "Nein", "Nein", "Ja — einmal anlegen", "Ja — einmal anlegen", "Konto oder Gast — beides geht"] },
      { name: "Umfang",        werte: ["13 Ansichten", "23 Bildschirme", "1 Bildschirm", "11 Messwerte", "8 Bereiche · 40 Fächer", "13 Bildschirme", "14 Bildschirme", "5 Bildschirme", "12 Bildschirme · 3 Spiele", "18 Bildschirme"] },
      { name: "Sprachen",      werte: ["2", "2", "16", "1", "1", "1", "1", "1", "2", "2"] },
      { name: "Kostenlos nutzbar", werte: ["Tippen — aktuelles und letztes Rennen", "Runden schießen & werten", "Die ersten 500 Klicks", "Alles — das ganze Programm", "Alles — es gibt noch nichts zu kaufen", "Alles — es gibt noch nichts zu kaufen", "Stempeln, Zeitkonto, Tag bis Monat", "Alles — die ganze App", "10 Scheine · letzte 10 Ziehungen", "Alles — es gibt noch nichts zu kaufen"] },
      { name: "Premium ab",    werte: ["1,99 € / 4 Wochen", "1,99 € — Plus 2,99 €", "0,49 € / 4 Wochen", "—", "noch offen", "noch offen", "0,49 € / 4 Wochen", "—", "0,49 € / 4 Wochen", "noch offen"] },
      { name: "Plattform",     werte: ["Android · iOS", "Android · iOS", "Android · iOS", "Windows", "Android", "Android", "Android · iOS", "Android · iOS", "Android · iOS", "Android · iOS"] }
    ],
    fuss: "Preise gelten für die Apps mit Premium, jeweils mit sieben Tagen kostenlosem Test. Die SetUpLeiste ist ganz kostenlos; bei Campus Clash, YourFilm und AblesBar steht noch nicht fest, ob und was etwas kosten wird."
  },

  fragen: {
    kennung: "Häufige Fragen",
    titel: "Was oft gefragt wird",
    liste: [
      { f: "Brauche ich für die Apps ein Konto?",
        a: "Bei den meisten nicht — du installierst und legst los. Ein Profil brauchen nur FaNiCa Fun (mehrere Leute tippen in derselben Runde), Tankspur, ScheinBar und AblesBar (mehrere Fahrer, Spieler oder Haushalte auf einem Gerät — AblesBar geht auch als Gast). Diese Profile liegen auf dem Gerät, nicht bei uns." },
      { f: "Funktionieren die Apps ohne Internet?",
        a: "Der Kern jeder App läuft ohne Verbindung, und alle Daten liegen auf dem Gerät. Netz braucht nur, was von außen kommt: die Rennergebnisse und der Abgleich mit den Mitspielern bei FaNiCa Fun, die Filmdaten bei YourFilm, das Nachladen der Ziehungen bei ScheinBar. NeonPunkt, ZeitAnker, Tankspur und AblesBar kommen ganz ohne aus." },
      { f: "Was passiert mit meinen Daten?",
        a: "Sie bleiben auf deinem Gerät. Keine der Apps hat Werbung, Analyse-Werkzeuge oder Datenweitergabe. Das ist keine Marketing-Aussage, sondern eine bewusste Entscheidung — Einnahmen kommen ausschließlich aus den Abos." },
      { f: "Was kostet mich das?",
        a: "Jede App ist kostenlos nutzbar. Premium schaltet Zusatzfunktionen frei und beginnt bei 0,49 € je vier Wochen; die ersten sieben Tage sind immer kostenlos, ohne dass du kündigen musst. Die SetUpLeiste kostet gar nichts, und bei Campus Clash, YourFilm und AblesBar steht noch nicht fest, ob und was etwas kosten wird." },
      { f: "Verliere ich meine Daten, wenn ich nicht bezahle?",
        a: "Nein. Ohne Abo werden nur Funktionen gesperrt, nichts gelöscht. Bei NeonPunkt pausiert das Spiel nach 500 Klicks — Zähler und Bestenlisten bleiben erhalten." },
      { f: "Wer steckt hinter den Apps?",
        a: "Ich, Falk Carstensen. Keine Firma, kein Team, kein Investor. Wenn du eine Mail schreibst, lese und beantworte ich sie selbst." },
      { f: "Kann ich meine Daten mitnehmen?",
        a: "Bei Instinct Scoring ja: vollständiges Backup als Datei, dazu Export als CSV und Rundenberichte als PDF. Ein Backup wird vor dem Einspielen geprüft — Beschädigtes wird nie übernommen." },
      { f: "Kommen noch Updates?",
        a: "Ja, alle Apps werden weiterentwickelt. Updates laufen über den Store, aus dem du die App installiert hast; die Apps in der Testphase außerhalb der Stores melden eine neue Fassung selbst." }
    ]
  },

  /* ====================== KONTAKT & FUSS ============================== */
  kontakt: {
    titel: "Schreib mir",
    text: "Fragen zu einer App, ein Fehler gefunden, eine Idee? Ich lese jede Mail selbst — es gibt ja niemand anderen.",
    knopf: "fanicafuntipp@gmail.com",

    /* --- Aufklappbarer Kontaktbereich (Falk 30.07.) --- */
    klappTitel: "Nachricht schreiben",
    klappText: "Wähle ein Thema, trag deinen Namen und deine E-Mail ein und schreib, worum es geht. Beim Absenden öffnet sich dein E-Mail-Programm mit der fertigen Nachricht — du musst sie nur noch abschicken.",

    /* --- Formularfelder --- */
    formThema: "Worum geht es?",
    formThemen: [
      "Fehler in einer App",
      "Wunsch für eine Funktion",
      "Frage zum Abo",
      "Frage zu einer App",
      "Etwas anderes"
    ],
    formName: "Dein Name",
    formNamePlatz: "Vorname genügt",
    formMail: "Deine E-Mail",
    formMailPlatz: "damit ich antworten kann",
    formText: "Deine Nachricht",
    formTextPlatz: "Schreib einfach los …",
    formKnopf: "Nachricht schreiben",
    formHinweis: "Es öffnet sich dein E-Mail-Programm mit allem schon eingetragen. Nichts wird von dieser Seite aus verschickt oder gespeichert.",
    formFehlt: "Bitte fülle Thema, Name und Nachricht aus.",
    wobei: [
      { was: "Fehler gefunden", text: "Schreib mir, welche App, welches Gerät und was passiert ist. Ein Screenshot hilft sehr." },
      { was: "Funktion gewünscht", text: "Sag mir, was dir fehlt und warum. Vieles ist schneller gebaut, als man denkt." },
      { was: "Frage zum Abo", text: "Abos laufen über Google Play bzw. den App Store — kündigen kannst du dort jederzeit selbst." },
      { was: "Etwas anderes", text: "Auch gut. Ich freue mich über jede Rückmeldung." }
    ],
    antwortzeit: "Ich bin kein Support-Team, sondern eine Person — an Wochenenden kann es also mal einen Tag dauern."
  },

  fuss: {
    impressum: "Impressum",
    datenschutz: "Datenschutz",
    bildquellen: "Bildquellen",
    kooperation: "Instinct Scoring ist eine Kooperation mit Bogensport Instinct.",
    kein: "Diese Seite setzt keine Cookies und misst nichts. Einzige Verbindung nach außen sind die öffentlichen F1-Renndaten.",
    zurueck: "Nach oben"
  },

  startseiteKurz: "← Startseite",
  startseiteFuss: "Startseite"
},

/* ---------------------------------------------------------- ENGLISCH
   Gerüst steht — zum Übersetzen einfach die Werte füllen.
   Solange 'en' unvollständig ist, greift automatisch 'de'.       */
en: {

  meta: {
    kapitelWort: "Chapter",
    titel: "FaNiCa — Falk Carstensen · Apps from a one-man studio",
    beschreibung: "Eleven products from a one-man media studio: FaNiCa Fun, Instinct Scoring, NeonPunkt, the SetUpLeiste for Windows, plus Campus Clash, YourFilm, ZeitAnker, Tankspur, ScheinBar, AblesBar and the Instinct family.",
    sprachknopf: "DE",
    sprachtitel: "Auf Deutsch umschalten"
  },

  nav: {
    apps: "The apps",
    vergleich: "Compare",
    ueber: "About me",
    kontakt: "Contact",
    sprung: "Skip to content"
  },

  hero: {
    augenbraue: "One-man media studio · Northern Germany",
    text: "From the first idea all the way into Google Play and the App Store. No team, no agency, no buzzwords.",
    karussellHinweis: "Swipe or use the arrows to turn the carousel — tap to open a product."
  },

  /* ====================== CHAPTER 1 — INSTINCT SCORING ================ */
  instinct: {
    untertitel: "The scoring app for archery",
    karteKurz: "Scoring rounds on 3D and field courses",
    statusPille: "On the App Store · Play in testing",
    kooperation: "by Bogensport Instinct · in cooperation with FaNiCa Fun",
    claimDeutsch: "Your course. Your performance. Your progress.",
    positionierung: "The scoring app for traditional and instinctive archery on 3D and field courses. It replaces the paper scorecard. Fully offline. It doesn't judge and it doesn't correct — it records.",

    scheibeSpalte: "Zone",
    scheibeFussnote: "First-arrow values. „Club 3D“ is a club variant, not an official governing-body scoring system.",
    scheibeZonen: [
      { name: "Spot", farbe: "#A7BC55",
        punkte: { "IFAA Hunter": 20, "IFAA Animal": 20, "Target face": 5, "WA 3D": 11, "Club 3D": 18 } },
      { name: "Kill", farbe: "#8DA046",
        punkte: { "IFAA Hunter": 16, "IFAA Animal": 16, "Target face": 4, "WA 3D": 10, "Club 3D": 16 } },
      { name: "Body", farbe: "#5E6B33",
        punkte: { "IFAA Hunter": 12, "IFAA Animal": 12, "Target face": 3, "WA 3D": 8, "Club 3D": 10 } },
      { name: "Miss", farbe: "#2A2E24",
        punkte: { "IFAA Hunter": 0, "IFAA Animal": 0, "Target face": 0, "WA 3D": 0, "Club 3D": 0 } }
    ],
    scheibeSysteme: ["IFAA Hunter", "IFAA Animal", "Target face", "WA 3D", "Club 3D"],

    mehrKnopf: "Everything about Instinct Scoring"
  },

  /* ====================== CHAPTER 2 — FANICA FUN ====================== */
  fanica: {
    merksatzKeiner: "Across <b>{n}</b> predictions submitted, <b>not once</b> has anyone got all five places right.",
    merksatzTreffer: "Across {n} predictions, all five places came out right {t}×.",
    karteKurz: "Predict the top five with friends",
    statusPille: "Live on Google Play & the App Store",
    untertitel: "The prediction game for motorsport friends",
    claim: "Predict the top five.",
    claimZwei: "You only see the others afterwards.",
    positionierung: "You predict the top five of each race — no money involved, just points, trophies and bragging rights. Play solo against your own best score, or open a private round your friends join with a code. You create a profile once; from then on every prediction counts towards your career.",

    mehrKnopf: "Everything about FaNiCa Fun",
    rundeTitel: "What it actually looks like",
    rundeQuelle: "As of race nine of twenty-two in the 2026 season. Real figures from a running round, with the players’ profile names.",

    rundeZahlen: [
      { einheit: "years",   text: "the round has been running" },
      { einheit: "picks",   text: "submitted in total" },
      { einheit: "players", text: "this season" },
      { einheit: "point",   text: "separates first from second" }
    ],
    rundeBilanz: ["exactly right", "right driver, wrong place", "wide of the mark"],
    rundePunkte: "points",
    rundeLaeuftNoch: "still running",
    rundeTrefferTitel: "How often do you actually get it right?",

    rundeSiegerTitel: "Five years, five stories"
  },

  /* ====================== CHAPTER 3 — NEONPUNKT ======================= */
  neonpunkt: {
    rafferStunden: "{h} hr {m} min",
    karteKurz: "One dot, 48 hours, nothing else",
    statusPille: "In store testing",
    untertitel: "The world's most minimal game",
    claim: "One dot. 48 hours.",
    claimZwei: "You can never stop it.",
    positionierung: "A neon dot grows for forty-eight hours until it fills the whole screen. Tap it and it starts small again — in the next of sixteen neon colours. You can't stop it. Only delay it.",

    rafferTitel: "48 hours in twelve seconds",
    rafferText: "This is how it really goes — just sped up. The dot grows, the clock runs along. Tap it and it starts small again in a new colour.",
    rafferKnopfStart: "▶ Play the time-lapse",
    rafferKnopfStopp: "■ Pause",
    rafferZeit: "Elapsed",
    rafferGroesse: "Size",
    rafferHinweis: "Tap the dot while it runs",
    rafferStatisch: "The dot grows steadily across 48 hours until it fills the screen.",

    spielKlicks: "Taps",
    spielFarbe: "Colour",
    spielVon: "of 16",
    spielHinweis: "Tap the dot",

    mehrKnopf: "Everything about NeonPunkt"
  },

  /* ====================== ACTIONS / STORES ============================ */
  /* ============ CHAPTER 4 — SETUPLEISTE (Windows program) ============ */
  setupleiste: {
    vorschauText: "Rebuilt in house style — same fields, same labels as in the program.",
    vorschauFelder: [{ name: "PING", wert: "18 ms" }, { name: "NET ↓↑", wert: "94 / 41" }, { name: "FPS", wert: "142" }, { name: "RAM", wert: "18.4 / 32 GB" }, { name: "CPU", wert: "23 %" }, { name: "CPU-W", wert: "46 W" }, { name: "GPU", wert: "67 %" }, { name: "CLOCK", wert: "2 610 MHz" }, { name: "VRAM", wert: "7.1 / 12 GB" }, { name: "GPU-W", wert: "184 W" }, { name: "TEMP", wert: "62 / 51 °C" }, { name: "POWER", wert: "230 W · 1.84 kWh" }, { name: "UPTIME", wert: "4:12 h" }, { name: "RESOLUTION", wert: "2560×1440 · 165 Hz" }],
    karteKurz: "See what your PC is doing",
    statusPille: "Done · free Windows download",
    untertitel: "The performance bar for your screen edge",
    claim: "What your machine is doing.",
    claimZwei: "One slim line, right at the top.",
    positionierung: "No window, no program in the foreground — a slim bar along the top edge of your screen showing what is really going on: load, temperature, watts, ping, throughput, battery. It always sits centred at the top, folds away when you want it to, and quietly collects your best values.",

    mehrKnopf: "Everything about SetUpLeiste"
  },

  /* ============ CHAPTER 5 — CAMPUS CLASH (IN PROGRESS) ============ */
  campus: {
    planTitel: "Your timetable keeps running",
    planFachEins: "German",
    planFachZwei: "Chemistry",
    planFachDrei: "Weight room",
    planStufe: "Level {n}",
    planAbholen: "Done · collect",
    planStd: "{h} h {m} min",
    planMin: "{m} min {s} s",
    planSek: "{s} s",
    planFuss: "Keeps running even when the app is closed — level after level.",
    planRuhig: "Still image: state after two and a half hours away.",

    karteKurz: "Rise endlessly in the school game",
    statusPille: "In progress — built and playable",
    untertitel: "The endless school game",
    claim: "Your school days keep running.",
    claimZwei: "Even when you put the phone down.",
    positionierung: "An endless school progression game: you develop a student over the years — learning subjects, earning money with jobs, climbing level by level. Training runs on real time and keeps going while the app is closed. The single-player game runs offline, with no account and no server of our own.",

    mehrKnopf: "Everything about Campus Clash"
  },

  yourfilm: {
    scanTitel: "One number, three layers",
    scanPruefungGut: "{art} · check digit {ziffer} matches",
    scanEbeneFilm: "Film — the work",
    scanEbeneAusgabe: "Release — the edition",
    scanEbeneExemplar: "Copy — your own",
    scanScheiben: [
      {
        code: "402356712088", art: "EAN-13", format: "4K UHD",
        film: "Night Aperture", filmZusatz: "1987 · thriller · 118 min · age 16",
        ausgabe: "4K UHD Blu-ray · steelbook", ausgabeZusatz: "2 discs · Dolby Atmos · RRP €34.99",
        exemplar: "Very good · bought 12 Mar 2026", exemplarZusatz: "€24.90 paid · not watched yet",
        regal: "Living room › left cabinet › shelf 2 › slot C"
      },
      {
        code: "507103364117", art: "EAN-13", format: "Blu-ray",
        film: "The Long Haul", filmZusatz: "2004 · drama · 141 min · age 12",
        ausgabe: "Blu-ray · mediabook", ausgabeZusatz: "1 disc · DTS-HD · RRP €24.99",
        exemplar: "Good · on loan to Marek", exemplarZusatz: "due back 19 Sep 2026",
        regal: "Study › window shelf › slot 4"
      },
      {
        code: "88857420311", art: "UPC-A", format: "DVD",
        film: "Salt Wind", filmZusatz: "1996 · documentary · 92 min · age 0",
        ausgabe: "DVD · standard edition", ausgabeZusatz: "1 disc · stereo · RRP €12.99",
        exemplar: "New / sealed · favourite", exemplarZusatz: "€9.50 paid · watched 4 Aug 2026",
        regal: "Basement › film cabinet › shelf 1 › slot A"
      }
    ],
    karteKurz: "Scan and sort your film collection",
    statusPille: "In testing — not in the stores yet",
    untertitel: "Your film collection, under control",
    claim: "Scan. Shelve. Done.",
    claimZwei: "Your collection, neatly organised.",
    positionierung: "A collection app for DVDs and Blu-rays: scan the barcode and the app files the film automatically — the work, the edition, your copy. Four separate prices show what your collection cost and what it is worth today. Entirely on your device, no account.",

    mehrKnopf: "Everything about YourFilm"
  },

  zeitwissen: {
    kontoUeber: "Your time account",
    kontoLaeuft: "Clocked in",
    kontoSoll: "Target",
    kontoIst: "Actual",
    kontoOffen: "still running",
    kontoFehlt: "still to go until target",
    kontoPlus: "That is how much overtime you have built up.",
    kontoMinus: "That is how much time you still owe.",
    kontoNull: "You are exactly on target.",
    kontoHeute: "Today is still running — the balance holds until you clock out.",
    kontoFuss: "Every finished day counts worked minus target. The running day sits neutral on the target line and only counts once you clock out — otherwise you would start every morning in the red.",
    kontoTage: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    karteKurz: "Working hours with a running balance",
    statusPille: "In testing — not in the stores yet",
    untertitel: "Working hours that explain themselves",
    claim: "Clock in. Done.",
    claimZwei: "The app does the rest of the maths.",
    positionierung: "A working-hours app with a running balance: clock in, clock out — overtime and shortfall are tracked for you. If you want, split your time across projects and tasks and export a report as Excel, PDF or HTML at the end of the month. Entirely on your device, no account.",

    mehrKnopf: "All about ZeitAnker"
  },
  familie: {
    drehDaten: [
      { id: "weather",   zahl: 26,   von: 0,  bis: 20,  skalaVon: 0, skalaBis: 40,  einheit: "km/h" },
      { id: "range",     zahl: 54,   von: 60, bis: 100, skalaVon: 0, skalaBis: 100, einheit: "" },
      { id: "builder",   zahl: 7.4,  von: 8,  bis: 12,  skalaVon: 6, skalaBis: 14,  einheit: "gr/lbs" },
      { id: "coach",     zahl: 140,  von: 0,  bis: 0,   einheit: "" },
      { id: "tune",      zahl: 2,    von: 0,  bis: 0,   einheit: "" },
      { id: "scoring",   zahl: 86,   von: 80, bis: 100, skalaVon: 0, skalaBis: 100, einheit: "%" },
      { id: "pack",      zahl: 96,   von: 90, bis: 100, skalaVon: 0, skalaBis: 100, einheit: "%" },
      { id: "community", zahl: null, von: 0,  bis: 0,   einheit: "" },
      { id: "trade",     zahl: null, von: 0,  bis: 0,   einheit: "" },
      { id: "ai",        zahl: null, von: 0,  bis: 0,   einheit: "" }
    ],
    drehTitel: "The hub, live",
    drehMitte: "Hub",
    drehSammelt: "collecting",
    drehBewertet: "judging",
    drehSchickt: "sending back",
    drehBand: "Target range",
    drehUrteilGut: "in range",
    drehUrteilKnapp: "borderline",
    drehUrteilRaus: "out of range",
    drehStatisch: "Wind at 26 km/h sits outside 0–20 km/h, the Eye Score at 54 out of 100. The Coach connects the two and tells Instinct Range: leave distance estimation for another day.",
    drehWerte: [
      { id: "weather",   app: "Instinct Weather",   kurz: "Weather",   label: "Wind",             wert: "26 km/h" },
      { id: "range",     app: "Instinct Range",     kurz: "Range",     label: "Eye Score",        wert: "54 out of 100" },
      { id: "builder",   app: "Instinct Builder",   kurz: "Builder",   label: "Grain per pound",  wert: "7.4 gr/lbs" },
      { id: "coach",     app: "Instinct Coach",     kurz: "Coach",     label: "Arrows this week", wert: "140" },
      { id: "tune",      app: "Instinct Tune",      kurz: "Tune",      label: "Maintenance due",  wert: "2" },
      { id: "scoring",   app: "Instinct Scoring",   kurz: "Scoring",   label: "Hit rate",         wert: "86 %" },
      { id: "pack",      app: "Instinct Pack",      kurz: "Pack",      label: "Packing list",     wert: "96 %" },
      { id: "community", app: "Instinct Community", kurz: "Community", label: "Next event",       wert: "in 6 days" },
      { id: "trade",     app: "Instinct Trade",     kurz: "Trade",     label: "Open listings",    wert: "1" },
      { id: "ai",        app: "Instinct AI",        kurz: "AI",        label: "Open questions",   wert: "0" }
    ],
    drehRat: [
      { anId: "range",   stufe: "Note",   titel: "Leave distance estimation for today", grund: "At 26 km/h no estimate can tell your eye from the arrow drifting. Practise on a calm day." },
      { anId: "builder", stufe: "Urgent", titel: "Increase arrow weight",               grund: "At 7.4 gr/lbs energy stays in the limbs instead of the arrow. Heavier points are cheaper than limbs." },
      { anId: "tune",    stufe: "Urgent", titel: "Catch up on maintenance",             grund: "Two services overdue while training continues. Wear grows with every shot, not with time." }
    ],
    karteKurz: "Ten apps around archery",
    statusPille: "In progress — the apps are being built",
    untertitel: "One app becomes a family",
    claim: "Ten apps. One sport.",
    claimZwei: "Each on its own. All together.",
    positionierung: "Instinct Scoring covers one thing: scoring the round. But archery is more than that — training, arrows, weather, kit, community. That is becoming a family of standalone apps that speak the same language and can share their data. If all you want is scoring, you still just take Instinct Scoring.",

    apps: [
      { bild: "scoring", name: "Instinct Scoring", rolle: "The core — on the App Store", text: "Scoring rounds on 3D and field courses. The only app in the family already in a store." },
      { bild: "coach", name: "Instinct Coach", rolle: "In progress", text: "Training guidance that adapts to the archer, instead of one fixed plan for everyone." },
      { bild: "builder", name: "Instinct Builder", rolle: "In progress", text: "Building and managing arrows: spine, length, fletching, colours." },
      { bild: "tune", name: "Instinct Tune", rolle: "In progress", text: "Tuning bows and keeping the history — with photo comparison over time." },
      { bild: "weather", name: "Instinct Weather", rolle: "In progress", text: "Weather at the course: wind, light, temperature — the conditions you shot in." },
      { bild: "pack", name: "Instinct Pack", rolle: "In progress", text: "Keeping track of kit: an inventory and packing lists, so nothing is missing before a tournament." },
      { bild: "range", name: "Instinct Range", rolle: "In progress", text: "Training on the range: recording and reviewing sessions, kept apart from course rounds." },
      { bild: "community", name: "Instinct Community", rolle: "In progress", text: "Talking to other archers — club, group, shared dates." },
      { bild: "trade", name: "Instinct Trade", rolle: "In progress", text: "Passing kit on: offer, search, find — second-hand archery gear." },
      { bild: "ai", name: "AI-Instinct", rolle: "In progress", text: "Expert advice on traditional archery — ask instead of search." },
      { bild: "familie", name: "Instinct Family", rolle: "The parent app", text: "Brings together what sits in the individual apps: one view of all archers, all results, how it fits together." }
    ],

    mehrKnopf: "All about the Instinct Family"
  },
  tankspur: {
    saeuleZapft: "Pump · counting",
    saeuleBetrag: "To pay",
    saeuleWaehrung: "€",
    saeuleLiter: "Litres",
    saeulePreis: "Price per litre",
    saeuleMal: "times",
    saeuleErgibt: "makes",
    saeuleGeprueft: "recalculated",
    saeuleLaeuft: "The price per litre is fixed — volume and amount count along.",
    saeuleNochmal: "Again",
    karteKurz: "What the car actually costs",
    statusPille: "In testing — not in the stores yet",
    untertitel: "What the car actually costs",
    claim: "Fill up. Type it in.",
    claimZwei: "The app does the rest of the maths.",
    positionierung: "A fuel log that thinks along: enter price per litre and litres — the app fills in the total itself. Kilometres and litres become consumption; consumption and price become cost per 100 kilometres. At the end of the year it tells you what driving really cost. Entirely on your device.",

    mehrKnopf: "All about Tankspur"
  },

  scheinbar: {
    trommelGezogen: "Drawn",
    trommelReihen: "Full lines",
    trommelVon: "{a} of {b}",
    trommelLeer: "—",
    trommelBingo: "Bingo!",
    trommelDoppelt: "Double Bingo!",
    trommelJackpot: "Jackpot!",
    trommelKnopf: "New draw",
    trommelKnopfLaeuft: "Drawing …",
    trommelText: "22 of 75 numbers come up — and the app keeps count of which of the twelve lines fills up: five across, five down, two diagonal. That is exactly the calculation behind every BINGO! ticket.",

    karteKurz: "Photograph the ticket, see the win",
    statusPille: "In testing — test build outside the stores",
    untertitel: "Photograph the ticket, see the win",
    claim: "Take a photo.",
    claimZwei: "The app does the checking.",
    positionierung: "A companion for BINGO!, Lotto 6aus49 and Eurojackpot: photograph the ticket, check the numbers, done. The app fetches the draws itself — the past six months on first start, the new ones from then on. It tells you whether anything came up and in which prize tier. Text recognition runs on the device, and everything is stored there and nowhere else.",

    mehrKnopf: "All about ScheinBar"
  },

  ablesbar: {
    zaehlerwerkStand: "Meter reading",
    zaehlerwerkVerbrauch: "Consumption this month",
    zaehlerwerkVormonat: "Last month's reading",
    zaehlerwerkSaldo: "Against the instalments",
    zaehlerwerkBereich: "Choose area",
    zaehlerwerkGas: "Gas",
    zaehlerwerkWasser: "Water",
    zaehlerwerkStrom: "Electricity",
    zaehlerwerkVorlesen: "{bereich}: meter reading {stand}, consumption this month {verbrauch}.",

    karteKurz: "Read, photograph, settle up",
    statusPille: "In testing — test build outside the stores",
    untertitel: "Read your meters, check your utility bill",
    claim: "Read it. Settle it. Done.",
    claimZwei: "Photograph each meter once a month — the app works out the rest.",
    positionierung: "One photo per meter at the start of the month — gas, water, electricity. The app reads the digits, works out consumption per month and per billing period, and sets the costs against the instalments you have paid. So you always know whether a top-up payment or a refund is building up.",
    mehrKnopf: "All about AblesBar"
  },

  /* ============ LIVE — automatically loaded race data ============ */
  produkt: {
    inhaltName: "On this page",
    alleZeigen: "Show all {anzahl}",
    weniger: "Show less"
  },

  start: {
    alleProdukte: "All products at a glance",
    karussellName: "The products as a carousel",
    karussellLinks: "Turn left",
    karussellRechts: "Turn right",
    karussellWahl: "Bring a product to the front",
    karussellStand: "{name} in front — {nr} of {anzahl}",
    produkteKennung: "The products",
    produkteTitel: "Eleven products, one studio",
    produkteText: "Apps for your phone and one program for Windows — each with its own colour and its own page. Here is the gist in one sentence; every detail is on the product's own page.",
    filterName: "Filter products by status",
    filterAlle: "All",
    filterLive: "Available",
    filterTest: "In testing",
    filterBau: "In progress",
    filterStand: "{anzahl} products shown",
    wegWindows: "Windows download · {groesse}"
  },

  live: {
    naechstesTitel: "The next race",
    lauf: "Round",
    von: "of",
    start: "Start",
    uhr: "",
    rest: "In",
    laeuft: "under way",
    tag: "day",
    tage: "days",
    quelle: "Loaded automatically — the same public source the app itself uses. Calendar, results and countdown keep themselves up to date."
  },

  aktion: {
    androidUnter: "Google Play",
    appleUnter: "App Store",
    webseiteKnopf: "Website",
    zurWebseite: "Visit the app website ↗",
    standTest: "in testing",
    standPruefung: "in review",
    standSpaeter: "coming later"
  },

  /* ====================== COMPARISON & QUESTIONS ====================== */
  vergleich: {
    kennung: "At a glance",
    titel: "Which app is for you?",
    text: "Ten products, ten entirely different purposes — three available, six in testing, one still being built. What they share: their core works offline, they collect nothing about you, and they ask for no account with us. The Instinct Family is not listed here: it is not a single app but ten, and none of them is available yet.",
    spalten: ["", "FaNiCa Fun", "Instinct Scoring", "NeonPunkt", "SetUpLeiste", "Campus Clash", "YourFilm", "ZeitAnker", "Tankspur", "ScheinBar", "AblesBar"],
    zeilen: [
      { name: "What for",       werte: ["Predicting with friends", "Recording archery", "Nothing. That's the appeal.", "Seeing what your PC is doing", "Endless school progression", "Organise and value a film collection", "Tracking and proving working hours", "Keeping fuel costs in view", "Checking and analysing lottery tickets", "Reading meters, checking utility bills"] },
      { name: "Status",         werte: ["Live in both stores", "On the App Store · Play in testing", "In store testing", "Finished, ready to download", "In progress", "In testing · not in a store yet", "In testing · not in a store yet", "In testing · not in a store yet", "Test build outside the stores", "Test build outside the stores"] },
      { name: "Alone or together", werte: ["Both — solo or in a group", "Both", "Alone", "Alone", "Both — friends & alliance", "Alone", "Alone", "Alone", "Alone", "Alone"] },
      { name: "Internet needed", werte: ["Only to sync", "Only for tournaments", "Never", "Only to measure the line", "Never", "Only for film data (optional)", "Never", "Never", "Only for the subscription and downloads", "Only for the update check"] },
      { name: "Profile needed", werte: ["Yes — created once", "No", "No", "No", "No", "No", "No", "Yes — created once", "Yes — created once", "Account or guest — both work"] },
      { name: "Size",           werte: ["13 views", "23 screens", "1 screen", "11 readings", "8 areas · 40 subjects", "13 screens", "14 screens", "5 screens", "12 screens · 3 games", "18 screens"] },
      { name: "Languages",      werte: ["2", "2", "16", "1", "1", "1", "1", "1", "2", "2"] },
      { name: "Free to use",    werte: ["Predicting — current and last race", "Shooting & scoring rounds", "The first 500 taps", "Everything — the whole program", "Everything — nothing to buy yet", "Everything — nothing to buy yet", "Clocking, time account, day to month", "Everything — the whole app", "10 tickets · last 10 draws", "Everything — nothing to buy yet"] },
      { name: "Premium from",   werte: ["€1.99 / 4 weeks", "€1.99 — Plus €2.99", "€0.49 / 4 weeks", "—", "not decided yet", "not decided yet", "€0.49 / 4 weeks", "—", "€0.49 / 4 weeks", "not decided yet"] },
      { name: "Platform",       werte: ["Android · iOS", "Android · iOS", "Android · iOS", "Windows", "Android", "Android", "Android · iOS", "Android · iOS", "Android · iOS", "Android · iOS"] }
    ],
    fuss: "Prices apply to the apps with Premium, each with a seven-day free trial. SetUpLeiste is entirely free; for Campus Clash, YourFilm and AblesBar it is not yet decided whether anything will cost money."
  },

  fragen: {
    kennung: "Common questions",
    titel: "What people usually ask",
    liste: [
      { f: "Do I need an account for the apps?",
        a: "For most of them, no — you install them and start. A profile is only needed for FaNiCa Fun (several people predict in the same group), Tankspur, ScheinBar and AblesBar (several drivers, players or households on one device — AblesBar also works as a guest). Those profiles live on the device, not with us." },
      { f: "Do the apps work without internet?",
        a: "The core of every app works without a connection, and all data sits on your device. A connection is only needed for what comes from outside: race results and syncing other players in FaNiCa Fun, film data in YourFilm, downloading draws in ScheinBar. NeonPunkt, ZeitAnker, Tankspur and AblesBar need none at all." },
      { f: "What happens to my data?",
        a: "It stays on your device. None of the apps has ads, analytics or data sharing. That is not a marketing line but a deliberate decision — the income comes purely from subscriptions." },
      { f: "What does it cost me?",
        a: "Every app is free to use. Premium unlocks extra features and starts at €0.49 per four weeks; the first seven days are always free, with nothing to cancel. SetUpLeiste costs nothing at all, and for Campus Clash, YourFilm and AblesBar it is not yet decided whether anything will cost money." },
      { f: "Do I lose my data if I don't pay?",
        a: "No. Without a subscription features are locked, nothing is deleted. In NeonPunkt the game pauses after 500 taps — counters and leaderboards stay intact." },
      { f: "Who is behind the apps?",
        a: "Me, Falk Carstensen. No company, no team, no investor. If you write an email, I read and answer it myself." },
      { f: "Can I take my data with me?",
        a: "In Instinct Scoring, yes: a full backup as a file, plus CSV export and round reports as PDF. A backup is verified before being restored — nothing damaged is ever imported." },
      { f: "Will there be more updates?",
        a: "Yes, all the apps are still being developed. Updates come through the store you installed the app from; the apps still in testing outside the stores report a new version themselves." }
    ]
  },

  /* ====================== ABOUT THE DEVELOPER ========================= */
  ueber: {
    kennung: "About me",
    titel: "One person, one studio",
    text: "I'm from Northern Germany and I work alone. No team, no office, no investor. What I do have is a clear idea of how an app should feel — and AI as a toolbox that takes on the work that used to need five people.",

    ablaufTitel: "How a project comes about",
    ablauf: [
      { nr: "01", titel: "Idea", text: "Usually an everyday annoyance. Instinct Scoring exists because paper scorecards go soggy in the rain." },
      { nr: "02", titel: "Specification", text: "Everything gets written down before a line of code exists. What the app will NOT do is in there too." },
      { nr: "03", titel: "Building", text: "Flutter for anything that should look the same on Android and iPhone, Kotlin where it needs to sit closer to the device. AI writes alongside me, I decide." },
      { nr: "04", titel: "Testing", text: "On real devices, outdoors, wearing a glove. What looks good at a desk often fails in the woods." },
      { nr: "05", titel: "Store", text: "Google Play and the App Store, both reviews, every form. The dullest and most instructive part." }
    ],

    zahlen: [
      { zahl: "11", text: "products" },
      { zahl: "2", text: "stores" },
      { zahl: "16", text: "languages" }
    ]
  },

  /* ====================== CONTACT & FOOTER ============================ */
  kontakt: {
    titel: "Write to me",
    text: "Questions about an app, found a bug, got an idea? I read every email myself — there's nobody else.",
    knopf: "fanicafuntipp@gmail.com",

    klappTitel: "Write a message",
    klappText: "Pick a topic, enter your name and email and write what it's about. When you send, your email program opens with the message ready — you just hit send.",

    formThema: "What's it about?",
    formThemen: [
      "A bug in an app",
      "A feature request",
      "Question about the subscription",
      "Question about an app",
      "Something else"
    ],
    formName: "Your name",
    formNamePlatz: "first name is enough",
    formMail: "Your email",
    formMailPlatz: "so I can reply",
    formText: "Your message",
    formTextPlatz: "Just start writing …",
    formKnopf: "Write the message",
    formHinweis: "Your email program opens with everything filled in. Nothing is sent or stored from this page.",
    formFehlt: "Please fill in topic, name and message.",
    wobei: [
      { was: "Found a bug", text: "Tell me which app, which device and what happened. A screenshot helps a lot." },
      { was: "Want a feature", text: "Tell me what's missing and why. Plenty of things are quicker to build than you'd think." },
      { was: "Question about the subscription", text: "Subscriptions run through Google Play or the App Store — you can cancel there yourself at any time." },
      { was: "Something else", text: "Also good. I'm glad of any feedback." }
    ],
    antwortzeit: "I'm not a support team but one person — at weekends it can take a day."
  },

  fuss: {
    impressum: "Legal notice",
    datenschutz: "Privacy",
    bildquellen: "Image credits",
    kooperation: "Instinct Scoring is a cooperation with Bogensport Instinct.",
    kein: "This site sets no cookies and measures nothing. Its only outside connection is the public F1 race data.",
    zurueck: "Back to top"
  },

  startseiteKurz: "← Home",
  startseiteFuss: "Home"
}
};

/* Sprache bestimmen und Rückfall auf Deutsch, wenn eine Übersetzung fehlt. */
window.SPRACHE = (localStorage.getItem("fanica_sprache") === "en") ? "en" : "de";

function T(pfad) {
  const teile = pfad.split(".");
  let a = TEXTE[window.SPRACHE], b = TEXTE.de;
  for (const t of teile) {
    a = (a && a[t] !== undefined) ? a[t] : undefined;
    b = (b && b[t] !== undefined) ? b[t] : undefined;
  }
  return (a !== undefined && a !== null && a !== "") ? a : b;
}
