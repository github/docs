---
title: 'Связывание репозитория с компонентом "{% data variables.product.prodname_project_v1 %}"'
intro: 'Принадлежащая вашей организации или личной учетной записи {% data variables.projects.projects_v1_board %} может иметь связанный репозиторий.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/linking-a-repository-to-a-project-board
  - /articles/linking-a-repository-to-a-project-board
  - /github/managing-your-work-on-github/linking-a-repository-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: Link repository to board
allowTitleToDifferFromFilename: true
ms.openlocfilehash: d0893b64551be80577547b9791e7a7ed6a432de0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110079'
---
{% data reusables.projects.project_boards_old %}

Любой пользователь может связывать репозитории, принадлежащие организации или личной учетной записи, с компонентом "{% data variables.projects.projects_v1_board %}", если эта {% data variables.projects.projects_v1_board %} дает ему разрешения на запись. Дополнительные сведения см. в статье [{% data variables.product.prodname_project_v1_caps %} и разрешения для организации](/articles/project-board-permissions-for-an-organization/) или [Уровни разрешений для компонентов "{% data variables.product.prodname_projects_v1 %}", принадлежащих пользователю](/articles/permission-levels-for-user-owned-project-boards/).

{% data reusables.project-management.link-repos-to-project-board %} Вы можете добавлять проблемы и запросы на вытягивание из любых несвязанных репозиториев, вводя в карточке URL-адрес проблемы или запроса на вытягивание. Дополнительные сведения: [Добавление проблем и запросов на вытягивание к компоненту "{% data variables.product.prodname_project_v1 %}"](/articles/adding-issues-and-pull-requests-to-a-project-board).

1. Должна быть выбрана {% data variables.projects.projects_v1_board %}, к которой требуется привязать репозиторий.
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %}
4. На левой боковой панели щелкните **Связанные репозитории**.
![Пункт меню "Связанные репозитории" на левой боковой панели](/assets/images/help/projects/project-board-linked-repositories-setting.png)
5. Щелкните **Связать репозиторий**.
![Кнопка "Связать репозиторий" на вкладке "Связанные репозитории"](/assets/images/help/projects/link-repository-button.png)
6. Найдите репозиторий, который хотите связать.
![Поле поиска в окне "Связать репозиторий"](/assets/images/help/projects/search-to-link-repository.png)
7. Щелкните **Связать**. Чтобы отменить связь, нажмите кнопку **Отменить связь**.
![Кнопка "Связать"](/assets/images/help/projects/link-button.png)

{% note %}

**Примечание.** Корпоративная или пользовательская {% data variables.projects.projects_v1_board %} может иметь только связанный репозиторий, в котором включены проблемы. То есть в репозитории должна быть вкладка "Проблемы" (по умолчанию в ответвленных репозиториях проблемы отключены).  Сведения о том, как включить или отключить проблемы в репозитории, см. в разделе [Отключение проблем для репозитория](/github/managing-your-work-on-github/disabling-issues).

{% endnote %}

## Дополнительные материалы

- [Сведения о компоненте "{% data variables.product.prodname_projects_v1 %}"](/articles/about-project-boards)
