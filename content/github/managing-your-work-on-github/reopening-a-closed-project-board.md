---
title: Reopening a closed project board
intro: You can reopen a closed project board and and restart any workflow automation that was configured for the project board.
redirect_from:
  - /articles/reopening-a-closed-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

When you close a project board, any workflow automation that was configured for the project board will pause by default. For more information, see "[Closing a project board](/articles/closing-a-project-board)."

When you reopen a project board, you have the option to *sync* automation, which updates the position of the cards on the board according to the automation settings configured for the board.

1. Navigate to the project board you want to reopen.
{% data reusables.project-management.click-menu %}
3. Choose whether to sync automation for your project board or reopen your project board without syncing.
    - To reopen your project board and sync automation, click **Reopen and sync project**.
  ![Select "Reopen and resync project" button](/assets/images/help/projects/reopen-and-sync-project.png)
    - To reopen your project board without syncing automation, using the reopen drop-down menu, click **Reopen only**. Then, click **Reopen only**.
  ![Reopen closed project board drop-down menu](/assets/images/help/projects/reopen-closed-project-board-drop-down-menu.png)

### Further reading

- "[Configuring automation for project boards](/articles/configuring-automation-for-project-boards)"
