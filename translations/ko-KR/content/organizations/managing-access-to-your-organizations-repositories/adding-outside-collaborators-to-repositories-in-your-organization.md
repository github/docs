---
title: Adding outside collaborators to repositories in your organization
intro: 'An *outside collaborator* is a person who isn''t explicitly a member of your organization, but who has Read, Write, or Admin permissions to one or more repositories in your organization.'
redirect_from:
  - /articles/adding-outside-collaborators-to-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-outside-collaborators-to-repositories-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

{% data reusables.organizations.owners-and-admins-can %} add outside collaborators to a repository, unless an organization owner has restricted the ability to invite collaborators. For more information, see "[Setting permissions for adding outside collaborators](/articles/setting-permissions-for-adding-outside-collaborators)."

{% data reusables.organizations.outside-collaborators-use-seats %}

{% if currentVersion != "github-ae@latest" %}
If your organization [requires members and outside collaborators to use two-factor authentication](/articles/requiring-two-factor-authentication-in-your-organization), they must enable two-factor authentication before they can accept your invitation to collaborate on an organization repository.
{% endif %}

{% data reusables.organizations.outside_collaborator_forks %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.repositories.navigate-to-manage-access %}
{% data reusables.organizations.invite-teams-or-people %}
5. In the search field, start typing the name of person you want to invite, then click a name in the list of matches. ![Search field for typing the name of a person to invite to the repository](/assets/images/help/repository/manage-access-invite-search-field.png)
6. Under "Choose a role", select the permissions to grant to the person, then click **Add NAME to REPOSITORY**. ![Selecting permissions for the person](/assets/images/help/repository/manage-access-invite-choose-role-add.png)
{% else %}
5. In the left sidebar, click **Collaborators & teams**. ![Repository settings sidebar with Collaborators & teams highlighted](/assets/images/help/repository/org-repo-settings-collaborators-and-teams.png)
6. Under "Collaborators", type the name of the person you'd like to give access to the repository, then click **Add collaborator**. ![The Collaborators section with the Octocat's username entered in the search field](/assets/images/help/repository/org-repo-collaborators-find-name.png)
7. Next to the new collaborator's name, choose the appropriate permission level: *Write*, *Read*, or *Admin*. ![The repository permissions picker](/assets/images/help/repository/org-repo-collaborators-choose-permissions.png)
{% endif %}

### 더 읽을거리

- "[Converting an organization member to an outside collaborator](/articles/converting-an-organization-member-to-an-outside-collaborator)"
- "[Removing an outside collaborator from an organization repository](/articles/removing-an-outside-collaborator-from-an-organization-repository)"
