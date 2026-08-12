/* ============================================================
   inhalte.js — baut die wiederkehrenden Bausteine aus texte.js.
   Läuft VOR app.js, damit app.js die fertigen Teile findet.
   ============================================================ */

(function () {
  "use strict";

  const el = (id) => document.getElementById(id);
  const sicher = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  /* ============================================================
     WO ES DIE APPS GIBT — die EINE Wahrheit für alle Seiten.
     Hier stehen die echten Paket-IDs (Android) und ASC-App-IDs
     (Apple) sowie die Browser-Fassungen. Ändert sich etwas, wird
     es NUR hier geändert — Startseite und Unterseiten holen es
     sich von hier.

     🔴 STATUS je Weg (Stand 12.08.2026, jede Adresse einzeln
     per Abruf geprüft — nur bestätigte Wege sind Links):
       "live"    = öffentlich erreichbar, wird zum Knopf
       "test"    = Google Play, geschlossener Test
       "pruefung"= Apple prüft noch
     Geprüft 12.08.: FaNiCa Play 200 ✓ · FaNiCa Apple ✓ (1.170) ·
     Instinct Apple ✓ (1.0.1) · Instinct Play 404 · NeonPunkt
     Play/Apple 404. Sobald etwas freigegeben ist, hier auf "live"
     setzen — mehr ist nicht nötig, alle Seiten ziehen nach.
     ============================================================ */
  const BEZUG = {
    fanica: {
      android: "https://play.google.com/store/apps/details?id=com.fanica.fun",
      apple:   "https://apps.apple.com/de/app/fanica-fun/id6795424070",
      browser: "https://alonepard10501.github.io/fanica-fun/spiel/",
      /* Eigene App-Website („FanicaFun.de — Eure private Tipprunde“).
         Liegt in der WURZEL von fanica-fun; `/spiel/` darunter ist die
         Web-Fassung der App, nicht die Website. Nicht verwechseln. */
      webseite: "https://alonepard10501.github.io/fanica-fun/",
      standAndroid: "live", standApple: "live", stil: "b-ripple"
    },
    instinct: {
      android: "https://play.google.com/store/apps/details?id=de.bogensportinstinct.instinct_scoring",
      apple:   "https://apps.apple.com/de/app/instinct-scoring/id6795424223",
      browser: "https://alonepard10501.github.io/instinct-scoring/",
      /* Eigenständige App-Website (eigenes Repo instinct-scoring-web).
         Nur Instinct hat eine — fehlt der Schlüssel, entfällt der Weg. */
      webseite: "https://alonepard10501.github.io/instinct-scoring-web/",
      standAndroid: "test", standApple: "live", stil: "b-grass"
    },
    neonpunkt: {
      android: "https://play.google.com/store/apps/details?id=de.fanica.neonpunkt",
      apple:   "https://apps.apple.com/de/app/id6795088815",
      browser: "https://alonepard10501.github.io/fanica-fun/neonpunkt/",
      /* Eigene App-Website („48 Stunden. Ein Punkt.“). Heißt bewusst
         `neonpunkt-info` — `neonpunkt` daneben ist das SPIEL, nicht
         die Seite. Beide liegen im selben Repo, nicht verwechseln. */
      webseite: "https://alonepard10501.github.io/fanica-fun/neonpunkt-info/",
      standAndroid: "test", standApple: "pruefung", stil: "b-helix"
    }
  };
  window.BEZUG = BEZUG;   // damit app.js dieselben Adressen nutzt

  /* Baut die Wege-Leiste: Android · Apple · Browser (+ eigene Website).
     Nur ein „live"-Weg wird zum echten Link. Alles andere ist ein
     <span> mit der ehrlichen Beschriftung — so klickt niemand auf
     eine 404-Seite und weiß trotzdem, woran er ist.

     Der vierte Weg „Website" erscheint NUR, wenn die App eine eigene
     Seite hat (`webseite` in BEZUG). Stand 12.08.2026 haben alle drei
     Apps eine — jede Leiste zeigt also vier Wege (2×2-Raster). */
  function bezugsLeiste(schluessel, hol) {
    const b = BEZUG[schluessel];
    if (!b) return "";
    const wege = [
      { art: "android", ziel: b.android, stand: b.standAndroid,
        knopf: hol("aktion.androidKnopf"), unter: hol("aktion.androidUnter") },
      { art: "apple",   ziel: b.apple,   stand: b.standApple,
        knopf: hol("aktion.appleKnopf"),   unter: hol("aktion.appleUnter") },
      { art: "browser", ziel: b.browser, stand: "live",
        knopf: hol("aktion.browserKnopf"), unter: hol("aktion.browserUnter") }
    ];
    if (b.webseite) {
      wege.push({ art: "webseite", ziel: b.webseite, stand: "live",
        knopf: hol("aktion.webseiteKnopf"), unter: hol("aktion.webseiteUnter") });
    }
    /* Beschriftung und Erklärung je Zustand */
    const wartetext = (stand) => stand === "test"
      ? hol("aktion.standTest") : hol("aktion.standPruefung");
    const offen = wege.filter(w => w.stand !== "live");

    return `
      <div class="bezug">
        ${wege.map(w => w.stand === "live" ? `
          <a class="bezug-weg bezug-${w.art}" href="${sicher(w.ziel)}"
             target="_blank" rel="noopener">
            <span class="bezug-zeichen" aria-hidden="true">${ZEICHEN[w.art]}</span>
            <span class="bezug-text"><b>${sicher(w.knopf)}</b>
              <em>${sicher(w.unter)}</em></span>
          </a>` : `
          <span class="bezug-weg bezug-${w.art} bezug-wartet">
            <span class="bezug-zeichen" aria-hidden="true">${ZEICHEN[w.art]}</span>
            <span class="bezug-text"><b>${sicher(w.knopf)}</b>
              <em>${sicher(wartetext(w.stand))}</em></span>
          </span>`).join("")}
      </div>
      ${offen.length ? `<p class="bezug-hinweis">${sicher(hol("aktion.bezugHinweis"))}</p>` : ""}
      <div class="qr">
        <div data-qr="${sicher(b.browser)}"></div>
        <div class="qr-text">
          <h4>${sicher(hol("aktion.qrTitel"))}</h4>
          <p>${sicher(hol("aktion.qrText"))}</p>
        </div>
      </div>`;
  }

  /* Schlichte, selbstgezeichnete Zeichen — keine fremden Logos
     (Marken-Richtlinien von Apple und Google), kein Nachladen. */
  const ZEICHEN = {
    android: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M6 9h12v8a1.5 1.5 0 0 1-1.5 1.5H15V22a1.5 1.5 0 0 1-3 0v-3.5h-1.5V22a1.5 1.5 0 0 1-3 0v-3.5H7.5A1.5 1.5 0 0 1 6 17V9Zm-2.5 0A1.5 1.5 0 0 1 5 10.5v4a1.5 1.5 0 0 1-3 0v-4A1.5 1.5 0 0 1 3.5 9Zm17 0a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-3 0v-4A1.5 1.5 0 0 1 20.5 9ZM8.6 2.6l-.9-1.6a.4.4 0 0 1 .7-.4l.9 1.7A7.4 7.4 0 0 1 12 1.7c1 0 2 .2 2.8.6l.9-1.7a.4.4 0 0 1 .7.4l-.9 1.6A6 6 0 0 1 18 7.8H6a6 6 0 0 1 2.6-5.2ZM9.4 5.4a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Zm5.2 0a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z"/></svg>`,
    apple: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M16.4 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.8-.8-3-.8-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.7 1.1 8.9.8 1.1 1.7 2.3 2.9 2.2 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.3 0 2.1-1.1 2.8-2.2.9-1.2 1.3-2.5 1.3-2.5s-2.5-1-2.5-3.5ZM14.2 5.4c.6-.8 1-1.9.9-3-.9 0-2.1.6-2.7 1.4-.6.7-1.1 1.8-1 2.9 1 .1 2.1-.5 2.8-1.3Z"/></svg>`,
    browser: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none"
      stroke="currentColor" stroke-width="1.8">
      <circle cx="12" cy="12" r="9"/><path d="M3 12h18"/>
      <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18Z"/></svg>`,
    /* Fensterrahmen mit Titelleiste = eigene Website (nicht die Web-App). */
    webseite: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none"
      stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
      <rect x="2.5" y="4" width="19" height="16" rx="2.2"/>
      <path d="M2.5 8.6h19"/>
      <circle cx="5.7" cy="6.3" r=".85" fill="currentColor" stroke="none"/>
      <circle cx="8.3" cy="6.3" r=".85" fill="currentColor" stroke="none"/>
      <path d="M6 12.4h9M6 16h6"/></svg>`
  };

  function bauen() {
    const t = TEXTE[window.SPRACHE] && TEXTE[window.SPRACHE].instinct
      ? TEXTE[window.SPRACHE] : TEXTE.de;
    const de = TEXTE.de;
    const hol = (weg) => {
      const teile = weg.split(".");
      let a = t, b = de;
      for (const s of teile) {
        a = (a && a[s] !== undefined) ? a[s] : undefined;
        b = (b && b[s] !== undefined) ? b[s] : undefined;
      }
      return (a !== undefined) ? a : b;
    };

    /* ---------------- INSTINCT: Funktionsblöcke ---------------- */
    /* Retina: zu jedem Bild gibt es eine @2x-Fassung aus dem Original.
       srcset lässt 4K-/Retina-Bildschirme automatisch die scharfe wählen. */
    const zwei = (pfad) => pfad.replace(/\.webp$/, "@2x.webp");

    /* Blöcke ohne Bild (bild: null) werden als breite Karte gesetzt.
       Grund: Für diese Funktionen gibt es nur Screenshots des LEEREN
       Zustands ("Noch keine Bögen") — die zeigen die App schlechter,
       als sie ist. Lieber kein Bild als ein nichtssagendes. */
    const iBloecke = el("instinct-bloecke");
    if (iBloecke) {
      iBloecke.innerHTML = hol("instinct.bloecke").map((b, i) => {
        const text = `
            <span class="karten-nr">${sicher(b.kennung)}</span>
            <h3>${sicher(b.titel)}</h3>
            <p>${sicher(b.text)}</p>
            <ul class="liste">
              ${b.punkte.map(p => `<li>${sicher(p)}</li>`).join("")}
            </ul>`;

        if (!b.bild) {
          return `<div class="block block-ohne-bild">
                    <div class="block-text auf">${text}</div>
                  </div>`;
        }
        return `
        <div class="block ${i % 2 ? "gedreht" : ""}">
          <div class="block-text auf">${text}</div>
          <div class="block-bild auf v2">
            <div class="handy" data-neigen>
              <img src="${sicher(b.bild)}"
                   srcset="${sicher(b.bild)} 1x, ${sicher(zwei(b.bild))} 2x"
                   alt="${sicher(b.alt)}"
                   width="300" height="649" loading="lazy" decoding="async">
              <div class="handy-glanz" aria-hidden="true"></div>
            </div>
          </div>
        </div>`;
      }).join("");
    }

    /* ---------------- INSTINCT: Datenschutz-Liste ---------------- */
    const iDaten = el("instinct-daten");
    if (iDaten) {
      iDaten.innerHTML = hol("instinct.datenPunkte")
        .map(p => `<li>${sicher(p)}</li>`).join("");
    }

    /* ---------------- INSTINCT: Versprechen ---------------- */
    const iVer = el("instinct-versprechen");
    if (iVer) {
      iVer.innerHTML = hol("instinct.versprechen").map(v => `
        <div class="zahl">
          <b>${sicher(v.zahl)}</b>
          <span>${sicher(v.text)}</span>
        </div>`).join("");
    }

    /* ---------------- INSTINCT: Zielgruppe ---------------- */
    const iZiel = el("instinct-zielgruppe");
    if (iZiel) {
      iZiel.innerHTML = hol("instinct.zielgruppe")
        .map(z => `<span>${sicher(z)}</span>`).join("");
    }

    /* ---------------- INSTINCT: Bogenarten mit Zeichnung ----------------
       Die vier Bögen als SVG-Silhouette — jede Form ist charakteristisch:
       Recurve mit zurückgebogenen Enden, Langbogen als schlichter Bogen,
       Blankbogen wie Recurve ohne Anbauten, Compound mit Rollen. */
    const BOGEN_SVG = {
      "Recurve": `
        <svg viewBox="0 0 120 200" fill="none" aria-hidden="true">
          <path d="M60 14 C 34 34, 30 78, 40 100 C 30 122, 34 166, 60 186"
                stroke="var(--bf)" stroke-width="6" stroke-linecap="round"/>
          <path d="M60 14 C 74 18, 80 26, 78 34" stroke="var(--bf)"
                stroke-width="6" stroke-linecap="round"/>
          <path d="M60 186 C 74 182, 80 174, 78 166" stroke="var(--bf)"
                stroke-width="6" stroke-linecap="round"/>
          <line x1="78" y1="32" x2="78" y2="168" stroke="rgba(237,235,227,.75)" stroke-width="2"/>
          <rect x="34" y="86" width="14" height="28" rx="5" fill="var(--bf)" opacity=".85"/>
          <circle cx="78" cy="100" r="3.4" fill="#EDEBE3"/>
        </svg>`,
      "Langbogen": `
        <svg viewBox="0 0 120 200" fill="none" aria-hidden="true">
          <path d="M62 12 C 32 56, 32 144, 62 188"
                stroke="var(--bf)" stroke-width="6" stroke-linecap="round"/>
          <line x1="62" y1="12" x2="62" y2="188" stroke="rgba(237,235,227,.75)" stroke-width="2"/>
          <rect x="36" y="88" width="12" height="24" rx="4" fill="var(--bf)" opacity=".7"/>
          <circle cx="62" cy="100" r="3.4" fill="#EDEBE3"/>
        </svg>`,
      "Blankbogen": `
        <svg viewBox="0 0 120 200" fill="none" aria-hidden="true">
          <path d="M60 16 C 36 36, 32 78, 42 100 C 32 122, 36 164, 60 184"
                stroke="var(--bf)" stroke-width="6" stroke-linecap="round"/>
          <path d="M60 16 C 72 20, 77 27, 75 35" stroke="var(--bf)"
                stroke-width="6" stroke-linecap="round"/>
          <path d="M60 184 C 72 180, 77 173, 75 165" stroke="var(--bf)"
                stroke-width="6" stroke-linecap="round"/>
          <line x1="75" y1="33" x2="75" y2="167" stroke="rgba(237,235,227,.75)" stroke-width="2"/>
          <rect x="36" y="86" width="14" height="28" rx="5" fill="var(--bf)" opacity=".85"/>
          <circle cx="75" cy="100" r="3.4" fill="#EDEBE3"/>
          <path d="M75 108 l0 16" stroke="#EDEBE3" stroke-width="1.6" opacity=".55"/>
          <path d="M75 130 l0 12" stroke="#EDEBE3" stroke-width="1.6" opacity=".35"/>
        </svg>`,
      "Compound": `
        <svg viewBox="0 0 120 200" fill="none" aria-hidden="true">
          <path d="M56 40 C 38 62, 38 138, 56 160"
                stroke="var(--bf)" stroke-width="7" stroke-linecap="round"/>
          <circle cx="57" cy="34" r="13" stroke="var(--bf)" stroke-width="5" fill="none"/>
          <circle cx="57" cy="166" r="13" stroke="var(--bf)" stroke-width="5" fill="none"/>
          <circle cx="57" cy="34" r="3" fill="var(--bf)"/>
          <circle cx="57" cy="166" r="3" fill="var(--bf)"/>
          <line x1="70" y1="34" x2="70" y2="166" stroke="rgba(237,235,227,.75)" stroke-width="2"/>
          <line x1="57" y1="47" x2="70" y2="72" stroke="rgba(237,235,227,.45)" stroke-width="1.6"/>
          <line x1="57" y1="153" x2="70" y2="128" stroke="rgba(237,235,227,.45)" stroke-width="1.6"/>
          <rect x="40" y="86" width="16" height="30" rx="5" fill="var(--bf)" opacity=".9"/>
          <circle cx="70" cy="100" r="3.4" fill="#EDEBE3"/>
        </svg>`
    };

    const iBoegen = el("instinct-boegen");
    if (iBoegen) {
      /* Klappbar (<details>): auf dem Handy zugeklappt und schmal,
         ab 780 px per CSS dauerhaft offen (Falk 31.07.: „die Bögen werden
         klappbar und nicht so groß auf dem Handy dargestellt"). */
      iBoegen.innerHTML = hol("instinct.boegen").map(b => `
        <details class="bogen auf" style="--bf:${sicher(b.farbe)}">
          <summary class="bogen-kopf">
            <span class="bogen-vorschau" aria-hidden="true">${BOGEN_SVG[b.name] || ""}</span>
            <span class="bogen-titel">
              <b>${sicher(b.name)}</b>
              <span class="bogen-kurz">${sicher(b.kurz)}</span>
            </span>
            <span class="bogen-pfeil" aria-hidden="true"></span>
          </summary>
          <div class="bogen-inhalt">
            <div class="bogen-buehne">${BOGEN_SVG[b.name] || ""}</div>
            <p class="bogen-text">${sicher(b.text)}</p>
            <div class="bogen-daten">
              <span>${sicher(hol("instinct.boegenErfasst"))}</span>
              ${b.erfasst.map(e => `<b>${sicher(e)}</b>`).join("")}
            </div>
          </div>
        </details>`).join("");
    }

    /* ---------------- INSTINCT: Pfeil-Begriffe ---------------- */
    const iPfeile = el("instinct-pfeile");
    if (iPfeile) {
      iPfeile.innerHTML = hol("instinct.pfeile").map(p => `
        <div class="begriff">
          <b>${sicher(p.begriff)}</b>
          <p>${sicher(p.erklaerung)}</p>
        </div>`).join("");
    }

    /* ---------------- INSTINCT: Parcours-Begriffe ---------------- */
    const iBegriffe = el("instinct-begriffe");
    if (iBegriffe) {
      iBegriffe.innerHTML = hol("instinct.parcoursBegriffe").map(b => `
        <div class="begriff">
          <b>${sicher(b.begriff)}</b>
          <p>${sicher(b.text)}</p>
        </div>`).join("");
    }

    /* ---------------- INSTINCT: Glossar der Bogen-Begriffe ---------------- */
    const iGlossar = el("instinct-glossar");
    if (iGlossar) {
      iGlossar.innerHTML = hol("instinct.glossar").map(g => `
        <div class="begriff">
          <b>${sicher(g.begriff)}</b>
          <p>${sicher(g.text)}</p>
        </div>`).join("");
    }

    /* ---------------- INSTINCT: Wer legt die Wertungen fest ---------------- */
    const iVerb = el("instinct-verbaende");
    if (iVerb) {
      iVerb.innerHTML = hol("instinct.verbaende").map(v => `
        <div class="verband">
          <b>${sicher(v.name)}</b>
          <em>${sicher(v.lang)}</em>
          <p>${sicher(v.text)}</p>
        </div>`).join("");
    }

    /* ---------------- INSTINCT: Spine-Eingabefelder ---------------- */
    const iSpine = el("instinct-spine-felder");
    if (iSpine) {
      iSpine.innerHTML = hol("instinct.spineEingaben").map(f => `
        <div class="spine-feld">
          <b>${sicher(f.feld)}</b>
          <span>${sicher(f.hinweis)}</span>
        </div>`).join("");
    }

    /* ---------------- Preis-Stufen (alle drei Apps) ----------------
       Instinct hat drei Karten, FaNiCa und NeonPunkt je zwei —
       derselbe Baukasten, gefüttert aus `<app>.stufen` in texte.js. */
    for (const app of ["instinct", "fanica", "neonpunkt"]) {
      const feld = el(app + "-stufen");
      if (!feld) continue;
      feld.innerHTML = hol(app + ".stufen").map(s => `
        <div class="stufe auf ${s.hervor ? "hervor" : ""}">
          <h4>${sicher(s.name)}</h4>
          <div class="stufe-preis">${sicher(s.preis)}</div>
          <div class="stufe-zeile">${sicher(s.zeile)}</div>
          <ul>${s.kann.map(k => `<li>${sicher(k)}</li>`).join("")}</ul>
          <div class="stufe-grenze">${sicher(s.grenze)}</div>
        </div>`).join("");
    }

    /* ---------------- FANICA: Neu in der App ----------------
       Gleiche Kartenform wie der Funktionsumfang (`.funktionen`). */
    const fNeu = el("fanica-neu");
    if (fNeu) {
      fNeu.innerHTML = hol("fanica.neuListe").map(f => `
        <div class="funktion">
          <b>${sicher(f.name)}</b>
          <span>${sicher(f.text)}</span>
        </div>`).join("");
    }

    /* ---------------- FANICA: Punkteregeln ---------------- */
    const fRegeln = el("fanica-regeln");
    if (fRegeln) {
      fRegeln.innerHTML = hol("fanica.punkteRegeln").map(r => `
        <div class="regel">
          <b>${sicher(r.zahl)}</b>
          <span>${sicher(r.text)}</span>
        </div>`).join("");
    }

    /* ---------------- FANICA: Karten ----------------
       Blöcke MIT Screenshot werden als breiter Block mit Handy gesetzt,
       die übrigen als Karte im Raster. */
    const fBloecke = el("fanica-bloecke");
    if (fBloecke) {
      const mitBild = hol("fanica.bloecke").filter(b => b.bild);
      const ohneBild = hol("fanica.bloecke").filter(b => !b.bild);

      const bloecke = mitBild.map((b, i) => `
        <div class="block ${i % 2 ? "gedreht" : ""}">
          <div class="block-text auf">
            <span class="karten-nr">${sicher(b.kennung)}</span>
            <h3>${sicher(b.titel)}</h3>
            <p>${sicher(b.text)}</p>
            <ul class="liste">
              ${b.punkte.map(p => `<li>${sicher(p)}</li>`).join("")}
            </ul>
          </div>
          <div class="block-bild auf v2">
            <div class="handy" data-neigen>
              <img src="${sicher(b.bild)}"
                   srcset="${sicher(b.bild)} 1x, ${sicher(zwei(b.bild))} 2x"
                   alt="${sicher(b.alt)}"
                   width="300" height="649" loading="lazy" decoding="async">
              <div class="handy-glanz" aria-hidden="true"></div>
            </div>
          </div>
        </div>`).join("");

      const karten = ohneBild.length ? `
        <div class="raster raster-2">
          ${ohneBild.map((b, i) => `
            <div class="karte auf ${i % 2 ? "v2" : ""}">
              <span class="karten-nr">${sicher(b.kennung)}</span>
              <h3>${sicher(b.titel)}</h3>
              <p>${sicher(b.text)}</p>
              <ul class="liste">
                ${b.punkte.map(p => `<li>${sicher(p)}</li>`).join("")}
              </ul>
            </div>`).join("")}
        </div>` : "";

      fBloecke.innerHTML = bloecke + karten;
      fBloecke.classList.remove("raster", "raster-2");
    }

    /* ---------------- FANICA: Ablauf der Renn-Woche ---------------- */
    const fAblauf = el("fanica-ablauf");
    if (fAblauf) {
      fAblauf.innerHTML = hol("fanica.ablaufSchritte").map(s => `
        <div class="schritt auf">
          <b class="nr">${sicher(s.nr)}</b>
          <h4>${sicher(s.titel)}</h4>
          <p>${sicher(s.text)}</p>
        </div>`).join("");
    }

    /* ---------------- FANICA: Die fünf Trophäen ---------------- */
    const fTroph = el("fanica-trophaeen");
    if (fTroph) {
      fTroph.innerHTML = hol("fanica.trophaeen").map(t => `
        <div class="trophaee auf">
          <span class="trophaee-zeichen" aria-hidden="true">${sicher(t.zeichen)}</span>
          <h4>${sicher(t.name)}</h4>
          <p>${sicher(t.bedingung)}</p>
        </div>`).join("");
    }

    /* ---------------- FANICA: Strecken-Zahlen + Beispiele ---------------- */
    const fStreckenZ = el("fanica-strecken-zahlen");
    if (fStreckenZ) {
      fStreckenZ.innerHTML = hol("fanica.streckenZahlen").map(z => `
        <div class="zahl">
          <b data-zaehler="${sicher(z.zahl)}">0</b>
          <span>${sicher(z.text)}</span>
        </div>`).join("");
    }
    const fStreckenB = el("fanica-strecken-beispiele");
    if (fStreckenB) {
      fStreckenB.innerHTML = hol("fanica.streckenBeispiele")
        .map(s => `<span>${sicher(s)}</span>`).join("");
    }

    /* ---------------- FANICA: Beitritt ---------------- */
    const fBeitritt = el("fanica-beitritt");
    if (fBeitritt) {
      fBeitritt.innerHTML = hol("fanica.beitrittSchritte").map(s => `
        <div class="schritt auf">
          <b class="nr">${sicher(s.nr)}</b>
          <h4>${sicher(s.titel)}</h4>
          <p>${sicher(s.text)}</p>
        </div>`).join("");
    }

    /* ---------------- NEONPUNKT: Regeln ---------------- */
    const nRegeln = el("neonpunkt-regeln");
    if (nRegeln) {
      nRegeln.innerHTML = hol("neonpunkt.regeln").map(r => `
        <div class="begriff">
          <b>${sicher(r.begriff)}</b>
          <p>${sicher(r.text)}</p>
        </div>`).join("");
    }

    /* ---------------- NEONPUNKT: Die 16 Farben ---------------- */
    const nFarben = el("neonpunkt-farben");
    if (nFarben) {
      nFarben.innerHTML = hol("neonpunkt.farbenListe").map((f, i) => `
        <div class="farbfeld" style="--ff:${sicher(f.hex)}">
          <i aria-hidden="true"></i>
          <span>${sicher(f.name)}</span>
          <em>${i + 1}</em>
        </div>`).join("");
    }

    /* ---------------- NEONPUNKT: Zahlen ---------------- */
    const nZahlen = el("neonpunkt-zahlen");
    if (nZahlen) {
      nZahlen.innerHTML = hol("neonpunkt.zahlen").map(z => `
        <div class="zahl">
          <b data-zaehler="${sicher(z.zahl)}">0</b>
          <em>${sicher(z.einheit)}</em>
          <span>${sicher(z.text)}</span>
        </div>`).join("");
    }

    /* ---------------- NEONPUNKT: Galerie ---------------- */
    const nGal = el("neonpunkt-galerie");
    if (nGal) {
      // Alle vier Bilder im gleichen 9:16-Ausschnitt, je 1x und 2x.
      nGal.innerHTML = hol("neonpunkt.bilder").map(b => `
        <figure>
          <img src="${sicher(b.pfad)}"
               srcset="${sicher(b.pfad)} 1x, ${sicher(zwei(b.pfad))} 2x"
               alt="${sicher(b.alt)}"
               width="340" height="604" loading="lazy" decoding="async">
          <figcaption>${sicher(b.titel)}</figcaption>
        </figure>`).join("");
    }

    /* ---------------- WO ES DIE APPS GIBT ----------------
       Jede Stelle mit <div id="bezug-fanica"> (bzw. -instinct,
       -neonpunkt) bekommt die Drei-Wege-Leiste. Funktioniert auf
       der Startseite UND auf den Unterseiten, ohne Doppelpflege. */
    ["fanica", "instinct", "neonpunkt"].forEach(k => {
      const ziel = el("bezug-" + k);
      if (ziel) ziel.innerHTML = bezugsLeiste(k, hol);
    });

    /* ---------------- FANICA: echte laufende Runde ----------------
       Zahlen aus `runde.js` (aus der echten App-Datenlage gerechnet,
       nichts geschätzt). Der Block erscheint nur, wenn runde.js
       geladen ist — sonst bleiben die Container leer und unsichtbar. */
    const RU = window.RUNDE;
    if (RU) {
      const rZahlen = el("runde-zahlen");
      if (rZahlen) {
        const z = [
          { zahl: RU.jahre,       einheit: "Jahre",  text: "läuft die Runde schon" },
          { zahl: RU.gesamtTipps, einheit: "Tipps",  text: "insgesamt abgegeben" },
          { zahl: RU.spieler,     einheit: "Spieler", text: "in dieser Saison" },
          { zahl: RU.abstand,     einheit: "Punkt",  text: "trennt Platz 1 von Platz 2" }
        ];
        rZahlen.innerHTML = z.map(x => `
          <div class="zahl">
            <b data-zaehler="${x.zahl}">0</b>
            <em>${sicher(x.einheit)}</em>
            <span>${sicher(x.text)}</span>
          </div>`).join("");
      }

      /* Tabellenstand als Balken — Länge = Anteil am Führenden */
      const rBalken = el("runde-balken");
      if (rBalken) {
        const spitze = RU.tabelle[0].punkte || 1;
        rBalken.innerHTML = RU.tabelle.map(t => `
          <div class="balken-zeile">
            <span class="balken-platz">${t.platz}</span>
            <span class="balken-name">${sicher(t.name)}</span>
            <span class="balken-spur">
              <span class="balken-fuellung" style="--anteil:${Math.round(100 * t.punkte / spitze)}%;--bf:${sicher(t.farbe)}"></span>
            </span>
            <span class="balken-wert">${t.punkte}</span>
            <span class="balken-zusatz">${t.exakt}× exakt · ${t.quote}&nbsp;%</span>
          </div>`).join("");
      }

      /* Trefferbilanz als ein durchgehender Anteilsbalken */
      const rTreffer = el("runde-treffer");
      if (rTreffer) {
        const b = RU.bilanz;
        const teile = [
          { klasse: "a-exakt",   wert: b.exaktProzent,   name: "exakt richtig" },
          { klasse: "a-dabei",   wert: b.dabeiProzent,   name: "Fahrer richtig, Platz daneben" },
          { klasse: "a-daneben", wert: b.danebenProzent, name: "daneben" }
        ];
        rTreffer.innerHTML =
          `<div class="anteil-spur">` +
          teile.map(t => `<span class="anteil-teil ${t.klasse}"
              style="--w:${t.wert}%" title="${sicher(t.name)}: ${t.wert} %"></span>`).join("") +
          `</div><div class="anteil-legende">` +
          teile.map(t => `<span><i class="${t.klasse}"></i>${sicher(t.name)}
              <b>${t.wert}&nbsp;%</b></span>`).join("") +
          `</div>`;
      }

      /* Der stärkste Satz des Abschnitts: keine einzige perfekte Reihe */
      const rMerk = el("runde-merksatz");
      if (rMerk) {
        const b = RU.bilanz;
        rMerk.innerHTML = b.vollTreffer === 0
          ? `In <b>${b.reihen}</b> abgegebenen Tippreihen lag noch
             <b>kein einziges Mal</b> jemand auf allen fünf Plätzen richtig.`
          : `In ${b.reihen} Tippreihen gab es ${b.vollTreffer}× alle fünf Plätze richtig.`;
      }

      /* Strecken: wo die Gruppe viele Punkte holt und wo kaum welche */
      const rStr = el("runde-strecken");
      if (rStr) {
        const spitze = RU.strecken.length ? RU.strecken[0].punkte : 1;
        rStr.innerHTML = RU.strecken.map(s => `
          <div class="balken-zeile">
            <span class="balken-name">${sicher(s.stadt)}</span>
            <span class="balken-spur">
              <span class="balken-fuellung" style="--anteil:${Math.round(100 * s.punkte / spitze)}%"></span>
            </span>
            <span class="balken-wert">${s.punkte}</span>
          </div>`).join("");
      }

      /* Saisonsieger */
      const rSieger = el("runde-sieger");
      if (rSieger) {
        rSieger.innerHTML = RU.sieger.map(s => `
          <div class="sieger-karte${s.saison === RU.saison ? " laufend" : ""}">
            <b>${s.saison}</b>
            <span class="sieger-name">${sicher(s.name)}</span>
            <span class="sieger-punkte">${s.punkte} Punkte</span>
            ${s.saison === RU.saison ? '<span class="sieger-hinweis">läuft noch</span>' : ""}
          </div>`).join("");
      }
    }

    /* ---------------- FANICA: Galerie ---------------- */
    const fGal = el("fanica-galerie");
    if (fGal) {
      // Vier echte Screenshots aus der App, gleiches 9:16-Maß wie oben.
      fGal.innerHTML = hol("fanica.bilder").map(b => `
        <figure>
          <img src="${sicher(b.pfad)}"
               srcset="${sicher(b.pfad)} 1x, ${sicher(zwei(b.pfad))} 2x"
               alt="${sicher(b.alt)}"
               width="340" height="604" loading="lazy" decoding="async">
          <figcaption>${sicher(b.titel)}</figcaption>
        </figure>`).join("");
    }

    /* ---------------- NEONPUNKT: Karten ---------------- */
    const nBloecke = el("neonpunkt-bloecke");
    if (nBloecke) {
      nBloecke.innerHTML = hol("neonpunkt.bloecke").map((b, i) => `
        <div class="karte auf ${i % 2 ? "v2" : ""}">
          <span class="karten-nr">${sicher(b.kennung)}</span>
          <h3>${sicher(b.titel)}</h3>
          <p>${sicher(b.text)}</p>
          <ul class="liste">
            ${b.punkte.map(p => `<li>${sicher(p)}</li>`).join("")}
          </ul>
        </div>`).join("");
    }

    /* ---------------- ÜBER: Zahlen ---------------- */
    const uZahlen = el("ueber-zahlen");
    if (uZahlen) {
      uZahlen.innerHTML = hol("ueber.zahlen").map(z => `
        <div class="zahl">
          <b data-zaehler="${sicher(z.zahl)}">0</b>
          <span>${sicher(z.text)}</span>
        </div>`).join("");
    }

    /* ---------------- ÜBER: Ablauf ---------------- */
    const uAblauf = el("ueber-ablauf");
    if (uAblauf) {
      uAblauf.innerHTML = hol("ueber.ablauf").map(s => `
        <div class="ablauf-schritt">
          <b>${sicher(s.nr)}</b>
          <h4>${sicher(s.titel)}</h4>
          <p>${sicher(s.text)}</p>
        </div>`).join("");
    }

    /* ---------------- FUNKTIONSUMFANG je App ----------------
       Dieselbe Bauart in allen drei Kapiteln: Zahlenreihe, dann die
       wichtigsten Funktionen als Raster, dann die Anzeigen als Liste. */
    ["instinct", "fanica", "neonpunkt"].forEach(app => {
      const zahlen = el(app + "-umfang-zahlen");
      if (zahlen) {
        zahlen.innerHTML = hol(app + ".umfangZahlen").map(z => `
          <div class="zahl">
            <b data-zaehler="${sicher(z.zahl)}">0</b>
            <span>${sicher(z.text)}</span>
          </div>`).join("");
      }

      const liste = el(app + "-umfang-liste");
      if (liste) {
        liste.innerHTML = hol(app + ".umfangListe").map(f => `
          <div class="funktion">
            <b>${sicher(f.name)}</b>
            <span>${sicher(f.text)}</span>
          </div>`).join("");
      }

      const anzeigen = el(app + "-umfang-anzeigen");
      if (anzeigen) {
        anzeigen.innerHTML = hol(app + ".umfangAnzeigen")
          .map(a => `<li>${sicher(a)}</li>`).join("");
      }
    });

    /* ---------------- VERGLEICH der drei Apps ---------------- */
    const vTab = el("vergleich-tabelle");
    if (vTab) {
      /* Auf schmalen Schirmen scrollt die Tabelle waagerecht. Ohne
         tabindex koennen Nur-Tastatur-Nutzer die hinteren Spalten
         nicht erreichen (WCAG 2.1.1). */
      vTab.setAttribute("tabindex", "0");
      vTab.setAttribute("role", "region");
      vTab.setAttribute("aria-label", "Vergleich der drei Apps, waagerecht scrollbar");
      const sp = hol("vergleich.spalten");
      const ze = hol("vergleich.zeilen");
      vTab.innerHTML = `
        <table class="vergleich">
          <thead><tr>${sp.map((s, i) => `
            <th${i ? ` class="app-${i}"` : ""}>${sicher(s)}</th>`).join("")}</tr></thead>
          <tbody>
            ${ze.map(z => `
              <tr>
                <th scope="row">${sicher(z.name)}</th>
                ${z.werte.map(w => `<td>${sicher(w)}</td>`).join("")}
              </tr>`).join("")}
          </tbody>
        </table>`;
    }

    /* ---------------- KONTAKT: wobei ich helfen kann ---------------- */
    const kWobei = el("kontakt-wobei");
    if (kWobei) {
      kWobei.innerHTML = hol("kontakt.wobei").map(w => `
        <div class="begriff">
          <b>${sicher(w.was)}</b>
          <p>${sicher(w.text)}</p>
        </div>`).join("");
    }

    /* ---------------- IMPRESSUM: Anschrift + Angaben ---------------- */
    const iAnschrift = el("impressum-anschrift");
    if (iAnschrift) {
      // \n aus texte.js in echte Zeilenumbrüche wandeln
      iAnschrift.innerHTML = sicher(hol("kontakt.anbieter")).replace(/\n/g, "<br>");
    }
    const iZeilen = el("impressum-zeilen");
    if (iZeilen) {
      iZeilen.innerHTML = hol("kontakt.impressumZeilen").map(z => `
        <div class="begriff">
          <b>${sicher(z.was)}</b>
          <p>${sicher(z.text)}</p>
        </div>`).join("");
    }

    /* ---------------- HÄUFIGE FRAGEN (aufklappbar) ---------------- */
    const fr = el("fragen-liste");
    if (fr) {
      fr.innerHTML = hol("fragen.liste").map((q, i) => `
        <details class="frage"${i === 0 ? " open" : ""}>
          <summary>${sicher(q.f)}</summary>
          <p>${sicher(q.a)}</p>
        </details>`).join("");
    }

    /* ---------------- INSTINCT: Startseiten-Vorstellung ----------------
       Nummerierte Punkte — sie entsprechen der Reihenfolge der Knöpfe
       auf dem Screenshot daneben. */
    const iStart = el("instinct-start-punkte");
    if (iStart) {
      iStart.innerHTML = hol("instinct.startPunkte").map((p, i) => `
        <li class="startpunkt">
          <b class="startpunkt-nr">${i + 1}</b>
          <div>
            <b class="startpunkt-name">${sicher(p.name)}</b>
            <span>${sicher(p.text)}</span>
          </div>
        </li>`).join("");
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bauen);
  } else {
    bauen();
  }
})();
