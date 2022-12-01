---
title: Enterprise 向けの SAML シングルサインオンを設定する
shortTitle: Configure SAML SSO
intro: 'ID プロバイダー (IdP) を介した SAML シングル サインオン (SSO) を{% ifversion ghec %}適用{% elsif ghes or ghae %}構成{% endif %}して、{% ifversion ghec %}エンタープライズの組織内のリポジトリ、イシュー、pull request などのリソース{% elsif ghes %}{% data variables.location.product_location %} {% elsif ghae %}{% data variables.product.prodname_ghe_managed %} のエンタープライズ{% endif %}へのアクセスを制御し、セキュリティで保護できます。'
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
ms.openlocfilehash: 804ba3b262aae15b862e1a14694b82339c8d34a4
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183957'
---
{% data reusables.enterprise-accounts.emu-saml-note %}

## SAML SSO について

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} 

{% data reusables.saml.saml-accounts %}

詳細については、「[SAML シングル サインオンを使うアイデンティティおよびアクセス管理について](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)」を参照してください。

{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.about-saml-access-enterprise-account %}詳細については、「[Enterprise アカウントへのユーザーの SAML アクセスの表示および管理](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)」を参照してください。

{% data reusables.saml.saml-disabled-linked-identities-removed %}

{% data reusables.apps.reauthorize-apps-saml %}

{% elsif ghes or ghae %}

SAML SSO を使用すると、SAML IdP から {% data variables.location.product_location %} へのアクセスを一元的に制御し、セキュリティで保護できます。 認証されていないユーザーがブラウザで {% data variables.location.product_location %} にアクセスすると、{% data variables.product.product_name %} は認証するためにユーザーを SAML IdP にリダイレクトします。 ユーザーが IdP のアカウントで正常に認証されると、IdP はもう一度ユーザーを {% data variables.location.product_location %} にリダイレクトします。 {% data variables.product.product_name %} は、IdP からのレスポンスを検証してから、ユーザにアクセスを許可します。

ユーザーが IdP で正常に認証されると、{% data variables.location.product_location %} に対するユーザーの SAML セッションはブラウザーで 24 時間アクティブになります。 24 時間後、ユーザは IdP で再度認証を行う必要があります。

{% data reusables.saml.saml-ghes-account-revocation %}

{% ifversion ghae %}

{% data reusables.saml.assert-the-administrator-attribute %}

{% data reusables.scim.after-you-configure-saml %} 詳細については、「[エンタープライズ向けのユーザー プロビジョニングの構成](/admin/authentication/configuring-user-provisioning-for-your-enterprise)」を参照してください。

{% endif %}

{% endif %}

## サポートされているアイデンティティプロバイダ

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghec %}

## SAMLでのユーザ名についての考慮

{% ifversion ghec %}{% data variables.product.prodname_emus %} を使用する場合、{% endif %}{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %}詳細については、[外部認証のユーザー名に関する考慮事項](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)に関するページを参照してください。

## Enterprise アカウントで Organization の SAML シングルサインオンを適用する

Enterprise に SAML SSO を適用すると、Enterprise 構成によって既存の Organization レベルの SAML 構成がオーバーライドされます。 {% data reusables.saml.switching-from-org-to-enterprise %} 詳細については、「[組織からエンタープライズ アカウントへの SAML 構成の切り替え](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)」を参照してください。

Organization に SAML SSO を適用すると、{% data variables.product.company_short %} では、SAML IdP で正常に認証されていない Organization のメンバーがすべて削除されます。 Enterprise に SAML SSO を必要とする場合、{% data variables.product.company_short %} では、SAML IdP で正常に認証されていない Enterprise のメンバーは削除されません。 次にメンバーが Enterprise のリソースにアクセスするときに、そのメンバーは SAML IdP で認証する必要があります。

