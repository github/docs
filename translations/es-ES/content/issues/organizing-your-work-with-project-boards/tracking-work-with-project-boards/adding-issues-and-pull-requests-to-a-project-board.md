---
title: 'Agregar propuestas y solicitudes de cambio a un {% data variables.product.prodname_project_v1 %}'
intro: 'Puedes agregar propuestas y solicitudes de cambio a un {% data variables.projects.projects_v1_board %} en forma de tarjetas y clasificarlas en columnas.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board
  - /articles/adding-issues-and-pull-requests-to-a-project
  - /articles/adding-issues-and-pull-requests-to-a-project-board
  - /github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Agregar propuestas & solicitudes de cambio a un {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

Puedes agregar tarjetas de propuestas o solicitudes de cambio a tu {% data variables.projects.projects_v1_board %} al:
- Arrastrar tarjetas desde la sección **Triage** (Jerarquizar) en la barra lateral.
- Escribir la propuesta o URL de solicitud de extracción en una tarjeta.
- Buscar propuestas o solicitudes de cambios en la barra lateral de búsqueda del {% data variables.projects.projects_v1_board %}.

Puedes poner un máximo de 2500 tarjetas en cada columna del proyecto. Si una columna ha alcanzado un número máximo de tarjetas, ninguna tarjeta puede moverse a esa columna.

![El cursor mueve la tarjeta de propuestas desde la barra lateral de clasificación hasta la columna del tablero](/assets/images/help/projects/add-card-from-sidebar.gif)

{% note %}

**Nota:** También puedes agregar notas a tu tablero de proyecto para que sirvan como recordatorios de las tareas, referencias a las propuestas y solicitudes de cambios de cualquier repositorio en {% data variables.product.product_name %} o para agregar información relacionada a tu {% data variables.projects.projects_v1_board %}. Para obtener más información, consulta "[Agregar notas a un tablero de proyecto](/articles/adding-notes-to-a-project-board)".

{% endnote %}

{% data reusables.project-management.edit-in-project %}

{% data reusables.project-management.link-repos-to-project-board %} Cuando buscas propuestas y solicitudes de cambio para agregarlas a tu {% data variables.projects.projects_v1_board %}, la búsqueda toma automáticamente el alcance de tus repositorios enlazados. Puedes eliminar estos calificadores para buscar dentro de todos los repositorios de la organización. Para obtener más información, consulta "[Vincular un repositorio con un tablero de proyecto](/articles/linking-a-repository-to-a-project-board)".

## Agregar propuestas y solicitudes de cambio a un {% data variables.projects.projects_v1_board %}

1. Navega al {% data variables.projects.projects_v1_board %} en donde quieres agregar propuestas y solicitudes de cambio.
2. En tu {% data variables.projects.projects_v1_board %}, haz clic en {% octicon "plus" aria-label="The plus icon" %} **Agregar tarjetas**. ![Agregar botón de tarjetas](/assets/images/help/projects/add-cards-button.png)
3. Busca las propuestas y solicitudes de cambio para agregar a tu {% data variables.projects.projects_v1_board %} utilizando los calificadores de búsqueda. Para más información sobre la búsqueda de calificadores que puedes usar, consulta "[Buscar propuestas](/articles/searching-issues)". ![Buscar propuestas y solicitudes de extracción](/assets/images/help/issues/issues_search_bar.png)

  {% tip %}

  **Tips:**
    - También puedes agregar una propuesta o solicitud de extracción al escribir la URL en una tarjeta.
    - Si estás trabajando en una característica específica, puedes aplicar una etiqueta a cada propuesta o solicitud de cambios relacionada para esta y luego agregar tarjetas fácilmente a tu {% data variables.projects.projects_v1_board %} buscando el nombre de la etiqueta. Para obtener más información, consulta "[Aplicar etiquetas a propuestas y solicitudes de extracción](/articles/applying-labels-to-issues-and-pull-requests)".

  {% endtip %}
4. Desde la lista filtrada de propuestas y solicitudes de cambio, arrastra la tarjeta que te gustaría agregar a tu {% data variables.projects.projects_v1_board %} y suéltala en la columna correcta. Como alternativa, puedes mover las tarjetas usando los atajos del teclado. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% tip %}

    **Sugerencia:** Puedes arrastrar y soltar o usar los atajos del teclado para reordenar las tarjetas y moverlas entre las columnas. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% endtip %}

## Agregar propuestas y solicitudes de cambio a un {% data variables.projects.projects_v1_board %} desde la barra lateral

1. En el lateral derecho de una propuesta o solicitud de extracción, haz clic en **Projects{% octicon "gear" aria-label="The Gear icon" %} (Proyectos**. ![Botón del tablero de proyecto en la barra lateral](/assets/images/help/projects/sidebar-project.png)
2. Haz clic en la pestaña de **Reciente**, **Repositorio**, **Usuario** u **Organización** del {% data variables.projects.projects_v1_board %} al que te gustaría agregarlas. ![Pestañas Recent (Reciente), Repository (Repositorio) y Organization (Organización)](/assets/images/help/projects/sidebar-project-tabs.png)
3. Escribe el nombre del proyecto en el campo **Filter projects** (Filtrar proyectos). ![Cuadro de búsqueda del tablero de proyecto](/assets/images/help/projects/sidebar-search-project.png)
4. Selecciona uno o más {% data variables.projects.projects_v1_boards %} a los que te gustaría agregar la propuesta o solicitud de cambios. ![Tablero de proyecto seleccionado](/assets/images/help/projects/sidebar-select-project.png)
5. Haz clic en {% octicon "triangle-down" aria-label="The down triangle icon" %}, luego haz clic en la columna en la que quieras colocar tu propuesta o solicitud de extracción. La tarjeta se moverá a la parte inferior de la columna del {% data variables.projects.projects_v1_board %} que selecciones. ![Menú Move card to column (Mover tarjeta a la columna)](/assets/images/help/projects/sidebar-select-project-board-column-menu.png)

## Leer más

- "[Acerca de {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Editar un {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board)"
- "[Filtrar las tarjetas en un {% data variables.product.prodname_project_v1 %}](/articles/filtering-cards-on-a-project-board)"
