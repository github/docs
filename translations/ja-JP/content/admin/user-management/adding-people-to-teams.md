---
title: Teamへの人の追加
redirect_from:
  - /enterprise/admin/articles/adding-teams/
  - /enterprise/admin/articles/adding-or-inviting-people-to-teams/
  - /enterprise/admin/guides/user-management/adding-or-inviting-people-to-teams/
  - /enterprise/admin/user-management/adding-people-to-teams
intro: 'Team が作成されると、Organization の管理者はユーザを {% data variables.product.product_location %} から Team に追加し、どのリポジトリにアクセスできるようにするかを決定できます。'
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

各Teamには、それぞれに定義された[Organizatinが所有するリポジトリへのアクセス権限](/articles/permission-levels-for-an-organization)があります。

- オーナー権限を持つメンバーは、すべてのTeamから既存のOrganizationのメンバーを追加したり削除したりできます。
- 管理者権限を与えるTeamのメンバーは、TeamのメンバーシップとそのTeamのリポジトリだけを変更できます。

### チームのセットアップ

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.invite_to_team %}
{% data reusables.organizations.review-team-repository-access %}

### TeamのLDAPグループへのマッピング（たとえばLDAP Syncをユーザ認証に使って）

{% data reusables.enterprise_management_console.badge_indicator %}

LDAPグループに同期されているTeamに新しいメンバーを追加するには、そのユーザをLDAPグループのメンバーとして追加するか、LDAPの管理者に連絡してください。
