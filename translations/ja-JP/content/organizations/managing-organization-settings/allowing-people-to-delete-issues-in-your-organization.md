---
title: Organization 内の Issue の削除を許可する
intro: Organization のオーナーは、Organization が所有するリポジトリ内の Issue の削除を許可できます。
redirect_from:
  - /articles/allowing-people-to-delete-issues-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-delete-issues-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Issueの削除の許可
---

デフォルトでは、Organization 内の Issue は削除できません。 Organization のオーナーは、まず Organization の全リポジトリでこの機能を有効化しなければなりません。

有効化されると、Organizationのオーナー、そしてOrganizationが所有するリポジトリに管理アクセスを持つ人は、Issueを削除できるようになります。 リポジトリの管理アクセスを持つ人には、管理アクセスを付与されたOrganizationメンバーや外部コラボレーターが含まれます。 詳しい情報については「[Organizationのリポジトリロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」及び「[Issueの削除](/articles/deleting-an-issue)」を参照してください。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. [Issue deletion] の下で、[**Allow members to delete issues for this organization**] (この Organization の Issue の削除をメンバーに許可する) を選択します。 ![Issue の削除を許可するチェックボックス](/assets/images/help/settings/issue-deletion.png)
6. [**Save**] をクリックします。
