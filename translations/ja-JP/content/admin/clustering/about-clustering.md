---
title: クラスタリングについて
intro: '{% data variables.product.prodname_ghe_server %} クラスタリングを利用することで、{% data variables.product.prodname_ghe_server %} を構成するサービス群を複数のノードにまたがってスケールアウトできるようになります。'
redirect_from:
  - /enterprise/admin/clustering/clustering-overview/
  - /enterprise/admin/clustering/about-clustering
versions:
  enterprise-server: '*'
---

### クラスタリングのアーキテクチャ

{% data variables.product.prodname_ghe_server %}は、一連のサービスから構成されています。 クラスタでは、これらのサービスは複数のノードにまたがって動作し、リクエストはそれらのノード間でロードバランスされます。 変更は、冗長なコピーと共に個別のノードに自動的に保存されます。 ほとんどのサービスは、同じサービスの他のインスタンスと同等のピア群です。 ただし`mysql-server`と`redis-server`サービスは例外です。 これらは1つの_プライマリ_ノードと、1つ以上の_レプリカ_ノード上で動作します。

[クラスタリングに必要なサービス](/enterprise/{{ currentVersion }}/admin/guides/clustering/about-cluster-nodes#services-required-for-clustering)についてさらに学んでください。

### クラスタリングは組織に適切か？

{% data reusables.enterprise_clustering.clustering-scalability %}とはいえ、冗長性のあるスケーラブルなクラスタのセットアップは複雑であり、かつ、注意深い計画が必要です。 この追加の複雑さによって、インストール、システム災害復旧およびアップグレードについて計画することが必要となります。

{% data variables.product.prodname_ghe_server %} ではノード間のレイテンシが低いことが必要であり、地理的に離れた場所にまたがる冗長性を意図したものではありません。

クラスタリングは冗長性を提供しますが、High Availability構成を置き換えることを意図したものではありません。 詳細は「[High Availability 構成](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-github-enterprise-server-for-high-availability)」を参照してください。 プライマリ／セカンダリフェイルオーバー設定はクラスタリングよりもはるかにシンプルであり、多くの組織の要求に応えます。 詳しくは[クラスタリングと高可用性との違い](/enterprise/{{ currentVersion }}/admin/guides/clustering/differences-between-clustering-and-high-availability-ha/)を参照してください。

### クラスタリングを利用するには？

クラスタリングは特定のスケーリングの状況のために設計されており、すべての組織を対象としたものではありません。 If clustering is something you'd like to consider, please contact your dedicated representative or {% data variables.contact.contact_enterprise_sales %}.
