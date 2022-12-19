---
title: GitHub App マネージャーを Organization から削除する
intro: Organization のオーナーは、Organization のメンバーに付与されていた {% data variables.product.prodname_github_app %} マネージャー権限を削除することができます。
redirect_from:
- /articles/removing-github-app-managers-from-your-organization
- /github/setting-up-and-managing-organizations-and-teams/removing-github-app-managers-from-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Remove GitHub App managers
ms.openlocfilehash: c7dc813294a1fdd7e928a4212af30efa1182fd3d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145130772"
---
{% data variables.product.prodname_github_app %} マネージャー権限の詳細については、「[Organization 内のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#github-app-managers)」を参照してください。

## Organization 全体で {% data variables.product.prodname_github_app %} マネージャーの権限を削除する

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. [管理] の下で、{% data variables.product.prodname_github_app %} マネージャー権限を削除する個人のユーザー名を探し、 **[取り消し]** をクリックします。
![{% data variables.product.prodname_github_app %} マネージャー権限の削除](/assets/images/help/organizations/github-app-manager-revoke-permissions.png)

## 個別の {% data variables.product.prodname_github_app %} で {% data variables.product.prodname_github_app %} マネージャーの権限を削除する

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. 「{% data variables.product.prodname_github_apps %}」の下で、{% data variables.product.prodname_github_app %}マネージャーを削除したいアプリケーションのアバターをクリックしてください。
![{% data variables.product.prodname_github_app %} を選択](/assets/images/help/organizations/select-github-app.png) {% data reusables.organizations.app-managers-settings-sidebar %}
1. [App マネージャー] の下で、{% data variables.product.prodname_github_app %} マネージャー権限を削除する個人のユーザー名を探し、 **[取り消し]** をクリックします。
![{% data variables.product.prodname_github_app %} マネージャー権限の取り消し](/assets/images/help/organizations/github-app-manager-revoke-permissions-individual-app.png)

{% ifversion fpt or ghec %}
## 参考資料

- 「[{% data variables.product.prodname_dotcom %} マーケットプレースについて](/articles/about-github-marketplace/)」 {% endif %}
