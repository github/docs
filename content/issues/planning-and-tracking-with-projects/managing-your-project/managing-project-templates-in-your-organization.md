---
title: 'Managing {% data variables.projects.project_v2 %} templates in your organization'
shortTitle: 'Managing templates'
intro: 'You can {% ifversion projects-v2-org-templates-improvements %}create templates or {% endif %}set projects as templates in your organization, allowing other people to select your template as the base for projects they create.'
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

You can {% ifversion projects-v2-org-templates-improvements %}create a template, or {% endif %}set a project as a template{% ifversion projects-v2-org-templates-improvements %},{% endif %} to share a pre-configured project with other people in your organization which they can then use as the base for their projects.

The projects you mark as templates are shown in the "Create a project" dialog when anyone creates a project in your organization. {% ifversion projects-v2-org-templates-GA-updates %}You can also configure up to six templates to recommend to your organization's members.{% endif %}

When someone creates a project from a template, the {% data reusables.projects.what-gets-copied %} are copied from the template to the new project. {% ifversion projects-v2-org-templates-improvements %}You can find the template that a project used from the project's settings page, under the "Templates" section.{% endif %}

{% ifversion projects-v2-org-templates-improvements %}

## Creating a new template

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.projects.projects-tab %}
{% data reusables.projects.templates-tab %}
1. Click **New template**.

{% endif %}

## Setting a project as a template

If you have admin permissions for a project in your organization, you can set the project as a template and make it available for others in your organization to use.

{% data reusables.projects.project-settings %}
1. In the "Templates" section, next to "Make template", select the switch to toggle it to **On**.

## Finding templates in your organization

{% ifversion projects-v2-org-templates-improvements %}

You can find all the templates in your organization on the "Templates" page.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.projects.projects-tab %}
{% data reusables.projects.templates-tab %}

You can also add templates to teams and repositories, to make them accessible and more visible from the team or repository's "Templates" page. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-your-project/adding-your-project-to-a-team)" and "[AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-your-project/adding-your-project-to-a-repository)."

{% else %}

You can filter the list of projects in your organization to only show projects set as templates.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.projects.projects-tab %}
1. In the text box above the list of projects, type `is:template`, and press **Enter**.

   ![Screenshot of the projects index page. The search text box is highlighted with an orange outline.](/assets/images/help/projects-v2/filter-for-templates.png)

{% endif %}

## Copying a project as a template

If you have write or admin permissions for a project in your organization, you can choose to copy the project as a template. This will make a duplicate of the current project—copying the {% data reusables.projects.what-gets-copied %} —and set that copied project as a template for your organization.

{% data reusables.projects.project-settings %}
1. In the "Templates" section, click {% octicon "duplicate" aria-hidden="true" %} **Copy as template**.

{% ifversion projects-v2-org-templates-GA-updates %}

## Configuring recommended templates

If you are an organization owner, you can select up to six templates to recommend to your organization's members. These recommended templates are suggested first when an organization member creates a new project.

### Choosing which templates to recommend

You can add up to six templates to your organization's recommended templates.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Code, planning, and automation" section of the sidebar, click **{% octicon "table" aria-label="The table icon" %} Projects**.
1. Under "Recommended templates", click **Customize recommended templates**.
1. In the list of templates owned by your organization, select up to six templates that you want to recommend to your members.

   ![Screenshot of the recommended template selection modal.](/assets/images/help/projects-v2/rec-template-select.png)

1. Click **Save**.

### Arranging your recommended templates

You can change the display order of your recommended templates in the "Create project" dialog.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Code planning, and automation" section of the sidebar, click **{% octicon "table" aria-label="The table icon" %} Projects**.
1. Under "Recommended templates", find the template you want to reposition, click on {% octicon "grabber" aria-label="Drag to reorder" %}, and drag the template to the new position.

   ![Screenshot of an organization's recommended templates settings. The 'Drag to reorder' handle is highlighted with an orange outline.](/assets/images/help/projects-v2/rec-template-handle.png)

{% endif %}

## Further reading

* "[AUTOTITLE](/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project)"
