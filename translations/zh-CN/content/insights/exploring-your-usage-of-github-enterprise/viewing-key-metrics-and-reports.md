---
title: 查看关键指标和报告
intro: 您可以查看和过滤关键指标和报告，帮助了解并改进通过数据交付软件的过程。
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/viewing-and-filtering-key-metrics-and-reports
permissions: 'Anyone with access to {% data variables.product.prodname_insights %} can view key metrics and reports.'
versions:
  enterprise-server: '*'
---

### 关于指标和报告

{% data reusables.github-insights.key-metrics-and-reports %} 有关可用指标的更多信息，请参阅“[可用于 {% data variables.product.prodname_insights %} 的指标](/insights/exploring-your-usage-of-github-enterprise/metrics-available-with-github-insights)”。

您可以查看每个关键指标的目标和成功率。 更多信息请参阅“[管理目标](/insights/installing-and-configuring-github-insights/managing-goals)”

您只能访问您在 {% data variables.product.prodname_insights %} 中也可以访问的 {% data variables.product.prodname_enterprise %} 数据。

您可以通过团队、仓库或日期范围过滤包含在关键指标或报告中的数据。

### 查看关键指标

{% data reusables.github-insights.navigate-to-key-metrics %}
{% data reusables.github-insights.choose-key-metric %}
{% data reusables.github-insights.filter-reports %}
{% data reusables.github-insights.view-events %}

### 查看报告

1. 在 {% data variables.product.prodname_insights %} 中，单击 **{% octicon "file" aria-label="The file icon" %} Reports（报告）**。 ![Reports（报告）选项卡](/assets/images/help/insights/reports-tab.png)
2. 在 **{% octicon "file" aria-label="The file icon" %} Reports（报告）**下，单击您想要查看的报告名称。 ![报告列表](/assets/images/help/insights/reports-list.png)
{% data reusables.github-insights.filter-reports %}
{% data reusables.github-insights.view-events %}

### 延伸阅读

- "[管理贡献者和团队](/insights/installing-and-configuring-github-insights/managing-contributors-and-teams)"
- "[管理仓库](/insights/installing-and-configuring-github-insights/managing-repositories)"
- "[管理组织](/insights/installing-and-configuring-github-insights/managing-organizations)"
- "[管理事件](/insights/installing-and-configuring-github-insights/managing-events)"
