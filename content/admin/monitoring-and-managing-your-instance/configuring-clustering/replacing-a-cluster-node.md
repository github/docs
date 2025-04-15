---
title: Replacing a cluster node
intro: 'If a node fails in a {% data variables.product.prodname_ghe_server %} cluster, or if you want to add a new node with more resources, mark any nodes to replace as offline, then add the new node.'
product: '{% data reusables.gated-features.cluster %}'
redirect_from:
  - /enterprise/admin/clustering/replacing-a-cluster-node
  - /enterprise/admin/enterprise-management/replacing-a-cluster-node
  - /admin/enterprise-management/replacing-a-cluster-node
  - /admin/enterprise-management/configuring-clustering/replacing-a-cluster-node
  - /admin/monitoring-managing-and-updating-your-instance/configuring-clustering/replacing-a-cluster-node
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - Infrastructure
---

## About replacement of {% data variables.product.prodname_ghe_server %} cluster nodes

You can replace a functional node in a {% data variables.product.prodname_ghe_server %} cluster, or you can replace a node that has failed unexpectedly.

After you replace a node, {% data variables.location.product_location %} does not automatically distribute jobs to the new node. You can force your instance to balance jobs across nodes. For more information, see [AUTOTITLE](/admin/enterprise-management/configuring-clustering/rebalancing-cluster-workloads).

> [!WARNING]
> To avoid conflicts, do not reuse a hostname that was previously assigned to a node in the cluster.

## Replacing a functional node

You can replace an existing, functional node in your cluster. For example, you may want to provide a virtual machine (VM) with additional CPU, memory, or storage resources.

To replace a functional node, install the {% data variables.product.prodname_ghe_server %} appliance on a new VM, configure an IP address, add the new node to the cluster configuration file, initialize the cluster and apply the configuration, then take the node you replaced offline.

> [!NOTE]
> If you're replacing the primary database node, see [Replacing the primary database node](#replacing-the-primary-database-node-mysql-or-mysql-and-mssql).

{% data reusables.enterprise_clustering.replacing-a-cluster-node-provision %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-config-node %}
{% ifversion cluster-node-removal %}
1. To take the node you're replacing offline, from the primary MySQL node of your cluster, run the following command.

   ```shell
   ghe-remove-node NODE-HOSTNAME
   ```

   This command will evacuate data from any data services running on the node, mark the node as offline in your configuration, and stop traffic being routed to the node. For more information, see [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-remove-node).
{% else %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-validate-config %}
{% endif %}

## Replacing a node in an emergency

You can replace a failed node in your cluster. For example, a software or hardware issue may affect a node's availability.

> [!NOTE]
> If you're replacing the primary database node, see [Replacing the primary database node](#replacing-the-primary-database-node-mysql-or-mysql-and-mssql).

{% ifversion cluster-node-removal %}

To replace a node in an emergency, you'll take the failed node offline, add your replacement node to the cluster, then run commands to remove references to data services on the removed node.

1. To remove the node that is experiencing issues from the cluster, from the primary MySQL node of your cluster, run the following command. Replace NODE-HOSTNAME with the hostname of the node you're taking offline.

   ```shell
   ghe-remove-node --no-evacuate NODE-HOSTNAME
   ```

   This command will mark the node as offline in your configuration and stop traffic being routed to the node. You can run this command in `no-evacuate` mode now because, later in this procedure, you'll run commands that instruct data services on the node to copy any replicas onto the other available nodes in the cluster. For more information, see [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-remove-node).