Okta を使用して SAML を有効にする方法の詳細については、[Okta を使用した Enterprise アカウントの SAML シングル サインオンの構成](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)に関するページを参照してください。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. [SAML シングル サインオン] で、 **[Require SAML authentication]\(SAML 認証が必要\)** を選択します。
  ![SAML SSO を有効化するためのチェックボックス](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. **[サインオン URL]** フィールドにシングルサインオンのリクエスト用の IdP の HTTPS エンドポイントを入力します。 この値は Idp の設定で使用できます。
![メンバーがサインインする際にリダイレクトされる URL のフィールド](/assets/images/help/saml/saml_sign_on_url_business.png)
7. 必要に応じて、 **[発行者]** フィールドに SAML 発行者の URL を入力して、送信されたメッセージの信頼性を確認します。
![SAML 発行者の名前のフィールド](/assets/images/help/saml/saml_issuer.png)
8. **[公開証明書]** の下で証明書を貼り付けて SAML の応答を検証します。
![ID プロバイダーからの公開証明書のフィールド](/assets/images/help/saml/saml_public_certificate.png)
9. SAML 発行者からの要求のデータ整合性を確認するには、{% octicon "pencil" aria-label="The edit icon" %} をクリックします。 次に、[Signature Method] および [Digest Method] ドロップダウンで、SAML 発行者が使用するハッシュアルゴリズムを選択します。
![SAML 発行者が使用する署名方法とダイジェスト方法のハッシュ アルゴリズム用のドロップダウン](/assets/images/help/saml/saml_hashing_method.png)
10. Enterprise で SAML SSO を有効化する前に、 **[SAML 構成のテスト]** をクリックして、入力した情報が正しいか確認します。 ![適用する前に SAML 構成をテストするボタン](/assets/images/help/saml/saml_test.png)
11. **[保存]** をクリックします。
{% data reusables.enterprise-accounts.download-recovery-codes %}

{% elsif ghes %}

## SAML SSO の設定

{% data variables.location.product_location %} の SAML 認証を有効または無効にすることも、既存の構成を編集することもできます。 {% data variables.product.product_name %} の認証設定は、管理コンソールで表示および編集できます。 詳細については、「[Accessing the management console](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)」 (管理コンソールへのアクセス) を参照してください。

{% note %}

**注**: {% data reusables.enterprise.test-in-staging %}

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
1. **[SAML]** を選択します。
   
   ![管理コンソールで SAML 認証を有効にするオプションのスクリーンショット](/assets/images/enterprise/management-console/auth-select-saml.png)
1. {% data reusables.enterprise_user_management.built-in-authentication-option %}

   ![SAML IdP の外部で組み込み認証を有効にするオプションのスクリーンショット](/assets/images/enterprise/management-console/saml-built-in-authentication.png)
1. 必要に応じて、未承諾応答 SSO を有効にするには、 **[IdP Initiated SSO]** を選択します。 既定では、{% data variables.product.prodname_ghe_server %} は、未承諾の ID プロバイダー (IdP) によって開始された要求に対して、IdP への `AuthnRequest` で応答します。

   ![IdP によって開始された未承諾応答を有効にするオプションのスクリーンショット](/assets/images/enterprise/management-console/saml-idp-sso.png)

   {% tip %}

   **注**: この値は **未選択** の状態にしておくことをお勧めします。 この機能を有効にするのは、SAML の実装がサービス プロバイダーによって開始される SSO をサポートしないまれな場合と、{% data variables.contact.enterprise_support %} によって推奨された場合 **のみ** です。

   {% endtip %}

1. SAML プロバイダーが {% data variables.location.product_location %} のユーザーの管理者権限を決定 **しない** 場合は、 **[Disable administrator demotion/promotion]** を選択します。

   ![IdP の "administrator" 属性を尊重して管理者権限を有効または無効にするオプションを有効にするオプションのスクリーンショット](/assets/images/enterprise/management-console/disable-admin-demotion-promotion.png) {%- ifversion ghes > 3.3 %}
1. 必要に応じて、{% data variables.location.product_location %} が SAML IdP から暗号化アサーションを受信できるようにするには、 **[Require encrypted assertions]** を選択します。 IdP で暗号化されたアサーションがサポートされていること、および管理コンソールの暗号化とキー トランスポート方法が IdP で構成されている値と一致していることを確認する必要があります。 また、IdP に {% data variables.location.product_location %} のパブリック証明書を指定する必要もあります。 詳細については、「[暗号化アサーションを有効にする](/admin/identity-and-access-management/using-saml-for-enterprise-iam/enabling-encrypted-assertions)」を参照してください。

   ![管理コンソールの [認証] セクション内の [暗号化アサーションを有効にする] チェックボックスのスクリーンショット](/assets/images/help/saml/management-console-enable-encrypted-assertions.png) {%- endif %}
1. **[シングル サインオン URL]** フィールドに、シングル サインオンの要求のための IdP の HTTP または HTTPS エンドポイントを入力します。 この値はIdpの設定によって決まります。 ホストが内部ネットワークからのみ使用できる場合は、[内部ネームサーバーを使用するように {% data variables.location.product_location %} を構成する](/enterprise/admin/guides/installation/configuring-dns-nameservers/)必要がある場合があります。

   ![シングル サインオン URL のテキスト フィールドのスクリーンショット](/assets/images/enterprise/management-console/saml-single-sign-url.png)
1. または、 **[発行者]** フィールドに SAML 発行者の名前を入力します。 これにより、{% data variables.location.product_location %} に送信されたメッセージの信頼性が検証されます。

   ![SAML 発行者 URL のテキスト フィールドのスクリーンショット](/assets/images/enterprise/management-console/saml-issuer.png)
1. **[署名方法]** および **[ダイジェスト方法]** ドロップダウン メニューで、SAML 発行者が {% data variables.location.product_location %} からの要求の整合性を検証するために使用するハッシュ アルゴリズムを選択します。 **[名前識別子形式]** ドロップダウン メニューで形式を指定します。

   ![署名とダイジェスト方法を選択するドロップダウン メニューのスクリーンショット](/assets/images/enterprise/management-console/saml-method.png)
1. **[検証証明書]** で **[ファイルの選択]** をクリックし、IdP からの SAML 応答を検証する証明書を選択します。

   ![IdP から検証証明書をアップロードするためのボタンのスクリーンショット](/assets/images/enterprise/management-console/saml-verification-cert.png)
1. 必要に応じてSAMLの属性名はIdPに合わせて修正してください。あるいはデフォルト名をそのまま受け付けてください。

   ![追加の SAML 属性を入力するためのフィールドのスクリーンショット](/assets/images/enterprise/management-console/saml-attributes.png)

{% elsif ghae %}

## SAML SSO を有効化する

{% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

次の IdP は、{% data variables.product.product_name %} の SAML SSO の設定に関するドキュメントを提供しています。 IdP がリストにない場合は、IdP に問い合わせて、{% data variables.product.product_name %} のサポートをご依頼ください。

 | IdP | 詳細情報 |
 | :- | :- |
 | Azure AD | 「[Azure AD を使用して Enterprise の認証とプロビジョニングを設定する](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)」 |
| Okta | 「[Okta を使用する Enterprise 用の認証とプロビジョニングの構成](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta)」 |

{% data variables.product.product_name %} の初期化中に、IdP で {% data variables.product.product_name %} を SAML サービス プロバイダー (SP) として設定する必要があります。 {% data variables.product.product_name %} を有効な SP として設定するには、IdP にいくつかの一意の値を入力する必要があります。 詳細については、「[SAML 構成リファレンス](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-metadata)」をご覧ください。

## SAML SSO 設定を編集する

IdP の詳細が変更された場合は、{% data variables.location.product_location %} の SAML SSO 設定を編集する必要があります。 たとえば、IdP の証明書の有効期限が切れそうな場合、公開証明書の値を編集できます。

{% ifversion ghae %}

{% note %}

**注**: {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %} 

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. [SAML single sign-on] で、IdP の新しい詳細を入力します。
  ![Enterprise の SAML SSO 設定の IdP 詳細を含むテキスト入力フィールド](/assets/images/help/saml/ae-edit-idp-details.png)
1. 必要に応じて、{% octicon "pencil" aria-label="The edit icon" %} をクリックして、新しい署名またはダイジェスト方式を設定します。
  ![署名とダイジェスト方法を変更するための編集アイコン](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest.png)

    - ドロップダウンメニューを使用して、新しい署名またはダイジェスト方法を選択します。
      ![新しい署名またはダイジェスト方法を選択するためのドロップダウン メニュー](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest-drop-down-menus.png)
1. 入力した情報が正しいことを確認するには、 **[SAML 構成のテスト]** をクリックします。
  ![[SAML 構成のテスト] ボタン](/assets/images/help/saml/ae-edit-idp-details-test-saml-configuration.png)
1. **[保存]** をクリックします。
    ![SAML SSO 設定の [保存] ボタン](/assets/images/help/saml/ae-edit-idp-details-save.png)
1. 必要に応じて、{% data variables.location.product_location %} のユーザー アカウントを自動的にプロビジョニングおよびプロビジョニング解除するには、SCIM を使用してユーザー プロビジョニングを再設定します。 詳細については、「[エンタープライズ向けのユーザー プロビジョニングの構成](/admin/authentication/configuring-user-provisioning-for-your-enterprise)」を参照してください。

{% endif %}

{% ifversion ghae %}

## SAML SSO を無効化する

{% warning %}

**警告**: {% data variables.location.product_location %} の SAML SSO を無効にすると、既存の SAML SSO セッションがないユーザーは {% data variables.location.product_location %} にサインインできなくなります。 {% data variables.location.product_location %} での SAML SSO セッションは、24 時間後に終了します。

{% endwarning %}

{% note %}

**注**: {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. [SAML シングル サインオン] の **[SAML 認証を有効にする]** を選択解除します。
  ![[SAML 認証を有効にする] のチェックボックス](/assets/images/help/saml/ae-saml-disabled.png)
1. SAML SSO を無効にし、初期化中に作成した組み込みユーザアカウントでサインインする必要がある場合は、 **[保存]** をクリックします。
    ![SAML SSO 設定の [保存] ボタン](/assets/images/help/saml/ae-saml-disabled-save.png)

{% endif %}

{% endif %}

{% ifversion ghec or ghes %}

## 参考資料

{%- ifversion ghec %}
- 「[Organization で SAML シングルサインオンを管理する](/organizations/managing-saml-single-sign-on-for-your-organization)」 {%- endif %} {%- ifversion ghes %}
- 「[サイト管理者の昇格あるいは降格](/admin/user-management/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator)」 {%- endif %}

{% endif %}
