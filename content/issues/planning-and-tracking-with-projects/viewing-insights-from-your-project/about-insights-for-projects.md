---
title: 'About insights for {% data variables.product.prodname_projects_v2 %}'
intro: You can view and customize charts that are built from your project's data.
versions:
  feature: projects-v2-insights
redirect_from:
  - /issues/trying-out-the-new-projects-experience/using-insights-with-projects
type: tutorial
product: '{% data reusables.gated-features.historical-insights-for-projects %}'
permissions: '{% data reusables.projects.insights-permissions %}'
topics:
  - Projects
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.insights-release-note %}

You can use insights for {% data variables.product.prodname_projects_v2 %} to view, create, and customize charts that use the items added to your project as their source data. You can apply filters to the default chart and also create your own charts. When you create a chart, you set the filters, chart type, the information displayed, and the chart is available to anyone that can view the project. You can generate two types of chart: current charts and historical charts.

 Insights does not track items you have archived or deleted.

## About current charts

You can create current charts to visualize your project items. For example, you can create charts to show how many items are assigned to each individual, or how many issues are assigned to each upcoming iteration.

You can also use filters to manipulate the data used to build your chart. For example, you can create a chart showing how much upcoming work you have, but limit those results to particular labels or assignees. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)."

![Screenshot of a stacked column chart, with a column for each iteration. Each column is divided into sections for "Bug", "Feedback", "Backend", and "UI."](/assets/images/help/issues/column-chart-example.png)

For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts)."

## About historical charts

Historical charts are time-based charts that allow you to view your project's trends and progress. You can view the number of items, grouped by status and other fields, over time.

The default "Burn up" chart shows item status over time, allowing you to visualize progress and spot patterns over time.

![Screenshot of an example burn up chart.](/assets/images/help/issues/burnup-example.png)

To create a historical chart, set your chart's X-axis to "Time." For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts)" and "[AUTOTITLE](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/configuring-charts)."

## Further reading

- "[AUTOTITLE](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)"
- "[AUTOTITLE](/organizations/managing-organization-settings/disabling-insights-for-projects-in-your-organization)"
