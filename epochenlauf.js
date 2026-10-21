/// Erlebnis PROJECT EMPIRE: Lauf durch die acht Epochen mit Aufstiegsring, Truppen und Rohstoffen.
(function () {
  "use strict";

  const ZIFFERN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
  /// Epoche, ab der ein Rohstoff zur Verfügung steht (Nahrung, Holz, Stein, Gold, Öl, Daten).
  const STOFF_AB = [1, 1, 1, 1, 5, 6];
  const AUFSTIEG = 2600;
  const HALT = 4200;
  const UMFANG = 2 * Math.PI * 21;

  function einrichten() {
    const wurzel = document.getElementById("epochenlauf");
    if (!wurzel || typeof T !== "function") return;
    const epochen = T("empire.epochen") || [];
    const stoffe = T("empire.laufStoffe") || [];
    if (epochen.length !== ZIFFERN.length) return;

    const ruhig = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const letzte = ZIFFERN.length - 1;
    const ring = wurzel.querySelector(".el-ring-lauf");
    const ziffer = document.getElementById("el-ziffer");
    const nrFeld = document.getElementById("el-nr");
    const name = document.getElementById("el-name");
    const truppen = document.getElementById("el-truppen");
    const stoffFeld = document.getElementById("el-stoffe");
    const marken = document.getElementById("el-marken");
    const spur = document.getElementById("el-spur");
    const vorlesen = document.getElementById("el-vorlesen");

    marken.innerHTML = epochen.map((e, i) => `<li><button type="button" data-nr="${i}"
      aria-label="${ZIFFERN[i]} · ${String(e.name).replace(/"/g, "&quot;")}" aria-pressed="false">${ZIFFERN[i]}</button></li>`).join("");
    const knoepfe = [...marken.querySelectorAll("button")];
    stoffFeld.innerHTML = stoffe.map((s) => `<span>${String(s).replace(/</g, "&lt;")}</span>`).join("");
    const chips = [...stoffFeld.children];

    let nr = 0, anteil = 0, vergangen = 0, start = 0, bild = null;
    let imBild = false, manuell = false;

    const epocheSetzen = (i, frisch) => {
      nr = i;
      const e = epochen[i];
      ziffer.textContent = ZIFFERN[i];
      nrFeld.textContent = T("empire.laufEpoche").replace("{n}", i + 1).replace("{von}", ZIFFERN.length);
      name.textContent = e.name;
      truppen.textContent = e.truppen;
      if (frisch && !ruhig) {
        name.classList.remove("frisch");
        void name.offsetWidth;
        name.classList.add("frisch");
      }
      chips.forEach((c, k) => c.classList.toggle("aus", STOFF_AB[k] > i + 1));
      knoepfe.forEach((k, j) => {
        k.classList.toggle("erreicht", j < i);
        k.setAttribute("aria-pressed", String(j === i));
        if (j === i) k.setAttribute("aria-current", "step");
        else k.removeAttribute("aria-current");
      });
    };

    const malen = () => {
      const voll = manuell || ruhig || nr === letzte ? 1 : anteil;
      ring.style.strokeDashoffset = (UMFANG * (1 - voll)).toFixed(2);
      const weg = nr >= letzte ? 1 : (nr + (manuell || ruhig ? 0 : anteil)) / letzte;
      spur.style.setProperty("--fuell", weg.toFixed(4));
    };

    const schritt = (jetzt) => {
      bild = null;
      if (document.hidden || !imBild || manuell) return;
      vergangen = jetzt - start;
      if (nr < letzte) {
        anteil = Math.min(1, vergangen / AUFSTIEG);
        if (anteil >= 1) {
          epocheSetzen(nr + 1, true);
          anteil = 0; vergangen = 0; start = jetzt;
        }
      } else if (vergangen >= HALT) {
        epocheSetzen(0, true);
        anteil = 0; vergangen = 0; start = jetzt;
      }
      malen();
      bild = requestAnimationFrame(schritt);
    };

    const anhalten = () => {
      if (bild) { cancelAnimationFrame(bild); bild = null; }
    };

    const fortsetzen = () => {
      if (bild || manuell || ruhig || document.hidden || !imBild) return;
      start = performance.now() - vergangen;
      bild = requestAnimationFrame(schritt);
    };

    knoepfe.forEach((k) => k.addEventListener("click", () => {
      manuell = true;
      anhalten();
      epocheSetzen(+k.dataset.nr, true);
      malen();
      const e = epochen[nr];
      vorlesen.textContent = `${e.name}: ${e.truppen}`;
    }));

    epocheSetzen(ruhig ? letzte : 0, false);
    malen();
    if (ruhig) return;

    new IntersectionObserver((eintraege) => {
      eintraege.forEach((e) => {
        imBild = e.isIntersecting;
        if (imBild) fortsetzen(); else anhalten();
      });
    }, { threshold: 0.2 }).observe(wurzel);

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) anhalten(); else fortsetzen();
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", einrichten);
  else einrichten();
})();
