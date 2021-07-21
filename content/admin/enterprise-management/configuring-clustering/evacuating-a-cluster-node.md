---
title: Evacuating a cluster node
intro: You can evacuate data services on a cluster node.
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
If you only have three nodes in your data services cluster, you can't evacuate the nodes, because `ghe-spokes` doesn’t have another place to make a copy. If you have four or more, `ghe-spokes` will move all the repositories off of the evacuated node.

If you're taking a node offline that has any data services (like git, pages, or storage) evacuate each node before taking the node offline.

1. Find the `uuid` of the node in with the `ghe-config`command.

    ```shell
    $ ghe-config cluster.<em>HOSTNAME</em>.uuid
    ```

2. You'll need to monitor the status of your node while the data is being copied. Ideally, the node shouldn't be taken offline until the copying is complete. To monitor the status of your node, run any of the following commands:

    For Git
    ```
    ghe-spokes evac-status
    ```
    For {% data variables.product.prodname_pages %}
  
    ```shell
    echo "select count(*) from pages_replicas where host = 'pages-server-<em>UUID</em>'" | ghe-dbconsole -y
    ```
  
    For storage
    ```
    ghe-storage evacuation-status
    ```

3. After the copying is complete, you can evacuate the storage service. Run any of the following commands:

    For Git

    ```shell
    ghe-spokes server evacuate git-server-<em>UUID</em> \'<em>REASON FOR EVACUATION</em>\'
    ```
   
    For {% data variables.product.prodname_pages %}
    
    ```shell
    ghe-dpages evacuate pages-server-<em>UUID</em>
    ```
    
    For storage, take the node offline
    
    ```shell
    ghe-storage offline storage-server-<em>UUID</em>
    ```
    
      then evacuate
    
    ```shell
    ghe-storage evacuate storage-server-<em>UUID</em>
    ```
