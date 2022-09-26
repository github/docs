---
title: エンタープライズ マネージド ユーザーの OIDC の構成
shortTitle: OIDC for managed users
intro: 'OpenID Connect (OIDC) シングル サインオン (SSO) を構成し、IdP の条件付きアクセス ポリシー (CAP) のサポートを有効にすることで、{% data variables.product.prodname_dotcom %} 上のエンタープライズ アカウントへのアクセスを自動的に管理することができます。'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: d52626ad035d957a7908e07e81d12824b9601ee5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061779'
---
{% data reusables.enterprise-accounts.oidc-beta-notice %}

## エンタープライズ マネージド ユーザーの OIDC について

{% data variables.product.prodname_emus %} を使用すると、エンタープライズは ID プロバイダー (IdP) を使用してすべてのメンバーを認証します。 OpenID Connect (OIDC) を使うと、{% data variables.product.prodname_emu_enterprise %} の認証を管理することができます。 OIDC SSO の有効化は、{% data variables.product.prodname_dotcom %} と IdP によって管理される証明書を使ったワンクリックの設定プロセスです。

{% data reusables.enterprise-accounts.emu-cap-validates %}詳細については、「[IdP の条件付きアクセス ポリシー](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy)」を参照してください。

セッションの有効期間と、{% data variables.product.prodname_managed_user %} で IdP を再認証する必要がある頻度を調整するには、IdP から {% data variables.product.prodname_dotcom %} に対して発行される ID トークンの有効期間ポリシー プロパティを変更します。 既定の有効期間は 1 時間です。 詳細については、Azure AD ドキュメントの「[Microsoft ID プラットフォームでの構成可能なトークンの有効期間](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-configurable-token-lifetimes)」を参照してください。

現在、認証に SAML SSO を使っており、OIDC を使って CAP サポートの恩恵を受けたい場合は、移行パスをたどることができます。 詳細については、「[SAML から OIDC への移行](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)」を参照してください。 

{% data reusables.enterprise-accounts.oidc-gei-warning %}

## ID プロバイダーのサポート

OIDC のサポートはパブリック ベータ段階であり、Azure Active Directory (Azure AD) を使っているお客様が使用できます。 

各 Azure AD テナントは、{% data variables.product.prodname_emus %} との 1 つの OIDC 統合のみをサポートできます。 Azure AD を {% data variables.product.prodname_dotcom %} 上の複数のエンタープライズに接続する場合は、代わりに SAML を使います。 詳細については、「[{% data variables.product.prodname_emus %} の SAML シングル サインオンの構成](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-saml-single-sign-on-for-enterprise-managed-users)」を参照してください。

## エンタープライズ マネージド ユーザーの OIDC の構成

1. ユーザー名 **@<em>SHORT-CODE</em>_admin** を使用して、新しいエンタープライズのセットアップ ユーザーとして {% data variables.product.prodname_dotcom_the_website %} にサインインします。
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. **[Require OIDC single sign-on]\(OIDC シングル サインオンを必須にする\)** を選びます。  
   ![[Require OIDC single sign-on]\(OIDC シングル サインオンを必須にする\) チェックボックスを示すスクリーンショット](/assets/images/help/enterprises/require-oidc.png)
1. 設定を続行し、Azure AD にリダイレクトするには、 **[Save]\(保存\)** をクリックします。
{% data reusables.enterprise-accounts.emu-azure-admin-consent %} {% data reusables.enterprise-accounts.download-recovery-codes %}

## プロビジョニングの有効化

OIDC SSO を有効にした後、プロビジョニングを有効にします。 詳細については、「[エンタープライズ マネージド ユーザーの SCIM プロビジョニングの構成](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)」を参照してください。