1. Add your replacement node to the cluster.
   {% data reusables.enterprise_clustering.replacing-a-cluster-node-provision %}
   {% data reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip %}
   1. To add the newly provisioned replacement node, on any node, modify the `cluster.conf` file to add the replacement node. For example, this modified `cluster.conf` file adds the newly provisioned node `ghe-replacement-data-node-3`:

      <pre>
      [cluster "<em>ghe-replacement-data-node-3</em>"]
        hostname = <em>ghe-replacement-data-node-3</em>
        ipv4 = <em>192.168.0.7</em>
        # ipv6 = fd12:3456:789a:1::7
        git-server = true
        pages-server = true
        mysql-server = true
        elasticsearch-server = true
        redis-server = true
        memcache-server = true
        metrics-server = true
        storage-server = true
      </pre>

   {% data reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node %}
   {% data reusables.enterprise_clustering.replacing-a-cluster-node-config-node %}
1. Remove references to data services on the node you removed.
   1. Find the UUID of the node you removed. To find the UUID, run the following command, replacing `HOSTNAME` with the hostname of the node. You will use this UUID in the next step.

      ```shell
      ghe-config cluster.HOSTNAME.uuid
      ```

   1. To remove references to data services, run the following commands. Replace `UUID` with the UUID of the node.

      These commands indicate to each service that the node is permanently removed. The services will recreate any replicas contained within the node on the available nodes within the cluster.

      > [!NOTE]
      > These commands may cause increased load on the server while data is rebalanced across replicas.

      For the `git-server` service (used for repository data):

      ```shell
      ghe-spokesctl server destroy git-server-UUID
      ```

      For the `pages-server` service (used for {% data variables.product.prodname_pages %} site builds):

      ```shell
      ghe-dpages remove pages-server-UUID
      ```

      For the `storage-server` service (used for Git LFS data, avatar images, file attachments, and release archives):

      ```shell
      ghe-storage destroy-host storage-server-UUID --force
      ```

1. Optionally, delete the entry for the removed node in your `cluster.conf` file. Doing so will keep your `cluster.conf` file organized and save time during future `config-apply` runs.
   1. To remove the entry from the file, run the following command, replacing `HOSTNAME` with the hostname of the removed node.

      ```shell
      ghe-config --remove-section "cluster.HOSTNAME"
      ```

   1. To copy the configuration to other nodes in the cluster, from the administrative shell of the node where you modified `cluster.conf`, run `ghe-cluster-config-apply`.

{% else %}

To replace a node in an emergency, install the {% data variables.product.prodname_ghe_server %} appliance on a new VM, configure an IP address, take the failed node offline, apply the configuration, add the new node to the cluster configuration file, initialize the cluster and apply the configuration, and optionally, evacuate the failed node.

{% data reusables.enterprise_clustering.replacing-a-cluster-node-provision %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-validate-config %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-config-node %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes %}

{% endif %}

## Replacing the primary database node (MySQL or MySQL and MSSQL)

To provide database services, your cluster requires a primary MySQL node and at least one replica MySQL node. For more information, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/configuring-clustering/about-cluster-nodes).

If your cluster has {% data variables.product.prodname_actions %} enabled, you will also need to account for MSSQL in the following steps.

If you need to allocate more resources to your primary MySQL (or MySQL and MSSQL) node or replace a failed node, you can add a new node to your cluster. To minimize downtime, add the new node, replicate the MySQL (or MySQL and MSSQL) data, and then promote it to the primary node. Some downtime is required during the promotion process.

{% data reusables.enterprise_clustering.replacing-a-cluster-node-provision %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip %}
{% data reusables.enterprise_installation.ssh-into-cluster-node %}
{% data reusables.enterprise_clustering.open-configuration-file %}
1. {% data reusables.enterprise_clustering.configuration-file-heading %} Add a new heading for the node and enter the key-value pairs for configuration, replacing the placeholders with actual values.

   * Ensure that you include the `mysql-server = true` key-value pair.
   * If {% data variables.product.prodname_actions %} is enabled in the cluster, you will have to include the `mssql-server = true` key-value pair as well.
   * The following section is an example, and your node's configuration may differ.

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
1. From the administrative shell of the node where you modified `cluster.conf`, run `ghe-cluster-config-apply`. The newly added node will become a replica MySQL node and any other configured services will run there.

   > [!NOTE] The previous snippet does not assume {% data variables.product.prodname_actions %} is enabled in the cluster.

