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

You can use insights to view and customize charts that use the items added to your project as their source data. The default "Burn up" chart shows item status over time, allowing you to visualize progress and spot patterns over time.

![Screenshot showing an example of the default burn up chart for the current iteration](/assets/images/help/issues/burnup-example.png)

You can apply filters to the default chart and also create your own charts. When you create a chart, you set the filters, chart type, and the information displayed, and the chart is available to anyone that can view the project.

![Screenshot showing an stacked column chart showing item types for each iteration](/assets/images/help/issues/column-chart-example.png)

## Creating a chart

{% data reusables.projects.access-insights %}
3. In the menu on the left, click **New chart**.
4. Optionally, to change the name of the new chart, click {% octicon "triangle-down" aria-label="The triangle icon" %}, type a new name, and press <kbd>Return</kbd>.
5. Above the chart, type filters to change the data used to build the chart. 更多信息请参阅“[筛选项目](/issues/trying-out-the-new-projects-experience/filtering-projects)”。
6. To the right of the filter text box, click **Save changes**.

## Configuring a chart

{% data reusables.projects.access-insights %}
1. In the menu on the left, click on the chart you would like to configure.
1. On the right side of the page, click **Configure**. A panel will open on the right.
2. To change the type of chart, select the **Layout** dropdown and click on the chart type you want to use.
3. To change the field used for your chart's X-axis, select the **X-axis** dropdown and click the field you want to use. If you select "Time", "Group by" will change to "Status" and "Y-Axis" will change to "Count of items."
4. Optionally, to group the items on your X-axis by another field, select **Group by** and click on the field you want to use, or click "None" to disable grouping.
5. Optionally, if your project contains number fields and you want the Y-axis to display the sum, average, minimum, or maximum of one of those number fields, select **Y-axis** and click an option. Then, select the dropdown that appears beneath and click on the number field you want to use.
6. To save your chart, click **Save changes**.
