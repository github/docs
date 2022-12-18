---
title: Organization 用の OAuth アプリケーションの承認
intro: '{% data variables.product.prodname_oauth_app %}による Organization のリソースへのアクセスを Organization のメンバーがリクエストしてきた場合、Organization のオーナーはそのリクエストを承認あるいは否認できます。'
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145140604"
---
{% data variables.product.prodname_oauth_app %}のアクセス制限が有効化されている場合、組織のメンバーは組織のリソースへのアクセス権を持つ {% data variables.product.prodname_oauth_app %}を承認する前に、組織の所有者からの[承認を要求](/articles/requesting-organization-approval-for-oauth-apps)しなければなりません。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.oauth_app_access %}
5. 承認したいアプリケーションの隣で **[レビュー]** をクリックします。
![要求レビューのリンク](/assets/images/help/settings/settings-third-party-approve-review.png)
6. 要求されたアプリケーションに関する情報をレビューしたら、 **[アクセス権の付与]** をクリックします。
![[アクセス権の付与] ボタン](/assets/images/help/settings/settings-third-party-approve-grant.png)

## 参考資料

- "[{% data variables.product.prodname_oauth_app %} アクセス制限について](/articles/about-oauth-app-access-restrictions)"
