---
title: Managing projects (beta)
intro: 'You can close and re-open projects, or you can permanently delete projects.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Projects
  - Organizations
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
