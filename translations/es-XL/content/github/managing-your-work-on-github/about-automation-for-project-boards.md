---
title: Acerca de automatización de tableros de proyecto
intro: Puedes configurar flujos de trabajo automáticos para mantener el estado de las tarjetas del tablero de proyecto en sincronización con las propuestas y las solicitudes de extracción asociadas.
redirect_from:
  - /articles/about-automation-for-project-boards
versions:
  free-pro-team: '*'
  enterprise-server: '*'
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
| In progress            | <ul><li>Mover todas las solicitudes de extracción que se volvieron a abrir recientemente aquí.</li><li>Mover todas las propuestas que se volvieron a abrir aquí.</li><li>Mover todas las solicitudes de extracción que se volvieron a abrir aquí.</li><li>Mover todas las solicitudes de extracción que cumplen con la cantidad mínima de revisiones requeridas de la rama base aquí.</li><li>Mover todas las solicitudes de extracción que ya no cumplen con la cantidad mínima de revisiones requeridas de la rama base aquí.</li></ul> |
| Done                   | <ul><li>Mover todas las propuestas cerradas aquí.</li><li>Mover todas las solicitudes de extracción fusionadas aquí.</li><li>Mover todas las solicitudes de extracción cerradas, sin fusionar aquí.</li></ul> |

### Seguimiento de progreso del proyecto
La automatización del tablero de proyecto permite un seguimiento de progreso por defecto. Las tarjetas en las columnas con "Tareas pendientes", "En progreso", "Hecho" preestablecen el conteo hacia el progreso general del proyecto. {% data reusables.project-management.project-progress-locations %}

### Leer más
- "[Configurar automatización para tableros de proyecto](/articles/configuring-automation-for-project-boards)"{% if currentVersion == "free-pro-team@latest" %}
- "[Copying a project board](/articles/copying-a-project-board)"{% endif %}
