---
title: Okta を使う SAML シングルサインオンおよび SCIM を設定する
intro: 'Okta を使う Security Assertion Markup Language (SAML) シングル サインオン (SSO) およびクロスドメイン ID 管理システム (SCIM) を使用すると、{% data variables.product.product_location %} で Organization へのアクセスを自動的に管理することができます。'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/configuring-saml-single-sign-on-and-scim-using-okta
permissions: Organization owners can configure SAML SSO and SCIM using Okta for an organization.
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Configure SAML & SCIM with Okta
ms.openlocfilehash: 3b1083e0ec9d792de9e9c1e83cd5b000e8261905
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145068290'
---
## Okta での SAML と SCIM について

{% data variables.product.product_location %}上のOrganizationやその他のWebアプリケーションへのアクセスは、SAML SSO及びSCIMをアイデンティティプロバイダ（IdP）であるOktaとともに使うようOrganizationを設定することで、1つの集中インターフェースから制御できます。

{% data reusables.saml.ghec-only %}

SAML SSO は、リポジトリや Issue、Pull Requestといった Organization のリソースに対するアクセスを制御し、保護します。 SCIMは、Oktaで変更があった場合に{% data variables.product.product_location %}上のOrganizationへのメンバーアクセスを自動的に追加、管理、削除します。 詳しくは、「[SAML シングル サインオンを使うアイデンティティおよびアクセス管理について](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)」と「[Organization の SCIM について](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)」をご覧ください。

SCIM を有効にすると、Okta で {% data variables.product.prodname_ghe_cloud %} アプリケーションを割り当てる任意のユーザが次のプロビジョニング機能を使えるようになります。

| 機能 | 説明 |
| --- | --- |
| 新しいユーザのプッシュ | Oktaで新しいユーザを作成すると、そのユーザは{% data variables.product.product_location %}上のOrganizationに参加するためのメールを受け取ります。 |
| ユーザ無効化のプッシュ | ユーザをOktaで無効化すると、Oktaはそのユーザを{% data variables.product.product_location %}のOrganizationから削除します。 |
| プロフィール更新のプッシュ | Oktaでユーザのプロフィールを更新すると、Oktaは{% data variables.product.product_location %}のOrganizationのそのデータのメンバーシップメタデータを更新します。 |
| ユーザの再アクティブ化 | Oktaでユーザを再有効化すると、Oktaは{% data variables.product.product_location %}のOrganizationに再参加するための招待メールを送信します。 |

あるいは、EnterpriseでOktaを使うSAML SSOを設定することもできます。 Enterpriseアカウント用のSCIMは、Enterprise管理のユーザでのみ利用できます。 詳細については、「[Okta を使用した企業の SAML シングル サインオンの構成](/admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)」および「[Okta でのエンタープライズ マネージド ユーザーの SCIM プロビジョニングの構成](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta)」を参照してください。

## Okta で {% data variables.product.prodname_ghe_cloud %} アプリケーションを追加する

{% data reusables.saml.okta-sign-on-tab %} {% data reusables.saml.okta-view-setup-instructions %}
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
