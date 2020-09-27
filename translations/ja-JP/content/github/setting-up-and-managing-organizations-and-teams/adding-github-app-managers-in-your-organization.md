---
title: GitHub App マネージャーを Organization に追加する
intro: 'Organization のオーナーは、その Organization が所有している一部または全部の {{ site.data.variables.product.prodname_github_app }} を管理する機能をユーザに付与できます。'
redirect_from:
  - /articles/adding-github-app-managers-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{{ site.data.variables.product.prodname_github_app }} マネージャー権限に関する詳しい情報については「[Organization の権限レベル](/articles/permission-levels-for-an-organization#github-app-managers)」を参照してください。

### Organization が所有するすべての {{ site.data.variables.product.prodname_github_app }} の管理権限を与える

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.github-apps-settings-sidebar }}
1. [Management] の下で、Organization の {{ site.data.variables.product.prodname_github_app }} マネージャーに指名したい人物のユーザ名を入力し、[**Grant**] をクリックします。 ![{{ site.data.variables.product.prodname_github_app }} マネージャーを追加](/assets/images/help/organizations/add-github-app-manager.png)

### 個々の {{ site.data.variables.product.prodname_github_app }} の管理権限を誰かに与える

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.github-apps-settings-sidebar }}
1. [{{ site.data.variables.product.prodname_github_app }}s] の下で、{{ site.data.variables.product.prodname_github_app }} マネージャーを追加したいアプリケーションのアバターをクリックします。 ![{{ site.data.variables.product.prodname_github_app }} を選択](/assets/images/help/organizations/select-github-app.png)
{{ site.data.reusables.organizations.app-managers-settings-sidebar }}
1. [App managers] の下で、そのアプリケーションの GitHub App マネージャーとして指名したい人物のユーザ名を入力し、[**Grant**] をクリックしてください。 ![特定のアプリケーションに {{ site.data.variables.product.prodname_github_app }} マネージャーを追加](/assets/images/help/organizations/add-github-app-manager-for-app.png)

{% if currentVersion == "free-pro-team@latest" %}
### 参考リンク

- 「[{{ site.data.variables.product.prodname_dotcom }} Marketplaceについて](/articles/about-github-marketplace/)」
{% endif %}
