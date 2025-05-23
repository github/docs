---
title: Viewing your GitHub Packages usage
intro: 'You can view details of your usage of storage and data transfer for {% data variables.product.prodname_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-packages-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/viewing-your-github-packages-usage
  - /billing/managing-billing-for-github-packages/viewing-your-github-packages-usage
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Packages
  - Organizations
  - User account
shortTitle: View your usage
---

## Viewing {% data variables.product.prodname_registry %} usage for your personal account

Anyone can view {% data variables.product.prodname_registry %} usage for their own personal account.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans %}
{% data reusables.dotcom_billing.packages-view-usage %}
{% data reusables.dotcom_billing.packages-report-download %}

## Viewing {% data variables.product.prodname_registry %} usage for your organization

Organization owners and billing managers can view {% data variables.product.prodname_registry %} usage for an organization. For organizations managed by an enterprise account, only the organization owners can view {% data variables.product.prodname_registry %} usage in the organization billing page.

{% data reusables.organizations.billing-settings %}

{% data reusables.dotcom_billing.packages-view-usage %}
{% data reusables.dotcom_billing.packages-report-download-org-account %}

{% ifversion ghec %}

## Viewing {% data variables.product.prodname_registry %} usage for your enterprise account

Enterprise owners and billing managers can view {% data variables.product.prodname_registry %} usage for an enterprise account.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.billing.enterprise-billing-menu %}
{% data reusables.dotcom_billing.packages-view-usage %}
{% data reusables.enterprise-accounts.packages-report-download-enterprise-accounts %}
{% endif %}
