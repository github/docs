---
title: '关闭 {% data variables.product.prodname_project_v1 %}'
intro: '如果已完成 {% data variables.projects.projects_v1_board %} 中的所有任务，或者无需再使用 {% data variables.projects.projects_v1_board %}，可以关闭 {% data variables.projects.projects_v1_board %}。'
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
ms.openlocfilehash: fb62345b404e94ddd5a6a22995b9481c9855914d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147422706'
---
{% data reusables.projects.project_boards_old %}

关闭 {% data variables.projects.projects_v1_board %} 时，默认情况下，任何已配置的工作流自动化都会暂停。

如果重新打开 {% data variables.projects.projects_v1_board %}，可以选择同步自动化，以便根据为项目板配置的自动化设置来更新板上卡的位置。 有关详细信息，请参阅“[重新打开已关闭的 {% data variables.product.prodname_project_v1 %}](/articles/reopening-a-closed-project-board)”或“[关于 {% data variables.product.prodname_projects_v1 %} 的自动化](/articles/about-automation-for-project-boards)”。

1. 导航到存储库或组织中或由个人帐户拥有的 {% data variables.projects.projects_v1_boards %} 列表。
2. 在项目列表中，在要关闭的 {% data variables.projects.projects_v1_board %} 旁边单击 {% octicon "chevron-down" aria-label="The chevron icon" %}。
![项目板名称右侧的 V 形图标](/assets/images/help/projects/project-list-action-chevron.png)
3. 单击“关闭”。
![关闭“项目板”下拉菜单中的项](/assets/images/help/projects/close-project.png)

## 延伸阅读

- [关于 {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)
- [删除 {% data variables.product.prodname_project_v1 %}](/articles/deleting-a-project-board)
- [在存储库中禁用 {% data variables.product.prodname_projects_v1 %}](/articles/disabling-project-boards-in-a-repository)
- [在组织中禁用 {% data variables.product.prodname_projects_v1 %}](/articles/disabling-project-boards-in-your-organization)
- [组织的 {% data variables.product.prodname_project_v1_caps %} 权限](/articles/project-board-permissions-for-an-organization)
