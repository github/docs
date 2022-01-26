---
title: プロジェクト（ベータ）のビューのカスタマイズ
intro: プロジェクトのレイアウト、グループ化、ソート、フィルタを変更して、必要な情報を表示させてください。
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
2. コマンドの一部を入力し始めるか、コマンドパレットウィンドウをナビゲートしてコマンドを見つけてください。 さらなるコマンドの例については、次のセクションを参照してください。

## Changing the project layout

プロジェクトを、テーブルまたはボードとして見ることができます。

1. {% data reusables.projects.open-command-palette %}
2. "Switch layout"と入力し始めてください。
3. Choose the required command. For example, **Switch layout: Table**.

Alternatively, click {% octicon "triangle-down" aria-label="the drop-down icon" %} next to a view name and click **Table** or **Board**.

## Showing and hiding fields

You can show or hide a specific field.

### Showing and hiding fields in table layout

1. {% data reusables.projects.open-command-palette %}
2. 行いたいアクション（"show"もしくは"hide"）もしくはフィールド名を入力し始めてください。
3. Choose the required command. For example, **Show: Milestone**.

あるいは、表の右の{% octicon "plus" aria-label="the plus icon" %}をクリックしてください。 表示されるドロップダウンメニューで、表示または非表示にするフィールドを指定してください。 {% octicon "check" aria-label="check icon" %}は、表示されるフィールドを示します。

Alternatively, click {% octicon "triangle-down" aria-label="the drop-down icon" %} next to the field name and click **Hide field**.

### Showing and hiding fields in board layout

1. Click {% octicon "triangle-down" aria-label="the drop-down icon" %} next to the view name.
2. Under **configuration**, click {% octicon "list-unordered" aria-label="the unordered list icon" %}.
3. In the menu that's displayed, select fields to add them and deselect fields to remove them from the view.

## Reordering fields

フィールドの順序を変えることができます。

1. フィールドのヘッダをクリックしてください。
2. While clicking, drag the field to the required location.

## Reordering rows

テーブルレイアウトでは、行の順序を変更できます。

1. 行の先頭にある数字をクリックしてください。
2. While clicking, drag the row to the required location.

## Sorting by field values

テーブルレイアウトでは、フィールドの値でアイテムをソートできます。

1. {% data reusables.projects.open-command-palette %}
2. "Sort by"あるいはソートの基準にしたいフィールド名を入力し始めてください。
3. Choose the required command. For example, **Sort by: Assignees, asc**.

Alternatively, click {% octicon "triangle-down" aria-label="the drop-down icon" %} next to the field name that you want to sort by and click **Sort ascending** or **Sort descending**.

{% note %}

**ノート:** テーブルがソートされると、手動で行を並び替えることはできなくなります。

{% endnote %}

ソートを解除するには、同じようなステップに従ってください。

1. {% data reusables.projects.open-command-palette %}
2. "Remove sort-by"と入力し始めてください。
3. Choose **Remove sort-by**.

Alternatively, click {% octicon "triangle-down" aria-label="the drop-down icon" %} next to the view name and click the menu item that indicates the current sort.

## Grouping by field values in table layout

In the table layout, you can group items by a custom field value. アイテムがグループ化されると、アイテムを新しいグループにドラッグした場合、そのグループの値が適用されます。 For example, if you group by "Status" and then drag an item with a status of `In progress` to the `Done` group, the status of the item will switch to `Done`. Similarly, when you add a new item to a group, the new item is populated with the value of the group.

{% note %}

**Note:** Currently, you cannot group by title, labels, reviewers, or linked pull requests.

{% endnote %}

1. {% data reusables.projects.open-command-palette %}
2. "Group by" あるいはグループ化に使いたいフィールド名を入力し始めてください。
3. Choose the required command. For example, **Group by: Status**.

Alternatively, click {% octicon "triangle-down" aria-label="the drop-down icon" %} next to the field name that you want to group by and click **Group by values**.

