---
title: 'About automation for {% data variables.product.prodname_projects_v1 %}'
intro: 'You can configure automatic workflows to keep the status of {% data variables.projects.projects_v1_board %} cards in sync with the associated issues and pull requests.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-automation-for-project-boards
  - /articles/about-automation-for-project-boards
  - /github/managing-your-work-on-github/about-automation-for-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Automation for {% data variables.product.prodname_projects_v1 %}'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %}  For more information, see "[{% data variables.product.prodname_projects_v1_caps %} permissions for an organization](/articles/project-board-permissions-for-an-organization)."

You can automate actions based on triggering events for {% data variables.projects.projects_v1_board %} columns. This eliminates some of the manual tasks in managing a {% data variables.projects.projects_v1_board %}. For example, you can configure a "To do" column, where any new issues or pull requests you add to a {% data variables.projects.projects_v1_board %} are automatically moved to the configured column. For more information, see "[Configuring automation for {% data variables.product.prodname_projects_v1 %}](/articles/configuring-automation-for-project-boards)."

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

{% data variables.projects.projects_v1_board_caps %} automation can also help teams develop a shared understanding of a {% data variables.projects.projects_v1_board %}'s purpose and the team's development process by creating a standard workflow for certain actions.

{% data reusables.project-management.resync-automation %}

## Opciones de automatización

| Columna preestablecida | Opciones de configuración |
| ---------------------- | ------------------------- |
| Tarea pendientes       | <ul><li>Mover todas las propuestas agregadas recientemente aquí.</li><li>Mover todas las solicitudes de extracción agregadas recientemente aquí.</li><li>Mover todas las propuestas que se volvieron a abrir aquí.</li><li>Mover todas las solicitudes de extracción que se volvieron a abrir aquí.</li></ul> |
| En curso               | <ul><li>Mover todas las solicitudes de extracción que se volvieron a abrir recientemente aquí.</li><li>Mover todas las propuestas que se volvieron a abrir aquí.</li><li>Mover todas las solicitudes de extracción que se volvieron a abrir aquí.</li><li>Mover todas las solicitudes de extracción que cumplen con la cantidad mínima de revisiones requeridas de la rama base aquí.</li><li>Mover todas las solicitudes de extracción que ya no cumplen con la cantidad mínima de revisiones requeridas de la rama base aquí.</li></ul> |
| Done                   | <ul><li>Mover todas las propuestas cerradas aquí.</li><li>Mover todas las solicitudes de extracción fusionadas aquí.</li><li>Mover todas las solicitudes de extracción cerradas, sin fusionar aquí.</li></ul> |

## Seguimiento de progreso del proyecto

You can track the progress on your {% data variables.projects.projects_v1_board %}. Las tarjetas en las columnas "por hacer", "en curso", o "hecho" cuentan sobre el progreso general del proyecto. {% data reusables.project-management.project-progress-locations %}

For more information, see "[Tracking progress on your {% data variables.product.prodname_project_v1 %}](/github/managing-your-work-on-github/tracking-progress-on-your-project-board)."

## Leer más
- "[Configuring automation for {% data variables.product.prodname_projects_v1 %}](/articles/configuring-automation-for-project-boards)"{% ifversion fpt or ghec %}
- "[Copiar un {% data variables.product.prodname_project_v1 %}](/articles/copying-a-project-board)"{% endif %}
