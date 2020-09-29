---
title: OAuth App に対する Organization の承認をリクエストする
intro: 'Organization のメンバーは、オーナーが {% data variables.product.prodname_oauth_app %} に Organization リソースへのアクセスを許可するようリクエストできます。'
redirect_from:
  - /articles/requesting-organization-approval-for-third-party-applications/
  - /articles/requesting-organization-approval-for-your-authorized-applications/
  - /articles/requesting-organization-approval-for-oauth-apps
versions:
  free-pro-team: '*'
---

### 個人アカウントではすでに許可されている {% data variables.product.prodname_oauth_app %} を Organization でも承認するようリクエストする

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.access_applications %}
{% data reusables.user_settings.access_authorized_oauth_apps %}
3. アプリケーションのリストで、アクセスを要求する {% data variables.product.prodname_oauth_app %} の名前をクリックします。 ![[View application] ボタン](/assets/images/help/settings/settings-third-party-view-app.png)
4. {% data variables.product.prodname_oauth_app %} にアクセスさせる Organization の横で、[**Request access**] をクリックします。 ![[Request access] ボタン](/assets/images/help/settings/settings-third-party-request-access.png)
5. {% data variables.product.prodname_oauth_app %} アクセスをリクエストすることに関する情報を読み、[**Request approval from owners**] をクリックします。 ![[Request approval] ボタン](/assets/images/help/settings/oauth-access-request-approval.png)

### 参考リンク

- [{% data variables.product.prodname_oauth_app %}のアクセス制限について](/articles/about-oauth-app-access-restrictions)
