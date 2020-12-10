---
title: Configurar una fuente de publicación para tu sitio de Páginas de GitHub
intro: 'Si usas la fuente de publicación predeterminada para tu sitio de {% data variables.product.prodname_pages %}, tu sitio se publicará automáticamente. También puedes elegir publicar tu{% if currentVersion ver_lt "enterprise-server@2.23" %} proyecto{% endif %} sitio desde una rama o carpeta diferente.'
redirect_from:
  - /articles/configuring-a-publishing-source-for-github-pages/
  - /articles/configuring-a-publishing-source-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'Las personas con permisos de administrador o de mantenedor para un repositorio pueden configurar una fuente de publicación para un sitio de {% data variables.product.prodname_pages %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Para obtener más información acerca de las fuentes de publicación, consulta "[Acerca de las {% data variables.product.prodname_pages %}](/articles/about-github-pages#publishing-sources-for-github-pages-sites)".

### Elegir una fuente de publicación

Before you configure a publishing source, make sure the branch{% if currentVersion ver_lt "enterprise-server@2.22" %} or folder{% endif %} you want to use as your publishing source already exists in your repository.{% if currentVersion ver_lt "enterprise-server@2.22" %} For example, before you can publish your project site from the `/docs` folder on the `master` branch of your repository, you or a collaborator must create a `/docs` folder on the default `master` branch of your repository.{% endif %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
3. Debajo de "{% data variables.product.prodname_pages %}", utiliza el menú desplegable de **Ninguno** o de **Rama** y selecciona una fuente de publicación. ![Menú desplegable para seleccionar una fuente de publicación](/assets/images/help/pages/publishing-source-drop-down.png)
4. Opcionalmente, utiliza el menú desplegable para seleccionar una carpeta para tu fuente de publicación. ![Menú desplegable para seleccionar una carpeta para una fuente de publicación](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. Haz clic en **Save (Guardar)**. ![Botón para guardar los cambios en la configuración de la fuente de publicación](/assets/images/help/pages/publishing-source-save.png)
  {% else %}
3. Debajo de "{% data variables.product.prodname_pages %}", usa el menú desplegable **Source** (Fuente) y selecciona una fuente de publicación. ![Menú desplegable para seleccionar una fuente de publicación](/assets/images/help/pages/publishing-source-drop-down.png)
{% endif %}

### Solución de problemas de publicación con tu sitio de {% data variables.product.prodname_pages %}

{% data reusables.pages.admin-must-push %}

If you choose the `docs` folder on {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}any{% else %}the `master`{% endif %} branch as your publishing source, then later remove the `/docs` folder from that branch in your repository, your site won't build and you'll get a page build error message for a missing `/docs` folder. Para obtener más información, consulta "[Solución de problemas de errores de compilación de Jekyll para los sitios de {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)".
