---
title: About text and number fields
shortTitle: About text and number fields
intro: You can add custom text and number fields to your project.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
---

You can use text fields to include notes or any other freeform text in your project.

Text fields can be used in filters, for example: `field:"exact text"`. Text fields and item titles will also be used if you filter for text without specifying a field.

Number fields can also be used in filters. You can use `>`, `>=`, `<`, `<=`, and `..` range queries to filter by a number field. For example: `field:5..15` or `field:>=20`. 更多信息请参阅“[筛选项目](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)”。

## Adding a text field

{% data reusables.projects.new-field %}
1. Select **Text** ![Screenshot showing the text option](/assets/images/help/projects-v2/new-field-text.png)
1. 单击 **Save（保存）**。 ![Screenshot showing save button](/assets/images/help/projects-v2/new-field-save.png)

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Create new field."

## Adding a number field

{% data reusables.projects.new-field %}
1. Select **Number** ![Screenshot showing the number option](/assets/images/help/projects-v2/new-field-number.png)
1. 单击 **Save（保存）**。 ![Screenshot showing save button](/assets/images/help/projects-v2/new-field-save.png)

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Create new field."
