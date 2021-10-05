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

## Visualizar el uso de {% data variables.product.prodname_codespaces %} para tu organización

Los propietarios de la organización y gerentes de facturación pueden ver el uso de {% data variables.product.prodname_codespaces %} para una organización. For organizations managed by an enterprise account, the organization owners can view {% data variables.product.prodname_codespaces %} usage in the organization billing page, and enterprise admins can view the usage for the entire enterprise.

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.codespaces-minutes %}

## Visualizar el uso de {% data variables.product.prodname_codespaces %} para tu cuenta empresarial

Los propietarios de empresa y gerentes de facturación pueden ver el uso de {% data variables.product.prodname_codespaces %} para una cuenta empresarial.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Under "{% data variables.product.prodname_codespaces %}", view the usage details of each organization in your enterprise account.
