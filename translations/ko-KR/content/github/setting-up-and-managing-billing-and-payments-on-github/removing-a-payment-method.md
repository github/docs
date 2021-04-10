---
title: Removing a payment method
intro: 'If you aren''t using your payment method for any paid subscriptions on {% data variables.product.prodname_dotcom %}, you can remove the payment method so it''s no longer stored in your account.'
redirect_from:
  - /articles/removing-a-credit-card-associated-with-your-user-account/
  - /articles/removing-a-payment-method-associated-with-your-user-account/
  - /articles/removing-a-credit-card-associated-with-your-organization/
  - /articles/removing-a-payment-method-associated-with-your-organization/
  - /articles/removing-a-payment-method
versions:
  free-pro-team: '*'
topics:
  - 결제
---

If you're paying for your {% data variables.product.product_name %} subscription with a coupon, and you aren't using your payment method for any [other paid features or products](/articles/about-billing-on-github) on {% data variables.product.product_name %}, you can remove your credit card or PayPal information.

{% data reusables.dotcom_billing.coupon-expires %}

{% tip %}

**Tip:** If you [downgrade your account to a free product](/articles/downgrading-your-github-subscription) and you don't have subscriptions for any other paid features or products, we'll automatically remove your payment information.

{% endtip %}

### Removing your personal account's payment method

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.user_settings.payment-info-tab %}
{% data reusables.dotcom_billing.remove-payment-method %}
{% data reusables.dotcom_billing.remove_payment_info %}

### Removing your organization's payment method

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.payment-info-tab %}
{% data reusables.dotcom_billing.remove-payment-method %}
{% data reusables.dotcom_billing.remove_payment_info %}
