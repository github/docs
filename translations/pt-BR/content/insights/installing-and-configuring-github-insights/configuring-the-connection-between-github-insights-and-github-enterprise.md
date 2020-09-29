---
title: Configurar a conexão entre o GitHub Insights e o GitHub Enterprise
intro: 'Você pode gerenciar como o {% data variables.product.prodname_insights %} conecta-se com {% data variables.product.prodname_enterprise %}.'
product: '{% data reusables.gated-features.github-insights %}'
permissions: 'Pessoas com permissões de administrador para {% data variables.product.prodname_insights %} podem configurar a conexão com {% data variables.product.prodname_enterprise %}.'
versions:
  enterprise-server: '*'
---

{% data reusables.github-insights.settings-tab %}
2. Abaixo
{% octicon "gear" aria-label="The gear icon" %} Configurações, clique em **Empresa**.
  ![Aba Enterprise](/assets/images/help/insights/enterprise-tab.png)
{% data reusables.github-insights.enterprise-api-url %}
{% data reusables.github-insights.app-id %}
{% data reusables.github-insights.client-id %}
{% data reusables.github-insights.client-secret %}
{% data reusables.github-insights.private-key %}
{% data reusables.github-insights.webhook-secret %}
{% data reusables.github-insights.skip-ssl %}
10. Clique em **Salvar**.
{% data reusables.github-insights.insights-license %}
11. Clique em **Atualizar a licença**.
