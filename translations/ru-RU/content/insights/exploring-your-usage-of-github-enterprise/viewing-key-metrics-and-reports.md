---
title: Viewing key metrics and reports
intro: You can view and filter key metrics and reports to help you understand and improve your software delivery process through data.
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/viewing-and-filtering-key-metrics-and-reports
permissions: 'Anyone with access to {% data variables.product.prodname_insights %} can view key metrics and reports.'
versions:
  enterprise-server: '*'
---

### About metrics and reports

{% data reusables.github-insights.key-metrics-and-reports %} For more information about available metrics, see "[Metrics available with {% data variables.product.prodname_insights %}](/insights/exploring-your-usage-of-github-enterprise/metrics-available-with-github-insights)."

You can view goals and success rates for each key metric. For more information, see "[Managing goals](/insights/installing-and-configuring-github-insights/managing-goals)"

You will only have access to the {% data variables.product.prodname_insights %} data which you also have access to in {% data variables.product.prodname_enterprise %}.

You can filter the data included in key metrics or reports by teams, repositories, or date range.

### Viewing key metrics

{% data reusables.github-insights.navigate-to-key-metrics %}
{% data reusables.github-insights.choose-key-metric %}
{% data reusables.github-insights.filter-reports %}
{% data reusables.github-insights.view-events %}

### Viewing reports

1. In {% data variables.product.prodname_insights %}, click **{% octicon "file" aria-label="The file icon" %} Reports**. ![Reports tab](/assets/images/help/insights/reports-tab.png)
2. Under **{% octicon "file" aria-label="The file icon" %} Reports**, click the name of the report you want to view. ![List of reports](/assets/images/help/insights/reports-list.png)
{% data reusables.github-insights.filter-reports %}
{% data reusables.github-insights.view-events %}

### Дополнительная литература

- "[Managing contributors and teams](/insights/installing-and-configuring-github-insights/managing-contributors-and-teams)"
- "[Managing repositories](/insights/installing-and-configuring-github-insights/managing-repositories)"
- "[Managing organizations](/insights/installing-and-configuring-github-insights/managing-organizations)"
- "[Managing events](/insights/installing-and-configuring-github-insights/managing-events)"
