---
title: '将存储库链接到 {% data variables.product.prodname_project_v1 %}'
intro: '可以将存储库链接到组织或个人帐户的 {% data variables.projects.projects_v1_board %}。'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/linking-a-repository-to-a-project-board
  - /articles/linking-a-repository-to-a-project-board
  - /github/managing-your-work-on-github/linking-a-repository-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: Link repository to board
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 939266bff35928f5b0ae33fe1cce1b380698ee85
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423258'
---
{% data reusables.projects.project_boards_old %}

对 {% data variables.projects.projects_v1_board %} 具有写入权限的任何人都可以将该组织或个人帐户拥有的存储库链接到 {% data variables.projects.projects_v1_board %}。 有关详细信息，请参阅“[组织的 {% data variables.product.prodname_project_v1_caps %} 权限](/articles/project-board-permissions-for-an-organization/)”或“[用户拥有的 {% data variables.product.prodname_projects_v1 %} 的权限级别](/articles/permission-levels-for-user-owned-project-boards/)”。

{% data reusables.project-management.link-repos-to-project-board %} 您可以在卡中输入议题或拉取请求 URL，从任何未链接的仓库添加议题和拉取请求。 有关详细信息，请参阅“[向 {% data variables.product.prodname_project_v1 %} 添加问题和拉取请求](/articles/adding-issues-and-pull-requests-to-a-project-board)”。

1. 导航到要链接存储库的 {% data variables.projects.projects_v1_board %}。
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %}
4. 在左侧边栏中，单击“已链接的存储库”。
![左侧边栏中“已链接的存储库”菜单选项](/assets/images/help/projects/project-board-linked-repositories-setting.png)
5. 单击“链接存储库”。
![“已链接的存储库”选项卡上的“链接存储库”按钮](/assets/images/help/projects/link-repository-button.png)
6. 搜索要链接的仓库。
![“链接存储库”窗口中的搜索字段](/assets/images/help/projects/search-to-link-repository.png)
7. 单击“链接”。 若要取消链接，请单击“取消链接”。
![“链接”按钮](/assets/images/help/projects/link-button.png)

{% note %}

注意：要将存储库链接到组织或用户拥有的 {% data variables.projects.projects_v1_board %}，存储库需要启用问题。 也就是说，仓库有一个“议题”选项卡（在复刻的仓库中默认禁用议题）。  若要了解如何为存储库启用或禁用问题，请参阅“[为存储库禁用问题](/github/managing-your-work-on-github/disabling-issues)”。

{% endnote %}

## 延伸阅读

- [关于 {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)
