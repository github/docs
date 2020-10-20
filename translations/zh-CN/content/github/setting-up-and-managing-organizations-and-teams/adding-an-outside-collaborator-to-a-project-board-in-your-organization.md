---
title: 添加外部协作者到组织的项目板
intro: '作为组织所有者或项目板管理员，可以添加外部协作者并自定义他们对项目板的权限。'
redirect_from:
  - /articles/adding-an-outside-collaborator-to-a-project-board-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

外部协作者并未明确是组织的成员，但对组织的项目板具有访问权限。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
9. Under "Search by username, full name or email address", type the outside collaborator's name, username, or
{% data variables.product.prodname_dotcom %} email.
   ![在搜索字段中输入了 Octocat 用户名的协作者部分](/assets/images/help/projects/org-project-collaborators-find-name.png)
{% data reusables.project-management.add-collaborator %}
{% data reusables.project-management.collaborator-permissions %}
