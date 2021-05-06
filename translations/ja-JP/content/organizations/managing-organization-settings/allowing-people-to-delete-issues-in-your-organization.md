---
title: Organization 内の Issue の削除を許可する
intro: Organization のオーナーは、Organization が所有するリポジトリ内の Issue の削除を許可できます。
redirect_from:
  - /articles/allowing-people-to-delete-issues-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-delete-issues-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---

デフォルトでは、Organization 内の Issue は削除できません。 Organization のオーナーは、まず Organization の全リポジトリでこの機能を有効化しなければなりません。

有効化されると、Organization のオーナー、そして Organization が所有するリポジトリに管理権限を持つ人は、Issue を削除できるようになります。 リポジトリの管理権限を持つ人には、管理権限を持つ Organization メンバーや外部コラボレーターが含まれます。 詳細は「[Organization のリポジトリ権限レベル](/articles/repository-permission-levels-for-an-organization/)」および「[Issue を削除する](/articles/deleting-an-issue)」を参照してください。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. [Issue deletion] の下で、[**Allow members to delete issues for this organization**] (この Organization の Issue の削除をメンバーに許可する) を選択します。 ![Issue の削除を許可するチェックボックス](/assets/images/help/settings/issue-deletion.png)
6. [**Save**] をクリックします。
