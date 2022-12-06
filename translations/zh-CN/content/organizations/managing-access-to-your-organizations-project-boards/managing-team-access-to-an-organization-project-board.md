---
title: '管理团队对组织 {% data variables.product.prodname_project_v1 %} 的访问权限'
intro: '作为组织所有者或 {% data variables.projects.projects_v1_board %} 管理员，你可以授予单个成员对组织拥有的 {% data variables.projects.projects_v1_board %} 的访问权限。'
redirect_from:
  - /articles/managing-team-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-access-to-an-organization-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage team access
allowTitleToDifferFromFilename: true
ms.openlocfilehash: c49fab76bbf286f865e3845356213bc1af18b20a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108216'
---
{% data reusables.projects.project_boards_old %}

{% warning %}

警告：
- 如果团队可以直接访问 {% data variables.projects.projects_v1_board %}，可以更改团队的权限级别。 如果团队对 {% data variables.projects.projects_v1_board %} 的访问权限是从父团队继承的，则必须更改父团队对 {% data variables.projects.projects_v1_board %} 的访问权限。
- 如果为父团队添加或移除 {% data variables.projects.projects_v1_board %} 访问权限，每个父级的子团队也将收到或失去对 {% data variables.projects.projects_v1_board %} 的访问权限。 有关详细信息，请参阅“[关于团队](/articles/about-teams)”。

{% endwarning %}

## 授予团队对 {% data variables.projects.projects_v1_board %} 的访问权限

可以授予整个团队对 {% data variables.projects.projects_v1_board %} 的相同权限级别。

{% note %}

注意：{% data reusables.project-management.cascading-permissions %} 例如，如果组织所有者授予团队读取 {% data variables.projects.projects_v1_board %} 的权限，且 {% data variables.projects.projects_v1_board %} 管理员以个人协作者的身份授予其中一个团队成员对该板的管理员权限，则该成员将拥有 {% data variables.projects.projects_v1_board %} 的管理员权限。 有关详细信息，请参阅“[组织的 {% data variables.product.prodname_project_v1_caps %} 权限](/articles/project-board-permissions-for-an-organization)”。

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. 单击“项目(经典)”{% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %}
8. 在左侧边栏中，单击“团队”。
9. 要添加团队，请单击“添加团队: 选择团队”。 然后，从下拉菜单中选择一个团队，或者搜索要添加的团队。
 ![添加包含组织中团队列表的团队下拉菜单](/assets/images/help/projects/add-a-team.png)
10. 在团队名称旁边，使用下拉菜单选择所需的权限级别：读取、写入或管理员。![包含“读取”、“写入”和“管理员”选项的团队权限下拉菜单](/assets/images/help/projects/org-project-team-choose-permissions.png)  

## 配置团队对 {% data variables.projects.projects_v1_board %} 的访问权限

如果团队对 {% data variables.projects.projects_v1_board %} 的访问权限是从父团队继承的，则必须更改父团队对 {% data variables.projects.projects_v1_board %} 的访问权限，以更新子团队的访问权限。

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
4. 在团队的对话上方，单击 {% octicon "project" aria-label="The Projects icon" %}“项目”。
  ![团队存储库选项卡](/assets/images/help/organizations/team-project-board-button.png)
5. 若要更改权限级别，请使用要更新的 {% data variables.projects.projects_v1_board %} 的右侧的下拉列表。 若要移除 {% data variables.projects.projects_v1_board %}，请单击 {% octicon "trash" aria-label="The trash icon" %}。
  ![通过团队垃圾桶按钮删除项目板](/assets/images/help/organizations/trash-button.png)

{% ifversion projects-v2-add-to-team %}

## 延伸阅读

- [将项目添加到团队](/issues/planning-and-tracking-with-projects/managing-your-project/adding-your-project-to-a-team)


{% endif %}
