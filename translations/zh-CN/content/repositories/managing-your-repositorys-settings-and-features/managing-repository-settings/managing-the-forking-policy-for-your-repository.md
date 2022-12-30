---
title: 管理仓库的复刻政策
intro: '可以允许或阻止对组织拥有的特定私有{% ifversion ghae or ghes or ghec %}或内部{% endif %}存储库创建分支。'
redirect_from:
  - /articles/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/managing-the-forking-policy-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-the-forking-policy-for-your-repository
permissions: People with admin permissions for a repository can manage the forking policy for the repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage the forking policy
ms.openlocfilehash: 18355227ad40567de3824f3cc286763cd081e153
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145129310'
---
组织所有者必须允许组织级别上的专用{% ifversion ghae or ghes or ghec %}和内部{% endif %}存储库的分支，然后你才能允许或禁止特定存储库的分支。 有关详细信息，请参阅“[管理组织的分支策略](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)”。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. 在“功能”下，选择“允许创建分支”。
  ![允许或禁止创建专用存储库分支的复选框](/assets/images/help/repository/allow-forking-specific-org-repo.png)

## 延伸阅读

- [关于分支](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)
- [组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
