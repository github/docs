---
title: Crear un sitio de Páginas de GitHub
intro: 'Puede crear un sitio de {{ site.data.variables.product.prodname_pages }} en un repositorio nuevo o existente.'
redirect_from:
  - /articles/creating-project-pages-using-the-command-line/
  - /articles/creating-a-github-pages-site
product: '{{ site.data.reusables.gated-features.pages }}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Crear un repositorio para tu sitio

{{ site.data.reusables.pages.new-or-existing-repo }}

{{ site.data.reusables.pages.private_pages_are_public_warning }}

{{ site.data.reusables.repositories.create_new }}
{{ site.data.reusables.repositories.owner-drop-down }}
{{ site.data.reusables.pages.create-repo-name }}
{{ site.data.reusables.repositories.choose-repo-visibility }}
{{ site.data.reusables.repositories.initialize-with-readme }}
{{ site.data.reusables.repositories.create-repo }}

### Crear tu sitio

{{ site.data.reusables.pages.must-have-repo-first }}

{{ site.data.reusables.pages.navigate-site-repo }}
{{ site.data.reusables.pages.decide-publishing-source }}
3. Si ya existe la fuente de publicación que elegiste, desplázate hasta la fuente de publicación. Si la fuente de publicación que elegiste no existe, crear la fuente de publicación.
4. En la raíz de la fuente de publicación, crea un archivo nuevo denominado `index.md` que contenga el contenido que quieras mostrar en la página principal de tu sitio.
{{ site.data.reusables.pages.configure-publishing-source }}
{{ site.data.reusables.repositories.sidebar-settings }}
{{ site.data.reusables.pages.visit-site }}

{{ site.data.reusables.pages.admin-must-push }}

### Pasos siguientes

Puedes agregar más páginas a tu sitio creando más archivos nuevos. Cada archivo estará disponible en tu sitio en la misma estructura de directorios que tu fuente de publicación. Por ejemplo, si la fuente de publicación para tu sitio de proyectos es la rama `gh-pages`, y creas un archivo nuevo denominado `/about/contact-us.md` en la rama `gh-pages`, el archivo estará disponible en {% if currentVersion == "free-pro-team@latest" %}`https://<user>.github.io/<repository>/{% else %}`http(s)://<hostname>/pages/<username>/<repository>/{% endif %}about/contact-us.md`.

También puedes agregar un tema para personalizar la apariencia de tu sitio. Para obtener más información, consulta {% if currentVersion == "free-pro-team@latest" %}"[Agregar un tema a tu sitio de {{ site.data.variables.product.prodname_pages }} con el selector de temas](/articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser){% else %}"[Agregar un tema a tu sitio de {{ site.data.variables.product.prodname_pages }} con Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll){% endif %}".

Para personalizar aún más tu sitio, puedes usar Jekyll, un generador de sitio estático con soporte integrado para {{ site.data.variables.product.prodname_pages }}. For more information, see "[About {{ site.data.variables.product.prodname_pages }} and Jekyll](/articles/about-github-pages-and-jekyll)."

### Leer más

- "[Solucionar problemas de errores de construcción de Jekyll para sitios de {{ site.data.variables.product.prodname_pages }}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)"
- "[Crear y eliminar ramas dentro de tu repositorio](/articles/creating-and-deleting-branches-within-your-repository/)"
- "[Crear archivos nuevos](/articles/creating-new-files)"
