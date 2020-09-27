---
title: Organization 用の OAuth アプリケーションの承認
intro: '{{ site.data.variables.product.prodname_oauth_app }}による Organization のリソースへのアクセスを Organization のメンバーがリクエストしてきた場合、Organization のオーナーはそのリクエストを承認あるいは否認できます。'
redirect_from:
  - /articles/approving-third-party-applications-for-your-organization/
  - /articles/approving-oauth-apps-for-your-organization
versions:
  free-pro-team: '*'
---

{{ site.data.variables.product.prodname_oauth_app }}のアクセス制限が有効化されている場合、Organization のメンバーは Organization のリソースへのアクセスを持つ {{ site.data.variables.product.prodname_oauth_app }}を承認する前に、Organization のオーナーからの[承認をリクエスト](/articles/requesting-organization-approval-for-oauth-apps)しなければなりません。

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.oauth_app_access }}
5. 承認したいアプリケーションの隣で [**Review**] をクリックします。 ![レビューのリクエストリンク](/assets/images/help/settings/settings-third-party-approve-review.png)
6. リクエストされたアプリケーションに関する情報をレビューしたら、[**Grant access**] をクリックします。 ![アクセスの許可ボタン](/assets/images/help/settings/settings-third-party-approve-grant.png)

### 参考リンク

- [{{ site.data.variables.product.prodname_oauth_app }}のアクセス制限について](/articles/about-oauth-app-access-restrictions)
