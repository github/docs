---
title: 关于仓库图
intro: 仓库图可帮助您查看和分析仓库的数据。
redirect_from:
  - /articles/using-graphs
  - /articles/about-repository-graphs
  - /github/visualizing-repository-data-with-graphs/about-repository-graphs
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/about-repository-graphs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: a8e2b228e4729e0c86d0234aadc7f0eebab7d2d5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129288'
---
存储库图提供有关 {% ifversion fpt or ghec %} 流量、依赖于存储库的项目、{% endif %} 存储库贡献者和提交以及存储库分支和网络的信息。 如果是您维护仓库，您可以使用此数据更好地了解谁在使用您的仓库，以及为什么使用。

{% ifversion fpt or ghec %}

有些仓库图仅在具有 {% data variables.product.prodname_free_user %} 的公共仓库中可用：
- 脉冲
- 作者
- 交通
- 提交
- 代码频率
- 网络

所有其他仓库图在所有仓库中可用。 每个仓库图在具有 {% data variables.product.prodname_pro %}、{% data variables.product.prodname_team %} 及 {% data variables.product.prodname_ghe_cloud %} 的公共和私有仓库中可用。 {% data reusables.gated-features.more-info %}

{% endif %}
