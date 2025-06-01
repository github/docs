---
title: Viewing your GitHub Codespaces usage
shortTitle: Viewing your usage
intro: 'You can view the compute hours and storage used by {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage
  - /billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage
---

## Viewing {% data variables.product.prodname_github_codespaces %} usage for your personal account

Anyone can view {% data variables.product.prodname_github_codespaces %} usage for their own personal account.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans %}
{% data reusables.dotcom_billing.codespaces-view-usage %}
{% data reusables.dotcom_billing.codespaces-report-download %}

## Viewing {% data variables.product.prodname_github_codespaces %} usage for your organization account

Organization owners and billing managers can view {% data variables.product.prodname_github_codespaces %} usage for an organization. For organizations managed by an enterprise account, only the organization owners can view {% data variables.product.prodname_github_codespaces %} usage in the organization billing page.

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.codespaces-view-usage %}
{% data reusables.dotcom_billing.codespaces-report-download %}

{% ifversion ghec %}

## Viewing {% data variables.product.prodname_codespaces %} usage for your enterprise account

Enterprise owners and billing managers can view {% data variables.product.prodname_github_codespaces %} usage for an enterprise account.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.billing-tab %}
{% data reusables.dotcom_billing.codespaces-view-usage %}
{% data reusables.dotcom_billing.codespaces-report-download %}
{% endif %}

## Further reading

* [AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)
