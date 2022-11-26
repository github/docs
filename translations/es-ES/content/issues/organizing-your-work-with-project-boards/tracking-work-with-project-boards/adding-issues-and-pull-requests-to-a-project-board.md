---
title: 'Adición de incidencias y solicitudes de incorporación de cambios a una instancia de {% data variables.product.prodname_project_v1 %}'
intro: 'Puedes agregar incidencias y solicitudes de incorporación de cambios a una instancia de {% data variables.projects.projects_v1_board %} en forma de tarjetas y evaluar sus prioridades en columnas.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board
  - /articles/adding-issues-and-pull-requests-to-a-project
  - /articles/adding-issues-and-pull-requests-to-a-project-board
  - /github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Add issues & PRs to {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 3adfb2c337a417b8e4f932ab9ae9860939217c6c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110077'
---
{% data reusables.projects.project_boards_old %}

Puedes agregar tarjetas de incidencia o solicitud de incorporación de cambios a las instancias de {% data variables.projects.projects_v1_board %} mediante lo siguiente:
- Arrastrando las tarjetas desde la sección **Triage** de la barra lateral.
- Escribir la propuesta o URL de solicitud de extracción en una tarjeta.
- Buscar incidencias o solicitudes de incorporación de cambios en la barra lateral de búsqueda de la instancia de {% data variables.projects.projects_v1_board %}.

Puedes poner un máximo de 2500 tarjetas en cada columna del proyecto. Si una columna ha alcanzado un número máximo de tarjetas, ninguna tarjeta puede moverse a esa columna.

![El cursor mueve la tarjeta de propuestas desde la barra lateral de clasificación hasta la columna del tablero](/assets/images/help/projects/add-card-from-sidebar.gif)

{% note %}

**Nota:** También puedes agregar notas al panel del proyecto que sirvan como recordatorios de tareas, referencias a incidencias y solicitudes de incorporación de datos desde cualquier repositorio en {% data variables.product.product_name %}, o bien para agregar información relacionada con la instancia de {% data variables.projects.projects_v1_board %}. Para obtener más información, consulte "[Agregar notas a un panel de proyecto](/articles/adding-notes-to-a-project-board)".

{% endnote %}

{% data reusables.project-management.edit-in-project %}

{% data reusables.project-management.link-repos-to-project-board %} Cuando buscas incidencias y solicitudes de incorporación de cambios para agregar a la instancia de {% data variables.projects.projects_v1_board %}, automáticamente el ámbito de la búsqueda son los repositorios vinculados. Puedes eliminar estos calificadores para buscar dentro de todos los repositorios de la organización. Para obtener más información, consulte "[Vinculación de un repositorio a un panel de proyecto](/articles/linking-a-repository-to-a-project-board)".

## Adición de incidencias y solicitudes de incorporación de cambios a una instancia de {% data variables.projects.projects_v1_board %}

1. Navega a la instancia de {% data variables.projects.projects_v1_board %} en la que quieras agregar incidencias y solicitudes de incorporación de cambios
2. En la instancia de {% data variables.projects.projects_v1_board %}, haz clic en {% octicon "plus" aria-label="The plus icon" %} **Agregar tarjetas**.
![Botón Add cards](/assets/images/help/projects/add-cards-button.png)
3. Busca incidencias y solicitudes de incorporación de cambios para agregar a la instancia de {% data variables.projects.projects_v1_board %} mediante calificadores de búsqueda. Para obtener más información sobre los calificadores de búsqueda que puede usar, consulte "[Búsqueda de incidencias](/articles/searching-issues)".
  ![Buscar incidencias y solicitudes de incorporación de cambios](/assets/images/help/issues/issues_search_bar.png)

  {% tip %}

  **Sugerencias:**
    - También puedes agregar una propuesta o solicitud de extracción al escribir la URL en una tarjeta.
    - Si trabajas en una característica específica, puedes aplicar una etiqueta a cada incidencia o solicitud de incorporación de cambios relacionada para esa característica, y luego agregar tarjetas fácilmente a la instancia de {% data variables.projects.projects_v1_board %} mediante la búsqueda por nombre de la etiqueta. Para obtener más información, consulte "[Aplicar etiquetas a incidencias y solicitudes de incorporación de cambios](/articles/applying-labels-to-issues-and-pull-requests)".

  {% endtip %}
4. En la lista filtrada de incidencias y solicitudes de incorporación de cambios, arrastra la tarjeta que quieras agregar a la instancia de {% data variables.projects.projects_v1_board %} y colócala en la columna correcta. Como alternativa, puedes mover las tarjetas usando los atajos del teclado. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% tip %}

    **Sugerencia:** Puede arrastrar y soltar o usar los métodos abreviados del teclado para reordenar las tarjetas y moverlas entre las columnas. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% endtip %}

## Adición de incidencias y solicitudes de incorporación de cambios a una instancia de {% data variables.projects.projects_v1_board %} desde la barra lateral

1. En el lado derecho de una incidencia o solicitud de incorporación de cambios, haga clic en **Projects {% octicon "gear" aria-label="The Gear icon" %}** .
  ![Botón del panel del proyecto en la barra lateral](/assets/images/help/projects/sidebar-project.png)
2. Haz clic en la pestaña **Recientes**, **Repositorio**, **Usuario** u **Organización** de la instancia de {% data variables.projects.projects_v1_board %} a la que quieras agregar un elemento.
  ![Pestañas Recent, Repository y Organization](/assets/images/help/projects/sidebar-project-tabs.png)
3. Escriba el nombre del proyecto en el campo **Filter projects**.
  ![Cuadro de búsqueda del panel del proyecto](/assets/images/help/projects/sidebar-search-project.png)
4. Selecciona uno o varios {% data variables.projects.projects_v1_boards %} en los que quieras agregar la incidencia o la solicitud de incorporación de cambios.
  ![Panel de proyecto seleccionado](/assets/images/help/projects/sidebar-select-project.png)
5. Haga clic en {% octicon "triangle-down" aria-label="The down triangle icon" %} y luego en la columna donde quiera colocar la incidencia o solicitud de incorporación de cambios. La tarjeta se moverá a la parte inferior de la columna de {% data variables.projects.projects_v1_board %} que selecciones.
  ![Menú Move card to column](/assets/images/help/projects/sidebar-select-project-board-column-menu.png)

## Información adicional

- "[Acerca de {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Edición de una instancia de {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board)"
- "[Filtrado de tarjetas en una instancia de {% data variables.product.prodname_project_v1 %}](/articles/filtering-cards-on-a-project-board)"
