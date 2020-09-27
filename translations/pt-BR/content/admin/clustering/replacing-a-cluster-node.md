---
title: Substituir um nó de cluster
intro: 'Para substituir um nó do {{ site.data.variables.product.prodname_ghe_server }}, você deve marcar os nós afetados offline no arquivo de configuração do cluster (`cluster.conf`) e adicionar os nós de substituição. Fazer isso pode ser necessário em caso de falha de algum nó ou para adicionar nós com mais recursos a fim de melhorar o desempenho.'
redirect_from:
  - /enterprise/admin/clustering/replacing-a-cluster-node
versions:
  enterprise-server: '*'
---

{% warning %}

**Aviso:** para evitar conflitos, o nó de substituição deve usar um nome de host exclusivo no cluster.

{% endwarning %}

### Substituir um nó funcional
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-provision }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-config-node }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-validate-config }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name }}

### Substituir um nó em caso de emergência
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-provision }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-validate-config }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-config-node }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes }}
