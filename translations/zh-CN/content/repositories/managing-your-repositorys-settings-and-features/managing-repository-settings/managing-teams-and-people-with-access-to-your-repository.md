---
title: 管理有权访问存储库的团队和人员
intro: 您可以查看有权访问仓库的每个人并调整权限。
permissions: People with admin access to a repository can manage teams and people with access to a repository.
redirect_from:
  - /github/administering-a-repository/managing-people-and-teams-with-access-to-your-repository
  - /github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: '>= 3.4'
topics:
  - Repositories
shortTitle: Teams & people
ms.openlocfilehash: e378332dda56fad39b18fd10da4ee9bf799a9fe3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129309'
---
## 关于存储库的访问管理

对于您在 {% data variables.product.prodname_dotcom %} 上管理的每个仓库，您可以查看有权访问仓库的每个团队或人员的概览。 在概述中，您还可以邀请新的团队或人员，更改存储库的每个团队或人员的角色，或删除对存储库的访问权限。

此概览可帮助您审核对仓库、内部或外部承包商或员工的访问权限，并有效响应安全事件。

{% data reusables.organizations.mixed-roles-warning %}

有关存储库角色的详细信息，请参阅“[个人帐户存储库的权限级别](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository)”和“[组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”。

![访问权限管理概览](/assets/images/help/repository/manage-access-overview.png)

## 过滤团队和人员列表

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %}
1. 在“Manage access（管理访问权限）”下的搜索字段中，开始输入您要查找的团队或人员的名称。 （可选）使用下拉菜单筛选搜索。 
  ![用于筛选具有访问权限的团队或人员列表的搜索字段](/assets/images/help/repository/manage-access-filter.png)

## 更改团队或人员的权限

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %}
4. 在“Manage access（管理访问）”下，找到您要更改其角色的团队或人员，然后选择 Role（角色）下拉菜单并点击新角色。
  ![使用“角色”下拉列表为团队或人员选择新权限](/assets/images/help/repository/manage-access-role-drop-down.png)

## 邀请团队或人员

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %} {% data reusables.organizations.invite-teams-or-people %}
5. 在搜索字段中，开始输入要邀请的团队或人员的名称，然后单击匹配列表中的名称。
  ![用于输入要邀请加入存储库的团队或人员名称的搜索字段](/assets/images/help/repository/manage-access-invite-search-field.png)
6. 在“选择角色”下，选择要授予团队或人员的存储库角色，然后单击“将名称添加到存储库”。
  ![为团队或人员选择权限](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## 删除团队或人员的访问权限

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %}
4. 在“管理访问权限”下，找到要删除其访问权限的团队或人员，然后单击 {% octicon "trash" aria-label="The trash icon" %}。
  ![用于删除访问权限的回收站图标](/assets/images/help/repository/manage-access-remove.png)

## 延伸阅读

- [设置存储库可见性](/github/administering-a-repository/setting-repository-visibility)
- [为组织设置基本权限](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization)
