---
title: Evacuating a cluster node
intro: You can evacuate data services on a cluster node.
redirect_from:
  - /enterprise/admin/clustering/evacuating-a-cluster-node
  - /enterprise/admin/enterprise-management/evacuating-a-cluster-node
versions:
  enterprise-server: '*'
topics:
  - enterprise
---

If you only have three nodes in your data services cluster, you can't evacuate the nodes, because `ghe-spokes` doesn’t have another place to make a copy. If you have four or more, `ghe-spokes` will move all the repositories off of the evacuated node.

If you're taking a node offline that has any data services (like git, pages, or storage) evacuate each node before taking the node offline.

1. Find the `uuid` of the node in with the `ghe-config`command.

    ```
    $ ghe-config cluster._hostname_.uuid
    ```

2. You'll need to monitor the status of your node while the data is being copied. Ideally, the node shouldn't be taken offline until the copying is complete. To monitor the status of your node, run any of the following commands:

    For Git
    ```
    ghe-spokes evac-status
    ```
    For {% data variables.product.prodname_pages %}
    {% raw %}
    ```
    echo "select count(*) from pages_replicas where host = 'pages-server-<uuid>'" | ghe-dbconsole -y
    ```
    {% endraw %}
    For storage
    ```
    ghe-storage evacuation-status
    ```

3. After the copying is complete, you can evacuate the storage service. Run any of the following commands:

    For Git
    {% raw %}
    ```
    ghe-spokes server evacuate git-server-<uuid>
    ```
    {% endraw %}
    For {% data variables.product.prodname_pages %}
    {% raw %}
    ```
    ghe-dpages evacuate pages-server-<uuid>
    ```
    {% endraw %}
    For storage, take the node offline
    {% raw %}
    ```
    ghe-storage offline storage-server-<uuid>
    ```
    {% endraw %}
      then evacuate
    {% raw %}
    ```
    ghe-storage evacuate storage-server-<uuid>
    ```
    {% endraw %}
