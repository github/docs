---
title: Evacuating a cluster node running data services
shortTitle: Evacuating a data node
intro: 'If a node in your {% data variables.product.prodname_ghe_server %} cluster runs services that store distributed data, you can ensure redundancy as you prepare to replace the node by evacuating the node''s data.'
product: '{% data reusables.gated-features.cluster %}'
redirect_from:
  - /enterprise/admin/clustering/evacuating-a-cluster-node
  - /enterprise/admin/enterprise-management/evacuating-a-cluster-node
  - /admin/enterprise-management/evacuating-a-cluster-node
  - /admin/enterprise-management/configuring-clustering/evacuating-a-cluster-node
  - /admin/enterprise-management/configuring-clustering/evacuating-a-cluster-node-running-data-services
  - /admin/monitoring-managing-and-updating-your-instance/configuring-clustering/evacuating-a-cluster-node-running-data-services
versions:
  ghes: <=3.11
type: how_to
topics:
  - Clustering
  - Enterprise
---

## About evacuation of cluster nodes running data services

In a cluster configuration for {% data variables.product.prodname_ghe_server %}, you may need to take an individual node offline. For example, you may need to replace the node's virtual machine (VM). If the node you want to replace operates in the storage tier, {% data variables.product.company_short %} recommends that you first evacuate the node's data services. Evacuation ensures that the remaining nodes contain the minimum expected copies of the data.

For more information about nodes and service tiers for {% data variables.product.prodname_ghe_server %}, see [AUTOTITLE](/admin/enterprise-management/configuring-clustering/about-cluster-nodes).

> [!WARNING]
> * To avoid data loss during replacement of a node, {% data variables.product.company_short %} strongly recommends evacuation of the applicable data services on the node before you take the node offline.
> * To ensure redundancy for any data service on your cluster, copies of data should exist on at least three nodes. For example, when four or more nodes store Git data, during evacuation, evacuated repository data will move from the node you're evacuating to the other three nodes. If you only have three nodes that store data for a service, evacuation of one node could fail and result in under-replicated data.

## Evacuating a cluster node running data services

If you plan to take a node offline and the node runs any of the following roles, evacuate each applicable service before taking the node offline.

| Service | Data |
| :- | :- |
| `git-server` | Repositories |
| `pages-server` | Site builds for {% data variables.product.prodname_pages %} |
| `storage-server` | <ul><li>Data stored in repositories using {% data variables.large_files.product_name_long %}</li><li>Avatar images</li><li>File attachments from comments in the web UI</li><li>Release archives</li></ul> |

{% data reusables.enterprise_clustering.ssh-to-a-node %}
1. To find the UUID of the node to evacuate, run the following command. Replace HOSTNAME with the node's hostname. You'll use the UUID in subsequent commands.

   ```shell
   ghe-config cluster.HOSTNAME.uuid
   ```

1. For each applicable service on the node, to determine the initial data counts, run the following commands. For each command, replace UUID with the UUID from the previous step.

   * `git-server`:

     * Command:

       ```shell
       ghe-spokesctl server status git-server-UUID
       ```

     * Relevant output: `NETWORKS`, `GISTS`

   * `pages-server`:

     * Command:

       ```shell
       echo "select count(*) from pages_replicas where host = 'pages-server-UUID'" | ghe-dbconsole -y
       ```

   * `storage-server`:

     * Command:

       ```shell
       ghe-storage evacuation-status storage-server-UUID
       ```

     * Relevant output: `Remaining item(s)`

1. To evacuate an applicable service on the node, run the following commands. For each command, replace UUID with the UUID from the earlier step.

   * `git-server`:

     * Command (replace REASON FOR EVACUATION with the reason for evacuation):

       ```shell
       ghe-spokesctl server set evacuating git-server-UUID 'REASON FOR EVACUATION'
       ```

   * `pages-server`:

     * Command:

       ```shell
       ghe-dpages evacuate pages-server-UUID
       ```

   * `storage-server`:

     1. Take the node's service offline by running the following command.

        ```shell
        ghe-storage offline storage-server-UUID
        ```

     1. Evacuate the node by running the following command.

        ```shell
        ghe-storage evacuate storage-server-UUID
        ```

1. To monitor evacuation of a service while {% data variables.product.prodname_ghe_server %} copies the data, run the following commands. For each command, replace UUID with the UUID from the earlier step.

   > [!WARNING]
   > Do not shut down the node until evacuation is complete. Evacuation is complete when the data counts reach zero, which means that all data is safely stored on other nodes.

   * `git-server`:

     ```shell
     ghe-spokesctl server evac-status git-server-UUID
     ```

   * `pages-server`:

     ```shell
     echo "select count(*) from pages_replicas where host = 'pages-server-UUID'" | ghe-dbconsole -y
     ```

   * `storage-server`:

      ```shell
      ghe-storage evacuation-status storage-server-UUID
      ```

1. After evacuation completes for the service, shut down the node.
