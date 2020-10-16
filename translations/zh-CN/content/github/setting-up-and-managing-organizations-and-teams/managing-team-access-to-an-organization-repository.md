---
title: 管理团队对组织仓库的访问
intro: '您可以向团队授予仓库访问权限，删除团队的仓库访问权限，或者更改团队对仓库的权限级别。'
redirect_from:
  - /articles/managing-team-access-to-an-organization-repository-early-access-program/
  - /articles/managing-team-access-to-an-organization-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

对仓库具有管理员权限的人员可以管理团队对仓库的访问权限。 团队维护员可以删除团队对仓库的访问权限。

{% warning %}

**警告：**
- 如果团队能够直接访问仓库，您可以更改其权限级别。 如果团队对仓库的访问权限继承自父团队，则您必须更改团队对仓库的访问权限。
- 如果您添加或删除父团队的仓库访问权限，则其每个子团队也会获得或失去相应的仓库访问权限。 更多信息请参阅“[关于团队](/articles/about-teams)”。

{% endwarning %}

### 授予团队对仓库的访问权限

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-repositories-tab %}
5. 在仓库列表上方，单击 **Add repository（添加仓库）**。 ![添加仓库按钮](/assets/images/help/organizations/add-repositories-button.png)
6. 输入仓库的名称，然后单击 **Add repository to team（添加仓库到团队）**。 ![仓库搜索字段](/assets/images/help/organizations/team-repositories-add.png)
7. 也可选择在仓库名称右侧使用下拉菜单，为团队选择不同的权限级别。 ![仓库访问权限下拉菜单](/assets/images/help/organizations/team-repositories-change-permission-level.png)

### 删除团队对仓库的访问权限

如果团队能够直接访问仓库，您可以更改其对仓库的访问权限。 如果团队对仓库的访问权限继承自父团队，则必须删除父团队对仓库的访问权限才可删除其子团队的相应权限。

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-repositories-tab %}
5. 选择要从团队删除的仓库。 ![某些仓库的勾选框已选中的团队仓库列表](/assets/images/help/teams/select-team-repositories-bulk.png)
6. 在仓库列表上方，使用下拉菜单，然后单击 **Remove from team（从团队删除）**。 ![包含从团队删除仓库的选项的下拉菜单](/assets/images/help/teams/remove-team-repo-dropdown.png)
7. 检查要从团队删除的仓库，然后单击 **Remove repositories（删除仓库）**。 ![包含团队无法再访问的仓库列表的模态框](/assets/images/help/teams/confirm-remove-team-repos.png)

### 延伸阅读

- "[组织的仓库权限级别](/articles/repository-permission-levels-for-an-organization)"
