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
ms.openlocfilehash: 4fe01f80ec64f8029b1b2bce1d776da4eddfbd75
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192839'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## 查看仓库的包

查看包的权限取决于几个因素。 默认情况下，您可以查看您发布的所有包。

{% ifversion packages-registries-v2 %} 存储库范围的包从拥有该包的存储库继承权限和可见性。 某些注册表仅支持存储库范围的包。 有关这些注册表的列表，请参阅“[关于 {% data variables.product.prodname_registry %} 的权限](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)”。

其他注册表提供精细权限和可见性设置，可针对个人用户或组织帐户拥有的每个包进行自定义。 可以选择使用精细权限或将存储库连接到包并继承存储库的权限。 有关详细信息，请参阅“[将存储库连接到包](/packages/learn-github-packages/connecting-a-repository-to-a-package)”和“[配置包的访问控制和可见性](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)”。

{% else %}

包从托管包的存储库继承其权限和可见性。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_registry %} 的权限](/packages/learn-github-packages/about-permissions-for-github-packages)”。

{% endif %}

{% data reusables.package_registry.package-page-info %}

## 查看仓库的包

您可以查找并查看位于特定仓库中的包。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.navigate-to-packages %}

## 查看组织的包

您可以查找并查看位于您所属组织的仓库中的包。

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %}
3. 在组织名称下，单击 {% octicon "package" aria-label="The package icon" %}“包”。
{% data reusables.package_registry.navigate-to-packages %}

## 查看您的包

您可以跨所有组织和仓库查找并查看您发布的任何包。 

{% data reusables.profile.access_profile %}
2. 在个人资料页面顶部的主导航栏中，点击“包”。
  ![“项目”选项卡](/assets/images/help/package-registry/user-packages-tab.png) {% data reusables.package_registry.navigate-to-packages %}

## 延伸阅读

- [搜索包](/search-github/searching-on-github/searching-for-packages)
