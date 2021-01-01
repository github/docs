---
title: Managing team access to an organization repository
intro: 'You can give a team access to a repository, remove a team''s access to a repository, or change a team''s permission level for a repository.'
redirect_from:
  - /articles/managing-team-access-to-an-organization-repository-early-access-program/
  - /articles/managing-team-access-to-an-organization-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

People with admin access to a repository can manage team access to the repository. Team maintainers can remove a team's access to a repository.

{% warning %}

**Warnings:**
- You can change a team's permission level if the team has direct access to a repository. If the team's access to the repository is inherited from a parent team, you must change the parent team's access to the repository.
- If you add or remove repository access for a parent team, each of that parent's child teams will also receive or lose access to the repository. For more information, see "[About teams](/articles/about-teams)."

{% endwarning %}

### Giving a team access to a repository

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-repositories-tab %}
5. Above the list of repositories, click **Add repository**.
  ![The Add repository button](/assets/images/help/organizations/add-repositories-button.png)
6. Type the name of a repository, then click **Add repository to team**.
  ![Repository search field](/assets/images/help/organizations/team-repositories-add.png)
7. Optionally, to the right of the repository name, use the drop-down menu and choose a different permission level for the team.
  ![Repository access level dropdown](/assets/images/help/organizations/team-repositories-change-permission-level.png)

### Removing a team's access to a repository

You can remove a team's access to a repository if the team has direct access to a repository. If a team's access to the repository is inherited from a parent team, you must remove the repository from the parent team in order to remove the repository from child teams.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-repositories-tab %}
5. Select the repository or repositories you'd like to remove from the team.
  ![List of team repositories with the checkboxes for some repositories selected](/assets/images/help/teams/select-team-repositories-bulk.png)
6. Above the list of repositories, use the drop-down menu, and click **Remove from team**.
  ![Drop-down menu with the option to remove a repository from a team](/assets/images/help/teams/remove-team-repo-dropdown.png)
7. Review the repository or repositories that will be removed from the team, then click **Remove repositories**.
  ![Modal box with a list of repositories that the team will no longer have access to](/assets/images/help/teams/confirm-remove-team-repos.png)

### Further reading

- "[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization)"
