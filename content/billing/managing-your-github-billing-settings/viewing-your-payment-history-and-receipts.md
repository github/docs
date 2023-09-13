---
title: Viewing your payment history and receipts
intro: You can view your account's payment history and download past receipts at any time.
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-payment-history-and-receipts
  - /articles/downloading-receipts
  - /articles/downloading-receipts-for-personal-accounts
  - /articles/downloading-receipts-for-organizations
  - /articles/viewing-your-payment-history-and-receipts
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-github-billing-settings/viewing-your-payment-history-and-receipts
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Organizations
  - Receipts
  - User account
shortTitle: View history & receipts
---

## Viewing receipts for your personal account

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans_payment %}
{% data reusables.dotcom_billing.view-payment-history-personal-account %}
{% data reusables.dotcom_billing.download_receipt %}

## Viewing receipts for your organization

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.view-payment-history %}
{% data reusables.dotcom_billing.download_receipt %}

{% ifversion ghec %}

## Viewing receipts for your enterprise account

{% data reusables.enterprise-accounts.billing-perms %}

{% note %}

**Note:** You cannot view receipts if your enterprise account is invoiced.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Click the "Payment information" tab.
{% data reusables.dotcom_billing.download_receipt %}

{% endif %}
