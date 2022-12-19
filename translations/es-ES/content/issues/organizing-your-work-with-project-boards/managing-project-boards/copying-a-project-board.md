---
title: 'Copia de una instancia de {% data variables.product.prodname_project_v1 %}'
intro: 'Puedes copiar una instancia de {% data variables.projects.projects_v1_board %} para crear rápidamente un proyecto. La copia de instancias de {% data variables.projects.projects_v1_boards %} personalizadas o que se usan con frecuencia ayuda a estandarizar el flujo de trabajo.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/copying-a-project-board
  - /articles/copying-a-project-board
  - /github/managing-your-work-on-github/copying-a-project-board
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 33f2822f338a2210c87ec9baad986231f11fe310
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109861'
---
{% data reusables.projects.project_boards_old %}

La copia de una instancia de {% data variables.projects.projects_v1_board %} te permite reutilizar el título, la descripción y la configuración de automatización de {% data variables.projects.projects_v1_board %}. Puedes copiar instancias de {% data variables.projects.projects_v1_boards %} para eliminar el proceso manual de crear instancias de {% data variables.projects.projects_v1_boards %} para flujos de trabajo similares.

Debes tener acceso de lectura a una instancia de {% data variables.projects.projects_v1_board %} para copiarla en un repositorio u organización donde tengas acceso de lectura.

Al copiar una instancia de {% data variables.projects.projects_v1_board %} en una organización, la visibilidad de {% data variables.projects.projects_v1_board %} será privada de forma predeterminada, con una opción para cambiarla. Para más información, consulta "[Cambio de la visibilidad de {% data variables.product.prodname_project_v1 %}](/articles/changing-project-board-visibility/)".

La automatización de una instancia de {% data variables.projects.projects_v1_board %} también está habilitada de forma predeterminada. Para más información, consulta "[Acerca de la automatización para {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards/)".

1. Navega a la instancia de {% data variables.projects.projects_v1_board %} que quieras copiar.
{% data reusables.project-management.click-menu %}
3. Haga clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y después en **Copiar**.
![Opción Copiar en el menú desplegable desde la barra lateral del panel de proyecto](/assets/images/help/projects/project-board-copy-setting.png)
4. Debajo de "Owner" (Propietario), usa el menú desplegable y haz clic en el repositorio o la organización donde deseas copiar el tablero de proyecto.
![Selección del propietario del panel de proyecto copiado desde el menú desplegable](/assets/images/help/projects/copied-project-board-owner.png)
5. Opcionalmente, en "Nombre del panel del proyecto", escribe el nombre de la instancia de {% data variables.projects.projects_v1_board %} copiada.
![Campo para escribir un nombre para el panel de proyecto copiado](/assets/images/help/projects/copied-project-board-name.png)
6. Opcionalmente, debajo de "Description" (Descripción), escribe una descripción del tablero de proyecto copiado que verán otras personas.
![Campo para escribir una descripción para el panel de proyecto copiado](/assets/images/help/projects/copied-project-board-description.png)
7. Opcionalmente, debajo de "Automation settings " (Parámetros de automatización), selecciona si deseas copiar los flujos de trabajo automáticos configurados. Esta opción está habilitada de forma predeterminada. Para más información, vea "[Acerca de la automatización de paneles de proyecto](/articles/about-automation-for-project-boards/)".
![Selección de la configuración de automatización para el panel de proyecto copiado](/assets/images/help/projects/copied-project-board-automation-settings.png) {% data reusables.project-management.choose-visibility %}
9. Haga clic en **Copiar proyecto**.
![Botón Confirmar copia](/assets/images/help/projects/confirm-copy-project-board.png)
