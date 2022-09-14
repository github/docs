---
title: 限制个人帐户的交互
intro: 可以在个人帐户拥有的所有公共仓库中对某些用户临时限制活动一段时间。
versions:
  fpt: '*'
  ghec: '*'
permissions: Anyone can limit interactions for their own personal account.
redirect_from:
  - /github/building-a-strong-community/limiting-interactions-for-your-user-account
  - /communities/moderating-comments-and-conversations/limiting-interactions-for-your-user-account
topics:
  - Community
shortTitle: Limit interactions in account
ms.openlocfilehash: df83b19880347dacb18e2e5bf048e6478ba0e61b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164710'
---
## 关于临时交互限制

限制个人帐户的交互可对个人帐户拥有的所有公共存储库启用临时交互限制。 {% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} 在限制期过后，用户可以在您的公共仓库中恢复正常活动。

{% data reusables.community.types-of-interaction-limits %}

启用用户范围的活动限制时，无法对单个仓库启用或禁用交互限制。 有关限制单个存储库的活动的详细信息，请参阅“[限制存储库中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)”。

您还可以阻止用户。 有关详细信息，请参阅“[阻止用户访问个人帐户](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)”。 

## 限制个人帐户的交互

{% data reusables.user-settings.access_settings %}
1. 在边栏的“访问”部分中，选择“{% octicon "report" aria-label="The report icon" %} 审查”，然后单击“交互限制” 。
{% data reusables.community.set-interaction-limit %} ![临时交互限制选项](/assets/images/help/settings/user-account-temporary-interaction-limits-options.png)
