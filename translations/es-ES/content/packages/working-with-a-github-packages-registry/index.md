---
title: Trabajar con un registro de Paquetes de GitHub
shortTitle: Trabajar con un registro de Paquetes de GitHub
intro: 'Aprende a utilizar el registro compatible del {% data variables.product.prodname_registry %}.'
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
![Diagrama que muestra la compatibilidad de paquetes para Docker, el registro de contenedores, RubyGems, npm, Apache Maven, NuGet y Gradle](/assets/images/help/package-registry/packages-diagram-with-container-registry.png)
{% else %}
![Diagrama ue muestra la compatibilidad de paquetes para Docker, RubyGems, npm, Apache Maven, Gradle, NuGet y Docker](/assets/images/help/package-registry/packages-diagram-without-container-registry.png)
{% endif %}
