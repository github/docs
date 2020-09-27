---
title: 配置 GitHub Insights 与 GitHub Enterprise 之间的连接
intro: '您可以管理 {{ site.data.variables.product.prodname_insights }} 如何连接到 {{ site.data.variables.product.prodname_enterprise }}。'
product: '{{ site.data.reusables.gated-features.github-insights }}'
permissions: '对 {{ site.data.variables.product.prodname_insights }} 具有管理权限的人员可以配置到 {{ site.data.variables.product.prodname_enterprise }} 的连接。'
versions:
  enterprise-server: '*'
---

{{ site.data.reusables.github-insights.settings-tab }}
2. Under
{% octicon "gear" aria-label="The gear icon" %} Settings, click **Enterprise**.
  ![Enterprise（企业）选项卡](/assets/images/help/insights/enterprise-tab.png)
{{ site.data.reusables.github-insights.enterprise-api-url }}
{{ site.data.reusables.github-insights.app-id }}
{{ site.data.reusables.github-insights.client-id }}
{{ site.data.reusables.github-insights.client-secret }}
{{ site.data.reusables.github-insights.private-key }}
{{ site.data.reusables.github-insights.webhook-secret }}
{{ site.data.reusables.github-insights.skip-ssl }}
10. 单击 **Save（保存）**。
{{ site.data.reusables.github-insights.insights-license }}
11. 单击 **Update License（更新许可证）**。
