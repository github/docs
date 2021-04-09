---
title: 关于 GitHub 包
intro: '{% data variables.product.prodname_registry %} 是一项软件包托管服务，允许您私下为指定的用户托管您的软件包{% if currentversion == "github-ae@latest" %}，或在内部为您的企业{% else %}或公开{% endif %}托管，以及在您的项目中使用软件包作为依赖项。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/about-github-package-registry
  - /github/managing-packages-with-github-package-registry/about-github-package-registry
  - /github/managing-packages-with-github-packages/about-github-packages
  - /packages/publishing-and-managing-packages/about-github-packages
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

您可以在一个仓库中托管多个包，并通过查看包的自述文件、下载统计、版本历史等，了解每个包的更多信息。

![显示支持 npm、RubyGems、Apache Maven、Gradle、Nuget 和 Docker 的软件包的示意图](/assets/images/help/package-registry/packages-overview-diagram.png)

{% if currentVersion == "free-pro-team@latest" %}
创建 {% data variables.product.prodname_actions %} 工作流程时，您可以使用 `GITHUB_TOKEN` 发布和安装 {% data variables.product.prodname_registry %} 中的包，无需存储和管理个人访问令牌。 更多信息请参阅“[关于 {% data variables.product.prodname_github_container_registry %}](/packages/guides/about-github-container-registry)”。

{% data reusables.package_registry.container-registry-beta %}

{% endif %}

#### 查看包

您可以在 {% data variables.product.product_name %} 上查看软件包的 README、一些元数据（如许可）、下载统计、版本历史记录等。 更多信息请参阅“[查看包](/packages/manage-packages/viewing-packages)”。

#### 关于包权限和可见性

|      | 包注册表                                                                                     |
| ---- | ---------------------------------------------------------------------------------------- |
| 托管位置 | 您可以在一个仓库中托管多个包。                                                                          |
| 权限   | 每个包都继承托管包的仓库的权限。 <br><br>例如，对仓库有读取权限的任何人都可以将包安装为项目中的依赖项，有写入权限的任何人都可以发布新的包版本。 |
| 可见性  | {% data reusables.package_registry.public-or-private-packages %}

{% if currentVersion == "free-pro-team@latest" %}
### 关于 {% data variables.product.prodname_registry %} 的计费

{% data reusables.package_registry.packages-billing %} {% data reusables.package_registry.packages-spending-limit-brief %} 更多信息请参阅“[关于 {% data variables.product.prodname_registry %} 的计费](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)”。

{% data reusables.package_registry.container-registry-beta-billing-note %}
{% endif %}

### 支持的客户端和格式

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

有关配置包客户端以用于 {% data variables.product.prodname_registry %} 的更多信息，请参阅“[{% data variables.product.prodname_registry %} 的包客户端指南](/packages/guides/package-client-guides-for-github-packages)”。

{% if currentVersion == "free-pro-team@latest" %}
有关 Docker 和
{% data variables.product.prodname_github_container_registry %} 的更多信息，请参阅“[{% data variables.product.prodname_registry %} 的容器指南](/packages/guides/container-guides-for-github-packages)”。
{% endif %}
### 向 {% data variables.product.prodname_registry %} 验证

{% data reusables.package_registry.authenticate-packages %}

### 管理包

要安装或发布包，您必须使用具有适当作用域的令牌，并且您的用户帐户必须对该仓库具有适当的权限。

