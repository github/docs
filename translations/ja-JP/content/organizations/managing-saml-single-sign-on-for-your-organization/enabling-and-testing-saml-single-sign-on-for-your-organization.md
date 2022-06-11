---
title: Organization 向けの SAML シングルサインオンを有効化してテストする
intro: Organization のオーナーと管理者は、SAML シングルサインオンを有効にして、Organization のセキュリティを強化できます。
redirect_from:
  - /articles/enabling-and-testing-saml-single-sign-on-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enabling-and-testing-saml-single-sign-on-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: SAML SSOの有効化とテスト
---

## SAMLシングルサインオンについて

すべてのメンバーに使用するように強制する必要なく、Organization 内で SAML SSO を有効化できます。 SAML SSO を Organization 内で強制せずに有効化することで、Organization での SAML SSO の導入がスムーズになります。 Organization 内の大半のメンバーが SAML SSO を使用するようになったら、Organization 内で強制化できます。

{% data reusables.saml.ghec-only %}

SAML SSO を有効化しても強制はしない場合、SAML SSO を使用しないメンバーは、引き続き Organization のメンバーであり続けます。 SAML SSO の強制化の詳細については、「[Organization で SAML シングルサインオンを施行する](/articles/enforcing-saml-single-sign-on-for-your-organization)」を参照してください。

{% data reusables.saml.outside-collaborators-exemption %}

{% data reusables.saml.saml-disabled-linked-identities-removed %}

## Organization 向けの SAML シングルサインオンを有効化してテストする

OrganizationでSAML SSOを施行する前に、Organizationの準備ができていることを確認してください。 詳細は「[Organization での SAML シングルサインオンの施行を準備する](/articles/preparing-to-enforce-saml-single-sign-on-in-your-organization)」を参照してください。

{% data variables.product.company_short %}がSAML SSOをサポートしているアイデンティティプロバイダ（IdP）に関する詳しい情報については「[Organizationへのアイデンティティプロバイダの接続](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization)」を参照してください。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
5. [SAML single sign-on] の下で [**Enable SAML authentication**] を選択します。 ![SAML SSO を有効化するためのチェックボックス](/assets/images/help/saml/saml_enable.png)

  {% note %}

  **メモ:** SAML SSO の有効化後、シングルサインオンのリカバリコードをダウンロードして、IdP が使用できなくなった場合にも Organization にアクセスできるようにできます。 詳細は「[Organization の SAML シングルサインオンのリカバリコードをダウンロード](/articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes)」を参照してください。

  {% endnote %}

6. [Sign on URL] フィールドにシングルサインオンのリクエスト用の IdP の HTTPS エンドポイントを入力します。 この値は Idp の設定で使用できます。 ![メンバーがサインインする際にリダイレクトされる URL のフィールド](/assets/images/help/saml/saml_sign_on_url.png)
7. または、[Issuer] フィールドに SAML 発行者の名前を入力します。 これにより、送信メッセージの信ぴょう性が検証されます。 ![SAMl 発行者の名前のフィールド](/assets/images/help/saml/saml_issuer.png)
8. [Public Certificate] の下で証明書を貼り付けて SAML の応答を検証します。 ![アイデンティティプロバイダからの公開の証明書のフィールド](/assets/images/help/saml/saml_public_certificate.png)
9. {% octicon "pencil" aria-label="The edit icon" %} をクリックして、[Signature Method] および [Digest Method] ドロップダウンで、SAML 発行者がリクエストの整合性を検証するために使用するハッシュアルゴリズムを選択します。 ![SAML 発行者が使用する署名方式とダイジェスト方式のハッシュアルゴリズム用のドロップダウン](/assets/images/help/saml/saml_hashing_method.png)
10. Organization で SAML SSO を有効化する前に、[ **Test SAML configuration**] をクリックして、入力した情報が正しいことを確認します。 ![強制化の前に SAML の構成をテストするためのボタン](/assets/images/help/saml/saml_test.png)

  {% tip %}

  **ヒント:** {% data reusables.saml.testing-saml-sso %}

  {% endtip %}
11. SAML SSO を強制して、IdP 経由で認証をされていないすべての Organization メンバーを削除するには、[**Require SAML SSO authentication for all members of the _Organization 名_ organization**] を選択します。 SAML SSO の強制化の詳細については、「[Organization で SAML シングルサインオンを施行する](/articles/enforcing-saml-single-sign-on-for-your-organization)」を参照してください。 ![Organization 向けに SAML SSO を強制するためのチェックボックス ](/assets/images/help/saml/saml_require_saml_sso.png)
12. [**Save**] をクリックします。 ![SAML SSO 設定を保存するためのボタン](/assets/images/help/saml/saml_save.png)

## 参考リンク

- [SAML シングルサインオンを使うアイデンティティおよびアクセス管理について](/articles/about-identity-and-access-management-with-saml-single-sign-on)
- 「[SAML設定のリファレンス](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)」
