/* SCREED — main.js */
(function () {
  "use strict";

  const THEME_KEY = "screed-theme";
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");

  function getPreferred() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  // Apply saved/preferred theme immediately
  apply(getPreferred());

  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme");
      apply(current === "dark" ? "light" : "dark");
    });
  }
})();
