---
title: Configuring the connection between GitHub Insights and GitHub Enterprise
intro: 'You can manage how {{ site.data.variables.product.prodname_insights }} connects to {{ site.data.variables.product.prodname_enterprise }}.'
product: '{{ site.data.reusables.gated-features.github-insights }}'
permissions: 'People with admin permissions to {{ site.data.variables.product.prodname_insights }} can configure the connection to {{ site.data.variables.product.prodname_enterprise }}.'
versions:
  enterprise-server: '*'
---

{{ site.data.reusables.github-insights.settings-tab }}
2. Under {% octicon "gear" aria-label="The gear icon" %} Settings, click **Enterprise**.
  ![Enterprise tab](/assets/images/help/insights/enterprise-tab.png)
{{ site.data.reusables.github-insights.enterprise-api-url }}
{{ site.data.reusables.github-insights.app-id }}
{{ site.data.reusables.github-insights.client-id }}
{{ site.data.reusables.github-insights.client-secret }}
{{ site.data.reusables.github-insights.private-key }}
{{ site.data.reusables.github-insights.webhook-secret }}
{{ site.data.reusables.github-insights.skip-ssl }}
10. Click **Save**.
{{ site.data.reusables.github-insights.insights-license }}
11. Click **Update License**.
