/// Weicher Seitenwechsel: das angeklickte App-Symbol wandert in die Produktseite und zurück.
(function () {
  "use strict";

  const NAME = "app-symbol";

  const datei = (adresse) => {
    try { return new URL(adresse, location.href).pathname.split("/").pop() || "index.html"; }
    catch (e) { return ""; }
  };

  const leeren = () => document.querySelectorAll("[data-wandert]").forEach(b => {
    b.style.viewTransitionName = "";
    b.removeAttribute("data-wandert");
  });

  const setzen = (bild) => {
    leeren();
    bild.style.viewTransitionName = NAME;
    bild.setAttribute("data-wandert", "");
  };

  document.addEventListener("click", (e) => {
    const link = e.target.closest("a[href]");
    if (!link || link.target === "_blank" || link.origin !== location.origin) return;
    const bild = link.classList.contains("app-karte")
      ? link.querySelector("img")
      : link.closest(".produkt")?.querySelector(".produkt-symbol");
    if (bild) setzen(bild);
  }, true);

  addEventListener("pagereveal", (e) => {
    leeren();
    const von = window.navigation?.activation?.from?.url;
    if (!e.viewTransition || !von) return;
    const bild = document.querySelector(`.produkt-symbol[data-seite="${datei(von)}"]`);
    if (!bild) return;
    setzen(bild);
    e.viewTransition.finished.finally(leeren);
  });
})();
