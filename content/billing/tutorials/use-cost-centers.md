---
title: Using cost centers to allocate costs to business units
intro: Learn how to create and use cost centers to manage costs across your company's divisions at scale.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /billing/using-the-enhanced-billing-platform-for-enterprises/charging-business-units
  - /billing/using-the-new-billing-platform/charging-business-units
  - /billing/managing-your-billing/charging-business-units
topics:
  - Billing
  - Enterprise
product: '{% data variables.product.prodname_ghe_cloud %}'
shortTitle: Use cost centers
contentType: tutorials
---

>[!NOTE] Before you create or update a cost center, if you're unsure of how spending will be allocated to the cost center, see [AUTOTITLE](/billing/reference/cost-center-allocation).

## Creating a cost center

> [!NOTE]
> An enterprise can create up to 250 cost centers.

Create cost centers to monitor and manage expenses for specific organizations or repositories. Multiple organizations, repositories, and users can be assigned to one cost center.

When you create a cost center, you can add **organizations**, **repositories**, or **users**. The cost center will then track spending for the selected entities.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.billing.enterprise-billing-menu %}
1. Click **Cost centers**.
1. Click **New cost center** in the upper-right corner.
1. In the text box under "Name", enter a name for your cost center.
1. If your account is billed to Azure, you have the option to add an Azure ID. Your credentials will be verified against Azure to ensure the Azure IDs associated to your account are available.
1. Under **Resources**, select the organizations, repositories, and/or users that will be a part of the cost center.

   >[!NOTE] A resource (organization, repository, or user) can only be assigned to one cost center at a time. If you add a resource that belongs to a different cost center, it will be moved to the new cost center and you will be notified.

1. Click **Create cost center**.

## Adding a budget to a cost center

After you create a cost center, you can add a monthly budget and receive alerts from the cost center to monitor your spending and usage. See [AUTOTITLE](/billing/managing-your-billing/using-budgets-control-spending).

## Viewing cost center usage

You can view the usage of your cost centers and download the usage data for further analysis. See [AUTOTITLE](/billing/using-the-enhanced-billing-platform-for-enterprises/gathering-insights-on-your-spending).

## Viewing, editing, and deleting cost centers

You can view, edit, and delete cost centers to manage your business units effectively.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.billing.enterprise-billing-menu %}
1. Click **Cost centers**.
1. Select {% octicon "kebab-horizontal" aria-label="Cost center dropdown" %} to the right of a cost center, then click **View details**, **Edit**, or **Delete**.
1. Follow the prompts.

## Further reading

* [AUTOTITLE](/rest/enterprise-admin/billing)
