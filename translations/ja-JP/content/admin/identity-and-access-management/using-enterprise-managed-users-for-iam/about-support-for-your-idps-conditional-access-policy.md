---
title: IdP の条件付きアクセス ポリシーのサポートについて
shortTitle: Conditional access policy
intro: 'エンタープライズが OIDC SSO を使っている場合、{% data variables.product.prodname_dotcom %} は、お客様の IdP の条件付きアクセス ポリシー (CAP) を使って、エンタープライズとそのリソースへのアクセスを検証します。'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: 5cdbf686ec72a8d26ade861d59f6208d9f5901e2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147684465'
---
{% data reusables.enterprise-accounts.oidc-beta-notice %}

## 条件付きアクセス ポリシーのサポートについて

{% data reusables.enterprise-accounts.emu-cap-validates %}

CAP のサポートは、OIDC SSO を有効にするすべての {% data variables.product.prodname_emu_enterprise %} に対して自動的に有効になり、無効にすることはできません。 {% data variables.product.prodname_dotcom %} によって IdP の IP 条件が適用されますが、デバイスのコンプライアンス条件は適用されません。

OIDC と {% data variables.product.prodname_emus %} の使用の詳細については、「[エンタープライズ マネージド ユーザー向けの OIDC の構成](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)」と「[SAML から OIDC への移行](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)」を参照してください。

{% note %}

**注:** Azure AD テナントで条件付きアクセス (CA) ネットワークの場所ポリシーを使用する場合、{% data variables.product.prodname_dotcom_the_website %} の IP 許可リスト機能は、Enterprise アカウントまたはエンタープライズによって所有される組織では使用しないでください。 両方の使用はサポートされておらず、間違ったポリシーが適用される可能性があります。 IP 許可リストについて詳しくは、「[Enterprise でセキュリティ設定を適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)」と「[Organization に許可された IP アドレスを管理する](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)」をご覧ください。

{% endnote %}

## 統合と自動化に関する考慮事項

CAP に対する検証のために、{% data variables.product.prodname_dotcom %} から IdP に送信元の IP アドレスが送信されます。 アクションとアプリが IdP の CAP によってブロックされないようにするには、構成を変更する必要があります。

{% data reusables.enterprise-accounts.oidc-gei-warning %}

### {% data variables.product.prodname_actions %}

個人用アクセス トークンを使うアクションは、IdP の CAP によってブロックされる可能性があります。 個人用アクセス トークンは、サービス アカウントを使って作成し、IdP の CAP で IP 制御の対象外とすることをお勧めします。 

サービス アカウントを使用できない場合、個人用アクセス トークンを使うアクションのブロックを解除する別のオプションとして、{% data variables.product.prodname_actions %} で使われる IP 範囲を許可することができます。 詳細については、「[GitHub の IP アドレスについて](/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses)」を参照してください。

### {% data variables.product.prodname_github_apps %} と {% data variables.product.prodname_oauth_apps %} 

{% data variables.product.prodname_github_apps %} と {% data variables.product.prodname_oauth_apps %} がメンバーの代理で要求を行うと、検証のために {% data variables.product.prodname_dotcom %} から IdP にアプリのサーバーの IP アドレスが送信されます。 アプリのサーバーの IP アドレスが IdP の CAP によって検証されない場合、要求は失敗します。

使いたいアプリの所有者に連絡し、その IP の範囲を問い合わせて、その IP の範囲からのアクセスを許可するように IdP の CAP を構成することができます。 所有者に連絡できない場合は、IdP のサインイン ログを確認し、要求に出現する IP アドレスを確認し、それらのアドレスを許可リストに登録できます。 

また、インストールされている {% data variables.product.prodname_github_apps %} に対して IP 許可リスト構成を有効にすることもできます。 有効にすると、送信元 IP アドレスに関係なくすべての {% data variables.product.prodname_github_apps %} と {% data variables.product.prodname_oauth_apps %} が引き続き機能します。 詳細については、「[Enforcing policies for security settings in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#allowing-access-by-github-apps)」 (Enterprise でセキュリティ設定のポリシーを適用する) を参照してください。
