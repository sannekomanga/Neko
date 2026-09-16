/* NekoManga — menu.js
   Comportamiento de la navbar: sombra al hacer scroll, menú móvil,
   y expansión del buscador. Se inicializa una vez que navbar.html
   ya fue inyectado en el DOM por app.js. */

Neko.initMenu = function initMenu(navItems) {
  const nav = document.getElementById('site-navbar');
  if (!nav) return;

  // Enlaces de navegación (desde config.json)
  const linksList = document.getElementById('navbar-links');
  const here = document.body.dataset.page || 'index.html';
  linksList.innerHTML = navItems
    .map((item) => {
      const current = item.href === here ? ' aria-current="page"' : '';
      return `<li><a href="${item.href}"${current}>${item.label}</a></li>`;
    })
    .join('');

  // Sombra/fondo sólido al hacer scroll
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Menú móvil
  const menuBtn = document.getElementById('navbar-menu-toggle');
  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-menu-open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    menuBtn.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  // Buscador expandible
  const searchForm = document.getElementById('navbar-search');
  const searchToggle = document.getElementById('navbar-search-toggle');
  const searchInput = document.getElementById('navbar-search-input');

  searchToggle.addEventListener('click', () => {
    const isOpen = searchForm.classList.toggle('is-open');
    if (isOpen) searchInput.focus();
  });

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    if (!query) return;
    window.location.href = `catalogo.html?q=${encodeURIComponent(query)}`;
  });
};
