---
title: ユーザによるOrganizationの作成の禁止
redirect_from:
  - /enterprise/admin/articles/preventing-users-from-creating-organizations
  - /enterprise/admin/hidden/preventing-users-from-creating-organizations
  - /enterprise/admin/user-management/preventing-users-from-creating-organizations
  - /admin/user-management/preventing-users-from-creating-organizations
intro: ユーザが Enterprise 内に Organization を作成できないようにすることができます。
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Organizations
  - Policies
shortTitle: Prevent organization creation
ms.openlocfilehash: 418a2ceb1f8c059764d84e4565d0719c38ed4d9b
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116301'
---
{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
4. [ユーザーは Organization を作成できます] の下のドロップダウン メニューを使用して、 **[有効]** または **[無効]** をクリックします。
![[ユーザーは Organization を作成できます] ドロップダウン](/assets/images/enterprise/site-admin-settings/users-create-orgs-dropdown.png)
