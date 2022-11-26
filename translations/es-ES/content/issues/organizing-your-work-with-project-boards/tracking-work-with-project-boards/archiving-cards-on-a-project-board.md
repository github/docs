---
title: 'Archivado de tarjetas en una instancia de {% data variables.product.prodname_project_v1 %}'
intro: 'Puedes archivar tarjetas de {% data variables.projects.projects_v1_board %} para organizar tu flujo de trabajo sin perder el contexto histórico de un proyecto.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/archiving-cards-on-a-project-board
  - /articles/archiving-cards-on-a-project-board
  - /github/managing-your-work-on-github/archiving-cards-on-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Archive cards on {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: bef90f56a55d6d087c21603586def91ec2f1c9ed
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110076'
---
{% data reusables.projects.project_boards_old %}

La automatización en las instancias de {% data variables.projects.projects_v1_board %} no se aplica a las tarjetas de {% data variables.projects.projects_v1_board %} archivadas. Por ejemplo, si cierras una incidencia en el archivo de una instancia de {% data variables.projects.projects_v1_board %}, la tarjeta archivada no se mueve automáticamente a la columna "Listo". Al restaurar una tarjeta desde el archivo de la instancia de {% data variables.projects.projects_v1_board %}, la tarjeta volverá a la columna donde se haya archivado.

## Archivado de tarjetas en una instancia de {% data variables.projects.projects_v1_board %}

1. En una instancia de {% data variables.projects.projects_v1_board %}, busca la tarjeta que quieres archivar y, luego, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
![Lista de opciones para editar una tarjeta del panel de proyecto](/assets/images/help/projects/select-archiving-options-project-board-card.png)
2. Haga clic en **Archive** (Archivar).
![Selección de la opción archivar desde el menú](/assets/images/help/projects/archive-project-board-card.png)

## Restauración de tarjetas en una instancia de {% data variables.projects.projects_v1_board %} desde la barra lateral

{% data reusables.project-management.click-menu %}
2. Haga clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y después en **View archive** (Ver archivo).
  ![Selección de la opción ver archivo desde el menú](/assets/images/help/projects/select-view-archive-option-project-board-card.png)
3. Encima de la tarjeta de {% data variables.projects.projects_v1_board %} que quieras desarchivar, haz clic en **Restaurar**.
  ![Selección de restaurar panel del proyecto](/assets/images/help/projects/restore-card.png)
