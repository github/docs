---
title: About text and number fields
shortTitle: About text and number fields
intro: You can add custom text and number fields to your project.
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
redirect_from:
  - /issues/planning-and-tracking-with-projects/understanding-field-types/about-text-and-number-fields
---

You can use text fields to include notes or any other freeform text in your project.

Text fields can be used in filters, for example: `field:"exact text"`. Text fields and item titles will also be used if you filter for text without specifying a field.

Number fields can also be used in filters. You can use `>`, `>=`, `<`, `<=`, and `..` range queries to filter by a number field. For example: `field:5..15` or `field:>=20`. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)."

## Adding a text field

{% data reusables.projects.new-field %}
1. Select **Text**.
1. Click **Save**.

## Adding a number field

{% data reusables.projects.new-field %}
1. Select **Number**.
1. Click **Save**.
