---
title: Connecting an Azure subscription to your enterprise
intro: 'You can use your Microsoft Enterprise Agreement to enable and pay for {% data variables.product.prodname_actions %} and {% data variables.product.prodname_registry %} usage beyond the included amounts for your enterprise.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/connecting-an-azure-subscription-to-your-enterprise
versions:
  free-pro-team: '*'
---
### About Azure subscriptions and {% data variables.product.product_name %}

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} For more information, see "[About billing for {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions) and "[About billing for {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)." 

After you connect an Azure subscription, you can also manage your spending limit. For information on managing and changing your account's spending limit, see "[Managing your spending limit for {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-packages)" and "[Managing your spending limit for {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-actions)."

### Connecting your Azure subscription to your enterprise account

To connect your Azure subscription, you must have owner permissions to the subscription.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
{% data reusables.enterprise-accounts.payment-information-tab %}
1. Under "Payment Information", click **Add Azure Subscription**.
1. To sign in to your Microsoft account, follow the prompts.
1. Review the "Permissions requested" prompt. If you agree with the terms, click **Accept**. 
1. Under "Select a subscription", select the Azure Subscription ID that you want to connect to your enterprise.
1. Click **Connect**.

### Disconnecting your Azure subscription from your enterprise account

After you disconnect your Azure subscription from your enterprise account, your usage can no longer exceed the amounts included with your plan.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
{% data reusables.enterprise-accounts.payment-information-tab %}
1. Under "Azure subscription", to the right of the subscription ID you want to disconnect, click **{% octicon "trashcan" aria-label="The trashcan icon" %}**.
1. Review the prompt, then click **Remove**.
