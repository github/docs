---
title: 使用 GitHub Packages 注册表
shortTitle: 使用 GitHub Packages 注册表
intro: '了解如何使用受支持的 {% data variables.product.prodname_registry %} 注册表。'
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
![显示支持 Docker、容器注册表、RubyGems、npm、Apache Maven、NuGet 和 Gradle 的软件包的示意图](/assets/images/help/package-registry/packages-diagram-with-container-registry.png)
{% else %}
![显示支持 Docker、RubyGems、npm、Apache Maven、Gradle、Nuget 和 Docker 的软件包的示意图](/assets/images/help/package-registry/packages-diagram-without-container-registry.png)
{% endif %}
