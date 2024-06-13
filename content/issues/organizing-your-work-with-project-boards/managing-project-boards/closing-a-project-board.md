---
title: 'Closing a {% data variables.product.prodname_project_v1 %}'
intro: 'If you''ve completed all the tasks in a {% data variables.projects.projects_v1_board %} or no longer need to use a {% data variables.projects.projects_v1_board %}, you can close the {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/closing-a-project-board
  - /articles/closing-a-project
  - /articles/closing-a-project-board
  - /github/managing-your-work-on-github/closing-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
---
{% data reusables.projects.project_boards_old %}

When you close a {% data variables.projects.projects_v1_board %}, any configured workflow automation will pause by default.

If you reopen a {% data variables.projects.projects_v1_board %}, you have the option to _sync_ automation, which updates the position of the cards on the board according to the automation settings configured for the board. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/reopening-a-closed-project-board)" or "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-automation-for-project-boards)."

1. Navigate to the list of {% data variables.projects.projects_v1_boards %} in your repository or organization, or owned by your personal account.
1. In the projects list, next to the {% data variables.projects.projects_v1_board %} you want to close, click {% octicon "kebab-horizontal" aria-label="Project menu" %}.
![Screenshot showing the projects index. The project menu icon is highlighted with an orange rectangle.](/assets/images/help/projects/project-list-action-chevron.png)
1. Click **Close**.

## Further reading

* "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)"
* "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/deleting-a-project-board)"
* "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/disabling-project-boards-in-a-repository)"
* "[AUTOTITLE](/organizations/managing-organization-settings/disabling-project-boards-in-your-organization)"
* "[AUTOTITLE](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)"
