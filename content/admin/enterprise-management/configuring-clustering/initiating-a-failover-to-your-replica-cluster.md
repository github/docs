---
title: Initiating a failover to your replica cluster
intro: 'If your {% data variables.product.prodname_ghe_server %} cluster fails, you can fail over to the passive replica .'
redirect_from:
  - /enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster
  - /admin/enterprise-management/initiating-a-failover-to-your-replica-cluster
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Initiate a failover to replica
---
## About failover to your replica cluster

In the event of a failure at your primary datacenter, you can fail over to the replica nodes in the secondary datacenter if you configure a passive replica node for each node in your active cluster.

The time required to fail over depends on how long it takes to manually promote the replica cluster and redirect traffic.

Promoting a replica cluster does not automatically set up replication for the existing cluster. After promoting a replica cluster, you can reconfigure replication from the new active cluster. For more information, see "[Configuring high availability for a cluster](/enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster#reconfiguring-high-availability-replication-after-a-failover)."

## Prerequisites

To fail over to passive replica nodes, you must have configured high availability for your cluster. For more information, see "[Configuring high availability for a cluster](/enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster)."

## Initiating a failover to your replica cluster

1. SSH into any passive node in the secondary datacenter for your cluster. For more information, see "[Accessing the administrative shell (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh#enabling-access-to-the-administrative-shell-via-ssh)."

2. Initialize the failover to the secondary cluster and configure it to act as the active nodes.

    ```shell
  ghe-cluster-failover
  ```

{% data reusables.enterprise_clustering.configuration-finished %}

3. Update the DNS record to point to the IP address of the load balancer for your passive cluster. Traffic is directed to the replica after the TTL period elapses.

After {% data variables.product.prodname_ghe_server %} returns you to the prompt and your DNS updates have propagated, you've finished failing over. Users can access {% data variables.product.prodname_ghe_server %} using the usual hostname for your cluster.
