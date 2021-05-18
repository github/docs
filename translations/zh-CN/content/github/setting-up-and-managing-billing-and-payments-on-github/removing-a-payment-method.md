---
title: 删除付款方式
intro: '如果您没有将付款方式用于 {% data variables.product.prodname_dotcom %} 上任何付费订阅，则可以删除付款方式，以使其不再存储在您的帐户中。'
redirect_from:
  - /articles/removing-a-credit-card-associated-with-your-user-account/
  - /articles/removing-a-payment-method-associated-with-your-user-account/
  - /articles/removing-a-credit-card-associated-with-your-organization/
  - /articles/removing-a-payment-method-associated-with-your-organization/
  - /articles/removing-a-payment-method
versions:
  free-pro-team: '*'
topics:
  - Billing
---

如果您使用优惠券为 {% data variables.product.product_name %} 订阅付款，并且不会将付款方式用于 {% data variables.product.product_name %} 上的任何[其他付费功能或产品](/articles/about-billing-on-github)，则可以删除信用卡或 PayPal 信息。

{% data reusables.dotcom_billing.coupon-expires %}

{% tip %}

**提示：**如果您[将帐户降级为免费产品](/articles/downgrading-your-github-subscription)并且没有任何其他付费功能或产品的订阅，我们将自动删除您的付款信息。

{% endtip %}

### 删除个人帐户的付款方式

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing_plans %}
{% data reusables.user_settings.payment-info-link %}
{% data reusables.dotcom_billing.remove-payment-method %}
{% data reusables.dotcom_billing.remove_payment_info %}

### 删除组织的付款方式

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
{% data reusables.user_settings.payment-info-link %}
{% data reusables.dotcom_billing.remove-payment-method %}
{% data reusables.dotcom_billing.remove_payment_info %}
