---
title: Enterprise 向けの SAML シングルサインオンを設定する
shortTitle: Configure SAML SSO
intro: 'You can control and secure access to {% ifversion ghec %}resources like repositories, issues, and pull requests within your enterprise''s organizations{% elsif ghes %}{% data variables.product.product_location %}{% elsif ghae %}your enterprise on {% data variables.product.prodname_ghe_managed %}{% endif %} by {% ifversion ghec %}enforcing{% elsif ghes or ghae %}configuring{% endif %} SAML single sign-on (SSO) through your identity provider (IdP).'
permissions: '{% ifversion ghes %}Site administrators{% elsif ghec or ghae %}Enterprise owners{% endif %} can configure SAML SSO for {% ifversion ghec or ghae %}an enterprise on {% data variables.product.product_name %}{% elsif ghes %}a {% data variables.product.product_name %} instance{% endif %}.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
redirect_from:
  - /admin/authentication/configuring-saml-single-sign-on-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enforcing-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise
---

{% data reusables.enterprise-accounts.emu-saml-note %}

## SAML SSO について

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} 詳細は「[SAML シングルサインオンを使うアイデンティティおよびアクセス管理について](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)」を参照してください。

{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.about-saml-access-enterprise-account %}詳細は「[Enterprise アカウントへのユーザの SAML アクセスの表示および管理](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)」を参照してください。

{% data reusables.saml.saml-disabled-linked-identities-removed %}

{% data reusables.scim.enterprise-account-scim %}

{% elsif ghes or ghae %}

SAML SSO を使用すると、SAML IdP から {% data variables.product.product_location %} へのアクセスを一元的に制御しアクセスをセキュアにできます。 認証されていないユーザがブラウザで {% data variables.product.product_location %} にアクセスすると、{% data variables.product.product_name %} はユーザを認証するために SAML IdP にリダイレクトします。 ユーザが IdP のアカウントで正常に認証されると、IdP はユーザを {% data variables.product.product_location %} にリダイレクトします。 {% data variables.product.product_name %} は、IdP からのレスポンスを検証してから、ユーザにアクセスを許可します。

ユーザーが IdP で正常に認証されると、{% data variables.product.product_location %} に対するユーザの SAML セッションはブラウザで 24 時間アクティブになります。 24 時間後、ユーザは IdP で再度認証を行う必要があります。

{% data reusables.saml.saml-ghes-account-revocation %}

{% ifversion ghae %}

{% data reusables.saml.assert-the-administrator-attribute %}

{% data reusables.scim.after-you-configure-saml %}詳しい情報については、「[Enterprise 向けのユーザプロビジョニングを設定する](/admin/authentication/configuring-user-provisioning-for-your-enterprise)」を参照してください。

{% endif %}

{% endif %}

## サポートされているアイデンティティプロバイダ

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghec %}

## SAMLでのユーザ名についての考慮

{% ifversion ghec %}If you use {% data variables.product.prodname_emus %}, {% endif %}{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} For more information, see "[Username considerations for external authentication](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)."

## Enforcing SAML single-sign on for organizations in your enterprise account

{% note %}

**ノート:**

- When you enforce SAML SSO for your enterprise, the enterprise configuration will override any existing organization-level SAML configurations. {% data reusables.saml.switching-from-org-to-enterprise %} For more information, see "[Switching your SAML configuration from an organization to an enterprise account](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)."
- When you enforce SAML SSO for an organization, {% data variables.product.company_short %} removes any members of the organization that have not authenticated successfully with your SAML IdP. When you require SAML SSO for your enterprise, {% data variables.product.company_short %} does not remove members of the enterprise that have not authenticated successfully with your SAML IdP. The next time a member accesses the enterprise's resources, the member must authenticate with your SAML IdP.

{% endnote %}

