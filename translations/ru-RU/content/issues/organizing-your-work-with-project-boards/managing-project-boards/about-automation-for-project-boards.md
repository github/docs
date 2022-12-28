---
title: 'Сведения об автоматизации компонента "{% data variables.product.prodname_projects_v1 %}"'
intro: 'Вы можете настроить автоматизированные рабочие процессы, чтобы синхронизировать состояние карточек компонента "{% data variables.projects.projects_v1_board %}" со связанными проблемами и запросами на вытягивание.'
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
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108980'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %} Дополнительные сведения: [{% data variables.product.prodname_projects_v1_caps %} и разрешения для организации](/articles/project-board-permissions-for-an-organization).

Вы можете автоматизировать действия на основе активирующих событий для столбцов, которые содержит {% data variables.projects.projects_v1_board %}. Это позволит устранить некоторые ручные задачи, с помощью которых управляется {% data variables.projects.projects_v1_board %}. Например, можно настроить столбец "Текущие", чтобы все новые добавляемые проблемы или запросы на вытягивание, которые теперь содержит {% data variables.projects.projects_v1_board %}, автоматически перемещались в настроенный столбец. Дополнительные сведения: [Настройка автоматизации компонента "{% data variables.product.prodname_projects_v1 %}"](/articles/configuring-automation-for-project-boards).  

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

{% data variables.projects.projects_v1_board_caps %} с автоматизацией также помогает командам специалистов получить общее понимание того, какое назначение имеет {% data variables.projects.projects_v1_board %} и какой в команде процесс разработки, за счет создания стандартного рабочего процесса для определенных действий.

{% data reusables.project-management.resync-automation %}

## Параметры автоматизации

| Предустановка столбца | Варианты настройки |
| --- | --- |
| Действие | <ul><li>Переместить все недавно добавленные проблемы сюда</li><li>Переместить все недавно добавленные запросы на вытягивание сюда</li><li>Переместить все повторно открытые проблемы сюда</li><li>Переместить все повторно открытые запросы на вытягивание сюда</li></ul> |
| Выполняется | <ul><li>Переместить все недавно открытые запросы на вытягивание сюда</li><li>Переместить все повторно открытые проблемы сюда</li><li>Переместить все повторно открытые запросы на вытягивание сюда</li><li>Переместить все запросы на вытягивание, соответствующие минимальному количеству обязательных проверок базовой ветви, сюда</li><li>Переместить все запросы на вытягивание, больше не соответствующие минимальному количеству обязательных проверок базовой ветви, сюда</li></ul> |
| Готово | <ul><li>Переместить все закрытые проблемы сюда</li><li>Переместить все объединенные запросы на вытягивание сюда</li><li>Переместить все закрытые и не объединенные запросы на вытягивание сюда</li></ul> |

## Отслеживание хода выполнения проекта

Ваша {% data variables.projects.projects_v1_board %} позволяет отслеживать ход работы. Карточки в столбцах "Действие", "Выполняется" или "Готово" учитываются в общем ходе выполнения проекта. {% data reusables.project-management.project-progress-locations %}

Дополнительные сведения: [Отслеживание хода выполнения в компоненте "{% data variables.product.prodname_project_v1 %}"](/github/managing-your-work-on-github/tracking-progress-on-your-project-board).

## Дополнительные материалы
- [Настройка автоматизации компонента "{% data variables.product.prodname_projects_v1 %}"](/articles/configuring-automation-for-project-boards){% ifversion fpt or ghec %}
- [Копирование компонента "{% data variables.product.prodname_project_v1 %}"](/articles/copying-a-project-board){% endif %}