例如：
-  要从仓库下载和安装包，您的令牌必须具有 `read:packages` 作用域，并且您的用户帐户必须对该仓库具有读取权限。
- {% if currentversion == "free-proteam@latest" or if currentversion ver_gt "enterprise-server@3. %}要在 {% data variables.product.product_name %}上删除软件包，您的令牌至少必须有 `delete:packages` 和 `read:packages` 作用域。 Repo-scoped 软件包也需要 `repo` 作用域。{% elsif currentVersion ver_lt "enterprise-server@3.1" %}要在 {% data variables.product.product_name %} 上删除私有软件的指定版本，您的令牌必须具有 `delete:packages` 和 `repo` 作用域。 公共包不能删除。{% elsif currentVersion == "github-ae@latest" %}要在 {% data variables.product.product_name %} 上删除包的指定版本，您必须具有 `delete:packages` 和 `repo` 作用域。{% endif %} 更多信息请参阅“{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}[删除和恢复包](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif currentVersion ver_lt "enterprise-server@3.1" or currentVersion == "github-ae@latest" %}[删除包](/packages/learn-github-packages/deleting-a-package){% endif %}”。

| 作用域                                                                                                                                                                                                                                                                                                                                                                                                     | 描述                                                      | 仓库权限   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------ |
| `read:packages`                                                                                                                                                                                                                                                                                                                                                                                         | 从 {% data variables.product.prodname_registry %} 下载和安装包 | 读取     |
| `write:packages`                                                                                                                                                                                                                                                                                                                                                                                        | 将包上传和发布到 {% data variables.product.prodname_registry %} | 写入     |
| `delete:packages`                                                                                                                                                                                                                                                                                                                                                                                       |                                                         |        |
| {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} 从 {% data variables.product.prodname_registry %} 删除包 {% elsif currentVersion ver_lt "enterprise-server@3.1" %} 从 {% data variables.product.prodname_registry %} 删除私有包的指定版本{% elsif currentVersion == "github-ae@latest" %} 从 {% data variables.product.prodname_registry %} 删除包的指定版本 {% endif %} |                                                         |        |
| 管理员                                                                                                                                                                                                                                                                                                                                                                                                     |                                                         |        |
| `repo`                                                                                                                                                                                                                                                                                                                                                                                                  | 上传和删除包（连同 `write:packages` 或 `delete:packages`）         | 写入或管理员 |

创建 {% data variables.product.prodname_actions %} 工作流程时，您可以使用 `GITHUB_TOKEN` 发布和安装 {% data variables.product.prodname_registry %} 中的包，无需存储和管理个人访问令牌。

更多信息请参阅：
- 遇到任何与文档相矛盾的事情
- “[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token/)”。
- 发布的包中含有敏感数据，例如违反 GDPR、API 密钥或个人身份信息

### 管理包

{% if currentVersion == "free-pro-team@latest" %}
您可以在
{% data variables.product.product_name %} 用户界面中或使用 REST API 删除包。 更多信息请参阅“[{% data variables.product.prodname_registry %} API](/rest/reference/packages)”。
{% endif %}

{% if currentVersion ver_gt "enterprise-server@3.0" %}
您可以在
{% data variables.product.product_name %} 用户界面中删除私有或公共包。 或者对 repo-scoped 包，您可以使用 GraphQL 删除私有包的版本。
{% endif %}

{% if currentVersion ver_lt "enterprise-server@3.1" %}
您可以在
{% data variables.product.product_name %} 用户界面中或使用 GraphQL API 删除私有包的版本。
{% endif %}

{% if currentVersion == "github-ae@latest" %}
您可以在
{% data variables.product.product_name %} 用户界面中或使用 GraphQL API 删除私有包的版本。
{% endif %}

使用 GraphQL API 查询和删除私有包时，必须使用与向 {% data variables.product.prodname_registry %} 验证时相同的令牌。 更多信息请参阅“{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}[删除和恢复包](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif currentVersion ver_lt "enterprise-server@3.1" or currentVersion == "github-ae@latest" %}[删除包](/packages/learn-github-packages/deleting-a-package){% endif %}”和“[使用 GraphQL 建立呼叫](/graphql/guides/forming-calls-with-graphql)”。

您可以配置 web 挂钩来订阅与包相关的事件，例如包的发布或更新等事件。 更多信息请参阅“[`package` web 挂钩事件](/webhooks/event-payloads/#package)”。

### 联系支持

{% if currentVersion == "free-pro-team@latest" %}
如果您对
{% data variables.product.prodname_registry %} 有反馈或功能请求，请使用 [{% data variables.product.prodname_registry %} 反馈表](https://support.github.com/contact/feedback?contact%5Bcategory%5D=github-packages)。

如果在 {% data variables.product.prodname_registry %} 方面遇到以下问题，请使用[我们的联系表](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages)联系 {% data variables.contact.github_support %}：

* 遇到任何与文档相矛盾的事情
* 遇到模糊或不清楚的错误
* 发布的包中含有敏感数据，例如违反 GDPR、API 密钥或个人身份信息

{% else %}
如果您需要对
{% data variables.product.prodname_registry %} 的支持，请联系网站管理员。

{% endif %}
