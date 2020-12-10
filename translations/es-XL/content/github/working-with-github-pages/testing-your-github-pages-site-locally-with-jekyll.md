---
title: Probar tu sitio de Páginas de GitHub localmente con Jekyll
intro: 'Puedes compilar tu sitio de {% data variables.product.prodname_pages %} localmente para previsualizar y probar los cambios en tu sitio.'
redirect_from:
  - /articles/setting-up-your-pages-site-locally-with-jekyll/
  - /articles/setting-up-your-github-pages-site-locally-with-jekyll/
  - /articles/testing-your-github-pages-site-locally-with-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Cualquier persona con permisos de lectura para un repositorio puede probar un sitio de {% data variables.product.prodname_pages %} localmente.

### Prerrequisitos

Antes de que puedas usar Jekyll para probar un sitio, debes hacer lo siguiente:
  - Instalar [Jekyll](https://jekyllrb.com/docs/installation/).
  - Crear un sitio de Jekyll. Para obtener más información, consulta "[Crear un sitio de {% data variables.product.prodname_pages %} con Jekyll](/articles/creating-a-github-pages-site-with-jekyll)".

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

### Construyendo su sitio localmente

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.pages.navigate-publishing-source %}
3. Ejecuta tu sitio Jekyll de forma local.
  ```shell
  $ bundle exec jekyll serve
  > Configuration file: /Users/octocat/my-site/_config.yml
  >            Source: /Users/octocat/my-site
  >       Destination: /Users/octocat/my-site/_site
  > Incremental build: disabled. Enable with --incremental
  >      Generating...
  >                    done in 0.309 seconds.
  > Auto-regeneration: enabled for '/Users/octocat/my-site'
  > Configuration file: /Users/octocat/my-site/_config.yml
  >    Server address: http://127.0.0.1:4000/
  >  Server running... press ctrl-c to stop.
  ```
3. Para previsualizar tu sitio, en tu navegador web, navega hasta `http://localhost:4000`.

### Actualizar la gema de {% data variables.product.prodname_pages %}

Jekyll es un proyecto de código abierto activo que se actualiza de manera frecuente. Si la gema de `github-pages` de tu computadora está desactualizada con respecto a la gema de `github-pages` del servidor de {% data variables.product.prodname_pages %}, tu sitio puede verse diferente cuando se compile localmente en comparación a cómo se vea cuando se publique en {% data variables.product.product_name %}. Para evitar esto, actualiza de manera regular la gema de `github-pages` en tu computadora.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Actualiza la gema de `github-pages`.
    - Si instalaste Bundler, ejecuta `bundle update github-pages`.
    - Si no tienes instalado Bundler, ejecuta `gem update github-pages`.

### Leer más

- [{% data variables.product.prodname_pages %}](http://jekyllrb.com/docs/github-pages/) en la documentación de Jekyll
