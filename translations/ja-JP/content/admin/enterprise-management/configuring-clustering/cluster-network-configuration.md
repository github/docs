---
title: クラスタのネットワーク設定
intro: '{% data variables.product.prodname_ghe_server %} クラスタリングが適切に動作するためには、DNS の名前解決、ロードバランシング、ノード間の通信が適切に行われなければなりません。'
redirect_from:
  - /enterprise/admin/clustering/cluster-network-configuration
  - /enterprise/admin/enterprise-management/cluster-network-configuration
  - /admin/enterprise-management/cluster-network-configuration
versions:
  ghes: '*'
type: reference
topics:
  - Clustering
  - Enterprise
  - Infrastructure
  - Networking
shortTitle: Configure a cluster network
ms.openlocfilehash: d6e4d50077cccc3e5582be0af39bdae0046cd8c8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145112765'
---
## ネットワークに関する考慮事項

クラスタリングのための最もシンプルなネットワーク設計は、ノード群を単一のLANに置くことです。 クラスタがサブネットワークにまたがる必要がある場合は、ネットワーク間にファイアウォールルールを設定することはお勧めしません。 ノード間の遅延は 1 ミリ秒未満である必要があります。

{% ifversion ghes %}高可用性を実現するには、アクティブ ノードを備えたネットワークとパッシブ ノードを備えたネットワーク間の待ち時間が 70 ミリ秒未満である必要があります。 2 つのネットワーク間にファイアウォールを設定することはお勧めしません。{% endif %}

### エンドユーザーのためのアプリケーションポート

アプリケーションのポートは、エンドユーザーにWebアプリケーションとGitへのアクセスを提供します。

| Port     | 説明     | Encrypted  |
| :------------- | :------------- | :------------- |
| 22/TCP    | Git over SSH | Yes |
| 25/TCP    | SMTP | STARTTLSが必要 |
| 80/TCP    | HTTP | No<br>(SSL が有効になっている場合、このポートは HTTPS にリダイレクトされます) |
| 443/TCP   | HTTPS | Yes |
| 9418/TCP  | 単純な Git プロトコル ポート<br>(プライベート モードでは無効) | No |

### 管理ポート

管理ポートは、エンドユーザが基本的なアプリケーションを利用するためには必要ありません。

| Port     | 説明     | Encrypted  |
| :------------- | :------------- | :------------- |
| ICMP      | ICMP Ping | No |
| 122/TCP   | 管理SSH | Yes |
| 161/UDP    | SNMP | No |
| 8080/TCP  | Management Console HTTP | No<br>(SSL が有効になっている場合、このポートは HTTPS にリダイレクトされます) |
| 8443/TCP  | Management Console HTTPS | Yes |

### クラスタ通信ポート

ネットワークレベルのファイアウォールがノード間にある場合は、これらのポートがアクセス可能である必要があります。 ノード間の通信は暗号化されていません。 これらのポートは外部からアクセスできません。

| Port     | 説明     |
| :------------- | :------------- |
| 1336/TCP  | 内部 API |
| 3033/TCP  | 内部 SVN アクセス |
| 3037/TCP  | 内部 SVN アクセス |
| 3306/TCP  | MySQL |
| 4486/TCP  | Governor アクセス |
| 5115/TCP  | ストレージ バックエンド |
| 5208/TCP  | 内部 SVN アクセス |
| 6379/TCP  | Redis |
| 8001/TCP  | Grafana |
| 8090/TCP  | 内部 GPG アクセス |
| 8149/TCP  | GitRPC ファイルサーバーアクセス |
| 8300/TCP | Consul |
| 8301/TCP | Consul |
| 8302/TCP | Consul |
| 9000/TCP  | Git デーモン |
| 9102/TCP  | Pages ファイルサーバー |
| 9105/TCP  | LFS サーバー |
| 9200/TCP  | Elasticsearch |
| 9203/TCP | セマンティックコードサービス |
| 9300/TCP  | Elasticsearch |
| 11211/TCP | Memcache |
| 161/UDP   | SNMP |
| 8125/UDP  | Statsd |
| 8301/UDP | Consul |
| 8302/UDP | Consul |
| 25827/UDP | Collectd |

## ロードバランサの設定

 ノード間のトラフィックの分配には、PROXY プロトコルをサポートする TCP ベースの外部ロードバランサをおすすめします。 以下のロードバランサ設定を検討してください:

 - TCP ポート (以下に示す) は、`web-server` サービスを実行しているノードに転送する必要があります。 これらは、外部クライアント要求を処理する唯一のノードです。
 - スティッキーセッションは有効化してはなりません。

{% data reusables.enterprise_installation.terminating-tls %}

## クライアントの接続情報の処理

クラスタへのクライアント接続はロードバランサから行われるため、クライアントの IP アドレスが失われる可能性があります。 クライアント接続情報を正しく取り込むには、追加の検討が必要です。

{% data reusables.enterprise_clustering.proxy_preference %}

{% data reusables.enterprise_clustering.proxy_xff_firewall_warning %}

### {% data variables.product.prodname_ghe_server %}での PROXY サポートの有効化

インスタンスとロードバランサの双方でPROXYサポートを有効化することを強くおすすめします。

{% data reusables.enterprise_installation.proxy-incompatible-with-aws-nlbs %}

 - インスタンスにはこのコマンドを使用してください:
  ```shell
  $ ghe-config 'loadbalancer.proxy-protocol' 'true' && ghe-cluster-config-apply
  ```
  - ロードバランサでは、ベンダーから提供された手順書に従ってください。

  {% data reusables.enterprise_clustering.proxy_protocol_ports %}

### {% data variables.product.prodname_ghe_server %}での X-Forwarded-For サポートの有効化

{% data reusables.enterprise_clustering.x-forwarded-for %}

`X-Forwarded-For` ヘッダーを有効にするには、次のコマンドを使用します。

```shell
$ ghe-config 'loadbalancer.http-forward' 'true' && ghe-cluster-config-apply
```

{% data reusables.enterprise_clustering.without_proxy_protocol_ports %}

### ヘルスチェックの設定
ロードバランサは健全性チェックによって、事前に設定されたチェックが失敗するようになったノードがあれば、反応しなくなったノードへのトラフィックの送信を止めます。 クラスタのノードに障害が起きた場合、冗長なノードと組み合わさったヘルスチェックが高可用性を提供してくれます。

{% data reusables.enterprise_clustering.health_checks %} {% data reusables.enterprise_site_admin_settings.maintenance-mode-status %}

## DNS の要件

{% data reusables.enterprise_clustering.load_balancer_dns %}
