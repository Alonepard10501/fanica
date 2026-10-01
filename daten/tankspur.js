/// Inhalte der Produktseite Tankspur (Stand 1.0.0, 22.09.2026).
window.PRODUKT_DATEN = {
  app: "tankspur", seite: "tankspur", stil: "b-heat",
  symbol: "bilder/marke/app-tankspur.webp",
  bilder: [
    { datei: "bilder/app/tankspur-uebersicht.webp", b: 540, h: 1200 },
    { datei: "bilder/app/tankspur-eintraege.webp", b: 540, h: 1200 },
    { datei: "bilder/app/tankspur-jahre.webp", b: 540, h: 1200 },
    { datei: "bilder/app/tankspur-preis.webp", b: 540, h: 1200 },
    { datei: "bilder/app/tankspur-auto.webp", b: 540, h: 1200 }
  ],
  de: {
    fakten: ["Android · iOS", "Kostenlos, ohne Werbung", "Deutsch und Englisch"],
    blickSatz: "Ein Tankbuch, das mitrechnet: Betankung eintragen oder den Beleg fotografieren — Verbrauch, Kosten je 100 km und Jahresbilanz folgen von selbst.",
    vorteile: [
      { symbol: "rechner", titel: "Zwei Werte genügen", text: "Literpreis mal Menge ergibt den Gesamtpreis — und rückwärts. Den dritten Wert füllt die App." },
      { symbol: "kamera", titel: "Beleg fotografieren", text: "Die Texterkennung läuft auf dem Gerät und schlägt Datum, Tankstelle, Menge und Preis vor — jeder Wert wird bestätigt." },
      { symbol: "diagramm", titel: "Acht Auswertungen", text: "Jahre, Monate, Preis, Verbrauch, Rekorde, Vergleich, Tankstellen und Muster — jede mit Diagramm." },
      { symbol: "schild", titel: "Nichts wird geschätzt", text: "Fehlt eine Angabe, bleibt das Feld leer. Die App rechnet nur mit dem, was eingetragen ist." }
    ],
    erlebnis: { titel: "Preis mal Liter", kurz: "Säule", text: "Der Literpreis steht fest, Menge und Betrag laufen mit — genau diese Rechnung prüft Tankspur bei jedem Beleg." },
    galerie: { text: "Fünf Aufnahmen aus Fassung 1.0.0 im Dunkelmodus, mit den fünf Reitern der App. Die Betankungen darin sind erfundene Beispieldaten.", bilder: [
      { titel: "Die Übersicht", text: "Letzte Betankung, Preis-Trend gegen die letzten zwölf Betankungen und die Zahlen des Jahres: Ausgaben, Strecke, Getankt, Verbrauch." },
      { titel: "Die Einträge", text: "Jede Betankung mit Datum, Tankstelle, Literpreis, Menge und Strecke — rechts Gesamtpreis und Verbrauch auf 100 km." },
      { titel: "Jahre im Vergleich", text: "Ausgaben und Kilometer je Jahr in einem Diagramm, darunter der Verbrauch je Jahr." },
      { titel: "Literpreis im Verlauf", text: "Der Preis über alle Betankungen, darunter günstigster und teuerster Preis sowie der Mittelwert." },
      { titel: "Meine Fahrzeuge", text: "Das aktive Fahrzeug mit Kraftstoff, Fahrzeugdaten und letzter Tankfüllung — gewechselt wird per Knopf." }
    ] },
    funktionen: [
      { gruppe: "Erfassen", symbol: "zapfsaeule", liste: [
        { symbol: "zapfsaeule", name: "Betankung eintragen", text: "Datum, Tankstelle, Literpreis, Menge, Gesamtpreis, Strecke und Fahrtage in einem Formular." },
        { symbol: "rechner", name: "Dritter Wert rechnet sich", text: "Zwei von Literpreis, Menge und Gesamtpreis genügen; negative Eingaben werden abgewiesen." },
        { symbol: "schein", name: "Beleg lesen", text: "Liegen Preis und Menge vor, gilt ihr Produkt — eine abweichend gelesene Summe wird verworfen." },
        { symbol: "ort", name: "Tankstelle erkannt", text: "Der Beleg-Leser kennt die Schreibweisen von 24 Tankstellen-Marken." },
        { symbol: "zaehler", name: "Tacho fotografieren", text: "Nach dem Beleg fragt die App nach der Strecke — Tacho fotografieren oder selbst eintragen." },
        { symbol: "kalender", name: "Fahrtage", text: "Aus dem Abstand zur letzten Betankung schlägt die App die Fahrtage vor." }
      ] },
      { gruppe: "Fahrzeuge", symbol: "werkzeug", liste: [
        { symbol: "liste", name: "Fahrzeugkatalog", text: "26 Hersteller mit ihren Modellen offline im Gerät — oder frei eintippen." },
        { symbol: "stapel", name: "Mehrere Fahrzeuge", text: "Jedes Auto mit eigenen Daten, eigenem Foto und eigenen Auswertungen." },
        { symbol: "tropfen", name: "Elf Kraftstoffe", text: "Von Super E5 bis Strom und Wasserstoff; eine Abweichung gilt nur für die eine Tankung." },
        { symbol: "ordner", name: "Archivieren statt löschen", text: "Ein abgegebenes Fahrzeug behält seine ganze Historie." }
      ] },
      { gruppe: "Auswertung", symbol: "diagramm", liste: [
        { symbol: "hoch", name: "Jahresübersicht", text: "Ausgaben, Strecke, getankte Liter und Verbrauch, jeweils mit dem Vergleich zum Vorjahr." },
        { symbol: "kurve", name: "Preis-Trend", text: "Der letzte Literpreis gegen das Mittel der letzten zwölf Betankungen." },
        { symbol: "uhr", name: "Hochrechnung", text: "Was das Jahr kostet, wenn es im gleichen Tempo weitergeht — ab drei Betankungen." },
        { symbol: "pokal", name: "Rekorde", text: "Günstigster und teuerster Literpreis, sparsamste und durstigste Strecke, größte Betankung." },
        { symbol: "duell", name: "Zwei Jahre vergleichen", text: "Zwei frei gewählte Jahre Zeile für Zeile nebeneinander." },
        { symbol: "ort", name: "Tankstellen und Wochentage", text: "Tankstellen nach mittlerem Literpreis und der Preis je Wochentag zeigen, wo und wann Tanken günstiger war." }
      ] },
      { gruppe: "Daten und Profil", symbol: "zahnrad", liste: [
        { symbol: "download", name: "CSV einlesen", text: "Vorhandene Aufzeichnungen übernehmen; Doppelte werden übersprungen." },
        { symbol: "export", name: "CSV ausgeben", text: "Alle Betankungen als Excel-taugliche CSV-Datei teilen." },
        { symbol: "globus", name: "Sprache, Einheit, Währung", text: "Deutsch oder Englisch, Kilometer oder Meilen und neun Währungen — drei getrennte Einstellungen." },
        { symbol: "person", name: "Profil auf dem Gerät", text: "Mehrere Fahrer auf einem Handy, jeder mit eigenen Daten — oder erst mal ganz ohne Profil." },
        { symbol: "kreuz", name: "Konto und Daten löschen", text: "Ein Profil und alle seine Daten lassen sich in der App löschen." }
      ] }
    ],
    schritte: [
      { titel: "Fahrzeug anlegen", text: "Hersteller und Modell aus dem Katalog wählen, Kraftstoff und Tankgröße ergänzen." },
      { titel: "Tanken eintragen", text: "Der Knopf „Tanken“ öffnet das Formular — von Hand ausfüllen oder den Beleg fotografieren." },
      { titel: "Auswertung ablesen", text: "Übersicht und Statistik zeigen Ausgaben, Verbrauch und Preise, Jahr für Jahr." }
    ],
    fragen: [
      { frage: "Kostet Tankspur etwas?", antwort: "Nein. Tankspur ist kostenlos, ohne Käufe und ohne Werbung." },
      { frage: "Brauche ich ein Konto?", antwort: "Nein. Ein Profil entsteht nur auf dem Gerät und trennt die Daten mehrerer Fahrer; einen Tankspur-Server gibt es nicht. Ausprobieren geht auch ganz ohne Profil." },
      { frage: "Werden Belege in eine Cloud geschickt?", antwort: "Nein. Die Texterkennung läuft auf dem Gerät, und erkannte Werte sind nur Vorschläge, die du bestätigst." },
      { frage: "Kann ich meine bisherigen Tankdaten übernehmen?", antwort: "Ja, als CSV-Datei über das Profil. Ein Gerätewechsel läuft ebenfalls über die CSV." },
      { frage: "Wann kommt die App in die Stores?", antwort: "Tankspur ist im Test. In Google Play und im App Store steht die App noch nicht." }
    ],
    abschluss: { titel: "Was das Auto wirklich kostet.", text: "Tanken, eintippen — den Rest rechnet die App.", stand: "Im Test — noch in keinem Store." }
  },
  en: {
    fakten: ["Android · iOS", "Free, no ads", "German and English"],
    blickSatz: "A fuel log that does the maths: enter a fill-up or photograph the receipt — consumption, cost per 100 km and the yearly total follow by themselves.",
    vorteile: [
      { symbol: "rechner", titel: "Two values are enough", text: "Price per litre times quantity gives the total — and back. The app fills in the third value." },
      { symbol: "kamera", titel: "Photograph the receipt", text: "Text recognition runs on the device and suggests date, station, quantity and price — every value is confirmed." },
      { symbol: "diagramm", titel: "Eight analyses", text: "Years, months, price, consumption, records, comparison, stations and patterns — each with a chart." },
      { symbol: "schild", titel: "Nothing is guessed", text: "If a value is missing, the field stays empty. The app only works with what you entered." }
    ],
    erlebnis: { titel: "Price times litres", kurz: "Pump", text: "The price per litre is fixed, quantity and amount run along — exactly the sum Tankspur checks on every receipt." },
    galerie: { text: "Five screens from version 1.0.0 in dark mode, with the app’s five tabs. The fill-ups shown are made-up sample data.", bilder: [
      { titel: "The overview", text: "Last fill-up, price trend against the last twelve fill-ups and the year’s figures: spending, distance, fuel, consumption." },
      { titel: "The entries", text: "Every fill-up with date, station, price per litre, amount and distance — on the right total price and consumption per 100 km." },
      { titel: "Years compared", text: "Spending and kilometres per year in one chart, with consumption per year below." },
      { titel: "Price over time", text: "The price across all fill-ups, with cheapest and dearest price and the average below." },
      { titel: "My vehicles", text: "The active vehicle with fuel, vehicle data and last fill-up — switched with a button." }
    ] },
    funktionen: [
      { gruppe: "Logging", symbol: "zapfsaeule", liste: [
        { symbol: "zapfsaeule", name: "Log a fill-up", text: "Date, station, price per litre, quantity, total, distance and driving days in one form." },
        { symbol: "rechner", name: "Third value calculated", text: "Two of price per litre, quantity and total are enough; negative entries are rejected." },
        { symbol: "schein", name: "Read the receipt", text: "If price and quantity are known, their product counts — a differently read total is discarded." },
        { symbol: "ort", name: "Station recognised", text: "The receipt reader knows the spellings of 24 fuel station brands." },
        { symbol: "zaehler", name: "Photograph the odometer", text: "After the receipt the app asks for the distance — photograph the odometer or enter it yourself." },
        { symbol: "kalender", name: "Driving days", text: "The app suggests driving days from the gap since the last fill-up." }
      ] },
      { gruppe: "Vehicles", symbol: "werkzeug", liste: [
        { symbol: "liste", name: "Vehicle catalogue", text: "26 makes with their models offline on the device — or type your own." },
        { symbol: "stapel", name: "Several vehicles", text: "Each car with its own data, photo and analyses." },
        { symbol: "tropfen", name: "Eleven fuels", text: "From Super E5 to electricity and hydrogen; a deviation applies to that one fill-up only." },
        { symbol: "ordner", name: "Archive, don’t delete", text: "A vehicle you no longer drive keeps its full history." }
      ] },
      { gruppe: "Analysis", symbol: "diagramm", liste: [
        { symbol: "hoch", name: "Year overview", text: "Spending, distance, litres and consumption, each compared with the previous year." },
        { symbol: "kurve", name: "Price trend", text: "The latest price per litre against the average of the last twelve fill-ups." },
        { symbol: "uhr", name: "Projection", text: "What the year will cost at the same pace — from three fill-ups onwards." },
        { symbol: "pokal", name: "Records", text: "Cheapest and dearest price per litre, most frugal and thirstiest stretch, largest fill-up." },
        { symbol: "duell", name: "Compare two years", text: "Two freely chosen years side by side, row by row." },
        { symbol: "ort", name: "Stations and weekdays", text: "Stations by average price and the price per weekday show where and when fuel was cheaper." }
      ] },
      { gruppe: "Data and profile", symbol: "zahnrad", liste: [
        { symbol: "download", name: "Import CSV", text: "Bring in existing records; duplicates are skipped." },
        { symbol: "export", name: "Export CSV", text: "Share all fill-ups as an Excel-ready CSV file." },
        { symbol: "globus", name: "Language, units, currency", text: "German or English, kilometres or miles and nine currencies — three separate settings." },
        { symbol: "person", name: "Profile on the device", text: "Several drivers on one phone, each with their own data — or start without a profile." },
        { symbol: "kreuz", name: "Delete account and data", text: "A profile and all its data can be deleted inside the app." }
      ] }
    ],
    schritte: [
      { titel: "Add a vehicle", text: "Pick make and model from the catalogue, add fuel type and tank size." },
      { titel: "Log a fill-up", text: "The “Fill up” button opens the form — fill it in by hand or photograph the receipt." },
      { titel: "Read the analysis", text: "Overview and statistics show spending, consumption and prices, year by year." }
    ],
    fragen: [
      { frage: "Does Tankspur cost anything?", antwort: "No. Tankspur is free, with no purchases and no ads." },
      { frage: "Do I need an account?", antwort: "No. A profile exists only on the device and keeps several drivers apart; there is no Tankspur server. You can also try it without a profile." },
      { frage: "Are receipts sent to a cloud?", antwort: "No. Text recognition runs on the device, and recognised values are only suggestions you confirm." },
      { frage: "Can I bring my existing fuel data?", antwort: "Yes, as a CSV file via the profile. Moving to a new phone also works via CSV." },
      { frage: "When will it be in the stores?", antwort: "Tankspur is in testing and not yet on Google Play or the App Store." }
    ],
    abschluss: { titel: "What your car really costs.", text: "Refuel, type it in — the app does the rest.", stand: "In testing — not in any store yet." }
  }
};
