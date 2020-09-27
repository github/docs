---
title: 許可されたインテグレーションをレビューする
intro: 許可されたお使いのインテグレーションをレビューすれば、自分のアカウントとデータへのアクセス権がある各インテグレーションのアクセスを監査できます。
redirect_from:
  - /articles/reviewing-your-authorized-integrations
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 許可された {{ site.data.variables.product.prodname_oauth_app }} をレビューする

{{ site.data.reusables.user_settings.access_settings }}
{{ site.data.reusables.user_settings.access_applications }}
{{ site.data.reusables.user_settings.access_authorized_oauth_apps }}
{{ site.data.reusables.user_settings.review-oauth-apps }}

### 許可された {{ site.data.variables.product.prodname_github_app }} をレビューする。

{{ site.data.reusables.user_settings.access_settings }}
{{ site.data.reusables.user_settings.access_applications }}
3. [**Authorized {{ site.data.variables.product.prodname_github_app }}s**] タブをクリックします。 ![[Authorized {{ site.data.variables.product.prodname_github_app }}s] タブ](/assets/images/help/settings/settings-authorized-github-apps-tab.png)
3. 自分のアカウントへのアクセス権がある {{ site.data.variables.product.prodname_github_app }} をレビューします。 覚えていないか古くなっている場合は、[**Revoke**] をクリックします。 {{ site.data.variables.product.prodname_github_app }} をすべて取り消すには、[**Revoke all**] をクリックします。 ![許可された {{ site.data.variables.product.prodname_github_app }} のリスト](/assets/images/help/settings/revoke-github-app.png)

### 参考リンク
{% if currentVersion == "free-pro-team@latest" %}
- "[インテグレーションについて](/articles/about-integrations)"{% endif %}
- "[許可されたアプリケーション (OAuth) をレビューする](/articles/reviewing-your-authorized-applications-oauth)"
