---
title: About issue fields in projects
shortTitle: About issue fields
intro: 'Learn how to use organization-level issue fields in your projects to track structured metadata like priority, effort, and dates.'
versions:
  feature: issue-fields
contentType: tutorials
topics:
  - Projects
  - Issues
---

{% data reusables.issues.issue-fields-public-preview-note %}

Issue fields are organization-level fields that provide consistent, typed metadata across all repositories. Unlike project custom fields, issue fields are defined once at the organization level and are available on every issue and in every project across the organization. For more information on creating and managing issue fields, see [AUTOTITLE](/issues/tracking-your-work-with-issues/using-issues/managing-issue-fields-in-your-organization).

> [!NOTE]
> Issue fields are currently only supported in private projects. Issue fields are not available in public projects.

## Adding an issue field to a project

To display issue field values in a project:

1. Open a project and select a view using the table layout.
1. Click {% octicon "plus" aria-label="Add field" %} in the table header.
1. Click **Add field**.
1. Select one or more issue fields from the list of available fields in the organization.
1. Click **Add**.

The issue field appears as a column in the table view.

## Removing an issue field from a project

To remove an issue field from a project:

1. Click {% octicon "kebab-horizontal" aria-label="open field options" %} in the top right corner of the project page.
1. Click **Settings**.
1. In the left sidebar, select the issue field you want to remove.
1. Click **Remove field**.

Removing an issue field from a project does not delete the field or its values from the organization. The field can be re-added at any time.

## Editing issue field values in a project

You can edit issue field values directly in the project table view without opening the issue. Click on a cell in the issue field column to set or change the value. Changes are synced back to the issue automatically.

## Grouping, filtering, and sorting

You can group, filter, and sort project views by issue field values, just like any other project field. This works in both table and board layouts.

You can also use issue fields to group by column on the board layout.

## Charts and insights

Issue fields are available as data sources in project charts. You can create charts that group or segment by issue field values to visualize trends across your organization.

## Limits

Projects support up to 50 fields in total. Issue fields and system fields count toward this limit. If a project is already at the field limit, you need to remove existing fields before issue fields can be added.

> [!NOTE]
> Issue fields only apply to issues owned by the same organization. If a project contains pull requests, draft issues, or issues from another organization, issue field columns show empty cells for those items.
