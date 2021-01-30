---
title: 配置 GitHub Insights 与 GitHub Enterprise 之间的连接
intro: '您可以管理 {% data variables.product.prodname_insights %} 如何连接到 {% data variables.product.prodname_enterprise %}。'
product: '{% data reusables.gated-features.github-insights %}'
permissions: '对 {% data variables.product.prodname_insights %} 具有管理权限的人员可以配置到 {% data variables.product.prodname_enterprise %} 的连接。'
versions:
  enterprise-server: '*'
---

{% data reusables.github-insights.settings-tab %}
2. 在
{% octicon "gear" aria-label="The gear icon" %} Settings（设置）下，单击 **Enterprise（企业）**。
  ![Enterprise（企业）选项卡](/assets/images/help/insights/enterprise-tab.png)
{% data reusables.github-insights.enterprise-api-url %}
{% data reusables.github-insights.app-id %}
{% data reusables.github-insights.client-id %}
{% data reusables.github-insights.client-secret %}
{% data reusables.github-insights.private-key %}
{% data reusables.github-insights.webhook-secret %}
{% data reusables.github-insights.skip-ssl %}
10. 单击 **Save（保存）**。
{% data reusables.github-insights.insights-license %}
11. 单击 **Update License（更新许可证）**。
