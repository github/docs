---
title: '关于 {% data variables.product.prodname_projects_v1 %} 的自动化'
intro: '可以配置自动工作流，使 {% data variables.projects.projects_v1_board %} 卡的状态与关联的问题和拉取请求保持同步。'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-automation-for-project-boards
  - /articles/about-automation-for-project-boards
  - /github/managing-your-work-on-github/about-automation-for-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Automation for {% data variables.product.prodname_projects_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 76cea8f38d7470bd7b6212ae1f93601b5e8c923b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423338'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %} 有关详细信息，请参阅“[组织的 {% data variables.product.prodname_projects_v1_caps %} 权限](/articles/project-board-permissions-for-an-organization)”。

可根据 {% data variables.projects.projects_v1_board %} 列的触发事件自动执行操作。 这可以省去 {% data variables.projects.projects_v1_board %} 管理过程中的一些手动任务。 例如，你可配置“待处理”列，其中你添加到 {% data variables.projects.projects_v1_board %} 的任何新问题或拉取请求都会自动移至配置的列。 有关详细信息，请参阅“[为 {% data variables.product.prodname_projects_v1 %} 配置自动化](/articles/configuring-automation-for-project-boards)”。  

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

{% data variables.projects.projects_v1_board_caps %} 自动化还可通过为某些操作创建标准工作流，帮助团队共同了解 {% data variables.projects.projects_v1_board %} 的目的和团队开发过程。

{% data reusables.project-management.resync-automation %}

## 自动化选项

| 列预设 | 配置选项 |
| --- | --- |
| 所需操作 | <ul><li>将所有新增的议题移到此处</li><li>将所有新增的拉取请求移到此处</li><li>将所有重新打开的议题移到此处</li><li>将所有重新打开的拉取请求移到此处</li></ul> |
| 正在学习 | <ul><li>将所有新打开的拉取请求移到此处</li><li>将所有重新打开的议题移到此处</li><li>将所有重新打开的拉取请求移到此处</li><li>将所有符合基本分支需要的最低评论数量的拉取请求移到此处</li><li>将所有不再符合基本分支需要的最低评论数量的拉取请求移到此处</li></ul> |
| 完成 | <ul><li>将所有关闭的议题移到此处</li><li>将所有合并的拉取请求移到此处</li><li>将所有已关闭、已取消合并的拉取请求移到此处</li></ul> |

## 项目进度跟踪

可跟踪 {% data variables.projects.projects_v1_board %} 进度。 "To do"（待处理）、"In progress"（进行中）或 "Done"（完成）列中的卡计入总体项目进度。 {% data reusables.project-management.project-progress-locations %}

有关详细信息，请参阅“[跟踪 {% data variables.product.prodname_project_v1 %} 进度](/github/managing-your-work-on-github/tracking-progress-on-your-project-board)”。

## 延伸阅读
- [为 {% data variables.product.prodname_projects_v1 %} 配置自动化](/articles/configuring-automation-for-project-boards){% ifversion fpt or ghec %}
- [复制 {% data variables.product.prodname_project_v1 %}](/articles/copying-a-project-board){% endif %}
