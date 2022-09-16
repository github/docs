---
title: 管理团队对组织仓库的访问
intro: 您可以向团队授予仓库访问权限，删除团队的仓库访问权限，或者更改团队对仓库的权限级别。
redirect_from:
  - /articles/managing-team-access-to-an-organization-repository-early-access-program
  - /articles/managing-team-access-to-an-organization-repository
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-access-to-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage team access
ms.openlocfilehash: 34f912f4d5c55df30629b7b56200bef25281bf2d
ms.sourcegitcommit: 72e1c60459a610944184ca00e3ae60bf1f5fc6db
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876046'
---
对仓库具有管理员权限的人员可以管理团队对仓库的访问权限。 如果团队能够直接访问存储库，团队维护员可以更改其对存储库的访问权限。 如果团队对存储库的访问权限继承自父团队，维护员可以选择重置当前权限以匹配父团队的权限。

{% warning %}

警告：
- 如果团队能够直接访问仓库，您可以更改其权限级别。 如果团队对仓库的访问权限继承自父团队，则您必须更改团队对仓库的访问权限。
- 如果您添加或删除父团队的仓库访问权限，则其每个子团队也会获得或失去相应的仓库访问权限。 有关详细信息，请参阅“[关于团队](/articles/about-teams)”。

{% endwarning %}

## 授予团队对仓库的访问权限

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} 可在存储库设置中授予团队对存储库的访问权限，或更改团队对存储库的访问权限级别。 有关详细信息，请参阅“[管理有权访问存储库的团队和人员](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#inviting-a-team-or-person)”。 {% else %} {% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-repositories-tab %}
5. 在存储库列表上方，单击“添加存储库”。
  ![“添加存储库”按钮](/assets/images/help/organizations/add-repositories-button.png)
6. 输入存储库的名称，然后单击“将存储库添加到团队”。
  ![存储库搜索字段](/assets/images/help/organizations/team-repositories-add.png)
7. 也可选择在仓库名称右侧使用下拉菜单，为团队选择不同的权限级别。
  ![存储库访问级别下拉菜单](/assets/images/help/organizations/team-repositories-change-permission-level.png) {% endif %}
## 删除团队对仓库的访问权限

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} 可在存储库设置中删除团队对组织存储库的访问权限。 有关详细信息，请参阅“[管理有权访问存储库的团队和人员](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#removing-access-for-a-team-or-person)”。

如果团队可以直接访问仓库，您可以删除该团队对仓库的访问。 如果团队对仓库的访问权限继承自父团队，则必须删除父团队对仓库的访问权限才可删除其子团队的相应权限。

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% else %}

如果团队能够直接访问仓库，您可以更改其对仓库的访问权限。 如果团队对仓库的访问权限继承自父团队，则必须删除父团队对仓库的访问权限才可删除其子团队的相应权限。

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-repositories-tab %}
5. 选择要从团队删除的仓库。
  ![团队存储库列表，其中选中了某些存储库的复选框](/assets/images/help/teams/select-team-repositories-bulk.png)
6. 在存储库列表上方，使用下拉菜单，然后单击“从团队删除”。
  ![包含用于从团队删除存储库的选项的下拉菜单](/assets/images/help/teams/remove-team-repo-dropdown.png)
7. 检查要从团队删除的存储库，然后单击“删除存储库”。
  ![包含团队无法再访问的存储库列表的模态框](/assets/images/help/teams/confirm-remove-team-repos.png) {% endif %}
## 延伸阅读

- [组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
