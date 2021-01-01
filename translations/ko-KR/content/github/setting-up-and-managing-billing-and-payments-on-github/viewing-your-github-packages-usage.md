---
title: Viewing your GitHub Packages usage
intro: 'You can view details of your usage of storage and data transfer for {% data variables.product.prodname_registry %}.'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

### Viewing {% data variables.product.prodname_registry %} usage for your user account

Anyone can view {% data variables.product.prodname_registry %} usage for their own user account.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.dotcom_billing.packages-data %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### Viewing {% data variables.product.prodname_registry %} usage for your organization

Organization owners and billing managers can view {% data variables.product.prodname_registry %} usage for an organization. For organizations managed by an enterprise account, only the organization owners can view {% data variables.product.prodname_registry %} usage in the organization billing page.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.dotcom_billing.packages-data %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### Viewing {% data variables.product.prodname_registry %} usage for your enterprise account

Enterprise owners and billing managers can view {% data variables.product.prodname_registry %} usage for an enterprise account.

{% note %}

**Note:** Billing details for enterprise accounts only summarize the storage data usage per organization. {% data reusables.github-actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Under "
{% data variables.product.prodname_registry %}", view details of usage of data transfer by each organization in your enterprise account.
  ![Details of usage of data transfer](/assets/images/help/billing/packages-data-enterprise.png)
{% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %}
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %}
