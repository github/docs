---
title: 请求组织批准 OAuth 应用程序
intro: '组织成员和外部协作者可以请求所有者批准对 {% data variables.product.prodname_oauth_apps %} 组织资源的访问权限。'
redirect_from:
  - /articles/requesting-organization-approval-for-third-party-applications
  - /articles/requesting-organization-approval-for-your-authorized-applications
  - /articles/requesting-organization-approval-for-oauth-apps
  - /github/setting-up-and-managing-your-github-user-account/requesting-organization-approval-for-oauth-apps
  - /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Request OAuth App approval
ms.openlocfilehash: affc908d710811563e49bfee6a4e2e906750bf4b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148007903'
---
## 关于请求组织批准 {% data variables.product.prodname_oauth_app %}

组织成员始终可以请求其要使用的 {% data variables.product.prodname_oauth_apps %} 的所有者批准，组织所有者会收到待处理请求的通知。{% ifversion limit-app-access-requests %} 如果启用了集成访问请求，外部协作者可以请求对 {% data variables.product.prodname_oauth_apps %} 的所有者批准。 有关详细信息，请参阅“[限制 OAuth 应用和 GitHub 应用访问请求](/organizations/managing-organization-settings/limiting-oauth-app-and-github-app-access-requests)。”{% endif %}

## 请求组织批准您已为个人帐户授权的 {% data variables.product.prodname_oauth_app %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.access_applications %} {% data reusables.user-settings.access_authorized_oauth_apps %}
3. 在应用程序列表中，单击您想要请求访问权限的 {% data variables.product.prodname_oauth_app %}的名称。
![查看应用按钮](/assets/images/help/settings/settings-third-party-view-app.png)
4. 在你想要 {% data variables.product.prodname_oauth_app %} 访问的组织旁边，单击“请求访问权限”。
![“请求访问权限”按钮](/assets/images/help/settings/settings-third-party-request-access.png)
5. 审查关于请求 {% data variables.product.prodname_oauth_app %} 访问权限的信息后，单击“请求所有者的批准”。
![“请求审批”按钮](/assets/images/help/settings/oauth-access-request-approval.png)

## 延伸阅读

- [关于 {% data variables.product.prodname_oauth_app %} 访问限制](/articles/about-oauth-app-access-restrictions)
