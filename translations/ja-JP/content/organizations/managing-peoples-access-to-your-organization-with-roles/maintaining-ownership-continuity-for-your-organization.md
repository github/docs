---
title: Organization の所有権の継続性を管理する
intro: Organization には、所有権で問題が起きないように複数の Organizationのオーナーを設定できます。
redirect_from:
  - /articles/changing-a-person-s-role-to-owner
  - /articles/changing-a-persons-role-to-owner
  - /github/setting-up-and-managing-organizations-and-teams/changing-a-persons-role-to-owner
  - /github/setting-up-and-managing-organizations-and-teams/managing-ownership-continuity-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/maintaining-ownership-continuity-for-your-organization
permissions: Organization owners can promote any member of an organization to an organization owner.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Maintain ownership continuity
ms.openlocfilehash: 636982e8985a79e617b01220df8a63256c874b70
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179560'
---
## Organization の所有権の継続性の管理について

{% data reusables.organizations.org-ownership-recommendation %}

Organizationのオーナーには、Organization に対する管理アクセス権限があります。 {% data reusables.organizations.new-org-permissions-more-info %}

{% note %}

**注:** Organization オーナーは、他の Organization メンバーやオーナーのロールを変更できます。 自分自身のロールを変更することはできません。 

{% endnote %}

{% ifversion enterprise-owner-join-org %} 組織がエンタープライズ アカウントに所有されている場合、エンタープライズの所有者は誰でも自分を組織の所有者にすることができます。 詳細については、「[Enterprise の Organization を管理する](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)」を参照してください。
{% endif %}

## Organizationのオーナーの指名

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. オーナーに昇格させる人 (一人または複数人) を選択します。
  ![2 人のメンバーが選択されたメンバー リスト](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. Team のメンバー一覧の上にあるドロップダウンメニューで **[ロールの変更]** をクリックします。
  ![メンバーを削除するオプションのあるドロップダウン メニュー](/assets/images/help/teams/user-bulk-management-options.png)
6. 新しいロールを選択して、 **[ロールの変更]** をクリックします。
  ![[所有者] ラジオボタン、[メンバー] ラジオボタン、[ロールの変更] ボタン](/assets/images/help/teams/select-and-confirm-new-role-bulk.png)
