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
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

## 查看仓库的包

查看包的权限取决于几个因素。 默认情况下，您可以查看您发布的所有包。

仓库作用域的包从拥有该包的仓库继承权限和可见性。 下面的注册表使用此类权限：{% ifversion not fpt or ghec %}
- Docker 注册表 (`docker.pkg.github.com`){% endif %}
- npm 注册表
- RubyGems 注册表
- Apache Maven 注册表
- NuGet 注册表

{% ifversion fpt or ghec %}
容器注册表提供粒度权限和可见性设置，可针对个人用户或组织帐户拥有的每个包进行自定义。 您可以选择使用粒度权限或连接包到仓库并继承它的权限。 更多信息请参阅“[将仓库连接到包](/packages/learn-github-packages/connecting-a-repository-to-a-package)”。
{% endif %}

更多信息请参阅“[关于 GitHub Packages 的权限](/packages/learn-github-packages/about-permissions-for-github-packages)”{% ifversion fpt or ghec %} 或“[配置包的访问控制和可见性](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)”。{% endif %}

{% data reusables.package_registry.package-page-info %}

## 查看仓库的包

您可以查找并查看位于特定仓库中的包。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}

## 查看组织的包

您可以查找并查看位于您所属组织的仓库中的包。

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
3. 在组织名称下，单击 {% octicon "package" aria-label="The package icon" %} **Packages（包）**。
{% data reusables.package_registry.navigate-to-packages %}

## 查看您的包

您可以跨所有组织和仓库查找并查看您发布的任何包。

{% data reusables.profile.access_profile %}
2. 在个人资料页面顶部的主导航栏中，单击 **Packages（包）**。 ![项目选项卡](/assets/images/help/package-registry/user-packages-tab.png)
{% data reusables.package_registry.navigate-to-packages %}

## 延伸阅读

- “[搜索包](/search-github/searching-on-github/searching-for-packages)”
