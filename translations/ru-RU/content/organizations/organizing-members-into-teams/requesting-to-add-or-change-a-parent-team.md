---
title: Запрос на добавление или изменение родительской команды
intro: 'Если у вас есть разрешения ответственного за команду для данной команды, вы можете запросить вложение команды в родительскую команду в иерархии организации.'
redirect_from:
  - /articles/requesting-to-add-or-change-a-parent-team
  - /github/setting-up-and-managing-organizations-and-teams/requesting-to-add-or-change-a-parent-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add or change parent team
ms.openlocfilehash: d277f8177e6a09e308792b1f7c01832851aec878
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880471'
---
При запросе на добавление или изменение команды в качестве родительской команды запрос отправляется в службу поддержки родительских команд. Когда специалист по поддержке родительских команд утвердит ваш запрос, ваша команда будет вложена в родительскую команду в качестве дочерней в иерархии вашей организации.

Если вы являетесь владельцем организации или у вас есть разрешения на поддержку команд и в дочерней, и в родительской команде, вы можете добавить родительскую команду без запроса утверждения или изменить родительскую команду своей команды на странице параметров своей команды. Дополнительные сведения см. в разделе [Перемещение команды в иерархии организации](/articles/moving-a-team-in-your-organization-s-hierarchy).

{% data reusables.organizations.child-team-inherits-permissions %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.teams %}
4. В списке команд щелкните имя команды, которую следует вложить в родительскую команду.
  ![Список команд организации](/assets/images/help/teams/click-team-name.png) {% data reusables.organizations.team_settings %}
6. В разделе "Родительская команда" в раскрывающемся меню "Выберите родительскую команду" выберите имя новой родительской команды.
  ![Раскрывающееся меню со списком существующих команды в организации](/assets/images/help/teams/choose-parent-team.png)
7. Нажмите кнопку **Сохранить изменения**.
{% data reusables.repositories.changed-repository-access-permissions %}
9. Нажмите кнопку **Подтвердить изменения**, чтобы отправить запрос на добавление или изменение родительской команды для вашей команды.
  ![Модальное поле с информацией об изменениях разрешений на доступ к репозиторию](/assets/images/help/teams/confirm-new-parent-team.png)

## Дополнительные материалы

- [Сведения о командах](/articles/about-teams)
- [Перемещение команды по иерархии организации](/articles/moving-a-team-in-your-organization-s-hierarchy)
- [Запрос на добавление дочерней команды](/articles/requesting-to-add-a-child-team)
