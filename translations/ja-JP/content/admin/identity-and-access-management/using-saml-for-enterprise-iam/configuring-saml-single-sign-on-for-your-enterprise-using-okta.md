---
title: Okta を使用して Enterprise 向けの SAML シングル サインオンを設定する
intro: 'Okta を使う Security Assertion Markup Language (SAML) シングルサインオン (SSO) を使用すると、{% data variables.product.product_name %} で Enterprise アカウントへのアクセスを自動的に管理することができます。'
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
ms.openlocfilehash: e9cbf6e70fb5e07f9cd2c5e27d9b952921e18fdc
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109667'
---
{% data reusables.enterprise-accounts.emu-saml-note %}

## Okta を使う SAML について

Enterprise アカウントが ID プロバイダー (IdP) である Okta を使う SAML SSO を使用するように設定すれば、{% data variables.product.product_name %} の Enterprise アカウントや他の Web アプリケーションへのアクセスを 1 つの中央インターフェイスから制御することができます。

SAML SSO は、リポジトリや Issue、プルリクエストといった Enterprise アカウントのリソースに対するアクセスを制御し、保護します。 詳細については、「[エンタープライズ向けの SAML シングル サインオンの構成](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)」を参照してください。

{% data reusables.saml.switching-from-org-to-enterprise %} 詳細については、「[組織からエンタープライズ アカウントへの SAML 構成の切り替え](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)」を参照してください。

または、{% data variables.product.prodname_ghe_cloud %} を使用する Organization に対して、Okta を使用う SAML SSO を設定することもできます。 詳細については、「[Okta を使う SAML シングルサインオンおよび SCIM を設定する](/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta)」を参照してください。

## Okta で {% data variables.product.prodname_ghe_cloud %} アプリケーションを追加する

{% data reusables.saml.okta-sign-into-your-account %}
1. Okta Integration Network で [{% data variables.product.prodname_ghe_cloud %} - Enterprise アカウント](https://www.okta.com/integrations/github-enterprise-cloud-enterprise-accounts) アプリケーションに移動し、 **[統合の追加]** をクリックします。
{% data reusables.saml.okta-dashboard-click-applications %}
1. オプションで、[Application label] の右にアプリケーションのわかりやすい名前を入力します。
1. [{% data variables.product.prodname_dotcom %} Enterprises] の右に、Enterprise アカウントの名前を入力します。 たとえば、Enterprise アカウントの URL が `https://github.com/enterprises/octo-corp` の場合、「`octo-corp`」と入力します。
1. **[Done]** をクリックします。

## SAML SSO の有効化とテスト

{% data reusables.saml.okta-sign-into-your-account %} {% data reusables.saml.okta-dashboard-click-applications %} {% data reusables.saml.click-enterprise-account-application %} {% data reusables.saml.assign-yourself-to-okta %} {% data reusables.saml.okta-sign-on-tab %}
1. 設定の右側にある **[編集]** をクリックします。
1. [構成済みの SAML 属性] の [グループ] の右側にあるドロップダウン メニューを使用して、 **[正規表現に一致する]** を選択します。
1. ドロップダウン メニューの右側に「`.*.*`」と入力します。
1. **[保存]** をクリックします。
{% data reusables.saml.okta-view-setup-instructions %}
1. 設定手順の情報を使用して、Enterprise アカウントの SAML を有効にします。 詳細については、「[エンタープライズ向けの SAML シングル サインオンの構成](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)」を参照してください。
