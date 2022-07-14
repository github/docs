---
title: 管理项目中的迭代（测试版）
intro: 您可以创建迭代来规划即将到来的工作和组项。
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Projects
  - Organizations
---

{% data reusables.projects.projects-beta %}

## 关于迭代

您可以创建迭代字段以将项与特定的重复时间块相关联。 迭代可以设置为任何时间长度，可以包括断点，并且可以单独编辑以修改名称和日期范围。 使用项目，您可以按迭代进行分组以可视化未来工作的平衡，使用筛选器专注于单个迭代，并按迭代进行排序。

首次创建迭代字段时，将自动创建三个迭代。  您可以在项目的设置页面上添加其他迭代并进行其他更改。

![显示迭代字段设置的屏幕截图](/assets/images/help/issues/iterations-example.png)

## 创建迭代字段

您可以使用命令面板或项目的界面创建迭代字段。

1. {% data reusables.projects.open-command-palette %} 开始输入 "Create new field" 的任何部分。 当 "Create new field" 显示在命令板中时，选择它。

   或者，单击最右侧字段标题中的 {% octicon "plus" aria-label="the plus icon" %} 。 将显示带有项目字段的下拉菜单。 单击 **New field（新建字段）**。
1. 在文本框中，输入新迭代字段的名称。
1. 选择下面的下拉菜单，然后单击 **Iteration（迭代）**。
1. （可选）如果要更改当天的开始日期，请选择“Starts on（开始日期）”旁边的日历下拉列表，然后单击新的开始日期。
2. 要更改每次迭代的持续时间，请键入新数字，然后选择下拉列表并单击**天**或**周**。
3. 单击 **Save & create（保存并创建）**。

## 添加新迭代

{% data reusables.projects.project-settings %}
1. 单击您想要调整的迭代字段的名称。
1. 要添加具有相同持续时间的新迭代，请单击 **Add iteration（添加迭代）**。
1. （可选）要自定义新迭代的持续时间及其开始时间，请单击“Add iteration（添加迭代）”旁边的 {% octicon "triangle-down" aria-label="The triangle icon" %} ，选择开始日期和持续时间，然后单击 **Add（添加）**。
1. 单击 **Save changes（保存更改）**。

## 编辑迭代

您可以在项目设置中编辑迭代。 您还可以访问迭代字段的设置，方法是单击字段表头中的 {% octicon "triangle-down" aria-label="The triangle icon" %} ，然后单击 **Edit values（编辑值）**。

{% data reusables.projects.project-settings %}
1. 单击您想要调整的迭代字段的名称。
1. 要更改迭代的名称，请单击该名称并开始键入。
1. 要更改迭代的日期或持续时间，请单击该日期以打开日历。 单击开始日期，然后单击结束日期，再单击 **Apply（应用）**。
1. （可选）要删除迭代，请单击 {% octicon "trash" aria-label="The trash icon" %}。
1. 单击 **Save changes（保存更改）**。

## 插入断点

您可以在迭代中插入断点，以便在从预定工作中抽出时间进行通信。 新断点的持续时间默认为最近创建的迭代长度。

{% data reusables.projects.project-settings %}
1. 单击您想要调整的迭代字段的名称。
2. 在迭代上方和右侧的分界线上，单击 **Insert break（插入断点）**。 ![显示"插入断点"按钮位置的屏幕截图](/assets/images/help/issues/iteration-insert-break.png)
3. （可选）要更改断点的持续时间，请单击日期以打开日历。 单击开始日期，然后单击结束日期，再单击 **Apply（应用）**。
4. 单击 **Save changes（保存更改）**。
