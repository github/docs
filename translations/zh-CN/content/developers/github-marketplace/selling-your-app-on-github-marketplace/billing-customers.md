---
title: 向客户计费
intro: '{% data variables.product.prodname_marketplace %} 上的应用程序应遵守 GitHub 的计费指南并支持推荐的服务。 遵循我们的指南可帮助客户顺利完成帐单流程。'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/billing-customers-in-github-marketplace
  - /apps/marketplace/selling-your-app/billing-customers-in-github-marketplace
  - /marketplace/selling-your-app/billing-customers-in-github-marketplace
  - /developers/github-marketplace/billing-customers
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: 86f012c4a74d010ddaed9ec495ae2f5d8a8dd9eb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084957'
---
## 了解结算周期

客户在购买您的应用程序时可选择月度或年度结算周期、 客户对计费周期所做的所有更改和计划选择都会触发 `marketplace_purchase` 事件。 可以参考 `marketplace_purchase` Webhook 有效负载来查看客户选择的计费周期，以及下一个计费日期的开始时间 (`effective_date`)。 有关 Webhook 有效负载的详细信息，请参阅“[{% data variables.product.prodname_marketplace %} API 的 Webhook 事件](/developers/github-marketplace/webhook-events-for-the-github-marketplace-api)”。

## 在应用程序 UI 中提供帐单服务

客户应该能够从您的应用程序网站执行以下操作：
- 客户应该能够单独修改或取消其个人和组织帐户的 {% data variables.product.prodname_marketplace %} 计划。
{% data reusables.marketplace.marketplace-billing-ui-requirements %}

## 升级、降级和取消的帐单服务

请遵循以下升级、降级和取消指南，以维护清晰一致的帐单流程。 有关 {% data variables.product.prodname_marketplace %} 购买事件的更详细说明，请参阅“[在应用中使用 {% data variables.product.prodname_marketplace %} API](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)”。

可以使用 `marketplace_purchase` Webhook 的 `effective_date` 键来确定计划更改发生的时间并定期同步[列出计划的帐户](/rest/reference/apps#list-accounts-for-a-plan)。

### 升级

当客户升级其定价计划或将其结算周期从每月更改为每年时，您应立即使更改对他们生效。 您需要对新计划应用按比例的折扣并更改结算周期。

{% data reusables.marketplace.marketplace-failed-purchase-event %}

有关在应用中生成升级和降级工作流的信息，请参阅“[处理计划更改](/developers/github-marketplace/handling-plan-changes)”。

### 降级和取消

当客户从付费计划转为免费计划、选择成本比其当前计划低的计划或将结算周期从每年更改为每月时，就会发生降级。 当降级或取消发生时，您不需要提供退款。 相反，当前计划将保持有效状态，直到当前结算周期的最后一天。 `marketplace_purchase` 事件将在新计划生效，即在客户的下一个结算周期开始时发送。

当客户取消计划时，您必须：
- 自动降级到免费计划（如果有）。
  
  {% data reusables.marketplace.cancellation-clarification %}
- 让他们能够通过 GitHub 升级计划（如果他们以后想要继续订阅计划）。

有关在应用中生成取消工作流的信息，请参阅“[处理计划取消](/developers/github-marketplace/handling-plan-cancellations)”。
