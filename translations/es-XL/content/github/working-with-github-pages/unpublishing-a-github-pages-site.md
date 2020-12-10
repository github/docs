---
title: Anular la publicación de un sitio de Páginas de GitHub
intro: 'Puedes anular la publicación de tu sitio de {% data variables.product.prodname_pages %} para que el sitio deje de estar disponible para {% if currentVersion == "free-pro-team@latest" %}el público{% else %}cualquier persona que use {% data variables.product.product_location %}{% endif %}.'
redirect_from:
  - /articles/how-do-i-unpublish-a-project-page/
  - /articles/unpublishing-a-project-page/
  - /articles/unpublishing-a-project-pages-site/
  - /articles/unpublishing-a-user-pages-site/
  - /articles/unpublishing-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'Las personas con permisos administrativos en un repositorio pueden anular la publicación de un sitio de {% data variables.product.prodname_pages %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Anular la publicación de un sitio de proyecto

{% data reusables.repositories.navigate-to-repo %}
2. Si existe una rama de `gh-pages` en el repositorio, elimina la rama de `gh-pages`. Para obtener más información, consulta "[Crear y eliminar ramas dentro de tu repositorio](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)".
3. Si la rama de `gh-pages` fue tu fuente de publicación,
{% if currentVersion == "free-pro-team@latest" %}avanza hasta el paso 6{% else %}ahora tu sitio dejó de estar publicado, y te puedes saltear los pasos restantes{% endif %}.
{% data reusables.repositories.sidebar-settings %}
5. Debajo de "{% data variables.product.prodname_pages %}", usa el menú desplegable **Source** (Fuente) y seleccionar **None** (Ninguno). ![Menú desplegable para seleccionar una fuente de publicación](/assets/images/help/pages/publishing-source-drop-down.png)
{% data reusables.pages.update_your_dns_settings %}

### Anular la publicación de un sitio de usuario o de organización

{% data reusables.repositories.navigate-to-repo %}
2. Delete the branch that you're using as a publishing source, or delete the entire repository. Para obtener más información, consulta "[Crear y eliminar ramas dentro de tu repositorio](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)" y "[Eliminar un repositorio](/articles/deleting-a-repository)".
{% data reusables.pages.update_your_dns_settings %}
