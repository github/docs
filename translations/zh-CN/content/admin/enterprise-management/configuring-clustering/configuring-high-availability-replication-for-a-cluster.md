---
title: 为群集配置高可用性复制
intro: '您可以在不同的位置配置整个 {% data variables.product.prodname_ghe_server %} 群集的被动副本，允许群集故障转移至冗余节点。'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster
  - /admin/enterprise-management/configuring-high-availability-replication-for-a-cluster
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: 配置 HA 复制
---

## 关于集群的高可用性复制

您可以配置 {% data variables.product.prodname_ghe_server %} 的群集部署以实现高可用性，其中一组相同的被动节点与活动群集中的节点同步。 如果硬件或软件故障影响具有活动群集的数据中心，您可以手动故障转移到副本节点，继续处理用户请求，以尽可能减少中断的影响。

在高可用性模式下，每个活动节点定期与相应的被动节点同步。 被动节点在待机状态下运行，不服务于应用程序或处理用户请求。

我们建议配置高可用性，作为 {% data variables.product.prodname_ghe_server %} 全面灾难恢复计划的一部分。 我们还建议进行定期备份。 更多信息请参阅“[在设备上配置备份](/enterprise/admin/configuration/configuring-backups-on-your-appliance)”。

## 基本要求

### 硬件和软件

对于活动群集中的每个现有节点，都需要预配第二个具有相同硬件资源的虚拟机。 例如，如果您的群集有 11 个节点，并且每个节点有 12 个 vCP、96 GB 的 RAM 和 750 GB 的附加存储，则必须预配 11 个新虚拟机，每个虚拟机具有 12 个 vCP、96 GB 的 RAM 和 750 GB 的附加存储。

在每个新虚拟机上，安装活动群集的节点上运行的相同版本 {% data variables.product.prodname_ghe_server %}。 您不需要上传许可证或执行任何其他配置。 更多信息请参阅“[设置 {% data variables.product.prodname_ghe_server %} 实例](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance)”。

{% note %}

**注**：您打算用于高可用性副本的节点应该是独立的 {% data variables.product.prodname_ghe_server %} 实例。 不要将被动节点初始化为第二个群集。

{% endnote %}

### 网络

您必须为预配的每个新节点分配一个静态 IP 地址，并且必须配置负载均衡器以接受连接，并将其引导到群集前端层中的节点。

我们不建议在具有主动群集的网络和具有被动群集的网络之间配置防火墙。 具有主动节点的网络与具有被动节点的网络之间的延迟必须小于 70 毫秒。 有关被动群集中节点之间网络连接的信息，请参阅“[群集网络配置](/enterprise/admin/enterprise-management/cluster-network-configuration)”。

## 为群集创建高可用性副本

