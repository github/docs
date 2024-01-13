---
title: 'Creating a {% data variables.projects.project_v2 %}'
intro: Learn how to create an organization or user project.
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/creating-a-project
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
---

{% data variables.product.prodname_projects_v2 %} are an adaptable collection of items that stay up-to-date with {% data variables.product.company_short %} data. Your projects can track issues, pull requests, and ideas that you note down. You can add custom fields and create views for specific purposes.

{% ifversion projects-v2-copy-a-project %}

You can also choose to use an existing project as a template and copy the views and custom fields to a new project. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/creating-projects/copying-an-existing-project)."

{% endif %}

## Creating a project

### Creating an organization project

Organization projects can track issues and pull requests from the organization's repositories. {% ifversion projects-v2-org-templates %}{% data reusables.projects.org-templates %}{% endif %}

{% data reusables.projects.create-project %}

### Creating a user project

User projects can track issues and pull requests from the repositories owned by your personal account.

{% data reusables.projects.create-user-project %}

## Updating your project description and README

{% data reusables.projects.project-description %}

## Further reading

- "[AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-your-project/adding-your-project-to-a-repository)"
- "[AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project)"
- "[AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/changing-the-layout-of-a-view)"
