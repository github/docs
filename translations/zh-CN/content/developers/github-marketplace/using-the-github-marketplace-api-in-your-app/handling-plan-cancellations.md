---
title: 处理计划取消
intro: '取消 {% data variables.product.prodname_marketplace %} 应用程序将触发 [`marketplace_purchase` 事件](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) web 挂钩，挂钩中带有可启动取消流程的 `cancelled` 操作。'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/cancelling-plans
  - /apps/marketplace/integrating-with-the-github-marketplace-api/cancelling-plans
  - /marketplace/integrating-with-the-github-marketplace-api/cancelling-plans
  - /developers/github-marketplace/handling-plan-cancellations
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: 计划取消
---

有关与计费相关之取消的更多信息，请参阅“[在 {% data variables.product.prodname_marketplace %} 中向客户计费](/apps//marketplace/administering-listing-plans-and-user-accounts/billing-customers-in-github-marketplace)”。

## 步骤 1. 取消事件

如果客户选择取消 {% data variables.product.prodname_marketplace %}，则在取消生效时，GitHub 会向您的应用程序发送带有操作 `cancelled` 的 [`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) web 挂钩。 如果客户在免费试用期间取消，您的应用程序将立即收到此事件。 如果客户取消付费计划，则取消将在客户结算周期结束时生效。

## 步骤 2. 停用客户帐户

当客户取消免费或付费计划时，您的应用程序必须执行以下步骤才能完成取消：

1. 停用取消计划的客户的帐户。
1. 撤消您的应用程序为客户接收的 OAuth 令牌。
1. 如果您的应用程序是 OAuth 应用程序，则删除应用程序为仓库创建的所有 web 挂钩。
1. 在收到 `cancelled` 事件后的 30 天内删除所有客户数据。

{% note %}

**注：**我们建议使用 [`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) web 挂钩的 `effective_date` 来确定计划更改何时生效，并定期同步[列出计划的帐户](/rest/reference/apps#list-accounts-for-a-plan)。 有关 web 挂钩的更多信息，请参阅“[{% data variables.product.prodname_marketplace %} web 挂钩事件](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)”。

{% endnote %}
