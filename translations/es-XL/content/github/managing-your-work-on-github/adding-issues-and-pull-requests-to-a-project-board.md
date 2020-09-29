---
title: Agregar propuestas y solicitudes de extracción a un tablero de proyecto
intro: Puedes agregar propuestas y solicitudes de extracción a un tablero de proyecto en la forma de tarjetas y jerarquizarlas en columnas.
redirect_from:
  - /articles/adding-issues-and-pull-requests-to-a-project/
  - /articles/adding-issues-and-pull-requests-to-a-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Puedes agregar propuestas o tarjetas de solicitudes de extracción a un tablero de proyecto al:
- Arrastrar tarjetas desde la sección **Triage** (Jerarquizar) en la barra lateral.
- Escribir la propuesta o URL de solicitud de extracción en una tarjeta.
- Buscar las propuestas o solicitudes de extracción en la barra lateral de búsqueda del tablero de proyecto.

Puedes poner un máximo de 2500 tarjetas en cada columna del proyecto. Si una columna ha alcanzado un número máximo de tarjetas, ninguna tarjeta puede moverse a esa columna.

![El cursor mueve la tarjeta de propuestas desde la barra lateral de clasificación hasta la columna del tablero](/assets/images/help/projects/add-card-from-sidebar.gif)

{% note %}

**Nota:** También puedes agregar notas a tu tablero de proyecto para servir como recordatorios de tarea, referencias a propuestas y solicitudes de extracción desde un repositorio en {% data variables.product.product_name %}, o agregar información relacionada con tu tablero de proyecto. Para obtener más información, consulta "[Agregar notas a un tablero de proyecto](/articles/adding-notes-to-a-project-board)".

{% endnote %}

{% data reusables.project-management.edit-in-project %}

{% data reusables.project-management.link-repos-to-project-board %} Cuando buscas propuestas y solicitudes de extracción para agregar a tu tablero de proyecto, la búsqueda automáticamente llega a tus repositorios relacionados. Puedes eliminar estos calificadores para buscar dentro de todos los repositorios de la organización. Para obtener más información, consulta "[Vincular un repositorio con un tablero de proyecto](/articles/linking-a-repository-to-a-project-board)".

### Agregar propuestas y solicitudes de extracción a un tablero de proyecto

1. Navegue hasta el tablero de proyecto donde deseas agregar propuestas y solicitudes de extracción.
2. En tu tablero de proyecto, haz clic en {% octicon "plus" aria-label="The plus icon" %} **Add cards** (Agregar tarjetas). ![Agregar botón de tarjetas](/assets/images/help/projects/add-cards-button.png)
3. Buscar propuestas y solicitudes de extracción para agregar a tu tablero de proyecto mediante calificadores de búsqueda. Para más información sobre la búsqueda de calificadores que puedes usar, consulta "[Buscar propuestas](/articles/searching-issues)". ![Buscar propuestas y solicitudes de extracción](/assets/images/help/issues/issues_search_bar.png)

  {% tip %}

  **Sugerencias:**
    - También puedes agregar una propuesta o solicitud de extracción al escribir la URL en una tarjeta.
    - Si estás trabajando en una característica específica, puedes aplicar una etiqueta a cada propuesta relacionada o solicitud de extracción para esa característica, y luego agregar tarjetas fácilmente a tu tablero de proyecto al buscar por el nombre de la etiqueta. Para obtener más información, consulta "[Aplicar etiquetas a propuestas y solicitudes de extracción](/articles/applying-labels-to-issues-and-pull-requests)".

  {% endtip %}
4. En la lista filtrada de propuestas y solicitudes de extracción, arrastra la tarjeta que te gustaría agregar a tu tablero de proyecto y colócala en la columna correcta. Como alternativa, puedes mover las tarjetas usando los atajos del teclado. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% tip %}

    **Sugerencia:** Puedes arrastrar y soltar o usar los atajos del teclado para reordenar las tarjetas y moverlas entre las columnas. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% endtip %}

### Agregar propuestas y solicitudes de extracción a un tablero de proyecto de la barra lateral

1. En el lateral derecho de una propuesta o solicitud de extracción, haz clic en **Projects{% octicon "gear" aria-label="The Gear icon" %} (Proyectos**. ![Botón del tablero de proyecto en la barra lateral](/assets/images/help/projects/sidebar-project.png)
2. Da clic en la pestaña **Reciente**,**Repositorio**,**Usuario**, u **Organización** del tablero de proyecto que te gustaría agregar. ![Pestañas Recent (Reciente), Repository (Repositorio) y Organization (Organización)](/assets/images/help/projects/sidebar-project-tabs.png)
3. Escribe el nombre del proyecto en el campo **Filter projects** (Filtrar proyectos). ![Cuadro de búsqueda del tablero de proyecto](/assets/images/help/projects/sidebar-search-project.png)
4. Selecciona uno o más tableros de proyectos en los que quieras agregar la propuesta o solicitud de extracción. ![Selected project board](/assets/images/help/projects/sidebar-select-project.png){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
5. Click
{% octicon "triangle-down" aria-label="The down triangle icon" %}, then click the column where you want your issue or pull request. La tarjeta se moverá al final de la columna del tablero de proyecto que selecciones.
  ![Menú Move card to column (Mover tarjeta a la columna)](/assets/images/help/projects/sidebar-select-project-board-column-menu.png)
{% else %}
5. En el lateral derecho de una propuesta o solicitud de extracción, escribe **PROJECT-BOARD-NAME (a la espera de prioridades)**. ![Enlace al tablero de proyecto](/assets/images/help/projects/sidebar-project-board-link.png)
6. En tu tablero de proyecto, haz clic en **{% octicon "plus" aria-label="The Plus icon" %} Add cards (1 new)** (Agregar tarjetas [1 nueva]). ![Agregar botón de tarjetas](/assets/images/help/projects/add-cards-pending-button.png)
7. Arrastra la tarjeta para tu propuesta o solicitud de extracción desde la sección **Triage** (Jerarquía) en la columna que desees en el tablero de proyecto. Como alternativa, puedes mover las tarjetas usando los atajos del teclado. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}
{% endif %}

### Leer más

- "[Acerca de los tablero de proyecto](/articles/about-project-boards)"
- "[Editar un tablero de proyecto](/articles/editing-a-project-board)"
- "[Filtrar tarjetas en un tablero de proyecto](/articles/filtering-cards-on-a-project-board)"
