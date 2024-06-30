---
title: Initiating a failover to your replica cluster
intro: 'If your {% data variables.product.prodname_ghe_server %} cluster fails, you can fail over to the replica.'
redirect_from:
  - /enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster
  - /admin/enterprise-management/initiating-a-failover-to-your-replica-cluster
versions:
  ghes: '>= 3.9'
type: how_to
topics:
  - Clustering
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Initiate a failover to replica
---

## About failover to your replica cluster

If the data center for your active cluster experiences a failure and you've configured high availability, you can fail over to your replica cluster.

Failing over to your replica cluster promotes it to be your new active cluster, and decouples the new active cluster from the old active cluster. The nodes in your old active cluster are placed in maintenance mode if they are in a healthy enough state for this operation to be performed.

After failover, you will have two standalone clusters without high availability configured. You can reconfigure replication from the new active cluster. For more information, see "[AUTOTITLE](/enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster#reconfiguring-high-availability-replication-after-a-failover)."

## Prerequisites

To fail over to replica nodes, you must have configured high availability replication for your cluster. For more information, see "[AUTOTITLE](/enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster)."

{% data reusables.enterprise_clustering.high-availability-requires-391 %}

## Initiating a failover to your replica cluster

{% ifversion ghes < 3.13 %}{% data reusables.enterprise_clustering.cluster-ip-note %} For more information, see "[AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-cluster-failover)."{% endif %}

1. SSH into the primary MySQL node in the replica cluster. For more information, see "[AUTOTITLE](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh#enabling-access-to-the-administrative-shell-via-ssh)."
1. To begin the failover to the secondary cluster and configure the nodes to respond to requests, run the following command.

   ```shell
   ghe-cluster-failover
   ```

{% data reusables.enterprise_clustering.configuration-finished %}
1. Update the DNS record to point to the IP address of the load balancer for your replica cluster. After the TTL period expires, requests will be directed to the replica cluster.

After {% data variables.product.prodname_ghe_server %} returns you to the prompt and your DNS updates propagate, you've finished failing over. Users can access {% data variables.product.prodname_ghe_server %} using the usual hostname for your cluster.
