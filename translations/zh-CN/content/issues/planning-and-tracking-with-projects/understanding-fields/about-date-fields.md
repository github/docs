---
title: 关于日期字段
shortTitle: About date fields
intro: 可以创建自定义日期字段，该字段可以通过键入日期或使用日历进行设置。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
redirect_from:
  - /issues/planning-and-tracking-with-projects/understanding-field-types/about-date-fields
ms.openlocfilehash: d6057212941db8d20ed49f240052e5ad0fc8eb80
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159484'
---
可以使用 `YYYY-MM-DD` 格式筛选日期值，例如：`date:2022-07-01`。 还可以使用运算符，例如 `>`、`>=`、`<`、`<=` 和 `..`。 例如，`date:>2022-07-01` 和 `date:2022-07-01..2022-07-31`。 还可以提供 `@today` 来表示筛选器中的当前日期。 有关详细信息，请参阅“[筛选项目](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)”。

## 添加日期字段

{% data reusables.projects.new-field %}
1. 选择“日期”
   ![显示“日期”选项的屏幕截图](/assets/images/help/projects-v2/new-field-date.png)
1. 单击“ **保存**”。
   ![显示“保存”按钮的屏幕截图](/assets/images/help/projects-v2/new-field-save.png)

或者，通过按 {% data variables.projects.command-palette-shortcut %} 打开项目命令面板，然后开始键入“创建新字段”。
