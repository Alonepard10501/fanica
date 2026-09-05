/* ============================================================
   app.js — Verhalten der Seite.
   Reines JavaScript, keine Bibliothek, kein Build.
   ============================================================ */

(function () {
  "use strict";

  const ruhig = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ========================================================
     1) TEXTE EINSETZEN
     Alle Stellen mit data-t="pfad.zum.text" werden gefüllt.
     ======================================================== */
  function texteEinsetzen() {
    document.querySelectorAll("[data-t]").forEach(el => {
      const wert = T(el.dataset.t);
      if (wert === undefined || wert === null) return;
      if (el.dataset.tAttr) el.setAttribute(el.dataset.tAttr, wert);
      else el.textContent = wert;
    });
    document.documentElement.lang = window.SPRACHE;
  }

  /* Sprache umschalten (Gerüst: EN füllt sich, sobald texte.js ergänzt ist) */
  function spracheEinrichten() {
    const knopf = document.getElementById("sprachknopf");
    if (!knopf) return;
    // Titel (Sprechblase) passend zur Zielsprache setzen
    const titel = T("meta.sprachtitel");
    if (titel) knopf.setAttribute("title", titel);
    knopf.addEventListener("click", () => {
      window.SPRACHE = (window.SPRACHE === "de") ? "en" : "de";
      localStorage.setItem("fanica_sprache", window.SPRACHE);
      location.reload();
    });
  }

  /* ========================================================
     2) KOPFZEILE — wird beim Scrollen fest
     ======================================================== */
  function kopfEinrichten() {
    const kopf = document.querySelector(".kopf");
    if (!kopf) return;
    const pruefe = () => kopf.classList.toggle("fest", window.scrollY > 40);
    pruefe();
    addEventListener("scroll", pruefe, { passive: true });
  }

  /* ========================================================
     3) KAPITEL-VERWANDLUNG
     Jedes Kapitel färbt Hintergrund, Akzent und Licht um.
     ======================================================== */
  const KAPITEL = {
    intro: {
      grund: "linear-gradient(180deg, #000000, #07070A 55%, #0A0509)",
      akzent: "#E4192B", akzentHell: "#FF4257"
    },
    instinct: {
      grund: "linear-gradient(180deg, #0E100E, #1A1C1A 46%, #10140F)",
      akzent: "#7C8B3E", akzentHell: "#A7BC55"
    },
    fanica: {
      grund: "linear-gradient(180deg, #0A0406, #12070B 50%, #08070C)",
      akzent: "#E4192B", akzentHell: "#FF4257"
    },
    neonpunkt: {
      grund: "linear-gradient(180deg, #000000, #030308 60%, #000000)",
      akzent: "#39FF14", akzentHell: "#7BFF5C"
    },
    // Das vierte Produkt: kein Handy, sondern ein Windows-Programm.
    // Stahlblau setzt es sichtbar von den drei Apps ab.
    setupleiste: {
      grund: "linear-gradient(180deg, #05080C, #0A1119 55%, #060A0F)",
      akzent: "#2E88C7", akzentHell: "#58B6F0"
    },
    // Campus Clash — in Bearbeitung, Bernstein.
    campus: {
      grund: "linear-gradient(180deg, #0B0803, #141005 55%, #0C0904)",
      akzent: "#E8961E", akzentHell: "#FFB84D"
    },
    tankspur: {
      grund: "linear-gradient(180deg, #100A06, #1B120B 50%, #120C08)",
      akzent: "#C2703A", akzentHell: "#E8944F"
    },
    familie: {
      grund: "linear-gradient(180deg, #0D0F0C, #171A14 48%, #0E1210)",
      akzent: "#93A84A", akzentHell: "#C2DA6B"
    },
    zeitwissen: {
      grund: "linear-gradient(180deg, #05100F, #0A1A19 50%, #061211)",
      akzent: "#17A2A2", akzentHell: "#3FD0D0"
    },
    yourfilm: {
      grund: "linear-gradient(180deg, #0B0710, #150A20 50%, #0B0713)",
      akzent: "#9A3FE0", akzentHell: "#B85CFF"
    },
    scheinbar: {
      grund: "linear-gradient(180deg, #0D050A, #180814 50%, #0D0509)",
      akzent: "#D6247E", akzentHell: "#FF5FA8"
    },
    ablesebar: {
      grund: "linear-gradient(180deg, #05080C, #0D1420 52%, #070A10)",
      akzent: "#2E7FC2", akzentHell: "#6BB4EE"
    },
    // „Auf einen Blick" vergleicht alle drei Apps — bewusst NEUTRAL,
    // damit die Tabelle nicht nach einer einzelnen App aussieht.
    // (Falk 31.07.: „hat noch die falschen Farben in der Überschrift".)
    vergleich: {
      grund: "linear-gradient(180deg, #06070A, #0C0E13 55%, #07080B)",
      akzent: "#8E97A3", akzentHell: "#D7DDE4"
    },
    ueber: {
      grund: "linear-gradient(180deg, #06060A, #0B0A10 55%, #08060A)",
      akzent: "#E4192B", akzentHell: "#FF4257"
    },
    schluss: {
      grund: "linear-gradient(180deg, #08060A, #000000)",
      akzent: "#E4192B", akzentHell: "#FF4257"
    }
  };

  function kapitelEinrichten() {
    const kulisse = document.querySelector(".kulisse");
    const wurzel = document.documentElement;
    const abschnitte = [...document.querySelectorAll("[data-kapitel]")];
    if (!kulisse || !abschnitte.length) return;

    let aktuell = "";
    const setze = (name) => {
      const k = KAPITEL[name];
      if (!k || name === aktuell) return;
      aktuell = name;
      // Nur der Hintergrund wird weich überblendet. Die Akzentfarbe steht
      // fest am Abschnitt selbst (siehe [data-kapitel] in style.css) —
      // sie hier nochmal auf :root zu setzen, würde die Abschnittsfarbe
      // überstimmen und alles rot färben, solange nicht gescrollt wurde.
      kulisse.style.background = k.grund;
      // Kopfzeile und Fortschrittsbalken liegen außerhalb der Abschnitte,
      // sie brauchen die Farbe weiterhin von oben.
      wurzel.style.setProperty("--kopf-akzent", k.akzent);
      wurzel.style.setProperty("--kopf-akzent-hell", k.akzentHell);
    };

    /* Mittellinien-Messung statt IntersectionObserver:
       Ein Kapitel kann viel höher als der Bildschirm sein — dann erreicht es
       nie einen brauchbaren Sichtbarkeits-Anteil. Deshalb gewinnt schlicht
       das Kapitel, das die Bildschirmmitte überdeckt. */
    let geplant = false;
    const pruefe = () => {
      geplant = false;
      const mitte = window.innerHeight * 0.42;
      let treffer = abschnitte[0];
      for (const a of abschnitte) {
        const r = a.getBoundingClientRect();
        if (r.top <= mitte && r.bottom > mitte) { treffer = a; break; }
        if (r.top > mitte) break;      // weiter unten — vorheriger gilt
        treffer = a;                    // schon vorbei — merken
      }
      if (treffer) setze(treffer.dataset.kapitel);
    };
    const anstossen = () => {
      if (geplant) return;
      geplant = true;
      requestAnimationFrame(pruefe);
    };

    addEventListener("scroll", anstossen, { passive: true });
    addEventListener("resize", anstossen, { passive: true });
    pruefe();
  }

  /* ========================================================
     4) EINBLENDEN BEIM SCROLLEN
     ======================================================== */
  function einblendenEinrichten() {
    const teile = document.querySelectorAll(".auf");
    if (!teile.length) return;
    if (ruhig) { teile.forEach(t => t.classList.add("da")); return; }

    const b = new IntersectionObserver((eintraege, selbst) => {
      eintraege.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("da");
          selbst.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    teile.forEach(t => b.observe(t));

    /* Sicherheitsnetz: Wer beim Laden schon im Bild ist oder wen der
       Beobachter aus irgendeinem Grund nicht meldet, wird nach kurzer
       Zeit trotzdem sichtbar. Ohne das blieb auf dem Handy schon mal
       ein halber Abschnitt blass stehen. */
    setTimeout(() => {
      teile.forEach(t => {
        const r = t.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) t.classList.add("da");
      });
    }, 900);
  }


  /* ========================================================
     APP-KARUSSELL — dreht sich NUR auf Zuruf
     ========================================================
     🔴 Falk 22.08.2026: „sie rotieren nicht von selbst man muss das
        selber machen." Deshalb gibt es hier keinen Timer und keine
        Animationsschleife — nur eine Zahl, die sich beim Klicken,
        Ziehen oder Tastendruck aendert. Solange niemand anfasst,
        rechnet nichts.

     Der Schritt ergibt sich aus der Kartenzahl (360° geteilt durch
     ihre Anzahl). Der Winkel im CSS (.app-karte rotateY) muss dazu
     passen — kommt eine Karte dazu, ist er dort mitzuziehen. */
  function karussellEinrichten() {
    const ring = document.getElementById("karussell-ring");
    if (!ring) return;
    const karten = ring.querySelectorAll(".app-karte");
    if (!karten.length) return;

    const schritt = 360 / karten.length;
    let dreh = 0;

    const setze = () => ring.style.setProperty("--dreh", dreh + "deg");
    setze();

    const drehen = (richtung) => { dreh += schritt * richtung; setze(); };

    document.querySelector(".karussell-pfeil.links")
      ?.addEventListener("click", () => drehen(1));
    document.querySelector(".karussell-pfeil.rechts")
      ?.addEventListener("click", () => drehen(-1));

    /* Ziehen mit Maus oder Finger. Erst ab 40 px gilt es als Drehen —
       darunter bleibt es ein Klick auf die Karte, sonst oeffnet jedes
       versehentliche Wischen eine App. */
    let start = null;
    const buehne = document.querySelector(".karussell-buehne");
    const anfang = (x) => { start = x; };
    const ende = (x) => {
      if (start === null) return;
      const weg = x - start;
      start = null;
      if (Math.abs(weg) > 40) drehen(weg > 0 ? 1 : -1);
    };

    buehne?.addEventListener("pointerdown", (e) => anfang(e.clientX));
    buehne?.addEventListener("pointerup", (e) => ende(e.clientX));
    buehne?.addEventListener("pointercancel", () => { start = null; });

    /* 🔴 Finger-Wischen braucht EIGENE Behandlung (Falk 22.08.2026,
       gemessen): Mit nur pointerdown/-up passierte auf dem Handy
       nichts — der Browser deutet die Wischgeste als Scrollen und
       schickt `pointercancel`, bevor `pointerup` kommt.

       Deshalb hier touchstart/-move/-end. Waagerecht wird gedreht und
       das Scrollen unterbunden; senkrecht bleibt Scrollen, sonst käme
       man über dem Karussell nicht mehr die Seite hinunter. */
    let tx = null, ty = null, waagerecht = false;

    buehne?.addEventListener("touchstart", (e) => {
      const t = e.touches[0];
      tx = t.clientX; ty = t.clientY; waagerecht = false;
    }, { passive: true });

    buehne?.addEventListener("touchmove", (e) => {
      if (tx === null) return;
      const t = e.touches[0];
      const dx = t.clientX - tx, dy = t.clientY - ty;
      /* Die Richtung wird EINMAL festgelegt und bleibt dann — sonst
         kippt die Geste mitten im Wischen um. */
      if (!waagerecht && Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) {
        waagerecht = true;
      }
      if (waagerecht) e.preventDefault();
    }, { passive: false });

    buehne?.addEventListener("touchend", (e) => {
      if (tx === null) return;
      const t = e.changedTouches[0];
      const weg = t.clientX - tx;
      tx = ty = null;
      if (waagerecht && Math.abs(weg) > 40) drehen(weg > 0 ? 1 : -1);
      waagerecht = false;
    });

    buehne?.addEventListener("touchcancel", () => {
      tx = ty = null; waagerecht = false;
    });

    /* Tastatur: Pfeiltasten drehen, sobald eine Karte den Fokus hat. */
    ring.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") { drehen(1); e.preventDefault(); }
      if (e.key === "ArrowRight") { drehen(-1); e.preventDefault(); }
    });
  }

  /* ========================================================
     5) ZÄHLER — laufen einmal hoch
     ======================================================== */
  function zaehlerEinrichten() {
    const zahlen = document.querySelectorAll("[data-zaehler]");
    if (!zahlen.length) return;

    const laufe = (el) => {
      const ziel = parseFloat(el.dataset.zaehler);
      if (ruhig || !isFinite(ziel)) { el.textContent = el.dataset.zaehler; return; }
      const dauer = 1250;
      const start = performance.now();
      const schritt = (jetzt) => {
        const p = Math.min(1, (jetzt - start) / dauer);
        const weich = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(ziel * weich).toString();
        if (p < 1) requestAnimationFrame(schritt);
        else el.textContent = el.dataset.zaehler;
      };
      requestAnimationFrame(schritt);
    };

    // Zuerst den ECHTEN Wert hinschreiben. Fällt die Animation aus
    // (Bewegung abgeschaltet, kein Sichtbarkeits-Ereignis, JS-Fehler),
    // steht trotzdem die richtige Zahl da statt einer 0.
    zahlen.forEach(z => { z.textContent = z.dataset.zaehler; });

    if (ruhig) return;

    const b = new IntersectionObserver((eintraege, selbst) => {
      eintraege.forEach(e => {
        if (e.isIntersecting) {
          e.target.textContent = "0";   // erst jetzt auf 0 und hochzählen
          laufe(e.target);
          selbst.unobserve(e.target);
        }
      });
    }, { threshold: 0.6 });
    zahlen.forEach(z => b.observe(z));
  }

  /* Die 16 Neonfarben in der Reihenfolge der App.
     Wird von Zeitraffer UND Spiel gebraucht — deshalb hier oben. */
  const NEON_FARBEN = [
    "#39FF14", "#FF10F0", "#00FFFF", "#FFFF00",
    "#FF6B00", "#00FF9D", "#FF0055", "#7B5CFF",
    "#00B3FF", "#B6FF00", "#FF00A8", "#00FFC8",
    "#FFAA00", "#5CFF8F", "#FF3D7F", "#12E5FF"
  ];

  /* ========================================================
     6) ZEITRAFFER — die 48 Stunden in 12 Sekunden
     Ersetzt die frühere Explosionszeichnung: dort war im Standbild
     nicht zu erkennen, dass sich überhaupt etwas bewegt. Hier wächst
     der Punkt sichtbar, die Uhr läuft mit, der Balken füllt sich.
     ======================================================== */
  function rafferEinrichten() {
    const buehne = document.getElementById("raffer-buehne");
    const knopf = document.getElementById("raffer-knopf");
    if (!buehne || !knopf) return;

    const punkt = document.getElementById("raffer-punkt");
    const aZeit = document.getElementById("raffer-zeit");
    const aProz = document.getElementById("raffer-prozent");
    const balken = document.getElementById("raffer-fortschritt");

    const DAUER = 12000;          // 12 Sekunden Spielzeit …
    const STUNDEN = 48;           // … stehen für 48 Stunden
    const START_PX = 18;

    let laeuft = false, start = 0, farbe = 0, uhr = null;

    /* An der HÖHE ausrichten (nicht an der Diagonale): so bleibt oben und
       unten Platz für Uhr, Balken und Hinweis. Zusätzlich einen festen
       Streifen oben (Anzeige) und unten (Balken + Hinweis) freihalten —
       auf schmalen Schirmen lief der Punkt sonst durch die Schrift. */
    const FREI_OBEN = 74, FREI_UNTEN = 78;
    const maxGroesse = () => Math.max(
      60,
      Math.min(buehne.clientHeight - FREI_OBEN - FREI_UNTEN,
               buehne.clientWidth * 0.92)
    );

    const zeitText = (anteil) => {
      const gesamtMin = anteil * STUNDEN * 60;
      const std = Math.floor(gesamtMin / 60);
      const min = Math.floor(gesamtMin % 60);
      return T("neonpunkt.rafferStunden")
        .replace("{h}", std).replace("{m}", String(min).padStart(2, "0"));
    };

    const male = (anteil) => {
      const g = START_PX + (maxGroesse() - START_PX) * anteil;
      const f = NEON_FARBEN[farbe];
      punkt.style.width = g + "px";
      punkt.style.height = g + "px";
      punkt.style.background = f;
      punkt.style.boxShadow =
        `0 0 ${Math.round(g * 0.55)}px ${Math.round(g * 0.14)}px ` +
        `color-mix(in srgb, ${f} 55%, transparent)`;
      if (aZeit) aZeit.textContent = zeitText(anteil);
      if (aProz) aProz.textContent = Math.round(anteil * 100) + " %";
      if (balken) balken.style.width = (anteil * 100).toFixed(1) + "%";
    };

    const stoppen = () => {
      laeuft = false;
      if (uhr) { cancelAnimationFrame(uhr); uhr = null; }
      buehne.classList.remove("laeuft");
      knopf.textContent = T("neonpunkt.rafferKnopfStart");
      knopf.setAttribute("aria-pressed", "false");
    };

    const schritt = (jetzt) => {
      if (!laeuft) return;
      const anteil = Math.min(1, (jetzt - start) / DAUER);
      male(anteil);
      if (anteil < 1) uhr = requestAnimationFrame(schritt);
      else stoppen();                 // 48 Stunden erreicht — Punkt füllt alles
    };

    const starten = () => {
      laeuft = true;
      start = performance.now();
      buehne.classList.add("laeuft");
      knopf.textContent = T("neonpunkt.rafferKnopfStopp");
      knopf.setAttribute("aria-pressed", "true");
      uhr = requestAnimationFrame(schritt);
    };

    /* Antippen: Punkt beginnt klein von vorn, nächste Farbe — wie in der App. */
    const antippen = () => {
      farbe = (farbe + 1) % NEON_FARBEN.length;
      if (laeuft) start = performance.now();
      else male(0);
    };

    knopf.addEventListener("click", () => { laeuft ? stoppen() : starten(); });
    buehne.addEventListener("click", antippen);
    buehne.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); antippen(); }
    });

    male(0);

    // Bewegung abgeschaltet: Endzustand zeigen, Knopf ausblenden
    if (ruhig) {
      male(1);
      knopf.hidden = true;
      const st = document.getElementById("raffer-statisch");
      if (st) st.hidden = false;
      return;
    }

    // Nur laufen lassen, solange sichtbar — und einmal von selbst starten
    let schonGelaufen = false;
    const b = new IntersectionObserver((eintraege) => {
      eintraege.forEach(e => {
        if (e.isIntersecting && !schonGelaufen) {
          schonGelaufen = true;
          setTimeout(starten, 600);
        } else if (!e.isIntersecting && laeuft) {
          stoppen();
        }
      });
    }, { threshold: 0.45 });
    b.observe(buehne);
  }

  /* ========================================================
     7) NEONPUNKT — das echte kleine Spiel
     ======================================================== */

  function spielEinrichten() {
    const feld = document.getElementById("spielfeld");
    if (!feld) return;

    const punkt   = feld.querySelector(".spielpunkt");
    const zKlicks = document.getElementById("spiel-klicks");
    const zFarbe  = document.getElementById("spiel-farbe");
    const licht   = document.querySelector(".licht-punkt span");

    let klicks = 0;
    let farbe = 0;
    let groesse = 30;
    const maxGroesse = () => Math.min(feld.clientWidth, feld.clientHeight) * 0.92;

    let uhr = null;

    const male = () => {
      const f = NEON_FARBEN[farbe];
      punkt.style.width = groesse + "px";
      punkt.style.height = groesse + "px";
      punkt.style.background = f;
      punkt.style.boxShadow =
        `0 0 ${Math.round(groesse * 0.9)}px ${Math.round(groesse * 0.22)}px ` +
        `color-mix(in srgb, ${f} 60%, transparent)`;
      if (licht) {
        licht.style.background =
          `radial-gradient(circle, color-mix(in srgb, ${f} 30%, transparent), transparent 66%)`;
      }
      if (zFarbe) zFarbe.textContent = (farbe + 1).toString();
    };

    // Der Punkt wächst — hier in Sekunden statt in 48 Stunden,
    // damit man das Prinzip auf der Seite auch spürt.
    const wachsen = () => {
      if (ruhig) return;
      groesse = Math.min(maxGroesse(), groesse + maxGroesse() / 150);
      male();
    };

    const antippen = () => {
      klicks++;
      farbe = (farbe + 1) % NEON_FARBEN.length;
      groesse = 30;
      feld.classList.add("beruehrt");
      if (zKlicks) zKlicks.textContent = klicks.toString();
      male();
    };

    feld.addEventListener("click", antippen);
    feld.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); antippen(); }
    });

    male();

    // Nur wachsen lassen, solange das Feld sichtbar ist — spart Strom
    const b = new IntersectionObserver((eintraege) => {
      eintraege.forEach(e => {
        if (e.isIntersecting && !uhr && !ruhig) uhr = setInterval(wachsen, 320);
        else if (!e.isIntersecting && uhr) { clearInterval(uhr); uhr = null; }
      });
    }, { threshold: 0.25 });
    b.observe(feld);
  }

  /* ========================================================
     8) QR-CODES — lokal erzeugt, kein fremder Dienst
     Vollständige QR-Erzeugung (Version 1-10, Fehlerkorrektur M).
     ======================================================== */
  const QR = (function () {
    // --- Galois-Feld für Reed-Solomon ---
    const EXP = new Uint8Array(512), LOG = new Uint8Array(256);
    (function () {
      let x = 1;
      for (let i = 0; i < 255; i++) {
        EXP[i] = x; LOG[x] = i;
        x <<= 1; if (x & 0x100) x ^= 0x11D;
      }
      for (let i = 255; i < 512; i++) EXP[i] = EXP[i - 255];
    })();
    const mul = (a, b) => (a === 0 || b === 0) ? 0 : EXP[LOG[a] + LOG[b]];

    function rsPolynom(grad) {
      let p = [1];
      for (let i = 0; i < grad; i++) {
        const n = new Array(p.length + 1).fill(0);
        for (let j = 0; j < p.length; j++) {
          n[j] ^= p[j];
          n[j + 1] ^= mul(p[j], EXP[i]);
        }
        p = n;
      }
      return p;
    }

    function rsRest(daten, anzahl) {
      const gen = rsPolynom(anzahl);
      const rest = new Array(anzahl).fill(0);
      for (const b of daten) {
        const faktor = b ^ rest[0];
        rest.shift(); rest.push(0);
        if (faktor !== 0) {
          for (let i = 0; i < anzahl; i++) rest[i] ^= mul(gen[i + 1], faktor);
        }
      }
      return rest;
    }

    // Kapazität (Byte-Modus, Level M) und Blockaufteilung je Version
    const TAB = {
      1:  { gesamt: 26,  ecPro: 10, g1: 1, d1: 16, g2: 0, d2: 0 },
      2:  { gesamt: 44,  ecPro: 16, g1: 1, d1: 28, g2: 0, d2: 0 },
      3:  { gesamt: 70,  ecPro: 26, g1: 1, d1: 44, g2: 0, d2: 0 },
      4:  { gesamt: 100, ecPro: 18, g1: 2, d1: 32, g2: 0, d2: 0 },
      5:  { gesamt: 134, ecPro: 24, g1: 2, d1: 43, g2: 0, d2: 0 },
      6:  { gesamt: 172, ecPro: 16, g1: 4, d1: 27, g2: 0, d2: 0 },
      7:  { gesamt: 196, ecPro: 18, g1: 4, d1: 31, g2: 0, d2: 0 },
      8:  { gesamt: 242, ecPro: 22, g1: 2, d1: 38, g2: 2, d2: 39 },
      9:  { gesamt: 292, ecPro: 22, g1: 3, d1: 36, g2: 2, d2: 37 },
      10: { gesamt: 346, ecPro: 26, g1: 4, d1: 43, g2: 1, d2: 44 }
    };
    const AUSRICHT = {
      1: [], 2: [6,18], 3: [6,22], 4: [6,26], 5: [6,30],
      6: [6,34], 7: [6,22,38], 8: [6,24,42], 9: [6,26,46], 10: [6,28,50]
    };
    // Format-Bits für Level M, Maske 0..7 (fertig berechnet)
    const FORMAT_M = [
      0x5412, 0x5125, 0x5E7C, 0x5B4B, 0x45F9, 0x40CE, 0x4F97, 0x4AA0
    ];

    function version(laenge) {
      for (let v = 1; v <= 10; v++) {
        const t = TAB[v];
        const daten = t.g1 * t.d1 + t.g2 * t.d2;
        const kopf = 4 + (v < 10 ? 8 : 16);
        if (daten * 8 >= kopf + laenge * 8) return v;
      }
      return null;
    }

    function baue(text) {
      const bytes = new TextEncoder().encode(text);
      const v = version(bytes.length);
      if (!v) return null;
      const t = TAB[v];
      const datenBytes = t.g1 * t.d1 + t.g2 * t.d2;

      // --- Bitstrom ---
      const bits = [];
      const schreibe = (wert, anzahl) => {
        for (let i = anzahl - 1; i >= 0; i--) bits.push((wert >> i) & 1);
      };
      schreibe(0b0100, 4);                       // Byte-Modus
      schreibe(bytes.length, v < 10 ? 8 : 16);   // Länge
      for (const b of bytes) schreibe(b, 8);
      // Abschluss
      for (let i = 0; i < 4 && bits.length < datenBytes * 8; i++) bits.push(0);
      while (bits.length % 8) bits.push(0);
      const roh = [];
      for (let i = 0; i < bits.length; i += 8) {
        roh.push(parseInt(bits.slice(i, i + 8).join(""), 2));
      }
      const fueller = [0xEC, 0x11];
      let f = 0;
      while (roh.length < datenBytes) roh.push(fueller[f++ % 2]);

      // --- Blöcke + Fehlerkorrektur ---
      const bloecke = [], ecBloecke = [];
      let pos = 0;
      for (let i = 0; i < t.g1; i++) {
        const b = roh.slice(pos, pos + t.d1); pos += t.d1;
        bloecke.push(b); ecBloecke.push(rsRest(b, t.ecPro));
      }
      for (let i = 0; i < t.g2; i++) {
        const b = roh.slice(pos, pos + t.d2); pos += t.d2;
        bloecke.push(b); ecBloecke.push(rsRest(b, t.ecPro));
      }
      const folge = [];
      const maxD = Math.max(t.d1, t.d2);
      for (let i = 0; i < maxD; i++)
        for (const b of bloecke) if (i < b.length) folge.push(b[i]);
      for (let i = 0; i < t.ecPro; i++)
        for (const b of ecBloecke) folge.push(b[i]);

      // --- Raster aufbauen ---
      const n = v * 4 + 17;
      const feld = Array.from({ length: n }, () => new Array(n).fill(null));
      const belegt = Array.from({ length: n }, () => new Array(n).fill(false));

      const setz = (x, y, wert) => {
        if (x < 0 || y < 0 || x >= n || y >= n) return;
        feld[y][x] = wert ? 1 : 0; belegt[y][x] = true;
      };

      // Suchmuster + Trennlinien
      const sucher = (sx, sy) => {
        for (let y = -1; y <= 7; y++) for (let x = -1; x <= 7; x++) {
          const px = sx + x, py = sy + y;
          if (px < 0 || py < 0 || px >= n || py >= n) continue;
          const rand = (x >= 0 && x <= 6 && (y === 0 || y === 6)) ||
                       (y >= 0 && y <= 6 && (x === 0 || x === 6));
          const kern = x >= 2 && x <= 4 && y >= 2 && y <= 4;
          setz(px, py, rand || kern);
        }
      };
      sucher(0, 0); sucher(n - 7, 0); sucher(0, n - 7);

      // Taktlinien
      for (let i = 8; i < n - 8; i++) {
        setz(i, 6, i % 2 === 0);
        setz(6, i, i % 2 === 0);
      }

      // Ausrichtungsmuster
      const a = AUSRICHT[v];
      for (const cy of a) for (const cx of a) {
        if ((cx <= 8 && cy <= 8) || (cx >= n - 9 && cy <= 8) || (cx <= 8 && cy >= n - 9)) continue;
        for (let y = -2; y <= 2; y++) for (let x = -2; x <= 2; x++) {
          setz(cx + x, cy + y, Math.max(Math.abs(x), Math.abs(y)) !== 1);
        }
      }

      // Platz für Formatbits reservieren
      for (let i = 0; i < 9; i++) { setz(i, 8, false); setz(8, i, false); }
      for (let i = 0; i < 8; i++) { setz(n - 1 - i, 8, false); setz(8, n - 1 - i, false); }
      setz(8, n - 8, true); // immer dunkel

      // --- Daten einfüllen (Zickzack von rechts unten) ---
      let bitIndex = 0;
      const alleBits = [];
      for (const b of folge) for (let i = 7; i >= 0; i--) alleBits.push((b >> i) & 1);

      let aufwaerts = true;
      for (let rechts = n - 1; rechts > 0; rechts -= 2) {
        if (rechts === 6) rechts = 5; // Taktspalte überspringen
        for (let i = 0; i < n; i++) {
          const y = aufwaerts ? (n - 1 - i) : i;
          for (let s = 0; s < 2; s++) {
            const x = rechts - s;
            if (belegt[y][x]) continue;
            let bit = bitIndex < alleBits.length ? alleBits[bitIndex++] : 0;
            // Maske 0: (y + x) % 2 === 0
            if ((y + x) % 2 === 0) bit ^= 1;
            feld[y][x] = bit;
          }
        }
        aufwaerts = !aufwaerts;
      }

      // --- Formatbits (Level M, Maske 0) ---
      const fmt = FORMAT_M[0];
      for (let i = 0; i < 15; i++) {
        const bit = (fmt >> i) & 1;
        // senkrecht links oben + waagerecht rechts oben
        if (i < 6) feld[8][i] = bit;
        else if (i === 6) feld[8][7] = bit;
        else if (i === 7) feld[8][8] = bit;
        else if (i === 8) feld[7][8] = bit;
        else feld[14 - i][8] = bit;

        if (i < 8) feld[8][n - 1 - i] = bit;
        else feld[n - 15 + i][8] = bit;
      }
      feld[n - 8][8] = 1;

      return { feld, n };
    }

    function svg(text, groesse) {
      const erg = baue(text);
      if (!erg) return "";
      const { feld, n } = erg;
      const rand = 2;
      const gesamt = n + rand * 2;
      let pfad = "";
      for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
          if (feld[y][x]) pfad += `M${x + rand} ${y + rand}h1v1h-1z`;
        }
      }
      return `<svg viewBox="0 0 ${gesamt} ${gesamt}" width="${groesse}" height="${groesse}" ` +
             `xmlns="http://www.w3.org/2000/svg" role="img" aria-label="QR-Code">` +
             `<rect width="${gesamt}" height="${gesamt}" fill="#fff"/>` +
             `<path d="${pfad}" fill="#000"/></svg>`;
    }

    return { svg };
  })();

  function qrEinrichten() {
    document.querySelectorAll("[data-qr]").forEach(el => {
      const ziel = el.dataset.qr;
      if (!ziel) return;
      try {
        const code = QR.svg(ziel, 92);
        if (code) el.innerHTML = code;
        else el.closest(".qr")?.remove();
      } catch (e) {
        el.closest(".qr")?.remove();
      }
    });
  }

  /* ========================================================
     9) LICHTSPUREN im FaNiCa-Kapitel
     ======================================================== */
  function spurenEinrichten() {
    const feld = document.querySelector(".spuren");
    if (!feld || ruhig) return;
    // Auf dem Handy gar nicht erst erzeugen: neun dauerhaft animierte
    // Elemente kosten Bildrate, sind dort aber kaum zu sehen.
    // (Falk 31.07.: „auf dem Handy muss flüssiger laufen im Browser".)
    if (window.matchMedia("(max-width: 900px)").matches) return;
    const farben = ["var(--rot)", "var(--tuerkis)", "var(--violett)", "var(--gelb)"];
    for (let i = 0; i < 9; i++) {
      const s = document.createElement("i");
      s.style.top = (6 + Math.random() * 88) + "%";
      s.style.width = (18 + Math.random() * 26) + "%";
      s.style.setProperty("--spurfarbe", farben[i % farben.length]);
      s.style.animationDuration = (4.5 + Math.random() * 5.5) + "s";
      s.style.animationDelay = (Math.random() * 6) + "s";
      s.style.opacity = (0.35 + Math.random() * 0.5).toFixed(2);
      feld.appendChild(s);
    }
  }

  /* ========================================================
     10) MARKEN-PUNKTE im Hero — springen zum Kapitel
     ======================================================== */
  function markenpunkteEinrichten() {
    document.querySelectorAll(".markenpunkt").forEach(p => {
      p.addEventListener("click", () => {
        const ziel = document.querySelector(p.dataset.ziel);
        if (ziel) ziel.scrollIntoView({ behavior: ruhig ? "auto" : "smooth", block: "start" });
      });
    });
  }

  /* ========================================================
     10b) KONTAKTFORMULAR
     Eine reine HTML-Seite kann selbst keine Mail verschicken. Das
     Formular baut deshalb eine fertige mailto-Nachricht und oeffnet
     damit das E-Mail-Programm des Besuchers. Von dieser Seite aus
     wird nichts verschickt und nichts gespeichert.
     ======================================================== */
  const KONTAKT_MAIL = "fanicafuntipp@gmail.com";

  function formularEinrichten() {
    const form = document.getElementById("kontakt-form");
    if (!form) return;

    const thema  = document.getElementById("kf-thema");
    const name   = document.getElementById("kf-name");
    const mail   = document.getElementById("kf-mail");
    const text   = document.getElementById("kf-text");
    const fehler = document.getElementById("kf-fehler");

    // Themenauswahl aus texte.js fuellen
    const themen = T("kontakt.formThemen") || [];
    if (thema) {
      thema.innerHTML = themen.map(function (t) {
        const sicher = String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;")
                                .replace(/"/g, "&quot;");
        return '<option value="' + sicher + '">' + sicher + '</option>';
      }).join("");
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const fehlt = !name.value.trim() || !text.value.trim();
      if (fehler) fehler.hidden = !fehlt;
      if (fehlt) {
        (!name.value.trim() ? name : text).focus();
        return;
      }

      const betreff = "[FaNiCa] " + (thema ? thema.value : "Nachricht");
      const koerper =
        text.value.trim() + "\n\n" +
        "---\n" +
        "Von: " + name.value.trim() +
        (mail.value.trim() ? "\nAntwort an: " + mail.value.trim() : "") +
        "\nGesendet ueber die FaNiCa-Website";

      window.location.href = "mailto:" + KONTAKT_MAIL +
        "?subject=" + encodeURIComponent(betreff) +
        "&body=" + encodeURIComponent(koerper);
    });

    // Tippt jemand nach einer Fehlermeldung weiter, verschwindet sie
    [name, text].forEach(function (f) {
      if (f) f.addEventListener("input", function () {
        if (fehler) fehler.hidden = true;
      });
    });
  }

  /* ========================================================
     11) JAHR IM FUSS
     ======================================================== */
  function jahrEinrichten() {
    const j = document.getElementById("jahr");
    if (j) j.textContent = new Date().getFullYear();
  }

  /* ========================================================
     12) LESEFORTSCHRITT — Strich unter der Kopfzeile
     ======================================================== */
  function fortschrittEinrichten() {
    const balken = document.querySelector(".fortschritt");
    if (!balken) return;
    let geplant = false;
    const messen = () => {
      geplant = false;
      const hoehe = document.documentElement.scrollHeight - window.innerHeight;
      const anteil = hoehe > 0 ? Math.min(1, window.scrollY / hoehe) : 0;
      balken.style.setProperty("--anteil", anteil.toFixed(4));
    };
    const anstossen = () => {
      if (geplant) return;
      geplant = true;
      requestAnimationFrame(messen);
    };
    addEventListener("scroll", anstossen, { passive: true });
    addEventListener("resize", anstossen, { passive: true });
    messen();
  }

  /* ========================================================
     13) HANDY-NEIGUNG — die Mockups kippen zur Maus
     ======================================================== */
  function neigenEinrichten() {
    if (ruhig || matchMedia("(hover: none)").matches) return;
    const geraete = document.querySelectorAll("[data-neigen]");
    if (!geraete.length) return;

    geraete.forEach(g => {
      let laeuft = false;

      const bewegen = (e) => {
        if (laeuft) return;
        laeuft = true;
        requestAnimationFrame(() => {
          laeuft = false;
          const r = g.getBoundingClientRect();
          // -0,5 … +0,5 relativ zur Mitte des Geräts
          const px = (e.clientX - r.left) / r.width - .5;
          const py = (e.clientY - r.top) / r.height - .5;
          const kippY = px * 16;          // Grad um die Hochachse
          const kippX = -py * 12;         // Grad um die Querachse
          g.style.transform =
            `perspective(1100px) rotateX(${kippX.toFixed(2)}deg) ` +
            `rotateY(${kippY.toFixed(2)}deg) translateZ(14px) scale(1.03)`;
          // Reflex wandert mit
          g.style.setProperty("--glanzwinkel", (135 + px * 90).toFixed(0) + "deg");
          g.style.setProperty("--glanzstaerke", (.45 + Math.abs(px) * .5).toFixed(2));
        });
      };

      const zurueck = () => {
        g.style.transform = "";
        g.style.removeProperty("--glanzwinkel");
        g.style.removeProperty("--glanzstaerke");
      };

      g.addEventListener("mousemove", bewegen);
      g.addEventListener("mouseleave", zurueck);
    });
  }

  /* ========================================================
     15) ZIELSCHEIBE — Zone anklicken, Punkte je System sehen
     ======================================================== */
  function scheibeEinrichten() {
    const buehne = document.getElementById("scheibe-buehne");
    const tafel = document.getElementById("scheibe-tafel");
    if (!buehne || !tafel) return;

    const zonen = T("instinct.scheibeZonen") || [];
    const systeme = T("instinct.scheibeSysteme") || [];
    if (!zonen.length) return;

    /* --- Scheibe zeichnen: Tierumriss mit den Wertungszonen --- */
    // Die Zonen liegen ineinander — außen "Vorbei", innen "Spot".
    const ringe = [
      { rx: 132, ry: 104 },   // Vorbei  (Körperumriss)
      { rx:  92, ry:  74 },   // Körper
      { rx:  56, ry:  45 },   // Kill
      { rx:  26, ry:  21 }    // Spot
    ];
    // zonen[] ist von innen (Spot) nach außen sortiert → umdrehen
    const vonAussen = [...zonen].reverse();

    buehne.innerHTML = `
      <svg viewBox="0 0 340 340" role="img"
           aria-label="Zielscheibe mit den Wertungszonen — Zone wählen">
        <defs>
          <radialGradient id="scheibeGrund">
            <stop offset="0%" stop-color="#1C2318"/>
            <stop offset="100%" stop-color="#0B0E0A"/>
          </radialGradient>
        </defs>
        <circle cx="170" cy="170" r="160" fill="url(#scheibeGrund)"
                stroke="rgba(255,255,255,.09)"/>
        ${vonAussen.map((z, i) => `
          <ellipse class="scheibe-zone" data-zone="${i}"
                   cx="170" cy="170" rx="${ringe[i].rx}" ry="${ringe[i].ry}"
                   fill="${z.farbe}"
                   stroke="rgba(0,0,0,.45)" stroke-width="1.5"
                   tabindex="0" role="button"
                   aria-label="${z.name}">
            <title>${z.name}</title>
          </ellipse>`).join("")}
        <circle cx="170" cy="170" r="4" fill="#EDEBE3" pointer-events="none"/>
        ${vonAussen.map((z, i) => `
          <text x="170" y="${170 - ringe[i].ry + 16}"
                text-anchor="middle" font-size="12" font-weight="700"
                fill="#EDEBE3"
                stroke="rgba(8,10,6,.8)" stroke-width="3"
                paint-order="stroke"
                font-family="system-ui, sans-serif">${z.name}</text>`).join("")}
      </svg>`;

    /* --- Tafel füllen --- */
    const zeigen = (index) => {
      // index bezieht sich auf vonAussen
      const z = vonAussen[index];
      if (!z) return;
      tafel.innerHTML = `
        <div class="wertung-kopf">
          <b>${z.name}</b>
          <span>${T("instinct.scheibeSpalte")}</span>
        </div>
        <table class="wertung">
          <tbody>
            ${systeme.map(s => `
              <tr>
                <td>${s}</td>
                <td>${z.punkte[s] !== undefined ? z.punkte[s] : "–"}</td>
              </tr>`).join("")}
          </tbody>
        </table>`;
      buehne.querySelectorAll(".scheibe-zone").forEach((e, i) => {
        e.classList.toggle("aktiv", i === index);
      });
    };

    buehne.querySelectorAll(".scheibe-zone").forEach((e) => {
      const i = parseInt(e.dataset.zone, 10);
      e.addEventListener("click", () => zeigen(i));
      e.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); zeigen(i); }
      });
    });

    zeigen(vonAussen.length - 1);   // Start: innerste Zone (Spot)
  }

  /* ========================================================
     14) KARTEN-LICHT — Schein folgt dem Zeiger
     ======================================================== */
  function kartenLichtEinrichten() {
    if (ruhig || matchMedia("(hover: none)").matches) return;
    let laeuft = false;
    document.addEventListener("mousemove", (e) => {
      if (laeuft) return;
      laeuft = true;
      requestAnimationFrame(() => {
        laeuft = false;
        const karte = e.target.closest && e.target.closest(".karte");
        if (!karte) return;
        const r = karte.getBoundingClientRect();
        karte.style.setProperty("--mx", (e.clientX - r.left) + "px");
        karte.style.setProperty("--my", (e.clientY - r.top) + "px");
      });
    }, { passive: true });
  }

  /* ---- Bögen: auf dem Handy klappbar, ab 780 px dauerhaft offen ----
     Falk 31.07.: „die Bögen werden klappbar und nicht so groß auf dem
     Handy dargestellt". <details> ist von Haus aus zu; ab Tablet-Breite
     öffnen wir alle und lassen sie offen (das CSS blendet dort Pfeil und
     Mini-Vorschau aus, so wirkt der Kopf wie eine normale Überschrift). */
  function boegenEinrichten() {
    const boegen = document.querySelectorAll("details.bogen");
    if (!boegen.length) return;
    const breit = window.matchMedia("(min-width: 780px)");

    function anpassen() {
      boegen.forEach(b => {
        if (breit.matches) b.open = true;
        else b.removeAttribute("open");
      });
    }
    anpassen();
    /* Beim Umschalten der Breite (Drehen des Handys, Fenster ziehen)
       nachziehen — sonst bliebe ein am Rechner geöffneter Bogen auf
       dem Handy aufgeklappt und die Seite wäre wieder zu lang. */
    if (breit.addEventListener) breit.addEventListener("change", anpassen);
    else breit.addListener(anpassen);          /* ältere Browser */
  }

  /* ---- Knöpfe: Effekt folgt dem Mauszeiger ----
     Falks Vorlage schreibt für zwei der sechs Effekte ausdrücklich den
     Zeigerpunkt vor: Ripple `surface: wave(x,y)` und Lantern
     `light: glow(x,y)`. Ohne das gingen beide immer aus der Mitte los —
     das war der Grund, warum sie „nicht den Effekt hatten".
     Hier werden nur zwei CSS-Variablen gesetzt, die Optik macht das CSS.
     Auf Touch-Geräten gibt es keinen Zeiger — dort bleibt die Mitte,
     der Effekt geht also nicht verloren. */
  function knopfZeigerEinrichten() {
    if (matchMedia("(hover: none)").matches) return;
    document.querySelectorAll(".nbtn.b-ripple, .nbtn.b-lantern").forEach(k => {
      k.addEventListener("pointermove", (e) => {
        const r = k.getBoundingClientRect();
        k.style.setProperty("--mx", (e.clientX - r.left) + "px");
        k.style.setProperty("--my", (e.clientY - r.top) + "px");
      }, { passive: true });
      /* Beim Verlassen zurücksetzen, sonst startet die nächste Welle
         an der alten Stelle. */
      k.addEventListener("pointerleave", () => {
        k.style.removeProperty("--mx");
        k.style.removeProperty("--my");
      }, { passive: true });
    });
  }

  /// Baut die Zeitkonto-Woche und zaehlt den Saldo Tag fuer Tag hoch.
  function kontoEinrichten() {
    const kasten = document.getElementById("zeit-konto");
    if (!kasten) return;

    const buehne = document.getElementById("konto-buehne");
    const standEl = document.getElementById("konto-summe");
    const deutung = document.getElementById("konto-deutung");
    const laeuftEl = document.getElementById("konto-laeuft");
    if (!buehne || !standEl) return;

    const SOLL = 480;
    const START = 95;
    const TAGE = [
      { ist: 528, heute: false },
      { ist: 451, heute: false },
      { ist: 505, heute: false },
      { ist: 462, heute: false },
      { ist: 337, heute: true }
    ];
    const namen = T("zeitwissen.kontoTage") || ["Mo", "Di", "Mi", "Do", "Fr"];

    const alsDifferenz = (min) => {
      const abs = Math.abs(Math.round(min));
      return (min < 0 ? "-" : "+") + Math.floor(abs / 60) +
        ":" + String(abs % 60).padStart(2, "0") + " h";
    };
    const alsStunden = (min) => {
      const abs = Math.abs(Math.round(min));
      return Math.floor(abs / 60) + ":" + String(abs % 60).padStart(2, "0") + " h";
    };

    /// Gemeinsame Skala aus den abgeschlossenen Tagen.
    const groesste = Math.max(
      ...TAGE.filter(t => !t.heute).map(t => Math.abs(t.ist - SOLL)), 1);

    buehne.innerHTML = "";
    const linie = document.createElement("div");
    linie.className = "konto-linie";
    linie.setAttribute("aria-hidden", "true");
    buehne.appendChild(linie);

    const sollText = document.createElement("span");
    sollText.className = "konto-soll";
    sollText.setAttribute("aria-hidden", "true");
    sollText.textContent = T("zeitwissen.kontoSoll") + " " + alsStunden(SOLL);
    buehne.appendChild(sollText);

    const saeulen = TAGE.map((tag, i) => {
      const diff = tag.ist - SOLL;
      const knopf = document.createElement("button");
      knopf.type = "button";
      knopf.className = "konto-tag" +
        (tag.heute ? " heute" : (diff < 0 ? " minus" : ""));
      knopf.setAttribute("aria-label",
        namen[i] + ": " + T("zeitwissen.kontoIst") + " " + alsStunden(tag.ist) +
        ", " + T("zeitwissen.kontoSoll") + " " + alsStunden(SOLL) +
        (tag.heute ? " (" + T("zeitwissen.kontoOffen") + ", " +
                     alsStunden(diff) + " " + T("zeitwissen.kontoFehlt") + ")"
                   : " (" + alsDifferenz(diff) + ")"));

      const oben = document.createElement("span");
      oben.className = "konto-haelfte oben";
      const unten = document.createElement("span");
      unten.className = "konto-haelfte unten";

      const saeule = document.createElement("i");
      saeule.className = "konto-saeule";
      if (tag.heute) knopf.appendChild(saeule);
      else (diff < 0 ? unten : oben).appendChild(saeule);

      const blase = document.createElement("span");
      blase.className = "konto-blase";
      blase.innerHTML =
        T("zeitwissen.kontoIst") + " <b>" + alsStunden(tag.ist) + "</b> · " +
        T("zeitwissen.kontoSoll") + " <b>" + alsStunden(SOLL) + "</b><br><b>" +
        (tag.heute ? alsStunden(diff) + "</b> " + T("zeitwissen.kontoFehlt")
                   : alsDifferenz(diff) + "</b>");

      const name = document.createElement("span");
      name.className = "konto-name";
      name.textContent = namen[i];

      knopf.append(oben, unten, blase, name);
      buehne.appendChild(knopf);

      const anteil = tag.heute ? 0 : Math.min(1, Math.abs(diff) / groesste);
      return { knopf, saeule, diff: tag.heute ? 0 : diff, heute: !!tag.heute, anteil };
    });

    const standSetzen = (min, offen) => {
      standEl.textContent = alsDifferenz(min);
      kasten.classList.toggle("ist-minus", min < 0);
      if (!deutung) return;
      deutung.textContent = offen
        ? T("zeitwissen.kontoHeute")
        : (min === 0 ? T("zeitwissen.kontoNull")
          : (min < 0 ? T("zeitwissen.kontoMinus") : T("zeitwissen.kontoPlus")));
    };

    const summe = START + saeulen.reduce((s, x) => s + x.diff, 0);

    /// Setzt die Buehne auf den Zustand nach den ersten n Tagen.
    const zeigeBis = (n) => {
      let stand = START;
      saeulen.forEach((s, i) => {
        const da = i < n;
        s.knopf.classList.toggle("gesetzt", da);
        if (!s.heute) s.saeule.style.height = da ? (s.anteil * 100) + "%" : "0%";
        if (da && i === n - 1) s.knopf.setAttribute("aria-current", "true");
        else s.knopf.removeAttribute("aria-current");
        if (da) stand += s.diff;
      });
      standSetzen(stand, n >= saeulen.length || (n > 0 && saeulen[n - 1].heute));
    };

    if (laeuftEl) laeuftEl.hidden = false;

    if (ruhig) { zeigeBis(saeulen.length); return; }

    let uhr = null, schritt = 0, sichtbar = false;

    const anhalten = () => { if (uhr) { clearTimeout(uhr); uhr = null; } };

    const naechster = () => {
      uhr = null;
      schritt = Math.min(schritt + 1, saeulen.length);
      zeigeBis(schritt);
      if (schritt < saeulen.length) planen(780);
      else setTimeout(() => saeulen.forEach(
        s => s.knopf.removeAttribute("aria-current")), 700);
    };

    const planen = (ms) => {
      anhalten();
      if (!sichtbar || document.hidden || schritt >= saeulen.length) return;
      uhr = setTimeout(naechster, ms);
    };

    zeigeBis(0);

    /// Laeuft nur, solange der Kasten im Bild und der Tab sichtbar ist.
    new IntersectionObserver((eintraege) => {
      eintraege.forEach(e => {
        sichtbar = e.isIntersecting;
        if (sichtbar) planen(schritt === 0 ? 420 : 780); else anhalten();
      });
    }, { threshold: 0.35 }).observe(kasten);

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) anhalten(); else planen(420);
    });
  }

  /* ========================================================
     ZAPFSÄULE — eine echte Betankung läuft mit
     ======================================================== */
  function saeuleEinrichten() {
    const saeule = document.getElementById("saeule");
    if (!saeule) return;

    const aLiter  = document.getElementById("saeule-liter");
    const aBetrag = document.getElementById("saeule-betrag");
    const aPreis  = document.getElementById("saeule-preis");
    const aBeleg  = document.getElementById("saeule-beleg");
    const aProbe  = document.getElementById("saeule-probe");
    const fluss   = document.getElementById("saeule-fluss");
    const knopf   = document.getElementById("saeule-knopf");

    const TANKUNGEN = [
      { datum: "2021-06-29", ort: "Oil Husum",     preis: 1.540, liter: 60.67 },
      { datum: "2021-07-23", ort: "BFT Hattstedt", preis: 1.580, liter: 12.67 },
      { datum: "2021-07-28", ort: "Oil Husum",     preis: 1.620, liter: 18.52 },
      { datum: "2021-08-01", ort: "BFT Hattstedt", preis: 1.600, liter: 15.67 }
    ];

    const ZAPF_MS = 5200;
    const HALT_MS = 2600;

    const ort = () => (window.SPRACHE === "en" ? "en-GB" : "de-DE");
    const zahl = (wert, stellen) => wert.toLocaleString(ort(),
      { minimumFractionDigits: stellen, maximumFractionDigits: stellen });
    const datum = (iso) => new Date(iso + "T12:00:00").toLocaleDateString(ort(),
      { day: "2-digit", month: "2-digit", year: "numeric" });

    let nr = 0, uhr = null, wartet = null, haltOffen = false;
    let laeuft = false, sichtbar = false, start = 0, verbraucht = 0, runde = 0;

    const male = (t, anteil) => {
      const liter = t.liter * anteil;
      aLiter.textContent  = zahl(liter, 2);
      aBetrag.textContent = zahl(Math.round(t.preis * liter * 100) / 100, 2);
      fluss.style.width = (anteil * 100).toFixed(1) + "%";
    };

    const ruesten = (t) => {
      saeule.classList.remove("fertig");
      aPreis.textContent = zahl(t.preis, 3);
      aBeleg.textContent = datum(t.datum) + " · " + t.ort;
      aProbe.textContent = T("tankspur.saeuleLaeuft");
      male(t, 0);
    };

    /// Zeigt die Rechnung Preis mal Menge gleich Betrag.
    const probeZeigen = (t) => {
      const betrag = Math.round(t.preis * t.liter * 100) / 100;
      aProbe.innerHTML =
        '<i>' + zahl(t.preis, 3) + '</i> ' + T("tankspur.saeuleMal") +
        ' <i>' + zahl(t.liter, 2) + '</i> ' + T("tankspur.saeuleErgibt") +
        ' <i>' + zahl(betrag, 2) + '</i> ' +
        '<span class="saeule-haken">' + T("tankspur.saeuleGeprueft") + '</span>';
      saeule.classList.add("fertig");
    };

    const weiterstellen = () => {
      nr = (nr + 1) % TANKUNGEN.length;
      verbraucht = 0;
      if (nr === 0) runde += 1;
    };

    const schritt = (jetzt) => {
      uhr = null;
      if (!laeuft) return;
      const t = TANKUNGEN[nr];
      const anteil = Math.min(1, Math.max(0, (verbraucht + (jetzt - start)) / ZAPF_MS));
      male(t, anteil * (2 - anteil));
      if (anteil < 1) { uhr = requestAnimationFrame(schritt); return; }
      laeuft = false;
      saeule.classList.remove("zapft");
      probeZeigen(t);
      if (nr === TANKUNGEN.length - 1) {
        runde += 1;
        if (knopf) knopf.hidden = false;
        return;
      }
      wartet = setTimeout(() => {
        wartet = null;
        weiterstellen();
        anfangen();
      }, HALT_MS);
    };

    const anfangen = () => {
      if (!sichtbar || document.hidden || laeuft || wartet || runde > 0) return;
      if (haltOffen) { haltOffen = false; weiterstellen(); }
      if (verbraucht === 0) ruesten(TANKUNGEN[nr]);
      laeuft = true;
      saeule.classList.add("zapft");
      start = performance.now();
      uhr = requestAnimationFrame(schritt);
    };

    /// Haelt an und merkt sich gezapfte Zeit samt offenem Halt.
    const anhalten = () => {
      if (laeuft) verbraucht += performance.now() - start;
      laeuft = false;
      if (uhr) { cancelAnimationFrame(uhr); uhr = null; }
      if (wartet) { clearTimeout(wartet); wartet = null; haltOffen = true; }
      saeule.classList.remove("zapft");
    };

    if (ruhig) {
      const t = TANKUNGEN[0];
      ruesten(t);
      male(t, 1);
      probeZeigen(t);
      return;
    }

    ruesten(TANKUNGEN[0]);

    if (knopf) knopf.addEventListener("click", () => {
      knopf.hidden = true;
      runde = 0; nr = 0; verbraucht = 0; haltOffen = false;
      ruesten(TANKUNGEN[0]);
      anfangen();
    });

    new IntersectionObserver((eintraege) => {
      eintraege.forEach(e => {
        sichtbar = e.isIntersecting;
        if (sichtbar) anfangen(); else anhalten();
      });
    }, { threshold: 0.01 }).observe(saeule);

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) anhalten(); else anfangen();
    });
  }

  /// Zaehlerwerk: Rollen zaehlen vom Vormonatsstand auf den neuen Stand hoch.
  function zaehlerwerkEinrichten() {
    const werk = document.getElementById("zaehlerwerk");
    if (!werk) return;

    const rollen     = document.getElementById("zw-rollen");
    const aEinheit   = document.getElementById("zw-einheit");
    const aVerbrauch = document.getElementById("zw-verbrauch");
    const aVormonat  = document.getElementById("zw-vormonat");
    const aSaldo     = document.getElementById("zw-saldo");
    const aVorlesen  = document.getElementById("zw-vorlesen");
    const feldSaldo  = document.getElementById("zw-saldo-feld");
    const balken     = document.getElementById("zw-fortschritt");
    const knoepfe    = [...werk.querySelectorAll(".zw-reiter-knopf")];
    if (!rollen) return;

    /// Staende in Tausendstel der Einheit, Preis und Abschlag in Cent.
    const BEREICHE = {
      gas:    { ton: "#F2B705", hell: "#FFD34D", einheit: "m³",
                vorher: 4128637,  nachher: 4142905,  preis: 118, abschlag: 9500 },
      wasser: { ton: "#1E88E5", hell: "#6BB4EE", einheit: "m³",
                vorher: 361284,   nachher: 364117,   preis: 542, abschlag: 2600 },
      strom:  { ton: "#43A047", hell: "#7BD88F", einheit: "kWh",
                vorher: 28714000, nachher: 28937000, preis: 34,  abschlag: 8800 }
    };
    const FOLGE = ["gas", "wasser", "strom"];
    const DAUER = 3200;
    const PAUSE = 1800;

    /// Baut so viele Vorkommarollen, wie der hoechste Stand des Bereichs braucht.
    let ketten = [], vorkomma = 0;
    const rollenBauen = (name) => {
      const b = BEREICHE[name];
      vorkomma = String(Math.floor(b.nachher / 1000)).length;
      rollen.textContent = "";
      ketten = [];
      for (let i = 0; i <= vorkomma; i++) {
        if (i === vorkomma) {
          const komma = document.createElement("span");
          komma.className = "zw-komma";
          komma.textContent = (1.1).toLocaleString(window.SPRACHE).charAt(1);
          rollen.appendChild(komma);
        }
        const rolle = document.createElement("div");
        rolle.className = "zw-rolle" + (i === vorkomma ? " zw-nachkomma" : "");
        const kette = document.createElement("div");
        kette.className = "zw-kette";
        for (let z = 0; z <= 10; z++) {
          const s = document.createElement("span");
          s.textContent = String(z % 10);
          kette.appendChild(s);
        }
        rolle.appendChild(kette);
        rollen.appendChild(rolle);
        ketten.push(kette);
      }
    };

    /// Dreht die Rollen auf den Stand; `rasten` haelt sie auf ganzen Ziffern.
    const rollenMalen = (tausendstel, rasten) => {
      const anzeige = tausendstel / 100;
      for (let i = ketten.length - 1; i >= 0; i--) {
        const teiler = Math.pow(10, ketten.length - 1 - i);
        const eigen  = anzeige / teiler;
        const stelle = Math.floor(eigen) % 10;
        const bruch  = eigen - Math.floor(eigen);
        const dreht  = rasten ? 0
                     : (i === ketten.length - 1) ? bruch
                     : (bruch > 0.9 ? (bruch - 0.9) * 10 : 0);
        ketten[i].style.setProperty("--wert", (stelle + dreht).toFixed(3));
      }
    };

    const zahl = (wert, stellen) => wert.toLocaleString(window.SPRACHE, {
      minimumFractionDigits: stellen, maximumFractionDigits: stellen });

    const euro = (cent) => zahl(Math.abs(cent) / 100, 2) + " €";
    const menge = (tausendstel, einheit) =>
      zahl(tausendstel / 1000, 3) + " " + einheit;

    let nr = 0, uhr = null, wecker = null, start = 0;
    let sichtbar = true, durchgelaufen = false;
    let anteilJetzt = 0, ruhtInPause = false;

    const bereichSetzen = (name) => {
      const b = BEREICHE[name];
      rollenBauen(name);
      werk.dataset.bereich = name;
      werk.style.setProperty("--bt", b.ton);
      werk.style.setProperty("--bt-hell", b.hell);
      aEinheit.textContent = b.einheit;
      aVormonat.textContent = menge(b.vorher, b.einheit);
      knoepfe.forEach(k =>
        k.setAttribute("aria-pressed", String(k.dataset.b === name)));
    };

    const malen = (name, anteil, rasten) => {
      const b = BEREICHE[name];
      anteilJetzt = anteil;
      const stand = b.vorher + (b.nachher - b.vorher) * anteil;
      rollenMalen(stand, rasten);

      const verbrauch = Math.round((b.nachher - b.vorher) * anteil);
      aVerbrauch.textContent = menge(verbrauch, b.einheit);

      const saldo = b.abschlag - Math.round(verbrauch / 1000 * b.preis);
      aSaldo.textContent = (saldo >= 0 ? "+ " : "− ") + euro(saldo);
      feldSaldo.classList.toggle("gut",  saldo >= 0);
      feldSaldo.classList.toggle("nach", saldo < 0);

      if (balken) balken.style.width = (anteil * 100).toFixed(1) + "%";

      if (aVorlesen && (rasten || anteil === 0)) {
        aVorlesen.textContent = T("ablesebar.zaehlerwerkVorlesen")
          .replace("{bereich}", T("ablesebar.zaehlerwerk" +
            name.charAt(0).toUpperCase() + name.slice(1)))
          .replace("{stand}", menge(Math.round(stand), b.einheit))
          .replace("{verbrauch}", menge(verbrauch, b.einheit));
      }
    };

    /// Haelt an und friert Rollen wie Balken auf dem erreichten Anteil ein.
    function anhalten() {
      if (uhr)    { cancelAnimationFrame(uhr); uhr = null; }
      if (wecker) { clearTimeout(wecker); wecker = null; ruhtInPause = true; }
      werk.classList.add("zw-still");
      ketten.forEach(k => {
        const lauf = getComputedStyle(k).transform;
        k.style.transform = lauf === "none" ? "" : lauf;
      });
    }

    /// Gibt die eingefrorenen Rollen wieder frei.
    function loesen() {
      werk.classList.remove("zw-still");
      ketten.forEach(k => { k.style.transform = ""; });
    }

    /// Liegt der Block gerade im Fenster?
    const imBild = () => {
      const r = werk.getBoundingClientRect();
      const h = window.innerHeight || 0;
      return r.bottom > h * 0.1 && r.top < h * 0.9;
    };

    const schritt = (jetzt) => {
      if (document.hidden || !imBild()) { uhr = null; sichtbar = false; anhalten(); return; }
      sichtbar = true;
      const anteil = Math.min(1, (jetzt - start) / DAUER);
      if (anteil < 1) { malen(FOLGE[nr], anteil); uhr = requestAnimationFrame(schritt); return; }
      uhr = null;
      malen(FOLGE[nr], 1, true);
      if (nr === FOLGE.length - 1) { durchgelaufen = true; return; }
      wecker = setTimeout(() => { wecker = null; nr += 1; laufen(); }, PAUSE);
    };

    /// Startet den Bereich von vorn.
    const laufen = () => {
      anhalten();
      loesen();
      ruhtInPause = false;
      bereichSetzen(FOLGE[nr]);
      malen(FOLGE[nr], 0);
      start = performance.now();
      uhr = requestAnimationFrame(schritt);
    };

    /// Setzt dort fort, wo angehalten wurde.
    const fortsetzen = () => {
      if (uhr || wecker || durchgelaufen) return;
      if (document.hidden || !imBild()) return;
      sichtbar = true;
      loesen();
      if (ruhtInPause) {
        ruhtInPause = false;
        wecker = setTimeout(() => { wecker = null; nr += 1; laufen(); }, PAUSE);
        return;
      }
      start = performance.now() - anteilJetzt * DAUER;
      uhr = requestAnimationFrame(schritt);
    };

    /// Ein Reiterklick zeigt den Bereich fertig gerastet.
    knoepfe.forEach(k => k.addEventListener("click", () => {
      anhalten();
      loesen();
      ruhtInPause = false;
      durchgelaufen = true;
      nr = Math.max(0, FOLGE.indexOf(k.dataset.b));
      bereichSetzen(FOLGE[nr]);
      malen(FOLGE[nr], 1, true);
    }));

    /// Ohne Bewegung: Endstand des letzten Bereichs, alles steht still.
    if (ruhig) {
      nr = FOLGE.length - 1;
      durchgelaufen = true;
      bereichSetzen(FOLGE[nr]);
      malen(FOLGE[nr], 1, true);
      return;
    }

    bereichSetzen("gas");
    malen("gas", 0);
    laufen();

    new IntersectionObserver((eintraege) => {
      eintraege.forEach(e => {
        if (!e.isIntersecting) { sichtbar = false; anhalten(); }
        else fortsetzen();
      });
    }, { threshold: 0.2 }).observe(werk);

    addEventListener("scroll", fortsetzen, { passive: true });
    addEventListener("resize", fortsetzen, { passive: true });

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) anhalten(); else fortsetzen();
    });
  }

  /* ========================================================
     STUNDENPLAN — Trainings laufen an einem festen Endzeitpunkt ab.
     ======================================================== */
  function stundenplanEinrichten() {
    const tafel = document.getElementById("plan-tafel");
    if (!tafel) return;

    const felder = [...tafel.querySelectorAll(".plan-fach")];
    if (!felder.length) return;

    const uhrFeld = document.getElementById("plan-uhr");
    const zeiger  = document.getElementById("plan-weg");
    const hinweis = document.getElementById("plan-hinweis");

    const BASIS = 45, WACHSTUM = 1.135, KNICK = 60, SPAET = 1.012;
    const HALTEN = 1.6, SPIELTEMPO = 300, ZIFFERSTUNDEN = 6;

    /// Trainingsdauer einer Stufe in Spielsekunden
    const dauer = (lv) => lv <= KNICK
      ? BASIS * Math.pow(WACHSTUM, lv - 1)
      : BASIS * Math.pow(WACHSTUM, KNICK - 1) * Math.pow(SPAET, lv - KNICK);

    const zeitText = (s) => {
      s = Math.max(0, Math.round(s));
      const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60);
      if (h > 0) return T("campus.planStd").replace("{h}", h)
                    .replace("{m}", String(m).padStart(2, "0"));
      if (m > 0) return T("campus.planMin").replace("{m}", m)
                    .replace("{s}", String(s % 60).padStart(2, "0"));
      return T("campus.planSek").replace("{s}", s);
    };

    const faecher = felder.map((el) => {
      const level = Number(el.dataset.level) || 1;
      return {
        el,
        balken: el.querySelector(".plan-balken i"),
        rest:   el.querySelector(".plan-rest"),
        stufe:  el.querySelector(".plan-stufe"),
        level,
        lief:   (Number(el.dataset.ab) || 0) / 100 * dauer(level),
        halten: 0,
        frisch: 0
      };
    });

    let weg = 0, laeuft = false, letzte = 0, bild = null;

    const zeichnen = () => {
      faecher.forEach((f) => {
        const ganz   = dauer(f.level);
        const anteil = Math.min(1, f.lief / ganz);
        if (f.balken) f.balken.style.width = (anteil * 100).toFixed(2) + "%";
        const fertig = f.halten > 0;
        f.el.classList.toggle("fertig", fertig);
        f.el.classList.toggle("frisch", f.frisch > 0);
        if (f.rest) f.rest.textContent = fertig
          ? T("campus.planAbholen")
          : zeitText(ganz - f.lief);
        if (f.stufe) f.stufe.textContent =
          T("campus.planStufe").replace("{n}", f.level);
      });
      if (uhrFeld) uhrFeld.textContent = zeitText(weg);
      if (zeiger) zeiger.style.transform =
        "rotate(" + ((weg / 3600) * (360 / ZIFFERSTUNDEN)).toFixed(1) + "deg)";
    };

    /// alle Faecher und die Uhr laufen mit demselben Spielzeit-Massstab
    const rechnen = (dt) => {
      const zuwachs = dt * SPIELTEMPO;
      weg += zuwachs;
      faecher.forEach((f) => {
        if (f.frisch > 0) f.frisch -= dt;
        if (f.halten > 0) {
          f.halten -= dt;
          if (f.halten <= 0) {
            f.halten = 0; f.level += 1; f.lief = 0; f.frisch = 0.9;
          }
          return;
        }
        f.lief += zuwachs;
        const ganz = dauer(f.level);
        if (f.lief >= ganz) { f.lief = ganz; f.halten = HALTEN; }
      });
    };

    /// eine Pause wird uebersprungen statt nachgeholt: der Stand laeuft weiter
    const schritt = (jetzt) => {
      if (!laeuft) return;
      const roh = (jetzt - letzte) / 1000;
      const dt = roh > 0.12 ? 0 : roh;
      letzte = jetzt;
      rechnen(dt);
      zeichnen();
      bild = requestAnimationFrame(schritt);
    };

    let imBild = false;

    const starten = () => {
      if (laeuft || ruhig || document.hidden || !imBild) return;
      laeuft = true;
      letzte = performance.now();
      bild = requestAnimationFrame(schritt);
    };

    const stoppen = () => {
      if (!laeuft) return;
      laeuft = false;
      if (bild) { cancelAnimationFrame(bild); bild = null; }
    };

    /* Bewegung abgeschaltet: einen in sich stimmigen Stand zeigen */
    if (ruhig) {
      faecher.forEach((f, i) => {
        if (i === 0) { f.lief = dauer(f.level); f.halten = 1; }
        else f.lief = dauer(f.level) * (i === 1 ? 0.72 : 0.38);
      });
      weg = 9000;
      zeichnen();
      if (hinweis) hinweis.hidden = false;
      return;
    }

    zeichnen();

    const sicht = new IntersectionObserver((eintraege) => {
      eintraege.forEach((e) => {
        imBild = e.isIntersecting;
        if (imBild) starten(); else stoppen();
      });
    }, { threshold: 0.15 });
    sicht.observe(tafel);

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stoppen(); else starten();
    });
  }

  /* ========================================================
     YOURFILM — Barcode-Lauf
     Eine gescannte Zahl faechert sich in Film, Ausgabe und
     Exemplar auf und landet zuletzt im Regal.
     ======================================================== */
  function scanlaufEinrichten() {
    const wurzel = document.getElementById("scanlauf");
    if (!wurzel) return;

    const sucher = wurzel.querySelector(".scanlauf-sucher");
    const huelle = document.getElementById("scanlauf-huelle");
    const strahl = document.getElementById("scanlauf-strahl");
    const ziffern = document.getElementById("scanlauf-ziffern");
    const format = document.getElementById("scanlauf-format");
    const pruefung = document.getElementById("scanlauf-pruefung");
    const regal = document.getElementById("scanlauf-regal");
    const ebenen = [...wurzel.querySelectorAll(".scanlauf-ebenen li")];

    const scheiben = T("yourfilm.scanScheiben") || [];
    if (!scheiben.length) return;

    const STRAHL_START = 340, STRAHL_DAUER = 1500;

    /* Pruefziffer wie in der App: von rechts abwechselnd mal 3 und mal 1. */
    const pruefziffer = (rumpf) => {
      let summe = 0;
      for (let i = 0; i < rumpf.length; i++) {
        const z = Number(rumpf[rumpf.length - 1 - i]);
        summe += (i % 2 === 0) ? z * 3 : z;
      }
      return (10 - (summe % 10)) % 10;
    };

    const setzen = (id, wert) => {
      const el = document.getElementById(id);
      if (el) el.textContent = wert;
    };

    let nr = -1, uhren = [];
    const aufraeumen = () => { uhren.forEach(clearTimeout); uhren = []; };
    const spaeter = (fn, ms) => uhren.push(setTimeout(fn, ms));

    const zurueck = () => {
      ebenen.forEach(li => li.classList.remove("an"));
      regal.classList.remove("an");
      pruefung.classList.remove("gut");
      pruefung.textContent = "";
      [...ziffern.children].forEach(i => i.classList.remove("an"));
    };

    const scheibeSetzen = (s) => {
      const code = s.code + pruefziffer(s.code);
      format.textContent = s.format;
      ziffern.replaceChildren(...[...code].map(z => {
        const i = document.createElement("i");
        i.textContent = z;
        return i;
      }));
      setzen("scanlauf-film", s.film);
      setzen("scanlauf-filmZusatz", s.filmZusatz);
      setzen("scanlauf-ausgabe", s.ausgabe);
      setzen("scanlauf-ausgabeZusatz", s.ausgabeZusatz);
      setzen("scanlauf-exemplar", s.exemplar);
      setzen("scanlauf-exemplarZusatz", s.exemplarZusatz);
      regal.textContent = s.regal;
      return code;
    };

    const endstand = (s, code) => {
      [...ziffern.children].forEach(i => i.classList.add("an"));
      pruefung.textContent = T("yourfilm.scanPruefungGut")
        .replace("{art}", s.art).replace("{ziffer}", code.slice(-1));
      pruefung.classList.add("gut");
      ebenen.forEach(li => li.classList.add("an"));
      regal.classList.add("an");
    };

    let versatz = 0, startZeit = 0, dauerGesamt = 0;

    /* Ein Durchgang ab Millisekunde `ab`: Strahl wandert, Ziffern rasten ein. */
    const durchgang = (ab) => {
      aufraeumen();
      zurueck();
      const s = scheiben[nr];
      const code = scheibeSetzen(s);
      const guteMeldung = T("yourfilm.scanPruefungGut")
        .replace("{art}", s.art).replace("{ziffer}", code.slice(-1));

      huelle.classList.remove("wechselt");
      huelle.style.transition = "none";
      huelle.offsetHeight;
      strahl.style.transition = "none";
      strahl.style.transform = "translateY(0)";
      strahl.style.opacity = "0";

      const hoehe = sucher.clientHeight || 1;
      const zeit = (y) => STRAHL_START + Math.max(0, Math.min(1, y / hoehe)) * STRAHL_DAUER;

      /* Die Ziffern rasten ein, waehrend der Strahl die Zeile durchquert. */
      let lauf = ziffern;
      let oben = 0;
      while (lauf && lauf !== sucher) { oben += lauf.offsetTop; lauf = lauf.offsetParent; }
      const unten = oben + ziffern.offsetHeight;

      const stellen = [...ziffern.children];
      const beginn = zeit(oben), ende = zeit(unten);
      const takt = stellen.length > 1 ? (ende - beginn) / (stellen.length - 1) : 0;
      const nachCode = ende + 220;
      const nachEbenen = nachCode + 380 + ebenen.length * 520;
      dauerGesamt = nachEbenen + 2950;

      /* Was vor `ab` faellig war, wird sofort gesetzt statt nachgeholt. */
      const planen = (fn, ms) => { if (ms <= ab) fn(); else spaeter(fn, ms - ab); };

      const strahlAb = Math.max(0, ab - STRAHL_START);
      if (strahlAb >= STRAHL_DAUER || ab >= nachCode) {
        strahl.style.opacity = "0";
      } else {
        planen(() => {
          const rest = Math.max(0, STRAHL_DAUER - strahlAb);
          strahl.style.transform =
            "translateY(" + (hoehe * strahlAb / STRAHL_DAUER) + "px)";
          strahl.offsetHeight;
          strahl.style.transition =
            "transform " + (rest / 1000) + "s linear, opacity .3s linear";
          strahl.style.opacity = "1";
          strahl.style.transform = "translateY(" + hoehe + "px)";
        }, STRAHL_START);
      }

      stellen.forEach((i, k) => planen(() => i.classList.add("an"), beginn + k * takt));

      planen(() => {
        strahl.style.opacity = "0";
        pruefung.textContent = guteMeldung;
        pruefung.classList.add("gut");
      }, nachCode);

      ebenen.forEach((li, k) =>
        planen(() => li.classList.add("an"), nachCode + 380 + k * 520));

      planen(() => regal.classList.add("an"), nachEbenen);
      planen(() => {
        huelle.style.transition = "";
        huelle.classList.add("wechselt");
      }, nachEbenen + 2400);
      spaeter(() => {
        nr = (nr + 1) % scheiben.length;
        versatz = 0;
        startZeit = Date.now();
        durchgang(0);
      }, Math.max(0, dauerGesamt - ab));
    };

    /* Bewegung abgeschaltet: den fertigen Endzustand zeigen. */
    if (ruhig) {
      nr = 0;
      const s = scheiben[0];
      endstand(s, scheibeSetzen(s));
      return;
    }

    nr = 0;
    let laeuft = false, imBild = false;

    const anhalten = () => {
      if (!laeuft) return;
      laeuft = false;
      aufraeumen();
      versatz = Math.min(Date.now() - startZeit, dauerGesamt || Infinity);
    };
    const anwerfen = () => {
      if (laeuft || !imBild || document.hidden) return;
      laeuft = true;
      startZeit = Date.now() - versatz;
      durchgang(versatz);
    };

    const b = new IntersectionObserver((eintraege) => {
      eintraege.forEach(e => {
        imBild = e.isIntersecting;
        if (imBild) anwerfen(); else anhalten();
      });
    }, { threshold: 0.25 });
    b.observe(wurzel);

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) anhalten();
      else anwerfen();
    });
  }

  /* ========================================================
     ZIEHUNGSTROMMEL — 22 Kugeln gegen eine BINGO!-Karte
     ======================================================== */
  function trommelEinrichten() {
    const trommel = document.getElementById("trommel");
    if (!trommel) return;

    const karte   = document.getElementById("trommel-karte");
    const kugel   = document.getElementById("trommel-kugel");
    const aZahl   = document.getElementById("trommel-zahl");
    const aReihen = document.getElementById("trommel-reihen-zahl");
    const striche = document.getElementById("trommel-striche");
    const ruf     = document.getElementById("trommel-ruf");
    const knopf   = document.getElementById("trommel-knopf");
    const knopfTx = document.getElementById("trommel-knopf-text");

    const GEZOGEN = 22, REIHEN = 12, TAKT = 620;

    /* Die zwoelf Reihen: fuenf quer, fuenf laengs, zwei diagonal. */
    const REIHEN_FELDER = [];
    for (let r = 0; r < 5; r++) REIHEN_FELDER.push([0,1,2,3,4].map(s => r*5+s));
    for (let s = 0; s < 5; s++) REIHEN_FELDER.push([0,1,2,3,4].map(r => r*5+s));
    REIHEN_FELDER.push([0,6,12,18,24], [4,8,12,16,20]);

    let felder = [], zahlen = [], gezogen = [], schritt = 0, uhr = null, laeuft = false;
    let sichtbar = false, schonGestartet = false;

    const mischen = (liste) => {
      for (let i = liste.length-1; i > 0; i--) {
        const j = Math.floor(Math.random()*(i+1));
        [liste[i], liste[j]] = [liste[j], liste[i]];
      }
      return liste;
    };

    const volleZaehlen = (plaetze) =>
      REIHEN_FELDER.filter(r => r.every(p => plaetze.has(p))).length;

    /* Positionsechte Karte: Spalte s haelt die Zahlen 15s+1 bis 15s+15. */
    const karteBauen = () => {
      const spalten = [];
      for (let s = 0; s < 5; s++) {
        const topf = [];
        for (let z = s*15+1; z <= s*15+15; z++) topf.push(z);
        spalten.push(mischen(topf).slice(0, 5));
      }
      const werte = [];
      for (let r = 0; r < 5; r++) for (let s = 0; s < 5; s++) werte.push(spalten[s][r]);
      return werte;
    };

    /* Drei zufaellige Reihen werden voll — und wirklich nur diese drei. */
    const zielFelderWuerfeln = () => {
      for (let versuch = 0; versuch < 300; versuch++) {
        const wahl = mischen([...Array(REIHEN).keys()]).slice(0, 3);
        const ziel = new Set();
        wahl.forEach(r => REIHEN_FELDER[r].forEach(p => ziel.add(p)));
        if (ziel.size > 14) continue;
        if (volleZaehlen(ziel) === 3) return { ziel, wahl };
      }
      const ersatz = new Set();
      [0, 6, 11].forEach(r => REIHEN_FELDER[r].forEach(p => ersatz.add(p)));
      return { ziel: ersatz, wahl: [0, 6, 11] };
    };

    /* Die Ziehung in drei Fenstern: eine Reihe faellt frueh, eine mittig,
       die dritte zum Schluss. */
    const ziehungBauen = (karteZahlen) => {
      const { ziel: zielFelder, wahl } = zielFelderWuerfeln();
      const offen = GEZOGEN - zielFelder.size;

      const streu = new Set();
      const andere = [];
      for (let p = 0; p < 25; p++) if (!zielFelder.has(p)) andere.push(p);
      mischen(andere).forEach(p => {
        if (streu.size >= Math.min(4, offen - 1)) return;
        const probe = new Set([...zielFelder, ...streu, p]);
        if (volleZaehlen(probe) === 3) streu.add(p);
      });

      const aufKarte = new Set(karteZahlen);
      const nieten = [];
      for (let z = 1; z <= 75; z++) if (!aufKarte.has(z)) nieten.push(z);

      const stufe = new Map();
      wahl.forEach((r, i) => REIHEN_FELDER[r].forEach(p => {
        if (!stufe.has(p)) stufe.set(p, i);
      }));
      const teil = (i) => [...zielFelder].filter(p => stufe.get(p) === i);
      const frueh = teil(0), mitte = teil(1);

      const spaet = [...mischen(teil(2)), ...streu].map(p => karteZahlen[p]);
      const fehlt = GEZOGEN - (frueh.length + mitte.length + spaet.length);
      const fuell = mischen(nieten).slice(0, fehlt);

      const grenzeA = Math.max(0, 9 - frueh.length);
      const grenzeB = grenzeA + Math.max(0, 6 - mitte.length);
      return [
        ...mischen([...mischen(frueh).map(p => karteZahlen[p]),
                    ...fuell.slice(0, grenzeA)]),
        ...mischen([...mischen(mitte).map(p => karteZahlen[p]),
                    ...fuell.slice(grenzeA, grenzeB)]),
        ...mischen([...spaet, ...fuell.slice(grenzeB)])
      ];
    };

    const aufbauen = () => {
      karte.textContent = "";
      striche.textContent = "";
      ["B","I","N","G","O"].forEach(b => {
        const k = document.createElement("div");
        k.className = "trommel-spalte"; k.textContent = b;
        karte.appendChild(k);
      });
      zahlen = karteBauen();
      felder = zahlen.map(z => {
        const f = document.createElement("div");
        f.className = "trommel-feld"; f.textContent = z;
        karte.appendChild(f);
        return f;
      });
      for (let i = 0; i < REIHEN; i++) striche.appendChild(document.createElement("i"));
      gezogen = ziehungBauen(zahlen);
      schritt = 0;
    };

    const vollePruefen = (offen) => {
      let voll = 0;
      const inReihe = new Set();
      REIHEN_FELDER.forEach((reihe, i) => {
        const komplett = reihe.every(p => offen.has(zahlen[p]));
        striche.children[i].classList.toggle("voll", komplett);
        if (komplett) { voll++; reihe.forEach(p => inReihe.add(p)); }
      });
      felder.forEach((f, i) => f.classList.toggle("inReihe", inReihe.has(i)));
      return voll;
    };

    const anzeigen = (frisch) => {
      const offen = new Set(gezogen.slice(0, schritt));
      felder.forEach((f, i) => {
        f.classList.toggle("getroffen", offen.has(zahlen[i]));
        if (frisch !== undefined && zahlen[i] === frisch) {
          f.classList.remove("frisch"); void f.offsetWidth; f.classList.add("frisch");
        }
      });
      const voll = vollePruefen(offen);
      aZahl.textContent = T("scheinbar.trommelVon")
        .replace("{a}", schritt).replace("{b}", GEZOGEN);
      aReihen.textContent = T("scheinbar.trommelVon")
        .replace("{a}", voll).replace("{b}", REIHEN);
      const neu = voll > 0
        ? T(voll === 1 ? "scheinbar.trommelBingo"
          : voll === 2 ? "scheinbar.trommelDoppelt"
          : "scheinbar.trommelJackpot")
        : "";
      if (ruf.textContent !== neu) ruf.textContent = neu;
      ruf.classList.toggle("zeigen", voll > 0);
    };

    const stoppen = () => {
      laeuft = false;
      if (uhr) { clearTimeout(uhr); uhr = null; }
    };

    const beenden = () => {
      stoppen();
      knopfTx.textContent = T("scheinbar.trommelKnopf");
    };

    const ziehen = () => {
      const zahl = gezogen[schritt];
      schritt++;
      kugel.textContent = zahl;
      kugel.classList.toggle("daneben", zahlen.indexOf(zahl) < 0);
      kugel.classList.remove("rollt"); void kugel.offsetWidth; kugel.classList.add("rollt");
      anzeigen(zahl);
      if (schritt >= GEZOGEN) beenden();
    };

    const takten = () => {
      if (!laeuft) return;
      ziehen();
      if (laeuft) uhr = setTimeout(takten, TAKT);
    };

    /* Weiterlaufen, wo der Lauf unterbrochen wurde. */
    const fortsetzen = () => {
      if (laeuft || schritt >= GEZOGEN) return;
      laeuft = true;
      knopfTx.textContent = T("scheinbar.trommelKnopfLaeuft");
      uhr = setTimeout(takten, TAKT);
    };

    const starten = () => {
      stoppen();
      aufbauen();
      kugel.textContent = T("scheinbar.trommelLeer");
      kugel.classList.remove("daneben");
      anzeigen();
      laeuft = true;
      knopfTx.textContent = T("scheinbar.trommelKnopfLaeuft");
      uhr = setTimeout(takten, 500);
    };

    /* Ohne Bewegung: fertige Ziehung zeigen, Knopf mischt neu. */
    const endstandZeigen = () => {
      stoppen();
      aufbauen();
      schritt = GEZOGEN;
      const letzte = gezogen[GEZOGEN-1];
      kugel.textContent = letzte;
      kugel.classList.toggle("daneben", zahlen.indexOf(letzte) < 0);
      anzeigen();
      knopfTx.textContent = T("scheinbar.trommelKnopf");
    };

    if (ruhig) {
      endstandZeigen();
      knopf.addEventListener("click", endstandZeigen);
      return;
    }

    aufbauen();
    kugel.textContent = T("scheinbar.trommelLeer");
    anzeigen();
    knopf.addEventListener("click", starten);

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stoppen();
      else if (sichtbar) fortsetzen();
    });

    const beobachter = new IntersectionObserver((eintraege) => {
      eintraege.forEach(e => {
        sichtbar = e.isIntersecting;
        if (!sichtbar) { stoppen(); return; }
        if (document.hidden) return;
        if (!schonGestartet) { schonGestartet = true; starten(); }
        else fortsetzen();
      });
    }, { threshold: 0.01 });
    beobachter.observe(trommel);
  }

  /* ========================================================
     DREHSCHEIBE — zehn Knoten liefern ein, die Mitte urteilt
     gegen das Zielband, eine Empfehlung geht an genau einen
     Knoten zurueck.
     ======================================================== */
  function drehscheibeEinrichten() {
    const buehne = document.getElementById("drehscheibe-buehne");
    if (!buehne) return;

    const daten = T("familie.drehDaten") || [];
    const texte = T("familie.drehWerte") || [];
    const raete = T("familie.drehRat") || [];
    if (!daten.length || !texte.length) return;

    /* Zahlen stehen einmal in drehDaten, Sprache in drehWerte. */
    const werte = daten.map(d => Object.assign({}, d, texte.find(t => t.id === d.id) || {}));

    const draht = buehne.querySelector(".drehscheibe-draht");
    const mitte = buehne.querySelector(".drehscheibe-mitte");
    const mZahl = document.getElementById("drehscheibe-zaehler");
    const mText = document.getElementById("drehscheibe-lage");
    const lesen = document.getElementById("drehscheibe-lesen");
    const phasen = document.querySelectorAll("#drehscheibe-phasen span");

    const N = werte.length;
    const RX = 42;

    /* Die Bahn haelt Abstand zur Mitte, auch wenn die Buehne flach wird. */
    const bahnRY = () => {
      const hoch = buehne.clientHeight || 1;
      const mittePx = mitte.getBoundingClientRect().height || 0;
      const punkt = knoten && knoten.length
        ? knoten[0].el.querySelector(".drehscheibe-punkt").getBoundingClientRect().width
        : 11;
      const noetig = ((mittePx / 2 + punkt + 9) / hoch) * 100;
      return Math.min(47, Math.max(26, noetig));
    };

    let knoten = null;
    let RY = 40;
    const ort = (i, ry) => {
      const w = (i / N) * Math.PI * 2 - Math.PI / 2;
      return { x: 50 + Math.cos(w) * RX, y: 50 + Math.sin(w) * (ry === undefined ? RY : ry) };
    };

    knoten = werte.map((w, i) => {
      const p = ort(i);
      const el = document.createElement("div");
      el.className = "drehscheibe-knoten";
      el.style.left = p.x + "%";
      el.style.top = p.y + "%";
      el.innerHTML = '<span class="drehscheibe-punkt"></span><b></b>';
      el.querySelector("b").textContent = w.kurz || "";
      buehne.appendChild(el);

      const l = document.createElementNS("http://www.w3.org/2000/svg", "line");
      l.setAttribute("x1", p.x); l.setAttribute("y1", p.y);
      l.setAttribute("x2", 50); l.setAttribute("y2", 50);
      draht.appendChild(l);
      return { el, linie: l, ort: p, id: w.id };
    });

    const bahnSetzen = () => {
      RY = bahnRY();
      knoten.forEach((k, i) => {
        const p = ort(i);
        k.ort = p;
        k.el.style.left = p.x + "%";
        k.el.style.top = p.y + "%";
        k.linie.setAttribute("x1", p.x);
        k.linie.setAttribute("y1", p.y);
      });
    };
    bahnSetzen();
    addEventListener("resize", bahnSetzen, { passive: true });
    if (window.ResizeObserver) new ResizeObserver(bahnSetzen).observe(buehne);

    const funke = document.createElement("i");
    funke.className = "drehscheibe-funke";
    buehne.appendChild(funke);

    const urteil = (w) => {
      if (w.zahl === null || w.von === w.bis) return null;
      const rand = (w.bis - w.von) * 0.1;
      if (w.zahl < w.von || w.zahl > w.bis) return "raus";
      if (w.zahl - w.von <= rand || w.bis - w.zahl <= rand) return "knapp";
      return "gut";
    };

    /* Der Balken zeigt die feste Skala der Groesse, nicht das Zielband. */
    const bandBild = (w, u) => {
      if (w.zahl === null || w.von === w.bis || w.skalaVon === undefined) return "";
      const von = w.skalaVon, bis = w.skalaBis;
      const spanne = (bis - von) || 1;
      const anteil = (v) => Math.max(0, Math.min(100, ((v - von) / spanne) * 100));
      const l = anteil(w.von), b = anteil(w.bis) - l, z = anteil(w.zahl);
      return '<div class="drehscheibe-band">'
        + '<i style="left:' + l.toFixed(1) + '%;width:' + b.toFixed(1) + '%"></i>'
        + '<u class="' + (u === "raus" ? "raus" : "") + '" style="left:'
        + z.toFixed(1) + '%"></u></div>';
    };

    const wertZeigen = (w) => {
      const u = urteil(w);
      const marke = u
        ? '<span class="drehscheibe-urteil ' + u + '">'
          + T("familie.drehUrteil" + (u === "gut" ? "Gut" : u === "knapp" ? "Knapp" : "Raus"))
          + "</span>"
        : "";
      const band = (w.zahl !== null && w.von !== w.bis)
        ? "<span>" + T("familie.drehBand") + " " + w.von + "–" + w.bis
          + (w.einheit ? " " + w.einheit : "") + "</span>"
        : "";
      lesen.innerHTML = '<div class="drehscheibe-wert"><em>' + w.app + "</em><b>"
        + w.label + " " + w.wert + "</b>" + band + marke + "</div>" + bandBild(w, u);
    };

    const ratZeigen = (r) => {
      const an = werte.find(w => w.id === r.anId);
      lesen.innerHTML = '<div class="drehscheibe-rat"><em>' + r.stufe
        + " → " + (an ? an.app : "") + "</em><b>" + r.titel + "</b><p>"
        + r.grund + "</p></div>";
    };

    const phase = (n) => phasen.forEach((p, i) => p.classList.toggle("an", i === n));

    if (ruhig) {
      knoten.forEach(k => k.el.classList.add("sendet"));
      const raus = werte.find(w => urteil(w) === "raus") || werte[0];
      const kr = knoten.find(k => k.id === raus.id);
      if (kr) kr.el.classList.add("jetzt");
      wertZeigen(raus);
      if (mZahl) mZahl.textContent = N + "/" + N;
      if (mText) mText.textContent = T("familie.drehBewertet");
      phase(1);
      const st = document.getElementById("drehscheibe-statisch");
      if (st) st.hidden = false;
      return;
    }

    let uhr = null, laeuft = false, schritt = 0, ratNr = 0;

    const flug = (von, bis, dauer, klasse, fertig) => {
      funke.className = "drehscheibe-funke " + (klasse || "");
      const t0 = performance.now();
      const zug = (jetzt) => {
        if (!laeuft) return;
        const a = Math.min(1, (jetzt - t0) / dauer);
        const e = a < .5 ? 2 * a * a : 1 - Math.pow(-2 * a + 2, 2) / 2;
        funke.style.left = (von.x + (bis.x - von.x) * e) + "%";
        funke.style.top = (von.y + (bis.y - von.y) * e) + "%";
        funke.style.opacity = a < .12 ? a / .12 : (a > .88 ? (1 - a) / .12 : 1);
        if (a < 1) uhr = requestAnimationFrame(zug);
        else { funke.style.opacity = 0; fertig(); }
      };
      uhr = requestAnimationFrame(zug);
    };

    const M = { x: 50, y: 50 };

    const weiter = () => {
      ratNr++;
      uhr = setTimeout(() => {
        if (!laeuft) return;
        if (ratNr % raete.length === 0) {
          schritt = 0;
          knoten.forEach(k => k.el.classList.remove("sendet", "empfaengt", "jetzt"));
        }
        takt();
      }, 3200);
    };

    /* Die Empfehlung fliegt an den Knoten, der sie umsetzen kann. */
    const zurueck = (r, ziel) => {
      if (!ziel) {
        knoten.forEach(k => k.el.classList.remove("empfaengt", "jetzt"));
        ratZeigen(r);
        weiter();
        return;
      }
      ziel.linie.classList.add("aktiv");
      flug(M, ziel.ort, 720, "raus", () => {
        ziel.linie.classList.remove("aktiv");
        knoten.forEach(k => k.el.classList.remove("empfaengt", "jetzt"));
        ziel.el.classList.add("empfaengt", "jetzt");
        ratZeigen(r);
        weiter();
      });
    };

    const takt = () => {
      if (!laeuft) return;

      if (schritt < N) {
        const i = schritt, w = werte[i], k = knoten[i];
        phase(0);
        knoten.forEach(x => x.el.classList.remove("jetzt"));
        k.el.classList.add("sendet", "jetzt");
        k.linie.classList.add("aktiv");
        wertZeigen(w);
        if (mZahl) mZahl.textContent = (i + 1) + "/" + N;
        if (mText) mText.textContent = T("familie.drehSammelt");

        flug(k.ort, M, 300, "", () => {
          k.linie.classList.remove("aktiv");
          mitte.classList.add("schlag");
          setTimeout(() => mitte.classList.remove("schlag"), 500);
          schritt++;
          uhr = setTimeout(takt, 120);
        });
        return;
      }

      const r = raete[ratNr % raete.length];
      const ziel = knoten.find(k => k.id === r.anId);

      phase(1);
      if (mText) mText.textContent = T("familie.drehBewertet");
      mitte.classList.add("schlag");
      setTimeout(() => mitte.classList.remove("schlag"), 500);

      uhr = setTimeout(() => {
        if (!laeuft) return;
        phase(2);
        if (mText) mText.textContent = T("familie.drehSchickt");
        zurueck(r, ziel);
      }, 620);
    };

    const starten = () => {
      if (laeuft) return;
      laeuft = true;
      phase(0);
      takt();
    };
    const stoppen = () => {
      laeuft = false;
      if (uhr) { cancelAnimationFrame(uhr); clearTimeout(uhr); uhr = null; }
    };

    if (mZahl) mZahl.textContent = "0/" + N;
    if (mText) mText.textContent = T("familie.drehSammelt");

    let imBild = false;
    const b = new IntersectionObserver((eintraege) => {
      eintraege.forEach(e => {
        imBild = e.isIntersecting;
        if (imBild && !document.hidden) starten();
        else stoppen();
      });
    }, { threshold: 0.2 });
    b.observe(buehne);

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stoppen();
      else if (imBild) starten();
    });
  }

  /* ======================================================== START */
  function start() {
    texteEinsetzen();
    spracheEinrichten();
    kopfEinrichten();
    kapitelEinrichten();
    einblendenEinrichten();
    karussellEinrichten();
    zaehlerEinrichten();
    rafferEinrichten();
    zaehlerwerkEinrichten();
    stundenplanEinrichten();
    spielEinrichten();
    qrEinrichten();
    spurenEinrichten();
    markenpunkteEinrichten();
    formularEinrichten();
    jahrEinrichten();
    fortschrittEinrichten();
    neigenEinrichten();
    kartenLichtEinrichten();
    scheibeEinrichten();
    boegenEinrichten();
    knopfZeigerEinrichten();
    drehscheibeEinrichten();
    trommelEinrichten();
    scanlaufEinrichten();
    kontoEinrichten();
    saeuleEinrichten();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
