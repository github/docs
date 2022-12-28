---
title: Customizing the roadmap layout
shortTitle: Customizing roadmaps
intro: 'You can use the roadmap layout to view your project''s items on a timeline.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2-roadmaps
type: tutorial
topics:
  - Projects
---

{% data reusables.projects.roadmaps-release-stage %}

## About the roadmap layout

{% data reusables.projects.about-roadmap-layout %}

For more information about changing a view to use the roadmap layout, see "[Changing the project layout](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/changing-the-layout-of-a-view#changing-the-project-layout)."

## Setting the start and target date fields

You can set the date or iteration fields that your roadmap will use to position items. When you set a view to a roadmap layout, {% data variables.product.company_short %} will attempt to use existing date and iteration fields you have already set up. If you choose an iteration field, you cannot add or edit iterations directly in the roadmap layout. For more information on creating new fields, see "[About date fields](/issues/planning-and-tracking-with-projects/understanding-fields/about-date-fields)" and "[About iteration fields](/issues/planning-and-tracking-with-projects/understanding-fields/about-iteration-fields)."

1. In the top right of your roadmap, click {% octicon "calendar" aria-label="the calendar icon" %} **Date fields**.

  ![Screenshot showing the date field menu item](/assets/images/help/projects-v2/roadmap-menu-dates.png)

1. Optionally, to create a new date or iteration field, click {% octicon "plus" aria-label="the plus icon" %} **New field**, type the name of your field, and click **Save**. You can then select the new field or create another.

  ![Screenshot showing the date field options](/assets/images/help/projects-v2/roadmap-dates-create-field.png)

1. Select a date or iteration field for "Start date" and "Target date."

  ![Screenshot showing the date field options](/assets/images/help/projects-v2/roadmap-select-dates.png)

## Setting the zoom level

You can choose the density of items on your roadmap. You can zoom in to show one month at a time or, for a greater overview, you can zoom out to show a quarter of a year or a full year.

1. In the top right of your roadmap, click {% octicon "search" aria-label="the zoom icon" %}.

  ![Screenshot showing the zoom button](/assets/images/help/projects-v2/roadmap-zoom-button.png)

1. Select either **Month**, **Quarter**, or **Year**.

  ![Screenshot showing the zoom level options](/assets/images/help/projects-v2/roadmap-zoom-menu.png)


## Showing and hiding fields

When you show and hide fields on the roadmap layout, you define which fields are shown when the side panel opens. This setting will not affect the information visible on the roadmap layout.

{% data reusables.projects.customize.show-hide-field %}

## Grouping by field values

You can group items by a custom field value.

{% data reusables.projects.customize.group-fields %}

{% ifversion projects-v2-numeric-summary %}

## Showing the sum of a number field

{% data reusables.projects.customize.sum %}

{% endif %}