---
title: 监视集群节点
intro: '{% data variables.product.prodname_ghe_server %} 集群由分布在两个或多个节点上的冗余服务组成。 如果单个服务或整个节点将要发生故障，这种情况不应立即展示给集群的用户。 但是，由于性能和冗余受到影响，因此监视 {% data variables.product.prodname_ghe_server %} 集群的状态非常重要。'
redirect_from:
  - /enterprise/admin/clustering/monitoring-cluster-nodes
  - /enterprise/admin/enterprise-management/monitoring-cluster-nodes
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### 手动检查集群状态

{% data variables.product.prodname_ghe_server %} 有一个内置的命令行实用程序，用于监视集群的状态。 在管理 shell 中，运行 `ghe-cluster-status` 命令会对每个节点执行一系列状态检查，包括验证连接和服务状态。 输出会显示所有测试结果，包括文本 `ok` 或 `error`。 例如，要仅显示失败的测试，请运行：

```shell
admin@ghe-data-node-0:~$ <em>ghe-cluster-status | grep error</em>
> mysql-replication ghe-data-node-0: error Stopped
> mysql cluster: error
```
{% note %}

**注：**如果没有失败的测试，则此命令不会产生任何输出。 这表明集群的状态是健康的。

{% endnote %}

### 使用 Nagios 监视集群状态

您可以配置 [Nagios](https://www.nagios.org/) 来监视 {% data variables.product.prodname_ghe_server %}。 除了监视每个集群节点的基本连接以外，还可以通过将 Nagios 配置为使用 `ghe-cluster-status -n` 命令来检查集群状态。 这将以 Nagios 理解的格式返回输出。

#### 基本要求
* 运行 Nagios 的 Linux 主机。
* 对 {% data variables.product.prodname_ghe_server %} 集群的网络访问。

#### 配置 Nagios 主机
1. 使用空白密码生成 SSH 密钥。 Nagios 使用此密钥来对 {% data variables.product.prodname_ghe_server %} 集群进行身份验证。
  ```shell
  nagiosuser@nagios:~$ <em>ssh-keygen -t ed25519</em>
  > Generating public/private ed25519 key pair.
  > Enter file in which to save the key (/home/nagiosuser/.ssh/id_ed25519):
  > Enter passphrase (empty for no passphrase): <em>leave blank by pressing enter</em>
  > Enter same passphrase again: <em>press enter again</em>
  > Your identification has been saved in /home/nagiosuser/.ssh/id_ed25519.
  > Your public key has been saved in /home/nagiosuser/.ssh/id_ed25519.pub.
  ```
  {% danger %}

  **安全警告：**如果授权完全访问主机，则没有密码的 SSH 密钥可能会构成安全风险。 将此密钥的授权限制为单个只读命令。

  {% enddanger %}
  {% note %}

  **注：**如果您使用的是不支持 Ed25519 算法的 Linux 发行版，请使用以下命令：
  ```shell
  nagiosuser@nagios:~$ ssh-keygen -t rsa -b 4096
  ```

  {% endnote %}
2. 将私钥 (`id_ed25519`) 复制到 `nagios` 主文件夹并设置适当的所有权。
  ```shell
  nagiosuser@nagios:~$ <em>sudo cp .ssh/id_ed25519 /var/lib/nagios/.ssh/</em>
  nagiosuser@nagios:~$ <em>sudo chown nagios:nagios /var/lib/nagios/.ssh/id_ed25519</em>
  ```

3. 要授权公钥*仅*运行 `ghe-cluster-status -n` 命令，请在 `/data/user/common/authorized_keys` 文件中使用 `command=` 前缀。 从任何节点上的管理 shell，修改此文件以添加在步骤 1 中生成的公钥。 例如：`command="/usr/local/bin/ghe-cluster-status -n" ssh-ed25519 AAAA....`

4. 通过在修改了 `/data/user/common/authorized_keys` 文件的节点上运行 `ghe-cluster-config-apply`，验证配置并将其复制到集群中的每个节点。

  ```shell
  admin@ghe-data-node-0:~$ <em>ghe-cluster-config-apply</em>
  > Validating configuration
  > ...
  > Finished cluster configuration
  ```

5. 要测试 Nagios 插件能否成功执行命令，请从 Nagios 主机以交互方式运行此命令。
  ```shell
  nagiosuser@nagios:~$ /usr/lib/nagios/plugins/check_by_ssh -l admin -p 122 -H <em>hostname</em> -C "ghe-cluster-status -n" -t 30
  > OK - No errors detected
  ```

6. 在 Nagios 配置中创建命令定义。

  ###### 示例定义

  ```
  define command {
        command_name    check_ssh_ghe_cluster
        command_line    $USER1$/check_by_ssh -H $HOSTADDRESS$ -C "ghe-cluster-status -n" -l admin -p 122 -t 30
  }
  ```
7. 将此命令添加到 {% data variables.product.prodname_ghe_server %} 集群中节点的服务定义。


  ###### 示例定义

  ```
  define host{
        use                     generic-host
        host_name               ghe-data-node-0
        alias                   ghe-data-node-0
        address                 10.11.17.180
        }

  define service{
          use                             generic-service
          host_name                       ghe-data-node-0
          service_description             GitHub Cluster Status
          check_command                   check_ssh_ghe_cluster
          }
  ```

将定义添加到 Nagios 后，将根据您的配置执行服务检查。 您应该能够在 Nagios Web 界面中看到新配置的服务。

![Nagios 示例](/assets/images/enterprise/cluster/nagios-example.png)
