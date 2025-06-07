---
title: Viewing your GitHub Actions usage
intro: 'You can view details of your usage of minutes and storage for {% data variables.product.prodname_actions %}.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-actions-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/viewing-your-github-actions-usage
  - /billing/managing-billing-for-github-actions/viewing-your-github-actions-usage
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Organizations
  - User account
shortTitle: View your Actions usage
---

You can also view the billable job execution minutes for an individual workflow run. For more information, see [AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/viewing-job-execution-time).

## Viewing {% data variables.product.prodname_actions %} usage for your personal account

Anyone can view {% data variables.product.prodname_actions %} usage for their own personal account.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans %}
{% data reusables.dotcom_billing.actions-view-usage %}
{% data reusables.dotcom_billing.actions-report-download %}

## Viewing {% data variables.product.prodname_actions %} usage for your organization

Organization owners and billing managers can view {% data variables.product.prodname_actions %} usage for an organization. For organizations managed by an enterprise account, only the organization owners can view {% data variables.product.prodname_actions %} usage in the organization billing page.

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.actions-view-usage %}
{% data reusables.dotcom_billing.actions-report-download-org-account %}

{% ifversion ghec %}

## Viewing {% data variables.product.prodname_actions %} usage for your enterprise account

Enterprise owners and billing managers can view {% data variables.product.prodname_actions %} usage for an enterprise account.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.billing-tab %}
{% data reusables.dotcom_billing.actions-view-usage %}
{% data reusables.enterprise-accounts.actions-report-download-enterprise-accounts %}

{% endif %}
