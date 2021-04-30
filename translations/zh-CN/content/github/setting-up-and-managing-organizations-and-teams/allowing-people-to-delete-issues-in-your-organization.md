---
title: 允许人们删除组织中的议题
intro: 组织所有者可以允许特定人员从组织拥有的仓库中删除议题。
redirect_from:
  - /articles/allowing-people-to-delete-issues-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 组织
  - 团队
---

默认情况下，无法从组织的仓库中删除议题。 组织所有者必须先对所有组织的仓库启用此功能。

在启用后，组织所有者以及在组织拥有的仓库中具有管理员权限的人员便可删除议题。 在仓库中具有管理员权限的人员包括具有管理员权限的组织成员以及外部协作者。 更多信息请参阅“[组织的仓库权限级别](/articles/repository-permission-levels-for-an-organization/)”和“[删除议题](/articles/deleting-an-issue)”。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. 在 "Issue deletion"（删除议题）下，选择 **Allow members to delete issues for this organization（允许成员删除此组织的议题）**。 ![允许人们删除议题的复选框](/assets/images/help/settings/issue-deletion.png)
6. 单击 **Save（保存）**。
