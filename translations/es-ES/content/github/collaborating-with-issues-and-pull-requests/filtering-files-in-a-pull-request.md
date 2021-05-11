---
title: Filtrar archivos en una solicitud de extracción
intro: 'Para ayudarte a revisar rápidamente los cambios en una solicitud de extracción grande, puedes filtrar los archivos modificados.'
redirect_from:
  - /articles/filtering-files-in-a-pull-request-by-file-type/
  - /articles/filtering-files-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Puedes filtrar archivos en una solicitud de cambios por tipo de extensión, tal como `.html` o `.js`, por falta de extensión, propietario del código, o dotfiles.

{% tip %}

**Tip:** Para simplificar tu vista de diff de solicitudes de cambios, también puedes ocultar temporalmente los archivos borrados o aquellos archivos que ya hayas visto en el diff de dicha solicitud, desde el menú desplegable de filtro de archivos.

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. En la lista de solicitudes de extracción, haz clic en la solicitud de extracción que deseas filtrar.
{% data reusables.repositories.changed-files %}
4. Usa el menú desplegable para Filtrar archivos y selecciona, elimina la marca de selección o haz clic en los filtros deseados. ![Opción Filtrar archivos sobre la diferencia de la solicitud de extracción](/assets/images/help/pull_requests/file-filter-option.png)
5. Para borrar la selección de filtro en la pestaña **Archivos modificados** puedes hacer clic en **Borrar**. ![Borrar selección de filtro de archivo](/assets/images/help/pull_requests/clear-file-filter.png)

### Leer más

- "[Acerca de la comparación de las ramas en una solicitud de extracción](/articles/about-comparing-branches-in-pull-requests)"
- "[Encontrar métodos y funciones modificados en una solicitud de extracción](/articles/finding-changed-methods-and-functions-in-a-pull-request)"
