---
title: Connecting an Azure subscription
intro: 'You can enable and pay for usage-based billing on {% data variables.product.github %} by connecting an Azure subscription.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-billing-and-payments-on-github/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise
  - /billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise
  - /billing/managing-billing-for-your-github-account/connecting-an-azure-subscription
  - /billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Connect Azure sub
permissions: 'Billing managers or owners'
topics:
  - Billing
contentType: how-tos
---

You can pay for metered usage of {% data variables.product.github %} features through Azure by connecting an Azure Subscription ID to your organization or enterprise account on {% data variables.product.github %}. See [AUTOTITLE](/billing/concepts/azure-subscriptions).

{% data reusables.billing.usage-based-billing %}

## Prerequisites

* You must be an owner of the {% data variables.product.github %} organization or enterprise account you want to connect to Azure.

* You must know your Azure subscription ID. See [Get subscription and tenant IDs in the Azure portal](https://learn.microsoft.com/en-us/azure/azure-portal/get-subscription-tenant-id) in the Microsoft Docs.

* You must be logged into Azure as a user who is able to provide tenant-wide admin consent or arrange to work with an Azure AD global administrator to configure an admin consent workflow. See [AUTOTITLE](/billing/concepts/azure-subscriptions).

## Connecting your Azure subscription to an organization or enterprise account

{% data reusables.billing.nav-to-org-or-ent %}
{% data reusables.billing.access-org-or-ent-page %}
{% data reusables.billing.click-payment-info %}

1. Scroll to the bottom of the page, to the right of "Metered billing via Azure", click **Add Azure Subscription**.
1. Sign in to your Microsoft account.
{% data reusables.billing.azure-accept-permissions %}

   {% data reusables.enterprise-accounts.azure-admin-approval-required-message %}

{% data reusables.billing.azure-select-subscription %}
   {% data reusables.enterprise-accounts.connect-azure %}

   {% data reusables.enterprise-accounts.tenant-app-permissions %}

## Editing or disconnecting your Azure subscription from an account

If you disconnect your Azure subscription from your account, your usage can no longer exceed the amounts included with your plan.

1. On the "Payment information" page, to the right of the subscription ID you want change.

   * **Edit the subscription**: Click {% octicon "pencil" aria-label="Edit Azure Subscription" %} to edit your subscription.
   * **Disconnect the subscription** Click {% octicon "trash" aria-label="Delete Azure Subscription" %} to remove the connection.

## Video demonstration of connecting a subscription

To connect an Azure subscription, you'll need appropriate access permissions on both {% data variables.product.github %} and the Azure billing portal. This may require coordination between two different people.

To see a demo of the process from beginning to end, see [Billing GitHub consumption through an Azure subscription](https://www.youtube.com/watch?v=Y-f7JKJ4_8Y) on {% data variables.product.company_short %}'s YouTube channel. This video demonstrates the process for an enterprise account.

## Further reading

* [AUTOTITLE](/billing/concepts/azure-subscriptions)
* [AUTOTITLE](/billing/reference/azure-subscription)
* [AUTOTITLE](/billing/how-tos/troubleshooting/azure-sub-connection)
