---
title: Configuring charts
intro: Learn how to configure your charts and filter data from your project.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
product: '{% data reusables.gated-features.historical-insights-for-projects %}'
topics:
  - Projects
---

{% ifversion fpt %}

{% note %}

**Note:** Historical charts are currently available as a feature preview.

{% endnote %}

{% endif %}

{% data reusables.projects.access-insights %}
1. In the menu on the left, click on the chart you would like to configure. ![Screenshot showing selecting a custom chart](/assets/images/help/projects-v2/insights-select-a-chart.png)
1. 在页面右侧，单击 **Configure（配置）**。 右侧将打开一个面板。 ![Screenshot showing the configure button](/assets/images/help/projects-v2/insights-configure.png)
1. 要更改图表类型，请选择 **Layout（布局）**下拉列表，然后单击要使用的图表类型。 ![Screenshot showing selecting a chart layout](/assets/images/help/projects-v2/insights-layout.png)
1. 要更改用于图表 X 轴的字段，请选择 **X-axis（X 轴）**下拉列表，然后单击要使用的字段。 ![Screenshot showing selecting what to display on the x axis](/assets/images/help/projects-v2/insights-x-axis.png)
1. （可选）要按其他字段对 X 轴上的项目进行分组，请选择 **Group by（分组依据）**，然后单击要使用的字段，或单击“None（无）”以禁用分组。 ![Screenshot showing selecting a grouping method](/assets/images/help/projects-v2/insights-group.png)
1. （可选）如果项目包含数字字段，并且您希望 Y 轴显示其中一个数字字段的总和、平均值、最小值或最大值，请选择 **Y-axis（Y 轴）** ，然后单击选项。 然后，选择下面显示的下拉列表，并单击要使用的数字字段。 ![Screenshot showing selecting what to display on the y axis](/assets/images/help/projects-v2/insights-y-axis.png)
1. 要保存图表，请单击 **Save changes（保存更改）**。 ![Screenshot showing the save button](/assets/images/help/projects-v2/insights-save.png)
