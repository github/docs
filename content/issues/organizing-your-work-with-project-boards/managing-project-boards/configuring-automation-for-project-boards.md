---
title: 'Configuring automation for {% data variables.product.prodname_projects_v1 %}'
intro: 'You can set up automatic workflows to move issues and pull requests to a {% data variables.projects.projects_v1_board %} column when a specified event occurs.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/configuring-automation-for-project-boards
  - /articles/configuring-automation-for-project-boards
  - /github/managing-your-work-on-github/configuring-automation-for-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
  - Projects
  - Issues
  - Project management
shortTitle: Configure automation
type: how_to
allowTitleToDifferFromFilename: true
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %} For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-automation-for-project-boards)."

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.resync-automation %}

{% tip %}

**Tip**: To edit columns that already have configured automation, click **Manage** at the bottom of the column.

{% endtip %}

1. Navigate to the {% data variables.projects.projects_v1_board %} you want to automate.
1. In the column you want to automate, click {% octicon "kebab-horizontal" aria-label="Column menu" %}.
![Screenshot showing a column in a project. The menu icon is highlighted with an orange outline.](/assets/images/help/projects/edit-column-button.png)
1. Click **Manage automation**.
1. Using the Preset drop-down menu, select an automation preset.
1. Select the workflow automations you want to configure for the column.
1. Click **Update automation**.

## Further reading

* "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-automation-for-project-boards)"
