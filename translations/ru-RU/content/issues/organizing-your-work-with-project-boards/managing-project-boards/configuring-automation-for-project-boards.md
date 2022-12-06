---
title: 'Настройка автоматизации для {% data variables.product.prodname_projects_v1 %}'
intro: 'Можно настроить автоматические рабочие процессы для перемещения проблем и запросов на вытягивание в столбец {% data variables.projects.projects_v1_board %}, когда возникает определенное событие.'
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
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110082'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %} Дополнительные сведения см. в статье "[Сведения об автоматизации для {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)".

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.resync-automation %}

{% tip %}

**Совет**. Чтобы изменить столбцы, для которых уже настроена автоматизация, щелкните **Управление** внизу столбца.

{% endtip %}

1. Перейдите к {% data variables.projects.projects_v1_board %}, который необходимо автоматизировать.
2. В столбце, который нужно автоматизировать, щелкните {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
![Значок "Изменить"](/assets/images/help/projects/edit-column-button.png)
3. Нажмите кнопку **Управление автоматизацией**.
![Кнопка "Управление автоматизацией"](/assets/images/help/projects/manage-automation-button.png)
4. В раскрывающемся меню предустановок выберите предустановку автоматизации.
![Выбор предустановки автоматизации в меню](/assets/images/help/projects/select-automation.png)
5. Выберите операции автоматизации рабочих процессов, которые необходимо настроить для столбца.
![Список параметров для автоматизации столбца](/assets/images/help/projects/select-automation-options-existing-column.png)
6. Нажмите кнопку **Обновить автоматизацию**.

## Дополнительные материалы
- "[Сведения об автоматизации для {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)"
