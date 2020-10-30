---
title: Differences between clustering and high availability (HA)
intro: '{% data variables.product.prodname_ghe_server %} 高可用性配置 (HA) 是一种可提供冗余功能的主设备/辅助设备故障切换配置，而集群则通过在多个节点之间分配读写负载来提供冗余和可扩展性。'
redirect_from:
  - /enterprise/admin/clustering/differences-between-clustering-and-high-availability-ha
  - /enterprise/admin/enterprise-management/differences-between-clustering-and-high-availability-ha
versions:
  enterprise-server: '*'
---

### 故障场景

高可用性 (HA) 和集群都通过消除作为故障点的单个节点来提供冗余。 它们能够在这些场景中提供可用性：

{% data reusables.enterprise_installation.ha-and-clustering-failure-scenarios %}

### 可扩展性

{% data reusables.enterprise_clustering.clustering-scalability %} 在 HA 中，设备的规模完全取决于主节点，并且负载不会分发到副本服务器。

### 故障切换方法和配置方面的差异

| 功能     | 故障切换配置                     | 故障切换方法                              |
|:------ |:-------------------------- |:----------------------------------- |
| 高可用性配置 | TTL 较低的 DNS 记录指向主设备或负载均衡器。 | 您必须在 DNS 故障切换和负载均衡器配置中手动升级副本设备。     |
| 集群     | DNS 记录必须指向负载均衡器。           | 如果负载均衡器后面的节点发生故障，流量将自动发送到其他正常运行的节点。 |

### 备份和灾难恢复

HA 或集群都不应被视为常规备份的替代品。 更多信息请参阅“[在设备上配置备份](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance)”。

### 监视

可用性功能，尤其是具有自动故障切换的功能（如集群）可以屏蔽故障，因为在发生故障时通常不会中断服务。 无论您使用的是 HA 还是集群，监视每个实例的状态都十分重要，这样您就可以了解何时发生了故障。 有关监视的更多信息，请参阅“[建议的警报阈值](/enterprise/{{ currentVersion }}/admin/guides/installation/recommended-alert-thresholds/)”和“[监视集群节点](/enterprise/{{ currentVersion}}/admin/guides/clustering/monitoring-cluster-nodes/)”。

### 延伸阅读
- 有关 {% data variables.product.prodname_ghe_server %} 集群的更多信息，请参阅“[关于集群](/enterprise/{{ currentVersion}}/admin/guides/clustering/about-clustering/)”。
- 有关 HA 的更多信息，请参阅“[配置 {% data variables.product.prodname_ghe_server %} 以实现高可用性](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)”。
