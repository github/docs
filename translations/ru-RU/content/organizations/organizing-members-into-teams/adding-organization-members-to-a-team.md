---
title: Добавление участников организации в команду
intro: 'Пользователи с разрешениями владельца или участника группы могут добавлять участников организации в команды. Пользователи с разрешениями владельца могут также {% ifversion fpt or ghec %}пригласить сторонних пользователей присоединиться в качестве участников{% else %}добавить сторонних пользователей в{% endif %} команду и организацию.'
redirect_from:
  - /articles/adding-organization-members-to-a-team-early-access-program
  - /articles/adding-organization-members-to-a-team
  - /github/setting-up-and-managing-organizations-and-teams/adding-organization-members-to-a-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add members to a team
ms.openlocfilehash: 0a0dcd6b925c2209ae583197963db84ba881c7ff
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125539'
---
{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_members_tab %}
6. Над списком участников команды нажмите кнопку **Добавить участника**.
![Кнопка "Добавить участника"](/assets/images/help/teams/add-member-button.png) {% data reusables.organizations.invite_to_team %} {% data reusables.organizations.review-team-repository-access %}

{% ifversion fpt or ghec %}{% data reusables.organizations.cancel_org_invite %}{% endif %}

## Дополнительные материалы

- [Сведения о командах](/articles/about-teams)
- [Управление доступом команды к репозиторию организации](/articles/managing-team-access-to-an-organization-repository)
