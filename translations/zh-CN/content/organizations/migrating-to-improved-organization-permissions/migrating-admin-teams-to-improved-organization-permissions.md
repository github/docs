---
title: 将管理团队迁移到改进的组织权限
intro: 如果您的组织是在 2015 年 9 月之后创建的，则您的组织默认具有改进的组织权限。 在 2015 年 9 月之前创建的组织可能需要将较旧的所有者和管理员团队迁移到改进的权限模型。 旧管理员团队的成员在其团队被迁移到改进的组织权限模型之前，自动保留创建仓库的权限。
redirect_from:
  - /articles/migrating-your-previous-admin-teams-to-the-improved-organization-permissions
  - /articles/migrating-admin-teams-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/migrating-admin-teams-to-improved-organization-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Migrate admin team
ms.openlocfilehash: 32a3bd684d2ed81d1ba492b4e343af3e03390364
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145101329'
---
默认情况下，所有组织成员都可以创建仓库。 如果将[存储库创建权限](/articles/restricting-repository-creation-in-your-organization)限制为组织所有者，并且组织是在旧式组织权限结构下创建的，则旧式管理团队的成员仍然可以创建存储库。

旧管理员团队是在旧组织权限结构下使用管理员权限级别创建的团队。 这些团队成员可以为组织创建仓库，我们在改进的组织权限结构中保留了这种能力。

您可以将旧管理员团队迁移到改进的组织权限，以删除此能力。

有关详细信息，请参阅“[组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”。

{% warning %}

**警告：** 如果组织禁用了所有成员的 [存储库创建权限](/articles/restricting-repository-creation-in-your-organization)，则旧式管理团队的一些成员可能会失去存储库创建权限。 如果组织启用了成员仓库创建，则将旧管理员团队迁移到改进的组织权限不会影响团队成员创建仓库的能力。

{% endwarning %}

## 迁移所有组织的旧管理员团队

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.teams_sidebar %}
1. 查看组织的旧式管理团队，然后单击“迁移所有团队”。
  ![迁移所有团队按钮](/assets/images/help/teams/migrate-all-legacy-admin-teams.png)
1. 详细了解针对这些团队成员的潜在权限更改，然后单击“迁移所有团队”。
  ![“确认迁移”按钮](/assets/images/help/teams/confirm-migrate-all-legacy-admin-teams.png)

## 迁移单一管理员团队

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
1. 在团队说明框中，单击“迁移团队”。
  ![迁移团队按钮](/assets/images/help/teams/migrate-a-legacy-admin-team.png)
