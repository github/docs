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
shortTitle: 配置自动化
type: how_to
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %} For more information, see "[About automation for {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)."

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.resync-automation %}

{% tip %}

**提示**：要编辑已配置自动化的列，请单击该列底部的 **Manage（管理）**。

{% endtip %}

1. Navigate to the {% data variables.projects.projects_v1_board %} you want to automate.
2. 在要自动化的列中，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}。 ![编辑图标](/assets/images/help/projects/edit-column-button.png)
3. 单击 **Manage automation（管理自动化）**。 ![管理自动化按钮](/assets/images/help/projects/manage-automation-button.png)
4. 使用 Preset（预设）下拉菜单，选择一个自动化预设。 ![从菜单中选择预设自动化](/assets/images/help/projects/select-automation.png)
5. 选择要为该列配置的工作流程自动化。 ![自动化列的选项列表](/assets/images/help/projects/select-automation-options-existing-column.png)
6. 单击 **Update automation（更新自动化）**。

## 延伸阅读
- "[About automation for {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)"
