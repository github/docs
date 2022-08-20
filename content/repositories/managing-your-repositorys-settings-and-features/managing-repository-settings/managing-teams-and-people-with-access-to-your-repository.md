---
title: Managing teams and people with access to your repository
intro: You can see everyone who has access to your repository and adjust permissions.
permissions: People with admin access to a repository can manage teams and people with access to a repository.
redirect_from:
  - /github/administering-a-repository/managing-people-and-teams-with-access-to-your-repository
  - /github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: issue-5974
topics:
  - Repositories
shortTitle: Teams & people
---

## About access management for repositories

For each repository that you administer on {% data variables.product.prodname_dotcom %}, you can see an overview of every team or person with access to the repository. From the overview, you can also invite new teams or people, change each team or person's role for the repository, or remove access to the repository.

This overview can help you audit access to your repository, onboard or off-board contractors or employees, and effectively respond to security incidents.

{% data reusables.organizations.mixed-roles-warning %}

For more information about repository roles, see "[Permission levels for a personal account repository](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository)" and "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)."

![Access management overview](/assets/images/help/repository/manage-access-overview.png)

## Filtering the list of teams and people

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
{% data reusables.repositories.click-collaborators-teams %}
{% else %}
{% data reusables.repositories.navigate-to-manage-access %}
{% endif %}
1. Under "Manage access", in the search field, start typing the name of the team or person you'd like to find. Optionally, use the dropdown menus to filter your search. 
  ![Search field for filtering list of teams or people with access](/assets/images/help/repository/manage-access-filter.png)

## Changing permissions for a team or person

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
{% data reusables.repositories.click-collaborators-teams %}
{% else %}
{% data reusables.repositories.navigate-to-manage-access %}
{% endif %}
4. Under "Manage access", find the team or person whose role you'd like to change, then select the Role drop-down and click a new role.
  ![Using the "Role" drop-down to select new permissions for a team or person](/assets/images/help/repository/manage-access-role-drop-down.png)

## Inviting a team or person

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
{% data reusables.repositories.click-collaborators-teams %}
{% else %}
{% data reusables.repositories.navigate-to-manage-access %}
{% endif %}
{% data reusables.organizations.invite-teams-or-people %}
5. In the search field, start typing the name of the team or person to invite, then click a name in the list of matches.
  ![Search field for typing the name of a team or person to invite to the repository](/assets/images/help/repository/manage-access-invite-search-field.png)
6. Under "Choose a role", select the repository role to grant to the team or person, then click **Add NAME to REPOSITORY**.
  ![Selecting permissions for the team or person](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## Removing access for a team or person

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
{% data reusables.repositories.click-collaborators-teams %}
{% else %}
{% data reusables.repositories.navigate-to-manage-access %}
{% endif %}
4. Under "Manage access", find the team or person whose access you'd like to remove, then click {% octicon "trash" aria-label="The trash icon" %}.
  ![trash icon for removing access](/assets/images/help/repository/manage-access-remove.png)

## Further reading

- "[Setting repository visibility](/github/administering-a-repository/setting-repository-visibility)"
- "[Setting base permissions for an organization](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization)"
