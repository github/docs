---
title: Working with a GitHub Packages registry
shortTitle: Working with a GitHub Packages registry
intro: 'Learn how to use a supported {% data variables.product.prodname_registry %} registry.'
redirect_from:
  - /github/managing-packages-with-github-packages/using-github-packages-with-your-projects-ecosystem
  - /packages/using-github-packages-with-your-projects-ecosystem
  - /packages/guides
  - /packages/guides/package-client-guides-for-github-packages
  - /packages/guides/container-guides-for-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
children:
  - /working-with-the-npm-registry
  - /working-with-the-rubygems-registry
  - /working-with-the-apache-maven-registry
  - /working-with-the-gradle-registry
  - /working-with-the-nuget-registry
  - /working-with-the-docker-registry
  - /working-with-the-container-registry
  - /enabling-improved-container-support-with-the-container-registry
  - /migrating-to-the-container-registry-from-the-docker-registry
---
{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}
{% if currentVersion == "free-pro-team@latest" %}
![Diagram showing packages support for Docker, Container registry, RubyGems, npm, Apache Maven, NuGet, and Gradle](/assets/images/help/package-registry/packages-diagram-with-container-registry.png)
{% else %}
![Diagram showing packages support for Docker, RubyGems, npm, Apache Maven, Gradle, NuGet, and Docker](/assets/images/help/package-registry/packages-diagram-without-container-registry.png)
{% endif %}
