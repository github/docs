---
title: GitHub App マネージャーを Organization に追加する
intro: 'Organization owners can grant users the ability to manage some or all {% data variables.product.prodname_github_apps %} owned by the organization.'
redirect_from:
  - /articles/adding-github-app-managers-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-github-app-managers-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
shortTitle: GitHub Appマネージャーの追加
---

{% data variables.product.prodname_github_app %} マネージャー権限に関する詳しい情報については「[Organization の権限レベル](/articles/permission-levels-for-an-organization#github-app-managers)」を参照してください。

## Giving someone the ability to manage all {% data variables.product.prodname_github_apps %} owned by the organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. [Management] の下で、Organization の {% data variables.product.prodname_github_app %} マネージャーに指名したい人物のユーザ名を入力し、[**Grant**] をクリックします。 ![{% data variables.product.prodname_github_app %} マネージャーを追加](/assets/images/help/organizations/add-github-app-manager.png)

## 個々の {% data variables.product.prodname_github_app %} の管理権限を誰かに与える

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Under "{% data variables.product.prodname_github_apps %}", click on the avatar of the app you'd like to add a {% data variables.product.prodname_github_app %} manager for. ![{% data variables.product.prodname_github_app %} を選択](/assets/images/help/organizations/select-github-app.png)
{% data reusables.organizations.app-managers-settings-sidebar %}
1. [App managers] の下で、そのアプリケーションの GitHub App マネージャーとして指名したい人物のユーザ名を入力し、[**Grant**] をクリックしてください。 ![特定のアプリケーションに {% data variables.product.prodname_github_app %} マネージャーを追加](/assets/images/help/organizations/add-github-app-manager-for-app.png)

{% ifversion fpt %}
## 参考リンク

- 「[{% data variables.product.prodname_dotcom %} Marketplaceについて](/articles/about-github-marketplace/)」
{% endif %}
