---
title: Webhook 事件和有效负载
intro: 了解每个 Webhook 事件发生的时间以及有效负载包含的内容。
product: '{% data reusables.gated-features.enterprise_account_webhooks %}'
redirect_from:
  - /early-access/integrations/webhooks
  - /v3/activity/events/types
  - /webhooks/event-payloads
  - /developers/webhooks-and-events/webhook-events-and-payloads
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
shortTitle: Webhook events & payloads
ms.openlocfilehash: 0592f191b463354b92c3953880c7a7a435e0b07a
ms.sourcegitcommit: b2e5d14036a700b781e91158a552f8c0b1f04839
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165536'
---
{% data reusables.webhooks.webhooks_intro %}

您可以创建订阅此页所列事件的 web 挂钩。 每个 web 挂钩事件都包括 web 挂钩属性的说明和示例有效负载。 有关详细信息，请参阅“[创建 Webhook](/webhooks/creating/)”。

## Web 挂钩有效负载对象共有属性

每个 web 挂钩事件有效负载还包含特定于事件的属性。 您可以在各个事件类型部分中找到这些独特属性。

密钥 | 类型 | 说明
----|------|-------------
`action` | `string` | 大多数 Webhook 有效负载都包括 `action` 属性，其中包含触发事件的特定活动。
{% data reusables.webhooks.sender_desc %} 此属性包含在每个 web 挂钩有效负载中。
{% data reusables.webhooks.repo_desc %} 如果事件源自存储库中的活动，则 Webhook 有效负载包含 `repository` 属性。
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} 有关详细信息，请参阅“[构建 {% data variables.product.prodname_github_app %}](/apps/building-github-apps/)”

Webhook 事件的独特属性与你在使用[ API](/rest/reference/activity#events) 时在 `payload` 属性中发现的属性相同。 [`push` 事件](#push) 是一个例外。 `push` 事件 Webhook 有效负载的独特属性和事件 API 中的 `payload` 属性不同。 Web 挂钩有效负载包含更详细的信息。

{% tip %}

注意：有效负载上限为 25 MB。 如果事件生成了更大的有效负载，web 挂钩将不会触发。 例如，如果同时推送多个分支或标记，这种情况可能会发生在 `create` 事件中。 我们建议监控有效负载的大小以确保成功递送。

{% endtip %}

### 递送标头

递送到 web 挂钩已配置 URL 端点的 HTTP POST 有效负载将包含几个特殊标头：

标头 | 说明
-------|-------------|
`X-GitHub-Event`| 触发递送的事件名称。
`X-GitHub-Delivery`| 用于标识交付的 [GUID](http://en.wikipedia.org/wiki/Globally_unique_identifier)。{% ifversion ghes or ghae %}
`X-GitHub-Enterprise-Version` | 发送 HTTP POST 有效负载的 {% data variables.product.prodname_ghe_server %} 实例的版本。
`X-GitHub-Enterprise-Host` | 发送 HTTP POST 有效负载的 {% data variables.product.prodname_ghe_server %} 实例的主机名。{% endif %}{% ifversion not ghae %}
`X-Hub-Signature`| 如果 Webhook 配置了 [`secret`](/rest/reference/repos#create-hook-config-params)，则会发送此标头。 这是请求正文的 HMAC 十六进制摘要，是使用 SHA-1 哈希函数和作为 HMAC `key` 的 `secret` 生成的。{% ifversion fpt or ghes or ghec %} 提供了 `X-Hub-Signature`，以便与现有集成兼容，建议你改用更安全的 `X-Hub-Signature-256`。{% endif %}{% endif %}
`X-Hub-Signature-256`| 如果 Webhook 配置了 [`secret`](/rest/reference/repos#create-hook-config-params)，则会发送此标头。 这是请求正文的 HMAC 十六进制摘要，是使用 SHA-256 哈希函数和作为 HMAC `key` 的 `secret` 生成的。

此外，请求的 `User-Agent` 将含有前缀 `GitHub-Hookshot/`。

### 递送示例

```shell
> POST /payload HTTP/2

> Host: localhost:4567
> X-GitHub-Delivery: 72d3162e-cc78-11e3-81ab-4c9367dc0958{% ifversion ghes or ghae %}
> X-GitHub-Enterprise-Version: 2.15.0
> X-GitHub-Enterprise-Host: example.com{% endif %}{% ifversion not ghae %}
> X-Hub-Signature: sha1=7d38cdd689735b008b3c702edd92eea23791c5f6{% endif %}
> X-Hub-Signature-256: sha256=d57c68ca6f92289e6987922ff26938930f6e66a2d161ef06abdf1859230aa23c
> User-Agent: GitHub-Hookshot/044aadd
> Content-Type: application/json
> Content-Length: 6615
> X-GitHub-Event: issues

> {
>   "action": "opened",
>   "issue": {
>     "url": "{% data variables.product.api_url_pre %}/repos/octocat/Hello-World/issues/1347",
>     "number": 1347,
>     ...
>   },
>   "repository" : {
>     "id": 1296269,
>     "full_name": "octocat/Hello-World",
>     "owner": {
>       "login": "octocat",
>       "id": 1,
>       ...
>     },
>     ...
>   },
>   "sender": {
>     "login": "octocat",
>     "id": 1,
>     ...
>   }
> }
```

<!-- Content after this section is automatically generated -->
