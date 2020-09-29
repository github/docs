---
title: Upgrading or downgrading your client's paid organization
intro: Billing managers can upgrade or downgrade a client's paid organization at any time.
redirect_from:
  - /articles/upgrading-or-downgrading-your-client-s-paid-organization
  - /articles/upgrading-or-downgrading-your-clients-paid-organization
versions:
  free-pro-team: '*'
---

{% data reusables.organizations.reseller-ask-to-become-billing-manager %}

{% tip %}

**Tips**:
- Before you upgrade your client's organization, you can [view or update the payment method on file for the organization](/articles/adding-or-editing-a-payment-method).
- These instructions are for upgrading and downgrading organizations on the *per-seat subscription*. If your client pays for {% data variables.product.product_name %} using a *legacy per-repository* plan, you can upgrade or [downgrade](/articles/downgrading-your-github-subscription) their legacy plan, or [switch their organization to per-seat pricing](/articles/upgrading-your-github-subscription).

{% endtip %}

### Upgrading an organization's number of paid seats

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.subscriptions-tab %}
{% data reusables.dotcom_billing.add-seats %}
{% data reusables.dotcom_billing.number-of-seats %}
{% data reusables.dotcom_billing.confirm-add-seats %}

After you add seats, the payment method on file for the organization will be charged a pro-rated amount based on the number of seats you're adding and the amount of time left in your billing cycle.

### Downgrading an organization's number of paid seats to free

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.subscriptions-tab %}
{% data reusables.dotcom_billing.downgrade-org-to-free %}
{% data reusables.dotcom_billing.confirm_cancel_org_plan %}
