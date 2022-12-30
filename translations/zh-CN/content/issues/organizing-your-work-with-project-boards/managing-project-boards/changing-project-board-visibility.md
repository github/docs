---
title: '更改 {% data variables.product.prodname_project_v1 %} 的可见性'
intro: '作为组织所有者或 {% data variables.projects.projects_v1_board %} 管理员，你可以将 {% data variables.projects.projects_v1_board %} 设为{% ifversion ghae %}内部{% else %}公共{% endif %}或专用。'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/changing-project-board-visibility
  - /articles/changing-project-board-visibility
  - /github/managing-your-work-on-github/changing-project-board-visibility
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: Change visibility
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 445675ee14c1d1fb47ded4321ae6ac8816fa6d6f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108122'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.project-board-visibility %}

{% note %}

**{% ifversion classic-project-visibility-permissions %}Notes{% else %}Note{% endif %}:** {% ifversion classic-project-visibility-permissions %}

* {% data reusables.projects.owners-can-limit-visibility-permissions %}
* {% endif %}将 {% data variables.projects.projects_v1_board %} 设为{% ifversion ghae %}内部{% else %}公共{% endif %}时，组织成员默认获得读取权限。 你可以授予特定组织成员写入或管理员权限，方法是为他们所在的团队授予访问权限或将他们作为协作者添加到 {% data variables.projects.projects_v1_board %}。 有关详细信息，请参阅“[组织的 {% data variables.product.prodname_project_v1_caps %} 权限](/articles/project-board-permissions-for-an-organization)”。

{% endnote %}

1. 导航到要设为{% ifversion ghae %}内部{% else %}公共{% endif %}或专用的项目板。
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.choose-visibility %}
1. 单击“保存” 。
