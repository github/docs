---
title: Viewing your Codespaces usage
shortTitle: Viewing your usage
intro: 'You can view the compute minutes and storage used by {% data variables.product.prodname_codespaces %}.'
permissions: 'To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
type: overview
topics:
  - Codespaces
  - Billing
---

## Viewing {% data variables.product.prodname_codespaces %} usage for your organization

Organization owners and billing managers can view {% data variables.product.prodname_codespaces %} usage for an organization. For organizations managed by an enterprise account, the organization owners can view {% data variables.product.prodname_codespaces %} usage in the organization billing page, and enterprise admins can view the usage for the entire enterprise.

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.codespaces-minutes %}

## Viewing {% data variables.product.prodname_codespaces %} usage for your enterprise account

Enterprise owners and billing managers can view {% data variables.product.prodname_codespaces %} usage for an enterprise account.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Under "{% data variables.product.prodname_codespaces %}", view the usage details of each organization in your enterprise account.
