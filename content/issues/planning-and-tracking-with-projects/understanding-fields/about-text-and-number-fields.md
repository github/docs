---
title: About text and number fields
shortTitle: About text and number fields
intro: You can add custom text and number fields to your project.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
redirect_from:
  - /issues/planning-and-tracking-with-projects/understanding-field-types/about-text-and-number-fields
contentType: tutorials
category:
  - Manage project items and fields
---

You can use text fields to include notes or any other freeform text in your project.

Text fields can be used in filters, for example: `field:"exact text"`. Text fields and item titles will also be used if you filter for text without specifying a field.

Number fields can also be used in filters. You can use `>`, `>=`, `<`, `<=`, and `..` range queries to filter by a number field. For example: `field:5..15` or `field:>=20`. For more information, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects).

## Adding a text field

{% data reusables.projects.new-field %}
1. Select **Text**.
1. Click **Save**.

## Adding a number field

{% data reusables.projects.new-field %}
1. Select **Number**.
1. Click **Save**.

## Setting a default value

Set a default value for text or number fields. New items added to the project are automatically pre-populated with that value.

{% data reusables.projects.project-settings %}
1. Click the name of the text or number field to configure.
1. In the **Default value** field, type the value to use as the default.
1. Click **Save**.

To remove a default value, clear the **Default value** field, then click **Save**. Removing a default value does not affect existing items in the project.
