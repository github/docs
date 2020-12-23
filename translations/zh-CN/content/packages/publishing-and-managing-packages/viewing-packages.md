---
title: 查看包
intro: '您可以查看已发布到仓库的包的详细信息，也可以按组织或用户缩小结果范围。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/publishing-and-managing-packages/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/viewing-packages
permissions: 任何对仓库有读取权限的人都可以查看该仓库的包。
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### 查看仓库的包

包必须安装在仓库层级，但您可以查看某个组织中的所有包和您发布的所有包。 {% data reusables.package_registry.package-page-info %}

### 查看仓库的包

您可以查看仓库中的所有包，也可以在仓库中搜索特定的包。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}

### 查看组织的包

您可以查看组织中安装的所有包，也可以搜索组织仓库中安装的特定包。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
3. 在组织名称下，单击
{% octicon "package" aria-label="The package icon" %} **包**.
{% data reusables.package_registry.navigate-to-packages %}

### 查看您的包

您可以查看您安装的所有包，也可以跨所有组织和仓库搜索您安装的特定包。

{% data reusables.profile.access_profile %}
2. 在个人资料页面顶部的主导航栏中，单击 **Packages（包）**。 ![项目选项卡](/assets/images/help/package-registry/user-packages-tab.png)
{% data reusables.package_registry.navigate-to-packages %}

### 延伸阅读

- “[搜索包](/github/searching-for-information-on-github/searching-for-packages)”
