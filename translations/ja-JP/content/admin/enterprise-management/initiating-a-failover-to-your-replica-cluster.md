---
title: Initiating a failover to your replica cluster
intro: '{% data variables.product.prodname_ghe_server %} クラスタに障害が発生した場合は、パッシブレプリカにフェイルオーバーできます。'
redirect_from:
  - /enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster
versions:
  enterprise-server: '>2.21'
---

### About failover to your replica cluster

In the event of a failure at your primary datacenter, you can fail over to the replica nodes in the secondary datacenter if you configure a passive replica node for each node in your active cluster.

The time required to fail over depends on how long it takes to manually promote the replica cluster and redirect traffic.

Promoting a replica cluster does not automatically set up replication for the existing cluster. After promoting a replica cluster, you can reconfigure replication from the new active cluster. For more information, see "[Configuring high availability for a cluster](/enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster#reconfiguring-high-availability-replication-after-a-failover)."

### 必要な環境

To fail over to passive replica nodes, you must have configured high availability for your cluster. For more information, see "[Configuring high availability for a cluster](/enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster)."

### Initiating a failover to your replica cluster

1. SSH into any passive node in the secondary datacenter for your cluster. 詳しい情報については「[管理シェル（SSH）にアクセスする](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh#enabling-access-to-the-administrative-shell-via-ssh)」を参照してください。

2. Initialize the failover to the secondary cluster and configure it to act as the active nodes.

    ```shell
  ghe-cluster-failover
  ```

{% data reusables.enterprise_clustering.configuration-finished %}

3. Update the DNS record to point to the IP address of the load balancer for your passive cluster. TTL 期間が経過すると、トラフィックはレプリカに転送されます。

{% data variables.product.prodname_ghe_server %} がプロンプトに戻り、DNS 更新が伝播されたら、フェイルオーバーが完了となります。 ユーザは、クラスタの通常のホスト名を使用して {% data variables.product.prodname_ghe_server %} にアクセスできます。
