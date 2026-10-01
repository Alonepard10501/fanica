# FaNiCa — Entwickler-Website

## 🌐 Die Seite ist online

**https://alonepard10501.github.io/fanica/**

Deine Seite als Entwickler: Wer du bist, was du gebaut hast, wo man es bekommt.
Elf Produkte — Startseite mit Karussell und Produktkarten, je Produkt eine eigene
Unterseite — plus Vergleich, „Über mich" und Kontakt. Vollständig auf Deutsch und
Englisch (Knopf oben rechts).

---

## Etwas ändern und neu veröffentlichen

Der Webseiten-Ordner ist gleichzeitig das Git-Repository. Nach einer Änderung:

```bash
cd "C:\Users\Falk\Desktop\KI-Workflow\Projekte\Web\Webseiten\Webseite"
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
| `start.css` · `start.js` | Nur die Startseite: Produktkarten, Filter nach Stand, Verteilungsbalken |
| `produkt.css` · `produkt.js` | Gerüst aller Produktseiten: Kopf mit Symbol, Stand und Store-Knöpfen, Abschnittsleiste, gekürzte Funktionslisten |
| `aufbau.js` · `aufbau.css` · `daten/<app>.js` | Der Inhalt jeder Produktseite: eine Vorlage, befüllt aus einer Datendatei je App (DE + EN) |
| `runde.js` | Zahlen der echten Tipprunde, erzeugt mit `python _werkzeuge_runde_bauen.py` aus `Projekte\Apps\FaNiCa Fun\Google Play Webseite und Webversion\daten.json` |
| `live.js` | Nächstes Rennen und Countdown, bei jedem Aufruf frisch aus einer öffentlichen Quelle |
| `wege.js` | Store- und Download-Knöpfe aus `BEZUG` für Startseite und Produktseiten |
| `gemeinsam.css` · `uebergang.js` | Alle Seiten: weicher Seitenwechsel (App-Symbol wandert mit) und das Menü „Die Apps“ auf den Produktseiten |
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
python -m http.server 8899 --directory "C:\Users\Falk\Desktop\KI-Workflow\Projekte\Web\Webseiten\Webseite"
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
- **Zweisprachig:** Deutsch und Englisch vollständig, umschaltbar oben rechts. Neuer
  Text braucht immer einen Eintrag in beiden Sprachblöcken (`texte.js` bzw. der
  Datendatei der App).
- **Nichts von fremden Servern:** keine Cookies, keine Schriften, keine Skripte,
  kein Tracking. Deshalb braucht die Seite auch kein Zustimmungsbanner.
- **Scharf auf großen Bildschirmen:** Alle Screenshots liegen zusätzlich in
  doppelter Auflösung vor; ab 1900 px wächst die ganze Seite mit.

---

## Wenn du neue Screenshots hast

Die Bildergalerie jeder Produktseite steht in `daten/<app>.js`. Nur echte
App-Aufnahmen im Dunkelmodus und keine leeren Zustände („Noch keine Einträge") —
eine App ohne passende Aufnahmen zeigt lieber keine Galerie.

---

## Woher die Zahlen stammen

Alle Angaben sind aus dem Quellcode der Apps gelesen, nicht geschätzt:

- Instinct: Wertungssysteme → `builtin_scoring_systems.dart`, Preise →
  `upgrade_page.dart`, `premium_service.dart`, Spine-Rechner → `spine_calculator.dart`
- FaNiCa Fun: Punkte und Trophäen → `lib/rechner.dart`, `lib/modelle.dart`, Preise →
  `lib/kasse.dart`
- NeonPunkt: `Parameter.kt`, `Spiel.kt`

**Ändert sich etwas in einer App — Preis, Version, Kennzahl —, muss es hier
nachgezogen werden**, in `texte.js` und `daten/<app>.js`, jeweils DE und EN.
