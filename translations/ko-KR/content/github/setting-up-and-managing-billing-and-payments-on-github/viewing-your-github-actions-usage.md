---
title: Viewing your GitHub Actions usage
intro: 'You can view details of your usage of minutes and storage for {{ site.data.variables.product.prodname_actions }}.'
product: '{{ site.data.reusables.gated-features.actions }}'
versions:
  free-pro-team: '*'
---

You can also view the billable job execution minutes for an individual workflow run. For more information, see "[Managing a workflow run](/actions/configuring-and-managing-workflows/managing-a-workflow-run#viewing-billable-job-execution-minutes)."

### Viewing {{ site.data.variables.product.prodname_actions }} usage for your user account

Anyone can view {{ site.data.variables.product.prodname_actions }} usage for their own user account.

{{ site.data.reusables.user_settings.access_settings }}
{{ site.data.reusables.user_settings.billing }}
{{ site.data.reusables.dotcom_billing.actions-minutes }}
{{ site.data.reusables.dotcom_billing.actions-packages-storage }}
{{ site.data.reusables.dotcom_billing.actions-packages-report-download }}

### Viewing {{ site.data.variables.product.prodname_actions }} usage for your organization

Organization owners and billing managers can view {{ site.data.variables.product.prodname_actions }} usage for an organization. For organizations managed by an enterprise account, only the organization owners can view {{ site.data.variables.product.prodname_actions }} usage in the organization billing page.

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.billing }}
{{ site.data.reusables.dotcom_billing.actions-minutes }}
{{ site.data.reusables.dotcom_billing.actions-packages-storage }}
{{ site.data.reusables.dotcom_billing.actions-packages-report-download }}

### Viewing {{ site.data.variables.product.prodname_actions }} usage for your enterprise account

Enterprise owners and billing managers can view {{ site.data.variables.product.prodname_actions }} usage for an enterprise account.

{% note %}

**Note:** Billing details for enterprise accounts don't summarize the usage minutes for each operating system. {{ site.data.reusables.github-actions.enterprise-billing-details }}

{% endnote %}

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.billing-tab }}
1. Under "{{ site.data.variables.product.prodname_actions }}", view details of usage of data transfer by each organization in your enterprise account. ![Details of usage of minutes](/assets/images/help/billing/actions-minutes-enterprise.png)
{{ site.data.reusables.dotcom_billing.actions-packages-storage-enterprise-account }}
{{ site.data.reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts }}
