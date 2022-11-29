---
title: Назначение роли координатора команды участнику команды
intro: 'Вы можете предоставить участнику команды возможность управлять членством в команде и параметрами, назначив роль ответственного за команду.'
redirect_from:
  - /articles/giving-team-maintainer-permissions-to-an-organization-member-early-access-program
  - /articles/giving-team-maintainer-permissions-to-an-organization-member
  - /github/setting-up-and-managing-organizations-and-teams/giving-team-maintainer-permissions-to-an-organization-member
  - /organizations/managing-peoples-access-to-your-organization-with-roles/giving-team-maintainer-permissions-to-an-organization-member
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Team maintainers
permissions: Organization owners can promote team members to team maintainers.
ms.openlocfilehash: 2408d8c12718375d777432be03d6e19f7d6d04b5
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125536'
---
## Сведения о координаторах команд

Пользователи с ролью координатора команды могут управлять членством в команде и параметрами.

- [Изменение имени и описания команды](/articles/renaming-a-team)
- [Изменение видимости команды](/articles/changing-team-visibility)
- [Запрос на добавление дочерней команды](/articles/requesting-to-add-a-child-team)
- [Запрос на добавление или изменение родительской команды](/articles/requesting-to-add-or-change-a-parent-team)
- [Настройка изображения профиля команды](/articles/setting-your-team-s-profile-picture)
- [Редактирование обсуждений в команде](/articles/managing-disruptive-comments/#editing-a-comment)
- [Удаление обсуждений в команде](/articles/managing-disruptive-comments/#deleting-a-comment)
- [Добавление участников организации в команду](/articles/adding-organization-members-to-a-team)
- [Удаление участников организации из команды](/articles/removing-organization-members-from-a-team)
- Удалять доступ группы к репозиториям
- [Управление назначением проверки кода для команды](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team){% ifversion fpt or ghec %}
- [Управление запланированными напоминаниями для запросов на вытягивание](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team){% endif %}

## Продвижение участника организации до координатора команды

Чтобы повысить уровень участника организации до координатора команды, он должен участником членом команды.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_members_tab %}
4. Выберите одного или нескольких пользователей, которых нужно сделать координаторами команды.
![Флажок рядом с членом организации](/assets/images/help/teams/team-member-check-box.png)
5. Над списком участников команды откройте раскрывающееся меню и нажмите кнопку **Изменить роль...** . ![Раскрывающееся меню с параметром изменения роли](/assets/images/help/teams/bulk-edit-drop-down.png)
6. Выберите новую роль и нажмите кнопку **Изменить роль**.
![Переключатели для ролей координатора или участника](/assets/images/help/teams/team-role-modal.png)
