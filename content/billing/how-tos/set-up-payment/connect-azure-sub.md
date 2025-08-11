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

## Connecting your Azure subscription to your organization account

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}

1. In the "Access" section of the sidebar, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and plans**.
1. Under "Billing Management", to the right of "Metered billing via Azure", click **Add Azure Subscription**.
1. Sign in to your Microsoft account.
1. Review the "Permissions requested" prompt. If you agree with the terms, click **Accept**.

   {% data reusables.enterprise-accounts.azure-admin-approval-required-message %}

1. Under "Select a subscription", select the Azure Subscription ID that you want to connect to your organization.
   {% data reusables.enterprise-accounts.connect-azure %}

   {% data reusables.enterprise-accounts.tenant-app-permissions %}

## Connecting your Azure subscription to your enterprise account

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.billing.enterprise-billing-menu %}
{% data reusables.enterprise-accounts.payment-information-tab-both-platforms %}

1. Under "Payment Information", click **Add Azure Subscription**.
1. To sign in to your Microsoft account, follow the prompts.
1. Review the "Permissions requested" prompt. If you agree with the terms, click **Accept**.

   {% data reusables.enterprise-accounts.azure-admin-approval-required-message %}

1. Under "Select a subscription", select the Azure subscription ID that you want to connect to your enterprise.

   {% data reusables.enterprise-accounts.connect-azure %}

   {% data reusables.enterprise-accounts.tenant-app-permissions %}

## Editing or disconnecting your Azure subscription from an account

If you disconnect your Azure subscription from your account, your usage can no longer exceed the amounts included with your plan.

1. Under "Billing Management", then under "Metered billing via Azure", to the right of the subscription ID you want change.

   * **Edit the subscription**: Click {% octicon "pencil" aria-label="Edit Azure Subscription" %} to edit your subscription.
   * **Disconnect the subscription** Click {% octicon "trash" aria-label="Delete Azure Subscription" %} to remove the connection.

## Video demonstration of connecting a subscription

To connect an Azure subscription, you'll need appropriate access permissions on both {% data variables.product.github %} and the Azure billing portal. This may require coordination between two different people.

To see a demo of the process from beginning to end, see [Billing GitHub consumption through an Azure subscription](https://www.youtube.com/watch?v=Y-f7JKJ4_8Y) on {% data variables.product.company_short %}'s YouTube channel. This video demonstrates the process for an enterprise account. If you're connecting a subscription to an organization account, see [Connecting your Azure subscription to your organization account](/free-pro-team@latest/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription#connecting-your-azure-subscription-to-your-organization-account).

## Further reading

* [AUTOTITLE](/billing/concepts/azure-subscriptions)
* [AUTOTITLE](/billing/reference/azure-subscription)
* [AUTOTITLE](/billing/how-tos/troubleshooting/azure-sub-connection)
