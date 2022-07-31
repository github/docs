---
title: Crear un sitio de Páginas de GitHub
intro: 'Puede crear un sitio de {% data variables.product.prodname_pages %} en un repositorio nuevo o existente.'
redirect_from:
  - /articles/creating-pages-manually
  - /articles/creating-project-pages-manually
  - /articles/creating-project-pages-from-the-command-line
  - /articles/creating-project-pages-using-the-command-line
  - /articles/creating-a-github-pages-site
  - /github/working-with-github-pages/creating-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Crear un sitio de GitHub Pages
---

{% data reusables.pages.org-owners-can-restrict-pages-creation %}

## Crear un repositorio para tu sitio

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %}
{% data reusables.repositories.owner-drop-down %}
{% indented_data_reference reusables.pages.emu-org-only spaces=3 %}
{% data reusables.pages.create-repo-name %}
{% data reusables.repositories.choose-repo-visibility %}
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}

## Crear tu sitio

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.decide-publishing-source %}
1. Create the entry file for your site. {% data variables.product.prodname_pages %} will look for an `index.html`, `index.md`, or `README.md` file as the entry file for your site.

   {% ifversion pages-custom-workflow %}If your publishing source is a branch and folder, the entry file must be at the top level of the source folder on the source branch. For example, if your publishing source is the `/docs` folder on the `main` branch, your entry file must be located in the `/docs` folder on a branch called `main`.

   If your publishing source is a {% data variables.product.prodname_actions %} workflow, the artifact that you deploy must include the entry file at the top level of the artifact. Instead of adding the entry file to your repository, you may choose to have your {% data variables.product.prodname_actions %} workflow generate your entry file when the workflow runs.{% else %} The entry file must be at the top level of your chosen publishing source. For example, if your publishing source is the `/docs` folder on the `main` branch, your entry file must be located in the `/docs` folder on a branch called `main`.{% endif %}
{% data reusables.pages.configure-publishing-source %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
{% data reusables.pages.choose-visibility %}
{% data reusables.pages.visit-site %}
{% data reusables.pages.check-workflow-run %}

{% data reusables.pages.admin-must-push %}

## Pasos siguientes

Puedes agregar más páginas a tu sitio creando más archivos nuevos. Cada archivo estará disponible en tu sitio en la misma estructura de directorios que tu fuente de publicación. Por ejemplo, si la fuente de publicación para tu sitio de proyectos es la rama `gh-pages`, y creas un archivo nuevo denominado `/about/contact-us.md` en la rama `gh-pages`, el archivo estará disponible en {% ifversion fpt or ghec %}`https://<user>.github.io/<repository>/{% else %}`http(s)://<hostname>/pages/<username>/<repository>/{% endif %}about/contact-us.html`.

También puedes agregar un tema para personalizar la apariencia de tu sitio. Para obtener más información, consulta {% ifversion fpt or ghec %}"[Agregar un tema a tu sitio de {% data variables.product.prodname_pages %} con el selector de temas](/articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser){% else %}"[Agregar un tema a tu sitio de {% data variables.product.prodname_pages %} con Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll){% endif %}".

Para personalizar aún más tu sitio, puedes usar Jekyll, un generador de sitio estático con soporte integrado para {% data variables.product.prodname_pages %}. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_pages %} y de Jekyll](/articles/about-github-pages-and-jekyll)".

## Leer más

- "[Solucionar problemas de errores de construcción de Jekyll para sitios de {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)"
- "[Crear y eliminar ramas dentro de tu repositorio](/articles/creating-and-deleting-branches-within-your-repository/)"
- "[Crear archivos nuevos](/articles/creating-new-files)"
