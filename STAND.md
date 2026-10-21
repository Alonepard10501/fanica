---
name: stand-entwickler-website
description: "Die eine Stand-Datei für die Entwickler-Website: aktueller Stand, geltende Regeln der Seite, echte offene Punkte."
tags: [projekt, webseite, stand]
stand: 2026-10-21
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
| Git | `origin/main` = Canvas-Schriftzug, grünes Strahlen bis zu den Logos (19.10.2026, Falk: „pushen, dass es wirklich sichtbar ist“), live nachgemessen — Push nur auf Falks Wort |
| Produkte | zwölf Kapitel: FaNiCa Fun 01 · Instinct Scoring 02 · NeonPunkt 03 · SetUpLeiste 04 · Campus Clash 05 · YourFilm 06 · ZeitAnker 07 · Instinct Familie 08 · Tankspur 09 · ScheinBar 10 · AblesBar 11 · PROJECT EMPIRE 12 (PC-Spiel, seit 21.10.2026) |
| Store-Wege (`BEZUG` in `inhalte.js`) | FaNiCa Play + Apple `live` · Instinct Apple `live`, Play `test` · NeonPunkt Play `test`, Apple `spaeter` (ruht nach Ablehnung) · SetUpLeiste GitHub-Release 1.0.0 |
| Store-Gegenprobe 21.10.2026 | FaNiCa Play 1.209.0 (18.10.2026), Apple 1.210.0 (20.10.2026) · Instinct Apple 1.0.1, Play 404 · NeonPunkt Play 404, Apple-Lookup `resultCount 0` · SetUpLeiste-Download 206 auf Teilabruf, einziges Release `setupleiste-v1.0.0` |
| „Neu in der App“ (`daten/<app>.js`) | FaNiCa 1.210.0 (App Store; Play hat 1.209.0 — nach dem Play-Update den Zusatz „(App Store)“ und den funktionenSatz in daten/fanica.js anpassen) · Campus Clash 4.18.0 · ScheinBar 1.0.19 · YourFilm 2.8.0 · AblesBar 1.4.0 · Instinct 1.0.1 — `aufbau.js` zeigt höchstens fünf Punkte, DE und EN |
| Stand je Produkt | erhältlich: FaNiCa Fun, Instinct Scoring, SetUpLeiste · im Test (nicht in den Stores): NeonPunkt (Play-Test), YourFilm, ZeitAnker, Tankspur, ScheinBar, AblesBar · in Arbeit: Campus Clash, Instinct Familie, PROJECT EMPIRE — steht als `data-stufe` an jeder Produktkarte in `index.html` |

## So arbeitet die Seite heute (nicht brechen)

**Inhalt und Aufbau**
- Alle Texte DE + EN stehen in `texte.js` — nur dort Inhalte ändern, neuer Text immer in
  beiden Sprachblöcken.
- Startseite seit 01.10.2026: Hero mit Karussell → „Die Produkte“ (zwölf Karten im Raster,
  Filter Alle/Erhältlich/Im Test/In Arbeit, Verteilungsbalken) → Vergleich → Über mich →
  Fragen → Kontakt. Je Karte: Nummer, Stand, Symbol, Name, Kernsatz, Bezugswege aus `BEZUG`,
  Knopf mit Falks Hover-Effekt. Alles Ausführliche steht auf der Unterseite je Produkt.
  Kapitelreihenfolge ist fest; die Karten tragen die alten Anker (`#fanica` …).
