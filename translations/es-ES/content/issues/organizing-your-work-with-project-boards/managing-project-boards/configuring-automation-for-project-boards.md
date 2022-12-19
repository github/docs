---
title: 'Configuración de la automatización para {% data variables.product.prodname_projects_v1 %}'
intro: 'Puedes establecer flujos de trabajo automáticos para mover incidencias y solicitudes de incorporación de cambios a una columna de {% data variables.projects.projects_v1_board %} cuando se produce un evento especificado.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/configuring-automation-for-project-boards
  - /articles/configuring-automation-for-project-boards
  - /github/managing-your-work-on-github/configuring-automation-for-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
  - Projects
  - Issues
  - Project management
shortTitle: Configure automation
type: how_to
allowTitleToDifferFromFilename: true
ms.openlocfilehash: faf559c3423178b43f3b524bbf3cdc41acd18a92
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110081'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %} Para más información, consulta "[Acerca de la automatización de {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)".

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.resync-automation %}

{% tip %}

**Sugerencia**: Para editar columnas que ya tienen configurada la automatización, haga clic en **Manage** (Administrar) en la parte inferior de la columna.

{% endtip %}

1. Navega a la instancia de {% data variables.projects.projects_v1_board %} que quieras automatizar.
2. En la columna que quiere automatizar, haga clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
![Icono Editar](/assets/images/help/projects/edit-column-button.png)
3. Haga clic en **Manage automation** (Administrar automatización).
![Botón Manage automation (Administrar automatización)](/assets/images/help/projects/manage-automation-button.png)
4. En el menú desplegable Preset (Preestablecer), selecciona el preestablecimiento de la automatización.
![Selección de la automatización preestablecida en el menú](/assets/images/help/projects/select-automation.png)
5. Selecciona las automatizaciones del flujo de trabajo que deseas configurar para la columna.
![Lista de opciones para automatizar la columna](/assets/images/help/projects/select-automation-options-existing-column.png)
6. Haga clic en **Update automation** (Actualizar automatización).

## Información adicional
- "[Acerca de la automatización de {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)"
