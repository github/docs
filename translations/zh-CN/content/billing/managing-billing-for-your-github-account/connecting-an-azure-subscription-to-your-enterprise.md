---
title: Connecting an Azure subscription to your enterprise
intro: 'You can use your Microsoft Enterprise Agreement to enable and pay for {% data variables.product.prodname_actions %}, {% data variables.product.prodname_registry %}, and {% data variables.product.prodname_github_codespaces %} usage.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-billing-and-payments-on-github/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise
versions:
  ghec: '*'
shortTitle: Connect an Azure subscription
---
## About Azure subscriptions and {% data variables.product.product_name %}

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} For more information, see "[About billing for {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions) and "[About billing for {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)."

{% note %}

**Note:** If your enterprise account is on a Microsoft Enterprise Agreement, connecting an Azure subscription is the only way to use {% data variables.product.prodname_actions %} and {% data variables.product.prodname_registry %} beyond the included amounts, or to use {% data variables.product.prodname_github_codespaces %} at all.

{% endnote %}

After you connect an Azure subscription, you can also manage your spending limits.

- "[Managing your spending limit for {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages)"
- "[Managing your spending limit for {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)"
- "[Managing your spending limit for {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)"

## Connecting your Azure subscription to your enterprise account

To connect your Azure subscription, you must have owner permissions to the subscription.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
{% data reusables.enterprise-accounts.payment-information-tab %}
1. Under "Payment Information", click **Add Azure Subscription**.
1. To sign in to your Microsoft account, follow the prompts.
1. Review the "Permissions requested" prompt. If you agree with the terms, click **Accept**.
1. Under "Select a subscription", select the Azure Subscription ID that you want to connect to your enterprise.

   {% note %}

   **Note:** {% data variables.product.company_short %}'s Subscription Permission Validation requests read-only access to display the list of available subscriptions. To select an Azure subscription, you must have owner permissions to the subscription. If the default tenant does not have the right permissions, you may need to specify a different tenant ID. For more information, see [Microsoft identity platform and OAuth 2.0 authorization code flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow#request-an-authorization-code) in Microsoft Docs.

   {% endnote %}
1. Click **Connect**.

## Disconnecting your Azure subscription from your enterprise account

After you disconnect your Azure subscription from your enterprise account, your usage can no longer exceed the amounts included with your plan.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
{% data reusables.enterprise-accounts.payment-information-tab %}
1. Under "Azure subscription", to the right of the subscription ID you want to disconnect, click **{% octicon "trash" aria-label="The trash icon" %}**.
1. Review the prompt, then click **Remove**.
