/* ============================================================
   runde.js — Zahlen aus Falks LAUFENDER Tipprunde
   ------------------------------------------------------------
   Erzeugt aus der echten App-Datenlage (daten.json der Webversion),
   Stand: nach 9 von 22 Rennen der Saison 2026.

   NICHTS ist geschaetzt — jede Zahl ist aus den echten Tipps
   gerechnet. Es stehen nur Spieler-VORNAMEN darin, wie in jeder
   Sport-Tabelle; keine Nachnamen, Mails, Orte oder Beitrittscodes.

   Aktualisieren: Skript `runde_bauen.py` erneut laufen lassen,
   sobald daten.json neuer ist.
   ============================================================ */
window.RUNDE = {
  "saison": 2026,
  "gefahren": 9,
  "rennenGesamt": 22,
  "spieler": 10,
  "jahre": 5,
  "seit": 2022,
  "gesamtTipps": 3419,
  "tabelle": [
    {
      "platz": 1,
      "name": "Sebastian",
      "punkte": 61,
      "exakt": 14,
      "dabei": 19,
      "quote": 31,
      "farbe": "#DC3939",
      "bestes": 12,
      "bestesOrt": "Spielberg"
    },
    {
      "platz": 2,
      "name": "Fabienne",
      "punkte": 60,
      "exakt": 14,
      "dabei": 18,
      "quote": 31,
      "farbe": "#00FF00",
      "bestes": 10,
      "bestesOrt": "Shanghai"
    },
    {
      "platz": 3,
      "name": "Quali",
      "punkte": 59,
      "exakt": 13,
      "dabei": 20,
      "quote": 29,
      "farbe": "#548235",
      "bestes": 12,
      "bestesOrt": "Shanghai"
    },
    {
      "platz": 4,
      "name": "Flo",
      "punkte": 57,
      "exakt": 13,
      "dabei": 18,
      "quote": 29,
      "farbe": "#00FFFF",
      "bestes": 8,
      "bestesOrt": "Shanghai"
    },
    {
      "platz": 5,
      "name": "Fionn",
      "punkte": 56,
      "exakt": 13,
      "dabei": 17,
      "quote": 32,
      "farbe": "#F98E1D",
      "bestes": 9,
      "bestesOrt": "Melbourne"
    },
    {
      "platz": 6,
      "name": "Torsten",
      "punkte": 56,
      "exakt": 12,
      "dabei": 20,
      "quote": 27,
      "farbe": "#BF9000",
      "bestes": 9,
      "bestesOrt": "Melbourne"
    },
    {
      "platz": 7,
      "name": "Lars",
      "punkte": 55,
      "exakt": 13,
      "dabei": 16,
      "quote": 32,
      "farbe": "#0000FF",
      "bestes": 9,
      "bestesOrt": "Melbourne"
    },
    {
      "platz": 8,
      "name": "Patrick",
      "punkte": 46,
      "exakt": 7,
      "dabei": 25,
      "quote": 17,
      "farbe": "#00808E",
      "bestes": 9,
      "bestesOrt": "Suzuka"
    },
    {
      "platz": 9,
      "name": "Falk",
      "punkte": 42,
      "exakt": 6,
      "dabei": 24,
      "quote": 13,
      "farbe": "#C30584",
      "bestes": 8,
      "bestesOrt": "Barcelona"
    },
    {
      "platz": 10,
      "name": "Timo",
      "punkte": 36,
      "exakt": 6,
      "dabei": 18,
      "quote": 15,
      "farbe": "#FDE100",
      "bestes": 9,
      "bestesOrt": "Melbourne"
    }
  ],
  "bilanz": {
    "getippt": 435,
    "exakt": 111,
    "dabei": 195,
    "daneben": 129,
    "exaktProzent": 26,
    "dabeiProzent": 45,
    "danebenProzent": 30,
    "reihen": 90,
    "vollTreffer": 0
  },
  "sieger": [
    {
      "saison": 2026,
      "name": "Sebastian",
      "punkte": 61
    },
    {
      "saison": 2025,
      "name": "Lars",
      "punkte": 187
    },
    {
      "saison": 2024,
      "name": "Falk",
      "punkte": 163
    },
    {
      "saison": 2023,
      "name": "Torsten",
      "punkte": 115
    },
    {
      "saison": 2022,
      "name": "Falk",
      "punkte": 46
    }
  ],
  "strecken": [
    {
      "stadt": "Melbourne",
      "punkte": 82
    },
    {
      "stadt": "Suzuka",
      "punkte": 78
    },
    {
      "stadt": "Shanghai",
      "punkte": 70
    },
    {
      "stadt": "Barcelona",
      "punkte": 63
    },
    {
      "stadt": "Spielberg",
      "punkte": 63
    },
    {
      "stadt": "Miami",
      "punkte": 59
    },
    {
      "stadt": "Silverstone",
      "punkte": 50
    },
    {
      "stadt": "Monaco",
      "punkte": 40
    },
    {
      "stadt": "Montreal",
      "punkte": 23
    }
  ],
  "verlauf": [
    {
      "name": "Sebastian",
      "farbe": "#DC3939",
      "staende": [
        10,
        16,
        25,
        29,
        31,
        35,
        41,
        53,
        61
      ]
    },
    {
      "name": "Fabienne",
      "farbe": "#00FF00",
      "staende": [
        9,
        19,
        28,
        34,
        38,
        42,
        48,
        56,
        60
      ]
    },
    {
      "name": "Quali",
      "farbe": "#548235",
      "staende": [
        7,
        19,
        28,
        34,
        36,
        41,
        45,
        51,
        59
      ]
    }
  ],
  "orte": [
    "Melbourne",
    "Shanghai",
    "Suzuka",
    "Miami",
    "Montreal",
    "Monaco",
    "Barcelona",
    "Spielberg",
    "Silverstone"
  ],
  "abstand": 1,
  "spanne": 25
};
