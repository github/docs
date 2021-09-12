---
title: Enterprise アカウントで Organization 用に SAML シングルサインオンを有効にする
intro: Enterprise アカウントが所有するすべての Organization で SAML シングルサインオン (SSO) と IdP を介した集中認証を有効にすることで、リポジトリ、Issue、プルリクエストなどのリソースへのアクセスを制御および保護できます。
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: Enterprise owners can enable SAML single sign-on for organizations in an enterprise account.
versions:
  free-pro-team: '*'
topics:
  - Enterprise
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account
---

### Enterprise アカウントの SAML シングルサインオンについて

{% data reusables.saml.dotcom-saml-explanation %} 詳細は「[SAML シングルサインオンを使うアイデンティティおよびアクセス管理について](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)」を参照してください。

{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.about-saml-access-enterprise-account %}詳細は「[Enterprise アカウントへのユーザの SAML アクセスの表示および管理](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)」を参照してください。

{% data reusables.saml.saml-supported-idps %}

{% data reusables.scim.enterprise-account-scim %} プライベートベータに参加していない場合、Enterprise アカウント に対して SCIM はサポートされません。 詳しい情報については、「[Enterprise アカウント内の Organization のユーザプロビジョニングについて](/github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account)」を参照してください。

### Enterprise アカウントで Organization の SAML シングルサインオンを有効にする

{% note %}

**注釈:** Enterprise アカウントで SAML シングルサインオンを使用した認証を有効にすると、既存の Organization レベルの SAML 設定が上書きされます。

{% endnote %}

Okta を使用して SAML を有効にする方法については、「[Okta を使用して Enterprise アカウントの SAML シングルサインオンおよび SCIM を設定する](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. [SAML single sign-on] の下で [**Enable SAML authentication**] を選択します。 ![SAML SSO を有効化するためのチェックボックス](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. **Sign on URL**フィールドに、使用する IdP のシングルサインオンのリクエストのための HTTPS エンドポイントを入力してください。 この値は Idp の設定で使用できます。 ![メンバーがサインインする際にリダイレクトされる URL のフィールド](/assets/images/help/saml/saml_sign_on_url_business.png)
7. 必要に応じて、[**Issuer**] フィールドに SAML 発行者の URL を入力して、送信されたメッセージの信頼性を確認します。 ![SAMl 発行者の名前のフィールド](/assets/images/help/saml/saml_issuer.png)
8. [**Public Certificate**] で、証明書を貼り付けて SAML の応答を認証します。 ![アイデンティティプロバイダからの公開の証明書のフィールド](/assets/images/help/saml/saml_public_certificate.png)
9. SAML 発行者からのリクエストの完全性を確認するには、{% octicon "pencil" aria-label="The edit icon" %} をクリックします。 次に、[Signature Method] および [Digest Method] ドロップダウンで、SAML 発行者が使用するハッシュアルゴリズムを選択します。 ![SAML 発行者が使用する署名方式とダイジェスト方式のハッシュアルゴリズム用のドロップダウン](/assets/images/help/saml/saml_hashing_method.png)
10. Enterprise で SAML SSO を有効化する前に、[**Test SAML configuration**] をクリックして、入力した情報が正しいか確認します。 ![強制化の前に SAML の構成をテストするためのボタン](/assets/images/help/saml/saml_test.png)
11. [**Save**] をクリックします。
