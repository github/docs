---
title: Visualizando seu uso do GitHub Actions (Ações do GitHub)
intro: 'Você pode visualizar detalhes do seu uso de minutos e armazenamento para {% data variables.product.prodname_actions %}.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
---

Você também pode visualizar os minutos de execução do trabalho faturáveis para uma execução de fluxo de trabalho individual. Para obter mais informações, consulte "[Gerenciar a execução de fluxos de trabalho](/actions/configuring-and-managing-workflows/managing-a-workflow-run#viewing-billable-job-execution-minutes)".

### Visualizando o uso de {% data variables.product.prodname_actions %} para sua conta de usuário

Qualquer pessoa pode visualizar o uso de {% data variables.product.prodname_actions %} para sua própria conta de usuário.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.dotcom_billing.actions-minutes %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### Visualizando o uso de {% data variables.product.prodname_actions %} para a sua organização

Os proprietários da organização e gerentes de faturamento podem ver o uso do {% data variables.product.prodname_actions %} para uma organização. Para organizações gerenciadas por uma conta corporativa, somente os proprietários da organização podem visualizar o uso do {% data variables.product.prodname_actions %} na página de cobrança da organização.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.dotcom_billing.actions-minutes %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### Visualizando o uso de {% data variables.product.prodname_actions %} para sua conta corporativa

Proprietários de organizações e gestores de faturamento podem visualizar o uso de {% data variables.product.prodname_actions %} para uma conta corporativa.

{% note %}

**Observação:** As informações de cobrança para contas corporativas não resumem os minutos de uso para cada sistema operacional. {% data reusables.github-actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Em "{% data variables.product.prodname_actions %}", veja os detalhes do uso de transferência de dados por cada organização em sua conta corporativa. ![Detalhes do uso de minutos](/assets/images/help/billing/actions-minutes-enterprise.png)
{% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %}
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %}
