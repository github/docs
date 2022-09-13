---
title: '管理个人对组织 {% data variables.product.prodname_project_v1 %} 的访问权限'
intro: '作为组织所有者或 {% data variables.projects.projects_v1_board %} 管理员，你可以管理单个成员对组织拥有的 {% data variables.projects.projects_v1_board %} 的访问权限。'
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-project-board
  - /articles/managing-an-individuals-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage individual access
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 3fd77225e83df2124e8e026453b539f6961ff473
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147422890'
---
{% data reusables.projects.project_boards_old %}

{% note %}

注意：{% data reusables.project-management.cascading-permissions %} 有关详细信息，请参阅[组织的 {% data variables.product.prodname_project_v1_caps %} 权限](/articles/project-board-permissions-for-an-organization)。 

{% endnote %}

## 授予组织成员访问 {% data variables.projects.projects_v1_board %} 的权限

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. 单击“项目(经典)”{% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
9. 在 "Search by username, full name or email address"（按用户名、全名或电子邮件地址搜索）下，输入协作者的姓名、用户名或 {% data variables.product.prodname_dotcom %} 电子邮件地址。
   ![在“搜索”字段中输入了 Octocat 用户名的“协作者”部分](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %} {% data reusables.project-management.collaborator-permissions %}

## 更改组织成员对 {% data variables.projects.projects_v1_board %} 的访问权限

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. 单击“项目(经典)”{% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.collaborator-permissions %}

## 移除组织成员对 {% data variables.projects.projects_v1_board %} 的访问权限

从 {% data variables.projects.projects_v1_board %} 移除协作者时，根据他们其他角色的权限，他们可能仍然保有对板的访问权限。 若要完全移除对 {% data variables.projects.projects_v1_board %} 的访问权限，必须移除其拥有的每个角色的访问权限。 例如，某人可以作为组织成员或团队成员具有 {% data variables.projects.projects_v1_board %} 的访问权限。 有关详细信息，请参阅[组织的 {% data variables.product.prodname_project_v1_caps %} 权限](/articles/project-board-permissions-for-an-organization)。

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. 单击“项目(经典)”{% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.remove-collaborator %}

## 延伸阅读

- [组织的 {% data variables.product.prodname_project_v1_caps %} 权限](/articles/project-board-permissions-for-an-organization)
