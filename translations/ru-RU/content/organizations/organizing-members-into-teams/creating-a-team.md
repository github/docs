---
title: Создание команды
intro: Вы можете создавать независимые или вложенные команды для управления разрешениями репозитория и упоминаниями для групп людей.
redirect_from:
  - /articles/creating-a-team-early-access-program
  - /articles/creating-a-team
  - /github/setting-up-and-managing-organizations-and-teams/creating-a-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: c4ffe03e1108caae9bfed1171b08d8a046caeb76
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125528'
---
Только владельцы организации и координаторы родительской команды могут создать новую дочернюю команду под родительской командой. Владельцы также могут ограничивать разрешения на создание для всех команд в организации. Дополнительные сведения см. в разделе [Настройка разрешений для создания команды в организации](/articles/setting-team-creation-permissions-in-your-organization).

{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %} {% data reusables.organizations.team_description %} {% data reusables.organizations.create-team-choose-parent %} {% ifversion ghec %}
1. При необходимости, если ваша организация или корпоративная учетная запись использует синхронизацию команд или {% data variables.product.prodname_emus %}, подключите группу поставщиков удостоверений к команде.
    * Если в вашей организации используется {% data variables.product.prodname_emus %}, используйте раскрывающееся меню "Группы поставщиков удостоверений" и выберите одну группу поставщиков удостоверений для подключения к новой команде. Дополнительные сведения см в разделе [Управление членством в группах поставщиков удостоверений](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups).
    * Если в вашей организации или корпоративной учетной записи используется синхронизация групп, используйте раскрывающееся меню "Группы поставщиков удостоверений" и выберите не более пяти групп поставщиков удостоверений для подключения к новой команде. Дополнительные сведения см. в разделе [Синхронизация команды с группой поставщика удостоверений](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group).
    ![Раскрывающееся меню для выбора групп](/assets/images/help/teams/choose-an-idp-group.png) поставщиков удостоверений {% endif %} {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create_team %}
1. При необходимости [предоставьте команде доступ к репозиториям организации](/articles/managing-team-access-to-an-organization-repository).

## Дополнительные материалы

- [Сведения о командах](/articles/about-teams)
- [Изменение видимости команды](/articles/changing-team-visibility)
- [Перемещение команды по иерархии организации](/articles/moving-a-team-in-your-organization-s-hierarchy)
