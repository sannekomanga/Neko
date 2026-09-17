// NekoManga — interacciones base
(function () {
  "use strict";

  /* Header: transición sutil al hacer scroll */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Menú móvil */
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const open = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------------- Hero carousel ---------------- */
  const hero = document.querySelector("[data-hero]");
  if (hero) {
    const slides = Array.from(hero.querySelectorAll(".hero-slide"));
    const dotsWrap = hero.querySelector("[data-hero-dots]");
    const prevBtn = hero.querySelector(".hero-arrow.prev");
    const nextBtn = hero.querySelector(".hero-arrow.next");
    let current = 0;
    let timer = null;
    const INTERVAL = 6500;

    const dots = slides.map((_, i) => {
      const b = document.createElement("button");
      b.className = "hero-dot";
      b.setAttribute("aria-label", "Ir a la escena " + (i + 1));
      b.addEventListener("click", () => goTo(i, true));
      dotsWrap.appendChild(b);
      return b;
    });

    function render() {
      slides.forEach((s, i) => s.classList.toggle("is-active", i === current));
      dots.forEach((d, i) => d.classList.toggle("is-active", i === current));
    }

    function goTo(index, manual) {
      current = (index + slides.length) % slides.length;
      render();
      if (manual) restart();
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function restart() {
      clearInterval(timer);
      timer = setInterval(next, INTERVAL);
    }

    if (prevBtn) prevBtn.addEventListener("click", () => { prev(); restart(); });
    if (nextBtn) nextBtn.addEventListener("click", () => { next(); restart(); });

    hero.addEventListener("mouseenter", () => clearInterval(timer));
    hero.addEventListener("mouseleave", restart);

    render();
    restart();
  }

  /* ---------------- Rieles horizontales (eventos / populares) ---------------- */
  document.querySelectorAll("[data-rail]").forEach((rail) => {
    const prev = rail.parentElement.querySelector('[data-rail-prev]');
    const next = rail.parentElement.querySelector('[data-rail-next]');
    const scrollBy = () => Math.min(rail.clientWidth * 0.85, 640);
    if (prev) prev.addEventListener("click", () => rail.scrollBy({ left: -scrollBy(), behavior: "smooth" }));
    if (next) next.addEventListener("click", () => rail.scrollBy({ left: scrollBy(), behavior: "smooth" }));
  });
})();
