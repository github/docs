---
title: 'Reapertura de una instancia de {% data variables.product.prodname_project_v1 %} cerrada'
intro: 'Puedes volver a abrir una instancia de {% data variables.projects.projects_v1_board %} cerrada y reiniciar cualquier automatización de flujo de trabajo configurada para la instancia de {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/reopening-a-closed-project-board
  - /articles/reopening-a-closed-project-board
  - /github/managing-your-work-on-github/reopening-a-closed-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Reopen {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e0101378c0b7049f7cba5e04dd28231a1237d0c5
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110037'
---
{% data reusables.projects.project_boards_old %}

Al cerrar una instancia de {% data variables.projects.projects_v1_board %}, cualquier automatización de flujo de trabajo configurada para la instancia de {% data variables.projects.projects_v1_board %} se pausará de manera predeterminada. Para más información, consulta "[Cierre de una instancia de {% data variables.product.prodname_project_v1 %}](/articles/closing-a-project-board)".

Al volver a abrir una instancia de {% data variables.projects.projects_v1_board %}, tienes la opción de *sincronizar* la automatización, lo que actualiza la posición de las tarjetas en el panel de acuerdo con la configuración de automatización que hayas configurado para el panel.

1. Navega a la instancia de {% data variables.projects.projects_v1_board %} que quieras volver a abrir
{% data reusables.project-management.click-menu %}
3. Elige si quieres sincronizar la automatización de la instancia de {% data variables.projects.projects_v1_board %}, o bien volver a abrirla {% data variables.projects.projects_v1_board %} sin sincronizar.
    - Para volver a abrir la instancia de {% data variables.projects.projects_v1_board %} y sincronizar la automatización, haz clic en **Volver a abrir y sincronizar el proyecto**.
  ![Selección del botón "Reabrir y sincronizar proyecto"](/assets/images/help/projects/reopen-and-sync-project.png)
    - Para volver a abrir la instancia de {% data variables.projects.projects_v1_board %} sin sincronizar la automatización, haz clic en **Solo reabrir** en el menú desplegable. Después, haga clic en **Solo reabrir**.
  ![Menú desplegable para volver a abrir el panel de proyecto cerrado](/assets/images/help/projects/reopen-closed-project-board-drop-down-menu.png)

## Información adicional

- "[Configuración de la automatización para {% data variables.product.prodname_projects_v1 %}](/articles/configuring-automation-for-project-boards)"
