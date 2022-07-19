---
title: Viewing your GitHub Codespaces usage
shortTitle: Visualizando seu uso
intro: 'Você pode visualizar os minutos computados e o armazenamento usado pelo {% data variables.product.prodname_github_codespaces %}.'
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

## Visualizando o uso de {% data variables.product.prodname_github_codespaces %} para a sua organização

Os proprietários da organização e gerentes de faturamento podem ver o uso do {% data variables.product.prodname_github_codespaces %} para uma organização. Para organizações gerenciadas por uma conta corporativa, os proprietários da organização podem ver o uso de {% data variables.product.prodname_codespaces %} na página de cobrança da organização, e os administradores de empresas podem ver o uso para toda a empresa.

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.codespaces-minutes %}
{% data reusables.dotcom_billing.actions-packages-report-download-org-account %}

{% ifversion ghec %}
## Visualizando o uso de {% data variables.product.prodname_codespaces %} para sua conta corporativa

Proprietários de organizações e gestores de faturamento podem visualizar o uso de {% data variables.product.prodname_codespaces %} para uma conta corporativa.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Em "{% data variables.product.prodname_codespaces %}, veja as informações de uso de cada organização na sua conta corporativa.
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %}
{% endif %}
