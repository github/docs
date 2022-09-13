---
title: 了解仓库之间的连接
intro: 通过查看存储库的网络和分叉以及依赖于存储库的项目，您可以更好地了解存储库之间存在的连接。
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
ms.openlocfilehash: f1b92a62d0acf9f31a16ce1b7c57850b87c1bf9c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060064'
---
## 查看仓库的网络

网络图显示整个仓库网络的分支历史记录，包括根仓库的分支和包含网络独有提交的复刻的分支。

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

复刻按仓库复刻者用户名的字母顺序列出。 您可以单击要重定向到用户 {% data variables.product.product_name %} 个人资料页面的用户名，或者单击要重定向到仓库特定复刻的复刻名称。

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
