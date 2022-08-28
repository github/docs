---
title: 更改结算周期的时长
intro: 您可以按月度或年度结算周期来支付您帐户的订阅及其他付费功能和产品的费用。
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/changing-the-duration-of-your-billing-cycle
  - /articles/monthly-and-yearly-billing/
  - /articles/switching-between-monthly-and-yearly-billing-for-your-personal-account/
  - /articles/switching-between-monthly-and-yearly-billing-for-your-organization/
  - /articles/changing-the-duration-of-your-billing-cycle
  - /github/setting-up-and-managing-billing-and-payments-on-github/changing-the-duration-of-your-billing-cycle
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-github-billing-settings/changing-the-duration-of-your-billing-cycle
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Organizations
  - Repositories
  - User account
---

更改结算周期的时长后，您的 {% data variables.product.prodname_dotcom %} 订阅，以及任何其他付费功能和产品，将在下一个结算日期转用新的结算周期。

### 更改个人帐户结算周期的时长

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing_plans %}
{% data reusables.dotcom_billing.change_plan_duration %}
{% data reusables.dotcom_billing.confirm_duration_change %}

### 更改组织结算周期的时长

{% data reusables.dotcom_billing.org-billing-perms %}

#### 更改按用户订阅的时长

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.change_plan_duration %}
{% data reusables.dotcom_billing.confirm_duration_change %}

#### 更改传统的按仓库计划的时长

{% data reusables.organizations.billing-settings %}
4. 在“Billing overview（帐单概览）”下，单击 **Change plan（更改计划）**。 ![帐单概览更改计划按钮](/assets/images/help/billing/billing_overview_change_plan.png)
5. 在右上角，单击 **Switch to monthly billing（切换为月度结算）** or **Switch to yearly billing（切换为年度结算）**。 ![帐单信息部分](/assets/images/help/billing/settings_billing_organization_plans_switch_to_yearly.png)
