---
title: GitHub App マネージャーを Organization に追加する
intro: 'Organization のオーナーは、その Organization が所有している一部または全部の {% data variables.product.prodname_github_app %} を管理する機能をユーザに付与できます。'
redirect_from:
  - /articles/adding-github-app-managers-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-github-app-managers-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

{% data variables.product.prodname_github_app %} マネージャー権限に関する詳しい情報については「[Organization の権限レベル](/articles/permission-levels-for-an-organization#github-app-managers)」を参照してください。

### Organization が所有するすべての {% data variables.product.prodname_github_app %} の管理権限を与える

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. [Management] の下で、Organization の {% data variables.product.prodname_github_app %} マネージャーに指名したい人物のユーザ名を入力し、[**Grant**] をクリックします。 ![{% data variables.product.prodname_github_app %} マネージャーを追加](/assets/images/help/organizations/add-github-app-manager.png)

### 個々の {% data variables.product.prodname_github_app %} の管理権限を誰かに与える

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. [{% data variables.product.prodname_github_app %}s] の下で、{% data variables.product.prodname_github_app %} マネージャーを追加したいアプリケーションのアバターをクリックします。 ![{% data variables.product.prodname_github_app %} を選択](/assets/images/help/organizations/select-github-app.png)
{% data reusables.organizations.app-managers-settings-sidebar %}
1. [App managers] の下で、そのアプリケーションの GitHub App マネージャーとして指名したい人物のユーザ名を入力し、[**Grant**] をクリックしてください。 ![特定のアプリケーションに {% data variables.product.prodname_github_app %} マネージャーを追加](/assets/images/help/organizations/add-github-app-manager-for-app.png)

{% if currentVersion == "free-pro-team@latest" %}
### 参考リンク

- 「[{% data variables.product.prodname_dotcom %} Marketplaceについて](/articles/about-github-marketplace/)」
{% endif %}
