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
ms.openlocfilehash: e5cdcbdfbc2e51949c22c27fb1071b6e931ee59a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423901'
---
可以使用 `YYYY-MM-DD` 格式筛选日期值，例如：`date:2022-07-01`。 还可以使用运算符，例如 `>`、`>=`、`<`、`<=` 和 `..`。 例如，`date:>2022-07-01` 和 `date:2022-07-01..2022-07-31`。 还可以提供 `@today` 来表示筛选器中的当前日期。 有关详细信息，请参阅“[筛选项目](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)”。

## 添加日期字段

{% data reusables.projects.new-field %}
1. 选择“日期”
   ![显示“日期”选项的屏幕截图](/assets/images/help/projects-v2/new-field-date.png)
1. 单击“ **保存**”。
   ![显示“保存”按钮的屏幕截图](/assets/images/help/projects-v2/new-field-save.png)

或者，通过按 {% data variables.projects.command-palette-shortcut %} 打开项目命令面板，然后开始键入“创建新字段”。
