---
title: About single select fields
shortTitle: About single select fields
intro: You can create single select fields with multiple options, each with a description and a color, that can be selected from a dropdown menu.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
redirect_from:
  - /issues/planning-and-tracking-with-projects/understanding-field-types/about-single-select-fields
contentType: tutorials
category:
  - Manage project items and fields
---

You can filter by your single select fields by specifying the option, for example: `fieldname:option`. You can filter for multiple values by providing a comma-separated list of options, for example: `fieldname:option,option`. For more information, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects).

Single select fields can contain up to 50 options.

## Adding a single select field

{% data reusables.projects.new-field %}
1. Select **Single select**
1. Below "Options", type the first option.
   * To add additional options, click **Add option**.
1. Click **Save**.

## Setting a default value

Choose an existing option as the default value for a single select field. New items added to the project are automatically pre-populated with that option.

1. Access your project's settings.
1. Click the name of the single select field to configure.
1. In the list of options, select the option to use as the default.
1. Click **Save**.

To remove a default value, deselect the currently selected default option, then click **Save**. Removing a default value does not affect existing items in the project.

## Editing a single select field

You can set descriptions and colors for each of your single select options.

1. Access your project's settings.
1. To the right of the single select field you want to edit, click {% octicon "pencil" aria-label="The pencil icon" %}.

   ![Screenshot of the single select options. The pencil icon, by one of the options, is highlighted with an orange outline.](/assets/images/help/projects-v2/edit-single-select.png)

1. In the modal that opens, under **Label text**, type the name of this option.
1. Optionally, under **Color**, select the color you want to use to represent this option.

   ![Screenshot of the modal for editing a single select option. The blue color option is highlighted with an orange outline.](/assets/images/help/projects-v2/edit-single-select-color.png)

1. Optionally, under **Description**, type a description for this option.
1. Click **Save** to save your changes.
