---
title: Managing an individual's access to an organization repository
intro: You can manage a person's access to a repository owned by your organization.
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-repository-early-access-program
  - /articles/managing-an-individual-s-access-to-an-organization-repository
  - /articles/managing-an-individuals-access-to-an-organization-repository
  - /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage individual access
permissions: People with admin access to a repository can manage access to the repository.
---

## About access to organization repositories

When you remove a collaborator from a repository in your organization, the collaborator loses read and write access to the repository. If the repository is private and the collaborator has forked the repository, then their fork is also deleted, but the collaborator will still retain any local clones of your repository.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
## Managing an individual's access to an organization repository
You can give a person access to a repository or change a person's level of access to a repository in your repository settings. For more information, see "[Managing teams and people with access to your repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)."
{% else %}
## Giving a person access to a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
{% data reusables.organizations.invite-teams-or-people %}
1. In the search field, start typing the name of the person to invite, then click a name in the list of matches.
  ![Search field for typing the name of a team or person to invite to the repository](/assets/images/help/repository/manage-access-invite-search-field.png)
6. Under "Choose a role", select the repository role to assign the person, then click **Add NAME to REPOSITORY**.
  ![Selecting permissions for the team or person](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## Managing an individual's access to an organization repository

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
4. Click either **Members** or **Outside collaborators** to manage people with different types of access. ![Button to invite members or outside collaborators to an organization](/assets/images/help/organizations/select-outside-collaborators.png)
5. To the right of the name of the person you'd like to manage, use the {% octicon "gear" aria-label="The Settings gear" %} drop-down menu, and click **Manage**.
  ![The manage access link](/assets/images/help/organizations/member-manage-access.png)
6. On the "Manage access" page, next to the repository, click **Manage access**.
![Manage access button for a repository](/assets/images/help/organizations/repository-manage-access.png)
7. Review the person's access to a given repository, such as whether they're a collaborator or have access to the repository via team membership.
![Repository access matrix for the user](/assets/images/help/organizations/repository-access-matrix-for-user.png)
{% endif %}
## Further reading

{% ifversion fpt or ghec %}- "[Limiting interactions with your repository](/articles/limiting-interactions-with-your-repository)"{% endif %}
- "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
