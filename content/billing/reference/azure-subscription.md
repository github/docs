---
title: Azure subscription reference
shortTitle: Azure subscription
intro: 'Reference information for connecting an Azure subscription to pay for usage of {% data variables.product.github %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Billing
  - Enterprise
  - Team
contentType: reference
---

## Enterprises and cost centers

There’s no limit to the number of enterprises or cost centers you can connect to a single Azure subscription.

If you want to use multiple Azure subscriptions to pay for usage in one enterprise account, you need to create **cost centers**. You can connect each cost center to a different Azure subscription. If a cost center is not connected to an Azure subscription, the usage is charged to Azure subscription of the enterprise account. This also happens if a cost center becomes invalid or is deleted—any future usage from those resources is billed to the enterprise subscription.

For details on how charges are applied to cost centers, see {% ifversion fpt or ghec %}[AUTOTITLE](/billing/reference/cost-center-allocation){% elsif ghes %}[AUTOTITLE](/enterprise-cloud@latest/billing/reference/cost-center-allocation) in the {% data variables.product.prodname_ghe_cloud %} documentation{% endif %}.

## Azure invoices

After you connect your Azure subscription, usage for {% data variables.product.github %}'s products are included on your Azure invoice, summarized by product family. Azure usage is separated by **SKU** and either **enterprise ID** or **cost center ID**. The format used is `enterprise:sku` or `costcenter:sku`.

> [!NOTE]
> Azure currently shows internal IDs, which may make it difficult to identify the corresponding enterprise or cost center.

### Invoice example

For example, if you use Azure to pay for {% data variables.product.prodname_ghe_cloud %} and {% data variables.product.prodname_GHAS %}, usage and price excluding tax for each line item will appear as follows.

| Product Family Usage Charges | Total (excluding Tax) |
| :- | :- |
| GH ENTERPRISE | AMOUNT |
| GH ADVANCED SECURITY | AMOUNT |

For more information about your Azure invoice, see [Understand terms on your Microsoft Azure invoice](https://learn.microsoft.com/azure/cost-management-billing/understand/understand-invoice) in the Microsoft Docs.

The {% data variables.product.company_short %} products on your Azure invoice are also MACC-eligible. For more information, see [Track your Microsoft Azure Consumption Commitment (MACC)](https://learn.microsoft.com/azure/cost-management-billing/manage/track-consumption-commitment) in the Microsoft Docs.

## {% data variables.product.prodname_emu %} trials

During an **{% data variables.product.prodname_emu %} trial**, you can use metered products up to the included limits. To exceed the included limits, you’ll need to link an Azure subscription.

> [!IMPORTANT] If you don't use {% data variables.product.prodname_emus %} in your trial of {% data variables.product.prodname_ghe_cloud %}, connecting an Azure subscription will immediately end your trial and begin paid usage.

For more information, see [AUTOTITLE](/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription#connecting-your-azure-subscription-to-your-enterprise-account).
