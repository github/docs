---
title: 发布包
intro: '您可以将包发布到 {% data variables.product.prodname_registry %} 以供他人下载和再用。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/publishing-a-package
permissions: 对仓库有写入权限的任何人都可以向该仓库发布包。
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### 关于发布的包

您可以在包页面上提供说明和其他详细信息，例如安装和使用说明，以帮助他人了解和使用您的包。 {% data variables.product.product_name %} 提供每个版本的元数据，例如发布日期、下载活动和最新版本。 要查看示例包页面，请参阅 [@Codertocat/hello-world-npm](https://github.com/Codertocat/hello-world-npm/packages/10696?version=1.0.1)。

{% data reusables.package_registry.public-or-private-packages %} 一个仓库可包含多个包。 为避免混淆，请确保使用自述文件和说明清楚地阐明每个包的相关信息。

{% data reusables.package_registry.package-immutability %}

{% if currentVersion == "free-pro-team@latest" %}
如果软件包的新版本修复了安全漏洞，您应该在仓库中发布安全通告。
{% data variables.product.prodname_dotcom %} reviews each published security advisory and may use it to send {% data variables.product.prodname_dependabot_alerts %} to affected repositories. 更多信息请参阅“[关于 GitHub 安全通告](/github/managing-security-vulnerabilities/about-github-security-advisories)”。
{% endif %}

### 发布包

您可以按照一般准则，使用任何{% if currentVersion == "free-pro-team@latest" %}支持的包客户端{% else %}为您的实例启用的包类型{% endif %}将包发布到 {% data variables.product.prodname_registry %}。

1. 针对要完成的任务，创建具有适当作用域的访问令牌或使用现有的此类令牌。 更多信息请参阅“[关于 {% data variables.product.prodname_registry %}](/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages)”。
2. 按照包客户端的说明，使用访问令牌向 {% data variables.product.prodname_registry %} 验证。
3. 按照包客户端的说明发布包。

有关包客户端的具体说明，请参阅“[将 {% data variables.product.prodname_registry %} 用于项目的生态系统](/packages/using-github-packages-with-your-projects-ecosystem)”。

在发布包后，您可以在 {% data variables.product.prodname_dotcom %} 上查看该包。 更多信息请参阅“[查看包](/packages/publishing-and-managing-packages/viewing-packages)”。
