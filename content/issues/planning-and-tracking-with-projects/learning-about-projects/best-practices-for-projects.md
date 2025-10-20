---
title: 'Best practices for {% data variables.product.prodname_projects_v2 %}'
intro: Learn tips for managing your projects.
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
redirect_from:
  - /issues/trying-out-the-new-projects-experience/best-practices-for-managing-projects
type: overview
topics:
  - Projects
  - Issues
  - Project management
---

You can use {% data variables.product.prodname_projects_v2 %} to manage your work on {% data variables.product.company_short %}, where your issues and pull requests live. Read on for tips to manage your projects efficiently and effectively. For more information about {% data variables.product.prodname_projects_v2 %}, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects).

## Communicate across your issues and pull requests

Issues and pull requests include built-in features to let you easily communicate with your collaborators. Use @mentions to alert a person or entire team about a comment. Assign collaborators to issues to communicate responsibility. Link to related issues or pull requests to communicate how they are connected.

## Break down large issues into smaller issues

Breaking a large issue into smaller issues makes the work more manageable and enables team members to work in parallel. It also leads to smaller pull requests, which are easier to review.

{% ifversion sub-issues %}

{% data reusables.issues.about-sub-issues %} See [AUTOTITLE](/issues/tracking-your-work-with-issues/using-issues/adding-sub-issues) and [AUTOTITLE](/issues/tracking-your-work-with-issues/using-issues/browsing-sub-issues).

{% ifversion issue-types %}

You can also use issue types to classify work in repositories across the organization alongside sub-issues. For more information, see [AUTOTITLE](/issues/tracking-your-work-with-issues/using-issues/managing-issue-types-in-an-organization).

{% endif %}

{% endif %}

To ensure efficient progress, clearly define which issues are blocked by, or blocking, other issues. See [AUTOTITLE](/free-pro-team@latest/issues/tracking-your-work-with-issues/using-issues/creating-issue-dependencies).

To track how smaller issues fit into the larger goal, use milestones or labels. For more information, see [AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/about-milestones) and [AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/managing-labels).

## Make use of the description, README, and status updates to share information about a project

Use your project's description and README to share information about the project.

For example:

* Explaining the purpose of the project.
* Describing the project views and how to use them.
* Including relevant links and people to contact for more information.

Project READMEs support Markdown which allows you to use images and advanced formatting such as links, lists, and headers. For more information, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project).

You can also share high-level updates with other users of your project by posting status updates. Status updates allow you to mark the project with a status, such as "On track" or "At risk", set start and target dates, and share written updates with your team. For more information, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/sharing-project-updates).

## Create customized views of your project items

Use project views to look at your project from different angles using the table, board, and roadmap layout. Views allow you to manage your team backlog, weekly iterations, team roadmaps, and plans for a feature release, just to name a few.

For example, you can customize views by:

* Filtering by status to view all un-started items
* Grouping by a custom priority field to monitor the volume of high priority items
* Sorting by a custom date field to view the items with the earliest target ship date
* Slicing by assignee to view team capacity
* Showing a field sum for an estimate to highlight complexity for a group of items
* Adding a column limit to a board column to maintain focus

Here is an example table layout:

![Screenshot showing an example table layout.](/assets/images/help/projects-v2/example-table.png)

Here is an example board layout:

![Screenshot showing an example board layout.](/assets/images/help/projects-v2/example-board.png)

Here is an example roadmap layout:

![Screenshot showing an example roadmap layout.](/assets/images/help/projects-v2/example-roadmap.png)

For more information, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project).

## Use different field types to add metadata to your project items

Take advantage of the various field types to meet your needs and add metadata to your issues, pull requests, and draft issues for richer views. You’re not limited to the built-in metadata (assignee, milestone, labels, etc.) that currently exists for issues and pull requests. For example, you can add the following metadata as custom fields:

* A date field to track target ship dates
* A number field to track the complexity of a task
* A single select field to track whether a task is Low, Medium, or High priority
* A text field to add a quick note
* An iteration field to plan work week-by-week, including support for breaks

Use an iteration field to schedule work or create a timeline. You can group by iteration to see if items are balanced between iterations, or you can filter to focus on a single iteration. Iteration fields let you view work that you completed in past iterations, which can help with velocity planning and reflecting on your team's accomplishments. Iteration fields also support breaks to show when you and your team are taking time away from their iterations. See [AUTOTITLE](/issues/planning-and-tracking-with-projects/understanding-fields/about-iteration-fields).

Use a single select field to track information about a task based on a preset list of values. For example, track priority or project phase. Since the values are selected from a preset list, you can easily group or filter to focus on items with a specific value.

For more information about the different field types, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/understanding-fields).

## Use automation to keep your projects up to date automatically

You can automate tasks to spend less time on busy work and more time on the project itself. The less you need to remember to do manually, the more likely your project will stay up to date.

{% data variables.product.prodname_projects_v2 %} offers built-in workflows. For example, when an issue is closed, you can automatically set the status to "Done". You can also configure built-in workflows to automatically archive items when they meet certain criteria and to automatically add items from a repository when they match a filter.

Additionally, {% data variables.product.prodname_actions %} and the GraphQL API enable you to automate routine project management tasks. For example, to keep track of pull requests awaiting review, you can create a workflow that adds a pull request to a project and sets the status to "needs review"; this process can be automatically triggered when a pull request is marked as "ready for review."

* For more information about the built-in workflows, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations).
* For more information about automatically archiving items, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically).
* For more information about automatically adding items, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/automating-your-project/adding-items-automatically).
* For an example workflow, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/automating-your-project/automating-projects-using-actions).
* For more information about the API, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-api-to-manage-projects).
* For more information about {% data variables.product.prodname_actions %}, see [AUTOTITLE](/actions).

## Create charts and insights to visualize and share progress

You can use insights for {% data variables.product.prodname_projects_v2 %} to view, create, and customize charts that use the items added to your project as their source data. You can apply filters to the default chart and also create your own charts. When you create a chart, you set the filters, chart type, the information displayed, and the chart is available to anyone that can view the project.

For more information, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/about-insights-for-projects).

## Create project templates to standardize your workflows

You can create project templates for your organization, or set a project as a template, to share a pre-configured project with other people in your organization which they can then use as the base for their projects. Project templates include the views, custom fields, draft issues and associated fields, configured workflows (except any auto-add workflows), and insights.

For more information, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-your-project/managing-project-templates-in-your-organization).

## Link projects to teams and repositories

You can add projects to your team to give the whole team collaborator access to their projects. When you add a project to a team, that project is listed on the team's projects page, making it easier for members to identify which projects a particular team uses.

For more information, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-your-project/adding-your-project-to-a-team).

You can also add projects to a repository that is owned by the same user or organization that owns the project.

For more information, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-your-project/adding-your-project-to-a-repository).

## Have a single source of truth

To prevent information from getting out of sync, maintain a single source of truth. For example, track a target ship date in a single location instead of spread across multiple fields. Then, if the target ship date shifts, you only need to update the date in one location.

{% data variables.product.prodname_projects_v2 %} automatically stay up to date with {% data variables.product.company_short %} data, such as assignees, milestones, and labels. When one of these fields changes in an issue or pull request, the change is automatically reflected in your project.

## Further reading

* [AUTOTITLE](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
* [AUTOTITLE](/issues/planning-and-tracking-with-projects/learning-about-projects/quickstart-for-projects)
