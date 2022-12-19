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
shortTitle: Enable & test SAML SSO
ms.openlocfilehash: cbdf8c92ca61f9836876c34ae9dd3b9be0cd7ee4
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/28/2022
ms.locfileid: '148184086'
---
## SAMLシングルサインオンについて

すべてのメンバーに使用するように強制する必要なく、Organization 内で SAML SSO を有効化できます。 SAML SSO を Organization 内で強制せずに有効化することで、Organization での SAML SSO の導入がスムーズになります。 Organization 内の大半のメンバーが SAML SSO を使用するようになったら、Organization 内で強制化できます。

{% data reusables.saml.ghec-only %}

SAML SSO を有効化しても強制はしない場合、SAML SSO を使用しないメンバーは、引き続き Organization のメンバーであり続けます。 SAML SSO の適用の詳細については、「[Organization に SAML シングルサインオンを適用する](/articles/enforcing-saml-single-sign-on-for-your-organization)」を参照してください。

{% data reusables.saml.outside-collaborators-exemption %}

{% data reusables.saml.saml-disabled-linked-identities-removed %}

{% data reusables.apps.reauthorize-apps-saml %}

## Organization 向けの SAML シングルサインオンを有効化してテストする

OrganizationでSAML SSOを施行する前に、Organizationの準備ができていることを確認してください。 詳細については、「[Organization での SAML シングル サインオンの強制を準備する](/articles/preparing-to-enforce-saml-single-sign-on-in-your-organization)」を参照してください。

{% data variables.product.company_short %} が SAML SSO をサポートする ID プロバイダー (IdP) の詳細については、「[ID プロバイダーを Organization に接続する](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization)」を参照してください。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
5. [SAML シングル サインオン] の、 **[SAML 認証を有効にする]** を選択します。
![SAML SSO を有効化するためのチェックボックス](/assets/images/help/saml/saml_enable.png)

  {% note %}

  **注:** SAML SSO を有効にした後、シングル サインオンのリカバリ コードをダウンロードして、IdP が使用できない場合でも Organization にアクセスできるようにすることができます。 詳細については、「[Organization の SAML シングルサインオンのリカバリコードをダウンロードする](/articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes)」を参照してください。

  {% endnote %}

6. [Sign on URL] フィールドにシングルサインオンのリクエスト用の IdP の HTTPS エンドポイントを入力します。 この値は Idp の設定で使用できます。
![メンバーがサインインする際にリダイレクトされる URL のフィールド](/assets/images/help/saml/saml_sign_on_url.png)
7. または、[Issuer] フィールドに SAML 発行者の名前を入力します。 これにより、送信メッセージの信ぴょう性が検証されます。
![SAML 発行者の名前のフィールド](/assets/images/help/saml/saml_issuer.png)
8. [Public Certificate] の下で証明書を貼り付けて SAML の応答を検証します。
![ID プロバイダーからの公開証明書のフィールド](/assets/images/help/saml/saml_public_certificate.png)
9. {% octicon "pencil" aria-label="The edit icon" %} をクリックして、[署名方法とダイジェスト方法] ドロップダウンで、SAML 発行者がリクエストの整合性を検証するために使用するハッシュ アルゴリズムを選択します。
![SAML 発行者が使用する署名方法とダイジェスト方法のハッシュ アルゴリズム用のドロップダウン](/assets/images/help/saml/saml_hashing_method.png)
10. Organization で SAML SSO を有効化する前に、 **[SAML 構成のテスト]** をクリックして、入力した情報が正しいことを確認します。 ![適用する前に SAML 構成をテストするボタン](/assets/images/help/saml/saml_test.png)

  {% tip %}

  **ヒント:** {% data reusables.saml.testing-saml-sso %}

  {% endtip %}
11. SAML SSO を強制して、IdP により認証をされていないすべての Organization メンバーを削除するには、 **[ _<Organization 名>_ のすべてのメンバーに対して SAML SSO 認証を要求する]** を選択します。 SAML SSO の適用の詳細については、「[Organization に SAML シングルサインオンを適用する](/articles/enforcing-saml-single-sign-on-for-your-organization)」を参照してください。
![Organization に SAML SSO を強制するチェックボックス](/assets/images/help/saml/saml_require_saml_sso.png)
12. **[保存]** をクリックします。
![SAML SSO 設定を保存するためのボタン](/assets/images/help/saml/saml_save.png)

## 参考資料

- 「[SAML シングル サインオンを使用した ID およびアクセス管理について](/articles/about-identity-and-access-management-with-saml-single-sign-on)」
- 「[SAML 構成リファレンス](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)」
