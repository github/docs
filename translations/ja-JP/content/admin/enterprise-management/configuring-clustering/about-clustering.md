---
title: クラスタリングについて
intro: '{% data variables.product.prodname_ghe_server %} クラスタリングを利用することで、{% data variables.product.prodname_ghe_server %} を構成するサービス群を複数のノードにまたがってスケールアウトできるようになります。'
redirect_from:
  - /enterprise/admin/clustering/overview
  - /enterprise/admin/clustering/about-clustering
  - /enterprise/admin/clustering/clustering-overview
  - /enterprise/admin/enterprise-management/about-clustering
  - /admin/enterprise-management/about-clustering
versions:
  ghes: '*'
type: overview
topics:
  - Clustering
  - Enterprise
ms.openlocfilehash: 5da017898f1f0e205685dcf1fc29b5088030421a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332481'
---
## クラスタリングのアーキテクチャ

{% data variables.product.prodname_ghe_server %}は、一連のサービスから構成されています。 クラスタでは、これらのサービスは複数のノードにまたがって動作し、リクエストはそれらのノード間でロードバランスされます。 変更は、冗長なコピーと共に個別のノードに自動的に保存されます。 ほとんどのサービスは、同じサービスの他のインスタンスと同等のピア群です。 ただし、`mysql-server` と `redis-server` のサービスは例外です。 これらは、1 つ以上の _レプリカ_ ノードを持つ 1 つの _プライマリ_ ノードで動作します。

詳細については、[クラスタリングに必要なサービス](/enterprise/admin/enterprise-management/about-cluster-nodes#services-required-for-clustering)に関するページを参照してください。

## クラスタリングは組織に適切か？

{% data reusables.enterprise_clustering.clustering-scalability %}とはいえ、冗長性のあるスケーラブルなクラスタのセットアップは複雑であり、かつ、注意深い計画が必要です。 この追加の複雑さによって、インストール、システム災害復旧およびアップグレードについて計画することが必要となります。

{% data variables.product.prodname_ghe_server %} ではノード間のレイテンシが低いことが必要であり、地理的に離れた場所にまたがる冗長性を意図したものではありません。

クラスタリングは冗長性を提供しますが、High Availability構成を置き換えることを意図したものではありません。 詳細については、「[高可用性の構成](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability)」を参照してください。 プライマリ／セカンダリフェイルオーバー設定はクラスタリングよりもはるかにシンプルであり、多くの組織の要求に応えます。 詳細については、「[クラスタリングと高可用性の違い](/enterprise/admin/guides/clustering/differences-between-clustering-and-high-availability-ha/)」を参照してください。

{% data reusables.package_registry.packages-cluster-support %}

## クラスタリングを利用するには？

クラスタリングは特定のスケーリングの状況のために設計されており、すべての組織を対象としたものではありません。 クラスタリングをご検討される場合は、専任の担当者または {% data variables.contact.contact_enterprise_sales %} にお問い合わせください。
