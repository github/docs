---
title: Viewing packages
intro: 'You can see details about packages published to a repository, and narrow results by organization or user.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/publishing-and-managing-packages/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/viewing-packages
  - /packages/publishing-and-managing-packages/viewing-packages
permissions: Anyone with read permissions to a repository can view the repository's packages.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### About package views

Packages must be installed at the repository level, but you can view all packages in an organization and all packages you've published. {% data reusables.package_registry.package-page-info %}

### Viewing a repository's packages

You can see all the packages in a repository and search for a specific package in the repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}

### Viewing an organization's packages

You can see all the packages installed in an organization and search for a specific package installed in an organization's repositories.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
3. 조직 이름에서 클릭하십시오.
{% octicon "package" aria-label="The package icon" %} **Packages**.
{% data reusables.package_registry.navigate-to-packages %}

### Viewing your packages

You can see all the packages you've installed and search for a specific package you've installed across all organizations and repositories.

{% data reusables.profile.access_profile %}
2. On the top of the profile page, in the main navigation, click **Packages**. ![Project tab](/assets/images/help/package-registry/user-packages-tab.png)
{% data reusables.package_registry.navigate-to-packages %}

### 더 읽을거리

- "[Searching for packages](/github/searching-for-information-on-github/searching-for-packages)"
