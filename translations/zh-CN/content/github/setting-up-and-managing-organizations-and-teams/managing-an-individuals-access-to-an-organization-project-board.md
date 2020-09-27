---
title: 管理个人对组织项目板的访问
intro: 作为组织所有者或项目板管理员，您可以管理个别成员对组织拥有的项目板的访问。
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-project-board
  - /articles/managing-an-individuals-access-to-an-organization-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% note %}

**注：** {{ site.data.reusables.project-management.cascading-permissions }} 更多信息请参阅“[组织的项目板权限](/articles/project-board-permissions-for-an-organization)”。

{% endnote %}

### 授予组织成员对项目板的访问

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.organization-wide-project }}
{{ site.data.reusables.project-management.select-project }}
{{ site.data.reusables.project-management.click-menu }}
{{ site.data.reusables.project-management.access-collaboration-settings }}
{{ site.data.reusables.project-management.collaborator-option }}
9. 在 "Search by username, full name or email address"（按用户名、全名或电子邮件地址搜索）下，输入协作者的姓名、用户名或 {{ site.data.variables.product.prodname_dotcom }} 电子邮件地址。 ![在搜索字段中输入了 Octocat 用户名的协作者部分](/assets/images/help/projects/org-project-collaborators-find-name.png)
{{ site.data.reusables.project-management.add-collaborator }}
{{ site.data.reusables.project-management.collaborator-permissions }}

### 更改组织成员对项目板的访问

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.organization-wide-project }}
{{ site.data.reusables.project-management.select-project }}
{{ site.data.reusables.project-management.click-menu }}
{{ site.data.reusables.project-management.access-collaboration-settings }}
{{ site.data.reusables.project-management.collaborator-option }}
{{ site.data.reusables.project-management.collaborator-permissions }}

### 删除组织成员对项目板的访问

从项目板删除协作者时，根据他们其他角色的权限，他们可能仍然保有对项目板的访问权限。 要完全删除个人对项目板的访问权限，必须删除其每个角色的访问权限。 例如，某个人可能对项目板具有组织成员或团队成员的访问权限。 更多信息请参阅“[组织的项目板权限](/articles/project-board-permissions-for-an-organization)”。

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.organization-wide-project }}
{{ site.data.reusables.project-management.select-project }}
{{ site.data.reusables.project-management.click-menu }}
{{ site.data.reusables.project-management.access-collaboration-settings }}
{{ site.data.reusables.project-management.collaborator-option }}
{{ site.data.reusables.project-management.remove-collaborator }}

### 延伸阅读

- "[组织的项目板权限](/articles/project-board-permissions-for-an-organization)"
