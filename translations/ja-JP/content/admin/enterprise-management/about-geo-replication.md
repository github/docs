---
title: Geo-replicationについて
intro: '{% data variables.product.prodname_ghe_server %} 上の Geo-replication は、地理的に分散したデータセンターからの要求を満たすために、複数のアクティブなレプリカを使用します。'
redirect_from:
  - /enterprise/admin/installation/about-geo-replication
  - /enterprise/admin/enterprise-management/about-geo-replication
versions:
  enterprise-server: '*'
---

アクティブなレプリカが複数あれば、最も近いレプリカへの距離を短くできます。 たとえばサンフランシスコ、ニューヨーク、ロンドンにオフィスを持つ組織は、プライマリのアプライアンスをニューヨークの近くのデータセンター内で動作させ、2つのレプリカをサンフランシスコとロンドンの近くのデータセンターで動作させることができます。 地理的な場所を認識するDNSを利用すれば、ユーザーは利用可能な最も近いサーバへ振り分けられ、リポジトリのデータに高速にアクセスできます。 ニューヨークの近くにあるアプライアンスをプライマリにすれば、ロンドンへのレイテンシが大きいサンフランシスコ近くのアプライアンスをプライマリにする場合に比べ、ホスト間のレイテンシの削減に役立ちます。

アクティブなレプリカは、自身では処理できないリクエストをプライマリインスタンスに中継します。 レプリカは、すべてのSSL接続をターミネートする接続点として機能します。 ホスト間のトラフィックは、暗号化されたVPN接続を通じて送信されます。これは、Geo-replicationなしの2ノードのHigh Availability構成に似ています。

Gitのリクエストや、LFSやファイルアップロードのような特定のファイルサーバのリクエストは、プライマリからデータをロードすることなくレプリカが直接処理できます。 Webリクエストは常にプライマリにルーティングされますが、レプリカがユーザに近ければ、近くでSSLのターミネーションが行われることからリクエストは高速に処理されます。

Geo-replicationがスムーズに動作するためには、[Amazon's Route 53 サービス](http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-geo)のようなGeo DNSが必要です。 インスタンスのホスト名は、ユーザの場所に最も近いレプリカに解決されるべきです。

### 制限事項

レプリカへの書き込みリクエストには、データをプライマリとすべてのレプリカへ送信することが必要です。 This means that the performance of all writes are limited by the slowest replica, although new geo-replicas can seed the majority of their data from existing co-located geo-replicas, rather than from the primary. Geo-replication は、{% data variables.product.prodname_ghe_server %} インスタンスに容量を追加したり、不十分な CPU やメモリリソースに関連するパフォーマンスの問題を解決したりしません。 プライマリのアプライアンスがオフラインである場合、アクティブなレプリカはいかなる読み込みや書き込みのリクエストも処理できません。

### Geo-replication設定のモニタリング

{% data reusables.enterprise_installation.monitoring-replicas %}

### 参考リンク
- "[Geo-replicationレプリカの作成](/enterprise/{{ currentVersion }}/admin/guides/installation/creating-a-high-availability-replica/#creating-geo-replication-replicas)"
