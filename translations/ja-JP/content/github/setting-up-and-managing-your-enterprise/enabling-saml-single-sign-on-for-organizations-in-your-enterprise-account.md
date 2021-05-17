---
title: Enterprise アカウントで Organization 用に SAML シングルサインオンを有効にする
intro: 'You can control and secure access to resources like repositories, issues, and pull requests by enabling SAML single sign-on (SSO) and centralized authentication through an IdP across all organizations owned by an enterprise account.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: Enterprise owners can enable SAML single sign-on for organizations in an enterprise account.
versions:
  free-pro-team: '*'
topics:
  - Enterprise
---

### About SAML single sign-on for enterprise accounts

{% data reusables.saml.dotcom-saml-explanation %} 詳細は「[SAML シングルサインオンを使うアイデンティティおよびアクセス管理について](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)」を参照してください。

{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.about-saml-access-enterprise-account %}詳細は「[Enterprise アカウントへのユーザの SAML アクセスの表示および管理](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)」を参照してください。

{% data reusables.saml.saml-supported-idps %}

{% data reusables.scim.enterprise-account-scim %} プライベートベータに参加していない場合、Enterprise アカウント に対して SCIM はサポートされません。 For more information, see "[About user provisioning for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account)."

### Enabling SAML single-sign on for organizations in your enterprise account

{% note %}

**注釈:** Enterprise アカウントで SAML シングルサインオンを使用した認証を有効にすると、既存の Organization レベルの SAML 設定が上書きされます。

{% endnote %}

For more detailed information about how to enable SAML using Okta, see "[Configuring SAML single sign-on and SCIM for your enterprise account using Okta](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. [SAML single sign-on] の下で [**Enable SAML authentication**] を選択します。 ![SAML SSO を有効化するためのチェックボックス](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. **Sign on URL**フィールドに、使用する IdP のシングルサインオンのリクエストのための HTTPS エンドポイントを入力してください。 この値は Idp の設定で使用できます。 ![メンバーがサインインする際にリダイレクトされる URL のフィールド](/assets/images/help/saml/saml_sign_on_url_business.png)
7. Optionally, in the **Issuer** field, type your SAML issuer URL to verify the authenticity of sent messages. ![SAMl 発行者の名前のフィールド](/assets/images/help/saml/saml_issuer.png)
8. [**Public Certificate**] で、証明書を貼り付けて SAML の応答を認証します。 ![アイデンティティプロバイダからの公開の証明書のフィールド](/assets/images/help/saml/saml_public_certificate.png)
9. SAML 発行者からのリクエストの完全性を確認するには、{% octicon "pencil" aria-label="The edit icon" %} をクリックします。 Then in the "Signature Method" and "Digest Method" drop-downs, choose the hashing algorithm used by your SAML issuer. ![SAML 発行者が使用する署名方式とダイジェスト方式のハッシュアルゴリズム用のドロップダウン](/assets/images/help/saml/saml_hashing_method.png)
10. Enterprise で SAML SSO を有効化する前に、[**Test SAML configuration**] をクリックして、入力した情報が正しいか確認します。 ![強制化の前に SAML の構成をテストするためのボタン](/assets/images/help/saml/saml_test.png)
11. [**Save**] をクリックします。
