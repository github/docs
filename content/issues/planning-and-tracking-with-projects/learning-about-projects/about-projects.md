# About {% data variables.product.prodname_projects_v2 %}

{% data variables.product.prodname_projects_v2 %} is an adaptable, flexible tool for planning and tracking work on {% data variables.product.company_short %}.

## Overview

{% data reusables.projects.projects-beta %}

## Features

### Flexible Project Management

A project is an adaptable spreadsheet, task-board, and road map that integrates with your issues and pull requests on {% data variables.product.company_short %} to help you plan and track your work effectively. Customize multiple views by filtering, sorting, grouping your issues and pull requests. {% ifversion projects-v2-insights %}Visualize work with configurable charts{% endif %}, and add custom fields to track metadata specific to your team.

### Real-time Sync

Information is synced automatically to your project as you make changes, updating your views and charts. This integration works both ways, ensuring seamless coordination between your project and your work items.

### Enhanced Metadata Management

Custom fields empower you to add metadata to your issues, pull requests, and draft issues, enriching your view of item attributes beyond the built-in metadata. Plan work week-by-week, track target ship dates, complexity, priority, and more.

### Automation Capabilities

{% ifversion projects-v2-workflows %}Streamline your workflows with built-in automation, allowing you to automatically set fields, archive items, and add items from a repository based on set criteria{% ifversion projects-v2-auto-add %}. {% endif %}{% endif %}Leverage the GraphQL API and {% data variables.product.prodname_actions %} to take even greater control of your project.

## Getting Started

To create a project and customize views, refer to the following guides:

- [Creating a Project](/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project)
- [Changing the Layout of a View](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/changing-the-layout-of-a-view)

## Managing Your Project

Learn how to manage items in your project effectively:

- [Adding Items to Your Project](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project){% ifversion projects-v2-bulk-table-editing %}
- [Editing Items in Your Project](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/editing-items-in-your-project){% endif %}

## Exploring Relationships

{% ifversion projects-v2-tasklists %}
Discover the power of tasklists to build hierarchies of issues and track relationships between them:
- [About Tasklists](/issues/tracking-your-work-with-issues/about-tasklists)
{% endif %}

## Viewing Options

Tailor your project view to answer your most pressing questions efficiently. Save and share views with your team:

- [Customizing Views](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/changing-the-layout-of-a-view)

## Additional Resources

For more information on customizing and automating your project, explore the following guides:

- [Automating Your Project](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations)
- [Using the API to Manage Projects](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-api-to-manage-projects)
- [Automating Projects Using Actions](/issues/planning-and-tracking-with-projects/automating-your-project/automating-projects-using-actions)

---

*Stay organized, stay efficient with {% data variables.product.prodname_projects_v2 %}.*
