---
title: 查看仓库活动的摘要
intro: 您可以查看存储库的拉取请求、议题和提交活动的概述。
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-a-summary-of-repository-activity
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View repository activity
ms.openlocfilehash: 2dafe04a8214e2840d8b36bdd3aaeb87f0ad2764
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882301'
---
## 关于 Pulse

您可以通过 Pulse 查看仓库活动的概览。 Pulse 包括打开及合并的拉取请求列表、打开和关闭的问题列表，以及显示在所选[时间段](/articles/viewing-a-summary-of-repository-activity#filtering-by-time)内提交到项目默认分支的前 15 名用户的提交活动图表。

如果提交合作作者的提交已合并到仓库的默认分支并且他们是贡献最多提交的前 15 名用户，则提交合作作者将包括在提交活动摘要中。

## 访问 Pulse

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}

## 按时间过滤

默认情况下，Pulse 显示过去七天的仓库活动。 要选择其他时间段，请单击 Pulse 概览右上角中的“时期”下拉列表。

![按时间过滤 Pulse 活动](/assets/images/help/pulse/pulse_time_filter_dropdown.png)