- [将主动节点分配到主数据中心](#assigning-active-nodes-to-the-primary-datacenter)
- [将被动节点添加到群集配置文件](#adding-passive-nodes-to-the-cluster-configuration-file)
- [示例配置](#example-configuration)

### 将主动节点分配到主数据中心

在为被动节点定义辅助数据中心之前，请确保将活动节点分配给主数据中心。

{% data reusables.enterprise_clustering.ssh-to-a-node %}

{% data reusables.enterprise_clustering.open-configuration-file %}

3. 记下群集主数据中心的名称。 群集配置文件顶部的 `[cluster]` 部分使用 `primary-datacenter` 键值对定义主数据中心的名称。 默认情况下，群集的主要数据中心名称为 `default`。

    ```shell
    [cluster]
      mysql-master = <em>HOSTNAME</em>
      redis-master = <em>HOSTNAME</em>
      <strong>primary-datacenter = default</strong>
    ```

    - （可选）通过编辑 `primary-datacenter` 的值，将主数据中心的名称更改为更具描述性或更准确的值。

4. {% data reusables.enterprise_clustering.configuration-file-heading %} 在每个节点标题下，添加新的键值对，以将节点分配给数据中心。 使用与上述步骤 3 的 `primary-datacenter` 相同的值。 例如，如果要使用默认名称 (`default`)，请将以下键值对添加到每个节点的部分。

    ```
    datacenter = default
    ```

    完成后，群集配置文件中每个节点的部分应如下所示。 {% data reusables.enterprise_clustering.key-value-pair-order-irrelevant %}

    ```shell
    [cluster "<em>HOSTNAME</em>"]
      <strong>datacenter = default</strong>
      hostname = <em>HOSTNAME</em>
      ipv4 = <em>IP ADDRESS</em>
      ...
    ...
    ```

    {% note %}

    **注**：如果在步骤 3 中更改了主数据中心的名称，请在每个节点的部分找到 `consul-datacenter` 键值对，然后将值更改为重命名的主数据中心。 例如，如果您将主数据中心命名为 `primary`，则对每个节点使用以下键值对。

    ```
    consul-datacenter = primary
    ```

    {% endnote %}

{% data reusables.enterprise_clustering.apply-configuration %}

{% data reusables.enterprise_clustering.configuration-finished %}

在 {% data variables.product.prodname_ghe_server %} 返回提示符，您已完成将节点分配给群集的主数据中心。

### 将被动节点添加到群集配置文件

要配置高可用性，必须为群集中的每个主动节点定义相应的被动节点。 以下说明创建用于定义主动节点和被动节点的新群集配置。 您将：

- 创建主动群集配置文件的副本。
- 编辑副本以定义与主动节点对应的被动节点，添加预配的新虚拟机的 IP 地址。
- 将群集配置的修改副本合并回主动配置。
- 应用新配置以开始复制。

关于示例配置，请参阅“[示例配置](#example-configuration)”。

1. 对于群集中的每个节点，预配规范相同的匹配虚拟机，运行相同版本的 {% data variables.product.prodname_ghe_server %}。 记下每个新群集节点的 IPv4 地址和主机名。 更多信息请参阅“[先决条件](#prerequisites)”。

    {% note %}

    **注**：如果在故障转移后重新配置高可用性，可以改为使用主数据中心的旧节点。

    {% endnote %}

{% data reusables.enterprise_clustering.ssh-to-a-node %}

3. 备份现有群集配置。

    ```
    cp /data/user/common/cluster.conf ~/$(date +%Y-%m-%d)-cluster.conf.backup
    ```

4. 在临时位置创建现有群集配置文件的副本，如 _/home/admin/cluster-passive.conf_。 删除 IP 地址的唯一键值对 (`ipv*`)、UUID (`uuid`) 和 WireGuard 的公钥 (`wireguard-pubkey`)。

    ```
    grep -Ev "(?:|ipv|uuid|vpn|wireguard\-pubkey)" /data/user/common/cluster.conf > ~/cluster-passive.conf
    ```

5. 从上一步复制的临时群集配置文件中删除 `[cluster]` 部分。

    ```
    git config -f ~/cluster-passive.conf --remove-section cluster
    ```

6. 确定在其中预配了被动节点的辅助数据中心的名称，然后使用新的数据中心名称更新临时群集配置文件。 将 `SECONDARY` 替换为您选择的名称。

    ```shell
    sed -i 's/datacenter = default/datacenter = <em>SECONDARY</em>/g' ~/cluster-passive.conf
    ```

7. 确定被动节点主机名的模式。

    {% warning %}

    **警告**：被动节点的主机名必须是唯一的，并且与对应主动节点的主机名不同。

    {% endwarning %}

8. 在文本编辑器中打开步骤 3 中的临时群集配置文件。 例如，您可以使用 Vim。

    ```shell
    sudo vim ~/cluster-passive.conf
    ```

9. 在临时群集配置文件中的每个部分，更新节点的配置。 {% data reusables.enterprise_clustering.configuration-file-heading %}

    - 根据上面步骤 7 中选择的模式，将部分标题中引用的主机名和部分中 `hostname` 的值更改为被动节点的主机名。
    - 新增一个名为 `ipv4` 的密钥，并将值设置为被动节点的静态 IPv4 地址。
    - 新增键值对 `replica = enabled`。

    ```shell
    [cluster "<em>NEW PASSIVE NODE HOSTNAME</em>"]
      ...
      hostname = <em>NEW PASSIVE NODE HOSTNAME</em>
      ipv4 = <em>NEW PASSIVE NODE IPV4 ADDRESS</em>
      <strong>replica = enabled</strong>
      ...
    ...
    ```

10. 将步骤 4 中创建的临时群集配置文件的内容附加到活动的配置文件。

    ```shell
    cat ~/cluster-passive.conf >> /data/user/common/cluster.conf
    ```

11. 在辅助数据中心中指定主 MySQL 和 Redis 节点。 将 `REPLICA MYSQL PRIMARY HOSTNAME` 和 `REPLICA REDIS PRIMARY HOSTNAME` 替换为您预配的被动节点的主机名，以匹配您现有的 MySQL 和 Redis 主节点。

    ```shell
    git config -f /data/user/common/cluster.conf cluster.mysql-master-replica <em>REPLICA MYSQL PRIMARY HOSTNAME</em>
    git config -f /data/user/common/cluster.conf cluster.redis-master-replica <em>REPLICA REDIS PRIMARY HOSTNAME</em>
    ```

    {% warning %}

    **警告**：在继续操作之前查看群集配置文件。

    - 在顶层 `[cluster]` 部分中，确保 `mysql-master-replica` 和 `redis-master-replica` 的值，是辅助数据中心中在故障转移后用作 MySQL 和 Redis 主节点的被动节点的正确主机名。
    - 在名为 `[cluster "<em>ACTIVE NODE HOSTNAME</em>"]` 的主动节点的每个部分中，双击以下键值对。
      - `datacenter` 应匹配顶层 `[cluster]` 部分中 `primary-datacenter` 的值。
      - `consul-datacenter` 应匹配 `datacenter` 的值，应与顶层 `[cluster]` 部分中 `primary-datacenter` 的值相同。
    - 确保对于每个主动节点，配置都有**一个**部分对应**一个**具有相同角色的被动节点。 在被动节点的每个部分中，仔细检查每个键值对。
      - `datacenter` 应匹配所有其他被动节点。
      - `consul-datacenter` 应匹配所有其他被动节点。
      - `hostname` 应匹配部分标题中的主机名。
      - `ipv4` 应匹配节点唯一的静态 IPv4 地址。
      - `replica` 应配置为 `enabled`。
    - 利用机会删除已经不再使用的离线节点的部分。

    要查看示例配置，请参阅“[示例配置](#example-configuration)”。

    {% endwarning %}

13. 初始化新群集配置。 {% data reusables.enterprise.use-a-multiplexer %}

    ```shell
    ghe-cluster-config-init
    ```

14. 初始化完成后，{% data variables.product.prodname_ghe_server %} 将显示以下消息。

    ```shell
    Finished cluster initialization
    ```

{% data reusables.enterprise_clustering.apply-configuration %}

{% data reusables.enterprise_clustering.configuration-finished %}

17. 配置负载均衡器，如果故障转移到被动节点，该均衡器将接受来自用户的连接。 更多信息请参阅“[群集网络配置](/enterprise/admin/enterprise-management/cluster-network-configuration#configuring-a-load-balancer)”。

您已完成为群集中的节点配置高可用性副本。 每个主动节点开始将配置和数据复制到其对应的被动节点，并且您可以在发生故障时将流量直接引导至辅助数据中心的负载均衡器。 有关故障转移的更多信息，请参阅“[发起到副本群集的故障转移](/enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster)”。

### 示例配置

顶级 `[cluster]` 配置应如下所示。

```shell
[cluster]
  mysql-master = <em>HOSTNAME OF ACTIVE MYSQL MASTER</em>
  redis-master = <em>HOSTNAME OF ACTIVE REDIS MASTER</em>
  primary-datacenter = <em>PRIMARY DATACENTER NAME</em>
  mysql-master-replica = <em>HOSTNAME OF PASSIVE MYSQL MASTER</em>
  redis-master-replica = <em>HOSTNAME OF PASSIVE REDIS MASTER</em>
  mysql-auto-failover = false
...
```

群集存储层中主动节点的配置应如下所示。

```shell
...
[cluster "<em>UNIQUE ACTIVE NODE HOSTNAME</em>"]
  datacenter = default
  hostname = <em>UNIQUE ACTIVE NODE HOSTNAME</em>
  ipv4 = <em>IPV4 ADDRESS</em>
  consul-datacenter = default
  consul-server = true
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
  vpn = <em>IPV4 ADDRESS SET AUTOMATICALLY</em>
  uuid = <em>UUID SET AUTOMATICALLY</em>
  wireguard-pubkey = <em>PUBLIC KEY SET AUTOMATICALLY</em>
...
```

存储层中对应的被动节点的配置应如下所示。

- 与对应主动节点的重要差别以**粗体**显示。
- {% data variables.product.prodname_ghe_server %} 为 `vpn`、`uuid` 和 `wireeguard-pubkey` 分配值，因此您不应该定义要初始化的被动节点的值。
- 由 `*-server` 键定义的服务器角色匹配对应的主动节点。

```shell
...
<strong>[cluster "<em>UNIQUE PASSIVE NODE HOSTNAME</em>"]</strong>
  <strong>replica = enabled</strong>
  <strong>ipv4 = <em>IPV4 ADDRESS OF NEW VM WITH IDENTICAL RESOURCES</em></strong>
  <strong>datacenter = <em>SECONDARY DATACENTER NAME</em></strong>
  <strong>hostname = <em>UNIQUE PASSIVE NODE HOSTNAME</em></strong>
  <strong>consul-datacenter = <em>SECONDARY DATACENTER NAME</em></strong>
  consul-server = true
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
  <strong>vpn = <em>DO NOT DEFINE</em></strong>
  <strong>uuid = <em>DO NOT DEFINE</em></strong>
  <strong>wireguard-pubkey = <em>DO NOT DEFINE</em></strong>
...
```

## 监控主动与被动群集节点之间的复制

群集中主动节点与被动节点之间的初始复制需要时间。 时间量取决于要复制的数据量和 {% data variables.product.prodname_ghe_server %} 的活动水平。

您可以通过 {% data variables.product.prodname_ghe_server %} 系统管理 shell 使用命令行工具监控群集中任何节点的进度。 有关系统管理 shell 的更多信息，请参阅“[访问管理 shell (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh)。”

- 监控数据库的复制：

  ```
  /usr/local/share/enterprise/ghe-cluster-status-mysql
  ```

- 监控仓库和 Gist 数据的复制：

  ```
  ghe-spokes status
  ```

- 监控附件和 LFS 数据的复制：

  ```
  ghe-storage replication-status
  ```

- 监控 Pages 数据的复制：

  ```
  ghe-dpages replication-status
  ```

您可以使用 `ghe-cluster-status` 来审查群集的总体健康状况。 更多信息请参阅“[命令行实用程序](/enterprise/admin/configuration/command-line-utilities#ghe-cluster-status)”。

## 故障转移后重新配置高可用性复制

从群集的产动节点故障转移到群集的被动节点后，您可以通过两种方式重新配置高可用性副本。

### 预配和配置新的被动节点

故障转移后，您可以通过两种方式重新配置高可用性。 选择的方法将取决于故障转移的原因以及原始主动节点的状态。

1. 为辅助数据中心中的每个新主动节点预配和配置一组新的被动节点。

2. 将旧的主动节点用作新的被动节点。

重新配置高可用性的过程与高可用性的初始配置相同。 更多信息请参阅“[为群集创建高可用性复制](#creating-a-high-availability-replica-for-a-cluster)”。


## 禁用群集的高可用性复制

您可以停止复制到 {% data variables.product.prodname_ghe_server %} 群集部署的被动节点。

{% data reusables.enterprise_clustering.ssh-to-a-node %}

{% data reusables.enterprise_clustering.open-configuration-file %}

3. 在顶层 `[cluster]` 部分，删除 `redis-master-replica` 和 `mysql-master-replica` 键值对。

4. 删除被动节点的每个部分。 对于被动节点，`replica` 配置为 `enabled`。

{% data reusables.enterprise_clustering.apply-configuration %}

{% data reusables.enterprise_clustering.configuration-finished %}

在 {% data variables.product.prodname_ghe_server %} 返回提示后，您已完成禁用高可用性复制操作。
