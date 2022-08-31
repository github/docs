---
title: Configuring SAML single sign-on for your enterprise using Okta
intro: 'You can use Security Assertion Markup Language (SAML) single sign-on (SSO) with Okta to automatically manage access to your enterprise account on {% data variables.product.product_name %}.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta
versions:
  ghec: '*'
topics:
  - Authentication
  - Enterprise
type: how_to
shortTitle: Configure SAML SSO with Okta
---

{% data reusables.enterprise-accounts.emu-saml-note %}

## About SAML with Okta

You can control access to your enterprise account in {% data variables.product.product_name %} and other web applications from one central interface by configuring the enterprise account to use SAML SSO with Okta, an Identity Provider (IdP).

SAML SSO は、リポジトリや Issue、プルリクエストといった Enterprise アカウントのリソースに対するアクセスを制御し、保護します。 詳しい情報については、「[Enterprise 向けのSAML シングルサインオンを設定する](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)」を参照してください。

{% data reusables.saml.switching-from-org-to-enterprise %} For more information, see "[Switching your SAML configuration from an organization to an enterprise account](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)."

Alternatively, you can also configure SAML SSO using Okta for an organization that uses {% data variables.product.prodname_ghe_cloud %}. 詳しい情報については「[Oktaを使用したSAMLシングルサインオンとSCIMの設定](/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta)」を参照してください。

## Okta で {% data variables.product.prodname_ghe_cloud %} アプリケーションを追加する

{% data reusables.saml.okta-sign-into-your-account %}
1. Navigate to the [{% data variables.product.prodname_ghe_cloud %} - Enterprise Accounts](https://www.okta.com/integrations/github-enterprise-cloud-enterprise-accounts) application in the Okta Integration Network and click **Add Integration**.
{% data reusables.saml.okta-dashboard-click-applications %}
1. オプションで、[Application label] の右にアプリケーションのわかりやすい名前を入力します。
1. [{% data variables.product.prodname_dotcom %} Enterprises] の右に、Enterprise アカウントの名前を入力します。 たとえば、Enterprise アカウントの URL が `https://github.com/enterprises/octo-corp` の場合は、`octo-corp` と入力します。
1. [**Done**] をクリックします。

## SAML SSO の有効化とテスト

{% data reusables.saml.okta-sign-into-your-account %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.click-enterprise-account-application %}
{% data reusables.saml.assign-yourself-to-okta %}
{% data reusables.saml.okta-sign-on-tab %}
1. [Settings] の右にある [**Edit**] をクリックします。
1. [Configured SAML Attributes] で、[groups] の右にあるドロップダウンメニューを使用して [**Matches regex**] を選択します。
1. ドロップダウンメニューの右に `.*.*` と入力します。
1. [**Save**] をクリックします。
{% data reusables.saml.okta-view-setup-instructions %}
1. 設定手順の情報を使用して、Enterprise アカウントの SAML を有効にします。 詳しい情報については、「[Enterprise 向けのSAML シングルサインオンを設定する](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)」を参照してください。
