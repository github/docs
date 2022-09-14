---
title: 批准组织的 OAuth Apps
intro: '当组织成员申请 {% data variables.product.prodname_oauth_app %} 访问组织资源时，组织所有者可以批准或拒绝该申请。'
redirect_from:
  - /articles/approving-third-party-applications-for-your-organization
  - /articles/approving-oauth-apps-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/approving-oauth-apps-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Approve OAuth Apps
ms.openlocfilehash: b4f8f81b9ad773af86c7e2b488459d8865de3a49
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145130343'
---
启用 {% data variables.product.prodname_oauth_app %} 访问限制后，组织成员必须先向组织所有者[申请批准](/articles/requesting-organization-approval-for-oauth-apps)，然后才能授权有权访问组织资源的 {% data variables.product.prodname_oauth_app %}。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.oauth_app_access %}
5. 在要批准的应用程序旁边，单击“查看”。
![查看请求链接](/assets/images/help/settings/settings-third-party-approve-review.png)
6. 查看有关请求的应用程序的信息后，单击“授权访问”。
![“授权访问”按钮](/assets/images/help/settings/settings-third-party-approve-grant.png)

## 延伸阅读

- [关于 {% data variables.product.prodname_oauth_app %} 访问限制](/articles/about-oauth-app-access-restrictions)
