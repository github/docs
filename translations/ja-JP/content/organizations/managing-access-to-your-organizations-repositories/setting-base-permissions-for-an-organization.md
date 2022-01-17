---
title: Organization の基本レベルの権限の設定
intro: Organization が所有しているリポジトリに対して、基本レベルの権限を設定できます。
permissions: Organization owners can set base permissions for an organization.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 基本の権限の設定
---

## Organization の基本レベルの権限について

Organization のリポジトリにアクセスするとき Organization の全メンバーに適用される基本レベルの権限を設定できます。 基本レベルの権限は、外部のコラボレーターには適用されません。

{% ifversion fpt or ghec %}デフォルトでは、Organization のメンバーは Organization のリポジトリに対する**読み取り**権限を付与されます。{% endif %}

If someone with admin access to an organization's repository grants a member a higher level of access for the repository, the higher level of access overrides the base permission.

{% ifversion ghec %}
If you've created a custom repository role with an inherited role that is lower access than your organization's base permissions, any members assigned to that role will default to the organization's base permissions rather than the inherited role. For more information, see "[Managing custom repository roles for an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)."
{% endif %}

## 基本レベルの権限の設定

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. [Base permissions] で、ドロップダウンを使用して新しい基本レベルの権限を選択します。 ![[base permissions] ドロップダウンから新しい権限レベルを選択する](/assets/images/help/organizations/base-permissions-drop-down.png)
6. 変更を確認します。 確定するために、[**Change default permission to PERMISSION**] をクリックします。 ![基本レベルの権限の変更を確認して確定する](/assets/images/help/organizations/base-permissions-confirm.png)

## 参考リンク

- "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- [外部コラボレーターを Organization のリポジトリに追加する](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)
