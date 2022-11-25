---
title: 关于“跟踪”和“跟踪依据”字段
shortTitle: About Tracks and Tracked by fields
intro: 可以查看项目中问题的子任务。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2-tasklists
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 44c1fcf3ed4495b57a0f2dbe3e92076f0e815502
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180743'
---
{% data reusables.projects.tasklists-release-stage %}

可以在项目上启用“跟踪”和“跟踪依据”字段，以便在任务列表中添加子任务时查看问题之间的关系。 有关在任务列表中创建问题层次结构的详细信息，请参阅“[关于任务列表](/issues/tracking-your-work-with-issues/about-tasklists)”。

“跟踪依据”字段可用于对项进行分组，从而创建一个视图，可清楚地显示每个问题的子任务以及完成这些任务所需的工作。 有关详细信息，请参阅“[按表格布局中的字段值分组](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view#grouping-by-field-values-in-table-layout)”。

还可以按“跟踪依据”字段进行筛选，以仅显示按特定问题跟踪的项。 开始键入“tracked-by”并从列表中选择一个问题，或者，如果知道存储库和问题编号，则可以完整键入下面的筛选器。

```
tracked-by:"<OWNER>/<REPO>#<ISSUE NUMBER>"
```

若要使用筛选器，请将 `<OWNER>` 替换为存储库所有者，将 `<REPO>` 替换为存储库名称，并将 `<ISSUE NUMBER>` 替换为问题编号。 有关详细信息，请参阅“[筛选项目](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)”。

### 启用“跟踪依据”字段

可以启用“跟踪依据”字段以查看哪些问题正在跟踪项目中的项。

1. 在表视图中，单击最右侧字段标题中的 {% octicon "plus" aria-label="the plus icon" %}。
   
   ![显示“新建字段”按钮的屏幕截图](/assets/images/help/projects-v2/new-field-button.png)
   
1. 在“隐藏字段”下，单击“跟踪依据”。
   
   ![显示字段菜单的屏幕截图](/assets/images/help/projects-v2/select-tracked-by-field.png)
   

### 启用“跟踪”字段

可以启用“跟踪”字段以查看项目中的项正在跟踪的其他问题。

1. 在表视图中，单击最右侧字段标题中的 {% octicon "plus" aria-label="the plus icon" %}。
   
   ![显示“新建字段”按钮的屏幕截图](/assets/images/help/projects-v2/new-field-button.png)
   
1. 在“隐藏的字段”下，单击“跟踪”。
   
   ![显示字段菜单的屏幕截图](/assets/images/help/projects-v2/select-tracks-field.png)
   
