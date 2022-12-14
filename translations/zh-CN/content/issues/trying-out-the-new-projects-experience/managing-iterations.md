---
title: 管理项目中的迭代（测试版）
intro: 可以创建迭代来计划即将到来的工作和组项。
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: e64eb3e29efe513578984bc0c198ac8743803287
ms.sourcegitcommit: 95e6f3d3aba8c637a3f72b571a6beacaa38d367f
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/11/2022
ms.locfileid: "147067568"
---
{% data reusables.projects.projects-beta %}

## <a name="about-iterations"></a>关于迭代

可以创建一个迭代字段，将项与特定的重复时间块相关联。 迭代可以设置为任何时间长度，可以包括中断，并且可以进行单独编辑以修改名称和日期范围。 对于项目，可以按迭代分组，以可视化即将开始的工作的平衡度，使用筛选器专注于单个迭代，并按迭代进行排序。

首次创建迭代字段时，会自动创建三个迭代。  可在项目的设置页上添加其他迭代并进行其他更改。

![显示迭代字段设置的屏幕截图](/assets/images/help/issues/iterations-example.png)

## <a name="creating-an-iteration-field"></a>创建迭代字段

可以使用命令面板或项目的界面创建迭代字段。

1. {% data reusables.projects.open-command-palette %} 开始输入 "Create new field" 的任何部分。 当 "Create new field" 显示在命令板中时，选择它。

   或者，单击最右侧字段标题中的 {% octicon "plus" aria-label="the plus icon" %} 。 将显示带有项目字段的下拉菜单。 单击“新建字段”。
1. 在文本框中，为新迭代字段输入一个名称。
1. 选择下面的下拉菜单，然后单击“迭代”。
1. （可选）如果要从当前日期更改开始日期，请选择“开始日期”旁边的日历下拉列表，然后单击新的开始日期。
2. 要更改每次迭代的持续时间，请键入一个新数字，然后选择下拉列表，再单击“天”或“周” 。
3. 单击“保存并创建”。
  
## <a name="adding-new-iterations"></a>添加新迭代

{% data reusables.projects.project-settings %}
1. 单击要调整的迭代字段的名称。
1. 要添加持续时间相同的新迭代，请单击“添加迭代”。
1. （可选）要自定义新迭代的持续时间及其开始时间，请单击“添加迭代”旁边的 {% octicon "triangle-down" aria-label="The triangle icon" %}，选择开始日期和持续时间，然后单击“添加”。
1. 单击“保存更改”。 

## <a name="editing-an-iteration"></a>编辑迭代

可以在项目设置中编辑迭代。 还可以通过单击字段的表标题中的 {% octicon "triangle-down" aria-label="The triangle icon" %} 并单击“编辑值”来访问迭代字段的设置。

{% data reusables.projects.project-settings %}
1. 单击要调整的迭代字段的名称。
1. 要更改迭代的名称，请单击该名称并开始键入。
1. 要更改迭代的日期或持续时间，请单击日期以打开日历。 单击起始日，然后单击结束日，再单击“应用”。
1. （可选）要删除迭代，请单击 {% octicon "trash" aria-label="The trash icon" %}。
1. 单击“保存更改”。 

## <a name="inserting-a-break"></a>插入中断

可以将在迭代中插入中断，以便在从计划的工作中抽出时间时进行通信。 新中断的默认持续时间为最近创建的迭代的长度。

{% data reusables.projects.project-settings %}
1. 单击要调整的迭代字段的名称。
2. 在迭代上方和右侧的分隔线上，单击“插入中断”。
   ![显示“插入中断”按钮位置的屏幕截图](/assets/images/help/issues/iteration-insert-break.png)
3. （可选）要更改中断持续时间，请单击日期以打开日历。 单击起始日，然后单击结束日，再单击“应用”。
4. 单击“保存更改”。 