グループを削除するには、同じようなステップに従ってください。

1. {% data reusables.projects.open-command-palette %}
2. "Remove group-by"と入力し始めてください。
3. Choose **Remove group-by**.

Alternatively, click {% octicon "triangle-down" aria-label="the drop-down icon" %} next to the view name and click the menu item that indicates the current grouping.

## Setting the column field in board layout

In the board layout, you choose any single select or iteration field for your columns. If you drag an item to a new column, the value of that column is applied to the dragged item. For example, if you use the "Status" field for your board columns and then drag an item with a status of `In progress` to the `Done` column, the status of the item will switch to `Done`.

1. {% data reusables.projects.open-command-palette %}
1. Start typing "Column field by" or the name of the field you want to use for your columns.
1. Choose the required command. For example, **Column field by: Status**.

Alternatively, click {% octicon "triangle-down" aria-label="the drop-down icon" %} next to the board view that you want to modify and click {% octicon "columns" aria-label="the column icon" %} **Column field**. Then select the field that you want to use for the board columns.

## Filtering items

Click {% octicon "filter" aria-label="the filter icon" %} at the top of the table to show the "Filter by keyword or by field" bar. Start typing the field name and value that you want to filter by. 入力していくと、利用できる値が表示されます。

- To filter for multiple values, separate the values with a comma. For example `label:"good first issue",bug` will list all issues with a label `good first issue` or `bug`.
- To filter for the absence of a specific value, place `-` before your filter. For example, `-label:"bug"` will only show items that do not have the label `bug`.
- To filter for the absence of all values, enter `no:` followed by the field name. For example, `no:assignee` will only show items that do not have an assignee.
- To filter by state, enter `is:`. For example, `is: issue` or `is:open`.
- 複数のフィルタは空白で区切ってください。 For example, `status:"In progress" -label:"bug" no:assignee` will show only items that have a status of `In progress`, do not have the label `bug`, and do not have an assignee.
- To filter for the current iteration of an iteration field, use `@current`. For example, `sprint:@current`.

Alternatively, use the command palette.

1. {% data reusables.projects.open-command-palette %}
2. Filter by"あるいはフィルタリングに使いたいフィールド名を入力し始めてください。
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
2. "New view"（新しいビューを作成する場合）あるいは"Duplicate view"（現在のビューを複製する場合）と入力し始めます。
3. Choose the required command.

あるいは、最も右側のビューの隣にある{% octicon "plus" aria-label="the plus icon" %} **New view（新しいビュー）**をクリックしてください。

Alternatively, click {% octicon "triangle-down" aria-label="the drop-down icon" %} next to a view name and click **Duplicate view**.

The new view is automatically saved.

## Saving changes to a view

When you make changes to a view - for example, sorting, reordering, filtering, or grouping the data in a view - a dot is displayed next to the view name to indicate that there are unsaved changes.

![Unsaved changes indicator](/assets/images/help/projects/unsaved-changes.png)

変更を保存したくなければ、この表示は無視してかまいません。 No one else will see your changes.

To save the current configuration of the view for all project members:
1. {% data reusables.projects.open-command-palette %}
1. "Save view"あるいは"Save changes to new view"と入力し始めてください。
1. Choose the required command.

Alternatively, click {% octicon "triangle-down" aria-label="the drop-down icon" %} next to a view name and click **Save view** or **Save changes to new view**.

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

ビューを削除するには以下のようにしてください。
1. {% data reusables.projects.open-command-palette %}
2. "Delete view"と入力し始めてください。
3. Choose the required command.

Alternatively, click {% octicon "triangle-down" aria-label="the drop-down icon" %} next to a view name and click **Delete view**.

## 参考リンク

- "[About projects (beta)](/issues/trying-out-the-new-projects-experience/about-projects)"
- "[Creating a project (beta)](/issues/trying-out-the-new-projects-experience/creating-a-project)"
