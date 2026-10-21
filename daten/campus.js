/// Inhalte der Produktseite Campus Clash.
window.PRODUKT_DATEN = {
  app: "campus", seite: "campus-clash", stil: "b-heat",
  symbol: "bilder/marke/app-campus.webp",
  bilder: [
    { datei: "bilder/app/campus-start.webp", b: 540, h: 1200 },
    { datei: "bilder/app/campus-lernplan.webp", b: 540, h: 1200 },
    { datei: "bilder/app/campus-markt.webp", b: 540, h: 1200 },
    { datei: "bilder/app/campus-schmiede.webp", b: 540, h: 1200 }
  ],
  de: {
    fakten: ["Für Android und iOS gebaut", "Ohne Konto", "Einzelspiel offline"],
    blickSatz: "Ein endloses Aufstiegsspiel: vom Schüler über Studium oder Ausbildung bis zum eigenen Unternehmen — in echter Zeit.",
    vorteile: [
      { symbol: "uhr", titel: "Echte Zeit", text: "Lernen, Jobs und Vorräte laufen mit der Uhr weiter, auch wenn die App geschlossen ist." },
      { symbol: "hoch", titel: "Ohne Obergrenze", text: "Level, Stufen und Punkte sind endlos — jeder Abschnitt dauert länger als der vorige." },
      { symbol: "gruppe", titel: "Gemeinsam stärker", text: "Freunde per Code, Duelle über Minispiele, Allianzen mit bis zu zehn Mitgliedern, Wochenprojekt, Mauer und Wochenendturnier." },
      { symbol: "schild", titel: "Fair und privat", text: "Kein Konto, kein eigener Server, kein Pay-to-Win: Premium kauft Komfort, nie Werte." }
    ],
    galerie: { text: "Vier Aufnahmen aus der Fassung 4.13.0 im Dunkelmodus, aus einem frischen Spielstand mit Beispielwerten. Schule und Markt sind seitdem neu geordnet.", bilder: [
      { titel: "Der Start", text: "Oben Level, Diamanten, Gesundheit, Energie und Geld; darunter Aufgaben und die laufenden Fächer." },
      { titel: "Der Lernplan", text: "Jedes Fach zeigt Dauer, Level und Restzeit; drei Plätze im Werdegang laufen gemeinsam." },
      { titel: "Markt und Ausrüstung", text: "Sieben Angebote je Tag; Gekauftes erscheint unter „Was du trägst“ und erhöht die Stärke." },
      { titel: "Die Schmiede", text: "Gegenstände mit Diamanten eine Seltenheit höher aufwerten, bis Mythisch." }
    ] },
    erlebnis: { titel: "Die Uhr läuft weiter", kurz: "Live", text: "Jedes Training hat einen festen Endzeitpunkt. Beim nächsten Öffnen rechnet das Spiel die vergangene Zeit nach." },
    funktionen: [
      { gruppe: "Werdegang", symbol: "hut", liste: [
        { symbol: "buch", name: "Fächer lernen", text: "Acht Startfächer, jedes zahlt auf einen von acht Skills ein — vier Wissen, vier Sport." },
        { symbol: "hut", name: "Studium oder Ausbildung", text: "Ab Level 20 geht es weiter, danach folgen Hauptjob und eigenes Unternehmen." },
        { symbol: "ebenen", name: "Plätze je Bereich", text: "Der Werdegang hat drei Plätze, die gleichzeitig laufen, der Alltag einen mit bis zu drei Durchläufen hintereinander." },
        { symbol: "ziel", name: "Spezialisierung", text: "Wer sich festlegt, öffnet Elite-Vereine, Elite-Nebenjobs oder Elite-Jobs." },
        { symbol: "stern", name: "Neues Schuljahr", text: "Ab Level 80 beginnt ein neues Schuljahr, danach öffnet die Sternwarte." }
      ] },
      { gruppe: "Alltag und Markt", symbol: "muenze", liste: [
        { symbol: "muenze", name: "Alltag", text: "Vereine, Nebenjobs, Aufträge und Jobs bringen Geld — jeder Bereich mit eigener Seite." },
        { symbol: "stapel", name: "Markt, Fahrzeuge und Serien", text: "Täglich sieben Kleidungsstücke im Angebot, ab Level 10 Fahrzeuge vom Bobby Car bis zum Privatjet; eine voll eingefügte Serie gibt dauerhaft die Hälfte ihrer Boni." },
        { symbol: "werkzeug", name: "Schmiede", text: "Gegenstände mit Diamanten eine Seltenheit höher aufwerten, bis Mythisch; zwei gleichartige Stücke lassen sich auch ohne Diamanten zu einem selteneren kombinieren." },
        { symbol: "geschenk", name: "Kisten und Truhen", text: "Jeder Levelaufstieg bringt drei verdeckte Kisten: Geld, Diamanten oder einen 24-Stunden-Schub. Truhen gibt es für Erfolge, Siege und Aufgaben." },
        { symbol: "spiel", name: "Sechs Minispiele", text: "Münzwurf, Rot oder Schwarz, Schere-Stein-Papier, Vier gewinnt, Paare und Tic Tac Toe — um Diamanten." },
        { symbol: "stern", name: "Diamanten-Shop", text: "Für erspielte Diamanten: alle Truhen und Kisten, Tonarten zum Probehören und für sieben Tage ein Tutor oder eine Aushilfe als zusätzlicher Platz." }
      ] },
      { gruppe: "Duell und Kampf", symbol: "duell", liste: [
        { symbol: "duell", name: "Rundenkampf", text: "100 Lebenspunkte je Seite; die Stärke wirkt über die Trefferchance." },
        { symbol: "person", name: "Mitschüler", text: "Mitschüler anfreunden oder herausfordern — die Gegnerwahl zeigt ihre Stärke." },
        { symbol: "gruppe", name: "Freundes-Bots", text: "Eigene Bots ausbilden, alle sechs Stunden herausfordern — ein Minispiel entscheidet — und als Helfer einsetzen." },
        { symbol: "spiel", name: "Freundesduell", text: "Freunde zu drei Runden eines Minispiels herausfordern, bis zu fünf Herausforderungen am Tag; der Sieger bekommt eine Duell-Truhe." },
        { symbol: "pokal", name: "Aufgaben und Erfolge", text: "Wochen- und Monatsaufgaben sowie Erfolge, belohnt mit Kisten und Truhen." },
        { symbol: "kalender", name: "Tagesereignisse", text: "Etwa jeden dritten Tag verändert ein Ereignis das Spiel für einen Tag." }
      ] },
      { gruppe: "Freunde und Allianz", symbol: "gruppe", liste: [
        { symbol: "teilen", name: "Freundescode", text: "Freunde verbinden sich per Code oder QR-Code — ohne Konto und ohne eigenen Server." },
        { symbol: "hoch", name: "Mentor-Bonus", text: "Ab fünf Level Abstand trainieren Mentor und Schützling beide zehn Prozent kürzer." },
        { symbol: "schild", name: "Allianz", text: "Bis zu zehn Mitglieder mit Rang, Wappen, Rechten, gemeinsamen Ausbaupfaden und gewählten Klassen- und Schulsprechern." },
        { symbol: "pokal", name: "Woche und Turnier", text: "Drei Wochenprojekte zur Wahl, eine Tages-Herausforderung mit einer Runde alle drei Stunden und am Wochenende ein Turnier in sechs Stufen mit einem Turnierspiel jede halbe Stunde." },
        { symbol: "ebenen", name: "Allianzmauer", text: "Jedes Mitglied setzt Steine für die Sport- und Wissensstärke der Allianz; jede Mauerstufe bringt eine Mauer-Truhe." },
        { symbol: "schloss", name: "Verschlüsselt", text: "Allianz-Nachrichten reisen verschlüsselt; wer geht, bekommt den neuen Schlüssel nicht." }
      ] }
    ],
    schritte: [
      { titel: "Spielstand anlegen", text: "Namen eingeben und auf Level 1 starten — bis zu drei Spielstände passen auf ein Gerät." },
      { titel: "Plätze belegen", text: "Fächer und Alltag starten. Die Zeit läuft, auch wenn das Handy in der Tasche steckt." },
      { titel: "Abholen und aufsteigen", text: "Fertiges abholen, eine der drei Kisten wählen und das nächste Level freischalten." }
    ],
    neu: { version: "4.18.0", datum: "04.10.2026", punkte: [
      "Schule: Werdegang und Alltag stehen ganz oben, die Laufbahn zeigt eine kurze Übersicht",
      "Markt: Inventar und Serien stehen direkt unter der Schmiede",
      "Diamanten-Shop: jede Truhe einmal, ohne Stufen, nach Seltenheit sortiert — der Inhalt richtet sich nach deinem Level",
      "Tonarten von günstig nach teuer, vor dem Kauf anhörbar",
      "Allianz: acht weitere Mitgliedsfarben, Turnierspiel jede halbe Stunde, neu gestaltete Mauer-Seite"
    ] },
    fragen: [
      { frage: "Kostet Campus Clash etwas?", antwort: "Gespielt wird kostenlos. Ein Premium mit doppelten Plätzen, Direktnachrichten unter Freunden und weiteren App-Symbolen ist vorbereitet, aber noch nicht käuflich. Auch die Diamanten-Pakete im Shop sind noch nicht zu haben — Diamanten gibt es nur im Spiel." },
      { frage: "Ist das Pay-to-Win?", antwort: "Nein. Premium kauft Tempo und Komfort, nie Werte, die ein Gratis-Spieler nicht auch erreichen kann." },
      { frage: "Brauche ich Internet oder ein Konto?", antwort: "Ein Konto gibt es nicht. Das ganze Einzelspiel läuft offline; Netz brauchen nur Freunde, Allianz und Direktnachrichten — ohne eigenen Server — sowie die Suche nach einer neuen Fassung in den Einstellungen." },
      { frage: "Ist das ein Lernspiel?", antwort: "Nein. „Mathe Level 12“ ist ein Spielwert, keine Schulnote — es werden keine echten Aufgaben gestellt." },
      { frage: "Wann kommt die App in die Stores?", antwort: "Campus Clash ist spielbar gebaut und wird geprüft; ein Store-Eintrag steht noch aus. Bis dahin kann sich am Umfang noch einiges ändern." }
    ],
    abschluss: { titel: "Deine Schulzeit läuft weiter.", text: "Auch wenn du das Handy weglegst.", stand: "In Arbeit — noch in keinem Store und nichts zu kaufen." }
  },
  en: {
    fakten: ["Built for Android and iOS", "No account", "Single player offline"],
    blickSatz: "An endless progression game: from pupil to university or apprenticeship to your own company — in real time.",
    vorteile: [
      { symbol: "uhr", titel: "Real time", text: "Studying, jobs and supplies keep running on the clock, even when the app is closed." },
      { symbol: "hoch", titel: "No ceiling", text: "Levels, tiers and points are endless — every stage takes longer than the one before." },
      { symbol: "gruppe", titel: "Stronger together", text: "Friends by code, duels through mini games, alliances of up to ten members, a weekly project, a wall and a weekend tournament." },
      { symbol: "schild", titel: "Fair and private", text: "No account, no own server, no pay-to-win: Premium buys comfort, never stats." }
    ],
    galerie: { text: "Four screenshots from version 4.13.0 in dark mode, taken from a fresh save with sample values. School and market have been rearranged since.", bilder: [
      { titel: "The start", text: "Level, diamonds, health, energy and money on top; below them tasks and the subjects that are running." },
      { titel: "The study plan", text: "Every subject shows its duration, level and time left; three career slots run together." },
      { titel: "Market and gear", text: "Seven offers a day; what you buy shows up under “What you wear” and raises your strength." },
      { titel: "The forge", text: "Upgrade items with diamonds one rarity higher, up to mythic." }
    ] },
    erlebnis: { titel: "The clock keeps running", kurz: "Live", text: "Every training has a fixed end time. The next time you open the app, the game settles the time that has passed." },
    funktionen: [
      { gruppe: "Career", symbol: "hut", liste: [
        { symbol: "buch", name: "Learn subjects", text: "Eight starting subjects, each feeding one of eight skills — four knowledge, four sport." },
        { symbol: "hut", name: "University or apprenticeship", text: "From level 20 it continues, followed by a main job and your own company." },
        { symbol: "ebenen", name: "Slots per area", text: "Your career has three slots that run at the same time, daily life one with up to three runs in a row." },
        { symbol: "ziel", name: "Specialisation", text: "Commit to one path to unlock elite clubs, elite side jobs or elite jobs." },
        { symbol: "stern", name: "New school year", text: "From level 80 a new school year begins, then the observatory opens." }
      ] },
      { gruppe: "Daily life and market", symbol: "muenze", liste: [
        { symbol: "muenze", name: "Daily life", text: "Clubs, side jobs, assignments and jobs earn money — each area with its own page." },
        { symbol: "stapel", name: "Market, vehicles and series", text: "Seven pieces of clothing on offer every day, vehicles from a Bobby Car to a private jet from level 10; a fully inserted series permanently gives half of its bonuses." },
        { symbol: "werkzeug", name: "Forge", text: "Upgrade items with diamonds one rarity higher, up to mythic; two pieces of the same kind can also be combined into a rarer one without diamonds." },
        { symbol: "geschenk", name: "Crates and chests", text: "Every level-up brings three hidden crates: money, diamonds or a 24-hour boost. Chests come from achievements, wins and tasks." },
        { symbol: "spiel", name: "Six mini games", text: "Coin toss, red or black, rock-paper-scissors, four in a row, pairs and tic-tac-toe — for diamonds." },
        { symbol: "stern", name: "Diamond shop", text: "For diamonds you have earned: all chests and crates, sound sets to listen to first, and a tutor or helper as an extra slot for seven days." }
      ] },
      { gruppe: "Duel and fight", symbol: "duell", liste: [
        { symbol: "duell", name: "Turn-based fight", text: "100 hit points per side; strength works through the chance to hit." },
        { symbol: "person", name: "Classmates", text: "Befriend or challenge classmates — the opponent picker shows their strength." },
        { symbol: "gruppe", name: "Friend bots", text: "Train your own bots, challenge them every six hours — a mini game decides — and use them as helpers." },
        { symbol: "spiel", name: "Friend duel", text: "Challenge friends to three rounds of a mini game, up to five challenges a day; the winner gets a duel chest." },
        { symbol: "pokal", name: "Tasks and achievements", text: "Weekly and monthly tasks plus achievements, rewarded with crates and chests." },
        { symbol: "kalender", name: "Daily events", text: "About every third day an event changes the game for one day." }
      ] },
      { gruppe: "Friends and alliance", symbol: "gruppe", liste: [
        { symbol: "teilen", name: "Friend code", text: "Friends connect by code or QR code — no account and no own server." },
        { symbol: "hoch", name: "Mentor bonus", text: "Five levels apart, mentor and mentee both train ten per cent faster." },
        { symbol: "schild", name: "Alliance", text: "Up to ten members with rank, crest, permissions, shared upgrade paths and elected class and school representatives." },
        { symbol: "pokal", name: "Week and tournament", text: "Three weekly projects to choose from, a daily challenge with a round every three hours and a weekend tournament in six stages with a tournament game every half hour." },
        { symbol: "ebenen", name: "Alliance wall", text: "Every member lays bricks for the alliance’s sport and knowledge strength; each wall stage brings a wall chest." },
        { symbol: "schloss", name: "Encrypted", text: "Alliance messages travel encrypted; whoever leaves does not get the new key." }
      ] }
    ],
    schritte: [
      { titel: "Create a save", text: "Enter a name and start at level 1 — up to three saves fit on one device." },
      { titel: "Fill your slots", text: "Start subjects and daily life. Time keeps running while the phone is in your pocket." },
      { titel: "Collect and level up", text: "Collect what is done, pick one of three crates and unlock the next level." }
    ],
    neu: { version: "4.18.0", datum: "4 Oct 2026", punkte: [
      "School: your career and everyday life sit at the top, the career card shows a short overview",
      "Market: inventory and series sit right below the forge",
      "Diamond shop: every chest once, without tiers, sorted by rarity — the contents follow your level",
      "Sound sets from cheap to expensive, playable before buying",
      "Alliance: eight more member colours, tournament game every half hour, redesigned wall page"
    ] },
    fragen: [
      { frage: "Does Campus Clash cost anything?", antwort: "Playing is free. A Premium with doubled slots, direct messages between friends and extra app icons is prepared but cannot be bought yet. The diamond packs in the shop are not available yet either — diamonds only come from playing." },
      { frage: "Is it pay-to-win?", antwort: "No. Premium buys speed and comfort, never stats a free player could not reach as well." },
      { frage: "Do I need internet or an account?", antwort: "There is no account. The whole single-player game runs offline; only friends, alliance and direct messages need a connection — without an own server — plus the search for a new version in the settings." },
      { frage: "Is it a learning game?", antwort: "No. “Maths level 12” is a game value, not a school grade — no real exercises are set." },
      { frage: "When will it be in the stores?", antwort: "Campus Clash is playable and being tested; a store listing is still to come. Until then the scope may still change." }
    ],
    abschluss: { titel: "Your school days keep going.", text: "Even when you put your phone down.", stand: "In progress — not in any store yet and nothing to buy." }
  }
};
