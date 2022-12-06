---
title: '管理组织成员对 {% data variables.product.prodname_project_v1 %} 的访问权限'
intro: '组织所有者或 {% data variables.projects.projects_v1_board %} 管理员可以设置所有组织成员对 {% data variables.projects.projects_v1_board %} 的默认权限级别。'
redirect_from:
  - /articles/managing-access-to-a-project-board-for-organization-members
  - /github/setting-up-and-managing-organizations-and-teams/managing-access-to-a-project-board-for-organization-members
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage access for members
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 4c0b280f6c1b28532b191282db465b5ae5b3c274
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108212'
---
{% data reusables.projects.project_boards_old %}

默认情况下，组织成员拥有对其组织的 {% data variables.projects.projects_v1_boards %} 的写权限，除非组织所有者或 {% data variables.projects.projects_v1_board %} 管理员对特定 {% data variables.projects.projects_v1_boards %} 设置不同的权限。

## 为所有组织成员设置基线权限级别

{% tip %}

提示：可向组织成员授予更高的 {% data variables.projects.projects_v1_board %} 权限。 有关详细信息，请参阅“[组织的项目板权限](/articles/project-board-permissions-for-an-organization)”。

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. 单击“项目(经典)”{% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %}
8. 在“组织成员权限”下，为所有组织成员选择基线权限级别：“读取”、“写入”、“管理员”或“无”   。
![用于所有组织成员的基线项目板权限选项](/assets/images/help/projects/baseline-project-permissions-for-organization-members.png)
9. 单击“ **保存**”。

## 延伸阅读

- [管理个人对组织 {% data variables.product.prodname_project_v1 %} 的访问权限](/articles/managing-an-individual-s-access-to-an-organization-project-board)
- [管理团队对组织 {% data variables.product.prodname_project_v1 %} 的访问权限](/articles/managing-team-access-to-an-organization-project-board)
- [组织的 {% data variables.product.prodname_project_v1_caps %} 权限](/articles/project-board-permissions-for-an-organization)
