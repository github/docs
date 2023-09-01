---
title: Managing an individual's access to an organization repository
intro: You can manage a person's access to a repository owned by your organization.
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-repository-early-access-program
  - /articles/managing-an-individual-s-access-to-an-organization-repository
  - /articles/managing-an-individuals-access-to-an-organization-repository
  - /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-repository
  - /organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository
  - /organizations/managing-user-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository
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

## Managing an individual's access to an organization repository

You can give a person access to a repository or change a person's level of access to a repository in your repository settings. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)."

## Further reading

{% ifversion fpt or ghec %}- "[AUTOTITLE](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)"{% endif %}
- "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)"
