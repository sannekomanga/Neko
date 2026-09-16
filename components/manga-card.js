/* NekoManga — manga-card.js
   Construye el DOM de una tarjeta de manga a partir de un registro
   de data/manga.json. Se reutiliza en destacados, novedades y
   recomendaciones (ver updates.js / recommendations.js). */

Neko.createMangaCard = function createMangaCard(manga, { wide = false, badgeLabel = null } = {}) {
  const classes = ['manga-card'];
  if (wide) classes.push('manga-card--wide');

  const badge = badgeLabel
    ? `<span class="badge badge-new">${badgeLabel}</span>`
    : '';

  const card = Neko.el(
    'a',
    { class: classes.join(' '), href: `manga.html?id=${manga.id}` },
    `
      <div class="manga-card-cover cover-seed-${manga.colorSeed}">
        <span class="manga-card-mark" aria-hidden="true">${Neko.initial(manga.title)}</span>
        ${badge}
        <span class="manga-card-rating">★ ${manga.rating}</span>
      </div>
      <h3 class="manga-card-title">${manga.title}</h3>
      <p class="manga-card-sub">Cap. ${manga.chapters} · ${manga.status}</p>
    `
  );
  return card;
};
