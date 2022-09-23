---
title: '在存储库中禁用 {% data variables.projects.projects_v1_boards %}'
intro: '如果你或你的团队以不同方式管理工作，那么存储库管理员可关闭存储库的 {% data variables.projects.projects_v1_boards %}。'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/disabling-project-boards-in-a-repository
  - /articles/disabling-project-boards-in-a-repository
  - /github/managing-your-work-on-github/disabling-project-boards-in-a-repository
  - /github/administering-a-repository/managing-repository-settings/disabling-project-boards-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: 'Disable {% data variables.projects.projects_v1_boards %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 0407d6df39ae664474aa3fb5c99dc7998df1b951
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147422658'
---
禁用 {% data variables.projects.projects_v1_boards %} 时，时间线或[审核日志](/articles/reviewing-your-security-log/)中将不再显示 {% data variables.projects.projects_v1_board %} 信息。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. 在“功能”下，取消选中“项目”复选框。
  ![删除项目复选框](/assets/images/help/projects/disable-projects-checkbox.png)

禁用 {% data variables.projects.projects_v1_boards %} 后，现有的 {% data variables.projects.projects_v1_boards %} 将不能通过以前的 URL 访问。 {% data reusables.organizations.disable_project_board_results %}
