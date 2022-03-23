---
title: Configurar una fuente de publicación para tu sitio de Páginas de GitHub
intro: 'Si usas la fuente de publicación predeterminada para tu sitio de {% data variables.product.prodname_pages %}, tu sitio se publicará automáticamente. También puedes elegir publicar tu sitio desde una rama o carpeta diferente.'
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
shortTitle: Configurar la fuenta de publicción
---

Para obtener más información acerca de las fuentes de publicación, consulta "[Acerca de las {% data variables.product.prodname_pages %}](/articles/about-github-pages#publishing-sources-for-github-pages-sites)".

## Elegir una fuente de publicación

Antes de configurar una fuente de publicación, asegúrate de que la rama que quieres utilizar como fuente de publicación ya exista en tu repositorio.

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
3. Debajo de "{% data variables.product.prodname_pages %}", utiliza el menú desplegable de **Ninguno** o de **Rama** y selecciona una fuente de publicación. ![Menú desplegable para seleccionar una fuente de publicación](/assets/images/help/pages/publishing-source-drop-down.png)
4. Opcionalmente, utiliza el menú desplegable para seleccionar una carpeta para tu fuente de publicación. ![Menú desplegable para seleccionar una carpeta para una fuente de publicación](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. Haz clic en **Save ** (guardar). ![Botón para guardar los cambios en la configuración de la fuente de publicación](/assets/images/help/pages/publishing-source-save.png)

## Solución de problemas de publicación con tu sitio de {% data variables.product.prodname_pages %}

{% data reusables.pages.admin-must-push %}

Si eliges la carpeta de `docs` en cualquier rama como tu fuente de publicación y luego eliminas la carpeta de `/docs` de esta rama en tu repositorio posteriormente, tu sitio no se creará y obtendrás un mensaje de error de creación de página debido a una carpeta `/docs` faltante. Para obtener más información, consulta "[Solución de problemas de errores de compilación de Jekyll para los sitios de {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)".

{% ifversion fpt %}

Tu sitio de {% data variables.product.prodname_pages %} siempre se desplegará con una ejecución de flujo de trabajo de {% data variables.product.prodname_actions %}, incluso si configuraste tu sitio de {% data variables.product.prodname_pages %} para que compilara utilizando una herramienta de IC distinta. La mayoría de los flujos de trabajo de IC externos se "despliegan" en las GitHub Pages cuando confirmas la salida de compilación en la rama de `gh-pages` del repositorio y, habitualmente, incluyen un archivo de `.nojekyll`. When this happens, the {% data variables.product.prodname_actions %} workflow will detect the state that the branch does not need a build step, and will execute only the steps necessary to deploy the site to {% data variables.product.prodname_pages %} servers.

Para encontrar errores potenciales en ya sea la compilación o el despliegue, puedes verificar la ejecución de flujo de trabajo para tu sitio de {% data variables.product.prodname_pages %} si revisas las ejecuciones de flujo de trabajo del repositorio. Para obtener más información, consulta la sección "[Visualizar el historial de ejecuciones de un flujo de trabajo](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)".  Para obtener más información sobre cómo volver a ejecutar el flujo de trabajo en caso de encontrar une error, consulta la sección "[Volver a ejecutar flujos de trabajo y jobs](/actions/managing-workflow-runs/re-running-workflows-and-jobs)".

{% note %}

{% data reusables.pages.pages-builds-with-github-actions-public-beta %}

{% endnote %}

{% endif %}
