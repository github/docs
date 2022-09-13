---
title: Acerca de los errores de compilación para sitios de Páginas de GitHub
intro: 'Si Jekyll encuentra un error al compilar tu sitio de {% data variables.product.prodname_pages %} localmente o en {% data variables.product.product_name %}, recibirás un mensaje de error con más información.'
redirect_from:
  - /articles/viewing-jekyll-build-error-messages
  - /articles/generic-jekyll-build-failures
  - /articles/about-jekyll-build-errors-for-github-pages-sites
  - /github/working-with-github-pages/about-jekyll-build-errors-for-github-pages-sites
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Jekyll build errors for Pages
ms.openlocfilehash: c435d7857239ae4a8b1a09c86e10fe12b248a4b2
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147648243'
---
## Acerca de los errores de compilación de Jekyll

{% ifversion pages-custom-workflow %}Si publicas desde una rama, en ocasiones{% else %}Sometimes,{% endif %},{% data variables.product.prodname_pages %} no intentará crear el sitio después de insertar cambios en la fuente de publicación del sitio.{% ifversion fpt or ghec %}
- La persona que subió los cambios no ha verificado su dirección de correo electrónico. Para más información, vea "[Comprobación de la dirección de correo electrónico](/articles/verifying-your-email-address)".{% endif %}
- Estás subiendo con una llave de despliegue. Si deseas automatizar las subidas al repositorio de tu sitio, puedes configurar un usuario de máquina en su lugar. Para más información, vea "[Administración de claves de implementación](/developers/overview/managing-deploy-keys#machine-users)".
- Estás usando un servicio CI que no está configurado para compilar tu fuente de publicación. Por ejemplo, Travis CI no compilará la rama `gh-pages` a menos que la agregue a una lista segura. Para más información, vea "[Personalización de la compilación](https://docs.travis-ci.com/user/customizing-the-build/#safelisting-or-blocklisting-branches)" en Travis CI o en la documentación del servicio de CI.

{% note %}

**Nota:** Es posible que la publicación de los cambios en el sitio tome hasta 10 minutos después de que envíes los cambios a {% data variables.product.product_name %}.

{% endnote %}

{% ifversion build-pages-with-actions %} Si Jekyll intenta compilar tu sitio y encuentra un error, recibirás un mensaje de error de compilación.
{% else %} Si Jekyll intenta compilar tu sitio y encuentra un error, recibirás un mensaje de error de compilación. Hay dos tipos principales de mensajes de error de construcción de Jekyll.
- Un mensaje de "Aviso de compilación de página" significa que la compilación se ha completado correctamente, pero es posible que debas hacer cambios para prevenir problemas futuros.
- Un mensaje "Page build failed" (Falló la construcción de página) significa que no se pudo completar la compilación. Si Jekyll puede detectar el motivo de la falla, verás un mensaje de error descriptivo.
{% endif %}

Para más información sobre cómo solucionar errores de compilación, vea "[Solución de problemas de compilación de Jekyll para sitios de {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)".

{% ifversion build-pages-with-actions %}
## Ver los mensajes de error de compilación de Jekyll con las {% data variables.product.prodname_actions %}

Predeterminadamente, tu sitio de {% data variables.product.prodname_pages %} se compila y despliega con una ejecución de flujo de trabajo de {% data variables.product.prodname_actions %} a menos de que hayas configurado tu sitio de {% data variables.product.prodname_pages %} para que utilice una herramienta de IC distinta. Para encontrar errores de compilación potenciales, puedes verificar la ejecución de flujo de trabajo para tu sitio de {% data variables.product.prodname_pages %} si revisas las ejecuciones de flujo de trabajo de tu repositorio. Para más información, vea "[Visualización del historial de ejecución de flujos de trabajo](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)".  Para más información sobre cómo volver a ejecutar el flujo de trabajo en caso de error, vea "[Nueva ejecución de flujos de trabajo y trabajos](/actions/managing-workflow-runs/re-running-workflows-and-jobs)".
{% endif %}

{% ifversion build-pages-with-actions %}{% else %}
## Ver los fallos de compilación de tu repositorio en {% data variables.product.product_name %}

