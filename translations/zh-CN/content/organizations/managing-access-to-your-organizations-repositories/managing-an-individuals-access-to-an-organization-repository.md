---
title: 管理个人对组织仓库的访问
intro: 您可以管理个人对组织拥有的仓库的访问。
redirect_from:
- /articles/managing-an-individual-s-access-to-an-organization-repository-early-access-program
- /articles/managing-an-individual-s-access-to-an-organization-repository
- /articles/managing-an-individuals-access-to-an-organization-repository
- /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Manage individual access
permissions: People with admin access to a repository can manage access to the repository.
ms.openlocfilehash: 90a9df66f0cd4089634b2d29dd798b37629bbb7b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145127478"
---
## 关于对组织仓库的访问

从组织中的仓库删除协作者时，该协作者会失去对仓库的读写权限。 如果仓库是私有的，并且协作者对仓库进行了复刻，则其复刻也会被检测到，但协作者仍然保留仓库的任何本地克隆副本。

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
## 管理个人对组织仓库的访问
您可以在仓库设置中授予个人对仓库的访问权限，或更改个人对仓库的访问权限级别。 有关详细信息，请参阅“[管理有权访问存储库的团队和人员](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)”。
{% else %}
## 授予用户对仓库的访问权限

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-manage-access %} {% data reusables.organizations.invite-teams-or-people %}
1. 在搜索字段中，开始输入要邀请的人员的名称，然后单击匹配列表中的名称。
  ![用于输入要邀请加入存储库的团队或人员名称的搜索字段](/assets/images/help/repository/manage-access-invite-search-field.png)
6. 在“选择角色”下，选择要分配给此人的存储库角色，然后单击“将姓名添加到存储库”。
  ![为团队或人员选择权限](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## 管理个人对组织仓库的访问

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. 单击“成员”或“外部协作者”以管理具有不同访问权限类型的人员 。 ![邀请成员或外部协作者加入组织的按钮](/assets/images/help/organizations/select-outside-collaborators.png)
5. 在要管理的人员名称右侧，使用 {% octicon "gear" aria-label="The Settings gear" %} 下拉菜单，然后单击“管理”。
  ![管理访问链接](/assets/images/help/organizations/member-manage-access.png)
6. 在“管理访问权限”页面上的存储库旁边，单击“管理访问权限”。
![“管理访问权限”按钮](/assets/images/help/organizations/repository-manage-access.png)
7. 检查个人对指定仓库的访问权限，例如他们是协作者还是通过团队成员资格来访问仓库。
![用户的存储库访问权限矩阵](/assets/images/help/organizations/repository-access-matrix-for-user.png) {% endif %}
## 延伸阅读

{% ifversion fpt or ghec %}-“[限制与存储库的交互](/articles/limiting-interactions-with-your-repository)”{% endif %}
- [组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
