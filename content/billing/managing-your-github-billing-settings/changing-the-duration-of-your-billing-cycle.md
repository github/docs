---
title: Changing the duration of your billing cycle
intro: You can pay for your account's subscription and other paid features and products on a monthly or yearly billing cycle.
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/changing-the-duration-of-your-billing-cycle
  - /articles/monthly-and-yearly-billing/
  - /articles/switching-between-monthly-and-yearly-billing-for-your-personal-account/
  - /articles/switching-between-monthly-and-yearly-billing-for-your-organization/
  - /articles/changing-the-duration-of-your-billing-cycle
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-github-billing-settings/changing-the-duration-of-your-billing-cycle
versions:
  fpt: '*'
type: how_to
topics:
  - Organizations
  - Repositories
  - User account
shortTitle: Billing cycle
---
When you change your billing cycle's duration, your {% data variables.product.prodname_dotcom %} subscription, along with any other paid features and products, will be moved to your new billing cycle on your next billing date.

## Changing the duration of your personal account's billing cycle

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing_plans %}
{% data reusables.dotcom_billing.change_plan_duration %}
{% data reusables.dotcom_billing.confirm_duration_change %}

## Changing the duration of your organization's billing cycle

{% data reusables.dotcom_billing.org-billing-perms %}

### Changing the duration of a per-user subscription

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.change_plan_duration %}
{% data reusables.dotcom_billing.confirm_duration_change %}

### Changing the duration of a legacy per-repository plan

{% data reusables.organizations.billing-settings %}
4. Under "Billing overview", click **Change plan**.
  ![Billing overview change plan button](/assets/images/help/billing/billing_overview_change_plan.png)
5. At the top right corner, click **Switch to monthly billing** or **Switch to yearly billing**.
  ![Billing information section](/assets/images/help/billing/settings_billing_organization_plans_switch_to_yearly.png)
