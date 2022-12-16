---
title: IP 許可リストを使用して Enterprise へのネットワーク トラフィックを制限する
shortTitle: Restricting network traffic
intro: IP 許可リストを使用すれば、Enterprise へのアクセスを制限して、指定された IP アドレスからリソースへのアクセスのみを許可することができます。
permissions: Enterprise owners can configure IP allow lists.
miniTocMaxHeadingLevel: 3
versions:
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Fundamentals
  - Networking
  - Security
redirect_from:
  - /admin/configuration/restricting-network-traffic-to-your-enterprise
  - /admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise
ms.openlocfilehash: 8511499e723fdeb4a2d24c2fce627bce56ad9777
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191895'
---
## ネットワーク トラフィックの制限について

デフォルトでは、許可されたユーザは任意の IP アドレスから Enterprise にアクセスできます。 特定の IP アドレスに対して許可リストを構成することで、Enterprise アカウント {% endif %} 内の Organization が所有するリソース {% ifversion ghec %} へのアクセスを制限できます。 {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% ifversion ghec %}

エンタープライズによって {% data variables.product.prodname_emus %} が Azure AD と OIDC で使用されている場合は、{% data variables.product.company_short %} の IP 許可リスト機能を使用するか、ID プロバイダー (IdP) 用の許可リスト制限を使用するかを選ぶことができます。 エンタープライズによって {% data variables.product.prodname_emus %} が Azure と OIDC で使用されていない場合は、{% data variables.product.company_short %} の許可リスト機能を使用できます。 

{% elsif ghae %}

既定では、Azure ネットワークセキュリティグループ (NSG) ルールで、ポート 22、80、443、および 25 ですべてのインバウンドトラフィックが開いたままになります。 {% data variables.product.product_name %} に対してアクセス制限を構成するには、{% data variables.contact.github_support %} に連絡してください。

Azure NSG を使用した制限については、{% data variables.product.product_name %}へのアクセスを許可される必要がある IP アドレスを {% data variables.contact.github_support %} に問い合わせてください。 標準の CIDR (Classless Inter-Domain Routing) 形式を使用してアドレス範囲を指定します。 {% data variables.contact.github_support %} では、HTTP、SSH、HTTPS、SMTP を介したネットワークアクセスを制限するために、適切なファイアウォールルールを設定します。 詳細については、「[{% data variables.contact.github_support %} からのヘルプの受信](/admin/enterprise-support/receiving-help-from-github-support)」を参照してください。

{% endif %}

{% ifversion ghec %}

## {% data variables.product.company_short %} の IP 許可リスト

{% data variables.product.company_short %} の IP 許可リストを使用すれば、エンタープライズ内の組織が所有するエンタープライズおよび資産へのアクセスを制御できます。 

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %} 

{% data reusables.identity-and-permissions.ip-allow-lists-enable %} {% data reusables.identity-and-permissions.ip-allow-lists-enterprise %} 

## IdP の許可リストについて

Azure AD と OIDC で {% data variables.product.prodname_emus %} を使用している場合は、IdP の許可リストを使用できます。

IdP の許可リストを使用すると、Enterprise 内のすべての Organization の {% data variables.product.company_short %} IP 許可リスト構成が無効になり、IP 許可リストを有効にして管理するための GraphQL API が無効になります。 

既定で、IdP では、選ばれた IP 許可リスト構成の {% data variables.product.company_short %} への初期対話型 SAML または OIDC サインイン時に CAP を実行します。

