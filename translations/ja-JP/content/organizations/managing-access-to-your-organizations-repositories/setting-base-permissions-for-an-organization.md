---
title: Organization の基本レベルの権限の設定
intro: Organization が所有しているリポジトリに対して、基本レベルの権限を設定できます。
permissions: Organization のオーナーは、Organization に対して基本レベルの権限を設定できます。
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---

### Organization の基本レベルの権限について

Organization のリポジトリにアクセスするとき Organization の全メンバーに適用される基本レベルの権限を設定できます。 基本レベルの権限は、外部のコラボレーターには適用されません。

{% if currentVersion == "free-pro-team@latest" %}デフォルトでは、Organization のメンバーは Organization のリポジトリに対する**読み取り**権限を付与されます。{% endif %}

Organization のリポジトリに対する管理者権限があるユーザが、リポジトリに対してそれより高いレベルの権限を付与すると、基本レベルの権限は、付与された高い権限によってオーバーライドされます。

### 基本レベルの権限の設定

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. [Base permissions] で、ドロップダウンを使用して新しい基本レベルの権限を選択します。 ![[base permissions] ドロップダウンから新しい権限レベルを選択する](/assets/images/help/organizations/base-permissions-drop-down.png)
6. 変更を確認します。 確定するために、[**Change default permission to PERMISSION**] をクリックします。 ![基本レベルの権限の変更を確認して確定する](/assets/images/help/organizations/base-permissions-confirm.png)

### 参考リンク

- [Organization のリポジトリの権限レベル](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)
- [外部コラボレーターを Organization のリポジトリに追加する](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)
