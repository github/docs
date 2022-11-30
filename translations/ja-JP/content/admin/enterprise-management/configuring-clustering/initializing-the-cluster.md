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
ms.openlocfilehash: 91394d1d39301f77bc49a87012e04c3d5e9c3b60
ms.sourcegitcommit: ced661bdffebd0f96f6f76db109fbe31983448ba
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167089'
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

この例 `cluster.conf` では、11 のノードでクラスターを定義します。

  - `ghes-front-end-node-\*` と呼ばれる 2 つのノードによって、クライアント要求に応答するサービスが実行されます。
  - `ghes-database-node-\*` と呼ばれる 3 つのノードによって、データベース データのストレージ、取得、レプリケーションを行うサービスが実行されます。
  - `ghes-search-node-\*` と呼ばれる 3 つのノードによって、検索機能を行うサービスが実行されます。
  - `ghes-storage-node-\*` と呼ばれる 3 つのノードによって、データのストレージ、取得、レプリケーションを行うサービスが実行されます。

ノードの名前には、ホスト名として有効な任意の名前を選択できます。 この名前は各ノードのホスト名として設定され、各ノードの `/etc/hosts` に追加され、各ノードがローカルでお互いを解決できるようにします。

`mysql-server` と `mysql-master` 経由で MySQL プライマリとして構成した最初のクラスター ノードを指定します。

```ini
[cluster]
  mysql-master = ghes-database-node-1
  redis-master = ghes-database-node-1
  primary-datacenter = primary
[cluster "ghes-front-end-node-1"]
  hostname = ghes-front-end-node-1
  ipv4 = 192.168.0.2
  # ipv6 = fd12:3456:789a:1::2
  consul-datacenter = primary
  datacenter = primary
  web-server = true
  job-server = true
  memcache-server = true
[cluster "ghes-front-end-node-2"]
  hostname = ghes-front-end-node-2
  ipv4 = 192.168.0.3
  # ipv6 = fd12:3456:789a:1::3
  consul-datacenter = primary
  datacenter = primary
  web-server = true
  job-server = true
  memcache-server = true
[cluster "ghes-database-node-1"]
  hostname = ghes-database-node-1
  ipv4 = 192.168.0.4
  # ipv6 = fd12:3456:789a:1::4
  consul-datacenter = primary
  datacenter = primary
  consul-server = true
  mysql-server = true
  redis-server = true
[cluster "ghes-database-node-2"]
  hostname = ghes-database-node-2
  ipv4 = 192.168.0.5
  # ipv6 = fd12:3456:789a:1::5
  consul-datacenter = primary
  datacenter = primary
  consul-server = true
  mysql-server = true
  redis-server = true
[cluster "ghes-database-node-3"]
  hostname = ghes-database-node-3
  ipv4 = 192.168.0.6
  # ipv6 = fd12:3456:789a:1::6
  consul-datacenter = primary
  datacenter = primary
  consul-server = true
  mysql-server = true
  redis-server = true
[cluster "ghes-search-node-1"]
  hostname = ghes-search-node-1
  ipv4 = 192.168.0.7
  # ipv6 = fd12:3456:789a:1::7
  consul-datacenter = primary
  datacenter = primary
  elasticsearch-server = true
[cluster "ghes-search-node-2"]
  hostname = ghes-search-node-2
  ipv4 = 192.168.0.8
  # ipv6 = fd12:3456:789a:1::8
  consul-datacenter = primary
  datacenter = primary
  elasticsearch-server = true
[cluster "ghes-search-node-3"]
  hostname = ghes-search-node-3
  ipv4 = 192.168.0.9
  # ipv6 = fd12:3456:789a:1::9
  consul-datacenter = primary
  datacenter = primary
  elasticsearch-server = true
[cluster "ghes-storage-node-1"]
  hostname = ghes-storage-node-1
  ipv4 = 192.168.0.10
  # ipv6 = fd12:3456:789a:1::10
  consul-datacenter = primary
  datacenter = primary
  git-server = true
  pages-server = true
  storage-server = true
  metrics-server = true
[cluster "ghes-storage-node-2"]
  hostname = ghes-storage-node-2
  ipv4 = 192.168.0.11
  # ipv6 = fd12:3456:789a:1::11
  consul-datacenter = primary
  datacenter = primary
  git-server = true
  pages-server = true
  storage-server = true
  metrics-server = true
[cluster "ghes-storage-node-3"]
  hostname = ghes-storage-node-3
  ipv4 = 192.168.0.12
  # ipv6 = fd12:3456:789a:1::12
  consul-datacenter = primary
  datacenter = primary
  git-server = true
  pages-server = true
  storage-server = true
  metrics-server = true
```

構成された最初のノードでファイル `/data/user/common/cluster.conf` を作成します。 たとえば、`vim` を使用する場合は次のようになります。

   ```shell
   ghe-data-node-1:~$ sudo vim /data/user/common/cluster.conf
   ```
