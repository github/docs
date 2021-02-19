---
title: 关于 Geo-replication
intro: '{% data variables.product.prodname_ghe_server %} 上的 Geo-replication 使用多个活动副本满足从异地分布式数据中心发出的请求。'
redirect_from:
  - /enterprise/admin/installation/about-geo-replication
  - /enterprise/admin/enterprise-management/about-geo-replication
versions:
  enterprise-server: '*'
---

多个活动副本可以提供到达最近副本的较短距离。 举例来说，一个在旧金山、纽约和伦敦均设有办事处的组织可以在靠近纽约的数据中心运行主设备，在靠近旧金山和伦敦的数据中心运行两个副本。 利用地理位置感知 DNS，用户可以转到距离最近的可用服务器，并更快地访问仓库数据。 如果将靠近旧金山的设备指定为主设备，则与伦敦的延迟会比较大，相比而言，将靠近纽约的设备指定为主设备有助于减小主机之间的延迟。

活动副本会将自身无法处理的请求委托主实例代为处理。 副本用作终止所有 SSL 连接的入口点。 与没有 Geo-replication 功能的双节点高可用性配置类似，主机之间的流量通过加密 VPN 连接发送。

Git 请求和特定的文件服务器请求（例如 LFS 和文件上传）可直接通过副本完成，无需从主设备加载任何数据。 Web 请求会始终传送到主设备，但在副本距离用户较近的情况下，由于 SSL 端接距离更近，请求速度更快。

为了让 Geo-replication 无缝运行，需要使用 Geo DNS，例如 [Amazon 的 Route 53 服务](http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-geo)。 实例的主机名应解析到距离用户最近的副本。

### 限制

将请求写入副本需要将数据发送到主设备和所有副本。 这意味着所有写入操作的性能都受限于最慢的副本，虽然新的地理副本可以从现有共同位置地理副本（而不是从主设备）播种大部分数据。 Geo-replication 不会增大 {% data variables.product.prodname_ghe_server %} 实例的容量，也不会解决与 CPU 或内存资源不足相关的性能问题。 如果主设备处于脱机状态，则活动副本将无法满足任何读取或写入请求。

### 监视 Geo-replication 配置

{% data reusables.enterprise_installation.monitoring-replicas %}

### 延伸阅读
- “[创建 Geo-replication 副本](/enterprise/{{ currentVersion }}/admin/guides/installation/creating-a-high-availability-replica/#creating-geo-replication-replicas)”
