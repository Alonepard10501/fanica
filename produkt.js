/// Produktseiten: Abschnittsleiste „Auf dieser Seite“, markiert den Abschnitt im Blick.
(function () {
  "use strict";

  const sicher = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  function abschnitteEinrichten() {
    const leiste = document.getElementById("seiten-inhalt");
    if (!leiste) return;
    const bloecke = [...document.querySelectorAll(".unter-block")]
      .filter(b => b.querySelector(":scope > h2")?.textContent.trim());
    if (bloecke.length < 3) { leiste.remove(); return; }

    bloecke.forEach((b, i) => { if (!b.id) b.id = "abschnitt-" + (i + 1); });
    leiste.innerHTML = bloecke.map(b =>
      `<a href="#${b.id}">${sicher(b.querySelector(":scope > h2").textContent.trim())}</a>`).join("");

    const links = [...leiste.querySelectorAll("a")];
    const markieren = (id) => links.forEach(a => {
      const an = a.getAttribute("href") === "#" + id;
      a.setAttribute("aria-current", an ? "true" : "false");
      if (an) leiste.scrollTo({ left: a.offsetLeft - 16, behavior: "smooth" });
    });

    const beobachter = new IntersectionObserver((eintraege) => {
      eintraege.forEach(e => { if (e.isIntersecting) markieren(e.target.id); });
    }, { rootMargin: "-40% 0px -55% 0px" });
    bloecke.forEach(b => beobachter.observe(b));
  }

  function listenKuerzen() {
    const sichtbar = 6;
    document.querySelectorAll(".produktseite .funktionen").forEach((liste, n) => {
      const eintraege = [...liste.children];
      if (eintraege.length <= sichtbar + 3) return;
      if (!liste.id) liste.id = "liste-" + (n + 1);
      const knopf = document.createElement("button");
      knopf.type = "button";
      knopf.className = "liste-mehr";
      knopf.setAttribute("aria-controls", liste.id);
      const setzen = (offen) => {
        eintraege.forEach((e, i) => { e.hidden = !offen && i >= sichtbar; });
        knopf.setAttribute("aria-expanded", String(offen));
        knopf.textContent = offen ? T("produkt.weniger")
          : T("produkt.alleZeigen").replace("{anzahl}", eintraege.length);
      };
      knopf.addEventListener("click", () => setzen(knopf.getAttribute("aria-expanded") !== "true"));
      liste.after(knopf);
      setzen(false);
    });
  }

  function start() {
    abschnitteEinrichten();
    listenKuerzen();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
