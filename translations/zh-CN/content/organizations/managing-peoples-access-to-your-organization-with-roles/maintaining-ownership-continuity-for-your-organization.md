---
title: 保持组织的所有权连续性
intro: 为避免所有权失效，组织可以有多个组织所有者。
redirect_from:
  - /articles/changing-a-person-s-role-to-owner
  - /articles/changing-a-persons-role-to-owner
  - /github/setting-up-and-managing-organizations-and-teams/changing-a-persons-role-to-owner
  - /github/setting-up-and-managing-organizations-and-teams/managing-ownership-continuity-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/maintaining-ownership-continuity-for-your-organization
permissions: Organization owners can promote any member of an organization to an organization owner.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Maintain ownership continuity
ms.openlocfilehash: 636982e8985a79e617b01220df8a63256c874b70
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147885970'
---
## 关于保持组织的所有权连续性

{% data reusables.organizations.org-ownership-recommendation %}

组织所有者对组织具有完全管理权限。 {% data reusables.organizations.new-org-permissions-more-info %}

{% note %}

**注意**：作为组织所有者，你可以更改其他组织成员和所有者的角色。 您不能改变自己的角色。 

{% endnote %}

{% ifversion enterprise-owner-join-org %} 如果组织由企业帐户所有，则任何企业所有者都可以将自己设为组织的所有者。 有关详细信息，请参阅“[管理企业拥有的组织中的角色](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)”。
{% endif %}

## 任命组织所有者

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. 选择要晋升为所有者的人员。
  ![选择了两名成员的成员列表](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. 在成员列表的上方，使用下拉菜单并单击“更改角色”。
  ![包含删除成员选项的下拉菜单](/assets/images/help/teams/user-bulk-management-options.png)
6. 为人员选择新角色，然后单击“更改角色”。
  ![选择所有者和成员角色的单选按钮和更改角色按钮](/assets/images/help/teams/select-and-confirm-new-role-bulk.png)
