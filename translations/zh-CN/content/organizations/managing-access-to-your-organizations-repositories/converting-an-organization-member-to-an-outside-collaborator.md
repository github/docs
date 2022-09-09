---
title: 将组织成员转换为外部协作者
intro: 如果组织的某些当前成员只需要访问特定仓库，例如顾问或临时员工，你可以将他们转换为外部协作者。
permissions: Organization owners can convert an organization member to an outside collaborator.
redirect_from:
  - /articles/converting-an-organization-member-to-an-outside-collaborator
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-organization-member-to-an-outside-collaborator
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Convert member to collaborator
ms.openlocfilehash: 4b9330559895ec96cb6c842d89dbe4e9a8773685
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146754596'
---
## 关于组织成员转换为外部协作者

可以将组织的成员转换为外部协作者。 有关外部协作者的详细信息，请参阅“[将外部协作者添加到组织中的存储库](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)”。

{% ifversion fpt or ghec %}如果组织由企业所有，则可能会限制将组织成员转换{% elsif ghes or ghae %}转换{% endif %}为外部协作者。 有关详细信息，请参阅“[在企业中实施存储库管理策略]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-{% ifversion fpt or ghec %}outside-{% endif %}collaborators-to-repositories){% ifversion ghec or ghes or ghae %}”。"{% elsif fpt %}"（在 {% data variables.product.prodname_ghe_cloud %} 文档中）。{% endif %}

{% data reusables.organizations.outside-collaborators-use-seats %} {% data reusables.organizations.outside_collaborator_forks %}

将组织成员转换为外部协作者后，他们将只能访问其当前团队成员资格允许的仓库。 他们将不再是组织的正式成员，不再能够：

- 创建团队
- 查看所有组织成员和团队
- @mention 任何可见团队
- 成为团队维护员

有关详细信息，请参阅“[组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”。

建议查看组织成员对仓库的访问权限，以确保其访问权限符合您的预期。 有关详细信息，请参阅[管理个人对组织存储库的访问](/articles/managing-an-individual-s-access-to-an-organization-repository)。

将组织成员转换为外部协作者时，他们作为组织成员的权限将保存三个月，因此，如果你在该时间范围内{% ifversion fpt or ghec %} 邀请他们重新加入{% else %} 将他们重新添加到{% endif %} 你的组织，你可以恢复其成员权限。 有关详细信息，请参阅“[恢复组织的前成员](/articles/reinstating-a-former-member-of-your-organization)”。

## 将组织成员转换为外部协作者

{% note %}

注意：如果组织所有者{% ifversion not fpt %} 或企业所有者{% endif %} 限制了你添加外部协作者的能力，你可能无法将组织成员转换为外部协作者。

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. 选择要转换为外部协作者的人员。
  ![选中两名成员的成员列表](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. 在成员列表的上方，使用下拉菜单并单击“转换为外部协作者”。
  ![含有将成员转换为外部协作者选项的下拉菜单](/assets/images/help/teams/user-bulk-management-options.png)
6. 阅读有关将成员转换为外部协作者的信息，然后单击“转换为外部协作者”。
  ![有关外部协作者权限的信息和转换为外部协作者按钮](/assets/images/help/teams/confirm-outside-collaborator-bulk.png)

## 延伸阅读

- [将外部协作者添加到组织中的存储库](/articles/adding-outside-collaborators-to-repositories-in-your-organization)
- [从组织存储库中删除外部协作者](/articles/removing-an-outside-collaborator-from-an-organization-repository)
- [将外部协作者转换为组织成员](/articles/converting-an-outside-collaborator-to-an-organization-member)
