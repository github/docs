---
title: 'Архивация карточек на {% data variables.product.prodname_project_v1 %}'
intro: 'Вы можете архивировать карточки {% data variables.projects.projects_v1_board %}, чтобы упорядочить рабочий процесс без потерь исторического контекста проекта.'
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
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110075'
---
{% data reusables.projects.project_boards_old %}

Автоматизация в {% data variables.projects.projects_v1_board %} не применяется к архивным карточкам {% data variables.projects.projects_v1_board %}. Например, если закрыть проблему в архиве {% data variables.projects.projects_v1_board %}, архивная карточка не перемещается в столбец "Готово" автоматически. При восстановлении карточки из архива {% data variables.projects.projects_v1_board %} она вернется в столбец, в котором она была архивирована.

## Архивирование карточек на {% data variables.projects.projects_v1_board %}

1. На {% data variables.projects.projects_v1_board %} найдите карточку, которую вы хотите архивировать, и щелкните {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
![Список параметров для редактирования карточки доски проекта](/assets/images/help/projects/select-archiving-options-project-board-card.png)
2. Нажмите кнопку **Архивировать**.
![Выберите пункт "Архив" в меню](/assets/images/help/projects/archive-project-board-card.png)

## Восстановление карточек на {% data variables.projects.projects_v1_board %} с боковой панели

{% data reusables.project-management.click-menu %}
2. Щелкните {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} и выберите пункт **Посмотреть архив**.
  ![Выберите пункт "Посмотреть архив" в меню](/assets/images/help/projects/select-view-archive-option-project-board-card.png)
3. Над карточкой {% data variables.projects.projects_v1_board %}, которую требуется разархивировать, нажмите кнопку **Восстановить**.
  ![Выбор карточки на доске проекта для восстановления](/assets/images/help/projects/restore-card.png)
