---
title: 安装包
intro: '您可以从 {% data variables.product.prodname_registry %} 安装包，并将包用作自己项目中的依赖项。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/installing-a-package
permissions: 对仓库有读取权限的任何人都可以从该仓库安装包。
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### 关于包的安装

您可以搜索 {% data variables.product.product_name %}，在 {% data variables.product.prodname_registry %} 中找到可安装在自己项目中的包。 更多信息请参阅“[搜索 {% data variables.product.prodname_registry %} 中的包](/github/searching-for-information-on-github/searching-for-packages)”。

找到包后，您可以在包页面上阅读包的说明以及安装和使用说明。

### 安装包

您可以按照一般准则，使用任何{% if currentVersion == "free-pro-team@latest" %}支持的包客户端{% else %}为您的实例启用的包类型{% endif %}从 {% data variables.product.prodname_registry %} 安装包。

1. 按照包客户端的说明，向 {% data variables.product.prodname_registry %} 验证。 更多信息请参阅“[关于令牌](/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages)”。
2. 按照包客户端的说明安装包。

有关包客户端的具体说明，请参阅“[将 {% data variables.product.prodname_registry %} 用于项目的生态系统](/packages/using-github-packages-with-your-projects-ecosystem)”。
