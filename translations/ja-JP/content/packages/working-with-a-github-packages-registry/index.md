---
title: GitHub Packagesレジストリの利用
shortTitle: GitHub Packagesレジストリの利用
intro: 'サポートされている{% data variables.product.prodname_registry %}レジストリの利用方法を学んでください。'
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
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

{% if currentVersion == "free-pro-team@latest" %}

![Docker、コンテナレジストリ、RubyGems、npm、Apache Maven、NuGet、Gradle のパッケージサポートを示す図](/assets/images/help/package-registry/packages-diagram-with-container-registry.png)

{% else %}

![Docker、RubyGems、npm、Apache Maven、Gradle、Nugetに対するパッケージサポートを示す図](/assets/images/help/package-registry/packages-diagram-without-container-registry.png)

{% endif %}

### 目次

{% link_in_list /working-with-the-npm-registry %}
{% link_in_list /working-with-the-rubygems-registry %}
{% link_in_list /working-with-the-apache-maven-registry %}
{% link_in_list /working-with-the-gradle-registry %}
{% link_in_list /working-with-the-nuget-registry %}
{% link_in_list /working-with-the-docker-registry %}
{% link_in_list /working-with-the-container-registry %}
{% link_in_list /enabling-improved-container-support-with-the-container-registry %}
{% link_in_list /migrating-to-the-container-registry-from-the-docker-registry %}
