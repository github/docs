---
title: '筛选 {% data variables.projects.projects_v2 %}'
intro: 使用筛选器选择哪些项显示在项目视图中。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/filtering-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 820a9b22deab6ecaf7fa06129e2205267b22812c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423964'
---
可使用筛选器和按项目中的字段来自定义项目元数据的视图，例如代理人和应用于问题的标签。 可以合并筛选并将其保存为视图。 有关详细信息，请参阅“[自定义项目视图](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)”。

若要筛选项目，请单击 {% octicon "filter" aria-label="The Filter icon" %} 并开始键入要筛选的字段和值。 当您输入时，可能的值将会出现。 还可按 {% data variables.projects.command-palette-shortcut %} 来打开项目命令面板，然后键入“筛选依据”以从可用筛选器中进行选择。

使用多个筛选器将充当逻辑 AND 筛选器。 例如，`label:bug status:"In progress"` 将返回带 `bug` 标签且状态为“正在进行”的项。 {% data variables.product.prodname_projects_v2 %} 当前不支持跨多个字段的逻辑 OR 筛选器。

对于使用 {% data variables.product.prodname_projects_v2 %} 的见解创建的图表，可使用相同的筛选器来筛选用于创建图表的数据。 有关详细信息，请参阅“[将见解用于项目](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/about-insights-for-projects)”。

## 过滤项

点击表格顶部的 {% octicon "filter" aria-label="the filter icon" %} 以显示“Filter by keyword or by field（按关键字或字段过滤）”列。 开始键入要过滤的字段名称和值。 当您输入时，可能的值将会出现。

{% data reusables.projects.projects-filters %}

或者，通过按 {% data variables.projects.command-palette-shortcut %} 打开项目命令面板，并开始键入“筛选依据”。

在板布局中，您可以单击项目数据以过滤具有该值的项。 例如，单击某个受理人以仅显示该受理人的项。 要移除过滤器，请再次单击项数据。
