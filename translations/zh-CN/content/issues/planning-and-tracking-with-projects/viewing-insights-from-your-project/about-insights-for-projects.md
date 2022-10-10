---
title: '关于 {% data variables.product.prodname_projects_v2 %} 的见解'
intro: 可以查看和自定义从项目数据生成的图表。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/using-insights-with-projects
type: tutorial
product: '{% data reusables.gated-features.historical-insights-for-projects %}'
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: a90ec5dfb6aa983b8ffe26c84c4ec6ad01b0471d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423801'
---
{% ifversion fpt %}

{% note %}

注意：对于使用 {% data variables.product.prodname_team %} 的组织，历史图表目前可用作功能预览，对于使用 {% data variables.product.prodname_ghe_cloud %} 的组织，历史图表已正式发布。

{% endnote %}

{% endif %}

 可以使用 {% data variables.product.prodname_projects_v2 %} 的见解来查看、创建和自定义使用添加到项目中的项作为其源数据的图表。 可以向该默认图表应用筛选器，也可以创建自己的图表。 创建图表时，可以设置筛选器、图表类型和显示的信息，并且任何可以查看项目的人都可以使用该图表。 可以生成两种类型的图表：当前图表和历史图表。

 ### 关于当前图表

可以创建当前图表来对项目项进行可视化。 例如，可以创建图表来显示分配给每个人的项数，或分配给每个即将发生的迭代的问题数。

还可以使用筛选器来操作用于生成图表的数据。 例如，可以创建一个图表来显示有多少即将开始的工作，但将这些工作标记为特定的标签或分派给特定的被分派人。 有关详细信息，请参阅“[筛选项目](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)”。

 ![显示每个迭代项类型的堆积柱形图的屏幕截图](/assets/images/help/issues/column-chart-example.png)

有关详细信息，请参阅“[创建图表](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts)”。

 ### 关于历史图表

 历史图表是基于时间的图表，可用于查看项目的趋势和进度。 可以查看一段时间内按状态和其他字段分组的项数。
 
 默认的“燃起”图表显示一段时间内的项状态，使你能够可视化一段时间内的进度和发现模式。 

![显示当前迭代的默认“燃起”图表示例的屏幕截图](/assets/images/help/issues/burnup-example.png)

 若要创建历史图表，请将图表的 X 轴设置为“时间”。 有关详细信息，请参阅“[创建图表](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts)”和“[配置图表](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/configuring-charts)”。

## 延伸阅读

- [关于 {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
- [在组织中禁用 {% data variables.product.prodname_projects_v2 %} 的见解](/organizations/managing-organization-settings/disabling-insights-for-projects-in-your-organization)
