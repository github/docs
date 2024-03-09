---
title: 'Adding an outside collaborator to a {% data variables.product.prodname_project_v1 %} in your organization'
intro: 'As an organization owner or {% data variables.projects.projects_v1_board %} admin, you can add an outside collaborator and customize their permissions to a {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /articles/adding-an-outside-collaborator-to-a-project-board-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-an-outside-collaborator-to-a-project-board-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add a collaborator
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
1. Under "Search by username, full name or email address", type the outside collaborator's name, username, or {% data variables.product.prodname_dotcom %} email.
{% data reusables.project-management.add-collaborator %}
{% data reusables.project-management.collaborator-permissions %}
