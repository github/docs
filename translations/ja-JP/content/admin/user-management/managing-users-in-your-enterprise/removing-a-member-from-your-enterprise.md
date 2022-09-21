---
title: Enterprise からのメンバーの削除
intro: Enterprise によって所有されるすべての Organization から、メンバーを削除できます。
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717990'
---
## Enterprise メンバーの削除について

Enterprise から Enterprise メンバーを削除すると、そのメンバーは Enterprise が所有するすべての Organization から削除されます。

削除する Enterprise メンバーが、Enterprise が所有する Organization の最後の所有者である場合は、その Organization の所有者になります。

Enterprise または Enterprise が所有する Organization のいずれかが ID プロバイダー (IdP) を使用して Organization のメンバーシップを管理している場合、IdP によってメンバーが Organization に追加される可能性があります。 必ず IdP でも必要な変更を行ってください。

## Enterprise からのメンバーの削除

{% note %}

**注:** Enterprise メンバーが {% data variables.product.prodname_ghe_server %} のみを使用し、{% data variables.product.prodname_ghe_cloud %} を使用しない場合、この方法で Enterprise メンバーを削除することはできません。

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. 削除するユーザーの右側にある {% octicon "gear" aria-label="The gear icon" %} ドロップダウン メニューを選択し、 **[Enterprise から削除]** をクリックします。

   ![Enterprise メンバーの [Enterprise から削除] オプションのスクリーンショット](/assets/images/help/business-accounts/remove-member.png)
