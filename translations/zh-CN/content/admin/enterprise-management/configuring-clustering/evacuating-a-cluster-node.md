---
title: 撤出集群节点
intro: 您可以撤出集群节点上的数据服务。
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

如果数据服务集群中只有三个节点，则无法撤出节点，因为 `ghe-spoke` 没有其他位置可以进行复制。 如果您有四个或更多节点，则 `ghe-spoke ` 会将所有仓库移出已撤出的节点。

如果您正在使具有任何数据服务（如 git、页面或存储）的某个节点离线，请在使节点离线之前撤出每个节点。

1. 用 `ghe-config` 命令查找节点的 `uuid`。

    ```shell
    $ ghe-config cluster.<em>HOSTNAME</em>.uuid
    ```

2. 在复制数据时，您需要监视节点的状态。 理想情况下，在复制完成之前，不应使该节点离线。 要监视节点的状态，请运行以下任意命令：

    对于 Git
    ```
    ghe-spokes evac-status
    ```
    对于 {% data variables.product.prodname_pages %}

    ```shell
    echo "select count(*) from pages_replicas where host = 'pages-server-<em>UUID</em>'" | ghe-dbconsole -y
    ```

    对于存储
    ```
    ghe-storage evacuation-status
    ```

3. 复制完成后，您可以撤出存储服务。 运行以下任意命令：

    对于 Git

    ```shell
    ghe-spokes server evacuate git-server-<em>UUID</em> \'<em>REASON FOR EVACUATION</em>\'
    ```

    对于 {% data variables.product.prodname_pages %}

    ```shell
    ghe-dpages evacuate pages-server-<em>UUID</em>
    ```

    对于存储，请使节点离线

    ```shell
    ghe-storage offline storage-server-<em>UUID</em>
    ```

      然后撤出

    ```shell
    ghe-storage evacuate storage-server-<em>UUID</em>
    ```
