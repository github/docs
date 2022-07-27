---
title: Managing iterations in projects (beta)
intro: You can create iterations to plan upcoming work and group items.
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

## About iterations

You can create an iteration field to associate items with specific repeating blocks of time. Iterations can be set to any length of time, can include breaks, and can be individually edited to modify name and date range. With projects, you can group by iteration to visualize the balance of upcoming work, use filters to focus on a single iteration, and sort by iteration.

When you first create an iteration field, three iterations are automatically created.  You can add additional iterations and make other changes on your project's settings page.

![Screenshot showing the settings for an iteration field](/assets/images/help/issues/iterations-example.png)

## Creating an iteration field

You can create an iteration field using the command palette or the project's interface.

1. {% data reusables.projects.open-command-palette %} Start typing any part of "Create new field". When "Create new field" displays in the command palette, select it.

   Alternatively, click {% octicon "plus" aria-label="the plus icon" %} in the rightmost field header. A drop-down menu with the project fields will appear. Click **New field**.
1. In the text box, enter a name for the new iteration field.
1. Select the dropdown menu below and click **Iteration**.
1. Optionally, if you want to change the starting date from the current day, select the calendar dropdown next to "Starts on" and click on a new starting date.
2. To change the duration of each iteration, type a new number, then select the dropdown and click either **days** or **weeks**.
3. Click **Save & create**.
  
## Adding new iterations

{% data reusables.projects.project-settings %}
1. Click the name of the iteration field you want to adjust.
1. To add a new iteration of the same duration, click **Add iteration**.
1. Optionally, to customize the duration of the new iteration and when it will start, click {% octicon "triangle-down" aria-label="The triangle icon" %} next to "Add iteration", select a starting date and duration, and click **Add**.
1. Click **Save changes**.

## Editing an iteration

You can edit iterations in your project settings. You can also access the settings for an iteration field by clicking {% octicon "triangle-down" aria-label="The triangle icon" %} in the table header for the field and clicking **Edit values**.

{% data reusables.projects.project-settings %}
1. Click the name of the iteration field you want to adjust.
1. To change the name of an iteration, click on the name and start typing.
1. To change the date or duration of an iteration, click on the date to open the calendar. Click on the start day, then click the end day, and then click **Apply**.
1. Optionally, to delete an iteration, click {% octicon "trash" aria-label="The trash icon" %}.
1. Click **Save changes**.

## Inserting a break

You can insert breaks into your iterations to communicate when you are taking time away from scheduled work. The duration of a new break defaults to the length of the most recently created iteration.

{% data reusables.projects.project-settings %}
1. Click the name of the iteration field you want to adjust.
2. On the dividing line above an iteration and to the right, click **Insert break**.
   ![Screenshot showing location of "Insert break" button](/assets/images/help/issues/iteration-insert-break.png)
3. Optionally, to change the duration of the break, click on the date to open the calendar. Click on the start day, then click the end day, and then click **Apply**.
4. Click **Save changes**.
