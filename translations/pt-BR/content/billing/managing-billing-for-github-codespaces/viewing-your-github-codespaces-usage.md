---
title: Viewing your GitHub Codespaces usage
shortTitle: Viewing your usage
intro: 'You can view the compute minutes and storage used by {% data variables.product.prodname_github_codespaces %}.'
permissions: 'To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage
---

## Viewing {% data variables.product.prodname_github_codespaces %} usage for your organization

Organization owners and billing managers can view {% data variables.product.prodname_github_codespaces %} usage for an organization. For organizations managed by an enterprise account, the organization owners can view {% data variables.product.prodname_codespaces %} usage in the organization billing page, and enterprise admins can view the usage for the entire enterprise.

{% data reusables.organizations.billing-settings %}
1. Under "{% data variables.product.prodname_codespaces %}", view the details of the compute hours and storage used so far this month.
  ![Details of minute usage](/assets/images/help/billing/codespaces-compute-storage.png)
{% data reusables.dotcom_billing.actions-packages-report-download-org-account %}
1. Filter the report to show only rows that mention "Codespaces" in the `Product` field.

   ![A usage report filtered for Codespaces](/assets/images/help/codespaces/CSV-usage-report.png)

{% ifversion ghec %}
## Viewing {% data variables.product.prodname_codespaces %} usage for your enterprise account

Enterprise owners and billing managers can view {% data variables.product.prodname_codespaces %} usage for an enterprise account.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Under "{% data variables.product.prodname_codespaces %}", view the usage details of each organization in your enterprise account.
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %}
{% endif %}
