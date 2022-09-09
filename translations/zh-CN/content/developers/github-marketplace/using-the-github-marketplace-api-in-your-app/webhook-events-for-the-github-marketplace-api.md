---
title: GitHub Marketplace API 的 web 挂钩事件
intro: '{% data variables.product.prodname_marketplace %} app 从 Marketplace 购买事件 web 挂钩接收有关用户计划更改的信息。 当用户购买、取消或更改其付款计划时，就会触发 Marketplace 购买事件。'
redirect_from:
  - /apps/marketplace/setting-up-github-marketplace-webhooks/about-webhook-payloads-for-a-github-marketplace-listing
  - /apps/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events
  - /marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events
  - /developers/github-marketplace/webhook-events-for-the-github-marketplace-api
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Webhook events
ms.openlocfilehash: 63b99005c5b0da23c59794d8fd7ad724f5afd13a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147710401'
---
## {% data variables.product.prodname_marketplace %} 购买 web 挂钩有效负载

Webhook `POST` 请求具有特殊的标头。 有关详细信息，请参阅“[Webhook 传递头](/webhooks/event-payloads/#delivery-headers)”。 GitHub 不会重新发送失败的递送尝试。 确保您的应用程序可以接收 GitHub 发送的所有 web 挂钩有效负载。

取消和降级在下一个结算周期的第一天生效。 如果新计划在下一个结算周期开始时生效，则将发送降级和取消事件。 新的购买和升级事件会立即生效。 使用 Webhook 有效负载中的 `effective_date` 来确定何时开始更改。

{% data reusables.marketplace.marketplace-malicious-behavior %}

每个 `marketplace_purchase` Webhook 有效负载将含有以下信息：


密钥 | 类型 | 说明
----|------|-------------
`action` | `string` | 为生成 web 挂钩而执行的操作。 可以是 `purchased`、`cancelled`、`pending_change`、`pending_change_cancelled` 或 `changed`。 更多信息请参阅下面的 web 挂钩有效负载示例。 注意：`pending_change` 和 `pending_change_cancelled` 有效负载包含的键与 [`changed` 有效负载示例](#example-webhook-payload-for-a-changed-event)中所示的键相同。
`effective_date` | `string` | `action` 生效日期。
`sender` | `object` | 采取 `action` 触发 Webhook 的人。
`marketplace_purchase` | `object` | {% data variables.product.prodname_marketplace %} 购买信息。

`marketplace_purchase` 对象具有以下键：

密钥 | 类型 | 说明
----|------|-------------
`account` | `object` | 与订阅关联的 `organization` 或 `user` 帐户。 组织帐户将包括 `organization_billing_email`，这是组织的管理电子邮件地址。 若要查找个人帐户的电子邮件地址，可使用[获取已通过身份验证的用户](/rest/reference/users#get-the-authenticated-user)终结点。
`billing_cycle` | `string` | 可以是 `yearly` 或 `monthly`。 如果 `account` 所有者拥有免费的 GitHub 计划并且已购买免费的 {% data variables.product.prodname_marketplace %} 计划，`billing_cycle` 将为 `nil`。
`unit_count`  | `integer` | 购买的单位数。
`on_free_trial` | `boolean` | 当 `account` 免费试用时，该值为 `true`。
`free_trial_ends_on` | `string` | 免费试用到期日期。
`next_billing_date` | `string` | 下一个结算周期开始日期。 如果 `account` 所有者拥有免费的 GitHub.com 计划并且已购买免费的 {% data variables.product.prodname_marketplace %} 计划，`next_billing_date` 将为 `nil`。
`plan` | `object` | `user` 或 `organization` 购买的计划。

`plan` 对象具有以下键：

密钥 | 类型 | 说明
----|------|-------------
`id` | `integer` | 此计划的唯一标识符。
`name` | `string` | 计划的名称。
`description` | `string` | 此计划的说明。
`monthly_price_in_cents` | `integer` | 此计划的每月价格（以美分为单位）。 例如，每月费用 10 美元的商品将显示价格 1000 美分。
`yearly_price_in_cents` | `integer` | 此计划的每年价格（以美分为单位）。 例如，每月费用 100 美元的商品将显示价格 120000 美分。
`price_model` | `string` | 此商品的定价模型。 可以是 `flat-rate`、`per-unit` 或 `free` 之一。
`has_free_trial` | `boolean` | 当此商品提供免费试用时，该值为 `true`。
`unit_name` | `string` | 单位的名称。 如果定价模型不是 `per-unit`，则它将为 `nil`。
`bullet` | `array of strings` | 定价计划中设置的项目符号的名称。

<br/>

### `purchased` 事件的 Webhook 有效负载示例
此示例提供 `purchased` 事件有效负载。

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.purchased }}

### `changed` 事件的 Webhook 有效负载示例

计划中的更改包括升级和降级。 此示例表示 `changed`、`pending_change` 和 `pending_change_cancelled` 事件有效负载。 该操作标识这三个事件中发生了哪一个。

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.changed }}

### `cancelled` 事件的 Webhook 有效负载示例

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.cancelled }}
