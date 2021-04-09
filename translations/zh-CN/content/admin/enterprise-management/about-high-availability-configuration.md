---
title: 关于高可用性配置
intro: '在高性能配置中，完全冗余的次级 {% data variables.product.prodname_ghe_server %} 设备通过复制所有主要数据存储与主设备保持同步。'
redirect_from:
  - /enterprise/admin/installation/about-high-availability-configuration
  - /enterprise/admin/enterprise-management/about-high-availability-configuration
versions:
  enterprise-server: '*'
topics:
  - 企业
---

配置高可用性时，会自动设置将所有数据存储（Git 仓库、MySQL、Redis 和 Elasticsearch）单向、异步地从主设备复制到副本。

{% data variables.product.prodname_ghe_server %} 支持主动/被动配置，在这些配置下，副本作为备用设备运行，并且数据库服务在复制模式下运行，但应用程序服务将停止。

{% data reusables.enterprise_installation.replica-limit %}

### 有针对性的故障场景

使用高可用性配置防护以下问题：

{% data reusables.enterprise_installation.ha-and-clustering-failure-scenarios %}

高可用性配置不适用于：

  - **扩展**。 虽然可以使用 Geo-replication 将流量分布在不同地理位置，但写入性能受限于主设备的速度和可用性。 更多信息请参阅“[关于 Geo-replication](/enterprise/{{ currentVersion }}/admin/guides/installation/about-geo-replication/)”。
  - **备份主设备**。 高可用性副本不会替代灾难恢复计划中的非现场备份。 某些形式的数据损坏或数据丢失可能会立即从主设备复制到副本。 为确保安全回滚到稳定的过去状态，必须通过历史快照执行定期备份。
  - **零停机时间升级**。 为避免受控升级场景下出现数据丢失和裂脑的状况，请先将主设备置于维护模式并等待所有写入操作完成，然后再对副本进行升级。

### 网络流量故障转移策略

在故障转移期间，您必须单独配置和管理从主设备到副本的网络流量的重定向。

#### DNS 故障转移

对于 DNS 故障转移，请使用 DNS 记录中指向主 {% data variables.product.prodname_ghe_server %} 设备的短 TTL 值。 建议的 TTL 值范围为 60 秒到 5 分钟。

在故障转移期间，必须将主设备置于维护模式，并将其 DNS 记录重定向到副本的 IP 地址。 将流量从主设备重新定向到副本所需的时间将取决于 TTL 配置以及更新 DNS 记录所需的时间。

如果您要使用 Geo-replication，则必须配置 Geo DNS，将流量定向到距离最近的副本。 更多信息请参阅“[关于 Geo-replication](/enterprise/{{ currentVersion }}/admin/guides/installation/about-geo-replication/)”。

#### 负载均衡器

{% data reusables.enterprise_clustering.load_balancer_intro %} {% data reusables.enterprise_clustering.load_balancer_dns %}

在故障转移期间，您必须将主设备置于维护模式。 您可以将负载均衡器配置为自动检测副本何时已升级为主设备，或者可能需要手动更改配置。 您必须先将副本手动升级为主设备，随后副本才能对用户流量作出响应。 更多信息请参阅“[结合使用 {% data variables.product.prodname_ghe_server %} 和负载均衡器](/enterprise/{{ currentVersion }}/admin/guides/installation/using-github-enterprise-server-with-a-load-balancer/)”。

{% data reusables.enterprise_installation.monitoring-replicas %}

### 用于复制管理的实用程序

要管理 {% data variables.product.prodname_ghe_server %} 上的复制，请使用 SSH 连接到副本，以使用以下命令行实用程序。

#### ghe-repl-setup

`ghe-repl-setup` 命令可将 {% data variables.product.prodname_ghe_server %} 设备置于副本备用模式。

 - 配置加密的 WireGuard VPN 隧道以实现两台设备之间的通信。
 - 配置用于复制的数据库服务并启动。
 - 禁用应用程序服务。 尝试通过 HTTP、Git 或其他受支持协议访问副本将出现“设备处于副本模式”维护页面或显示错误消息。

