---
title: 外部コラボレーターを Organization メンバーに変換する
intro: Organization のリポジトリ上の外部コラボレーターに、Organization 内において、より幅広い権限を与えたい場合、Organization {% ifversion fpt or ghec %}のメンバーとして招待{% else %}のメンバーを追加{% endif %}することができます。
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145130731"
---
{% ifversion fpt or ghec %} Organization がユーザーごとのサブスクリプションの有料プランを利用している場合、新しいメンバーを招待して参加させる、または Organization の以前のメンバーを復帰させる前に、未使用のライセンスが使用可能になっている必要があります。 詳細については、「[ユーザーごとの価格について](/articles/about-per-user-pricing)」を参照してください。 {% data reusables.organizations.org-invite-expiration %}{% endif %}

{% ifversion not ghae %} Organization で [メンバーに 2 要素認証の使用を要求している](/articles/requiring-two-factor-authentication-in-your-organization)場合、招待するユーザーは、{% ifversion fpt or ghec %}招待を受け入れる前に [2 要素認証を有効にする](/articles/securing-your-account-with-two-factor-authentication-2fa)必要があります。{% else %}Organization に追加する前に、[2 要素認証を有効にする](/articles/securing-your-account-with-two-factor-authentication-2fa)必要があります。{% endif %}{% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people_tab_outside_collaborators %} {% ifversion fpt or ghec %}
5. メンバーにしたい外部コラボレーターの名前の右側にある {% octicon "gear" aria-label="The gear icon" %} ドロップダウン メニューを使用し、 **[Organization に招待]** をクリックします。![外部コラボレーターを Organization に招待する](/assets/images/help/organizations/invite_outside_collaborator_to_organization.png) {% else %}
5. メンバーにしたい外部コラボレーターの名前の右側にある **[Organization に招待]** をクリックします。![外部コラボレーターを Organization に招待する](/assets/images/enterprise/orgs-and-teams/invite_outside_collabs_to_org.png) {% endif %} {% data reusables.organizations.choose-to-restore-privileges %} {% data reusables.organizations.choose-user-role-send-invitation %} {% ifversion fpt or ghec %} {% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %} {% endif %}

## 参考資料

- 「[Organization メンバーを外部コラボレーターに変換する](/articles/converting-an-organization-member-to-an-outside-collaborator)」
