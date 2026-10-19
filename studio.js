/// Startseite: Schriftzug STUDIO als Canvas — hohle Buchstaben, Schein, Lauflicht je Buchstabe, danach Verlaufsrand.
(function () {
  "use strict";

  const BREITE = 640, HOEHE = 128, GRUNDLINIE = 104, WORT = "STUDIO";
  const SCHRIFT = '800 104px "Saira", "Bahnschrift", "DIN Alternate", "Segoe UI", system-ui, sans-serif';
  const ABSTAND = 104 * 0.04;
  const FARBE = { linie: "#FF8A95", neon: "#FF4257", tief: "#E4192B", cyan: "#17E9E0", cyanHell: "#9FF6FF", deck: "#110D18" };
  const RAND = [[0, "#FF4257"], [.3, "#FFB3BA"], [.62, "#B8FAFF"], [1, "#17E9E0"]];
  const LAUF = [[0, "#FFFFFF"], [34 / 360, "#FFFFFF"], [60 / 360, FARBE.linie], [110 / 360, FARBE.neon], [180 / 360, "#7A0C16"],
    [250 / 360, "#0A5E5A"], [300 / 360, FARBE.cyan], [335 / 360, FARBE.cyanHell], [1, "#FFFFFF"]];
  const ENDE = 4200;

  const glatt = (p) => { p = Math.min(1, Math.max(0, p)); return p * p * (3 - 2 * p); };

  function einrichten(leinwand) {
    const ctx = leinwand.getContext("2d");
    if (!ctx) return null;
    const ruhig = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(3, window.devicePixelRatio || 1);
    leinwand.width = BREITE * dpr;
    leinwand.height = HOEHE * dpr;

    const vorbereiten = (c) => { c.setTransform(dpr, 0, 0, dpr, 0, 0); c.font = SCHRIFT; c.textBaseline = "alphabetic"; c.lineJoin = "round"; c.lineWidth = 9; };
    vorbereiten(ctx);
    const breiten = [...WORT].map(z => ctx.measureText(z).width);
    const gesamt = breiten.reduce((a, b) => a + b, 0) + ABSTAND * (WORT.length - 1);
    let x = (BREITE - gesamt) / 2;
    const buchstaben = [...WORT].map((z, i) => {
      const b = { z, x, mitte: x + breiten[i] / 2, breite: breiten[i] };
      x += breiten[i] + ABSTAND;
      return b;
    });

    const glut = document.createElement("canvas");
    glut.width = leinwand.width; glut.height = leinwand.height;
    const g = glut.getContext("2d");
    vorbereiten(g);
    [[FARBE.tief, 90], [FARBE.tief, 54], [FARBE.neon, 30], [FARBE.cyan, 24], [FARBE.neon, 10], ["#FFFFFF", 2.5]].forEach(([farbe, weich]) => {
      g.save();
      g.shadowColor = farbe; g.shadowBlur = weich; g.shadowOffsetX = 2000 * dpr;
      g.fillStyle = farbe;
      buchstaben.forEach(b => g.fillText(b.z, b.x - 2000 * dpr, GRUNDLINIE));
      g.restore();
    });

    const randVerlauf = ctx.createLinearGradient(buchstaben[0].x, GRUNDLINIE - 90, buchstaben[5].x + buchstaben[5].breite, GRUNDLINIE + 10);
    RAND.forEach(([p, farbe]) => randVerlauf.addColorStop(p, farbe));
    const laufVerlauf = (b, winkel) => {
      const v = ctx.createConicGradient(winkel - Math.PI / 2, b.mitte, GRUNDLINIE - 38);
      LAUF.forEach(([p, farbe]) => v.addColorStop(p, farbe));
      return v;
    };
    const kannLauf = !ruhig && typeof ctx.createConicGradient === "function";

    const zeichnen = (t) => {
      vorbereiten(ctx);
      ctx.clearRect(0, 0, BREITE, HOEHE);
      const ein = ruhig ? 1 : glatt((t - 200) / 900);
      if (ein <= 0) return true;
      ctx.globalAlpha = ein;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.drawImage(glut, 0, 0);
      vorbereiten(ctx);

      const rand = ruhig || !kannLauf ? 1 : glatt((t - 3200) / 700);
      if (rand > 0) {
        ctx.globalAlpha = ein * rand;
        ctx.strokeStyle = randVerlauf;
        buchstaben.forEach(b => ctx.strokeText(b.z, b.x, GRUNDLINIE));
      }
      if (kannLauf) buchstaben.forEach((b, n) => {
        const start = 1100 + n * 200, aus = 2600 + n * 200;
        const p = (t - start) / 1500;
        if (p < 0) return;
        const alpha = 1 - glatt((t - aus) / 450);
        if (alpha <= 0) return;
        ctx.globalAlpha = ein * alpha;
        ctx.strokeStyle = laufVerlauf(b, Math.min(p, 1) * 4 * Math.PI);
        ctx.strokeText(b.z, b.x, GRUNDLINIE);
      });
      ctx.globalAlpha = ein;
      ctx.fillStyle = FARBE.deck;
      buchstaben.forEach(b => ctx.fillText(b.z, b.x, GRUNDLINIE));
      ctx.globalAlpha = 1;
      return !ruhig && t < ENDE;
    };

    let lauf = 0;
    const starten = () => {
      const kennung = ++lauf;
      const t0 = performance.now();
      const schritt = () => {
        if (kennung !== lauf) return;
        if (zeichnen(performance.now() - t0)) setTimeout(schritt, 16);
        else zeichnen(ENDE);
      };
      schritt();
    };
    return starten;
  }

  function start() {
    const leinwand = document.querySelector("canvas.studio-neon");
    if (!leinwand) return;
    const los = () => {
      const starten = einrichten(leinwand);
      if (!starten) return;
      window.studioNeu = starten;
      starten();
    };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(los, los);
    else los();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
