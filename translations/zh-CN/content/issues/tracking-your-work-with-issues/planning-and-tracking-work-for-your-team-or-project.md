---
title: 为您的团队或项目规划和跟踪工作
intro: '使用 {% data variables.product.prodname_dotcom %} 的规划和跟踪工具来管理团队或项目工作的要点。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Project management
  - Projects
ms.openlocfilehash: 782351c80164c90d479120996edf25329d20078c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423610'
---
## 简介
您可以使用 {% data variables.product.prodname_dotcom %} 仓库、议题、项目板及其他工具来规划和跟踪您的工作，无论是单个项目或跨职能团队。

本指南将介绍如何创建和设置一个与一群人合作的存储库、创建问题模板{% ifversion fpt or ghec %}和表单{% endif %}、创建问题并使用任务列表细分工作，以及建立项目板来组织和跟踪问题。

## 创建仓库
启动新项目、计划或功能时，第一步是创建仓库。 仓库包含您项目的所有文件，并为您提供了一个与他人合作和管理您工作的地方。 有关详细信息，请参阅“[创建新存储库](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository)”。

您可以根据您的需要为不同的目的设置仓库。 以下是一些常见用例：

- **产品存储库**：围绕特定产品跟踪自身工作和目标的大型组织可能有一个或多个包含代码和其他文件的存储库。 这些仓库也可用于文档、产品健康报告或产品未来计划。 
- **项目存储库**：可为正在处理的单个项目创建存储库，也可为正在与他人协作的项目创建存储库。 对于跟踪为短期计划或项目工作的组织，如咨询公司，需要报告项目的健康情况，并根据技能和需求在不同项目之间移动人员。 项目代码通常包含在单个仓库中。
- **团队存储库**：对于将人员分组到团队并将项目引入到团队（如开发工具团队）中的组织，代码可能会分散在多个存储库中，以便跟踪所需的不同工作。在这种情况下，使用特定于团队的存储库可能会有所帮助，可在其中跟踪团队参与的所有工作。
- **个人存储库**：可创建个人存储库，以便在一个位置跟踪你的所有工作、规划未来的任务，甚至添加想要保存的笔记或信息。 如果您想与他人共享此信息，您还可以添加协作者。 

如果您想要源代码以及跟踪问题和讨论的不同访问权限，则可以创建多个单独的仓库。 有关详细信息，请参阅“[创建仅含问题的存储库](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-an-issues-only-repository)”。

对于本指南中的以下示例，我们将使用称为 Octocat 项目的示例仓库。
## 沟通仓库信息
您可以为您的仓库创建 README.md 文件来介绍您的团队或项目并传递有关它的重要信息。 README 通常是访问仓库的访客看到的第一项，因此您还可以提供有关用户或贡献者如何开始项目以及如何联系团队的信息。 有关详细信息，请参阅“[关于自述文件](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-readmes)”。

您还可以创建一个 CONTRIBUTING.md 文件，专门包含有关用户或贡献者如何参与及与团队或项目互动的准则，例如如何打开错误修复问题或请求改进。 有关详细信息，请参阅“[设置存储库参与者指南](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)”。
### README 示例
我们可以创建一个 README.md 来介绍我们的新项目：Octocat项目。 

![创建 README 示例](/assets/images/help/issues/quickstart-creating-readme.png)
## 创建议题模板

您可以使用议题来跟踪跨职能团队或项目涵盖的不同类型的工作，以及从项目外部收集信息。 下面是一些常见的问题案例。

- 发布跟踪：您可以使用议题来跟踪发布进度或发布当天完成的步骤。
- 大型倡议：您可以使用议题来跟踪大型计划或项目的进度，然后这些计划或项目将链接到较小的议题。
- 功能请求：您的团队或用户可以创建议题，要求改进您的产品或项目。
- 错误：您的团队或用户可以创建议题来报告错误。 

根据您处理的仓库和项目类型，您可以将某些类型的议题置于其他议题之上。 在为团队确定最常见的问题类型后，可为存储库创建问题模板{% ifversion fpt or ghec %}和表单{% endif %}。 使用问题模板{% ifversion fpt or ghec %}和表单{% endif %}可创建标准化的模板列表，供参与者在存储库中创建问题时选择。 有关详细信息，请参阅“[为存储库配置问题模板](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)”。

### 议题模板示例
下面我们创建一个议题模板，用于报告 Octocat 项目中的错误。

![创建议题模板示例](/assets/images/help/issues/quickstart-creating-issue-template.png)

现在我们已经创建了错误报告模板，您在项目 Octocat 中创建新议题时可以选择它。

![选择议题模板示例](/assets/images/help/issues/quickstart-issue-creation-menu-with-template.png)

## 打开议题并使用任务列表来跟踪工作
您可以通过创建议题来组织和跟踪您的工作。 有关详细信息，请参阅“[创建问题](/issues/tracking-your-work-with-issues/creating-issues/creating-an-issue)”。
###               问题示例
下面是 Octocat 项目中为大型计划（前端工作）创建的议题示例。

![创建一个大型计划议题示例](/assets/images/help/issues/quickstart-create-large-initiative-issue.png)
### 任务列表示例

