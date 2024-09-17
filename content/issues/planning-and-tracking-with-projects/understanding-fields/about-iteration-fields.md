---
title: About iteration fields
shortTitle: About iteration fields
intro: You can create iterations to plan upcoming work and group items.
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-iterations
  - /issues/planning-and-tracking-with-projects/understanding-field-types/about-iteration-fields
type: tutorial
topics:
  - Projects
---

You can create an iteration field to associate items with specific repeating blocks of time. Iterations can be set to any length of time, can include breaks, and can be individually edited to modify name and date range. With projects, you can group by iteration to visualize the balance of upcoming work, use filters to focus on a single iteration, and sort by iteration.

You can filter for iterations by specifying the iteration name or `@current` for the current iteration, `@previous` for the previous iteration, or `@next` for the next iteration. You can also use operators such as `>`, `>=`, `<`, `<=`, and `..`.  For example, `iteration:>"Iteration 4"` and `iteration:<@current`. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)."

When you first create an iteration field, three iterations are automatically created.  You can add additional iterations and make other changes on your project's settings page.

If your project makes use of iteration fields, you can use the roadmap layout to view items on a timeline. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/changing-the-layout-of-a-view)" and "[AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-the-roadmap-layout)."

## Adding an iteration field

{% data reusables.projects.new-field %}
1. Under "Field type", select **Iteration**.
1. Optionally, if you don't want the iteration to start today, select the calendar dropdown next to "Starts on" and choose a new start date.
1. To change the duration of each iteration, type a new number, then select the dropdown and click either **days** or **weeks**.
1. Click **Save**.

## Adding new iterations

{% data reusables.projects.project-settings %}
1. Click the name of the iteration field you want to adjust.
1. To add a new iteration of the same duration, click **Add iteration**.
   ![Screenshot showing iteration settings. The "Add iteration" button is highlighted with an orange outline.](/assets/images/help/projects-v2/add-iteration.png)
1. Optionally, to customize the duration of the new iteration and when it will start, click {% octicon "triangle-down" aria-hidden="true" %} **More options**, select a starting date and duration, and click **Add**.
   ![Screenshot showing iteration settings. The "More options" button is highlighted with an orange outline.](/assets/images/help/projects-v2/add-iteration-options.png)
1. Click **Save changes**.

## Editing an iteration

You can edit iterations in your project settings. You can also access the settings for an iteration field by clicking {% octicon "kebab-horizontal" aria-label="Cycle column options" %} in the table header for the field and clicking **Edit values**.

{% data reusables.projects.project-settings %}
1. In the list on the left, click the name of the iteration field you want to adjust.
1. To change the name of an iteration, click on the name and start typing.
   ![Screenshot of a single iteration's settings. The iteration name is highlighted with an orange outline.](/assets/images/help/projects-v2/iteration-rename.png)
1. To change the date or duration of an iteration, click on the date to open the calendar. Click on the start day, then click the end day, and then click **Apply**.
   ![Screenshot of a single iteration's settings. The iteration date span is highlighted with an orange outline.](/assets/images/help/projects-v2/iteration-date.png)
1. Optionally, to delete an iteration, on the right of the iteration, click {% octicon "trash" aria-label="Remove item" %}.
1. Click **Save changes**.

## Inserting a break

You can insert breaks into your iterations to communicate when you are taking time away from scheduled work. The duration of a new break defaults to the length of the most recently created iteration.

{% data reusables.projects.project-settings %}
1. Click the name of the iteration field you want to adjust.
1. Hover over the dividing line above an iteration, then click **Insert break**.

   ![Screenshot of the list of iterations for a project. On the dividing line between two iterations, a button, labeled "Insert break," is outlined in dark orange.](/assets/images/help/issues/iteration-insert-break.png)
1. Optionally, to change the duration of the break, click on the date to open the calendar. Click on the start day, then click the end day, and then click **Apply**.
1. Click **Save changes**.
