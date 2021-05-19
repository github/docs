---
title: 查看包
intro: 您可以查看已发布到仓库的包的详细信息，也可以按组织或用户缩小结果范围。
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

### 查看仓库的包

Your ability to view a package depends on several factors. By default, you can view all packages you have published.

{% data reusables.package_registry.repo-scoped-and-granular-permissions-packages %}

{% data reusables.package_registry.package-page-info %}

### 查看仓库的包

You can find and view a package located in a particular repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}

### 查看组织的包

You can find and view a package located in the repositories of an organization you belong to.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
3. 在组织名称下，单击 {% octicon "package" aria-label="The package icon" %} **Packages（包）**。
{% data reusables.package_registry.navigate-to-packages %}

### 查看您的包

You can find and view any package you've published across all organizations and repositories.

{% data reusables.profile.access_profile %}
2. 在个人资料页面顶部的主导航栏中，单击 **Packages（包）**。 ![项目选项卡](/assets/images/help/package-registry/user-packages-tab.png)
{% data reusables.package_registry.navigate-to-packages %}

### 延伸阅读

- “[搜索包](/github/searching-for-information-on-github/searching-for-packages)”
