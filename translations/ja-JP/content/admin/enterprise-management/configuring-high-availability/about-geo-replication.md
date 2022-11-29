---
title: Geo-replicationについて
intro: '{% data variables.product.prodname_ghe_server %} 上の Geo-replication は、地理的に分散したデータセンターからの要求を満たすために、複数のアクティブなレプリカを使用します。'
redirect_from:
  - /enterprise/admin/installation/about-geo-replication
  - /enterprise/admin/enterprise-management/about-geo-replication
  - /admin/enterprise-management/about-geo-replication
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - High availability
ms.openlocfilehash: d24b222ee411d6e8d06366dd78da6b0001280c4d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109006'
---
アクティブなレプリカが複数あれば、最も近いレプリカへの距離を短くできます。 たとえばサンフランシスコ、ニューヨーク、ロンドンにオフィスを持つ組織は、プライマリのアプライアンスをニューヨークの近くのデータセンター内で動作させ、2つのレプリカをサンフランシスコとロンドンの近くのデータセンターで動作させることができます。 地理的な場所を認識するDNSを利用すれば、ユーザーは利用可能な最も近いサーバへ振り分けられ、リポジトリのデータに高速にアクセスできます。 ニューヨークの近くにあるアプライアンスをプライマリにすれば、ロンドンへのレイテンシが大きいサンフランシスコ近くのアプライアンスをプライマリにする場合に比べ、ホスト間のレイテンシの削減に役立ちます。

アクティブなレプリカは、自身では処理できないリクエストをプライマリインスタンスに中継します。 レプリカは、すべてのSSL接続をターミネートする接続点として機能します。 ホスト間のトラフィックは、暗号化されたVPN接続を通じて送信されます。これは、Geo-replicationなしの2ノードのHigh Availability構成に似ています。

Git リクエストと、LFS やファイルアップロードなどの特定のファイルサーバーリクエストは、プライマリからデータをロードせずにレプリカから直接処理できます。 Webリクエストは常にプライマリにルーティングされますが、レプリカがユーザに近ければ、近くでSSLのターミネーションが行われることからリクエストは高速に処理されます。

[Amazon の Route 53 サービス](http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-geo)など、Geo DNS は、geo レプリケーションがシームレスに機能するために必要です。 インスタンスのホスト名は、ユーザの場所に最も近いレプリカに解決されるべきです。

## 制限事項

レプリカへの書き込みリクエストには、データをプライマリとすべてのレプリカへ送信することが必要です。 これは、すべての書き込みのパフォーマンスが最も遅いレプリカによって制限されることを意味しますが、新しい Geo-replication レプリカは、プライマリからではなく、既存の同じ場所に配置された Geo-replication レプリカからデータの大部分をシードできます。 書き込みスループットに影響を与えず、分散チームと大規模 CI ファームによって引き起こされる待機時間と帯域幅を減らすには、代わりにリポジトリ キャッシュを構成できます。 詳細については、「[About repository caching](/admin/enterprise-management/caching-repositories/about-repository-caching)」(リポジトリのキャッシュについて) を参照してください。

Geo-replication は、{% data variables.product.prodname_ghe_server %} インスタンスに容量を追加したり、不十分な CPU やメモリリソースに関連するパフォーマンスの問題を解決したりしません。 プライマリのアプライアンスがオフラインである場合、アクティブなレプリカはいかなる読み込みや書き込みのリクエストも処理できません。 

{% data reusables.enterprise_installation.replica-limit %}

## Geo-replication設定のモニタリング

{% data reusables.enterprise_installation.monitoring-replicas %}

## 参考資料
- 「[geo レプリケーションレプリカの作成](/enterprise/admin/guides/installation/creating-a-high-availability-replica/#creating-geo-replication-replicas)」
