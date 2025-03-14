---
title: Managing your payment and billing information
intro: 'Learn how to manage your payment information and history, and update your billing contacts using the new billing platform.'
versions:
  feature: enhanced-billing-platform
redirect_from:
  - /billing/using-the-enhanced-billing-platform-for-enterprises/managing-your-payment-and-billing-information
type: how_to
topics:
  - Enterprise
  - Team
permissions: '{% data reusables.permissions.enhanced-billing-platform %}'
product: '{% data reusables.billing.enhanced-billing-platform-product %}'
shortTitle: Manage your payment information
---

You can view your payment information and history, and update your billing contacts. Supported payment methods include:

* Credit card
* PayPal
* Azure Subscription ID (not available for personal accounts)

{% ifversion fpt %}

## Connecting your Azure subscription

You must know your Azure subscription ID. For more information, see the following documentation or [contact Azure support](https://azure.microsoft.com/support/).

* [AUTOTITLE](/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription)
* [Get subscription and tenant IDs in the Azure portal](https://learn.microsoft.com/en-us/azure/azure-portal/get-subscription-tenant-id) in the Microsoft Docs

{% elsif ghec %}

## Prerequisites for paying through Azure

* You must be new to {% data variables.product.prodname_ghe_cloud %} to begin with usage-based billing through an Azure subscription. If your company already uses {% data variables.product.github %}, you can use {% data variables.product.prodname_importer_proper_name %} to migrate your resources to a new subscription that bills through Azure. For more information, see [AUTOTITLE](/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer).
* Prepaid usage is not currently available for usage-based billing through Azure.
* You must know your Azure subscription ID. For more information, see the following documentation or [contact Azure support](https://azure.microsoft.com/support/).

  * [AUTOTITLE](/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription)
  * [Get subscription and tenant IDs in the Azure portal](https://learn.microsoft.com/en-us/azure/azure-portal/get-subscription-tenant-id) in the Microsoft Docs

## Connecting your Azure subscription

After creation of your new enterprise on {% data variables.product.prodname_dotcom_the_website %}, to begin usage-based billing through Azure, you must connect your Azure subscription.

> [!IMPORTANT] If you don't use {% data variables.product.prodname_emus %}, connection of an Azure subscription will immediately end your trial and begin paid usage.

For more information, see [AUTOTITLE](/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription#connecting-your-azure-subscription-to-your-enterprise-account).

## What does my Azure invoice look like?

After you connect your Azure subscription, usage for {% data variables.product.company_short %}'s products will appear on your Azure invoice, summarized by product family.

For example, if you use this billing arrangement for {% data variables.product.prodname_ghe_cloud %} and {% data variables.product.prodname_GH_advanced_security %}, usage and price excluding tax for each line item will appear as follows.

| Product Family Usage Charges | Total (excluding Tax) |
| :- | :- |
| GH ENTERPRISE | AMOUNT |
| GH ADVANCED SECURITY | AMOUNT |

For more information about your Azure invoice, see [Understand terms on your Microsoft Azure invoice](https://learn.microsoft.com/azure/cost-management-billing/understand/understand-invoice) in the Microsoft Docs.

The {% data variables.product.company_short %} products on your Azure invoice are also MACC-eligible. For more information, see [Track your Microsoft Azure Consumption Commitment (MACC)](https://learn.microsoft.com/azure/cost-management-billing/manage/track-consumption-commitment) in the Microsoft Docs.

{% endif %}

## Viewing payment information

{% ifversion fpt %}

You can view and edit your billing information and update your payment method.

1. In the upper-right corner of any page on {% data variables.product.prodname_dotcom %}, select your profile photo.

   * For **personal accounts**, click **Settings**, then in the **Access** section of the sidebar, click **{% octicon "credit-card" aria-hidden="true" %} Billing & Licensing**.
   * For **organizations**, click **Your organizations**, then next to the organization, click **Settings**. In the organization sidebar, click **{% octicon "credit-card" aria-hidden="true" %} Billing & Licensing**.

{% elsif ghec %}

You can view and edit your billing information, update your payment method, and view active coupons.

>[!NOTE] This only applies to invoiced enterprise accounts.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.billing.enterprise-billing-menu %}

{% endif %}

1. Click **Payment information**.
1. Click **Edit** to edit your payment information or **Remove** to delete your payment method.
1. Follow the prompts.

## Viewing payment history

You can view your payment history, including the date, amount, and payment method. You can also download past payments.

1. Display the **Billing & Licensing** section of the sidebar of the {% data variables.enterprise.enterprise_or_org %} settings.
1. Click **Payment history**.

{% ifversion ghec %}

## Managing billing contacts

You can add an email address to receive billing notifications regarding payments and budget threshold alerts.

1. Display the **Billing & Licensing** section of the sidebar of the enterprise settings.
1. Click **Billing contacts**.
1. Click **Add** in the upper-right corner and follow the prompt.
1. Click {% octicon "pencil" aria-label="The edit icon" %} to edit the primary billing contact or {% octicon "kebab-horizontal" aria-label="Show options" %} to either remove or make a contact the primary billing contact.

{% endif %}
