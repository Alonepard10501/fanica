/* ============================================================
   live.js — die Website hält sich SELBST aktuell.
   ------------------------------------------------------------
   Falk 31.07.2026: „das soll automatisch passieren so wie die
   aktualisierung aller daten und nächsten Rennen Countdown und
   Alle Profile."

   Vorher zeigte die Seite eine Momentaufnahme aus `runde.js`, die
   nur von Hand neu erzeugt wurde — nach ein paar Wochen stand dort
   ein veralteter Stand. Jetzt fragt die Seite bei jedem Aufruf
   dieselbe öffentliche Quelle wie die App selbst:

     api.jolpi.ca (Ergast)  — Kalender, Ergebnisse, nächstes Rennen

   Die Quelle erlaubt Browser-Zugriff (`access-control-allow-origin: *`,
   geprüft 31.07.2026). Es wird KEIN Schlüssel gebraucht und nichts
   über Besucher gesendet.

   🔴 GRUNDSATZ: Die Seite muss auch OHNE Netz vollständig aussehen.
   `runde.js` bleibt die verlässliche Grundlage; live.js legt nur
   Aktuelles obendrauf. Schlägt der Abruf fehl (Quelle weg, Handy
   offline, Zeitüberschreitung), passiert schlicht nichts — kein
   Fehler, keine Lücke, keine leere Kachel.
   ============================================================ */

