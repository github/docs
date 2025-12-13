---
title: Managing your client's paid organization
intro: Billing managers can upgrade or downgrade a client's paid organization at any time, and set their plan to renew.
redirect_from:
## Renewing article's redirects
  - /github/setting-up-and-managing-billing-and-payments-on-github/renewing-your-clients-paid-organization
  - /articles/renewing-your-client-s-paid-organization
  - /articles/renewing-your-clients-paid-organization
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-up-paid-organizations-for-procurement-companies/renewing-your-clients-paid-organization
  - /billing/setting-up-paid-organizations-for-procurement-companies/renewing-your-clients-paid-organization
  - /billing/setting-up-paid-accounts-for-procurement-companies/setting-up-paid-organizations-for-procurement-companies/renewing-your-clients-paid-organization
  - /billing/how-tos/manage-for-client/renew-client-organization
## Original article's redirects
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-or-downgrading-your-clients-paid-organization
  - /articles/upgrading-or-downgrading-your-client-s-paid-organization
  - /articles/upgrading-or-downgrading-your-clients-paid-organization
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-up-paid-organizations-for-procurement-companies/upgrading-or-downgrading-your-clients-paid-organization
  - /billing/setting-up-paid-organizations-for-procurement-companies/upgrading-or-downgrading-your-clients-paid-organization
  - /billing/setting-up-paid-accounts-for-procurement-companies/setting-up-paid-organizations-for-procurement-companies/upgrading-or-downgrading-your-clients-paid-organization
versions:
  fpt: '*'
  ghec: '*'
permissions: 'Billing manager or organization owner'
topics:
  - Billing
  - Organizations
  - Upgrades
shortTitle: Manage client org
contentType: how-tos
---

If you're not already billing manager for the organization, an organization owner at your client will need to add you to the organization as a billing manager. See [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization).

## Renewing a client's paid plan

If your client's organization already has a valid payment method, the plan will automatically renew at the start of each billing cycle. Otherwise, you or the client will need to add a payment method.

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.update_payment_method_organization_account %}
1. Under "Payment method", click **New Card**.
![Screenshot of the "Payment method" section. Below some card details, a link, labeled "New Card", is highlighted with an orange outline.](/assets/images/help/billing/billing-new-card-button.png)
{% data reusables.dotcom_billing.enter-payment-info %}

## Upgrading the number of paid seats

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.add-seats %}
{% data reusables.dotcom_billing.number-of-seats %}
{% data reusables.dotcom_billing.confirm-add-seats %}

After you add seats, the payment method on file for the organization will be charged a pro-rated amount based on the number of seats you're adding and the amount of time left in your billing cycle.

## Downgrading an organization's plan to free

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.downgrade-org-to-free %}
{% data reusables.dotcom_billing.confirm_cancel_org_plan %}
