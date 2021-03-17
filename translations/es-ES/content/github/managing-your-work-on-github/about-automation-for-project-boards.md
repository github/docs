---
title: Acerca de automatización de tableros de proyecto
intro: Puedes configurar flujos de trabajo automáticos para mantener el estado de las tarjetas del tablero de proyecto en sincronización con las propuestas y las solicitudes de extracción asociadas.
redirect_from:
  - /articles/about-automation-for-project-boards
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.project-management.automate-project-board-permissions %}  Para obtener más información, consulta "[Permisos del tablero de proyecto para una organización](/articles/project-board-permissions-for-an-organization)".

Puedes automatizar acciones en función de los eventos desencadenantes para las columnas del tablero de proyecto. Esto elimina algunas tareas manuales en la administración de un tablero de proyecto. Por ejemplo, puedes configurar una columna "Tareas pendientes", donde cualquier propuesta o solicitud de extracción que agregues a un tablero de proyecto se mueva automáticamente a la columna configurada. Para obtener más información, consulta "[Configurar automatización para tableros de proyecto](/articles/configuring-automation-for-project-boards)".

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

La automatización del tablero de proyecto también puede ayudar a los equipos a desarrollar un entendimiento común del propósito de un tablero de proyecto y del proceso de desarrollo del equipo creando un flujo de trabajo estándar para ciertas acciones.

{% data reusables.project-management.resync-automation %}

### Opciones de automatización

| Columna preestablecida | Opciones de configuración |
| ---------------------- | ------------------------- |
| Tarea pendientes       | <ul><li>Mover todas las propuestas agregadas recientemente aquí.</li><li>Mover todas las solicitudes de extracción agregadas recientemente aquí.</li><li>Mover todas las propuestas que se volvieron a abrir aquí.</li><li>Mover todas las solicitudes de extracción que se volvieron a abrir aquí.</li></ul> |
| En curso               | <ul><li>Mover todas las solicitudes de extracción que se volvieron a abrir recientemente aquí.</li><li>Mover todas las propuestas que se volvieron a abrir aquí.</li><li>Mover todas las solicitudes de extracción que se volvieron a abrir aquí.</li><li>Mover todas las solicitudes de extracción que cumplen con la cantidad mínima de revisiones requeridas de la rama base aquí.</li><li>Mover todas las solicitudes de extracción que ya no cumplen con la cantidad mínima de revisiones requeridas de la rama base aquí.</li></ul> |
| Done                   | <ul><li>Mover todas las propuestas cerradas aquí.</li><li>Mover todas las solicitudes de extracción fusionadas aquí.</li><li>Mover todas las solicitudes de extracción cerradas, sin fusionar aquí.</li></ul> |

### Seguimiento de progreso del proyecto

Puedes rastrear el progreso en tu tablero de proyecto. Las tarjetas en las columnas "por hacer", "en curso", o "hecho" cuentan sobre el progreso general del proyecto. {% data reusables.project-management.project-progress-locations %}

Para obtener más información, consulta la sección "[Rastrear el progreso en tu tablero de proyecto](/github/managing-your-work-on-github/tracking-progress-on-your-project-board)".

### Leer más
- "[Configurar la automatización para los tableros de proyecto](/articles/configuring-automation-for-project-boards)"{% if currentVersion == "free-pro-team@latest" %}
- "[Copying a project board](/articles/copying-a-project-board)"{% endif %}
