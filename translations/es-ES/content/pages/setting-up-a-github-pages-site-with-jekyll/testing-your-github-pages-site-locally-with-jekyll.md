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
ms.openlocfilehash: 9db3a964ee38afa191f7fed31cfa032128460f48
ms.sourcegitcommit: 3268914369fb29540e4d88ee5e56bc7a41f2a60e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/26/2022
ms.locfileid: '148111315'
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
  {% note %}

  **Nota**: Si has instalado Ruby 3.0 o una versión posterior (que puedes tener si instalaste la versión predeterminada mediante Homebrew), es posible que recibas un error en este paso. Esto se debe a que estas versiones de Ruby ya no incluye la instalación de `webrick`.
  
  Para corregir el error, intenta ejecutar `bundle add webrick` y, después, vuelve a ejecutar `bundle exec jekyll serve`.
  {% endnote %}

3. Para obtener una vista previa del sitio, en el explorador web, vaya a `http://localhost:4000`.

## Actualizar la gema de {% data variables.product.prodname_pages %}

Jekyll es un proyecto de código abierto activo que se actualiza de manera frecuente. Si la gema de `github-pages` de su equipo está desactualizada con respecto a la gema de `github-pages` del servidor de {% data variables.product.prodname_pages %}, su sitio puede tener un aspecto distinto cuando se compile localmente en comparación a cuando se publique en {% data variables.product.product_name %}. Para evitar esto, actualice periódicamente la gema `github-pages` en el equipo.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Actualice la gema `github-pages`.
    - Si ha instalado Bundler, ejecute `bundle update github-pages`.
    - Si no tiene instalado Bundler, ejecute `gem update github-pages`.

## Información adicional

- [{% data variables.product.prodname_pages %}](http://jekyllrb.com/docs/github-pages/) en la documentación de Jekyll
