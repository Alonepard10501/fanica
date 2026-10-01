/// Inhalte der Produktseite AblesBar (Stand 1.4.0, 07.09.2026).
window.PRODUKT_DATEN = {
  app: "ablesbar", seite: "ablesbar", stil: "b-lantern",
  symbol: "bilder/marke/app-ablesbar.webp",
  bilder: [
    { datei: "bilder/app/ablesbar-anlage.webp", b: 540, h: 1200 },
    { datei: "bilder/app/ablesbar-uebersicht.webp", b: 540, h: 1200 },
    { datei: "bilder/app/ablesbar-eingabe.webp", b: 540, h: 1200 },
    { datei: "bilder/app/ablesbar-zaehler.webp", b: 540, h: 1200 },
    { datei: "bilder/app/ablesbar-kostensaetze.webp", b: 540, h: 1200 },
    { datei: "bilder/app/ablesbar-rechnung.webp", b: 540, h: 1200 }
  ],
  de: {
    fakten: ["Android", "Gas · Wasser · Strom", "Ohne Server"],
    blickSatz: "Einmal im Monat jeden Zähler ablesen — die App rechnet Verbrauch und Kosten je Abrechnungsperiode und stellt sie den gezahlten Abschlägen gegenüber.",
    vorteile: [
      { symbol: "kamera", titel: "Foto statt Abschreiben", text: "Die Texterkennung auf dem Gerät schlägt die Ziffern vor, bestätigt wird in der Korrektur-Ansicht." },
      { symbol: "euro", titel: "Guthaben oder Nachzahlung", text: "Monat für Monat stehen die Kosten gegen die anteiligen Abschläge — die Differenz ist jederzeit sichtbar." },
      { symbol: "rechner", titel: "Ohne Rundungsfehler", text: "Stände in Tausendstel, Beträge in Cent: Die App rechnet in ganzen Zahlen, nichts summiert sich auf." },
      { symbol: "schloss", titel: "Bleibt auf dem Gerät", text: "Kein Server, kein fremdes Konto — das Netz braucht nur der Update-Knopf." }
    ],
    erlebnis: { titel: "Ein Zählerwerk zum Ausprobieren", kurz: "Zähler", text: "Die Rollen drehen vom Stand des Vormonats auf den neuen — daraus werden Monatsverbrauch und Stand gegen die Abschläge. Die Werte sind Beispiele." },
    galerie: { text: "Sechs Aufnahmen aus Fassung 1.4.0 im Dunkelmodus, mit Beispielwerten: erst die Erstanlage, dann Übersicht, Eingabe, Zähler, Kostensätze und Rechnung.", bilder: [
      { titel: "Die Erstanlage", text: "Der Assistent beginnt mit Bezeichnung und Art des Objekts — Mietwohnung, Zweifamilienhaus oder Mehrfamilienhaus. Pflicht ist nur die Bezeichnung." },
      { titel: "Die Übersicht", text: "Gas, Wasser, Strom und Nebenkosten als Kacheln mit Verbrauch und Kosten, darunter der Monat mit der Zahl der Ablesungen und die laufende Periode." },
      { titel: "Die Eingabe", text: "Ein Ablesedatum, darunter jeder aktive Zähler mit seinem letzten Stand und einem Feld für den neuen — oder dem Kamera-Knopf." },
      { titel: "Zähler und Objekt", text: "Der Reiter Objekt zeigt Adresse und Zähler, getrennt nach Wohnung und Haus; jeder Zähler lässt sich abschalten, „Neues Objekt (Umzug)“ legt einen eigenen Datenraum an." },
      { titel: "Die Kostensätze", text: "Fixkosten je Posten für Gebäude oder Wohnung, darunter Preise je Einheit und die Abschläge — gepflegt je Periode." },
      { titel: "Die Rechnung", text: "Gesamtwerte der Periode mit Guthaben oder Nachzahlung, dazu die Monatsübersicht mit dem Saldo bis zum Monat." }
    ] },
    funktionen: [
      { gruppe: "Ablesen", symbol: "zaehler", liste: [
        { symbol: "kamera", name: "Foto-Ablesung", text: "Zähler fotografieren oder ein Bild aus der Galerie wählen — erkannt wird auf dem Gerät." },
        { symbol: "auge", name: "Korrektur-Ansicht", text: "Jeder erkannte Wert muss bestätigt werden, bevor er in die Daten wandert." },
        { symbol: "suche", name: "Kluge Ziffernwahl", text: "Seriennummer, Baujahr und Eichdatum werden übergangen; gewählt wird der Wert nahe dem letzten Stand." },
        { symbol: "liste", name: "Alle Zähler auf einer Seite", text: "Ein gemeinsames Ablesedatum, darunter jeder aktive Zähler mit eigenem Feld." },
        { symbol: "wiederholen", name: "Zählerwechsel", text: "Fällt der Stand unter den alten, fragt die App nach dem Anfangsstand des neuen Zählers." }
      ] },
      { gruppe: "Objekt", symbol: "haus", liste: [
        { symbol: "stift", name: "Erstanlage in fünf Schritten", text: "Art, Adresse, Wohnung, Mietvertrag mit Stichtag und Zähler — Pflicht ist nur die Bezeichnung." },
        { symbol: "haus", name: "Wohnsituation", text: "Mietwohnung, Zweifamilienhaus mit eigener Wohnung oder Mehrfamilienhaus — das Zähler-Set passt sich an." },
        { symbol: "ebenen", name: "Wohnung und Haus", text: "Wohnungs- und Hauszähler getrennt, eigene Zähler lassen sich ergänzen oder abschalten." },
        { symbol: "kalender", name: "Freier Stichtag", text: "Die Abrechnungsperiode endet zum Kalenderjahr (31.12.) oder an einem eigenen Stichtag, etwa dem 31. Mai laut Mietvertrag." },
        { symbol: "ordner", name: "Mehrere Objekte", text: "„Neues Objekt (Umzug)“ legt einen eigenen Datenraum an, das alte bleibt einsehbar." }
      ] },
      { gruppe: "Kosten", symbol: "euro", liste: [
        { symbol: "liste", name: "Kostensätze je Periode", text: "Grundsteuer, Versicherung, Müll, Zählermieten, Preise je Einheit und die Jahresabschläge." },
        { symbol: "haus", name: "Gebäude oder Wohnung", text: "Je Posten wählbar — Gebäudekosten zählen mit dem eigenen Flächenanteil." },
        { symbol: "plus", name: "Eigene Posten", text: "Zusätzliche Kosten mit Namen und Jahresbetrag frei je Periode anlegen." },
        { symbol: "flamme", name: "Heizkosten nach Fläche und Verbrauch", text: "Mit Zustandszahl und Brennwert gerechnet; die App warnt, wenn der Verbrauchsanteil von 50–70 % abweicht." },
        { symbol: "euro", name: "Die Rechnung", text: "Betriebs- und Heizkosten getrennt, die Abschläge dagegen, dazu jede Monatszeile einzeln." },
        { symbol: "duell", name: "Perioden-Vergleich", text: "Die gewählte Periode neben der vorigen: Kosten, Differenz und Verbrauch je Bereich." }
      ] },
      { gruppe: "Auswertung und Daten", symbol: "diagramm", liste: [
        { symbol: "kurve", name: "Drei Diagramme", text: "Monatsverbrauch je Jahr, Jahressummen und Kostenverlauf." },
        { symbol: "diagramm", name: "Bereichsseiten", text: "Gas, Wasser und Strom einzeln, mit Monatsverbrauch und Jahresvergleich." },
        { symbol: "download", name: "CSV-Einfuhr und -Ausfuhr", text: "Ablesungen, Kostensätze und Stammdaten einlesen; jede übersprungene Zeile wird mit Grund gemeldet." },
        { symbol: "export", name: "Sicherung", text: "Alle Daten als Datei sichern und wieder einspielen." },
        { symbol: "palette", name: "Farben und Sprache", text: "Bereichsfarben aus gedeckten Tönen, hell oder dunkel, Deutsch oder Englisch." }
      ] }
    ],
    schritte: [
      { titel: "Objekt anlegen", text: "Der Assistent fragt Art, Adresse, Wohnung, Stichtag und Zähler ab — alles lässt sich später ändern." },
      { titel: "Zähler ablesen", text: "Anfang des Monats jeden Stand eintippen oder fotografieren und den Vorschlag bestätigen." },
      { titel: "Kosten eintragen", text: "Kostensätze und Abschläge je Periode pflegen — die Übersicht zeigt, ob Guthaben oder Nachzahlung aufläuft." }
    ],
    neu: { version: "1.4.0", datum: "07.09.2026", punkte: [
      "Eigener Objekt-Bereich: Adresse, Wohnung, Stichtag, Heizung und Zähler an einem Ort",
      "Erstanlage-Assistent in fünf Schritten — nur die Bezeichnung ist Pflicht",
      "Das Zähler-Set richtet sich nach der Art des Objekts",
      "„Neues Objekt (Umzug)“ legt einen eigenen Datenraum an",
      "Leere Übersicht und Eingabe führen direkt zum nächsten Schritt"
    ] },
    fragen: [
      { frage: "Kostet AblesBar etwas?", antwort: "Die Testfassung ist kostenlos; eine Bezahlfunktion gibt es in der App nicht." },
      { frage: "Muss ich jeden Zähler fotografieren?", antwort: "Nein. Die Eingabe von Hand ist gleichwertig. Ein Foto liefert nur einen Vorschlag, den du bestätigst oder korrigierst." },
      { frage: "Kann ich damit für Mieter abrechnen?", antwort: "Noch nicht. Die App rechnet die eigene Wohnung; Kosten auf weitere Wohneinheiten verteilt sie bisher nicht." },
      { frage: "Wo liegen meine Daten?", antwort: "Nur auf dem Gerät. Es gibt keinen Server und kein externes Konto; das Netz wird allein für den Update-Knopf genutzt." },
      { frage: "Wann kommt die App in die Stores?", antwort: "AblesBar läuft als Android-Testfassung außerhalb der Stores und kommt über einen Update-Knopf in der App. Ein Store-Eintrag steht noch aus." }
    ],
    abschluss: { titel: "Jeder Zähler, jeder Monat.", text: "Ablesen genügt — den Rest rechnet die App.", stand: "Im Test — Testfassung außerhalb der Stores, nichts zu kaufen." }
  },
  en: {
    fakten: ["Android", "Gas · water · electricity", "No server"],
    blickSatz: "Read every meter once a month — the app works out consumption and costs per billing period and sets them against the instalments you have paid.",
    vorteile: [
      { symbol: "kamera", titel: "Photo, not copying", text: "On-device text recognition suggests the digits; you confirm them in the correction view." },
      { symbol: "euro", titel: "Refund or top-up", text: "Month by month, costs stand against the share of instalments — the difference is always visible." },
      { symbol: "rechner", titel: "No rounding errors", text: "Readings in thousandths, amounts in cents: the app calculates in whole numbers, nothing adds up wrong." },
      { symbol: "schloss", titel: "Stays on the device", text: "No server, no outside account — only the update button needs the network." }
    ],
    erlebnis: { titel: "A meter to try", kurz: "Meter", text: "The wheels turn from last month’s reading to the new one — that gives the monthly consumption and the balance against the instalments. The values are examples." },
    galerie: { text: "Six captures of version 1.4.0 in dark mode, with example values: first the set-up, then overview, entry, meters, cost rates and statement.", bilder: [
      { titel: "The set-up", text: "The assistant starts with a name and the type of property — rented flat, two-family house or apartment building. Only the name is required." },
      { titel: "The overview", text: "Gas, water, electricity and running costs as tiles with consumption and cost, below them the month with the number of readings and the current period." },
      { titel: "The entry screen", text: "One reading date, then every active meter with its last reading and a field for the new one — or the camera button." },
      { titel: "Meters and property", text: "The Property tab shows the address and meters, split into flat and house; each meter can be switched off, and “New property (move)” creates a data space of its own." },
      { titel: "The cost rates", text: "Fixed costs per item for building or flat, then prices per unit and the instalments — kept per period." },
      { titel: "The statement", text: "Totals for the period with credit or back payment, plus the monthly overview with the balance up to each month." }
    ] },
    funktionen: [
      { gruppe: "Reading", symbol: "zaehler", liste: [
        { symbol: "kamera", name: "Photo reading", text: "Photograph the meter or pick an image from the gallery — recognition runs on the device." },
        { symbol: "auge", name: "Correction view", text: "Every recognised value has to be confirmed before it goes into your data." },
        { symbol: "suche", name: "Smart digit picking", text: "Serial number, build year and calibration date are skipped; the value near the last reading is picked." },
        { symbol: "liste", name: "Every meter on one page", text: "One shared reading date, then every active meter with its own field." },
        { symbol: "wiederholen", name: "Meter replacement", text: "If the reading falls below the old one, the app asks for the starting value of the new meter." }
      ] },
      { gruppe: "Property", symbol: "haus", liste: [
        { symbol: "stift", name: "Set-up in five steps", text: "Type, address, flat, tenancy with cut-off date and meters — only the name is required." },
        { symbol: "haus", name: "Living situation", text: "Rented flat, two-family house you live in or apartment building — the meter set adapts." },
        { symbol: "ebenen", name: "Flat and building", text: "Flat and building meters kept apart; add your own meters or switch some off." },
        { symbol: "kalender", name: "Free cut-off date", text: "The billing period ends with the calendar year (31 December) or on a cut-off date of your own, such as 31 May from the lease." },
        { symbol: "ordner", name: "Several properties", text: "“New property (move)” creates its own data space; the old one stays viewable." }
      ] },
      { gruppe: "Costs", symbol: "euro", liste: [
        { symbol: "liste", name: "Cost rates per period", text: "Property tax, insurance, refuse, meter rentals, unit prices and the annual instalments." },
        { symbol: "haus", name: "Building or flat", text: "Chosen per item — building costs count with your own share of the floor area." },
        { symbol: "plus", name: "Your own items", text: "Add extra costs with a name and annual amount freely per period." },
        { symbol: "flamme", name: "Heating by area and use", text: "Calculated with the gas correction factor and calorific value; the app warns if the usage share leaves 50–70 %." },
        { symbol: "euro", name: "The settlement", text: "Running and heating costs apart, the instalments against them, plus every monthly line on its own." },
        { symbol: "duell", name: "Period comparison", text: "The chosen period next to the previous one: costs, difference and consumption per area." }
      ] },
      { gruppe: "Analysis and data", symbol: "diagramm", liste: [
        { symbol: "kurve", name: "Three charts", text: "Monthly consumption per year, annual totals and cost history." },
        { symbol: "diagramm", name: "Area pages", text: "Gas, water and electricity on their own, with monthly consumption and year comparison." },
        { symbol: "download", name: "CSV import and export", text: "Read in readings, cost rates and base data; every skipped line is reported with its reason." },
        { symbol: "export", name: "Backup", text: "Save all data as a file and restore it." },
        { symbol: "palette", name: "Colours and language", text: "Area colours from muted tones, light or dark, German or English." }
      ] }
    ],
    schritte: [
      { titel: "Set up the property", text: "The assistant asks for type, address, flat, cut-off date and meters — everything can be changed later." },
      { titel: "Read the meters", text: "At the start of the month type in each reading or photograph it and confirm the suggestion." },
      { titel: "Enter the costs", text: "Maintain cost rates and instalments per period — the overview shows whether a refund or a top-up is building up." }
    ],
    neu: { version: "1.4.0", datum: "7 Sep 2026", punkte: [
      "A property area of its own: address, flat, cut-off date, heating and meters in one place",
      "Set-up assistant in five steps — only the name is required",
      "The meter set follows the type of property",
      "“New property (move)” creates its own data space",
      "An empty overview and entry page lead straight to the next step"
    ] },
    fragen: [
      { frage: "Does AblesBar cost anything?", antwort: "The test build is free; the app has no payment function." },
      { frage: "Do I have to photograph every meter?", antwort: "No. Typing by hand is just as good. A photo only gives a suggestion that you confirm or correct." },
      { frage: "Can I bill tenants with it?", antwort: "Not yet. The app calculates your own flat; it does not yet split costs across further units." },
      { frage: "Where is my data?", antwort: "Only on the device. There is no server and no outside account; the network is used for the update button alone." },
      { frage: "When will it be in the stores?", antwort: "AblesBar runs as an Android test build outside the stores and is updated through a button inside the app. A store listing is still to come." }
    ],
    abschluss: { titel: "Every meter, every month.", text: "Just read it — the app works out the rest.", stand: "In testing — test build outside the stores, nothing to buy." }
  }
};