```shell
admin@169-254-1-2:~$ ghe-repl-setup 169.254.1.1
Verifying ssh connectivity with 169.254.1.1 ...
Connection check succeeded.
Configuring database replication against primary ...
Success: Replica mode is configured against 169.254.1.1.
To disable replica mode and undo these changes, run `ghe-repl-teardown'.
Run `ghe-repl-start' to start replicating against the newly configured primary.
```

#### ghe-repl-start

`ghe-repl-start` 命令可以启用所有数据存储的主动复制。

```shell
admin@169-254-1-2:~$ ghe-repl-start
Starting MySQL replication ...
Starting Redis replication ...
Starting Elasticsearch replication ...
Starting Pages replication ...
Starting Git replication ...
Success: replication is running for all services.
Use `ghe-repl-status' to monitor replication health and progress.
```

#### ghe-repl-status

`ghe-repl-status` 命令可以返回各数据存储复制流的 `OK`、`WARNING` 或 `CRITICAL` 状态。 如果有任何复制通道处于 `WARNING` 状态，命令将停止执行并显示代码 `1`。 同样，如果有任何通道处于 `CRITICAL` 状态，命令将停止执行并显示代码 `2`。

```shell
admin@169-254-1-2:~$ ghe-repl-status
OK: mysql replication in sync
OK: redis replication is in sync
OK: elasticsearch cluster is in sync
OK: git data is in sync (10 repos, 2 wikis, 5 gists)
OK: pages data is in sync
```

`-v` 和 `-vv` 选项可以提供关于各数据存储复制状态的详细信息：

```shell
$ ghe-repl-status -v
OK: mysql replication in sync
  | IO running: Yes, SQL running: Yes, Delay: 0

OK: redis replication is in sync
  | master_host:169.254.1.1
  | master_port:6379
  | master_link_status:up
  | master_last_io_seconds_ago:3
  | master_sync_in_progress:0

OK: elasticsearch cluster is in sync
  | {
  |   "cluster_name" : "github-enterprise",
  |   "status" : "green",
  |   "timed_out" : false,
  |   "number_of_nodes" : 2,
  |   "number_of_data_nodes" : 2,
  |   "active_primary_shards" : 12,
  |   "active_shards" : 24,
  |   "relocating_shards" : 0,
  |   "initializing_shards" : 0,
  |   "unassigned_shards" : 0
  | }

OK: git data is in sync (366 repos, 31 wikis, 851 gists)
  |                   TOTAL         OK      FAULT    PENDING      DELAY
  | repositories        366        366          0          0        0.0
  |        wikis         31         31          0          0        0.0
  |        gists        851        851          0          0        0.0
  |        total       1248       1248          0          0        0.0

OK: pages data is in sync
  | Pages are in sync
```

#### ghe-repl-stop

`ghe-repl-stop` 命令可以暂时禁用所有数据存储的复制并停止复制服务。 要恢复复制，请使用 [ghe-repl-start](#ghe-repl-start) 命令。

```shell
admin@168-254-1-2:~$ ghe-repl-stop
Stopping Pages replication ...
Stopping Git replication ...
Stopping MySQL replication ...
Stopping Redis replication ...
Stopping Elasticsearch replication ...
Success: replication was stopped for all services.
```

#### ghe-repl-promote

`ghe-repl-promote` 命令可以禁用复制并将副本转换为主设备。 设备会配置为使用与原主设备相同的设置，并启用所有服务。

{% data reusables.enterprise_installation.promoting-a-replica %}

```shell
admin@168-254-1-2:~$ ghe-repl-promote
Enabling maintenance mode on the primary to prevent writes ...
Stopping replication ...
  | Stopping Pages replication ...
  | Stopping Git replication ...
  | Stopping MySQL replication ...
  | Stopping Redis replication ...
  | Stopping Elasticsearch replication ...
  | Success: replication was stopped for all services.
Switching out of replica mode ...
  | Success: Replication configuration has been removed.
  | Run `ghe-repl-setup' to re-enable replica mode.
Applying configuration and starting services ...
Success: Replica has been promoted to primary and is now accepting requests.
```

#### ghe-repl-teardown

`ghe-repl-teardown` 命令可以完全禁用复制模式，并移除副本配置。

### 延伸阅读

- “[创建高可用性副本](/enterprise/{{ currentVersion }}/admin/guides/installation/creating-a-high-availability-replica)”
