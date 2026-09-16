/* NekoManga — utils.js
   Helpers compartidos por el resto de módulos. Se expone todo bajo
   window.Neko para evitar módulos ES y mantener el stack simple (Fase 1-3). */

window.Neko = window.Neko || {};

/**
 * Carga un fragmento HTML y lo inserta dentro de un contenedor.
 * @param {string} url - ruta al parcial (ej. 'components/navbar.html')
 * @param {string} selector - selector del contenedor destino
 */
Neko.loadComponent = async function loadComponent(url, selector) {
  const target = document.querySelector(selector);
  if (!target) return null;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`No se pudo cargar ${url} (${res.status})`);
    target.innerHTML = await res.text();
    return target;
  } catch (err) {
    console.error('[Neko.loadComponent]', err.message);
    return null;
  }
};

/** Descarga y parsea un JSON de /data. */
Neko.getJSON = async function getJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`No se pudo cargar ${url} (${res.status})`);
  return res.json();
};

/** Crea un elemento con atributos y contenido en una sola llamada. */
Neko.el = function el(tag, attrs = {}, html = '') {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    if (key === 'class') node.className = value;
    else node.setAttribute(key, value);
  });
  if (html) node.innerHTML = html;
  return node;
};

/** Formatea vistas grandes: 128400 -> "128.4k". */
Neko.formatViews = function formatViews(n) {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k`;
  return String(n);
};

/** Formatea una fecha ISO a "hace X días" en español. */
Neko.timeAgo = function timeAgo(isoDate) {
  const diffMs = Date.now() - new Date(isoDate).getTime();
  const days = Math.max(0, Math.round(diffMs / 86400000));
  if (days === 0) return 'hoy';
  if (days === 1) return 'hace 1 día';
  return `hace ${days} días`;
};

/** Devuelve la inicial en mayúscula de un título, para la portada placeholder. */
Neko.initial = function initial(title) {
  return (title || '?').trim().charAt(0).toUpperCase();
};

/** Une nombres de géneros a partir de ids, usando el catálogo cargado. */
Neko.genreNames = function genreNames(ids, genreCatalog) {
  const map = new Map(genreCatalog.map((g) => [g.id, g.name]));
  return ids.map((id) => map.get(id) || id).join(' · ');
};
