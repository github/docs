---
title: Introduction to GitHub Packages
intro: '{% data variables.product.prodname_registry %} 是一项软件包托管服务，允许您私下为指定的用户托管您的软件包{% if currentVersion == "github-ae@latest" %}，或在内部为您的企业{% else %}或公开{% endif %}托管，以及在您的项目中使用软件包作为依赖项。'
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

{% data variables.product.prodname_registry %} offers different package registries for commonly used package managers, such as npm, RubyGems, Apache Maven, Gradle, Docker, and NuGet. {% if currentVersion == "free-pro-team@latest" %}The {% data variables.product.prodname_container_registry %} is optimized for containers and supports Docker and OCI images.{% endif %} For more information on the different package registries that {% data variables.product.prodname_registry %} supports, see "[Working with a {% data variables.product.prodname_registry %} registry](/packages/working-with-a-github-packages-registry)."

{% if currentVersion == "free-pro-team@latest" %}

![Diagram showing packages support for Docker, Container registry, RubyGems, npm, Apache Maven, NuGet, and Gradle](/assets/images/help/package-registry/packages-diagram-with-container-registry.png)

{% else %}

![Diagram showing packages support for Docker, RubyGems, npm, Apache Maven, Gradle, NuGet, and Docker](/assets/images/help/package-registry/packages-diagram-without-container-registry.png)

{% endif %}

You can view a package's README, as well as metadata such as licensing, download statistics, version history, and more on {% data variables.product.product_name %}. 更多信息请参阅“[查看包](/packages/manage-packages/viewing-packages)”。

#### Overview of package permissions and visibility

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| 权限                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                                                                  |
| {% if currentVersion == "free-pro-team@latest" %}The permissions for a package are either inherited from the repository where the package is hosted or, for packages in the {% data variables.product.prodname_container_registry %}, they can be defined for specific user or organization accounts. For more information, see "[Configuring a package’s access control and visibility](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)." {% else %}Each package inherits the permissions of the repository where the package is hosted. <br> <br> For example, anyone with read permissions for a repository can install a package as a dependency in a project, and anyone with write permissions can publish a new package version.{% endif %} |                                                                  |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                  |
| 可见性                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | {% data reusables.package_registry.public-or-private-packages %}

For more information, see "[About permissions for {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages)."

{% if currentVersion == "free-pro-team@latest" %}
### 关于 {% data variables.product.prodname_registry %} 的计费

{% data reusables.package_registry.packages-billing %} {% data reusables.package_registry.packages-spending-limit-brief %} 更多信息请参阅“[关于 {% data variables.product.prodname_registry %} 的计费](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)”。

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

For more information about configuring your package client for use with {% data variables.product.prodname_registry %}, see "[Working with a {% data variables.product.prodname_registry %} registry](/packages/working-with-a-github-packages-registry)."

{% if currentVersion == "free-pro-team@latest" %}
For more information about Docker and the {% data variables.product.prodname_container_registry %}, see "[Working with the Container registry](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)" and "[Working with the Docker registry](/packages/working-with-a-github-packages-registry/working-with-the-docker-registry)."
{% endif %}
### 向 {% data variables.product.prodname_registry %} 验证

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### 管理包

{% if currentVersion == "free-pro-team@latest" %}
You can delete a package in the {% data variables.product.product_name %} user interface or using the REST API. 更多信息请参阅“[{% data variables.product.prodname_registry %} API](/rest/reference/packages)”。
{% endif %}

{% if currentVersion ver_gt "enterprise-server@3.0" %}
You can delete a private or public package in the {% data variables.product.product_name %} user interface. 或者对 repo-scoped 包，您可以使用 GraphQL 删除私有包的版本。
{% endif %}

{% if currentVersion ver_lt "enterprise-server@3.1" %}
您可以在 {% data variables.product.product_name %} 用户界面中或使用 GraphQL API 删除私有包的版本。
{% endif %}

{% if currentVersion == "github-ae@latest" %}
You can delete a version of a package in the {% data variables.product.product_name %} user interface or using the GraphQL API.
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
