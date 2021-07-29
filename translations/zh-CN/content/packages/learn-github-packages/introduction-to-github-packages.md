---
title: GitHub Packages 简介
intro: '{% data variables.product.prodname_registry %} 是一项软件包托管服务，允许您私下为指定的用户托管您的软件包{% if currentversion == "github-ae@latest" %}，或在内部为您的企业{% else %}或公开{% endif %}托管，以及在您的项目中使用软件包作为依赖项。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/about-github-package-registry
  - /github/managing-packages-with-github-package-registry/about-github-package-registry
  - /github/managing-packages-with-github-packages/about-github-packages
  - /packages/publishing-and-managing-packages/about-github-packages
  - /packages/learn-github-packages/about-github-packages
  - /packages/learn-github-packages/core-concepts-for-github-packages
  - /packages/guides/about-github-container-registry
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

### 关于 {% data variables.product.prodname_registry %}

{% data variables.product.prodname_registry %} 是一种包托管服务，与 {% data variables.product.prodname_dotcom %} 完全集成。 {% data variables.product.prodname_registry %} 将您的源代码和软件包组合在一起，以提供集成的权限管理{% if currentVersion != "github-ae@latest" %}和计费{% endif %}，使您能够在 {% data variables.product.product_name %} 上专注于软件开发。

您可以将 {% data variables.product.prodname_registry %} 与 {% data variables.product.product_name %} API、{% data variables.product.prodname_actions %} 以及 web 挂钩集成在一起，以创建端到端的 DevOps 工作流程，其中包括您的代码、CI 和部署解决方案。

{% data variables.product.prodname_registry %} 为常用的包管理器提供不同的包注册表，例如 npm、RubyGems、Apache Maven、Gradle、Docker 和 Nuget。 {% if currentVersion == "free-pro-team@latest" %} {% data variables.product.prodname_container_registry %} 针对容器进行了优化，支持 Docker 和 OCI 映像。{% endif %} 有关 {% data variables.product.prodname_registry %} 支持的不同包注册表的更多信息，请参阅“[使用 {% data variables.product.prodname_registry %} 注册表](/packages/working-with-a-github-packages-registry)”。

{% if currentVersion == "free-pro-team@latest" %}

![显示支持 Docker、容器注册表、RubyGems、npm、Apache Maven、NuGet 和 Gradle 的软件包的示意图](/assets/images/help/package-registry/packages-diagram-with-container-registry.png)

{% else %}

![显示支持 Docker、RubyGems、npm、Apache Maven、Gradle、Nuget 和 Docker 的软件包的示意图](/assets/images/help/package-registry/packages-diagram-without-container-registry.png)

{% endif %}

您可以在 {% data variables.product.product_name %} 上查看包的自述文件、元数据（如许可）、下载统计、版本历史记录等。 更多信息请参阅“[查看包](/packages/manage-packages/viewing-packages)”。

#### 包的权限和可见性概述

|                                                                                                                                                                                                                                                                                                                                                                                 |                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 权限                                                                                                                                                                                                                                                                                                                                                                              |                                                                  |
| {% if currentVersion == "free-pro-team@latest" %}包的权限继承自托管该包的仓库或 {% data variables.product.prodname_container_registry %} 中的包，可以为特定的用户或组织帐户定义它们。 更多信息请参阅“[配置包的访问控制和可见性](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)”。 {% else %}每个包都继承托管包的仓库的权限。 <br><br>例如，对仓库有读取权限的任何人都可以将包安装为项目中的依赖项，有写入权限的任何人都可以发布新的包版本。{% endif %} |                                                                  |
|                                                                                                                                                                                                                                                                                                                                                                                 |                                                                  |
| 可见性                                                                                                                                                                                                                                                                                                                                                                             | {% data reusables.package_registry.public-or-private-packages %}

更多信息请参阅“[关于 {% data variables.product.prodname_registry %} 的权限](/packages/learn-github-packages/about-permissions-for-github-packages)”。

{% if currentVersion == "free-pro-team@latest" %}
### 关于 {% data variables.product.prodname_registry %} 的计费

{% data reusables.package_registry.packages-billing %} {% data reusables.package_registry.packages-spending-limit-brief %} 更多信息请参阅“[关于 {% data variables.product.prodname_registry %} 的计费](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)”。

{% endif %}

