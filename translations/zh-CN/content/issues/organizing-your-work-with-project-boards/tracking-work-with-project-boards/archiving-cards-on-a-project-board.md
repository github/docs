---
title: '将 {% data variables.product.prodname_project_v1 %} 上的卡存档'
intro: '可将 {% data variables.projects.projects_v1_board %} 卡存档，以整理工作流而不失去项目的历史上下文。'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/archiving-cards-on-a-project-board
  - /articles/archiving-cards-on-a-project-board
  - /github/managing-your-work-on-github/archiving-cards-on-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Archive cards on {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: de1d0a4981a46c4ceddd73b5d1f49b74f111601f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423586'
---
{% data reusables.projects.project_boards_old %}

{% data variables.projects.projects_v1_board %} 中的自动化不适用于存档的 {% data variables.projects.projects_v1_board %} 卡。 例如，如果关闭 {% data variables.projects.projects_v1_board %} 存档中的问题，存档的卡不会自动移到“已完成”列。 从 {% data variables.projects.projects_v1_board %} 存档还原卡时，该卡将回到存档它的列。

## 将 {% data variables.projects.projects_v1_board %} 上的卡存档

1. 在 {% data variables.projects.projects_v1_board %} 中，找到要存档的卡片，然后单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}。
![用于编辑项目板卡片的选项列表](/assets/images/help/projects/select-archiving-options-project-board-card.png)
2. 单击“存档”。
![从菜单中选择存档选项](/assets/images/help/projects/archive-project-board-card.png)

## 从边栏还原 {% data variables.projects.projects_v1_board %} 上的卡

{% data reusables.project-management.click-menu %}
2. 单击“{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}”，然后单击“查看存档”。
  ![从菜单中选择查看存档选项](/assets/images/help/projects/select-view-archive-option-project-board-card.png)
3. 在要取消存档的 {% data variables.projects.projects_v1_board %} 卡上方，单击“还原”。
  ![选择还原项目板卡片](/assets/images/help/projects/restore-card.png)
