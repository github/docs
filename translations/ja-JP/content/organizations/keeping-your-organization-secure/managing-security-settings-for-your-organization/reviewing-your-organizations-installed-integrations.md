---
title: Organization のインストール済みインテグレーションをレビューする
intro: Organization のインストール済みインテグレーションの権限レベルをレビューして、各インテグレーションの Organization リポジトリへのアクセス権を設定できます。
redirect_from:
- /articles/reviewing-your-organization-s-installed-integrations
- /articles/reviewing-your-organizations-installed-integrations
- /github/setting-up-and-managing-organizations-and-teams/reviewing-your-organizations-installed-integrations
- /organizations/keeping-your-organization-secure/reviewing-your-organizations-installed-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Review installed integrations
ms.openlocfilehash: 66645e6ebb4305a34cd7735269d77881ea2ed5ee
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145130804"
---
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. サイドバーの [統合] セクションで、 **[{% octicon "apps" aria-label="The apps icon" %} {% data variables.product.prodname_github_apps %}]** をクリックします。
{% else %}
1. 左側のサイドバーで、 **[インストール済みの {% data variables.product.prodname_github_apps %}]** をクリックします。
  ![Organization 設定のサイドバー内の [インストール済みの {% data variables.product.prodname_github_apps %}] タブ](/assets/images/help/organizations/org-settings-installed-github-apps.png) {% endif %}
2. レビューする {% data variables.product.prodname_github_app %} の横にある **[構成]** をクリックします。
  ![[構成] ボタン](/assets/images/help/organizations/configure-installed-integration-button.png)
6. {% data variables.product.prodname_github_app %} の権限とリポジトリのアクセス権をレビューします。
  ![{% data variables.product.prodname_github_app %} にすべてのリポジトリまたは特定のリポジトリへのアクセス権を付与するためのオプション](/assets/images/help/organizations/toggle-integration-repo-access.png)
    - {% data variables.product.prodname_github_app %} に Organization のすべてのリポジトリへのアクセス権を付与するには、 **[すべてのリポジトリ]** をクリックします。
    - アプリケーションにアクセス権を付与する特定のリポジトリを選択するには、 **[リポジトリのみ選択]** を選択し、続いてリポジトリ名を入力します。
7. **[保存]** をクリックします。