您可以使用任务列表将较大的议题分解成较小的任务，并将追踪议题作为更大目标的一部分。 {% ifversion fpt or ghec %} 任务列表添加到问题正文时具有额外的功能。 在问题顶部可看到总任务数中已完成的任务数。如果有人关闭任务列表中链接的问题，其对应的复选框将自动标记为完成。{% endif %} 有关详细信息，请参阅“[关于任务列表](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)”。

下面，我们在 Octocat 项目议题中添加了任务列表，将其分解为较小的议题。

![向议题添加任务示例](/assets/images/help/issues/quickstart-add-task-list-to-issue.png)

## 以团队身份作出决定
您可以利用议题和讨论作为团队来沟通和决定计划的项目改进或优先级。 当您创建议题以讨论特定详细信息（如错误或绩效报告、下个季度的规划或新计划的设计）时，议题很有用。 讨论有助于在代码库之外和跨仓库进行开放式的集思广益或反馈。 有关详细信息，请参阅“[我应该使用哪种讨论工具？](/github/getting-started-with-github/quickstart/communicating-on-github#which-discussion-tool-should-i-use)”。

作为一个团队，您还可以在议题中传达日常任务的最新信息，以便每个人都知道工作状态。 例如，您可以为多人正在处理的大功能创建议题，每个团队成员都可以在该议题中添加其状态更新或未决问题。
### 与项目协作者合作的议题示例
下面是项目协作者就 Octocat 项目问题的工作提供状态更新的示例。

![协作处理议题示例](/assets/images/help/issues/quickstart-collaborating-on-issue.png)
## 使用标签突出项目目标和状态
您可以为仓库创建标签来分类议题、拉取请求和讨论。 {% data variables.product.prodname_dotcom %} 还为您可以编辑或删除的每个新仓库提供默认标签。 标签可用于跟踪项目目标、错误、工作类型和议题状态。

有关详细信息，请参阅“[创建标签](/issues/using-labels-and-milestones-to-track-work/managing-labels#creating-a-label)”。

在仓库中创建标签后，您可以将其应用于仓库中的任何议题、拉取请求或讨论。 然后您可以通过标签过滤问题和拉取请求来查找所有相关的工作。 例如，筛选具有 `front-end` 和 `bug` 标签的问题，在项目中查找所有前端 bug。 有关详细信息，请参阅“[筛选和搜索问题与拉取请求](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)”。
### 标签示例
下面是我们创建并添加到问题的 `front-end` 标签示例。

![向议题添加标签的示例](/assets/images/help/issues/quickstart-add-label-to-issue.png)

## 添加议题到项目板

{% ifversion projects-v2 %}

可以使用 {% data variables.product.prodname_dotcom %} 上的 {% data variables.projects.projects_v2 %} 来计划和跟踪团队的工作。 项目是一个可自定义的电子表格，集成您在 {% data variables.product.prodname_dotcom %} 上的议题和拉取请求，自动保持最新的 {% data variables.product.prodname_dotcom %} 信息。 您可以通过筛选、排序及分组议题和 PR 来自定义布局。 若要开始使用项目，请参阅“[项目快速入门](/issues/planning-and-tracking-with-projects/learning-about-projects/quickstart-for-projects)”。
### 项目示例
以下是一个示例项目的表布局，其中填充了我们创建的 Octocat 项目议题。

![项目表布局示例](/assets/images/help/issues/quickstart-projects-table-view.png)

我们也可以将同一个项目视为一个板。

![项目板布局示例](/assets/images/help/issues/quickstart-projects-board-view.png)

{% endif %} {% ifversion projects-v1 %}

还可以{% ifversion projects-v2 %}使用现有{% else %}使用{% endif %} {% data variables.product.prodname_dotcom %} 上的 {% data variables.product.prodname_projects_v1 %} 来计划和跟踪你或团队的工作。 项目板包括议题、拉取请求和注释，在选择的列中分类为卡片。 您可以为功能工作、高级路线图甚至发布检查表创建项目板。 有关详细信息，请参阅“[关于项目板](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)”。
### 项目板示例
下面是我们的示例项目 Octocat 的项目板， 其中我们创建了议题，并且分解成较小议题 添加到项目板。

![项目板示例](/assets/images/help/issues/quickstart-project-board.png)

{% endif %}

## 后续步骤

您现在已经了解了 {% data variables.product.prodname_dotcom %} 提供的用于规划和跟踪您工作的工具，并且已经开始设置您的跨功能团队或项目仓库！ 以下是一些有用的资源，可进一步定制您的仓库和组织您的工作。

- “[关于存储库](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories)”，详细介绍如何创建存储库
- “[使用问题跟踪工作](/issues/tracking-your-work-with-issues)”，详细介绍用于创建和管理问题的不同方法
- “[关于问题和拉取请求模板](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)”，详细介绍问题模板
- “[管理标签](/issues/using-labels-and-milestones-to-track-work/managing-labels)”，介绍如何创建、编辑和删除标签
- 请参阅“[关于任务列表](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)”详细了解任务列表 {% ifversion projects-v2 %}，请参阅“[关于项目](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)”详细了解项目
- 请参阅“[自定义视图](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)”了解如何为项目自定义视图 {% endif %} {% ifversion projects-v1 %}，请参阅“[关于 {% data variables.product.prodname_projects_v1 %}](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)”了解如何管理项目板 {% endif %}
