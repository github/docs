---
title: Adding information to your receipts
intro: 'You can add extra information to your {% data variables.product.product_name %} receipts, such as tax or accounting information required by your company or country.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/adding-information-to-your-receipts
  - /articles/can-i-add-my-credit-card-number-to-my-receipts
  - /articles/can-i-add-extra-information-to-my-receipts--2
  - /articles/how-can-i-add-extra-information-to-my-receipts
  - /articles/could-you-add-my-card-number-to-my-receipts
  - /articles/how-can-i-add-extra-information-to-my-personal-account-s-receipts
  - /articles/adding-information-to-your-personal-account-s-receipts
  - /articles/how-can-i-add-extra-information-to-my-organization-s-receipts
  - /articles/adding-information-to-your-organization-s-receipts
  - /articles/adding-information-to-your-receipts
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-github-billing-settings/adding-information-to-your-receipts
  - /billing/managing-your-github-billing-settings/adding-information-to-your-receipts
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Receipts
  - User account
shortTitle: Add to your receipts
---

Your receipts include your {% data variables.product.prodname_dotcom %} subscription as well as any subscriptions for other paid features and products. For more information, see "[AUTOTITLE](/billing/managing-your-github-billing-settings/about-billing-on-github)."

{% warning %}

**Warning**: For security reasons, we strongly recommend against including any confidential or financial information (such as credit card numbers) on your receipts.

{% endwarning %}

## Adding information to your personal account's receipts

You can add information to your personal account's receipts, such as a VAT or GST identification number, or your full business name or address of record.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans_payment %}
{% data reusables.user-settings.additional-information %}
{% data reusables.dotcom_billing.extra_info_receipt %}

## Adding information to your organization's receipts

You can add information to your organization's receipts, such as a VAT or GST identification number, or your full business name or address of record.

{% note %}

**Note**: {% data reusables.dotcom_billing.org-billing-perms %}

{% endnote %}

{% data reusables.organizations.billing-settings %}
1. At the top of the page, click **Payment information**.

   ![Screenshot of the "Billing Summary" section of the settings page. A link, labeled "Payment information," is highlighted with an orange outline.](/assets/images/help/settings/payment-info-link.png)

{% data reusables.user-settings.additional-information %}
{% data reusables.dotcom_billing.extra_info_receipt %}
