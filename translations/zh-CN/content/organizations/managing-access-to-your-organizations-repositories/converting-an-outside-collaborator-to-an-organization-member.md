---
title: 将外部协作者转换为组织成员
intro: '如果你希望为组织存储库的外部协作者提供更广泛的组织内权限，可以{% ifversion fpt or ghec %}邀请他们成为组织的成员{% else %}让他们成为组织成员{% endif %}。'
redirect_from:
  - /articles/converting-an-outside-collaborator-to-an-organization-member
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-outside-collaborator-to-an-organization-member
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: 'Organization owners can {% ifversion fpt or ghec %}invite users to join{% else %}add users to{% endif %} an organization.'
topics:
  - Organizations
  - Teams
shortTitle: Convert collaborator to member
ms.openlocfilehash: bac55802407b46344c807798e4d8eade5f608e01
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145127480'
---
{% ifversion fpt or ghec %}如果组织采用付费的每用户订阅，则必须有未使用的许可证才可邀请新成员加入组织或恢复前组织成员。 有关详细信息，请参阅“[关于每用户定价](/articles/about-per-user-pricing)”。 {% data reusables.organizations.org-invite-expiration %}{% endif %}

{% ifversion not ghae %}如果组织[需要成员使用双因素身份验证](/articles/requiring-two-factor-authentication-in-your-organization)，则{% ifversion fpt or ghec %}你邀请的用户必须[启用双因素身份验证](/articles/securing-your-account-with-two-factor-authentication-2fa)，然后才可接受邀请。{% else %}用户必须[启用双因素身份验证](/articles/securing-your-account-with-two-factor-authentication-2fa)，然后才可将用户添加到组织。{% endif %} {% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people_tab_outside_collaborators %} {% ifversion fpt or ghec %}
5. 在要添加为成员的外部协作者姓名的右侧，使用 {% octicon "gear" aria-label="The gear icon" %} 下拉菜单，然后单击“邀请加入组织”。![邀请外部协作者加入组织](/assets/images/help/organizations/invite_outside_collaborator_to_organization.png){% else %}
5. 在要添加为成员的外部协作者姓名的右侧，单击“邀请加入组织”。![邀请外部协作者加入组织](/assets/images/enterprise/orgs-and-teams/invite_outside_collabs_to_org.png){% endif %} {% data reusables.organizations.choose-to-restore-privileges %} {% data reusables.organizations.choose-user-role-send-invitation %} {% ifversion fpt or ghec %} {% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %} {% endif %}

## 延伸阅读

- [将组织成员转换为外部协作者](/articles/converting-an-organization-member-to-an-outside-collaborator)
