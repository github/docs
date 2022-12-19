---
title: Enterprise へのネットワークトラフィックを制限する
shortTitle: Restricting network traffic
intro: IP 許可リストを使用して、Enterprise へのアクセスを指定された IP アドレスからの接続に制限できます。
versions:
  ghae: '*'
type: how_to
topics:
- Access management
- Enterprise
- Fundamentals
- Networking
- Security
redirect_from:
- /admin/configuration/restricting-network-traffic-to-your-enterprise
ms.openlocfilehash: 67c7067362ac94e5cbc64be4704ba0ec3f6606e0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147682853"
---
## IP 許可リストについて

デフォルトでは、許可されたユーザは任意の IP アドレスから Enterprise にアクセスできます。 Enterprise のオーナーは、特定の IP アドレスに対する許可リストを設定することで、Enterprise アカウントの Organization が所有するアセットへのアクセスを制限できます。 {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %} {% data reusables.identity-and-permissions.ip-allow-lists-enterprise %} 

許可 IP アドレスを、Organization ごとに設定することもできます。 詳しくは、「[Organization で許可される IP アドレスの管理](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)」を参照してください。

既定では、Azure ネットワークセキュリティグループ (NSG) ルールで、ポート 22、80、443、および 25 ですべてのインバウンドトラフィックが開いたままになります。 Enterprise オーナーは {% data variables.contact.github_support %} に問い合わせて、インスタンスのアクセス制限を設定できます。

Azure NSG を使用したインスタンスレベルの制限については、Enterprise インスタンスへのアクセスを許可する必要がある IP アドレスを {% data variables.contact.github_support %} に問い合わせてください。 標準の CIDR (Classless Inter-Domain Routing) 形式を使用してアドレス範囲を指定します。 {% data variables.contact.github_support %} は、HTTP、SSH、HTTPS、SMTP を介したネットワークアクセスを制限するために、Enterprise に適切なファイアウォールルールを設定します。 詳細については、「[{% data variables.contact.github_support %} からのヘルプの受信](/admin/enterprise-support/receiving-help-from-github-support)」を参照してください。

## 許可 IP アドレスを追加する

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

## {% data variables.product.prodname_github_apps %}によるアクセスの許可

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

## 許可 IP アドレスを有効化する

{% data reusables.identity-and-permissions.about-enabling-allowed-ip-addresses %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. [IP 許可リスト] で、 **[IP 許可リストを有効にする]** を選択します。
  ![IP アドレスを許可するチェックボックス](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. **[保存]** をクリックします。

## 許可 IP アドレスを編集する

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. **[Update]** をクリックします。
{% data reusables.identity-and-permissions.check-ip-address %}

{% ifversion ip-allow-list-address-check %}
## IP アドレスが許可されているかどうかを確認する

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.check-ip-address-step %} {% endif %}

## 許可 IP アドレスを削除する

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## IP許可リストで {% data variables.product.prodname_actions %} を使用する

{% data reusables.actions.ip-allow-list-self-hosted-runners %}
