---
title: Adding or editing a payment method
intro: You can add a payment method to your account or update your account's existing payment method at any time.
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/adding-or-editing-a-payment-method
  - /articles/updating-your-personal-account-s-payment-method
  - /articles/how-do-i-update-my-credit-card
  - /articles/updating-your-account-s-credit-card
  - /articles/updating-your-personal-account-s-credit-card
  - /articles/updating-your-personal-account-s-paypal-information
  - /articles/does-github-provide-invoicing
  - /articles/switching-payment-methods-for-your-personal-account
  - /articles/paying-for-your-github-organization-account
  - /articles/updating-your-organization-s-credit-card
  - /articles/updating-your-organization-s-paypal-information
  - /articles/updating-your-organization-s-payment-method
  - /articles/switching-payment-methods-for-your-organization
  - /articles/adding-or-editing-a-payment-method
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-github-billing-settings/adding-or-editing-a-payment-method
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - User account
shortTitle: Manage a payment method
---


{% data reusables.billing.us-sales-tax-note %}
>
>If you're exempt from sales tax, you can upload a certificate to your account. See "[AUTOTITLE](/billing/managing-your-github-billing-settings/adding-a-sales-tax-certificate)."

{% data reusables.dotcom_billing.payment-methods %} {% data reusables.dotcom_billing.same-payment-method %}

We don't support purchase orders for personal accounts. We email receipts monthly or yearly on your account's billing date. If your company, country, or accountant requires your receipts to provide more detail, you can add extra information to your receipts. For more information, see "[AUTOTITLE](/billing/managing-your-github-billing-settings/adding-information-to-your-receipts)."

## Updating your personal account's payment method

You can update your personal account's payment method at any time.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans %}
{% data reusables.dotcom_billing.update_payment_method_personal_account %}
{% data reusables.billing.edit-billing-information %}
{% data reusables.dotcom_billing.enter-billing-info %}
{% data reusables.billing.edit-payment-method %}
{% data reusables.dotcom_billing.enter-payment-info %}

## Updating your organization's payment method

{% data reusables.dotcom_billing.org-billing-perms %}

If your organization is outside of the US or if you're using a corporate checking account to pay for {% data variables.product.product_name %}, PayPal could be a helpful method of payment.

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.update_payment_method_organization_account %}
1. If your account has an existing credit card that you want to update, click **New Card**.
![Screenshot of the "Payment method" section. Below some card details, a link, labeled "New Card", is highlighted with an orange outline.](/assets/images/help/billing/billing-new-card-button.png)
{% data reusables.dotcom_billing.enter-payment-info %}

{% ifversion ghec or ghes %}

## Updating your enterprise account's payment method

{% data reusables.enterprise-accounts.billing-perms %}

You can update your enterprise account's credit card or PayPal details, or you can switch to invoicing.

### Updating your enterprise account's credit card or PayPal details

{% note %}

**Note:** If your enterprise account is invoiced, you cannot change your payment method on {% data variables.product.prodname_dotcom %}. Instead, contact {% data variables.contact.contact_enterprise_sales %}.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
{% data reusables.dotcom_billing.update_payment_method %}
{% data reusables.billing.edit-billing-information %}
{% data reusables.dotcom_billing.enter-billing-info %}
{% data reusables.billing.edit-payment-method %}
{% data reusables.dotcom_billing.enter-payment-info %}

### Switching to invoicing

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Under "Payment information", click **Switch to invoice**.

   ![Screenshot of the billing page for an enterprise account. In the "Payment information" section, a link, labeled "Switch to invoice", is outlined in dark orange.](/assets/images/help/billing/switch-to-invoice.png)
1. Complete the form, then click **Contact Sales**.

{% endif %}
