---
title: '从组织 {% data variables.product.prodname_project_v1 %} 中删除外部协作者'
intro: '作为组织所有者或 {% data variables.projects.projects_v1_board %} 管理员，您可以移除外部协作者对 {% data variables.projects.projects_v1_board %} 的访问权限。'
redirect_from:
  - /articles/removing-an-outside-collaborator-from-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/removing-an-outside-collaborator-from-an-organization-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 删除外部协作者
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Click **Projects (classic)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
{% data reusables.project-management.remove-collaborator %}
