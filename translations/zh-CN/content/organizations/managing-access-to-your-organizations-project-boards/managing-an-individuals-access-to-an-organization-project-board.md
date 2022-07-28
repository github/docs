---
title: '管理个人对组织 {% data variables.product.prodname_project_v1 %} 的访问'
intro: '作为组织所有者或 {% data variables.projects.projects_v1_board %} 管理员，您可以管理单个成员对组织拥有的 {% data variables.projects.projects_v1_board %} 的访问。'
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-project-board
  - /articles/managing-an-individuals-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 管理个人访问
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% note %}

**注意：** {% data reusables.project-management.cascading-permissions %} 更多信息请参阅“[{% data variables.product.prodname_project_v1_caps %} 组织的权限](/articles/project-board-permissions-for-an-organization)”。

{% endnote %}

## 授予组织成员对 {% data variables.projects.projects_v1_board %} 的访问

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Click **Projects (classic)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
9. 在 "Search by username, full name or email address"（按用户名、全名或电子邮件地址搜索）下，输入协作者的姓名、用户名或 {% data variables.product.prodname_dotcom %} 电子邮件地址。 ![在搜索字段中输入了 Octocat 用户名的协作者部分](/assets/images/help/projects/org-project-collaborators-find-name.png)
{% data reusables.project-management.add-collaborator %}
{% data reusables.project-management.collaborator-permissions %}

## 更改组织成员对 {% data variables.projects.projects_v1_board %} 的访问

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Click **Projects (classic)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
{% data reusables.project-management.collaborator-permissions %}

## 移除组织成员对 {% data variables.projects.projects_v1_board %} 的访问权限

从 {% data variables.projects.projects_v1_board %} 删除协作者时，根据他们其他角色的权限，他们可能仍然保有对项目板的访问权限。 要完全删除个人对 {% data variables.projects.projects_v1_board %} 的访问权限，必须删除其每个角色的访问权限。 例如，某个人可能对 {% data variables.projects.projects_v1_board %} 具有组织成员或团队成员的访问权限。 For more information, see "[{% data variables.product.prodname_project_v1_caps %} permissions for an organization](/articles/project-board-permissions-for-an-organization)."

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Click **Projects (classic)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
{% data reusables.project-management.remove-collaborator %}

## 延伸阅读

- "[{% data variables.product.prodname_project_v1_caps %} permissions for an organization](/articles/project-board-permissions-for-an-organization)"