- Neue Startseiten-Teile liegen in `start.css`/`start.js`, nicht in `style.css`/`app.js`.
- Kopf der Startseite: Logos, darunter der Neon-Schriftzug „STUDIO“ als reines CSS
  (`.studio-neon` in `start.css`, einmaliges Einschalt-Flackern, bei reduzierter Bewegung
  aus) mit „Ein-Mann-Medienstudio · Nordfriesland“ als Unterzeile — beides zusammen ist
  die H1. Seit 19.10.2026 mit dem Knopf-Effekt aus dem Grow-Intro (`_TitelPille`): hohle
  dunkle Buchstaben, Schein in Neon-Grün (Falk 19.10.2026), beim Laden läuft je Buchstabe ein Licht (um .2 s
  versetzt, S zuerst) zwei Runden um die Umrandung und bleibt dann als Verlaufsrand Rot→Cyan
  stehen — von Falk abgenommen, nicht verändern. Gezeichnet in `studio.js` auf ein
  `<canvas class="studio-neon">` (seit 21.10.2026 auf Falks Wunsch fast über die ganze Breite mit engen Buchstaben: 1600×1000 logisch, Grundlinie 600, Schriftgröße per `measureText` so, dass das Wort 864 von 1600 Einheiten füllt, Abstand 2,5 % der Schriftgröße — 1300 px breit bei 1440, 356 px bei 390; Strahlen-Radius fest 470 und Schatten-Weichzeichnung NICHT mit der Schrift wachsen lassen, sonst flutet das Grün am Desktop den ganzen Kopf; Logos per `z-index: 2` über dem Schein; DPR-skaliert; die Fläche ragt per negativem Rand über Wort und Kennung hinaus, damit das Strahlen bis zu den Logos reicht — Radialverlauf so bemessen, dass er innerhalb der Fläche auf null ausläuft, sonst gibt es eine Kante): Schein einmal in eine
  Nebenfläche (sechs Schatten-Lagen, auf Falks Wunsch kräftig; `shadowBlur` und `shadowOffsetX` mit
  `dpr` multiplizieren — Canvas-Schatten folgen der Transformation nicht, sonst fehlt der Schein auf
  dem Handy), je Bild Rand per `strokeText` mit Verlauf, Lauflicht per
  `createConicGradient` je Buchstabe, Deckfüllung `#110D18` obenauf; Zeitplan .2 s Einblenden,
  Lauf ab 1,1 s, Rand ab 3,2 s, Ende 4,2 s; bei reduzierter Bewegung nur das Endbild.
  Grund für Canvas: Samsung Internet dunkelt Seiten trotz `color-scheme: dark` nach — die
  CSS-Fassung (dunkle Deckschrift, weiße Lichtsegmente) wurde dabei weiß bzw. unsichtbar;
  eine Bildfläche färbt der Browser nicht um. `start.css` und `studio.js` mit Versionszusatz
  (`?v=…`) laden und bei jeder Änderung hochzählen (GitHub Pages hält Dateien zehn Minuten).
  Verworfen: Magenta mit Spiegelung (`0ad4574`), SVG-Umweg (`7ba0e4b`), reine CSS-Schichten
  (`3d3cc90`, `aa4027e`). Kein Knopf und kein Satz im Kopf; der Leitsatz steht als Abschluss unter dem
  Produktraster (`start.leitsatz`). Karussell bei 1366×768 ab 366 px.
- Produktseiten (alle zwölf) auf einem Gerüst: Kopfkarte (`produkt.css`, `wege.js`) und darunter
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
- Vergleichstabelle „Welche App ist für dich?“ führt elf Produkte (`app-1` … `app-11`, PROJECT EMPIRE ist `app-11`) in voller Länge; die
  Instinct Familie steht bewusst nicht drin (keine einzelne App). Farbe und Breite hängen an
  der Spaltennummer `app-N`, nicht am Namen.
- Ein neues Produkt braucht die volle Checkliste im Skill.
  → [[neue-app-auf-webseite-braucht-sechs-stellen]]
- HTML ohne Kommentare.
- `texte.js` enthält nur Schlüssel, die eine Seite wirklich abruft (am 01.10.2026 per
  Laufzeitmessung über alle Seiten DE + EN von 682 auf 267 gekürzt). Ein neuer Schlüssel
  braucht immer einen Abruf (`data-t`, `T("…")`), sonst ist er tot.
- Die Zapfsäule auf `tankspur.html` (`TANKUNGEN` in `app.js`) zeigt erfundene Beispieldaten —
  nie Daten aus Falks Tankbuch, die sind privat.
- `einladung.html` heißt „Motorsport-Tipprunde“ — „F1“ ist keine Produktbezeichnung.
- Karussell: Finger laufen nur über `touchstart`/`touchend`, Maus und Stift über Pointer-Ereignisse
  (`pointerType "touch"` wird dort übergangen) — sonst dreht ein Wisch zwei Karten. Ein Maus-Zug
  über 40 px schluckt den folgenden Klick, damit keine Produktseite aufgeht.
- Sprachwahl: `localStorage` (`fanica_sprache`); ist der Speicher gesperrt, hält `window.name`
  die Wahl für den offenen Tab.

**Bezugswege**
- Alle Store- und App-Adressen stehen an EINER Stelle: `const BEZUG` in `inhalte.js`. Ein Weg
  wird erst bei `"live"` zum Link; vor dem Umstellen die Store-Adresse per `curl` bzw.
  iTunes-Lookup prüfen.
- Keine Browser-Fassung wird mehr verlinkt; die alten Web-Fassungen liegen nur unverlinkt
  online. → [[browser-fassungen-nicht-mehr-verlinken]]

