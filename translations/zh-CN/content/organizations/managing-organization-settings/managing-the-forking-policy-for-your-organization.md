---
title: 管理组织的复刻政策
intro: '可以允许或阻止对组织拥有的任何私有{% ifversion ghes or ghae or ghec %}和内部{% endif %}存储库进行复刻。'
redirect_from:
  - /articles/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-forking-policy-for-your-organization
permissions: Organization owners can manage the forking policy for an organization.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage forking policy
ms.openlocfilehash: 11aad8ee3c08b62f6bc352f91b6d804f35eee6e6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145099717'
---
默认情况下，新组织被配置为禁止对专用 {% ifversion ghes or ghec or ghae %} 和内部 {% endif %} 存储库创建分支。

如果允许在组织级别对专用 {% ifversion ghes or ghec or ghae %} 和内部 {% endif %} 存储库进行分支，还可以配置对特定专用 {% ifversion ghes or ghec or ghae %} 或内部 {% endif %} 存储库进行分支的功能。 有关详细信息，请参阅“[管理存储库的分支策略](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)”。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.profile.org_member_privileges %}
1. 在“存储库分支”下，选择“允许对专用 {% ifversion ghec or ghes or ghae %} 和内部 {% endif %} 存储库创建分支”。

   {%- ifversion fpt %} ![允许或禁止在组织中创建分支的复选框](/assets/images/help/repository/allow-disable-forking-fpt.png) {%- elsif ghes or ghec or ghae %} ![允许或禁止在组织中创建分支的复选框](/assets/images/help/repository/allow-disable-forking-organization.png) {%- endif %}
6. 单击“ **保存**”。

## 延伸阅读

- [关于分支](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)
- [组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
