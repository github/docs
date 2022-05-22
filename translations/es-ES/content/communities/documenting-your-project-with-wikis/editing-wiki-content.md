---
title: Editar el contenido de una wiki
intro: Puedes agregar imágenes y enlaces al contenido de tu wiki y usar algunos de los formatos que admite MediaWiki.
redirect_from:
  - /articles/adding-links-to-wikis/
  - /articles/how-do-i-add-links-to-my-wiki/
  - /articles/how-do-i-add-or-upload-images-to-the-wiki/
  - /articles/needs-writing-review-how-do-i-add-or-upload-images-to-the-wiki/
  - /articles/how-do-i-add-images-to-my-wiki/
  - /articles/adding-images-to-wikis/
  - /articles/supported-mediawiki-formats/
  - /articles/editing-wiki-content
  - /github/building-a-strong-community/editing-wiki-content
product: '{% data reusables.gated-features.wikis %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Community
---

### Agregar enlaces

Puedes crear enlaces en wikis usando el markup estándar admitido por tu página, o usando la sintaxis MediaWiki. Por ejemplo:

- Si tus páginas se presentan con Markdown, la sintaxis del enlace es `[Link Text](full-URL-of-wiki-page)`.
- Con la sintaxis MediaWiki, la sintaxis del enlace es `[[Link Text|nameofwikipage]]`.

### Agregar imágenes

Las wikis pueden presentar imágenes PNG, JPEG y GIF.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
3. Usando la barra lateral de la wiki, dirígete a la página que deseas cambiar y luego haz clic en **Editar**.
4. En la barra de herramientas de la wiki, haz clic en **Imagen**. ![Botón de la wiki Agregar imagen](/assets/images/help/wiki/wiki_add_image.png)
5. En el cuadro de diálogo "Insertar imagen", escribe la URL de la imagen y el texto alternativo (el que usan los motores de búsqueda y los lectores de pantalla).
6. Haz clic en **OK** (aceptar).

#### Establecer enlaces a las imágenes en un repositorio

Puedes establecer un enlace a una imagen en un repositorio en {% data variables.product.product_name %} copiando la URL en tu navegador y usándola como la ruta que lleva a la imagen. Por ejemplo, cuando insertas una imagen en tu wiki usando Markdown, la imagen debe verse de la siguiente manera:

    [[https://github.com/USERNAME/REPOSITORY/blob/main/img/octocat.png|alt=octocat]]

### Formatos MediaWiki admitidos

Independientemente del lenguaje markup en que esté escrita tu página, siempre tendrás una determinada sintaxis MediaWiki disponible.
- Enlaces ([excdepto AsciiDoc](https://github.com/gollum/gollum/commit/d1cf698b456cd6a35a54c6a8e7b41d3068acec3b))
- Reglas horizontales mediante `---`
- Entidades simbólicas abreviadas (como `&delta;` o `&euro;`)

Por razones de seguridad y rendimiento, algunas sintaxis no son compatibles.
- [Transclusión](https://www.mediawiki.org/wiki/Transclusion)
- Listas de definiciones
- Sangría
- Índice
