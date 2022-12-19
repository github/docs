---
title: SAML から OIDC への移行
shortTitle: Migrating from SAML to OIDC
intro: 'SAML を使用して {% data variables.enterprise.prodname_emu_enterprise %} のメンバーを認証している場合は、OpenID Connect (OIDC) に移行すると、IdP の条件付きアクセス ポリシーのサポートからメリットを得ることができます。'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: 36c93c94bfda1d0ebc951b0a8325691afa0199bb
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180046'
---
{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## {% data variables.enterprise.prodname_emu_enterprise %} の SAML から OIDC への移行について

{% data variables.enterprise.prodname_emu_enterprise %} が SAML SSO を使用して Azure Active Directory (Azure AD) で認証を行う場合は、OIDC に移行できます。 {% data reusables.enterprise-accounts.emu-cap-validates %}

SAML から OIDC に移行する場合、以前に SAML 用にプロビジョニングされたが、{% data variables.product.prodname_emu_idp_oidc_application %} アプリケーションによってプロビジョニングされていない{% data variables.enterprise.prodname_managed_users %}とグループには、表示名に "(SAML)" が付加されます。

{% data variables.product.prodname_emus %} を使用するのが初めてで、Enterprise の認証をまだ構成していない場合は、移行する必要はなく、OIDC シングル サインオンをすぐに設定できます。 詳細については、「[Enterprise マネージド ユーザー用の OIDC の構成](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)」を参照してください。

## Enterprise を移行する

{% note %}

**注:** セットアップ ユーザーとしてサインインするには、回復用コードが必要です。 回復用コードがまだない場合、Enterprise 所有者としてサインインしている間はコードにアクセスできます。 詳細については、「[Enterprise アカウントのシングル サインオン回復用コードをダウンロードする](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes)」を参照してください。

{% endnote %}

1. 移行を開始する前に、Azure にサインインし、既存の {% data variables.product.prodname_emu_idp_application %} アプリケーションでのプロビジョニングを無効にします。
1. Azure AD で[条件付きアクセス (CA) ネットワークの場所ポリシー](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition)を使っており、現時点、{% data variables.product.prodname_dotcom_the_website %} 上で、Enterprise アカウントまたは Enterprise アカウントで所有しているいずれかの Organization で IP 許可リストを使っている場合、その IP 許可リストを無効にしてください。 詳しくは、「[Enterprise でセキュリティ設定を適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)」と「[Organization に許可された IP アドレスを管理する](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)」を参照してください。
1.  ユーザー名 **@<em>SHORT-CODE</em>_admin** を使用して、Enterprise のセットアップ ユーザーとして {% data variables.product.prodname_dotcom_the_website %} にサインインします。 
1. ID プロバイダーに進むように続行を求められたら、 **[回復用コードを使用する]** をクリックし、Enterprise のいずれかの回復用コードを使用してサインインします。
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. ページ下部にある [OpenID Connect シングル サインオンへの移行] の横の **[Azure で構成]** をクリックします。  
   {% warning %} 

   **警告:** 移行には 1 時間ほどかかる場合があるため、移行中にユーザーがプロビジョニングされないようにすることが重要です。 Enterprise のセキュリティ設定ページに戻ると、移行がまだ進行中かどうかを確認できます。[SAML 認証を要求する] がまだオンになっている場合は、移行がまだ進行中です。

   {% endwarning %}

   ![[Azure で構成] ボタンを示すスクリーンショット](/assets/images/help/enterprises/saml-to-oidc-button.png)
1. 両方の警告を読み、クリックして続行します。
{% data reusables.enterprise-accounts.emu-azure-admin-consent %}
1. 新しいタブまたはウィンドウで、{% data variables.product.prodname_dotcom_the_website %} のセットアップ ユーザーとしてサインインしたまま、**admin:enterprise** スコープを持つ **有効期限のない**{% data variables.product.pat_v1 %}を作成し、クリップボードにコピーします。 新しいトークンの作成について詳しくは、「[{% data variables.product.pat_generic %}の作成](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token)」をご覧ください。
1. Azure Portal の {% data variables.product.prodname_emu_idp_oidc_application %} アプリケーションの設定で、[テナント URL] に「`https://api.github.com/scim/v2/enterprises/YOUR_ENTERPRISE`」と入力します。YOUR_ENTERPRISE は、お使いの Enterprise アカウントの名前に置き換えてください。  
   
   たとえば、Enterprise アカウントの URL が `https://github.com/enterprises/octo-corp` の場合、Enterprise アカウントの名前は `octo-corp` です。
1. [シークレット トークン] に、先ほど作成した **admin:enterprise** スコープの{% data variables.product.pat_v1 %}を貼り付けます。
1. 構成をテストするには、 **[接続のテスト]** をクリックします。
1. 変更を保存するには、フォームの上部にある **[保存]** をクリックします。
1. Azure Portal で、旧 {% data variables.product.prodname_emu_idp_application %} アプリケーションから新しい {% data variables.product.prodname_emu_idp_oidc_application %} アプリケーションにユーザーとグループをコピーします。
1. 1 人の新しいユーザーをプロビジョニングして、構成をテストします。
1. テストが成功した場合は、 **[プロビジョニングの開始]** をクリックして、すべてのユーザーのプロビジョニングを開始します。
