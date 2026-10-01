---
name: stand-entwickler-website
description: "Die eine Stand-Datei für die Entwickler-Website: aktueller Stand, geltende Regeln der Seite, echte offene Punkte."
tags: [projekt, webseite, stand]
stand: 2026-10-01
---

# STAND — Entwickler-Website

Hier steht nur, was heute gilt. Aufbau, Prüfweg, Veröffentlichen und alle Fallen stehen im
Skill `entwickler-website` (vor jeder Arbeit laden), die Lehren im Vault. Erledigtes wird
nicht hier gesammelt, sondern als Wissen abgelegt und von hier entfernt.
Projekt: [[entwickler-website]]

## Grundsatz
Die Seite ist online und läuft. Geändert wird nur auf Falks Auftrag. Der Ordner IST das
Git-Repo; veröffentlicht wird per `git push`, GitHub Pages baut selbst neu (~1 Minute).
Geprüft wird nur über einen echten lokalen Server, nie per Datei-URL.

## Aktueller Stand

| Wo | Stand |
|---|---|
| Adresse | https://alonepard10501.github.io/fanica/ |
| Repo | `Alonepard10501/fanica`, Zweig `main`, Pages aus der Wurzel |
| Git | `origin/main` = `2a68505`; lokal zwei Commits voraus (Stand-Datei 28.09. und Überarbeitung 01.10.2026) — Push nur auf Falks Wort |
| Produkte | elf Kapitel: FaNiCa Fun 01 · Instinct Scoring 02 · NeonPunkt 03 · SetUpLeiste 04 · Campus Clash 05 · YourFilm 06 · ZeitAnker 07 · Instinct Familie 08 · Tankspur 09 · ScheinBar 10 · AblesBar 11 |
| Store-Wege (`BEZUG` in `inhalte.js`) | FaNiCa Play + Apple `live` · Instinct Apple `live`, Play `test` · NeonPunkt Play `test`, Apple `spaeter` (ruht nach Ablehnung) · SetUpLeiste GitHub-Release 1.0.0 |
| Store-Gegenprobe 01.10.2026 | FaNiCa Play 200, Apple 1.200.0 · Instinct Apple 1.0.1, Play 404 · NeonPunkt Play 404, Apple-Lookup `resultCount 0` · SetUpLeiste-Download 200 |
| Stand je Produkt | erhältlich: FaNiCa Fun, Instinct Scoring, SetUpLeiste · im Test (nicht in den Stores): NeonPunkt (Play-Test), YourFilm, ZeitAnker, Tankspur, ScheinBar, AblesBar · in Arbeit: Campus Clash, Instinct Familie — steht als `data-stufe` an jeder Produktkarte in `index.html` |

## So arbeitet die Seite heute (nicht brechen)

**Inhalt und Aufbau**
- Alle Texte DE + EN stehen in `texte.js` — nur dort Inhalte ändern, neuer Text immer in
  beiden Sprachblöcken.
- Startseite seit 01.10.2026: Hero mit Karussell → „Die Produkte“ (elf Karten im Raster,
  Filter Alle/Erhältlich/Im Test/In Arbeit, Verteilungsbalken) → Vergleich → Über mich →
  Fragen → Kontakt. Je Karte: Nummer, Stand, Symbol, Name, Kernsatz, Bezugswege aus `BEZUG`,
  Knopf mit Falks Hover-Effekt. Alles Ausführliche steht auf der Unterseite je Produkt.
  Kapitelreihenfolge ist fest; die Karten tragen die alten Anker (`#fanica` …).
