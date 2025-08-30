---
title: Configuring high availability replication for a cluster
intro: 'You can configure a replica of your entire {% data variables.product.prodname_ghe_server %} cluster in a separate datacenter, allowing your cluster to fail over to redundant nodes.'
redirect_from:
  - /enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster
  - /admin/enterprise-management/configuring-high-availability-replication-for-a-cluster
  - /admin/monitoring-managing-and-updating-your-instance/configuring-clustering/configuring-high-availability-replication-for-a-cluster
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Configure HA replication
---

## About high availability replication for clusters

You can provide protection against disruption in a datacenter or cloud region by configuring a cluster deployment of {% data variables.product.prodname_ghe_server %} for high availability. In a high availability configuration, an identical set of replica nodes sync with the nodes in your active cluster. If hardware or software failures affect the datacenter with your active cluster, you can manually fail over to the replica nodes and continue processing user requests, minimizing the impact of the outage.

In a high availability configuration, nodes that host data services sync regularly with the replica cluster. Replica nodes run in standby and do not serve applications or process user requests.

We recommend configuring high availability as a part of a comprehensive disaster recovery plan for {% data variables.product.prodname_ghe_server %} clustering. We also recommend performing regular backups. For more information, see [AUTOTITLE](/enterprise/admin/configuration/configuring-backups-on-your-appliance).

## Prerequisites

### Hardware and software

For each existing node in your active cluster, you'll need to provision a second virtual machine with identical hardware resources. For example, if your cluster has 13 nodes and each node has 12 vCPUs, 96 GB of RAM, and 750 GB of attached storage, you must provision 13 new virtual machines that each have 12 vCPUs, 96 GB of RAM, and 750 GB of attached storage.

On each new virtual machine, install the same version of {% data variables.product.prodname_ghe_server %} that runs on the nodes in your active cluster. You don't need to upload a license or perform any additional configuration. For more information, see [AUTOTITLE](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance).

> [!NOTE]
> The nodes that you intend to use for high availability replication should be standalone {% data variables.product.prodname_ghe_server %} instances. Don't initialize the replica nodes as a second cluster.

### Network

You must assign a static IP address to each new node that you provision, and you must configure a load balancer to accept connections and direct them to the nodes in your cluster's front-end tier.

{% data reusables.enterprise_clustering.network-latency %} For more information about network connectivity between nodes in the replica cluster, see [AUTOTITLE](/enterprise/admin/enterprise-management/cluster-network-configuration).

## Creating a high availability replica for a cluster

To create a high availability replica for your cluster, use the `ghe-cluster-repl-bootstrap` utility, then complete the follow-up tasks that the tool details.

{% data reusables.enterprise_clustering.ssh-to-a-node %}
1. To begin configuration of high availability, run the following command. The `-p` and `-s` flags are optional. If you're using the flags, replace PRIMARY-DATACENTER and SECONDARY-DATACENTER with the names of your primary and secondary datacenters.

   > [!NOTE]
   > * By default, the utility will use the name of the primary datacenter in `cluster.conf`.
   > * If no name for the primary datacenter is defined, the utility will use `mona`.
   > * If no name for the secondary datacenter is defined, the utility will use `hubot`.

   ```shell copy
   ghe-cluster-repl-bootstrap -p PRIMARY-DATACENTER -s SECONDARY-DATACENTER
   ```

1. After the utility runs, you will see output with further instructions. To finish the configuration, complete the tasks listed in the output.

## Monitoring replication between active and replica cluster nodes

Initial replication between the active and replica nodes in your cluster takes time. The amount of time depends on the amount of data to replicate and the activity levels for {% data variables.product.prodname_ghe_server %}.

You can monitor the progress on any node in the cluster, using command-line tools available via the {% data variables.product.prodname_ghe_server %} administrative shell. For more information about the administrative shell, see [AUTOTITLE](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh).

To monitor the replication of all services, use the following command.

```shell
ghe-cluster-repl-status
```

You can use `ghe-cluster-status` to review the overall health of your cluster. For more information, see [AUTOTITLE](/enterprise/admin/configuration/command-line-utilities#ghe-cluster-status).

## Reconfiguring high availability replication after a failover

After you fail over from the cluster's active nodes to the cluster's replica nodes, you can reconfigure high availability in one of two ways. The method you choose will depend on the reason that you failed over, and the state of the original active nodes.

* Provision and configure a new set of replica nodes for each of the new active nodes in your secondary datacenter.
* Use the original active nodes as the new replica nodes.

The process for reconfiguring high availability is identical to the initial configuration of high availability. For more information, see [Creating a high availability replica for a cluster](#creating-a-high-availability-replica-for-a-cluster).

If you use the original active nodes, after reconfiguring high availability, you will need to unset maintenance mode on the nodes. For more information, see [AUTOTITLE](/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode#enabling-or-disabling-maintenance-mode-for-all-nodes-in-a-cluster-via-the-cli).

## Disabling high availability replication for a cluster

You can stop replication to the replica nodes for your cluster deployment of {% data variables.product.prodname_ghe_server %} using the `ghe-cluster-repl-teardown` utility. Alternatively, you can manually disable replication.

### Disabling replication using `ghe-cluster-repl-teardown`

{% data reusables.enterprise_clustering.ssh-to-a-node %}
1. To disable replication, run the following command:

   ```shell copy
   ghe-cluster-repl-teardown
   ```

{% data reusables.enterprise_clustering.configuration-finished %}

### Manually disabling replication

{% data reusables.enterprise_clustering.ssh-to-a-node %}
{% data reusables.enterprise_clustering.open-configuration-file %}
1. In the top-level `[cluster]` section, delete the `redis-master-replica`, and `mysql-master-replica` key-value pairs.
1. Delete each section for a replica node. For replica nodes, `replica` is configured as `enabled`.
{% data reusables.enterprise_clustering.apply-configuration %}
{% data reusables.enterprise_clustering.configuration-finished %}
