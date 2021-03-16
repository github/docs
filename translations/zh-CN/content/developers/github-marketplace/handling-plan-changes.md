---
title: 处理计划更改
intro: '升级或降级 {% data variables.product.prodname_marketplace %} 应用程序将触发 [`marketplace_purchase` 事件](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) web 挂钩，挂钩中带有可启动升级或降级流程的 `changed` 操作。'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/upgrading-or-downgrading-plans/
  - /apps/marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans/
  - /marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans
versions:
  free-pro-team: '*'
---



有关与计费相关之升级和降级的更多信息，请参阅“[与 {% data variables.product.prodname_marketplace %} API 集成](/marketplace/integrating-with-the-github-marketplace-api/)”。

### 步骤 1. 定价计划更改事件

当客户对其 {% data variables.product.prodname_marketplace %} 订单进行以下任何更改时，GitHub 会将带有 `changed` 操作的 `marketplace_purchase` web 挂钩发送到您的应用程序：
* 升级到更昂贵的定价计划或降级到价格较低的计划。
* 在其现有计划中增加或删除席位。
* 更改结算周期。

更改生效时，GitHub 将发送 web 挂钩。 例如，当客户降级计划时，GitHub 会在客户的结算周期结束时发送 web 挂钩。 当客户升级其计划以便立即访问新服务时，GitHub 会立即向您的应用程序发送 web 挂钩。 如果客户从月度结算周期切换到年度结算周期，则视为升级。 有关哪些操作被视为升级或降级，请参阅“[在 {% data variables.product.prodname_marketplace %} 中向客户计费](/marketplace/selling-your-app/billing-customers-in-github-marketplace/)”。

从 `marketplace_purchase` web 挂钩读取 `effective_date`、`marketplace_purchase` 和 `previous_marketplace_purchase`，以更新计划的开始日期，并更改客户的结算周期和定价计划。 有关 `marketplace_purchase` 事件有效负载的示例，请参阅“[{% data variables.product.prodname_marketplace %} web 挂钩事件](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)”。

如果您的应用程序提供免费试用，则在免费试用到期时您将收到带有 `changed` 操作的 `marketplace_purchase` web 挂钩。 如果客户的免费试用到期，则将客户升级到免费试用计划的付费版本。

### 步骤 2. 更新客户账户

您需要更新客户的帐户信息，以反映客户对其 {% data variables.product.prodname_marketplace %} 订单所做的结算周期和定价计划更改。 当您收到 `changed` 操作 web 挂钩时，您的 Marketplace 应用程序的网站或应用程序的 UI 上会显示定价计划、`seat_count`（对于每单位定价计划）和结算周期的升级。

当客户降级计划时，建议查看客户是否超出了计划限制，然后直接在您的 UI 中与他们互动，或者通过电话或电子邮件与他们联系。

要鼓励用户升级，您可以在应用程序的 UI 中显示升级 URL。 更多信息请参阅“[关于升级 URL](#about-upgrade-urls)”。

{% note %}

**注：**建议您使用 `GET /marketplace_listing/plans/:id/accounts` 进行定期同步，以确保您的应用程序具有每个帐户的正确计划、结算周期信息和单位计数（对于每单位定价）。

{% endnote %}

### 升级付款失败

{% data reusables.marketplace.marketplace-failed-purchase-event %}

### 关于升级 URL

您可以使用升级 URL 将用户从应用程序的 UI 重定向到 GitHub 上的升级页面：

```
https://www.github.com/marketplace/<LISTING_NAME>/upgrade/<LISTING_PLAN_NUMBER>/<CUSTOMER_ACCOUNT_ID>
```

例如，如果您发现某个客户需要从 5 人计划转换到 10 人计划，您可以在应用程序 UI 中显示一个“升级指南”按钮，或者显示包含升级 URL 链接的横幅。 升级 URL 可将客户带到您的上架产品计划的升级确认页面。

对客户想要购买的计划使用 `LISTING_PLAN_NUMBER`。 当您创建新的定价计划时，他们会收到 `LISTING_PLAN_NUMBER`（对于您的上架产品中每个计划而言是唯一的）和 `LISTING_PLAN_ID`（对于 {% data variables.product.prodname_marketplace %} 中每个计划而言是唯一的）。 当您[列出计划](/rest/reference/apps#list-plans)时，可以找到这些编号，它们用于标识上架产品的定价计划。 使用 `LISTING_PLAN_ID` 和“[列出计划的帐户](/rest/reference/apps#list-accounts-for-a-plan)”端点获取 `CUSTOMER_ACCOUNT_ID`。


{% note %}

**注：**如果您的客户升级到更多单位（例如席位），您仍然可以将他们送到适合其购买的计划中，但我们目前无法支持 `unit_count` 参数。

{% endnote %}
