---
title: 'Adding issues and pull requests to a {% data variables.product.prodname_project_v1 %}'
intro: 'You can add issues and pull requests to a {% data variables.projects.projects_v1_board %} in the form of cards and triage them into columns.'
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
---

{% data reusables.projects.project_boards_old %}

You can add issue or pull request cards to your {% data variables.projects.projects_v1_board %} by:
- Arrastrar tarjetas desde la sección **Triage** (Jerarquizar) en la barra lateral.
- Escribir la propuesta o URL de solicitud de extracción en una tarjeta.
- Searching for issues or pull requests in the {% data variables.projects.projects_v1_board %} search sidebar.

Puedes poner un máximo de 2500 tarjetas en cada columna del proyecto. Si una columna ha alcanzado un número máximo de tarjetas, ninguna tarjeta puede moverse a esa columna.

![El cursor mueve la tarjeta de propuestas desde la barra lateral de clasificación hasta la columna del tablero](/assets/images/help/projects/add-card-from-sidebar.gif)

{% note %}

**Note:** You can also add notes to your project board to serve as task reminders, references to issues and pull requests from any repository on {% data variables.product.product_name %}, or to add related information to your {% data variables.projects.projects_v1_board %}. Para obtener más información, consulta "[Agregar notas a un tablero de proyecto](/articles/adding-notes-to-a-project-board)".

{% endnote %}

{% data reusables.project-management.edit-in-project %}

{% data reusables.project-management.link-repos-to-project-board %} When you search for issues and pull requests to add to your {% data variables.projects.projects_v1_board %}, the search automatically scopes to your linked repositories. Puedes eliminar estos calificadores para buscar dentro de todos los repositorios de la organización. Para obtener más información, consulta "[Vincular un repositorio con un tablero de proyecto](/articles/linking-a-repository-to-a-project-board)".

## Adding issues and pull requests to a {% data variables.projects.projects_v1_board %}

1. Navigate to the {% data variables.projects.projects_v1_board %} where you want to add issues and pull requests.
2. In your {% data variables.projects.projects_v1_board %}, click {% octicon "plus" aria-label="The plus icon" %} **Add cards**. ![Agregar botón de tarjetas](/assets/images/help/projects/add-cards-button.png)
3. Search for issues and pull requests to add to your {% data variables.projects.projects_v1_board %} using search qualifiers. Para más información sobre la búsqueda de calificadores que puedes usar, consulta "[Buscar propuestas](/articles/searching-issues)". ![Buscar propuestas y solicitudes de extracción](/assets/images/help/issues/issues_search_bar.png)

  {% tip %}

  **Tips:**
    - También puedes agregar una propuesta o solicitud de extracción al escribir la URL en una tarjeta.
    - If you're working on a specific feature, you can apply a label to each related issue or pull request for that feature, and then easily add cards to your {% data variables.projects.projects_v1_board %} by searching for the label name. Para obtener más información, consulta "[Aplicar etiquetas a propuestas y solicitudes de extracción](/articles/applying-labels-to-issues-and-pull-requests)".

  {% endtip %}
4. From the filtered list of issues and pull requests, drag the card you'd like to add to your {% data variables.projects.projects_v1_board %} and drop it in the correct column. Como alternativa, puedes mover las tarjetas usando los atajos del teclado. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% tip %}

    **Sugerencia:** Puedes arrastrar y soltar o usar los atajos del teclado para reordenar las tarjetas y moverlas entre las columnas. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% endtip %}

## Adding issues and pull requests to a {% data variables.projects.projects_v1_board %} from the sidebar

1. En el lateral derecho de una propuesta o solicitud de extracción, haz clic en **Projects{% octicon "gear" aria-label="The Gear icon" %} (Proyectos**. ![Botón del tablero de proyecto en la barra lateral](/assets/images/help/projects/sidebar-project.png)
2. Click the **Recent**, **Repository**,**User**, or **Organization** tab for the {% data variables.projects.projects_v1_board %} you would like to add to. ![Pestañas Recent (Reciente), Repository (Repositorio) y Organization (Organización)](/assets/images/help/projects/sidebar-project-tabs.png)
3. Escribe el nombre del proyecto en el campo **Filter projects** (Filtrar proyectos). ![Cuadro de búsqueda del tablero de proyecto](/assets/images/help/projects/sidebar-search-project.png)
4. Select one or more {% data variables.projects.projects_v1_boards %} where you want to add the issue or pull request. ![Tablero de proyecto seleccionado](/assets/images/help/projects/sidebar-select-project.png)
5. Haz clic en {% octicon "triangle-down" aria-label="The down triangle icon" %}, luego haz clic en la columna en la que quieras colocar tu propuesta o solicitud de extracción. The card will move to the bottom of the {% data variables.projects.projects_v1_board %} column you select. ![Menú Move card to column (Mover tarjeta a la columna)](/assets/images/help/projects/sidebar-select-project-board-column-menu.png)

## Leer más

- "[Acerca de {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Editing a {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board)"
- "[Filtering cards on a {% data variables.product.prodname_project_v1 %}](/articles/filtering-cards-on-a-project-board)"
