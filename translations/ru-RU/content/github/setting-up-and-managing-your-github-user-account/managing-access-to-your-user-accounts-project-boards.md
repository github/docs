---
title: Managing access to your user account's project boards
intro: 'As a project board owner, you can add or remove a collaborator and customize their permissions to a project board.'
redirect_from:
  - /articles/managing-project-boards-in-your-repository-or-organization/
  - /articles/managing-access-to-your-user-account-s-project-boards
  - /articles/managing-access-to-your-user-accounts-project-boards
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - accounts
---

A collaborator is a person who has permissions to a project board you own. A collaborator's permissions will default to read access. For more information, see "[Permission levels for user-owned project boards](/articles/permission-levels-for-user-owned-project-boards)."

### Inviting collaborators to a user-owned project board

1. Navigate to the project board where you want to add an collaborator.
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
5. Under "Search by username, full name or email address", type the collaborator's name, username, or
{% data variables.product.prodname_dotcom %} email.
   ![The Collaborators section with the Octocat's username entered in the search field](/assets/images/help/projects/org-project-collaborators-find-name.png)
{% data reusables.project-management.add-collaborator %}
7. The new collaborator has read permissions by default. Optionally, next to the new collaborator's name, use the drop-down menu and choose a different permission level. ![The Collaborators section with the Permissions drop-down menu selected](/assets/images/help/projects/user-project-collaborators-edit-permissions.png)

### Removing a collaborator from a user-owned project board

{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
{% data reusables.project-management.remove-collaborator %}