**Zahlen und Aussagen**
- Tipprunden-Zahlen kommen aus `runde.js`, erzeugt von `_werkzeuge_runde_bauen.py` mit
  `ANONYM = False` (echte Profilnamen — Falks Entscheidung). `live.js` legt nächstes Rennen und
  Countdown aus Jolpica obendrauf; ohne Netz bleibt die Kachel unsichtbar. Der Satz über dem Block
  nennt sich „Momentaufnahme“ und setzt Rennen, Ort und Monat aus `runde.js` ein (`stand`, `zuletzt`).
- Instinct Scoring sichert nur Runden, Schützen und Parcours (`backup_actions.dart`) — die Seite
  verspricht keine vollständige Sicherung, bis die App mehr mitnimmt.
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
- Die Instinct-Seite ist ein eigenes Repo (`Projekte\Web\Instinct-Website\`) mit
  eigenen Kopien von CSS, JS und Bildern — Instinct-Änderungen betreffen oft beide.

- Campus Clash wird nicht verlinkt — die GitHub-Fassung ist privat (Falk 01.10.2026).

- PROJECT EMPIRE (`project-empire.html`, `daten/empire.js`, Erlebnis `epochenlauf.js`/`.css`, Farbe
  Gold `#FFDE26`/`#E6C80B`, Knopf `b-heat`): kurz und knapp, KEIN anderes Spiel und keine Spielmarke
  nennen (Falk 21.10.2026, rechtlich) → [[project-empire-oeffentlich-kurz-und-ohne-fremde-spiele]].
  Stand „In Arbeit“, kein Download, kein Preis. Bilder nur echte Spielaufnahmen ohne private Daten
  (die Internet-Lobby-Aufnahme zeigt Falks IP-Adresse und bleibt draußen). Fakten aus den
  Spieldaten (`Content\Empire\Data`, `Core\data`), nie aus der Planung.

- App-Name „AblesBar“ (Falks Entscheidung 01.10.2026); Datei `ablesbar.html`; `ablesebar.html` ist nur noch eine Weiterleitung für alte Links.

## Bekannt und bewusst belassen
- Karussell auf dem Handy: seit 01.10.2026 ohne Überlappung (eigener Radius in `start.css`, Winkel aus `--karten`, das setzt `app.js`); die hinteren Karten sind gedimmt, die vordere leuchtet.
- Zwei Instinct-Screenshots sind schon in Falks Originalaufnahme rechts angeschnitten; nur
  per Neuaufnahme zu beheben, kein Blocker.

## Offen
1. **Store-Wege freischalten**, sobald Instinct Play bzw. NeonPunkt (Play und Apple) live sind:
   `standAndroid`/`standApple` in `inhalte.js`, vorher die Adresse prüfen. Gegenprobe
   01.10.2026 nachmittags: Instinct Play 404, NeonPunkt Play 404, NeonPunkt Apple-Lookup
   `resultCount 0` — bleibt `test`/`spaeter`.
2. **Toter Code in `inhalte.js`:** die alten Bausteine (Funktionsblöcke, Umfang-Schleife,
   Bögen, Spine-Rechner, Trophäen, Bezugsleiste mit QR …) greifen auf Container, die es auf
   keiner Seite mehr gibt; ihre Texte sind aus `texte.js` entfernt. Beim nächsten Umbau
   mitentfernen.
3. **Galerien mit älterer Fassung** (die Galerie-Texte sagen das): Campus Clash zeigt 4.13.0
   (Schule und Markt seit 4.16/4.18 neu geordnet), ScheinBar 1.0.16 (Schein-Detail vor 1.0.17) und
   eine Statistik aus einer früheren Testfassung, FaNiCa 1.200.0, PROJECT EMPIRE die Testfassung vom
   11.10.2026. Neue Dunkelmodus-Aufnahmen brauchen Falks Gerät bzw. das laufende Spiel.
4. **Zahlwort „Zwölf Produkte“** steht in `start.produkteTitel` und an weiteren Stellen (DE + EN) —
   beim nächsten Produkt mit dem Suchlauf aus dem Skill mitziehen.
5. **Grow All-In-One** (1.2.1+4, GitHub-Release seit 07.09.2026) und **AI-Instinct** (frühe Bauphase)
   stehen nicht auf der Seite — ob Grow dazukommt, entscheidet Falk; bis dahin nichts anlegen.
6. **Tipprunden-Quelle veraltet:** `daten.json` der FaNiCa-Webversion endet nach Rennen 9
   (Silverstone, Juli 2026), ebenso `rundendaten.json` der App. Neue Zahlen erst, wenn eine
   aktuelle Quelle vorliegt; dann `_werkzeuge_runde_bauen.py` laufen lassen.

**Wissen:** Skill `entwickler-website` · [[statische-website-bauen-und-veroeffentlichen]]
