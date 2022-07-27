---
title: 'Filtering {% data variables.projects.projects_v2 %}'
intro: "Use filters to choose which items appear in your project's views."
miniTocMaxHeadingLevel: 3
versions:
  feature: "projects-v2"
redirect_from:
  - /issues/trying-out-the-new-projects-experience/filtering-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
---

You can customize views using filters for item metadata, such as assignees and the labels applied to issues, and by the fields in your project. You can combine filters and save them as views. For more information, see "[Customizing your project views](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)."

To filter a project, click {% octicon "filter" aria-label="The Filter icon" %} and start typing the fields and values you would like to filter for. As you type, possible values will appear. You can also open the project command palette, by pressing {% data variables.projects.command-palette-shortcut %}, and type "Filter by" to choose from the available filters.

Using multiple filters will act as a logical AND filter. For example, `label:bug status:"In progress"` will return items with the `bug` label with the "In progress" status. {% data variables.product.prodname_projects_v2 %} does not currently support logical OR filters across multiple fields.

The same filters are available for charts you create using insights for {% data variables.product.prodname_projects_v2 %}, allowing you to filter the data used to create your charts. For more information, see "[Using insights with projects](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/about-insights-for-projects)."

## Filtering items

Click {% octicon "filter" aria-label="the filter icon" %} at the top of the table to show the "Filter by keyword or by field" bar. Start typing the field name and value that you want to filter by. As you type, possible values will appear.

{% data reusables.projects.projects-filters %}

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Filter by."

In board layout, you can click on item data to filter for items with that value. For example, click on an assignee to show only items for that assignee. To remove the filter, click the item data again.