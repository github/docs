---
title: Visualizando seu uso do GitHub Actions (Ações do GitHub)
intro: 'Você pode visualizar detalhes do seu uso de minutos e armazenamento para {{ site.data.variables.product.prodname_actions }}.'
product: '{{ site.data.reusables.gated-features.actions }}'
versions:
  free-pro-team: '*'
---

Você também pode visualizar os minutos de execução do trabalho faturáveis para uma execução de fluxo de trabalho individual. Para obter mais informações, consulte "[Gerenciar a execução de fluxos de trabalho](/actions/configuring-and-managing-workflows/managing-a-workflow-run#viewing-billable-job-execution-minutes)".

### Visualizando o uso de {{ site.data.variables.product.prodname_actions }} para sua conta de usuário

Qualquer pessoa pode visualizar o uso de {{ site.data.variables.product.prodname_actions }} para sua própria conta de usuário.

{{ site.data.reusables.user_settings.access_settings }}
{{ site.data.reusables.user_settings.billing }}
{{ site.data.reusables.dotcom_billing.actions-minutes }}
{{ site.data.reusables.dotcom_billing.actions-packages-storage }}
{{ site.data.reusables.dotcom_billing.actions-packages-report-download }}

### Visualizando o uso de {{ site.data.variables.product.prodname_actions }} para a sua organização

Os proprietários da organização e gerentes de faturamento podem ver o uso do {{ site.data.variables.product.prodname_actions }} para uma organização. Para organizações gerenciadas por uma conta corporativa, somente os proprietários da organização podem visualizar o uso do {{ site.data.variables.product.prodname_actions }} na página de cobrança da organização.

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.billing }}
{{ site.data.reusables.dotcom_billing.actions-minutes }}
{{ site.data.reusables.dotcom_billing.actions-packages-storage }}
{{ site.data.reusables.dotcom_billing.actions-packages-report-download }}

### Visualizando o uso de {{ site.data.variables.product.prodname_actions }} para sua conta corporativa

Proprietários de organizações e gestores de faturamento podem visualizar o uso de {{ site.data.variables.product.prodname_actions }} para uma conta corporativa.

{% note %}

**Observação:** As informações de cobrança para contas corporativas não resumem os minutos de uso para cada sistema operacional. {{ site.data.reusables.github-actions.enterprise-billing-details }}

{% endnote %}

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.billing-tab }}
1. Em "{{ site.data.variables.product.prodname_actions }}", veja os detalhes do uso de transferência de dados por cada organização em sua conta corporativa. ![Detalhes do uso de minutos](/assets/images/help/billing/actions-minutes-enterprise.png)
{{ site.data.reusables.dotcom_billing.actions-packages-storage-enterprise-account }}
{{ site.data.reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts }}
