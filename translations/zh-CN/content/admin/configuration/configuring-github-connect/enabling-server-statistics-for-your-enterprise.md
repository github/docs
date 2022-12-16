---
title: 为企业启用服务器统计信息
intro: '可以从 {% data variables.product.prodname_ghe_server %} 分析自己的聚合数据，并通过启用 {% data variables.product.prodname_server_statistics %} 帮助改进 {% data variables.product.company_short %} 产品。'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/about-server-statistics/enabling-server-statistics
topics:
  - Enterprise
shortTitle: Server Statistics
ms.openlocfilehash: 125651de793a45240008de34845762e6de637040
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191868'
---
## 关于 {% data variables.product.prodname_server_statistics %}

{% data variables.product.prodname_server_statistics %} 从 {% data variables.location.product_location %} 中收集聚合使用情况数据，你可以使用这些数据更好地预测组织的需求、了解团队的工作方式并显示你从 {% data variables.product.prodname_ghe_server %} 获取的值。 

{% data variables.product.prodname_server_statistics %} 仅在存储库、问题、拉取请求和其他功能上收集某些聚合指标。 不会收集 {% data variables.product.prodname_dotcom %} 内容，例如代码、问题、评论或拉取请求内容。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics)”。

通过启用 {% data variables.product.prodname_server_statistics %}，还可帮助提高 {% data variables.product.company_short %}。 你将提供的聚合数据有助于我们了解我们的客户使用 {% data variables.product.prodname_dotcom %} 的方式，并做出更好、更明智的产品决策，最终使你受益。

## 启用 {% data variables.product.prodname_server_statistics %}

启用 {% data variables.product.prodname_server_statistics %} 之前，必须首先通过 {% data variables.product.prodname_github_connect %} 将 {% data variables.product.prodname_ghe_server %} 实例连接到 {% data variables.product.prodname_dotcom_the_website %}。 有关详细信息，请参阅“[将 {% data variables.product.prodname_ghe_server %} 连接到 {% data variables.product.prodname_ghe_cloud %}](/enterprise-server@3.1/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud)”。

可随时从 {% data variables.product.prodname_ghe_server %} 禁用 {% data variables.product.prodname_server_statistics %}。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
4. 在“与 GitHub.com 共享服务器统计信息”下，选择下拉菜单并单击“启用”或“禁用” 。
  ![包含禁用或启用选项的 {% data variables.product.prodname_server_statistics %} 下拉菜单的屏幕截图](/assets/images/help/server-statistics/server-statistics-enable-disable-options.png)
