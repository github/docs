---
title: Managing the forking policy for your repository
intro: 'You can allow or prevent the forking of a specific private{% ifversion ghes or ghec %} or internal{% endif %} repository owned by an organization.'
redirect_from:
  - /articles/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/managing-the-forking-policy-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-the-forking-policy-for-your-repository
permissions: People with admin permissions for a repository can manage the forking policy for the repository.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage the forking policy
---
An organization owner must allow forks of private{% ifversion ghes or ghec %} and internal{% endif %} repositories on the organization level before you can allow or disallow forks for a specific repository. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)."

You can help prevent sensitive information from being exposed by disabling the ability to fork repositories in your organization. For more information, see "[AUTOTITLE](/code-security/getting-started/best-practices-for-preventing-data-leaks-in-your-organization)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Under "Features", select **Allow forking**. If you do not have this option, you may not have permissions to control this setting. Check with the owner of the organization that administers the repository or with the owner of the repository about your access.

## Further reading

* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"
* "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)"
