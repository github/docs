---
title: '关于 {% data variables.product.prodname_projects_v2 %}'
intro: '{% data variables.product.prodname_projects_v2 %} 是一个适应性强的灵活工具，用于计划和跟踪 {% data variables.product.company_short %} 上的工作。'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/about-projects
type: overview
topics:
  - Projects
ms.openlocfilehash: 3190379652fe1c95b8ea6ec7f864c44b72d9a7f7
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180759'
---
## 关于 {% data variables.product.prodname_projects_v2 %}

项目是一个适应性强的电子表格，可与你在 {% data variables.product.company_short %} 上的问题和拉取求集成来帮助你有效地计划和跟踪工作。 可通过以下方式创建和自定义多个视图：对问题和拉取请求进行筛选、排序和分组；添加自定义字段来跟踪特定于团队的元数据；使用可配置图表直观呈现工作。 项目提供灵活的功能而不是强制实施特定方法，你可根据团队的需求和流程对这些灵活功能进行自定义。

### 保持最新

项目是根据你添加的问题和拉取请求生成的，在项目与工作之间创建了直接引用。 当你进行更改、更新视图和图表时，信息会自动同步到项目。 此集成也双向运行，因此当你更改有关项目中拉取请求或问题的信息时，拉取请求或问题会反映该信息。 例如，更改项目中的代理人，该更改将显示在问题中。 可进一步进行此集成，按代理人对项目进行分组，并通过将问题拖动到不同的组中来更改问题分配。

### 添加元数据到项目

可使用自定义字段向问题、拉取请求和草稿问题添加元数据，并生成更丰富的项属性视图。 可添加的元数据并不局限于当前针对问题和拉取请求而存在的内置元数据（代理人、里程碑、标签等）。 例如，可以将以下元数据添加为自定义字段：

- 用于跟踪目标发货日期的日期字段。
- 用于跟踪任务复杂性的数字字段。
- 用于跟踪任务是“低”、“中等”还是“高”优先级的单个选择字段。
- 用于添加快速笔记的文本字段。
- 用于计划每周工作（包括对中断的支持）的迭代字段。

{% ifversion projects-v2-tasklists %}

### 探索问题之间的关系

{% data reusables.projects.tasklists-release-stage %}

可以使用任务列表功能构建问题的层次结构，将问题划分为较小的子任务，并在问题之间创建新关系。 有关详细信息，请参阅“[关于任务列表](/issues/tracking-your-work-with-issues/about-tasklists)”。

这些关系显示在问题以及项目中的“跟踪依据”和“跟踪”字段中。 可以按其他问题跟踪的问题进行筛选，还可以按“跟踪依据”字段对表视图进行分组，以显示所有父问题及其子任务列表。

{% endif %}

### 从不同的角度查看您的项目

通过调整项目视图来提供所需信息，快速回答最紧迫的问题。 可保存这些视图，以便根据需要快速返回到这些视图，并使它们可供团队使用。 视图不仅使你可以缩小所列项的范围，还提供两个不同的布局选项。

您可以将您的项目视为高密度表布局：

![项目表](/assets/images/help/issues/projects_table.png)

或作为板：

![项目板](/assets/images/help/issues/projects_board.png)

为了帮助您专注于项目的特定方面，您可以对项目进行分组、排序或筛选：

![项目视图](/assets/images/help/issues/project_view.png)

有关详细信息，请参阅“[自定义视图](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)”。
