---
title: About billing on GitHub
intro: 'Everything you purchase on {% data variables.product.prodname_dotcom %} shares your account''s billing date, payment method, and receipt.'
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
## Paid features and products

You can upgrade your personal account or organization to a paid subscription at any time. You can also choose to purchase apps from {% data variables.product.prodname_marketplace %} or upgrade storage and bandwidth for {% data variables.large_files.product_name_long %}. For more information, see:
- "[AUTOTITLE](/billing/managing-billing-for-your-github-account/about-billing-for-github-accounts)"
- "[AUTOTITLE](/billing/managing-billing-for-github-marketplace-apps/about-billing-for-github-marketplace)"
- "[AUTOTITLE](/billing/managing-billing-for-git-large-file-storage/about-billing-for-git-large-file-storage)"
- "[AUTOTITLE](/billing/managing-billing-for-github-sponsors/about-billing-for-github-sponsors)"

## Managing billing settings

{% data reusables.sponsors.paypal-deprecation %}

You must manage billing settings, payment method, and paid features and products for each of your accounts separately. You can choose to pay monthly or yearly for each account's paid products and features. Every paid feature or product associated with an account shares a billing date, payment method, and receipt.

{% data reusables.dotcom_billing.payment-methods %} {% data reusables.dotcom_billing.same-payment-method %}

{% ifversion fpt or ghec %}For qualifying metered or consumption-based services, you may choose to pay for the services from your {% data variables.product.prodname_dotcom %} account or from an Azure subscription. The terms of the billing method you choose will apply to services billed in this manner.{% endif %}

For more information, see "[AUTOTITLE](/billing/managing-your-github-billing-settings)."

## Switching between settings for your different accounts

If you're an organization or enterprise owner, you can switch between settings for your different accounts using the context switcher in your settings.

{% data reusables.user-settings.access_settings %}
1. At the top of the page, to the right of your username, click **Switch to another account**.
![Context switcher button](/assets/images/help/settings/context-switcher-button.png)
1. Start typing the name of the account you want to switch to, then click the name of the account.
![Context switcher menu](/assets/images/help/settings/context-switcher-menu.png)
1. In the left sidebar, click **{% octicon "credit-card" aria-label="The credit card icon" %} Billing and plans**.

## Further reading

- "[AUTOTITLE](/billing/managing-billing-for-your-github-account)"
- "[AUTOTITLE](/billing/managing-billing-for-github-marketplace-apps)"
- "[AUTOTITLE](/billing/managing-billing-for-git-large-file-storage)"
- "[AUTOTITLE](/billing/managing-billing-for-github-sponsors)"
