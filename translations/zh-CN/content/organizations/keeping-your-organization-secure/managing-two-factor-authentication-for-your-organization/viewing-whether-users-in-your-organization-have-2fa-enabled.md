---
title: 查看组织中的用户是否已启用 2FA
intro: 您可以查看哪些组织所有者、成员和外部协作者已启用双因素身份验证。
redirect_from:
  - /articles/viewing-whether-users-in-your-organization-have-2fa-enabled
  - /github/setting-up-and-managing-organizations-and-teams/viewing-whether-users-in-your-organization-have-2fa-enabled
  - /organizations/keeping-your-organization-secure/viewing-whether-users-in-your-organization-have-2fa-enabled
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: View 2FA usage
ms.openlocfilehash: 20659ea2e1979123b15d9ee5d333655ad188b2e9
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145127504'
---
{% note %}

注意：可以要求所有成员{% ifversion fpt or ghec %}（包括组织中的所有者、帐单管理员和{% else %}和{% endif %}外部协作者）均启用双因素身份验证。 有关详细信息，请参阅“[要求在组织中进行双因素身份验证](/articles/requiring-two-factor-authentication-in-your-organization)”。

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. 若要查看组织成员（包括已启用或禁用双因素身份验证的组织所有者），请在右侧单击“2FA”，然后选择“启用”或“禁用”  。
 ![filter-org-members-by-2fa](/assets/images/help/2fa/filter-org-members-by-2fa.png)
5. 若要查看组织中的外部协作者，请在“人员”选项卡下单击“外部协作者”。
![select-outside-collaborators](/assets/images/help/organizations/select-outside-collaborators.png)
6. 若要查看哪些外部协作者已启用或禁用双因素身份验证，请在右侧单击“2FA”，然后选择“启用”或“禁用”  。
![filter-outside-collaborators-by-2fa](/assets/images/help/2fa/filter-outside-collaborators-by-2fa.png)

## 延伸阅读

- [查看组织中人员的角色](/articles/viewing-people-s-roles-in-an-organization)
