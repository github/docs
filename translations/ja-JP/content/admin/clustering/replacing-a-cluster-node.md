---
title: クラスタノードの入れ替え
intro: '{{ site.data.variables.product.prodname_ghe_server }} ノードを入れ替えるには、クラスタ設定ファイル (`cluster.conf`) 中で対象となるノードをオフラインとしてマークし、入れ替えるノードを追加しなければなりません。 ノードに障害があった場合、あるいはパフォーマンスを高めるためにリソースの多いノードを追加する場合、この作業が必要になることがあります。'
redirect_from:
  - /enterprise/admin/clustering/replacing-a-cluster-node
versions:
  enterprise-server: '*'
---

{% warning %}

**警告：**衝突を避けるため、入れ替えるノードはそれまでクラスタ中で使われていないホスト名を使わなければなりません。

{% endwarning %}

### 関数ノードの入れ替え
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-provision }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-config-node }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-validate-config }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name }}

### 緊急時のノードの入れ替え
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-provision }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-validate-config }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-config-node }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes }}
