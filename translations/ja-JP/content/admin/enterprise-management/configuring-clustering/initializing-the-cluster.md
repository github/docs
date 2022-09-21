---
title: クラスタの初期化
intro: '{% data variables.product.prodname_ghe_server %} クラスタはライセンスを使用して設定し、管理シェル (SSH) を使用して初期化する必要があります。'
redirect_from:
  - /enterprise/admin/clustering/initializing-the-cluster
  - /enterprise/admin/enterprise-management/initializing-the-cluster
  - /admin/enterprise-management/initializing-the-cluster
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
ms.openlocfilehash: ea771194e8bf5104707a645c4ee18473ff235153
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331817'
---
{% data reusables.enterprise_clustering.clustering-requires-https %}

## {% data variables.product.prodname_ghe_server %}のインストール

1. 各クラスタノードで {% data variables.product.prodname_ghe_server %} をプロビジョニングしてインストールします。 詳細については、「[{% data variables.product.prodname_ghe_server %} インスタンスをセットアップする](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance)」を参照してください。
2. 管理シェルまたは DHCP を使用し、各ノードの IP アドレス **のみ** を構成します。 その他の設定は行わないでください。

## 最初のノードの設定

1. `cluster.conf` で MySQL プライマリとして指定されるノードに接続します。 詳しくは、「[クラスター構成ファイルについて](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file)」を参照してください。
2. Web ブラウザーで `https://<ip address>:8443/setup/` に移動します。
{% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} {% data reusables.enterprise_installation.instance-will-restart-automatically %}

## クラスタの初期化

クラスターを初期化するためには、クラスター設定ファイル (`cluster.conf`) が必要です。 詳しくは、「[クラスター構成ファイルについて](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file)」を参照してください。

1. 構成された最初のノードから `ghe-cluster-config-init` を実行します。  実行すると、クラスタ設定ファイルに設定されていないノードがある場合にクラスタを初期化します。
2. `ghe-cluster-config-apply` を実行する。 これにより、`cluster.conf` ファイルを検証して各ノードファイルに設定を適用し、各ノードで設定されたサービスを起動します。

実行中のクラスターの状態を確認するには、`ghe-cluster-status` コマンドを使います。

## クラスタ設定ファイルについて

クラスタ設定ファイル (`cluster.conf`) は、クラスター中のノードと、その上で動作するサービスを定義します。
詳しくは、「[クラスター ノードについて](/enterprise/admin/guides/clustering/about-cluster-nodes)」を参照してください。

この例 `cluster.conf` では、5 つのノードでクラスターを定義します。

  - 2 つのノード (`ghe-app-node-\*` と呼ばれる) によって、クライアント要求に応答する `web-server` サービスと `job-server` サービスが実行されます。
  - 3 つのノード (`ghe-data-node-\*` と呼ばれる) は、{% data variables.product.prodname_ghe_server %} データの保存と取得のサービスを実行します。

ノードの名前には、ホスト名として有効な任意の名前を選択できます。 この名前は各ノードのホスト名として設定され、各ノードの `/etc/hosts` に追加され、各ノードがローカルでお互いを解決できるようにします。

`mysql-server` と `mysql-master` 経由で MySQL プライマリとして構成した最初のクラスター ノードを指定します。

```ini
[cluster]
  mysql-master = ghe-data-node-1
  redis-master = ghe-data-node-1
  primary-datacenter = default
[cluster "ghe-app-node-1"]
  hostname = ghe-app-node-1
  ipv4 = 192.168.0.2
  # ipv6 = fd12:3456:789a:1::2
  web-server = true
  job-server = true
[cluster "ghe-app-node-2"]
  hostname = ghe-app-node-2
  ipv4 = 192.168.0.3
  # ipv6 = fd12:3456:789a:1::3
  web-server = true
  job-server = true
[cluster "ghe-data-node-1"]
  hostname = ghe-data-node-1
  ipv4 = 192.168.0.4
  # ipv6 = fd12:3456:789a:1::4
  consul-server = true
  consul-datacenter = default
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
[cluster "ghe-data-node-2"]
  hostname = ghe-data-node-2
  ipv4 = 192.168.0.5
  # ipv6 = fd12:3456:789a:1::5
  consul-server = true
  consul-datacenter = default
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
[cluster "ghe-data-node-3"]
  hostname = ghe-data-node-3
  ipv4 = 192.168.0.6
  # ipv6 = fd12:3456:789a:1::6
  consul-server = true
  consul-datacenter = default
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
```

構成された最初のノードでファイル `/data/user/common/cluster.conf` を作成します。 たとえば、`vim` を使用する場合は次のようになります。

   ```shell
   ghe-data-node-1:~$ sudo vim /data/user/common/cluster.conf
   ```
