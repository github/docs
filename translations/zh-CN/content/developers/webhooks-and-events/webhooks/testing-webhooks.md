---
title: 测试 web 挂钩
intro: '查看 {% data variables.product.prodname_dotcom %} 上的 web 挂钩交付，包括 HTTP 请求和有效负载以及响应。'
redirect_from:
  - /webhooks/testing
  - /developers/webhooks-and-events/testing-webhooks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Webhooks
---

现在，您已经[配置了本地服务器](/webhooks/configuring/)，您可能有兴趣将代码推到极限。 为此，GitHub 的 web 挂钩视图提供了一些工具来测试已部署的有效负载。

### 列出最近的交付

每个 web 挂钩都有自己的“最近交付”部分，它一目了然地列出了交付是成功（绿色钩号）还是失败（红色 x）。 您还可以确定每个交付的尝试时间。

{% data variables.product.product_name %} 保留每个 web 挂钩交付的日志 {% if currentVersion == "free-pro-team@latest" %} 30 {% else %} 8 {% endif %} 天。

![最近交付视图](/assets/images/webhooks_recent_deliveries.png)

### 挖掘结果

通过展开单个交付，您将能够*精确*地见证 GitHub 尝试向您的服务器发送哪些信息。 这包括 HTTP 请求和响应。

#### 请求

Web 挂钩交付视图提供有关 GitHub 发送哪些标头的信息。 它还包括有关 JSON 有效负载的详细信息。

![查看有效负载请求](/assets/images/payload_request_tab.png)

#### 响应

响应选项卡列出了服务器从 GitHub 收到有效负载后如何响应。 这包括状态代码、标头以及响应正文中的任何其他数据。

![查看有效负载响应](/assets/images/payload_response_tab.png)
