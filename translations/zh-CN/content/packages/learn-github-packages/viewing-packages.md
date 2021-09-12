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

查看包的权限取决于几个因素。 默认情况下，您可以查看您发布的所有包。

{% data reusables.package_registry.repo-scoped-and-granular-permissions-packages %}

{% data reusables.package_registry.package-page-info %}

### 查看仓库的包

您可以查找并查看位于特定仓库中的包。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}

### 查看组织的包

您可以查找并查看位于您所属组织的仓库中的包。

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
3. 在组织名称下，单击 {% octicon "package" aria-label="The package icon" %} **Packages（包）**。
{% data reusables.package_registry.navigate-to-packages %}

### 查看您的包

您可以跨所有组织和仓库查找并查看您发布的任何包。

{% data reusables.profile.access_profile %}
2. 在个人资料页面顶部的主导航栏中，单击 **Packages（包）**。 ![项目选项卡](/assets/images/help/package-registry/user-packages-tab.png)
{% data reusables.package_registry.navigate-to-packages %}

### 延伸阅读

- “[搜索包](/github/searching-for-information-on-github/searching-for-packages)”
