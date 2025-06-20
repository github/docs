---
title: About billing on GitHub
intro: "GitHub bills you separately for each account you own. Your bill combines subscription costs and usage-based billing."
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-on-github
  - /articles/about-billing-on-github
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-github-billing-settings/about-billing-on-github
  - /billing/managing-your-github-billing-settings/about-billing-on-github
  - /billing/using-the-billing-platform/about-billing-on-github
  - /billing/using-the-new-billing-platform/about-billing-on-github
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
---

## About billing on {% data variables.product.prodname_dotcom %}

{% data variables.product.company_short %} bills you separately for each account you own (personal, organization, or enterprise). Your bill combines:

* **Subscriptions**: Fixed monthly costs for account plans (for example: {% data variables.product.prodname_pro %} or {% data variables.product.prodname_team %}) and paid products (for example: {% data variables.product.prodname_copilot %})
* **Usage-based billing**: Variable costs that depend on how much you use certain features (for example: {% data variables.product.prodname_actions %})

Each account type has its own billing settings that you manage separately.

* **For you personal account**: Your bill includes subscriptions for your personal account and charges for any usage that exceeds the included amounts.

* **For your organization**: Your organization's bill is separate from your personal account bill. It includes subscriptions for your organization and charges for any usage that exceeds the included amounts.
{% ifversion ghec %}
* **For your enterprise**: Enterprise accounts are billed separately from personal accounts and standalone organizations. The bill includes the subscription to {% data variables.product.prodname_enterprise %} and the costs of all the organizations it owns.
{% endif %}

For more information about account types, see [AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts).

{% data reusables.billing.us-sales-tax %}

## Included amounts by plan

The table below shows what's included with each plan. When you exceed these amounts, you'll be charged for additional usage unless you've set a budget with the setting "Stop usage when budget limit is reached" enabled.

<table>
  <tr>
    <th><b>Product</b></th>
    <th><b>Usage type</b></th>
    <th><b>{% data variables.product.prodname_free_user %}</b></th>
    <th><b>{% data variables.product.prodname_pro %}</b></th>
    <th><b>{% data variables.product.prodname_free_team %} for organizations</b></th>
    <th><b>{% data variables.product.prodname_team %}</b></th>
    <th><b>{% data variables.product.prodname_ghe_cloud %}</b></th>
  </tr>
  <tr>
    <th rowspan="2" scope="rowgroup"><b>{% data variables.product.prodname_actions %}</b></th>
    <th><b>Storage</b></th>
    <td>500 MB</th>
    <td>1 GB</th>
    <td>500 MB</th>
    <td>2 GB</th>
    <td>50 GB</th>
  </tr>
  <tr>
    <th><b>Minutes (per month)</b></th>
    <td>2,000</th>
    <td>3,000</th>
    <td>2,000</th>
    <td>3,000</th>
    <td>50,000</th>
  </tr>
   <tr>
    <th rowspan="2" scope="rowgroup"><b>{% data variables.product.prodname_github_codespaces %}</b></th>
    <th><b>Storage (per month)</b></th>
    <td>15 GB</th>
    <td>20 GB</th>
    <td>None</th>
    <td>None</th>
    <td>None</th>
  </tr>
  <tr>
    <th><b>Core hours (per month)</b></th>
    <td>120</th>
    <td>180</th>
    <td>None</th>
    <td>None</th>
    <td>None</th>
  </tr>
  <tr>
    <th rowspan="2" scope="rowgroup"><b>{% data variables.product.prodname_registry %}</b></th>
    <th><b>Storage</b></th>
    <td>500 MB</th>
    <td>2 GB</th>
    <td>500 MB</th>
    <td>2 GB</th>
    <td>50 GB</th>
  </tr>
  <tr>
    <th><b>Data transfer (per month)</b></th>
    <td>1 GB</th>
    <td>10 GB</th>
    <td>1 GB</th>
    <td>10 GB</th>
    <td>100 GB</th>
  </tr>
  <tr>
    <th rowspan="2" scope="rowgroup"><b>{% data variables.large_files.product_name_long %}</b></th>
    <th><b>Storage (per month)</b></th>
    <td>10 GB</th>
    <td>10 GB</th>
    <td>10 GB</th>
    <td>250 GB</th>
    <td>250 GB</th>
  </tr>
  <tr>
    <th><b>Bandwidth (per month)</b></th>
    <td>10 GB</th>
    <td>10 GB</th>
    <td>10 GB</th>
    <td>250 GB</th>
    <td>250 GB</th>
  </tr>
</table>

> [!TIP]
> For information about included requests for {% data variables.product.prodname_copilot %} plans, see [AUTOTITLE](/copilot/about-github-copilot/plans-for-github-copilot).

## Managing billing settings

You must manage billing settings, payment method, and paid features and products for each of your accounts separately. You can choose to pay monthly or yearly for each account. All subscriptions and usage-based billing associated with an account shares a billing date, payment method, and receipt.

{% ifversion fpt %}{% data reusables.dotcom_billing.payment-methods %} {% data reusables.dotcom_billing.same-payment-method %}

For qualifying usage-based services, you may choose to pay for the services from your {% data variables.product.prodname_dotcom %} account or from an Azure subscription. The terms of the billing method you choose will apply to services billed in this manner.{% endif %}

{% ifversion ghec %}

{% data reusables.billing.usage-based-billing %}

Payments can be made via credit card, PayPal, or Azure subscription. When you update the payment method for your account's plan, your new payment method is automatically added to your other subscriptions and usage-based billing.

{% endif %}

See [AUTOTITLE](/billing/managing-your-billing/managing-your-payment-and-billing-information).

## Switching between settings for your different accounts

If you're an organization or enterprise owner, you can switch between settings for your different accounts using the context switcher in your settings.

{% data reusables.user-settings.access_settings %}
1. At the top of the page, to the right of your name, click **Switch settings context**.

   ![Screenshot of the "Public profile" settings for The Octocat. Next to "Your personal profile," a "Switch settings context" link is outlined in orange.](/assets/images/help/settings/context-switcher-button.png)
1. Start typing the name of the account you want to switch to, then click the name of the account.
1. In the left sidebar, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and plans**.
