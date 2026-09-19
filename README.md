<div align="center">

# NekoManga

**Catálogo web de mangas poco comunes: descubre, lee y guarda joyas ocultas del manga.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Estado](https://img.shields.io/badge/estado-en%20desarrollo-orange?style=for-the-badge)
![Responsive](https://img.shields.io/badge/dise%C3%B1o-responsive-brightgreen?style=for-the-badge)

</div>

---

## Descripción

**NekoManga** es una plataforma web dedicada a catalogar y leer mangas **poco conocidos o difíciles de encontrar**. Permite explorar una biblioteca, buscar por título, filtrar por género, leer capítulos, guardar favoritos y participar en una comunidad de lectores.

## Tabla de contenidos

- [Características](#características)
- [Capturas de pantalla](#capturas-de-pantalla)
- [Tecnologías](#tecnologías)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Uso](#uso)
- [Roadmap](#roadmap)
- [Contribuir](#contribuir)
- [Licencia](#licencia)
- [Autor y contacto](#autor-y-contacto)

## Características

- **Biblioteca de manga**: explora y organiza el catálogo.
- **Buscador**: encuentra mangas por título.
- **Filtros avanzados y géneros**: acción, romance, aventura y más.
- **Lector de manga**: lee capítulos directamente en la plataforma.
- **Favoritos**: guarda los mangas que más te gustan.
- **Cuenta de usuario**: inicio de sesión y registro.
- **Perfil**: administra tu información y tus favoritos.
- **Actualizaciones**: consulta los nuevos capítulos.
- **Eventos**: eventos de lectura de la plataforma.
- **Comunidad**: interacción entre usuarios.
- **Diseño responsive**: se adapta a móvil, tablet y PC.

## Capturas de pantalla

> Agrega aquí tus capturas. Guárdalas, por ejemplo, en `assets/screenshots/`.

| Inicio | Biblioteca |
| :---: | :---: |
| ![Inicio](assets/screenshots/inicio.png) | ![Biblioteca](assets/screenshots/biblioteca.png) |

| Lector | Perfil |
| :---: | :---: |
| ![Lector](assets/screenshots/lector.png) | ![Perfil](assets/screenshots/perfil.png) |

## Tecnologías

| Tecnología | Uso |
| --- | --- |
| **HTML5** | Estructura de las páginas y componentes |
| **CSS3** | Estilos, variables, carruseles y diseño responsive |
| **JavaScript** | Lógica de la interfaz, buscador, filtros, sesión y lector |
| **JSON** | Datos de mangas, eventos y géneros (`data/`) |

## Estructura del proyecto

```
NekoManga/
├── index.html
├── pages/            # Páginas: biblioteca, manga, lector, eventos, comunidad,
│                     # perfil, iniciar-sesion, registrarse, contacto,
│                     # privacidad y términos
├── css/              # Estilos: variables, main, header, hero, sections, cards,
│                     # carousel, pages, auth, profile y responsive
├── js/
│   ├── main.js
│   ├── components/   # header, footer, modal
│   ├── carousel/     # carousel, autoplay, swipe, animations
│   ├── manga/        # manga-card, manga-list, manga-detail, chapters
│   ├── search/       # search, filters, pagination
│   ├── auth/         # login, register, session
│   ├── profile/      # profile, favorites
│   └── pages/        # biblioteca, eventos, comunidad
├── data/             # manga.json, events.json, genres.json
├── components/       # header.html, footer.html, manga-card.html, loading.html
├── assets/           # covers, backgrounds, banners, events, icons, logo, fonts
└── config/
    └── site.json     # Configuración general del sitio
```

## Instalación

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/TU_USUARIO/NekoManga.git
   cd NekoManga
   ```

2. **Levanta un servidor local**

   El proyecto carga componentes y archivos JSON con `fetch`, por lo que conviene usar un servidor local en lugar de abrir `index.html` directamente.

   - Con la extensión **Live Server** de VS Code: clic derecho sobre `index.html` y *Open with Live Server*.
   - Con Python:

     ```bash
     python -m http.server 8000
     ```

   - Con Node.js:

     ```bash
     npx serve .
     ```

3. **Abre el navegador** en `http://localhost:8000` (o la URL que indique tu servidor).

## Uso

1. Entra al **inicio** para ver los mangas destacados y las novedades.
2. Ve a la **Biblioteca** y usa el buscador y los filtros por género.
3. Abre un manga para ver su detalle y la lista de capítulos.
4. Lee en el **Lector** y guarda tus mangas en **Favoritos**.
5. Crea una cuenta para administrar tu **Perfil**.
6. Participa en **Eventos** y en la **Comunidad**.

## Roadmap

- [x] Biblioteca, buscador y filtros
- [x] Lector de capítulos
- [x] Favoritos y perfil de usuario
- [x] Diseño responsive
- [ ] Sistema de comentarios y valoraciones
- [ ] Notificaciones de nuevos capítulos
- [ ] Modo oscuro / claro
- [ ] Backend y base de datos para cuentas reales
- [ ] Idiomas adicionales

> Ajusta las casillas según el estado real del proyecto.

## Contribuir

Las contribuciones son bienvenidas.

1. Haz un **fork** del repositorio.
2. Crea una rama para tu cambio:

   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

3. Haz commit de tus cambios:

   ```bash
   git commit -m "feat: agrega nueva funcionalidad"
   ```

4. Sube la rama:

   ```bash
   git push origin feature/nueva-funcionalidad
   ```

5. Abre un **Pull Request** describiendo lo que cambiaste.

También puedes abrir un **issue** para reportar errores o sugerir ideas.

## Licencia

Este proyecto **aún no tiene una licencia definida**. Por defecto, todos los derechos están reservados por el autor.

Si quieres que otros puedan usar o modificar el código, puedes elegir una licencia (por ejemplo, [MIT](https://choosealicense.com/licenses/mit/)) y agregar un archivo `LICENSE` al repositorio.

> **Nota:** el contenido de los mangas (portadas, capítulos, imágenes) pertenece a sus respectivos autores y editoriales.

## Autor y contacto

**Tu Nombre**

- GitHub: [@TU_USUARIO](https://github.com/TU_USUARIO)
- Email: tu-correo@ejemplo.com

---

<div align="center">

Hecho para los amantes del manga · **NekoManga**

</div>
