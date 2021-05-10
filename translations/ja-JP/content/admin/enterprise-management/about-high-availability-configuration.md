---
title: High Availability設定について
intro: 'High Availability 設定では、完全に冗長なセカンダリの {% data variables.product.prodname_ghe_server %} アプライアンスは、すべての主要なデータストアのレプリケーションによってプライマリアプライアンスとの同期を保ちます。'
redirect_from:
  - /enterprise/admin/installation/about-high-availability-configuration
  - /enterprise/admin/enterprise-management/about-high-availability-configuration
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

High Availability設定をする際には、プライマリからレプリカアプライアンスへのすべてのデータストア（Gitリポジトリ、MySQL、Redis、Elasticsearch）の一方方向の非同期レプリケーションが、自動的にセットアップされます。

{% data variables.product.prodname_ghe_server %} はアクティブ／パッシブ設定をサポートします。この設定では、レプリカアプライアンスはデータベースサービスをレプリケーションモードで実行しながらスタンバイとして実行しますが、アプリケーションサービスは停止します。

{% data reusables.enterprise_installation.replica-limit %}

### ターゲットとなる障害のシナリオ

以下に対する保護として、High Availability設定を使ってください。

{% data reusables.enterprise_installation.ha-and-clustering-failure-scenarios %}

High Availability設定は、以下に対するソリューションとしては適切ではありません。

  - **スケーリング外**。 Geo-replicationを使えば地理的にトラフィックを分散させることができるものの、書き込みのパフォーマンスはプライマリアプライアンスの速度と可用性によって制限されます。 詳細は「[Geo-replication について](/enterprise/{{ currentVersion }}/admin/guides/installation/about-geo-replication/)」を参照してください。
  - **プライマリアプライアンスのバックアップ**。 High Availabilityレプリカは、システム災害復旧計画のオフサイトバックアップを置き換えるものではありません。 データ破壊や損失の中には、プライマリからレプリカへ即座にレプリケーションされてしまうものもあります。 安定した過去の状態への安全なロールバックを保証するには、履歴スナップショットでの定期的なバックアップを行う必要があります。
  - **ダウンタイムゼロのアップグレード**。 コントロールされた昇格のシナリオにおけるデータ損失やスプリットブレインの状況を避けるには、プライマリアプライアンスをメンテナンスモードにして、すべての書き込みが完了するのを待ってからレプリカを昇格させてください。

### ネットワークトラフィックのフェイルオーバー戦略

フェイルオーバーの間は、ネットワークトラフィックをプライマリからレプリカへリダイレクトするよう、別個に設定管理しなければなりません。

#### DNSフェイルオーバー

DNS フェイルオーバーでは、プライマリの {% data variables.product.prodname_ghe_server %} アプライアンスを指す DNS レコードに短い TTL 値を使用します。 60秒から5分の間のTTLを推奨します。

フェイルオーバーの間、プライマリはメンテナンスモードにして、プライマリのDNSレコードはレプリカアプライアンスのIPアドレスへリダイレクトしなければなりません。 トラフィックをプライマリからレプリカへリダイレクトするのに要する時間は、TTLの設定とDNSレコードの更新に必要な時間に依存します。

Geo-replication を使用している場合は、トラフィックを最も近いレプリカに転送するように Geo DNS を設定する必要があります。 詳細は「[Geo-replication について](/enterprise/{{ currentVersion }}/admin/guides/installation/about-geo-replication/)」を参照してください。

#### ロードバランサ

{% data reusables.enterprise_clustering.load_balancer_intro %} {% data reusables.enterprise_clustering.load_balancer_dns %}

フェイルオーバーの間、プライマリアプライアンスはメンテナンスモードにしなければなりません。 ロードバランサは、レプリカがプライマリに昇格したときに自動的に検出するように設定することも、手動での設定変更が必要なようにしておくこともできます。 ユーザからのトラフィックに反応する前に、レプリカはプライマリに手動で昇格させておかなければなりません、 詳細は「[ロードバランサとともに {% data variables.product.prodname_ghe_server %} を使用する](/enterprise/{{ currentVersion }}/admin/guides/installation/using-github-enterprise-server-with-a-load-balancer/)」を参照してください。

{% data reusables.enterprise_installation.monitoring-replicas %}

### レプリケーション管理のユーティリティ

{% data variables.product.prodname_ghe_server %} でレプリケーションを管理するには、SSH を使用してレプリカアプライアンスに接続して以下のコマンドラインユーティリティを使用します。

#### ghe-repl-setup

`ghe-repl-setup` コマンドは、{% data variables.product.prodname_ghe_server %} アプライアンスをレプリカスタンバイモードにします。

 - 2 つのアプライアンス間の通信のために、暗号化された WireGuard VPN トンネルが設定されます。
 - レプリケーションのためのデータベースサービスが設定され、起動されます。
 - アプリケーションサービスは無効化されます。 HTTP、Git、あるいはその他のサポートされているプロトコルでレプリカアプライアンスへアクセスしようとすると、"appliance in replica mode"メンテナンスページあるいはエラーメッセージが返されます。

