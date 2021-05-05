---
title: 群集网络配置
intro: '{% data variables.product.prodname_ghe_server %} 集群依靠正确的 DNS 名称解析、负载均衡以及节点之间的通信来正常运行。'
redirect_from:
  - /enterprise/admin/clustering/cluster-network-configuration
  - /enterprise/admin/enterprise-management/cluster-network-configuration
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### 网络考虑因素

对于集群而言，最简单的网络设计是将节点置于单个 LAN 上。 如果群集必须跨子网，我们不建议在网络之间配置任何防火墙规则。 节点之间的延迟应小于 1 毫秒。

{% if currentVersion ver_gt "enterprise-server@2.21" %}为获取高可用性，具有主动节点的网络与具有被动节点的网络之间的延迟必须小于 70 毫秒。 我们不建议在两个网络之间配置防火墙。{% endif %}

#### 最终用户的应用程序端口

应用程序端口为最终用户提供 Web 应用程序和 Git 访问。

| 端口       | 描述                               | 加密                                  |
|:-------- |:-------------------------------- |:----------------------------------- |
| 22/TCP   | 通过 SSH 访问 Git                    | 是                                   |
| 25/TCP   | SMTP                             | 需要 STARTTLS                         |
| 80/TCP   | HTTP                             | 否<br>（启用 SSL 时，此端口重定向到 HTTPS） |
| 443/TCP  | HTTPS                            | 是                                   |
| 9418/TCP | 简单的 Git 协议端口<br>（在私有模式下禁用） | 否                                   |

#### 管理端口

最终用户在使用基本应用程序时不需要管理端口。

| 端口       | 描述                       | 加密                                  |
|:-------- |:------------------------ |:----------------------------------- |
| ICMP     | ICMP Ping                | 否                                   |
| 122/TCP  | 管理 SSH                   | 是                                   |
| 161/UDP  | SNMP                     | 否                                   |
| 8080/TCP | Management Console HTTP  | 否<br>（启用 SSL 时，此端口重定向到 HTTPS） |
| 8443/TCP | Management Console HTTPS | 是                                   |

#### 集群通信端口

如果节点之间存在网络级防火墙，则需要访问这些端口。 节点之间的通信未加密。 这些端口不应从外部访问。

| 端口        | 描述             |
|:--------- |:-------------- |
| 1336/TCP  | 内部 API         |
| 3033/TCP  | 内部 SVN 访问      |
| 3037/TCP  | 内部 SVN 访问      |
| 3306/TCP  | MySQL          |
| 4486/TCP  | 管理者访问          |
| 5115/TCP  | 存储后端           |
| 5208/TCP  | 内部 SVN 访问      |
| 6379/TCP  | Redis          |
| 8001/TCP  | Grafana        |
| 8090/TCP  | 内部 GPG 访问      |
| 8149/TCP  | GitRPC 文件服务器访问 |
| 8300/TCP  | Consul         |
| 8301/TCP  | Consul         |
| 8302/TCP  | Consul         |
| 9000/TCP  | Git Daemon     |
| 9102/TCP  | 页面文件服务器        |
| 9105/TCP  | LFS 服务器        |
| 9200/TCP  | Elasticsearch  |
| 9203/TCP  | 语义代码服务         |
| 9300/TCP  | Elasticsearch  |
| 11211/TCP | Memcache       |
| 161/UDP   | SNMP           |
| 8125/UDP  | Statsd         |
| 8301/UDP  | Consul         |
| 8302/UDP  | Consul         |
| 25827/UDP | Collectd       |

### 配置负载均衡器

 我们建议使用基于 TCP 的外部负载均衡器，它支持 PROXY 协议来跨节点分配流量。 请考虑以下负载均衡器配置：

 - 应将 TCP 端口（如下所示）转发到运行 `web-server` 服务的节点。 这些是提供外部客户端请求的唯一节点。
 - 不应启用粘性会话。

{% data reusables.enterprise_installation.terminating-tls %}

### 处理客户端连接信息

由于客户端与集群的连接来自负载均衡器，因此客户端 IP 地址可能会丢失。 要正确捕获客户端连接信息，需要考虑其他因素。

{% data reusables.enterprise_clustering.proxy_preference %}

{% data reusables.enterprise_clustering.proxy_xff_firewall_warning %}

#### 在 {% data variables.product.prodname_ghe_server %} 上启用 PROXY 支持

我们强烈建议您为实例和负载均衡器启用 PROXY 支持。

 - 对于您的实例，请使用以下命令：
  ```shell
  $ ghe-config 'loadbalancer.proxy-protocol' 'true' && ghe-cluster-config-apply
  ```
  - 对于负载均衡器，请使用供应商提供的说明。

  {% data reusables.enterprise_clustering.proxy_protocol_ports %}

#### 在 {% data variables.product.prodname_ghe_server %} 上启用 X-Forwarded-For 支持

{% data reusables.enterprise_clustering.x-forwarded-for %}

要启用 `X-Fowarded-For` 标头，请使用以下命令：

```shell
$ ghe-config 'loadbalancer.http-forward' 'true' && ghe-cluster-config-apply
```

{% data reusables.enterprise_clustering.without_proxy_protocol_ports %}

#### 配置状态检查
如果预配置的检查在该节点上失败，则状态检查允许负载均衡器停止向未响应的节点发送流量。 如果集群节点出现故障，则与冗余节点配对的状态检查可提供高可用性。

{% data reusables.enterprise_clustering.health_checks %}
{% data reusables.enterprise_site_admin_settings.maintenance-mode-status %}

### DNS 要求

{% data reusables.enterprise_clustering.load_balancer_dns %}
