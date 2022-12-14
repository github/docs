---
title: Отправка пользователям приглашений присоединиться к вашей организации
intro: 'Вы можете пригласить всех, кто станет членом вашей организации, используя имя пользователя или адрес электронной почты для {% данных variables.location.product_location %}.'
permissions: Organization owners can invite users to join an organization.
redirect_from:
  - /articles/adding-or-inviting-members-to-a-team-in-an-organization
  - /articles/inviting-users-to-join-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/inviting-users-to-join-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Invite users to join
ms.openlocfilehash: bce3b77e63877314abff5520f113791e48856110
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099340'
---
## Сведения о приглашениях организации

Если у вашей организации есть платная подписка для каждого пользователя, неиспользуемая лицензия должна быть доступна, прежде чем вы сможете пригласить нового участника присоединиться к организации или восстановить бывшего участника организации. Дополнительные сведения см. в разделе [Сведения о стоимости подписки для каждого пользователя](/articles/about-per-user-pricing). 

{% data reusables.organizations.org-invite-scim %}

Если вашей организации требуется, чтобы участники использовали двухфакторную проверку подлинности, то перед тем, как принять приглашение, пользователям необходимо включить двухфакторную проверку подлинности. Дополнительные сведения см. в статьях [Настройка требования двухфакторной проверки подлинности в организации](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization) и [Защита учетной записи с помощью двухфакторной проверки подлинности (2FA)](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa).

{% ifversion fpt %}Организации, которые используют {% data variables.product.prodname_ghe_cloud %}{% else %}Вы{% endif %} можете реализовать SCIM для добавления, управления и удаления доступа участников организации к {% data variables.product.prodname_dotcom_the_website %} с помощью поставщика удостоверений. Дополнительные сведения см. в разделе [Сведения о SCIM для организации](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations){% ifversion fpt %} в документации по {% data variables.product.prodname_ghe_cloud %}.{% else %}.{% endif %}

## Отправка пользователям приглашений присоединиться к вашей организации

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %} {% data reusables.organizations.invite_to_org %} {% data reusables.organizations.choose-to-restore-privileges %} {% data reusables.organizations.choose-user-role %} {% data reusables.organizations.add-user-to-teams %} {% data reusables.organizations.send-invitation %} {% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}

## Дополнительные материалы
- [Добавление участников организации в команду](/articles/adding-organization-members-to-a-team)
