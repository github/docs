---
title: About date fields
shortTitle: About date fields
intro: You can create custom date fields that can be set by typing a date or using a calendar.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
---

You can filter for date values using the `YYYY-MM-DD` format, for example: `date:2022-07-01`. You can also use operators, such as `>`, `>=`, `<`, `<=`, and `..`. For example, `date:>2022-07-01` and `date:2022-07-01..2022-07-31`. You can also provide `@today` to represent the current day in your filter. 更多信息请参阅“[筛选项目](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)”。

## Adding a date field

{% data reusables.projects.new-field %}
1. Select **Date** ![Screenshot showing the date option](/assets/images/help/projects-v2/new-field-date.png)
1. 单击 **Save（保存）**。 ![Screenshot showing save button](/assets/images/help/projects-v2/new-field-save.png)

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Create new field."
