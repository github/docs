---
title: Managing team access to an organization repository
intro: 'You can give a team access to a repository, remove a team''s access to a repository, or change a team''s permission level for a repository.'
redirect_from:
  - /articles/managing-team-access-to-an-organization-repository-early-access-program
  - /articles/managing-team-access-to-an-organization-repository
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-access-to-an-organization-repository
  - /organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository
  - /organizations/managing-user-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage team access
---

People with admin access to a repository can manage team access to the repository. Team maintainers can remove a team's access to a repository if the team has direct access to it. If the team's access to the repository is inherited from a parent team, maintainers can choose to reset the current permission to match the parent team's permission.

{% warning %}

**Warnings:**
- You can change a team's permission level if the team has direct access to a repository. If the team's access to the repository is inherited from a parent team, you must change the parent team's access to the repository.
- If you add or remove repository access for a parent team, each of that parent's child teams will also receive or lose access to the repository. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/about-teams)."

{% endwarning %}

## Giving a team access to a repository

You can give a team access to a repository or change a team's level of access to a repository in your repository settings. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#inviting-a-team-or-person)."

## Removing a team's access to a repository

You can remove a team's access to an organization repository in your repository settings. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#removing-access-for-a-team-or-person)."

If a team has direct access to a repository, you can remove that team's access to the repository. If a team's access to the repository is inherited from a parent team, you must remove the repository from the parent team in order to remove the repository from child teams.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

## Further reading

- "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)"
