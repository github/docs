---
title: 关于集群
intro: '{% data variables.product.prodname_ghe_server %} 集群允许组成 {% data variables.product.prodname_ghe_server %} 的服务跨多个节点进行扩展。'
redirect_from:
  - /enterprise/admin/clustering/overview
  - /enterprise/admin/clustering/about-clustering
  - /enterprise/admin/clustering/clustering-overview/
  - /enterprise/admin/enterprise-management/about-clustering
versions:
  enterprise-server: '*'
---

### 集群架构

{% data variables.product.prodname_ghe_server %} 由一组服务组成。 在集群中，这些服务跨多个节点运行，请求在它们之间进行负载均衡。 更改会与冗余副本一起自动存储在到单独的节点上。 大多数服务与相同服务的其他实例是对等的。 这种情况的例外是 `mysql-server` 和 `redis-server` 服务。 它们使用具有一个或多个_副本_节点的单个_主_节点来操作。

详细了解[群集所需的服务](/enterprise/{{ currentVersion }}/admin/enterprise-management/about-cluster-nodes#services-required-for-clustering)。

### 集群是否适合我的组织？

{% data reusables.enterprise_clustering.clustering-scalability %} 但是，设置冗余和可扩展的集群可能很复杂，需要仔细规划。 在安装、灾难恢复场景和升级期间，需要计划这种额外的复杂性。

{% data variables.product.prodname_ghe_server %} 要求节点之间保持较低的延迟，不适用于跨地理位置的冗余。

集群提供了冗余功能，但不适用于替换高可用性配置。 更多信息请参阅[高可用性配置](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-github-enterprise-server-for-high-availability)。 主设备/辅助设备故障切换配置远比集群简单，可以满足许多组织的需求。 更多信息请参阅[集群与高可用性之间的差异](/enterprise/{{ currentVersion }}/admin/guides/clustering/differences-between-clustering-and-high-availability-ha/)。

### 如何获得集群？

集群针对特定扩展情况而设计，并不一定适用于每个组织。 如果想要考虑集群，请联系您的专业代表或 {% data variables.contact.contact_enterprise_sales %}。
