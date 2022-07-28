---
title: '{% data variables.product.prodname_projects_v2 %} 快速入门'
intro: 'Experience the speed, flexibility, and customization of {% data variables.product.prodname_projects_v2 %} by creating a project in this interactive guide.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/quickstart
type: quick_start
topics:
  - Projects
---

## 简介

This guide demonstrates how to use {% data variables.product.prodname_projects_v2 %} to plan and track work. 在本指南中，您将创建一个新项目，并添加自定义字段来跟踪任务的优先级。 您还将学习如何创建保存的视图，帮助您与协作者交流优先事项和进度。

## 基本要求

您可以创建组织项目或用户项目。 要创建组织项目，您需要一个 {% data variables.product.prodname_dotcom %} 组织。 有关创建组织的更多信息，请参阅“[从头开始创建新组织](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)”。

在本指南中，您将把组织拥有的存储库（对于组织项目）或您拥有的存储库（对于用户项目）的现有议题添加到新项目中。 有关创建议题的更多信息，请参阅“[创建议题](/issues/tracking-your-work-with-issues/creating-an-issue)”。

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

For more information and other ways to add issues to your project, or about other items you can add to your project, see "[Adding items to your project](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project)."

## 向项目添加草稿议题

接下来，将草稿议题添加到项目中。

{% data reusables.projects.add-draft-issue %}

## Adding an iteration field

Next, create an iteration field so you can plan and track your work over repeating blocks of time. Iterations can be configured to suit how you and your team works, with customizable lengths and the ability to insert breaks.

{% data reusables.projects.new-field %}
1. Select **Iteration** ![Screenshot showing the iteration option](/assets/images/help/projects-v2/new-field-iteration.png)
3. 要更改每次迭代的持续时间，请键入新数字，然后选择下拉列表并单击**天**或**周**。 ![Screenshot showing the iteration duration](/assets/images/help/projects-v2/iteration-field-duration.png)
4. 单击 **Save（保存）**。 ![Screenshot showing save button](/assets/images/help/projects-v2/new-field-save-and-create.png)

## 创建字段来跟踪优先级

Now, create a custom field named `Priority` and containing the values: `High`, `Medium`, or `Low`.

{% data reusables.projects.new-field %}
1. Select **Single select** ![Screenshot showing the single select option](/assets/images/help/projects-v2/new-field-single-select.png)
1. Below "Options", type the first option, "High". ![Screenshot showing the single select option](/assets/images/help/projects-v2/priority-example.png)
1. To add additional fields, for "Medium" and "Low", click **Add option**.
1. 单击 **Save（保存）**。 ![Screenshot showing save button](/assets/images/help/projects-v2/new-field-save.png)

指定项目中所有议题的优先级。

![示例优先级](/assets/images/help/projects/priority_example.png)

## 按优先级对议题分组

接下来，按优先级对项目中的所有项进行分组，以便于专注于高优先级项。

{% data reusables.projects.open-view-menu %}
1. Click {% octicon "rows" aria-label="the rows icon" %} **Group**. ![Screenshot showing the group menu item](/assets/images/help/projects-v2/group-menu-item.png)
1. Click **Priority**. ![Screenshot showing the group menu](/assets/images/help/projects-v2/group-menu.png)

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
1. Under "Layout", click **Board**. ![Screenshot showing layout option](/assets/images/help/projects-v2/table-or-board.png)

![示例优先级](/assets/images/help/projects/example_board.png)

更改布局时，项目显示一个指示来显示视图已修改。 保存此视图，以便您和您的协作者能够轻松地访问它。

{% data reusables.projects.save-view %}

要指示视图的目的，请给它一个描述性名称。

{% data reusables.projects.open-view-menu %}
1. Click {% octicon "pencil" aria-label="the pencil icon" %} **Rename view**. ![Screenshot showing the rename menu item](/assets/images/help/projects-v2/rename-view.png)
1. Type the new name for your view.
1. To save changes, press <kbd>Return</kbd>.

![示例优先级](/assets/images/help/projects/project-view-switch.gif)

## 配置内置自动化

最后，添加内置工作流程，以便在将项添加到项目时状态设置为**待办事项** 。

1. In the top-right, click {% octicon "kebab-horizontal" aria-label="The menu icon" %} to open the menu. ![Screenshot showing the menu icon](/assets/images/help/projects-v2/open-menu.png)
1. 在菜单中，单击 {% octicon "workflow" aria-label="The workflow icon" %} **Workflows（工作流程）**。 ![Screenshot showing the 'Workflows' menu item](/assets/images/help/projects-v2/workflows-menu-item.png)
1. 在 **Default workflows（默认工作流程）**下，单击 **Item added to project（已添加到项目的项）**。 ![Screenshot showing default workflows](/assets/images/help/projects-v2/default-workflows.png)
1. 在 **When（何时）**旁边，确保同时选择 `issues（议题）`和 `pull requests（拉取请求）`。 ![Screenshot showing the "when" configuration for a workflow](/assets/images/help/projects-v2/workflow-when.png)
1. 在 **Set（设置）**旁边，选择 **Status:Todo（状态：待办事项）**。 ![Screenshot showing the "set" configuration for a workflow](/assets/images/help/projects-v2/workflow-set.png)
1. 单击 **Disabled（已禁用）**切换开关以启用工作流程。 ![Screenshot showing the "enable" control for a workflow](/assets/images/help/projects-v2/workflow-enable.png)

## 延伸阅读

- "[Adding items to your project](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project)"
- "[Customizing a view](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)"
