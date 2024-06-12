---
title: Viewing your GitHub Actions usage
intro: 'You can view details of your usage of minutes and storage for {% data variables.product.prodname_actions %}.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-actions-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/viewing-your-github-actions-usage
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

{% ifversion enhanced-billing-platform %}

{% data reusables.billing.enhanced-billing-platform %}

{% endif %}

You can also view the billable job execution minutes for an individual workflow run. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/viewing-job-execution-time)."

## Viewing {% data variables.product.prodname_actions %} usage for your personal account

Anyone can view {% data variables.product.prodname_actions %} usage for their own personal account.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans %}
{% data reusables.dotcom_billing.actions-minutes %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

## Viewing {% data variables.product.prodname_actions %} usage for your organization

{% ifversion billing-beta-enterprise %}
{% note %}

**Note:** If your organization belongs to an enterprise enrolled in the Billing private beta for {% data variables.product.prodname_actions %}, you will not see {% data variables.product.prodname_actions %} usage on the existing billing pages.

{% endnote %}
{% endif %}

Organization owners and billing managers can view {% data variables.product.prodname_actions %} usage for an organization. For organizations managed by an enterprise account, only the organization owners can view {% data variables.product.prodname_actions %} usage in the organization billing page.

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.actions-minutes %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download-org-account %}

{% ifversion ghec %}

## Viewing {% data variables.product.prodname_actions %} usage for your enterprise account

{% ifversion billing-beta-enterprise %}
{% note %}

**Note:** If your enterprise is enrolled in the Billing private beta for {% data variables.product.prodname_actions %}, you will not see {% data variables.product.prodname_actions %} usage on the existing billing pages.

{% endnote %}
{% endif %}

Enterprise owners and billing managers can view {% data variables.product.prodname_actions %} usage for an enterprise account.

{% note %}

**Note:** Billing details for enterprise accounts don't summarize the usage minutes for each operating system. {% data reusables.actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Under "Actions monthly usage," view your usage minutes.

   You can expand this section to show a breakdown of the usage by runner type.

1. Under your usage minutes, view details of usage of data transfer by each organization in your enterprise account.
{% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %}
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %}
{% endif %}
