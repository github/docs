---
title: 'Closing and deleting your {% data variables.projects.projects_v2 %}'
shortTitle: 'Closing and deleting {% data variables.projects.projects_v2 %}'
intro: 'Learn about closing, re-opening, and permanently deleting a {% data variables.projects.project_v2 %}.'
versions:
  feature: projects-v2
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
1. In the "Danger zone" section, next to "Delete project," click **Delete this project**.
1. Read the warnings, then type the name of your project into the text box.
1. Click **I understand the consequences, delete this project**.

## Closing a project

You can close a project to remove it from the list of projects but retain the contents and ability to re-open the project later.

{% data reusables.projects.project-settings %}
1. In the "Danger zone" section, next to "Close project," click **Close this project**.

## Re-opening an organization project

You can reopen a previously closed project.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.projects.projects-tab %}
1. In the left sidebar, click **Projects**.
{% data reusables.projects.reopen-a-project %}

## Re-opening a user project

You can reopen a previously closed project.

{% data reusables.profile.access_profile %}
{% data reusables.projects.projects-tab %}
{% data reusables.projects.reopen-a-project %}
