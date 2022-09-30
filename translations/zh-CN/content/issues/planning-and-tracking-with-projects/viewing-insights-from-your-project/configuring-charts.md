---
title: 配置图表
intro: 了解如何配置图表并筛选项目中的数据。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
product: '{% data reusables.gated-features.historical-insights-for-projects %}'
topics:
  - Projects
ms.openlocfilehash: 4fffa6ebd196419dc08de7abaf5d85349bd38737
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423944'
---
{% ifversion fpt %}

{% note %}

注意：历史图表目前以功能预览的形式提供。

{% endnote %}

{% endif %}

{% data reusables.projects.access-insights %}
1. 在左侧菜单中，单击要配置的图表。
   ![显示选择自定义图表的屏幕截图](/assets/images/help/projects-v2/insights-select-a-chart.png)
1. 在页面右侧，单击“配置”。 一个面板随即在右侧打开。
   ![显示“配置”按钮的屏幕截图](/assets/images/help/projects-v2/insights-configure.png)
1. 若要更改图表类型，请选择“布局”下拉菜单并单击要使用的图表类型。
   ![显示选择图表布局的屏幕截图](/assets/images/help/projects-v2/insights-layout.png)
1. 若要更改用于图表 X 轴的字段，请选择“X 轴”下拉菜单并单击要使用的字段。
   ![显示选择要在 x 轴上显示的内容的屏幕截图](/assets/images/help/projects-v2/insights-x-axis.png)
1. （可选）若要按另一个字段对 X 轴上的项进行分组，请选择“分组依据”，然后单击要使用的字段，或单击“无”以禁用分组。
   ![显示选择分组方法的屏幕截图](/assets/images/help/projects-v2/insights-group.png)
1. （可选）如果项目包含数字字段，并且你希望 Y 轴显示其中一个数字字段的总和、平均值、最小值或最大值，请选择“Y 轴”并单击一个选项。 然后，选择下方显示的下拉列表，单击要使用的数字字段。 
   ![显示选择要在 y 轴上显示的内容的屏幕截图](/assets/images/help/projects-v2/insights-y-axis.png)
1. 若要保存图表，请单击“保存更改”。
   ![显示“保存”按钮的屏幕截图](/assets/images/help/projects-v2/insights-save.png)