1. Wait for MySQL replication to finish. To monitor MySQL replication from any node in the cluster, run `ghe-cluster-status -v`.

   If {% data variables.product.prodname_actions %} is enabled in the cluster, you will have to wait for MSSQL replication to complete.

   Shortly after adding the node to the cluster, you may see an error for replication status while replication catches up. Replication can take hours depending on the instance's load, the amount of database data, and the last time the instance generated a database seed.
1. During your scheduled maintenance window, enable maintenance mode. For more information, see [AUTOTITLE](/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode#enabling-or-disabling-maintenance-mode-for-all-nodes-in-a-cluster-via-the-cli).
1. Ensure that MySQL(or MySQL and MSSQL) replication is finished from any node in the cluster by running `ghe-cluster-status -v`.

   > [!WARNING]
   > If you do not wait for MySQL(or MySQL and MSSQL) replication to finish, you risk data loss on your instance.

1. To set the current MySQL primary node to read-only mode, run the following command from the MySQL primary node.

   ```shell copy
   echo "SET GLOBAL super_read_only = 1;" | sudo mysql
   ```

1. Wait until Global Transaction Identifiers (GTIDs) set on the primary and replica MySQL nodes are identical. To check the GTIDs, run the following command from any cluster node.

   ```shell copy
   ghe-cluster-each -r mysql -- 'echo "SELECT @@global.gtid_executed;" | sudo mysql'
   ```

   * To check that the global MySQL variable was set successfully, run the following command.

   ```shell copy
    echo "SHOW GLOBAL VARIABLES LIKE 'super_read_only';" | sudo mysql
   ```

1. If {% data variables.product.prodname_actions %} is enabled in the cluster, SSH into the node that will become the new primary MSSQL node.

   ```shell copy
   ssh -p 122 admin@NEW_MSSQL_NODE_HOSTNAME
   ```

   * From within a `screen` session run the following command to promote MSSQL to the new node.

   ```shell copy
   /usr/local/share/enterprise/ghe-mssql-repl-promote
   ```

    This will attempt to access the current primary MSSQL node and perform a graceful failover

1. After the GTIDs on the primary and replica MySQL nodes match, update the cluster configuration by opening the cluster configuration file at `/data/user/common/cluster.conf` in a text editor.

   * Create a backup of the `cluster.conf` file before you edit the file.
   * In the top-level `[cluster]` section, remove the hostname for the node you replaced from the `mysql-master` key-value pair, then assign the new node instead. If the new node is also a primary Redis node, adjust the `redis-master` key-value pair.
   * If {% data variables.product.prodname_actions %} is enabled in the cluster, you will have to include the `mssql-server = true` key-value pair as well.

   <pre>
   [cluster]
     <strong>mysql-master = NEW-NODE-HOSTNAME</strong>
     redis-master = NEW-NODE-HOSTNAME
     primary-datacenter = primary
   ...
   </pre>

1. In the administrative shell of the node where you modified `cluster.conf`, start a `screen` session and run `ghe-cluster-config-apply`. This command reconfigures the cluster, promoting the newly added node to the primary MySQL node and converting the original primary MySQL node into a replica.

   > [!NOTE] The previous snippet does not assume {% data variables.product.prodname_actions %} is enabled in the cluster.

1. Check the status of the MySQL(or MySQL and MSSQL) replication from any node in the cluster by running `ghe-cluster-status -v`.
1. If {% data variables.product.prodname_actions %} is enabled in the cluster, run the following command from the new MySQL and MSSQL node.

   ```shell copy
   /usr/local/share/enterprise/ghe-repl-post-failover-mssql
   ```

1. When the MySQL(or MySQL and MSSQL) replication is finished, from any node in the cluster, disable maintenance mode. See [AUTOTITLE](/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode#enabling-or-disabling-maintenance-mode-for-all-nodes-in-a-cluster-via-the-cli).
