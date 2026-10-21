/// Inhalte der Produktseite PROJECT EMPIRE.
window.PRODUKT_DATEN = {
  app: "empire", seite: "project-empire", stil: "b-heat", quer: true,
  symbol: "bilder/marke/app-empire.webp",
  bilder: [
    { datei: "bilder/empire/empire-neue-partie.webp", b: 1600, h: 900 },
    { datei: "bilder/empire/empire-laden.webp", b: 1600, h: 900 },
    { datei: "bilder/empire/empire-stammeszeit.webp", b: 1600, h: 900 },
    { datei: "bilder/empire/empire-industriezeitalter.webp", b: 1600, h: 900 }
  ],
  de: {
    fakten: ["Windows-PC", "1 bis 4 Spieler", "Ohne Konto"],
    blickSatz: "Ein Echtzeit-Strategiespiel: Du führst ein Volk von der Stammeszeit bis ins Zukunftszeitalter.",
    vorteile: [
      { symbol: "sanduhr", titel: "Acht Epochen", text: "Start- und Endepoche wählst du vor jeder Partie." },
      { symbol: "schild", titel: "Römer und Mongolen", text: "Beide in allen Epochen spielbar; sechs weitere Völker sind noch gesperrt." },
      { symbol: "gruppe", titel: "Bis zu vier Spieler", text: "Im Heimnetz oder übers Internet, ohne Anmeldung." },
      { symbol: "ziel", titel: "Computergegner", text: "Vier Stufen, voreingestellt ist Normal." }
    ],
    erlebnis: { titel: "Acht Epochen in einer Partie", kurz: "Epochen", text: "Mit jedem Aufstieg wachsen die Gebäude mit; neue Truppen gehören zur neuen Epoche." },
    galerie: { text: "Vier Aufnahmen aus der Testfassung, direkt im Spiel.", bilder: [
      { titel: "Neue Partie", text: "Volk, Farbe, Karte und Epochen wählen." },
      { titel: "Partie wird vorbereitet", text: "Römer gegen Mongolen auf der kleinen Karte." },
      { titel: "Zu viert in der Stammeszeit", text: "Rohstoffe oben, Spielerübersicht rechts, Befehle unten." },
      { titel: "Start im Industriezeitalter", text: "Späterer Einstieg, mit Öl als fünftem Rohstoff." }
    ] },
    funktionen: [
      { gruppe: "Epochen und Völker", symbol: "sanduhr", liste: [
        { symbol: "sanduhr", name: "Acht Epochen", text: "Von der Stammeszeit bis ins Zukunftszeitalter." },
        { symbol: "hoch", name: "Aufstieg", text: "Schlüsseltechnik erforschen, dann im Hauptgebäude aufsteigen — danach wechseln die Gebäude ihr Aussehen." },
        { symbol: "schild", name: "Römer", text: "Ordnung, Formation und Straßen." },
        { symbol: "ort", name: "Mongolen", text: "Reiter, Herden und ein Lager, das mitzieht." }
      ] },
      { gruppe: "Wirtschaft und Heer", symbol: "duell", liste: [
        { symbol: "muenze", name: "Sechs Rohstoffe", text: "Nahrung, Holz, Stein und Gold, später Öl und Daten." },
        { symbol: "buch", name: "Forschung", text: "In Forschungsgebäude, Schmiede, Hauptgebäude und Farm." },
        { symbol: "duell", name: "Truppen je Epoche", text: "Vom Keulenkrieger bis zum Exo-Soldaten." },
        { symbol: "blitz", name: "Luftkrieg", text: "Ab dem Maschinen- und Atomzeitalter: Flugzeuge, Hubschrauber, Flak." }
      ] },
      { gruppe: "Mehrspieler", symbol: "globus", liste: [
        { symbol: "monitor", name: "Heimnetz", text: "Bis zu vier Spieler, auch mit Computergegnern." },
        { symbol: "globus", name: "Internet", text: "Lobby mit Namen und Kennwort, Einladung zum Kopieren." },
        { symbol: "schloss", name: "Ohne Anmeldung", text: "Kein Konto, kein eigener Server." },
        { symbol: "wiederholen", name: "Wiedereinstieg", text: "Bis zur Rückkehr führt der Computer das Volk." }
      ] }
    ],
    schritte: [
      { titel: "Einrichten", text: "Volk, Karte, Gegner und Epochen wählen." },
      { titel: "Aufbauen", text: "Arbeiter sammeln Rohstoffe, das Reich wächst." },
      { titel: "Aufsteigen", text: "Schlüsseltechnik erforschen, im Hauptgebäude aufsteigen." }
    ],
    fragen: [
      { frage: "Kann ich PROJECT EMPIRE schon spielen?", antwort: "Noch nicht. Die Testfassung läuft nur bei mir; einen Download gibt es nicht." },
      { frage: "Welche Völker kann ich spielen?", antwort: "Römer und Mongolen, in allen acht Epochen. Sechs weitere stehen schon in der Auswahl, sind aber gesperrt." },
      { frage: "Brauche ich ein Konto oder Internet?", antwort: "Kein Konto, und allein oder im Heimnetz auch kein Internet. Übers Internet tauschen Gastgeber und Mitspieler ihre Adressen verschlüsselt über ntfy.sh und ntfy.envs.net aus, und das Spiel fragt öffentliche STUN-Server nach der eigenen Adresse." }
    ],
    abschluss: { titel: "Eine Welt. Acht Epochen.", text: "Deine Strategie.", stand: "In Arbeit — kein Download, nichts zu kaufen." }
  },
  en: {
    fakten: ["Windows PC", "1 to 4 players", "No account"],
    blickSatz: "A real-time strategy game: you lead a nation from the Tribal Age to the Future Age.",
    vorteile: [
      { symbol: "sanduhr", titel: "Eight eras", text: "You pick the starting and final era before each match." },
      { symbol: "schild", titel: "Romans and Mongols", text: "Both playable in every era; six more nations are still locked." },
      { symbol: "gruppe", titel: "Up to four players", text: "On your home network or over the internet, with no sign-up." },
      { symbol: "ziel", titel: "Computer opponents", text: "Four levels, Normal by default." }
    ],
    erlebnis: { titel: "Eight eras in one match", kurz: "Eras", text: "With every advance your buildings grow along; new troops belong to the new era." },
    galerie: { text: "Four captures from the test build, taken in the game. The game itself is in German.", bilder: [
      { titel: "New match", text: "Pick nation, colour, map and eras." },
      { titel: "Preparing the match", text: "Romans against Mongols on the small map." },
      { titel: "Four players in the Tribal Age", text: "Resources at the top, player overview on the right, commands below." },
      { titel: "Starting in the Industrial Age", text: "A later start, with oil as the fifth resource." }
    ] },
    funktionen: [
      { gruppe: "Eras and nations", symbol: "sanduhr", liste: [
        { symbol: "sanduhr", name: "Eight eras", text: "From the Tribal Age to the Future Age." },
        { symbol: "hoch", name: "Advancing", text: "Research the key technology, then advance at the main building; afterwards your buildings change their look." },
        { symbol: "schild", name: "Romans", text: "Order, formation and roads." },
        { symbol: "ort", name: "Mongols", text: "Riders, herds and a camp that moves along." }
      ] },
      { gruppe: "Economy and army", symbol: "duell", liste: [
        { symbol: "muenze", name: "Six resources", text: "Food, wood, stone and gold, later oil and data." },
        { symbol: "buch", name: "Research", text: "At the research building, smithy, main building and farm." },
        { symbol: "duell", name: "Troops for every era", text: "From club warrior to exo soldier." },
        { symbol: "blitz", name: "Air war", text: "From the Machine and Atomic Age: aircraft, helicopters, flak." }
      ] },
      { gruppe: "Multiplayer", symbol: "globus", liste: [
        { symbol: "monitor", name: "Home network", text: "Up to four players, computer opponents included if you like." },
        { symbol: "globus", name: "Internet", text: "Lobby with name and password, invitation ready to copy." },
        { symbol: "schloss", name: "No sign-up", text: "No account, no server of our own." },
        { symbol: "wiederholen", name: "Rejoining", text: "Until a player returns, the computer leads their nation." }
      ] }
    ],
    schritte: [
      { titel: "Set up", text: "Pick nation, map, opponents and eras." },
      { titel: "Build", text: "Workers gather resources, the empire grows." },
      { titel: "Advance", text: "Research the key technology, advance at the main building." }
    ],
    fragen: [
      { frage: "Can I play PROJECT EMPIRE yet?", antwort: "Not yet. The test build only runs on my own computers; there is no download." },
      { frage: "Which nations can I play?", antwort: "Romans and Mongols, in all eight eras. Six more are already in the selection but locked." },
      { frage: "Do I need an account or internet?", antwort: "No account, and no internet for playing alone or on your home network. Over the internet, host and players exchange their addresses encrypted via ntfy.sh and ntfy.envs.net, and the game asks public STUN servers for its own address." }
    ],
    abschluss: { titel: "One world. Eight eras.", text: "Your strategy.", stand: "In progress — no download, nothing to buy." }
  }
};
