---
title: クラスタの High Availability レプリケーションを設定する
intro: '{% data variables.product.prodname_ghe_server %} クラスタ全体のパッシブレプリカを別の場所に設定することで、クラスタを冗長ノードにフェイルオーバーできるようにします。'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster
  - /admin/enterprise-management/configuring-high-availability-replication-for-a-cluster
versions:
  enterprise-server: '>2.21'
type: how_to
topics:
  - Clustering
  - Enterprise
  - High availability
  - Infrastructure
---

### クラスタの High Availability レプリケーションについて

High Availability を実現するために、{% data variables.product.prodname_ghe_server %} のクラスタデプロイメントを設定できます。この場合、パッシブノードの同一のセットがアクティブクラスタ内のノードと同期されます。 ハードウェアまたはソフトウェアの障害がアクティブなクラスタのデータセンターに影響を与える場合は、手動でレプリカノードにフェイルオーバーし、ユーザリクエストの処理を続行して、停止の影響を最小限に抑えることができます。

High Availability モードでは、各アクティブノードは対応するパッシブノードと定期的に同期します。 パッシブノードはスタンバイで実行され、アプリケーションへのサービス提供や、ユーザ要求の処理は行われません。

{% data variables.product.prodname_ghe_server %} の包括的なシステム災害復旧計画の一部として High Availability を設定することをお勧めします。 また、定期的なバックアップを実行することをお勧めします。 詳しくは、"[ アプライアンスでのバックアップの設定](/enterprise/admin/configuration/configuring-backups-on-your-appliance)。"を参照してください。

### 必要な環境

#### ハードウェアとソフトウェア

アクティブなクラスタ内の既存のノードごとに、同一のハードウェアリソースを使用して2番目の仮想マシンをプロビジョニングする必要があります。 たとえば、クラスタに 11 個のノードがあり、各ノードに 12 個の vCPU、96GB の RAM、および 750GB の接続ストレージがある場合、それぞれが 12 個の vCPU、96GB の RAM、および 750GB の接続ストレージを備えた 11 個の新しい仮想マシンをプロビジョニングする必要があります。

新しい仮想マシンごとに、アクティブクラスタ内のノードで実行されているものと同じバージョンの {% data variables.product.prodname_ghe_server %} をインストールします。 ライセンスをアップロードしたり、追加の設定を実行したりする必要はありません。 詳細は「[{% data variables.product.prodname_ghe_server %}インスタンスをセットアップする](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance)」を参照してください。

{% note %}

**Note**: High Availability レプリケーションに使用する予定のノードは、スタンドアロンの {% data variables.product.prodname_ghe_server %} インスタンスである必要があります。 パッシブノードを2番目のクラスタとして初期化しないでください。

{% endnote %}

#### ネットワーク

プロビジョニングする新しいノードごとに静的 IP アドレスを割り当てる必要があります。また、接続を受け入れてクラスタのフロントエンド層のノードに転送するようにロードバランサを設定する必要があります。

アクティブクラスタを使用するネットワークとパッシブクラスタを使用するネットワークの間にファイアウォールを設定することはお勧めしません。 アクティブノードのあるネットワークとパッシブノードのあるネットワークの間の遅延は、70 ミリ秒未満である必要があります。 パッシブクラスタ内のノード間のネットワーク接続の詳細については、「[クラスタネットワーク設定](/enterprise/admin/enterprise-management/cluster-network-configuration)」を参照してください。

### クラスタの High Availability レプリカを作成する

