---
title: 'Adding an outside collaborator to a {% data variables.product.prodname_project_v1 %} in your organization'
intro: 'As an organization owner or {% data variables.projects.projects_v1_board %} admin, you can add an outside collaborator and customize their permissions to a {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /articles/adding-an-outside-collaborator-to-a-project-board-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-an-outside-collaborator-to-a-project-board-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 添加协作者
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

An outside collaborator is a person who isn't explicitly a member of your organization, but who has permissions to a {% data variables.projects.projects_v1_board %} in your organization.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Click **Projects (classic)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
9. 在 "Search by username, full name or email address"（按用户名、全名或电子邮件地址搜索）下，输入外部协作者的姓名、用户名或 {% data variables.product.prodname_dotcom %} 电子邮件地址。 ![在搜索字段中输入了 Octocat 用户名的协作者部分](/assets/images/help/projects/org-project-collaborators-find-name.png)
{% data reusables.project-management.add-collaborator %}
{% data reusables.project-management.collaborator-permissions %}
