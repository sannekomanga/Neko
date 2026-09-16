/* NekoManga — genres.js
   Renderiza los pills de género de la sección "Explora por género". */

Neko.renderGenres = function renderGenres(genreCatalog) {
  const container = document.getElementById('genre-grid');
  if (!container) return;

  container.innerHTML = genreCatalog
    .map(
      (genre) => `
        <a class="genre-pill" href="generos.html?id=${genre.id}">
          <span aria-hidden="true">${genre.icon}</span> ${genre.name}
        </a>
      `
    )
    .join('');
};
