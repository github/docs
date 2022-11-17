---
title: 'Фильтрация карточек компонента "{% data variables.product.prodname_project_v1 %}"'
intro: 'Вы можете фильтровать карточки, которые содержит {% data variables.projects.projects_v1_board %}, чтобы найти определенные карточки или просмотреть их подмножество.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/filtering-cards-on-a-project-board
  - /articles/filtering-cards-on-a-project-board
  - /github/managing-your-work-on-github/filtering-cards-on-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Filter cards on {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: f203785a6fc18dc5f67b2ae62934aa10c2f6e8b8
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109559'
---
{% data reusables.projects.project_boards_old %}

Щелкните любого уполномоченного, веху или метку на карточке, и {% data variables.projects.projects_v1_board %} будет отфильтрована по выбранному квалификатору. Чтобы очистить поиск, можно снова щелкнуть того же уполномоченного, веху или метку.

Кроме того, каждая {% data variables.projects.projects_v1_board %} содержит вверху панель поиска "Фильтрация карточек". Карточки можно фильтровать с помощью следующих квалификаторов поиска в любом их сочетании или просто ввести нужный текст.

- Фильтрация карточек по автору с помощью `author:USERNAME`
- Фильтрация карточек по уполномоченному с помощью `assignee:USERNAME` или `no:assignee`
- Фильтрация карточек по метке с помощью `label:LABEL`, `label:"MULTI-WORD LABEL NAME"` или `no:label`
- Фильтрация по вехе с помощью `milestone:MY-MILESTONE`
- Фильтрация карточек по состоянию с помощью `state:open`, `state:closed` или `state:merged`
- Фильтрация по состоянию просмотра с помощью `review:none`, `review:required`, `review:approved` или `review:changes_requested`
- Фильтрация по состоянию проверки с помощью `status:pending`, `status:success` или `status:failure`
- Фильтрация карточек по типу с помощью `type:issue`, `type:pr` или `type:note`
- Фильтрация карточек по состоянию и типу с помощью `is:open`, `is:closed` или `is:merged` и `is:issue`, `is:pr`или `is:note`
- Фильтрация карточек по проблемам, связанным с запросом на вытягивание, по закрывающей ссылке путем использования `linked:pr`
- Фильтрация карточек, которые содержит {% data variables.projects.projects_v1_board %} уровня организации, по репозиториям с помощью `repo:ORGANIZATION/REPOSITORY`

1. Должна быть выбрана {% data variables.projects.projects_v1_board %}, содержащая карточки, которые требуется отфильтровать.
2. Над столбцами карточки проекта щелкните панель поиска "Фильтр карточек" и введите поисковый запрос, чтобы отфильтровать карточки.
![Панель поиска "Фильтр карточек"](/assets/images/help/projects/filter-card-search-bar.png)

{% tip %}

**Совет.** Можно перетащить отфильтрованные карточки или использовать сочетания клавиш для перемещения их между столбцами. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

{% endtip %}

## Дополнительные материалы

- [Сведения о компоненте "{% data variables.product.prodname_projects_v1 %}"](/articles/about-project-boards)
- [Добавление проблем и запросов на вытягивание к компоненту "{% data variables.product.prodname_project_v1 %}"](/articles/adding-issues-and-pull-requests-to-a-project-board)
- [Добавление заметок к компоненту "{% data variables.product.prodname_project_v1 %}"](/articles/adding-notes-to-a-project-board)