Puede ver los errores de compilación (pero no las advertencias de compilación) para el sitio en {% data variables.product.product_name %} en la pestaña **Configuración** del repositorio del sitio.
{% endif %}

## Ver los mensajes de error de compilación de Jekyll localmente

Recomendamos probar su sitio localmente, lo que le permite ver mensajes de error de compilación en la línea de comandos, y abordar cualquier fallo de construcción antes de presionar los cambios a {% data variables.product.product_name %}. Para obtener más información, vea "[Probar tu sitio de {% data variables.product.prodname_pages %} localmente con Jekyll](/articles/testing-your-github-pages-site-locally-with-jekyll)".

## Ver los mensajes de error de compilación de Jekyll en tu solicitud de cambios

{% ifversion pages-custom-workflow %}Si publicas desde una rama, cuando {% else %}When{% endif %} crea una solicitud de incorporación de cambios para actualizar la fuente de publicación en {% data variables.product.product_name %}, puedes ver los mensajes de error de compilación en la pestaña **Comprobaciones** de la solicitud de incorporación de cambios. Para más información, vea "[Acerca de las comprobaciones de estado](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)".

{% ifversion pages-custom-workflow %}Si publicas con un flujo de trabajo de {% data variables.product.prodname_actions %} personalizado, para ver los mensajes de errores de compilación en la solicitud de incorporación de cambios, debes configurar el flujo de trabajo para que se ejecute en el desencadenador `pull_request`. Al hacerlo, se recomienda que omitas los pasos de implementación si el evento `pull_request` desencadenó el flujo de trabajo. De esta forma podrás ver los errores de compilación sin implementar los cambios de la solicitud de incorporación de cambios en el sitio. Para más información, consulta "[Eventos que desencadenan flujos de trabajo](/actions/using-workflows/events-that-trigger-workflows#pull_request)" y "[Expresiones](/actions/learn-github-actions/expressions)".{% endif %}

## Ver los errores de compilación de Jekyll por correo electrónico

{% ifversion pages-custom-workflow %}Si vas a publicar desde una rama, cuando{% else %}When{% endif %} inserte cambios en la fuente de publicación en {% data variables.product.product_name %}, {% data variables.product.prodname_pages %} intentará crear el sitio. Si se produce un error durante la compilación, recibirás un corro electrónico en tu dirección principal de correo electrónico. {% data reusables.pages.build-failure-email-server %}

{% ifversion pages-custom-workflow %}Si vas a publicar con un flujo de trabajo de {% data variables.product.prodname_actions %} personalizado, para recibir correos electrónicos sobre errores de compilación en la solicitud de incorporación de cambios, debes configurar el flujo de trabajo para que se ejecute en el desencadenador `pull_request`. Al hacerlo, se recomienda que omitas los pasos de implementación si el evento `pull_request` desencadenó el flujo de trabajo. De esta forma podrás ver los errores de compilación sin implementar los cambios de la solicitud de incorporación de cambios en el sitio. Para más información, consulta "[Eventos que desencadenan flujos de trabajo](/actions/using-workflows/events-that-trigger-workflows#pull_request)" y "[Expresiones](/actions/learn-github-actions/expressions)".{% endif %}

## Ver los mensajes de error de compilación de Jekyll en tu solicitud de cambios con un servicio de IC de terceros

Puede configurar un servicio de terceros, como [Travis CI](https://travis-ci.org/), para mostrar mensajes de error después de cada confirmación.

1. Si todavía no lo ha hecho, agregue un archivo denominado _Gemfile_ en la raíz del origen de publicación, con el contenido siguiente:
  ```ruby
  source `https://rubygems.org`
  gem `github-pages`
  ```

2. Configura el repositorio de tu sitio para el servicio de comprobación que elijas. Por ejemplo, pasa usar [Travis CI](https://travis-ci.org/), agregue un archivo denominado _.travis.yml_ en la raíz del origen de publicación, con el contenido siguiente:
  ```yaml
  language: ruby
  rvm:
    - 2.3
  script: "bundle exec jekyll build"
  ```
3. Es posible que necesites activar tu repositorio con el servicio de comprobación de terceros. Para obtener más información, consulta la documentación del servicio de comprobación.
