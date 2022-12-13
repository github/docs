---
title: Преобразование стороннего участника совместной работы в участника организатора
intro: Чтобы предоставить стороннему участнику совместной работы в репозиториях вашей организации расширенные разрешения в пределах организации, можно {% ifversion fpt or ghec %}пригласить его стать участником {% else %}сделать его участником{% endif %} организации.
redirect_from:
- /articles/converting-an-outside-collaborator-to-an-organization-member
- /github/setting-up-and-managing-organizations-and-teams/converting-an-outside-collaborator-to-an-organization-member
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: Organization owners can {% ifversion fpt or ghec %}invite users to join{% else %}add users to{% endif %} an organization.
topics:
- Organizations
- Teams
shortTitle: Convert collaborator to member
ms.openlocfilehash: bac55802407b46344c807798e4d8eade5f608e01
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145135005"
---
{% ifversion fpt or ghec %} Если у вашей организации есть платная подписка для каждого пользователя, неиспользуемая лицензия должна быть доступна, прежде чем вы сможете пригласить нового участника присоединиться к организации или восстановить бывшего участника организации. Дополнительные сведения см. в разделе [Сведения о стоимости подписки для каждого пользователя](/articles/about-per-user-pricing). {% data reusables.organizations.org-invite-expiration %} {% endif %}

{% ifversion not ghae %} Если ваша организации [ требуется, чтобы участники использовали двухфакторную проверку подлинности](/articles/requiring-two-factor-authentication-in-your-organization), пользователи {% ifversion fpt or ghec %}, которых вы приглашаете, должны [включить двухфакторную проверку подлинности](/articles/securing-your-account-with-two-factor-authentication-2fa), прежде чем они смогут принять приглашение.{% else %}должны [включить двухфакторную проверку подлинности](/articles/securing-your-account-with-two-factor-authentication-2fa), прежде чем вы сможете добавить их в организацию.{% endif %} {% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people_tab_outside_collaborators %} {% ifversion fpt or ghec %}
5. Справа от имени стороннего участника совместной работы, которого нужно сделать участником, используйте раскрывающееся меню {% octicon "gear" aria-label="The gear icon" %} и щелкните **Пригласить в организацию**.![Приглашение сторонних участников совместной работы в организацию](/assets/images/help/organizations/invite_outside_collaborator_to_organization.png) {% else %}
5. Справа от имени стороннего участника совместной работы, которого требуется сделать участником, выберите **Пригласить в организацию**.![Пригласить сторонних участников совместной работы в организацию](/assets/images/enterprise/orgs-and-teams/invite_outside_collabs_to_org.png) {% endif %} {% data reusables.organizations.choose-to-restore-privileges %} {% data reusables.organizations.choose-user-role-send-invitation %} {% ifversion fpt or ghec %} {% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %} {% endif %}

## Дополнительные материалы

- [Преобразование участника организации во внешнего участника совместной работы](/articles/converting-an-organization-member-to-an-outside-collaborator)
