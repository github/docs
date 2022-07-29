---
title: Web 挂钩
intro: Web 挂钩 API 允许您为存储库创建和管理 web 挂钩。
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
children:
  - /repo-config
  - /repo-deliveries
  - /repos
redirect_from:
  - /rest/reference/webhooks
---

仓库 web 挂钩允许您在仓库内发生特定事件时接收 HTTP `POST` 有效负载。 {% data reusables.webhooks.webhooks-rest-api-links %}

如果您要设置一个 web 挂钩来接收来自组织所有仓库的事件，请参阅关于[组织 web 挂钩](/rest/reference/orgs#webhooks)的 API 文档。

除了 REST API 之外， {% data variables.product.prodname_dotcom %} 还可以作为仓库的 [PubSubHubbub](#pubsubhubbub) 枢纽。

## 接收 web 挂钩

为了让 {% data variables.product.product_name %} 发送 web 挂钩有效负载，您的服务器需要能够从 Internet 访问。 我们还强烈建议使用 SSL，以便我们可以通过 HTTPS 发送加密的有效负载。

### Web 挂钩标头

{% data variables.product.product_name %} 发送时将附带几个 HTTP 标头，以区分事件类型和有效负载标识符。 更多信息请参阅 [web 挂钩标头](/developers/webhooks-and-events/webhook-events-and-payloads#delivery-headers)。

## PubSubHubbub

GitHub 还可以作为所有仓库的 [PubSubHubbabub](https://github.com/pubsubhubbub/PubSubHubbub) 枢纽。 PSHB 是一个简单的发布/订阅协议，允许服务器注册在主题更新时接收更新。 这些更新随 HTTP POST 请求一起发送到回调 URL。 GitHub 仓库推送的主题 URL 采用以下格式：

`https://github.com/{owner}/{repo}/events/{event}`

事件可以是任何可用的 web 挂钩事件。 更多信息请参阅“[web 挂钩事件和有效负载](/developers/webhooks-and-events/webhook-events-and-payloads)”。

### 响应格式

默认格式为[现有接收后挂钩应具有的格式](/post-receive-hooks/)：作为 POST 中的 `payload` 参数发送的 JSON 正文。  您还可以指定接收带有 `Accept` 标头或 `.json` 扩展名的原始 JSON 正文。

    Accept: application/json
    https://github.com/{owner}/{repo}/events/push.json

### 回调 URL

回调 URL 可以使用 `http://` 协议。

    # Send updates to postbin.org
    http://postbin.org/123

### 订阅

GitHub PubSubHubbub 端点为：`{% data variables.product.api_url_code %}/hub`。 使用 cURL 的成功请求如下所示：

``` shell
curl -u "user" -i \
  {% data variables.product.api_url_pre %}/hub \
  -F "hub.mode=subscribe" \
  -F "hub.topic=https://github.com/{owner}/{repo}/events/push" \
  -F "hub.callback=http://postbin.org/123"
```

PubSubHubbub 请求可以多次发送。 如果挂钩已经存在，它将根据请求进行修改。

#### 参数

| 名称             | 类型    | 描述                                                                                                                                                                                                                                                                                                                 |
| -------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `hub.mode`     | `字符串` | **必填**。 值为 `subscribe` 或 `unsubscribe`。                                                                                                                                                                                                                                                                            |
| `hub.topic`    | `字符串` | **必填**。  要订阅的 GitHub 仓库的 URI。  路径格式必须为 `/{owner}/{repo}/events/{event}`。                                                                                                                                                                                                                                           |
| `hub.callback` | `字符串` | 要接收主题更新的 URI。                                                                                                                                                                                                                                                                                                      |
| `hub.secret`   | `字符串` | 用于生成传出正文内容的哈希签名的共享密钥。  您可以通过将原始请求正文与 {% ifversion fpt or ghes or ghec %}`X-Hub-Signature` 的内容或 `X-Hub-Signature-256` 标头{% elsif ghae %}`X-Hub-Signature-256`{% endif %}）的内容进行比较来验证来自 GitHub 的推送。 您可以查看 [PubSubHubbub 文档](https://pubsubhubbub.github.io/PubSubHubbub/pubsubhubbub-core-0.4.html#authednotify)了解详情。 |
