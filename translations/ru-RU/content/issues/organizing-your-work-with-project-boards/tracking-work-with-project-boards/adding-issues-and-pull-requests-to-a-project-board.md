---
title: 'Добавление проблем и запросов на вытягивание в {% data variables.product.prodname_project_v1 %}'
intro: 'Вы можете добавить проблемы и запросы на вытягивание на панель {% data variables.projects.projects_v1_board %} в виде карточек и рассмотреть их в столбцах.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board
  - /articles/adding-issues-and-pull-requests-to-a-project
  - /articles/adding-issues-and-pull-requests-to-a-project-board
  - /github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Add issues & PRs to {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 3adfb2c337a417b8e4f932ab9ae9860939217c6c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110078'
---
{% data reusables.projects.project_boards_old %}

Вы можете добавить карточки проблем и запросов на вытягивание на панель {% data variables.projects.projects_v1_board %} следующими способами:
- Перетаскивая карточки из раздела **Рассмотрение** на боковой панели.
- Вводя в карточке URL-адрес проблемы или запроса на вытягивание.
- Поиск проблем или запросов на вытягивание на боковой панели поиска {% data variables.projects.projects_v1_board %}.

В каждый столбец проекта можно поместить не более 2500 карточек. Если количество карточек в столбце достигло максимума, больше нельзя перемещать карточки в этот столбец.

![Курсор перемещает карточку проблемы с боковой рассмотрения в столбец доски проекта](/assets/images/help/projects/add-card-from-sidebar.gif)

{% note %}

**Примечание.** Вы также можете добавлять на доску вашего проекта заметки для напоминания о задачах или ссылок на проблемы и запросы на вытягивание из любого репозитория в {% data variables.product.product_name %}, или чтобы добавить связанные сведения на {% data variables.projects.projects_v1_board %}. Дополнительные сведения см. в разделе [Добавление заметок на доску проекта](/articles/adding-notes-to-a-project-board).

{% endnote %}

{% data reusables.project-management.edit-in-project %}

{% data reusables.project-management.link-repos-to-project-board %} Когда вы ищете проблемы и запросы на вытягивание, чтобы добавить на {% data variables.projects.projects_v1_board %}, поиск автоматически ограничивается вашими связанными репозиториями. Эти квалификаторы можно удалить для поиска во всех репозиториях организации. Дополнительные сведения см. в разделе [Связывание репозитория с доской проекта](/articles/linking-a-repository-to-a-project-board).

## Добавление проблем и запросов на вытягивание на {% data variables.projects.projects_v1_board %}

1. Перейдите к {% data variables.projects.projects_v1_board %}, куда вы хотите добавлять проблемы и запросы на вытягивание.
2. В {% data variables.projects.projects_v1_board %} щелкните {% octicon "plus" aria-label="The plus icon" %} **Добавить карточки**.
![Кнопка "Добавить карточки"](/assets/images/help/projects/add-cards-button.png)
3. Найдите проблемы и запросы на вытягивание для добавления в {% data variables.projects.projects_v1_board %} с помощью квалификаторов поиска. Дополнительные сведения о квалификаторах поиска, которые вы можете использовать, см. в разделе [Поиск проблем](/articles/searching-issues).
  ![Поиск проблем и запросов на вытягивание](/assets/images/help/issues/issues_search_bar.png)

  {% tip %}

  **Советы**
    - Вы также можете добавить проблему или запрос на вытягивание, введя URL-адрес в карточке.
    - Если вы работаете над определенной функцией, то можно применить метку к каждой связанной с этой функцией проблемой или запросом на вытягивание, а затем с легкостью добавить карточки на {% data variables.projects.projects_v1_board %}, выполнив поиск по имени метки. Дополнительные сведения см. в разделе [Применение меток к проблемам и запросам на вытягивание](/articles/applying-labels-to-issues-and-pull-requests).

  {% endtip %}
4. Из отфильтрованного списка проблем и запросов на вытягивание перетащите карточку, которую хотите добавить на {% data variables.projects.projects_v1_board %}, в правильный столбец. Вы также можете перемещать карточки с помощью сочетаний клавиш. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% tip %}

    **Совет.** Вы можете использовать перетаскивание или сочетания клавиш для изменения порядка карточек и перемещения их между столбцами. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% endtip %}

## Добавление проблем и запросов на вытягивание на {% data variables.projects.projects_v1_board %} из боковой панели

1. В правой части запроса на вытягивание или проблемы нажмите кнопку **Проекты {% octicon "gear" aria-label="The Gear icon" %}** .
  ![Кнопка доски проекта на боковой панели](/assets/images/help/projects/sidebar-project.png)
2. Перейдите на вкладку **Последние**, **Репозиторий**, **Пользователь** или **Организация** для {% data variables.projects.projects_v1_board %}, на которую вы хотите добавить карточки.
  ![Вкладки "Последние", "Репозиторий" и "Организация"](/assets/images/help/projects/sidebar-project-tabs.png)
3. Введите имя проекта в поле **Фильтровать проекты**.
  ![Поле поиска доски проекта](/assets/images/help/projects/sidebar-search-project.png)
4. Выберите одну или несколько {% data variables.projects.projects_v1_boards %}, куда вы хотите добавить проблему или запрос на вытягивание.
  ![Выбранная доска проекта](/assets/images/help/projects/sidebar-select-project.png)
5. Щелкните {% octicon "triangle-down" aria-label="The down triangle icon" %}, а затем щелкните столбец, в который хотите поместить проблему или запрос на вытягивание. Карточка переместится в нижнюю часть выбранного столбца {% data variables.projects.projects_v1_board %}.
  ![Меню перемещения карточки в столбец](/assets/images/help/projects/sidebar-select-project-board-column-menu.png)

## Дополнительные материалы

- [Сведения о {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)
- [Редактирование {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board)
- [Фильтрация карточек на {% data variables.product.prodname_project_v1 %}](/articles/filtering-cards-on-a-project-board)
