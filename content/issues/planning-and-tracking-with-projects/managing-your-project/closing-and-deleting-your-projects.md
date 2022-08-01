---
title: 'Closing and deleting your {% data variables.projects.projects_v2 %}'
shortTitle: 'Closing and deleting {% data variables.projects.projects_v2 %}'
intro: 'Learn about closing, re-opening, and permanently deleting a {% data variables.projects.project_v2 %}.'
miniTocMaxHeadingLevel: 3
versions:
  feature: "projects-v2"
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
---


## Deleting a project

You can delete a project to permanently remove it.

{% data reusables.projects.project-settings %}
1. At the bottom of the page, click **Delete this project**. 
   ![Screenshot showing project delete button](/assets/images/help/issues/delete-project-button.png)
1. Read the warnings, then type the name of your project into the text box.
   ![Screenshot showing project delete confirmation](/assets/images/help/issues/project-delete-confirm.png)
1. Click **I understand the consequences, delete this project**.

## Closing a project

You can close a project to remove it from the list of projects but retain the contents and ability to re-open the project later. 

{% data reusables.projects.project-settings %}
1. At the bottom of the page, click **Close this project**. 
   ![Screenshot showing project close button](/assets/images/help/issues/close-project-button.png)

## Re-opening an organization project

You can reopen a previously closed project.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.projects.reopen-a-project %}

## Re-opening a user project

You can reopen a previously closed project.

{% data reusables.profile.access_profile %}
{% data reusables.projects.reopen-a-project %}
