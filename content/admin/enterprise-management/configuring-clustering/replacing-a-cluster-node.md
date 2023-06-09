---
title: Replacing a cluster node
intro: 'If a node fails in a {% data variables.product.product_name %} cluster, or if you want to add a new node with more resources, mark any nodes to replace as offline, then add the new node.'
product: '{% data reusables.gated-features.cluster %}'
redirect_from:
  - /enterprise/admin/clustering/replacing-a-cluster-node
  - /enterprise/admin/enterprise-management/replacing-a-cluster-node
  - /admin/enterprise-management/replacing-a-cluster-node
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - Infrastructure
---

## About replacement of {% data variables.product.product_name %} cluster nodes

You can replace a functional node in a {% data variables.product.product_name %} cluster, or you can replace a node that has failed unexpectedly.

{% ifversion cluster-rebalancing %}
After you replace a node, {% data variables.location.product_location %} does not automatically distribute jobs to the new node. You can force your instance to balance jobs across nodes. For more information, see "[AUTOTITLE](/admin/enterprise-management/configuring-clustering/rebalancing-cluster-workloads)."
{% endif %}

{% warning %}

**Warning:** To avoid conflicts, do not reuse a hostname that was previously assigned to a node in the cluster.

{% endwarning %}

## Replacing a functional node

You can replace an existing, functional node in your cluster. For example, you may want to provide a virtual machine (VM) with additional CPU, memory, or storage resources.

To replace a functional node, install the {% data variables.product.product_name %} appliance on a new VM, configure an IP address, add the new node to the cluster configuration file, initialize the cluster and apply the configuration, then take the node you replaced offline.

{% data reusables.enterprise_clustering.replacing-a-cluster-node-provision %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-config-node %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-validate-config %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name %}

## Replacing a node in an emergency

You can replace a failed node in your cluster. For example, a software or hardware issue may affect a node's availability.

To replace a node in an emergency, install the {% data variables.product.product_name %} appliance on a new VM, configure an IP address, take the failed node offline, apply the configuration, add the new node to the cluster configuration file, initialize the cluster and apply the configuration, and optionally, evacuate the failed node.

{% data reusables.enterprise_clustering.replacing-a-cluster-node-provision %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-validate-config %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-config-node %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes %}
