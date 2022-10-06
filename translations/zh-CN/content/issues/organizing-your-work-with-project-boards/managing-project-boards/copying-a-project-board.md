---
title: '复制 {% data variables.product.prodname_project_v1 %}'
intro: '可以通过复制 {% data variables.projects.projects_v1_board %} 来快速创建新项目。 复制常用或高度自定义的 {% data variables.projects.projects_v1_boards %} 有助于标准化工作流。'
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
ms.openlocfilehash: 055e697d2bb5c7aa1ad4667d24bbe919ede87a99
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423602'
---
{% data reusables.projects.project_boards_old %}

通过复制 {% data variables.projects.projects_v1_board %}，可以重复使用 {% data variables.projects.projects_v1_board %} 的标题、说明和自动化配置。 复制 {% data variables.projects.projects_v1_boards %} 可以避免为类似工作流创建新 {% data variables.projects.projects_v1_boards %} 的手动过程。

必须对 {% data variables.projects.projects_v1_board %} 具有读取权限才能将其复制到你有写入权限的存储库或组织。

将 {% data variables.projects.projects_v1_board %} 复制到组织时，{% data variables.projects.projects_v1_board %} 的可见性将默认为专用，并且可以选择更改可见性。 有关详细信息，请参阅“[更改 {% data variables.product.prodname_project_v1 %} 的可见性](/articles/changing-project-board-visibility/)”。

默认情况下也会启用 {% data variables.projects.projects_v1_board %} 的自动化。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_projects_v1 %} 的自动化](/articles/about-automation-for-project-boards/)”。

1. 导航到要复制的 {% data variables.projects.projects_v1_board %}。
{% data reusables.project-management.click-menu %}
3. 单击“{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}”，然后单击“复制”。
![项目板侧边栏的下拉菜单中的复制选项](/assets/images/help/projects/project-board-copy-setting.png)
4. 在“Owner（所有者）”下，使用下拉菜单并单击要复制项目板的仓库或组织。
![从下拉菜单中选择所复制项目板的所有者](/assets/images/help/projects/copied-project-board-owner.png)
5. （可选）在“项目板名称”下，键入所复制 {% data variables.projects.projects_v1_board %} 的名称。
![用于键入所复制项目板名称的字段](/assets/images/help/projects/copied-project-board-name.png)
6. （可选）在“Description（说明）”下，键入其他人将看到的有关所复制项目板的说明。
![用于键入所复制项目板说明的字段](/assets/images/help/projects/copied-project-board-description.png)
7. （可选）在“Automation settings（自动化设置）”下，选择是否要复制已配置的自动工作流程。 默认情况下该选项处于启用状态。 有关详细信息，请参阅“[关于项目板的自动化](/articles/about-automation-for-project-boards/)”。
![为复制的项目板选择自动化设置](/assets/images/help/projects/copied-project-board-automation-settings.png) {% data reusables.project-management.choose-visibility %}
9. 单击“复制项目”。
![“确认复制”按钮](/assets/images/help/projects/confirm-copy-project-board.png)
