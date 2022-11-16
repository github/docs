---
title: 关于 GitHub Connect
intro: '{% data variables.product.prodname_github_connect %} 通过允许你访问依赖于 {% data variables.product.prodname_dotcom_the_website %} 的力量的其他功能和工作流来增强 {% data variables.product.product_name %}。'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - GitHub Connect
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ac4ec1d8b619e56c38013f5ae38d5782b6faec88
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160814'
---
## 关于 {% data variables.product.prodname_github_connect %}

{% data variables.product.prodname_github_connect %} 通过允许 {% data variables.location.product_location %} 以有限的方式从 {% data variables.product.prodname_dotcom_the_website %} 的强大功能中获益，从而增强了 {% data variables.product.product_name %}。 启用 {% data variables.product.prodname_github_connect %} 后，可以启用依赖于 {% data variables.product.prodname_dotcom_the_website %} 的其他功能和工作流，例如 {% data variables.product.prodname_advisory_database %} 中跟踪的安全漏洞的 {% data variables.product.prodname_dependabot_alerts %}。

{% data variables.product.prodname_github_connect %} 不会将 {% data variables.location.product_location %} 打开到公共 Internet。 企业的任何私有数据都不会公开给 {% data variables.product.prodname_dotcom_the_website %} 用户。 相反，{% data variables.product.prodname_github_connect %} 仅传输你选择启用的各个功能所需的有限数据。 除非启用许可证同步，否则 {% data variables.product.prodname_github_connect %} 不会传输任何个人数据。 有关 {% data variables.product.prodname_github_connect %} 传输哪些数据的详细信息，请参阅“[{% data variables.product.prodname_github_connect %} 的数据传输](#data-transmission-for-github-connect)”。

启用 {% data variables.product.prodname_github_connect %} 将不允许 {% data variables.product.prodname_dotcom_the_website %} 用户对 {% data variables.product.product_name %} 进行更改。

若要启用 {% data variables.product.prodname_github_connect %}，需在 {% data variables.location.product_location %} 和 {% data variables.product.prodname_dotcom_the_website %} 上使用 {% data variables.product.prodname_ghe_cloud %} 的组织或企业帐户之间配置连接。 {% data reusables.github-connect.connection-port-protocol %}有关详细信息，请参阅“[管理 {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)”。

启用 {% data variables.product.prodname_github_connect %} 后，你将能够启用{% ifversion ghes %}用户许可证自动同步和 {% endif %}{% data variables.product.prodname_dependabot_alerts %} 等功能。 有关所有可用功能的详细信息，请参阅“[{% data variables.product.prodname_github_connect %} 功能](#github-connect-features)”。

## {% data variables.product.prodname_github_connect %} 功能

配置 {% data variables.location.product_location %} 和 {% data variables.product.prodname_ghe_cloud %} 之间的连接后，便可为企业启用 {% data variables.product.prodname_github_connect %} 的各个功能。

功能 | 说明 | 详细信息 | ------- | ----------- | ---------------- |{% ifversion ghes %} 用户许可证自动同步 | 通过自动将用户许可证从 {% data variables.location.product_location %} 同步到 {% data variables.product.prodname_ghe_cloud %} 来管理 {% data variables.product.prodname_enterprise %} 部署中的许可证使用情况。 |“[为企业启用用户许可证自动同步](/admin/configuration/configuring-github-connect/enabling-automatic-user-license-sync-for-your-enterprise)”{% endif %}{% ifversion ghes or ghae %} {% data variables.product.prodname_dependabot %} | 允许用户查找和修复代码依赖项中的漏洞。 |“[为企业启用 {% data variables.product.prodname_dependabot %}](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”{% endif %} {% data variables.product.prodname_dotcom_the_website %} 操作 | 允许用户在工作流文件中使用来自 {% data variables.product.prodname_dotcom_the_website %} 的操作。 |“[使用 {% data variables.product.prodname_github_connect %} 启用对 {% data variables.product.prodname_dotcom_the_website %} 操作的自动访问](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)”{% ifversion server-statistics %} {% data variables.product.prodname_server_statistics %} | 从 GitHub Enterprise Server 分析自己的聚合数据，并帮助我们改进 GitHub 产品。 | [为企业启用 {% data variables.product.prodname_server_statistics %}](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise){% endif %} 统一搜索 | 从 {% data variables.location.product_location %} 搜索时，允许用户在搜索结果中包含 {% data variables.product.prodname_dotcom_the_website %} 上的存储库。 | [为企业启用 {% data variables.enterprise.prodname_unified_search %}](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)统一参与 | 允许用户将他们在 {% data variables.location.product_location %} 上的工作的匿名参与计数包含在 {% data variables.product.prodname_dotcom_the_website %} 上的参与图中。 | [为企业启用 {% data variables.enterprise.prodname_unified_contributions %}](/admin/configuration/configuring-github-connect/enabling-unified-contributions-for-your-enterprise)

## {% data variables.product.prodname_github_connect %} 的数据传输 

启用 {% data variables.product.prodname_github_connect %} 时，{% data variables.product.prodname_ghe_cloud %} 上的记录会存储有关连接的信息。 如果启用 {% data variables.product.prodname_github_connect %} 的各个功能，则会传输其他数据。

{% note %}

注意：{% data variables.product.prodname_github_connect %} 从未将存储库、问题或拉取请求从 {% data variables.product.product_name %} 传输到 {% data variables.product.prodname_dotcom_the_website %}。

{% endnote %}

### 启用 {% data variables.product.prodname_github_connect %} 时传输的数据

当你启用 {% data variables.product.prodname_github_connect %} 或特定的 {% data variables.product.prodname_github_connect %} 功能时，{% data variables.product.prodname_ghe_cloud %} 上的记录将存储有关连接的以下信息。
{% ifversion ghes %}
- {% data variables.product.prodname_ghe_server %} 许可的公钥部分
- {% data variables.product.prodname_ghe_server %} 许可的哈希
- {% data variables.product.prodname_ghe_server %} 许可上的客户名称
- {% data variables.location.product_location_enterprise %}{% endif %} 的版本
- {% data variables.location.product_location %} 的主机名
- {% data variables.product.prodname_ghe_cloud %} 上连接到 {% data variables.location.product_location %} 的组织或企业帐户
- {% data variables.location.product_location %} 用于向 {% data variables.product.prodname_ghe_cloud %} 发出请求的身份验证令牌
- 是否在 {% data variables.location.product_location %}{% ifversion ghes %} 上启用并配置了传输层安全性 (TLS)
- 在 {% data variables.location.product_location %} 上启用的 {% data variables.product.prodname_github_connect %} 功能，以及启用日期和时间{% endif %}
- 企业休眠阈值
- 企业休眠用户数
- 许可证消耗的席位计数，其中不包括暂停的用户

{% data variables.product.prodname_github_connect %} 从启用 {% data variables.product.prodname_github_connect %} 的日期和大致时间开始每周同步 {% data variables.location.product_location %} 和 {% data variables.product.prodname_ghe_cloud %} 之间的上述连接数据。

### {% data variables.product.prodname_github_connect %} 的各个功能传输的数据

如果启用 {% data variables.product.prodname_github_connect %} 的各个功能，则会传输其他数据。

功能 | 数据 | 数据流向何方？ | 在哪里使用了数据？ | ------- | ---- | --------- | ------ |{% ifversion ghes %} 用户许可证自动同步 | 每个 {% data variables.product.product_name %} 用户的用户 ID 和电子邮件地址 | 从 {% data variables.product.product_name %} 到 {% data variables.product.prodname_ghe_cloud %} | {% data variables.product.prodname_ghe_cloud %} |{% endif %}{% ifversion ghes or ghae %} {% data variables.product.prodname_dependabot_alerts %} | 漏洞警报 | 从 {% data variables.product.prodname_dotcom_the_website %} 到 {% data variables.product.product_name %} | {% data variables.product.product_name %} |{% endif %}{% ifversion dependabot-updates-github-connect %} {% data variables.product.prodname_dependabot_updates %} | 依赖项和每个依赖项存储库的元数据<br><br>如果依赖项存储在 {% data variables.product.prodname_dotcom_the_website %} 上的专用存储库中，则只有在 {% data variables.product.prodname_dependabot %} 配置并授权访问该存储库时才会传输数据。 | 从 {% data variables.product.prodname_dotcom_the_website %} 到 {% data variables.product.product_name %} | {% data variables.product.product_name %} {% endif %} {% data variables.product.prodname_dotcom_the_website %} 操作 | 操作名称、操作（来自 {% data variables.product.prodname_marketplace %} 的 YAML 文件）| 从 {% data variables.product.prodname_dotcom_the_website %} 到 {% data variables.product.product_name %}<br><br>从 {% data variables.product.product_name %} 到 {% data variables.product.prodname_dotcom_the_website %} | {% data variables.product.product_name %}{% ifversion server-statistics %} {% data variables.product.prodname_server_statistics %} | 聚合有关 {% data variables.product.prodname_ghe_server %} 使用情况的指标。 有关指标的完整列表，请参阅“[关于 {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics#server-statistics-data-collected)”。 | 从 {% data variables.product.product_name %} 到 {% data variables.product.prodname_ghe_cloud %} | {% data variables.product.prodname_ghe_cloud %}{% endif %} 统一搜索 | 搜索词、搜索结果 | 从 {% data variables.product.prodname_dotcom_the_website %} 到 {% data variables.product.product_name %}<br><br>从 {% data variables.product.product_name %} 到 {% data variables.product.prodname_dotcom_the_website %} | {% data variables.product.product_name %} | 统一参与 | 参与计数 | 从 {% data variables.product.product_name %} 到 {% data variables.product.prodname_dotcom_the_website %} | {% data variables.product.prodname_dotcom_the_website %} |

## 延伸阅读

- GraphQL API 文档中的“[企业帐户](/graphql/guides/managing-enterprise-accounts)”
