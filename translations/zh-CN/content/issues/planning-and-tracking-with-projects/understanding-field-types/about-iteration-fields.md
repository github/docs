---
title: About iteration fields
shortTitle: About iteration fields
intro: 您可以创建迭代来规划即将到来的工作和组项。
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-iterations
type: tutorial
topics:
  - Projects
---

您可以创建迭代字段以将项与特定的重复时间块相关联。 迭代可以设置为任何时间长度，可以包括断点，并且可以单独编辑以修改名称和日期范围。 使用项目，您可以按迭代进行分组以可视化未来工作的平衡，使用筛选器专注于单个迭代，并按迭代进行排序。

You can filter for iterations by specifying the iteration name or `@current` for the current iteration, `@previous` for the previous iteration, or `@next` for the next iteration. You can also use operators such as `>`, `>=`, `<`, `<=`, and `..`.  For example, `iteration:>"Iteration 4"` and `iteration:<@current`. 更多信息请参阅“[筛选项目](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)”。

首次创建迭代字段时，将自动创建三个迭代。  您可以在项目的设置页面上添加其他迭代并进行其他更改。

![显示迭代字段设置的屏幕截图](/assets/images/help/issues/iterations-example.png)

## Adding an iteration field

{% data reusables.projects.new-field %}
1. Select **Iteration** ![Screenshot showing the iteration option](/assets/images/help/projects-v2/new-field-iteration.png)
2. Optionally, if you don't want the iteration to start today, select the calendar dropdown next to "Starts on" and choose a new start date. ![Screenshot showing the iteration start date](/assets/images/help/projects-v2/iteration-field-starts.png)
3. 要更改每次迭代的持续时间，请键入新数字，然后选择下拉列表并单击**天**或**周**。 ![Screenshot showing the iteration duration](/assets/images/help/projects-v2/iteration-field-duration.png)
4. 单击 **Save（保存）**。 ![Screenshot showing save button](/assets/images/help/projects-v2/new-field-save-and-create.png)

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Create new field."

## 添加新迭代

{% data reusables.projects.project-settings %}
1. Click the name of the iteration field you want to adjust. ![Screenshot showing an iteration field](/assets/images/help/projects-v2/select-iteration-field.png)
1. 要添加具有相同持续时间的新迭代，请单击 **Add iteration（添加迭代）**。 ![Screenshot the "add iteration" button](/assets/images/help/projects-v2/add-iteration.png)
1. Optionally, to customize the duration of the new iteration and when it will start, click {% octicon "triangle-down" aria-label="The triangle icon" %} **More options**, select a starting date and duration, and click **Add**. ![Screenshot the add iteration options form](/assets/images/help/projects-v2/add-iteration-options.png)
1. 单击 **Save changes（保存更改）**。 ![Screenshot the save button](/assets/images/help/projects-v2/iteration-save.png)

## 编辑迭代

您可以在项目设置中编辑迭代。 您还可以访问迭代字段的设置，方法是单击字段表头中的 {% octicon "triangle-down" aria-label="The triangle icon" %} ，然后单击 **Edit values（编辑值）**。

{% data reusables.projects.project-settings %}
1. Click the name of the iteration field you want to adjust. ![Screenshot showing an iteration field](/assets/images/help/projects-v2/select-iteration-field.png)
1. To change the name of an iteration, click on the name and start typing. ![Screenshot an title field to rename an iteration](/assets/images/help/projects-v2/iteration-rename.png)
1. 要更改迭代的日期或持续时间，请单击该日期以打开日历。 单击开始日期，然后单击结束日期，再单击 **Apply（应用）**。 ![Screenshot showing iteration dates](/assets/images/help/projects-v2/iteration-date.png)
1. Optionally, to delete an iteration, click {% octicon "trash" aria-label="The trash icon" %}. ![Screenshot the delete button](/assets/images/help/projects-v2/iteration-delete.png)
2. 单击 **Save changes（保存更改）**。 ![Screenshot the save button](/assets/images/help/projects-v2/iteration-save.png)

## 插入断点

您可以在迭代中插入断点，以便在从预定工作中抽出时间进行通信。 新断点的持续时间默认为最近创建的迭代长度。

{% data reusables.projects.project-settings %}
1. Click the name of the iteration field you want to adjust. ![Screenshot showing an iteration field](/assets/images/help/projects-v2/select-iteration-field.png)
2. 在迭代上方和右侧的分界线上，单击 **Insert break（插入断点）**。 ![显示"插入断点"按钮位置的屏幕截图](/assets/images/help/issues/iteration-insert-break.png)
3. （可选）要更改断点的持续时间，请单击日期以打开日历。 单击开始日期，然后单击结束日期，再单击 **Apply（应用）**。
4. 单击 **Save changes（保存更改）**。 ![Screenshot the save button](/assets/images/help/projects-v2/iteration-save.png)
