---
title: 自定义视图
intro: 通过更改项目中的布局、分组、排序来显示你所需的信息。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
- /issues/trying-out-the-new-projects-experience/customizing-your-project-views
type: tutorial
topics:
- Projects
ms.openlocfilehash: 0a7d1076fcf1a9d7f20b65a5e0a75b7d8029f834
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: "148106771"
---
## 更改项目布局

您可以将项目视为表或板。

{% data reusables.projects.open-view-menu %}
1. 在“布局”下，单击“表”或“板” 。
   ![显示“布局”选项的屏幕截图](/assets/images/help/projects-v2/table-or-board.png)

 

或者，通过按 {% data variables.projects.command-palette-shortcut %} 打开项目命令面板，然后开始键入“切换布局”。

## 显示和隐藏字段

您可以显示或隐藏特定字段。

{% data reusables.projects.open-view-menu %}
1. 在“配置”下，单击 {% octicon "note" aria-label="the note icon" %} 和当前显示字段的列表。
   ![显示“显示和隐藏字段”菜单选项的屏幕截图](/assets/images/help/projects-v2/show-hide-fields-menu-item.png)
1. 选择或取消选择希望显示或隐藏的字段。
   ![显示“显示和隐藏字段”菜单的屏幕截图](/assets/images/help/projects-v2/show-hide-fields.png)

也可以在表视图中隐藏单个字段。

1. 在希望隐藏的字段的旁边，单击 {% octicon "kebab-horizontal" aria-label="the kebab icon" %}。
   ![显示“字段”菜单图标的屏幕截图](/assets/images/help/projects-v2/modify-field-menu.png)
1. 单击 {% octicon "eye-closed" aria-label="the eye closed icon" %}“隐藏字段”。
   ![显示“隐藏字段”菜单选项的屏幕截图](/assets/images/help/projects-v2/hide-field-via-menu.png)

或者，通过按 {% data variables.projects.command-palette-shortcut %} 打开项目命令面板，然后开始键入“显示”、“隐藏”或字段名称。

## 对字段重新排序

在表布局中，可以更改字段的顺序。

1. 单击字段标题。
   ![显示“字段标题”的屏幕截图](/assets/images/help/projects-v2/select-field-header.png)
2. 继续单击时，将字段拖到所需位置。

## 对行重新排序

在表布局中，您可以更改行的顺序。

1. 点击行开头的数字。
   ![显示行号的屏幕截图](/assets/images/help/projects-v2/select-row-number.png)
2. 继续单击时，将行拖到所需位置。

## 按字段值排序

在表布局中，您可以按字段值排序项。

{% note %}

注意：对表格排序时，你不能手动重新排序行。

{% endnote %}

{% data reusables.projects.open-view-menu %}
1. 单击“排序”。
   ![显示“排序”菜单项的屏幕截图](/assets/images/help/projects-v2/sort-menu-item.png)
1. 选择你希望设为排序依据的字段。
   ![显示“排序”菜单的屏幕截图](/assets/images/help/projects-v2/sort-menu.png)
2. （可选）若要更改排序的方向，请单击 {% octicon "sort-desc" aria-label="the sort icon" %}。
   ![显示“排序顺序”选项的屏幕截图](/assets/images/help/projects-v2/sort-order.png)
3. （可选）若要移除排序，请单击列表底部的 {% octicon "x" aria-label="the x icon" %}“无排序”。
   ![显示“无排序”的屏幕截图](/assets/images/help/projects-v2/no-sorting.png)

或者，通过按 {% data variables.projects.command-palette-shortcut %} 打开项目命令面板，然后开始键入“排序依据”。

## 在表布局中按字段值分组

在表布局中，您可以按自定义字段值排序组项。 对项分组时，如果将项拖动到新组，则应用该组的值。 例如，如果你是按“状态”分组，然后将一个状态为 `In progress` 的项拖动到 `Done` 组，则该项的状态将切换为 `Done`。 同样，当您向组添加新项时，新项将使用组的值填充。

{% note %}

注意：无法按标题、标签、审查者或链接的拉取请求进行分组。

{% endnote %}

{% data reusables.projects.open-view-menu %}
1. 单击 {% octicon "rows" aria-label="the rows icon" %}“组”。
   ![显示“组”菜单项的屏幕截图](/assets/images/help/projects-v2/group-menu-item.png)
1. 单击你希望设为分组依据的字段。
   ![显示“组”菜单的屏幕截图](/assets/images/help/projects-v2/group-menu.png)
2. （可选）若要禁用分组，请单击列表底部的 {% octicon "x" aria-label="the x icon" %}“无分组”。
   ![显示“无分组”的屏幕截图](/assets/images/help/projects-v2/no-grouping.png)

或者，通过按 {% data variables.projects.command-palette-shortcut %} 打开项目命令面板，然后开始键入“分组依据”。

{% ifversion projects-v2-numeric-summary %}

## 显示数字字段的总和

可以配置视图以显示多个数字字段的总和，包括组或列中项的计数。 例如，如果你有一个跟踪每个项目完成小时数的数字字段，你可以显示每个组或列的小时数的总和。

在板布局中，字段总和显示在每列顶部。 在表格布局中，启用按字段分组后，字段总和将包含在每个组的标头中。

{% data reusables.projects.open-view-menu %}
1. 单击 {% octicon "number" aria-label="the number icon" %}“字段总和”。
   
   ![显示“字段总和”菜单项的屏幕截图](/assets/images/help/projects-v2/field-sum-menu.png)
   
1. 选择希望包括的字段。
   
   ![显示“字段总和”菜单的屏幕截图](/assets/images/help/projects-v2/field-sum-select-field.png)
   

{% endif %}

## 在板布局中设置列字段

在板布局中，您可以为列选择任何单选或迭代字段。 如果将某个项拖到新列，则该列的值将应用于拖动的项。 例如，如果对板列使用“状态”字段，然后将状态为 `In progress` 的项拖到 `Done` 列，则该项的状态将切换为 `Done`。

{% data reusables.projects.open-view-menu %}
1. 单击 {% octicon "columns" aria-label="the columns icon" %}“列字段”。
   ![显示“列字段”项的屏幕截图](/assets/images/help/projects-v2/column-field-menu-item.png)
1. 单击你希望使用的字段。
   ![显示“列字段”菜单的屏幕截图](/assets/images/help/projects-v2/column-field-menu.png)

或者，通过按 {% data variables.projects.command-palette-shortcut %} 打开项目命令面板，然后开始键入“列字段依据”。

{% ifversion projects-v2-column-visibility %}

## 在板布局中显示和隐藏列

在板布局中，可以选择希望显示的列。 可用的列包括所选列字段的内容。

1. 在板布局中，滚动到列的右侧，然后单击 {% octicon "plus" aria-label="the plus icon" %}。
   
   ![显示“加号”按钮的屏幕截图](/assets/images/help/projects-v2/board-add-column.png)
   
1. 选择希望显示的列。
   
   ![显示列的列表的屏幕截图](/assets/images/help/projects-v2/board-select-columns.png)
   
{% endif %}
