---
title: 测试 web 挂钩
intro: '查看 {% data variables.product.prodname_dotcom %} 上的 web 挂钩交付，包括 HTTP 请求和有效负载以及响应。'
redirect_from:
  - /webhooks/testing
  - /developers/webhooks-and-events/testing-webhooks
  - /articles/testing-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: 5b9287030169ecac751b407ad915d4fa69bf8182
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145996215'
---
现在，你已经[配置了本地服务器](/webhooks/configuring/)，可能有兴趣将代码推到极限。 为此，GitHub 的 Webhook 视图提供了一些工具来测试已部署的有效负载。

## 列出最近的交付

每个 web 挂钩都有自己的“最近交付”部分，它一目了然地列出了交付是成功（绿色钩号）还是失败（红色 x）。 您还可以确定每个交付的尝试时间。

{% data variables.product.product_name %} 将每个 Webhook 交付的日志保留 {% ifversion fpt or ghec %} 30 {% else %} 8 {% endif %} 天。

![最近交付视图](/assets/images/webhooks_recent_deliveries.png)

## 挖掘结果

通过展开单个交付，你将能够精确地见证 GitHub 尝试向服务器发送哪些信息。 这包括 HTTP 请求和响应。

### 请求

Web 挂钩交付视图提供有关 GitHub 发送哪些标头的信息。
它还包括有关 JSON 有效负载的详细信息。

![查看有效负载请求](/assets/images/payload_request_tab.png)

### 响应

响应选项卡列出了服务器从 GitHub 收到有效负载后如何响应。 这包括状态代码、标头以及响应正文中的任何其他数据。

![查看有效负载响应](/assets/images/payload_response_tab.png)
