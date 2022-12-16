---
title: 项目快速开始（测试版）
intro: 通过在此交互式指南中创建项目来体验项目（测试版）的速度、灵活性和自定义。
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
- Projects
ms.openlocfilehash: 3baf341d38b59e20e6fe1e677e338d6bec1d57da
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: "145128651"
---
{% data reusables.projects.projects-beta %}

## <a name="introduction"></a>简介

本指南演示如何使用项目（测试版）规划和跟踪工作。 在本指南中，您将创建一个新项目，并添加自定义字段来跟踪任务的优先级。 您还将学习如何创建保存的视图，帮助您与协作者交流优先事项和进度。

## <a name="prerequisites"></a>先决条件

您可以创建组织项目或用户项目。 要创建组织项目，您需要一个 {% data variables.product.prodname_dotcom %} 组织。 有关创建组织的详细信息，请参阅“[从头开始创建新组织](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)”。

在本指南中，您将把组织拥有的存储库（对于组织项目）或您拥有的存储库（对于用户项目）的现有议题添加到新项目中。 有关创建问题的详细信息，请参阅“[创建问题](/issues/tracking-your-work-with-issues/creating-an-issue)”。

## <a name="creating-a-project"></a>创建项目

首先，创建组织项目或用户项目。

### <a name="creating-an-organization-project"></a>创建组织项目

{% data reusables.projects.create-project %}

### <a name="creating-a-user-project"></a>创建用户项目

{% data reusables.projects.create-user-project %}

## <a name="setting-your-project-description-and-readme"></a>设置项目描述和 README

{% data reusables.projects.project-description %}

## <a name="adding-issues-to-your-project"></a>为您的项目添加议题

接下来，在项目中添加一些议题。

当您的新项目初始化时，它会提示您为项目添加事项。 如果您丢失此视图或想稍后添加更多议题，请将光标放在项目底部一行 {% octicon "plus" aria-label="plus icon" %} 的旁边。

1. 键入 `#`。
2. 选择议题所在的仓库。 要缩小选项范围，您可以开始键入仓库名称的一部分。
3. 选择您的议题。 要缩小选项范围，您可以开始键入议题标题的一部分。

重复上述步骤几次，以向项目添加多个议题。

有关将问题添加到项目的其他方法或可以添加到项目的其他项的详细信息，请参阅“[创建项目](/issues/trying-out-the-new-projects-experience/creating-a-project#adding-items-to-your-project)”。

## <a name="adding-draft-issues-to-your-project"></a>向项目添加草稿议题

接下来，将草稿议题添加到项目中。

1. 将光标放在项目底部一行，{% octicon "plus" aria-label="plus icon" %} 的旁边。
1. 键入想法，然后按 Enter 键。
1. 单击草稿议题的标题。 在出现的 Markdown 输入框中，输入有关你的想法的更多信息，然后单击“保存”。

## <a name="creating-a-field-to-track-priority"></a>创建字段来跟踪优先级

现在，创建一个名为 `Priority` 的自定义字段来包含以下值：`High`、`Medium` 或 `Low`。

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Create new field" 的任何部分。
3. 选择“创建新字段”。
4. 在出现的弹出窗口文本框中输入 `Priority`。
5. 在下拉列表中，选择“单选”。
6. 添加 `High`、`Medium` 和 `Low` 选项。 您还可以在选项中包含表情符号。
   ![新建单选字段示例](/assets/images/help/projects/new-single-select-field.png)
7. 单击“ **保存**”。

指定项目中所有议题的优先级。

![示例优先级](/assets/images/help/projects/priority_example.png)

## <a name="grouping-issues-by-priority"></a>按优先级对议题分组

接下来，按优先级对项目中的所有项进行分组，以便于专注于高优先级项。

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Group by" 的任何部分。
3. 选择“分组依据: 优先级”。

现在，在组之间移动议题以更改其优先级。

1. 选择议题.
2. 将议题拖放到另一个优先级组。 当您这样做时，议题的优先级将更改为其新组的优先级。

![在组之间移动议题](/assets/images/help/projects/move_between_group.gif)

## <a name="saving-the-priority-view"></a>保存优先级视图

在上一步按优先级对议题分组时，项目显示一个指示来显示视图已修改。 保存这些更改，以便您的协作者也能看到按优先级分组的任务。

1. 选择视图名称旁边的下拉菜单。
2. 单击“保存更改”。 

要指示视图的目的，请给它一个描述性名称。

1. 将光标放在当前视图名称视图 1 上。
2. 将现有文本替换为新名称 `Priorities`。

您可以与您的团队共享 URL，让每个人就项目优先级保持一致。

保存视图后，打开项目的任何人都将看到保存的视图。 在这里按优先级分组，但您还可以添加其他修饰符，如排序、筛选或布局。 接下来，您将创建一个修改了布局的新视图。

## <a name="adding-a-board-layout"></a>添加板布局

要查看项目议题的进度，您可以切换到板布局。

板布局基于状态字段，因此会指定项目中每个议题的状态。

![示例状态](/assets/images/help/projects/status_example.png)

然后，创建新视图。

1. 单击最右侧视图旁边的“{% octicon "plus" aria-label="the plus icon" %} 新建视图”。

接下来，切换到板布局。

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Switch layout: Board" 的任何部分。
3. 选择“切换布局: 板”。
   ![示例优先级](/assets/images/help/projects/example_board.png)

更改布局时，项目显示一个指示来显示视图已修改。 保存此视图，以便您和您的协作者能够轻松地访问它。

1. 选择视图名称旁边的下拉菜单。
2. 单击“保存更改”。 

要指示视图的目的，请给它一个描述性名称。

1. 将光标放在当前视图名称视图 2 上。
2. 将现有文本替换为新名称 `Progress`。

![示例优先级](/assets/images/help/projects/project-view-switch.gif)

## <a name="configure-built-in-automation"></a>配置内置自动化

最后，添加内置工作流，以在将项添加到项目时将状态设置为“待办”。

1. 在项目中，单击 {% octicon "workflow" aria-label="the workflow icon" %}。
2. 在“默认工作流”下，单击“添加到项目的项” 。
3. 在“何时”旁边，确保同时选择了 `issues` 和 `pull requests`。
4. 在“设置”旁边，选择“状态: 待办” 。
5. 单击“禁用”切换以启用工作流。

## <a name="next-steps"></a>后续步骤

您可以将项目用于广泛的用途。 例如：

- 跟踪发布工作
- 计划冲刺
- 优先处理积压工作

以下是一些帮助你对 {% data variables.product.prodname_github_issues %} 执行后续步骤的有用资源：

- 若要提供有关项目（beta 版本）体验的反馈，请转到 [GitHub 反馈存储库](https://github.com/github/feedback/discussions/categories/issues-feedback)。
- 若要详细了解项目如何帮助你进行规划和跟踪，请参阅“[关于项目](/issues/trying-out-the-new-projects-experience/about-projects)”。
- 若要详细了解可添加到项目中的字段和项，请参阅“[创建项目](/issues/trying-out-the-new-projects-experience/creating-a-project)”。
- 若要了解显示所需信息的更多方法，请参阅“[自定义项目视图](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)”。
