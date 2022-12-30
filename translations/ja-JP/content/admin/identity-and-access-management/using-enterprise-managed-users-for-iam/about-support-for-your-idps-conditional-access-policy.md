---
title: IdP の条件付きアクセス ポリシーのサポートについて
shortTitle: Conditional access policy
intro: 'Enterprise が OIDC SSO を使っている場合、{% data variables.product.prodname_dotcom %} は、お客様の IdP の条件付きアクセス ポリシー (CAP) を使って、Enterprise とそのリソースへのアクセスを検証できます。'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: aed7008bd008ccfd6303ccbb36f4d6f3bd7002ca
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/22/2022
ms.locfileid: '148179998'
---
{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## 条件付きアクセス ポリシーのサポートについて

{% data reusables.enterprise-accounts.emu-cap-validates %}

{% data variables.product.product_name %} では、OIDC SSO が有効になっている {% data variables.enterprise.prodname_emu_enterprise %} の CAP がサポートされます。 {% data variables.product.product_name %} によって IdP の IP 条件が適用されますが、デバイスのコンプライアンス条件は適用できません。 Enterprise 所有者は、{% data variables.product.product_name %} の IP 許可リストではなく、この IP 許可リスト構成を使用することを選ぶことができ、OIDC SSO が構成されたらそれを行うことができます。 IP 許可リストについて詳しくは、「[IP 許可リストを使用したネットワーク トラフィックの制限](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)」および「[Organization の許可された IP アドレスの管理](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)」をご覧ください。


OIDC と {% data variables.product.prodname_emus %} の使用の詳細については、「[エンタープライズ マネージド ユーザー向けの OIDC の構成](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)」と「[SAML から OIDC への移行](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)」を参照してください。

## 統合と自動化に関する考慮事項

CAP に対する検証のために、{% data variables.product.prodname_dotcom %} から IdP に送信元の IP アドレスが送信されます。 アクションとアプリが IdP の CAP によってブロックされないようにするには、構成を変更する必要があります。

{% data reusables.enterprise-accounts.oidc-gei-warning %}

### {% data variables.product.prodname_actions %}

{% data variables.product.pat_generic %} を使用するアクションは、IdP の CAP によってブロックされる可能性が高いです。 {% data variables.product.pat_generic %}は、サービス アカウントを使って作成し、IdP の CAP で IP 制御の対象外とすることをお勧めします。 

サービス アカウントを使用できない場合、{% data variables.product.pat_generic %}を使うアクションのブロックを解除する別のオプションとして、{% data variables.product.prodname_actions %} で使われる IP 範囲を許可することができます。 詳細については、「[GitHub の IP アドレスについて](/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses)」を参照してください。

### {% data variables.product.prodname_github_apps %} と {% data variables.product.prodname_oauth_apps %} 

{% data variables.product.prodname_github_apps %} と {% data variables.product.prodname_oauth_apps %} がメンバーの代理で要求を行うと、検証のために {% data variables.product.prodname_dotcom %} から IdP にアプリのサーバーの IP アドレスが送信されます。 アプリのサーバーの IP アドレスが IdP の CAP によって検証されない場合、要求は失敗します。

使いたいアプリの所有者に連絡し、その IP の範囲を問い合わせて、その IP の範囲からのアクセスを許可するように IdP の CAP を構成することができます。 所有者に連絡できない場合は、IdP のサインイン ログを確認し、要求に出現する IP アドレスを確認し、それらのアドレスを許可リストに登録できます。 

すべてのエンタープライズのアプリに対してすべての IP 範囲を許可しない場合は、インストールされている {% data variables.product.prodname_github_apps %} と承認された {% data variables.product.prodname_oauth_apps %} を IdP 許可リストから除外することもできます。 その場合、これらのアプリは発信元 IP アドレスに関係なく、動作し続けます。 詳細については、「[Enforcing policies for security settings in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#allowing-access-by-github-apps)」 (Enterprise でセキュリティ設定のポリシーを適用する) を参照してください。