For more detailed information about how to enable SAML using Okta, see "[Configuring SAML single sign-on for your enterprise account using Okta](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Under "SAML single sign-on", select **Require SAML authentication**. ![SAML SSO を有効化するためのチェックボックス](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. **Sign on URL**フィールドに、使用する IdP のシングルサインオンのリクエストのための HTTPS エンドポイントを入力してください。 この値は Idp の設定で使用できます。 ![メンバーがサインインする際にリダイレクトされる URL のフィールド](/assets/images/help/saml/saml_sign_on_url_business.png)
7. 必要に応じて、[**Issuer**] フィールドに SAML 発行者の URL を入力して、送信されたメッセージの信頼性を確認します。 ![SAMl 発行者の名前のフィールド](/assets/images/help/saml/saml_issuer.png)
8. [**Public Certificate**] で、証明書を貼り付けて SAML の応答を認証します。 ![アイデンティティプロバイダからの公開の証明書のフィールド](/assets/images/help/saml/saml_public_certificate.png)
9. SAML 発行者からのリクエストの完全性を確認するには、{% octicon "pencil" aria-label="The edit icon" %} をクリックします。 次に、[Signature Method] および [Digest Method] ドロップダウンで、SAML 発行者が使用するハッシュアルゴリズムを選択します。 ![SAML 発行者が使用する署名方式とダイジェスト方式のハッシュアルゴリズム用のドロップダウン](/assets/images/help/saml/saml_hashing_method.png)
10. Enterprise で SAML SSO を有効化する前に、[**Test SAML configuration**] をクリックして、入力した情報が正しいか確認します。 ![強制化の前に SAML の構成をテストするためのボタン](/assets/images/help/saml/saml_test.png)
11. [**Save**] をクリックします。
{% data reusables.enterprise-accounts.download-recovery-codes %}

{% elsif ghes %}

## SAML SSO の設定

You can enable or disable SAML authentication for {% data variables.product.product_location %}, or you can edit an existing configuration. You can view and edit authentication settings for {% data variables.product.product_name %} in the management console. For more information, see "[Accessing the management console](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)."

{% note %}

**注釈**: {% data reusables.enterprise.test-in-staging %}

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
1. **SAML**を選択してください。

   ![Screenshot of option to enable SAML authentication in management console](/assets/images/enterprise/management-console/auth-select-saml.png)
1. {% data reusables.enterprise_user_management.built-in-authentication-option %}

   ![Screenshot of option to enable built-in authentication outside of SAML IdP](/assets/images/enterprise/management-console/saml-built-in-authentication.png)
1. オプションで、未承諾応答SSOを有効化する場合は [**IdP initiated SSO**] を選択します。 デフォルトでは、{% data variables.product.prodname_ghe_server %}は未承認アイデンティティプロバイダ (IdP) 起点のリクエストに対して、IdPへの`AuthnRequest`返信で応答します。

   ![Screenshot of option to enable IdP-initiated unsolicited response](/assets/images/enterprise/management-console/saml-idp-sso.png)

   {% tip %}

   **ノート**：この値は**選択しない**でおくことをおすすめします。 この機能を有効にするのは、SAMLの実装がサービスプロバイダ起点のSSOをサポートしないまれな場合と、{% data variables.contact.enterprise_support %}によって推奨された場合**だけ**にすべきです。

   {% endtip %}

