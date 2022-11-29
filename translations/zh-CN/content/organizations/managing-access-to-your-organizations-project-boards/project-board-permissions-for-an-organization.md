---
title: '组织的 {% data variables.product.prodname_project_v1_caps %} 权限'
intro: '组织所有者以及具有 {% data variables.projects.projects_v1_board %} 管理员权限的人员可以自定义谁对组织的 {% data variables.projects.projects_v1_boards %} 具有读取、写入和管理员权限。'
redirect_from:
  - /articles/project-board-permissions-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/project-board-permissions-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: '{% data variables.product.prodname_project_v1_caps %} permissions'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: fbc3ec7db52d6b4a417a4e9e93aea9ae717e2fca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614205'
---
{% data reusables.projects.project_boards_old %}

## 权限概述

对于人员和团队，{% data variables.projects.projects_v1_board %} 有三种权限级别：

{% data reusables.project-management.project-board-permissions %}

组织所有者以及具有管理员权限的人员可以单独使个人以外部协作者或组织成员身份，或通过其在团队或组织中的成员身份来访问组织 {% data variables.projects.projects_v1_board %}。 外部协作者是指并非组织成员但被授予协作参与组织的人员。

组织所有者以及具有 {% data variables.projects.projects_v1_board %} 管理员权限的人员还可以：
- 设置所有组织成员的默认项目板权限。
- 管理组织成员、团队和外部协作者对项目板的访问。 有关详细信息，请参阅“[管理团队对组织 {% data variables.product.prodname_project_v1 %} 的访问权限](/articles/managing-team-access-to-an-organization-project-board)”、“[管理个人对组织 {% data variables.product.prodname_project_v1 %} 的访问权限](/articles/managing-an-individual-s-access-to-an-organization-project-board)”或“[管理组织成员对 {% data variables.product.prodname_project_v1 %} 的访问权限](/articles/managing-access-to-a-project-board-for-organization-members)”。
- 管理项目板可见性。 有关详细信息，请参阅“[管理组织成员对 {% data variables.product.prodname_project_v1 %} 的访问权限](/articles/managing-access-to-a-project-board-for-organization-members)”。

## {% data variables.projects.projects_v1_boards %} 的级联权限

{% data reusables.project-management.cascading-permissions %}

例如，如果组织所有者向所有组织成员授予了对 {% data variables.projects.projects_v1_board %} 的读取权限，并且 {% data variables.projects.projects_v1_board %} 管理员向某个组织成员（个人协作者身份）授予对该板的写权限，则该成员将拥有对 {% data variables.projects.projects_v1_board %} 的写权限。

## {% data variables.projects.projects_v1_board_caps %} 可见性

{% ifversion classic-project-visibility-permissions %}{% data reusables.projects.owners-can-limit-visibility-permissions %}{% endif %}

{% data reusables.project-management.project-board-visibility %} 可以将 {% data variables.projects.projects_v1_board %} 的可见性从专用更改为{% ifversion ghae %}内部{% else %}公共{% endif %}，反之亦然。 有关详细信息，请参阅“[更改 {% data variables.product.prodname_project_v1 %} 可见性](/articles/changing-project-board-visibility)”。

## 延伸阅读

- [更改 {% data variables.product.prodname_project_v1 %} 可见性](/articles/changing-project-board-visibility)
- [管理个人对组织 {% data variables.product.prodname_project_v1 %} 的访问权限](/articles/managing-an-individual-s-access-to-an-organization-project-board)
- [管理团队对组织 {% data variables.product.prodname_project_v1 %} 的访问权限](/articles/managing-team-access-to-an-organization-project-board)
- [管理组织成员对 {% data variables.product.prodname_project_v1 %} 的访问权限](/articles/managing-access-to-a-project-board-for-organization-members)
