---
title: GitHub App マネージャーを Organization に追加する
intro: 'Organizationのオーナーは、Organizationが所有する{% data variables.product.prodname_github_apps %}の一部もしくはすべての管理を、ユーザに付与できます。'
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
shortTitle: GitHub Appマネージャーの追加
---

{% data variables.product.prodname_github_app %}の管理者権限に関する詳しい情報については「[Organization内のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#github-app-managers)」を参照してください。

## Organizationが所有するすべての{% data variables.product.prodname_github_apps %}の管理権限のユーザへの付与

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. [Management] の下で、Organization の {% data variables.product.prodname_github_app %} マネージャーに指名したい人物のユーザ名を入力し、[**Grant**] をクリックします。 ![{% data variables.product.prodname_github_app %} マネージャーを追加](/assets/images/help/organizations/add-github-app-manager.png)

## 個々の {% data variables.product.prodname_github_app %} の管理権限を誰かに与える

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. 「{% data variables.product.prodname_github_apps %}」の下で、{% data variables.product.prodname_github_app %}マネージャーを追加したいアプリケーションのアバターをクリックしてください。 ![{% data variables.product.prodname_github_app %} を選択](/assets/images/help/organizations/select-github-app.png)
{% data reusables.organizations.app-managers-settings-sidebar %}
1. [App managers] の下で、そのアプリケーションの GitHub App マネージャーとして指名したい人物のユーザ名を入力し、[**Grant**] をクリックしてください。 ![特定のアプリケーションに {% data variables.product.prodname_github_app %} マネージャーを追加](/assets/images/help/organizations/add-github-app-manager-for-app.png)

{% ifversion fpt or ghec %}
## 参考リンク

- 「[{% data variables.product.prodname_dotcom %} Marketplaceについて](/articles/about-github-marketplace/)」
{% endif %}
