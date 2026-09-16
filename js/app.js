/* NekoManga — app.js
   Orquestador de la página de inicio: carga navbar/footer,
   trae los datos y llama a cada módulo de render en orden. */

/** Rellena las columnas de enlaces del footer y el año, desde config.json. */
Neko.renderFooter = function renderFooter(config) {
  const columnMap = {
    Explorar: 'footer-col-explorar',
    Cuenta: 'footer-col-cuenta',
    Legal: 'footer-col-legal',
  };

  Object.entries(config.footerLinks).forEach(([title, links]) => {
    const col = document.getElementById(columnMap[title]);
    if (!col) return;
    col.innerHTML = `
      <h4>${title}</h4>
      <ul>${links.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}</ul>
    `;
  });

  const yearLine = document.getElementById('footer-year-line');
  if (yearLine) yearLine.textContent = `© ${new Date().getFullYear()} NekoManga`;
};

(async function initHomePage() {
  const [config, genres, manga] = await Promise.all([
    Neko.getJSON('data/config.json'),
    Neko.getJSON('data/genres.json'),
    Neko.getJSON('data/manga.json'),
  ]);

  await Neko.loadComponent('components/navbar.html', '#navbar-root');
  Neko.initMenu(config.nav);
  Neko.initSearch(manga);

  await Neko.loadComponent('components/footer.html', '#footer-root');
  Neko.renderFooter(config);

  Neko.initCarousel(manga.filter((m) => m.featured), genres);
  Neko.renderFeaturedRow(manga);
  Neko.renderUpdates(manga);
  Neko.renderPopular(manga, genres);
  Neko.renderRecommendations(manga);
  Neko.renderGenres(genres);
})().catch((err) => console.error('[NekoManga]', err));
