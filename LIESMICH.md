# FaNiCa — Entwickler-Website

## 🌐 Die Seite ist online

**https://alonepard10501.github.io/fanica/**

Deine Seite als Entwickler: Wer du bist, was du gebaut hast, wo man es bekommt.
Drei Kapitel — Instinct Scoring, FaNiCa Fun, NeonPunkt — plus „Über mich" und
Kontakt. Vollständig auf Deutsch und Englisch (Knopf oben rechts).

---

## Etwas ändern und neu veröffentlichen

Der Webseiten-Ordner ist gleichzeitig das Git-Repository. Nach einer Änderung:

```bash
cd "C:\Users\falkc\Desktop\KI-Studio\Obsidian Vault\Projekte\Webseiten Online\Webseite"
git add -A
git commit -m "Was du geändert hast"
git push
```

Nach etwa einer Minute ist es live. Der Ordner `_nicht-verwendet/` wird dabei
automatisch ausgelassen.

---

## Was wo steht

| Datei | Inhalt |
|---|---|
| `index.html` | Die Startseite (Gerüst) |
| **`texte.js`** | **ALLE Texte an einer Stelle** — hier änderst du Inhalte |
| `inhalte.js` | Baut Karten und Listen aus `texte.js` |
| `app.js` | Verhalten: Kapitelfarben, Zeitraffer, Spiel, Zielscheibe, QR-Codes |
| `style.css` | Aussehen |
| `impressum.html` · `datenschutz.html` · `bildquellen.html` | Rechtsseiten |
| `bilder/` | Screenshots und Logos, je in normaler und doppelter Auflösung |
| `_nicht-verwendet/` | Beiseite gelegte Dateien — nichts gelöscht, siehe LIESMICH dort |

### Texte ändern

Alles Sichtbare steht in **`texte.js`**. Beispiel — Preis bei NeonPunkt:

```js
preis: "Die ersten 500 Klicks sind frei. Danach ..."
```

Ändern, speichern, Seite neu laden. Kein Build, kein Werkzeug nötig.

---

## Ansehen

Doppelklick auf `index.html` reicht **nicht** ganz — die Seite lädt Dateien nach.
Besser ein kleiner lokaler Server:

```bash
python -m http.server 8899 --directory "C:\Users\falkc\Desktop\KI-Studio\Obsidian Vault\Projekte\Webseiten Online\Webseite"
```

Dann im Browser: `http://127.0.0.1:8899`

---

## Veröffentlichen (GitHub Pages)

Der ganze Ordner ist fertig zum Hochladen — es gibt nichts zu bauen.

1. Neues Repository anlegen, z. B. `fanica`
2. Alle Dateien hineinlegen (ohne `_nicht-verwendet/`, das ist nur Ablage)
3. In den Repository-Einstellungen: *Pages* → Branch `main`, Ordner `/ (root)`
4. Die Seite liegt dann unter `https://alonepard10501.github.io/fanica/`

Die Datei `.nojekyll` liegt schon dabei — ohne sie ignoriert GitHub Ordner mit
Unterstrich. In `robots.txt` und `sitemap.xml` steht diese Adresse bereits drin;
falls du eine andere wählst, dort anpassen.

---

## Was die Seite kann

- **Dunkelmodus durchgehend.** Jedes Kapitel hat seine eigene Farbe: Rot für den
  Einstieg und FaNiCa Fun, Oliv/Waldgrün für Instinct Scoring, Neongrün für NeonPunkt.
- **Holografischer Hintergrund.** Schimmernde Farbbänder, feine Beugungsstreifen, ein
  wandernder Lichtreflex und ein kaum sichtbares Gitternetz — alles mit CSS erzeugt,
  keine einzige Bilddatei. Färbt sich je Kapitel passend mit.
- **Zeitraffer bei NeonPunkt.** „48 Stunden in zwölf Sekunden": Der Punkt wächst
  sichtbar, die Uhr läuft mit, der Balken füllt sich. Antippen setzt ihn zurück.
- **Funktionsumfang je App.** Was die App wirklich kann, in Zahlen und Listen —
  alles aus dem Quellcode gezählt, nichts geschätzt.
- **Auf einen Blick.** Vergleichstabelle der drei Apps plus acht häufige Fragen
  zum Aufklappen.
- **Erklärt statt aufgezählt:** Bogenarten mit gezeichneten Bögen, Spine-Rechner,
  Zielscheibe zum Anklicken (zeigt die Punkte in fünf Wertungssystemen), die fünf
  FaNiCa-Trophäen mit ihren echten Bedingungen, alle 16 NeonPunkt-Farben.
- **Ein echtes kleines Spiel:** Der NeonPunkt im dritten Kapitel funktioniert
  wirklich — antippen, er wächst, wechselt die Farbe, zählt mit.
- **QR-Codes** zu den Web-Fassungen, im Browser selbst erzeugt (kein fremder Dienst).
- **Zweisprachig vorbereitet, aber noch nicht freigeschaltet:** Die ganze Technik
  steht — der englische Block in `texte.js` ist aber erst zu 7 % gefüllt (15 von 227
  Textstellen). Deshalb ist der EN-Knopf oben rechts derzeit **ausgeblendet**
  (`hidden` im `index.html`). Sobald der `en:`-Block in `texte.js` vollständig ist,
  einfach das `hidden` entfernen — mehr ist nicht nötig.
- **Nichts von fremden Servern:** keine Cookies, keine Schriften, keine Skripte,
  kein Tracking. Deshalb braucht die Seite auch kein Zustimmungsbanner.
- **Scharf auf großen Bildschirmen:** Alle Screenshots liegen zusätzlich in
  doppelter Auflösung vor; ab 1900 px wächst die ganze Seite mit.

---

## Wenn du später bessere Screenshots hast

Drei Instinct-Funktionen (Parcours, Ausrüstung, Statistik) zeigen derzeit **kein**
Bild, sondern eine Erklärkarte. Grund: Die vorhandenen Screenshots zeigen nur den
leeren Zustand („Noch keine Bögen."). Das lässt die App ärmer aussehen, als sie ist.

Nimmst du irgendwann Screenshots mit echtem Inhalt auf — ein paar Runden geschossen,
Bögen angelegt, ein Parcours eingetragen —, dann in `texte.js` beim jeweiligen Block
statt `bild: null` wieder den Pfad eintragen:

```js
bild: "bilder/instinct/statistik.webp",
alt: "Instinct Scoring: Statistik mit Punkteschnitt und Verlauf"
```

Dasselbe gilt für den FaNiCa-Chat (`_nicht-verwendet/chat.webp`).

---

## Woher die Zahlen stammen

Alle Angaben sind aus dem Quellcode der Apps gelesen, nicht geschätzt:

- Wertungssysteme und Punkte → `builtin_scoring_systems.dart`
- Premium-Stufen und Preise → `upgrade_page.dart`, `premium_service.dart`
- Spine-Rechner → `spine_calculator.dart`
- FaNiCa-Trophäen und Punkteregeln → `Rechner.js`, `Daten.js`
- Rennkalender (22 Rennen, 6 mit Sprint) → `Daten.js`
- NeonPunkt (48 Stunden, 16 Farben, 500 Freiklicks) → `Parameter.kt`, `Spiel.kt`

**Ändert sich etwas in einer App, muss es hier nachgezogen werden.** Die Stellen
sind in `texte.js` mit Kommentaren markiert.
