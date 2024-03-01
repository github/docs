---
title: Syntax for discussion category forms
shortTitle: Syntax for discussion category forms
intro: You can use YAML syntax to define the fields in your discussion category forms.
versions:
  feature: discussion-category-forms
---

## About YAML syntax for discussion category forms

You can create custom discussion category forms by adding a YAML form definition file to the `/.github/DISCUSSION_TEMPLATE/` folder in your repository. {% data reusables.actions.learn-more-about-yaml %}

{% data reusables.discussions.discussion-category-forms-name %}

For each field, you can define the input type, validation, and a default label.

When a community member fills out a discussion form, their responses for each input are converted to markdown and added to the body of a discussion. Community members can edit their discussions that were created with a discussion form and other people can interact with the discussion like a discussion created through other methods.

This example YAML configuration file defines a general discussion category form.

{% data reusables.discussions.discussion-category-forms-sample %}

## Top-level syntax

The configuration file for a discussion category form must contain a `body` key, and the `body` must contain at least 1 non-Markdown field.

```yaml copy
body:
- type: input
  id: suggestion
  attributes:
    label: Suggestion
    description: "How might we make this project better?"
    placeholder: "Adding a CODE_OF_CONDUCT.md file would be a great idea."
  validations:
    required: true
```

You can set the following top-level keys for each issue form.

| Key | Description | Required | Type |
| :-- | :-- | :-- | :-- |
| `body` | Definition of the input types in the discussion form. | Required | Array |
| `labels` | Labels that will automatically be added to discussions created with this template. | Optional | Array or comma-delimited string |
| `title` | A default title that will be pre-populated in the discussion submission form. | Optional | String |

To add fields to your form, include an array of form elements in the `body` key. For a list of available elements and their syntaxes, see "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)."
