---
title: GitHub App マネージャーを Organization に追加する
intro: Organizationのオーナーは、Organizationが所有する{% data variables.product.prodname_github_apps %}の一部もしくはすべての管理を、ユーザに付与できます。
redirect_from:
- /articles/adding-github-app-managers-in-your-organization
- /github/setting-up-and-managing-organizations-and-teams/adding-github-app-managers-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Add GitHub App managers
ms.openlocfilehash: d8389c85c847b750bdb83eb8b922ad16bfa33bf3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145130776"
---
{% data variables.product.prodname_github_app %} マネージャー権限の詳細については、「[Organization 内のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#github-app-managers)」を参照してください。

## Organizationが所有するすべての{% data variables.product.prodname_github_apps %}の管理権限のユーザへの付与

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. [管理] で、Organization 内の {% data variables.product.prodname_github_app %} マネージャーとして指定する個人のユーザー名を入力し、 **[許可]** をクリックします。
![{% data variables.product.prodname_github_app %} マネージャーを追加](/assets/images/help/organizations/add-github-app-manager.png)

## 個々の {% data variables.product.prodname_github_app %} の管理権限を誰かに与える

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. 「{% data variables.product.prodname_github_apps %}」の下で、{% data variables.product.prodname_github_app %}マネージャーを追加したいアプリケーションのアバターをクリックしてください。
![{% data variables.product.prodname_github_app %} を選択](/assets/images/help/organizations/select-github-app.png) {% data reusables.organizations.app-managers-settings-sidebar %}
1. [App マネージャー] の下で、そのアプリケーションの GitHub App マネージャーとして指名したい人物のユーザー名を入力し、 **[許可]** をクリックしてください。
![特定のアプリに {% data variables.product.prodname_github_app %} マネージャーを追加](/assets/images/help/organizations/add-github-app-manager-for-app.png)

{% ifversion fpt or ghec %}
## 参考資料

- 「[{% data variables.product.prodname_dotcom %} マーケットプレースについて](/articles/about-github-marketplace/)」 {% endif %}
