---
title: 创建项目（测试版）
intro: 了解如何创建项目、填充项目并添加自定义字段。
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Projects
---

项目是可自定义的项集合，可随 {% data variables.product.company_short %} 数据保持最新状态。 您的项目可以跟踪议题、拉取请求以及您加入的想法。 您可以添加自定义字段并为特定目的创建视图。

{% data reusables.projects.projects-beta %}

## 创建项目

### Creating an organization project

{% data reusables.projects.create-project %}

### Creating a user project

{% data reusables.projects.create-user-project %}

## 为您的项目添加项

您的项目可以跟踪草稿议题、议题和拉取请求。

### 创建草稿议题

草稿议题有助于快速捕获想法。

1. 将光标放在项目底部一行，{% octicon "plus" aria-label="plus icon" %} 的旁边。
1. 输入您的想法，然后按 **Enter**。
1. To add body text, click on the title of the draft issue. In the markdown input box that appears, enter the text for the draft issue body, then click **Save**.

Draft issues can have a title, text body, assignees, and any custom fields from your project. In order to populate the repository, labels, or milestones for a draft issue, you must first convert the draft issue to an issue. For more information, see "[Converting draft issues to issues](#converting-draft-issues-to-issues)."

{% note %}

**Note**: Users will not receive notifications when they are assigned to or mentioned in a draft issue unless the draft issue is converted to an issue.

{% endnote %}

### 议题和拉取请求

#### 粘贴议题或拉取请求的 URL

1. 将光标放在项目底部一行，{% octicon "plus" aria-label="plus icon" %} 的旁边。
1. 粘贴议题或拉取请求的 URL。

#### 搜索议题或拉取请求

1. 将光标放在项目底部一行，{% octicon "plus" aria-label="plus icon" %} 的旁边。
2. Enter <kbd>#</kbd>.
3. 选择拉取请求或议题所在的仓库。 您可以输入仓库名称的一部分来缩小选项范围。
4. 选择议题或拉取请求。 您可以键入标题的一部分以缩小选项范围。

#### 从议题或拉取请求中分配项目

1. 导航到要添加到项目的议题或拉取请求。
2. 在侧边栏中，单击 **Projects（项目）**。
3. 选择要添加议题或拉取请求的项目。
4. （可选）填充自定义字段。

   ![项目侧边栏](/assets/images/help/issues/project_side_bar.png)

## Converting draft issues to issues

In table layout:

1. Click the {% octicon "triangle-down" aria-label="the item menu" %} on the draft issue that you want to convert.
2. Select **Convert to issue**.
3. Select the repository that you want to add the issue to.
4. Alternatively, edit the `labels`, `milestone`, or `repository` fields of the draft issue that you want to convert.

In board layout:

1. Click the {% octicon "kebab-horizontal" aria-label="the item menu" %} on the draft issue that you want to convert.
2. Select **Convert to issue**.
3. Select the repository that you want to add the issue to.

## Removing items from your project

You can archive an item to keep the context about the item in the project but remove it from the project views. You can delete an item to remove it from the project entirely.

1. Select the item(s) to archive or delete. To select multiple items, do one of the following:
     - <kbd>Command</kbd>+Click (Mac) or <kbd>Ctrl</kbd>+Click (Windows/Linux) each item.
     - Select an item then <kbd>Shift</kbd>+<kbd>↑</kbd> or <kbd>Shift</kbd>+<kbd>↓</kbd> to select additional items above or below the initially selected item.
     - Select an item then <kbd>Shift</kbd>+Click another item to select all items between the two items.
     - Enter <kbd>Command</kbd>+<kbd>A</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>A</kbd> (Windows/Linux) to select all items in a column in a board layout or all items in a table layout.
2. To archive all selected items, enter <kbd>E</kbd>. To delete all selected items, enter <kbd>Del</kbd>. Alternatively, select the {% octicon "triangle-down" aria-label="the item menu" %} (in table layout) or the {% octicon "kebab-horizontal" aria-label="the item menu" %} (in board layout), then select the desired action.