OIDC CAP は、ユーザーからサーバーへのトークン (ユーザーに代わって機能する {% data variables.product.prodname_oauth_app %} または {% data variables.product.prodname_github_app %} 用のトークンなど) を使用して API へのリクエストにのみ適用されます。 {% data variables.product.prodname_github_app %} でサーバー間トークンが使用される場合、OIDC CAP は適用されません。 詳しくは、「[{% data variables.product.prodname_github_apps %} による認証](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-an-installation)」および「[IdPs 条件付きアクセス ポリシーのサポートについて](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy#github-apps-and-oauth-apps)」を参照してください。

ユーザーからサーバーへのトークンにポリシーを適用しながら OIDC CAP を確実にシームレスに使用するには、Enterprise で使用する各 {% data variables.product.prodname_github_app %} からすべての IP 範囲を IdP ポリシーにコピーする必要があります。 

## {% data variables.product.company_short %} の IP 許可リストを使用する

### {% data variables.product.company_short %} の IP 許可リストを有効にする
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. [IP 許可リスト] で、IP 許可リストを有効にします。 
   - OIDC で {% data variables.product.prodname_emus %} を使用している場合は、ドロップダウン メニューを選び、 **[GitHub]** をクリックします。
      ![[無効]、[ID プロバイダー]、[GitHub] の 3 つの IP 許可リスト構成オプションを示すドロップダウン メニューのスクリーンショット](/assets/images/help/security/enable-github-ip-allow-list.png)
   
      **[IP 許可リストを有効にする]** を選びます。
      ![IP アドレスを許可するチェックボックスのスクリーンショット](/assets/images/help/security/enable-ip-allow-list-ghec.png)

   - OIDC で {% data variables.product.prodname_emus %} を使用していない場合は、 **[IP 許可リストを有効にする]** を選びます。
     ![IP アドレスを許可するチェックボックスのスクリーンショット](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
1. **[保存]** をクリックします。

### 許可 IP アドレスを追加する

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %}

{% data reusables.identity-and-permissions.ipv6-allow-lists %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

### {% data variables.product.prodname_github_apps %}によるアクセスの許可

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

### 許可 IP アドレスを編集する

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. **[Update]** をクリックします。
{% data reusables.identity-and-permissions.check-ip-address %}

### IP アドレスが許可されているかどうかを確認する

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.check-ip-address-step %}

### 許可 IP アドレスを削除する

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## ID プロバイダーの許可リストを使用する

{% note %}

**注:** IdP の許可リストの使用は、Azure AD と OIDC での {% data variables.product.prodname_emus %} でのみサポートされます。 

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. [IP 許可リスト] でドロップダウンを選び、 **[ID プロバイダー]** をクリックします。

   ![[無効]、[ID プロバイダー]、[GitHub] の 3 つの IP 許可リスト構成オプションを示すドロップダウン メニューのスクリーンショット](/assets/images/help/security/enable-identity-provider-ip-allow-list.png)
1. 必要に応じて、インストールされた {% data variables.product.company_short %} および {% data variables.product.prodname_oauth_apps %} が任意の IP アドレスから Enterprise にアクセスできるようにするには、 **[アプリケーションの IdP チェックをスキップする]** を選びます。

   ![IP アドレスを許可するチェックボックス](/assets/images/help/security/ip-allow-list-skip-idp-check.png)
1. **[保存]** をクリックします。

{% endif %}

{% ifversion ghae %}

## 許可 IP アドレスを有効化する

{% data reusables.identity-and-permissions.about-enabling-allowed-ip-addresses %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. [IP 許可リスト] で、 **[IP 許可リストを有効にする]** を選択します。
  ![IP アドレスを許可するチェックボックス](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. **[保存]** をクリックします。

## 許可 IP アドレスを追加する

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

## {% data variables.product.prodname_github_apps %}によるアクセスの許可

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

## 許可 IP アドレスを編集する

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. **[Update]** をクリックします。
{% data reusables.identity-and-permissions.check-ip-address %}

## IP アドレスが許可されているかどうかを確認する

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.check-ip-address-step %}

## 許可 IP アドレスを削除する

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

{% endif %}

## IP許可リストで {% data variables.product.prodname_actions %} を使用する

{% data reusables.actions.ip-allow-list-self-hosted-runners %}
