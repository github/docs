---
title: '为 {% data variables.product.prodname_projects_v1 %} 配置自动化'
intro: '可以设置自动工作流，以便在发生指定事件时将问题和拉取请求转移到 {% data variables.projects.projects_v1_board %} 列。'
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
ms.openlocfilehash: 67294015021ef97a8210bff8bbe6c95e352dc26e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147422682'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %} 有关详细信息，请参阅“[关于 {% data variables.product.prodname_projects_v1 %} 的自动化](/articles/about-automation-for-project-boards)”。

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.resync-automation %}

{% tip %}

提示：若要编辑已配置自动化的列，请单击列底部的“管理” 。

{% endtip %}

1. 导航到希望自动化的 {% data variables.projects.projects_v1_board %}。
2. 在要自动化的列中，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}。
![“编辑”图标](/assets/images/help/projects/edit-column-button.png)
3. 单击“管理自动化”。
![“管理自动化”按钮](/assets/images/help/projects/manage-automation-button.png)
4. 使用 Preset（预设）下拉菜单，选择一个自动化预设。
![从菜单中选择“预设自动化”](/assets/images/help/projects/select-automation.png)
5. 选择要为该列配置的工作流程自动化。
![自动化列的选项列表](/assets/images/help/projects/select-automation-options-existing-column.png)
6. 单击“更新自动化”。

## 延伸阅读
- [关于 {% data variables.product.prodname_projects_v1 %} 的自动化](/articles/about-automation-for-project-boards)
