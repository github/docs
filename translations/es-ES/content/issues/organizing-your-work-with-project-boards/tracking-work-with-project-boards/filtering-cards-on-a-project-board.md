---
title: 'Filtering cards on a {% data variables.product.prodname_project_v1 %}'
intro: 'You can filter the cards on a {% data variables.projects.projects_v1_board %} to search for specific cards or view a subset of the cards.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/filtering-cards-on-a-project-board
  - /articles/filtering-cards-on-a-project-board
  - /github/managing-your-work-on-github/filtering-cards-on-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Filtrar tarjetas en {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

En una tarjeta, puedes hacer clic en cualquier asignado, hito o etiqueta para filtrar el {% data variables.projects.projects_v1_board %} por ese calificador. Para limpiar la búsqueda, puedes dar clic en el mismo asignado, hito o etiqueta nuevamente.

También puedes utilizar la barra de búsqueda de "Filtrar tarjetas" en la parte superior de cda {% data variables.projects.projects_v1_board %} para buscar tarjetas. Puedes filtrar tarjetas usando los siguientes calificadores de búsqueda en cualquier combinación, o simplemente escribir el texto que deseas buscar.

- Filtrar tarjetas por autor usando `author:USERNAME`
- Filtrar tarjetas por asignatario usando `assignee:USERNAME` o `no:assignee`
- Filtra las tarjetas por etiqueta utilizando `label:LABEL`, `label:"MULTI-WORD LABEL NAME"`, o `no:label`
- Filtrar por hito usando `milestone:MY-MILESTONE`
- Filtrar tarjetas por estado usando `state:open`, `state:closed` o `state:merged`
- Filtrar por estado de revisión usando `review:none`, `review:required`, `review:approved`, o `review:changes_requested`
- Filtrar por comprobación de estado usando `status:pending`, `status:success` o `status:failure`
- Filtrar tarjetas por tipo usando `type:issue`, `type:pr` o `type:note`
- Filtrar tarjetas por estado y tipo usando `is:open`, `is:closed` o `is:merged` y `is:issue`, `is:pr` o `is:note`
- Filtrar las tarjetas por las propuestas que están enlazadas a una solicitud de cambios mediante una referencia de cierre utilizando `linked:pr`
- Filtrar tarjetas por repositorio en un {% data variables.projects.projects_v1_board %} de toda la organización, utilizando `repo:ORGANIZATION/REPOSITORY`

1. Navega al {% data variables.projects.projects_v1_board %} que contenga las tarjetas que quieres filtrar.
2. Sobre las columnas de las tarjetas del proyecto, haz clic en la barra de búsqueda "Filtrar tarjetas" y escribe la consulta de búsqueda para filtrar las tarjetas. ![Barra de búsqueda Filtrar tarjetas](/assets/images/help/projects/filter-card-search-bar.png)

{% tip %}

**Sugerencia:** Puedes arrastrar y soltar las tarjetas filtradas o usar los atajos del teclado para moverlas entre las columnas. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

{% endtip %}

## Leer más

- "[Acerca de {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Agregar propuestas y solicitudes de cambios a un {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)"
- "[Agregar notas a un {% data variables.product.prodname_project_v1 %}](/articles/adding-notes-to-a-project-board)"
