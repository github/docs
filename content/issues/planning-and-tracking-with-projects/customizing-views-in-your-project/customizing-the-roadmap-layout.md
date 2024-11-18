---
title: Customizing the roadmap layout
shortTitle: Customizing roadmaps
intro: You can use the roadmap layout to view your project's items on a timeline.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: tutorial
topics:
  - Projects
---

## About the roadmap layout

{% data reusables.projects.about-roadmap-layout %}

For more information about changing a view to use the roadmap layout, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/changing-the-layout-of-a-view#changing-the-project-layout)."

## Setting the start and target date fields

You can set the date or iteration fields that your roadmap will use to position items. When you set a view to a roadmap layout, {% data variables.product.company_short %} will attempt to use existing date and iteration fields you have already set up. For more information on creating new fields, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/understanding-fields/about-date-fields)" and "[AUTOTITLE](/issues/planning-and-tracking-with-projects/understanding-fields/about-iteration-fields)."

1. In the top right of your roadmap, click {% octicon "calendar" aria-hidden="true" %} **Date fields**.

   ![Screenshot showing the menu items for a roadmap layout. The "Date fields" button is highlighted with an orange rectangle.](/assets/images/help/projects-v2/roadmap-menu-dates.png)

1. Optionally, to create a new date or iteration field, click {% octicon "plus" aria-hidden="true" %} **New field**, type the name of your field, and click **Save**. You can then select the new field or create another.
1. Select a date or iteration field for "Start date" and "Target date."

{% ifversion projects-v2-roadmap-markers %}

## Setting vertical markers

You can configure vertical markers on a roadmap to show your iterations, the dates of items in your project, and the milestones associated with items in your project.

1. In the top right of your roadmap, click {% octicon "location" aria-hidden="true" %} **Markers**.

   ![Screenshot showing the menu bar in a roadmap layout. The "Markers" button is highlighted with an orange outline.](/assets/images/help/projects-v2/markers.png)

1. In the menu, select which markers you want to display on your roadmap.

{% endif %}

## Setting the zoom level

You can choose the density of items on your roadmap. You can zoom in to show one month at a time or, for a greater overview, you can zoom out to show a quarter of a year or a full year.

1. In the top right of your roadmap, click {% octicon "search" aria-label="The zoom icon next to Month, Quarter, or Year" %}.

   ![Screenshot showing the menu items for a roadmap layout. The "Zoom" button is highlighted with an orange rectangle.](/assets/images/help/projects-v2/roadmap-zoom-button.png)

1. Select either **Month**, **Quarter**, or **Year**.

{% ifversion projects-v2-slice-panel %}

## Slicing by field values

{% data reusables.projects.customize.slice-panel %}

{% endif %}

{% ifversion projects-v2-consistent-sorting %}

## Sorting by field values

You can sort items by a field value.

{% data reusables.projects.customize.sort %}

{% endif %}

{% ifversion projects-v2-roadmap-markers %}{% else %}

## Showing and hiding fields

When you show and hide fields on the roadmap layout, you define which fields are shown when the side panel opens. This setting will not affect the information visible on the roadmap layout.

{% data reusables.projects.customize.show-hide-field %}

{% endif %}

## Grouping by field values

You can group items by a custom field value.

{% data reusables.projects.customize.group-fields %}

{% ifversion projects-v2-numeric-summary %}

## Showing the sum of a number field

{% data reusables.projects.customize.sum %}

{% endif %}
