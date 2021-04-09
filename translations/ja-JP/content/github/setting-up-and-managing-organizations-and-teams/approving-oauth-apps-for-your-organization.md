---
title: Organization 用の OAuth アプリケーションの承認
intro: '{% data variables.product.prodname_oauth_app %}による Organization のリソースへのアクセスを Organization のメンバーがリクエストしてきた場合、Organization のオーナーはそのリクエストを承認あるいは否認できます。'
redirect_from:
  - /articles/approving-third-party-applications-for-your-organization/
  - /articles/approving-oauth-apps-for-your-organization
versions:
  free-pro-team: '*'
topics:
  - organizations
  - teams
---

{% data variables.product.prodname_oauth_app %}のアクセス制限が有効化されている場合、Organization のメンバーは Organization のリソースへのアクセスを持つ {% data variables.product.prodname_oauth_app %}を承認する前に、Organization のオーナーからの[承認をリクエスト](/articles/requesting-organization-approval-for-oauth-apps)しなければなりません。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.oauth_app_access %}
5. 承認したいアプリケーションの隣で [**Review**] をクリックします。 ![レビューのリクエストリンク](/assets/images/help/settings/settings-third-party-approve-review.png)
6. リクエストされたアプリケーションに関する情報をレビューしたら、[**Grant access**] をクリックします。 ![アクセスの許可ボタン](/assets/images/help/settings/settings-third-party-approve-grant.png)

### 参考リンク

- [{% data variables.product.prodname_oauth_app %}のアクセス制限について](/articles/about-oauth-app-access-restrictions)
