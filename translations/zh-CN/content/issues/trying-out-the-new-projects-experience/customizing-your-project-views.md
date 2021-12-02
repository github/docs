---
title: 自定义项目（测试版）视图
intro: 通过更改项目中的布局、分组、排序和筛选器来显示您需要的信息。
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Projects
---

{% data reusables.projects.projects-beta %}

## Project command palette

Use the project command palette to quickly change settings and run commands in your project.

1. {% data reusables.projects.open-command-palette %}
2. 开始键入命令的任何部分或浏览命令面板窗口以查找命令。 更多命令示例请参阅下面的章节。

## 更改布局

您可以将项目视为表或板。

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Switch layout"。
3. 选择所需的命令（例如："Switch layout: Table"）。
3. 或者，选择视图名称旁边的下拉菜单，然后点击 **Table（表）** 或 **Board（板）**。

## 显示或隐藏字段

You can show or hide a specific field.

In table layout:

1. {% data reusables.projects.open-command-palette %}
2. 开始键入要执行的操作（"show" 或 "hide"）或字段名称。
3. 选择所需的命令（例如："Show: Milestone"）。
4. 或者，单击表格右侧的 {% octicon "plus" aria-label="the plus icon" %}。 在显示的下拉菜单中，指示要显示或隐藏哪些字段。 {% octicon "check" aria-label="check icon" %} 指示显示哪些字段。
5. 或者，选择字段名称旁边的下拉菜单，然后点击 **Hide field（隐藏字段）**。

In board layout:

1. 选择视图名称旁边的下拉菜单。
2. Under **configuration**, click {% octicon "list-unordered" aria-label="the unordered list icon" %}.
3. In the menu that appears, select fields to add them and deselect fields to remove them from the view.

## 重新排序字段

您可以更改字段的顺序。

1. 单击字段标题。
2. 单击时，将字段拖动到所需的位置。

## 重新排序行

在表布局中，您可以更改行的顺序。

1. 点击行开头的数字。
2. 单击时，将行拖动到所需的位置。

## 排序

在表布局中，您可以按字段值排序项。

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Sort by" 或您想要排序的字段的名称。
3. 选择所需的命令（例如："Sort by: Assignees, asc"）。
4. 或者，选择您要排序的字段名称旁边的下拉菜单，然后单击 **Sort ascending（升序排序）**或 **Sort descending（降序排序）**。

{% note %}

**注意：**对表格排序时，您不能手动重新排序行。

{% endnote %}

按照类似步骤删除排序。

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Remove sort-by"。
3. 选择 "Remove sort-by" 命令。
4. 或者，选择视图名称旁边的下拉菜单，然后单击显示当前排序的菜单项。

## 组

In the table layout, you can group items by a custom field value. 对项分组时，如果将项拖动到新组，则应用该组的值。 例如， 如果您是按 `Status` 分组，然后将一个状态为 `In progress` 的项拖动到 `Done` 组，则该项的状态将切换到 `Done`。

{% note %}

**Note:** Currently, you cannot group by title, assignees, repository or labels.

{% endnote %}

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Group by" 或您想要分组的字段的名称。
3. 选择所需的命令（例如 "Group by: Status"）。
4. 或者，选择您要分组的字段名称旁边的下拉菜单，然后单击 **Group by values（按值分组）**。

按照类似步骤删除分组。

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Remove group-by"。
3. 选择 "Remove group-by" 命令。
4. 或者，选择视图名称旁边的下拉菜单，然后单击显示当前分组的菜单项。

## 过滤，过滤器

Click {% octicon "search" aria-label="the search icon" %} at the top of the table to show the "Filter by keyword or field" bar. Start typing the field name and value that you want to filter by. 当您输入时，可能的值将会出现。

- To filter for multiple values, separate the values with a comma. For example `label:"good first issue",bug` will list all issues with a label `good first issue` or `bug`.
- To filter for the absence of a specific value, place `-` before your filter. For example, `-label:"bug"` will only show items that do not have the label `bug`.
- To filter for the absence of all values, enter `no:` followed by the field name. For example, `no:assignee` will only show items that do not have an assignee.
- To filter by state, enter `is:`. For example, `is: issue` or `is:open`.
- 多个过滤条件之间用逗号分隔。 For example, `status:"In progress" -label:"bug" no:assignee` will show only items that have a status of `In progress`, do not have the label `bug`, and do not have an assignee.

Alternatively, use the command palette.

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Filter by" 或您想要筛选的字段的名称。
3. 选择所需的命令（例如 "Filter by Status"）。
4. 输入您想要筛选的值（例如："In progress"）。 You can also filter for the absence of specific values (for example: "Exclude status") or the absence of all values (for example: "No status").

In board layout, you can click on item data to filter for items with that value. For example, click on an assignee to show only items for that assignee. To remove the filter, click the item data again.

## 保存视图

保存的视图允许您快速查看项目的特定方面。 例如，您可能有以下内容：
- 显示所有未启动项目的视图（按“状态”过滤）。
- 显示每个团队成员工作量的视图 (按“受理人”分组，按“状态”过滤）。
- 显示具有最早目标运送日期的项的视图（按日期字段排序）。

以下步骤演示如何添加新视图：

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "New view"（创建新视图）或 "Duplicate view"（复制当前视图）。
3. 选择所需的命令。
4. 或者，点击右侧视图旁边的 {% octicon "plus" aria-label="the plus icon" %} **New view（新视图）**。
5. 或者，选择视图名称旁边的下拉菜单，然后点击 **Duplicate view（复制视图）**。

更改视图时，视图名称旁边会显示一个点，以指示视图已修改。 如果您不想保存更改，可以忽略此指示。 要为所有项目成员保存视图：

1. {% data reusables.projects.open-command-palette %}
1. 开始键入 "Save view" 或 "Save changes to new view"。
1. 选择所需的命令。
1. 或者，选择视图名称旁边的下拉菜单，然后点击 **Save view（保存视图）** 或 **Save changes to new view（保存更改到新视图）**。

要重命名视图，双击视图名称并输入所需名称。

要删除视图：

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Delete view"。
3. 选择所需的命令。
4. 或者，选择视图名称旁边的下拉菜单，然后点击 **Delete view（删除视图）**。

## 延伸阅读

- "[关于项目（测试版）](/issues/trying-out-the-new-projects-experience/about-projects)"
- "[创建项目（测试版）](/issues/trying-out-the-new-projects-experience/creating-a-project)"
