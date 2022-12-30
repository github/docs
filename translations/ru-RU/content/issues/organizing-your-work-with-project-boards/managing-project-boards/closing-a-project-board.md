---
title: 'Закрытие {% data variables.product.prodname_project_v1 %}'
intro: 'Если вы выполнили все задачи в {% data variables.projects.projects_v1_board %} или больше не планируете использовать {% data variables.projects.projects_v1_board %}, можно закрыть {% data variables.projects.projects_v1_board %}.'
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
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110083'
---
{% data reusables.projects.project_boards_old %}

При закрытии {% data variables.projects.projects_v1_board %} любая настроенная автоматизация рабочих процессов будет приостановлена по умолчанию.

Если повторно открыть {% data variables.projects.projects_v1_board %}, можно *синхронизировать* автоматизацию. Это обновит положение карточек на доске в соответствии с настроенными для нее параметрами автоматизации. Дополнительные сведения см. в статьях "[Повторное открытие закрытого {% data variables.product.prodname_project_v1 %}](/articles/reopening-a-closed-project-board)" и "[Сведения об автоматизации для {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)".

1. Перейдите к списку {% data variables.projects.projects_v1_boards %} в репозитории, организации или вашей личной учетной записи.
2. В списке проектов рядом с {% data variables.projects.projects_v1_board %}, который необходимо открыть, щелкните значок {% octicon "chevron-down" aria-label="The chevron icon" %}.
![Значок шеврона справа от имени доски проекта](/assets/images/help/projects/project-list-action-chevron.png)
3. Щелкните **Закрыть**.
![Пункт "Закрыть" в раскрывающемся меню доски проекта](/assets/images/help/projects/close-project.png)

## Дополнительные материалы

- "[Сведения о {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Удаление {% data variables.product.prodname_project_v1 %}](/articles/deleting-a-project-board)"
- "[Отключение {% data variables.product.prodname_projects_v1 %} в репозитории](/articles/disabling-project-boards-in-a-repository)"
- "[Отключение {% data variables.product.prodname_projects_v1 %} в организации](/articles/disabling-project-boards-in-your-organization)"
- [Разрешения для {% data variables.product.prodname_project_v1_caps %} в организации](/articles/project-board-permissions-for-an-organization)