(function () {
  "use strict";

  const QUELLE = "https://api.jolpi.ca/ergast/f1";
  const JAHR = new Date().getFullYear();

  /* Wie lange ein Abruf im Browser zwischengespeichert wird.
     Renndaten ändern sich höchstens einmal pro Woche — 6 Stunden
     halten die Seite frisch, ohne die Quelle unnötig zu belasten. */
  const HALTBAR = 6 * 60 * 60 * 1000;

  /* ---------- kleiner Zwischenspeicher (überlebt Seitenwechsel) ---------- */
  function ausSpeicher(name) {
    try {
      const roh = localStorage.getItem("fanica_live_" + name);
      if (!roh) return null;
      const p = JSON.parse(roh);
      if (Date.now() - p.zeit > HALTBAR) return null;
      return p.wert;
    } catch (e) { return null; }
  }
  function inSpeicher(name, wert) {
    try {
      localStorage.setItem("fanica_live_" + name,
        JSON.stringify({ zeit: Date.now(), wert: wert }));
    } catch (e) { /* privater Modus o. Ä. — dann eben ohne */ }
  }

  /* ---------- Abruf mit Zeitlimit ---------- */
  async function hole(weg) {
    const zwischen = ausSpeicher(weg);
    if (zwischen) return zwischen;

    const abbruch = new AbortController();
    const uhr = setTimeout(() => abbruch.abort(), 6000);
    try {
      const antwort = await fetch(QUELLE + weg, { signal: abbruch.signal });
      if (!antwort.ok) return null;
      const daten = await antwort.json();
      inSpeicher(weg, daten);
      return daten;
    } catch (e) {
      return null;             // still scheitern, siehe Grundsatz oben
    } finally {
      clearTimeout(uhr);
    }
  }

  /* ---------- Ländernamen auf Deutsch (wie in der App) ---------- */
  const LAND = {
    Australia: "Australien", China: "China", Japan: "Japan", USA: "USA",
    Bahrain: "Bahrain", "Saudi Arabia": "Saudi-Arabien", Canada: "Kanada",
    Spain: "Spanien", Monaco: "Monaco", Austria: "Österreich",
    UK: "Großbritannien", Belgium: "Belgien", Hungary: "Ungarn",
    Netherlands: "Niederlande", Italy: "Italien", Azerbaijan: "Aserbaidschan",
    Singapore: "Singapur", Mexico: "Mexiko", Brazil: "Brasilien",
    Qatar: "Katar", UAE: "V. A. Emirate", France: "Frankreich",
    Portugal: "Portugal", Germany: "Deutschland"
  };
  const land = (s) => LAND[s] || s;

  /* ---------- Countdown bis zum nächsten Rennen ---------- */
  function countdownStarten(kachel, ziel, texte) {
    const zahl = kachel.querySelector("[data-countdown]");
    if (!zahl) return;

    function tick() {
      const rest = ziel - Date.now();
      if (rest <= 0) {
        zahl.textContent = texte.laeuft;
        return;                       // Rennen läuft/ist vorbei
      }
      const tage = Math.floor(rest / 86400000);
      const std  = Math.floor((rest % 86400000) / 3600000);
      const min  = Math.floor((rest % 3600000) / 60000);
      zahl.textContent = tage > 0
        ? tage + " " + (tage === 1 ? texte.tag : texte.tage) + "  " + std + " h"
        : std + " h " + String(min).padStart(2, "0") + " min";
    }
    tick();
    /* Einmal pro Minute reicht — sekundengenau wäre nur Unruhe. */
    setInterval(tick, 60000);
  }

  /* ---------- Das nächste Rennen anzeigen ---------- */
  async function naechstesRennen() {
    const kachel = document.getElementById("naechstes-rennen");
    if (!kachel) return;

    const daten = await hole("/" + JAHR + "/next.json");
    const rennen = daten && daten.MRData && daten.MRData.RaceTable
      && daten.MRData.RaceTable.Races && daten.MRData.RaceTable.Races[0];
    if (!rennen) return;             // nichts anzeigen statt Falsches

    const texte = {
      titel:  hol("live.naechstesTitel", "Das nächste Rennen"),
      lauf:   hol("live.lauf", "Lauf"),
      von:    hol("live.von", "von"),
      start:  hol("live.start", "Start"),
      rest:   hol("live.rest", "Noch"),
      laeuft: hol("live.laeuft", "läuft gerade"),
      tag:    hol("live.tag", "Tag"),
      tage:   hol("live.tage", "Tage"),
      quelle: hol("live.quelle", "Automatisch geladen — dieselbe Quelle wie in der App.")
    };

    const start = new Date(rennen.date + "T" + (rennen.time || "12:00:00Z"));
    const ort = rennen.Circuit.Location;

    /* 🔴 `MRData.total` der next-Abfrage ist die Zahl der TREFFER (also 1),
       NICHT die Zahl der Rennen der Saison — daraus wurde „12 von 1".
       Die Gesamtzahl steht nur in der Saison-Abfrage. Ein zusätzlicher,
       winziger Abruf (limit=1) holt sie; schlägt er fehl, wird die Zahl
       einfach weggelassen statt eine falsche zu zeigen. */
    let gesamt = "";
    const saison = await hole("/" + JAHR + ".json?limit=1");
    if (saison && saison.MRData && saison.MRData.total) {
      gesamt = saison.MRData.total;
    }

    /* Datum und Uhrzeit vorher zusammensetzen — steht das mitten in der
       Vorlage, landen die Zeilenumbrüche des Quelltextes im Text. */
    const spracheDE = (window.SPRACHE || "de") !== "en";
    const ortsCode = spracheDE ? "de-DE" : "en-GB";
    const startText =
      start.toLocaleDateString(ortsCode, { day: "numeric", month: "long" })
      + ", "
      + start.toLocaleTimeString(ortsCode, { hour: "2-digit", minute: "2-digit" })
      + (spracheDE ? " " + hol("live.uhr", "Uhr") : "");

    kachel.innerHTML = `
      <div class="live-rennen">
        <div class="live-kopf">
          <span class="live-punkt" aria-hidden="true"></span>
          <span>${esc(texte.titel)}</span>
        </div>
        <b class="live-ort">${esc(ort.locality)}</b>
        <span class="live-land">${esc(land(ort.country))}</span>
        <div class="live-zahlen">
          <div><em>${esc(texte.lauf)}</em>
               <b>${esc(rennen.round)}${gesamt ? " " + esc(texte.von) + " " + esc(gesamt) : ""}</b></div>
          <div><em>${esc(texte.start)}</em>
               <b>${esc(startText)}</b></div>
          <div><em>${esc(texte.rest)}</em>
               <b data-countdown>—</b></div>
        </div>
        <p class="live-quelle">${esc(texte.quelle)}</p>
      </div>`;

    countdownStarten(kachel, start.getTime(), texte);
    kachel.classList.add("live-da");
  }

  /* ---------- Hilfen ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  /* Text aus texte.js holen, mit Rückfall — live.js darf nie an einem
     fehlenden Schlüssel scheitern. */
  function hol(weg, ersatz) {
    try {
      const teile = weg.split(".");
      let a = TEXTE[window.SPRACHE], b = TEXTE.de;
      for (const t of teile) {
        a = a && a[t] !== undefined ? a[t] : undefined;
        b = b && b[t] !== undefined ? b[t] : undefined;
      }
      return (a !== undefined ? a : (b !== undefined ? b : ersatz));
    } catch (e) { return ersatz; }
  }

  /* ---------- Start ---------- */
  function los() {
    naechstesRennen();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", los);
  } else {
    los();
  }
})();
