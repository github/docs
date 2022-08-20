---
title: 'Archivar tarjetas en un {% data variables.product.prodname_project_v1 %}'
intro: 'Puedes archivar tarjetas de {% data variables.projects.projects_v1_board %} para despejar tu flujo de trabajo sin perder el contexto histórico de un proyecto.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/archiving-cards-on-a-project-board
  - /articles/archiving-cards-on-a-project-board
  - /github/managing-your-work-on-github/archiving-cards-on-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Archivar tarjetas en un {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

La automatización en tu {% data variables.projects.projects_v1_board %} no aplica a las tarjetas archivadas del {% data variables.projects.projects_v1_board %}. Por ejemplo, si cierras una propuesta en el archivo de un {% data variables.projects.projects_v1_board %}, la tarjeta archivada no se mueve automáticamente a la columna de "Hecho". Cuando restableces una tarjeta desde el archivo del {% data variables.projects.projects_v1_board %}, esta se devolverá a la columna en donde estaba archivada.

## Archivar tarjetas en un {% data variables.projects.projects_v1_board %}

1. En un {% data variables.projects.projects_v1_board %}, encuentra la tarjeta que quieras archivar y luego haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}. ![Lista de opciones para editar una tarjeta del tablero de proyecto](/assets/images/help/projects/select-archiving-options-project-board-card.png)
2. Da clic en **Archivo**. ![Opción para seleccionar archivos desde el menú.](/assets/images/help/projects/archive-project-board-card.png)

## Restablecer las tarjetas en un {% data variables.projects.projects_v1_board %} desde la barra lateral

{% data reusables.project-management.click-menu %}
2. Haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, luego haz clic en **View archive** (Ver archivo). ![Seleccionar la opción para ver el archivo desde el menú](/assets/images/help/projects/select-view-archive-option-project-board-card.png)
3. Sobre la tarjeta del {% data variables.projects.projects_v1_board %} que quieres dejar de archivar, haz clic en **Restablecer**. ![Seleccionar la restauración de la tarjeta del tablero de proyecto](/assets/images/help/projects/restore-card.png)
