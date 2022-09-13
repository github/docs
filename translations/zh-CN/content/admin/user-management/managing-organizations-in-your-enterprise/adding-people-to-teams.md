---
title: Adding people to teams（将用户添加到团队）
redirect_from:
  - /enterprise/admin/articles/adding-teams
  - /enterprise/admin/articles/adding-or-inviting-people-to-teams
  - /enterprise/admin/guides/user-management/adding-or-inviting-people-to-teams
  - /enterprise/admin/user-management/adding-people-to-teams
  - /admin/user-management/adding-people-to-teams
intro: '创建团队后，组织管理员可以将用户从 {% data variables.product.product_location %} 添加到团队并决定他们可以访问哪些存储库。'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Teams
  - User account
ms.openlocfilehash: 1246641db416630d0faed75821078618a4399eb8
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145098690'
---
每个团队都有自己单独定义的[组织所拥有存储库的访问权限](/articles/permission-levels-for-an-organization)。

- 具有所有者角色的成员可以向所有团队添加成员或从中移除现有组织成员。
- 具有管理员权限的团队成员仅可以修改所属团队的成员资格和仓库。

## 设置团队

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.invite_to_team %} {% data reusables.organizations.review-team-repository-access %}

{% ifversion ghes %}

## 将团队映射到 LDAP 组（例如，使用 LDAP 同步进行用户身份验证）

{% data reusables.enterprise_management_console.badge_indicator %}

要将新成员添加到已同步至 LDAP 组的团队，请将用户添加为 LDAP 组的成员，或者联系您的 LDAP 管理员。

{% endif %}
