---
title: Configuring the connection between GitHub Insights and GitHub Enterprise
intro: 'You can manage how {% data variables.product.prodname_insights %} connects to {% data variables.product.prodname_enterprise %}.'
product: '{% data reusables.gated-features.github-insights %}'
permissions: 'People with admin permissions to {% data variables.product.prodname_insights %} can configure the connection to {% data variables.product.prodname_enterprise %}.'
versions:
  enterprise-server: '*'
---

{% data reusables.github-insights.settings-tab %}
2. Under
{% octicon "gear" aria-label="The gear icon" %} Settings, click **Enterprise**.
  ![Enterprise tab](/assets/images/help/insights/enterprise-tab.png)
{% data reusables.github-insights.enterprise-api-url %}
{% data reusables.github-insights.app-id %}
{% data reusables.github-insights.client-id %}
{% data reusables.github-insights.client-secret %}
{% data reusables.github-insights.private-key %}
{% data reusables.github-insights.webhook-secret %}
{% data reusables.github-insights.skip-ssl %}
10. Click **Save**.
{% data reusables.github-insights.insights-license %}
11. Click **Update License**.
