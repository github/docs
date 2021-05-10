---
title: 创建高可用性副本
intro: 在主动/被动配置中，副本设备是主设备的冗余副本。 如果主设备发生故障，高可用性模式允许副本作为主设备运行，从而最大限度地减少服务中断。
redirect_from:
  - /enterprise/admin/installation/creating-a-high-availability-replica
  - /enterprise/admin/enterprise-management/creating-a-high-availability-replica
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

{% data reusables.enterprise_installation.replica-limit %}

### 创建高可用性副本

1. 在所需平台上设置新的 {% data variables.product.prodname_ghe_server %} 设备。 副本设备应镜像主设备的 CPU、RAM 和存储设置。 建议您在独立环境中安装副本设备。 底层硬件、软件和网络组件应与主设备的相应部分隔离。 如果要使用云提供商，请使用单独的区域或分区。 更多信息请参阅“[设置 {% data variables.product.prodname_ghe_server %} 实例](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-up-a-github-enterprise-server-instance)”。
2. 在浏览器中，导航到新副本设备的 IP 地址并上传您的 {% data variables.product.prodname_enterprise %} 许可。
3. 设置与主设备密码匹配的管理员密码，然后继续。
4. 单击 **Configure as Replica**。 ![包含用于将新实例配置为副本的链接的安装选项](/assets/images/enterprise/management-console/configure-as-replica.png)
5. 在“Add new SSH key”下，输入 SSH 密钥。 ![添加 SSH 密钥](/assets/images/enterprise/management-console/add-ssh-key.png)
6. 单击 **Add key**，然后单击 **Continue**。
6. 使用 SSH 连接到副本设备的 IP 地址。
  ```shell
  $ ssh -p 122 admin@<em>REPLICA IP</em>
  ```
7. 要为副本生成密钥对，请使用包含主设备 IP 地址的 `ghe-repl-setup` 命令，并复制该命令返回的公钥。
  ```shell
  $ ghe-repl-setup <em>PRIMARY IP</em>
  ```
{% data reusables.enterprise_installation.add-ssh-key-to-primary %}
9. 要验证与主设备的连接并为新副本启用副本模式，请再次运行 `ghe-repl-setup`。
  ```shell
  $ ghe-repl-setup <em>PRIMARY IP</em>
  ```
{% data reusables.enterprise_installation.replication-command %}
11. 要验证各个数据存储复制通道的状态，请使用 `ghe-repl-status` 命令。
  ```shell
  $ ghe-repl-status
  ```

### 创建 Geo-replication 副本

此示例配置使用一个主设备和两个副本，它们位于三个不同的地理区域。 由于三个节点可以位于不同网络中，要求所有节点均可从其他所有节点到达。 必需的管理端口至少应向其他所有节点开放。 有关端口要求的更多信息，请参阅“[网络端口](/enterprise/{{ currentVersion }}/admin/guides/installation/network-ports/#administrative-ports)”。

1. 在第一个副本上运行 `ghe-repl-setup`，采用与创建标准双节点配置相同的方式创建第一个副本。
  ```shell
  (replica1)$ ghe-repl-setup <em>PRIMARY IP</em>
  (replica1)$ ghe-repl-start
  ```
2. 创建第二个副本并使用 `ghe-repl-setup --add` 命令。 `--add` 标志可防止其覆盖现有的复制配置，并将新副本添加到配置中。
  ```shell
  (replica2)$ ghe-repl-setup --add <em>PRIMARY IP</em>
  (replica2)$ ghe-repl-start
  ```
3. 默认情况下，副本被配置到同一个数据中心，现在将尝试从同一个数据中心中的现有节点播种。 为数据中心选项设置不同的值，通过这种方式为不同的数据中心配置副本。 可以随意设定特定值，只要数值彼此不同即可。 在每个节点上运行 `ghe-repl-node` 命令并指定数据中心。

  在主设备上：
  ```shell
  (primary)$ ghe-repl-node --datacenter <em>[PRIMARY DC NAME]</em>
  ```
  在第一个副本上：
  ```shell
  (replica1)$ ghe-repl-node --datacenter <em>[FIRST REPLICA DC NAME]</em>
  ```
  在第二个副本上：
  ```shell
  (replica2)$ ghe-repl-node --datacenter <em>[SECOND REPLICA DC NAME]</em>
  ```
  {% tip %}

  **提示：**您可以同时设置 `--datacenter` 和 `--activity` 选项。

  {% endtip %}
4. 活动副本节点将存储设备数据的副本并为最终用户请求提供服务。 非活动节点将存储设备数据的副本，但无法为最终用户请求提供服务。 使用 `--active` 标志启用活动模式，或使用 `--inactive` 标志启用非活动模式。

  在第一个副本上：
  ```shell
  (replica1)$ ghe-repl-node --active
  ```
  在第二个副本上：
  ```shell
  (replica2)$ ghe-repl-node --active
  ```
5. 要应用配置，请在主设备上使用 `ghe-config-apply` 命令。
  ```shell
  (primary)$ ghe-config-apply
  ```

### 为 Geo-replication 配置 DNS

使用主节点和副本节点的 IP 地址配置 Geo DNS。 您还可以为主节点（例如 `primary.github.example.com`）创建 DNS CNAME，以通过 SSH 访问主节点或通过 `backup-utils` 备份主节点。

要进行测试，您可以将条目添加到本地工作站的 `hosts` 文件（如 `/etc/hosts`）。 这些示例条目会将 `HOSTNAME` 的请求解析到 `replica2`。 您可以注释不同的行，以特定主机为目标。

```
# <primary IP>     <em>HOSTNAME</em>
# <replica1 IP>    <em>HOSTNAME</em>
<replica2 IP>    <em>HOSTNAME</em>
```

### 延伸阅读

- "[关于高可用性配置](/enterprise/{{ currentVersion }}/admin/guides/installation/about-high-availability-configuration)"
- "[用于复制管理的实用程序](/enterprise/{{ currentVersion }}/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)"
- “[关于 Geo-replication](/enterprise/{{ currentVersion }}/admin/guides/installation/about-geo-replication/)”
