---
title: 管理个人对组织仓库的访问
intro: 您可以管理个人对组织拥有的仓库的访问。
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-repository-early-access-program
  - /articles/managing-an-individual-s-access-to-an-organization-repository
  - /articles/managing-an-individuals-access-to-an-organization-repository
  - /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 管理个人访问
permissions: People with admin access to a repository can manage access to the repository.
---

## About access to organization repositories

从组织中的仓库删除协作者时，该协作者会失去对仓库的读写权限。 如果仓库是私有的，并且协作者对仓库进行了复刻，则其复刻也会被检测到，但协作者仍然保留仓库的任何本地克隆副本。

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

## Giving a person access to a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
{% data reusables.organizations.invite-teams-or-people %}
5. In the search field, start typing the name of the person to invite, then click a name in the list of matches. ![用于输入要邀请加入仓库的团队或人员名称的搜索字段](/assets/images/help/repository/manage-access-invite-search-field.png)
6. Under "Choose a role", select the repository role to assign the person, then click **Add NAME to REPOSITORY**. ![为团队或人员选择权限](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## 管理个人对组织仓库的访问

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
4. 单击 **Members（成员）**或 **Outside collaborators（外部协作者）**以管理具有不同访问权限的人员。 ![邀请成员或外部协作者参加组织的按钮](/assets/images/help/organizations/select-outside-collaborators.png)
5. 在您要管理的人员名称右侧，使用 {% octicon "gear" aria-label="The Settings gear" %} 下拉菜单，并单击 **Manage（管理）**。 ![管理访问链接](/assets/images/help/organizations/member-manage-access.png)
6. 在 "Manage access"（管理访问权限）页面上的仓库旁边，单击 **Manage access（管理访问权限）**。 ![管理对仓库的访问权限按钮](/assets/images/help/organizations/repository-manage-access.png)
7. 检查个人对指定仓库的访问权限，例如他们是协作者还是通过团队成员资格来访问仓库。 ![用户的仓库访问矩阵](/assets/images/help/organizations/repository-access-matrix-for-user.png)

## 延伸阅读

{% ifversion fpt or ghec %}- "[限制与仓库的交互](/articles/limiting-interactions-with-your-repository)"{% endif %}
- "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
