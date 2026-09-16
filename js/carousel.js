/* NekoManga — carousel.js
   Hero de destacados: construye las diapositivas a partir de los
   manga marcados como featured en manga.json, con autoplay,
   flechas, puntos y soporte de swipe táctil. */

Neko.initCarousel = function initCarousel(featuredList, genreCatalog) {
  const root = document.getElementById('hero-carousel');
  if (!root || !featuredList.length) return;

  const track = root.querySelector('.hero-track');
  const dotsWrap = root.querySelector('.hero-dots');
  let index = 0;
  let timer = null;

  track.innerHTML = featuredList
    .map((manga) => {
      const genres = Neko.genreNames(manga.genres, genreCatalog);
      return `
        <article class="hero-slide">
          <div class="hero-slide-inner">
            <div>
              <div class="hero-eyebrow-genres">
                ${manga.genres.map((g) => `<span>${genreCatalog.find((x) => x.id === g)?.name || g}</span>`).join('')}
              </div>
              <h1 class="hero-title">${manga.title}</h1>
              <p class="hero-synopsis">${manga.synopsis}</p>
              <div class="hero-meta">
                <span>★ <strong>${manga.rating}</strong></span>
                <span><strong>${manga.chapters}</strong> capítulos</span>
                <span><strong>${manga.status}</strong></span>
              </div>
              <div class="hero-actions">
                <a class="btn btn-primary" href="lectura.html?id=${manga.id}">Leer ahora</a>
                <a class="btn btn-ghost" href="manga.html?id=${manga.id}">Ver ficha</a>
              </div>
            </div>
            <div class="hero-art cover-seed-${manga.colorSeed}">
              <span class="hero-art-mark" aria-hidden="true">${Neko.initial(manga.title)}</span>
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  dotsWrap.innerHTML = featuredList
    .map((_, i) => `<button type="button" aria-label="Ir a la diapositiva ${i + 1}"></button>`)
    .join('');

  const slides = Array.from(track.children);
  const dots = Array.from(dotsWrap.children);

  function go(next) {
    index = (next + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    slides.forEach((s, i) => s.classList.toggle('is-active', i === index));
    dots.forEach((d, i) => d.setAttribute('aria-current', String(i === index)));
  }

  function restartAutoplay() {
    clearInterval(timer);
    timer = setInterval(() => go(index + 1), 6000);
  }

  root.querySelector('.hero-nav.prev').addEventListener('click', () => { go(index - 1); restartAutoplay(); });
  root.querySelector('.hero-nav.next').addEventListener('click', () => { go(index + 1); restartAutoplay(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { go(i); restartAutoplay(); }));

  // Swipe táctil
  let touchStartX = 0;
  track.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', (e) => {
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 40) go(index + (delta < 0 ? 1 : -1));
    restartAutoplay();
  }, { passive: true });

  root.addEventListener('mouseenter', () => clearInterval(timer));
  root.addEventListener('mouseleave', restartAutoplay);

  go(0);
  restartAutoplay();
};
