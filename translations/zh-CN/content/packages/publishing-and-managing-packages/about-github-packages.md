---
title: 关于 GitHub 包
intro: '{% data variables.product.prodname_registry %} 是一种软件包托管服务，允许您私下或公开托管软件包，并将包用作项目中的依赖项。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/about-github-package-registry
  - /github/managing-packages-with-github-package-registry/about-github-package-registry
  - /github/managing-packages-with-github-packages/about-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### 关于 {% data variables.product.prodname_registry %}

{% data variables.product.prodname_registry %} 是一种包托管服务，与 {% data variables.product.prodname_dotcom %} 完全集成。 {% data variables.product.prodname_registry %} 将您的源代码和包组合在一起，以提供集成的权限管理和计费，使您能够在 {% data variables.product.product_name %} 上专注于软件开发。

您可以将 {% data variables.product.prodname_registry %} 与 {% data variables.product.product_name %} API、{% data variables.product.prodname_actions %} 以及 web 挂钩集成在一起，以创建端到端的 DevOps 工作流程，其中包括您的代码、CI 和部署解决方案。

您可以在一个仓库中托管多个包，并通过查看包的自述文件、下载统计、版本历史等，了解每个包的更多信息。

{% if currentVersion == "free-pro-team@latest" %}
创建 {% data variables.product.prodname_actions %} 工作流程时，您可以使用 `GITHUB_TOKEN` 发布和安装 {% data variables.product.prodname_registry %} 中的包，无需存储和管理个人访问令牌。 更多信息请参阅“[关于 {% data variables.product.prodname_github_container_registry %}](/packages/getting-started-with-github-container-registry/about-github-container-registry)”。

{% data reusables.package_registry.container-registry-beta %}

![Diagram showing Node, RubyGems, Apache Maven, Gradle, Nuget, and the container registry with their hosting urls](/assets/images/help/package-registry/packages-overview-diagram.png)

{% endif %}

#### 查看包

您可以在 {% data variables.product.product_name %} 上查看软件包的 README、一些元数据（如许可）、下载统计、版本历史记录等。 更多信息请参阅“[查看包](/packages/publishing-and-managing-packages/viewing-packages)”。

#### 关于包权限和可见性
{% if currentVersion == "free-pro-team@latest" %}
|      | 包注册表                                                                                                                                                                                                    | {% data variables.product.prodname_github_container_registry %}
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 托管位置 | 您可以在一个仓库中托管多个包。                                                                                                                                                                                         | 您可以在一个组织或用户帐户中托管多个容器映像。                                           |
| 权限   | {% data reusables.package_registry.public-or-private-packages %} 您可以使用 {% data variables.product.prodname_dotcom %} 角色和团队来限制谁可以安装或发布每个包，因为包会继承仓库的权限。 对仓库有读取权限的任何人都可以将包安装为项目中的依赖项，有写入权限的任何人都可以发布新的包版本。 | 对于每个容器映像，您可以选择其他人具有的访问权限级别。 容器映像访问的权限与组织和仓库权限不同。                  |
 可见性 | {% data reusables.package_registry.public-or-private-packages %} | 您可以设置每个容器映像的可见性。 私有容器映像仅对组织内被授予访问权限的人员或团队可见。 公共容器映像对任何人都可见。 | 匿名访问 | N/A| 您可以匿名访问公共容器映像。

