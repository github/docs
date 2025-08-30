---
title: 'About {% data variables.product.prodname_projects_v2 %}'
intro: '{% data variables.product.prodname_projects_v2 %} is an adaptable, flexible tool for planning and tracking work on {% data variables.product.company_short %}.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
redirect_from:
  - /issues/trying-out-the-new-projects-experience/about-projects
type: overview
topics:
  - Projects
---

## About {% data variables.product.prodname_projects_v2 %}

A project is an adaptable table, board, and roadmap that integrates with your issues and pull requests on {% data variables.product.company_short %} to help you plan and track your work effectively at the user or organization level. You can create and customize multiple views by filtering, sorting, slicing, and grouping your issues and pull requests to manage your team backlogs and roadmaps, visualize work with configurable charts, add custom fields to track metadata specific to your team, create templates, share status updates, and automate your projects. Rather than enforcing a specific methodology, a project provides flexible features you can customize to your team’s needs and processes.

To get started and create a project, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project). To learn more about the different layouts, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/changing-the-layout-of-a-view).

### Staying up-to-date

Your projects are built from the issues and pull requests you add, creating direct references between your project and your work. Information is synced automatically to your project as you make changes, updating your views and charts. This integration works both ways, so that when you change information about a pull request or issue in your project, the pull request or issue reflects that information. For example, change an assignee in your project and that change is shown in your issue. You can take this integration even further, group your project by assignee, and make changes to issue assignment by dragging issues into the different groups.

To learn more about managing items in your project, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project) and [AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/editing-items-in-your-project).

### Viewing your project from different perspectives

Quickly answer your most pressing questions by tailoring your project view to give you the information you need. You can save these views, allowing you to quickly return to them as needed and make them available to your team. Views not only let you scope down the items listed but also offer three different layout options.

You can view your project as a high-density table layout, as a kanban board, or a timeline-style roadmap. These customized views help you manage your team backlog, perform iteration planning, plan your roadmap, plan for a feature release, or triage bugs, right next to the code. For more information about the different layout options, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/changing-the-layout-of-a-view).

### Adding metadata to your items

You can use custom fields to add metadata to your issues, pull requests, and draft issues and build a richer view of item attributes. You’re not limited to the built-in metadata (assignee, milestone, labels, etc.) that currently exists for issues and pull requests. For example, you can add the following metadata as custom fields:

* A date field to track target ship dates.
* A number field to track the complexity of a task.
* A single select field to track whether a task is Low, Medium, or High priority.
* A text field to add a quick note.
* An iteration field to plan work week-by-week, including support for breaks.

You can use up to 50 fields in a project, including built-in metadata and custom fields. To learn more about the different fields you can add to a project, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/understanding-fields) and [AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-items-in-your-project).

### Automating your projects

There are a number of ways you can add automation to your project. Built-in workflows allow you to automatically set fields when items are added or changed, and you can also configure your project to automatically archive items when they meet certain criteria and automatically add items from a repository when they match set criteria. For more information, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations).

You can also use the GraphQL API and {% data variables.product.prodname_actions %} to take even greater control of your project. For more information, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-api-to-manage-projects) and [AUTOTITLE](/issues/planning-and-tracking-with-projects/automating-your-project/automating-projects-using-actions).

### Viewing charts and insights

You can use insights for {% data variables.product.prodname_projects_v2 %} to view, create, and customize charts that use the items added to your project as their source data. You can apply filters to the default chart and also create your own charts. When you create a chart, you set the filters, chart type, the information displayed, and the chart is available to anyone that can view the project.

For more information, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/about-insights-for-projects).

### Creating project templates

You can create project templates for your organization, or set a project as a template, to share a pre-configured project with other people in your organization which they can then use as the base for their projects. Project templates include the views, custom fields, draft issues and associated fields, configured workflows (except any auto-add workflows), and insights.

For more information, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-your-project/managing-project-templates-in-your-organization).

### Sharing status updates

You can keep your team up to date and share high-level overviews, which people can use to determine the status of your project. You can set a status, such as "On track" or "At risk", to allow people to quickly determine the current state of the project. You can also set start dates and target dates. Your status update can also contain a message that supports formatting with Markdown. Status updates are found on your project's side panel, below the description and README, and in the project's header and in lists when you're browsing projects.

For more information, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/learning-about-projects/sharing-project-updates).

## Next steps

Here are some helpful resources for taking your next steps with {% data variables.product.prodname_projects_v2 %}:

* To learn about getting started using projects, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/learning-about-projects/quickstart-for-projects).
* To learn tips for managing your projects, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/learning-about-projects/best-practices-for-projects).
