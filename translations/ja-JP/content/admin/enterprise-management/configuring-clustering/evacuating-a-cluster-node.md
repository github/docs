---
title: クラスタノードからの待避
intro: データサービスをクラスタノードから待避させることができます。
redirect_from:
  - /enterprise/admin/clustering/evacuating-a-cluster-node
  - /enterprise/admin/enterprise-management/evacuating-a-cluster-node
  - /admin/enterprise-management/evacuating-a-cluster-node
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
---

## About evacuation of cluster nodes

In a cluster configuration for {% data variables.product.product_name %}, you can evacuate a node before taking the node offline. Evacuation ensures that the remaining nodes in a service tier contain all of the service's data. For example, when you replace the virtual machine for a node in your cluster, you should first evacuate the node.

For more information about nodes and service tiers for {% data variables.product.prodname_ghe_server %}, see "[About cluster nodes](/admin/enterprise-management/configuring-clustering/about-cluster-nodes)."

{% warning %}

**警告**:

- To avoid data loss, {% data variables.product.company_short %} strongly recommends that you evacuate a node before taking the node offline.

- If you only have three nodes in your data services cluster, you can't evacuate the nodes because `ghe-spokes` doesn't have another place to make a copy. ノードが4つ以上ある場合は、`ghe-spokes`によってすべてのリポジトリが待避元のノードから移動されます。

{% endwarning %}

## クラスタノードからの待避

If you plan to take a node offline and the node runs a data service role like `git-server`, `pages-server`, or `storage-server`, evacuate each node before taking the node offline.

{% data reusables.enterprise_clustering.ssh-to-a-node %}
1. To find the UUID of the node to evacuate, run the following command. Replace `HOSTNAME` with the node's hostname.

   ```shell
   $ ghe-config cluster.<em>HOSTNAME</em>.uuid
   ```
1. Monitor the node's status while {% data variables.product.product_name %} copies the data. Don't take the node offline until the copy is complete. To monitor the status of your node, run any of the following commands, replacing `UUID` with the UUID from step 2.

   - **Git**:

     ```shell
     $ ghe-spokes evac-status git-server-<em>UUID</em>
     ```

   - **{% data variables.product.prodname_pages %}**:

     ```shell
     $ echo "select count(*) from pages_replicas where host = 'pages-server-<em>UUID</em>'" | ghe-dbconsole -y
     ```

   - **Storage**:

     ```shell
     $ ghe-storage evacuation-status storage-server-<em>UUID</em>
     ```
1. After the copy is complete, you can evacuate the node by running any of the following commands, replacing `UUID` with the UUID from step 2.

   - **Git**:

     ```shell
     $ ghe-spokes server evacuate git-server-<em>UUID</em> \'<em>REASON FOR EVACUATION</em>\'
     ```

   - **{% data variables.product.prodname_pages %}**:

     ```shell
     $ ghe-dpages evacuate pages-server-<em>UUID</em>
     ```

   - For **storage**, first take the node offline by running the following command.

     ```shell
     $ ghe-storage offline storage-server-<em>UUID</em>
     ```

     After the storage node is offline, you can evacuate the node by running the following command.

     ```shell
     $ ghe-storage evacuate storage-server-<em>UUID</em>
     ```
