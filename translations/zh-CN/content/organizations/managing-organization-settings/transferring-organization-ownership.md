---
title: 转让组织所有权
intro: '要使其他人成为组织帐户的所有者，必须添加新所有者{% ifversion fpt or ghec %}，确保帐单信息已更新，{% endif %}然后将自身从该帐户中删除。'
redirect_from:
  - /articles/needs-polish-how-do-i-give-ownership-to-an-organization-to-someone-else
  - /articles/transferring-organization-ownership
  - /github/setting-up-and-managing-organizations-and-teams/transferring-organization-ownership
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Transfer ownership
ms.openlocfilehash: 2605af47d008eff7ee786d80f64142a267676ee1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145065966'
---
{% ifversion ghec %} {% note %}

**注意：** {% data reusables.enterprise-accounts.invite-organization %}

{% endnote %}{% endif %}

1. 如果你是具有“所有者”权限的唯一成员，则向另一个组织成员提供所有者角色。 有关详细信息，请参阅“[任命组织所有者](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization#appointing-an-organization-owner)”。
2. 请联系新的所有者，并确保他或她能够[访问组织的设置](/articles/accessing-your-organization-s-settings)。
{% ifversion fpt or ghec %}
3. 如果你目前负责为组织中的 GitHub 付款，则还需要让新所有者或[帐单管理员](/articles/adding-a-billing-manager-to-your-organization/)更新组织的付款信息。 有关详细信息，请参阅“[添加或编辑付款方式](/articles/adding-or-editing-a-payment-method)”。

  {% warning %}

  **警告**：从组织中删除自己时不会更新组织帐户存档的帐单信息。 新的所有者或帐单管理员必须更新存档的帐单信息，以删除您的信用卡或 PayPal 信息。

  {% endwarning %}

{% endif %}
4. 从组织中[删除自己](/articles/removing-yourself-from-an-organization)。
