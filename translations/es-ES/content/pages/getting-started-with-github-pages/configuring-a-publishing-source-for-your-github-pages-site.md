---
title: Configurar una fuente de publicación para tu sitio de Páginas de GitHub
intro: '{% ifversion pages-custom-workflow %}Puedes configurar tu sitio de {% data variables.product.prodname_pages %} para que se publique cuando se inserten cambios en una rama específica, o bien puedes escribir un flujo de trabajo de {% data variables.product.prodname_actions %} para que publique el sitio.{% else%}Si usas la fuente de publicación predeterminada para tu sitio de {% data variables.product.prodname_pages %}, este se publicará automáticamente. También puedes elegir publicar tu sitio desde otra rama o carpeta.{% endif %}'
redirect_from:
  - /articles/configuring-a-publishing-source-for-github-pages
  - /articles/configuring-a-publishing-source-for-your-github-pages-site
  - /github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can configure a publishing source for a {% data variables.product.prodname_pages %} site.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Configure publishing source
ms.openlocfilehash: d08b5c150da5be18700312237c374059228c563d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529643'
---
## Acerca de las fuentes de publicación

{% data reusables.pages.pages-about-publishing-source %}

{% data reusables.pages.private_pages_are_public_warning %}

## Publicación desde una rama

1. Asegúrate de que la rama que quieres utilizar como fuente de publicación ya exista en tu repositorio.
{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %} {% ifversion pages-custom-workflow %}
1. En "Compilación e implementación", en "Origen", selecciona **Implementar desde una rama**.
1. En "Compilación e implementación", en "Rama", usa el menú desplegable **Ninguno** o **Rama** y selecciona una fuente de publicación.

   ![Menú desplegable para seleccionar una fuente de publicación](/assets/images/help/pages/publishing-source-drop-down.png) {% else %}
3. En "{% data variables.product.prodname_pages %}", use el menú desplegable **Ninguno** o **Rama**, y seleccione un origen de publicación.
  ![Menú desplegable para seleccionar una fuente de publicación](/assets/images/help/pages/publishing-source-drop-down.png) {% endif %}
