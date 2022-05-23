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
shortTitle: インストールされたインテグレーションのレビュー
---

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. サイドバーの「Integrations（インテグレーション）」セクションで、**{% octicon "apps" aria-label="The apps icon" %}{% data variables.product.prodname_github_apps %}**をクリックしてください。
{% else %}
1. 左のサイドバーで** Installed {% data variables.product.prodname_github_apps %}**をクリックしてください。 ![Organization設定のサイドバー内のインストールされた{% data variables.product.prodname_github_apps %}タブ](/assets/images/help/organizations/org-settings-installed-github-apps.png)
{% endif %}
2. レビューする {% data variables.product.prodname_github_app %}の横にある [**Configure**] をクリックします。 ![[Configure] ボタン](/assets/images/help/organizations/configure-installed-integration-button.png)
6. {% data variables.product.prodname_github_app %} の権限とリポジトリのアクセス権をレビューします。 ![{% data variables.product.prodname_github_app %} にすべてのリポジトリまたは特定のリポジトリへのアクセス権を付与するためのオプション](/assets/images/help/organizations/toggle-integration-repo-access.png)
    - {% data variables.product.prodname_github_app %} に Organization のすべてのリポジトリへのアクセス権を付与するには、[**All repositories**] をクリックします。
    - アプリケーションにアクセス権を付与する特定のリポジトリを選択するには、[**Only select repositories**] を選択し、続いてリポジトリ名を入力します。
7. [**Save**] をクリックします。
