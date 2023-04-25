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
2. In the column you want to automate, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
![Edit icon](/assets/images/help/projects/edit-column-button.png)
3. Click **Manage automation**.
![Manage automation button](/assets/images/help/projects/manage-automation-button.png)
4. Using the Preset drop-down menu, select an automation preset.
![Select preset automation from menu](/assets/images/help/projects/select-automation.png)
5. Select the workflow automations you want to configure for the column.
![List of options for automating the column](/assets/images/help/projects/select-automation-options-existing-column.png)
6. Click **Update automation**.

## Further reading
- "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-automation-for-project-boards)"
