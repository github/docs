---
title: Replacing a cluster node
intro: 'To replace a {{ site.data.variables.product.prodname_ghe_server }} node, you must mark the affected nodes offline in the cluster configuration file (`cluster.conf`) and add the replacement nodes. This might be necessary if a node were to fail, or to add a node with more resources to increase performance.'
redirect_from:
  - /enterprise/admin/clustering/replacing-a-cluster-node
  - /enterprise/admin/enterprise-management/replacing-a-cluster-node
  - /enterprise/admin/enterprise-management/replacing-a-cluster-node
versions:
  enterprise-server: '*'
---

{% warning %}

**Warning:** The replacement node must use a hostname that has not been used previously in the cluster to avoid conflicts.

{% endwarning %}

### Replacing a functional node
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-provision }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-config-node }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-validate-config }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name }}

### Replacing a node in an emergency
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-provision }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-validate-config }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-config-node }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes }}
