---
title: 'Cierre de una instancia de {% data variables.product.prodname_project_v1 %}'
intro: 'Si ha completado todas las tareas de un {% data variables.projects.projects_v1_board %} o ya no necesita usar un {% data variables.projects.projects_v1_board %}, puede cerrar los datos {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/closing-a-project-board
  - /articles/closing-a-project
  - /articles/closing-a-project-board
  - /github/managing-your-work-on-github/closing-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 21dfb0c6837f97d567f19168cd7f343aac06a4c0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110084'
---
{% data reusables.projects.project_boards_old %}

Al cerrar una instancia de {% data variables.projects.projects_v1_board %}, cualquier automatización de flujo de trabajo configurada se pausará de forma predeterminada.

Si vuelves a abrir una instancia de {% data variables.projects.projects_v1_board %}, tienes la opción de *sincronizar* la automatización, lo que actualiza la posición de las tarjetas en el panel de acuerdo con la configuración de automatización que hayas configurado para el panel. Para más información, consulta "[Reapertura de una instancia de {% data variables.product.prodname_project_v1 %} cerrada](/articles/reopening-a-closed-project-board)" o "[Acerca de la automatización de {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)".

1. Navega hasta la lista de instancias de {% data variables.projects.projects_v1_boards %} en tu repositorio u organización, o las que pertenezcan a tu cuenta personal.
2. En la lista de proyectos, junto a la instancia de {% data variables.projects.projects_v1_board %} que quieras cerrar, haz clic en {% octicon "chevron-down" aria-label="The chevron icon" %}.
![Icono de botón de contenido adicional a la derecha del nombre del panel de proyecto](/assets/images/help/projects/project-list-action-chevron.png)
3. Haga clic en **Cerrar**.
![Menú desplegable para cerrar elementos en el panel de proyecto](/assets/images/help/projects/close-project.png)

## Información adicional

- "[Acerca de {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Eliminación de una instancia de {% data variables.product.prodname_project_v1 %}](/articles/deleting-a-project-board)"
- "[Deshabilitación de {% data variables.product.prodname_projects_v1 %} en un repositorio](/articles/disabling-project-boards-in-a-repository)"
- "[Deshabilitación de {% data variables.product.prodname_projects_v1 %} en la organización](/articles/disabling-project-boards-in-your-organization)"
- "[Permisos de {% data variables.product.prodname_project_v1_caps %} para una organización](/articles/project-board-permissions-for-an-organization)".
