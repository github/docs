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
shortTitle: 所有権の継続性の管理
---

## Organization の所有権の継続性の管理について

{% data reusables.organizations.org-ownership-recommendation %}

Organizationのオーナーには、Organization に対する管理アクセス権限があります。 {% data reusables.organizations.new-org-permissions-more-info %}

{% note %}

**ノート**: Organizationオーナーは、他のOrganizationメンバーやオーナーのロールを変更できます。 自分自身のロールを変更することはできません。

{% endnote %}

{% ifversion enterprise-owner-join-org %}
OrganizationがEnterpriseアカウントに所有されている場合、Enterpriseオーナーは誰でも自分をOrganizationのオーナーにすることができます。 詳しい情報については「[自身のEnterpriseが所有しているOrganization内での自分のロールの管理](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)」を参照してください。
{% endif %}

## Organizationのオーナーの指名

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
4. オーナーに昇格させる人 (一人または複数人) を選択します。 ![2 人のメンバーを選択した状態のメンバーリスト](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. Team のメンバー一覧の上にあるドロップダウンメニューで [**Change role**] をクリックします。 ![メンバーを削除するオプションのあるドロップダウンメニュー](/assets/images/help/teams/user-bulk-management-options.png)
6. 新しいロールを選択して、[**Change role**] をクリックします。 ![[Owner] ラジオボタン、[Member] ラジオボタン、[Change role] ボタン](/assets/images/help/teams/select-and-confirm-new-role-bulk.png)
