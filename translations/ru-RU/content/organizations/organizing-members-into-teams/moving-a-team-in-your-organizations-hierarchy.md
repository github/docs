---
title: Перемещение команды по иерархии организации
intro: 'Участники команды и владельцы организации могут вложить команду в родительскую команду, изменить или удалить родительскую команду для вложенной команды.'
redirect_from:
  - /articles/changing-a-team-s-parent
  - /articles/moving-a-team-in-your-organization-s-hierarchy
  - /articles/moving-a-team-in-your-organizations-hierarchy
  - /github/setting-up-and-managing-organizations-and-teams/moving-a-team-in-your-organizations-hierarchy
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Move a team
ms.openlocfilehash: 205ab40d04d613c54b498b9712e5f199e1433558
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125504'
---
Владельцы организации могут изменить родитель любой команды. Ответственные за команду могут изменить родитель команды, если они обслуживают как дочернюю команду, так и родительскую команду. Ответственные за команду без разрешений на обслуживание в дочерней команде могут запросить добавление родительской или дочерней команды. Дополнительные сведения см. в разделах [Запрос на добавление или изменение родительской команды](/articles/requesting-to-add-or-change-a-parent-team) и [Запрос на добавление дочерней команды](/articles/requesting-to-add-a-child-team).

{% data reusables.organizations.child-team-inherits-permissions %}

{% tip %}

**Советы**
- Изменить родитель команды на секретную команду невозможно. Дополнительные сведения см. в статье "[Сведения о командах](/articles/about-teams)".
- Вложить родительскую команду в одну из ее дочерних команд не удастся.

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.teams %}
4. В списке команд щелкните имя команды, родитель которой вы хотите изменить.
  ![Список команд организации](/assets/images/help/teams/click-team-name.png) {% data reusables.organizations.team_settings %}
6. Используйте раскрывающееся меню, чтобы выбрать родительскую команду или удалить существующий родитель, выберите **Очистить выбранное значение**.
  ![Раскрывающееся меню со списком существующих команды в организации](/assets/images/help/teams/choose-parent-team.png)
7. Нажмите кнопку **Обновить**.
{% data reusables.repositories.changed-repository-access-permissions %}
9. Нажмите кнопку **Подтвердить новую родительскую команду**.
  ![Модальное поле с информацией об изменениях разрешений на доступ к репозиторию](/assets/images/help/teams/confirm-new-parent-team.png)

## Дополнительные материалы

- [Сведения о командах](/articles/about-teams)
