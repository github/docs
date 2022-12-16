---
title: リポジトリのキャッシュについて
intro: リポジトリのキャッシュを使用して、分散チームと CI ファームでの Git 読み取り操作のパフォーマンスを向上させることができます。
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
ms.openlocfilehash: e32df9becd6142f581d45784e4758cf19a8d1af0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108857'
---
{% data reusables.enterprise.repository-caching-release-phase %}

世界中にチームと CI ファームがある場合、{% data variables.product.prodname_ghe_server %} のプライマリ インスタンスのパフォーマンスが低下する可能性があります。 アクティブ geo レプリカを使うと読み取り要求のパフォーマンスが向上しますが、書き込みスループットが制限されます。 プライマリ インスタンスの負荷を軽減し、書き込みスループットのパフォーマンスを向上させるには、これらの地理的に分散したクライアントの近くに配置されたリポジトリの非同期読み取り専用ミラーであるリポジトリ キャッシュを構成できます。 

リポジトリ キャッシュを使うと、CI ファームや分散チームの近くにリポジトリ データが提供されるため、{% data variables.product.product_name %} は、複数のクライアントにサービスを提供するために、同じ Git データを長距離ネットワーク リンク経由で何回も送信する必要がなくなります。 たとえば、プライマリ インスタンスが北米にあり、アジアの多くの場所でもそれを利用している場合は、アジアの CI ランナーが使用するためのリポジトリ キャッシュをアジアに設けるとメリットがあります。

リポジトリ キャッシュは、プライマリ インスタンス (単一インスタンスでも、geo レプリケートされたインスタンスのセットでも) で、Git データの変更をリッスンします。 CI ファームや他の読み取り負荷の高いコンシューマーは、プライマリ インスタンスの代わりにリポジトリ キャッシュからクローンしてフェッチします。 変更は、クライアントごとに 1 回ではなく、キャッシュ インスタンスごとに 1 回ずつ、定期的にネットワーク全体に反映されます。 通常、Git データは、データがプライマリ インスタンスにプッシュされてから数分以内に、リポジトリ キャッシュで使用できるようになります。  {% ifversion ghes > 3.3 %}CI システムは、[`cache_sync` Webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#cache_sync) を使うことで、キャッシュで使用可能になったデータに対応できます。{% endif %}

リポジトリ キャッシュと同期できるようにするリポジトリを、きめ細かく制御できます。 Git データは、ユーザーが指定した場所にのみレプリケートされます。

{% data reusables.enterprise.repository-caching-config-summary %}詳しくは、「[リポジトリ キャッシュを構成する](/admin/enterprise-management/caching-repositories/configuring-a-repository-cache)」をご覧ください。
