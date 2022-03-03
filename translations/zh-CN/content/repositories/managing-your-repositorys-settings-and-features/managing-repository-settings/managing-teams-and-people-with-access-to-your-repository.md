---
title: 管理有权访问仓库的团队和人员
intro: 您可以查看有权访问仓库的每个人并调整权限。
permissions: People with admin access to a repository can manage teams and people with access to a repository.
redirect_from:
  - /github/administering-a-repository/managing-people-and-teams-with-access-to-your-repository
  - /github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: issue-5974
topics:
  - Repositories
shortTitle: 团队和人员
---

## About access management for repositories

对于您在 {% data variables.product.prodname_dotcom %} 上管理的每个仓库，您可以查看有权访问仓库的每个团队或人员的概览。 From the overview, you can also invite new teams or people, change each team or person's role for the repository, or remove access to the repository.

此概览可帮助您审核对仓库、内部或外部承包商或员工的访问权限，并有效响应安全事件。

{% data reusables.organizations.mixed-roles-warning %}

For more information about repository roles, see "[Permission levels for a user account repository](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository)" and "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)."

![访问权限管理概览](/assets/images/help/repository/manage-access-overview.png)

## 过滤团队和人员列表

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
{% data reusables.repositories.click-collaborators-teams %}
{% else %}
{% data reusables.repositories.navigate-to-manage-access %}
{% endif %}
1. 在“Manage access（管理访问权限）”下的搜索字段中，开始输入您要查找的团队或人员的名称。 Optionally, use the dropdown menus to filter your search. ![用于过滤具有访问权限的团队或人员列表的搜索字段](/assets/images/help/repository/manage-access-filter.png)

## 更改团队或人员的权限

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
{% data reusables.repositories.click-collaborators-teams %}
{% else %}
{% data reusables.repositories.navigate-to-manage-access %}
{% endif %}
4. Under "Manage access", find the team or person whose role you'd like to change, then select the Role drop-down and click a new role. ![使用"Role（角色）"下拉菜单为团队或人员选择新权限](/assets/images/help/repository/manage-access-role-drop-down.png)

## 邀请团队或人员

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
{% data reusables.repositories.click-collaborators-teams %}
{% else %}
{% data reusables.repositories.navigate-to-manage-access %}
{% endif %}
{% data reusables.organizations.invite-teams-or-people %}
5. 在搜索字段中，开始输入要邀请的团队或人员的名称，然后单击匹配列表中的名称。 ![用于输入要邀请加入仓库的团队或人员名称的搜索字段](/assets/images/help/repository/manage-access-invite-search-field.png)
6. Under "Choose a role", select the repository role to grant to the team or person, then click **Add NAME to REPOSITORY**. ![为团队或人员选择权限](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## 删除团队或人员的访问权限

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
{% data reusables.repositories.click-collaborators-teams %}
{% else %}
{% data reusables.repositories.navigate-to-manage-access %}
{% endif %}
4. 在“Manage access（管理访问权限）”下，找到要删除其访问权限的团队或人员，然后单击 {% octicon "trash" aria-label="The trash icon" %}。 ![用于删除访问权限的回收站图标](/assets/images/help/repository/manage-access-remove.png)

## 延伸阅读

- “[设置仓库可见性](/github/administering-a-repository/setting-repository-visibility)”
- “[设置组织的基本权限](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization)”
