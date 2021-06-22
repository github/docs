---
title: Managing teams and people with access to your repository
intro: You can see everyone who has access to your repository and adjust permissions.
permissions: Repository administrators can manage teams and people with access to a repository.
redirect_from:
  - /github/administering-a-repository/managing-people-and-teams-with-access-to-your-repository
  - /github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository
versions:
  free-pro-team: '*'
topics:
  - Repositories
---
## About managing access to your repository

For each repository that you administer on {% data variables.product.prodname_dotcom %}, you can see an overview of every team or person with access to the repository. From the overview, you can also invite new teams or people, change each team or person's permissions, or remove access to the repository.

This overview can help you audit access to your repository, onboard or off-board contractors or employees, and effectively respond to security incidents.

For more information about repository permission levels, see "[Permission levels for a user account repository](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository)" and "[Repository permission levels for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization)."

![Access management overview](/assets/images/help/repository/manage-access-overview.png)

## Filtering the list of teams and people

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. Under "Manage access", in the search field, start typing the name of the team or person you'd like to find.
  ![Search field for filtering list of teams or people with access](/assets/images/help/repository/manage-access-filter.png)

## Changing permissions for a team or person

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. Under "Manage access", find the team or person whose permissions you'd like to change, then use the **Role** drop-down to select new permissions.
  ![Using the "Role" drop-down to select new permissions for a team or person](/assets/images/help/repository/manage-access-role-drop-down.png)

## Inviting a team or person

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
{% data reusables.organizations.invite-teams-or-people %}
5. In the search field, start typing the name of the team or person to invite, then click a name in the list of matches.
  ![Search field for typing the name of a team or person to invite to the repository](/assets/images/help/repository/manage-access-invite-search-field.png)
6. Under "Choose a role", select the permissions to grant to the team or person, then click **Add NAME to REPOSITORY**.
  ![Selecting permissions for the team or person](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## Removing access for a team or person

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. Under "Manage access", find the team or person whose access you'd like to remove, then click {% octicon "trash" aria-label="The trash icon" %}.
  ![trash icon for removing access](/assets/images/help/repository/manage-access-remove.png)

## Further reading

- "[Setting repository visibility](/github/administering-a-repository/setting-repository-visibility)"
- "[Setting base permissions for an organization](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization)"
