---
title: Configurar a conexão entre o GitHub Insights e o GitHub Enterprise
intro: 'Você pode gerenciar como o {{ site.data.variables.product.prodname_insights }} conecta-se com {{ site.data.variables.product.prodname_enterprise }}.'
product: '{{ site.data.reusables.gated-features.github-insights }}'
permissions: 'Pessoas com permissões de administrador para {{ site.data.variables.product.prodname_insights }} podem configurar a conexão com {{ site.data.variables.product.prodname_enterprise }}.'
versions:
  enterprise-server: '*'
---

{{ site.data.reusables.github-insights.settings-tab }}
2. Abaixo
{% octicon "gear" aria-label="The gear icon" %} Configurações, clique em **Empresa**.
  ![Aba Enterprise](/assets/images/help/insights/enterprise-tab.png)
{{ site.data.reusables.github-insights.enterprise-api-url }}
{{ site.data.reusables.github-insights.app-id }}
{{ site.data.reusables.github-insights.client-id }}
{{ site.data.reusables.github-insights.client-secret }}
{{ site.data.reusables.github-insights.private-key }}
{{ site.data.reusables.github-insights.webhook-secret }}
{{ site.data.reusables.github-insights.skip-ssl }}
10. Clique em **Salvar**.
{{ site.data.reusables.github-insights.insights-license }}
11. Clique em **Atualizar a licença**.
