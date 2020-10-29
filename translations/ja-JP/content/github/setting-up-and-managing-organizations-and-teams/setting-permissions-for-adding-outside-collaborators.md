---
title: 外部のコラボレーターを追加するための権限を設定する
intro: 'Organization のデータを保護し、Organization 内で使用されている有料ライセンスの数が無駄遣いされないようにするために、外部コラボレーターを Organization のリポジトリに招待することをオーナーのみに許可できます。'
product: '{% data reusables.gated-features.restict-add-collaborator %}'
redirect_from:
  - /articles/restricting-the-ability-to-add-outside-collaborators-to-organization-repositories/
  - /articles/setting-permissions-for-adding-outside-collaborators
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

リポジトリに対する管理者権限を持つ Organization のオーナーとメンバーは、リポジトリで作業するように外部のコラボレーターを招待できます。 外部のコラボレーターの招待権限を、Organization のオーナーに制限することもできます。

{% data reusables.organizations.outside-collaborators-use-seats %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. [Repository invitations] で、[**Allow members to invite outside collaborators to repositories for this organization**] を選択します。.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %} ![Checkbox to allow members to invite outside collaborators to organization repositories](/assets/images/help/organizations/repo-invitations-checkbox-updated.png){% else %}
![Checkbox to allow members to invite outside collaborators to organization repositories](/assets/images/help/organizations/repo-invitations-checkbox.png){% endif %}
6. [**Save**] をクリックします。
