---
title: Visualizando seu uso do GitHub Actions (Ações do GitHub)
intro: 'Você pode visualizar detalhes do seu uso de minutos e armazenamento para {% data variables.product.prodname_actions %}.'
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
shortTitle: Visualizar o uso das suas ações
---

Você também pode visualizar os minutos de execução do trabalho faturáveis para uma execução de fluxo de trabalho individual. Para obter mais informações, consulte "[Visualizar o tempo de execução do trabalho](/actions/managing-workflow-runs/viewing-job-execution-time)".

## Visualizando o uso de {% data variables.product.prodname_actions %} para a sua conta pessoal

Qualquer um pode ver o uso de {% data variables.product.prodname_actions %} para sua própria conta pessoal.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans %}
{% data reusables.dotcom_billing.actions-minutes %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

## Visualizando o uso de {% data variables.product.prodname_actions %} para a sua organização

Os proprietários da organização e gerentes de faturamento podem ver o uso do {% data variables.product.prodname_actions %} para uma organização. Para organizações gerenciadas por uma conta corporativa, somente os proprietários da organização podem visualizar o uso do {% data variables.product.prodname_actions %} na página de cobrança da organização.

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.actions-minutes %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download-org-account %}

{% ifversion ghec %}
## Visualizando o uso de {% data variables.product.prodname_actions %} para sua conta corporativa

Proprietários de organizações e gestores de faturamento podem visualizar o uso de {% data variables.product.prodname_actions %} para uma conta corporativa.

{% note %}

**Nota:** Os detalhes de faturamento para contas corporativas não resumem os minutos de uso para cada sistema operacional. {% data reusables.actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Em "{% data variables.product.prodname_actions %}", veja os detalhes do uso de transferência de dados por cada organização em sua conta corporativa. ![Detalhes do uso de minutos](/assets/images/help/billing/actions-minutes-enterprise.png)
{% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %}
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %}
{% endif %}
