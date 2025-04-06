---
title: Upgrading or downgrading your client's paid organization
intro: Billing managers can upgrade or downgrade a client's paid organization at any time.
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-or-downgrading-your-clients-paid-organization
  - /articles/upgrading-or-downgrading-your-client-s-paid-organization
  - /articles/upgrading-or-downgrading-your-clients-paid-organization
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-up-paid-organizations-for-procurement-companies/upgrading-or-downgrading-your-clients-paid-organization
  - /billing/setting-up-paid-organizations-for-procurement-companies/upgrading-or-downgrading-your-clients-paid-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Upgrades
shortTitle: Upgrade or downgrade
---
{% data reusables.organizations.reseller-ask-to-become-billing-manager %}

{% tip %}

**Tips**:
* Before you upgrade your client's organization, you can [view or update the payment method on file for the organization](/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method).
* These instructions are for upgrading and downgrading organizations on the _per-seat subscription_. If your client pays for {% data variables.product.product_name %} using a _legacy per-repository_ plan, you can upgrade or [downgrade](/billing/managing-the-plan-for-your-github-account/downgrading-your-accounts-plan) their legacy plan, or [switch their organization to per-seat pricing](/billing/managing-the-plan-for-your-github-account/upgrading-your-accounts-plan).

{% endtip %}

## Upgrading an organization's number of paid seats

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.add-seats %}
{% data reusables.dotcom_billing.number-of-seats %}
{% data reusables.dotcom_billing.confirm-add-seats %}

After you add seats, the payment method on file for the organization will be charged a pro-rated amount based on the number of seats you're adding and the amount of time left in your billing cycle.

## Downgrading an organization's number of paid seats to free

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.downgrade-org-to-free %}
{% data reusables.dotcom_billing.confirm_cancel_org_plan %}
