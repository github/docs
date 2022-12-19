---
title: Organization 内のユーザが 2 要素認証を有効にしているかどうかを表示する
intro: どの Organization のオーナー、メンバー、および 外部コラボレーターが 2 要素認証を有効にしているかを確認できます。
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145130779'
---
{% note %}

**注:** {% ifversion fpt or ghec %}所有者、課金マネージャーおよび{% else %} および{% endif %}外部コラボレーターを含むすべてのメンバーに、2 要素認証を有効にするよう要求できます。 詳細については、「[Organization で 2 要素認証を要求する](/articles/requiring-two-factor-authentication-in-your-organization)」を参照してください。

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. 2 要素認証を有効または無効にした Organization のメンバー (Organization の所有者を含む) を表示するには、右側の **[2FA]** をクリックし、 **[有効]** または **[無効]** を選択します。
 ![filter-org-members-by-2fa](/assets/images/help/2fa/filter-org-members-by-2fa.png)
5. Organization の外部コラボレーターを表示するには、[ユーザー] タブの下の **[外部コラボレーター]** をクリックします。
![select-outside-collaborators](/assets/images/help/organizations/select-outside-collaborators.png)
6. 2 要素認証が有効または無効になっている外部コラボレーターを表示するには、右側の **[2FA]** をクリックし、 **[有効]** または **[無効]** を選択します。
![filter-outside-collaborators-by-2fa](/assets/images/help/2fa/filter-outside-collaborators-by-2fa.png)

## 参考資料

- 「[Organization 内のユーザーの役割を表示する](/articles/viewing-people-s-roles-in-an-organization)」
