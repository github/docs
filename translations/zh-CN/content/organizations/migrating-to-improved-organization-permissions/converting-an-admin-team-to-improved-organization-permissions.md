---
title: 将管理员团队转换为改进的组织权限
intro: 如果您的组织是在 2015 年 9 月之后创建的，则您的组织默认具有改进的组织权限。 在 2015 年 9 月之前创建的组织可能需要将较旧的所有者和管理员团队迁移到改进的权限模型。 旧管理员团队的成员在其团队被迁移到改进的组织权限模型之前，自动保留创建仓库的权限。
redirect_from:
  - /articles/converting-your-previous-admin-team-to-the-improved-organization-permissions
  - /articles/converting-an-admin-team-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-admin-team-to-improved-organization-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Convert admin team
ms.openlocfilehash: 183ccd5d1252265ed6ac94924703ceb75ed8adad
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145101332'
---
要删除旧管理员团队成员创建仓库的权限，请为这些成员创建新团队，确保该团队对组织仓库具有必要的权限，然后删除旧管理员团队。

有关详细信息，请参阅“[组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”。

{% warning %}

警告：
- 如果旧管理员团队中有成员不是其他团队的成员，则删除该团队将导致从组织中删除这些成员。 在删除该团队之前，请确保其成员已经是组织的直接成员，或者具有对必要仓库的协作者权限。
- 为防止丢失旧管理员团队成员创建的私有复刻，在删除旧管理员团队之前必须完成下面的步骤 1-3。
- 由于“管理员”是组织中具有[某些存储库的特定访问](/articles/repository-permission-levels-for-an-organization)的组织成员的术语，因此建议在决定的任何团队名称中避免使用该术语。

{% endwarning %}

1. [创建新的团队](/articles/creating-a-team)。
2. [将旧管理员团队的每个成员添加](/articles/adding-organization-members-to-a-team)到新团队。
3. 对于旧团队可访问的每个存储库，[为新团队提供同等的访问权限](/articles/managing-team-access-to-an-organization-repository)。
4. [删除旧管理员团队](/articles/deleting-a-team)。
