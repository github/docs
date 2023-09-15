---
title: Changing the duration of your billing cycle
intro: You can pay for your account's subscription and other paid features and products on a monthly or yearly billing cycle.
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/changing-the-duration-of-your-billing-cycle
  - /articles/monthly-and-yearly-billing
  - /articles/switching-between-monthly-and-yearly-billing-for-your-personal-account
  - /articles/switching-between-monthly-and-yearly-billing-for-your-organization
  - /articles/changing-the-duration-of-your-billing-cycle
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-github-billing-settings/changing-the-duration-of-your-billing-cycle
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Repositories
  - User account
shortTitle: Billing cycle
---
When you change your billing cycle's duration, your {% data variables.product.prodname_dotcom %} subscription, along with any other paid features and products, will be moved to your new billing cycle on your next billing date.

## Changing the duration of your personal account's billing cycle

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans %}
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
1. Under "Billing overview", next to your plan, click **Change plan**.
1. At the top right corner, click **Switch to monthly billing** or **Switch to yearly billing**.

{% ifversion ghec %}

## Changing the duration of your enterprise account's billing cycle

{% data reusables.enterprise-accounts.billing-perms %}

{% note %}

**Note:** You cannot change the duration of your billing cycle if your enterprise account is invoiced.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Under "Payment information", click **Switch to yearly billing and save** or **Switch to monthly billing**.

   ![Screenshot of the billing page for an enterprise account. In the "Payment information" section, a link, labeled "Switch to yearly billing and save", is outlined in dark orange.](/assets/images/help/billing/switch-to-yearly-billing.png)
1. Under "How often do you want to be billed?", select a billing cycle.
1. Click **Change your account's billing cycle**.
{% endif %}
