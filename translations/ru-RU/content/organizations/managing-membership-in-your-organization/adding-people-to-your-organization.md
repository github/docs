---
title: Добавление пользователей в организацию
intro: 'Вы можете сделать любого пользователя участником вашей организации, используя его имя пользователя или адрес электронной почты {% data variables.product.product_name %}.'
redirect_from:
  - /articles/adding-people-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-people-to-your-organization
versions:
  ghes: '*'
  ghae: '*'
permissions: Organization owners can add people to an organization.
shortTitle: Add people to organization
ms.openlocfilehash: 4dc022539ca8458e20fe5c04eadf6f2b71b1735c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145109832'
---
{% ifversion not ghae %} Если ваша организация [требует от своих участников использования двухфакторной проверки подлинности](/articles/requiring-two-factor-authentication-in-your-organization), пользователи должны [включить двухфакторную проверку подлинности](/articles/securing-your-account-with-two-factor-authentication-2fa), прежде чем вы сможете добавить их в организации.
{% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %} {% data reusables.organizations.invite_to_org %} {% data reusables.organizations.choose-to-restore-privileges %} {% data reusables.organizations.choose-user-role %} {% data reusables.organizations.choose-user-license %} {% data reusables.organizations.add-user-to-teams %} {% data reusables.organizations.send-invitation %}

## Дополнительные материалы
- [Добавление участников организации в команду](/articles/adding-organization-members-to-a-team)
