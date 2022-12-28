---
title: 自动将项存档
shortTitle: Archiving automatically
intro: 将项目的内置工作流配置为将满足特定条件的项自动存档。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2-auto-archive
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 75346021f51cb8cc373b4a50aef43e0b5c7646dc
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107219'
---
{% note %}

注意：内置工作流可作为有限 Beta 版的一部分提供。

{% endnote %}

## 关于自动将项存档

可配置项目的内置工作流，将项自动存档。 将项存档有助于每个项目中的 {% data variables.projects.item_limit %} 项不超出限制。

可以使用 `is`、`reason` 和 `last-updated` 筛选器来指定何时将项存档。

为问题或拉取请求启用自动存档时，同时会将项目中已经满足条件的项进行存档。 存档大量已满足条件的项可能会出现一定程度的延迟。

项目还存在可包含的已存档项数的限制。 项目最多可包含 {% data variables.projects.archived_item_limit %} 个已存档项。 有关永久删除项的详细信息，请参阅“[删除项](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project#deleting-items)”。

## 在项目中配置自动存档

{% data reusables.projects.access-workflows %}
1. 请在“默认工作流”列表中，单击“自动存档项”。
   
   ![显示自动存档工作流的屏幕截图](/assets/images/help/projects-v2/archive-workflows.png)
   
1. 请在“何时”旁边，勾选要自动存档的项类型。
   
   ![显示工作流的“何时”配置的屏幕截图](/assets/images/help/projects-v2/workflow-when-archive.png)

1. 请在 {% octicon "filter" aria-label="The filter icon" %} 旁边，键入用于自动存档项的筛选条件。 只能使用 `is`、`reason` 以及 `last-updated` 筛选器。 有关筛选语法的详细信息，请参阅“[筛选项目](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)”。
   
   ![显示筛选文本区域的屏幕截图](/assets/images/help/projects-v2/auto-archive-filter.png)
   
1. 如果已禁用工作流，请单击“关闭”旁边的开关来启用工作流。
   
   ![显示工作流的“开启/关闭”控件的屏幕截图](/assets/images/help/projects-v2/workflow-enable.png)
   

## 延伸阅读

* “[将项目中的项存档](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project)”
* [使用内置的自动化功能](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations)
