---
title: 'Copying a {% data variables.product.prodname_project_v1 %}'
intro: 'You can copy a {% data variables.projects.projects_v1_board %} to quickly create a new project. Copying frequently used or highly customized {% data variables.projects.projects_v1_boards %} helps standardize your workflow.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/copying-a-project-board
  - /articles/copying-a-project-board
  - /github/managing-your-work-on-github/copying-a-project-board
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
---
{% data reusables.projects.project_boards_old %}

Copying a {% data variables.projects.projects_v1_board %} allows you to reuse a {% data variables.projects.projects_v1_board %}'s title, description, and automation configuration. You can copy {% data variables.projects.projects_v1_boards %} to eliminate the manual process of creating new {% data variables.projects.projects_v1_boards %} for similar workflows.

You must have read access to a {% data variables.projects.projects_v1_board %} to copy it to a repository or organization where you have write access.

When you copy a {% data variables.projects.projects_v1_board %} to an organization, the {% data variables.projects.projects_v1_board %}'s visibility will default to private, with an option to change the visibility. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility)."

A {% data variables.projects.projects_v1_board %}'s automation is also enabled by default. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-automation-for-project-boards)."

1. Navigate to the {% data variables.projects.projects_v1_board %} you want to copy.
{% data reusables.project-management.click-menu %}
1. Click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Copy**.
![Screenshot showing a project menu. The copy option is highlighted with an orange outline.](/assets/images/help/projects/project-board-copy-setting.png)
1. Under "Owner", use the drop-down menu and click the repository or organization where you want to copy the project board.
1. Optionally, under "Project board name", type the name of the copied {% data variables.projects.projects_v1_board %}.
1. Optionally, under "Description", type a description of the copied project board that other people will see.
1. Optionally, under "Automation settings", select whether you want to copy the configured automatic workflows. This option is enabled by default. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-automation-for-project-boards)."
{% data reusables.project-management.choose-visibility %}
1. Click **Copy project**.
