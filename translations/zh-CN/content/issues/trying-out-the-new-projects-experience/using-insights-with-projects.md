---
title: Using insights with projects (beta)
intro: You can view and customize charts that are built from your project's data.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Projects
  - Organizations
---

{% data reusables.projects.insights-alpha %}

## About insights

You can use insights to view and customize charts that use the items added to your project as their source data. The default "Burn up" chart shows item status over time, allowing you to visualize progress. You can apply filters to the default chart and also customize and save charts that are available to everyone that can view the project.

![Screenshot showing an example of the default burn up chart for the current iteration](/assets/images/help/issues/burnup-example.png)

## Creating a chart

1. Navigate to your project.
2. In the top-right, click {% octicon "graph" aria-label="the graph icon" %} to access insights. This feature is currently in a private preview and is not yet available to all organizations. If insights is not yet enabled for your organization, the {% octicon "graph" aria-label="the graph icon" %} icon will not be available.
3. In the menu on the left, click **New chart**.
4. Optionally, to change the name of the new chart, click {% octicon "triangle-down" aria-label="The triangle icon" %}, type a new name, and press <kbd>Return</kbd>.
5. Above the chart, type filters to change the data used to build the chart. 更多信息请参阅“[筛选项目](/issues/trying-out-the-new-projects-experience/filtering-projects)”。
6. To the right of the filter text box, click **Save changes**.
