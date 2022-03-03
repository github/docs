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

## 项目命令面板

使用项目命令面板快速更改项目中的设置并运行命令。

1. {% data reusables.projects.open-command-palette %}
2. 开始键入命令的任何部分或浏览命令面板窗口以查找命令。 更多命令示例请参阅下面的章节。

## 更改项目布局

您可以将项目视为表或板。

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Switch layout"。
3. 选择所需的命令。 例如 **Switch layout: Table**。

或者，单击视图名称旁边的 {% octicon "triangle-down" aria-label="the drop-down icon" %} ，然后单击 **Table（表）**或 **Board（板）**。

## 显示和隐藏字段

您可以显示或隐藏特定字段。

### 在表格布局中显示和隐藏字段

1. {% data reusables.projects.open-command-palette %}
2. 开始键入要执行的操作（"show" 或 "hide"）或字段名称。
3. 选择所需的命令。 例如 **Show: Milestone**。

或者，单击表格右侧的 {% octicon "plus" aria-label="the plus icon" %}。 在显示的下拉菜单中，指示要显示或隐藏哪些字段。 {% octicon "check" aria-label="check icon" %} 指示显示哪些字段。

或者，单击字段名称旁边的 {% octicon "triangle-down" aria-label="the drop-down icon" %} ，然后单击 **Hide field（隐藏字段）**。

### 在板布局中显示和隐藏字段

1. 单击视图名称旁边的 {% octicon "triangle-down" aria-label="the drop-down icon" %}。
2. 在 **configuration（配置）**下，单击 {% octicon "list-unordered" aria-label="the unordered list icon" %}。
3. 在显示的菜单中，选择字段可添加它们，取消选择字段则将其从视图中移除。

## 对字段重新排序

您可以更改字段的顺序。

1. 单击字段标题。
2. 点击时，将字段拖到所需位置。

## 对行重新排序

在表布局中，您可以更改行的顺序。

1. 点击行开头的数字。
2. 点击时，将行拖到所需位置。

## 按字段值排序

在表布局中，您可以按字段值排序项。

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Sort by" 或您想要排序的字段的名称。
3. 选择所需的命令。 例如 **Sort by: Assignees, asc**。

或者，单击您要排序的字段名称旁边的 {% octicon "triangle-down" aria-label="the drop-down icon" %}，然后单击 **Sort ascending（升序排序）**或 **Sort descending（降序排序）**。

{% note %}

**注意：**对表格排序时，您不能手动重新排序行。

{% endnote %}

按照类似步骤删除排序。

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Remove sort-by"。
3. 选择 **Remove sort-by（删除排序依据）**。

或者，单击视图名称旁边的 {% octicon "triangle-down" aria-label="the drop-down icon" %} ，然后单击指示当前排序的菜单项。

## 在表布局中按字段值分组

在表布局中，您可以按自定义字段值排序组项。 对项分组时，如果将项拖动到新组，则应用该组的值。 例如， 如果您是按“状态”分组，然后将一个状态为 `In progress` 的项拖动到 `Done` 组，则该项的状态将切换到 `Done`。 同样，当您向组添加新项时，新项将使用组的值填充。

{% note %}

**注意：**目前，您无法按标题、标签、审阅者或链接的拉取请求进行分组。

{% endnote %}

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Group by" 或您想要分组的字段的名称。
3. 选择所需的命令。 例如 **Group by: Status**。

或者，单击要作为分组依据的字段名称旁边的 {% octicon "triangle-down" aria-label="the drop-down icon" %} ，然后单击 **Group by values（按值分组）**。

按照类似步骤删除分组。

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Remove group-by"。
3. 选择 **Remove group-by（删除分组依据）**。

或者，选择视图名称旁边的 {% octicon "triangle-down" aria-label="the drop-down icon" %}，然后单击显示当前分组的菜单项。

## 在板布局中设置列字段

在板布局中，您可以为列选择任何单选或迭代字段。 如果将某个项拖到新列，则该列的值将应用于拖动的项。 例如，如果对板列使用“Status（状态）”字段，然后将状态为 `In progress` 的项拖到 `Done` 列，则该项的状态将切换到 `Done`。

1. {% data reusables.projects.open-command-palette %}
1. 开始键入 "Column field by" 或您想要用于列的字段名称。
1. 选择所需的命令。 例如 **Column field by: Status**。

