---
title: Configuring SAML single sign-on for your enterprise account using Okta
intro: 'You can use Security Assertion Markup Language (SAML) single sign-on (SSO) with Okta to automatically manage access to your enterprise account on {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
versions:
  fpt: '*'
topics:
  - Enterprise
shortTitle: Configure SAML with Okta
---

{% data reusables.enterprise-accounts.user-provisioning-release-stage %}

## About SAML with Okta

You can control access to your enterprise account in {% data variables.product.product_name %} and other web applications from one central interface by configuring the enterprise account to use SAML SSO with Okta, an Identity Provider (IdP).

SAML SSO は、リポジトリや Issue、プルリクエストといった Enterprise アカウントのリソースに対するアクセスを制御し、保護します。 For more information, see "[Enforcing SAML single sign-on for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enforcing-saml-single-sign-on-for-organizations-in-your-enterprise-account)."

{% data reusables.saml.switching-from-org-to-enterprise %} For more information, see "[Switching your SAML configuration from an organization to an enterprise account](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)."

## 必要な環境

{% data reusables.saml.use-classic-ui %}

## Okta で {% data variables.product.prodname_ghe_cloud %} アプリケーションを追加する

{% data reusables.saml.okta-admin-button %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.add-okta-application %}
{% data reusables.saml.search-ghec-okta %}
1. [{% data variables.product.prodname_ghe_cloud %} - Enterprise Accounts] をクリックします。
1. [**Add**] をクリックします。
1. オプションで、[Application label] の右にアプリケーションのわかりやすい名前を入力します。 ![[Application label] フィールド](/assets/images/help/saml/okta-application-label.png)
1. [{% data variables.product.prodname_dotcom %} Enterprises] の右に、Enterprise アカウントの名前を入力します。 たとえば、Enterprise アカウントの URL が `https://github.com/enterprises/octo-corp` の場合は、`octo-corp` と入力します。 ![[GitHub Enterprises] フィールド](/assets/images/help/saml/okta-github-enterprises.png)
1. [**Done**] をクリックします。

## SAML SSO の有効化とテスト

{% data reusables.saml.okta-admin-button %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.click-enterprise-account-application %}
{% data reusables.saml.assign-yourself-to-okta %}
{% data reusables.saml.okta-sign-on-tab %}
1. [Settings] の右にある [**Edit**] をクリックします。
1. [Configured SAML Attributes] で、[groups] の右にあるドロップダウンメニューを使用して [**Matches regex**] を選択します。
1. ドロップダウンメニューの右に `.*.*` と入力します。
1. [**Save**] をクリックします。
{% data reusables.saml.okta-view-setup-instructions %}
1. 設定手順の情報を使用して、Enterprise アカウントの SAML を有効にします。 For more information, see "[Enforcing SAML single sign-on for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enforcing-saml-single-sign-on-for-organizations-in-your-enterprise-account)."

## Okta でグループを作成する

1. Okta で、Enterprise アカウントが所有する各 Organization に合わせてグループを作成します。 各グループの名前は、Organization のアカウント名 (Organization の表示名ではく) に一致する必要があります。 たとえば、Organization の URL が `https://github.com/octo-org` の場合は、グループに `octo-org` という名前をつけます。
1. Enterprise アカウントに作成したアプリケーションを各グループに割り当てます。 {% data variables.product.prodname_dotcom %} が、ユーザごとに `groups` データをすべて受け取ります。
1. ユーザを所属させたい Organization に基づいて、ユーザをグループに追加します。

## SAML ユーザプロビジョニングを有効にする

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. [SAML User Provisioning] で、[**Enable SAML user provisioning**] を選択します。 ![SAML によるユーザプロビジョニングを有効にするチェックボックス](/assets/images/help/business-accounts/user-provisioning.png)
1. [**Save**] をクリックします。
1. オプションで、SAML ユーザプロビジョニングを有効にします。
   - [**Enable SAML user deprovisioning**] を選択して [**Save**] をクリックします。 ![SAML によるユーザプロビジョニング解除を有効にするチェックボックス](/assets/images/help/business-accounts/saml-deprovisioning.png)
   - 警告を読んでから、[**Enable SAML deprovisioning**] をクリックします。 ![[Enable SAML deprovisioning] ボタン](/assets/images/help/business-accounts/saml-deprovisioning-confirm.png)
