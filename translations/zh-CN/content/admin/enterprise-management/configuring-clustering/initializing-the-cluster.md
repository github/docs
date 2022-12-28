---
title: 初始化集群
intro: '{% data variables.product.prodname_ghe_server %} 集群必须使用许可进行设置，并使用管理 shell (SSH) 进行初始化。'
redirect_from:
  - /enterprise/admin/clustering/initializing-the-cluster
  - /enterprise/admin/enterprise-management/initializing-the-cluster
  - /admin/enterprise-management/initializing-the-cluster
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - Enterprise
ms.openlocfilehash: 91394d1d39301f77bc49a87012e04c3d5e9c3b60
ms.sourcegitcommit: ced661bdffebd0f96f6f76db109fbe31983448ba
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167070'
---
{% data reusables.enterprise_clustering.clustering-requires-https %}

## 安装 {% data variables.product.prodname_ghe_server %}

1. 在每个集群节点上，提供并安装 {% data variables.product.prodname_ghe_server %}。 有关详细信息，请参阅“[设置 {% data variables.product.prodname_ghe_server %} 实例](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance)”。
2. 使用管理 shell 或 DHCP，仅配置每个节点的 IP 地址。 不要配置任何其他设置。

## 配置第一个节点

1. 连接到将在 `cluster.conf` 中指定为 MySQL 主要节点的节点。 有关详细信息，请参阅“[关于群集配置文件](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file)”。
2. 在 Web 浏览器中，访问 `https://<ip address>:8443/setup/`。
{% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} {% data reusables.enterprise_installation.instance-will-restart-automatically %}

## 初始化集群

若要初始化群集，需要群集配置文件 (`cluster.conf`)。 有关详细信息，请参阅“[关于群集配置文件](/enterprise/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file)”。

1. 从配置的第一个节点开始，运行 `ghe-cluster-config-init`。  如果集群配置文件中存在未配置的节点，此操作会初始化集群。
2. 运行 `ghe-cluster-config-apply`。 这将验证 `cluster.conf` 文件、将配置应用于每个节点文件，并调出每个节点上已配置的服务。

若要检查正在运行的群集的状态，请使用 `ghe-cluster-status` 命令。

## 关于集群配置文件

群集配置文件 (`cluster.conf`) 会定义群集中的节点及其运行的服务。
有关详细信息，请参阅“[关于群集节点](/enterprise/admin/guides/clustering/about-cluster-nodes)”。

此示例 `cluster.conf` 定义具有 11 个节点的群集。

  - 名为 `ghes-front-end-node-\*` 的两个节点运行负责响应客户端请求的服务。
  - 名为 `ghes-database-node-\*` 的三个节点运行负责存储、检索和复制数据库数据的服务。
  - 名为 `ghes-search-node-\*` 的三个节点运行负责搜索功能的服务。
  - 名为 `ghes-storage-node-\*` 的三个节点运行负责存储、检索和复制数据的服务。

节点的名称可以是您选择的任何有效主机名。 名称被设置为每个节点的主机名，并且还将添加到每个节点上的 `/etc/hosts` 中，以便节点可以在本地相互解析。

通过 `mysql-server` 和 `mysql-master` 指定你配置为 MySQL 主要节点的第一个集群节点。

```ini
[cluster]
  mysql-master = ghes-database-node-1
  redis-master = ghes-database-node-1
  primary-datacenter = primary
[cluster "ghes-front-end-node-1"]
  hostname = ghes-front-end-node-1
  ipv4 = 192.168.0.2
  # ipv6 = fd12:3456:789a:1::2
  consul-datacenter = primary
  datacenter = primary
  web-server = true
  job-server = true
  memcache-server = true
[cluster "ghes-front-end-node-2"]
  hostname = ghes-front-end-node-2
  ipv4 = 192.168.0.3
  # ipv6 = fd12:3456:789a:1::3
  consul-datacenter = primary
  datacenter = primary
  web-server = true
  job-server = true
  memcache-server = true
[cluster "ghes-database-node-1"]
  hostname = ghes-database-node-1
  ipv4 = 192.168.0.4
  # ipv6 = fd12:3456:789a:1::4
  consul-datacenter = primary
  datacenter = primary
  consul-server = true
  mysql-server = true
  redis-server = true
[cluster "ghes-database-node-2"]
  hostname = ghes-database-node-2
  ipv4 = 192.168.0.5
  # ipv6 = fd12:3456:789a:1::5
  consul-datacenter = primary
  datacenter = primary
  consul-server = true
  mysql-server = true
  redis-server = true
[cluster "ghes-database-node-3"]
  hostname = ghes-database-node-3
  ipv4 = 192.168.0.6
  # ipv6 = fd12:3456:789a:1::6
  consul-datacenter = primary
  datacenter = primary
  consul-server = true
  mysql-server = true
  redis-server = true
[cluster "ghes-search-node-1"]
  hostname = ghes-search-node-1
  ipv4 = 192.168.0.7
  # ipv6 = fd12:3456:789a:1::7
  consul-datacenter = primary
  datacenter = primary
  elasticsearch-server = true
[cluster "ghes-search-node-2"]
  hostname = ghes-search-node-2
  ipv4 = 192.168.0.8
  # ipv6 = fd12:3456:789a:1::8
  consul-datacenter = primary
  datacenter = primary
  elasticsearch-server = true
[cluster "ghes-search-node-3"]
  hostname = ghes-search-node-3
  ipv4 = 192.168.0.9
  # ipv6 = fd12:3456:789a:1::9
  consul-datacenter = primary
  datacenter = primary
  elasticsearch-server = true
[cluster "ghes-storage-node-1"]
  hostname = ghes-storage-node-1
  ipv4 = 192.168.0.10
  # ipv6 = fd12:3456:789a:1::10
  consul-datacenter = primary
  datacenter = primary
  git-server = true
  pages-server = true
  storage-server = true
  metrics-server = true
[cluster "ghes-storage-node-2"]
  hostname = ghes-storage-node-2
  ipv4 = 192.168.0.11
  # ipv6 = fd12:3456:789a:1::11
  consul-datacenter = primary
  datacenter = primary
  git-server = true
  pages-server = true
  storage-server = true
  metrics-server = true
[cluster "ghes-storage-node-3"]
  hostname = ghes-storage-node-3
  ipv4 = 192.168.0.12
  # ipv6 = fd12:3456:789a:1::12
  consul-datacenter = primary
  datacenter = primary
  git-server = true
  pages-server = true
  storage-server = true
  metrics-server = true
```

在配置的第一个节点上创建文件 `/data/user/common/cluster.conf`。 例如，使用 `vim`：

   ```shell
   ghe-data-node-1:~$ sudo vim /data/user/common/cluster.conf
   ```
