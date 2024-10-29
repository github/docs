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
  ghes: '*'
topics:
  - Repositories
shortTitle: Teams & people
---

## About access management for repositories

For each repository that you administer on {% data variables.product.prodname_dotcom %}, you can see an overview of every team or person with access to the repository. From the overview, you can also invite new teams or people, change each team or person's role for the repository, or remove access to the repository.

This overview can help you audit access to your repository, onboard or off-board contractors or employees, and effectively respond to security incidents.

{% data reusables.organizations.mixed-roles-warning %}

{% ifversion repository-collaborators %}

If you're a member of an {% data variables.enterprise.prodname_emu_enterprise %}, you can invite a member of your enterprise to collaborate in a repository that either a user or organization owns. The invited user will only have access to the repository, even if the repository belongs to an organization. The user must be provisioned by your company's identity provider (IdP). For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators-or-repository-collaborators)."

{% data reusables.repositories.repository-collaborators-release-phase %}

{% endif %}

For more information about repository roles, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/permission-levels-for-a-personal-account-repository)" and "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)."

## Filtering the list of teams and people

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.click-collaborators-teams %}
1. Under "Manage access", in the search field, start typing the name of the team or person you'd like to find. Optionally, use the dropdown menus to filter your search. {% ifversion org-custom-role-with-repo-permissions %}

   You can also toggle between the **Direct access** and **Organization access** tabs to view who has direct access to the repository and who can access the repository via a team or organization role.{% endif %}

## Changing permissions for a team or person

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.click-collaborators-teams %}
1. Under "Manage access", next to the team or person whose role you'd like to change, select the **Role** dropdown menu, and click a new role.

## Inviting a team or person

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.click-collaborators-teams %}
{% data reusables.organizations.invite-teams-or-people %}
1. In the search field, start typing the name of the team or person to invite, then click a name in the list of matches.
1. Under "Choose a role", select the repository role to grant to the team or person, then click **Add NAME to REPOSITORY**.

## Removing access for a team or person

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.click-collaborators-teams %}
1. Under "Manage access", next to the team or person whose access you'd like to remove, click **Remove**.

## Further reading

* "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)"
* "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/setting-base-permissions-for-an-organization)"
