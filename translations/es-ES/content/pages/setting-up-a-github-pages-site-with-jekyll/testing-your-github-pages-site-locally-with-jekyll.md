---
title: Probar tu sitio de Páginas de GitHub localmente con Jekyll
intro: 'Puedes compilar tu sitio de {% data variables.product.prodname_pages %} localmente para previsualizar y probar los cambios en tu sitio.'
redirect_from:
  - /articles/setting-up-your-pages-site-locally-with-jekyll
  - /articles/setting-up-your-github-pages-site-locally-with-jekyll
  - /articles/testing-your-github-pages-site-locally-with-jekyll
  - /github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Test site locally with Jekyll
ms.openlocfilehash: 68123d7bc2849881fc60fdd89dc4177e6701f5d4
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878579'
---
Cualquier persona con permisos de lectura para un repositorio puede probar un sitio de {% data variables.product.prodname_pages %} localmente.

## Prerrequisitos

Antes de que puedas usar Jekyll para probar un sitio, debes hacer lo siguiente:
  - Instalar [Jekyll](https://jekyllrb.com/docs/installation/)
  - Crear un sitio de Jekyll. Para obtener más información, vea "[Crear un sitio de {% data variables.product.prodname_pages %} con Jekyll](/articles/creating-a-github-pages-site-with-jekyll)".

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

## Construyendo tu sitio localmente

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.pages.navigate-publishing-source %}
3. Ejecute `bundle install`.
3. Ejecute el sitio de Jekyll localmente.
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
3. Para obtener una vista previa del sitio, en el explorador web, vaya a `http://localhost:4000`.

{% note %}

**Nota**: Si usa Ruby 3.0 y Jekyll 4.2.x, o versiones anteriores, deberá agregar la gema `webrick` al archivo Gemfile del proyecto antes de ejecutar `bundle install`.

{% endnote %}

## Actualizar la gema de {% data variables.product.prodname_pages %}

Jekyll es un proyecto de código abierto activo que se actualiza de manera frecuente. Si la gema de `github-pages` de su equipo está desactualizada con respecto a la gema de `github-pages` del servidor de {% data variables.product.prodname_pages %}, su sitio puede tener un aspecto distinto cuando se compile localmente en comparación a cuando se publique en {% data variables.product.product_name %}. Para evitar esto, actualice periódicamente la gema `github-pages` en el equipo.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Actualice la gema `github-pages`.
    - Si ha instalado Bundler, ejecute `bundle update github-pages`.
    - Si no tiene instalado Bundler, ejecute `gem update github-pages`.

## Información adicional

- [{% data variables.product.prodname_pages %}](http://jekyllrb.com/docs/github-pages/) en la documentación de Jekyll
