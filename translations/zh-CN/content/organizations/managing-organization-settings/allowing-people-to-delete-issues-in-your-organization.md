---
title: 允许人们删除组织中的议题
intro: 组织所有者可以允许特定人员从组织拥有的仓库中删除议题。
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
shortTitle: 允许议题删除
---

默认情况下，无法从组织的仓库中删除议题。 组织所有者必须先对所有组织的仓库启用此功能。

Once enabled, organization owners and people with admin access in an organization-owned repository can delete issues. People with admin access in a repository include organization members and outside collaborators who were given admin access. For more information, see "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)" and "[Deleting an issue](/articles/deleting-an-issue)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. 在 "Issue deletion"（删除议题）下，选择 **Allow members to delete issues for this organization（允许成员删除此组织的议题）**。 ![允许人们删除议题的复选框](/assets/images/help/settings/issue-deletion.png)
6. 单击 **Save（保存）**。