1. {% data variables.product.product_location %} 上のユーザの管理者権限を SAML プロバイダに決めさせたく**ない**場合、[**Disable administrator demotion/promotion**] を選択します。

   ![Screenshot of option to enable option to respect the "administrator" attribute from the IdP to enable or disable administrative rights](/assets/images/enterprise/management-console/disable-admin-demotion-promotion.png)
{%- ifversion ghes > 3.3 %}
1. Optionally, to allow {% data variables.product.product_location %} to receive encrypted assertions from your SAML IdP, select **Require encrypted assertions**. You must ensure that your IdP supports encrypted assertions and that the encryption and key transport methods in the management console match the values configured on your IdP. You must also provide {% data variables.product.product_location %}'s public certificate to your IdP. For more information, see "[Enabling encrypted assertions](/admin/identity-and-access-management/using-saml-for-enterprise-iam/enabling-encrypted-assertions)."

   ![Screenshot of "Enable encrypted assertions" checkbox within management console's "Authentication" section](/assets/images/help/saml/management-console-enable-encrypted-assertions.png)
{%- endif %}
1. **Single sign-on URL（シングルサインオンURL）**フィールドに、使用するIdpのシングルサインオンのリクエストのためのHTTPあるいはHTTPSエンドポイントを入力してください。 この値はIdpの設定によって決まります。 ホストが内部のネットワークからしか利用できない場合、[{% data variables.product.product_location %}を内部ネームサーバーを利用するように設定](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-dns-nameservers/)する必要があるかもしれません。

   ![Screenshot of text field for single sign-on URL](/assets/images/enterprise/management-console/saml-single-sign-url.png)
1. または、[**Issuer**] フィールドに、SAML の発行者の名前を入力します。 これは、{% data variables.product.product_location %} へ送信されるメッセージの真正性を検証します。

   ![Screenshot of text field for SAML issuer URL](/assets/images/enterprise/management-console/saml-issuer.png)
1. [**Signature Method**] および [**Digest Method**] ドロップダウンメニューで、SAML の発行者が {% data variables.product.product_location %} からのリクエストの整合性の検証に使うハッシュアルゴリズムを選択します。 ** Name Identifier Format（Name Identifier形式）**ドロップダウンメニューから形式を指定してください。

   ![Screenshot of drop-down menus to select signature and digest method](/assets/images/enterprise/management-console/saml-method.png)
1. [**Verification certificate**] の下で、[**Choose File**] をクリックし、IdP からの SAML のレスポンスを検証するための証明書を選択してください。

   ![Screenshot of button for uploading validation certificate from IdP](/assets/images/enterprise/management-console/saml-verification-cert.png)
1. 必要に応じてSAMLの属性名はIdPに合わせて修正してください。あるいはデフォルト名をそのまま受け付けてください。

   ![Screenshot of fields for entering additional SAML attributes](/assets/images/enterprise/management-console/saml-attributes.png)

{% elsif ghae %}

## SAML SSO を有効化する

{% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

次の IdP は、{% data variables.product.product_name %} の SAML SSO の設定に関するドキュメントを提供しています。 IdP がリストにない場合は、IdP に問い合わせて、{% data variables.product.product_name %} のサポートをご依頼ください。

 | IdP      | 詳細情報                                                                                                                                                                                                                                                             |
 |:-------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 | Azure AD | "[Configuring authentication and provisioning for your enterprise using Azure AD](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)" |
 | Okta     | "[Configuring authentication and provisioning for your enterprise using Okta](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta)"         |

During initialization for {% data variables.product.product_name %}, you must configure {% data variables.product.product_name %} as a SAML service provider (SP) on your IdP. {% data variables.product.product_name %} を有効な SP として設定するには、IdP にいくつかの一意の値を入力する必要があります。 For more information, see "[SAML configuration reference](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-metadata)."

## SAML SSO 設定を編集する

IdP の詳細が変更された場合は、{% data variables.product.product_location %} の SAML SSO 設定を編集する必要があります。 たとえば、IdP の証明書の有効期限が切れそうな場合、公開証明書の値を編集できます。

{% ifversion ghae %}

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

{% ifversion ghae %}

## SAML SSO を無効化する

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

{% endif %}

{% ifversion ghec or ghes %}

## 参考リンク

{%- ifversion ghec %}
- "[Managing SAML single sign-on for your organization](/organizations/managing-saml-single-sign-on-for-your-organization)"
{%- endif %}
{%- ifversion ghes %}
- "[Promoting or demoting a site administrator](/admin/user-management/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator)"
{%- endif %}

{% endif %}
