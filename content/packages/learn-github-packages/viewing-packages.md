---
title: Viewing packages
intro: 'You can see details about packages published to a repository, and narrow results by organization or user.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/publishing-and-managing-packages/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/viewing-packages
  - /packages/publishing-and-managing-packages/viewing-packages
  - /packages/manage-packages/viewing-packages
permissions: You must have at least read permissions to view a package.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

### About package views

Your ability to view a package depends on several factors. By default, you can view all packages you have published. 

{% data reusables.package_registry.repo-scoped-and-granular-permissions-packages %}

{% data reusables.package_registry.package-page-info %}

### Viewing a repository's packages

You can find and view a package located in a particular repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}

### Viewing an organization's packages

You can find and view a package located in the repositories of an organization you belong to.

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
3. Under your organization name, click {% octicon "package" aria-label="The package icon" %} **Packages**.
{% data reusables.package_registry.navigate-to-packages %}

### Viewing your packages

You can find and view any package you've published across all organizations and repositories. 

{% data reusables.profile.access_profile %}
2. On the top of the profile page, in the main navigation, click **Packages**.
  ![Project tab](/assets/images/help/package-registry/user-packages-tab.png)
{% data reusables.package_registry.navigate-to-packages %}

### Further reading

- "[Searching for packages](/github/searching-for-information-on-github/searching-for-packages)"
