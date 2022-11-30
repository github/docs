---
title: 'Acerca de la automatización de {% data variables.product.prodname_projects_v1 %}'
intro: 'Puedes configurar flujos de trabajo automáticos para mantener el estado de las tarjetas del tablero de {% data variables.projects.projects_v1_board %} en sincronización con las incidencias y las solicitudes de incorporación de cambios asociadas.'
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
ms.openlocfilehash: 28c4719cca14dff54d971b9a081837c172f4da76
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109874'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %} Para más información, consulta "[Permisos de {% data variables.product.prodname_projects_v1_caps %} para una organización](/articles/project-board-permissions-for-an-organization)".

Puedes automatizar acciones basadas en eventos desencadenados para columnas de {% data variables.projects.projects_v1_board %}. Esto elimina algunas de las tareas manuales para administrar una instancia de {% data variables.projects.projects_v1_board %}. Por ejemplo, puedes configurar una columna "Tareas pendientes", donde cualquier incidencia o solicitud de incorporación de cambios que agregues a una instancia de {% data variables.projects.projects_v1_board %} se mueva automáticamente a la columna configurada. Para más información, consulta "[Configuración de automatización para {% data variables.product.prodname_projects_v1 %}](/articles/configuring-automation-for-project-boards)".  

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

La automatización de {% data variables.projects.projects_v1_board_caps %} también puede ayudar a los equipos a desarrollar una comprensión compartida del propósito de una instancia de {% data variables.projects.projects_v1_board %} y el proceso de desarrollo del equipo mediante la creación de un flujo de trabajo estándar para determinadas acciones.

{% data reusables.project-management.resync-automation %}

## Opciones de automatización

| Columna preestablecida | Opciones de configuración |
| --- | --- |
| Tareas pendientes | <ul><li>Mover todas las propuestas agregadas recientemente aquí.</li><li>Mover todas las solicitudes de extracción agregadas recientemente aquí.</li><li>Mover todas las propuestas que se volvieron a abrir aquí.</li><li>Mover todas las solicitudes de extracción que se volvieron a abrir aquí.</li></ul> |
| En curso | <ul><li>Mover todas las solicitudes de extracción que se volvieron a abrir recientemente aquí.</li><li>Mover todas las propuestas que se volvieron a abrir aquí.</li><li>Mover todas las solicitudes de extracción que se volvieron a abrir aquí.</li><li>Mover todas las solicitudes de extracción que cumplen con la cantidad mínima de revisiones requeridas de la rama base aquí.</li><li>Mover todas las solicitudes de extracción que ya no cumplen con la cantidad mínima de revisiones requeridas de la rama base aquí.</li></ul> |
| Listo | <ul><li>Mover todas las propuestas cerradas aquí.</li><li>Mover todas las solicitudes de extracción fusionadas aquí.</li><li>Mover todas las solicitudes de extracción cerradas, sin fusionar aquí.</li></ul> |

## Seguimiento de progreso del proyecto

Puedes realizar el seguimiento del progreso de la instancia de {% data variables.projects.projects_v1_board %}. Las tarjetas en las columnas "por hacer", "en curso", o "hecho" cuentan sobre el progreso general del proyecto. {% data reusables.project-management.project-progress-locations %}

Para más información, consulta "[Seguimiento del progreso de {% data variables.product.prodname_project_v1 %}](/github/managing-your-work-on-github/tracking-progress-on-your-project-board)".

## Información adicional
- "[Configuración de la automatización para {% data variables.product.prodname_projects_v1 %}](/articles/configuring-automation-for-project-boards)"{% ifversion fpt or ghec %}
- "[Copia de una instancia de {% data variables.product.prodname_project_v1 %}](/articles/copying-a-project-board)"{% endif %}
