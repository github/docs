---
title: OAuth App に対する Organization の承認をリクエストする
intro: 'Organization のメンバーは、オーナーが {% data variables.product.prodname_oauth_app %} に Organization リソースへのアクセスを許可するようリクエストできます。'
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
ms.openlocfilehash: 250de09ddc116aca7f4cdb8d07b6b267b7789dcf
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164894'
---
## 個人アカウントではすでに許可されている {% data variables.product.prodname_oauth_app %} を Organization でも承認するようリクエストする

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.access_applications %} {% data reusables.user-settings.access_authorized_oauth_apps %}
3. アプリケーションのリストで、アクセスを要求する {% data variables.product.prodname_oauth_app %} の名前をクリックします。
![[アプリケーションの表示] ボタン](/assets/images/help/settings/settings-third-party-view-app.png)
4. {% data variables.product.prodname_oauth_app %} にアクセスさせる組織の横にある **[アクセスの要求]** をクリックします。
![[アクセスの要求] ボタン](/assets/images/help/settings/settings-third-party-request-access.png)
5. {% data variables.product.prodname_oauth_app %} アクセスの要求に関する情報を読み、 **[所有者からの承認の要求]** をクリックします。
![[承認の要求]](/assets/images/help/settings/oauth-access-request-approval.png) ボタン

## 参考資料

- "[{% data variables.product.prodname_oauth_app %} アクセス制限について](/articles/about-oauth-app-access-restrictions)"
