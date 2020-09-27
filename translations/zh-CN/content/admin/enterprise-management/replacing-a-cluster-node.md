---
title: 替换集群节点
intro: '要替换 {{ site.data.variables.product.prodname_ghe_server }} 节点，必须在集群配置文件 (cluster.conf) 中将受影响的节点标记为离线，然后添加替换节点。 如果节点发生故障，或者添加具有更多资源的节点以提高性能，则可能需要执行此操作。'
redirect_from:
  - /enterprise/admin/clustering/replacing-a-cluster-node
  - /enterprise/admin/enterprise-management/replacing-a-cluster-node
versions:
  enterprise-server: '*'
---

{% warning %}

**警告：**替换节点必须使用先前未在集群中使用的主机名以避免冲突。

{% endwarning %}

### 替换功能节点
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-provision }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-config-node }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-validate-config }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name }}

### 在紧急情况下替换节点
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-provision }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-validate-config }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-config-node }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes }}
