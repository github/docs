---
title: 'Managing {% data variables.projects.project_v2 %} templates in your organization'
shortTitle: 'Managing templates'
intro: 'You can set projects in your organization as templates, allowing other people to select your template as the base for projects they create.'
versions:
  feature: projects-v2-org-templates
type: tutorial
permissions: 'People with admin permissions for a project in an organization can set the project as a template. People with admin or write permissions for a project in an organization can copy the project and set the copied project as a template.'
topics:
  - Projects
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.org-templates-release-stage %}

## About templates

You can set a project as a template to share a pre-configured project with other people in your organization which they can then use as the base for their projects.

The projects you have marked as templates are made available in the "Select a template" pop-up window when other people create projects in your organization.

When someone creates a project from a template, the {% data reusables.projects.what-gets-copied %} are copied from the template to the new project.

## Setting a project as a template

If you have admin permissions for a project in your organization, you can set the project as a template and make it available for others in your organization to use.

{% data reusables.projects.project-settings %}
1. In the "Templates" section, next to "Make template", select the switch to toggle it to **On**.

## Finding templates in your organization

You can filter the list of projects in your organization to only show projects set as templates.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.projects.projects-tab %}
1. In the text box above the list of projects, type `is:template`, and press **Enter**.

   ![Screenshot of the projects index page. The search text box is highlighted with an orange outline.](/assets/images/help/projects-v2/filter-for-templates.png)

## Copying a project as a template

If you have write or admin permissions for a project in your organization, you can choose to copy the project as a template. This will make a duplicate of the current project—copying the {% data reusables.projects.what-gets-copied %} —and set that copied project as a template for your organization.

{% data reusables.projects.project-settings %}
1. In the "Templates" section, click {% octicon "duplicate" aria-hidden="true" %} **Copy as template**.

## Further reading

- "[AUTOTITLE](/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project)"
