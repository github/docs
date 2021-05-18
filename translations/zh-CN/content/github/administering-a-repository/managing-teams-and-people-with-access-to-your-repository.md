---
title: 管理有权访问仓库的团队和人员
intro: 您可以查看有权访问仓库的每个人并调整权限。
permissions: Repository administrators can manage teams and people with access to a repository.
redirect_from:
  - /github/administering-a-repository/managing-people-and-teams-with-access-to-your-repository
versions:
  free-pro-team: '*'
topics:
  - Repositories
---

### 关于管理仓库的访问权限

对于您在 {% data variables.product.prodname_dotcom %} 上管理的每个仓库，您可以查看有权访问仓库的每个团队或人员的概览。 从概览中，您还可以邀请新的团队或人员、更改每个团队或人员的权限或删除对仓库的访问权限。

此概览可帮助您审核对仓库、内部或外部承包商或员工的访问权限，并有效响应安全事件。

有关仓库权限级别的更多信息，请参阅“[用户帐户仓库的权限级别](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository)”和“[组织的仓库权限级别](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization)”。

![访问权限管理概览](/assets/images/help/repository/manage-access-overview.png)

### 过滤团队和人员列表

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. 在“Manage access（管理访问权限）”下的搜索字段中，开始输入您要查找的团队或人员的名称。 ![用于过滤具有访问权限的团队或人员列表的搜索字段](/assets/images/help/repository/manage-access-filter.png)

### 更改团队或人员的权限

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. 在“Manage access（管理访问权限）”下，找到您要更改其权限的团队或人员，然后使用 **Role（角色）**下拉菜单选择新的权限。 ![使用"Role（角色）"下拉菜单为团队或人员选择新权限](/assets/images/help/repository/manage-access-role-drop-down.png)

### 邀请团队或人员

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
{% data reusables.organizations.invite-teams-or-people %}
5. 在搜索字段中，开始输入要邀请的团队或人员的名称，然后单击匹配列表中的名称。 ![用于输入要邀请加入仓库的团队或人员名称的搜索字段](/assets/images/help/repository/manage-access-invite-search-field.png)
6. 在“Choose a role（选择角色）”下，选择要授予该团队或人员的权限，然后单击 **Add NAME to REPOSITORY（将名称添加到仓库）**。 ![为团队或人员选择权限](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

### 删除团队或人员的访问权限

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. 在“Manage access（管理访问权限）”下，找到要删除其访问权限的团队或人员，然后单击 {% octicon "trash" aria-label="The trash icon" %}。 ![用于删除访问权限的回收站图标](/assets/images/help/repository/manage-access-remove.png)

### 延伸阅读

- “[设置仓库可见性](/github/administering-a-repository/setting-repository-visibility)”
- “[设置组织的基本权限](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization)”
