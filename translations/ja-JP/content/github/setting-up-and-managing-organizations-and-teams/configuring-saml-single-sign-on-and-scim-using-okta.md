---
title: Okta を使う SAML シングルサインオンおよび SCIM を設定する
intro: 'Okta を使う Security Assertion Markup Language (SAML) シングルサインオン (SSO) および System for Cross-domain Identity Management (SCIM) を使用すると、 {% data variables.product.prodname_dotcom %} で Organization へのアクセスを自動的に管理することができます。'
product: '{% data reusables.gated-features.saml-sso %}'
permissions: Organization のオーナーは、Okta を使う Organization に SAML SSO および SCIM を設定できます。
versions:
  free-pro-team: '*'
---

### Okta での SAML と SCIM について

Organization がアイデンティティプロバイダ (IdP) である Okta を使う SAML SSO と SCIM を使用するように設定すれば、{% data variables.product.prodname_dotcom %} Organization や他の Web アプリケーションへのアクセスを、1 つの集中インターフェースから制御することができます。

SAML SSO は、リポジトリや Issue、プルリクエストといった Organization のリソースに対するアクセスを制御し、保護します。 SCIM は、Okta で変更を行ったとき、{% data variables.product.prodname_dotcom %} の Organization に対するメンバーのアクセスを自動的に追加、管理、削除します。 詳しい情報については、「[SAML シングルサインオンを使うアイデンティティおよびアクセス管理について](/github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on)」と「[SCIM について](/github/setting-up-and-managing-organizations-and-teams/about-scim)」を参照してください。

SCIM を有効にすると、Okta で {% data variables.product.prodname_ghe_cloud %} アプリケーションを割り当てる任意のユーザが次のプロビジョニング機能を使えるようになります。

| 機能            | 説明                                                                                                                   |
| ------------- | -------------------------------------------------------------------------------------------------------------------- |
| 新しいユーザのプッシュ   | Okta でユーザを作成すると、{% data variables.product.prodname_dotcom %} Organization に参加するためのメールがユーザに届きます。                      |
| ユーザ無効化のプッシュ   | Okta でユーザを無効化すると、そのユーザは {% data variables.product.prodname_dotcom %} Organization から削除されます。                          |
| プロフィール更新のプッシュ | Okta でユーザのプロフィールを更新すると、そのユーザの {% data variables.product.prodname_dotcom %} の Organization でのメンバーシップに関するメタデータが更新されます。 |
| ユーザの再アクティブ化   | Okta でユーザを再アクティブ化すると、{% data variables.product.prodname_dotcom %} の Organization に復帰するための招待メールがそのユーザに届きます。           |

### 必要な環境

{% data reusables.saml.use-classic-ui %}

### Okta で {% data variables.product.prodname_ghe_cloud %} アプリケーションを追加する

{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.add-okta-application %}
{% data reusables.saml.search-ghec-okta %}
4. [Github Enterprise Cloud - Organization] の右で [**Add**] をクリックします。 ![{% data variables.product.prodname_ghe_cloud %} アプリケーションの [Add] をクリック](/assets/images/help/saml/okta-add-ghec-application.png)

5. [**GitHub Organization**] フィールドに、{% data variables.product.prodname_dotcom %} の Organization 名を入力します。 たとえば、Organization の URL が https://github.com/octo-org の場合、Organization 名は `octo-org` となります。 ![GitHub の Organization 名を入力](/assets/images/help/saml/okta-github-organization-name.png)

6. [**Done**] をクリックします。

### SAML SSO の有効化とテスト

{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.okta-applications-click-ghec-application-label %}
{% data reusables.saml.assign-yourself-to-okta %}
{% data reusables.saml.okta-sign-on-tab %}
{% data reusables.saml.okta-view-setup-instructions %}
6. SAML 2.0 の設定方法に関するガイドから、サインオン URL、発行者 URL、公開の証明書を使用して、{% data variables.product.prodname_dotcom %} での SAML SSO を有効化してテストします。 詳しい情報については、「[Organization での SAML シングルサインオンの有効化とテスト](/github/setting-up-and-managing-organizations-and-teams/enabling-and-testing-saml-single-sign-on-for-your-organization)」を参照してください。

### Okta で SCIM を使ってアクセスのプロビジョニングを設定する

{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.okta-applications-click-ghec-application-label %}
{% data reusables.saml.okta-provisioning-tab %}
{% data reusables.saml.okta-configure-api-integration %}
{% data reusables.saml.okta-enable-api-integration %}


6. [**Authenticate with Github Enterprise Cloud - Organization**] をクリックします。 ![Okta アプリケーションの [Authenticate with Github Enterprise Cloud - Organization] ボタン](/assets/images/help/saml/okta-authenticate-with-ghec-organization.png)

7. Organization 名の右にある [**Grant**] をクリックします。 ![Organization にアクセスできるよう Okta SCIM インテグレーションを認証する [Grant] ボタン](/assets/images/help/saml/okta-scim-integration-grant-organization-access.png)

  {% note %}

  **注釈**: リストに自分の Organization が表示されていない場合は、ブラウザで `https://github.com/orgs/ORGANIZATION-NAME/sso` を開き、IdP での管理者アカウントを使用して SAML SSO 経由で Organization に認証してもらいます。 たとえば、Organization 名が `octo-org` の場合、URL は `https://github.com/orgs/octo-org/sso` となります。 詳しい情報については「[SAML シングルサインオンでの認証について](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)」を参照してください。

  {% endnote %}
1. [**Authorize OktaOAN**] をクリックします。 ![Organization にアクセスできるよう Okta SCIM インテグレーションを認証する [Authorize OktaOAN] ボタン](/assets/images/help/saml/okta-scim-integration-authorize-oktaoan.png)
{% data reusables.saml.okta-save-provisioning %}
{% data reusables.saml.okta-edit-provisioning %}

### 参考リンク

- [Okta を使用して Enterprise アカウントの SAML シングルサインオンおよび SCIM を設定する](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)
- [Organization の Team 同期を管理する](/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization#enabling-team-synchronization-for-okta)
- Okta ドキュメントの「[Understanding SAML](https://developer.okta.com/docs/concepts/saml/)」
- Okta ドキュメントの「[Understanding SCIM](https://developer.okta.com/docs/concepts/scim/)」
