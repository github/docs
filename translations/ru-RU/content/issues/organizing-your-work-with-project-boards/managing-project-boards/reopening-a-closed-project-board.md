---
title: 'Повторное открытие закрытого компонента "{% data variables.product.prodname_project_v1 %}"'
intro: 'Закрытая {% data variables.projects.projects_v1_board %} может быть открыта повторно, и если {% data variables.projects.projects_v1_board %} имеет автоматизированные рабочие процессы, их можно перезапустить.'
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
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109575'
---
{% data reusables.projects.project_boards_old %}

Когда {% data variables.projects.projects_v1_board %} закрывается, если {% data variables.projects.projects_v1_board %} имеет автоматизированные рабочие процессы, они по умолчанию будут приостановлены. Дополнительные сведения: [Закрытие компонента "{% data variables.product.prodname_project_v1 %}"](/articles/closing-a-project-board).

Когда {% data variables.projects.projects_v1_board %} открывается повторно, вы можете *синхронизировать* автоматизацию, и тогда положение карточек на доске обновляется в соответствии с настроенными для нее параметрами автоматизации.

1. Должна быть выбрана {% data variables.projects.projects_v1_board %}, которую требуется открыть повторно.
{% data reusables.project-management.click-menu %}
3. Выберите, должна ли ваша {% data variables.projects.projects_v1_board %} синхронизировать автоматизацию или {% data variables.projects.projects_v1_board %} откроется повторно без синхронизации.
    - Если {% data variables.projects.projects_v1_board %} должна открыться повторно и синхронизировать автоматизацию, щелкните **Повторно открыть и синхронизировать проект**.
  ![Нажмите кнопку "Повторно открыть и повторно синхронизировать проект"](/assets/images/help/projects/reopen-and-sync-project.png)
    - Если {% data variables.projects.projects_v1_board %} должна открыться повторно без синхронизации автоматизации, в раскрывающемся меню повторного открытия щелкните **Только открыть**. Затем щелкните **Только открыть**.
  ![Раскрывающееся меню повторного открытия закрытой доски проекта](/assets/images/help/projects/reopen-closed-project-board-drop-down-menu.png)

## Дополнительные материалы

- [Настройка автоматизации компонента "{% data variables.product.prodname_projects_v1 %}"](/articles/configuring-automation-for-project-boards)
