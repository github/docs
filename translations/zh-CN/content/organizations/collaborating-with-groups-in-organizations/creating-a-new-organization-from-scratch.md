---
title: 从头开始创建新组织
intro: 创建组织以对仓库应用更细化的访问权限。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /articles/creating-a-new-organization-from-scratch
  - /admin/user-management/creating-organizations
  - /github/setting-up-and-managing-organizations-and-teams/creating-a-new-organization-from-scratch
topics:
  - Organizations
  - Teams
shortTitle: Create new organization
ms.openlocfilehash: d9443aa84964fcc1202fee41d95800cf8e9ccd4c
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '147876102'
---
从头开始创建新组织时，它没有任何与之关联的仓库。 有关将存储库添加到组织的详细信息，请参阅“[创建新存储库](/articles/creating-a-new-repository)”和“[传输存储库](/articles/transferring-a-repository)”。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.organizations %} {% data reusables.organizations.new-organization %}
4. 按照提示创建组织。 {% ifversion fpt or ghec %}有关团队可用的计划的详细信息，请参阅“[{% data variables.product.prodname_dotcom %} 的产品](/articles/githubs-products)”。{% endif %}

## 延伸阅读

{% ifversion fpt or ghec %}
- “[设置帐单邮箱](/articles/setting-your-billing-email)”{% endif %}
- “[关于组织](/articles/about-organizations)”
