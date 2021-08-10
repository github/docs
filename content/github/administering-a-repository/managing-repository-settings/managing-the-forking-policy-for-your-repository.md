---
title: Managing the forking policy for your repository
intro: 'You can allow or prevent the forking of a specific private{% ifversion fpt or ghae or ghes %} or internal{% endif %} repository owned by an organization.'
redirect_from:
  - /articles/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/managing-the-forking-policy-for-your-repository
permissions: People with admin permissions for a repository can manage the forking policy for the repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Manage the forking policy
---
An organization owner must allow forks of private{% ifversion fpt or ghae or ghes %} and internal{% endif %} repositories on the organization level before you can allow or disallow forks for a specific repository. For more information, see "[Managing the forking policy for your organization](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)."

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Under "Features", select **Allow forking**.
  ![Checkbox to allow or disallow forking of a private repository](/assets/images/help/repository/allow-forking-specific-org-repo.png)

## Further reading

- "[About forks](/articles/about-forks)"
- "[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization)"
