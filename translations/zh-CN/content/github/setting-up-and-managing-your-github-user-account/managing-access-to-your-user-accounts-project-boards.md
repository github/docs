---
title: 管理对用户帐户项目板的访问
intro: '作为项目板所有者，您可以添加或删除协作者，以及自定义他们对项目板的权限。'
redirect_from:
  - /articles/managing-project-boards-in-your-repository-or-organization/
  - /articles/managing-access-to-your-user-account-s-project-boards
  - /articles/managing-access-to-your-user-accounts-project-boards
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

协作者是对您拥有的项目板具有访问权限的个人。 协作者的权限默认为读取权限。 更多信息请参阅“[用户项目板的权限级别](/articles/permission-levels-for-user-owned-project-boards)”。

### 邀请协作者参加用户拥有的项目板

1. 导航到您要在其中添加协作者的项目板。
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
5. Under "Search by username, full name or email address", type the collaborator's name, username, or
{% data variables.product.prodname_dotcom %} email.
   ![在搜索字段中输入了 Octocat 用户名的协作者部分](/assets/images/help/projects/org-project-collaborators-find-name.png)
{% data reusables.project-management.add-collaborator %}
7. 新协作者默认具有读取权限。 在新协作者名称旁边，可以选择使用下拉菜单选择不同的权限级别。 ![选择了权限下拉菜单的协作者部分](/assets/images/help/projects/user-project-collaborators-edit-permissions.png)

### 从用户拥有的项目板删除协作者

{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
{% data reusables.project-management.remove-collaborator %}