### 支持的客户端和格式
<!-- If you make changes to this feature, update /getting-started-with-github/github-language-support to reflect any changes to supported clients or formats. -->

{% data variables.product.prodname_registry %} 使用您已经熟悉的原生包工具命令来发布和安装包版本。
#### 对包注册表的支持

| 语言         | 描述                     | 包格式                                 | 包客户端         |
| ---------- | ---------------------- | ----------------------------------- | ------------ |
| JavaScript | 节点包管理器                 | `package.json`                      | `npm`        |
| Ruby       | RubyGems 包管理器          | `Gemfile`                           | `gem`        |
| Java       | Apache Maven 项目管理和理解工具 | `pom.xml`                           | `mvn`        |
| Java       | Java 的 Gradle 构建自动化工具  | `build.gradle` 或 `build.gradle.kts` | `gradle`     |
| .NET       | .NET 的 NuGet 包管理       | `nupkg`                             | `dotnet` CLI |
| 不适用        | Docker 容器管理平台          | `Dockerfile`                        | `Docker`     |

{% if currentVersion ver_gt "enterprise-server@2.22" %}
{% note %}

**注：**禁用子域隔离时，不支持 Docker。

{% endnote %}

有关子域隔离的更多信息，请参阅“[启用子域隔离](/enterprise/admin/configuration/enabling-subdomain-isolation)”。

{% endif %}

有关配置包客户端以用于 {% data variables.product.prodname_registry %} 的更多信息，请参阅“[使用 {% data variables.product.prodname_registry %} 注册表](/packages/working-with-a-github-packages-registry)“。

{% if currentVersion == "free-pro-team@latest" %}
有关 Docker 和 {% data variables.product.prodname_container_registry %} 的更多信息，请参阅“[使用容器注册表](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)”和“[使用 Docker 注册表](/packages/working-with-a-github-packages-registry/working-with-the-docker-registry)”。
{% endif %}
### 向 {% data variables.product.prodname_registry %} 验证

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### 管理包

{% if currentVersion == "free-pro-team@latest" %}
您可以在 {% data variables.product.product_name %} 用户界面中或使用 REST API 删除包。 更多信息请参阅“[{% data variables.product.prodname_registry %} API](/rest/reference/packages)”。
{% endif %}

{% if currentVersion ver_gt "enterprise-server@3.0" %}
您可以在 {% data variables.product.product_name %} 用户界面中删除私有或公共包。 或者对 repo-scoped 包，您可以使用 GraphQL 删除私有包的版本。
{% endif %}

{% if currentVersion ver_lt "enterprise-server@3.1" %}
您可以在 {% data variables.product.product_name %} 用户界面中或使用 GraphQL API 删除私有包的版本。
{% endif %}

{% if currentVersion == "github-ae@latest" %}
您可以在 {% data variables.product.product_name %} 用户界面中或使用 GraphQL API 删除包的版本。
{% endif %}

使用 GraphQL API 查询和删除私有包时，必须使用与向 {% data variables.product.prodname_registry %} 验证时相同的令牌。 更多信息请参阅“{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}[删除和恢复包](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif currentVersion ver_lt "enterprise-server@3.1" or currentVersion == "github-ae@latest" %}[删除包](/packages/learn-github-packages/deleting-a-package){% endif %}”和“[使用 GraphQL 建立呼叫](/graphql/guides/forming-calls-with-graphql)”。

您可以配置 web 挂钩来订阅与包相关的事件，例如包的发布或更新等事件。 更多信息请参阅“[`package` web 挂钩事件](/webhooks/event-payloads/#package)”。

### 联系支持

{% if currentVersion == "free-pro-team@latest" %}
如果您对 {% data variables.product.prodname_registry %} 有反馈或功能请求，请使用 [{% data variables.product.prodname_registry %} 反馈表](https://support.github.com/contact/feedback?contact%5Bcategory%5D=github-packages)。

如果在 {% data variables.product.prodname_registry %} 方面遇到以下问题，请使用[我们的联系表](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages)联系 {% data variables.contact.github_support %}：

* 遇到任何与文档相矛盾的事情
* 遇到模糊或不清楚的错误
* 发布的包中含有敏感数据，例如违反 GDPR、API 密钥或个人身份信息

{% else %}
如果您需要对 {% data variables.product.prodname_registry %} 的支持，请联系网站管理员。

{% endif %}
