---
title: Добавление пользователей в группы
redirect_from:
  - /enterprise/admin/articles/adding-teams
  - /enterprise/admin/articles/adding-or-inviting-people-to-teams
  - /enterprise/admin/guides/user-management/adding-or-inviting-people-to-teams
  - /enterprise/admin/user-management/adding-people-to-teams
  - /admin/user-management/adding-people-to-teams
intro: 'После создания команды администраторы организации могут добавлять пользователей из {% данных variables.location.product_location %} в команду и определять, к каким репозиториям у них есть доступ.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Teams
  - User account
ms.openlocfilehash: 50cbffa994b09c1b52f084350b9418c8f9b73713
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097753'
---
Каждая команда имеет собственные индивидуально определенные [разрешения на доступ к репозиториям, принадлежащим организации](/articles/permission-levels-for-an-organization).

- Члены с ролью владельца могут добавлять или удалять существующих членов организации из всех команд.
- Члены команд, которые предоставляют разрешения администратора, могут изменять только членство в команде и репозитории для этой команды.

## Создание команды

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.invite_to_team %} {% data reusables.organizations.review-team-repository-access %}

{% ifversion ghes %}

## Сопоставление команд с группами LDAP (например, с помощью синхронизации LDAP для проверки подлинности пользователей)

{% data reusables.enterprise_management_console.badge_indicator %}

Чтобы добавить нового члена в команду, синхронизированную с группой LDAP, добавьте пользователя в качестве члена группы LDAP или обратитесь к администратору LDAP.

{% endif %}
