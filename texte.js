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
    beschreibung: "Zehn Produkte aus einem Ein-Mann-Medienstudio: FaNiCa Fun, Instinct Scoring, NeonPunkt, die SetUpLeiste für Windows sowie Campus Clash, YourFilm, ZeitAnker, Tankspur, ScheinBar und die Instinct Familie.",
    sprachknopf: "EN",
    sprachtitel: "Switch to English"
  },

  nav: {
    apps: "Die Apps",
    ueber: "Über mich",
    kontakt: "Kontakt",
    sprung: "Zum Inhalt springen"
  },

  hero: {
    augenbraue: "Ein-Mann-Medienstudio · Nordfriesland",
    titel: "Ich baue Apps.",
    titelZwei: "Drei sind fertig.",
    text: "Von der ersten Idee bis in Google Play und den App Store. Ohne Team, ohne Agentur, ohne Buzzwords.",
    knopfApps: "Die Apps ansehen",
    knopfUeber: "Über mich",
    punkte: [
      { farbe: "oliv", name: "Instinct Scoring", ziel: "#instinct" },
      { farbe: "rot", name: "FaNiCa Fun", ziel: "#fanica" },
      { farbe: "neon", name: "NeonPunkt", ziel: "#neonpunkt" }
    ],
    appFanica: "Tipprunde",
    appInstinct: "Bogensport",
    appNeon: "Klick-Spiel",
    appSetup: "PC-Anzeige",
    appCampus: "In Bearbeitung",
    appYourfilm: "Im Test",
    appZeitwissen: "Im Test",
    appFamilie: "Coming Soon",
    appTankspur: "Im Test",
    scrollHinweis: "Scrollen",
    karussellHinweis: "Antippen führt direkt zur App — die Pfeile drehen die Auswahl."
  },

  /* ====================== KAPITEL 1 — INSTINCT SCORING ================ */
  instinct: {
    kennung: "Kapitel 02",
    karteKurz: "Bogenrunden werten auf 3D- und Feldparcours",
    karteStatus: "Im App Store",
    statusPille: "Im App Store · bei Play im Test",
    kooperation: "by Bogensport Instinct · in Kooperation mit FaNiCa Fun",
    name: "Instinct Scoring",
    claim: ["TRACK.", "SCORE.", "IMPROVE."],
    claimDeutsch: "Dein Parcours. Deine Leistung. Dein Fortschritt.",
    zitat: "Der Schütze entscheidet. Die App dokumentiert.",
    positionierung: "Die Scoring-App für traditionelles und instinktives Bogenschießen auf 3D- und Feldparcours. Sie ersetzt den Papierzettel. Komplett offline. Sie bewertet nichts und korrigiert nichts — sie dokumentiert.",


    /* --- DSB-Fassung im Bau (Falk 21.08.2026) --------------------
       Die Live-App kann das NICHT. Deshalb steht ueberall dabei,
       dass es eine kommende Fassung ist. */
    dsbTitel: "In Arbeit: die DSB-Fassung",
    dsbText: "Instinct Scoring wertet bisher, was auf dem Parcours zählt. Parallel entsteht eine Fassung für den Wettkampfbetrieb nach den Regeln des Deutschen Schützenbundes — mit allem, was ein Turnier dafür braucht. Sie steckt noch nicht in der App, die es im Store gibt.",
    dsbWasTitel: "Was „DSB-konform“ bedeutet",
    dsbWasText: "Im DSB wird nicht frei gewertet: Wie weit geschossen wird, auf welche Auflage, mit wie vielen Pfeilen und in welcher Zeit — das hängt an Bogenklasse, Altersklasse und Disziplin. Die App rechnet diese Klassen aus dem Jahrgang aus und zeigt beim Werten genau die Bedingungen des Schützen, der gerade dran ist. Die Werte stehen nicht im Programm, sondern in einer eigenen Regeldatei mit 112 Bedingungen, geprüft gegen die Sportordnung. Ändert der Verband etwas, wird die Datei getauscht — nicht die App.",
    dsbDazuTitel: "Was dazukommt",
    dsbDazu: [
      { name: "DSB als sechstes Wertungssystem", text: "Zehnerringe mit X, Halle über drei Pfeile, im Freien über sechs — neben den fünf Systemen, die es schon gibt." },
      { name: "Klassen aus dem Jahrgang", text: "Acht Bogenklassen, sieben Altersklassen, zwei Disziplinen. Beim Rundenende wird die Klasse eingefroren, damit dieselbe Runde nächstes Jahr nicht anders dasteht." },
      { name: "Rolle Turnierleitung", text: "Eine eigene Oberfläche für den Leiter: Wettkampf anlegen, Startliste führen, Schützen auf Scheiben verteilen, Schießzeit freigeben." },
      { name: "Gesperrte Passen", text: "Eine bestätigte Passe ist zu. Wer korrigieren will, stellt einen Antrag — die Leitung gibt ihn frei, mit Protokoll." },
      { name: "Übergabe per QR oder Netz", text: "Die Scheiben gehen an die Leitung: entweder über einen QR-Code oder direkt über das WLAN vor Ort. Ohne Server, ohne Konto." },
      { name: "Rangliste je Klasse", text: "Gewertet wird innerhalb der Klasse. Bei Gleichstand entscheidet die Disziplin — im Freien zählt zuerst das X." },
      { name: "Ausdrucke", text: "Ergebnisliste zum Aushang, nach Klassen gegliedert. Und Schusszettel mit jeder Passe und Unterschriftsfeldern, wie die Sportordnung sie verlangt." }
    ],

    /* --- Die Hauptseite der App vorstellen (Falk 30.07.) --- */
    startTitel: "Die Startseite",
    startText: "Alles beginnt hier. Ein Tipp auf den grünen Knopf und die Runde läuft — Wertungssystem, Modus und Schützen stehen schon vom letzten Mal. Darunter Profil, Turnier und Statistik. Was Premium braucht, steht offen dabei; nichts ist versteckt.",
    startPunkte: [
      { name: "Neue Runde", text: "Der Hauptknopf. Führt in zwei Tipps zur laufenden Runde." },
      { name: "Profil", text: "Deine Schützen, Bögen und Pfeilsetups an einem Ort." },
      { name: "Turnier", text: "Mehrere Runden zu einem Wettkampf zusammenfassen." },
      { name: "Statistiken", text: "Fortschritt und Auswertungen über alle Runden." }
    ],
    startZeile: "„Alle Daten bleiben auf deinem Gerät. Internet ist nie Voraussetzung.“ — steht so in der App.",
    bildStart2: "bilder/instinct/start.webp",
    bildStart2Alt: "Instinct Scoring: Startseite mit Bogenschützen-Logo, Waldkulisse und dem Menü Neue Runde, Profil, Turnier, Statistiken",

    bloecke: [
      {
        kennung: "01",
        titel: "Runden erfassen",
        text: "Fünf Wertungssysteme, Training oder Turnier per Schalter, mehrere Schützen je Runde. Die Trefferzonen-Tasten sind groß genug für den Handschuh — erfasst in Sekunden.",
        punkte: [
          "Fünf Systeme: IFAA Hunter und Animal, Scheibe, WA 3D, Freizeit 3D — wer sie festlegt, steht weiter unten",
          "Training oder Turnier — ein Schalter",
          "Mehrere Schützen je Runde, Gruppen mit einem Tipp",
          "Große Trefferzonen: Kill · Körper · Treffer · Vorbei",
          "Zwischenstand jederzeit, Endergebnis mit Podium",
          "Abgeschlossene Runden sind unveränderlich"
        ],
        bild: "bilder/instinct/runde.webp",
        alt: "Instinct Scoring: Bildschirm zum Erfassen einer Runde mit großen Trefferzonen-Tasten"
      },
      {
        kennung: "02",
        titel: "Parcours & Ziele",
        text: "Lege deine Parcours einmal an — mit Tiermotiv, Entfernung, Pflock und Steigung. Beim nächsten Mal stehen alle Ziele schon da.",
        punkte: [
          "Eigene Parcours mit allen Zielen anlegen",
          "Tiermotiv, Entfernung, Pflock, Steigung je Ziel",
          "Foto je Ziel direkt aus der App aufnehmen",
          "Parcours wählen — alle Ziele stehen automatisch in der Runde"
        ],
        bild: null,   // vorhandener Screenshot zeigt nur den leeren Zustand
        alt: ""
      },
      {
        kennung: "03",
        titel: "Ausrüstung",
        text: "Bögen und Pfeilsetups mit allen Details. Das Entscheidende: Die Ausrüstung wird je Runde als Momentaufnahme festgehalten — änderst du später etwas, bleibt die Historie trotzdem korrekt.",
        punkte: [
          "Bögen: Typ, Zuggewicht, Standhöhe, Tiller, Sehne",
          "Pfeile: Schaft, Spine, Länge, Gewicht, FOC, Befiederung, Spitze",
          "Je Runde als Momentaufnahme fixiert",
          "Die Historie bleibt echt — auch nach Umbauten"
        ],
        bild: null,   // vorhandener Screenshot zeigt nur den leeren Zustand
        alt: ""
      },
      {
        kennung: "04",
        titel: "Statistik",
        text: "Punkteschnitt, Trefferquote je Zone und der Verlauf über die Zeit. Keine Bewertung, keine Ratschläge — nur deine Zahlen.",
        punkte: [
          "Punkteschnitt und Trefferquote je Zone",
          "Verlauf über die Zeit als Diagramm",
          "Komplette Runden-Historie mit allen Details"
        ],
        bild: null,   // vorhandener Screenshot zeigt nur den leeren Zustand
        alt: ""
      }
    ],

    /* --- Interaktive Zielscheibe: die Wertungssysteme im Vergleich ---
       Zahlen 1:1 aus dem App-Quellcode
       (features/scoring/domain/model/builtin_scoring_systems.dart).
       Nichts geraten — bei Änderungen in der App hier nachziehen. */
    scheibeTitel: "Fünf Wertungssysteme, eine Scheibe",
    scheibeText: "Tipp auf eine Zone — du siehst sofort, was sie in jedem System zählt. Genau diese Umrechnung nimmt dir die App im Parcours ab.",
    scheibeHinweis: "Zone antippen",
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

    /* --- Funktionsumfang (Zahlen aus dem Quellcode gezaehlt) --- */
    umfangTitel: "Was drinsteckt",
    umfangText: "Instinct Scoring ist die größte App im Studio. 23 Bildschirme, 19 Funktionsbereiche — hier das Wichtigste im Überblick.",
    umfangZahlen: [
      { zahl: "23", text: "Bildschirme" },
      { zahl: "19", text: "Funktionsbereiche" },
      { zahl: "5", text: "Wertungssysteme" },
      { zahl: "30", text: "Schützen-Symbole" }
    ],
    umfangListe: [
      { name: "Runde führen", text: "Ziel für Ziel werten, unterbrechen und später fortsetzen — die App merkt sich, wo du warst." },
      { name: "Mehrere Schützen", text: "Gruppen und Teams in derselben Runde, jeder mit eigener Farbe und eigenem Symbol." },
      { name: "Zwischenstand", text: "Rangliste und Durchschnitt mitten in der Runde, ohne sie zu unterbrechen." },
      { name: "Podium am Ende", text: "Auswertung mit Platz 1 bis 3 und allen Kennzahlen der Runde." },
      { name: "Parcours-Verwaltung", text: "Ziele mit Motiv, Entfernung, Pflockfarbe und Steigung — einmal angelegt, immer da." },
      { name: "Bögen & Pfeile", text: "Vollständige technische Daten, je Runde als Momentaufnahme eingefroren." },
      { name: "Spine-Rechner", text: "Sagt dir, welche Schaftsteifigkeit zu deinem Bogen passt (Premium)." },
      { name: "Statistik", text: "Punkteschnitt, Trefferquote je Zone, Punkteverlauf als Diagramm." },
      { name: "Zuggewicht-Vergleich", text: "Mit welcher Bogenstärke triffst du tatsächlich besser?" },
      { name: "Auswertung nach Tierart", text: "Welche Motive dir liegen — und welche nicht." },
      { name: "Turniere", text: "Termine aus einem Online-Feed verfolgen und eigene Turniere anlegen." },
      { name: "Scheibenfotos", text: "Trefferbilder mit Datum und Namen archivieren." },
      { name: "PDF & CSV", text: "Rundenbericht als PDF teilen, Daten als CSV ausgeben." },
      { name: "Backup", text: "Vollständige Sicherung mit Prüfsumme — Ungültiges wird nie eingespielt." }
    ],
    umfangAnzeigenTitel: "Was die Statistik zeigt",
    umfangAnzeigen: [
      "Punkteschnitt je Ziel und je Pfeil",
      "Trefferquote je Zone, mit Anzahl und Prozent",
      "Rundenzahl, Ziele, Pfeile und dein Rekord",
      "Punkteverlauf über die Zeit als Liniendiagramm",
      "Welcher Bogen in wie vielen Runden im Einsatz war",
      "Duelle und Team-Wertung, wenn ihr in Gruppen schießt",
      "Zuggewicht-Vergleich als Balken",
      "Durchschnitt je Tierart"
    ],
    umfangFilter: "Alles filterbar nach Schütze, Zuggewicht und Modus.",

    /* --- Kleines Glossar: die Begriffe am Bogen (Falk 30.07.) --- */
    glossarTitel: "Die Begriffe am Bogen",
    glossarText: "Wer neu dabei ist, stolpert über ein paar Wörter. Hier stehen sie in einem Satz erklärt — alles davon erfasst die App zu deinem Bogen.",
    glossar: [
      { begriff: "Zuggewicht",
        text: "Die Kraft in Pfund, die du beim vollen Auszug halten musst. Höheres Zuggewicht heißt schnellerer Pfeil, aber auch mehr Anstrengung." },
      { begriff: "Standhöhe",
        text: "Der Abstand zwischen Sehne und Griff bei ungespanntem Bogen. Schon wenige Millimeter ändern, wie ruhig der Bogen im Schuss liegt." },
      { begriff: "Tiller",
        text: "Der Unterschied, wie stark oberer und unterer Wurfarm vorgespannt sind. Stimmt er nicht, kippt der Bogen beim Lösen." },
      { begriff: "Nockpunkt",
        text: "Die markierte Stelle auf der Sehne, an der der Pfeil eingehängt wird. Immer dieselbe Stelle heißt: immer derselbe Abflug." },
      { begriff: "Wurfarm",
        text: "Die beiden federnden Schenkel des Bogens. Sie speichern die Energie und geben sie an den Pfeil ab." },
      { begriff: "Schaft",
        text: "Das Rohr des Pfeils — aus Carbon, Aluminium oder Holz. Seine Steifigkeit ist der Spine." },
      { begriff: "Insert",
        text: "Die kleine Hülse vorn im Schaft, in die die Spitze geschraubt wird. Zählt beim Spitzengewicht mit." },
      { begriff: "Grain",
        text: "Die Gewichtseinheit im Bogensport. 1 Grain sind etwa 0,065 Gramm — Spitzen wiegen typisch 80 bis 125 Grain." },
      { begriff: "Let-off",
        text: "Nur beim Compound: Wie viel Zuggewicht dir die Umlenkrollen im Vollauszug abnehmen. Bei 80 % hältst du von 60 Pfund nur noch 12." }
    ],

    /* --- Wer legt die Regeln fest? --- */
    verbaendeTitel: "Wer legt die Wertungen fest?",
    verbaende: [
      { name: "IFAA",
        lang: "International Field Archery Association",
        text: "Weltverband für Feld- und 3D-Bogensport. Von ihm stammen die Runden „Hunter“ und „Animal“ mit der 20/16/12-Wertung." },
      { name: "WA",
        lang: "World Archery",
        text: "Der olympische Dachverband. Seine 3D-Wertung 11/10/8/5 gilt bei offiziellen Turnieren und auch beim DSB." },
      { name: "Vereins­varianten",
        lang: "ohne Verband",
        text: "„Scheibe“ und „Freizeit 3D“ sind keine offiziellen Regelwerke, sondern verbreitete Hausrunden. Die App kennt sie trotzdem — geschossen wird, was vor Ort gilt." }
    ],

    datenTitel: "Deine Daten gehören dir",
    datenText: "Kein Konto. Keine Anmeldung. Keine Werbung. Kein Tracking. Die App braucht das Internet nie — sie funktioniert im Wald genauso wie zu Hause.",
    datenPunkte: [
      "100 % offline — alles bleibt auf deinem Gerät",
      "Backup als Datei, jederzeit wieder einspielbar",
      "Ergebnis-Bericht als PDF teilen"
    ],

    versprechenTitel: "Gebaut für draußen",
    versprechen: [
      { zahl: "3 s", text: "Jede wichtige Aktion in höchstens drei Sekunden" },
      { zahl: "1 Hand", text: "Große Knöpfe, Einhand-Bedienung mit Handschuh" },
      { zahl: "Sonne", text: "Kontraste, die auch bei Gegenlicht lesbar bleiben" }
    ],

    /* --- Erklärteil: die Bogenarten, für die die App gemacht ist --- */
    boegenTitel: "Für welche Bögen?",
    boegenText: "Die App macht keinen Unterschied zwischen den Bogenarten — sie erfasst zu jedem Bogen die Werte, die für ihn wichtig sind. Hier, was das jeweils heißt.",
    boegen: [
      {
        name: "Recurve",
        kurz: "Der olympische",
        text: "Wurfarme, die sich am Ende nach vorn zurückbiegen — daher der Name. Das gibt mehr Pfeilgeschwindigkeit bei gleichem Zuggewicht. Meist mit Visier, Stabilisator und Klicker geschossen.",
        erfasst: ["Zuggewicht", "Standhöhe", "Tiller", "Sehnenmaterial"],
        farbe: "#A7BC55"
      },
      {
        name: "Langbogen",
        kurz: "Der traditionelle",
        text: "Ein durchgehender, leicht gebogener Stab ohne Recurve-Enden. Kein Visier, kein Zubehör — geschossen wird instinktiv. Ruhiger im Schuss, aber langsamer und verzeihender im Fehler.",
        erfasst: ["Zuggewicht", "Bogenlänge", "Standhöhe", "Sehnenmaterial"],
        farbe: "#8DA046"
      },
      {
        name: "Blankbogen",
        kurz: "Der nackte",
        text: "Ein Recurve ohne Visier und Stabilisator — also „blank“. Gezielt wird über die Pfeilspitze oder per Stringwalking, also durch Umgreifen der Sehne. Beliebteste Klasse auf 3D-Parcours.",
        erfasst: ["Zuggewicht", "Standhöhe", "Tiller", "Nockpunkt"],
        farbe: "#7C8B3E"
      },
      {
        name: "Compound",
        kurz: "Der technische",
        text: "Mit Umlenkrollen an den Wurfarmenden. Im Vollauszug hält man nur noch einen Bruchteil des Zuggewichts — das erlaubt langes, ruhiges Zielen. Höchste Präzision, meist mit Release geschossen.",
        erfasst: ["Zuggewicht", "Let-off", "Auszugslänge", "Nockpunkt"],
        farbe: "#6B7A3A"
      }
    ],
    boegenErfasst: "Die App erfasst:",

    /* --- Erklärteil: Pfeildaten, die die App je Setup festhält --- */
    pfeileTitel: "Und was am Pfeil zählt",
    pfeileText: "Zu jedem Pfeilsetup hält die App die Werte fest, die den Flug bestimmen. Änderst du später etwas, bleiben die alten Runden trotzdem korrekt — die Ausrüstung wird je Runde als Momentaufnahme eingefroren.",
    pfeile: [
      { begriff: "Spine", erklaerung: "Wie stark sich der Schaft beim Schuss durchbiegt. Passt er nicht zum Bogen, fliegt der Pfeil schief." },
      { begriff: "FOC", erklaerung: "Wie weit der Schwerpunkt vorn liegt. Mehr FOC heißt stabilerer Flug, aber flachere Bahn auf Distanz." },
      { begriff: "Befiederung", erklaerung: "Naturfeder oder Kunststoff, Länge und Anstellwinkel — sie stabilisiert den Pfeil hinten." },
      { begriff: "Spitzengewicht", erklaerung: "In Grain. Verändert FOC und Gesamtgewicht und damit den Treffpunkt." }
    ],

    /* --- Erklärteil: Der Spine-Rechner (Premium, seit 1.6.0) --- */
    spineTitel: "Der Spine-Rechner",
    spineFrage: "Was ist Spine überhaupt?",
    spineAntwort: "Spine ist die Steifigkeit des Pfeilschafts — wie stark er sich beim Schuss durchbiegt. Der Pfeil schlängelt sich um den Bogen herum, statt gerade abzufliegen. Ist der Schaft zu weich oder zu steif für deinen Bogen, verlässt er den Bogen schief und trifft daneben, egal wie sauber du schießt.",
    spineWarum: "Deshalb der Rechner: Du gibst ein, was du hast — er sagt dir, welche Schaftsteifigkeit dazu passt. Für Holzpfeile in Pfund, für Carbonpfeile als Spine-Zahl (kleinere Zahl = steiferer Schaft).",
    spineEingabeTitel: "Das gibst du ein",
    spineEingaben: [
      { feld: "Zuggewicht", hinweis: "in Pfund, auf den Fingern gemessen" },
      { feld: "Pfeillänge", hinweis: "in Zoll, reine Schaftlänge ohne Spitze und Nocke" },
      { feld: "Spitze + Insert", hinweis: "in Grain" },
      { feld: "Sehnenstränge", hinweis: "Anzahl, 4 bis 28" },
      { feld: "Sehnenmaterial", hinweis: "Fast Flight oder Dacron" },
      { feld: "Wurfarmmaterial", hinweis: "von Vollcarbon bis Holz/Bambus" },
      { feld: "Bogentyp", hinweis: "Recurve, Langbogen oder Hybrid" }
    ],
    spineErgebnisTitel: "Das kommt heraus",
    spineErgebnis: "Zwei Werte samt Toleranzband: den Holzspine in Pfund und den Carbonspine als Zahl. Dazu die Einordnung „eher hart“, „optimal“ oder „eher weich“ und die handelsüblichen Spine-Größen von 250 bis 1500, damit du weißt, welchen Schaft du tatsächlich kaufen kannst. Das Ergebnis lässt sich direkt als neues Pfeilsetup übernehmen.",
    spineHinweis: "Der Spine-Rechner gehört zu Premium.",

    /* --- Erklärteil: Parcours, Pflock, Duell --- */
    parcoursTitel: "Parcours, Pflock, Duell — kurz erklärt",
    parcoursBegriffe: [
      { begriff: "3D-Parcours",
        text: "Ein Rundkurs im Gelände mit Tierattrappen aus Schaumstoff statt Ringscheiben. Man geht von Ziel zu Ziel, meist 20 bis 28 Stück, und schießt jedes einmal — wie beim Golf, nur mit Pfeilen." },
      { begriff: "Pflock",
        text: "Der Punkt im Boden, von dem aus geschossen wird. Die Farbe sagt, für wen er gilt und wie weit es bis zum Ziel ist. Die App kennt Rot, Blau, Gelb und Weiß." },
      { begriff: "Kill / Spot",
        text: "Die kleine Trefferzone im Tier, die die meisten Punkte bringt. Darum herum liegen weitere Zonen mit weniger Punkten — wie die Ringe einer Scheibe, nur unsichtbar in die Figur eingearbeitet." },
      { begriff: "Steigung",
        text: "Bergauf oder bergab verändert die tatsächliche Schussweite. Die App hält je Ziel fest, ob es eben, bergauf oder bergab lag." },
      { begriff: "Duell-Modus",
        text: "Zwei oder mehr Teams treten gegeneinander an. Die Rundenpunkte aller Mitglieder werden addiert, oben läuft der Zwischenstand mit — „Team A 123 : 98 Team B“. Gehört zu Premium+." }
    ],

    /* --- Die drei Stufen (Werte aus upgrade_page.dart) --- */
    stufenTitel: "Drei Stufen",
    stufenText: "Sieben Tage lang ist alles frei — danach entscheidest du. Runden schießen und werten geht immer, auch ohne Abo.",
    stufen: [
      {
        name: "Gratis",
        preis: "0 €",
        zeile: "für immer",
        kann: ["Runden spielen & werten", "Eigene Parcours anlegen",
               "Ziel-Fotos aufnehmen", "Bogen & Pfeilsetup anlegen",
               "Sicherung erstellen"],
        grenze: "3 Schützen · 1 Bogen je Schütze · Historie 1 Runde"
      },
      {
        name: "Premium",
        preis: "1,99 €",
        zeile: "je 4 Wochen · 19,99 € im Jahr",
        kann: ["Beliebig viele Schützen", "Gruppen & Teams",
               "Mehrere Bögen & Setups", "Komplette Statistik",
               "Turniere", "Spine-Rechner", "Sicherung einspielen"],
        grenze: "Historie 3 Runden · 7 Farben · 10 Symbole · 1 Spine-Profil",
        hervor: true
      },
      {
        name: "Premium+",
        preis: "2,99 €",
        zeile: "je 4 Wochen · 29,99 € im Jahr",
        kann: ["Volle Historie", "Duell-Modus",
               "Parcours-Suche nach PLZ & Umkreis",
               "Alle 30 Farben & Symbole", "Spine-Profile speichern",
               "Statistik-Export als CSV", "Ergebnis als PDF teilen",
               "Fotos & Tierart nachträglich ändern", "App-Symbol wechseln"],
        grenze: "Keine Grenzen"
      }
    ],

    zielgruppe: ["Recurve", "Langbogen", "Blankbogen", "Compound", "traditionell"],
    preis: "Sieben Tage Premium+ gratis testen, danach ab 1,99 € je 4 Wochen. Runden schießen und werten bleibt dauerhaft kostenlos.",
    mehrKnopf: "Alles über Instinct Scoring",
    mehrText: "Die vier Bogenarten mit Zeichnung, der Spine-Rechner erklärt, das Glossar der Bogen-Begriffe, wer welche Wertung festlegt und die drei Preisstufen im Vergleich.",
    bildStart: "bilder/instinct/start.webp",
    bildStartAlt: "Instinct Scoring: Startbildschirm mit Bogenschützen-Logo vor Waldkulisse"
  },

  /* ====================== KAPITEL 2 — FANICA FUN ====================== */
  fanica: {
    kennung: "Kapitel 01",
    karteKurz: "Mit Freunden auf die ersten Fünf tippen",
    karteStatus: "Live in beiden Stores",
    statusPille: "Live bei Google Play & im App Store",
    name: "FaNiCa Fun",
    untertitel: "Die Tipprunde für Motorsport-Freunde",
    claim: "Tippe die ersten Fünf.",
    claimZwei: "Die anderen siehst du erst danach.",
    positionierung: "Getippt wird auf die Top 5 jedes Rennens — ohne Geldeinsatz, nur um Punkte, Pokale und Ehre. Du kannst allein gegen deine eigene Bestleistung antreten oder eine private Runde mit Freunden eröffnen, zu der die anderen per Code dazukommen. Ein Profil legst du einmal an, danach zählt jeder Tipp auf deine Karriere ein.",

    kernTitel: "Der Kniff",
    kernText: "Kein Abschreiben: Die Tipps der anderen bleiben verborgen, bis du selbst abgegeben hast. Erst dann öffnet sich das Feld — und alle sehen alles.",

    punkteTitel: "So werden Punkte vergeben",
    punkteRegeln: [
      { zahl: "+3", text: "Fahrer auf der exakt richtigen Position" },
      { zahl: "+1", text: "Fahrer in den Top 5, aber auf falscher Position" },
      { zahl: "15", text: "Höchstmögliche Punktzahl je Rennen — und zugleich die Diamant-Schwelle" },
      { zahl: "0", text: "Kein Tipp abgegeben. Strafpunkte gibt es nicht." }
    ],

    /* --- So läuft eine Tipprunde ab (Werte aus lib/rechner.dart, lib/modelle.dart) --- */
    ablaufTitel: "So läuft eine Renn-Woche",
    ablaufSchritte: [
      { nr: "1", titel: "Mittwoch: Tippen öffnet",
        text: "Nach dem letzten Rennen bleibt das Tippen bis Mittwoch 00:00 zu. Dann öffnet es für den nächsten Lauf." },
      { nr: "2", titel: "Top 5 setzen",
        text: "Du wählst fünf Fahrer in der Reihenfolge, in der du sie im Ziel erwartest. Jeder Fahrer nur einmal. Bis dahin ist alles nur vorläufig gespeichert und jederzeit änderbar." },
      { nr: "3", titel: "Nach der Quali: final abschicken",
        text: "Endgültig abgeben kannst du erst, wenn das Qualifying-Ergebnis feststeht. Auf Wunsch übernimmt die App die Quali-Top-5 als Vorlage — ein Haken genügt." },
      { nr: "4", titel: "Acht Stunden vor dem Start ist Schluss",
        text: "Dann ist Tippschluss — der Zeitpunkt, ab dem niemand mehr etwas ändern kann. Dreißig Minuten davor erinnert dich die App, falls du das eingeschaltet hast." },
      { nr: "5", titel: "Alle Tipps werden sichtbar",
        text: "Erst jetzt siehst du, was die anderen gesetzt haben — vorher bleibt jeder Tipp verborgen. Kein Abschreiben." },
      { nr: "6", titel: "Rennen, dann Punkte",
        text: "Die App holt Renn- und Startaufstellung automatisch aus offenen Datenquellen, sobald das Renndatum erreicht ist, und verteilt Punkte und Trophäen." }
    ],

    /* --- Vier sammelbare Trophäen + der Saison-Pokal (lib/modelle.dart:302
       zählt Diamant+Krone+Podest+Gold; der Pokal ist die Endplatzierung
       aus lib/profil_buch.dart und wird nicht mitgezählt). --- */
    trophaeenTitel: "Die Trophäen und wie du sie bekommst",
    trophaeenText: "Vier Trophäen sammelst du Rennen für Rennen, dazu kommt der Pokal für die Endplatzierung der Saison. Alles rein aus deinem Tippergebnis — nichts davon lässt sich kaufen.",
    trophaeen: [
      { zeichen: "💎", name: "Diamant",
        bedingung: "15 Punkte in einem Rennen — also alle fünf Fahrer auf der exakt richtigen Position. Das perfekte Rennen." },
      { zeichen: "👑", name: "Krone",
        bedingung: "Tagessieg: Du hast als Einziger die höchste Punktzahl des Rennens. Bei Gleichstand bekommt sie niemand." },
      { zeichen: "🏅", name: "Podest",
        bedingung: "Platz 1 bis 3 in einem Rennen — es haben also weniger als drei Mitspieler mehr Punkte als du." },
      { zeichen: "⭐", name: "GoldTipp",
        bedingung: "Du hast einen Fahrer auf eine Position gesetzt, auf die ihn sonst niemand getippt hat — und lagst richtig. Der Mut-Bonus." },
      { zeichen: "🏆", name: "Pokal",
        bedingung: "Endplatzierung 1, 2 oder 3 am Saisonende. Gold, Silber, Bronze — einer je Saison." }
    ],
    trophaeenFuss: "Bei Punktgleichstand in der Tabelle entscheidet, wer mehr Trophäen gesammelt hat; danach die Zahl der exakten Treffer.",

    /* --- Was für Strecken (Werte aus Daten.js, Saison 2026) --- */
    streckenTitel: "Auf welche Rennen wird getippt?",
    streckenText: "Die komplette Saison 2026 mit 22 Läufen ist hinterlegt — von Melbourne im März bis Abu Dhabi im Dezember. Zu jedem Rennen kennt die App Streckenlänge, Rundenzahl, Termin und Startzeit. Bei sechs Läufen gibt es zusätzlich Sprint-Qualifying und Sprint.",
    streckenZahlen: [
      { zahl: "22", text: "Rennen in der Saison" },
      { zahl: "6", text: "davon mit Sprint" },
      { zahl: "10", text: "Spieler je Tipprunde" }
    ],
    streckenBeispiele: ["Melbourne", "Monaco", "Silverstone", "Spa", "Monza", "Las Vegas", "Abu Dhabi"],
    streckenQuelle: "Die Rennergebnisse holt die App automatisch aus öffentlichen Motorsport-Datenquellen, sobald das Renndatum erreicht ist — inklusive der offiziellen Startaufstellung mit allen Strafen.",

    bloecke: [
      {
        kennung: "01",
        titel: "Tippen mit Countdown",
        text: "Der Countdown läuft bis acht Stunden vor dem Start. Dreißig Minuten davor gibt es ein Erinnerungssignal — abschaltbar, wenn du das nicht magst.",
        punkte: [
          "Top-5-Tipp je Rennen",
          "Tippschluss acht Stunden vor dem Start",
          "Erinnerung 30 Minuten vor Schluss",
          "Freies Üben bis Freitag"
        ],
        bild: "bilder/fanica/tippen.webp",
        alt: "FaNiCa Fun: Tipp-Bildschirm mit den fünf Positionen P1 bis P5 und der Punkteregel"
      },
      {
        kennung: "02",
        titel: "Rangliste & Statistik",
        text: "Der Saisonverlauf läuft animiert ab, dazu Strecken-Rekorde und Bestenlisten. Wer gut ist, sammelt Diamanten und Kronen.",
        punkte: [
          "Animierter Saisonverlauf",
          "Strecken-Rekorde und Bestenlisten",
          "Diamanten für Tagessiege, Kronen für Podeste",
          "Karriere-Profil über mehrere Jahre"
        ],
        bild: "bilder/fanica/startseite.webp",
        alt: "FaNiCa Fun: Startseite mit Saison-Rangliste, Strecken-Rekorden und Bestenlisten"
      },
      {
        kennung: "03",
        titel: "Runden-Chat",
        text: "Jede Runde hat ihren eigenen Chat: antworten, wichtige Nachrichten anpinnen, eigene Spielerfarbe wählen.",
        punkte: [
          "Antworten und Nachrichten anpinnen",
          "Infos vom Organisator hervorgehoben",
          "Eigene Spielerfarbe je Spieler",
          "Benachrichtigungen einzeln abschaltbar"
        ]
      },
      {
        kennung: "04",
        titel: "Privat bleibt privat",
        text: "Zugang nur über die E-Mail des Organisators und einen persönlichen Code. Niemand stolpert zufällig in ein fremdes Spiel.",
        punkte: [
          "Private Gruppen mit Code",
          "Zugang nur über den Organisator",
          "Dieselbe App auf Android und iPhone",
          "Rennergebnisse aus öffentlichen Datenquellen"
        ]
      }
    ],

    /* --- Funktionsumfang FaNiCa (aus dem Quellcode gezaehlt) --- */
    umfangTitel: "Was drinsteckt",
    umfangText: "Fünf Reiter, dahinter deutlich mehr, als man auf den ersten Blick sieht: 18 Karriere-Kennzahlen und neun Auswertungsblöcke.",
    umfangZahlen: [
      { zahl: "5", text: "Hauptbereiche" },
      { zahl: "13", text: "Ansichten" },
      { zahl: "18", text: "Karriere-Kennzahlen" },
      { zahl: "4", text: "Trophäen zum Sammeln" }
    ],
    umfangListe: [
      { name: "Tippen", text: "Top 5 setzen, bis acht Stunden vor dem Start. Vorher jederzeit änderbar." },
      { name: "Meisterschaft", text: "Tabelle der Gruppe mit Platzveränderung nach jedem Rennen." },
      { name: "Ergebnisse", text: "Top 10 des Rennens, Podest und deine Tipp-Auswertung farbig markiert." },
      { name: "Saisonverlauf", text: "Animiertes Diagramm: wie sich die Punkte über die Saison aufgebaut haben." },
      { name: "Rangverlauf", text: "Zweites Diagramm — wann es Führungswechsel gab." },
      { name: "Strecken-Rekorde", text: "Wer auf welcher Strecke die meisten Punkte geholt hat." },
      { name: "Ewige Bestenliste", text: "Gesamtpunkte über alle Jahre, dazu die beste Einzelsaison." },
      { name: "Karriere-Profil", text: "18 Kennzahlen, filterbar nach Gesamt, Gruppe oder einzelner Saison." },
      { name: "Runden-Chat", text: "Antworten, eigene Nachrichten ändern, wichtige anpinnen." },
      { name: "Rennkalender", text: "Alle Termine mit Startzeit in deutscher Zeit." },
      { name: "Mehrere Gruppen", text: "Ein Profil, beliebig viele Tipprunden — du wechselst einfach." },
      { name: "Organisator-Werkzeuge", text: "Spiel starten und pausieren, Codes vergeben, Punkte und Regeln festlegen." },
      { name: "Wochenend-PDF", text: "Ein Rennwochenende als PDF: alle Tipps nebeneinander, Ergebnis, Punkte und Tabellenstand — zum Teilen." },
      { name: "Startbildschirm-Widgets", text: "Rangliste und nächstes Rennen als Android-Widget, direkt auf dem Homescreen." }
    ],
    umfangAnzeigenTitel: "Die 18 Karriere-Kennzahlen",
    umfangAnzeigen: [
      "Gesamtpunkte und Punkte-Quote",
      "Beste und schlechteste Platzierung",
      "Durchschnitt je Saison und je Rennen",
      "Beste Saison und bestes Einzelergebnis",
      "Trefferquote und exakte Treffer",
      "Trostpunkte und Rennen gesamt",
      "Diamanten, Tagessiege, Podeste, Pokale",
      "GoldTipps — die Treffer, die sonst keiner hatte"
    ],
    umfangFilter: "Alles wahlweise für eine Gruppe, eine Saison oder deine gesamte Laufbahn.",

    /* --- Neu in der App (Stand 1.181, aus dem Quellcode) --- */
    neuTitel: "Neu in der App",
    neuText: "Was mit den letzten Updates dazugekommen ist — Stand Version 1.181.",
    neuListe: [
      { name: "Wochenend-PDF", text: "Nach jedem gewerteten Rennwochenende baut die App eine PDF-Seite: die Tipps aller Spieler nebeneinander, das echte Ergebnis, die Punkte und der Tabellenstand — zum Teilen in die Gruppe." },
      { name: "Zwei Startbildschirm-Widgets", text: "Die Rangliste (Platz 1 bis 10 mit Farbe, Punkten und Trophäen) und das nächste Rennen mit Flagge, Ort und Startzeit — direkt auf dem Android-Homescreen." },
      { name: "Ganze Saison im Diagramm", text: "Das Vollbild-Diagramm zeigt jetzt die komplette Saison auf einen Blick — umschaltbar auf die breite Ansicht zum Durchscrollen." },
      { name: "54 Spielerfarben", text: "Die Farbpalette wurde auf 54 Töne erweitert: 15 Grundfarben sind frei, die Neontöne gehören zu Premium. Die erste Wahl beim Beitritt bleibt immer frei." },
      { name: "Countdown führt in den Kalender", text: "Ein Tipp auf den Countdown öffnet den Rennkalender direkt beim aktuellen Rennen." },
      { name: "Runde starten mit einem Knopf", text: "Der Organisator startet die Runde direkt von der Startseite — ab dem nächsten Rennen zählt jeder Tipp, alle beginnen gemeinsam bei null." },
      { name: "Genauere Durchschnitte", text: "Punkteschnitte werden mit Nachkommastelle angezeigt — 8,4 und 8,5 sind jetzt unterscheidbar." }
    ],

    /* --- Gratis und Premium (Werte aus kasse.dart / gratis_grenze.dart) --- */
    stufenTitel: "Gratis und Premium",
    stufenText: "Tippen kostet nichts, dauerhaft. Premium öffnet den Rückblick — und die ersten sieben Tage sind kostenlos.",
    stufen: [
      {
        name: "Gratis",
        preis: "0 €",
        zeile: "für immer",
        kann: ["Tippen & Punkte, jedes Rennen", "Tabelle der Gruppe, immer aktuell",
               "Aktuelles & letztes Rennen im Detail", "Runden-Chat",
               "Rennkalender & Widgets", "Wochenend-PDF des letzten Rennens"],
        grenze: "Rückblick: nur das zuletzt gefahrene Rennen"
      },
      {
        name: "Premium",
        preis: "1,99 €",
        zeile: "je 4 Wochen · 14,99 € im Jahr — gleicher Preis in beiden Stores",
        kann: ["Die komplette Saison mit allen Diagrammen", "Alle früheren Jahre (Historie)",
               "Ewige Bestenliste & Strecken-Rekorde", "Karriere-Statistik mit 16 Kennzahlen",
               "39 zusätzliche Spielerfarben", "Name, Farbe & Symbol ändern"],
        grenze: "Jahresabo: die bezahlte Saison bleibt dauerhaft sichtbar",
        hervor: true
      }
    ],

    /* --- Wie kommt man rein? (lib/beitritt.dart, lib/seiten/gruppen_seite.dart) --- */
    beitrittTitel: "Wie fange ich an?",
    beitrittSchritte: [
      { nr: "1", titel: "Profil anlegen",
        text: "Einmal Name und Farbe wählen — das ist dein Profil. Es gehört dir und wandert mit dir durch alle Runden und Saisons." },
      { nr: "2", titel: "Allein tippen",
        text: "Du kannst sofort loslegen, ganz ohne Gruppe: gegen das Rennergebnis und gegen deine eigene Bestleistung. Die Karriere-Zahlen laufen genauso mit." },
      { nr: "3", titel: "Oder eine Runde eröffnen",
        text: "Wer zu mehreren spielen will, legt eine Runde an — kostet nichts, bis zu zehn Spieler. Für jeden freien Platz erzeugt die App einen Beitritts-Code." },
      { nr: "4", titel: "Code weitergeben",
        text: "Die Mitspieler tragen ihren Namen und den Code ein, fertig. Niemand stolpert zufällig in eine fremde Runde." }
    ],
    beitrittHinweis: "Dein Profil gehört dir, nicht der Gruppe: Ein einmal abgeschlossenes Abo gilt in allen Runden, in denen du mitspielst.",

    mehrKnopf: "Alles über FaNiCa Fun",
    mehrText: "Alle Trophäen mit ihren echten Bedingungen, der Ablauf einer Renn-Woche, alle 22 Strecken, die 18 Karriere-Kennzahlen, die neuen Funktionen und was Premium kann.",
    galerieTitel: "Ein Blick in die App",
    rundeTitel: "Wie es wirklich aussieht",
    rundeText: "Das hier ist keine Vorführ-Runde mit ausgedachten Namen. Es sind die echten Zahlen aus der Gruppe, für die ich die App überhaupt gebaut habe — seit 2022, mittlerweile im fünften Jahr.",
    rundeQuelle: "Stand: nach neun von zweiundzwanzig Rennen der Saison 2026. Die Namen sind hier anonymisiert, alles andere ist unverändert.",

    rundeTabelleTitel: "Der Stand nach neun Rennen",
    rundeTabelleText: "Zwischen Platz eins und Platz zwei liegt ein einziger Punkt, zwischen dem Ersten und dem Letzten fünfundzwanzig. Genau das ist der Grund, warum niemand aussteigt: Nach dreizehn verbleibenden Rennen kann das noch jeder drehen.",

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
    rundeTrefferText: "In dieser Saison wurden 435 einzelne Tipps abgegeben. Ein gutes Viertel saß exakt, knapp die Hälfte traf den richtigen Fahrer auf dem falschen Platz — und weniger als ein Drittel lag ganz daneben. Das ist die Mischung, die eine Tipprunde trägt: oft knapp dran, selten perfekt.",

    rundeStreckenTitel: "Nicht jede Strecke ist gleich schwer",
    rundeStreckenText: "Wie viele Punkte die ganze Gruppe an einem Rennwochenende zusammen holt, sagt viel über die Strecke. Wo die Reihenfolge vorne stabil bleibt, sammeln alle; wo Safety-Cars und Ausfälle das Feld durcheinanderwirbeln, bleibt fast nichts übrig.",

    rundeSiegerTitel: "Fünf Jahre, fünf Geschichten",

    bilder: [
      { pfad: "bilder/fanica/tippen.webp", hoch: true,
        alt: "FaNiCa Fun: Tipp-Seite mit Countdown zum Rennen in Zandvoort und dem Top-5-Tipp",
        titel: "Der Tippschein" },
      { pfad: "bilder/fanica/ergebnis.webp", hoch: true,
        alt: "FaNiCa Fun: Rennwochenende Monaco mit Ergebnis, Qualifying, Treppchen und den Tipps der Runde",
        titel: "Ein Rennwochenende komplett" },
      { pfad: "bilder/fanica/kalender.webp", hoch: true,
        alt: "FaNiCa Fun: Rennkalender 2026 mit allen Sessions von Zandvoort",
        titel: "Der Rennkalender" },
      { pfad: "bilder/fanica/karriere.webp", hoch: true,
        alt: "FaNiCa Fun: Karriere-Statistik eines Spielers mit Trefferquote, Rekorden und Punkteschnitt",
        titel: "Die Karriere-Statistik" },
      { pfad: "bilder/fanica/teilnahme.webp", hoch: true,
        alt: "FaNiCa Fun: Teilnahme an einer Runde bestätigen",
        titel: "Runde beitreten" },
      { pfad: "bilder/fanica/chat.webp", hoch: true,
        alt: "FaNiCa Fun: Gruppen-Chat der Tipprunde",
        titel: "Der Runden-Chat" }
    ],

    bildProfil: "bilder/fanica/profil.webp",
    bildProfilAlt: "FaNiCa Fun: Profil anlegen — einmal registrieren, überall mitspielen",
    preis: "Tippen kostet nichts, dauerhaft. Ohne Premium siehst du das aktuelle und das letzte Rennen. Premium öffnet den Rückblick: die komplette Saison, alle früheren Jahre, ewige Bestenlisten, Strecken-Rekorde und die Karriere-Statistik. 1,99 € je 4 Wochen oder 14,99 € im Jahr — in beiden Stores derselbe Preis, und die ersten 7 Tage sind kostenlos.",
    hinweis: "Ab 18 Jahren. Getippt wird ohne Geldeinsatz — Glücksspiel kann trotzdem süchtig machen. Hilfe unter check-dein-spiel.de.",
    hinweisLink: "https://www.check-dein-spiel.de",
    unabhaengig: "Eine unabhängige Fan-App. Keine Verbindung zur Formula One Group. Rennergebnisse stammen aus öffentlichen Datenquellen."
  },

  /* ====================== KAPITEL 3 — NEONPUNKT ======================= */
  neonpunkt: {
    kennung: "Kapitel 03",
    karteKurz: "Ein Punkt, 48 Stunden, sonst nichts",
    karteStatus: "Im Store-Test",
    statusPille: "Im Store-Test",
    name: "NeonPunkt",
    untertitel: "Das minimalistischste Spiel der Welt",
    claim: "Ein Punkt. 48 Stunden.",
    claimZwei: "Du kannst ihn nie aufhalten.",
    positionierung: "Ein Neon-Punkt wächst achtundvierzig Stunden lang, bis er den ganzen Bildschirm füllt. Tippst du ihn an, beginnt er klein von vorn — in der nächsten von sechzehn Neonfarben. Aufhalten kannst du ihn nicht. Nur hinauszögern.",

    /* --- Worum geht es eigentlich? (Werte aus Spiel.kt / Parameter.kt) --- */
    worumTitel: "Worum geht es eigentlich?",
    worumText: "Um nichts — und genau das ist der Punkt. Es gibt keinen Gegner, keine Level, kein Verlieren. Ein einziger Neon-Punkt wächst achtundvierzig Stunden lang gleichmäßig, bis er den Bildschirm ausfüllt. Tippst du ihn an, springt er auf Anfangsgröße zurück, wechselt zur nächsten Farbe und taucht an einer neuen Stelle auf. Mehr passiert nicht.",
    worumZwei: "Der Reiz liegt im Wiederkommen. Wer den Punkt klein halten will, muss sich zwei Tage lang immer wieder erinnern. Wer ihn vergisst, findet irgendwann einen bildschirmfüllenden Farbklecks vor — und beendet damit die Sitzung. Sie wandert in die Bestenliste, und eine neue beginnt.",

    reglnTitel: "Die ganzen Regeln",
    regeln: [
      { begriff: "Wachsen", text: "Von 12 Punkt Radius bis bildschirmfüllend, gleichmäßig über 48 Stunden. Keine Beschleunigung, keine Überraschung." },
      { begriff: "Antippen", text: "Zähler plus eins, nächste Farbe, neue Position, Uhr des Punktes zurück auf null. Die Sitzungsuhr läuft weiter." },
      { begriff: "Voll", text: "Ist der Punkt einmal ganz groß, beendet der nächste Tipp die Sitzung. Sie wird in die Bestenliste eingetragen, danach fängst du neu an." },
      { begriff: "Zwei Uhren", text: "Oben läuft, wie lange die Sitzung schon dauert. Der Punkt selbst hat seine eigene Uhr seit dem letzten Tipp." },
      { begriff: "Bestenliste", text: "Zwei Listen mit je fünf Plätzen: die meisten Klicks in einer Sitzung — und dieselbe Klickzahl in der kürzesten Zeit." },
      { begriff: "Widget", text: "Der Punkt passt auch auf den Startbildschirm. Ein Tipp darauf zählt genauso wie in der App — ohne sie zu öffnen." }
    ],

    farbenTitel: "Die sechzehn Farben",
    farbenText: "Immer der Reihe nach, nie zufällig. Nach der sechzehnten beginnt es wieder von vorn.",
    farbenListe: [
      { hex: "#39FF14", name: "Grün" },      { hex: "#FF10F0", name: "Pink" },
      { hex: "#00FFFF", name: "Cyan" },      { hex: "#FFFF00", name: "Gelb" },
      { hex: "#FF9F00", name: "Orange" },    { hex: "#BC13FE", name: "Lila" },
      { hex: "#FF3131", name: "Rot" },       { hex: "#1F51FF", name: "Blau" },
      { hex: "#ADFF2F", name: "Limette" },   { hex: "#00FF7F", name: "Frühling" },
      { hex: "#7DF9FF", name: "Eisblau" },   { hex: "#FF6EC7", name: "Rosa" },
      { hex: "#FFD300", name: "Gold" },      { hex: "#00BFFF", name: "Himmel" },
      { hex: "#6F00FF", name: "Indigo" },    { hex: "#FF4D6D", name: "Koralle" }
    ],

    /* --- Funktionsumfang NeonPunkt --- */
    umfangTitel: "Klein, aber vollständig",
    umfangText: "Ein Bildschirm, ein Punkt — und trotzdem in 16 Sprachen, mit zwei Bestenlisten und einem Widget, das genauso zählt wie die App selbst.",
    umfangZahlen: [
      { zahl: "16", text: "Sprachen" },
      { zahl: "2", text: "Bestenlisten" },
      { zahl: "5", text: "Plätze je Liste" },
      { zahl: "0", text: "Berechtigungen" }
    ],
    umfangListe: [
      { name: "Der Punkt", text: "Wächst 48 Stunden lang gleichmäßig, bis er den Bildschirm füllt." },
      { name: "Antippen", text: "Zähler hoch, nächste Farbe, neue Position, Uhr des Punktes auf null." },
      { name: "Zwei Uhren", text: "Wie lange läuft die Sitzung — und wie lange steht der Punkt schon da." },
      { name: "Beste Spiele", text: "Die fünf Sitzungen mit den meisten Klicks." },
      { name: "Schnellste Sitzungen", text: "Dieselbe Klickzahl, aber in kürzerer Zeit." },
      { name: "Durchschnitt", text: "Klicks pro Sitzung über alle Spiele." },
      { name: "Widget", text: "Der Punkt auf dem Startbildschirm — ein Tipp darauf zählt voll mit." },
      { name: "Reset", text: "Neu anfangen, ohne dass Bestenlisten oder Kauf verloren gehen." },
      { name: "16 Sprachen", text: "Erkennt die Systemsprache automatisch, von Deutsch bis Koreanisch." }
    ],
    umfangAnzeigenTitel: "Was angezeigt wird",
    umfangAnzeigen: [
      "Klickzähler der laufenden Sitzung",
      "Laufzeit in Wochen, Tagen, Stunden, Minuten, Sekunden",
      "Vorwarnung ab 450 Klicks, wie viele noch frei sind",
      "Beste Spiele — Top 5 nach Klicks",
      "Schnellste Sitzungen — Top 5 nach Zeit",
      "Durchschnittliche Klicks je Sitzung"
    ],
    umfangFilter: "Alles bleibt auf dem Gerät. Es gibt keine Online-Bestenliste und niemanden, gegen den du antrittst.",

    /* --- Zeitraffer: die 48 Stunden in 12 Sekunden (Falk 30.07.) --- */
    rafferTitel: "48 Stunden in zwölf Sekunden",
    rafferText: "So läuft es wirklich ab — nur im Zeitraffer. Der Punkt wächst, die Uhr läuft mit. Tipp ihn an, dann beginnt er klein von vorn und wechselt die Farbe.",
    rafferKnopfStart: "▶ Zeitraffer starten",
    rafferKnopfStopp: "■ Anhalten",
    rafferZeit: "Vergangen",
    rafferGroesse: "Größe",
    rafferHinweis: "Tipp den Punkt an, während er läuft",
    rafferStatisch: "Der Punkt wächst gleichmäßig über 48 Stunden, bis er den Bildschirm füllt.",

    spielTitel: "Probier es hier aus",
    spielText: "Der Punkt hier unten ist echt. Tipp ihn an — er fängt klein von vorn an, in der nächsten Farbe, und zählt mit. Genau so fühlt sich das Spiel an, nur eben achtundvierzig Stunden lang.",
    spielKlicks: "Klicks",
    spielFarbe: "Farbe",
    spielVon: "von 16",
    spielHinweis: "Tipp den Punkt an",

    zahlen: [
      { zahl: "48", einheit: "Stunden", text: "bis der Punkt den Bildschirm füllt" },
      { zahl: "16", einheit: "Farben", text: "eine nach der anderen, immer der Reihe nach" },
      { zahl: "0", einheit: "Berechtigungen", text: "keine Werbung, kein Internet, kein Konto" }
    ],

    bloecke: [
      {
        kennung: "01",
        titel: "Zähler und Bestenliste",
        text: "Klicks und Sitzungen laufen mit. Die Bestenliste bleibt auf deinem Gerät — es gibt niemanden, gegen den du antreten müsstest außer dir selbst.",
        punkte: [
          "Klick- und Sitzungszähler",
          "Lokale Bestenliste, Top 5 Spiele",
          "Meiste Klicks je Sitzung",
          "Alles nur auf deinem Gerät"
        ]
      },
      {
        kennung: "02",
        titel: "Widget und Sprachen",
        text: "Der Punkt passt auch auf den Homescreen — klickbar, ohne die App zu öffnen. In sechzehn Sprachen.",
        punkte: [
          "Homescreen-Widget, direkt anklickbar",
          "16 Sprachen",
          "Keine Werbung, keine Berechtigungen",
          "Funktioniert vollständig ohne Internet"
        ]
      }
    ],

    bilder: [
      { pfad: "bilder/neonpunkt/waechst.webp", hoch: true,
        alt: "NeonPunkt: der Punkt ist auf mittlere Größe gewachsen",
        titel: "Nach ein paar Stunden" },
      { pfad: "bilder/neonpunkt/fast-voll.webp", hoch: true,
        alt: "NeonPunkt: der Punkt füllt fast den ganzen Bildschirm",
        titel: "Kurz vor Schluss" },
      { pfad: "bilder/neonpunkt/bestenliste.webp", hoch: true,
        alt: "NeonPunkt: die lokale Bestenliste mit Klicks je Sitzung",
        titel: "Deine Bestenliste" }
    ],

    preis: "Die ersten 500 Klicks sind frei. Premium testest du sieben Tage gratis, danach 0,49 € je 4 Wochen oder 4,99 € im Jahr — es schaltet unbegrenztes Weiterspielen, die Bestenlisten und den Durchschnitt frei. Nichts geht verloren — das Spiel pausiert nur.",

    /* --- Gratis und Premium (Werte aus Kasse.kt / Parameter.kt) --- */
    stufenTitel: "Gratis und Premium",
    stufenText: "Erst spielen, dann entscheiden: Die ersten 500 Klicks kosten nichts. Premium testest du sieben Tage gratis — danach pausiert das Spiel nur, nichts geht verloren.",
    stufen: [
      {
        name: "Gratis",
        preis: "0 €",
        zeile: "die ersten 500 Klicks",
        kann: ["Das ganze Spiel, alle 16 Farben", "Widget auf dem Startbildschirm",
               "Sitzungsanzeige & Gesamtzähler", "Alle 16 Sprachen"],
        grenze: "Nach 500 Klicks pausiert das Spiel"
      },
      {
        name: "Premium",
        preis: "0,49 €",
        zeile: "7 Tage gratis · dann je 4 Wochen · 4,99 € im Jahr",
        kann: ["Unbegrenzt weiterspielen", "Beide Bestenlisten (Top 5)",
               "Durchschnitt je Sitzung", "Erste 7 Tage kostenlos"],
        grenze: "Jederzeit kündbar — der Spielstand bleibt",
        hervor: true
      }
    ],
    mehrKnopf: "Alles über NeonPunkt",
    mehrText: "Worum es eigentlich geht, alle Regeln, die sechzehn Farben in ihrer Reihenfolge, die beiden Bestenlisten und das Widget für den Startbildschirm.",
    zahlenFuss: "Keine Werbung, keine Berechtigungen, kein Konto, kein Internet. Alles bleibt auf deinem Gerät."
  },

  /* ============ KAPITEL 4 — SETUPLEISTE (Windows-Programm) ============
     Alle Angaben aus dem Quellcode und der LIESMICH.txt des Programms:
     Werkzeugkasten\Programme\PC Featers\SetUpLeiste     Messwerte-Liste = enum RekordId in sensoren.h (11 Eintraege),
     Version + Herausgeber aus installer.iss. ============================ */
  setupleiste: {
    kennung: "Kapitel 04",
    karteKurz: "Sehen, was der Rechner gerade tut",
    karteStatus: "Zum Herunterladen",
    statusPille: "Fertig · Gratis-Download für Windows",
    name: "SetUpLeiste",
    untertitel: "Die Leistungsanzeige für den Bildschirmrand",
    claim: "Was dein Rechner gerade tut.",
    claimZwei: "Eine schmale Zeile, ganz oben.",
    positionierung: "Kein Fenster, kein Programm im Vordergrund — eine schmale Leiste am oberen Bildschirmrand, die dir zeigt, was gerade wirklich läuft: Auslastung, Temperatur, Watt, Ping, Datenfluss, Akku. Sie sitzt immer mittig oben, klappt auf Wunsch ein und sammelt nebenbei deine Bestwerte.",

    kernTitel: "Der Unterschied",
    kernText: "Andere Werkzeuge öffnest du, wenn du etwas wissen willst. Diese Leiste ist schon da — im Spiel, beim Rendern, beim Arbeiten. Und sie merkt sich, was der Rechner an seinem besten Tag geschafft hat.",

    /* --- Was angezeigt wird (LIESMICH + sensoren.h) --- */
    umfangTitel: "Was angezeigt wird",
    umfangText: "Jede Anzeige lässt sich einzeln ein- und ausschalten, dazu drei Größenstufen für die ganze Leiste.",
    umfangZahlen: [
      { zahl: "11", text: "Messwerte mit Bestwert" },
      { zahl: "6", text: "Zeiträume je Bestwert" },
      { zahl: "3", text: "Größenstufen" },
      { zahl: "0", text: "Kosten" }
    ],
    umfangListe: [
      { name: "Prozessor", text: "Auslastung und geschätzte Leistungsaufnahme in Watt." },
      { name: "Grafikkarte", text: "Auslastung, Takt, belegter Grafikspeicher und gemessene Watt." },
      { name: "Temperatur", text: "Grafikkarte immer, Prozessor nur mit Administratorrechten — sonst gibt Windows den Wert nicht heraus." },
      { name: "Arbeitsspeicher", text: "Wie viel gerade belegt ist." },
      { name: "Bilder je Sekunde", text: "Die FPS des Vollbild-Programms, das gerade vorne liegt." },
      { name: "Ping", text: "Antwortzeit ins Netz, laufend gemessen." },
      { name: "Datenfluss", text: "Was gerade wirklich hoch- und runtergeht — ohne Download steht dort fast null." },
      { name: "Leitung", text: "Die gemessene Anschlussgeschwindigkeit, getrennt für WLAN und Kabel. Wird auf Knopfdruck gemessen." },
      { name: "Akku", text: "Ladestand mit Balken und Restkapazität in mAh; beim Laden ein Blitz. Ohne Akku bleibt das Feld leer." },
      { name: "Stromverbrauch", text: "Grafikkarte und Prozessor zusammen, aufsummiert für Tag, Woche, Monat, Jahr und gesamt." },
      { name: "Laufzeit", text: "Wie lange der Rechner seit dem Start durchläuft." },
      { name: "Auflösung", text: "Die aktuelle Bildschirmauflösung." }
    ],

    /* --- Die drei Knoepfe (LIESMICH.txt) --- */
    knoepfeTitel: "Drei Knöpfe, mehr braucht es nicht",
    knoepfe: [
      { zeichen: "🏆", name: "Pokal",
        text: "Öffnet die Bestwerte-Liste: zu jedem Messwert der Tiefst- und Höchstwert für Heute, Woche, Monat, Jahr, „Möglich“ und Gesamt — dazu der Stromverbrauch. Von hier startet auch die Geschwindigkeitsmessung." },
      { zeichen: "⚙", name: "Zahnrad",
        text: "Klappliste zum An- und Abwählen jeder einzelnen Anzeige, dazu die Größe der Leiste. Jeder Eintrag trägt die Farbe seines Segments." },
      { zeichen: "▾", name: "Pfeil und X",
        text: "Der Pfeil klappt die Leiste zu einem schmalen Streifen ein, ein zweiter Klick wieder aus. Das X beendet das Programm." }
    ],

    /* --- Bestwerte --- */
    bestwerteTitel: "Bestwerte, die mitlaufen",
    bestwerteText: "Die Leiste merkt sich zu jedem Messwert den höchsten und den tiefsten Stand — getrennt nach Heute, Woche, Monat, Jahr und über die gesamte Laufzeit. So siehst du nicht nur, was gerade ist, sondern auch, was war. Jeder Bestwert lässt sich dreistufig schalten: sichtbar, im Hintergrund weiterzählend oder ganz aus.",

    /* --- Ehrliche Grenzen (aus der LIESMICH, Falks eigene Formulierung) --- */
    ehrlichTitel: "Was gemessen ist — und was gerechnet",
    ehrlichText: "Nicht jeder Wert kommt von einem Sensor. Wo gerechnet wird, steht es dabei — auch in der Leiste selbst.",
    ehrlich: [
      { name: "Prozessor-Watt ist geschätzt", text: "Windows gibt keine Wattzahl für den Prozessor heraus. Der Wert wird linear von der Leerlauf-Grundlast bis zur Dauerlast-Grenze über die gemessene Auslastung gerechnet. Die Watt der Grafikkarte sind dagegen echt gemessen." },
      { name: "Akku in mAh ist umgerechnet", text: "Windows meldet Milliwattstunden, nicht Milliamperestunden. Die mAh entstehen über die aktuelle Spannung — und weil die mit dem Ladestand schwankt, schwankt die Zahl leicht mit. Darum steht ein Sternchen am Feld." },
      { name: "Stromverbrauch ist nicht die Steckdose", text: "Gezählt werden Grafikkarte und Prozessor, nicht Bildschirm, Laufwerke, Mainboard oder Netzteilverluste. Und nur, solange die Leiste läuft." },
      { name: "Prozessor-Temperatur braucht Rechte", text: "Ohne Administratorrechte rückt Windows sie nicht heraus — dann bleibt das Feld leer. Die Grafikkarten-Temperatur kommt immer." }
    ],

    /* --- Technik --- */
    technikTitel: "Technisch",
    technikPunkte: [
      { name: "Windows 10 und 11", text: "64 Bit. Ein Installationsprogramm legt Desktop-Symbol, Startmenü-Eintrag und die Deinstallation an." },
      { name: "2,5 MB", text: "Die komplette Installationsdatei. In C++ geschrieben, ohne Laufzeitumgebung, ohne Zusatzpakete." },
      { name: "Kein Konto, keine Werbung", text: "Es wird nichts übertragen. Die Geschwindigkeitsmessung lädt nur auf Knopfdruck kurz Testdaten." },
      { name: "Alles bleibt lokal", text: "Einstellungen, Stromzähler und Bestwerte liegen in deinem Benutzerordner. Beim Deinstallieren wirst du gefragt, ob sie mit weg sollen." },
      { name: "NVIDIA für die GPU-Felder", text: "Die vier Grafikkarten-Werte kommen über nvidia-smi. Auf Rechnern mit AMD- oder Intel-Grafik blenden sie sich aus." }
    ],

    preis: "Kostenlos, ohne Konto und ohne Werbung. Die Installationsdatei ist 2,5 MB groß und läuft auf Windows 10 und 11 (64 Bit).",
    mehrKnopf: "Alles über die SetUpLeiste",
    mehrText: "Alle Messwerte im Einzelnen, die drei Knöpfe, wie die Bestwerte funktionieren, was gemessen und was gerechnet ist — und wo die Daten liegen.",
    hinweis: "Ein Werkzeug für den eigenen Rechner, kein Verkaufsprodukt. Gebaut, weil ich beim Rendern und Bauen wissen wollte, was die Maschine gerade macht."
  },

  /* ============ KAPITEL 5 — CAMPUS CLASH (IN BEARBEITUNG) ============
     Alle Zahlen aus dem Projekt (docs/01_PRODUCT.md, 02_FEATURES.md,
     15_CURRENT_STATUS.md, skill_catalog.dart 40 Fächer, allianz_rolle.dart
     4 Rollen/13 Rechte). 🔴 KEIN Preis nennen — es existiert noch keine
     Bezahlfunktion (nur beschrifteter Testmodus). ===================== */
  campus: {
    bilderTitel: "Ein Blick in die App",
    bilderText: "Fünf Bilder aus einem frischen Spielstand.",
    bilder: [
      { bild: "campus-1-campus", titel: "Dein Campus", text: "Oben Punkte, Energie und Geld; darunter die drei Bereiche und deine Stärken. Der Job läuft weiter, auch wenn das Handy in der Tasche steckt." },
      { bild: "campus-2-schule", titel: "Der Schulalltag", text: "Lernen und Jobs, dazu der Zugang zur Allianz und die schulweiten Verbesserungen." },
      { bild: "campus-3-lernen", titel: "64 Fächer", text: "Jedes Fach mit Dauer, Stufe und was es bringt. Drei laufen gleichzeitig — in echter Zeit, auch wenn die App zu ist." },
      { bild: "campus-4-schulhof", titel: "Der Schulhof", text: "Mitschüler zum Anfreunden oder Herausfordern. Freunde kommen per Code dazu — ohne Server, der Code trägt die Daten selbst." },
      { bild: "campus-5-markt", titel: "Der Flohmarkt", text: "39 Gegenstände in fünf Seltenheitsstufen. Das Angebot wechselt dreimal am Tag — oder sofort, gegen Gebühr." },
    ],
    bereicheTitel: "Die Bereiche",
    bereicheText: "Drei Bereiche in der Hauptleiste, alles Weitere liegt darunter.",
    bereiche: [
      { name: "🏫  Schule", text: "Lernen, Jobs und der Zugang zur Allianz." },
      { name: "🏘️  Umgebung", text: "Das Klassenzimmer und wer sonst noch da ist." },
      { name: "🛒  Markt", text: "Der Flohmarkt — Angebot wechselt dreimal am Tag." },
      { name: "👤  Profil", text: "Skills, Ausrüstung, Premium und Einstellungen." },
    ],
    kennung: "Kapitel 05 · In Bearbeitung",
    karteKurz: "Endlos aufsteigen im Schulspiel",
    karteStatus: "In Bearbeitung",
    statusPille: "In Bearbeitung — spielbar gebaut",
    name: "Campus Clash",
    untertitel: "Das endlose Schulspiel",
    claim: "Deine Schulzeit läuft weiter.",
    claimZwei: "Auch wenn du das Handy weglegst.",
    positionierung: "Ein endloses Schul-Aufstiegsspiel: Du entwickelst einen Schüler über Jahre — lernst Fächer, verdienst mit Jobs Geld, steigst Klasse um Klasse auf. Trainiert wird mit echter Zeit, und das Training läuft weiter, wenn die App geschlossen ist. Komplett offline, ohne Konto und ohne Server.",
    inArbeit: "🚧 In Bearbeitung: Die App ist spielbar gebaut und wird gerade geprüft. Es gibt noch keinen Store-Eintrag — und nichts zu kaufen.",

    kernTitel: "Der Kniff",
    kernText: "Es gibt keine Obergrenze: Klassen, Fächer-Stufen und Allianz-Level sind endlos. Jede Klasse kostet mehr Einsatz als die vorige — Klasse 2 hast du nach ein paar Minuten, Klasse 10 kostet einen halben Tag Training. Und nichts davon lässt sich kaufen.",

    umfangTitel: "Was drinsteckt",
    umfangText: "Acht Bereiche greifen ineinander: Was du lernst, macht dich stärker — was du verdienst, steckst du in Ausrüstung oder deine Allianz.",
    umfangZahlen: [
      { zahl: "8", text: "Bereiche" },
      { zahl: "40", text: "Schulfächer" },
      { zahl: "33", text: "Markt-Gegenstände" },
      { zahl: "13", text: "Allianz-Rechte" }
    ],
    umfangListe: [
      { name: "Campus", text: "Die Übersicht: dein Schüler, laufendes Training, laufende Jobs — alles auf einen Blick." },
      { name: "Lernen", text: "Bis zu drei Fächer gleichzeitig trainieren, abholen, Level steigt. Mit echter Zeit — auch bei geschlossener App." },
      { name: "Jobs", text: "Geld verdienen neben der Schule. Jobs kehren alle vier Klassen in einer höheren Stufe zurück — mehr Lohn, mehr Erfahrung." },
      { name: "Umgebung", text: "Freunde treffen, Taschengeld kassieren und im Wissensduell gegeneinander antreten." },
      { name: "Allianz", text: "Ab Klasse 5: gemeinsame Kasse, drei Ausbaupfade, vier Rollen mit dreizehn einzeln vergebbaren Rechten." },
      { name: "Schule", text: "Klassensprecher werden und das Lerntempo der ganzen Klasse um zehn Prozent heben." },
      { name: "Markt", text: "33 Gegenstände bis Klasse 25 kaufen, anlegen, ablegen — jedes Teil verändert deine Werte." },
      { name: "Profil & Postfach", text: "Alle Werte, Fächer und Statistiken — dazu das Postfach mit den Nachrichten des Spiels." }
    ],

    besondersTitel: "Was es besonders macht",
    besonders: [
      { name: "Echte Zeit statt Countdown-Tricks", text: "Training und Jobs rechnen mit der Uhr, nicht mit der offenen App. Handy weglegen, später abholen — der Fortschritt ist da, sogar nach einem Geräteneustart." },
      { name: "Endlos nach oben", text: "Klassen, Fächer-Stufen und Allianz-Level haben keine Decke. Jede Klasse kostet das 1,24-fache der vorigen — der Aufstieg bleibt immer spürbar." },
      { name: "40 Fächer, 7 Fähigkeiten", text: "Sechs Fächer zum Start, danach schaltet jede Klasse ein weiteres frei. Alles zahlt auf sieben Fähigkeiten ein — von Sprache bis Technik." },
      { name: "Freundescode ohne Server", text: "Dein Code trägt deine ganze Visitenkarte: Name, Klasse, Stärke. Freunde verbinden sich direkt — ohne Konto, ohne Server, mit Prüfsumme." },
      { name: "Allianz mit echten Rollen", text: "Anführer, Stellvertreter, Offizier, Mitglied — dreizehn Rechte einzeln vergebbar. Die Allianz-Stärke kommt nur aus den Mitgliedern, nie aus Geld." },
      { name: "Fair bleibt fair", text: "Kein Pay-to-Win, keine Werbung, kein Konto. Alles bleibt auf deinem Gerät." }
    ],


    mehrKnopf: "Alles über Campus Clash",
    mehrText: "Die acht Bereiche im Einzelnen, das Endlos-System, die Allianz-Rollen, der Freundescode — und was bis zur Veröffentlichung noch passiert.",
    hinweis: "Campus Clash ist in Entwicklung. Alle Angaben beschreiben den aktuellen Bau-Stand und können sich bis zur Veröffentlichung ändern."
  },

  yourfilm: {
    bilderTitel: "Ein Blick in die App",
    bilderText: "Fünf Aufnahmen aus der laufenden Fassung. Die Filmtitel darin sind erfunden.",
    bilder: [
      { bild: "yourfilm-1-start", titel: "Der Einstieg", text: "Zuletzt hinzugefügt, was gerade verliehen ist und der schnelle Weg zum Scanner." },
      { bild: "yourfilm-2-sammlung", titel: "Die Sammlung", text: "Alle Filme als Raster, oben die Filter nach Format — 4K, Blu-ray, DVD, FSK. Jede Kachel zeigt Trägerformat und Jahr." },
      { bild: "yourfilm-3-film", titel: "Die Filmseite", text: "Ein Film mit seinen Veröffentlichungen und Exemplaren — getrennt, weil dieselbe Blu-ray in mehreren Editionen im Regal stehen kann." },
      { bild: "yourfilm-4-statistik", titel: "Was die Sammlung sagt", text: "Anzahl, Ausgaben, Genres, Jahrzehnte und Laufzeit — gerechnet aus dem, was wirklich im Regal steht." },
      { bild: "yourfilm-5-mehr", titel: "Standorte und Personen", text: "Jedes Exemplar bekommt seinen Platz im Regal; Schauspieler und Regie führen zu den eigenen Filmen." },
    ],
    bereicheTitel: "Die Bereiche",
    bereicheText: "Fünf Reiter, vom Scannen bis zur Auswertung.",
    bereiche: [
      { name: "🏠  Start", text: "Zuletzt hinzugefügt und was gerade verliehen ist." },
      { name: "📚  Sammlung", text: "Alle Filme, sortier- und filterbar." },
      { name: "📷  Scannen", text: "Kamera auf den Barcode — der Rest geht von allein." },
      { name: "🔎  Suche", text: "Nach Titel, Person oder allem zusammen." },
      { name: "➕  Mehr", text: "Statistik, Standorte, Personen, Einstellungen." },
    ],
    kennung: "Kapitel 06 · Im Test",
    karteKurz: "Filmsammlung scannen und ordnen",
    karteStatus: "Im Test",
    statusPille: "Im Test — geschlossen bei Google Play",
    name: "YourFilm",
    untertitel: "Deine Filmsammlung im Griff",
    claim: "Scannen. Einsortieren. Fertig.",
    claimZwei: "Deine Sammlung, sauber geordnet.",
    positionierung: "Eine Filmsammlungs-App für DVDs und Blu-rays: Barcode scannen, die App ordnet den Film automatisch zu — das Werk, die Ausgabe, dein Exemplar. Vier getrennte Preise zeigen, was deine Sammlung gekostet hat und was sie heute wert ist. Komplett auf dem Gerät, ohne Konto.",
    inArbeit: "🧪 Im Test: Die App läuft im geschlossenen Test bei Google Play und wird dabei an echten Discs erprobt. Installieren kann sie nur, wer dafür freigeschaltet ist — öffentlich im Store steht sie noch nicht, und zu kaufen gibt es nichts.",

    kernTitel: "Der Kniff",
    kernText: "Ein Film ist nicht sein Datenträger: YourFilm trennt das Werk (der Film selbst), die Ausgabe (Steelbook, Erstauflage, Neuauflage) und dein Exemplar (dein Stück im Regal). Drei Ausgaben desselben Films sind EIN Eintrag in der Liste — nicht drei. Und der Barcode-Scan ordnet automatisch zu, ohne Suchen und ohne Tipperei.",

    umfangTitel: "Was drinsteckt",
    umfangText: "Vom Scan bis zur Auswertung: erfassen, ordnen, wiederfinden — und am Ende wissen, was die Sammlung wert ist.",
    umfangZahlen: [
      { zahl: "13", text: "Bildschirme" },
      { zahl: "11", text: "Bereiche" },
      { zahl: "4", text: "Preise je Exemplar" },
      { zahl: "13", text: "Sortier-Schlüssel" }
    ],
    umfangListe: [
      { name: "Scannen", text: "Barcode der DVD oder Blu-ray scannen — die App erkennt Duplikate und ordnet den Film automatisch zu." },
      { name: "Sammlung", text: "Werk, Ausgabe und Exemplar sauber getrennt — die Liste bleibt aufgeräumt, egal wie viele Fassungen du besitzt." },
      { name: "Suche & Filter", text: "Suche über alle Felder samt Personen; Filter lassen sich kombinieren, sortiert wird nach dreizehn Schlüsseln." },
      { name: "Vier Preise", text: "Ladenpreis von damals, UVP, dein Kaufpreis, heutiger Wert — vier getrennte Angaben je Exemplar." },
      { name: "Statistik", text: "Ausgaben nach Monat und Jahr, Bestand und Werte deiner Sammlung auf einen Blick." },
      { name: "Standorte", text: "Regal, Fach, Karton — ein frei tiefer Standort-Baum sagt dir, wo jedes Stück liegt." },
      { name: "Sicherung", text: "Import, Export und Backup mit Prüfung — deine Sammlung bleibt deine Datei." },
      { name: "Filmdaten", text: "Auf Wunsch holt die App Filmdaten aus einer Filmdatenbank — freiwillig, abschaltbar, ohne Konto." }
    ],

    besondersTitel: "Was es besonders macht",
    besonders: [
      { name: "Die Barcode-Kette", text: "Kein einzelner Dienst kennt Barcode UND Filmdaten. YourFilm verkettet beides: Ein Warenkatalog erkennt den Code, der Händlertitel wird gesäubert, die Filmdatenbank liefert die Daten — ein Scan, ein Treffer." },
      { name: "Vier getrennte Preise", text: "Was der Film damals kostete, was er kosten sollte, was du bezahlt hast, was er heute wert ist — keiner der vier wird aus einem anderen geschätzt." },
      { name: "Komplett auf dem Gerät", text: "Die Sammlung liegt in einer Datenbank auf deinem Handy. Die Filmdatenbank-Anbindung ist freiwillig — ohne sie läuft die App vollständig offline." }
    ],


    mehrKnopf: "Alles über YourFilm",
    mehrText: "Die Dreiteilung, die Barcode-Kette, die vier Preise — und was bis zur Veröffentlichung noch passiert.",
    hinweis: "YourFilm läuft im geschlossenen Test bei Google Play — installieren kann die App nur, wer für den Test freigeschaltet ist. Alle Angaben beschreiben den aktuellen Bau-Stand und können sich bis zur Veröffentlichung ändern."
  },

  zeitwissen: {
    bilderTitel: "Ein Blick in die App",
    bilderText: "Fünf Aufnahmen aus der laufenden Fassung — so sieht es auf dem Gerät aus.",
    bilder: [
      { bild: "zeitanker-1-heute", titel: "Die Stempeluhr", text: "Ein Tipp startet die Zeit, ein Tipp beendet sie. Darunter steht, auf welches Projekt gerade gebucht wird — wechselt man es, wandert die laufende Zeit mit." },
      { bild: "zeitanker-2-zeitraum", titel: "Woche und Monat", text: "Soll und Ist nebeneinander, Tag für Tag. Was fehlt oder übrig ist, rechnet die App mit." },
      { bild: "zeitanker-3-projekte", titel: "Projekte und Aufgaben", text: "Zeiten lassen sich unter Projekten bündeln, jedes mit Untertasks und eigenem Stundensatz." },
      { bild: "zeitanker-4-mehr", titel: "Zeitkonto und Bericht", text: "Hier liegen Zeitkonto, Arbeitszeitmodell und der Bericht — als Excel, PDF oder HTML zum Weitergeben." },
      { bild: "zeitanker-5-premium", titel: "Was Premium öffnet", text: "Bericht, Verdienst, Urlaubstage, Startbildschirm-Widget und beliebig viele Projekte. Das Erfassen selbst bleibt immer kostenlos — 9,99 € im Jahr oder 0,99 € im Monat." },
    ],
    bereicheTitel: "Die Bereiche",
    bereicheText: "Vier Reiter — der Rest rechnet sich von selbst.",
    bereiche: [
      { name: "☀️  Heute", text: "Die Stempeluhr und der laufende Tag." },
      { name: "📆  Zeitraum", text: "Woche und Monat, mit Soll und Ist nebeneinander." },
      { name: "📁  Projekte", text: "Wohin die Zeit ging — je Projekt und Aufgabe." },
      { name: "➕  Mehr", text: "Zeitkonto, Bericht, Arbeitszeitmodell, Einstellungen." },
    ],
    kennung: "Kapitel 07 · Im Test",
    karteKurz: "Arbeitszeit mit Zeitkonto",
    karteStatus: "Im Test",
    statusPille: "Im Test — geschlossen bei Google Play",
    name: "ZeitAnker",
    untertitel: "Arbeitszeit, die sich selbst erklärt",
    claim: "Einstempeln. Fertig.",
    claimZwei: "Den Rest rechnet die App.",
    positionierung: "Eine Arbeitszeit-App mit Zeitkonto: einstempeln, ausstempeln — Über- und Fehlstunden laufen von allein mit. Wer will, teilt die Zeit auf Projekte und Aufgaben auf und holt am Monatsende einen Bericht als Excel, PDF oder HTML heraus. Komplett auf dem Gerät, ohne Konto.",
    inArbeit: "🧪 Im Test: Die App läuft im geschlossenen Test bei Google Play. Installieren kann sie nur, wer dafür freigeschaltet ist — öffentlich im Store steht sie noch nicht, und zu kaufen gibt es nichts.",

    kernTitel: "Der Kniff",
    kernText: "Die Gesamtzeit läuft vom Ein- bis zum Ausstempeln — Aufgaben laufen innerhalb davon und teilen diese Zeit nur auf, sie verlängern sie nicht. Wer drei Aufgaben nacheinander antippt, hat am Ende trotzdem genau seinen Arbeitstag. Und das Projekt-Soll ist vom persönlichen Soll getrennt: Arbeitest du in einem Monat an zwei Projekten, zählt jede Stunde für ihr Projekt und zusätzlich in deine Gesamtzeit.",

    umfangTitel: "Was drinsteckt",
    umfangText: "Vom einen Knopf bis zur Monatsauswertung: erfassen, aufteilen, nachweisen — ohne dass jemand eine Tabelle pflegen muss.",
    umfangZahlen: [
      { zahl: "14", text: "Bildschirme" },
      { zahl: "4", text: "Bereiche" },
      { zahl: "3", text: "Berichtsformate" },
      { zahl: "4", text: "Sollzeiten" }
    ],
    umfangListe: [
      { name: "Ein Knopf", text: "Einstempeln, ausstempeln — mehr braucht der Alltag nicht. Der Rest ist freiwillig." },
      { name: "Zeitkonto", text: "Über- und Fehlstunden laufen automatisch mit, gegen die Sollzeit je Wochentag." },
      { name: "Startbildschirm-Widget", text: "Ein- und ausstempeln direkt vom Startbildschirm, ohne die App zu öffnen." },
      { name: "Projekte & Aufgaben", text: "Zeit auf Projekte und Aufgaben aufteilen — mit eigener Farbe, Kunde und Abrechnungsart." },
      { name: "Eigenes Projekt-Soll", text: "Jedes Projekt kann eigene Arbeitsstunden und ein eigenes Konto führen, getrennt vom persönlichen." },
      { name: "Berichte", text: "Zeitraum wählen und als Excel, PDF oder HTML teilen — fertig für die Abrechnung." },
      { name: "Verdienst", text: "Stunden-, Wochen- oder Monatssatz je Projekt; die App rechnet den effektiven Stundensatz aus." },
      { name: "Erinnerungen", text: "Meldet sich, wenn das Tagessoll erreicht ist oder du morgens noch nicht eingestempelt hast." }
    ],

    besondersTitel: "Was es besonders macht",
    besonders: [
      { name: "Eine Rechenstelle", text: "Alle Zeitwerte kommen aus derselben Stelle im Code. Kein Bildschirm rechnet selbst — deshalb kann die Wochenansicht nie eine andere Summe zeigen als der Monatsbericht." },
      { name: "Die Dauer wird nie gespeichert", text: "Gespeichert werden nur Start und Ende, die Dauer wird immer neu gerechnet. Zwei Felder für dieselbe Wahrheit laufen sonst früher oder später auseinander." },
      { name: "Sommerzeit gehört dazu", text: "Ein Tag hat bei der Umstellung 23 oder 25 Stunden. Die App zählt deshalb nie in festen Vierundzwanzig-Stunden-Schritten weiter, sondern immer über den echten Kalendertag." }
    ],


    mehrKnopf: "Alles über ZeitAnker",
    mehrText: "Das Zeitkonto, die Trennung von Projekt- und Personen-Soll — und was bis zur Veröffentlichung noch passiert.",
    hinweis: "ZeitAnker läuft im geschlossenen Test bei Google Play — installieren kann die App nur, wer für den Test freigeschaltet ist. Alle Angaben beschreiben den aktuellen Bau-Stand und können sich bis zur Veröffentlichung ändern."
  },
  familie: {
    kennung: "Kapitel 08 · In Bearbeitung",
    karteKurz: "Zehn Apps rund um den Bogensport",
    karteStatus: "Coming Soon",
    statusPille: "Coming Soon — im Bau",
    name: "Instinct Familie",
    untertitel: "Aus einer App wird eine Familie",
    claim: "Zehn Apps. Ein Bogensport.",
    claimZwei: "Jede für sich. Alle zusammen.",
    positionierung: "Instinct Scoring deckt eine Sache ab: die Runde werten. Aber zum Bogenschießen gehört mehr — Training, Material, Wetter, Ausrüstung, Gemeinschaft. Daraus wird eine Familie eigenständiger Apps, die dieselbe Sprache sprechen und ihre Daten miteinander teilen können. Wer nur werten will, nimmt weiter nur Instinct Scoring.",
    inArbeit: "🚧 Coming Soon: Die Apps sind angelegt und werden gebaut. Noch gibt es keine Inhalte zu zeigen und keinen Store-Eintrag — dieser Abschnitt sagt nur, was kommt.",

    kernTitel: "Warum eine Familie und nicht eine große App",
    kernText: "Eine App, die alles kann, kann am Ende nichts richtig — und wer nur seine Runde werten will, müsste sich durch neun Bereiche wühlen, die ihn nicht interessieren. Deshalb bleibt jede Sache ihre eigene App: klein, verständlich, für sich benutzbar. Wer mehrere hat, bekommt sie über eine Dach-App zusammengeführt; die Apps teilen sich eine gemeinsame Grundlage, damit Schützen, Bögen und Ergebnisse überall dieselben sind und nicht doppelt gepflegt werden müssen.",

    umfangTitel: "Die Familie",
    umfangText: "Zehn Apps rund um Instinct Scoring — jede mit einem klaren Zweck. Was hier steht, ist der geplante Funktionsumfang; gebaut wird gerade.",
    umfangZahlen: [
      { zahl: "10", text: "Apps geplant" },
      { zahl: "1", text: "Dach-App" },
      { zahl: "1", text: "gemeinsame Grundlage" },
      { zahl: "0", text: "Konten nötig" }
    ],
    apps: [
      { bild: "scoring", name: "Instinct Scoring", rolle: "Der Kern — live im Store", text: "Runden werten auf 3D- und Feldparcours. Die einzige App der Familie, die es schon gibt." },
      { bild: "coach", name: "Instinct Coach", rolle: "Coming Soon", text: "Trainingsbegleitung, die sich dem Schützen anpasst — statt eines festen Plans für alle." },
      { bild: "builder", name: "Instinct Builder", rolle: "Coming Soon", text: "Pfeile zusammenstellen und verwalten: Spine, Länge, Befiederung, Farben." },
      { bild: "tune", name: "Instinct Tune", rolle: "Coming Soon", text: "Bögen einstellen und den Verlauf festhalten — mit Fotovergleich über die Zeit." },
      { bild: "weather", name: "Instinct Weather", rolle: "Coming Soon", text: "Wetter am Parcours: Wind, Licht, Temperatur — die Bedingungen, unter denen geschossen wurde." },
      { bild: "pack", name: "Instinct Pack", rolle: "Coming Soon", text: "Ausrüstung im Blick: Inventar führen und Packlisten, damit vor dem Turnier nichts fehlt." },
      { bild: "range", name: "Instinct Range", rolle: "Coming Soon", text: "Training auf dem Platz: Einheiten festhalten und auswerten, getrennt vom Parcours." },
      { bild: "community", name: "Instinct Community", rolle: "Coming Soon", text: "Der Austausch mit anderen Schützen — Verein, Gruppe, gemeinsame Termine." },
      { bild: "trade", name: "Instinct Trade", rolle: "Coming Soon", text: "Material weitergeben: anbieten, suchen, finden — Bogensport-Zubehör aus zweiter Hand." },
      { bild: "ai", name: "AI-Instinct", rolle: "Coming Soon", text: "Fachberatung zum traditionellen Bogenschießen — fragen statt suchen." },
      { bild: "familie", name: "Instinct Familie", rolle: "Die Dach-App", text: "Führt zusammen, was in den einzelnen Apps liegt: ein Blick auf alle Schützen, alle Ergebnisse, das Zusammenspiel." }
    ],

    besondersTitel: "Was für alle gilt",
    besonders: [
      { name: "Jede App steht für sich", text: "Keine App braucht eine andere. Wer nur wertet, installiert nur Instinct Scoring — und merkt vom Rest nichts." },
      { name: "Eine gemeinsame Grundlage", text: "Alle Apps teilen dieselbe Datensprache. Ein Schütze, ein Bogen, ein Ergebnis — überall dasselbe, nicht überall neu eingetippt." },
      { name: "Ohne Konto, ohne Server", text: "Was für Instinct Scoring gilt, gilt für die ganze Familie: Die Daten bleiben auf dem Gerät." }
    ],


    mehrKnopf: "Alles über die Instinct Familie",
    mehrText: "Welche App was macht, warum es zehn sind und nicht eine — und was sie verbindet.",
    hinweis: "Die Instinct Familie ist in Entwicklung. Alle Angaben beschreiben den geplanten Umfang und können sich ändern. Verfügbar ist bisher allein Instinct Scoring."
  },
  tankspur: {
    bilderTitel: "Ein Blick in die App",
    bilderText: "Fünf Aufnahmen aus der laufenden Fassung. Die Betankungen darin sind Beispieldaten.",
    bilder: [
      { bild: "tankspur-1-uebersicht", titel: "Die Übersicht", text: "Letzte Betankung, Preis-Trend und das laufende Jahr mit Vergleich zum Vorjahr — alles auf einem Schirm." },
      { bild: "tankspur-2-eintraege", titel: "Alle Betankungen", text: "Jeder Eintrag mit Datum, Tankstelle, Preis und Verbrauch. Antippen zum Ändern." },
      { bild: "tankspur-3-statistik", titel: "Jahre im Vergleich", text: "Ausgaben und Verbrauch je Jahr nebeneinander. Acht Auswertungen gibt es — per Wischen umschaltbar." },
      { bild: "tankspur-4-preis", titel: "Der Preisverlauf", text: "Wie sich der Literpreis über die Zeit bewegt hat — und wo die eigene letzte Tankfüllung dazu steht." },
      { bild: "tankspur-5-eingabe", titel: "Erfassen", text: "Datum, Tankstelle, Preis und Liter — den Gesamtpreis rechnet die App. Benutzte Tankstellen stehen beim nächsten Mal bereit." },
    ],
    bereicheTitel: "Die Bereiche",
    bereicheText: "Vier Reiter — mehr braucht es nicht.",
    bereiche: [
      { name: "📋  Übersicht", text: "Der letzte Stand auf einen Blick: Preis-Trend, Hochrechnung, Kennzahlen." },
      { name: "📝  Einträge", text: "Jede Betankung als Liste — antippen, ändern, löschen." },
      { name: "📊  Statistik", text: "Acht Auswertungen, per Wischen umschaltbar." },
      { name: "👤  Profil", text: "Fahrzeug, Konto und Datenschutz." },
    ],
    kennung: "Kapitel 09 · Im Test",
    karteKurz: "Was das Auto wirklich kostet",
    karteStatus: "Im Test",
    statusPille: "Im Test — geschlossen bei Google Play",
    name: "Tankspur",
    untertitel: "Was das Auto wirklich kostet",
    claim: "Tanken. Eintippen.",
    claimZwei: "Den Rest rechnet die App.",
    positionierung: "Eine Tankspur, die mitdenkt: Preis je Liter und Liter eintragen — den Gesamtpreis füllt die App selbst aus. Aus Kilometern und Litern wird der Verbrauch, aus Verbrauch und Preis werden die Kosten je 100 Kilometer. Am Jahresende steht da, was das Fahren wirklich gekostet hat. Komplett auf dem Gerät.",
    inArbeit: "🧪 Im Test: Die App läuft im geschlossenen Test bei Google Play. Installieren kann sie nur, wer dafür freigeschaltet ist — öffentlich im Store steht sie noch nicht, und zu kaufen gibt es nichts.",

    kernTitel: "Der Kniff",
    kernText: "Drei Werte hängen zusammen: Preis je Liter, Liter, Gesamtpreis. Wer zwei davon einträgt, bekommt den dritten geschenkt — egal welche zwei. Das klingt klein, entscheidet aber, ob man an der Zapfsäule wirklich alles einträgt oder es sein lässt. Und weil die App den Verbrauch je Betankung mitrechnet, sieht man Ausreißer sofort, statt sie erst im Jahresmittel zu bemerken.",

    umfangTitel: "Was drinsteckt",
    umfangText: "Vom Beleg an der Säule bis zur Jahresbilanz: erfassen, vergleichen, auswerten — ohne Tabelle und ohne Konto irgendwo im Netz.",
    umfangZahlen: [
      { zahl: "4", text: "Bereiche" },
      { zahl: "4", text: "Auswertungen" },
      { zahl: "3", text: "Werte genügen" },
      { zahl: "5", text: "Jahres-Kennzahlen" }
    ],
    umfangListe: [
      { name: "Zwei Werte reichen", text: "Preis und Liter, Preis und Gesamt, Liter und Gesamt — die App ergänzt den dritten Wert selbst." },
      { name: "Verbrauch je Betankung", text: "Aus Kilometern und Litern: sofort sichtbar, nicht erst am Jahresende." },
      { name: "Kosten je 100 km", text: "Was die Strecke wirklich kostet — die Zahl, die man beim Vergleichen braucht." },
      { name: "Preis-Trend", text: "Der letzte Literpreis gegen das Mittel der letzten fünf Betankungen, als Kurve." },
      { name: "Jahresbilanz", text: "Ausgaben, Strecke, getankte Liter, Verbrauch und Literpreis im Schnitt — je Jahr." },
      { name: "Tankstellen", text: "Eigene Namen statt Kettenlogos: Autohof, Stadt, Arbeit — wie man sie selbst nennt." },
      { name: "Auswertungen", text: "Nach Jahren, nach Monaten, nach Preis, nach Verbrauch — vier Blickwinkel auf dieselben Daten." },
      { name: "Eigenes Profil", text: "Mehrere Fahrer, mehrere Autos: jedes Profil sieht nur seine eigenen Betankungen." }
    ],

    besondersTitel: "Was es besonders macht",
    besonders: [
      { name: "Das Profil bleibt auf dem Gerät", text: "Es gibt keinen Tankspur-Server. Das Profil trennt die Daten mehrerer Fahrer auf demselben Handy — es verschickt nichts und verlangt keine Bestätigungsmail." },
      { name: "Fahrtage statt nur Kilometer", text: "Wer notiert, an wie vielen Tagen er gefahren ist, sieht nicht nur was, sondern auch wie oft — und erkennt, ob eine teure Tankfüllung an langen Strecken lag oder am Preis." },
      { name: "Keine Zahl wird geschätzt", text: "Was nicht eingetragen ist, bleibt leer. Die App rechnet aus vorhandenen Werten — sie erfindet keine, um eine Lücke zu füllen." }
    ],


    mehrKnopf: "Alles über Tankspur",
    mehrText: "Die drei Werte, der Verbrauch je Betankung, die Jahresbilanz — und was bis zur Veröffentlichung noch passiert.",
    hinweis: "Tankspur läuft im geschlossenen Test bei Google Play — installieren kann die App nur, wer für den Test freigeschaltet ist. Alle Angaben beschreiben den aktuellen Bau-Stand und können sich bis zur Veröffentlichung ändern."
  },

  scheinbar: {
    bereicheTitel: "Die Bereiche",
    bereicheText: "Vier Reiter, dazu Profil und Einstellungen über die Kopfzeile.",
    bereiche: [
      { name: "🏠  Start", text: "Die aktiven Scheine mit ihrem Gewinnstatus und die letzte Ziehung je Spiel." },
      { name: "🧾  Scheine", text: "Alle Scheine, aktive und archivierte getrennt. Antippen zeigt jedes Tippfeld einzeln." },
      { name: "🎲  Ziehungen", text: "Das Ziehungsarchiv je Spiel — erfassen, ändern, nachladen." },
      { name: "📊  Statistik", text: "Drei Auswertungsbereiche mit gemeinsamem Zeitfenster." },
    ],

    kennung: "Kapitel 10 · Im Test",
    karteKurz: "Schein fotografieren, Gewinn sehen",
    karteStatus: "Im Test",
    statusPille: "Im Test — Testfassung außerhalb der Stores",
    name: "ScheinBar",
    untertitel: "Schein fotografieren, Gewinn sehen",
    claim: "Fotografieren.",
    claimZwei: "Nachrechnen übernimmt die App.",
    positionierung: "Ein Begleiter für BINGO!, Lotto 6aus49 und Eurojackpot: Spielschein abfotografieren, Zahlen kurz prüfen, fertig. Die App vergleicht jeden Schein mit den erfassten Ziehungen und sagt, ob und in welcher Gewinnklasse etwas dabei ist. Die Texterkennung läuft auf dem Gerät, gespeichert wird ausschließlich dort.",
    inArbeit: "🧪 Im Test: ScheinBar läuft als Testfassung außerhalb der Stores. In den Stores steht sie noch nicht, und der Abopreis ist noch nicht festgelegt.",

    kernTitel: "Der Kniff",
    kernText: "Gewinne werden nie gespeichert, sondern bei jedem Aufruf neu gerechnet. Das klingt nach einem Detail, entscheidet aber alles: Trägt man eine Ziehung nach, ändert sich sofort der Status jedes betroffenen Scheins — rückwirkend, ohne dass irgendetwas neu geprüft werden müsste. Und weil die Erkennung nur einen Vorschlag liefert, den man bestätigt, steht am Ende immer das, was wirklich auf dem Schein steht.",

    umfangTitel: "Was drinsteckt",
    umfangText: "Vom abfotografierten Schein bis zur Auswertung über Monate: erfassen, prüfen, vergleichen — ohne Konto und ohne Server.",
    umfangZahlen: [
      { zahl: "3", text: "Spiele" },
      { zahl: "12", text: "Bildschirme" },
      { zahl: "4", text: "Reiter" },
      { zahl: "4", text: "Zeitfenster" }
    ],
    umfangListe: [
      { name: "Drei Spiele", text: "BINGO!, Lotto 6aus49 und Eurojackpot — jedes mit eigenem Zahlenraum, eigener Zusatzzahl und eigenen Gewinnklassen." },
      { name: "Schein fotografieren", text: "Die Texterkennung läuft auf dem Gerät und liefert einen Vorschlag, den man in der Korrektur-Ansicht bestätigt oder ändert." },
      { name: "Auch ganz ohne Kamera", text: "Die Eingabe von Hand ist ein gleichwertiger Weg, kein Notbehelf — die App fordert keine eigene Kamera-Berechtigung an." },
      { name: "Gewinnklassen statt Trefferzahl", text: "Neun Klassen bei Lotto, zwölf bei Eurojackpot; bei BINGO! zählen volle Reihen — waagerecht, senkrecht und diagonal." },
      { name: "Ziehungsarchiv", text: "Ziehungen selbst erfassen mit Bereichsprüfung je Zahl — oder eine gepflegte Sechs-Monats-Liste nachladen, die nur fehlende Tage ergänzt." },
      { name: "Statistik in drei Bereichen", text: "Gezogen (häufigste und überfällige Zahlen), Meine Zahlen (gespielt gegen gezogen) und Gewinne (je Klasse, Treffer je Feld)." },
      { name: "Zeitfenster", text: "Alles, sechs Monate, drei Monate oder dreißig Tage — der Filter gilt für alle drei Bereiche gleichzeitig." },
      { name: "Startbestand aus Excel", text: "Eine vorhandene Ziehungsliste lässt sich einlesen; jede Abweichung wird einzeln gemeldet statt still übernommen." }
    ],

    besondersTitel: "Was es besonders macht",
    besonders: [
      { name: "Kein Glücksspiel", text: "Die App nimmt keine Tipps entgegen, verkauft keine Scheine, lost nichts aus und zahlt nichts aus. Sie verwaltet, was längst gespielt ist — mehr nicht." },
      { name: "Keine Vorhersage", text: "Die Statistik beschreibt, was war. Sie sagt keine Zahlen voraus und verspricht keine besseren Gewinnchancen — solche Versprechen wären schlicht unwahr." },
      { name: "Der Kern braucht kein Netz", text: "Erfassen, Prüfen und Auswerten laufen ohne Verbindung. Ins Internet geht die App nur für den Abo-Kauf im Store, die Ziehungs-Nachladung und die Update-Prüfung." }
    ],

    mehrKnopf: "Alles über ScheinBar",
    mehrText: "Die drei Spiele, die Gewinnklassen, die Statistik — und was bis zur Veröffentlichung noch offen ist.",
    hinweis: "ScheinBar liegt als Testfassung außerhalb der Stores vor. Alle Angaben beschreiben den aktuellen Bau-Stand und können sich bis zur Veröffentlichung ändern. Der Abopreis steht noch nicht fest."
  },

  /* ============ LIVE — automatisch geladene Renndaten ============ */
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
    browser: "Im Browser testen",
    // ENTFERNT 12.08.2026 (Falk-Entscheid): "Im Browser spielen/testen" ist auf ALLEN Seiten raus.
    // Nicht wieder einbauen — die Apps zeigen nur Android · Apple · eigene Webseite.
    // browserSpielen: "Im Browser spielen",
    browserFehlt: "Web-Fassung folgt",
    browserAelter: "Die Web-Fassung zeigt den Stand vor dem Neubau — die Store-App ist neuer.",
    play: "Bei Google Play",
    playBald: "Play Store — bald verfügbar",
    apple: "Im App Store",
    appleBald: "App Store — bald verfügbar",
    datenschutz: "Datenschutz",
    qrTitel: "Mit dem Handy öffnen",
    qrText: "Kamera drauf halten — die Web-Fassung öffnet sich sofort.",
    androidKnopf: "Android",
    appleKnopf: "Apple",
    browserKnopf: "Browser",
    androidUnter: "Google Play",
    appleUnter: "App Store",
    browserUnter: "Sofort spielen",
    webseiteKnopf: "Website",
    webseiteUnter: "Eigene Seite zur App",
    holenTitel: "Wo es die App gibt",
    holenText: "Auf dem Handy über den jeweiligen Store — dazu die Webseite der App mit allen Einzelheiten.",
    zurWebseite: "Zur App-Webseite ↗",
    /* Download der SetUpLeiste — {version} und {groesse} kommen aus BEZUG */
    holenTitelProgramm: "Wo es das Programm gibt",
    windowsKnopf: "Für Windows herunterladen",
    windowsUnter: "Fassung {version} · {groesse}",
    windowsHinweis: "Windows 10 und 11 (64 Bit). Die Datei installiert das Programm mit Desktop-Symbol und Deinstallation — kein Konto, keine Werbung, nichts wird übertragen.",
    standTest: "im Test",
    standPruefung: "in Prüfung",
    bezugHinweis: "Jeder Weg, der schon freigegeben ist, ist hier ein echter Knopf. Steht „im Test“ oder „in Prüfung“ dabei, ist die Fassung beim jeweiligen Store noch nicht öffentlich — der Knopf wird freigeschaltet, sobald es so weit ist.",
    pruefungKurz: "in Prüfung",
    // ENTFERNT 12.08.2026 (Falk-Entscheid): "Im Browser spielen/testen" ist auf ALLEN Seiten raus.
    // Nicht wieder einbauen — die Apps zeigen nur Android · Apple · eigene Webseite.
    // pruefungLang: "Die Store-Fassungen liegen bei Apple und Google zur Prüfung. Bis sie freigeschaltet sind, führt der Knopf noch auf eine Fehlerseite — im Browser läuft die App schon jetzt vollständig.",
    inPruefung: "in Prüfung"
  },

  /* ====================== ÜBER DEN ENTWICKLER ========================= */
  ueber: {
    kennung: "Über mich",
    titel: "Ein Mensch, ein Studio",
    text: "Ich bin aus Nordfriesland und arbeite allein. Kein Team, kein Büro, kein Investor. Was ich habe, ist eine klare Vorstellung davon, wie eine App sich anfühlen soll — und KI als Werkzeugkasten, der mir die Arbeit abnimmt, für die früher fünf Leute nötig waren.",
    textZwei: "Meine Apps haben eines gemeinsam: Sie funktionieren offline, sie sammeln nichts über dich, und sie bevormunden dich nicht. Das ist keine Marketing-Haltung, sondern die einzige, die ich selbst auf meinem Handy dulden würde.",

    ablaufTitel: "Wie ein Projekt entsteht",
    ablauf: [
      { nr: "01", titel: "Idee", text: "Meist ein Ärgernis aus dem Alltag. Instinct Scoring entstand, weil der Papierzettel im Regen aufweicht." },
      { nr: "02", titel: "Spezifikation", text: "Alles wird aufgeschrieben, bevor eine Zeile Code entsteht. Was die App NICHT kann, steht genauso drin." },
      { nr: "03", titel: "Bau", text: "Flutter für alles, was auf Android und iPhone gleich aussehen soll, Kotlin dort, wo es näher ans Gerät geht. KI schreibt mit, ich entscheide." },
      { nr: "04", titel: "Test", text: "Auf echten Geräten, draußen, mit Handschuh. Was am Schreibtisch gut aussieht, versagt oft im Wald." },
      { nr: "05", titel: "Store", text: "Google Play und App Store, beide Prüfungen, alle Formulare. Der langweiligste und lehrreichste Teil." }
    ],

    zahlen: [
      { zahl: "10", text: "Produkte" },
      { zahl: "2", text: "Stores" },
      { zahl: "16", text: "Sprachen" }
    ],

    portraetAlt: "Grafisches Porträt: Bogenschützen-Silhouette zwischen Neon-Ringen"
  },

  /* ====================== VERGLEICH & FRAGEN ========================= */
  vergleich: {
    kennung: "Auf einen Blick",
    titel: "Welche App ist für dich?",
    text: "Neun Produkte, neun völlig verschiedene Zwecke — vier zu haben, vier im Test, eines noch im Bau. Was sie verbindet: Ihr Kern läuft ohne Netz, sie sammeln nichts über dich und verlangen kein Konto bei uns. Die Instinct Familie steht hier nicht mit drin — sie ist keine einzelne App, sondern zehn, und noch ist keine davon zu haben.",
    spalten: ["", "FaNiCa Fun", "Instinct Scoring", "NeonPunkt", "SetUpLeiste", "Campus Clash", "YourFilm", "ZeitAnker", "Tankspur", "ScheinBar"],
    zeilen: [
      { name: "Wofür",        werte: ["Mit Freunden tippen", "Bogensport dokumentieren", "Nichts. Genau das ist der Reiz.", "Sehen, was der Rechner gerade tut", "Endlos aufsteigen im Schulspiel", "Filmsammlung ordnen und bewerten", "Arbeitszeit erfassen und nachweisen", "Spritkosten im Blick behalten", "Spielscheine prüfen und auswerten"] },
      { name: "Stand",        werte: ["Live in beiden Stores", "Im App Store · Play im Test", "Im Store-Test", "Fertig zum Download", "In Bearbeitung", "Im Test bei Google Play", "Im Test bei Google Play", "Im Test bei Google Play", "Testfassung außerhalb der Stores"] },
      { name: "Allein oder zu mehreren", werte: ["Beides — allein oder in der Gruppe", "Beides", "Allein", "Allein", "Beides — mit Freunden & Allianz", "Allein", "Allein", "Allein", "Allein"] },
      { name: "Internet nötig", werte: ["Nur zum Abgleich", "Nur für Turniere", "Nie", "Nur zum Messen der Leitung", "Nie", "Nur für Filmdaten (freiwillig)", "Nie", "Nie", "Nur fürs Abo und Nachladen"] },
      { name: "Profil nötig",  werte: ["Ja — einmal anlegen", "Nein", "Nein", "Nein", "Nein", "Nein", "Nein", "Ja — einmal anlegen", "Ja — einmal anlegen"] },
      { name: "Umfang",        werte: ["13 Ansichten", "23 Bildschirme", "1 Bildschirm", "11 Messwerte", "8 Bereiche · 40 Fächer", "13 Bildschirme", "14 Bildschirme", "5 Bildschirme", "12 Bildschirme · 3 Spiele"] },
      { name: "Sprachen",      werte: ["2", "2", "16", "1", "1", "1", "1", "1", "2"] },
      { name: "Kostenlos nutzbar", werte: ["Tippen — aktuelles und letztes Rennen", "Runden schießen & werten", "Die ersten 500 Klicks", "Alles — das ganze Programm", "Alles — es gibt noch nichts zu kaufen", "Alles — es gibt noch nichts zu kaufen", "Alles — die ganze App", "Alles — die ganze App", "Zwei Scheine · Prüfung & Archiv"] },
      { name: "Premium ab",    werte: ["1,99 € / 4 Wochen", "1,99 € — Plus 2,99 €", "0,49 € / 4 Wochen", "—", "noch offen", "noch offen", "—", "—", "noch offen"] },
      { name: "Plattform",     werte: ["Android · iOS", "Android · iOS", "Android · iOS", "Windows", "Android · iOS", "Android", "Android · iOS", "Android · iOS", "Android · iOS"] }
    ],
    fuss: "Preise gelten für die Apps mit Premium, jeweils mit sieben Tagen kostenlosem Test. Die SetUpLeiste ist ganz kostenlos; bei Campus Clash, YourFilm und ScheinBar steht noch nicht fest, ob und was etwas kosten wird."
  },

  fragen: {
    kennung: "Häufige Fragen",
    titel: "Was oft gefragt wird",
    liste: [
      { f: "Brauche ich für die Apps ein Konto?",
        a: "Bei den meisten nicht — du installierst und legst los. Ein Profil brauchen nur FaNiCa Fun (mehrere Leute tippen in derselben Runde), Tankspur und ScheinBar (mehrere Fahrer oder Spieler auf einem Gerät). Diese Profile liegen auf dem Gerät, nicht bei uns." },
      { f: "Funktionieren die Apps ohne Internet?",
        a: "Der Kern jeder App läuft ohne Verbindung, und alle Daten liegen auf dem Gerät. Netz braucht nur, was von außen kommt: die Rennergebnisse und der Abgleich mit den Mitspielern bei FaNiCa Fun, die Filmdaten bei YourFilm, das Nachladen der Ziehungen bei ScheinBar. NeonPunkt, ZeitAnker und Tankspur kommen ganz ohne aus." },
      { f: "Was passiert mit meinen Daten?",
        a: "Sie bleiben auf deinem Gerät. Keine der Apps hat Werbung, Analyse-Werkzeuge oder Datenweitergabe. Das ist keine Marketing-Aussage, sondern eine bewusste Entscheidung — Einnahmen kommen ausschließlich aus den Abos." },
      { f: "Was kostet mich das?",
        a: "Jede App ist kostenlos nutzbar. Premium schaltet Zusatzfunktionen frei und beginnt bei 0,49 € je vier Wochen; die ersten sieben Tage sind immer kostenlos, ohne dass du kündigen musst. Die SetUpLeiste kostet gar nichts, und bei den Apps im Test steht noch nicht fest, ob und was etwas kosten wird." },
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
    kennung: "Kontakt",
    titel: "Schreib mir",
    text: "Fragen zu einer App, ein Fehler gefunden, eine Idee? Ich lese jede Mail selbst — es gibt ja niemand anderen.",
    knopf: "fanicafuntipp@gmail.com",
    mail: "fanicafuntipp@gmail.com",

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
    antwortzeit: "Ich bin kein Support-Team, sondern eine Person — an Wochenenden kann es also mal einen Tag dauern.",

    /* --- Impressum, aufklappbar auf der Startseite --- */
    impressumTitel: "Impressum",
    impressumUnter: "Angaben gemäß § 5 DDG",
    anbieter: "Falk Carstensen\nAm Hasselberg 19\n25813 Husum\nDeutschland",
    impressumZeilen: [
      { was: "Verantwortlich für den Inhalt", text: "Falk Carstensen, Anschrift wie oben." },
      { was: "Streitschlichtung", text: "Ich bin nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen." },
      { was: "Haftung für Links", text: "Für die Inhalte verlinkter Seiten (Google Play, App Store, Web-Fassungen) sind deren Betreiber verantwortlich. Zum Zeitpunkt der Verlinkung war nichts zu beanstanden." },
      { was: "Markenhinweis", text: "Google Play ist eine Marke von Google LLC, App Store eine Marke von Apple Inc. FaNiCa Fun ist eine unabhängige Fan-App ohne Verbindung zur Formula One Group." }
    ],
    impressumMehr: "Vollständiges Impressum als eigene Seite"
  },

  fuss: {
    impressum: "Impressum",
    datenschutz: "Datenschutz",
    bildquellen: "Bildquellen",
    lizenzen: "Lizenzen",
    kooperation: "Instinct Scoring ist eine Kooperation mit Bogensport Instinct.",
    copyright: "© 2026 FaNiCa · Falk Carstensen",
    kein: "Diese Seite setzt keine Cookies und misst nichts. Einzige Verbindung nach außen sind die öffentlichen F1-Renndaten.",
    zurueck: "Nach oben"
  },

  zurueckKnopf: "← Zurück zur Startseite",
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
    beschreibung: "Three finished apps from a one-man media studio: Instinct Scoring for archery, FaNiCa Fun as a private prediction game, and NeonPunkt, the world's most minimal game.",
    sprachknopf: "DE",
    sprachtitel: "Auf Deutsch umschalten"
  },

  nav: {
    apps: "The apps",
    ueber: "About me",
    kontakt: "Contact",
    sprung: "Skip to content"
  },

  hero: {
    augenbraue: "One-man media studio · Northern Germany",
    titel: "I build apps.",
    titelZwei: "Three are finished.",
    text: "From the first idea all the way into Google Play and the App Store. No team, no agency, no buzzwords.",
    knopfApps: "See the apps",
    knopfUeber: "About me",
    punkte: [
      { farbe: "oliv", name: "Instinct Scoring", ziel: "#instinct" },
      { farbe: "rot", name: "FaNiCa Fun", ziel: "#fanica" },
      { farbe: "neon", name: "NeonPunkt", ziel: "#neonpunkt" }
    ],
    appFanica: "Predictions",
    appInstinct: "Archery",
    appNeon: "Tap game",
    appSetup: "PC monitor",
    appCampus: "In progress",
    appYourfilm: "In testing",
    appZeitwissen: "In testing",
    appFamilie: "Coming soon",
    appTankspur: "In testing",
    scrollHinweis: "Scroll",
    karussellHinweis: "Tap to go straight to the app — the arrows turn the selection."
  },

  /* ====================== CHAPTER 1 — INSTINCT SCORING ================ */
  instinct: {
    kennung: "Chapter 02",
    karteKurz: "Scoring rounds on 3D and field courses",
    karteStatus: "On the App Store",
    statusPille: "On the App Store · Play in testing",
    kooperation: "by Bogensport Instinct · in cooperation with FaNiCa Fun",
    name: "Instinct Scoring",
    claim: ["TRACK.", "SCORE.", "IMPROVE."],
    claimDeutsch: "Your course. Your performance. Your progress.",
    zitat: "The archer decides. The app records.",
    positionierung: "The scoring app for traditional and instinctive archery on 3D and field courses. It replaces the paper scorecard. Fully offline. It doesn't judge and it doesn't correct — it records.",

    /* --- DSB edition in progress (Falk 21.08.2026) --------------- */
    dsbTitel: "In progress: the DSB edition",
    dsbText: "Instinct Scoring currently scores what counts on the course. Alongside it, an edition for competition under the rules of the German Shooting Federation (DSB) is being built — with everything a tournament needs. It is not part of the app you can download today.",
    dsbWasTitel: "What „DSB-compliant\u201c means",
    dsbWasText: "The DSB does not leave scoring open: shooting distance, target face, arrow count and time limit all depend on bow class, age class and discipline. The app derives those classes from the year of birth and shows exactly the conditions of the archer whose turn it is. The values do not live in the program but in a separate rule file with 112 conditions, checked against the sporting regulations. If the federation changes something, the file is replaced — not the app.",
    dsbDazuTitel: "What it adds",
    dsbDazu: [
      { name: "DSB as a sixth scoring system", text: "Ten-ring scoring with X, indoor over three arrows, outdoor over six — alongside the five systems already there." },
      { name: "Classes from the year of birth", text: "Eight bow classes, seven age classes, two disciplines. The class is frozen when a round ends, so the same round does not read differently next year." },
      { name: "Tournament director role", text: "A dedicated interface for the director: create the competition, keep the start list, assign archers to targets, release shooting time." },
      { name: "Locked ends", text: "A confirmed end is closed. Corrections go through a request the director approves — with a record of what changed." },
      { name: "Handover by QR or network", text: "Targets go to the director either by QR code or straight across the local Wi-Fi. No server, no account." },
      { name: "Ranking per class", text: "Scoring happens within the class. Ties are broken by discipline — outdoors the X count comes first." },
      { name: "Printouts", text: "A results list for the notice board, grouped by class. And score sheets with every end and signature fields, as the regulations require." }
    ],

    startTitel: "The home screen",
    startText: "Everything starts here. One tap on the green button and your round is running — scoring system, mode and archers are already set from last time. Below that: profile, tournament and statistics. Anything that needs Premium says so openly; nothing is hidden.",
    startPunkte: [
      { name: "New round", text: "The main button. Two taps and you're scoring." },
      { name: "Profile", text: "Your archers, bows and arrow setups in one place." },
      { name: "Tournament", text: "Combine several rounds into one competition." },
      { name: "Statistics", text: "Progress and analysis across all your rounds." }
    ],
    startZeile: "„All data stays on your device. Internet is never required.“ — that's what the app itself says.",
    bildStart2: "bilder/instinct/start.webp",
    bildStart2Alt: "Instinct Scoring: home screen with archer logo, forest backdrop and the menu New round, Profile, Tournament, Statistics",

    umfangTitel: "What's inside",
    umfangText: "Instinct Scoring is the largest app in the studio. 23 screens, 19 feature areas — here is what matters most.",
    umfangZahlen: [
      { zahl: "23", text: "screens" },
      { zahl: "19", text: "feature areas" },
      { zahl: "5", text: "scoring systems" },
      { zahl: "30", text: "archer symbols" }
    ],
    umfangListe: [
      { name: "Run a round", text: "Score target by target, pause and pick up later — the app remembers where you were." },
      { name: "Several archers", text: "Groups and teams in the same round, each with their own colour and symbol." },
      { name: "Running total", text: "Ranking and average mid-round, without interrupting it." },
      { name: "Podium at the end", text: "Final result with places one to three and every figure from the round." },
      { name: "Course management", text: "Targets with animal, distance, stake colour and slope — set up once, there forever." },
      { name: "Bows & arrows", text: "Full technical data, frozen as a snapshot for each round." },
      { name: "Spine calculator", text: "Tells you which shaft stiffness suits your bow (Premium)." },
      { name: "Statistics", text: "Average score, hit rate per zone, score history as a chart." },
      { name: "Draw weight comparison", text: "Which bow strength do you actually shoot better with?" },
      { name: "Analysis by animal", text: "Which targets suit you — and which don't." },
      { name: "Tournaments", text: "Follow dates from an online feed and create your own tournaments." },
      { name: "Target photos", text: "Archive shot pictures with date and name." },
      { name: "PDF & CSV", text: "Share a round report as PDF, export your data as CSV." },
      { name: "Backup", text: "Full backup with a checksum — nothing invalid is ever restored." }
    ],
    umfangAnzeigenTitel: "What the statistics show",
    umfangAnzeigen: [
      "Average score per target and per arrow",
      "Hit rate per zone, with count and percentage",
      "Rounds, targets, arrows and your record",
      "Score history over time as a line chart",
      "Which bow was used in how many rounds",
      "Duels and team scoring when you shoot in groups",
      "Draw weight comparison as bars",
      "Average per animal type"
    ],
    umfangFilter: "All filterable by archer, draw weight and mode.",

    bloecke: [
      {
        kennung: "01",
        titel: "Scoring a round",
        text: "Five scoring systems, training or tournament at the flick of a switch, several archers per round. The zone buttons are big enough for a glove — scored in seconds.",
        punkte: [
          "Five systems: IFAA Hunter and Animal, Target, WA 3D, Club 3D — who defines them is explained below",
          "Training or tournament — one switch",
          "Several archers per round, groups in one tap",
          "Large hit zones: Kill · Body · Hit · Miss",
          "Running total any time, final result with podium",
          "Completed rounds cannot be changed"
        ],
        bild: "bilder/instinct/runde.webp",
        alt: "Instinct Scoring: screen for scoring a round with large hit-zone buttons"
      },
      {
        kennung: "02",
        titel: "Courses & targets",
        text: "Set up your courses once — with animal, distance, stake and slope. Next time every target is already there.",
        punkte: [
          "Create your own courses with all targets",
          "Animal, distance, stake, slope per target",
          "Take a photo of each target straight from the app",
          "Pick a course — every target is automatically in the round"
        ],
        bild: null,
        alt: ""
      },
      {
        kennung: "03",
        titel: "Equipment",
        text: "Bows and arrow setups with every detail. The key part: equipment is frozen as a snapshot for each round — change something later and your history still stays correct.",
        punkte: [
          "Bows: type, draw weight, brace height, tiller, string",
          "Arrows: shaft, spine, length, weight, FOC, fletching, point",
          "Frozen as a snapshot per round",
          "Your history stays true — even after rebuilds"
        ],
        bild: null,
        alt: ""
      },
      {
        kennung: "04",
        titel: "Statistics",
        text: "Average score, hit rate per zone and how it develops over time. No judgement, no advice — just your numbers.",
        punkte: [
          "Average score and hit rate per zone",
          "Development over time as a chart",
          "Complete round history with every detail"
        ],
        bild: null,
        alt: ""
      }
    ],

    scheibeTitel: "Five scoring systems, one target",
    scheibeText: "Tap a zone — you'll see straight away what it counts in each system. That conversion is exactly what the app handles for you out on the course.",
    scheibeHinweis: "Tap a zone",
    scheibeSpalte: "Zone",
    scheibeFussnote: "First-arrow values. „Club 3D“ is a club variant, not an official governing-body scoring system.",
    scheibeZonen: [
      { name: "Spot", farbe: "#A7BC55",
        punkte: { "IFAA Hunter": 20, "IFAA Animal": 20, "Scheibe": 5, "WA 3D": 11, "Freizeit 3D": 18 } },
      { name: "Kill", farbe: "#8DA046",
        punkte: { "IFAA Hunter": 16, "IFAA Animal": 16, "Scheibe": 4, "WA 3D": 10, "Freizeit 3D": 16 } },
      { name: "Body", farbe: "#5E6B33",
        punkte: { "IFAA Hunter": 12, "IFAA Animal": 12, "Scheibe": 3, "WA 3D": 8, "Freizeit 3D": 10 } },
      { name: "Miss", farbe: "#2A2E24",
        punkte: { "IFAA Hunter": 0, "IFAA Animal": 0, "Scheibe": 0, "WA 3D": 0, "Freizeit 3D": 0 } }
    ],
    scheibeSysteme: ["IFAA Hunter", "IFAA Animal", "Scheibe", "WA 3D", "Freizeit 3D"],

    boegenTitel: "Which bows is it for?",
    boegenText: "The app doesn't care which bow you shoot — it records the values that matter for that bow. Here's what those are.",
    boegen: [
      {
        name: "Recurve",
        kurz: "The olympic one",
        text: "Limbs that curve back away from the archer at the tips — hence the name. That gives more arrow speed at the same draw weight. Usually shot with a sight, stabiliser and clicker.",
        erfasst: ["Draw weight", "Brace height", "Tiller", "String material"],
        farbe: "#A7BC55"
      },
      {
        name: "Longbow",
        kurz: "The traditional one",
        text: "One continuous, gently curved stave with no recurved tips. No sight, no accessories — you shoot instinctively. Quieter in the shot, but slower and more forgiving of mistakes.",
        erfasst: ["Draw weight", "Bow length", "Brace height", "String material"],
        farbe: "#8DA046"
      },
      {
        name: "Barebow",
        kurz: "The bare one",
        text: "A recurve without sight or stabiliser — hence „bare“. You aim over the arrow point or by stringwalking, gripping the string at different heights. The most popular class on 3D courses.",
        erfasst: ["Draw weight", "Brace height", "Tiller", "Nocking point"],
        farbe: "#7C8B3E"
      },
      {
        name: "Compound",
        kurz: "The technical one",
        text: "With cams at the limb tips. At full draw you only hold a fraction of the draw weight — which allows long, steady aiming. Highest precision, usually shot with a release aid.",
        erfasst: ["Draw weight", "Let-off", "Draw length", "Nocking point"],
        farbe: "#6B7A3A"
      }
    ],
    boegenErfasst: "The app records:",

    pfeileTitel: "And what matters on the arrow",
    pfeileText: "For every arrow setup the app keeps the values that govern flight. Change something later and your old rounds stay correct — equipment is frozen as a snapshot for each round.",
    pfeile: [
      { begriff: "Spine", erklaerung: "How much the shaft bends on the shot. If it doesn't suit your bow, the arrow flies crooked." },
      { begriff: "FOC", erklaerung: "How far forward the balance point sits. More FOC means steadier flight, but a flatter trajectory at distance." },
      { begriff: "Fletching", erklaerung: "Natural feather or plastic vane, length and helical angle — it steadies the arrow from behind." },
      { begriff: "Point weight", erklaerung: "In grains. Changes FOC and total weight, and with it your point of impact." }
    ],

    glossarTitel: "The words on a bow",
    glossarText: "Newcomers trip over a few terms. Here they are, each in one sentence — and the app records all of them for your bow.",
    glossar: [
      { begriff: "Draw weight",
        text: "The force in pounds you hold at full draw. More draw weight means a faster arrow, but also more effort." },
      { begriff: "Brace height",
        text: "The gap between string and grip on a strung bow. A few millimetres change how steady the bow sits in the shot." },
      { begriff: "Tiller",
        text: "How differently the upper and lower limb are tensioned. Get it wrong and the bow tips as you release." },
      { begriff: "Nocking point",
        text: "The marked spot on the string where the arrow clips on. Same spot every time means the same departure every time." },
      { begriff: "Limb",
        text: "The two springy arms of the bow. They store the energy and hand it to the arrow." },
      { begriff: "Shaft",
        text: "The tube of the arrow — carbon, aluminium or wood. Its stiffness is the spine." },
      { begriff: "Insert",
        text: "The small sleeve at the front of the shaft that the point screws into. It counts towards point weight." },
      { begriff: "Grain",
        text: "The unit of weight in archery. One grain is about 0.065 grams — points typically weigh 80 to 125 grains." },
      { begriff: "Let-off",
        text: "Compound only: how much draw weight the cams take off you at full draw. At 80 %, 60 pounds becomes just 12." }
    ],

    verbaendeTitel: "Who defines the scoring?",
    verbaende: [
      { name: "IFAA",
        lang: "International Field Archery Association",
        text: "The world body for field and 3D archery. The Hunter and Animal rounds with their 20/16/12 scoring come from them." },
      { name: "WA",
        lang: "World Archery",
        text: "The olympic governing body. Its 3D scoring of 11/10/8/5 applies at official tournaments and in German DSB competition." },
      { name: "Club variants",
        lang: "no governing body",
        text: "„Target“ and „Club 3D“ aren't official rulebooks but common house rounds. The app knows them anyway — you shoot whatever applies locally." }
    ],

    spineTitel: "The spine calculator",
    spineFrage: "What is spine, anyway?",
    spineAntwort: "Spine is the stiffness of the arrow shaft — how much it bends on the shot. The arrow snakes around the bow rather than leaving it straight. If the shaft is too soft or too stiff for your bow, it leaves crooked and misses, however cleanly you shoot.",
    spineWarum: "Hence the calculator: you enter what you have, it tells you which shaft stiffness fits. For wooden arrows in pounds, for carbon arrows as a spine number (lower number = stiffer shaft).",
    spineEingabeTitel: "What you enter",
    spineEingaben: [
      { feld: "Draw weight", hinweis: "in pounds, measured on the fingers" },
      { feld: "Arrow length", hinweis: "in inches, bare shaft without point and nock" },
      { feld: "Point + insert", hinweis: "in grains" },
      { feld: "String strands", hinweis: "count, 4 to 28" },
      { feld: "String material", hinweis: "Fast Flight or Dacron" },
      { feld: "Limb material", hinweis: "from full carbon to wood/bamboo" },
      { feld: "Bow type", hinweis: "recurve, longbow or hybrid" }
    ],
    spineErgebnisTitel: "What comes out",
    spineErgebnis: "Two values with a tolerance band: wooden spine in pounds and carbon spine as a number. Plus a verdict — „rather stiff“, „optimal“ or „rather weak“ — and the shop-standard spine sizes from 250 to 1500, so you know which shaft you can actually buy. The result can be saved straight away as a new arrow setup.",
    spineHinweis: "The spine calculator is part of Premium.",

    parcoursTitel: "Course, stake, duel — briefly explained",
    parcoursBegriffe: [
      { begriff: "3D course",
        text: "A circuit through the terrain with foam animal targets instead of ring faces. You walk from target to target, usually 20 to 28 of them, shooting each once — like golf, but with arrows." },
      { begriff: "Stake",
        text: "The marker in the ground you shoot from. Its colour says who it's for and how far it is to the target. The app knows red, blue, yellow and white." },
      { begriff: "Kill / Spot",
        text: "The small scoring zone inside the animal that's worth the most. Around it lie further zones worth less — like the rings of a target face, only invisible, worked into the figure." },
      { begriff: "Slope",
        text: "Uphill or downhill changes the effective shooting distance. The app records for each target whether it was flat, uphill or downhill." },
      { begriff: "Duel mode",
        text: "Two or more teams compete. The round scores of all members are added up and the running total shows at the top — „Team A 123 : 98 Team B“. Part of Premium+." }
    ],

    datenTitel: "Your data belongs to you",
    datenText: "No account. No sign-up. No ads. No tracking. The app never needs the internet — it works in the woods just as it does at home.",
    datenPunkte: [
      "100 % offline — everything stays on your device",
      "Backup as a file, restorable any time",
      "Share your result report as a PDF"
    ],

    versprechenTitel: "Built for outdoors",
    versprechen: [
      { zahl: "3 s", text: "Every important action in three seconds or less" },
      { zahl: "1 hand", text: "Large buttons, one-handed use with a glove on" },
      { zahl: "Sun", text: "Contrast that stays readable in bright light" }
    ],

    stufenTitel: "Three tiers",
    stufenText: "Everything is free for seven days — then you decide. Shooting and scoring rounds always works, even without a subscription.",
    stufen: [
      {
        name: "Free",
        preis: "€0",
        zeile: "forever",
        kann: ["Shoot & score rounds", "Create your own courses",
               "Take target photos", "Create a bow & arrow setup",
               "Create a backup"],
        grenze: "3 archers · 1 bow each · history of 1 round"
      },
      {
        name: "Premium",
        preis: "€1.99",
        zeile: "per 4 weeks · €19.99 per year",
        kann: ["Any number of archers", "Groups & teams",
               "Several bows & setups", "Full statistics",
               "Tournaments", "Spine calculator", "Restore a backup"],
        grenze: "History of 3 rounds · 7 colours · 10 symbols · 1 spine profile",
        hervor: true
      },
      {
        name: "Premium+",
        preis: "€2.99",
        zeile: "per 4 weeks · €29.99 per year",
        kann: ["Full history", "Duel mode",
               "Course search by postcode & radius",
               "All 30 colours & symbols", "Save spine profiles",
               "Statistics export as CSV", "Share results as PDF",
               "Edit photos & animal type later", "Change the app icon"],
        grenze: "No limits"
      }
    ],

    zielgruppe: ["Recurve", "Longbow", "Barebow", "Compound", "traditional"],
    preis: "Seven days of Premium+ free, then from €1.99 per four weeks. Shooting and scoring rounds stays free forever.",
    mehrKnopf: "Everything about Instinct Scoring",
    mehrText: "The four bow types with drawings, the spine calculator explained, the glossary of archery terms, who defines which scoring and the three tiers compared.",
    bildStart: "bilder/instinct/start.webp",
    bildStartAlt: "Instinct Scoring: home screen with archer logo against a forest backdrop"
  },

  /* ====================== CHAPTER 2 — FANICA FUN ====================== */
  fanica: {
    kennung: "Chapter 01",
    karteKurz: "Predict the top five with friends",
    karteStatus: "Live in both stores",
    statusPille: "Live on Google Play & the App Store",
    name: "FaNiCa Fun",
    untertitel: "The prediction game for motorsport friends",
    claim: "Predict the top five.",
    claimZwei: "You only see the others afterwards.",
    positionierung: "You predict the top five of each race — no money involved, just points, trophies and bragging rights. Play solo against your own best score, or open a private round your friends join with a code. You create a profile once; from then on every prediction counts towards your career.",

    kernTitel: "The trick",
    kernText: "No copying: everyone else's predictions stay hidden until you've submitted your own. Only then does the field open up — and everybody sees everything.",

    punkteTitel: "How points are awarded",
    punkteRegeln: [
      { zahl: "+3", text: "Driver in exactly the right position" },
      { zahl: "+1", text: "Driver in the top five, but in the wrong position" },
      { zahl: "15", text: "The highest possible score in one race — and the diamond threshold" },
      { zahl: "0", text: "No prediction submitted. There are no penalty points." }
    ],

    umfangTitel: "What's inside",
    umfangText: "Five tabs, with a good deal more behind them than you'd first think: 18 career figures and nine analysis blocks.",
    umfangZahlen: [
      { zahl: "5", text: "main areas" },
      { zahl: "13", text: "views" },
      { zahl: "18", text: "career figures" },
      { zahl: "4", text: "trophies to collect" }
    ],
    umfangListe: [
      { name: "Predicting", text: "Set your top five, up to eight hours before the start. Changeable any time before that." },
      { name: "Championship", text: "Your group's table with the change in position after every race." },
      { name: "Results", text: "The race top ten, the podium and your own prediction marked up in colour." },
      { name: "Season chart", text: "An animated chart showing how the points built up across the season." },
      { name: "Position chart", text: "A second chart — when the lead changed hands." },
      { name: "Track records", text: "Who scored the most points at which circuit." },
      { name: "All-time table", text: "Total points across every year, plus the best single season." },
      { name: "Career profile", text: "18 figures, filterable by all-time, group or single season." },
      { name: "Group chat", text: "Reply, edit your own messages, pin the important ones." },
      { name: "Race calendar", text: "Every date with start times in German local time." },
      { name: "Several groups", text: "One profile, any number of prediction groups — you simply switch." },
      { name: "Organiser tools", text: "Start and pause the game, hand out codes, set points and rules." },
      { name: "Weekend PDF", text: "A race weekend as a PDF: everyone's predictions side by side, the result, points and standings — ready to share." },
      { name: "Home-screen widgets", text: "The standings and the next race as Android widgets, right on your home screen." }
    ],
    umfangAnzeigenTitel: "The 18 career figures",
    umfangAnzeigen: [
      "Total points and points ratio",
      "Best and worst finishing position",
      "Average per season and per race",
      "Best season and best single result",
      "Hit rate and exact hits",
      "Consolation points and races in total",
      "Diamonds, race wins, podiums, trophies",
      "Gold picks — the calls nobody else made"
    ],
    umfangFilter: "All of it for one group, one season or your whole career.",

    /* --- New in the app (version 1.181, from the source code) --- */
    neuTitel: "New in the app",
    neuText: "What the latest updates brought — as of version 1.181.",
    neuListe: [
      { name: "Weekend PDF", text: "After every scored race weekend the app builds a PDF page: everyone's predictions side by side, the real result, the points and the standings — ready to share with the group." },
      { name: "Two home-screen widgets", text: "The standings (positions 1 to 10 with colour, points and trophies) and the next race with flag, location and start time — right on your Android home screen." },
      { name: "The whole season in one chart", text: "The full-screen chart now shows the complete season at a glance — switchable to the wide view for scrolling through." },
      { name: "54 player colours", text: "The palette grew to 54 colours: 15 base colours are free, the neon shades are part of Premium. Your first pick when joining is always free." },
      { name: "Countdown opens the calendar", text: "Tapping the countdown takes you straight to the race calendar at the current race." },
      { name: "Start the round with one button", text: "The organiser starts the round right from the home page — from the next race on every prediction counts, everyone starts together at zero." },
      { name: "More precise averages", text: "Point averages now show one decimal place — 8.4 and 8.5 are no longer the same number." }
    ],

    /* --- Free and Premium (values from kasse.dart / gratis_grenze.dart) --- */
    stufenTitel: "Free and Premium",
    stufenText: "Predicting costs nothing, permanently. Premium opens up the archive — and the first seven days are free.",
    stufen: [
      {
        name: "Free",
        preis: "€0",
        zeile: "forever",
        kann: ["Predict & score, every race", "Your group's table, always current",
               "Current & previous race in detail", "Group chat",
               "Race calendar & widgets", "Weekend PDF of the latest race"],
        grenze: "Archive: only the most recent race"
      },
      {
        name: "Premium",
        preis: "€1.99",
        zeile: "per 4 weeks · €14.99 per year — same price in both stores",
        kann: ["The complete season with all charts", "Every earlier year (history)",
               "All-time table & track records", "Career statistics with 16 figures",
               "39 additional player colours", "Change name, colour & symbol"],
        grenze: "Yearly plan: the paid season stays visible for good",
        hervor: true
      }
    ],

    ablaufTitel: "How a race week runs",
    ablaufSchritte: [
      { nr: "1", titel: "Wednesday: predictions open",
        text: "After the last race, predictions stay shut until Wednesday at midnight. Then they open for the next one." },
      { nr: "2", titel: "Set your top five",
        text: "Pick five drivers in the order you expect them to finish. Each driver only once. Until then everything is saved provisionally and can be changed any time." },
      { nr: "3", titel: "After qualifying: submit for real",
        text: "You can only submit finally once the qualifying result is in. If you like, the app takes the qualifying top five as your starting point — one tick is enough." },
      { nr: "4", titel: "Eight hours before the start it closes",
        text: "That's the deadline — the moment after which nobody can change anything. Thirty minutes earlier the app reminds you, if you've switched that on." },
      { nr: "5", titel: "All predictions become visible",
        text: "Only now do you see what the others picked — before that every prediction stays hidden. No copying." },
      { nr: "6", titel: "Race, then points",
        text: "The app fetches the race result and the starting grid automatically from open data sources once race day arrives, then hands out points and trophies." }
    ],

    trophaeenTitel: "The trophies and how to earn them",
    trophaeenText: "Four trophies you collect race by race, plus the cup for your final position at the end of the season. All of it purely down to how you predicted — none of it can be bought.",
    trophaeen: [
      { zeichen: "💎", name: "Diamond",
        bedingung: "15 points in one race — all five drivers in exactly the right position. The perfect race." },
      { zeichen: "👑", name: "Crown",
        bedingung: "Race win: you alone scored the highest total of the race. If two people tie, nobody gets it." },
      { zeichen: "🏅", name: "Podium",
        bedingung: "First to third in a race — meaning fewer than three other players scored more than you." },
      { zeichen: "⭐", name: "Gold pick",
        bedingung: "You put a driver in a position nobody else picked him for — and you were right. The courage bonus." },
      { zeichen: "🏆", name: "Trophy",
        bedingung: "Finishing first, second or third at the end of the season. Gold, silver, bronze — one per season." }
    ],
    trophaeenFuss: "If two players are level on points, whoever collected more trophies is ahead; after that it's the number of exact hits.",

    streckenTitel: "Which races do you predict?",
    streckenText: "The full 2026 season with 22 rounds is built in — from Melbourne in March to Abu Dhabi in December. For every race the app knows the circuit length, lap count, date and start time. Six rounds also have sprint qualifying and a sprint.",
    streckenZahlen: [
      { zahl: "22", text: "races in the season" },
      { zahl: "6", text: "of them with a sprint" },
      { zahl: "10", text: "players per group" }
    ],
    streckenBeispiele: ["Melbourne", "Monaco", "Silverstone", "Spa", "Monza", "Las Vegas", "Abu Dhabi"],
    streckenQuelle: "The app fetches race results automatically from public motorsport data sources once race day arrives — including the official starting grid with every penalty applied.",

    beitrittTitel: "How do I start?",
    beitrittSchritte: [
      { nr: "1", titel: "Create a profile",
        text: "Pick a name and a colour once — that is your profile. It belongs to you and travels with you through every group and season." },
      { nr: "2", titel: "Predict on your own",
        text: "You can start right away without a group: against the race result and against your own best score. The career figures build up just the same." },
      { nr: "3", titel: "Or open a group",
        text: "If you want to play with others, create a group — it costs nothing, up to ten players. The app generates a joining code for every free seat." },
      { nr: "4", titel: "Hand out the code",
        text: "The others type in their name and the code, done. Nobody stumbles into a stranger's group by accident." }
    ],
    beitrittHinweis: "Your profile belongs to you, not to the group: a subscription you take out applies in every group you play in.",

    bloecke: [
      {
        kennung: "01",
        titel: "Predicting with a countdown",
        text: "The countdown runs until eight hours before the start. Thirty minutes before that you get a reminder — switchable, if you'd rather not have it.",
        punkte: [
          "Top-five prediction per race",
          "Deadline eight hours before the start",
          "Reminder 30 minutes before it closes",
          "Free practice until Friday"
        ],
        bild: "bilder/fanica/tippen.webp",
        alt: "FaNiCa Fun: prediction screen with the five positions P1 to P5 and the scoring rule"
      },
      {
        kennung: "02",
        titel: "Table & statistics",
        text: "The season plays back as an animation, alongside track records and all-time tables. Do well and you collect diamonds and crowns.",
        punkte: [
          "Animated season chart",
          "Track records and all-time tables",
          "Diamonds for race wins, crowns for podiums",
          "Career profile across several years"
        ],
        bild: "bilder/fanica/startseite.webp",
        alt: "FaNiCa Fun: home screen with season table, track records and all-time lists"
      },
      {
        kennung: "03",
        titel: "Group chat",
        text: "Every group has its own chat: reply, pin the important messages, pick your own player colour.",
        punkte: [
          "Reply to and pin messages",
          "Organiser notices highlighted",
          "Own player colour for each player",
          "Notifications switchable individually"
        ]
      },
      {
        kennung: "04",
        titel: "Private stays private",
        text: "Access only through the organiser's email and a personal code. Nobody stumbles into a stranger's game.",
        punkte: [
          "Private groups with a code",
          "Access only through the organiser",
          "The same app on Android and iPhone",
          "Race results from public data sources"
        ]
      }
    ],

    mehrKnopf: "Everything about FaNiCa Fun",
    mehrText: "Every trophy with its real conditions, how a race week runs, all 22 circuits, the 18 career figures, the new features and what Premium does.",
    galerieTitel: "A look inside the app",
    rundeTitel: "What it actually looks like",
    rundeText: "This is not a demo round with made-up names. These are the real numbers from the group I built the app for in the first place — running since 2022, now in its fifth year.",
    rundeQuelle: "As of race nine of twenty-two in the 2026 season. Names are anonymised here; everything else is unchanged.",

    rundeTabelleTitel: "The standings after nine races",
    rundeTabelleText: "A single point separates first from second, twenty-five separate first from last. That is exactly why nobody drops out: with thirteen races left, anyone can still turn this around.",

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
    rundeTrefferText: "435 individual predictions were made this season. A good quarter were spot on, almost half named the right driver in the wrong position — and fewer than a third missed entirely. That is the mix that keeps a prediction group alive: often close, rarely perfect.",

    rundeStreckenTitel: "Not every circuit is equally hard",
    rundeStreckenText: "How many points the whole group scores on a race weekend says a lot about the circuit. Where the order up front stays stable, everyone collects; where safety cars and retirements shuffle the field, almost nothing is left.",

    rundeSiegerTitel: "Five years, five stories",

    bilder: [
      { pfad: "bilder/fanica/tippen.webp", hoch: true,
        alt: "FaNiCa Fun: prediction page with the countdown to the Zandvoort race and the top-5 pick",
        titel: "The prediction slip" },
      { pfad: "bilder/fanica/ergebnis.webp", hoch: true,
        alt: "FaNiCa Fun: Monaco race weekend with result, qualifying, podium and the group's predictions",
        titel: "A complete race weekend" },
      { pfad: "bilder/fanica/kalender.webp", hoch: true,
        alt: "FaNiCa Fun: 2026 race calendar with every Zandvoort session",
        titel: "The race calendar" },
      { pfad: "bilder/fanica/karriere.webp", hoch: true,
        alt: "FaNiCa Fun: a player's career statistics with hit rate, records and points average",
        titel: "The career statistics" },
      { pfad: "bilder/fanica/teilnahme.webp", hoch: true,
        alt: "FaNiCa Fun: confirming participation in a group",
        titel: "Joining a group" },
      { pfad: "bilder/fanica/chat.webp", hoch: true,
        alt: "FaNiCa Fun: group chat of the prediction round",
        titel: "The group chat" }
    ],

    bildProfil: "bilder/fanica/profil.webp",
    bildProfilAlt: "FaNiCa Fun: creating a profile — register once, play everywhere",
    preis: "Predicting is free, permanently. Without Premium you see the current and the previous race. Premium opens up the archive: the full season, every earlier year, all-time tables, track records and your career statistics. €1.99 per four weeks or €14.99 per year — the same price in both stores, and the first seven days are free.",
    hinweis: "Ages 18 and up. No money is involved — but gambling can still be addictive. Help at check-dein-spiel.de.",
    hinweisLink: "https://www.check-dein-spiel.de",
    unabhaengig: "An independent fan app. No connection to the Formula One Group. Race results come from public data sources."
  },

  /* ====================== CHAPTER 3 — NEONPUNKT ======================= */
  neonpunkt: {
    kennung: "Chapter 03",
    karteKurz: "One dot, 48 hours, nothing else",
    karteStatus: "In store testing",
    statusPille: "In store testing",
    name: "NeonPunkt",
    untertitel: "The world's most minimal game",
    claim: "One dot. 48 hours.",
    claimZwei: "You can never stop it.",
    positionierung: "A neon dot grows for forty-eight hours until it fills the whole screen. Tap it and it starts small again — in the next of sixteen neon colours. You can't stop it. Only delay it.",

    worumTitel: "So what's the point?",
    worumText: "There isn't one — and that's exactly the point. No opponent, no levels, no losing. A single neon dot grows steadily for forty-eight hours until it fills the screen. Tap it and it jumps back to its starting size, switches to the next colour and reappears somewhere else. That's all that happens.",
    worumZwei: "The appeal is in coming back. Anyone who wants to keep the dot small has to remember it again and again for two days. Forget it and you'll eventually find a screen-filling blob of colour — and that ends the session. It goes into the leaderboard, and a new one begins.",

    reglnTitel: "All the rules there are",
    regeln: [
      { begriff: "Growing", text: "From a 12-point radius to screen-filling, evenly across 48 hours. No acceleration, no surprises." },
      { begriff: "Tapping", text: "Counter up by one, next colour, new position, the dot's own clock back to zero. The session clock keeps running." },
      { begriff: "Full", text: "Once the dot is fully grown, the next tap ends the session. It's entered in the leaderboard, then you start fresh." },
      { begriff: "Two clocks", text: "The top one shows how long the session has been running. The dot has its own clock since the last tap." },
      { begriff: "Leaderboard", text: "Two lists of five places each: most taps in one session — and the same tap count in the shortest time." },
      { begriff: "Widget", text: "The dot fits on your home screen too. A tap there counts exactly the same — without opening the app." }
    ],

    farbenTitel: "The sixteen colours",
    farbenText: "Always in order, never at random. After the sixteenth it starts over.",
    farbenListe: [
      { hex: "#39FF14", name: "Green" },     { hex: "#FF10F0", name: "Pink" },
      { hex: "#00FFFF", name: "Cyan" },      { hex: "#FFFF00", name: "Yellow" },
      { hex: "#FF9F00", name: "Orange" },    { hex: "#BC13FE", name: "Purple" },
      { hex: "#FF3131", name: "Red" },       { hex: "#1F51FF", name: "Blue" },
      { hex: "#ADFF2F", name: "Lime" },      { hex: "#00FF7F", name: "Spring" },
      { hex: "#7DF9FF", name: "Ice blue" },  { hex: "#FF6EC7", name: "Rose" },
      { hex: "#FFD300", name: "Gold" },      { hex: "#00BFFF", name: "Sky" },
      { hex: "#6F00FF", name: "Indigo" },    { hex: "#FF4D6D", name: "Coral" }
    ],

    umfangTitel: "Small, but complete",
    umfangText: "One screen, one dot — and still in 16 languages, with two leaderboards and a widget that counts exactly like the app itself.",
    umfangZahlen: [
      { zahl: "16", text: "languages" },
      { zahl: "2", text: "leaderboards" },
      { zahl: "5", text: "places per list" },
      { zahl: "0", text: "permissions" }
    ],
    umfangListe: [
      { name: "The dot", text: "Grows steadily for 48 hours until it fills the screen." },
      { name: "Tapping", text: "Counter up, next colour, new position, the dot's clock back to zero." },
      { name: "Two clocks", text: "How long the session has run — and how long the dot has been sitting there." },
      { name: "Best games", text: "The five sessions with the most taps." },
      { name: "Fastest sessions", text: "The same tap count, but in less time." },
      { name: "Average", text: "Taps per session across every game." },
      { name: "Widget", text: "The dot on your home screen — a tap there counts fully." },
      { name: "Reset", text: "Start over without losing leaderboards or your purchase." },
      { name: "16 languages", text: "Detects your system language automatically, from German to Korean." }
    ],
    umfangAnzeigenTitel: "What's displayed",
    umfangAnzeigen: [
      "Tap counter for the running session",
      "Elapsed time in weeks, days, hours, minutes, seconds",
      "Warning from 450 taps onwards, showing how many are left",
      "Best games — top five by taps",
      "Fastest sessions — top five by time",
      "Average taps per session"
    ],
    umfangFilter: "Everything stays on your device. There is no online leaderboard and nobody to compete against.",

    rafferTitel: "48 hours in twelve seconds",
    rafferText: "This is how it really goes — just sped up. The dot grows, the clock runs along. Tap it and it starts small again in a new colour.",
    rafferKnopfStart: "▶ Play the time-lapse",
    rafferKnopfStopp: "■ Pause",
    rafferZeit: "Elapsed",
    rafferGroesse: "Size",
    rafferHinweis: "Tap the dot while it runs",
    rafferStatisch: "The dot grows steadily across 48 hours until it fills the screen.",

    spielTitel: "Try it right here",
    spielText: "The dot below is real. Tap it — it starts small again, in the next colour, and counts along. That's exactly how the game feels, only stretched across forty-eight hours.",
    spielKlicks: "Taps",
    spielFarbe: "Colour",
    spielVon: "of 16",
    spielHinweis: "Tap the dot",

    zahlen: [
      { zahl: "48", einheit: "hours", text: "until the dot fills the screen" },
      { zahl: "16", einheit: "colours", text: "one after another, always in order" },
      { zahl: "0", einheit: "permissions", text: "no ads, no internet, no account" }
    ],
    mehrKnopf: "Everything about NeonPunkt",
    mehrText: "What the point actually is, all the rules, the sixteen colours in order, both leaderboards and the home screen widget.",
    zahlenFuss: "No ads, no permissions, no account, no internet. Everything stays on your device.",

    bloecke: [
      {
        kennung: "01",
        titel: "Counter and leaderboard",
        text: "Taps and sessions are counted. The leaderboard stays on your device — there's nobody to compete against except yourself.",
        punkte: [
          "Tap and session counter",
          "Local leaderboard, top 5 games",
          "Most taps per session",
          "All of it only on your device"
        ]
      },
      {
        kennung: "02",
        titel: "Widget and languages",
        text: "The dot fits on your home screen too — tappable without opening the app. In sixteen languages.",
        punkte: [
          "Home screen widget, directly tappable",
          "16 languages",
          "No ads, no permissions",
          "Works entirely without internet"
        ]
      }
    ],

    bilder: [
      { pfad: "bilder/neonpunkt/waechst.webp", hoch: true,
        alt: "NeonPunkt: the dot has grown to medium size",
        titel: "After a few hours" },
      { pfad: "bilder/neonpunkt/fast-voll.webp", hoch: true,
        alt: "NeonPunkt: the dot almost fills the whole screen",
        titel: "Nearly there" },
      { pfad: "bilder/neonpunkt/bestenliste.webp", hoch: true,
        alt: "NeonPunkt: the local leaderboard with taps per session",
        titel: "Your leaderboard" }
    ],

    preis: "The first 500 taps are free. Premium is free for the first seven days, then €0.49 per four weeks or €4.99 per year — it unlocks unlimited play, the leaderboards and the average. Nothing is lost — the game simply pauses.",

    /* --- Free and Premium (values from Kasse.kt / Parameter.kt) --- */
    stufenTitel: "Free and Premium",
    stufenText: "Play first, decide later: the first 500 taps cost nothing. Premium is free for seven days — after that the game only pauses, nothing is lost.",
    stufen: [
      {
        name: "Free",
        preis: "€0",
        zeile: "the first 500 taps",
        kann: ["The whole game, all 16 colours", "Home-screen widget",
               "Session display & lifetime total", "All 16 languages"],
        grenze: "After 500 taps the game pauses"
      },
      {
        name: "Premium",
        preis: "€0.49",
        zeile: "7 days free · then per 4 weeks · €4.99 per year",
        kann: ["Play on without limits", "Both leaderboards (top 5)",
               "Average per session", "First 7 days free"],
        grenze: "Cancel any time — your progress stays",
        hervor: true
      }
    ]
  },

  /* ====================== ACTIONS / STORES ============================ */
  /* ============ CHAPTER 4 — SETUPLEISTE (Windows program) ============ */
  setupleiste: {
    kennung: "Chapter 04",
    karteKurz: "See what your PC is doing",
    karteStatus: "Free download",
    statusPille: "Done · free Windows download",
    name: "SetUpLeiste",
    untertitel: "The performance bar for your screen edge",
    claim: "What your machine is doing.",
    claimZwei: "One slim line, right at the top.",
    positionierung: "No window, no program in the foreground — a slim bar along the top edge of your screen showing what is really going on: load, temperature, watts, ping, throughput, battery. It always sits centred at the top, folds away when you want it to, and quietly collects your best values.",

    kernTitel: "The difference",
    kernText: "Other tools you open when you want to know something. This bar is already there — while you game, render or work. And it remembers what your machine managed on its best day.",

    umfangTitel: "What it shows",
    umfangText: "Every reading can be switched on and off individually, and the bar comes in three sizes.",
    umfangZahlen: [
      { zahl: "11", text: "readings with best values" },
      { zahl: "6", text: "periods per best value" },
      { zahl: "3", text: "sizes" },
      { zahl: "0", text: "cost" }
    ],
    umfangListe: [
      { name: "Processor", text: "Load and estimated power draw in watts." },
      { name: "Graphics card", text: "Load, clock speed, used video memory and measured watts." },
      { name: "Temperature", text: "Graphics card always; processor only with administrator rights — otherwise Windows won't hand the value over." },
      { name: "Memory", text: "How much is currently in use." },
      { name: "Frames per second", text: "The FPS of whatever full-screen program is in front." },
      { name: "Ping", text: "Network response time, measured continuously." },
      { name: "Throughput", text: "What is actually moving up and down — with no download running it sits near zero." },
      { name: "Line speed", text: "Measured connection speed, separately for Wi-Fi and cable. Measured at the push of a button." },
      { name: "Battery", text: "Charge with a bar and remaining capacity in mAh; a bolt while charging. On a machine without a battery the field disappears." },
      { name: "Power use", text: "Graphics card and processor combined, totalled for day, week, month, year and overall." },
      { name: "Uptime", text: "How long the machine has been running since it started." },
      { name: "Resolution", text: "The current screen resolution." }
    ],

    knoepfeTitel: "Three buttons, nothing more",
    knoepfe: [
      { zeichen: "🏆", name: "Trophy",
        text: "Opens the best-values list: for every reading the lowest and highest figure for today, week, month, year, „possible“ and overall — plus power use. The speed test starts from here too." },
      { zeichen: "⚙", name: "Cog",
        text: "A drop-down for switching each reading on or off, plus the size of the bar. Every entry carries the colour of its segment." },
      { zeichen: "▾", name: "Arrow and X",
        text: "The arrow folds the bar into a narrow strip, a second click unfolds it. The X closes the program." }
    ],

    bestwerteTitel: "Best values that keep running",
    bestwerteText: "The bar remembers the highest and lowest figure for every reading — separately for today, this week, this month, this year and across its whole lifetime. So you see not just what is, but what was. Each best value has three settings: visible, counting on in the background, or off entirely.",

    ehrlichTitel: "What is measured — and what is calculated",
    ehrlichText: "Not every value comes from a sensor. Where something is calculated, it says so — in the bar itself too.",
    ehrlich: [
      { name: "Processor watts are estimated", text: "Windows gives out no wattage for the processor. The figure is calculated linearly from idle draw to sustained-load limit across the measured utilisation. The graphics card watts, by contrast, are genuinely measured." },
      { name: "Battery mAh is converted", text: "Windows reports milliwatt-hours, not milliamp-hours. The mAh figure comes from the current voltage — and since that shifts with the charge level, the number shifts slightly too. Hence the asterisk on the field." },
      { name: "Power use is not the wall socket", text: "It counts the graphics card and processor, not the monitor, drives, mainboard or power-supply losses. And only while the bar is running." },
      { name: "Processor temperature needs rights", text: "Without administrator rights Windows won't release it — then the field stays empty. The graphics card temperature always comes through." }
    ],

    technikTitel: "Technical",
    technikPunkte: [
      { name: "Windows 10 and 11", text: "64-bit. An installer creates the desktop icon, start-menu entry and uninstaller." },
      { name: "2.5 MB", text: "The complete installer. Written in C++, with no runtime and no extra packages." },
      { name: "No account, no ads", text: "Nothing is transmitted. The speed test only loads brief test data when you ask it to." },
      { name: "Everything stays local", text: "Settings, the power counter and best values live in your user folder. Uninstalling asks whether they should go too." },
      { name: "NVIDIA for the GPU fields", text: "The four graphics-card readings come from nvidia-smi. On machines with AMD or Intel graphics they hide themselves." }
    ],

    preis: "Free, with no account and no advertising. The installer is 2.5 MB and runs on Windows 10 and 11 (64-bit).",
    mehrKnopf: "Everything about SetUpLeiste",
    mehrText: "Every reading in detail, the three buttons, how the best values work, what is measured and what is calculated — and where the data lives.",
    hinweis: "A tool for my own machine, not a product for sale. Built because I wanted to know what the thing was doing while rendering and building."
  },

  /* ============ CHAPTER 5 — CAMPUS CLASH (IN PROGRESS) ============ */
  campus: {
    bilderTitel: "A look inside",
    bilderText: "Five shots from a fresh save.",
    bilder: [
      { bild: "campus-1-campus", titel: "Your campus", text: "Points, energy and money on top; the three areas and your skills below. The job keeps running even with the phone in your pocket." },
      { bild: "campus-2-schule", titel: "School life", text: "Study and jobs, plus the way into your alliance and the school-wide upgrades." },
      { bild: "campus-3-lernen", titel: "64 subjects", text: "Every subject with its duration, level and payoff. Three run at once — in real time, even with the app closed." },
      { bild: "campus-4-schulhof", titel: "The schoolyard", text: "Classmates to befriend or challenge. Friends join by code — no server involved, the code carries the data itself." },
      { bild: "campus-5-markt", titel: "The flea market", text: "39 items across five rarity tiers. Stock changes three times a day — or instantly, for a fee." },
    ],
    bereicheTitel: "The areas",
    bereicheText: "Three areas in the main bar, everything else sits below them.",
    bereiche: [
      { name: "🏫  School", text: "Study, jobs and the way into your alliance." },
      { name: "🏘️  Neighbourhood", text: "The classroom and who else is around." },
      { name: "🛒  Market", text: "The flea market — stock changes three times a day." },
      { name: "👤  Profile", text: "Skills, equipment, premium and settings." },
    ],
    kennung: "Chapter 05 · In progress",
    karteKurz: "Rise endlessly in the school game",
    karteStatus: "In progress",
    statusPille: "In progress — built and playable",
    name: "Campus Clash",
    untertitel: "The endless school game",
    claim: "Your school days keep running.",
    claimZwei: "Even when you put the phone down.",
    positionierung: "An endless school progression game: you develop a student over the years — learning subjects, earning money with jobs, climbing grade by grade. Training runs on real time and keeps going while the app is closed. Fully offline, no account, no server.",
    inArbeit: "🚧 In progress: the app is built and playable, and currently being tested. There is no store listing yet — and nothing to buy.",

    kernTitel: "The trick",
    kernText: "There is no ceiling: grades, subject tiers and alliance levels are endless. Every grade costs more effort than the one before — grade 2 takes minutes, grade 10 costs half a day of training. And none of it can be bought.",

    umfangTitel: "What's inside",
    umfangText: "Eight areas interlock: what you learn makes you stronger — what you earn goes into gear or your alliance.",
    umfangZahlen: [
      { zahl: "8", text: "areas" },
      { zahl: "40", text: "school subjects" },
      { zahl: "33", text: "market items" },
      { zahl: "13", text: "alliance permissions" }
    ],
    umfangListe: [
      { name: "Campus", text: "The overview: your student, running training, running jobs — everything at a glance." },
      { name: "Learning", text: "Train up to three subjects at once, collect, level up. On real time — even with the app closed." },
      { name: "Jobs", text: "Earn money alongside school. Jobs return every four grades at a higher tier — more pay, more experience." },
      { name: "Surroundings", text: "Meet friends, collect pocket money and face each other in the knowledge duel." },
      { name: "Alliance", text: "From grade 5: a shared treasury, three upgrade paths, four roles with thirteen individually assignable permissions." },
      { name: "School", text: "Become class representative and lift the whole class's learning speed by ten percent." },
      { name: "Market", text: "Buy, equip and unequip 33 items up to grade 25 — every piece changes your stats." },
      { name: "Profile & inbox", text: "All stats, subjects and statistics — plus the inbox with the game's messages." }
    ],

    besondersTitel: "What makes it special",
    besonders: [
      { name: "Real time, no countdown tricks", text: "Training and jobs run on the clock, not on the open app. Put the phone away, collect later — the progress is there, even after a device restart." },
      { name: "Endless upwards", text: "Grades, subject tiers and alliance levels have no cap. Each grade costs 1.24 times the one before — the climb always stays noticeable." },
      { name: "40 subjects, 7 abilities", text: "Six subjects to start, then every grade unlocks another. Everything feeds seven abilities — from language to engineering." },
      { name: "Friend code without a server", text: "Your code carries your whole card: name, grade, strength. Friends connect directly — no account, no server, with a checksum." },
      { name: "An alliance with real roles", text: "Leader, deputy, officer, member — thirteen permissions assignable one by one. Alliance strength comes only from its members, never from money." },
      { name: "Fair stays fair", text: "No pay-to-win, no ads, no account. Everything stays on your device." }
    ],


    mehrKnopf: "Everything about Campus Clash",
    mehrText: "The eight areas in detail, the endless system, the alliance roles, the friend code — and what happens before release.",
    hinweis: "Campus Clash is under development. All details describe the current build state and may change before release."
  },

  yourfilm: {
    bilderTitel: "A look inside",
    bilderText: "Five shots from the running build. The film titles in them are made up.",
    bilder: [
      { bild: "yourfilm-1-start", titel: "The starting point", text: "Recently added, what is currently on loan, and quick access to the scanner." },
      { bild: "yourfilm-2-sammlung", titel: "The collection", text: "Every film as a grid, with format filters on top — 4K, Blu-ray, DVD, age rating. Each tile shows its disc format and year." },
      { bild: "yourfilm-3-film", titel: "The film page", text: "One film with its releases and copies — kept apart, because the same Blu-ray can sit on the shelf in several editions." },
      { bild: "yourfilm-4-statistik", titel: "What the collection says", text: "Count, spending, genres, decades and runtime — computed from what is actually on the shelf." },
      { bild: "yourfilm-5-mehr", titel: "Locations and people", text: "Every copy gets its place on the shelf; actors and directors lead to your own films." },
    ],
    bereicheTitel: "The areas",
    bereicheText: "Five tabs, from scanning to analysis.",
    bereiche: [
      { name: "🏠  Home", text: "Recently added and what is currently on loan." },
      { name: "📚  Collection", text: "Every film, sortable and filterable." },
      { name: "📷  Scan", text: "Camera on the barcode — the rest happens by itself." },
      { name: "🔎  Search", text: "By title, by person, or everything at once." },
      { name: "➕  More", text: "Statistics, locations, people, settings." },
    ],
    kennung: "Chapter 06 · In testing",
    karteKurz: "Scan and sort your film collection",
    karteStatus: "In testing",
    statusPille: "In testing — closed on Google Play",
    name: "YourFilm",
    untertitel: "Your film collection, under control",
    claim: "Scan. Shelve. Done.",
    claimZwei: "Your collection, neatly organised.",
    positionierung: "A collection app for DVDs and Blu-rays: scan the barcode and the app files the film automatically — the work, the edition, your copy. Four separate prices show what your collection cost and what it is worth today. Entirely on your device, no account.",
    inArbeit: "🧪 In testing: the app is in closed testing on Google Play and being tried out with real discs. Only testers who have been given access can install it — it is not publicly listed yet, and nothing to buy.",

    kernTitel: "The trick",
    kernText: "A film is not its disc: YourFilm separates the work (the film itself), the edition (steelbook, first pressing, reissue) and your copy (the one on your shelf). Three editions of the same film are ONE entry in the list — not three. And the barcode scan files everything automatically, no searching, no typing.",

    umfangTitel: "What is inside",
    umfangText: "From scan to statistics: capture, organise, find again — and know what the collection is worth.",
    umfangZahlen: [
      { zahl: "13", text: "screens" },
      { zahl: "11", text: "areas" },
      { zahl: "4", text: "prices per copy" },
      { zahl: "13", text: "sort keys" }
    ],
    umfangListe: [
      { name: "Scanning", text: "Scan the barcode of a DVD or Blu-ray — the app detects duplicates and files the film automatically." },
      { name: "Collection", text: "Work, edition and copy kept apart — the list stays tidy no matter how many editions you own." },
      { name: "Search & filters", text: "Search across all fields including people; filters combine, sorting offers thirteen keys." },
      { name: "Four prices", text: "Shop price back then, list price, what you paid, current value — four separate figures per copy." },
      { name: "Statistics", text: "Spending by month and year, stock and value of your collection at a glance." },
      { name: "Locations", text: "Shelf, compartment, box — a freely nested location tree tells you where every copy lives." },
      { name: "Backup", text: "Import, export and backup with verification — your collection stays your file." },
      { name: "Film data", text: "On request the app fetches film details from a film database — optional, can be switched off, no account." }
    ],

    besondersTitel: "What makes it special",
    besonders: [
      { name: "The barcode chain", text: "No single service knows both barcodes AND film data. YourFilm chains them: a product catalogue recognises the code, the retail title is cleaned, the film database delivers the details — one scan, one match." },
      { name: "Four separate prices", text: "What the film cost back then, what it was supposed to cost, what you paid, what it is worth today — none of the four is guessed from another." },
      { name: "Entirely on your device", text: "The collection lives in a database on your phone. The film-database link is optional — without it the app runs fully offline." }
    ],


    mehrKnopf: "Everything about YourFilm",
    mehrText: "The three-level model, the barcode chain, the four prices — and what happens before release.",
    hinweis: "YourFilm is in closed testing on Google Play — only testers who have been given access can install it. All details describe the current build state and may change before release."
  },

  zeitwissen: {
    bilderTitel: "A look inside",
    bilderText: "Five shots from the running build — this is how it looks on the device.",
    bilder: [
      { bild: "zeitanker-1-heute", titel: "The time clock", text: "One tap starts the clock, one stops it. Below it sits the project being booked to — switch it and the running time moves across." },
      { bild: "zeitanker-2-zeitraum", titel: "Week and month", text: "Target and actual side by side, day by day. The app keeps the shortfall or surplus running." },
      { bild: "zeitanker-3-projekte", titel: "Projects and tasks", text: "Hours group under projects, each with sub-tasks and its own rate." },
      { bild: "zeitanker-4-mehr", titel: "Balance and reports", text: "Balance, target-hours model and the report live here — as Excel, PDF or HTML, ready to hand over." },
      { bild: "zeitanker-5-premium", titel: "What premium opens", text: "Reports, earnings, leave days, a home-screen widget and unlimited projects. Tracking itself always stays free — €9.99 a year or €0.99 a month." },
    ],
    bereicheTitel: "The areas",
    bereicheText: "Four tabs — the rest works itself out.",
    bereiche: [
      { name: "☀️  Today", text: "The time clock and the day in progress." },
      { name: "📆  Period", text: "Week and month, target and actual side by side." },
      { name: "📁  Projects", text: "Where the time went — per project and task." },
      { name: "➕  More", text: "Balance, reports, target-hours model, settings." },
    ],
    kennung: "Chapter 07 · In testing",
    karteKurz: "Working hours with a running balance",
    karteStatus: "In testing",
    statusPille: "In testing — closed on Google Play",
    name: "ZeitAnker",
    untertitel: "Working hours that explain themselves",
    claim: "Clock in. Done.",
    claimZwei: "The app does the rest of the maths.",
    positionierung: "A working-hours app with a running balance: clock in, clock out — overtime and shortfall are tracked for you. If you want, split your time across projects and tasks and export a report as Excel, PDF or HTML at the end of the month. Entirely on your device, no account.",
    inArbeit: "🧪 In testing: the app is in closed testing on Google Play. Only testers who have been given access can install it — it is not publicly listed yet, and there is nothing to buy.",

    kernTitel: "The trick",
    kernText: "Total time runs from clocking in to clocking out — tasks run inside that window and only divide it up, they never extend it. Tap three tasks in a row and you still end up with exactly your working day. And project hours are kept apart from your personal target: work on two projects in a month and every hour counts towards its project and towards your total.",

    umfangTitel: "What is inside",
    umfangText: "From a single button to the monthly summary: record, divide, prove — without anyone maintaining a spreadsheet.",
    umfangZahlen: [
      { zahl: "14", text: "screens" },
      { zahl: "4", text: "areas" },
      { zahl: "3", text: "report formats" },
      { zahl: "4", text: "target times" }
    ],
    umfangListe: [
      { name: "One button", text: "Clock in, clock out — everyday use needs no more than that. The rest is optional." },
      { name: "Time balance", text: "Overtime and shortfall are tracked automatically against your target hours per weekday." },
      { name: "Home screen widget", text: "Clock in and out straight from the home screen, without opening the app." },
      { name: "Projects & tasks", text: "Split time across projects and tasks — each with its own colour, client and billing mode." },
      { name: "Per-project targets", text: "Every project can carry its own hours and its own balance, separate from your personal one." },
      { name: "Reports", text: "Pick a period and share it as Excel, PDF or HTML — ready for invoicing." },
      { name: "Earnings", text: "Hourly, weekly or monthly rate per project; the app works out the effective hourly rate." },
      { name: "Reminders", text: "Nudges you when your daily target is reached, or when you have not clocked in by morning." }
    ],

    besondersTitel: "What makes it special",
    besonders: [
      { name: "One place that calculates", text: "Every time value comes from the same place in the code. No screen does its own maths — which is why the weekly view can never show a different total than the monthly report." },
      { name: "Duration is never stored", text: "Only start and end are stored; the duration is always recalculated. Two fields holding the same truth drift apart sooner or later." },
      { name: "Daylight saving is part of it", text: "A day has 23 or 25 hours when the clocks change. The app therefore never counts on in fixed twenty-four-hour steps, but always across the real calendar day." }
    ],


    mehrKnopf: "All about ZeitAnker",
    mehrText: "The time balance, keeping project and personal targets apart — and what still happens before release.",
    hinweis: "ZeitAnker is in closed testing on Google Play — only testers who have been given access can install it. All details describe the current build and may change before release."
  },
  familie: {
    kennung: "Chapter 08 · In progress",
    karteKurz: "Ten apps around archery",
    karteStatus: "Coming soon",
    statusPille: "Coming soon — in the works",
    name: "Instinct Family",
    untertitel: "One app becomes a family",
    claim: "Ten apps. One sport.",
    claimZwei: "Each on its own. All together.",
    positionierung: "Instinct Scoring covers one thing: scoring the round. But archery is more than that — training, arrows, weather, kit, community. That is becoming a family of standalone apps that speak the same language and can share their data. If all you want is scoring, you still just take Instinct Scoring.",
    inArbeit: "🚧 Coming soon: the apps exist and are being built. There is no content to show yet and no store listing — this section only says what is coming.",

    kernTitel: "Why a family and not one big app",
    kernText: "An app that does everything ends up doing nothing well — and someone who only wants to score a round would have to wade through nine areas that do not concern them. So each thing stays its own app: small, understandable, usable on its own. Anyone with several gets them tied together by a parent app; the apps share a common foundation so that archers, bows and results are the same everywhere instead of being maintained twice.",

    umfangTitel: "The family",
    umfangText: "Ten apps around Instinct Scoring — each with a clear purpose. What follows is the planned scope; building is under way.",
    umfangZahlen: [
      { zahl: "10", text: "apps planned" },
      { zahl: "1", text: "parent app" },
      { zahl: "1", text: "shared foundation" },
      { zahl: "0", text: "accounts needed" }
    ],
    apps: [
      { bild: "scoring", name: "Instinct Scoring", rolle: "The core — live in the store", text: "Scoring rounds on 3D and field courses. The only app in the family that already exists." },
      { bild: "coach", name: "Instinct Coach", rolle: "Coming soon", text: "Training guidance that adapts to the archer, instead of one fixed plan for everyone." },
      { bild: "builder", name: "Instinct Builder", rolle: "Coming soon", text: "Building and managing arrows: spine, length, fletching, colours." },
      { bild: "tune", name: "Instinct Tune", rolle: "Coming soon", text: "Tuning bows and keeping the history — with photo comparison over time." },
      { bild: "weather", name: "Instinct Weather", rolle: "Coming soon", text: "Weather at the course: wind, light, temperature — the conditions you shot in." },
      { bild: "pack", name: "Instinct Pack", rolle: "Coming soon", text: "Keeping track of kit: an inventory and packing lists, so nothing is missing before a tournament." },
      { bild: "range", name: "Instinct Range", rolle: "Coming soon", text: "Training on the range: recording and reviewing sessions, kept apart from course rounds." },
      { bild: "community", name: "Instinct Community", rolle: "Coming soon", text: "Talking to other archers — club, group, shared dates." },
      { bild: "trade", name: "Instinct Trade", rolle: "Coming soon", text: "Passing kit on: offer, search, find — second-hand archery gear." },
      { bild: "ai", name: "AI-Instinct", rolle: "Coming soon", text: "Expert advice on traditional archery — ask instead of search." },
      { bild: "familie", name: "Instinct Family", rolle: "The parent app", text: "Brings together what sits in the individual apps: one view of all archers, all results, how it fits together." }
    ],

    besondersTitel: "What applies to all of them",
    besonders: [
      { name: "Every app stands alone", text: "No app needs another. If you only score, you only install Instinct Scoring — and never notice the rest." },
      { name: "A shared foundation", text: "All apps speak the same data language. One archer, one bow, one result — the same everywhere, not typed in again each time." },
      { name: "No account, no server", text: "What holds for Instinct Scoring holds for the whole family: the data stays on your device." }
    ],


    mehrKnopf: "All about the Instinct Family",
    mehrText: "Which app does what, why there are ten and not one — and what ties them together.",
    hinweis: "The Instinct Family is in development. All details describe the planned scope and may change. Only Instinct Scoring is available so far."
  },
  tankspur: {
    bilderTitel: "A look inside",
    bilderText: "Five shots from the running build. The fill-ups in them are sample data.",
    bilder: [
      { bild: "tankspur-1-uebersicht", titel: "The overview", text: "Last fill-up, price trend and the current year against the previous one — all on one screen." },
      { bild: "tankspur-2-eintraege", titel: "Every fill-up", text: "Each entry with date, station, price and consumption. Tap to edit." },
      { bild: "tankspur-3-statistik", titel: "Years compared", text: "Spending and consumption per year, side by side. Eight analyses in all — swipe to switch." },
      { bild: "tankspur-4-preis", titel: "Price history", text: "How the price per litre moved over time — and where your last fill-up sits against it." },
      { bild: "tankspur-5-eingabe", titel: "Logging a fill-up", text: "Date, station, price and litres — the app works out the total. Stations you have used are ready next time." },
    ],
    bereicheTitel: "The areas",
    bereicheText: "Four tabs — that's all it takes.",
    bereiche: [
      { name: "📋  Overview", text: "The latest state at a glance: price trend, projection, key figures." },
      { name: "📝  Entries", text: "Every fill-up as a list — tap, edit, delete." },
      { name: "📊  Statistics", text: "Eight analyses, swipe to switch." },
      { name: "👤  Profile", text: "Vehicle, account and privacy." },
    ],
    kennung: "Chapter 09 · In testing",
    karteKurz: "What the car actually costs",
    karteStatus: "In testing",
    statusPille: "In testing — closed on Google Play",
    name: "Tankspur",
    untertitel: "What the car actually costs",
    claim: "Fill up. Type it in.",
    claimZwei: "The app does the rest of the maths.",
    positionierung: "A fuel log that thinks along: enter price per litre and litres — the app fills in the total itself. Kilometres and litres become consumption; consumption and price become cost per 100 kilometres. At the end of the year it tells you what driving really cost. Entirely on your device.",
    inArbeit: "🧪 In testing: the app is in closed testing on Google Play. Only testers who have been given access can install it — it is not publicly listed yet, and there is nothing to buy.",

    kernTitel: "The trick",
    kernText: "Three values belong together: price per litre, litres, total. Enter any two and the third comes free. That sounds small, but it decides whether you actually log every fill-up at the pump or give up on it. And because the app works out consumption for each fill-up, outliers show immediately instead of hiding in the yearly average.",

    umfangTitel: "What is inside",
    umfangText: "From the receipt at the pump to the yearly balance: record, compare, evaluate — no spreadsheet and no account anywhere online.",
    umfangZahlen: [
      { zahl: "4", text: "areas" },
      { zahl: "4", text: "views" },
      { zahl: "3", text: "values suffice" },
      { zahl: "5", text: "yearly figures" }
    ],
    umfangListe: [
      { name: "Two values are enough", text: "Price and litres, price and total, litres and total — the app supplies the third itself." },
      { name: "Consumption per fill-up", text: "From kilometres and litres: visible right away, not only at the end of the year." },
      { name: "Cost per 100 km", text: "What the distance really costs — the figure you need when comparing." },
      { name: "Price trend", text: "The latest price per litre against the average of the last five fill-ups, as a curve." },
      { name: "Yearly balance", text: "Spending, distance, litres, average consumption and average price per litre — per year." },
      { name: "Filling stations", text: "Your own names instead of chain logos: motorway stop, town, work — whatever you call them." },
      { name: "Views", text: "By year, by month, by price, by consumption — four angles on the same data." },
      { name: "Own profile", text: "Several drivers, several cars: each profile only sees its own fill-ups." }
    ],

    besondersTitel: "What makes it special",
    besonders: [
      { name: "The profile stays on the device", text: "There is no Tankspur server. The profile separates the data of several drivers on the same phone — it sends nothing and asks for no confirmation email." },
      { name: "Driving days, not just kilometres", text: "Noting how many days you drove shows not only how much but how often — and reveals whether an expensive tank was down to long trips or to the price." },
      { name: "No figure is guessed", text: "What is not entered stays empty. The app calculates from the values it has — it never invents one to fill a gap." }
    ],


    mehrKnopf: "All about Tankspur",
    mehrText: "The three values, consumption per fill-up, the yearly balance — and what still happens before release.",
    hinweis: "Tankspur is in closed testing on Google Play — only testers who have been given access can install it. All details describe the current build and may change before release."
  },

  scheinbar: {
    bereicheTitel: "The areas",
    bereicheText: "Four tabs, plus profile and settings from the app bar.",
    bereiche: [
      { name: "🏠  Home", text: "Your active tickets with their win status and the latest draw for each game." },
      { name: "🧾  Tickets", text: "Every ticket, active and archived kept apart. Tap one to see each number field on its own." },
      { name: "🎲  Draws", text: "The draw archive per game — record, edit, download." },
      { name: "📊  Statistics", text: "Three areas of analysis sharing one time filter." },
    ],

    kennung: "Chapter 10 · In testing",
    karteKurz: "Photograph the ticket, see the win",
    karteStatus: "In testing",
    statusPille: "In testing — test build outside the stores",
    name: "ScheinBar",
    untertitel: "Photograph the ticket, see the win",
    claim: "Take a photo.",
    claimZwei: "The app does the checking.",
    positionierung: "A companion for BINGO!, Lotto 6aus49 and Eurojackpot: photograph the ticket, check the numbers, done. The app compares every ticket against the draws you have recorded and tells you whether anything came up and in which prize tier. Text recognition runs on the device, and everything is stored there and nowhere else.",
    inArbeit: "🧪 In testing: ScheinBar is a test build outside the stores. It is not yet listed, and the subscription price has not been set.",

    kernTitel: "The trick",
    kernText: "Wins are never stored, they are recalculated every time you look. That sounds like a detail but decides everything: add a draw later and the status of every affected ticket changes at once — retroactively, without anything having to be re-checked. And because recognition only ever offers a suggestion to confirm, what ends up saved is what the ticket actually says.",

    umfangTitel: "What is inside",
    umfangText: "From a photographed ticket to an analysis spanning months: record, check, compare — no account, no server.",
    umfangZahlen: [
      { zahl: "3", text: "games" },
      { zahl: "12", text: "screens" },
      { zahl: "4", text: "tabs" },
      { zahl: "4", text: "time filters" }
    ],
    umfangListe: [
      { name: "Three games", text: "BINGO!, Lotto 6aus49 and Eurojackpot — each with its own number range, its own bonus number and its own prize tiers." },
      { name: "Photograph the ticket", text: "Text recognition runs on the device and offers a suggestion to confirm or correct before anything is saved." },
      { name: "Works without a camera too", text: "Typing the numbers is an equal path, not a fallback — the app requests no camera permission of its own." },
      { name: "Prize tiers, not just hits", text: "Nine tiers for Lotto, twelve for Eurojackpot; for BINGO! complete rows count — horizontal, vertical and diagonal." },
      { name: "Draw archive", text: "Record draws yourself with a range check on every number — or download a maintained six-month list that only fills in missing days." },
      { name: "Statistics in three areas", text: "Drawn (most frequent and overdue numbers), My numbers (played against drawn) and Wins (per tier, hits per field)." },
      { name: "Time filter", text: "Everything, six months, three months or thirty days — the filter applies to all three areas at once." },
      { name: "Starting set from Excel", text: "An existing list of draws can be imported; every discrepancy is reported individually instead of being absorbed silently." }
    ],

    besondersTitel: "What makes it special",
    besonders: [
      { name: "Not gambling", text: "The app accepts no bets, sells no tickets, holds no draws and pays nothing out. It manages what has already been played — nothing more." },
      { name: "No predictions", text: "The statistics describe what happened. They predict no numbers and promise no better odds — such promises would simply be untrue." },
      { name: "The core needs no connection", text: "Recording, checking and analysing all work offline. The app goes online only for the store purchase, the draw download and the update check." }
    ],

    mehrKnopf: "All about ScheinBar",
    mehrText: "The three games, the prize tiers, the statistics — and what is still open before release.",
    hinweis: "ScheinBar exists as a test build outside the stores. All details describe the current build and may change before release. The subscription price has not been set."
  },

  /* ============ LIVE — automatically loaded race data ============ */
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
    browser: "Try it in the browser",
    // ENTFERNT 12.08.2026 (Falk-Entscheid): "Im Browser spielen/testen" ist auf ALLEN Seiten raus.
    // Nicht wieder einbauen — die Apps zeigen nur Android · Apple · eigene Webseite.
    // browserSpielen: "Play in the browser",
    browserFehlt: "Web version coming",
    browserAelter: "The web version shows the state before the rebuild — the store app is newer.",
    play: "On Google Play",
    playBald: "Play Store — coming soon",
    apple: "On the App Store",
    appleBald: "App Store — coming soon",
    datenschutz: "Privacy",
    qrTitel: "Open on your phone",
    qrText: "Point your camera at it — the web version opens straight away.",
    androidKnopf: "Android",
    appleKnopf: "Apple",
    browserKnopf: "Browser",
    androidUnter: "Google Play",
    appleUnter: "App Store",
    browserUnter: "Play right away",
    webseiteKnopf: "Website",
    webseiteUnter: "The app's own site",
    holenTitel: "Where to get the app",
    holenText: "On your phone through the respective store — plus the app's own website with every detail.",
    zurWebseite: "Visit the app website ↗",
    holenTitelProgramm: "Where to get the program",
    windowsKnopf: "Download for Windows",
    windowsUnter: "Version {version} · {groesse}",
    windowsHinweis: "Windows 10 and 11 (64-bit). The file installs the program with a desktop icon and an uninstaller — no account, no advertising, nothing is transmitted.",
    standTest: "in testing",
    standPruefung: "in review",
    bezugHinweis: "Every route that has been released is a real button here. Where it says “in testing” or “in review”, that version is not public on its store yet — the button goes live as soon as it is.",
    pruefungKurz: "in review",
    // ENTFERNT 12.08.2026 (Falk-Entscheid): "Im Browser spielen/testen" ist auf ALLEN Seiten raus.
    // Nicht wieder einbauen — die Apps zeigen nur Android · Apple · eigene Webseite.
    // pruefungLang: "The store versions are with Apple and Google for review. Until they are approved the button still leads to an error page — in the browser the app already runs in full.",
    inPruefung: "in review"
  },

  /* ====================== COMPARISON & QUESTIONS ====================== */
  vergleich: {
    kennung: "At a glance",
    titel: "Which app is for you?",
    text: "Nine products, nine entirely different purposes — four finished, four in testing, one still being built. What they share: their core works offline, they collect nothing about you, and they ask for no account with us. The Instinct Family is not listed here: it is not a single app but ten, and none of them is available yet.",
    spalten: ["", "FaNiCa Fun", "Instinct Scoring", "NeonPunkt", "SetUpLeiste", "Campus Clash", "YourFilm", "ZeitAnker", "Tankspur", "ScheinBar"],
    zeilen: [
      { name: "What for",       werte: ["Predicting with friends", "Recording archery", "Nothing. That's the appeal.", "Seeing what your PC is doing", "Endless school progression", "Organise and value a film collection", "Tracking and proving working hours", "Keeping fuel costs in view", "Checking and analysing lottery tickets"] },
      { name: "Status",         werte: ["Live in both stores", "On the App Store · Play in testing", "In store testing", "Finished, ready to download", "In progress", "In closed testing on Google Play", "In closed testing on Google Play", "In closed testing on Google Play", "Test build outside the stores"] },
      { name: "Alone or together", werte: ["Both — solo or in a group", "Both", "Alone", "Alone", "Both — friends & alliance", "Alone", "Alone", "Alone", "Alone"] },
      { name: "Internet needed", werte: ["Only to sync", "Only for tournaments", "Never", "Only to measure the line", "Never", "Only for film data (optional)", "Never", "Never", "Only for the subscription and downloads"] },
      { name: "Profile needed", werte: ["Yes — created once", "No", "No", "No", "No", "No", "No", "Yes — created once", "Yes — created once"] },
      { name: "Size",           werte: ["13 views", "23 screens", "1 screen", "11 readings", "8 areas · 40 subjects", "13 screens", "14 screens", "5 screens", "12 screens · 3 games"] },
      { name: "Languages",      werte: ["2", "2", "16", "1", "1", "1", "1", "1", "2"] },
      { name: "Free to use",    werte: ["Predicting — current and last race", "Shooting & scoring rounds", "The first 500 taps", "Everything — the whole program", "Everything — nothing to buy yet", "Everything — nothing to buy yet", "Everything — the whole app", "Everything — the whole app", "Two tickets · checking & archive"] },
      { name: "Premium from",   werte: ["€1.99 / 4 weeks", "€1.99 — Plus €2.99", "€0.49 / 4 weeks", "—", "not decided yet", "not decided yet", "—", "—", "not decided yet"] },
      { name: "Platform",       werte: ["Android · iOS", "Android · iOS", "Android · iOS", "Windows", "Android · iOS", "Android", "Android · iOS", "Android · iOS", "Android · iOS"] }
    ],
    fuss: "Prices apply to the apps with Premium, each with a seven-day free trial. SetUpLeiste is entirely free; for Campus Clash, YourFilm and ScheinBar it is not yet decided whether anything will cost money."
  },

  fragen: {
    kennung: "Common questions",
    titel: "What people usually ask",
    liste: [
      { f: "Do I need an account for the apps?",
        a: "For most of them, no — you install them and start. A profile is only needed for FaNiCa Fun (several people predict in the same group), Tankspur and ScheinBar (several drivers or players on one device). Those profiles live on the device, not with us." },
      { f: "Do the apps work without internet?",
        a: "The core of every app works without a connection, and all data sits on your device. A connection is only needed for what comes from outside: race results and syncing other players in FaNiCa Fun, film data in YourFilm, downloading draws in ScheinBar. NeonPunkt, ZeitAnker and Tankspur need none at all." },
      { f: "What happens to my data?",
        a: "It stays on your device. None of the apps has ads, analytics or data sharing. That is not a marketing line but a deliberate decision — the income comes purely from subscriptions." },
      { f: "What does it cost me?",
        a: "Every app is free to use. Premium unlocks extra features and starts at €0.49 per four weeks; the first seven days are always free, with nothing to cancel. SetUpLeiste costs nothing at all, and for the apps in testing it is not yet decided whether anything will cost money." },
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
    textZwei: "My apps have one thing in common: they work offline, they collect nothing about you, and they don't patronise you. That isn't a marketing stance but the only one I'd tolerate on my own phone.",

    ablaufTitel: "How a project comes about",
    ablauf: [
      { nr: "01", titel: "Idea", text: "Usually an everyday annoyance. Instinct Scoring exists because paper scorecards go soggy in the rain." },
      { nr: "02", titel: "Specification", text: "Everything gets written down before a line of code exists. What the app will NOT do is in there too." },
      { nr: "03", titel: "Building", text: "Flutter for anything that should look the same on Android and iPhone, Kotlin where it needs to sit closer to the device. AI writes alongside me, I decide." },
      { nr: "04", titel: "Testing", text: "On real devices, outdoors, wearing a glove. What looks good at a desk often fails in the woods." },
      { nr: "05", titel: "Store", text: "Google Play and the App Store, both reviews, every form. The dullest and most instructive part." }
    ],

    zahlen: [
      { zahl: "10", text: "products" },
      { zahl: "2", text: "stores" },
      { zahl: "16", text: "languages" }
    ],

    portraetAlt: "Graphic portrait: archer silhouette between neon rings"
  },

  /* ====================== CONTACT & FOOTER ============================ */
  kontakt: {
    kennung: "Contact",
    titel: "Write to me",
    text: "Questions about an app, found a bug, got an idea? I read every email myself — there's nobody else.",
    knopf: "fanicafuntipp@gmail.com",
    mail: "fanicafuntipp@gmail.com",

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
    antwortzeit: "I'm not a support team but one person — at weekends it can take a day.",

    impressumTitel: "Legal notice",
    impressumUnter: "Information pursuant to § 5 DDG (German law)",
    anbieter: "Falk Carstensen\nAm Hasselberg 19\n25813 Husum\nGermany",
    impressumZeilen: [
      { was: "Responsible for content", text: "Falk Carstensen, address as above." },
      { was: "Dispute resolution", text: "I am neither obliged nor willing to take part in dispute resolution proceedings before a consumer arbitration board." },
      { was: "Liability for links", text: "The operators of linked sites (Google Play, App Store, web versions) are responsible for their content. Nothing was objectionable at the time of linking." },
      { was: "Trademark notice", text: "Google Play is a trademark of Google LLC, App Store a trademark of Apple Inc. FaNiCa Fun is an independent fan app with no connection to the Formula One Group." }
    ],
    impressumMehr: "Full legal notice as a separate page"
  },

  fuss: {
    impressum: "Legal notice",
    datenschutz: "Privacy",
    bildquellen: "Image credits",
    lizenzen: "Licences",
    kooperation: "Instinct Scoring is a cooperation with Bogensport Instinct.",
    copyright: "© 2026 FaNiCa · Falk Carstensen",
    kein: "This site sets no cookies and measures nothing. Its only outside connection is the public F1 race data.",
    zurueck: "Back to top"
  },

  zurueckKnopf: "← Back to the home page",
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
