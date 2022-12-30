---
title: '将外部协作者添加到组织中的 {% data variables.product.prodname_project_v1 %}'
intro: '作为组织所有者或 {% data variables.projects.projects_v1_board %} 管理员，你可以添加外部协作者并自定义他们对 {% data variables.projects.projects_v1_board %} 的访问权限。'
redirect_from:
  - /articles/adding-an-outside-collaborator-to-a-project-board-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-an-outside-collaborator-to-a-project-board-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add a collaborator
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 517e0c6f71d1b70eb19dc85dfe3334ff0144c814
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108767'
---
{% data reusables.projects.project_boards_old %}

外部协作者并未明确是组织的成员，但对组织的 {% data variables.projects.projects_v1_board %} 具有访问权限。

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. 单击“项目(经典)”{% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
9. 在 "Search by username, full name or email address"（按用户名、全名或电子邮件地址搜索）下，输入外部协作者的姓名、用户名或 {% data variables.product.prodname_dotcom %} 电子邮件地址。
   ![在“搜索”字段中输入了 Octocat 用户名的“协作者”部分](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %} {% data reusables.project-management.collaborator-permissions %}
