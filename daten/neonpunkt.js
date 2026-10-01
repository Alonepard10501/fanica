/// Inhalte der Produktseite NeonPunkt (Stand 2.30, 08.09.2026).
window.PRODUKT_DATEN = {
  app: "neonpunkt", seite: "neonpunkt", stil: "b-helix",
  symbol: "bilder/marke/app-neonpunkt.webp",
  bilder: [
    { datei: "bilder/app/neonpunkt-start.webp", b: 540, h: 1200 },
    { datei: "bilder/app/neonpunkt-spiel.webp", b: 540, h: 1200 },
    { datei: "bilder/app/neonpunkt-bestenliste.webp", b: 540, h: 1200 }
  ],
  de: {
    fakten: ["Android", "Ohne Konto", "Spielt offline"],
    blickSatz: "Ein Neonpunkt wächst 48 Stunden lang, bis er den Bildschirm füllt — wer ihn antippt, schickt ihn klein und in neuer Farbe zurück an den Start.",
    vorteile: [
      { symbol: "uhr", titel: "48 Stunden", text: "Der Punkt wächst gleichmäßig weiter, auch wenn die App geschlossen ist." },
      { symbol: "ziel", titel: "Ein Tipp genügt", text: "Jeder Treffer setzt den Punkt auf Anfangsgröße zurück und startet seine Uhr neu." },
      { symbol: "pokal", titel: "Gegen dich selbst", text: "Zwei Bestenlisten auf dem Gerät — kein Gegner, keine Online-Rangliste." },
      { symbol: "schild", titel: "Ohne Beiwerk", text: "Kein Konto, keine Werbung, und gespielt wird ohne Internet." }
    ],
    erlebnis: { titel: "48 Stunden in zwölf Sekunden", kurz: "Zeitraffer", text: "So wächst der Punkt wirklich, nur im Zeitraffer — und darunter liegt ein echter Punkt zum Antippen." },
    galerie: { text: "Drei Aufnahmen aus Fassung 2.30 auf einem Android-Gerät.", bilder: [
      { titel: "Der Start", text: "Die Runde dauert 48 Stunden — es sei denn, du klickst den Punkt an. Oben stellst du die Sprache ein, unten wartet die Einführung." },
      { titel: "Das Spielfeld", text: "Oben rechts wächst der Punkt; links oben stehen Klicks und Spielzeit in Wochen, Tagen, Stunden, Minuten und Sekunden, unten der Gesamtzähler." },
      { titel: "Die Bestenliste", text: "Bestenliste, Meiste Klicks pro Sitzung und Durchschnitt gehören zu Premium; ohne Premium zeigt die Seite einen Hinweis." }
    ] },
    funktionen: [
      { gruppe: "Das Spiel", symbol: "ziel", liste: [
        { symbol: "punkt", name: "Der wachsende Punkt", text: "Von zwölf Punkt Radius bis bildschirmfüllend, gleichmäßig über 48 Stunden." },
        { symbol: "haken", name: "Treffer", text: "Zähler plus eins, nächste Farbe, neue zufällige Stelle, Uhr des Punkts auf null." },
        { symbol: "palette", name: "Sechzehn Neonfarben", text: "Immer der Reihe nach, nach der sechzehnten beginnt der Kreis von vorn." },
        { symbol: "telefon", name: "Großzügig treffbar", text: "Auch der kleinste Punkt hat einen großen Bereich, der auf den Finger reagiert." },
        { symbol: "sanduhr", name: "Ende der Runde", text: "Füllt der Punkt den Bildschirm, beendet der nächste Tipp die Runde." }
      ] },
      { gruppe: "Zählen und Listen", symbol: "pokal", liste: [
        { symbol: "uhr", name: "Klicks und Spielzeit", text: "Oben laufen Klickstand und Spielzeit in Wochen, Tagen, Stunden, Minuten und Sekunden." },
        { symbol: "pokal", name: "Bestenliste", text: "Die fünf besten beendeten Runden nach Klicks, jeweils mit ihrer Spieldauer." },
        { symbol: "blitz", name: "Meiste Klicks pro Sitzung", text: "Eine zweite Liste mit fünf Plätzen für die stärksten Sitzungen." },
        { symbol: "diagramm", name: "Durchschnitt", text: "Die Klicks pro Sitzung im Schnitt, auf eine Nachkommastelle." },
        { symbol: "stapel", name: "Gesamtzähler", text: "Alle Klicks über alle Runden hinweg." }
      ] },
      { gruppe: "Rund ums Spiel", symbol: "telefon", liste: [
        { symbol: "monitor", name: "Widget", text: "Der Punkt auf dem Startbildschirm — ein Tipp darauf zählt wie in der App." },
        { symbol: "download", name: "Nichts geht verloren", text: "Punkt, Klicks und Spielzeit bleiben nach dem Schließen genau erhalten." },
        { symbol: "globus", name: "16 Sprachen", text: "Von Deutsch und Englisch bis Japanisch und Koreanisch." },
        { symbol: "buch", name: "Einführung", text: "Zehn Seiten erklären beim ersten Start alles, jederzeit über „? Einführung“ wieder aufrufbar." },
        { symbol: "wiederholen", name: "Reset", text: "Die Runde beginnt von vorn, die Klicks stehen wieder auf null." }
      ] }
    ],
    schritte: [
      { titel: "Einführung ansehen", text: "Zehn kurze Seiten — danach läuft sieben Tage lang der volle Umfang." },
      { titel: "Den Punkt treffen", text: "Antippen, bevor er zu groß wird: Er springt klein an eine neue Stelle, in der nächsten Farbe." },
      { titel: "Wiederkommen", text: "Der Punkt wächst weiter. Wer ihn klein halten will, kommt immer wieder zurück." }
    ],
    preise: {
      satz: "Erst spielen, dann entscheiden: Nach der Einführung gibt es sieben Tage lang den vollen Umfang — ohne Konto und ohne Kündigung.",
      karten: [
        { name: "Gratis", preis: "0 €", zusatz: "500 Klicks je Runde", punkte: [
          "Das ganze Spiel mit allen 16 Farben", "Zähler und Uhr", "Sitzungsanzeige und Gesamtzähler", "Widget und alle 16 Sprachen"
        ] },
        { name: "Premium", preis: "0,49 €", zusatz: "je 4 Wochen · oder 4,99 € im Jahr", punkte: [
          "Klicks ohne Limit", "Beide Bestenlisten", "Durchschnitt pro Sitzung", "Gilt genauso im Widget"
        ] }
      ],
      fuss: "Nach 500 Klicks pausiert die Runde nur — Punkt, Klicks und Spielzeit bleiben erhalten. Es gilt der Preis, den der Store beim Kauf anzeigt."
    },
    fragen: [
      { frage: "Was passiert, wenn ich nicht tippe?", antwort: "Nach 48 Stunden füllt der Punkt den Bildschirm. Der nächste Tipp beendet die Runde, sie wandert in die Bestenliste, und eine neue beginnt." },
      { frage: "Was ist nach 500 Klicks?", antwort: "Ohne Premium pausiert die Runde. Nichts geht verloren — mit Premium geht es ohne Limit weiter." },
      { frage: "Brauche ich Internet oder ein Konto?", antwort: "Ein Konto gibt es nicht, Werbung auch nicht. Gespielt wird ohne Internet; Netz braucht nur der Kauf von Premium." },
      { frage: "Wo bekomme ich NeonPunkt?", antwort: "NeonPunkt läuft im geschlossenen Test bei Google Play und ist noch nicht öffentlich erhältlich; eine iPhone-Fassung ist noch nicht im App Store." }
    ],
    abschluss: { titel: "Ein Punkt. 48 Stunden.", text: "Du kannst ihn nie aufhalten — nur hinauszögern.", stand: "Im Test — noch nicht öffentlich im Store." }
  },
  en: {
    fakten: ["Android", "No account", "Plays offline"],
    blickSatz: "A neon dot grows for 48 hours until it fills the screen — tap it and it starts again small, in a new colour.",
    vorteile: [
      { symbol: "uhr", titel: "48 hours", text: "The dot keeps growing steadily, even while the app is closed." },
      { symbol: "ziel", titel: "One tap is enough", text: "Every hit shrinks the dot back to its starting size and restarts its clock." },
      { symbol: "pokal", titel: "Against yourself", text: "Two leaderboards on your device — no opponent, no online ranking." },
      { symbol: "schild", titel: "Nothing extra", text: "No account, no ads, and you play without internet." }
    ],
    erlebnis: { titel: "48 hours in twelve seconds", kurz: "Time-lapse", text: "This is how the dot really grows, only in time-lapse — and below sits a real dot to tap." },
    galerie: { text: "Three captures of version 2.30 on an Android device.", bilder: [
      { titel: "The start", text: "A round lasts 48 hours — unless you click the dot. Language is set at the top, the introduction waits at the bottom." },
      { titel: "The playfield", text: "The dot grows at the top right; top left shows clicks and play time in weeks, days, hours, minutes and seconds, the total counter at the bottom." },
      { titel: "The leaderboard", text: "The leaderboard, most clicks per session and the average belong to Premium; without Premium the page shows a note." }
    ] },
    funktionen: [
      { gruppe: "The game", symbol: "ziel", liste: [
        { symbol: "punkt", name: "The growing dot", text: "From a radius of twelve points to full screen, evenly over 48 hours." },
        { symbol: "haken", name: "Hit", text: "Counter plus one, next colour, new random spot, the dot’s clock back to zero." },
        { symbol: "palette", name: "Sixteen neon colours", text: "Always in order; after the sixteenth the cycle starts again." },
        { symbol: "telefon", name: "Easy to hit", text: "Even the smallest dot has a large area that reacts to your finger." },
        { symbol: "sanduhr", name: "End of a round", text: "Once the dot fills the screen, the next tap ends the round." }
      ] },
      { gruppe: "Counting and lists", symbol: "pokal", liste: [
        { symbol: "uhr", name: "Clicks and play time", text: "At the top run the click count and play time in weeks, days, hours, minutes and seconds." },
        { symbol: "pokal", name: "Leaderboard", text: "The five best finished rounds by clicks, each with its duration." },
        { symbol: "blitz", name: "Most clicks per session", text: "A second list with five places for the strongest sessions." },
        { symbol: "diagramm", name: "Average", text: "Clicks per session on average, to one decimal place." },
        { symbol: "stapel", name: "Total counter", text: "All clicks across all rounds." }
      ] },
      { gruppe: "Around the game", symbol: "telefon", liste: [
        { symbol: "monitor", name: "Widget", text: "The dot on your home screen — a tap on it counts just like in the app." },
        { symbol: "download", name: "Nothing gets lost", text: "Dot, clicks and play time are kept exactly when you close the app." },
        { symbol: "globus", name: "16 languages", text: "From German and English to Japanese and Korean." },
        { symbol: "buch", name: "Guide", text: "Ten pages explain everything on first start; reopen any time via “? Guide”." },
        { symbol: "wiederholen", name: "Reset", text: "The round starts over, clicks back to zero." }
      ] }
    ],
    schritte: [
      { titel: "Read the guide", text: "Ten short pages — after that you get the full package for seven days." },
      { titel: "Hit the dot", text: "Tap it before it grows too big: it jumps back small to a new spot, in the next colour." },
      { titel: "Come back", text: "The dot keeps growing. Keeping it small means coming back again and again." }
    ],
    preise: {
      satz: "Play first, then decide: after the guide you get the full package for seven days — no account, no cancelling.",
      karten: [
        { name: "Free", preis: "€0", zusatz: "500 clicks per round", punkte: [
          "The whole game with all 16 colours", "Counter and clock", "Session display and total counter", "Widget and all 16 languages"
        ] },
        { name: "Premium", preis: "€0.49", zusatz: "per 4 weeks · or €4.99 a year", punkte: [
          "Unlimited clicks", "Both leaderboards", "Average per session", "Works the same in the widget"
        ] }
      ],
      fuss: "After 500 clicks the round only pauses — dot, clicks and play time are kept. The price shown by the store at purchase applies."
    },
    fragen: [
      { frage: "What happens if I don’t tap?", antwort: "After 48 hours the dot fills the screen. The next tap ends the round, it moves to the leaderboard and a new one begins." },
      { frage: "What happens after 500 clicks?", antwort: "Without Premium the round pauses. Nothing is lost — with Premium it carries on without a limit." },
      { frage: "Do I need internet or an account?", antwort: "There is no account and no advertising. You play without internet; only buying Premium needs a connection." },
      { frage: "Where can I get NeonPunkt?", antwort: "NeonPunkt is in closed testing on Google Play and not publicly available yet; an iPhone version is not in the App Store yet." }
    ],
    abschluss: { titel: "One dot. 48 hours.", text: "You can never stop it — only delay it.", stand: "In testing — not publicly in any store yet." }
  }
};
