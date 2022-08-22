---
title: Configurar una fuente de publicación para tu sitio de Páginas de GitHub
intro: '{% ifversion pages-custom-workflow %}Puedes configurar tu sitio de {% data variables.product.prodname_pages %} para que se publique cuando los cambios se suban a una rama específica o puedes escribir un flujo de trabajo de {% data variables.product.prodname_actions %} para publicar tu sitio.{% else%}Si utilizas una fuente de publicación predeterminada para tu sitio de {% data variables.product.prodname_pages %}, este se publicará automáticamente. También puedes elegir publicar tu sitio desde una rama o carpeta diferente.{% endif %}'
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

## Acerca de las fuentes de publicación

{% data reusables.pages.pages-about-publishing-source %}

{% data reusables.pages.private_pages_are_public_warning %}

## Publicar desde una rama

1. Asegúrate de que la rama que quieres utilizar como tu fuente de publicación ya exista en tu repositorio.
{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
{% ifversion pages-custom-workflow %}
1. Debajo de "Compilación y despliegue", debajo de "Fuente", selecciona **Desplegar desde una rama**.
1. Debajo de "Compilación y despliegue", debajo de "Rama", utiliza los menús desplegables de **Ninguna** o de **Rama** y selecciona una fuente de publicación.

   ![Menú desplegable para seleccionar una fuente de publicación](/assets/images/help/pages/publishing-source-drop-down.png)
{% else %}
3. Debajo de "{% data variables.product.prodname_pages %}", utiliza el menú desplegable de **Ninguno** o de **Rama** y selecciona una fuente de publicación. ![Menú desplegable para seleccionar una fuente de publicación](/assets/images/help/pages/publishing-source-drop-down.png)
{% endif %}
4. Opcionalmente, utiliza el menú desplegable para seleccionar una carpeta para tu fuente de publicación. ![Menú desplegable para seleccionar una carpeta para una fuente de publicación](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. Haz clic en **Save ** (guardar). ![Botón para guardar los cambios en la configuración de la fuente de publicación](/assets/images/help/pages/publishing-source-save.png)

### Solucionar problemas de publicación desde una rama

{% data reusables.pages.admin-must-push %}

Si eliges la carpeta de `docs` en cualquier rama como tu fuente de publicación y luego eliminas la carpeta de `/docs` de esta rama en tu repositorio posteriormente, tu sitio no se creará y obtendrás un mensaje de error de creación de página debido a una carpeta `/docs` faltante. Para obtener más información, consulta "[Solución de problemas de errores de compilación de Jekyll para los sitios de {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)".

{% ifversion build-pages-with-actions %}

Tu sitio de {% data variables.product.prodname_pages %} siempre se desplegará con una ejecución de flujo de trabajo de {% data variables.product.prodname_actions %}, incluso si configuraste tu sitio de {% data variables.product.prodname_pages %} para que compilara utilizando una herramienta de IC distinta. La mayoría de los flujos de trabajo de IC externos se "despliegan" en las GitHub Pages cuando confirmas la salida de compilación en la rama de `gh-pages` del repositorio y, habitualmente, incluyen un archivo de `.nojekyll`. Cuando esto sucede, el flujo de trabajo de {% data variables.product.prodname_actions %} detectará el estado en el que la rama no necesita un paso de compilación y ejecutará solo los pasos necesarios para desplegar el sitio a los servidores de {% data variables.product.prodname_pages %}.

Para encontrar errores potenciales en ya sea la compilación o el despliegue, puedes verificar la ejecución de flujo de trabajo para tu sitio de {% data variables.product.prodname_pages %} si revisas las ejecuciones de flujo de trabajo del repositorio. Para obtener más información, consulta la sección "[Visualizar el historial de ejecuciones de un flujo de trabajo](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)". Para obtener más información sobre cómo volver a ejecutar el flujo de trabajo en caso de encontrar une error, consulta la sección "[Volver a ejecutar flujos de trabajo y jobs](/actions/managing-workflow-runs/re-running-workflows-and-jobs)".

{% endif %}

{% ifversion pages-custom-workflow %}

## Publicar con un flujo de trabajo de {% data variables.product.prodname_actions %} personalizado

{% data reusables.pages.pages-custom-workflow-beta %}

Para configurar tu sitio para que se publique con {% data variables.product.prodname_actions %}:

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
1. Debajo de "Compilación y despliegue", debajo de "Fuente", selecciona **GitHub Actions**.
1. {% data variables.product.product_name %} te sugerirá varios flujos de trabajo iniciales. Si ya tienes un flujo de trabajo para publicar tu sitio, puedes omitir este paso. De lo contrario, elige una de las opciones para crear un flujo de trabajo de {% data variables.product.prodname_actions %}. Para obtener más información sobre como crear tu flujo de trabajo personalizado, consulta la sección "[Crear un flujo de trabajo de {% data variables.product.prodname_actions %} personalizado para publicar tu sitio](#creating-a-custom-github-actions-workflow-to-publish-your-site)".

   {% data variables.product.prodname_pages %} no asocia un flujo de trabajo específico a los ajustes de {% data variables.product.prodname_pages %}. Sin embargo, los ajustes de {% data variables.product.prodname_pages %} se enlazarán con la ejecución de flujo de trabajo que haya desplegado tu sitio más recientemente.

### Crear un flujo de trabajo de {% data variables.product.prodname_actions %} personalizado para publicar tu sitio

Para obtener más información sobre {% data variables.product.prodname_actions %}, consulta la sección "[Acciones](/actions)".

Cuando configuras tu sitio para que se publique con {% data variables.product.prodname_actions %}, {% data variables.product.product_name %} sugerirá flujos de trabajo iniciales para los escenarios de publicación comunes. El flujo general de un flujo de trabajo es:

1. Activarse cuando existe una subida a la rama predeterminada del repositorio o cuando una solicitud de cambios que apunta a la rama predeterminada se abre, se vuelve a abrir o se actualiza.
1. Utiliza la acción [`actions/checkout`](https://github.com/actions/checkout) para erificar el contenido del repositorio.
1. Si tu sitio lo requiere, compila cualquier archivo de sitio estático.
1. Utiliza la acción [`actions/upload-pages-artifact`](https://github.com/actions/upload-pages-artifact) para cargar los archivos estáticos como un artefacto.
1. Si el flujo de trabajo se activó mediante una subida a la rama predeterminada, utiliza la acción [`actions/deploy-pages`](https://github.com/actions/deploy-pages) para desplegar el artefacto. Este paso se omite si una solicitud de cambios activó el flujo de trabajo.

Los flujos de trabajo iniciales utilizan un ambiente de despliegue llamado `github-pages`. Si tu repositorio aún no incluye un ambiente llamado `github-pages`, este se creará automáticamente. Recomendamos que agregues una regla de protección de ambiente para que solo la rama predeterminada pueda desplegar hacia este. Para obtener más información, consulta la sección "[Utilizar ambientes para despliegue](/actions/deployment/targeting-different-environments/using-environments-for-deployment)".

{% note %}

**Nota**: Un archivo de `CNAME` en tu archivo de repositorio no agrega ni elimina un dominio personalizado automáticamente. En su lugar, debes configurar el dominio personalizado mediante los ajustes de tu repositorio o mediante la API. Para obtener más información, consulta la sección "[Administrar un dominio personalizado para tu sitio de GitHub Pages](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)" y la [documentación de referencia de la API de páginas](/rest/pages#update-information-about-a-github-pages-site).

{% endnote %}

### Solucionar problemas de publicación con un flujo de trabajo de {% data variables.product.prodname_actions %} personalizado

Para obtener más información sobre cómo solucionar los problemas de tu flujo de trabajo de {% data variables.product.prodname_actions %}, consulta la sección "[Acerca del monitoreo y la solución de problemas](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)".

{% endif %}
