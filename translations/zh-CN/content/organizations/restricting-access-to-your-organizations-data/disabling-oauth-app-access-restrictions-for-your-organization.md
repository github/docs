---
title: 禁用 OAuth 应用程序对您的组织的访问权限限制
intro: '组织所有者可禁用对拥有组织资源访问权限的 {% data variables.product.prodname_oauth_apps %} 的限制。'
redirect_from:
  - /articles/disabling-third-party-application-restrictions-for-your-organization
  - /articles/disabling-oauth-app-access-restrictions-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/disabling-oauth-app-access-restrictions-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Disable OAuth App
ms.openlocfilehash: 41fae63d8d491eec7a6cd6a275958d5c96fb5f5c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145130341'
---
{% danger %}

警告：禁用 {% data variables.product.prodname_oauth_app %} 对组织的访问权限限制后，任何组织成员批准某一应用程序使用其私有帐户设置时，将自动授予 {% data variables.product.prodname_oauth_app %} 对组织私有资源的访问权限。

{% enddanger %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.oauth_app_access %}
5. 单击“删除限制”。
  ![“删除限制”按钮](/assets/images/help/settings/settings-third-party-remove-restrictions.png)
6. 审查有关禁用第三方应用程序限制的信息后，请单击“是，删除应用程序限制”。
  ![删除确认按钮](/assets/images/help/settings/settings-third-party-confirm-disable.png)
