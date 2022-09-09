---
title: 审查您的部署密钥
intro: 您应审查部署密钥，以确保没有任何未经授权（或可能已受损）的密钥。 您还可以批准有效的现有部署密钥。
redirect_from:
  - /articles/reviewing-your-deploy-keys
  - /github/authenticating-to-github/reviewing-your-deploy-keys
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-deploy-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Deploy keys
ms.openlocfilehash: 964ec4cbc91745c041dd973e4e950b605c5c0233
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084641'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
3. 在边栏的“安全性”部分中，单击“{% octicon "key" aria-label="The key icon" %} 部署密钥”。
{% else %}
3. 在左边栏中，单击“部署密钥”。
![部署密钥设置](/assets/images/help/settings/settings-sidebar-deploy-keys.png) {% endif %}
4. 在 Deploy keys（部署密钥）页面中，记下与您的帐户关联的部署密钥。 对于无法识别或已过期的密钥，请单击“删除”。 如果有要保留的有效部署密钥，请单击“批准”。
    ![部署密钥列表](/assets/images/help/settings/settings-deploy-key-review.png)

有关详细信息，请参阅“[管理部署密钥](/guides/managing-deploy-keys)”。

## 延伸阅读
- [配置通知](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#organization-alerts-notification-options)
