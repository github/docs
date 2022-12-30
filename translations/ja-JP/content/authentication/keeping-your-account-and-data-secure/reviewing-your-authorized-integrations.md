---
title: 許可されたインテグレーションをレビューする
intro: 許可されたお使いのインテグレーションをレビューすれば、自分のアカウントとデータへのアクセス権がある各インテグレーションのアクセスを監査できます。
redirect_from:
  - /articles/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Authorized integrations
ms.openlocfilehash: ec67e7b18b4ad898cd53b4773b299d90bc3dc9e5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145088415'
---
## 許可された {% data variables.product.prodname_oauth_apps %} をレビューする

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.access_applications %} {% data reusables.user-settings.access_authorized_oauth_apps %} {% data reusables.user-settings.review-oauth-apps %}

## 許可された {% data variables.product.prodname_github_apps %} をレビューする

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.access_applications %}
3. **[許可された {% data variables.product.prodname_github_apps %}]** タブをクリックします。![[許可された {% data variables.product.prodname_github_apps %}] タブ](/assets/images/help/settings/settings-authorized-github-apps-tab.png)
3. 自分のアカウントへのアクセス権がある {% data variables.product.prodname_github_apps %} をレビューします。 覚えていないか古くなっているものは、 **[取り消す]** をクリックします。 {% data variables.product.prodname_github_apps %} をすべて取り消すには、 **[すべて取り消す]** をクリックします。
   ![許可された {% data variables.product.prodname_github_app %} のリスト](/assets/images/help/settings/revoke-github-app.png)

## 参考資料
{% ifversion fpt or ghec %}
- 「[インテグレーションについて](/articles/about-integrations)」{% endif %}
- 「[許可されたアプリケーション (OAuth) をレビューする](/articles/reviewing-your-authorized-applications-oauth)」
