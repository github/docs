---
title: Okta を使う SAML シングルサインオンおよび SCIM を設定する
intro: 'Okta を使う Security Assertion Markup Language (SAML) シングルサインオン (SSO) および System for Cross-domain Identity Management (SCIM) を使用すると、 {% data variables.product.product_location %} で Organization へのアクセスを自動的に管理することができます。'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/configuring-saml-single-sign-on-and-scim-using-okta
permissions: Organization owners can configure SAML SSO and SCIM using Okta for an organization.
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: OktaでSAMLとSCIMを設定する
---

## Okta での SAML と SCIM について

{% data variables.product.product_location %}上のOrganizationやその他のWebアプリケーションへのアクセスは、SAML SSO及びSCIMをアイデンティティプロバイダ（IdP）であるOktaとともに使うようOrganizationを設定することで、1つの集中インターフェースから制御できます。

{% data reusables.saml.ghec-only %}

SAML SSO は、リポジトリや Issue、Pull Requestといった Organization のリソースに対するアクセスを制御し、保護します。 SCIMは、Oktaで変更があった場合に{% data variables.product.product_location %}上のOrganizationへのメンバーアクセスを自動的に追加、管理、削除します。 詳しい情報については、「[SAML シングルサインオンを使うアイデンティティおよびアクセス管理について](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)」と「[OrganizationのSCIM について](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)」を参照してください。

SCIM を有効にすると、Okta で {% data variables.product.prodname_ghe_cloud %} アプリケーションを割り当てる任意のユーザが次のプロビジョニング機能を使えるようになります。

| 機能            | 説明                                                                                                              |
| ------------- | --------------------------------------------------------------------------------------------------------------- |
| 新しいユーザのプッシュ   | Oktaで新しいユーザを作成すると、そのユーザは{% data variables.product.product_location %}上のOrganizationに参加するためのメールを受け取ります。          |
| ユーザ無効化のプッシュ   | ユーザをOktaで無効化すると、Oktaはそのユーザを{% data variables.product.product_location %}のOrganizationから削除します。                   |
| プロフィール更新のプッシュ | Oktaでユーザのプロフィールを更新すると、Oktaは{% data variables.product.product_location %}のOrganizationのそのデータのメンバーシップメタデータを更新します。 |
| ユーザの再アクティブ化   | Oktaでユーザを再有効化すると、Oktaは{% data variables.product.product_location %}のOrganizationに再参加するための招待メールを送信します。           |

あるいは、EnterpriseでOktaを使うSAML SSOを設定することもできます。 Enterpriseアカウント用のSCIMは、Enterprise管理のユーザでのみ利用できます。 詳しい情報については「[EnterpriseでのOktaを使うSAMLシングルサインオンの設定](/admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)」及び「[Enterprise管理ユーザのためのOktaを使うSCIMプロビジョニングの設定](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta)」を参照してください。

## Okta で {% data variables.product.prodname_ghe_cloud %} アプリケーションを追加する

{% data reusables.saml.okta-sign-on-tab %}
{% data reusables.saml.okta-view-setup-instructions %}
1. SAML 2.0 の設定方法に関するガイドから、サインオン URL、発行者 URL、公開の証明書を使用して、{% data variables.product.prodname_dotcom %} での SAML SSO を有効化してテストします。 詳細は「[Organization での SAML シングルサインオンの有効化とテスト](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization#enabling-and-testing-saml-single-sign-on-for-your-organization)」を参照してください。

## Okta で SCIM を使ってアクセスのプロビジョニングを設定する

{% data reusables.scim.dedicated-configuration-account %}

1. Organizationのオーナーであり、理想的にはSCIMの設定だけに使われるアカウントを使って{% data variables.product.prodname_dotcom_the_website %}にサインインしてください。
1. OrganizationでアクティブなSAMLセッションを作成するには、`https://github.com/orgs/ORGANIZATION-NAME/sso`にアクセスしてください。 詳しい情報については「[SAML シングルサインオンでの認証について](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso)」を参照してください。
1. Oktaにアクセスしてください。
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.okta-applications-click-ghec-application-label %}
{% data reusables.saml.okta-provisioning-tab %}
{% data reusables.saml.okta-configure-api-integration %}
{% data reusables.saml.okta-enable-api-integration %}
1. **Authenticate with {% data variables.product.prodname_ghe_cloud %} - Organization**をクリックしてください。
1. Organization 名の右にある [**Grant**] をクリックします。

  ![Organization にアクセスできるよう Okta SCIM インテグレーションを認証する [Grant] ボタン](/assets/images/help/saml/okta-scim-integration-grant-organization-access.png)
1. [**Authorize OktaOAN**] をクリックします。
{% data reusables.saml.okta-save-provisioning %}
{% data reusables.saml.okta-edit-provisioning %}

## 参考リンク

- 「[Okta を使用して Enterprise アカウントの SAML シングルサインオンを設定する](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)」
- Okta ドキュメントの「[Understanding SAML](https://developer.okta.com/docs/concepts/saml/)」
- Okta ドキュメントの「[Understanding SCIM](https://developer.okta.com/docs/concepts/scim/)」
