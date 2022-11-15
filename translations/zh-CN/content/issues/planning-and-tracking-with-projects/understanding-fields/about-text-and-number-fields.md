---
title: 关于文本和数字字段
shortTitle: About text and number fields
intro: 可以将自定义文本和数字字段添加到你的项目。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
redirect_from:
  - /issues/planning-and-tracking-with-projects/understanding-field-types/about-text-and-number-fields
ms.openlocfilehash: 531931f74afd1d4fdc206002742d8d27bca67dc4
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159482'
---
可以使用文本字段在项目中包含备注或任何其他自由格式的文本。

文本字段可以用于筛选器，例如：`field:"exact text"`。 如果你在不指定字段的情况下筛选文本，也会使用文本字段和项标题。 

数字字段也可以用于筛选器。 可以使用 `>`、`>=`、`<`、`<=` 和 `..` 范围查询按数字字段进行筛选。 例如 `field:5..15` 或 `field:>=20`。 有关详细信息，请参阅“[筛选项目](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)”。

## 添加文本字段

{% data reusables.projects.new-field %}
1. 选择“文本”
   ![显示“文本”选项的屏幕截图](/assets/images/help/projects-v2/new-field-text.png)
1. 单击“ **保存**”。
   ![显示“保存”按钮的屏幕截图](/assets/images/help/projects-v2/new-field-save.png)

或者，通过按 {% data variables.projects.command-palette-shortcut %} 打开项目命令面板，然后开始键入“创建新字段”。

## 添加数字字段

{% data reusables.projects.new-field %}
1. 选择“数字”
   ![显示“数字”选项的屏幕截图](/assets/images/help/projects-v2/new-field-number.png)
1. 单击“ **保存**”。
   ![显示“保存”按钮的屏幕截图](/assets/images/help/projects-v2/new-field-save.png)

或者，通过按 {% data variables.projects.command-palette-shortcut %} 打开项目命令面板，然后开始键入“创建新字段”。
