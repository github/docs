---
title: 'Filtering {% data variables.projects.projects_v2 %}'
intro: Use filters to choose which items appear in your project's views.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/filtering-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
---

Puedes personalizar las vistas utilizando filtros para metadatos de elementos, tales como los asignados y las etiquetas que se aplican a las propuesta, así como por los campos de tu proyecto. Puedes combinar los filtros y guardarlos como vistas. Para obtener más información, consulta la sección "[Personalizar las vistas de tu proyecto](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)".

Para filtrar un proyecto, haz clic en {% octicon "filter" aria-label="The Filter icon" %} y comienza a teclear los campos y valores por los cuales te gustaría filtrar. Conforme teclees, se mostrarán los posibles valores. You can also open the project command palette, by pressing {% data variables.projects.command-palette-shortcut %}, and type "Filter by" to choose from the available filters.

Using multiple filters will act as a logical AND filter. For example, `label:bug status:"In progress"` will return items with the `bug` label with the "In progress" status. {% data variables.product.prodname_projects_v2 %} does not currently support logical OR filters across multiple fields.

The same filters are available for charts you create using insights for {% data variables.product.prodname_projects_v2 %}, allowing you to filter the data used to create your charts. Para obtener más información, consulta la sección "[Utilizar perspectivas con los proyectos](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/about-insights-for-projects)".

## Filtrar elementos

Haz clic en el {% octicon "filter" aria-label="the filter icon" %} en la parte superior de la tabla para mostrar la barra de "Filtrar por palabra clave o por campo". Comienza a teclear el nombre de campo y valor por el cuál quieras filtrar. Conforme teclees, se mostrarán los posibles valores.

{% data reusables.projects.projects-filters %}

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Filter by."

En el diseño del tablero, puedes hacer clic en los datos del elemento o filtrar los elementos con este valor. Por ejemplo, haz clic en un asignado para mostrar únicamente los elementos de este. Para eliminar el filtro, haz clic en los datos de el elemento nuevamente.
