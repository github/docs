---
title: 初始化集群
intro: '{% data variables.product.prodname_ghe_server %} 集群必须使用许可进行设置，并使用管理 shell (SSH) 进行初始化。'
redirect_from:
  - /enterprise/admin/clustering/initializing-the-cluster
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_clustering.clustering-requires-https %}

### 安装 {% data variables.product.prodname_ghe_server %}

1. 在每个集群节点上，提供并安装 {% data variables.product.prodname_ghe_server %}。 更多信息请参阅“[设置 {% data variables.product.prodname_ghe_server %} 实例](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-up-a-github-enterprise-server-instance)”。
2. 使用管理 shell 或 DHCP，**仅**配置每个节点的 IP 地址。 不要配置任何其他设置。

### 配置第一个节点

1. 连接到将在 `cluster.conf` 中被指定为 `mysql-master` 的节点。 更多信息请参阅“[关于集群配置文件](/enterprise/{{ currentVersion }}/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file)”。
2. 在 Web 浏览器中，访问 `https://<ip address>:8443/setup/`。
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %}
{% data reusables.enterprise_installation.instance-will-restart-automatically %}

### 初始化集群

要初始化集群，您需要一个集群配置文件 (`cluster.conf`)。 更多信息请参阅“[关于集群配置文件](/enterprise/{{ currentVersion }}/admin/guides/clustering/initializing-the-cluster/#about-the-cluster-configuration-file)”。

1. 从配置的第一个节点开始，运行 `ghe-cluster-config-init`。  如果集群配置文件中存在未配置的节点，此操作会初始化集群。
2. 运行 `ghe-cluster-config-apply`。 这将验证 `cluster.conf` 文件，将配置应用于每个节点文件，并在每个节点上显示已配置的服务。

要检查正在运行的集群的状态，使用 `ghe-cluster-status` 命令。

### 关于集群配置文件

集群配置文件 (`cluster.conf`) 会定义集群中的节点以及它们运行的​​服务。 更多信息请参阅“[关于集群节点](/enterprise/{{ currentVersion }}/admin/guides/clustering/about-cluster-nodes)”。

此示例 `cluster.conf` 定义了一个包含五个节点的集群。

  - 两个节点（称为 `ghe-app-node-\*`）运行负责响应客户端请求的 `web-server` 和 `job-server` 服务。
  - 三个节点（称为 `ghe-data-node-\*`）运行负责存储和检索 {% data variables.product.prodname_ghe_server %} 数据的服务。

节点的名称可以是您选择的任何有效主机名。 名称被设置为每个节点的主机名，并且还将添加到每个节点上的 `/etc/hosts` 中，以便节点可以在本地相互解析。

通过 `mysql-server` 和 `mysql-master` 指定您配置为 MySQL master 的第一个集群节点。

```
[cluster]
  mysql-master = ghe-data-node-1
  redis-master = ghe-data-node-1
  primary-datacenter = default
[cluster "ghe-app-node-1"]
  hostname = ghe-app-node-1
  ipv4 = 192.168.0.2
  # ipv6 = fd12:3456:789a:1::2
  web-server = true
  job-server = true
[cluster "ghe-app-node-2"]
  hostname = ghe-app-node-2
  ipv4 = 192.168.0.3
  # ipv6 = fd12:3456:789a:1::3
  web-server = true
  job-server = true
[cluster "ghe-data-node-1"]
  hostname = ghe-data-node-1
  ipv4 = 192.168.0.4
  # ipv6 = fd12:3456:789a:1::4
  consul-server = true
  consul-datacenter = default
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
[cluster "ghe-data-node-2"]
  hostname = ghe-data-node-2
  ipv4 = 192.168.0.5
  # ipv6 = fd12:3456:789a:1::5
  consul-server = true
  consul-datacenter = default
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
[cluster "ghe-data-node-3"]
  hostname = ghe-data-node-3
  ipv4 = 192.168.0.6
  # ipv6 = fd12:3456:789a:1::6
  consul-server = true
  consul-datacenter = default
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
```

在配置的第一个节点上创建文件 `/data/user/common/cluster.conf`。 例如，使用 `vim`：

   ```shell
   ghe-data-node-1:~$ sudo vim /data/user/common/cluster.conf
   ```
   
