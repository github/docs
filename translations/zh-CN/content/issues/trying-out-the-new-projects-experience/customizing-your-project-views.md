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

## Changing the project layout

您可以将项目视为表或板。

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Switch layout"。
3. Choose the required command. For example, **Switch layout: Table**.
3. Alternatively, click the drop-down menu next to a view name and click **Table** or **Board**.

## Showing and hiding fields

You can show or hide a specific field.

In table layout:

1. {% data reusables.projects.open-command-palette %}
2. 开始键入要执行的操作（"show" 或 "hide"）或字段名称。
3. Choose the required command. For example, **Show: Milestone**.
4. 或者，单击表格右侧的 {% octicon "plus" aria-label="the plus icon" %}。 在显示的下拉菜单中，指示要显示或隐藏哪些字段。 {% octicon "check" aria-label="check icon" %} 指示显示哪些字段。
5. Alternatively, click the drop-down menu next to the field name and click **Hide field**.

In board layout:

1. Click the drop-down menu next to the view name.
2. Under **configuration**, click {% octicon "list-unordered" aria-label="the unordered list icon" %}.
3. In the menu that's displayed, select fields to add them and deselect fields to remove them from the view.

## Reordering fields

您可以更改字段的顺序。

1. 单击字段标题。
2. While clicking, drag the field to the required location.

## Reordering rows

在表布局中，您可以更改行的顺序。

1. 点击行开头的数字。
2. While clicking, drag the row to the required location.

## Sorting by field values

在表布局中，您可以按字段值排序项。

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Sort by" 或您想要排序的字段的名称。
3. Choose the required command. For example, **Sort by: Assignees, asc**.
4. Alternatively, click the drop-down menu next to the field name that you want to sort by and click **Sort ascending** or **Sort descending**.

{% note %}

**注意：**对表格排序时，您不能手动重新排序行。

{% endnote %}

按照类似步骤删除排序。

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Remove sort-by"。
3. Choose **Remove sort-by**.
4. Alternatively, click the drop-down menu next to the view name and click the menu item that indicates the current sort.

## Grouping by field values

In the table layout, you can group items by a custom field value. 对项分组时，如果将项拖动到新组，则应用该组的值。 For example, if you group by "Status" and then drag an item with a status of `In progress` to the `Done` group, the status of the item will switch to `Done`.

{% note %}

**Note:** Currently, you cannot group by title, assignees, repository or labels.

{% endnote %}

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Group by" 或您想要分组的字段的名称。
3. Choose the required command. For example, **Group by: Status**.
4. Alternatively, click the drop-down menu next to the field name that you want to group by and click **Group by values**.

按照类似步骤删除分组。

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Remove group-by"。
3. Choose **Remove group-by**.
4. Alternatively, click the drop-down menu next to the view name and click the menu item that indicates the current grouping.

## Filtering rows

Click {% octicon "search" aria-label="the search icon" %} at the top of the table to show the "Filter by keyword or field" bar. Start typing the field name and value that you want to filter by. 当您输入时，可能的值将会出现。

- To filter for multiple values, separate the values with a comma. For example `label:"good first issue",bug` will list all issues with a label `good first issue` or `bug`.
- To filter for the absence of a specific value, place `-` before your filter. For example, `-label:"bug"` will only show items that do not have the label `bug`.
- To filter for the absence of all values, enter `no:` followed by the field name. For example, `no:assignee` will only show items that do not have an assignee.
- To filter by state, enter `is:`. For example, `is: issue` or `is:open`.
- 多个过滤条件之间用逗号分隔。 For example, `status:"In progress" -label:"bug" no:assignee` will show only items that have a status of `In progress`, do not have the label `bug`, and do not have an assignee.

Alternatively, use the command palette.

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Filter by" 或您想要筛选的字段的名称。
3. Choose the required command. For example, **Filter by Status**.
4. Enter the value that you want to filter for. For example: "In progress". You can also filter for the absence of specific values (for example, choose "Exclude status" then choose a status) or the absence of all values (for example, "No status").

In board layout, you can click on item data to filter for items with that value. For example, click on an assignee to show only items for that assignee. To remove the filter, click the item data again.

## Creating a project view

Project views allow you to quickly view specific aspects of your project. Each view is displayed on a separate tab in your project.

For example, you can have:
- A view that shows all items not yet started (filter on "Status").
- A view that shows the workload for each team (group by a custom "Team" field).
- A view that shows the items with the earliest target ship date (sort by a date field).

To add a new view:

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "New view"（创建新视图）或 "Duplicate view"（复制当前视图）。
3. Choose the required command.
4. 或者，点击右侧视图旁边的 {% octicon "plus" aria-label="the plus icon" %} **New view（新视图）**。
5. Alternatively, click the drop-down menu next to a view name and click **Duplicate view**.

The new view is automatically saved.

## Saving changes to a view

When you make changes to a view - for example, sorting, reordering, filtering, or grouping the data in a view - a dot is displayed next to the view name to indicate that there are unsaved changes.

![Unsaved changes indicator](/assets/images/help/projects/unsaved-changes.png)

如果您不想保存更改，可以忽略此指示。 No one else will see your changes.

To save the current configuration of the view for all project members:
1. {% data reusables.projects.open-command-palette %}
1. 开始键入 "Save view" 或 "Save changes to new view"。
1. Choose the required command.
1. Alternatively, click the drop-down menu next to a view name and click **Save view** or **Save changes to new view**.

## Reordering saved views

To change the order of the tabs that contain your saved views, click and drag a tab to a new location.

The new tab order is automatically saved.

## Renaming a saved view

To rename a view:
1. Double click the name in the project tab.
1. Change the name.
1. Press Enter, or click outside of the tab.

The name change is automatically saved.

## Deleting a saved view

要删除视图：
1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Delete view"。
3. Choose the required command.
4. Alternatively, click the drop-down menu next to a view name and click **Delete view**.

## 延伸阅读

- "[关于项目（测试版）](/issues/trying-out-the-new-projects-experience/about-projects)"
- "[创建项目（测试版）](/issues/trying-out-the-new-projects-experience/creating-a-project)"
