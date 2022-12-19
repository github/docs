---
title: '{% data variables.product.prodname_projects_v2 %} 快速入门'
intro: '通过在此交互式指南中创建项目来体验 {% data variables.product.prodname_projects_v2 %} 的速度、灵活性和自定义。'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/quickstart
type: quick_start
topics:
  - Projects
ms.openlocfilehash: 39798565419acaa831a996a0c86cc62f367f4bb7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108702'
---
## 简介

本指南说明如何使用 {% data variables.product.prodname_projects_v2 %} 来规划和跟踪工作。 在本指南中，您将创建一个新项目，并添加自定义字段来跟踪任务的优先级。 您还将学习如何创建保存的视图，帮助您与协作者交流优先事项和进度。

## 先决条件

您可以创建组织项目或用户项目。 要创建组织项目，您需要一个 {% data variables.product.prodname_dotcom %} 组织。 有关创建组织的详细信息，请参阅“[从头开始创建新组织](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)”。

在本指南中，您将把组织拥有的存储库（对于组织项目）或您拥有的存储库（对于用户项目）的现有议题添加到新项目中。 有关创建问题的详细信息，请参阅“[创建问题](/issues/tracking-your-work-with-issues/creating-an-issue)”。

## 创建项目

首先，创建组织项目或用户项目。

### 创建组织项目

{% data reusables.projects.create-project %}

### 创建用户项目

{% data reusables.projects.create-user-project %}

## 设置项目描述和 README

{% data reusables.projects.project-description %}

## 为您的项目添加议题

接下来，在项目中添加一些议题。

{% data reusables.projects.add-item-via-paste %}

重复上述步骤几次，以向项目添加多个议题。

有关向项目添加问题的详细信息和其他方法，或可添加到项目的其他项的详细信息，请参阅“[向项目添加项](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project)”。

## 向项目添加草稿议题

接下来，将草稿议题添加到项目中。

{% data reusables.projects.add-draft-issue %}

## 添加迭代字段

接下来创建迭代字段，以便可以计划和跟踪重复时间段内的工作。 可根据你和团队的工作方式，使用可自定义的长度和插入中断的功能来配置迭代。

{% data reusables.projects.new-field %}
1. 选择“迭代”
   ![显示迭代选项的屏幕截图](/assets/images/help/projects-v2/new-field-iteration.png)
3. 要更改每次迭代的持续时间，请键入一个新数字，然后选择下拉列表，再单击“天”或“周” 。
   ![显示迭代持续时间的屏幕截图](/assets/images/help/projects-v2/iteration-field-duration.png)
4. 单击“ **保存**”。
   ![显示“保存”按钮的屏幕截图](/assets/images/help/projects-v2/new-field-save-and-create.png)

## 创建字段来跟踪优先级

现在，创建一个名为 `Priority` 的自定义字段，并使其包含以下值：`High`、`Medium` 或 `Low`。

{% data reusables.projects.new-field %}
1. 选择“单选”
   ![显示“单选”选项的屏幕截图](/assets/images/help/projects-v2/new-field-single-select.png)
1. 在“选项”下方，键入第一个选项“高”。
   ![显示“单选”选项的屏幕截图](/assets/images/help/projects-v2/priority-example.png)
1. 要添加其他字段（例如“中”和“低”），请单击“添加选项”。
1. 单击“ **保存**”。
   ![显示“保存”按钮的屏幕截图](/assets/images/help/projects-v2/new-field-save.png)

指定项目中所有议题的优先级。

![示例优先级](/assets/images/help/projects/priority_example.png)

## 按优先级对议题分组

接下来，按优先级对项目中的所有项进行分组，以便于专注于高优先级项。

{% data reusables.projects.open-view-menu %}
1. 单击 {% octicon "rows" aria-label="the rows icon" %}“组”。
   ![显示“组”菜单项的屏幕截图](/assets/images/help/projects-v2/group-menu-item.png)
1. 单击“优先级”。
   ![显示“组”菜单的屏幕截图](/assets/images/help/projects-v2/group-menu.png)

现在，在组之间移动议题以更改其优先级。

1. 选择议题.
2. 将议题拖放到另一个优先级组。 当您这样做时，议题的优先级将更改为其新组的优先级。

![在组之间移动议题](/assets/images/help/projects/move_between_group.gif)

## 保存优先级视图

在上一步按优先级对议题分组时，项目显示一个指示来显示视图已修改。 保存这些更改，以便您的协作者也能看到按优先级分组的任务。

{% data reusables.projects.save-view %}

您可以与您的团队共享 URL，让每个人就项目优先级保持一致。

保存视图后，打开项目的任何人都将看到保存的视图。 在这里按优先级分组，但您还可以添加其他修饰符，如排序、筛选或布局。 接下来，您将创建一个修改了布局的新视图。

## 添加板布局

要查看项目议题的进度，您可以切换到板布局。

板布局基于状态字段，因此会指定项目中每个议题的状态。

![示例状态](/assets/images/help/projects/status_example.png)

然后，创建新视图。

{% data reusables.projects.new-view %}

接下来，切换到板布局。

{% data reusables.projects.open-view-menu %}
1. 在“布局”下，单击“板”。
   ![显示“布局”选项的屏幕截图](/assets/images/help/projects-v2/table-or-board.png)

![示例优先级](/assets/images/help/projects/example_board.png)

更改布局时，项目显示一个指示来显示视图已修改。 保存此视图，以便您和您的协作者能够轻松地访问它。

{% data reusables.projects.save-view %}

要指示视图的目的，请给它一个描述性名称。

{% data reusables.projects.open-view-menu %}
1. 单击 {% octicon "pencil" aria-label="the pencil icon" %}“重命名视图”。
   ![显示“重命名”菜单项的屏幕截图](/assets/images/help/projects-v2/rename-view.png)
1. 键入视图的新名称。
1. 要保存更改，请按<kbd>回车键</kbd>。

![示例优先级](/assets/images/help/projects/project-view-switch.gif)

## 配置内置自动化

最后，添加内置工作流，以在将项添加到项目时将状态设置为“待办”。

1. 在右上角，单击 {% octicon "kebab-horizontal" aria-label="The menu icon" %} 以打开菜单。
  ![显示菜单图标的屏幕截图](/assets/images/help/projects-v2/open-menu.png)
1. 在菜单中，单击“{% octicon "workflow" aria-label="The workflow icon" %} 工作流”。
  ![显示“工作流”菜单项的屏幕截图](/assets/images/help/projects-v2/workflows-menu-item.png)
1. 在“默认工作流”下，单击“添加到项目的项” 。
  ![显示默认工作流的屏幕截图](/assets/images/help/projects-v2/default-workflows.png)
1. 在“何时”旁边，确保同时选择了 `issues` 和 `pull requests`。
  ![显示工作流的“何时”配置的屏幕截图](/assets/images/help/projects-v2/workflow-when.png)
1. 在“设置”旁边，选择“状态: 待办” 。
  ![显示工作流的“设置”配置的屏幕截图](/assets/images/help/projects-v2/workflow-set.png)
1. 单击“禁用”切换以启用工作流。
  ![显示工作流的“启用”控件的屏幕截图](/assets/images/help/projects-v2/workflow-enable.png)

## 延伸阅读

- [为项目添加项](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project)
- [自定义视图](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)
