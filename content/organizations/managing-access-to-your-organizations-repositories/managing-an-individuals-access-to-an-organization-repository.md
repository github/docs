---
title: Managing an individual's access to an organization repository
intro: You can manage a person's access to a repository owned by your organization.
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-repository-early-access-program/
  - /articles/managing-an-individual-s-access-to-an-organization-repository
  - /articles/managing-an-individuals-access-to-an-organization-repository
  - /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

People with admin permissions can manage the access of organization members and outside collaborators to an organization repository.

## Removing access to repositories

When you remove a collaborator from a repository in your organization, the collaborator loses read and write access to the repository. If the repository is private and the collaborator has forked the repository, then their fork is also deleted, but the collaborator will still retain any local clones of your repository.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

## Managing an individual's access to an organization repository

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
4. Click either **Members** or **Outside collaborators** to manage people with different types of access. ![Button to invite members or outside collaborators to an organization](/assets/images/help/organizations/select-outside-collaborators.png)
5. To the right of the name of the person you'd like to manage, use the {% octicon "gear" aria-label="The Settings gear" %} drop-down menu, and click **Manage**.
  ![The manage access link](/assets/images/help/organizations/member-manage-access.png)
6. On the "Manage access" page, next to the repository, click **Manage access**.
![Manage access button for a repository](/assets/images/help/organizations/repository-manage-access.png)
7. Review the person's access to a given repository, such as whether they're a collaborator or have access to the repository via team membership.
![Repository access matrix for the user](/assets/images/help/organizations/repository-access-matrix-for-user.png)

## Further reading

{% if currentVersion == "free-pro-team@latest" %}- "[Limiting interactions with your repository](/articles/limiting-interactions-with-your-repository)"{% endif %}
- "[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization)"
