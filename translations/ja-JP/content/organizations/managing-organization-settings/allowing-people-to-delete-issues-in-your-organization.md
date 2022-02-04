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

Once enabled, organization owners and people with admin access in an organization-owned repository can delete issues. People with admin access in a repository include organization members and outside collaborators who were given admin access. For more information, see "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)" and "[Deleting an issue](/articles/deleting-an-issue)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. [Issue deletion] の下で、[**Allow members to delete issues for this organization**] (この Organization の Issue の削除をメンバーに許可する) を選択します。 ![Issue の削除を許可するチェックボックス](/assets/images/help/settings/issue-deletion.png)
6. [**Save**] をクリックします。
