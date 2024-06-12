---
title: 'Using projects and tasklists'
intro: 'When issues in your project are tracked by tasklists or contain tasklists, you can use them to create views and filters. {% ifversion projects-v2-tasklists-without-breadcrumbs %}{% else %}You can also browse any linked issues when you display the details for an issue.{% endif %}'
allowTitleToDifferFromFilename: true
versions:
  feature: projects-v2-tasklists
type: overview
topics:
  - Issues
---

{% data reusables.projects.tasklists-release-stage %}

When you add tasklists to your issues and view those issues in your projects, you can use the relationships that you defined in your tasklists to customize views, filter items, and navigate through your issues and pull requests.

When you add an issue with a tasklist to a project, the issues and pull requests in the tasklist are not automatically added to the project. To use the "tracks" and "tracked-by" fields, you will need to add all the issues and pull requests that comprise your tasklist to the project. Consider using the auto-add workflow to automatically add issues to your project. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/automating-your-project/adding-items-automatically)."

When you group a view by "Tracked by", and some tracked issues and pull requests are not part of the project, {% data variables.product.product_name %} will include a note beneath each group with the option to add those missing issues and pull requests.

## Using the "tracks" field

The "tracks" field shows the number of the issues and pull requests included each issue's tasklists. For more information about this field, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/understanding-fields/about-tracks-and-tracked-by-fields)."

## Using the "tracked by" field

The "tracked by" field shows the issues with tasklists currently tracking your project's issues. The "tracked by" field can also be used to group and filter views. You can use the filter below to only show issues that are tracked by issue you have specified:

```text
tracked-by:"<OWNER>/<REPO>#<ISSUE NUMBER>"
```

For example, `tracked-by:"octocat/game#4"` will show any issues in the project that are tracked by a tasklist in issue #4 in the `octocat/game` repository.

You can also group a table layout by the "tracked-by" field. This view configuration results in a list of the issues found in tasklists, clearly grouped by the issue they're associated with, which is shown in the header for each group.

You can also combine filters and grouping by filtering your project for just the issues you want to use, and then grouping with the "tracked-by" field. The example below shows how to filter a view by multiple issues:

```text
tracked-by:"<OWNER>/<REPO>#<ISSUE NUMBER>","<OWNER>/<REPO>#<ISSUE NUMBER>"
```

For more information about this field, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/understanding-fields/about-tracks-and-tracked-by-fields)."

{% ifversion projects-v2-tasklists-without-breadcrumbs %}{% else %}

## Navigating issue hierarchy with a breadcrumb menu

When the issues added to your project are either tracked by tasklists or contain tasklists, the project side-panel allows you to quickly move through the associated issues. Clicking on either the issues in the tasklists or the breadcrumb menu will open that issue in the side-panel.

1. In your project, click on an issue that either contains a tasklist or is tracked by a tasklist in another issue.
1. In the issue that opens in the side-bar, you can navigate through the associated issues.
   - To navigate down the issue hierarchy, and view the tasks that comprise the current issue, click on issues in the tasklist.  

     ![Screenshot of the header of an issue comment. In the right corner, a horizontal kebab icon is outlined in dark orange.](/assets/images/help/projects-v2/side-panel-tasklist.png)

   - To navigate up the issue hierarchy, and view the issues that include the current issue as a task, click on an issue number in the breadcrumb menu.  

     ![Screenshot of the header of an issue comment. In the right corner, a horizontal kebab icon is outlined in dark orange.](/assets/images/help/projects-v2/breadcrumb-menu.png)

{% endif %}
