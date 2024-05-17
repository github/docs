---
title: 'Managing access to your personal account''s {% data variables.projects.projects_v1_boards %}'
intro: 'As a {% data variables.projects.projects_v1_board %} owner, you can add or remove a collaborator and customize their permissions to a {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /articles/managing-project-boards-in-your-repository-or-organization
  - /articles/managing-access-to-your-user-account-s-project-boards
  - /articles/managing-access-to-your-user-accounts-project-boards
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-user-accounts-project-boards
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-access-to-your-user-accounts-project-boards
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-access-to-your-user-accounts-project-boards
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-access-to-your-personal-accounts-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: 'Manage {% data variables.projects.projects_v1_boards %} access'
allowTitleToDifferFromFilename: true
---
A collaborator is a person who has permissions to a {% data variables.projects.projects_v1_board %} you own. A collaborator's permissions will default to read access. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/permission-levels-for-a-project-board-owned-by-a-personal-account)."

## Inviting collaborators to a user-owned {% data variables.projects.projects_v1_board %}

1. Navigate to the {% data variables.projects.projects_v1_board %} where you want to add an collaborator.
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
1. Under "Search by username, full name or email address", type the collaborator's name, username, or {% data variables.product.prodname_dotcom %} email.
{% data reusables.project-management.add-collaborator %}
1. The new collaborator has read permissions by default. Optionally, next to the new collaborator's name, use the drop-down menu and choose a different permission level.

## Removing a collaborator from a user-owned {% data variables.projects.projects_v1_board %}

{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
{% data reusables.project-management.remove-collaborator %}
