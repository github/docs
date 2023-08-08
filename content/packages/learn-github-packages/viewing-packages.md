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
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

## About package views

Your ability to view a package depends on several factors. By default, you can view all packages you have published.

{% ifversion packages-registries-v2 %}
Repository-scoped packages inherit their permissions and visibility from the repository in which the package is published. Some registries **only** support repository-scoped packages. For a list of these registries, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

Other registries offer you the option of granular permissions and visibility settings that can be customized for each package scoped to a personal account or organization. You can choose to use granular permissions or connect the package to a repository and inherit the repository's permissions. For more information, see "[AUTOTITLE](/packages/learn-github-packages/connecting-a-repository-to-a-package)" and "[AUTOTITLE](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)."

{% else %}

Packages inherit their permissions and visibility from the repository on which they are hosted. For more information, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages)."

{% endif %}

{% data reusables.package_registry.package-page-info %}

## Viewing a repository's packages

You can find and view a package located in a particular repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}

## Viewing an organization's packages

You can find and view a package located in the repositories of an organization you belong to.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
1. Under your organization name, click {% octicon "package" aria-hidden="true" %} **Packages**.
{% data reusables.package_registry.navigate-to-packages %}

## Viewing your packages

You can find and view any package you've published across all organizations and repositories.

{% data reusables.package_registry.package-settings-from-user-level %}
{% data reusables.package_registry.navigate-to-packages %}

## Further reading

- "[AUTOTITLE](/search-github/searching-on-github/searching-for-packages)"
