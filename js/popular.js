/* NekoManga — popular.js
   Renderiza la lista clasificada de populares (por vistas),
   como filas numeradas en vez de tarjetas — la numeración
   aquí sí corresponde a un ranking real. */

Neko.renderPopular = function renderPopular(mangaList, genreCatalog) {
  const container = document.getElementById('popular-list');
  if (!container) return;

  const ranked = [...mangaList]
    .sort((a, b) => b.views - a.views)
    .slice(0, 6);

  ranked.forEach((manga, i) => {
    const row = Neko.el(
      'a',
      { class: 'rank-row', href: `manga.html?id=${manga.id}` },
      `
        <span class="rank-number">${i + 1}</span>
        <span class="rank-info">
          <span class="rank-title">${manga.title}</span><br>
          <span class="rank-genres">${Neko.genreNames(manga.genres, genreCatalog)}</span>
        </span>
        <span class="rank-stats">
          <span>★ <strong>${manga.rating}</strong></span>
          <span><strong>${Neko.formatViews(manga.views)}</strong> lecturas</span>
        </span>
      `
    );
    container.appendChild(row);
  });
};
