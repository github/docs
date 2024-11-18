---
title: About billing on GitHub
intro: "Your bill is a combination of charges for your subscriptions, including your account's plan, and usage-based billing."
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-on-github
  - /articles/about-billing-on-github
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-github-billing-settings/about-billing-on-github
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
---

{% data reusables.billing.us-sales-tax-note %} For more information about updating your billing information, see "[AUTOTITLE](/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method)."
>
>If you're exempt from sales tax, you will need to upload a sales tax exemption certificate to your account. See "[AUTOTITLE](/billing/managing-your-github-billing-settings/adding-a-sales-tax-certificate)."

## About billing on {% data variables.product.prodname_dotcom %}

{% data variables.product.company_short %} bills separately for each account. This means that you will receive a separate bill for your personal account and for each organization or enterprise account you own. For more information about account types, see "[AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts)."

You can switch between the billing settings for each of your accounts by using the context switcher. For more information, see "[Switching between settings for your different accounts](#switching-between-settings-for-your-different-accounts)."

The bill for each account is a combination of subscriptions and usage-based billing. Subscriptions include your account's plan, such as {% data variables.product.prodname_pro %} or {% data variables.product.prodname_team %}, as well as paid products that have a consistent monthly cost, such as {% data variables.product.prodname_copilot %} and apps from {% data variables.product.prodname_marketplace %}.

Usage-based billing applies when the cost of a paid product depends on how much you use the product. For example, the cost of {% data variables.product.prodname_actions %} depends on how many minutes your jobs spend running and how much storage your artifacts use.

Your plan may come with included amounts of usage-based products. For example, with {% data variables.product.prodname_pro %}, your personal account gets 3,000 minutes of {% data variables.product.prodname_actions %} usage for free each month. You can control usage beyond the included amounts by setting spending limits.

## Included amounts by plan

<table>
  <tr>
    <th><b>Product</b></th>
    <th><b>Usage</b></th>
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
    <td>1 GB</th>
    <td>1 GB</th>
    <td>1 GB</th>
    <td>1 GB</th>
    <td>1 GB</th>
  </tr>
  <tr>
    <th><b>Bandwidth (per month)</b></th>
    <td>1 GB</th>
    <td>1 GB</th>
    <td>1 GB</th>
    <td>1 GB</th>
    <td>1 GB</th>
  </tr>
</table>

## Managing billing settings

You must manage billing settings, payment method, and paid features and products for each of your accounts separately. You can choose to pay monthly or yearly for each account. All subscriptions and usage-based billing associated with an account shares a billing date, payment method, and receipt.

{% ifversion fpt %}{% data reusables.dotcom_billing.payment-methods %} {% data reusables.dotcom_billing.same-payment-method %}

For qualifying usage-based services, you may choose to pay for the services from your {% data variables.product.prodname_dotcom %} account or from an Azure subscription. The terms of the billing method you choose will apply to services billed in this manner.{% endif %}

{% ifversion ghec %}

{% data reusables.billing.usage-based-billing %}

Payments can be made via credit card, PayPal, or Azure subscription. When you update the payment method for your account's plan, your new payment method is automatically added to your other subscriptions and usage-based billing.

{% endif %}

For more information, see "[AUTOTITLE](/billing/managing-your-github-billing-settings)."

## Switching between settings for your different accounts

If you're an organization or enterprise owner, you can switch between settings for your different accounts using the context switcher in your settings.

{% data reusables.user-settings.access_settings %}
1. At the top of the page, to the right of your name, click **Switch settings context**.

   ![Screenshot of the "Public profile" settings page for The Octocat. Next to the text "Your personal profile," a link, labeled "Switch settings context," is outlined in orange.](/assets/images/help/settings/context-switcher-button.png)
1. Start typing the name of the account you want to switch to, then click the name of the account.
1. In the left sidebar, click **{% octicon "credit-card" aria-hidden="true" %} Billing and plans**.