- [アクティブノードをプライマリデータセンターに割り当てる](#assigning-active-nodes-to-the-primary-datacenter)
- [パッシブノードをクラスタ設定ファイルに追加する](#adding-passive-nodes-to-the-cluster-configuration-file)
- [設定例](#example-configuration)

#### アクティブノードをプライマリデータセンターに割り当てる

パッシブノードのセカンダリデータセンターを定義する前に、アクティブノードをプライマリデータセンターに割り当てていることを確認してください。

{% data reusables.enterprise_clustering.ssh-to-a-node %}

{% data reusables.enterprise_clustering.open-configuration-file %}

3. クラスタのプライマリデータセンターの名前に注意します。 クラスタ設定ファイルの上部にある `[cluster]` セクションでは、`primary-datacenter`のキー/値ペアを使用して、プライマリデータセンターの名前を定義します。 デフォルトでは、クラスタのプライマリデータセンターの名前は `default` です。

    ```shell
    [cluster]
      mysql-master = <em>HOSTNAME</em>
      redis-master = <em>HOSTNAME</em>
      <strong>primary-datacenter = default</strong>
    ```

    - 必要に応じて、`primary-datacenter` の値を編集して、プライマリデータセンター名をよりわかりやすい名前に変更します。

4. {% data reusables.enterprise_clustering.configuration-file-heading %} 各ノードの見出しの下に、新しいキー/値ペアのペアを追加して、ノードをデータセンターに割り当てます。 上記のステップ 3 の `primary-datacenter` と同じ値を使用します。 たとえば、デフォルト名 (`default`) を使用する場合は、次のキー/値ペアを各ノードのセクションに追加します。

    ```
    datacenter = default
    ```

    完了すると、クラスタ設定ファイルの各ノードのセクションは次の例のようになります。 {% data reusables.enterprise_clustering.key-value-pair-order-irrelevant %}

    ```shell
    [cluster "<em>HOSTNAME</em>"]
      <strong>datacenter = default</strong>
      hostname = <em>HOSTNAME</em>
      ipv4 = <em>IP ADDRESS</em>
      ...
    ...
    ```

    {% note %}

    **注釈**: ステップ 3 でプライマリデータセンター名を変更した場合は、各ノードのセクションで `consul-datacenter` のキー/値ペアを見つけ、値を名前変更したプライマリデータセンターに変更します。 たとえば、プライマリデータセンターに `primary` という名前を付けた場合は、ノードごとに次のキー/値ペアを使用します。

    ```
    consul-datacenter = primary
    ```

    {% endnote %}

{% data reusables.enterprise_clustering.apply-configuration %}

{% data reusables.enterprise_clustering.configuration-finished %}

{% data variables.product.prodname_ghe_server %} がプロンプトに戻ったら、ノードをクラスタのプライマリデータセンターに割り当てます。

#### パッシブノードをクラスタ設定ファイルに追加する

High Availability を設定するには、クラスタ内のすべてのアクティブノードに対応するパッシブノードを定義する必要があります。 次の手順では、アクティブノードとパッシブノードの両方を定義する新しいクラスタ設定を作成します。 次のことを行います。

- アクティブなクラスタ設定ファイルのコピーを作成します。
- コピーを編集して、アクティブノードに対応するパッシブノードを定義し、プロビジョニングした新しい仮想マシンの IP アドレスを追加します。
- クラスタ設定の変更されたコピーをアクティブな設定にマージします。
- 新しい設定を適用してレプリケーションを開始します。

設定例については、「[設定例](#example-configuration)」を参照してください。

1. クラスタ内のノードごとに、同じバージョンの {% data variables.product.prodname_ghe_server %} を実行して、同じ仕様で一致する仮想マシンをプロビジョニングします。 新しい各クラスターノードの IPv4 アドレスとホスト名に注意してください。 詳しい情報については、「[前提条件](#prerequisites)」を参照してください。

    {% note %}

    **注釈**: フェイルオーバー後に High Availability を再設定する場合は、代わりにプライマリデータセンターの古いノードを使用できます。

    {% endnote %}

{% data reusables.enterprise_clustering.ssh-to-a-node %}

3. 既存のクラスタ設定をバックアップします。

    ```
    cp /data/user/common/cluster.conf ~/$(date +%Y-%m-%d)-cluster.conf.backup
    ```

4. _/home/admin/cluster-passive.conf_ などの一時的な場所に、既存のクラスタ設定ファイルのコピーを作成します。 IP アドレス (`ipv*`)、UUID (`uuid`)、および WireGuard の公開鍵 (`wireguard-pubkey`) の一意のキー/値ペアを削除します。

    ```
    grep -Ev "(?:|ipv|uuid|vpn|wireguard\-pubkey)" /data/user/common/cluster.conf > ~/cluster-passive.conf
    ```

5. 前のステップでコピーした一時クラスタ設定ファイルから `[cluster]` セクションを削除します。

    ```
    git config -f ~/cluster-passive.conf --remove-section cluster
    ```

6. パッシブノードをプロビジョニングしたセカンダリデータセンターの名前を決定してから、一時クラスタ設定ファイルを新しいデータセンター名で更新します。 `SECONDARY` を選択した名前に置き換えます。

    ```shell
    sed -i 's/datacenter = default/datacenter = <em>SECONDARY</em>/g' ~/cluster-passive.conf
    ```

7. パッシブノードのホスト名のパターンを決定します。

    {% warning %}

    **Warning**: パッシブノードのホスト名は一意であり、対応するアクティブノードのホスト名とは違うものにする必要があります。

    {% endwarning %}

8. ステップ 3 の一時クラスタ設定ファイルをテキストエディタで開きます。 たとえば、Vim を利用できます。

    ```shell
    sudo vim ~/cluster-passive.conf
    ```

9. 一時クラスタ設定ファイル内の各セクションで、ノードの設定を更新します。 {% data reusables.enterprise_clustering.configuration-file-heading %}

    - 上記のステップ 7 で選択したパターンに従って、セクション見出しの引用符で囲まれたホスト名とセクション内の `hostname` の値をパッシブノードのホスト名に変更します。
    - `ipv4` という名前の新しいキーを追加し、その値をパッシブノードの静的 IPv4 アドレスに設定します。
    - 新しいキー/値ペア、`replica = enabled` を追加します。

    ```shell
    [cluster "<em>NEW PASSIVE NODE HOSTNAME</em>"]
      ...
      hostname = <em>NEW PASSIVE NODE HOSTNAME</em>
      ipv4 = <em>NEW PASSIVE NODE IPV4 ADDRESS</em>
      <strong>replica = enabled</strong>
      ...
    ...
    ```

10. ステップ 4 で作成した一時クラスタ設定ファイルの内容をアクティブ設定ファイルに追加します。

    ```shell
    cat ~/cluster-passive.conf >> /data/user/common/cluster.conf
    ```

11. セカンダリデータセンターのプライマリ MySQL ノードと Redis ノードを指定します。 `REPLICA MYSQL PRIMARY HOSTNAME` および `REPLICA REDIS PRIMARY HOSTNAME` を、既存の MySQL と Redis のプライマリと一致するようにプロビジョニングしたパッシブノードのホスト名に置き換えます。

    ```shell
    git config -f /data/user/common/cluster.conf cluster.mysql-master-replica <em>REPLICA MYSQL PRIMARY HOSTNAME</em>
    git config -f /data/user/common/cluster.conf cluster.redis-master-replica <em>REPLICA REDIS PRIMARY HOSTNAME</em>
    ```

12. パッシブレプリカノードにフェイルオーバーするときに MySQL が自動的にフェイルオーバーできるようにします。

    ```shell
    git config -f /data/user/common/cluster.conf cluster.mysql-auto-failover true
    ```

    {% warning %}

    **Warning**: 続行する前に、クラスタ設定ファイルを確認してください。

    - 最上位の `[cluster]` セクションで、`mysql-master-replica` および `redis-master-replica` の値が、フェイルオーバー後に MySQL と Redis のプライマリとして機能するセカンダリデータセンターのパッシブノードの正しいホスト名であることを確認します。
    - `[cluster "<em>ACTIVE NODE HOSTNAME</em>"]` という名前のアクティブノードの各セクションで、次のキー/値ペアを再確認します。
      - `datacenter` は、最上位の[ `[cluster]` セクションの `primary-datacenter` の値と一致する必要があります。
      - `consul-datacenter` は、`datacenter` の値と一致する必要があります。これは、最上位の `[cluster]` セクションの `primary-datacenter` の値と同じである必要があります。
    - アクティブノードごとに、同じロールを持つ** 1 つ**のパッシブノードに対応するセクションが設定に **1 つ**あることを確認します。 パッシブノードの各セクションで、各キー/値ペアを再確認します。
      - `datacenter` は、他のすべてのパッシブノードと一致する必要があります。
      - `consul-datacenter` は、他のすべてのパッシブノードと一致する必要があります。
      - `hostname` は、セクション見出しのホスト名と一致する必要があります。
      - `ipv4` は、ノードの一意の静的 IPv4 アドレスと一致する必要があります。
      - `replica` は `enabled` として設定する必要があります。
    - 必要に応じて、使用されなくなったオフラインノードのセクションを削除してください。

    設定例を確認するには、「[設定例](#example-configuration)」を参照してください。

    {% endwarning %}

13. 新しいクラスタ設定を初期化します。 {% data reusables.enterprise.use-a-multiplexer %}

    ```shell
    ghe-cluster-config-init
    ```

14. 初期化が完了すると、{% data variables.product.prodname_ghe_server %} は次のメッセージを表示します。

    ```shell
    Finished cluster initialization
    ```

{% data reusables.enterprise_clustering.apply-configuration %}

{% data reusables.enterprise_clustering.configuration-finished %}

17. パッシブノードにフェイルオーバーした場合にユーザからの接続を受け入れるロードバランサを設定します。 詳しい情報については、「[クラスタのネットワーク設定](/enterprise/admin/enterprise-management/cluster-network-configuration#configuring-a-load-balancer)」を参照してください。

クラスタ内のノードの High Availability レプリケーションの設定が完了しました。 各アクティブノードは、対応するパッシブノードへの設定とデータの複製を開始します。障害が発生した場合は、トラフィックをセカンダリデータセンターのロードバランサに転送できます。 フェイルオーバーに関する詳しい情報については、「[レプリカクラスタへのフェイルオーバーを開始する](/enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster)」を参照してください。

#### 設定例

最上位の `[cluster]` 設定は、次の例のようになります。

```shell
[cluster]
  mysql-master = <em>HOSTNAME OF ACTIVE MYSQL MASTER</em>
  redis-master = <em>HOSTNAME OF ACTIVE REDIS MASTER</em>
  primary-datacenter = <em>PRIMARY DATACENTER NAME</em>
  mysql-master-replica = <em>HOSTNAME OF PASSIVE MYSQL MASTER</em>
  redis-master-replica = <em>HOSTNAME OF PASSIVE REDIS MASTER</em>
  mysql-auto-failover = true
...
```

クラスタのストレージ層のアクティブノードの設定は、次の例のようになります。

```shell
...
[cluster "<em>UNIQUE ACTIVE NODE HOSTNAME</em>"]
  datacenter = default
  hostname = <em>UNIQUE ACTIVE NODE HOSTNAME</em>
  ipv4 = <em>IPV4 ADDRESS</em>
  consul-datacenter = default
  consul-server = true
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
  vpn = <em>IPV4 ADDRESS SET AUTOMATICALLY</em>
  uuid = <em>UUID SET AUTOMATICALLY</em>
  wireguard-pubkey = <em>PUBLIC KEY SET AUTOMATICALLY</em>
...
```

ストレージ層内の対応するパッシブノードの設定は、次の例のようになります。

- 対応するアクティブノードとの大きな違いは**太字**であることです。
- {% data variables.product.prodname_ghe_server %} は、`vpn`、`uuid`、`wireguard-pubkey` の値を自動的に割り当てるため、初期化するパッシブノードの値を定義しないでください。
- `*-server` キーで定義されたサーバーの役割は、対応するアクティブノードと一致します。

```shell
...
<strong>[cluster "<em>UNIQUE PASSIVE NODE HOSTNAME</em>"]</strong>
  <strong>replica = enabled</strong>
  <strong>ipv4 = <em>IPV4 ADDRESS OF NEW VM WITH IDENTICAL RESOURCES</em></strong>
  <strong>datacenter = <em>SECONDARY DATACENTER NAME</em></strong>
  <strong>hostname = <em>UNIQUE PASSIVE NODE HOSTNAME</em></strong>
  <strong>consul-datacenter = <em>SECONDARY DATACENTER NAME</em></strong>
  consul-server = true
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
  <strong>vpn = <em>DO NOT DEFINE</em></strong>
  <strong>uuid = <em>DO NOT DEFINE</em></strong>
  <strong>wireguard-pubkey = <em>DO NOT DEFINE</em></strong>
...
```

### アクティブクラスターノードとパッシブクラスターノード間のレプリケーションを監視する

クラスタ内のアクティブノードとパッシブノード間の初期レプリケーションには時間がかかります。 時間は、複製するデータの量と {% data variables.product.prodname_ghe_server %} のアクティビティレベルによって異なります。

{% data variables.product.prodname_ghe_server %} 管理シェルから利用できるコマンドラインツールを使用して、クラスタ内の任意のノードの進行状況を監視できます。 管理シェルに関する詳しい情報については「[管理シェル（SSH）にアクセスする](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh)」を参照してください。

- データベースのレプリケーションの監視する:

  ```
  /usr/local/share/enterprise/ghe-cluster-status-mysql
  ```

- リポジトリと Gist データのレプリケーションを監視する:

  ```
  ghe-spokes status
  ```

- 添付ファイルと LFS データのレプリケーションを監視する:

  ```
  ghe-storage replication-status
  ```

- Pages データのレプリケーションを監視する:

  ```
  ghe-dpages replication-status
  ```

`ghe-cluster-status` を使用して、クラスタの全体的な健全性を確認できます。 詳しい情報については、「[コマンドラインユーティリティ](/enterprise/admin/configuration/command-line-utilities#ghe-cluster-status)」を参照してください。

### フェイルオーバー後の High Availability レプリケーションを再設定する

クラスタのアクティブノードからクラスタのパッシブノードにフェイルオーバーした後、2 つの方法で High Availability レプリケーションを再設定できます。

#### 新しいパッシブノードのプロビジョニングと設定

フェイルオーバー後、2 つの方法で High Availability を再設定できます。 選択する方法は、フェイルオーバーした理由と元のアクティブノードの状態によって異なります。

1. セカンダリデータセンターの新しいアクティブノードごとに、パッシブノードの新しいセットをプロビジョニングして設定します。

2. 古いアクティブノードを新しいパッシブノードとして使用します。

High Availability を再設定するプロセスは、High Availability の初期設定と同じです。 詳細については、「[クラスタの High Availability レプリカを作成する](#creating-a-high-availability-replica-for-a-cluster)」を参照してください。


### クラスタの High Availability レプリケーションを無効化する

{% data variables.product.prodname_ghe_server %} のクラスタデプロイメントのパッシブノードへのレプリケーションを停止できます。

{% data reusables.enterprise_clustering.ssh-to-a-node %}

{% data reusables.enterprise_clustering.open-configuration-file %}

3. 最上位の `[cluster]` セクションで、`mysql-auto-failover`、`redis-master-replica`、`mysql-master-replica` のキー/値ペアを削除します。

4. パッシブノードの各セクションを削除します。 パッシブノードの場合、`replica` は `enabled` として設定されます。

{% data reusables.enterprise_clustering.apply-configuration %}

{% data reusables.enterprise_clustering.configuration-finished %}

{% data variables.product.prodname_ghe_server %} がプロンプトに戻ったら、High Availability レプリケーションの無効化が完了したことになります。
