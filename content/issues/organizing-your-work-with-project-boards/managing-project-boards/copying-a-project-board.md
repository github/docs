---
title: Copying a project board
intro: You can copy a project board to quickly create a new project. Copying frequently used or highly customized project boards helps standardize your workflow.
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/copying-a-project-board
  - /articles/copying-a-project-board
  - /github/managing-your-work-on-github/copying-a-project-board
versions:
  free-pro-team: '*'
topics:
  - Pull requests
---
Copying a project board allows you to reuse a project board's title, description, and automation configuration. You can copy project boards to eliminate the manual process of creating new project boards for similar workflows.

You must have read access to a project board to copy it to a repository or organization where you have write access.

When you copy a project board to an organization, the project board's visibility will default to private, with an option to change the visibility. For more information, see "[Changing project board visibility](/articles/changing-project-board-visibility/)."

A project board's automation is also enabled by default. For more information, see "[About automation for project boards](/articles/about-automation-for-project-boards/)."

1. Navigate to the project board you want to copy.
{% data reusables.project-management.click-menu %}
3. Click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Copy**.
![Copy option in drop-down menu from project board sidebar](/assets/images/help/projects/project-board-copy-setting.png)
4. Under "Owner", use the drop-down menu and click the repository or organization where you want to copy the project board.
![Select owner of copied project board from drop-down menu](/assets/images/help/projects/copied-project-board-owner.png)
5. Optionally, under "Project board name", type the name of the copied project board.
![Field to type a name for the copied project board](/assets/images/help/projects/copied-project-board-name.png)
6. Optionally, under "Description", type a description of the copied project board that other people will see.
![Field to type a description for the copied project board](/assets/images/help/projects/copied-project-board-description.png)
7. Optionally, under "Automation settings", select whether you want to copy the configured automatic workflows. This option is enabled by default. For more information, see "[About automation for project boards](/articles/about-automation-for-project-boards/)."
![Select automation settings for copied project board](/assets/images/help/projects/copied-project-board-automation-settings.png)
{% data reusables.project-management.choose-visibility %}
9. Click **Copy project**.
![Confirm Copy button](/assets/images/help/projects/confirm-copy-project-board.png)
