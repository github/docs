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
---

{% data reusables.enterprise_clustering.clustering-requires-https %}

## {% data variables.product.prodname_ghe_server %}のインストール

1. 各クラスタノードで {% data variables.product.prodname_ghe_server %} をプロビジョニングしてインストールします。 詳細は「[{% data variables.product.prodname_ghe_server %}インスタンスをセットアップする](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance)」を参照してください。
2. 管理シェルもしくは DHCP を使い、各ノードの IP アドレス**のみ**を設定してください。 その他の設定は行わないでください。

## 最初のノードの設定

1. `cluster.conf` で MySQL プライマリとして指定されるノードに接続します。 For more information, see "[About the cluster configuration file](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file)."
2. Webブラウザで`https://<ip address>:8443/setup/`にアクセスしてください。
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %}
{% data reusables.enterprise_installation.instance-will-restart-automatically %}

## クラスタの初期化

クラスタを初期化するためには、クラスタ設定ファイル（`cluster.conf`）が必要です。 For more information, see "[About the cluster configuration file](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file)".

1. 設定された最初のノードで、`ghe-cluster-config-init` を実行します。  実行すると、クラスタ設定ファイルに設定されていないノードがある場合にクラスタを初期化します。
2. `ghe-cluster-config-apply` を実行します。 これにより、 `cluster.conf` ファイルを検証して各ノードファイルに設定を適用し、各ノードで設定されたサービスを起動します。

動作中のクラスタのステータスをチェックするには`ghe-cluster-status`コマンドを使ってください。

## クラスタ設定ファイルについて

クラスタ設定ファイル（`cluster.conf`）は、クラスタ中のノードと、その上で動作するサービスを定義します。 For more information, see "[About cluster nodes](/enterprise/admin/guides/clustering/about-cluster-nodes)."

この例の`cluster.conf`では、5ノードを持つクラスタを定義しています。

  - 2つのノード（`ghe-app-node-\*`と呼ばれます）では、クライアントからのリクエストに対するレスポンスを受け持つ`web-server`と`job-server`サービスが動作します。
  - 3 つのノード (`ghe-data-node-\*` と呼ばれる) は、{% data variables.product.prodname_ghe_server %} データの保存と取得のサービスを実行します。

ノードの名前には、ホスト名として有効な任意の名前を選択できます。 この名前は各ノードのホスト名として設定され、各ノードの`/etc/hosts`に追加され、各ノードがローカルでお互いを解決できるようにします。

設定した最初のクラスタノードを、`mysql-server` および `mysql-master`で MySQL のプライマリとして指定してください。

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

設定された最初のノード上で、`/data/user/common/cluster.conf` ファイルを作成します。 たとえば、次のように `vim` を使用します。

   ```shell
   ghe-data-node-1:~$ sudo vim /data/user/common/cluster.conf
   ```
