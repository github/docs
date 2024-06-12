---
title: 'Removing an outside collaborator from an organization {% data variables.product.prodname_project_v1 %}'
intro: 'As an organization owner or {% data variables.projects.projects_v1_board %} admin, you can remove an outside collaborator''s access to a {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /articles/removing-an-outside-collaborator-from-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/removing-an-outside-collaborator-from-an-organization-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Remove outside collaborator
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
