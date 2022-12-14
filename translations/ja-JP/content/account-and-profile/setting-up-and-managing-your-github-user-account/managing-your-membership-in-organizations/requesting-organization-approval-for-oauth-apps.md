---
title: OAuth App に対する Organization の承認をリクエストする
intro: Organization members can request that an owner approve access to organization resources for {% data variables.product.prodname_oauth_app %}.
redirect_from:
- /articles/requesting-organization-approval-for-third-party-applications
- /articles/requesting-organization-approval-for-your-authorized-applications
- /articles/requesting-organization-approval-for-oauth-apps
- /github/setting-up-and-managing-your-github-user-account/requesting-organization-approval-for-oauth-apps
- /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Request OAuth App approval
ms.openlocfilehash: 4e0f553ebbf8655da6230474e3d2051b6dc5ff2d
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088759"
---
## <a name="requesting-organization-approval-for-an--data-variablesproductprodname_oauth_app--youve-already-authorized-for-your-personal-account"></a>個人アカウントではすでに許可されている {% data variables.product.prodname_oauth_app %} を Organization でも承認するようリクエストする

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.access_applications %} {% data reusables.user-settings.access_authorized_oauth_apps %}
3. アプリケーションのリストで、アクセスを要求する {% data variables.product.prodname_oauth_app %} の名前をクリックします。
![[アプリケーションの表示] ボタン](/assets/images/help/settings/settings-third-party-view-app.png)
4. {% data variables.product.prodname_oauth_app %} にアクセスさせる組織の横にある **[アクセスの要求]** をクリックします。
![[アクセスの要求] ボタン](/assets/images/help/settings/settings-third-party-request-access.png)
5. {% data variables.product.prodname_oauth_app %} アクセスの要求に関する情報を読み、 **[所有者からの承認の要求]** をクリックします。
![[承認の要求]](/assets/images/help/settings/oauth-access-request-approval.png) ボタン

## <a name="further-reading"></a>参考資料

- "[{% data variables.product.prodname_oauth_app %} アクセス制限について](/articles/about-oauth-app-access-restrictions)"
