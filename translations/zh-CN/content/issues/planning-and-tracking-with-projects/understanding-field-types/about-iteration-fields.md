---
title: 关于迭代字段
shortTitle: About iteration fields
intro: 可以创建迭代来计划即将到来的工作和组项。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
- /issues/trying-out-the-new-projects-experience/managing-iterations
type: tutorial
topics:
- Projects
ms.openlocfilehash: 93039327ab7075e0f79c9d5ae5d6652aa635a500
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108766"
---
可以创建一个迭代字段，将项与特定的重复时间块相关联。 迭代可以设置为任何时间长度，可以包括中断，并且可以进行单独编辑以修改名称和日期范围。 对于项目，可以按迭代分组，以可视化即将开始的工作的平衡度，使用筛选器专注于单个迭代，并按迭代进行排序。

可以通过指定迭代名称，或者为当前迭代指定 `@current`，为上一次迭代指定 `@previous`，为下一次迭代指定 `@next` 来筛选迭代。 也可以使用运算符，例如 `>`、`>=`、`<`、`<=` 和 `..`。  例如，`iteration:>"Iteration 4"` 和 `iteration:<@current`。 有关详细信息，请参阅“[筛选项目](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)”。

首次创建迭代字段时，会自动创建三个迭代。  可在项目的设置页上添加其他迭代并进行其他更改。

![显示迭代字段设置的屏幕截图](/assets/images/help/issues/iterations-example.png)

## 添加迭代字段

{% data reusables.projects.new-field %}
1. 选择“迭代”
   ![显示迭代选项的屏幕截图](/assets/images/help/projects-v2/new-field-iteration.png)
2. （可选）如果不希望迭代从今天开始，请选择“开始于”旁边的日历下拉列表，然后选择新的开始日期。
   ![显示迭代开始日期的屏幕截图](/assets/images/help/projects-v2/iteration-field-starts.png)
3. 要更改每次迭代的持续时间，请键入一个新数字，然后选择下拉列表，再单击“天”或“周” 。
   ![显示迭代持续时间的屏幕截图](/assets/images/help/projects-v2/iteration-field-duration.png)
4. 单击“ **保存**”。
   ![显示“保存”按钮的屏幕截图](/assets/images/help/projects-v2/new-field-save-and-create.png)

或者，通过按 {% data variables.projects.command-palette-shortcut %} 打开项目命令面板，然后开始键入“创建新字段”。

## 添加新迭代

{% data reusables.projects.project-settings %}
1. 单击要调整的迭代字段的名称。
   ![显示迭代字段的屏幕截图](/assets/images/help/projects-v2/select-iteration-field.png)
1. 要添加持续时间相同的新迭代，请单击“添加迭代”。
   ![“添加迭代”按钮的屏幕截图](/assets/images/help/projects-v2/add-iteration.png)
1. （可选）要自定义新迭代的持续时间和开始时间，请单击 {% octicon "triangle-down" aria-label="The triangle icon" %}“更多选项”，选择开始日期和持续时间，然后单击“添加” 。
   ![添加迭代选项窗体的屏幕截图](/assets/images/help/projects-v2/add-iteration-options.png)
1. 单击“保存更改”。 
   ![“保存”按钮的屏幕截图](/assets/images/help/projects-v2/iteration-save.png)

## 编辑迭代

可以在项目设置中编辑迭代。 还可以通过单击字段的表标题中的 {% octicon "triangle-down" aria-label="The triangle icon" %} 并单击“编辑值”来访问迭代字段的设置。

{% data reusables.projects.project-settings %}
1. 单击要调整的迭代字段的名称。
   ![显示迭代字段的屏幕截图](/assets/images/help/projects-v2/select-iteration-field.png)
1. 要更改迭代的名称，请单击该名称并开始键入。
   ![用于重命名迭代的标题字段的屏幕截图](/assets/images/help/projects-v2/iteration-rename.png)
1. 要更改迭代的日期或持续时间，请单击日期以打开日历。 单击起始日，然后单击结束日，再单击“应用”。
   ![显示迭代日期的屏幕截图](/assets/images/help/projects-v2/iteration-date.png)
1. （可选）要删除迭代，请单击 {% octicon "trash" aria-label="The trash icon" %}。
   ![“删除”按钮的屏幕截图](/assets/images/help/projects-v2/iteration-delete.png)
2. 单击“保存更改”。 
   ![“保存”按钮的屏幕截图](/assets/images/help/projects-v2/iteration-save.png)

## 插入中断

可以将在迭代中插入中断，以便在从计划的工作中抽出时间时进行通信。 新中断的默认持续时间为最近创建的迭代的长度。

{% data reusables.projects.project-settings %}
1. 单击要调整的迭代字段的名称。
   ![显示迭代字段的屏幕截图](/assets/images/help/projects-v2/select-iteration-field.png)
2. 在迭代上方和右侧的分隔线上，单击“插入中断”。
   ![显示“插入中断”按钮位置的屏幕截图](/assets/images/help/issues/iteration-insert-break.png)
3. （可选）要更改中断持续时间，请单击日期以打开日历。 单击起始日，然后单击结束日，再单击“应用”。
4. 单击“保存更改”。 
   ![“保存”按钮的屏幕截图](/assets/images/help/projects-v2/iteration-save.png)
