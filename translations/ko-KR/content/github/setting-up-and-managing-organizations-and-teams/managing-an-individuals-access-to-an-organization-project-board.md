---
title: Managing an individual’s access to an organization project board
intro: 'As an organization owner or project board admin, you can manage an individual member''s access to a project board owned by your organization.'
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-project-board
  - /articles/managing-an-individuals-access-to-an-organization-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---

{% note %}

**Note:** {% data reusables.project-management.cascading-permissions %} For more information, see "[Project board permissions for an organization](/articles/project-board-permissions-for-an-organization)."

{% endnote %}

### Giving an organization member access to a project board

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
9. Under "Search by username, full name or email address", type the collaborator's name, username, or
{% data variables.product.prodname_dotcom %} email.
   ![The Collaborators section with the Octocat's username entered in the search field](/assets/images/help/projects/org-project-collaborators-find-name.png)
{% data reusables.project-management.add-collaborator %}
{% data reusables.project-management.collaborator-permissions %}

### Changing an organization member's access to a project board

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
{% data reusables.project-management.collaborator-permissions %}

### Removing an organization member's access to a project board

When you remove a collaborator from a project board, they may still retain access to the board based on the permissions they have for other roles. To completely remove access to a project board, you must remove access for each role the person has. For instance, a person may have access to the project board as an organization member or team member. For more information, see "[Project board permissions for an organization](/articles/project-board-permissions-for-an-organization)."

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
{% data reusables.project-management.remove-collaborator %}

### 더 읽을거리

- "[Project board permissions for an organization](/articles/project-board-permissions-for-an-organization)"
