---
title: '{% data variables.product.prodname_project_v1_caps %} permissions for an organization'
intro: 'Organization owners and people with {% data variables.projects.projects_v1_board %} admin permissions can customize who has read, write, and admin permissions to your organization’s {% data variables.projects.projects_v1_boards %}.'
redirect_from:
  - /articles/project-board-permissions-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/project-board-permissions-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: '{% data variables.product.prodname_project_v1_caps %} permissions'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

## Permissions overview

There are three levels of permissions to a {% data variables.projects.projects_v1_board %} for people and teams:

{% data reusables.project-management.project-board-permissions %}

Organization owners and people with admin permissions can give a person access to an organization {% data variables.projects.projects_v1_board %} individually, as an outside collaborator or organization member, or through their membership in a team or organization. An outside collaborator is someone who is not an organization member but given permissions to collaborate in your organization.

Organization owners and people with admin permissions to a {% data variables.projects.projects_v1_board %} can also:
* Set default {% data variables.projects.projects_v1_board %} permissions for all organization members.
* Manage access to the {% data variables.projects.projects_v1_board %} for organization members, teams, and outside collaborators. For more information, see "[AUTOTITLE](/organizations/managing-access-to-your-organizations-project-boards/managing-team-access-to-an-organization-project-board)", "[AUTOTITLE](/organizations/managing-access-to-your-organizations-project-boards/managing-an-individuals-access-to-an-organization-project-board)", or "[AUTOTITLE](/organizations/managing-access-to-your-organizations-project-boards/managing-access-to-a-project-board-for-organization-members)."
* Manage {% data variables.projects.projects_v1_board %} visibility. For more information, see "[AUTOTITLE](/organizations/managing-access-to-your-organizations-project-boards/managing-access-to-a-project-board-for-organization-members)."

## Cascading permissions for {% data variables.projects.projects_v1_boards %}

{% data reusables.project-management.cascading-permissions %}

For example, if an organization owner has given all organization members read permissions to a {% data variables.projects.projects_v1_board %}, and a {% data variables.projects.projects_v1_board %} admin gives an organization member write permissions to that board as an individual collaborator, that person would have write permissions to the {% data variables.projects.projects_v1_board %}.

## {% data variables.projects.projects_v1_board_caps %} visibility

{% ifversion classic-project-visibility-permissions %}{% data reusables.projects.owners-can-limit-visibility-permissions %}{% endif %}

{% data reusables.project-management.project-board-visibility %} You can change the {% data variables.projects.projects_v1_board %}'s visibility from private to public and back again. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility)."

## Further reading

* "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility)"
* "[AUTOTITLE](/organizations/managing-access-to-your-organizations-project-boards/managing-an-individuals-access-to-an-organization-project-board)"
* "[AUTOTITLE](/organizations/managing-access-to-your-organizations-project-boards/managing-team-access-to-an-organization-project-board)"
* "[AUTOTITLE](/organizations/managing-access-to-your-organizations-project-boards/managing-access-to-a-project-board-for-organization-members)"
