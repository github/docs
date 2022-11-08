---
title: 删除企业成员
intro: 可以从企业拥有的所有组织中删除成员。
permissions: Enterprise owners can remove an enterprise member from the enterprise.
versions:
  feature: remove-enterprise-members
type: how_to
topics:
  - Enterprise
shortTitle: Remove member
ms.openlocfilehash: c3090cd49c2c2e8089093dc01ddeb7b69ae39416
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717987'
---
## 关于删除企业成员

从企业删除企业成员时，将从该企业拥有的所有组织中删除该成员。

如果你要删除的企业成员是企业拥有的组织的最后一个所有者，则你将成为该组织的所有者。

如果你的企业或企业拥有的任何组织使用标识提供者 (IdP) 来管理组织成员身份，该成员可能会被 IdP 添加回组织。 请确保同时在 IdP 中进行任何必要的更改。

## 删除企业成员

{% note %}

注意：如果企业成员仅使用 {% data variables.product.prodname_ghe_server %}，而不是 {% data variables.product.prodname_ghe_cloud %}，则无法通过这种方式删除企业成员。

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. 在要删除的人员右侧，选择“{% octicon "gear" aria-label="The gear icon" %}”下拉菜单，然后单击“从企业中删除”。

   ![企业成员的“从企业中删除”选项的屏幕截图](/assets/images/help/business-accounts/remove-member.png)
