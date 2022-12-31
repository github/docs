---
title: Запрос на добавление дочерней команды
intro: 'Если у вас есть разрешения ответственного за команду, вы можете запросить вложение существующей команды в вашу команду в иерархии организации.'
redirect_from:
  - /articles/requesting-to-add-a-child-team
  - /github/setting-up-and-managing-organizations-and-teams/requesting-to-add-a-child-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add a child team
ms.openlocfilehash: e8012645bb4cdedc2a3aa8f7196adc18253a2600
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '147878962'
---
При запросе на добавление команды в качестве дочерней команды запрос отправляется в службу поддержки дочерних команд. Когда специалист по поддержке дочерних команд утвердит ваш запрос, дочерняя команда будет вложена в родительскую команду в иерархии вашей организации.

Если вы являетесь владельцем организации или у вас есть разрешения на поддержку команд и в дочерней, и в родительской команде, вы можете добавить дочернюю команду без запроса утверждения или изменить родительскую команду для дочерней команды на странице параметров дочерней команды. Дополнительные сведения см. в разделе [Перемещение команды в иерархии организации](/articles/moving-a-team-in-your-organization-s-hierarchy).

{% data reusables.organizations.child-team-inherits-permissions %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.teams %}
4. В списке команд щелкните имя команды, в которую требуется добавить дочернюю команду.
  ![Список команд в организации](/assets/images/help/teams/click-team-name.png)
5. В верхней части страницы команды выберите {% octicon "people" aria-label="Значок «Люди»" %} **Команды**.
  ![Вкладка «Команды» на странице команды](/assets/images/help/teams/team-teams-tab.png)
6. Щелкните **Добавить команду**.
  ![Добавление кнопки команды на странице команды](/assets/images/help/teams/add-a-team.png)
7. Введите имя команды, которую вы хотите добавить в качестве дочерней команды, и выберите ее в раскрывающемся списке.
  ![Текстовое поле для ввода и раскрывающееся меню для выбора имени дочерней команды](/assets/images/help/teams/type-child-team-name.png) {% data reusables.repositories.changed-repository-access-permissions %}
9. Нажмите кнопку **Подтвердить изменения**, чтобы отправить запрос на добавление дочерней команды.
  ![Модальное поле с информацией об изменениях разрешений на доступ к репозиторию](/assets/images/help/teams/confirm-new-parent-team.png)

## Дополнительные материалы

- [Сведения о командах](/articles/about-teams)
- [Перемещение команды по иерархии организации](/articles/moving-a-team-in-your-organization-s-hierarchy)
- [Запрос на добавление или изменение родительской команды](/articles/requesting-to-add-or-change-a-parent-team)
