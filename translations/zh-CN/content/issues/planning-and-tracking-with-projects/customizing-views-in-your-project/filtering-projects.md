---
title: 'Filtering {% data variables.projects.projects_v2 %}'
intro: Use filters to choose which items appear in your project's views.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/filtering-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
---

您可以使用项目元数据（例如受理人和应用于议题的标签）的筛选器以及项目中的字段自定义视图。 您可以组合筛选器并将其另存为视图。 更多信息请参阅“[自定义项目视图](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)”。

若要筛选项目，请单击 {% octicon "filter" aria-label="The Filter icon" %}，然后开始键入要筛选的字段和值。 当您输入时，可能的值将会出现。 You can also open the project command palette, by pressing {% data variables.projects.command-palette-shortcut %}, and type "Filter by" to choose from the available filters.

Using multiple filters will act as a logical AND filter. For example, `label:bug status:"In progress"` will return items with the `bug` label with the "In progress" status. {% data variables.product.prodname_projects_v2 %} does not currently support logical OR filters across multiple fields.

The same filters are available for charts you create using insights for {% data variables.product.prodname_projects_v2 %}, allowing you to filter the data used to create your charts. 更多信息请参阅“[将见解用于项目](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/about-insights-for-projects)”。

## 过滤项

点击表格顶部的 {% octicon "filter" aria-label="the filter icon" %} 以显示“Filter by keyword or by field（按关键字或字段过滤）”列。 开始键入要过滤的字段名称和值。 当您输入时，可能的值将会出现。

{% data reusables.projects.projects-filters %}

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Filter by."

在板布局中，您可以单击项目数据以过滤具有该值的项。 例如，单击某个受理人以仅显示该受理人的项。 要移除过滤器，请再次单击项数据。
