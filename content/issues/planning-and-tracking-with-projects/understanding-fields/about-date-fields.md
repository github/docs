---
title: About date fields
shortTitle: About date fields
intro: You can create custom date fields that can be set by typing a date or using a calendar.
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
redirect_from:
  - /issues/planning-and-tracking-with-projects/understanding-field-types/about-date-fields
---

You can filter for date values using the `YYYY-MM-DD` format, for example: `date:2022-07-01`. You can also use operators, such as `>`, `>=`, `<`, `<=`, and `..`. For example, `date:>2022-07-01` and `date:2022-07-01..2022-07-31`. You can also provide `@today` to represent the current day in your filter. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)."

{% ifversion projects-v2-roadmaps %}

If your project makes use of date fields, you can use the roadmap layout to view items on a timeline. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/changing-the-layout-of-a-view)" and "[AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-the-roadmap-layout)."

{% endif %}

## Adding a date field

{% data reusables.projects.new-field %}
1. Select **Date**
1. Click **Save**.

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Create new field."
