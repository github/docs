---
title: Converting an admin team to improved organization permissions
intro: 'If your organization was created after September 2015, your organization has improved organization permissions by default. Organizations created before September 2015 may need to migrate older Owners and Admin teams to the improved permissions model. Members of legacy admin teams automatically retain the ability to create repositories until those teams are migrated to the improved organization permissions model.'
redirect_from:
  - /articles/converting-your-previous-admin-team-to-the-improved-organization-permissions
  - /articles/converting-an-admin-team-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-admin-team-to-improved-organization-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Convert admin team
---

You can remove the ability for members of legacy admin teams to create repositories by creating a new team for these members, ensuring that the team has necessary access to the organization's repositories, then deleting the legacy admin team.

For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)."

{% warning %}

**Warnings:**
* If there are members of your legacy Admin team who are not members of other teams, deleting the team will remove those members from the organization. Before deleting the team, ensure members are already direct members of the organization, or have collaborator access to necessary repositories.
* To prevent the loss of private forks made by members of the legacy Admin team, you must follow steps 1-3 below before deleting the legacy Admin team.
* Because "admin" is a term for organization members with specific [access to certain repositories](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization) in the organization, we recommend you avoid that term in any team name you decide on.

{% endwarning %}

1. [Create a new team](/organizations/organizing-members-into-teams/creating-a-team).
1. [Add each of the members](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team) of your legacy admin team to the new team.
1. [Give the new team equivalent access](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-team-access-to-an-organization-repository) to each of the repositories the legacy team could access.
1. [Delete the legacy admin team](/organizations/organizing-members-into-teams/deleting-a-team).
