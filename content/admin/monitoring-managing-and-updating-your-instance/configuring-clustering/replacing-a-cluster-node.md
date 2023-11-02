---
title: Replacing a cluster node
intro: 'If a node fails in a {% data variables.product.product_name %} cluster, or if you want to add a new node with more resources, mark any nodes to replace as offline, then add the new node.'
product: '{% data reusables.gated-features.cluster %}'
redirect_from:
  - /enterprise/admin/clustering/replacing-a-cluster-node
  - /enterprise/admin/enterprise-management/replacing-a-cluster-node
  - /admin/enterprise-management/replacing-a-cluster-node
  - /admin/enterprise-management/configuring-clustering/replacing-a-cluster-node
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

## Replacing the primary MySQL node

To provide database services, your cluster requires a primary MySQL node and at least one secondary MySQL node. For more information, see "[AUTOTITLE](/admin/monitoring-managing-and-updating-your-instance/configuring-clustering/about-cluster-nodes)."

If you want to provide the VM for your primary MySQL node with more resources, or if the node fails, you can replace the node. To minimize downtime, add the new node to your cluster, replicate the MySQL data, and then promote the node. Some downtime is required during promotion.

{% data reusables.enterprise_clustering.replacing-a-cluster-node-provision %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip %}
{% data reusables.enterprise_installation.ssh-into-cluster-node %}
{% data reusables.enterprise_clustering.open-configuration-file %}
1. {% data reusables.enterprise_clustering.configuration-file-heading %} Add a new heading for the node and enter the key-value pairs for configuration, replacing the placeholders with actual values.

   - Ensure that you include the `mysql-server = true` key-value pair.
   - The following section is an example, and your node's configuration may differ.

   <pre>
   ...
   [cluster "HOSTNAME"]
     hostname = HOSTNAME
     ipv4 = IPV4-ADDRESS
     # ipv6 = IPV6-ADDRESS
     consul-datacenter = PRIMARY-DATACENTER
     datacenter = DATACENTER
     <strong>mysql-server = true</strong>
     redis-server = true
     ...
   ...
   </pre>

{% data reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-validate-config %}
1. Wait for MySQL replication to finish. To monitor MySQL replication from any node in the cluster, run `ghe-cluster-status -v`.

   Shortly after adding the node to the cluster, you may see an error for replication status while replication catches up. Replication can take hours depending on the instance's load and the last time the instance generated a database seed.
1. During your scheduled maintenance window, enable maintenance mode. For more information, see "[AUTOTITLE](/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode#enabling-or-disabling-maintenance-mode-for-all-nodes-in-a-cluster-via-the-cli)."
1. Ensure that MySQL replication is finished from any node in the cluster by running `ghe-cluster-status -v`.

   {% warning %}

   **Warning**: If you do not wait for MySQL replication to finish, you risk data loss on your instance.

   {% endwarning %}
1. To set the current MySQL primary node to read-only mode, run the following command from of the instance's nodes.

   ```shell copy
   echo "SET GLOBAL super_read_only = 1;" | sudo mysql
   ```

1. Wait until Global Transaction Identifiers (GTIDs) set on the primary and secondary MySQL nodes are identical. To check the GTIDs, run the following command from any of the instance's nodes.

   ```shell copy
   ghe-cluster-each -r mysql -- 'echo "SELECT @@global.gtid_executed;" | sudo mysql'
   ```

1. After the GTIDs on the primary and secondary MySQL nodes match, update the cluster configuration by opening the cluster configuration file at `/data/user/common/cluster.conf` in a text editor.

   - Create a backup of the `cluster.conf` file before you edit the file.
   - In the top-level `[cluster]` section, remove the hostname for the node you replaced from the `mysql-master` key-value pair, then assign the new node instead. If the new node is also a primary Redis node, adjust the `redis-master` key-value pair.

   <pre>
   [cluster]
     <strong>mysql-master = NEW-NODE-HOSTNAME</strong>
     redis-master = NEW-NODE-HOSTNAME
     primary-datacenter = primary
   ...
   </pre>
{% data reusables.enterprise_clustering.replacing-a-cluster-node-validate-config %}
1. Check the status of MySQL replication from any node in the cluster by running `ghe-cluster-status -v`.
1. If MySQL replication is finished, from any node in the cluster, disable maintenance mode.  For more information, see "[AUTOTITLE](/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode#enabling-or-disabling-maintenance-mode-for-all-nodes-in-a-cluster-via-the-cli)."
