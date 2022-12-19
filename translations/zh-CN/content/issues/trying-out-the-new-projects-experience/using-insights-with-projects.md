---
title: 将见解用于项目（beta 版）
intro: 可以查看和自定义从项目数据生成的图表。
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: b2e8f2bc76c584d4de33fe00da1fd95982f9d091
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: "147064704"
---
{% data reusables.projects.insights-alpha %}

## <a name="about-insights"></a>关于见解

可以使用见解来查看和自定义使用添加到项目中的项作为其源数据的图表。 默认的“燃起”图表显示一段时间内的项状态，使你能够可视化一段时间内的进度和发现模式。 

![显示当前迭代的默认“燃起”图表示例的屏幕截图](/assets/images/help/issues/burnup-example.png)

可以向该默认图表应用筛选器，也可以创建自己的图表。 创建图表时，可以设置筛选器、图表类型和显示的信息，并且任何可以查看项目的人都可以使用该图表。

![显示每个迭代项类型的堆积柱形图的屏幕截图](/assets/images/help/issues/column-chart-example.png)

## <a name="creating-a-chart"></a>创建图表

{% data reusables.projects.access-insights %}
3. 在左侧菜单中，单击“新建图表”。
4. （可选）要更改新图表的名称，请单击 {% octicon "triangle-down" aria-label="The triangle icon" %}，键入新名称，然后按 <kbd>Return</kbd>。
5. 在图表上方，键入筛选器以更改用于生成图表的数据。 有关详细信息，请参阅“[筛选项目](/issues/trying-out-the-new-projects-experience/filtering-projects)”。
6. 在筛选器文本框的右侧，单击“保存更改”。

## <a name="configuring-a-chart"></a>配置图表

{% data reusables.projects.access-insights %}
1. 在左侧菜单中，单击要配置的图表。
1. 在页面右侧，单击“配置”。 一个面板随即在右侧打开。
1. 若要更改图表类型，请选择“布局”下拉菜单并单击要使用的图表类型。
1. 若要更改用于图表 X 轴的字段，请选择“X 轴”下拉菜单并单击要使用的字段。
1. （可选）若要按另一个字段对 X 轴上的项进行分组，请选择“分组依据”，然后单击要使用的字段，或单击“无”以禁用分组。
1. （可选）如果项目包含数字字段，并且你希望 Y 轴显示其中一个数字字段的总和、平均值、最小值或最大值，请选择“Y 轴”并单击一个选项。 然后，选择下方显示的下拉列表，单击要使用的数字字段。 
1. 若要保存图表，请单击“保存更改”。
