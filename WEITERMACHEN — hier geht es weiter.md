---
description: "Entwickler-Website — Einstiegspunkt fuer den naechsten Chat: Orte, Veroeffentlichen, offene Punkte. Diese eine Datei reicht zum Wiedereinstieg."
tags: [webseite, weitermachen, wiedereinstieg]
stand: 2026-08-31
---

# WEITERMACHEN — Entwickler-Website

> **Diese eine Datei reicht zum Wiedereinstieg.** Sie wird bei jedem Auftrag
> **ueberschrieben**, nicht neu angelegt — es gibt immer nur DIESE.
> Projekt: [[Entwickler-Website]]

---

## 🔴 ZUERST
```
Skill: entwickler-website
```
Dann die Bahn `_KONTEXT\OBERKATEGORIEN\WEBSEITEN.md` (15 Fallen als Kurzliste).
**Ohne den Skill wird Gelerntes doppelt erarbeitet.**

## Wo alles liegt
| Was | Wo |
|---|---|
| Die Website (= das Git-Repo) | `Projekte\Webseiten\Webseite\` |
| Alle Texte (DE + EN) | `texte.js` — **nur hier** Inhalte ändern |
| Bausteine + **alle App-Adressen** | `inhalte.js` (`const BEZUG` ganz oben) |
| Effekte, Farben, QR, Knopf-Zeiger | `app.js` |
| Aussehen | `style.css` |
| Zahlen der Tipprunde | `runde.js` (aus `_werkzeuge_runde_bauen.py`) |
| Live-Renndaten + Countdown | `live.js` |

**Veröffentlichen:**
```bash
cd "C:\Users\Falk\Desktop\KI-Studio\Projekte\Webseiten\Webseite"
git add -A && git commit -m "Was geaendert wurde" && git push
```
GitHub Pages baut selbst neu (~1 Minute).

**Prüfen NUR über einen echten Server**, nie per Datei-URL:
```bash
python -m http.server 8899 --directory "…\Projekte\Webseiten\Webseite"
```
Danach den Server wieder beenden.

---

## Die Adressen

**Entwickler-Website:** https://alonepard10501.github.io/fanica/
Unterseiten: `/fanica-fun.html` · `/instinct-scoring.html` · `/neonpunkt.html`

Alle App- und Store-Adressen: Gedächtnis `app-adressen-und-stores` — **dort nachschlagen,
nie aus dem Repo-Baum raten.**

---

## 🔴 OFFEN

**1. Store-Wege freischalten, sobald Apple/Play durch sind.**
In `inhalte.js` `standAndroid` bzw. `standApple` auf `"live"` setzen.
**Vorher den echten Abruf prüfen**, sonst wird es ein toter Link:
```bash
curl -s -o /dev/null -w "%{http_code}\n" "https://play.google.com/store/apps/details?id=com.fanica.fun"
```
🔴 Instinct ist bei Apple zwar freigegeben, in der **EU aber 404** (Trader Status fehlt) —
siehe `apple-trader-status-eu-sperre`. Also auch dort erst messen.

**2. Zwei alte Instinct-Screenshots** wären als Neuaufnahme besser (der angeschnittene
ist beschnitten und sieht jetzt sauber aus — kein Blocker).

**3. ~~ScheinBar hat noch keine Screenshots~~ — erledigt 05.09.2026.** Fünf
Aufnahmen im Dunkelmodus aus dem Emulator liegen als `bilder/app/scheinbar-1-start`
bis `-5-statistik` (Luminanz 29–44). Gleichzeitig neu: AbleseBar, YourFilm,
Campus Clash und ZeitAnker.

**4. ScheinBar-Preis** steht noch nicht fest (Falk-Entscheid). In der Vergleichstabelle
steht deshalb „noch offen"; sobald der Preis da ist, `vergleich.zeilen` in BEIDEN
Sprachblöcken nachziehen.

Mehr ist nicht offen. Wiederkehrendes ist automatisiert
(*keine-offenen-punkte-abwaelzen (Erinnerung verloren)*).

---

## Was die Seite kann

- **Startseite kompakt**, drei Unterseiten je App tragen die Details
- Reihenfolge fest: FaNiCa Fun = 01 · Instinct = 02 · NeonPunkt = 03
- **Kasten „Wo es die App gibt"** je App: Browser · Android · Apple · **QR-Code**
- **Echte Zahlen aus Falks laufender Tipprunde** (5 Jahre, 3.419 Tipps, Balkendiagramm)
  mit den **echten Profilnamen** (Falks Entscheidung 31.07.)
- **`live.js` hält die Seite selbst aktuell** — nächstes Rennen + Countdown aus derselben
  öffentlichen Quelle wie die App
- **Falks sechs Hover-Effekte** an den Knöpfen, alle im Einsatz
- Deutsch + Englisch vollständig, Impressum in der Fußzeile

---

## Die Fallen, die Zeit gekostet haben

1. **Screenshots** ohne `--force-prefers-reduced-motion` sind unbrauchbar; headless cacht
   CSS → `Network.setCacheDisabled`. `window.scrollTo` greift hier nicht — über `#anker`
   + `scrollIntoView` gehen.
