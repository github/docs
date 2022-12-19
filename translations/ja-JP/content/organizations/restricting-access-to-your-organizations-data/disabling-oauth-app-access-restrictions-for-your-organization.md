---
title: Organization の OAuth App アクセス制限の無効化
intro: Organizationのオーナーは、Organizationのリソースへのアクセスを持つ{% data variables.product.prodname_oauth_apps %}に対する制限を無効化できます。
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145140596"
---
{% danger %}

**警告**: Organization の {% data variables.product.prodname_oauth_app %} アクセス制限を無効にすると、Organization のメンバーであれば誰でも、個人アカウント設定でアプリケーションの使用を承認していれば、自動的に {% data variables.product.prodname_oauth_app %} から Organization のプライベート リソースへのアクセスが認証されます。

{% enddanger %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.oauth_app_access %}
5. **[制限の削除]** をクリックします。
  ![[制限の削除] ボタン](/assets/images/help/settings/settings-third-party-remove-restrictions.png)
6. サードパーティ アプリケーション制限の無効化に関する情報を確認したら、 **[はい、アプリケーション制限を削除します]** をクリックします。
  ![削除の確認ボタン](/assets/images/help/settings/settings-third-party-confirm-disable.png)
