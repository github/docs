---
title: 管理个人对组织仓库的访问
intro: 您可以管理个人对组织拥有的仓库的访问。
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-repository-early-access-program/
  - /articles/managing-an-individual-s-access-to-an-organization-repository
  - /articles/managing-an-individuals-access-to-an-organization-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

具有管理员权限的人员可以管理组织成员和外部协作者对组织仓库的访问。

### 删除对仓库的访问权限

从组织中的仓库删除协作者时，该协作者会失去对仓库的读写权限。 如果仓库是私有的，并且协作者对仓库进行了复刻，则其复刻也会被检测到，但协作者仍然保留仓库的任何本地克隆副本。

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

### 管理个人对组织仓库的访问

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. 单击 **Members（成员）**或 **Outside collaborators（外部协作者）**以管理具有不同访问权限的人员。 ![邀请成员或外部协作者参加组织的按钮](/assets/images/help/organizations/select-outside-collaborators.png)
5. 在您要管理的人员名称右侧，使用 {% octicon "gear" aria-label="The Settings gear" %} 下拉菜单，并单击 **Manage（管理）**。 ![管理访问链接](/assets/images/help/organizations/member-manage-access.png)
6. 在 "Manage access"（管理访问权限）页面上的仓库旁边，单击 **Manage access（管理访问权限）**。 ![管理对仓库的访问权限按钮](/assets/images/help/organizations/repository-manage-access.png)
7. 检查个人对指定仓库的访问权限，例如他们是协作者还是通过团队成员资格来访问仓库。 ![用户的仓库访问矩阵](/assets/images/help/organizations/repository-access-matrix-for-user.png)

### 延伸阅读

{% if currentVersion == "free-pro-team@latest" %}- "[限制与仓库的交互](/articles/limiting-interactions-with-your-repository)"{% endif %}
- "[组织的仓库权限级别](/articles/repository-permission-levels-for-an-organization)"
