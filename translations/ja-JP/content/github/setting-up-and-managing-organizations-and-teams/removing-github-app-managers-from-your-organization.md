---
title: GitHub App マネージャーを Organization から削除する
intro: 'Organization のオーナーは、Organization のメンバーに付与されていた {% data variables.product.prodname_github_app %} マネージャー権限を削除することができます。'
redirect_from:
  - /articles/removing-github-app-managers-from-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data variables.product.prodname_github_app %} マネージャー権限に関する詳しい情報については「[Organization の権限レベル](/articles/permission-levels-for-an-organization#github-app-managers)」を参照してください。

### Organization 全体で {% data variables.product.prodname_github_app %} マネージャーの権限を削除する

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. [Management] の下で、{% data variables.product.prodname_github_app %}マネージャー権限を削除する個人のユーザ名を探し、 [**Revoke**] をクリックします。 ![{% data variables.product.prodname_github_app %} マネージャー権限の削除](/assets/images/help/organizations/github-app-manager-revoke-permissions.png)

### 個別の {% data variables.product.prodname_github_app %} で {% data variables.product.prodname_github_app %} マネージャーの権限を削除する

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. [
[{% data variables.product.prodname_github_app %}] で、{% data variables.product.prodname_github_app %} マネージャーを削除するアプリケーションのアバターをクリックします。
![{% data variables.product.prodname_github_app %} を選択](/assets/images/help/organizations/select-github-app.png)
{% data reusables.organizations.app-managers-settings-sidebar %}
1. [App managers] の下で、{% data variables.product.prodname_github_app %} マネージャー権限を削除する個人のユーザ名を探し、 [**Revoke**] をクリックします。 ![{% data variables.product.prodname_github_app %} マネージャー権限の削除](/assets/images/help/organizations/github-app-manager-revoke-permissions-individual-app.png)

{% if currentVersion == "free-pro-team@latest" %}
### 参考リンク

- 「[{% data variables.product.prodname_dotcom %} Marketplaceについて](/articles/about-github-marketplace/)」
{% endif %}
