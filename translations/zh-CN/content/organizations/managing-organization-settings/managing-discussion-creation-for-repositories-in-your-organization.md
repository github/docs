---
title: 管理您组织中仓库的讨论创建
intro: 您可以选择成员在组织拥有的仓库中创建讨论所需的权限级别。
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-discussion-creation-for-repositories-in-your-organization
permissions: Organization owners can manage discussion creation for repositories owned by the organization.
versions:
  free-pro-team: '*'
topics:
  - Organizations
  - Teams
---

{% data reusables.discussions.beta %}

### 允许或禁止具有读取权限的用户创建讨论

默认情况下，如果仓库管理员或组织所有者为组织拥有的仓库启用了讨论，则具有读取权限的组织成员可以创建讨论。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. 在“Repository discussions（仓库讨论）”下，选择或取消选择 **Allow users with read access to create discussions（允许有读权限的用户创建讨论）**。 ![允许有读取权限的人创建讨论的复选框](/assets/images/help/discussions/toggle-allow-users-with-read-access-checkbox.png)
6. 单击 **Save（保存）**。 ![讨论设置的"保存"按钮](/assets/images/help/discussions/click-save.png)

### 延伸阅读

- "[关于讨论](/discussions/collaborating-with-your-community-using-discussions/about-discussions)"
- "[管理社区的讨论](/discussions/managing-discussions-for-your-community)"
