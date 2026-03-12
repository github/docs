---
title: Adding and managing issue fields
intro: 'You can set, edit, and clear issue field values on individual issues to capture structured metadata for your team.'
versions:
  feature: issue-fields
contentType: how-tos
topics:
  - Project management
shortTitle: 'Using issue fields'
permissions: 'People with triage access or greater to a repository can set and edit issue field values.'
---

{% data reusables.issues.issue-fields-public-preview-note %}

Issue fields appear in the right-hand sidebar of issues, alongside system fields like assignees, labels, and type. You can set values when creating or editing an issue. When you select an issue type while creating an issue, any fields pinned to that type automatically appear in the sidebar.

## Setting a field value

1. Navigate to the issue you want to update.
1. In the right sidebar, if the field you want is not already visible, click **Add field**.
1. From the dropdown, select the field you want to add.
1. Set the value:
   * For **single-select** fields, choose an option from the dropdown.
   * For **text** fields, type your value. URLs are automatically detected and displayed as links.
   * For **number** fields, enter a numeric value.
   * For **date** fields, use the date picker to select a date, or type the date directly.
1. Changes are saved automatically.

## Editing a field value

1. Navigate to the issue.
1. In the right sidebar, click on the field value you want to change.
1. Select a new value or type a new entry.
1. Changes are saved automatically.

## Clearing a field value

1. Navigate to the issue.
1. In the right sidebar, click on the field value.
1. Clear the value:
   * For **single-select** fields, click the currently selected option to deselect it.
   * For **text** and **number** fields, delete all text in the input.
   * For **date** fields, click the clear button in the date picker.
1. After clearing, the field is removed from the sidebar. It can be re-added using the **Add field** button.

## Pinned fields

If your organization administrator has pinned fields to specific issue types, those fields automatically appear in the sidebar and the issue creation modal when you create or view an issue of that type. You do not need to manually add pinned fields.

## Viewing field changes in the timeline

When a field value is changed, the update is recorded in the issue timeline. The timeline entry shows:
* Which field was changed
* The new value that was set
* Who made the change
* When the change was made

Timeline events for fields set to "Organization only" visibility are hidden from users who are not organization members or collaborators.

## Field visibility

Organization administrators can set each field's visibility to "Organization only" or "Public". This affects what you see:

* If a field is set to **Organization only**, it is only visible to organization members and repository collaborators with at least read access. If you are not a member or collaborator, the field does not appear in the issue sidebar, timeline, or search suggestions.
* If a field is set to **Public**, it is visible to anyone viewing the issue.

For more information about configuring visibility, see [AUTOTITLE](/issues/tracking-your-work-with-issues/using-issues/managing-issue-fields-in-your-organization#setting-field-visibility).

## Using issue fields in projects

Issue fields can be added as columns in project views, where you can edit values, group, filter, sort, and build charts. For more information, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/understanding-fields/about-issue-fields).

## Searching by field values

You can filter and search for issues based on field values on both the issues dashboard and your repository's issues page. In the search bar, type `field.` followed by the field name and value. For example:

* `field.priority:high` to find issues with priority set to "high"
* `field."target date":>=2026-03-01` to find issues with a target date on or after March 1, 2026
* `field.priority:high,medium` to find issues with priority set to "high" or "medium"

For more information, see [AUTOTITLE](/issues/tracking-your-work-with-issues/using-issues/filtering-and-searching-issues-and-pull-requests).

## Using issue fields with the API

Issue fields have full REST and GraphQL API support. You can automate field management, set values programmatically, and integrate with external tools.

- **Managing fields**: Create, update, and delete organization-level fields. See the [Organization issue fields REST API](/rest/orgs/issue-fields).
- **Using fields**: Get, set, and clear field values on individual issues. See the [Issue field values REST API](/rest/issues/issue-field-values).
