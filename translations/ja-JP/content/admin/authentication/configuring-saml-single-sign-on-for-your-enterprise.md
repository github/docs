---
title: Enterprise 向けの SAML シングルサインオンを設定する
shortTitle: SAML SSO の設定
intro: Enterprise の SAML シングルサインオン (SSO) を設定できます。これにより、アイデンティティプロバイダ (IdP) を使用して {% data variables.product.product_location %} の認証を一元的に制御できます。
product: '{% data reusables.gated-features.saml-sso %}'
permissions: Enterprise オーナーは、{% data variables.product.product_name %} で Enterprise の SAML SSO を設定できます。
versions:
  github-ae: '*'
---

### SAML SSO について

{% if currentVersion == "github-ae@latest" %}

SAML SSO を使用すると、SAML IdP から {% data variables.product.product_location %} へのアクセスを一元的に制御しアクセスをセキュアにできます。 認証されていないユーザがブラウザで {% data variables.product.product_location %} にアクセスすると、{% data variables.product.product_name %} はユーザを認証するために SAML IdP にリダイレクトします。 ユーザが IdP のアカウントで正常に認証されると、IdP はユーザを {% data variables.product.product_location %} にリダイレクトします。 {% data variables.product.product_name %} は、IdP からのレスポンスを検証してから、ユーザにアクセスを許可します。

ユーザーが IdP で正常に認証されると、{% data variables.product.product_location %} に対するユーザの SAML セッションはブラウザで 24 時間アクティブになります。 24 時間後、ユーザは IdP で再度認証を行う必要があります。

{% data reusables.saml.assert-the-administrator-attribute %}

{% data reusables.scim.after-you-configure-saml %}詳しい情報については、「[Enterprise 向けのユーザプロビジョニングを設定する](/admin/authentication/configuring-user-provisioning-for-your-enterprise)」を参照してください。

{% endif %}

### サポートされているアイデンティティプロバイダ

{% data variables.product.product_name %} は、SAML2.0 標準を実装し IdP を使用した SAML SSO をサポートします。 詳しい情報については、OASIS Web サイトの [SAML Wiki](https://wiki.oasis-open.org/security) を参照してください。

{% data variables.product.company_short %} は、次の IdP を使用して {% data variables.product.product_name %} の SAML SSO をテストしました。

{% if currentVersion == "github-ae@latest" %}
- Azure AD
{% endif %}

### SAML SSO を有効化する

{% if currentVersion == "github-ae@latest" %}

{% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

次の IdP は、{% data variables.product.product_name %} の SAML SSO の設定に関するドキュメントを提供しています。 IdP がリストにない場合は、IdP に問い合わせて、{% data variables.product.product_name %} のサポートをご依頼ください。

 | IdP      | 詳細情報                                                                                                                                                                                                          |
 |:-------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 | Azure AD | Microsoft Docs の「[チュートリアル: Azure Active Directory シングルサインオン (SSO) と {% data variables.product.prodname_ghe_managed %} の統合](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial)」 |

{% data variables.product.product_name %} の初期化中に、IdP で {% data variables.product.product_name %} を SAML サービスプロバイダ (SP) として設定する必要があります。 {% data variables.product.product_name %} を有効な SP として設定するには、IdP にいくつかの一意の値を入力する必要があります。

| 値                              | 別名     | 説明                                                              | サンプル                      |
|:------------------------------ |:------ |:--------------------------------------------------------------- |:------------------------- |
| SP エンティティ ID                   | SP URL | {% data variables.product.prodname_ghe_managed %} の最上位にある URL | <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em></code> |
| SP アサーションコンシューマーサービス (ACS) URL | 返信 URL | IdP が SAML レスポンスを送信する URL                                       | <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em>/saml/consume</code> |
| SP シングルサインオン (SSO) URL         |        | IdP が SSO を開始する URL                                             | <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em>/sso</code> |

{% endif %}

### SAML SSO 設定を編集する

IdP の詳細が変更された場合は、{% data variables.product.product_location %} の SAML SSO 設定を編集する必要があります。 たとえば、IdP の証明書の有効期限が切れそうな場合、公開証明書の値を編集できます。

{% if currentVersion == "github-ae@latest" %}

{% note %}

**注釈**: {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. [SAML single sign-on] で、IdP の新しい詳細を入力します。 ![Enterprise の SAML SSO 設定の IdP 詳細を含むテキスト入力フィールド](/assets/images/help/saml/ae-edit-idp-details.png)
1. 必要に応じて、{% octicon "pencil" aria-label="The edit icon" %} をクリックして、新しい署名またはダイジェスト方式を設定します。 ![署名とダイジェスト方法を変更するための編集アイコン](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest.png)

    - ドロップダウンメニューを使用して、新しい署名またはダイジェスト方法を選択します。 ![新しい署名またはダイジェスト方法を選択するためのドロップダウンメニュー](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest-drop-down-menus.png)
1. [**Test SAML configuration**] をクリックして、入力した情報が正しいことを確認します。 ![[Test SAML configuration] ボタン](/assets/images/help/saml/ae-edit-idp-details-test-saml-configuration.png)
1. [**Save**] をクリックします。 ![SAML SSO 設定の [Save] ボタン](/assets/images/help/saml/ae-edit-idp-details-save.png)
1. 必要に応じて、{% data variables.product.product_location %} のユーザアカウントを自動的にプロビジョニングおよびプロビジョニング解除するには、SCIM を使用してユーザプロビジョニングを再設定します。 詳しい情報については、「[Enterprise 向けのユーザプロビジョニングを設定する](/admin/authentication/configuring-user-provisioning-for-your-enterprise)」を参照してください。

{% endif %}

### SAML SSO を無効化する

{% if currentVersion == "github-ae@latest" %}

{% warning %}

**Warning**: {% data variables.product.product_location %} の SAML SSO を無効にすると、既存の SAML SSO セッションのないユーザは {% data variables.product.product_location %} にサインインできなくなります。 {% data variables.product.product_location %} での SAML SSO セッションは、24 時間後に終了します。

{% endwarning %}

{% note %}

**注釈**: {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. [SAML single sign-on] の下で [**Enable SAML authentication**] を選択解除します。 ![[Enable SAML authentication] チェックボックス](/assets/images/help/saml/ae-saml-disabled.png)
1. SAML SSO を無効にし、初期化中に作成した組み込みユーザアカウントでサインインする必要がある場合は、[**Save**] をクリックします。 ![SAML SSO 設定の [Save] ボタン](/assets/images/help/saml/ae-saml-disabled-save.png)

{% endif %}
