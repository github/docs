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

## {% data variables.product.prodname_codespaces %}-Nutzung für Deine Organisation anzeigen

Organization owners and billing managers can view {% data variables.product.prodname_codespaces %} usage for an organization. For organizations managed by an enterprise account, the organization owners can view {% data variables.product.prodname_codespaces %} usage in the organization billing page, and enterprise admins can view the usage for the entire enterprise.

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.codespaces-minutes %}

## {% data variables.product.prodname_codespaces %}-Nutzung für Dein Enterprise-Konto anzeigen

Enterprise-Inhaber und Abrechnungsmanager können die Nutzung von {% data variables.product.prodname_codespaces %} für ein Enterprise-Konto anzeigen.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Under "{% data variables.product.prodname_codespaces %}", view the usage details of each organization in your enterprise account.
