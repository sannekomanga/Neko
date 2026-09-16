/* NekoManga — recommendations.js
   Fila "Recomendados para ti". Sin sistema de usuario todavía
   (llega en la fase de backend), así que por ahora selecciona
   una muestra con buena valoración y la mezcla de forma estable. */

Neko.renderRecommendations = function renderRecommendations(mangaList) {
  const container = document.getElementById('recommendations-row');
  if (!container) return;

  const picks = [...mangaList]
    .filter((m) => m.rating >= 4.6)
    .sort((a, b) => a.id.localeCompare(b.id)) // orden estable, no aleatorio en cada carga
    .slice(0, 8);

  picks.forEach((manga) => container.appendChild(Neko.createMangaCard(manga)));
};
