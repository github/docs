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

If you reopen a {% data variables.projects.projects_v1_board %}, you have the option to *sync* automation, which updates the position of the cards on the board according to the automation settings configured for the board. For more information, see "[Reopening a closed {% data variables.product.prodname_project_v1 %}](/articles/reopening-a-closed-project-board)" or "[About automation for {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)."

1. Navigate to the list of {% data variables.projects.projects_v1_boards %} in your repository or organization, or owned by your personal account.
2. In the projects list, next to the {% data variables.projects.projects_v1_board %} you want to close, click {% octicon "chevron-down" aria-label="The chevron icon" %}. ![项目板名称右边的 V 形图标](/assets/images/help/projects/project-list-action-chevron.png)
3. 单击 **Close（关闭）**。 ![关闭项目板下拉菜单中的项](/assets/images/help/projects/close-project.png)

## 延伸阅读

- "[关于 {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Deleting a {% data variables.product.prodname_project_v1 %}](/articles/deleting-a-project-board)"
- "[Disabling {% data variables.product.prodname_projects_v1 %} in a repository](/articles/disabling-project-boards-in-a-repository)"
- "[Disabling {% data variables.product.prodname_projects_v1 %} in your organization](/articles/disabling-project-boards-in-your-organization)"
- "[{% data variables.product.prodname_project_v1_caps %} permissions for an organization](/articles/project-board-permissions-for-an-organization)"
