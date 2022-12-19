---
title: Управление доступом команды к репозиторию организации
intro: 'Вы можете предоставить команде доступ к репозиторию, удалить права доступа команды к репозиторию или изменить уровень разрешений команды для репозитория.'
redirect_from:
  - /articles/managing-team-access-to-an-organization-repository-early-access-program
  - /articles/managing-team-access-to-an-organization-repository
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-access-to-an-organization-repository
  - /organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage team access
ms.openlocfilehash: 116f1b927d7956b927f206670f426ccbab3fe427
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099063'
---
Пользователи с правами администратора в репозитории могут управлять доступом команды к репозиторию. Координаторы команд могут удалить доступ команды к репозиторию, если команда имеет прямой доступ к репозиторию. Если доступ команды к репозиторию наследуется от родительской команды, координаторы могут сбросить текущее разрешение для соответствия разрешению родительской команды.

{% warning %}

**Предупреждения.**
- Вы можете изменить уровень разрешений команды, если команда имеет прямой доступ к репозиторию. Если доступ команды к репозиторию наследуется от родительской команды, необходимо изменить доступ родительской команды к репозиторию.
- При добавлении или удалении доступа к репозиторию для родительской команды каждая из ее дочерних команд также получит или потеряет доступ к репозиторию. Дополнительные сведения см. в статье "[Сведения о командах](/articles/about-teams)".

{% endwarning %}

## Предоставление команде доступа к репозиторию

{% ifversion fpt или ghec или ghes > 3.3 или ghae > 3,3 %} Вы можете предоставить команде доступ к репозиторию или изменить уровень доступа команды к репозиторию в параметрах репозитория. Дополнительные сведения см. в разделе [Управление командами и людьми, имеющими доступ к репозиторию](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#inviting-a-team-or-person). {% else %} {% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-repositories-tab %}
5. Над списком репозиториев нажмите кнопку **Добавить репозиторий**.
  ![Кнопка добавления репозитория](/assets/images/help/organizations/add-repositories-button.png)
6. Введите имя репозитория и нажмите кнопку **Добавить репозиторий в команду**.
  ![Поле поиска репозитория](/assets/images/help/organizations/team-repositories-add.png)
7. При необходимости в раскрывающемся меню справа от имени репозитория и выберите другой уровень разрешений для команды.
  ![Раскрывающийся список с уровнем доступа к репозиторию](/assets/images/help/organizations/team-repositories-change-permission-level.png) {% endif %}
## Удаление доступа команды к репозиторию

{% ifversion fpt или ghec или ghes > 3.3 или ghae > 3,3 %} Вы можете удалить доступ команды к репозиторию организации в параметрах репозитория. Дополнительные сведения см. в разделе [Управление командами и людьми, имеющими доступ к репозиторию](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#removing-access-for-a-team-or-person).

Если команда имеет прямой доступ к репозиторию, вы можете удалить доступ этой команды к репозиторию. Если доступ команды к репозиторию наследуется от родительской команды, необходимо удалить репозиторий из родительской команды, чтобы удалить его из дочерних команд.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% else %}

Можно удалить доступ команды к репозиторию, если команда имеет прямой доступ к репозиторию. Если доступ команды к репозиторию наследуется от родительской команды, необходимо удалить репозиторий из родительской команды, чтобы удалить его из дочерних команд.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-repositories-tab %}
5. Выберите один или несколько репозиториев, которые требуется удалить из команды.
  ![Список репозиториев команды с установленными флажками для некоторых репозиториев](/assets/images/help/teams/select-team-repositories-bulk.png)
6. Над списком репозиториев используйте раскрывающееся меню и нажмите щелкните **Удалить из команды**.
  ![Раскрывающееся меню с параметром, позволяющим удалить репозиторий из команды](/assets/images/help/teams/remove-team-repo-dropdown.png)
7. Просмотрите репозитории, которые будут удалены из команды, а затем нажмите **Удалить репозитории**.
  ![Модальное поле со списком репозиториев, к которым команда больше не будет иметь доступа](/assets/images/help/teams/confirm-remove-team-repos.png) {% endif %}
## Дополнительные материалы

- [Роли репозитория для организации](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
