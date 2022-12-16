---
title: 了解仓库之间的连接
intro: 使用网络图和分支列表了解分支网络。
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-repository-s-network
  - /articles/viewing-a-repositorys-network
  - /github/visualizing-repository-data-with-graphs/viewing-a-repositorys-network
  - /articles/understanding-connections-between-repositories
  - /articles/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/viewing-the-dependencies-of-a-repository
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/viewing-a-repositorys-network
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/viewing-the-dependencies-of-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Connections between repositories
ms.openlocfilehash: 46cc440093c3ca8dc0952933847a6f04b0446661
ms.sourcegitcommit: 468a0323fa636517985a3e08e2772dbb0545cab8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/03/2022
ms.locfileid: '148191353'
---
## 查看仓库的网络

网络图显示了整个存储库网络的分支历史记录，包括创建分支。 此图是最近提交的时间线，最多显示 100 个最近已推送的分支。 第一行引用日期，第一列引用分支所有者。 使用箭头键或其他键盘快捷方式可以更轻松地在图中浏览。 图下面的“可用的键盘快捷方式”弹出窗口中提供了这些选项。


![仓库网络图](/assets/images/help/graphs/repo_network_graph.png)

{% tip %}

提示：若要查看较旧的分支，请在图中单击并拖动。

{% endtip %}

## 访问网络图

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. 在左侧边栏中，单击“网络”。
![“网络”选项卡](/assets/images/help/graphs/network_tab.png)

## 列出仓库的复刻

成员图显示仓库的所有复刻。

分支按存储库分支创建组织或创建者用户名的字母顺序列出。 可以单击要重定向到组织或用户 {% data variables.product.product_name %} 个人资料页面的组织或用户名，或者单击要重定向到存储库特定分支的分支名称。

{% ifversion fpt or ghec %}

![仓库成员图](/assets/images/help/graphs/repo_forks_graph_dotcom.png)

{% else %}

![仓库成员图](/assets/images/help/graphs/repo_members_graph.png)

{% endif %}

### 访问成员图

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. 在左侧边栏中，单击“分支”。
![“分支”选项卡](/assets/images/help/graphs/graphs-sidebar-forks-tab.png)

## 查看仓库的依赖项

您可以使用依赖关系图来浏览仓库所依赖的代码。

几乎所有软件都依赖于其他开发者开发和维护的代码，常常被称为供应链。 例如，实用程序、库和框架。 这些依赖项是代码不可分割的一部分，其中的任何错误或漏洞都可能影响您的代码。 审查和维护这些依赖项非常重要。

依赖关系图提供了可视化和探索仓库依赖关系的好方法。 有关详细信息，请参阅“[关于依赖项关系图](/code-security/supply-chain-security/about-the-dependency-graph)”和“[探索存储库的依赖项](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository)”。

您也可以设置仓库，以便在您的一个依赖项中发现安全漏洞时，{% data variables.product.company_short %} 会自动提醒您。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”。
