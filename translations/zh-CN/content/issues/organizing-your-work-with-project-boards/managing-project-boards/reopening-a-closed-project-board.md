---
title: 'Reopening a closed {% data variables.product.prodname_project_v1 %}'
intro: 'You can reopen a closed {% data variables.projects.projects_v1_board %} and restart any workflow automation that was configured for the {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/reopening-a-closed-project-board
  - /articles/reopening-a-closed-project-board
  - /github/managing-your-work-on-github/reopening-a-closed-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Reopen {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

When you close a {% data variables.projects.projects_v1_board %}, any workflow automation that was configured for the {% data variables.projects.projects_v1_board %} will pause by default. For more information, see "[Closing a {% data variables.product.prodname_project_v1 %}](/articles/closing-a-project-board)."

When you reopen a {% data variables.projects.projects_v1_board %}, you have the option to *sync* automation, which updates the position of the cards on the board according to the automation settings configured for the board.

1. Navigate to the {% data variables.projects.projects_v1_board %} you want to reopen.
{% data reusables.project-management.click-menu %}
3. Choose whether to sync automation for your {% data variables.projects.projects_v1_board %} or reopen your {% data variables.projects.projects_v1_board %} without syncing.
    - To reopen your {% data variables.projects.projects_v1_board %} and sync automation, click **Reopen and sync project**. ![选择“重新打开并重新同步项目”按钮](/assets/images/help/projects/reopen-and-sync-project.png)
    - To reopen your {% data variables.projects.projects_v1_board %} without syncing automation, using the reopen drop-down menu, click **Reopen only**. 然后单击 **Reopen only（仅重新打开）**。 ![重新打开关闭的项目板下拉菜单](/assets/images/help/projects/reopen-closed-project-board-drop-down-menu.png)

## 延伸阅读

- "[Configuring automation for {% data variables.product.prodname_projects_v1 %}](/articles/configuring-automation-for-project-boards)"
