---
title: Configurar una fuente de publicación para tu sitio de Páginas de GitHub
intro: 'Si usas la fuente de publicación predeterminada para tu sitio de {% data variables.product.prodname_pages %}, tu sitio se publicará automáticamente. También puedes elegir publicar tu {% if currentVersion ver_lt "enterprise-server@3.0" %} sitio de proyecto{% endif %}desde una carpeta o rama diferente.'
redirect_from:
  - /articles/configuring-a-publishing-source-for-github-pages/
  - /articles/configuring-a-publishing-source-for-your-github-pages-site
  - /github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'Las personas con permisos de administrador o de mantenedor para un repositorio pueden configurar una fuente de publicación para un sitio de {% data variables.product.prodname_pages %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - páginas
---

Para obtener más información acerca de las fuentes de publicación, consulta "[Acerca de las {% data variables.product.prodname_pages %}](/articles/about-github-pages#publishing-sources-for-github-pages-sites)".

### Elegir una fuente de publicación

Before you configure a publishing source, make sure the branch{% if currentVersion ver_lt "enterprise-server@3.0" %} or folder{% endif %} you want to use as your publishing source already exists in your repository.{% if currentVersion ver_lt "enterprise-server@3.0" %} For example, before you can publish your project site from the `/docs` folder on the `master` branch of your repository, you or a collaborator must create a `/docs` folder on the default `master` branch of your repository.{% endif %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
3. Debajo de "{% data variables.product.prodname_pages %}", utiliza el menú desplegable de **Ninguno** o de **Rama** y selecciona una fuente de publicación. ![Menú desplegable para seleccionar una fuente de publicación](/assets/images/help/pages/publishing-source-drop-down.png)
4. Opcionalmente, utiliza el menú desplegable para seleccionar una carpeta para tu fuente de publicación. ![Menú desplegable para seleccionar una carpeta para una fuente de publicación](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. Haz clic en **Save ** (guardar). ![Button to save changes to publishing source settings](/assets/images/help/pages/publishing-source-save.png){% else %}
3. Debajo de "{% data variables.product.prodname_pages %}", usa el menú desplegable **Source** (Fuente) y selecciona una fuente de publicación. ![Menú desplegable para seleccionar una fuente de publicación](/assets/images/help/pages/publishing-source-drop-down.png)
{% endif %}

### Solución de problemas de publicación con tu sitio de {% data variables.product.prodname_pages %}

{% data reusables.pages.admin-must-push %}

Si eliges la carpeta `docs` en {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}cualquier rama {% else %}la rama `master`{% endif %} como tu fuente de publicación, y eliminas la carpeta de `/docs` de esta rama en tu repositorio posteriormente, tu sitio no compilará y obtendrás un mensaje de error para dicha compilación debido a que falta la carpeta `/docs`. Para obtener más información, consulta "[Solución de problemas de errores de compilación de Jekyll para los sitios de {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)".
