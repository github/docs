---
title: Viewing your GitHub Actions usage
intro: 'You can view details of your usage of minutes and storage for {% data variables.product.prodname_actions %}.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-actions-usage
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Organizations
  - User account
---
You can also view the billable job execution minutes for an individual workflow run. For more information, see "[Viewing job execution time](/actions/managing-workflow-runs/viewing-job-execution-time)."

### Viewing {% data variables.product.prodname_actions %} usage for your user account

Anyone can view {% data variables.product.prodname_actions %} usage for their own user account.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing_plans %}
{% data reusables.dotcom_billing.actions-minutes %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### Viewing {% data variables.product.prodname_actions %} usage for your organization

Organization owners and billing managers can view {% data variables.product.prodname_actions %} usage for an organization. For organizations managed by an enterprise account, only the organization owners can view {% data variables.product.prodname_actions %} usage in the organization billing page.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
{% data reusables.dotcom_billing.actions-minutes %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### Viewing {% data variables.product.prodname_actions %} usage for your enterprise account

Enterprise owners and billing managers can view {% data variables.product.prodname_actions %} usage for an enterprise account.

{% note %}

**Note:** Billing details for enterprise accounts don't summarize the usage minutes for each operating system. {% data reusables.github-actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Under "{% data variables.product.prodname_actions %}", view details of usage of data transfer by each organization in your enterprise account.
  ![Details of usage of minutes](/assets/images/help/billing/actions-minutes-enterprise.png)
{% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %}
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %}
