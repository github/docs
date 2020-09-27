---
title: Viewing your GitHub Packages usage
intro: 'You can view details of your usage of storage and data transfer for {{ site.data.variables.product.prodname_registry }}.'
product: '{{ site.data.reusables.gated-features.packages }}'
versions:
  free-pro-team: '*'
---

### Viewing {{ site.data.variables.product.prodname_registry }} usage for your user account

Anyone can view {{ site.data.variables.product.prodname_registry }} usage for their own user account.

{{ site.data.reusables.user_settings.access_settings }}
{{ site.data.reusables.user_settings.billing }}
{{ site.data.reusables.dotcom_billing.packages-data }}
{{ site.data.reusables.dotcom_billing.actions-packages-storage }}
{{ site.data.reusables.dotcom_billing.actions-packages-report-download }}

### Viewing {{ site.data.variables.product.prodname_registry }} usage for your organization

Organization owners and billing managers can view {{ site.data.variables.product.prodname_registry }} usage for an organization. For organizations managed by an enterprise account, only the organization owners can view {{ site.data.variables.product.prodname_registry }} usage in the organization billing page.

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.billing }}
{{ site.data.reusables.dotcom_billing.packages-data }}
{{ site.data.reusables.dotcom_billing.actions-packages-storage }}
{{ site.data.reusables.dotcom_billing.actions-packages-report-download }}

### Viewing {{ site.data.variables.product.prodname_registry }} usage for your enterprise account

Enterprise owners and billing managers can view {{ site.data.variables.product.prodname_registry }} usage for an enterprise account.

{% note %}

**Note:** Billing details for enterprise accounts only summarize the storage data usage per organization. {{ site.data.reusables.github-actions.enterprise-billing-details }}

{% endnote %}

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.billing-tab }}
1. Under "{{ site.data.variables.product.prodname_registry }}", view details of usage of data transfer by each organization in your enterprise account. ![Details of usage of data transfer](/assets/images/help/billing/packages-data-enterprise.png)
{{ site.data.reusables.dotcom_billing.actions-packages-storage-enterprise-account }}
{{ site.data.reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts }}
