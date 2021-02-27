---
title: Crear un sitio de Páginas de GitHub
intro: 'Puede crear un sitio de {% data variables.product.prodname_pages %} en un repositorio nuevo o existente.'
redirect_from:
  - /articles/creating-pages-manually/
  - /articles/creating-project-pages-manually/
  - /articles/creating-project-pages-from-the-command-line/
  - /articles/creating-project-pages-using-the-command-line/
  - /articles/creating-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.pages.org-owners-can-restrict-pages-creation %}

### Crear un repositorio para tu sitio

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %}
{% data reusables.repositories.owner-drop-down %}
{% data reusables.pages.create-repo-name %}
{% data reusables.repositories.choose-repo-visibility %}
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}

### Crear tu sitio

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.decide-publishing-source %}
3. Si ya existe la fuente de publicación que elegiste, desplázate hasta la fuente de publicación. Si la fuente de publicación que elegiste no existe, crear la fuente de publicación.
4. En la raíz de la fuente de publicación, crea un archivo nuevo denominado `index.md` que contenga el contenido que quieras mostrar en la página principal de tu sitio.
{% data reusables.pages.configure-publishing-source %}
{% data reusables.repositories.sidebar-settings %}{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.pages.choose-visibility %}{% endif %}
{% data reusables.pages.visit-site %}

{% data reusables.pages.admin-must-push %}

### Pasos siguientes

Puedes agregar más páginas a tu sitio creando más archivos nuevos. Cada archivo estará disponible en tu sitio en la misma estructura de directorios que tu fuente de publicación. Por ejemplo, si la fuente de publicación para tu sitio de proyecto es la rama `gh-pages`, y creas un archivo nuevo que se llama `/about/contact-us.md` en la rama `gh-pages`, el archivo estará disponible en {% if currentVersion == "free-pro-team@latest" %}`https://<user>.github.io/<repository>/{% else %}`http(s)://<hostname>/pages/<username>/<repository>/{% endif %}about/contact-us.html`.

También puedes agregar un tema para personalizar la apariencia de tu sitio. Para obtener más información, consulta la sección {% if currentVersion == "free-pro-team@latest" %}"[Agregar un tema a tu sitio de {% data variables.product.prodname_pages %} con el seleccionador de temas](/articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser){% else %}"[Agregar un tema a tu sitio de {% data variables.product.prodname_pages %} utilizando Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll){% endif %}".

Para personalizar aún más tu sitio, puedes usar Jekyll, un generador de sitio estático con soporte integrado para {% data variables.product.prodname_pages %}. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_pages %} y de Jekyll](/articles/about-github-pages-and-jekyll)".

### Leer más

- "[Solucionar problemas de errores de construcción de Jekyll para sitios de {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)"
- "[Crear y eliminar ramas dentro de tu repositorio](/articles/creating-and-deleting-branches-within-your-repository/)"
- "[Crear archivos nuevos](/articles/creating-new-files)"
