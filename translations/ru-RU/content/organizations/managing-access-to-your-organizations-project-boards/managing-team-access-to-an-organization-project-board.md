---
title: 'Управление доступом команды к {% data variables.product.prodname_project_v1 %} организации'
intro: 'Как владелец организации или администратор {% data variables.projects.projects_v1_board %} вы можете предоставить команде доступ к {% data variables.projects.projects_v1_board %}, принадлежащим вашей организации.'
redirect_from:
  - /articles/managing-team-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-access-to-an-organization-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage team access
allowTitleToDifferFromFilename: true
ms.openlocfilehash: c49fab76bbf286f865e3845356213bc1af18b20a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109456'
---
{% data reusables.projects.project_boards_old %}

{% warning %}

**Предупреждения.**
- Вы можете изменить уровень разрешений команды, если команда имеет прямой доступ к {% data variables.projects.projects_v1_board %}. Если доступ команды к {% data variables.projects.projects_v1_board %} наследуется от родительской команды, необходимо изменить доступ родительской команды к {% data variables.projects.projects_v1_board %}.
- При добавлении или удалении доступа к {% data variables.projects.projects_v1_board %} для родительской команды каждая из дочерних команд этого родителя также получит или потеряет доступ к {% data variables.projects.projects_v1_board %}. Дополнительные сведения см. в статье "[Сведения о командах](/articles/about-teams)".

{% endwarning %}

## Предоставление группе доступа к {% data variables.projects.projects_v1_board %}

Вы можете предоставить всей команде одинаковый уровень разрешений для {% data variables.projects.projects_v1_board %}.

{% note %}

**Примечание.** {% data reusables.project-management.cascading-permissions %} Например, если владелец организации предоставил команде разрешения на чтение для {% data variables.projects.projects_v1_board %}, и администратор {% data variables.projects.projects_v1_board %} предоставляет одному из участников команды права администратора для этой панели, как для отдельного участника совместной работы, то такой пользователь будет иметь права администратора для {% data variables.projects.projects_v1_board %}. Дополнительные сведения см. в разделе [Разрешения для {% data variables.product.prodname_project_v1_caps %} в организации](/articles/project-board-permissions-for-an-organization).

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Щелкните **Проекты (классические)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %}
8. На левой боковой панели нажмите **Команды**.
9. Чтобы добавить команду, нажмите кнопку **Добавить команду: выбрать команду**. Затем выберите команду из раскрывающегося меню или найдите команду, которую вы хотите добавить.
 ![Добавление раскрывающегося меню команды со списком команд в организации](/assets/images/help/projects/add-a-team.png)
10. Рядом с именем команды используйте раскрывающееся меню, чтобы выбрать нужный уровень разрешений: **Чтение**, **Запись** или **Администратор**. ![Раскрывающееся меню разрешений команды, где приведены разрешения на чтение, запись и разрешения администратора](/assets/images/help/projects/org-project-team-choose-permissions.png)

## Настройка доступа команды к {% data variables.projects.projects_v1_board %}

Если доступ команды к {% data variables.projects.projects_v1_board %} наследуется от родительской команды, необходимо изменить доступ родительской команды к {% data variables.projects.projects_v1_board %}, чтобы обновить доступ для дочерней команды.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
4. Над беседой команды нажмите {% octicon "project" aria-label="The Projects icon" %} **Проекты**.
  ![Вкладка репозиториев команды](/assets/images/help/organizations/team-project-board-button.png)
5. Чтобы изменить уровни разрешений, используйте раскрывающийся список справа от {% data variables.projects.projects_v1_board %}, которую требуется обновить. Чтобы удалить {% data variables.projects.projects_v1_board %}, щелкните **{% octicon "trash" aria-label="The trash icon" %}** .
  ![Кнопка "Удаление панели проекта из корзины команды"](/assets/images/help/organizations/trash-button.png)

{% ifversion projects-v2-add-to-team %}

## Дополнительные материалы

- [Добавление проекта в команду](/issues/planning-and-tracking-with-projects/managing-your-project/adding-your-project-to-a-team)


{% endif %}
