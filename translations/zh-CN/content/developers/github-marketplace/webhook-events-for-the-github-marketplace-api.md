---
title: GitHub Marketplace API 的 web 挂钩事件
intro: '{% data variables.product.prodname_marketplace %} app 从 Marketplace 购买事件 web 挂钩接收有关用户计划更改的信息。 当用户购买、取消或更改其付款计划时，就会触发 Marketplace 购买事件。 有关如何响应每类事件的详细信息，请参阅“[帐单流程](/marketplace/integrating-with-the-github-marketplace-api/#billing-flows)”。'
redirect_from:
  - /apps/marketplace/setting-up-github-marketplace-webhooks/about-webhook-payloads-for-a-github-marketplace-listing/
  - /apps/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/
  - /marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events
versions:
  free-pro-team: '*'
---



### {% data variables.product.prodname_marketplace %} 购买 web 挂钩有效负载

Web 挂钩 `POST` 请求具有特殊标头。 有关详细信息，请参阅“[web 挂钩递送标头](/webhooks/event-payloads/#delivery-headers)”。 GitHub 不会重新发送失败的递送尝试。 确保您的应用程序可以接收 GitHub 发送的所有 web 挂钩有效负载。

取消和降级在下一个结算周期的第一天生效。 如果新计划在下一个结算周期开始时生效，则将发送降级和取消事件。 新的购买和升级事件会立即生效。 使用 web 挂钩有效负载中的 `effective_date` 可确定更改何时开始生效。

{% data reusables.marketplace.marketplace-malicious-behavior %}

每个 `marketplace_purchase` web 挂钩有效负载都含有以下信息：


| 键                      | 类型    | 描述                                                                                                                                                                                                                                                                    |
| ---------------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`               | `字符串` | 为生成 web 挂钩而执行的操作。 可以是 `purchased`、`cancelled`、`pending_change`、`pending_change_cancelled` 或 `changed`。 更多信息请参阅下面的 web 挂钩有效负载示例。 **注：**`pending_change` 和 `pending_change_cancelled` 有效负载包含与 [`changed` 有效负载示例](#example-webhook-payload-for-a-changed-event)中所示键相同的键。 |
| `effective_date`       | `字符串` | `action` 开始生效的日期。                                                                                                                                                                                                                                                     |
| `sender`               | `对象`  | 执行 `action` 触发 web 挂钩的人。                                                                                                                                                                                                                                              |
| `marketplace_purchase` | `对象`  | {% data variables.product.prodname_marketplace %} 购买信息。                                                                                                                                                                                                               |

`marketplace_purchase` 对象含有以下键：

| 键                    | 类型    | 描述                                                                                                                                                                  |
| -------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `帐户`                 | `对象`  | 与订阅关联的 `organization` 或 `user` 帐户。 组织帐户将包含 `Organization_billing_email`, 这是组织的行政电子邮件地址。 要查找个人帐户的电子邮件地址，您可以使用[获取经过身份验证的用户](/v3/users/#get-the-authenticated-user)端点。 |
| `billing_cycle`      | `字符串` | 可以是 `yearly` 或 `monthly`。 如果 `account` 所有者拥有免费 GitHub 计划并且购买了免费 {% data variables.product.prodname_marketplace %} 计划，则 `billing_cycle` 将为 `nil`。                    |
| `unit_count`         | `整数`  | 购买的单位数。                                                                                                                                                             |
| `on_free_trial`      | `布尔值` | 当 `account` 处于免费试用期时，该值为 `true`。                                                                                                                                    |
| `free_trial_ends_on` | `字符串` | 免费试用到期日期。                                                                                                                                                           |
| `next_billing_date`  | `字符串` | 下一个结算周期开始日期。 如果 `account` 所有者拥有免费 GitHub.com 计划并且购买了免费 {% data variables.product.prodname_marketplace %} 计划，则 `next_billing_date` 将为 `nil`。                         |
| `plan`               | `对象`  | `user` 或 `organization` 购买的计划。                                                                                                                                      |

`plan` 对象含有以下键：

| 键                        | 类型      | 描述                                                 |
| ------------------------ | ------- | -------------------------------------------------- |
| `id`                     | `整数`    | 此计划的唯一标识符。                                         |
| `name`                   | `字符串`   | 计划的名称。                                             |
| `说明`                     | `字符串`   | 此计划的说明。                                            |
| `monthly_price_in_cents` | `整数`    | 此计划的每月价格（以美分为单位）。 例如，每月费用 10 美元的商品将显示价格 1000 美分。   |
| `yearly_price_in_cents`  | `整数`    | 此计划的每年价格（以美分为单位）。 例如，每月费用 100 美元的商品将显示价格 10000 美分。 |
| `price_model`            | `字符串`   | 此商品的定价模型。 可以是 `flat-rate`、`per-unit` 或 `free` 之一。  |
| `has_free_trial`         | `布尔值`   | 当此商品提供免费试用时，该值为 `true`。                            |
| `unit_name`              | `字符串`   | 单位的名称。 如果定价模型不是 `per-unit`，则该值为 `nil`。             |
| `bullet`                 | `字符串数组` | 定价计划中设置的项目符号的名称。                                   |

<br/>

#### `purchased` 事件的 web 挂钩有效负载示例
此示例提供 `purchased` 事件有效负载。

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.purchased }}

#### `changed` 事件的 web 挂钩有效负载示例

计划中的更改包括升级和降级。 此示例表示 `changed`、`pending_change` 和 `pending_change_cancelled` 事件有效负载。 该操作标识这三个事件中发生了哪一个。

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.changed }}

#### `cancelled` 事件的 web 挂钩有效负载示例

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.cancelled }}
