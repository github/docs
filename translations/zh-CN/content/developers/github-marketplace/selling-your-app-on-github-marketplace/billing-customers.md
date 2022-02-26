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
---

## 了解结算周期

客户在购买您的应用程序时可选择月度或年度结算周期、 客户对结算周期和计划选择所做的所有更改都将触发 `marketplace_purchase` 事件。 您可以参考 `marketplace_purchase` web 挂钩有效负载，以查看客户选择了哪个结算周期以及下一个计费日期 (`effective_date`) 何时开始 。 有关 web 挂钩有效负载的更多信息，请参阅“[{% data variables.product.prodname_marketplace %} API 的 web 挂钩事件](/developers/github-marketplace/webhook-events-for-the-github-marketplace-api)”。

## 在应用程序 UI 中提供帐单服务

客户应该能够从您的应用程序网站执行以下操作：
- 客户应该能够单独修改或取消其个人和组织帐户的 {% data variables.product.prodname_marketplace %} 计划。
{% data reusables.marketplace.marketplace-billing-ui-requirements %}

## 升级、降级和取消的帐单服务

请遵循以下升级、降级和取消指南，以维护清晰一致的帐单流程。 有关 {% data variables.product.prodname_marketplace %} 购买事件的详细说明，请参阅“[在应用程序中使用 {% data variables.product.prodname_marketplace %} API](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)”。

您可以使用 `marketplace_purchase` web 挂钩的 `effective_date` 键来确定计划何时发生更改，并定期同步[列出计划的帐户](/rest/reference/apps#list-accounts-for-a-plan)。

### 升级

当客户升级其定价计划或将其结算周期从每月更改为每年时，您应立即使更改对他们生效。 您需要对新计划应用按比例的折扣并更改结算周期。

{% data reusables.marketplace.marketplace-failed-purchase-event %}

有关为应用程序构建升级或降级工作流程的信息，请参阅“[处理计划更改](/developers/github-marketplace/handling-plan-changes)”。

### 降级和取消

当客户从付费计划转为免费计划、选择成本比其当前计划低的计划或将结算周期从每年更改为每月时，就会发生降级。 当降级或取消发生时，您不需要提供退款。 相反，当前计划将保持有效状态，直到当前结算周期的最后一天。 `marketplace-purpose` 事件将在客户的新计划生效，即下一个结算周期开始时发送。

当客户取消计划时，您必须：
- 自动降级到免费计划（如果有）。

  {% data reusables.marketplace.cancellation-clarification %}
- 让他们能够通过 GitHub 升级计划（如果他们以后想要继续订阅计划）。

有关为应用程序构建取消工作流程的信息，请参阅“[处理计划取消](/developers/github-marketplace/handling-plan-cancellations)”。
