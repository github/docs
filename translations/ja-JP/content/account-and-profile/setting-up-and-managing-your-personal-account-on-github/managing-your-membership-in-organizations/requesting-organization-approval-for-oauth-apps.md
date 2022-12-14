---
title: OAuth App に対する Organization の承認をリクエストする
intro: 'Organization のメンバーと外部コラボレーターは、{% data variables.product.prodname_oauth_apps %} の Organization のリソースへのアクセスを所有者が許可するように要求できます。'
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
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148008723'
---
## {% data variables.product.prodname_oauth_app %} に対する Organization の承認の要求について

Organization のメンバーは、使いたい {% data variables.product.prodname_oauth_apps %} に対する所有者の承認をいつでも要求でき、Organization の所有者は、保留中の要求の通知を受け取ります。{% ifversion limit-app-access-requests %}外部コラボレーターは、統合アクセス要求が有効になっている場合は、使いたい {% data variables.product.prodname_oauth_apps %} に対する所有者の承認を要求できます。 詳しくは、「[OAuth アプリと GitHub アプリのアクセス要求を制限する](/organizations/managing-organization-settings/limiting-oauth-app-and-github-app-access-requests)」をご覧ください。{% endif %}

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
