---
title: 将见解用于项目（测试版）
intro: 您可以查看和自定义根据项目数据生成的图表。
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

## 关于见解

您可以使用见解来查看和自定义图表，这些图表使用添加到项目中的项作为其源数据。 默认的“燃尽”图显示一段时间内的项状态，允许您可视化一段时间内的进度和点模式。

![显示当前迭代的默认燃尽图示例的屏幕截图](/assets/images/help/issues/burnup-example.png)

您可以将筛选器应用于默认图表，也可以创建自己的图表。 创建图表时，可以设置筛选器、图表类型和显示的信息，图表可用于能够查看项目的任何人。

![显示堆叠柱形图的屏幕截图，该图表显示每次迭代的项类型](/assets/images/help/issues/column-chart-example.png)

## 创建图表

{% data reusables.projects.access-insights %}
3. 在左侧菜单中，单击 **New chart（新建图表）**。
4. （可选）要更改新图表的名称，请单击 {% octicon "triangle-down" aria-label="The triangle icon" %}，键入新名称，然后按 <kbd>Return</kbd>。
5. 在图表上方，键入筛选器以更改用于生成图表的数据。 更多信息请参阅“[筛选项目](/issues/trying-out-the-new-projects-experience/filtering-projects)”。
6. 在筛选器文本框的右侧，单击 **Save changes（保存更改）**。

## 配置图表

{% data reusables.projects.access-insights %}
1. 在左侧菜单中，单击要配置的图表。
1. 在页面右侧，单击 **Configure（配置）**。 右侧将打开一个面板。
1. 要更改图表类型，请选择 **Layout（布局）**下拉列表，然后单击要使用的图表类型。
1. 要更改用于图表 X 轴的字段，请选择 **X-axis（X 轴）**下拉列表，然后单击要使用的字段。
1. （可选）要按其他字段对 X 轴上的项目进行分组，请选择 **Group by（分组依据）**，然后单击要使用的字段，或单击“None（无）”以禁用分组。
1. （可选）如果项目包含数字字段，并且您希望 Y 轴显示其中一个数字字段的总和、平均值、最小值或最大值，请选择 **Y-axis（Y 轴）** ，然后单击选项。 然后，选择下面显示的下拉列表，并单击要使用的数字字段。
1. 要保存图表，请单击 **Save changes（保存更改）**。