- Neue Startseiten-Teile liegen in `start.css`/`start.js`, nicht in `style.css`/`app.js`.
- Produktseiten (alle elf) auf einem Gerüst: Kopfkarte (`produkt.css`, `wege.js`) und darunter
  alles aus EINER Vorlage `aufbau.js` + `aufbau.css`, befüllt aus `daten/<app>.js` (DE + EN,
  Symbole aus `symbole.js`). Reihenfolge: Auf einen Blick → Erlebnis (der app-eigene Block, steht
  als `<section class="erlebnis">` im HTML) → So sieht es aus (Galerie im Telefonrahmen, Pfeile,
  Wischen, Tastatur, Großansicht) → Funktionen (Reiter) → So funktioniert's (3 Schritte) → Neu in
  der App → Gratis und Premium → Häufige Fragen → Abschluss-Band mit Store-Knöpfen und
  vorige/nächste App. Ein Abschnitt ohne Daten entfällt. Inhalte ändern = nur die Datendatei;
  `texte.js` trägt nur noch Kopfkarte und Erlebnis-Texte. Leiste „Auf dieser Seite“ liest
  `data-kurztext`. Alte Seiten: `_ZUM_LOESCHEN\2026-10-01-webseite\produktseiten-vor-neuaufbau\`.
- App-Symbole in `bilder/marke/app-*.webp` sind die echten Launcher-Icons (FaNiCa, Instinct,
  Campus Clash, Tankspur am 01.10.2026 aus dem iOS-AppIcon 1024 übernommen, alte Fassungen in
  `_ZUM_LOESCHEN\2026-10-01-webseite\bilder-marke-alt\`).
- Seitenwechsel per View Transitions (`gemeinsam.css`, `uebergang.js`): das App-Symbol
  wandert zwischen Karte und Produktseite; ohne Browserunterstützung normaler Wechsel,
  bei reduzierter Bewegung aus.
- Jede Unterseite hat ein eigenes Kapitel-Erlebnis im ersten Bildschirm.
  → [[kapitel-erlebnis-je-app-statt-gleicher-kopf]]
- Vergleichstabelle „Welche App ist für dich?“ führt zehn Produkte in voller Länge; die
  Instinct Familie steht bewusst nicht drin (keine einzelne App). Farbe und Breite hängen an
  der Spaltennummer `app-N`, nicht am Namen.
- Ein neues Produkt braucht die volle Checkliste im Skill.
  → [[neue-app-auf-webseite-braucht-sechs-stellen]]
- HTML ohne Kommentare.

**Bezugswege**
- Alle Store- und App-Adressen stehen an EINER Stelle: `const BEZUG` in `inhalte.js`. Ein Weg
  wird erst bei `"live"` zum Link; vor dem Umstellen die Store-Adresse per `curl` bzw.
  iTunes-Lookup prüfen.
- Keine Browser-Fassung wird mehr verlinkt; die alten Web-Fassungen liegen nur unverlinkt
  online. → [[browser-fassungen-nicht-mehr-verlinken]]

**Zahlen und Aussagen**
- Tipprunden-Zahlen kommen aus `runde.js`, erzeugt von `_werkzeuge_runde_bauen.py` mit
  `ANONYM = False` (echte Profilnamen — Falks Entscheidung). `live.js` legt nächstes Rennen und
  Countdown aus Jolpica obendrauf; ohne Netz bleibt die Kachel unsichtbar.
- Der DSB-Abschnitt auf `instinct-scoring.html` darf nur stehen, solange
  `assets/regeln/dsb-2026.json` der Instinct-App `"geprueft": true` trägt (heute: true).
- Alle Zahlen und Preise aus dem App-Code, nie geschätzt. Jede Preis-, Versions- oder
  Kennzahländerung einer App ist auch eine Website-Aufgabe.
  → [[preisaenderung-immer-auch-website-aufgabe]]
- Keine Entwickler-Kennzahlen (Testzahlen) und kein „Ehrlicher Stand“ auf der Seite.
  → [[kein-ehrlicher-stand-auf-der-website]]

**Aussehen**
- Die Entwicklerseite bleibt ruhig: keine dauerhaft animierten Vollflächen-Hintergründe —
  die gehören auf die App-eigenen Seiten.
- Falks sechs Hover-Effekte sind alle im Einsatz, nach Bedeutung zugeordnet.
- App-Aufnahmen nur echt und im Dunkelmodus. → [[app-aufnahmen-gehoeren-in-den-dunkelmodus]]
- Fürs Handy gilt Fläche × Blur als Bremse, nicht die Zahl der Animationen.
  → [[bewegte-weichzeichner-sind-die-bremse]]

**Nachbarn**
- Die Instinct-Seite ist ein eigenes Repo (`Projekte\Web\Webseiten\Webseite-Instinct\`) mit
  eigenen Kopien von CSS, JS und Bildern — Instinct-Änderungen betreffen oft beide.

- App-Name „AblesBar“ (Falks Entscheidung 01.10.2026); Datei `ablesbar.html`; `ablesebar.html` ist nur noch eine Weiterleitung für alte Links.

## Bekannt und bewusst belassen
- Karussell auf dem Handy: seit 01.10.2026 ohne Überlappung (eigener Radius in `start.css`, Winkel aus `--karten`, das setzt `app.js`); die hinteren Karten sind gedimmt, die vordere leuchtet.
- Zwei Instinct-Screenshots sind schon in Falks Originalaufnahme rechts angeschnitten; nur
  per Neuaufnahme zu beheben, kein Blocker.

## Offen
1. **Neue Fassung pushen** (Falks Wort): die Überarbeitung vom 01.10.2026 ist lokal committet.
2. **Store-Wege freischalten**, sobald Instinct Play bzw. NeonPunkt (Play und Apple) live sind:
   `standAndroid`/`standApple` in `inhalte.js`, vorher die Adresse prüfen.
3. **Bild unter „Ein-Mann-Medienstudio“** im Hero von `index.html` einbauen (Falks Auftrag aus
   Chat `d4fe0350`, Ende 21.08.2026 — welches Bild, steht nur dort; nicht umgesetzt,
   `hero.augenbraue` steht ohne Bild).
4. **Pfade in `_werkzeuge_runde_bauen.py` veraltet:** `QUELLE` zeigt auf
   `KI-Workflow\Vault\Projekte\Apps\…\daten.json`, `ZIEL` auf `KI-Workflow\Projekte\Webseiten\…`;
   beide gibt es nicht. Richtig: `Projekte\Apps\FaNiCa Fun\Google Play\5 Webseite und
   Webversion\daten.json` und `Projekte\Web\Webseiten\Webseite\runde.js`. Dieselbe falsche
   Ordnerangabe steht in `LIESMICH.md`. Vor dem nächsten Lauf berichtigen.
5. **Campus Clash:** 4.13.0 liegt seit 30.09.2026 als öffentliches GitHub-Release vor; die Seite
   nennt keinen Bezugsweg (Falks Entscheidung, ob verlinkt wird).
6. **Neue Dunkelmodus-Aufnahmen fehlen** (Galerie entfällt bis dahin): Campus Clash (alle alten
   Bilder zeigen den Stand vor 4.x), YourFilm (Reiter „Suche“ statt „Freunde“), AblesBar (Reiter
   „Zähler“ statt „Objekt“, alte Gas-Zählermiete), Instinct Familie (nur Hellmodus), NeonPunkt
   (nur gerenderte Bilder). Tankspur hat nur zwei, ScheinBar drei, FaNiCa drei aktuelle.
7. **Zapfsäule Tankspur** (`app.js`, `TANKUNGEN`) zeigt echte Tankstellennamen aus Falks Daten.
8. **Zahlwort „Elf Produkte“** steht jetzt auch in `start.produkteTitel` (DE + EN) — beim
   nächsten Produkt mitziehen.

**Wissen:** Skill `entwickler-website` · [[statische-website-bauen-und-veroeffentlichen]]
