---
title: 为组织设置基本权限
intro: 您可以为组织拥有的仓库设置基本权限。
permissions: Organization owners can set base permissions for an organization.
redirect_from:
- /github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Set base permissions
ms.openlocfilehash: 734ced023e4a1043634650ff3e4305727397095c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "146179925"
---
## 关于组织的基本权限

您可以在访问组织的任何仓库时设置适用于组织所有成员的基本权限。 基本权限不适用于外部协作者。

{% ifversion fpt or ghec %}默认情况下，组织的成员将对组织的存储库拥有读取权限。{% endif %}

如果对组织存储库具有管理员访问权限的人员向成员授予对存储库的更高级别的访问权限，则较高级别的访问权限将覆盖基本权限。

{% ifversion custom-repository-roles %} 如果你创建了继承角色的访问权限低于组织基本权限的自定义存储库角色，则分配给该角色的任何成员都将默认使用组织的基本权限，而不是继承的角色。 有关详细信息，请参阅“[管理组织的自定义存储库角色](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”。
{% endif %}

## 设置基本权限

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. 在“Base permissions（基本权限）”下，使用下拉菜单选择新的基本权限。
  ![从基本权限下拉菜单中选择新的权限级别](/assets/images/help/organizations/base-permissions-drop-down.png)
6. 查看更改。 要确认，请单击“将默认权限更改为 PERMISSION”。
  ![审查并确认基本权限的更改](/assets/images/help/organizations/base-permissions-confirm.png)

## 延伸阅读

- [组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
- [将外部协作者添加到组织中的存储库](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)
