---
title: 'Сведения о {% data variables.product.prodname_projects_v1 %}'
intro: '{% data variables.product.prodname_projects_v1_caps %} н {% data variables.product.product_name %} помогает упорядочивать и приоритизировать работу. Вы можете создавать {% data variables.projects.projects_v1_boards %} для работы конкретных компонентов, для комплексных дорожных карт и даже для контрольных списков выпусков. С помощью {% data variables.product.prodname_projects_v1 %} вы можете создавать настраиваемые рабочие процессы, которые соответствуют вашим потребностям.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-project-boards
  - /articles/about-projects
  - /articles/about-project-boards
  - /github/managing-your-work-on-github/about-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
ms.openlocfilehash: c14ee749a2e97bb9ef608e1b2d548098f18af0d0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107624'
---
{% data reusables.projects.project_boards_old %}

{% data variables.projects.projects_v1_boards_caps %} состоят из проблем, запросов на вытягивание и заметок, распределенных в виде карточек между столбцами по вашему выбору. Вы можете использовать перетаскивание или сочетания клавиш для изменения порядка карточек в столбце, перемещения карточек из столбца в столбец и изменения порядка столбцов.

Карточки {% data variables.projects.projects_v1_board_caps %} содержат важные метаданные для проблем и запросов на вытягивание, такие как метки, уполномоченные лица, состояние и имя создателя. {% data reusables.project-management.edit-in-project %}

Заметки в столбцах можно создавать в качестве напоминаний о задачах, ссылаться на проблемы и извлекать запросы из любого репозитория на {% данных variables.location.product_location %}, или добавлять сведения, связанные с {% данных variables.projects.projects_v1_board %}. Вы можете создать ссылочную карточку для другой {% data variables.projects.projects_v1_board %}, добавив ссылку в заметку. Если заметки недостаточно, ее можно преобразовать в проблему. Дополнительные сведения о преобразовании заметок в проблемы см. в разделе [Добавление заметок в {% data variables.product.prodname_project_v1 %}](/articles/adding-notes-to-a-project-board).

Типы досок проектов:

- **Пользовательская {% data variables.projects.projects_v1_board %}** может содержать проблемы и запросы на вытягивание из любого личного репозитория.
- **{% data variables.projects.projects_v1_board %} на уровне организации** может содержать проблемы и запросы на вытягивание из любого репозитория, который принадлежит организации.  {% data reusables.project-management.link-repos-to-project-board %} Дополнительные сведения см. в разделе [Связывание репозитория с {% data variables.product.prodname_project_v1 %}](/articles/linking-a-repository-to-a-project-board).
- Область действия **{% data variables.projects.projects_v1_board %} репозитория** ограничена проблемами и запросами на вытягивание в одном репозитории. Они также могут включать заметки, которые ссылаются на проблемы и запросы на вытягивание в других репозиториях.

## Создание и просмотр {% data variables.projects.projects_v1_boards %}

Чтобы создать {% data variables.projects.projects_v1_board %} для вашей организации, необходимо быть членом организации. Владельцы и пользователи организации с разрешениями администратора {% data variables.projects.projects_v1_board %} могут настраивать доступ к {% data variables.projects.projects_v1_board %}.

{% ifversion classic-project-visibility-permissions %}{% data reusables.projects.owners-can-limit-visibility-permissions %}{% endif %}

Если {% data variables.projects.projects_v1_board %}, принадлежащая организации, включает проблемы или запросы на вытягивание из репозитория, на просмотр которого у вас нет разрешения, карточка будет удалена.  Дополнительные сведения см. в разделе [Разрешения для {% data variables.product.prodname_project_v1_caps %} в организации](/articles/project-board-permissions-for-an-organization).

В представлении действий отображается недавняя история {% data variables.projects.projects_v1_board %}, например созданные или перемещенные между столбцами карточки. Чтобы получить доступ к представлению действий, щелкните **меню** и прокрутите вниз.

Чтобы найти определенные карточки на {% data variables.projects.projects_v1_board %} или просмотреть группу карточек, можно отфильтровать карточки {% data variables.projects.projects_v1_board %}. Дополнительные сведения см. в разделе [Фильтрация карточек на {% data variables.product.prodname_project_v1 %}](/articles/filtering-cards-on-a-project-board).

Чтобы упростить рабочий процесс и убирать завершенные задачи с {% data variables.projects.projects_v1_board %}, можно архивировать карточки. Дополнительные сведения см. в разделе [Архивация карточек на {% data variables.product.prodname_project_v1 %}](/articles/archiving-cards-on-a-project-board).

Если вы выполнили все задачи на {% data variables.projects.projects_v1_board %} или больше не хотите использовать {% data variables.projects.projects_v1_board %}, можно закрыть {% data variables.projects.projects_v1_board %}. Дополнительные сведения см. в разделе [Закрытие {% data variables.product.prodname_project_v1 %}](/articles/closing-a-project-board).

Вы также можете [отключить {% data variables.projects.projects_v1_boards %} в репозитории](/articles/disabling-project-boards-in-a-repository) или [отключить {% data variables.projects.projects_v1_boards %} в организации](/articles/disabling-project-boards-in-your-organization), если вы предпочитаете отслеживать работу по-другому.

{% data reusables.project-management.project-board-import-with-api %}

## Шаблоны для {% data variables.projects.projects_v1_boards %}

Шаблоны можно использовать для быстрой настройки новых {% data variables.projects.projects_v1_board %}. При использовании шаблона для создания {% data variables.projects.projects_v1_board %} новая доска будет включать столбцы, а также карточки с советами по использованию {% data variables.product.prodname_projects_v1 %}. Вы также можете выбрать шаблон с уже настроенной автоматизацией.

| Шаблон | Описание |
| --- | --- |
| Базовый канбан | Отслеживание задач с помощью столбцов "К выполнению", "Выполняется" и "Готово" |
| Автоматизированный канбан | Карточки автоматически перемещаются между столбцами "К выполнению", "Выполняется" и "Готово" | 
| Автоматизированный канбан с проверкой | Карточки автоматически перемещаются между столбцами "К выполнению", "Выполняется" и "Готово" с дополнительными триггерами для состояния проверки запроса на вытягивание |
| Рассмотрение ошибок | Рассмотрение и определение приоритета ошибок с помощью столбцов "К выполнению", "Высокий приоритет", "Низкий приоритет" и "Закрыто" |

Дополнительные сведения об автоматизации для {% data variables.product.prodname_projects_v1 %} см. в разделе [Сведения об автоматизации для {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards).

![{% data variables.product.prodname_project_v1 %} с базовым шаблоном канбана](/assets/images/help/projects/project-board-basic-kanban-template.png)

{% data reusables.project-management.copy-project-boards %}

## Дополнительные материалы

- [Создание {% data variables.product.prodname_project_v1 %}](/articles/creating-a-project-board)
- [Редактирование {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board){% ifversion fpt or ghec %}
- [Копирование {% data variables.product.prodname_project_v1 %}](/articles/copying-a-project-board){% endif %}
- [Добавление проблем и запросов на вытягивание в {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)
- [Разрешения для {% data variables.product.prodname_project_v1_caps %} в организации](/articles/project-board-permissions-for-an-organization)
- [Сочетания клавиш](/articles/keyboard-shortcuts/#project-boards)