4. Opcionalmente, utiliza el menú desplegable para seleccionar una carpeta para tu fuente de publicación.
  ![Menú desplegable para seleccionar una carpeta para una fuente de publicación](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. Haga clic en **Save**(Guardar).
  ![Botón para guardar los cambios en la configuración de la fuente de publicación](/assets/images/help/pages/publishing-source-save.png)

### Solución de problemas de publicación desde una rama

{% data reusables.pages.admin-must-push %}

Si elige la carpeta `docs` en cualquier rama como origen de publicación y después quita la carpeta `/docs` de esa rama en el repositorio, el sitio no se compilará y obtendrá un mensaje de error de compilación de página sobre una carpeta `/docs` que falta. Para más información, vea "[Solución de errores de compilación de Jekyll para sitios de {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)".

{% ifversion build-pages-with-actions %}

Tu sitio de {% data variables.product.prodname_pages %} siempre se desplegará con una ejecución de flujo de trabajo de {% data variables.product.prodname_actions %}, incluso si configuraste tu sitio de {% data variables.product.prodname_pages %} para que compilara utilizando una herramienta de IC distinta. La mayoría de los flujos de trabajo de CI externos se "implementan" en GitHub Pages mediante la confirmación de la salida de compilación en la rama `gh-pages` del repositorio y normalmente incluyen un archivo `.nojekyll`. Cuando esto sucede, el flujo de trabajo de {% data variables.product.prodname_actions %} detectará el estado en el que la rama no necesita un paso de compilación y ejecutará solo los pasos necesarios para desplegar el sitio a los servidores de {% data variables.product.prodname_pages %}.

Para encontrar errores potenciales en ya sea la compilación o el despliegue, puedes verificar la ejecución de flujo de trabajo para tu sitio de {% data variables.product.prodname_pages %} si revisas las ejecuciones de flujo de trabajo del repositorio. Para más información, vea "[Visualización del historial de ejecución de flujos de trabajo](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)". Para más información sobre cómo volver a ejecutar el flujo de trabajo en caso de error, vea "[Nueva ejecución de flujos de trabajo y trabajos](/actions/managing-workflow-runs/re-running-workflows-and-jobs)".

{% endif %}

{% ifversion pages-custom-workflow %}

## Publicación con un flujo de trabajo de {% data variables.product.prodname_actions %} personalizado

{% data reusables.pages.pages-custom-workflow-beta %}

Para configurar el sitio para publicarlo con {% data variables.product.prodname_actions %}:

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
1. En "Compilación e implementación", en "Origen", selecciona **Acciones de GitHub**.
1. {% data variables.product.product_name %} sugerirá varios flujos de trabajo de inicio. Si ya tienes un flujo de trabajo para publicar el sitio, puedes omitir este paso. De lo contrario, elige una de las opciones para crear un flujo de trabajo de {% data variables.product.prodname_actions %}. Para obtener más información sobre cómo crear el flujo de trabajo personalizado, consulta "[Creación de un flujo de trabajo de {% data variables.product.prodname_actions %} personalizado para publicar el sitio](#creating-a-custom-github-actions-workflow-to-publish-your-site)".

   {% data variables.product.prodname_pages %} no asocia un flujo de trabajo específico a la configuración de {% data variables.product.prodname_pages %}, pero la configuración de {% data variables.product.prodname_pages %} se vinculará a la ejecución del flujo de trabajo que implementó más recientemente el sitio.

### Creación de un flujo de trabajo de {% data variables.product.prodname_actions %} personalizado para publicar el sitio

Para obtener más información sobre{% data variables.product.prodname_actions %}, consulta "[Acciones](/actions)".

Al configurar el sitio para publicarlo con {% data variables.product.prodname_actions %}, {% data variables.product.product_name %} sugerirá flujos de trabajo de inicio para los escenarios comunes de publicación. El flujo general de un flujo de trabajo es el siguiente:

1. Desencadenarse cada vez que haya una inserción en la rama predeterminada del repositorio o cada vez que se abra, se vuelva a abrir o se actualice una solicitud de incorporación de cambios que tenga como destino la rama predeterminada.
1. Usar la acción [`actions/checkout`](https://github.com/actions/checkout) para extraer del repositorio su contenido.
1. Si el sitio lo requiere, compilar los archivos de sitio estáticos.
1. Usar la acción [`actions/upload-pages-artifact`](https://github.com/actions/upload-pages-artifact) para cargar los archivos estáticos como un artefacto.
1. Si el flujo de trabajo se desencadenó por una inserción en la rama predeterminada, usar la acción [`actions/deploy-pages`](https://github.com/actions/deploy-pages) para implementar el artefacto. Este paso se omite si el flujo de trabajo se desencadenó mediante una solicitud de incorporación de cambios.

Los flujos de trabajo de inicio usan un entorno de implementación denominado `github-pages`. Si el repositorio aún no incluye un entorno denominado `github-pages`, este se creará automáticamente. Se recomienda agregar una regla de protección del entorno para que solo se pueda implementar en este entorno la rama predeterminada. Para más información, vea "[Uso de entornos para la implementación](/actions/deployment/targeting-different-environments/using-environments-for-deployment)".

{% note %}

**Nota**: Un archivo `CNAME` del archivo de repositorio no agrega ni quita automáticamente un dominio personalizado. En su lugar, debes configurar el dominio personalizado a través de la configuración del repositorio o a través de la API. Para obtener más información, consulta "[Configurar un dominio personalizado para tu sitio de GitHub Pages](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)" y la [documentación de referencia de la API de GitHub Pages](/rest/pages#update-information-about-a-github-pages-site).

{% endnote %}

### Solución de problemas en la publicación con un flujo de trabajo de {% data variables.product.prodname_actions %} personalizado

Para obtener información sobre cómo solucionar problemas en el flujo de trabajo de {% data variables.product.prodname_actions %}, consulta "[Acerca de la supervisión y la solución de problemas](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)".

{% endif %}
