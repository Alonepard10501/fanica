/// Startseite: Filter nach Stand und Verteilungsbalken.
(function () {
  "use strict";

  const STUFEN = [
    { stufe: "alle", text: "start.filterAlle" },
    { stufe: "live", text: "start.filterLive" },
    { stufe: "test", text: "start.filterTest" },
    { stufe: "bau",  text: "start.filterBau" }
  ];

  const sicher = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  function filterEinrichten() {
    const leiste = document.getElementById("produkt-filter");
    const balken = document.getElementById("produkt-verteilung");
    const meldung = document.getElementById("filter-stand");
    const karten = [...document.querySelectorAll(".produkt[data-stufe]")];
    if (!leiste || !karten.length) return;

    const zahl = (stufe) => stufe === "alle" ? karten.length
      : karten.filter(k => k.dataset.stufe === stufe).length;

    leiste.innerHTML = STUFEN.filter(s => zahl(s.stufe)).map(s => `
      <button type="button" data-filter="${s.stufe}" aria-pressed="${s.stufe === "alle"}">
        <span>${sicher(T(s.text))}</span><b>${zahl(s.stufe)}</b></button>`).join("");

    if (balken) {
      balken.innerHTML = STUFEN.slice(1).map(s => {
        const teil = karten.filter(k => k.dataset.stufe === s.stufe);
        return teil.length ? `<span class="verteilung-gruppe" data-stufe="${s.stufe}"
          style="flex:${teil.length}">${teil.map(k => `<i style="--af:${
            getComputedStyle(k).getPropertyValue("--akzent-hell").trim()}"></i>`).join("")}</span>` : "";
      }).join("");
    }

    const anwenden = (stufe) => {
      karten.forEach(k => { k.hidden = stufe !== "alle" && k.dataset.stufe !== stufe; });
      leiste.querySelectorAll("button").forEach(b =>
        b.setAttribute("aria-pressed", String(b.dataset.filter === stufe)));
      balken?.querySelectorAll(".verteilung-gruppe").forEach(g =>
        g.classList.toggle("aus", stufe !== "alle" && g.dataset.stufe !== stufe));
      if (meldung) {
        meldung.textContent = T("start.filterStand")
          .replace("{anzahl}", karten.filter(k => !k.hidden).length);
      }
    };

    const ruhig = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let laufend = null;
    leiste.addEventListener("click", (e) => {
      const knopf = e.target.closest("button[data-filter]");
      if (!knopf || knopf.getAttribute("aria-pressed") === "true") return;
      const stufe = knopf.dataset.filter;
      karten.forEach(k => k.classList.add("da"));
      if (ruhig || !document.startViewTransition) { anwenden(stufe); return; }
      karten.forEach(k => { k.style.viewTransitionName = "produkt-" + k.id; });
      const wechsel = document.startViewTransition(() => anwenden(stufe));
      laufend = wechsel;
      wechsel.ready.catch(() => {});
      wechsel.finished.catch(() => {}).finally(() => {
        if (laufend === wechsel) karten.forEach(k => { k.style.viewTransitionName = ""; });
      });
    });
  }

  function staffelEinrichten() {
    document.querySelectorAll(".produkt").forEach((k, i) => k.style.setProperty("--n", i % 3));
  }

  function start() {
    filterEinrichten();
    staffelEinrichten();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
