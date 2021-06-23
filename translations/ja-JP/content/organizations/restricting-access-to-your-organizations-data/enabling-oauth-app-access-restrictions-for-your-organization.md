---
title: Organization の OAuth App アクセス制限を有効化する
intro: 'Organization のオーナーは、{% data variables.product.prodname_oauth_app %} のアクセス制限を有効化して、信頼されていないアプリが Organization のリソースにアクセスするのを防止できます。その場合も Organization のメンバーは {% data variables.product.prodname_oauth_app %} を個人アカウントで使用できます。'
redirect_from:
  - /articles/enabling-third-party-application-restrictions-for-your-organization/
  - /articles/enabling-oauth-app-access-restrictions-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enabling-oauth-app-access-restrictions-for-your-organization
versions:
  free-pro-team: '*'
topics:
  - Organizations
  - Teams
---

{% data reusables.organizations.oauth_app_restrictions_default %}

{% warning %}

**警告**:
- {% data variables.product.prodname_oauth_app %} のアクセス制限を有効化すると、Organization のアクセスでの以前に認証されたすべての {% data variables.product.prodname_oauth_app %} と SSH キーが取り消されます。 詳しい情報については、「[{% data variables.product.prodname_oauth_app %}のアクセス制限について](/articles/about-oauth-app-access-restrictions)」を参照してください。
- {% data variables.product.prodname_oauth_app %} のアクセス制限を設定したら、Organization のプライベートなデータへのアクセスを必要とするすべての {% data variables.product.prodname_oauth_app %} を再認証してください。 Organization のすべてのメンバーは新しい SSH キーを作成する必要があり、Organization は必要に応じて新しいデプロイキーを作成する必要があります。
- {% data variables.product.prodname_oauth_app %} のアクセス制限が有効化されると、アプリケーションで OAuth トークンを使用して {% data variables.product.prodname_marketplace %} 取引に関する情報にアクセスできます。

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.oauth_app_access %}
5. [Third-party application access policy] の下で [**Setup application access restrictions**] をクリックします。 ![制限の設定ボタン](/assets/images/help/settings/settings-third-party-set-up-restrictions.png)
6. サードパーティのアクセス制限に関する情報を確認したら、[**Restrict third-party application access**] をクリックします。 ![制限の確認ボタン](/assets/images/help/settings/settings-third-party-restrict-confirm.png)
