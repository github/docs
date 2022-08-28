---
title: Usar submódulos con las Páginas de GitHub
intro: 'Puedes usar submódulos con las {% data variables.product.prodname_pages %} para incluir otros proyectos en el código de tu sitio.'
redirect_from:
  - /articles/using-submodules-with-pages/
  - /articles/using-submodules-with-github-pages
  - /github/working-with-github-pages/using-submodules-with-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
---
Si el repositorio para tu sitio de {% data variables.product.prodname_pages %} contiene submódulos, sus contenidos se extraerán automáticamente cuando se compile tu sitio.

Solo puedes usar submódulos que apunten a los repositorios públicos, porque el servidor de {% data variables.product.prodname_pages %} no puede acceder a los repositorios privados.

Utiliza la URL de solo lectura `https://` para tus submódulos, incluidos los submódulos anidados. Puedes hacer este cambio en tu archivo _.gitmodules_.

### Leer más

- "[Heramientas Git - Submódulos](https://git-scm.com/book/en/Git-Tools-Submodules)" del libro _Pro Git_
- "[Solucionar problemas de errores de construcción de Jekyll para sitios de {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)"
