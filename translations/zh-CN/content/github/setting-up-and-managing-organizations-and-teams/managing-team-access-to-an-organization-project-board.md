---
title: 管理团队对组织项目板的访问
intro: '作为组织所有者或项目板管理员，您可以向团队授予对组织拥有的项目板的访问权限。'
redirect_from:
  - /articles/managing-team-access-to-an-organization-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% warning %}

**警告：**
- 如果团队能够直接访问项目板，您可以更改其权限级别。 如果团队对项目板的访问权限继承自父团队，则您必须更改团队对项目板的访问权限。
- 如果您添加或删除父团队的项目板访问权限，则其每个子团队也会获得或失去相应的项目板访问权限。 更多信息请参阅“[关于团队](/articles/about-teams)”。

{% endwarning %}

### 授予团队项目板访问权限

您可以向整个团队授予相同级别的项目板访问权限。

{% note %}

**注：** {% data reusables.project-management.cascading-permissions %} 例如，如果组织所有者向团队授予了读取项目板的权限，而项目板管理员向其中一个团队成员（作为个人贡献者）授予项目板管理员权限，则此人对项目板具有管理员权限。 更多信息请参阅“[组织的项目板权限](/articles/project-board-permissions-for-an-organization)”。

{% endnote %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
8. 在左侧边栏中，单击 **Teams（团队）**。
9. 要添加团队，请单击 **Add a team: Select team（添加团队：选择团队）**。 然后，从下拉菜单中选择一个团队，或者搜索要添加的团队。 ![添加包含组织中团队列表的团队下拉菜单](/assets/images/help/projects/add-a-team.png)
10. 在团队名称旁边，使用下拉菜单选择所需的权限级别：**Read（读取）**、**Write（写入）**或 **Admin（管理员）**。 ![包含读取、写入和管理员选项的团队权限下拉菜单](/assets/images/help/projects/org-project-team-choose-permissions.png)

### 配置团队对项目板的访问

如果团队的项目板访问权限继承自父团队，您必须删除父团队的项目板访问权限，以更新子团队的访问权限。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
4. 在团队的对话上方，单击 {% octicon "project" aria-label="The Projects icon" %} **Projects（项目）**。 ![团队仓库选项卡](/assets/images/help/organizations/team-project-board-button.png)
5. 要更改权限级别，在要更新的项目板右侧使用下拉列表。 要删除项目板，请单击 **{% octicon "trashcan" aria-label="The trashcan icon" %}**。 ![从团队删除项目板的垃圾桶按钮](/assets/images/help/organizations/trash-button.png)
