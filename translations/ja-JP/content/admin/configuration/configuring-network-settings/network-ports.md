---
title: ネットワーク ポート
redirect_from:
  - /enterprise/admin/articles/configuring-firewalls
  - /enterprise/admin/articles/firewall
  - /enterprise/admin/guides/installation/network-configuration
  - /enterprise/admin/guides/installation/network-ports-to-open
  - /enterprise/admin/installation/network-ports
  - /enterprise/admin/configuration/network-ports
  - /admin/configuration/network-ports
intro: オープンするネットワークポートは、管理者、エンドユーザ、メールサポートへ公開する必要があるネットワークサービスに応じて選択してください。
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - Infrastructure
  - Networking
  - Security
ms.openlocfilehash: 048b27ed44cea11057c781ae3043078a825f8d1a
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160655'
---
## 管理ポート

{% data variables.location.product_location %}を構成し、特定の機能を実行するには、いくつかの管理ポートが必要です。 管理ポートは、エンドユーザが基本的なアプリケーションを利用するためには必要ありません。

| Port | サービス | 説明 |
|---|---|---|
| 8443 | HTTPS | 安全な Web ベースの {% data variables.enterprise.management_console %}。 基本的なインストールと設定に必要です。 |
| 8080 | HTTP | プレーンテキストの Web ベースの {% data variables.enterprise.management_console %}。 TLS を手動で無効にしない限り必要ありません。 |
| 122 | SSH | {% data variables.location.product_location %}用のシェル アクセス。 高可用性構成ではすべてのノード間の着信接続に対して開いている必要があります。 デフォルトの SSHポート (22) は Git と SSH のアプリケーションネットワークトラフィック専用です。 |
| 1194/UDP | VPN | High Availability設定でのセキュアなレプリケーションネットワークトンネル。 構成内のすべてのノード間の通信のために開いている必要があります。|
| 123/UDP| NTP | timeプロトコルの処理に必要。 |
| 161/UDP | SNMP | ネットワークモニタリングプロトコルの処理に必要。 |

## エンドユーザーのためのアプリケーションポート

アプリケーションのポートは、エンドユーザーにWebアプリケーションとGitへのアクセスを提供します。

| Port | サービス | 説明 |
|---|---|---|
| 443 | HTTPS | WebアプリケーションとGit over HTTPSのアクセス。 |
| 80 | HTTP | Web アプリケーションへのアクセス。 TLS が構成されている場合、すべての要求は HTTPS ポートにリダイレクトされます。 |
| 22 | SSH | Git over SSH へのアクセス。 パブリックとプライベートリポジトリへの clone、fetch、push 操作をサポートします。 |
| 9418 | Git | Gitプロトコルのポート。暗号化されないネットワーク通信でのパブリックなリポジトリへのclone及びfetch操作をサポートする。 {% data reusables.enterprise_installation.when-9418-necessary %} |

{% data reusables.enterprise_installation.terminating-tls %}

## メールのポート

メールのポートは直接あるいはエンドユーザ用のインバウンドメールサポートのリレーを経由してアクセスできなければなりません。

| Port | サービス | 説明 |
|---|---|---|
| 25 | SMTP | 暗号化ありのSMTP（STARTTLS）のサポート。 |

## {% data variables.product.prodname_actions %} ポート

セルフホステッド ランナーが{% data variables.product.prodname_actions %}に接続されるには、{% data variables.location.product_location %} ポートへのアクセスが可能である必要があります。 詳細については、[セルフホステッド ランナー](/actions/hosting-your-own-runners/about-self-hosted-runners#communication-between-self-hosted-runners-and-github-enterprise-server)に関する記述をご覧ください。

| Port | サービス | 説明 |
|---|---|---|
| 443 | HTTPS | セルフホステッド ランナーが{% data variables.location.product_location %}に接続されると、ジョブの割り当てが送信され、ランナー アプリケーションの新しいバージョンがダウンロードされます。 TLS が構成されている場合は必須です。
| 80 | HTTP | セルフホステッド ランナーが{% data variables.location.product_location %}に接続されると、ジョブの割り当てが送信され、ランナー アプリケーションの新しいバージョンがダウンロードされます。 TLS が構成されていない場合は必須です。

{% data variables.product.prodname_dotcom_the_website %} アクションへの自動アクセスを有効にすると、{% data variables.product.prodname_dotcom_the_website %} をチェックする前に、これらのポートを介して、常に {% data variables.product.prodname_actions %} によって、{% data variables.location.product_location %}に対するアクションの検索が最初に行われます。 詳細については、「[{% data variables.product.prodname_github_connect %} を使用して {% data variables.product.prodname_dotcom_the_website %} アクションへの自動アクセスを有効にする](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#about-resolution-for-actions-using-github-connect)」を参照してください。

## {% data variables.product.prodname_github_connect %} ポート

{% data variables.product.prodname_github_connect %} を有効にすると、{% data variables.product.product_name %} と {% data variables.product.prodname_dotcom_the_website %} の間の接続でポート 443 または 80 経由の HTTPS が使用され、TLS が必須になります。 詳しい情報については、「[{% data variables.product.prodname_github_connect %} について](/admin/configuration/configuring-github-connect/about-github-connect)」を参照してください。

## 参考資料

- 「[TLS の設定](/admin/configuration/configuring-network-settings/configuring-tls)」
