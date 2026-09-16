/* NekoManga — search.js
   Autocompletado ligero sobre el buscador de la navbar: muestra
   hasta 5 coincidencias por título mientras el usuario escribe.
   El envío del formulario (Enter) sigue resuelto en menu.js. */

Neko.initSearch = function initSearch(mangaList) {
  const input = document.getElementById('navbar-search-input');
  const form = document.getElementById('navbar-search');
  if (!input || !form) return;

  const list = Neko.el('div', {
    class: 'search-suggestions',
    id: 'search-suggestions',
  });
  Object.assign(list.style, {
    position: 'absolute',
    top: '46px',
    right: '0',
    width: '240px',
    background: 'var(--surface)',
    border: '1px solid var(--surface-alt)',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    display: 'none',
    zIndex: '5',
  });
  form.style.position = 'relative';
  form.appendChild(list);

  function renderSuggestions(query) {
    const q = query.trim().toLowerCase();
    if (!q) { list.style.display = 'none'; return; }

    const matches = mangaList
      .filter((m) => m.title.toLowerCase().includes(q))
      .slice(0, 5);

    if (!matches.length) { list.style.display = 'none'; return; }

    list.innerHTML = matches
      .map(
        (m) => `
          <a href="manga.html?id=${m.id}"
             style="display:block; padding:10px 14px; font-size:0.85rem;
                    font-weight:600; color:var(--text); border-bottom:1px solid var(--surface-alt);">
            ${m.title}
          </a>`
      )
      .join('');
    list.style.display = 'block';
  }

  input.addEventListener('input', () => renderSuggestions(input.value));
  input.addEventListener('blur', () => setTimeout(() => { list.style.display = 'none'; }, 120));
  input.addEventListener('focus', () => renderSuggestions(input.value));
};