```shell
admin@169-254-1-2:~$ ghe-repl-setup 169.254.1.1
Verifying ssh connectivity with 169.254.1.1 ...
Connection check succeeded.
Configuring database replication against primary ...
Success: Replica mode is configured against 169.254.1.1.
To disable replica mode and undo these changes, run `ghe-repl-teardown'.
新たに設定されたプライマリに対してレプリケーションを開始するには`ghe-repl-start'を実行してください。
```

#### ghe-repl-start

`ghe-repl-start`コマンドは、すべてのデータストアのアクティブなレプリケーションを有効化します。

```shell
admin@169-254-1-2:~$ ghe-repl-start
Starting MySQL replication ...
Starting Redis replication ...
Starting Elasticsearch replication ...
Starting Pages replication ...
Starting Git replication ...
Success: replication is running for all services.
レプリケーションの健全性と進行状況をモニタリングするには`ghe-repl-status'を使ってください。
```

#### ghe-repl-status

`ghe-repl-status`コマンドは、各データストアのレプリケーションストリームについて`OK`、`WARNING`、`CRITICAL`のいずれかのステータスを返します。 レプリケーションチャンネルのいずれかが`WARNING`ステータスにある場合、このコマンドはコード`1`で終了します。 同様に、いずれかのチャンネルが`CRITICAL`ステータスにある場合、このコマンドはコード`2`で終了します。

```shell
admin@169-254-1-2:~$ ghe-repl-status
OK: mysql replication in sync
OK: redis replication is in sync
OK: elasticsearch cluster is in sync
OK: git data is in sync (10 repos, 2 wikis, 5 gists)
OK: pages data is in sync
```

`-v`及び`-vv`オプションは、各データストアのレプリケーションのステータスについての詳細を返します。

```shell
$ ghe-repl-status -v
OK: mysql replication in sync
  | IO running: Yes, SQL running: Yes, Delay: 0

OK: redis replication is in sync
  | master_host:169.254.1.1
  | master_port:6379
  | master_link_status:up
  | master_last_io_seconds_ago:3
  | master_sync_in_progress:0

OK: elasticsearch cluster is in sync
  | {
  |   "cluster_name" : "github-enterprise",
  |   "status" : "green",
  |   "timed_out" : false,
  |   "number_of_nodes" : 2,
  |   "number_of_data_nodes" : 2,
  |   "active_primary_shards" : 12,
  |   "active_shards" : 24,
  |   "relocating_shards" : 0,
  |   "initializing_shards" : 0,
  |   "unassigned_shards" : 0
  | }

OK: git data is in sync (366 repos, 31 wikis, 851 gists)
  |                   TOTAL         OK      FAULT    PENDING      DELAY
  | repositories        366        366          0          0        0.0
  |        wikis         31         31          0          0        0.0
  |        gists        851        851          0          0        0.0
  |        total       1248       1248          0          0        0.0

OK: pages data is in sync
  | Pages are in sync
```

#### ghe-repl-stop

`ghe-repl-stop`コマンドは、一時的にすべてのデータストアのレプリケーションを無効化し、レプリケーションサービスを停止させます。 レプリケーションを再開するには[ghe-repl-start](#ghe-repl-start)コマンドを使ってください。

```shell
admin@168-254-1-2:~$ ghe-repl-stop
Stopping Pages replication ...
Stopping Git replication ...
Stopping MySQL replication ...
Stopping Redis replication ...
Stopping Elasticsearch replication ...
Success: replication was stopped for all services.
```

#### ghe-repl-promote

`ghe-repl-promote`コマンドはレプリケーションを無効化し、レプリカアプライアンスをプライマリに変換します。 アプライアンスはオリジナルのプライマリと同じ設定がなされ、すべてのサービスが有効化されます。

{% data reusables.enterprise_installation.promoting-a-replica %}

```shell
admin@168-254-1-2:~$ ghe-repl-promote
Enabling maintenance mode on the primary to prevent writes ...
Stopping replication ...
  | Stopping Pages replication ...
  | Stopping Git replication ...
  | Stopping MySQL replication ...
  | Stopping Redis replication ...
  | Stopping Elasticsearch replication ...
  | Success: replication was stopped for all services.
Switching out of replica mode ...
  | Success: Replication configuration has been removed.
  | Run `ghe-repl-setup' to re-enable replica mode.
Applying configuration and starting services ...
Success: Replica has been promoted to primary and is now accepting requests.
```

#### ghe-repl-teardown

`ghe-repl-teardown`コマンドはレプリケーションモードを完全に無効化し、レプリカの設定を削除します。

### 参考リンク

- "[High Availabilityレプリカの作成](/enterprise/{{ currentVersion }}/admin/guides/installation/creating-a-high-availability-replica)"
