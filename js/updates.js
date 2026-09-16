/* NekoManga — updates.js
   Renderiza la fila "Últimas actualizaciones": los manga ordenados
   por fecha de actualización, con insignia "Nuevo" para los de
   los últimos 2 días. */

Neko.renderUpdates = function renderUpdates(mangaList) {
  const container = document.getElementById('updates-row');
  if (!container) return;

  const sorted = [...mangaList].sort(
    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
  );

  sorted.forEach((manga) => {
    const isRecent = (Date.now() - new Date(manga.updatedAt)) / 86400000 <= 2;
    const card = Neko.createMangaCard(manga, {
      badgeLabel: isRecent ? 'Nuevo' : null,
    });
    container.appendChild(card);
  });
};

/** Destacados: los manga marcados con featured:true en manga.json. */
Neko.renderFeaturedRow = function renderFeaturedRow(mangaList) {
  const container = document.getElementById('featured-row');
  if (!container) return;
  mangaList
    .filter((m) => m.featured)
    .forEach((manga) => container.appendChild(Neko.createMangaCard(manga, { wide: true })));
};