You can restore archived items but not deleted items. For more information, see [Restoring archived items](#restoring-archived-items).

## Restoring archived items

To restore an archived item, navigate to the issue or pull request. In the project side bar on the issue or pull request, click **Restore** for the project that you want to restore the item to. Draft issues cannot be restored.

## 添加字段

随着字段值的变化，它们会自动同步，以便您的项目及其跟踪的项保持最新。

### 显示现有字段

Your project tracks up-to-date information about issues and pull requests, including any changes to the title, assignees, labels, milestones, repository, reviewers, and linked pull requests. 当项目初始化时，会显示“标题”和“受理人”；其他字段隐藏。 您可以更改项目中这些字段的可见性。

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "show"。
3. 选择所需的命令（例如： "Show: Repository"）。

或者，您可以在界面中执行以下操作：

1. 单击最右侧字段标题中的 {% octicon "plus" aria-label="the plus icon" %} 。 将显示带有项目字段的下拉菜单。 ![显示或隐藏字段](/assets/images/help/issues/projects_fields_menu.png)
2. 选择您想要显示或隐藏的字段。 {% octicon "check" aria-label="check icon" %} 指示显示哪些字段。

### 添加自定义字段

您可以添加自定义字段到项目。 自定义字段将显示在项目中议题和拉取请求的侧栏。

Custom fields can be text, number, date, single select, or iteration:

- Text: The value can be any text.
- Number: The value must be a number.
- Date: The value must be a date.
- Single select: The value must be selected from a set of specified values.
- Iteration: The value must be selected from a set of date ranges (iterations). Iterations in the past are automatically marked as "completed", and the iteration covering the current date range is marked as "current".

1. {% data reusables.projects.open-command-palette %} 开始输入 "Create new field" 的任何部分。 当 "Create new field" 显示在命令板中时，选择它。
2. 或者，单击最右侧字段标题中的 {% octicon "plus" aria-label="the plus icon" %} 。 将显示带有项目字段的下拉菜单。 单击 **New field（新建字段）**。
3. 将显示一个弹出窗口，供您输入有关新字段的信息。 ![新建字段](/assets/images/help/issues/projects_new_field.png)
4. 在文本框中，输入新字段的名称。
5. 选择下拉菜单并点击所需的类型。
6. If you specified **Single select** as the type, enter the options.
7. If you specified **Iteration** as the type, enter the start date of the first iteration and the duration of the iteration. Three iterations are automatically created, and you can add additional iterations on the project's settings page.

You can later edit the drop down options for single select and iteration fields.

{% data reusables.projects.project-settings %}
1. Under **Fields**, select the field that you want to edit.
1. For single select fields, you can add, delete, or reorder the options.
2. For iteration fields, you can add or delete iterations, change iteration names, and change the start date and duration of the iteration.

## Customizing your views

您可以将项目视为表格或板、按字段对项分组、筛选项，等等。 更多信息请参阅“[自定义项目（测试版）视图](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)”。

## Configuring built-in automation

{% data reusables.projects.about-workflows %}

You can enable or disable the built-in workflows for your project.

{% data reusables.projects.enable-basic-workflow %}

## Adding your project to a repository

You can list relevant projects in a repository. You can only list projects that are owned by the same user or organization that owns the repository.

In order for repository members to see a project listed in a repository, they must have visibility for the project. For more information, see "[Managing the visibility of your projects (beta)](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects)" and "[Managing access to projects (beta)](/issues/trying-out-the-new-projects-experience/managing-access-to-projects)."

1. On {% data variables.product.prodname_dotcom %}, navigate to the main page of your repository.
1. 单击 {% octicon "table" aria-label="the project icon" %} **Projects（项目）**。
1. Click **Projects (Beta)** in the side bar.
1. Click **Add project**.
1. In the search bar that appears, search for projects that are owned by the same user or organization that owns the repository.
1. Click on a project to list it in your repository.
