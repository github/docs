---
title: Managing issue fields in your organization
intro: 'You can create and manage custom issue fields to collect structured metadata across all issues in your organization.'
redirect_from:
  - /issues/tracking-your-work-with-issues/using-issues/managing-issue-fields-in-an-organization
versions:
  feature: issue-fields
type: overview
topics:
  - Project management
shortTitle: 'Managing issue fields'
permissions: 'Organization owners can create and manage issue fields.'
---

{% data reusables.issues.issue-fields-public-preview-note %}

Issue fields let you add structured metadata to issues across your organization. Instead of relying on labels or free-text workarounds, you can create fields like priority, effort, impact, or any custom category your team needs. Fields are defined at the organization level and apply across all repositories in your organization.

## About issue field types

You can create up to 25 issue fields per organization. The following field types are available:

* **Single-select**: choose one option from a predefined list. Options can have names, descriptions, and colors.
* **Text**: capture free-form text. URLs are automatically detected and displayed as clickable links.
* **Number**: accept numeric input, including decimals.
* **Date**: provide a date picker for selecting dates.

## Default fields

When issue fields are enabled for your organization, four default fields are created automatically:

* **Priority** (single-select): Urgent, High, Medium, Low
* **Effort** (single-select): High, Medium, Low
* **Start date** (date)
* **Target date** (date)

These default fields are fully customizable. You can edit their names, descriptions, and options, or delete them if they don't fit your workflow.

## Creating an issue field

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Planning" section of the sidebar, click **Issue fields**.
1. Click **New field**.
1. Under "Field name", type the name of your new field.
1. Optionally, under "Description", type a description to help others understand the purpose of the field.
1. Under "Field type", select the type of field you want to create.
1. If you selected **Single-select**, add options for the field:
   * Click **Add option** and type the option name.
   * Optionally, to set a color for an option, click {% octicon "kebab-horizontal" aria-label="open option menu" %} next to the option, click **Edit option**, choose a color, and click **Save**.
   * Repeat to add more options.
1. Under "Field Visibility", choose one of the following:
   * **Permissions**: choose who can see the field and its value. Options are **Organization only** (default) or **Public**. This setting only applies to issues in public repositories.
   * **Pin to types**: click {% octicon "pencil" aria-label="edit pinning" %} to choose which issue types show this field in the issue viewer and creator. Select one or more issue types, or "Issues without a type". Fields that are not pinned and have no value will stay hidden in the issue viewer and creator.
1. Click **Create**.

## Editing an issue field

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Planning" section of the sidebar, click **Issue fields**.
1. To the right of the field you want to edit, click {% octicon "kebab-horizontal" aria-label="open field options" %}.
1. Click **Edit** and make your changes.
1. Click **Save field**.

## Deleting an issue field

When you delete an issue field, all values set on issues for that field are permanently removed.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Planning" section of the sidebar, click **Issue fields**.
1. To the right of the field you want to delete, click {% octicon "kebab-horizontal" aria-label="open field options" %}.
1. Click **Delete** and confirm the deletion.

## Reordering issue fields

The order of pinned fields is managed per issue type. The field order determines how fields appear in the issue sidebar and the issue creation modal.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Planning" section of the sidebar, click **Issue types**.
1. Click the issue type you want to reorder fields for.
1. Under "Pinned issue fields", drag fields to reorder them.
1. Click **Save**.

## Pinning fields to issue types

You can associate issue fields with specific issue types so that only the most relevant fields appear when creating or viewing issues of that type. For example, you can pin "Severity" to bugs and "Impact" to features.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Planning" section of the sidebar, click **Issue fields**.
1. Click the field you want to pin.
1. Under "Pin to types", click {% octicon "pencil" aria-label="edit pinning" %} and select the issue types this field should appear on.
1. Click **Save field**.

Pinned fields automatically appear in the issue sidebar based on the selected issue type. To pin fields to issues that have no type, select the "Issues without a type" option.

> [!NOTE]
> Fields must be pinned to at least one issue type, or to "Issues without a type", to appear in the issue sidebar. Fields that are not pinned to any type are only accessible via the **Add field** button or in projects.

## Setting field visibility

For organizations with public repositories, you can control whether each issue field is visible to everyone or only to organization members and collaborators.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Planning" section of the sidebar, click **Issue fields**.
1. To the right of the field, click {% octicon "kebab-horizontal" aria-label="open field options" %}.
1. Click **Edit**.
1. Under "Field Visibility", choose one of the following:
   * **Organization only**: the field is visible only to organization members and repository collaborators with at least read access.
   * **Public**: the field is visible to anyone viewing the issue.
1. Click **Save**.

By default, all new and existing fields are set to "Organization only". Visibility settings are enforced across the web UI, API, issue timeline events, and search suggestions.

## Issue fields and projects

Issue fields are available in any project across your organization. For details on adding, removing, and editing issue fields in projects, see [AUTOTITLE](/issues/tracking-your-work-with-issues/using-issues/adding-and-managing-issue-fields#using-issue-fields-in-projects).

### Field limits in projects

Projects support up to 50 fields in total, and issue fields and system fields count toward this limit. If a project is already at the field limit, you need to remove existing fields before issue fields can be added.

## Limits

| Resource | Limit |
|----------|-------|
| Issue fields per organization | 25 |
| Options per single-select field | 50 |
| Pinned fields per issue type | 10 |
| Total fields in a project (including issue fields and system fields) | 50 |
