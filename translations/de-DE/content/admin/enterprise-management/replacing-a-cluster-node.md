---
title: Clusterknoten ersetzen
intro: 'Zum Ersetzen eines {{ site.data.variables.product.prodname_ghe_server }}-Knotens müssen Sie die betroffenen Knoten in der Clusterkonfigurationsdatei („cluster.conf“) als offline markieren und die Ersatzknoten hinzufügen. Dies ist ggf. erforderlich, wenn ein Knoten fehlschlägt oder um einen Knoten mit mehr Ressourcen hinzuzufügen, um die Leistung zu erhöhen.'
redirect_from:
  - /enterprise/admin/clustering/replacing-a-cluster-node
  - /enterprise/admin/enterprise-management/replacing-a-cluster-node
versions:
  enterprise-server: '*'
---

{% warning %}

**Warnung:** Zum Vermeiden von Konflikten muss der Ersatzknoten einen Hostnamen verwenden, der noch nicht im Cluster verwendet wurde.

{% endwarning %}

### Funktionierenden Knoten ersetzen
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-provision }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-config-node }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-validate-config }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name }}

### Knoten in einem Notfall ersetzen
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-provision }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-validate-config }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-config-node }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes }}
