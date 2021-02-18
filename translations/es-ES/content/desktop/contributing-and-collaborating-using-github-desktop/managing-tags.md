---
title: Administrar etiquetas
intro: 'Puedes utilizar {% data variables.product.prodname_desktop %} para crear, cargar y visualizar etiquetas.'
redirect_from:
  - /desktop/contributing-to-projects/managing-tags
versions:
  free-pro-team: '*'
---

### Acerca de las etiquetas en {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} te permite crear etiquetas anotadas. Tags are associated with commits, so you can use a tag to mark an individual point in your repository's history, including a version number for a release. Para obtener más información acerca de las etiquetas de lanzamiento, consulta la sección "[Acerca de los lanzamientos](/github/administering-a-repository/about-releases)".

{% data reusables.desktop.tags-push-with-commits %}

### Crear una etiqueta

{% data reusables.desktop.history-tab %}
{% data reusables.desktop.create-tag %}
{% data reusables.desktop.name-tag %}
{% data reusables.desktop.confirm-tag %}

### Visualizar etiquetas

{% data reusables.desktop.history-tab %}
2. Da clic en la confirmación.
  {% note %}

  **Nota**: {% data variables.product.prodname_desktop %} muestra una flecha {% octicon "arrow-up" aria-label="The up arrow icon" %} si la etiqueta no se ha subido al repositorio remoto.

  {% endnote %}

  ![Visualizar una etiqueta en el historial](/assets/images/help/desktop/viewing-tags-in-history.png)

3. Todas las etiquetas asociadas con la confirmación se pueden ver en los metadatos de dicha confirmación. ![Visualizar una etiqueta en la confirmación](/assets/images/help/desktop/viewing-tags-in-commit.png)

### Borrar las etiquetas

{% note %}

**Nota**: Solo puedes borrar las etiquetas que se asocian con las confirmaciones que aún no se hayan subido.

{% endnote %}

{% data reusables.desktop.history-tab %}
{% data reusables.desktop.delete-tag %}

### Leer más

- "[Git Basics - Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)" in the Git documentation
