---
title: '重新打开已关闭的 {% data variables.product.prodname_project_v1 %}'
intro: '可以重新打开已关闭的 {% data variables.projects.projects_v1_board %} 并且重启为 {% data variables.projects.projects_v1_board %} 配置的任何工作流自动化。'
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
ms.openlocfilehash: e0101378c0b7049f7cba5e04dd28231a1237d0c5
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108643'
---
{% data reusables.projects.project_boards_old %}

关闭 {% data variables.projects.projects_v1_board %} 时，为 {% data variables.projects.projects_v1_board %} 配置的任何工作流自动化都将默认暂停。 有关详细信息，请参阅“[关闭 {% data variables.product.prodname_project_v1 %}](/articles/closing-a-project-board)”。

重新打开 {% data variables.projects.projects_v1_board %} 时，可以选择同步自动化，便于根据为板配置的自动化设置更新板上卡的位置。

1. 导航到要重新打开的 {% data variables.projects.projects_v1_board %}。
{% data reusables.project-management.click-menu %}
3. 选择是同步你的 {% data variables.projects.projects_v1_board %} 自动化，还是在不同步的情况下重新打开 {% data variables.projects.projects_v1_board %}。
    - 若要重新打开 {% data variables.projects.projects_v1_board %} 并同步自动化，请单击“重新打开并同步项目”。
  ![选择“重新打开并重新同步项目”按钮](/assets/images/help/projects/reopen-and-sync-project.png)
    - 若要在不同步自动化的情况下重新打开 {% data variables.projects.projects_v1_board %}，请使用重新打开下拉菜单，在其中单击“仅重新打开”。 然后单击“仅重新打开”。
  ![重新打开关闭的项目板下拉菜单](/assets/images/help/projects/reopen-closed-project-board-drop-down-menu.png)

## 延伸阅读

- [为 {% data variables.product.prodname_projects_v1 %} 配置自动化](/articles/configuring-automation-for-project-boards)
