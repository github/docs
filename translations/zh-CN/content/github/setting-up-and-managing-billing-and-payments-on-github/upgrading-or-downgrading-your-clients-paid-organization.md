---
title: 升级或降级客户的付费组织
intro: 帐单管理员可以随时升级或降级客户的付费组织。
redirect_from:
  - /articles/upgrading-or-downgrading-your-client-s-paid-organization
  - /articles/upgrading-or-downgrading-your-clients-paid-organization
versions:
  free-pro-team: '*'
topics:
  - Billing
---

{% data reusables.organizations.reseller-ask-to-become-billing-manager %}

{% tip %}

**提示**：
- 升级客户的组织之前，您可以[查看或更新组织存档的付款方式](/articles/adding-or-editing-a-payment-method)。
- 这些说明适用于升级或降级*按席位订阅*的组织。 如果您的客户使用*旧的按仓库*方案支付 {% data variables.product.product_name %}，您可以升级或[降级](/articles/downgrading-your-github-subscription)其旧方案，或[将其组织切换为按席位定价](/articles/upgrading-your-github-subscription)。

{% endtip %}

### 升级组织的付费席位数量

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.subscriptions-tab %}
{% data reusables.dotcom_billing.add-seats %}
{% data reusables.dotcom_billing.number-of-seats %}
{% data reusables.dotcom_billing.confirm-add-seats %}

添加席位后，将基于您添加的席位数量以及结算周期的剩余时间对组织存档的付款方式按比例收取费用。

### 将组织的付费席位数量降级为免费

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.subscriptions-tab %}
{% data reusables.dotcom_billing.downgrade-org-to-free %}
{% data reusables.dotcom_billing.confirm_cancel_org_plan %}