或者，单击要修改的板视图旁边的 {% octicon "triangle-down" aria-label="the drop-down icon" %} ，然后单击 {% octicon "columns" aria-label="the column icon" %} **Column field（列字段）**。 然后选择要用于板列的字段。

## 过滤项

点击表格顶部的 {% octicon "filter" aria-label="the filter icon" %} 以显示“Filter by keyword or by field（按关键字或字段过滤）”列。 开始键入要过滤的字段名称和值。 当您输入时，可能的值将会出现。

- 要过滤多个值，请用逗号分隔值。 例如， `label:"good first issue",bug` 将列出标签为 `good first issue` 或 `bug` 的所有议题。
- 要过滤缺少特定值的字段，请在过滤器之前加入 `-`。 例如， `-label:"bug"` 只会显示没有标签的 `bug` 的项。
- 要过滤缺少所有值的字段, 请输入 `no:`，后接字段名称。 例如，`no:assignee` 仅显示没有受理人的项。
- 要按状态过滤，请输入 `is:`。 例如 `is: issue` 或 `is:open`。
- 多个过滤条件之间用逗号分隔。 例如，`status:"In progress" -label:"bug" no:assignee` 仅显示状态为 `In progress`、没有标签 `bug` 且没有受理人的项。
- 要过滤迭代字段的当前迭代，请使用 `@current`。 例如 `sprint:@current`。

或者，使用命令面板。

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Filter by" 或您想要筛选的字段的名称。
3. 选择所需的命令。 例如 **Filter by Status**。
4. 输入您想要过滤的值。 例如："In progress"。 您还可以过滤缺少特定值的字段（例如，选择“Exclude status（排除状态）”，然后选择一个状态）或缺少所有值的字段（例如，“No status（无状态）”）。

在板布局中，您可以单击项目数据以过滤具有该值的项。 例如，单击某个受理人以仅显示该受理人的项。 要移除过滤器，请再次单击项数据。

## 创建项目视图

项目视图允许您快速查看项目的特定方面。 每个视图都显示在项目中单独的选项卡上。

例如，您可以有：
- 显示所有尚未开始的项的视图（按“状态”过滤）。
- 显示每个团队的工作负荷的视图（按自定义“团队”字段分组）。
- 显示具有最早目标运送日期的项的视图（按日期字段排序）。

要添加新视图：

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "New view"（创建新视图）或 "Duplicate view"（复制当前视图）。
3. 选择所需的命令。

或者，点击右侧视图旁边的 {% octicon "plus" aria-label="the plus icon" %} **New view（新视图）**。

或者，单击视图名称旁边的 {% octicon "triangle-down" aria-label="the drop-down icon" %} ，然后单击 **Duplicate view（复制视图）**。

新视图将自动保存。

## 保存对视图的更改

对视图进行更改（例如，对视图中的数据进行排序、重新排序、过滤或分组）时，视图名称旁边会显示一个点，以指示存在未保存的更改。

![未保存的更改指示符](/assets/images/help/projects/unsaved-changes.png)

如果您不想保存更改，可以忽略此指示。 没有其他人会看到您的更改。

保存所有项目成员的视图的当前配置：
1. {% data reusables.projects.open-command-palette %}
1. 开始键入 "Save view" 或 "Save changes to new view"。
1. 选择所需的命令。

或者，单击视图名称旁边的 {% octicon "triangle-down" aria-label="the drop-down icon" %}，然后点击 **Save view（保存视图）** 或 **Save changes to new view（保存更改到新视图）**。

## 对保存的视图重新排序

要更改包含已保存视图的选项卡的顺序，请单击选项卡并将其拖到新位置。

新选项卡顺序自动保存。

## 重命名保存的视图

要重命名视图：
1. 双击项目选项卡中的名称。
1. 更改名称。
1. 按 Enter 键，或在选项卡外部单击。

名称更改将自动保存。

## 删除已保存的视图

要删除视图：
1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Delete view"。
3. 选择所需的命令。

或者，单击视图名称旁边的 {% octicon "triangle-down" aria-label="the drop-down icon" %} ，然后单击 **Delete view（删除视图）**。

## 延伸阅读

- "[关于项目（测试版）](/issues/trying-out-the-new-projects-experience/about-projects)"
- "[创建项目（测试版）](/issues/trying-out-the-new-projects-experience/creating-a-project)"
