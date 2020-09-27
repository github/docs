---
title: Administrar etiquetas
intro: 'Puedes utilizar {{ site.data.variables.product.prodname_desktop }} para crear, cargar y visualizar etiquetas.'
redirect_from:
  - /desktop/contributing-to-projects/managing-tags
versions:
  free-pro-team: '*'
---

### Acerca de las etiquetas en {{ site.data.variables.product.prodname_desktop }}

{{ site.data.variables.product.prodname_desktop }} te permite crear etiquetas anotadas. Puedes utilizar una etiqueta para marcar un punto individual en el historial de tu repositorio, incluyendo un número de versión para un lanzamiento. Para obtener más información acerca de las etiquetas de lanzamiento, consulta la sección "[Acerca de los lanzamientos](/github/administering-a-repository/about-releases)".

{{ site.data.reusables.desktop.tags-push-with-commits }}

### Crear una etiqueta

{{ site.data.reusables.desktop.history-tab }}
{{ site.data.reusables.desktop.create-tag }}
{{ site.data.reusables.desktop.name-tag }}
{{ site.data.reusables.desktop.confirm-tag }}

### Visualizar etiquetas

{{ site.data.reusables.desktop.history-tab }}
2. Da clic en la confirmación.
  {% note %}

  **Nota**: {{ site.data.variables.product.prodname_desktop }} muestra una flecha {% octicon "arrow-up" aria-label="The up arrow icon" %} si la etiqueta no se ha subido al repositorio remoto.

  {% endnote %}

  ![Visualizar una etiqueta en el historial](/assets/images/help/desktop/viewing-tags-in-history.png)

3. Todas las etiquetas asociadas con la confirmación se pueden ver en los metadatos de dicha confirmación. ![Visualizar una etiqueta en la confirmación](/assets/images/help/desktop/viewing-tags-in-commit.png)