2. **Handy-Bremse = Fläche × Blur**, nicht die Anzahl der Animationen.
3. **`content-visibility: auto` bricht das Einblenden** → `contain: paint`.
4. **Farben hängen an der POSITION** (`app-1/2/3`) — beim Umsortieren mitziehen und die
   **Paarung Name+Farbe** messen, nicht zählen.
5. **Ein Effektname ist kein Anstrich** — „Ripple" heißt Welle vom Zeiger. Vor dem
   Abhaken den gerenderten Knopf ansehen (Probeseite, Hover per Klasse nachstellen).
6. **`background-clip: content-box` übernimmt kein `border-radius`** → `padding-box`.
7. **Entwicklerseite bleibt RUHIG** — animierte Vollflächen-Hintergründe gehören auf die
   App-eigenen Seiten. Falk am 02.08.: sonst wird es „mit dem Laden ein Problem".
8. **Verlorene Einbindungen erzeugen keinen Fehler** — nach jedem Umbau
   `grep -n "script src" *.html` und die Container im echten DOM zählen.
9. **Etwas zurücknehmen = `git revert <commit>`**, nicht von Hand zurückbauen; danach mit
   `git diff --stat <davor> HEAD` belegen, dass nichts übrig ist.

---

Gedächtnis: Skill `entwickler-website` · *app-adressen-und-stores (Erinnerung verloren)* ·
*website-echte-rundendaten (Erinnerung verloren)* · *website-haelt-sich-selbst-aktuell (Erinnerung verloren)* ·
*website-handy-optimierung-fallen (Erinnerung verloren)* · [[Design-Wissen (Apps + Web)]] ·
*reihenfolge-aendern-farben-mitziehen (Erinnerung verloren)* · *keine-offenen-punkte-abwaelzen (Erinnerung verloren)*
Bahn: [[WEBSEITEN]]

## Nachtrag 21.08.2026 — neun Produkte, neun Fehler behoben

**Die Seite fuehrt jetzt neun Produkte** (Kapitel 07 ZeitAnker/Tuerkis `#17A2A2`,
08 Instinct Familie/Oliv `#93A84A`, 09 Tankspur/Kupfer `#C2703A`).
Die **Instinct Familie steht bewusst NICHT** in der Vergleichstabelle — sie ist
keine einzelne App, sondern zehn, und keine ist verfuegbar.

**DSB-Abschnitt** auf `instinct-scoring.html`: erlaubt, seit `dsb-2026.json`
`geprueft: true` traegt. Solange das `false` war, war die Aussage verboten.

**Neun Fehler behoben**, die vier sichtbarsten: deutscher Text auf der englischen
Seite, nicht uebersetzbare Navigation, Zurueck-Knoepfe auf das falsche Kapitel,
Handy-Navigation blendete die falschen Punkte aus. Dazu trug `yourfilm.html` Titel
und Beschreibung von Campus Clash, und die Sitemap kannte die neuen Seiten nicht.

🔴 **Offen aus dem 21.08.:** Sieben Commits lagen lokal und ungepusht.
**Vor dem Weiterarbeiten pruefen, ob sie inzwischen veroeffentlicht sind:**

    git -C "...\Projekte\Webseiten\Webseite" status -sb

🔴 **Pfad-Korrektur 27.08.2026:** Die alte Fassung nannte
`Projekte\Webseiten Online\Webseite` — diesen Ordner gibt es nicht mehr.
Das Repo liegt unter `KI-Studio\Projekte\Webseiten\Webseite\`.
