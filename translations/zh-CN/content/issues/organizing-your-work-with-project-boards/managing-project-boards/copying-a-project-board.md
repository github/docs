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

When you copy a {% data variables.projects.projects_v1_board %} to an organization, the {% data variables.projects.projects_v1_board %}'s visibility will default to private, with an option to change the visibility. For more information, see "[Changing {% data variables.product.prodname_project_v1 %} visibility](/articles/changing-project-board-visibility/)."

A {% data variables.projects.projects_v1_board %}'s automation is also enabled by default. For more information, see "[About automation for {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards/)."

1. Navigate to the {% data variables.projects.projects_v1_board %} you want to copy.
{% data reusables.project-management.click-menu %}
3. 单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}，然后单击 **Copy（复制）**。 ![项目板侧边栏的下拉菜单中的复制选项](/assets/images/help/projects/project-board-copy-setting.png)
4. 在“Owner（所有者）”下，使用下拉菜单并单击要复制项目板的仓库或组织。 ![从下拉菜单中选择所复制项目板的所有者](/assets/images/help/projects/copied-project-board-owner.png)
5. Optionally, under "Project board name", type the name of the copied {% data variables.projects.projects_v1_board %}. ![用于键入所复制项目板名称的字段](/assets/images/help/projects/copied-project-board-name.png)
6. （可选）在“Description（说明）”下，键入其他人将看到的有关所复制项目板的说明。 ![用于键入所复制项目板说明的字段](/assets/images/help/projects/copied-project-board-description.png)
7. （可选）在“Automation settings（自动化设置）”下，选择是否要复制已配置的自动工作流程。 默认情况下会启用此选项。 更多信息请参阅“[关于项目板的自动化](/articles/about-automation-for-project-boards/)”。 ![为所复制的项目板选择自动化设置](/assets/images/help/projects/copied-project-board-automation-settings.png)
{% data reusables.project-management.choose-visibility %}
9. 单击 **Copy project（复制项目）**。 ![确认复制按钮](/assets/images/help/projects/confirm-copy-project-board.png)
