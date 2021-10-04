---
title: 許可されたインテグレーションをレビューする
intro: 許可されたお使いのインテグレーションをレビューすれば、自分のアカウントとデータへのアクセス権がある各インテグレーションのアクセスを監査できます。
redirect_from:
  - /articles/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Identity
  - Access management
shortTitle: Authorized integrations
---

## Reviewing your authorized {% data variables.product.prodname_oauth_apps %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.access_applications %}
{% data reusables.user_settings.access_authorized_oauth_apps %}
{% data reusables.user_settings.review-oauth-apps %}

## Reviewing your authorized {% data variables.product.prodname_github_apps %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.access_applications %}
3. Click the **Authorized {% data variables.product.prodname_github_apps %}** tab. ![Authorized {% data variables.product.prodname_github_apps %} tab](/assets/images/help/settings/settings-authorized-github-apps-tab.png)
3. Review the {% data variables.product.prodname_github_apps %} that have access to your account. 覚えていないか古くなっている場合は、[**Revoke**] をクリックします。 To revoke all {% data variables.product.prodname_github_apps %}, click **Revoke all**. ![許可された {% data variables.product.prodname_github_app %} のリスト](/assets/images/help/settings/revoke-github-app.png)

## 参考リンク
{% ifversion fpt %}
- "[インテグレーションについて](/articles/about-integrations)"{% endif %}
- "[許可されたアプリケーション (OAuth) をレビューする](/articles/reviewing-your-authorized-applications-oauth)"
