---
title: Configurar la conexión entre GitHub Insights y GitHub Enterprise
intro: 'Puedes administrar de qué manera {{ site.data.variables.product.prodname_insights }} se conecta con {{ site.data.variables.product.prodname_enterprise }}.'
product: '{{ site.data.reusables.gated-features.github-insights }}'
permissions: 'Las personas con permisos de administrador para {{ site.data.variables.product.prodname_insights }} pueden configurar la conexión con {{ site.data.variables.product.prodname_enterprise }}.'
versions:
  enterprise-server: '*'
---

{{ site.data.reusables.github-insights.settings-tab }}
2. Under
{% octicon "gear" aria-label="The gear icon" %} Settings, click **Enterprise**.
  ![Laboratorio de Empresa](/assets/images/help/insights/enterprise-tab.png)
{{ site.data.reusables.github-insights.enterprise-api-url }}
{{ site.data.reusables.github-insights.app-id }}
{{ site.data.reusables.github-insights.client-id }}
{{ site.data.reusables.github-insights.client-secret }}
{{ site.data.reusables.github-insights.private-key }}
{{ site.data.reusables.github-insights.webhook-secret }}
{{ site.data.reusables.github-insights.skip-ssl }}
10. Haz clic en **Save (Guardar)**.
{{ site.data.reusables.github-insights.insights-license }}
11. Haz clic en **Update License (Actualizar licencia)**.