{% else %}
|      | 包注册表                                                                                                                                                                                                    |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 托管位置 | 您可以在一个仓库中托管多个包。                                                                                                                                                                                         |
| 权限   | {% data reusables.package_registry.public-or-private-packages %} 您可以使用 {% data variables.product.prodname_dotcom %} 角色和团队来限制谁可以安装或发布每个包，因为包会继承仓库的权限。 对仓库有读取权限的任何人都可以将包安装为项目中的依赖项，有写入权限的任何人都可以发布新的包版本。 |
| 可见性  | {% data reusables.package_registry.public-or-private-packages %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

有关 {% data variables.product.prodname_github_container_registry %} 权限和可见性的更多信息，请参阅“[配置容器的访问控制和可见性](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)”。

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### 关于 {% data variables.product.prodname_registry %} 的计费

{% data reusables.package_registry.packages-billing %} 更多信息请参阅“[关于 {% data variables.product.prodname_registry %} 的计费](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)”。

{% data reusables.package_registry.container-registry-beta-billing-note %}
{% endif %}

### 支持的客户端和格式

{% data variables.product.prodname_registry %} 使用您已经熟悉的原生包工具命令来发布和安装包版本。

{% if currentVersion == "free-pro-team@latest" %}
#### 对 {% data variables.product.prodname_github_container_registry %} 的支持

{% data variables.product.prodname_github_container_registry %} 在 `ghcr.io/OWNER/IMAGE-NAME` 托管容器。

| 包客户端   | 语言  | 包格式          | 描述     |
| ------ | --- | ------------ | ------ |
| docker | 不适用 | `Dockerfile` | 节点包管理器 |
有关

{% data variables.product.prodname_github_container_registry %} 提供的容器支持的更多信息，请参阅“[关于 {% data variables.product.prodname_github_container_registry %}](/packages/getting-started-with-github-container-registry/about-github-container-registry)”。
{% endif %}

#### 对包注册表的支持

{% if currentVersion == "free-pro-team@latest" %}
包注册表使用 `PACKAGE-TYPE.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME` 作为包主机 URL，用包命名空间替换 `PACKAGE-TYPE`。 例如，Gemfile 将托管在 `rubygems.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME` 上。

{% else %}

{% data variables.product.product_location %} 支持的软件包类型可能有所不同，因为您的网站管理员可能启用或禁用对不同软件包的支持。 更多信息请参阅“[为企业管理 GitHub Packages](/enterprise/admin/packages)”。

如果 {% data variables.product.product_location %} 已启用子域隔离，则软件包注册表将使用 `PACKAGE-TYPE.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME` 作为软件包主机 URL，用软件包命名空间替换 `PACKAGE-TYPE`。 例如，Dockerfile 将托管在 `docker.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME` 上。

如果 {% data variables.product.product_location %} 已禁用子域隔离，则软件包注册表将使用 `HOSTNAME/_registry/PACKAGE-TYPE/OWNER/REPOSITORY/IMAGE-NAME` 作为软件包主机 URL。 例如，Gemfile 将托管在 `HOSTNAME/_registry/rubygems/OWNER/REPOSITORY/IMAGE-NAME` 上，用 {% data variables.product.prodname_ghe_server %} 实例的主机名称替换 *HOSTNAME*。 |{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
| 语言         | 描述                     | 包格式                                 | 包客户端         | 包命名空间                                                 |
| ---------- | ---------------------- | ----------------------------------- | ------------ | ----------------------------------------------------- |
| JavaScript | 节点包管理器                 | `package.json`                      | `npm`        | `npm.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`      |
| Ruby       | RubyGems 包管理器          | `Gemfile`                           | `gem`        | `rubygems.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME` |
| Java       | Apache Maven 项目管理和理解工具 | `pom.xml`                           | `mvn`        | `maven.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`    |
| Java       | Java 的 Gradle 构建自动化工具  | `build.gradle` 或 `build.gradle.kts` | `gradle`     | `maven.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`    |
| .NET       | .NET 的 NuGet 包管理       | `nupkg`                             | `dotnet` CLI | `nuget.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`    |

{% else %}

在 {% data variables.product.product_location %} 上启用了子域隔离：

| 语言         | 描述                     | 包格式                                 | 包客户端         | 包命名空间                                           |
| ---------- | ---------------------- | ----------------------------------- | ------------ | ----------------------------------------------- |
| JavaScript | 节点包管理器                 | `package.json`                      | `npm`        | `npm.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`      |
| Ruby       | RubyGems 包管理器          | `Gemfile`                           | `gem`        | `rubygems.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME` |
| Java       | Apache Maven 项目管理和理解工具 | `pom.xml`                           | `mvn`        | `maven.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`    |
| Java       | Java 的 Gradle 构建自动化工具  | `build.gradle` 或 `build.gradle.kts` | `gradle`     | `maven.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`    |
| .NET       | .NET 的 NuGet 包管理       | `nupkg`                             | `dotnet` CLI | `nuget.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`    |
| 不适用        | Docker 容器管理平台          | `Dockerfile`                        | `Docker`     | `docker.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`   |

在 {% data variables.product.product_location %} 上禁用了子域隔离：

| 语言         | 描述                     | 包格式                                 | 包客户端         | 包命名空间                                                     |
| ---------- | ---------------------- | ----------------------------------- | ------------ | --------------------------------------------------------- |
| JavaScript | 节点包管理器                 | `package.json`                      | `npm`        | `HOSTNAME/_registry/npm/OWNER/REPOSITORY/IMAGE-NAME`      |
| Ruby       | RubyGems 包管理器          | `Gemfile`                           | `gem`        | `HOSTNAME/_registry/rubygems/OWNER/REPOSITORY/IMAGE-NAME` |
| Java       | Apache Maven 项目管理和理解工具 | `pom.xml`                           | `mvn`        | `HOSTNAME/_registry/maven/OWNER/REPOSITORY/IMAGE-NAME`    |
| Java       | Java 的 Gradle 构建自动化工具  | `build.gradle` 或 `build.gradle.kts` | `gradle`     | `HOSTNAME/_registry/maven/OWNER/REPOSITORY/IMAGE-NAME`    |
| .NET       | .NET 的 NuGet 包管理       | `nupkg`                             | `dotnet` CLI | `HOSTNAME/_registry/nuget/OWNER/REPOSITORY/IMAGE-NAME`    |

{% note %}

**注：**禁用子域隔离时，不支持 Docker。

{% endnote %}

有关子域隔离的更多信息，请参阅“[启用子域隔离](/enterprise/admin/configuration/enabling-subdomain-isolation)”。

{% endif %}

有关配置包客户端以用于 {% data variables.product.prodname_registry %} 的更多信息，请参阅“[将 {% data variables.product.prodname_registry %} 用于项目的生态系统](/packages/using-github-packages-with-your-projects-ecosystem)”。

### 向 {% data variables.product.prodname_registry %} 验证

{% data reusables.package_registry.authenticate-packages %}

{% if currentVersion == "free-pro-team@latest" %}
### 关于令牌

| 作用域               | 描述                                                                                                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `read:packages`   | 从 {% data variables.product.prodname_github_container_registry %} 下载和安装容器映像                                                                                                                           |
| `write:packages`  | 上传和发布容器映像到 {% data variables.product.prodname_github_container_registry %}
| `delete:packages` | 从 {% data variables.product.prodname_github_container_registry %} 删除私有或公共容器映像的特定版本。 更多信息请参阅“[删除容器映像](/packages/managing-container-images-with-github-container-registry/deleting-a-container-image)”。 |

要了解容器映像的可用范围和权限，请参阅“[关于 {% data variables.product.prodname_github_container_registry %}](/packages/getting-started-with-github-container-registry/about-github-container-registry)”或“[配置容器的访问控制和可见性](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)”。

更多信息请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token/)”和“[可用作用域](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)”。

{% endif %}

### 管理包

要安装或发布包，您必须使用具有适当作用域的令牌，并且您的用户帐户必须对该仓库具有适当的权限。

例如：
-  要从仓库下载和安装包，您的令牌必须具有 `read:packages` 作用域，并且您的用户帐户必须对该仓库具有读取权限。
- 要在 {% data variables.product.product_name %} 上删除私有包的特定版本，您的令牌必须具有 `delete:packages` 和 `repo` 作用域。 公共包无法删除。 更多信息请参阅“[删除包](/packages/publishing-and-managing-packages/deleting-a-package)”。

| 作用域               | 描述                                                          | 仓库权限   |
| ----------------- | ----------------------------------------------------------- | ------ |
| `read:packages`   | 从 {% data variables.product.prodname_registry %} 下载和安装包     | 读取     |
| `write:packages`  | 将包上传和发布到 {% data variables.product.prodname_registry %}     | 写入     |
| `delete:packages` | 从 {% data variables.product.prodname_registry %} 删除私有包的特定版本 | 管理员    |
| `repo`            | 上传和删除包（连同 `write:packages` 或 `delete:packages`）             | 写入或管理员 |

创建 {% data variables.product.prodname_actions %} 工作流程时，您可以使用 `GITHUB_TOKEN` 发布和安装 {% data variables.product.prodname_registry %} 中的包，无需存储和管理个人访问令牌。

更多信息请参阅：
- 遇到任何与文档相矛盾的事情
- “[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token/)”。
- 发布的包中含有敏感数据，例如违反 GDPR、API 密钥或个人身份信息

### 管理包

您可以在 {% data variables.product.product_name %} 上或使用 GraphQL API 删除私有包的版本。 使用 GraphQL API 查询和删除私有包时，必须使用与向 {% data variables.product.prodname_registry %} 验证时相同的令牌。 更多信息请参阅“[删除包](/packages/publishing-and-managing-packages/deleting-a-package)”和“[使用 GraphQL 进行调用](/graphql/guides/forming-calls-with-graphql)”。

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
