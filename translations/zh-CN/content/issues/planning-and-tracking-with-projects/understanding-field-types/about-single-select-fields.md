---
title: 关于单选字段
shortTitle: About single select fields
intro: 可以使用可从下拉菜单中选择的已定义选项创建单选字段。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 1dfb11e43de04bd55f544a9fb97a0a9346a22d96
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108165'
---
可以通过指定选项按单选字段进行筛选，例如：`fieldname:option`。 可以通过提供以逗号分隔的选项列表来筛选多个值，例如：`fieldname:option,option`。 有关详细信息，请参阅“[筛选项目](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)”。

单选字段最多可以包含 50 个选项。 

## 添加单选字段

{% data reusables.projects.new-field %}
1. 选择“单选”
   ![显示“单选”选项的屏幕截图](/assets/images/help/projects-v2/new-field-single-select.png)
1. 在“选项”下方，键入第一个选项。
   ![显示“单选”选项的屏幕截图](/assets/images/help/projects-v2/single-select-create-with-options.png)
   - 若要添加其他选项，请单击“添加选项”。
1. 单击“ **保存**”。
   ![显示“保存”按钮的屏幕截图](/assets/images/help/projects-v2/new-field-save.png)

或者，通过按 {% data variables.projects.command-palette-shortcut %} 打开项目命令面板，然后开始键入“创建新字段”。

## 编辑单选字段

{% data reusables.projects.project-settings %}
1. 单击要调整的单选字段的名称。
   ![显示单选字段的屏幕截图](/assets/images/help/projects-v2/select-single-select.png)
1. 编辑现有选项或单击“添加选项”。
   ![显示“单选”选项的屏幕截图](/assets/images/help/projects-v2/single-select-edit-options.png)
1. （可选）若要删除某个选项，请单击 {% octicon "x" aria-label="The x icon" %}。
   ![“删除”按钮的屏幕截图](/assets/images/help/projects-v2/single-select-delete.png)
1. 单击“保存”选项。
   ![显示“保存”按钮的屏幕截图](/assets/images/help/projects-v2/save-options.png)
