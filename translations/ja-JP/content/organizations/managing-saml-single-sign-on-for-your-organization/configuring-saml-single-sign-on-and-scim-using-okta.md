---
title: Okta を使う SAML シングルサインオンおよび SCIM を設定する
intro: 'Okta を使う Security Assertion Markup Language (SAML) シングル サインオン (SSO) およびクロスドメイン ID 管理システム (SCIM) を使用すると、{% data variables.location.product_location %} で Organization へのアクセスを自動的に管理することができます。'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/configuring-saml-single-sign-on-and-scim-using-okta
permissions: Organization owners can configure SAML SSO and SCIM using Okta for an organization.
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Configure SAML & SCIM with Okta
ms.openlocfilehash: c1b6ab48122c97cb1f805399430cc181ed3f30d1
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192738'
---
## Okta での SAML と SCIM について

{% data variables.location.product_location %} 上の Organization やその他の Web アプリケーションへのアクセスは、SAML SSO および SCIM をアイデンティティプロバイダ (IdP) である Okta とともに使用するよう Organization を設定することで、1 つの集中インターフェイスから制御できます。

{% data reusables.saml.ghec-only %}

SAML SSO は、リポジトリや Issue、Pull Requestといった Organization のリソースに対するアクセスを制御し、保護します。 SCIM は、Okta で変更があった場合に {% data variables.location.product_location %} 上の Organization へのメンバーアクセスを自動的に追加、管理、削除します。 詳しくは、「[SAML シングル サインオンを使うアイデンティティおよびアクセス管理について](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)」と「[Organization の SCIM について](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)」をご覧ください。

SCIM を有効にすると、Okta で {% data variables.product.prodname_ghe_cloud %} アプリケーションを割り当てる任意のユーザが次のプロビジョニング機能を使えるようになります。

| 機能 | 説明 |
| --- | --- |
| 新しいユーザのプッシュ | Okta で新しいユーザーを作成すると、そのユーザーは {% data variables.location.product_location %} 上の Organization に参加するためのメールを受け取ります。 |
| ユーザ無効化のプッシュ | ユーザーを Okta で無効化すると、Okta はそのユーザーを {% data variables.location.product_location %} の Organization から削除します。 |
| プロフィール更新のプッシュ | Okta でユーザーのプロフィールを更新すると、Okta は {% data variables.location.product_location %} の Organization のそのデータのメンバーシップ メタデータを更新します。 |
| ユーザの再アクティブ化 | Okta でユーザーを再有効化すると、Okta は {% data variables.location.product_location %} の Organization に再参加するための招待メールを送信します。 |

あるいは、EnterpriseでOktaを使うSAML SSOを設定することもできます。 Enterpriseアカウント用のSCIMは、Enterprise管理のユーザでのみ利用できます。 詳細については、「[Okta を使用した企業の SAML シングル サインオンの構成](/admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)」および「[Okta でのエンタープライズ マネージド ユーザーの SCIM プロビジョニングの構成](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta)」を参照してください。

## Okta で SAML を構成する

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-browse-app-catalog %} {% data reusables.saml.okta-add-ghec-org-integration %}
1. フォームに入力します。{% data variables.product.prodname_dotcom %} の組織の名前と OAuth アプリ統合アプリケーションの一意の名前を入力してください。
{% data reusables.saml.assign-yourself-to-okta %} {% data reusables.saml.okta-sign-on-tab %} {% data reusables.saml.okta-view-setup-instructions %}
1. SAML 2.0 の設定方法に関するガイドから、サインオン URL、発行者 URL、公開の証明書を使用して、{% data variables.product.prodname_dotcom %} での SAML SSO を有効化してテストします。 詳細については、「[Organization 向けの SAML シングル サインオンを有効化してテストする](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization#enabling-and-testing-saml-single-sign-on-for-your-organization)」を参照してください。

## Okta で SCIM を使ってアクセスのプロビジョニングを設定する

{% data reusables.scim.dedicated-configuration-account %}

1. Organization のオーナーであり、SCIM 構成にのみ理想的に使用されるアカウントを使って、{% data variables.product.prodname_dotcom_the_website %} にサインインします。
1. Organization のアクティブな SAML セッションを作成するには、`https://github.com/orgs/ORGANIZATION-NAME/sso` に移動します。 詳細については、「[SAML のシングル サインオンでの認証について](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso)」を参照してください。
1. Okta に移動します。
{% data reusables.saml.okta-dashboard-click-applications %} {% data reusables.saml.okta-applications-click-ghec-application-label %} {% data reusables.saml.okta-provisioning-tab %} {% data reusables.saml.okta-configure-api-integration %} {% data reusables.saml.okta-enable-api-integration %}
1. **[{% data variables.product.prodname_ghe_cloud %} - Organization での認証]** をクリックします。
1. Organization 名の右側にある **[許可]** をクリックします。

  ![Organization にアクセスするために Okta SCIM 統合を認証する [許可] ボタン](/assets/images/help/saml/okta-scim-integration-grant-organization-access.png)
1. **[OktaOAN の承認]** をクリックします。
{% data reusables.saml.okta-save-provisioning %} {% data reusables.saml.okta-edit-provisioning %}

## 参考資料

- 「[Okta を使用して Enterprise アカウントの SAML シングル サインオンを設定する](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)」
- Okta ドキュメントの「[Understanding SAML](https://developer.okta.com/docs/concepts/saml/)」 (SAML について)。
- Okta ドキュメントの「[Understanding SCIM](https://developer.okta.com/docs/concepts/scim/)」 (SCIM について)。
