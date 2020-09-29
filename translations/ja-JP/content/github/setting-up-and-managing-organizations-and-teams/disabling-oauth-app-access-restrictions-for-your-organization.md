---
title: Organization の OAuth App アクセス制限の無効化
intro: 'Organization のオーナーは、Organization のリソースにアクセス権を持つ {% data variables.product.prodname_oauth_app %} の制限を無効化できます。'
redirect_from:
  - /articles/disabling-third-party-application-restrictions-for-your-organization/
  - /articles/disabling-oauth-app-access-restrictions-for-your-organization
versions:
  free-pro-team: '*'
---

{% danger %}

**警告**: Organization で {% data variables.product.prodname_oauth_app %} のアクセス制限を無効化すると、Organization のメンバーであれば誰でも、個人アカウント設定でアプリケーションの使用を承認していれば、自動的に {% data variables.product.prodname_oauth_app %} から Organization のプライベートリソースへのアクセスが認証されます。

{% enddanger %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.oauth_app_access %}
5. [**Remove restrictions**] をクリックします。 ![[Remove restrictions] ボタン](/assets/images/help/settings/settings-third-party-remove-restrictions.png)
6. サードパーティアプリケーション制限の無効化に関する情報を確認したら、[**Yes, remove application restrictions**] (はい、アプリケーション制限を削除します) をクリックします。 ![解除確認ボタン](/assets/images/help/settings/settings-third-party-confirm-disable.png)
