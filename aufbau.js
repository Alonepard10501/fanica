/// Produktseiten: baut alle Abschnitte unter der Kopfkarte aus window.PRODUKT_DATEN.
(function () {
  "use strict";

  const D = window.PRODUKT_DATEN;
  const ort = document.getElementById("aufbau");
  if (!D || !ort) return;

  const sp = window.SPRACHE === "en" && D.en ? "en" : "de";
  const d = D[sp];
  const hol = (k) => (d[k] !== undefined ? d[k] : D.de[k]);
  const ruhig = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const sicher = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  const WORTE = {
    de: {
      blick: ["Auf einen Blick", "Überblick"], bilder: ["So sieht es aus", "Bilder"],
      funktionen: ["Funktionen", "Funktionen"], schritte: ["So funktioniert’s", "Ablauf"],
      neu: ["Neu in der App", "Neu"], preise: ["Gratis und Premium", "Preise"],
      fragen: ["Häufige Fragen", "Fragen"], erlebnis: "Erlebnis", abschluss: "Holen",
      version: "Version", schritt: "Schritt", zurueck: "Vorheriges Bild", weiter: "Nächstes Bild",
      gross: "Großansicht öffnen", schliessen: "Schließen", bild: "Bild", von: "von",
      alleApps: "Alle Apps ansehen", vorige: "Vorige App", naechste: "Nächste App",
      familie: ["Die Apps der Familie", "Apps"]
    },
    en: {
      blick: ["At a glance", "Overview"], bilder: ["What it looks like", "Screens"],
      funktionen: ["Features", "Features"], schritte: ["How it works", "How it works"],
      neu: ["New in the app", "New"], preise: ["Free and Premium", "Pricing"],
      fragen: ["Frequently asked questions", "FAQ"], erlebnis: "Try it", abschluss: "Get it",
      version: "Version", schritt: "Step", zurueck: "Previous image", weiter: "Next image",
      gross: "Open large view", schliessen: "Close", bild: "Image", von: "of",
      alleApps: "See all apps", vorige: "Previous app", naechste: "Next app",
      familie: ["The apps in the family", "Apps"]
    }
  }[sp];

  const REIHE = [
    ["fanica-fun", "FaNiCa Fun"], ["instinct-scoring", "Instinct Scoring"], ["neonpunkt", "NeonPunkt"],
    ["setupleiste", "SetUpLeiste"], ["campus-clash", "Campus Clash"], ["yourfilm", "YourFilm"],
    ["zeitwissen", "ZeitAnker"], ["instinct-familie", "Instinct Familie"], ["tankspur", "Tankspur"],
    ["scheinbar", "ScheinBar"], ["ablesbar", "AblesBar"]
  ];

  const sym = (name) => {
    const p = (window.SYMBOLE || {})[name] || (window.SYMBOLE || {}).punkt || "";
    return `<svg class="sym" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${p}</svg>`;
  };

  function abschnitt(id, wort, inhalt, satz) {
    const s = document.createElement("section");
    s.className = "unter-block teil teil-" + id;
    s.id = id;
    s.dataset.kurztext = wort[1];
    s.innerHTML = `<h2>${sicher(wort[0])}</h2>${satz ? `<p class="teil-satz">${sicher(satz)}</p>` : ""}${inhalt}`;
    return s;
  }

  function blick() {
    const v = hol("vorteile") || [];
    if (!v.length) return null;
    return abschnitt("ueberblick", WORTE.blick, `<ul class="vorteile">${v.map((e, i) => `
      <li class="pk">
        <span class="pk-symbol">${sym(e.symbol)}</span>
        <h3>${sicher(e.titel)}</h3><p>${sicher(e.text)}</p></li>`).join("")}</ul>`, hol("blickSatz"));
  }

  function erlebnis(knoten) {
    if (!knoten) return null;
    const e = hol("erlebnis") || {};
    knoten.classList.add("unter-block", "teil", "teil-erlebnis");
    knoten.dataset.kurztext = e.kurz || WORTE.erlebnis;
    knoten.insertAdjacentHTML("afterbegin",
      `<h2>${sicher(e.titel || WORTE.erlebnis)}</h2>${e.text ? `<p class="teil-satz">${sicher(e.text)}</p>` : ""}`);
    return knoten;
  }

  function galerie() {
    const bilder = D.bilder || [];
    const texte = (hol("galerie") || {}).bilder || [];
    if (!bilder.length) return null;
    const teile = bilder.map((b, i) => {
      const t = texte[i] || {};
      return `<li class="gal-teil">
        <button type="button" class="gal-telefon" data-nr="${i}"
                aria-label="${sicher((t.titel || WORTE.bild) + " — " + WORTE.gross)}">
          <img src="${sicher(b.datei)}" width="${b.b}" height="${b.h}" loading="lazy" decoding="async"
               alt="${sicher(t.titel || "")}" style="aspect-ratio:${b.b}/${b.h}"></button>
        <p class="gal-text"><b>${sicher(t.titel)}</b>${t.text ? `<span>${sicher(t.text)}</span>` : ""}</p></li>`;
    }).join("");
    const steuer = bilder.length > 1 ? `
      <div class="gal-steuer">
        <button type="button" class="gal-pfeil" data-schritt="-1" aria-label="${WORTE.zurueck}">${sym("links")}</button>
        <span class="gal-zaehler" aria-live="polite"></span>
        <button type="button" class="gal-pfeil" data-schritt="1" aria-label="${WORTE.weiter}">${sym("rechts")}</button>
      </div>` : "";
    const s = abschnitt("bilder", WORTE.bilder, `
      <div class="galerie-neu${bilder.length < 3 ? " wenige" : ""}">
        <ul class="gal-spur" tabindex="0" aria-label="${sicher(WORTE.bilder[0])}">${teile}</ul>${steuer}
      </div>`, (hol("galerie") || {}).text);
    return s;
  }

  function galerieEinrichten(s) {
    const spur = s.querySelector(".gal-spur");
    const teile = [...spur.children];
    const zaehler = s.querySelector(".gal-zaehler");
    const pfeile = [...s.querySelectorAll(".gal-pfeil")];
    const breite = () => teile[0].getBoundingClientRect().width + parseFloat(getComputedStyle(spur).columnGap || 0);
    const aktuell = () => Math.round(spur.scrollLeft / breite());
    const melden = () => {
      const n = Math.min(aktuell(), teile.length - 1);
      const sichtbar = Math.max(1, Math.round(spur.clientWidth / breite()));
      const bis = Math.min(n + sichtbar, teile.length);
      if (zaehler) zaehler.textContent = `${n + 1}${bis > n + 1 ? "–" + bis : ""} ${WORTE.von} ${teile.length}`;
      if (pfeile.length) {
        pfeile[0].disabled = spur.scrollLeft < 4;
        pfeile[1].disabled = spur.scrollLeft + spur.clientWidth >= spur.scrollWidth - 4;
      }
      s.querySelector(".gal-steuer")?.toggleAttribute("hidden", spur.scrollWidth <= spur.clientWidth + 4);
    };
    const gehe = (r) => spur.scrollBy({ left: r * breite(), behavior: ruhig ? "auto" : "smooth" });
    pfeile.forEach(p => p.addEventListener("click", () => gehe(+p.dataset.schritt)));
    spur.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); gehe(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); gehe(-1); }
    });
    spur.addEventListener("scroll", () => requestAnimationFrame(melden), { passive: true });
    addEventListener("resize", melden, { passive: true });
    melden();
    spur.addEventListener("click", (e) => {
      const k = e.target.closest(".gal-telefon");
      if (k) grossAnsicht(+k.dataset.nr, k);
    });
  }

  let dialog = null;
  function grossAnsicht(nr, ausloeser) {
    const bilder = D.bilder;
    const texte = (hol("galerie") || {}).bilder || [];
    if (!dialog) {
      dialog = document.createElement("dialog");
      dialog.className = "gal-gross";
      dialog.setAttribute("aria-label", WORTE.bilder[0]);
      dialog.innerHTML = `
        <button type="button" class="gg-zu" aria-label="${WORTE.schliessen}">${sym("kreuz")}</button>
        <figure><img alt=""><figcaption></figcaption></figure>
        <button type="button" class="gg-pfeil gg-zurueck" aria-label="${WORTE.zurueck}">${sym("links")}</button>
        <button type="button" class="gg-pfeil gg-weiter" aria-label="${WORTE.weiter}">${sym("rechts")}</button>`;
      document.body.appendChild(dialog);
      dialog.querySelector(".gg-zu").addEventListener("click", () => dialog.close());
      dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });
      dialog.querySelector(".gg-zurueck").addEventListener("click", () => zeigen(dialog.nr - 1));
      dialog.querySelector(".gg-weiter").addEventListener("click", () => zeigen(dialog.nr + 1));
      dialog.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") zeigen(dialog.nr + 1);
        if (e.key === "ArrowLeft") zeigen(dialog.nr - 1);
      });
      dialog.addEventListener("close", () => dialog.ausloeser?.focus());
    }
    function zeigen(n) {
      dialog.nr = (n + bilder.length) % bilder.length;
      const b = bilder[dialog.nr], t = texte[dialog.nr] || {};
      const img = dialog.querySelector("img");
      img.src = b.datei; img.width = b.b; img.height = b.h; img.alt = t.titel || "";
      dialog.querySelector("figcaption").innerHTML =
        `<span>${dialog.nr + 1} ${WORTE.von} ${bilder.length}</span><b>${sicher(t.titel)}</b>${sicher(t.text)}`;
      dialog.querySelectorAll(".gg-pfeil").forEach(p => { p.hidden = bilder.length < 2; });
    }
    dialog.ausloeser = ausloeser;
    zeigen(nr);
    dialog.showModal();
  }

  function funktionen() {
    const gruppen = hol("funktionen") || [];
    if (!gruppen.length) return null;
    const liste = (g) => `<ul class="fkt">${g.liste.map(f => `
      <li><span class="fkt-symbol">${sym(f.symbol)}</span><div><b>${sicher(f.name)}</b><span>${sicher(f.text)}</span></div></li>`).join("")}</ul>`;
    const reiter = gruppen.length > 1 ? `<div class="reiter" role="tablist">${gruppen.map((g, i) => `
      <button type="button" role="tab" id="reiter-${i}" aria-controls="tafel-${i}"
              aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${sym(g.symbol)}<span>${sicher(g.gruppe)}</span></button>`).join("")}</div>` : "";
    const tafeln = gruppen.map((g, i) => gruppen.length > 1
      ? `<div class="tafel" role="tabpanel" id="tafel-${i}" aria-labelledby="reiter-${i}" tabindex="0"${i ? " hidden" : ""}>${liste(g)}</div>`
      : liste(g)).join("");
    return abschnitt("funktionen", WORTE.funktionen, reiter + tafeln, hol("funktionenSatz"));
  }

  function reiterEinrichten(s) {
    const knoepfe = [...s.querySelectorAll('[role="tab"]')];
    const waehlen = (k, fokus) => {
      knoepfe.forEach(b => {
        const an = b === k;
        b.setAttribute("aria-selected", String(an));
        b.tabIndex = an ? 0 : -1;
        s.querySelector("#" + b.getAttribute("aria-controls")).hidden = !an;
      });
      if (fokus) k.focus();
      k.scrollIntoView({ block: "nearest", inline: "nearest", behavior: ruhig ? "auto" : "smooth" });
    };
    knoepfe.forEach((k, i) => {
      k.addEventListener("click", () => waehlen(k));
      k.addEventListener("keydown", (e) => {
        const n = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1
          : e.key === "Home" ? 0 : e.key === "End" ? knoepfe.length - 1 : null;
        if (n === null) return;
        e.preventDefault();
        waehlen(knoepfe[(n + knoepfe.length) % knoepfe.length], true);
      });
    });
  }

  function familie() {
    const apps = window.T ? T("familie.apps") : null;
    if (!D.familie || !Array.isArray(apps)) return null;
    return abschnitt("familie", WORTE.familie, `<ul class="familie-raster">${apps.map((a, i) => `
      <li class="pk">
        <img src="bilder/familie/${sicher(a.bild)}.webp" alt="" width="64" height="64" loading="lazy">
        <div><b>${sicher(a.name)}</b><em>${sicher(a.rolle)}</em><span>${sicher(a.text)}</span></div></li>`).join("")}</ul>`,
      hol("familieSatz"));
  }

  function schritte() {
    const s = hol("schritte") || [];
    if (!s.length) return null;
    return abschnitt("ablauf", WORTE.schritte, `<ol class="zeitleiste">${s.map((e, i) => `
      <li><span class="zl-nr" aria-hidden="true">${i + 1}</span>
        <div><span class="zl-marke">${WORTE.schritt} ${i + 1}</span><h3>${sicher(e.titel)}</h3><p>${sicher(e.text)}</p></div></li>`).join("")}</ol>`);
  }

  function neu() {
    const n = hol("neu");
    if (!n || !n.punkte || !n.punkte.length) return null;
    return abschnitt("neu", WORTE.neu, `
      <div class="neu-karte">
        <div class="neu-kopf"><span class="neu-version">${WORTE.version} ${sicher(n.version)}</span>
          ${n.datum ? `<span class="neu-datum">${sicher(n.datum)}</span>` : ""}</div>
        <ul>${n.punkte.slice(0, 5).map(p => `<li>${sym("haken")}<span>${sicher(p)}</span></li>`).join("")}</ul>
      </div>`);
  }

  function preise() {
    const p = hol("preise");
    if (!p || !p.karten || !p.karten.length) return null;
    return abschnitt("preise", WORTE.preise, `<div class="preis-karten">${p.karten.map((k, i) => `
      <article class="preis-karte${i ? " premium" : ""}">
        <h3>${sicher(k.name)}</h3>
        <p class="preis-wert">${sicher(k.preis)}</p>
        ${k.zusatz ? `<p class="preis-zusatz">${sicher(k.zusatz)}</p>` : ""}
        <ul>${k.punkte.map(x => `<li>${sym("haken")}<span>${sicher(x)}</span></li>`).join("")}</ul>
      </article>`).join("")}</div>${p.fuss ? `<p class="preis-fuss">${sicher(p.fuss)}</p>` : ""}`, p.satz);
  }

  function fragen() {
    const f = hol("fragen") || [];
    if (!f.length) return null;
    return abschnitt("fragen", WORTE.fragen, `<div class="faq">${f.map(e => `
      <details class="faq-eintrag"><summary><span>${sicher(e.frage)}</span><i aria-hidden="true"></i></summary>
        <p>${sicher(e.antwort)}</p></details>`).join("")}</div>`);
  }

  function abschluss() {
    const a = hol("abschluss") || {};
    const i = REIHE.findIndex(r => r[0] === D.seite);
    const vor = REIHE[(i - 1 + REIHE.length) % REIHE.length];
    const nach = REIHE[(i + 1) % REIHE.length];
    const s = document.createElement("section");
    s.className = "unter-block teil teil-abschluss";
    s.id = "holen";
    s.dataset.kurztext = WORTE.abschluss;
    s.innerHTML = `
      <div class="abschluss-band">
        <img class="abschluss-symbol" src="${sicher(D.symbol)}" alt="" width="96" height="96" loading="lazy">
        <h2>${sicher(a.titel)}</h2>
        ${a.text ? `<p class="abschluss-text">${sicher(a.text)}</p>` : ""}
        <div class="produkt-wege abschluss-wege" data-wege="${sicher(D.app)}" data-webseite></div>
        ${a.stand ? `<p class="abschluss-stand">${sicher(a.stand)}</p>` : ""}
        <div class="abschluss-knoepfe">
          <a class="nbtn ${sicher(D.stil || "b-scratch")}" href="index.html#produkte"><span>${WORTE.alleApps}</span></a>
        </div>
      </div>
      <nav class="nachbarn" aria-label="${WORTE.alleApps}">
        <a href="${vor[0]}.html"><small>← ${WORTE.vorige}</small><b>${vor[1]}</b></a>
        <a href="${nach[0]}.html"><small>${WORTE.naechste} →</small><b>${nach[1]}</b></a>
      </nav>`;
    return s;
  }

  function kopfFakten() {
    const f = hol("fakten") || [];
    const claim = document.querySelector(".produktkopf-claim");
    if (!f.length || !claim) return;
    claim.insertAdjacentHTML("afterend",
      `<ul class="kopf-fakten">${f.map(x => `<li>${sym("haken")}${sicher(x)}</li>`).join("")}</ul>`);
  }

  function bauen() {
    kopfFakten();
    const erlebnisKnoten = ort.querySelector(":scope > .erlebnis");
    if (erlebnisKnoten) erlebnisKnoten.remove();
    const teile = [blick(), erlebnis(erlebnisKnoten), galerie(), D.familie ? familie() : null,
      funktionen(), schritte(), neu(), preise(), fragen(), abschluss()].filter(Boolean);
    ort.replaceChildren(...teile);
    const gal = ort.querySelector(".teil-bilder");
    if (gal) galerieEinrichten(gal);
    const fk = ort.querySelector(".teil-funktionen");
    if (fk && fk.querySelector('[role="tab"]')) reiterEinrichten(fk);
    if (!ruhig && !matchMedia("(hover: none)").matches) {
      ort.addEventListener("pointermove", (e) => {
        const k = e.target.closest(".pk, .preis-karte, .neu-karte");
        if (!k) return;
        const r = k.getBoundingClientRect();
        k.style.setProperty("--lx", (e.clientX - r.left) + "px");
        k.style.setProperty("--ly", (e.clientY - r.top) + "px");
      }, { passive: true });
    }
  }

  bauen();
})();
