---
title: 'Acerca de la automatización para los {% data variables.product.prodname_projects_v1 %}'
intro: 'Puedes configurar los flujos de trabajo automáticos para mantener el estado de las tarjetas del {% data variables.projects.projects_v1_board %} sincronizadas con las propuestas y solicitudes de cambio asociadas.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-automation-for-project-boards
  - /articles/about-automation-for-project-boards
  - /github/managing-your-work-on-github/about-automation-for-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Automatización para los {% data variables.product.prodname_projects_v1 %}'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %} Para obtener más información, consulta la sección "[Permisos de los {% data variables.product.prodname_projects_v1_caps %} para una organización](/articles/project-board-permissions-for-an-organization)".

Puedes automatizar las acciones con base en los eventos activadores para las columnas del {% data variables.projects.projects_v1_board %}. Esto elimina algunas de las tareas manuales para administrar un {% data variables.projects.projects_v1_board %}. Por ejemplo, puedes configurar una columna de elementos "Por hacer", en donde cualquier propuesta o solicitud de cambios nueva que agregues a un {% data variables.projects.projects_v1_board %} se mueva automáticamente a la columna configurada. Para obtener más información, consulta la sección "[Configurar la automatización para los {% data variables.product.prodname_projects_v1 %}](/articles/configuring-automation-for-project-boards)".

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

La automatización de los {% data variables.projects.projects_v1_board_caps %} también puede ayudar a que los equipos desarrollen un entendimiento compartido del propósito de un {% data variables.projects.projects_v1_board %} y del proceso de desarrollo del equipo al crear un flujo de trabajo estándar para acciones específicas.

{% data reusables.project-management.resync-automation %}

## Opciones de automatización

| Columna preestablecida | Opciones de configuración |
| ---------------------- | ------------------------- |
| Tarea pendientes       | <ul><li>Mover todas las propuestas agregadas recientemente aquí.</li><li>Mover todas las solicitudes de extracción agregadas recientemente aquí.</li><li>Mover todas las propuestas que se volvieron a abrir aquí.</li><li>Mover todas las solicitudes de extracción que se volvieron a abrir aquí.</li></ul> |
| En curso               | <ul><li>Mover todas las solicitudes de extracción que se volvieron a abrir recientemente aquí.</li><li>Mover todas las propuestas que se volvieron a abrir aquí.</li><li>Mover todas las solicitudes de extracción que se volvieron a abrir aquí.</li><li>Mover todas las solicitudes de extracción que cumplen con la cantidad mínima de revisiones requeridas de la rama base aquí.</li><li>Mover todas las solicitudes de extracción que ya no cumplen con la cantidad mínima de revisiones requeridas de la rama base aquí.</li></ul> |
| Done                   | <ul><li>Mover todas las propuestas cerradas aquí.</li><li>Mover todas las solicitudes de extracción fusionadas aquí.</li><li>Mover todas las solicitudes de extracción cerradas, sin fusionar aquí.</li></ul> |

## Seguimiento de progreso del proyecto

Puedes rastrear el progreso en tu {% data variables.projects.projects_v1_board %}. Las tarjetas en las columnas "por hacer", "en curso", o "hecho" cuentan sobre el progreso general del proyecto. {% data reusables.project-management.project-progress-locations %}

Para obtener más información, consulta la sección "[Rastrear el progreso en tu {% data variables.product.prodname_project_v1 %}](/github/managing-your-work-on-github/tracking-progress-on-your-project-board)".

## Leer más
- "[Configurar la automatización para {% data variables.product.prodname_projects_v1 %}](/articles/configuring-automation-for-project-boards)"{% ifversion fpt or ghec %}
- "[Copiar un {% data variables.product.prodname_project_v1 %}](/articles/copying-a-project-board)"{% endif %}
