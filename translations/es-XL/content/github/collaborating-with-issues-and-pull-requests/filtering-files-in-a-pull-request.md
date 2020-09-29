---
title: Filtrar archivos en una solicitud de extracción
intro: 'Para ayudarte a revisar rápidamente los cambios en una solicitud de extracción grande, puedes filtrar los archivos modificados.'
redirect_from:
  - /articles/filtering-files-in-a-pull-request-by-file-type/
  - /articles/filtering-files-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Puedes filtrar archivos en una solicitud de extracción por tipo de extensión de archivo, tales como  `.html` o `.js`, sin extensión, {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %} propietario del código, {% endif %} o archivos de configuración ("dotfiles").

{% tip %}

**Sugerencia:** Para simplificar tu vista de la diferencia de la solicitud de extracción, puedes ocultar de manera temporaria los archivos eliminados{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %} o los archivos que ya has visto{% endif %} en la diferencia de la solicitud de extracción desde el menú desplegable para filtrar archivos.

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. En la lista de solicitudes de extracción, haz clic en la solicitud de extracción que deseas filtrar.
{% data reusables.repositories.changed-files %}
4. Usa el menú desplegable para Filtrar archivos y selecciona, elimina la marca de selección o haz clic en los filtros deseados. ![Opción Filtrar archivos sobre la diferencia de la solicitud de extracción](/assets/images/help/pull_requests/file-filter-option.png)
5. Para borrar la selección de filtro en la pestaña **Archivos modificados** puedes hacer clic en **Borrar**. ![Borrar selección de filtro de archivo](/assets/images/help/pull_requests/clear-file-filter.png)

### Leer más

- "[Acerca de la comparación de las ramas en una solicitud de extracción](/articles/about-comparing-branches-in-pull-requests)"
- "[Encontrar métodos y funciones modificados en una solicitud de extracción](/articles/finding-changed-methods-and-functions-in-a-pull-request)"
