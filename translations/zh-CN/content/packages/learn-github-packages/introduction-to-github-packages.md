---
title: GitHub Packages 简介
intro: '{% data variables.product.prodname_registry %} 是一项软件包托管服务，允许您私下为指定的用户托管您的软件包{% ifversion ghae %}，或在内部为您的企业{% else %}或公开{% endif %}托管，以及在您的项目中使用软件包作为依赖项。'
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
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Introduction
ms.openlocfilehash: 1ad319ead16f10186b330f876ccaa83bc44bdbcd
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193023'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## 关于 {% data variables.product.prodname_registry %}

{% data variables.product.prodname_registry %} 是一个用于托管和管理包的平台，包括容器和其他依赖项。 {% data variables.product.prodname_registry %} 将源代码和包组合在一起，以提供集成的权限管理{% ifversion fpt or ghec %}和计费{% endif %}，使你能够在 {% data variables.product.product_name %} 上专注于软件开发。

您可以将 {% data variables.product.prodname_registry %} 与 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API、{% data variables.product.prodname_actions %} 以及 web 挂钩集成在一起，以创建端到端的 DevOps 工作流程，其中包括您的代码、CI 和部署解决方案。

{% data variables.product.prodname_registry %} 为常用的包管理器提供不同的包注册表，例如 npm、RubyGems、Apache Maven、Gradle、Docker 和 Nuget。 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} 的 {% data variables.product.prodname_container_registry %} 针对容器进行了优化，支持 Docker 和 OCI 映像。{% endif %} 有关 {% data variables.product.prodname_registry %} 支持的不同包注册表的详细信息，请参阅“[使用 {% data variables.product.prodname_registry %} 注册表](/packages/working-with-a-github-packages-registry)”。

{% ifversion fpt or ghec %}

![显示支持容器注册表、RubyGems、npm、Apache Maven、NuGet 和 Gradle 的软件包的示意图](/assets/images/help/package-registry/packages-diagram-with-container-registry.png)

{% else %}

![显示支持 Docker 注册表、RubyGems、npm、Apache Maven、Gradle、Nuget 和 Docker 的软件包的示意图](/assets/images/help/package-registry/packages-diagram-without-container-registry.png)

{% endif %}

您可以在 {% data variables.product.product_name %} 上查看包的自述文件、元数据（如许可）、下载统计、版本历史记录等。 有关详细信息，请参阅“[查看包](/packages/manage-packages/viewing-packages)”。

{% ifversion ghes %}

有关在 {% data variables.product.product_name %} 上配置 {% data variables.product.prodname_registry %} 的详细信息，请参阅“[企业的 {% data variables.product.prodname_registry %} 入门](/admin/packages/getting-started-with-github-packages-for-your-enterprise)”。

{% endif %}

### 包的权限和可见性概述

|                    |        |
|--------------------|--------------------|
| 权限        | {% ifversion packages-registries-v2 %}可以从托管包的存储库继承包的权限，也可以为特定用户或组织帐户定义该权限。 某些注册表仅支持从存储库继承的权限。 有关这些注册表的列表，请参阅“[关于 {% data variables.product.prodname_registry %} 的权限](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)”。 有关包访问权限的详细信息，请参阅“[配置包的访问控制和可见性](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)”。 {% else %}每个包都继承托管包的仓库的权限。 <br> <br> 例如，对存储库有读取权限的任何人都可以将包安装为项目中的依赖项，具有写入权限的任何人都可以发布新的包版本。{% endif %} |
| 能见度         | {% data reusables.package_registry.public-or-private-packages %} |

{% ifversion fpt or ghec %}
## 关于 {% data variables.product.prodname_registry %} 的计费

{% data reusables.package_registry.packages-billing %} {% data reusables.package_registry.packages-spending-limit-brief %} 有关详细信息，请参阅“[关于 {% data variables.product.prodname_registry %} 的计费](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)”。

{% endif %}

## 支持的客户端和格式
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

{% data variables.product.prodname_registry %} 使用您已经熟悉的原生包工具命令来发布和安装包版本。
### 对包注册表的支持

| 语言 | 说明 | 包格式 | 包客户端 |
| --- | --- | --- | --- |
| JavaScript | 节点包管理器 | `package.json`  | `npm` |
| Ruby |  RubyGems 包管理器 | `Gemfile` |  `gem` |
| Java | Apache Maven 项目管理和理解工具 | `pom.xml` |  `mvn` |
| Java | Java 的 Gradle 构建自动化工具 | `build.gradle` 或 `build.gradle.kts`  | `gradle`  |
| .NET | .NET 的 NuGet 包管理 | `nupkg`  |  `dotnet` CLI |
| 空值 | Docker 容器管理平台 | `Dockerfile` | `Docker` |

{% ifversion ghes %} {% note %}

注意：启用 Docker 注册表时，我们强烈建议还启用子域隔离。 有关详细信息，请参阅“[启用子域隔离](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation)”。

{% endnote %}

{% endif %}

有关配置包客户端以结合使用 {% data variables.product.prodname_registry %} 的详细信息，请参阅“[使用 {% data variables.product.prodname_registry %} 注册表](/packages/working-with-a-github-packages-registry)”。

{% ifversion fpt or ghec %} 有关 Docker 和 {% data variables.product.prodname_container_registry %} 的详细信息，请参阅“[使用容器注册表](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)”。
{% endif %}
## 向 {% data variables.product.prodname_registry %} 验证

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

## 管理包

可以在 {% data variables.product.product_name %} 用户界面中删除包{% ifversion fpt or ghec %}或使用 REST API 删除包。 有关详细信息，请参阅“[删除和还原包](/packages/learn-github-packages/deleting-and-restoring-a-package)”和“[{% data variables.product.prodname_registry %} API](/rest/reference/packages)”。{% else %}{% endif %} {% data reusables.package_registry.about-graphql-support %}

使用 GraphQL API 查询和删除专用包时，必须使用向 {% data variables.product.prodname_registry %} 验证时使用的同一 {% data variables.product.pat_v1 %}。

有关详细信息，请参阅{% ifversion ghes or ghae %}“[删除和还原包](/packages/learn-github-packages/deleting-and-restoring-a-package)”和{% endif %}“[使用 GraphQL 建立调用](/graphql/guides/forming-calls-with-graphql)”。

您可以配置 web 挂钩来订阅与包相关的事件，例如包的发布或更新等事件。 有关详细信息，请参阅“[`package` Webhook 事件](/webhooks/event-payloads/#package)”。

## 联系支持部门

{% ifversion fpt or ghec %} 如果你对 {% data variables.product.prodname_registry %} 有反馈或功能请求，请使用 [{% data variables.product.prodname_github_community %} 讨论](https://github.com/orgs/community/discussions/categories/actions-and-packages)。

如果在 {% data variables.product.prodname_registry %} 方面遇到以下问题，请使用[我们的联系表单](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages)联系 {% data variables.contact.github_support %}：

* 遇到任何与文档相矛盾的事情
* 遇到模糊或不清楚的错误
* 发布的包中含有敏感数据，例如违反 GDPR、API 密钥或个人身份信息

{% else %} 如果你需要有关 {% data variables.product.prodname_registry %} 的支持，请联系网站管理员。

{% endif %}
