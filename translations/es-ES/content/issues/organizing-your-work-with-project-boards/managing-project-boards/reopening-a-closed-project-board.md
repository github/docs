---
title: 'Volver a abrir un {% data variables.product.prodname_project_v1 %} cerrado'
intro: 'Puedes volver a abrir un {% data variables.projects.projects_v1_board %} cerrado y reiniciar cualquier automatización de flujo de trabajo que se haya configurado para dicho {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/reopening-a-closed-project-board
  - /articles/reopening-a-closed-project-board
  - /github/managing-your-work-on-github/reopening-a-closed-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Volver a abrir un {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

Cuando cierras un {% data variables.projects.projects_v1_board %}, cualquier automatización de flujo de trabajo que se haya configurado para dicho {% data variables.projects.projects_v1_board %} se pausará predeterminadamente. Para obtener más información, consulta la sección "[Cerrar un {% data variables.product.prodname_project_v1 %}](/articles/closing-a-project-board)"

Cuando reabres un {% data variables.projects.projects_v1_board %}, tienes la opción de *sincronizar* la automatización, lo cual actualiza la posición de las tarjetas en el tablero de acuerdo con los ajustes de automatización que se configuraron para el tablero.

1. Navega al {% data variables.projects.projects_v1_board %} que quieras volver a abrir.
{% data reusables.project-management.click-menu %}
3. Elige si quieres sincronizar la automatización para tu {% data variables.projects.projects_v1_board %} o volver a abrir tu {% data variables.projects.projects_v1_board %} sin sincronizar.
    - Para volver a abrir tu {% data variables.projects.projects_v1_board %} y sincronizar la automatización, haz clic en **Volver a abrir y sincronizar proyecto**. ![Selecciona el botón "Reopen and resync project" (Reabrir y resincronizar proyecto)](/assets/images/help/projects/reopen-and-sync-project.png)
    - Para volver a abrir tu {% data variables.projects.projects_v1_board %} sin sincronizar la automatización, utilizando el menú desplegable de volver a abrir, haz clic en **Solo volver a abrir**. Luego, haz clic en **Reopen only** (Solo reabrir). ![Menú desplegable para reabrir tablero de proyecto cerrado](/assets/images/help/projects/reopen-closed-project-board-drop-down-menu.png)

## Leer más

- "[Configurar la automatización para los {% data variables.product.prodname_projects_v1 %}](/articles/configuring-automation-for-project-boards)"
