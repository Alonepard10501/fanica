/// Bezugswege als kompakte Knöpfe an jeder Stelle mit data-wege (Startseite und Produktseiten).
(function () {
  "use strict";

  const sicher = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  function wegeEinrichten() {
    const bezug = window.BEZUG || {};
    const zeichen = window.BEZUG_ZEICHEN || {};
    const wartet = (stand) => T(stand === "test" ? "aktion.standTest"
      : stand === "spaeter" ? "aktion.standSpaeter" : "aktion.standPruefung");

    document.querySelectorAll("[data-wege]").forEach((ort) => {
      const b = bezug[ort.dataset.wege];
      if (!b) return;
      const wege = [];
      if (b.windows) {
        wege.push(`<a class="weg" href="${sicher(b.windows)}" rel="noopener" download>
          ${zeichen.windows || ""}<span>${sicher(T("start.wegWindows").replace("{groesse}", b.groesse))}</span></a>`);
      }
      [["android", "aktion.androidUnter", b.standAndroid],
       ["apple", "aktion.appleUnter", b.standApple]].forEach(([art, name, stand]) => {
        if (!b[art]) return;
        wege.push(stand === "live"
          ? `<a class="weg" href="${sicher(b[art])}" target="_blank" rel="noopener">
              ${zeichen[art] || ""}<span>${sicher(T(name))}</span></a>`
          : `<span class="weg weg-wartet">${zeichen[art] || ""}<span>${sicher(T(name))}
              <em>· ${sicher(wartet(stand))}</em></span></span>`);
      });
      if (b.webseite && ort.dataset.webseite !== undefined) {
        wege.push(`<a class="weg" href="${sicher(b.webseite)}" target="_blank" rel="noopener">
          ${zeichen.webseite || ""}<span>${sicher(T("aktion.webseiteKnopf"))} ↗</span></a>`);
      }
      ort.innerHTML = wege.join("");
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wegeEinrichten);
  else wegeEinrichten();
})();
