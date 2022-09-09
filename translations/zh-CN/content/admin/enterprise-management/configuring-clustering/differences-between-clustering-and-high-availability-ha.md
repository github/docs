---
title: 配置群集与高可用性 (HA) 之间的差异
intro: '{% data variables.product.prodname_ghe_server %} 高可用性配置 (HA) 是一种可提供冗余功能的主设备/辅助设备故障切换配置，而集群则通过在多个节点之间分配读写负载来提供冗余和可扩展性。'
redirect_from:
  - /enterprise/admin/clustering/differences-between-clustering-and-high-availability-ha
  - /enterprise/admin/enterprise-management/differences-between-clustering-and-high-availability-ha
  - /admin/enterprise-management/differences-between-clustering-and-high-availability-ha
versions:
  ghes: '*'
type: reference
topics:
  - Clustering
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Choosing cluster or HA
ms.openlocfilehash: 3a15defe4327b1aeed4f0db22586c75b233b5908
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332486'
---
## 故障场景

高可用性 (HA) 和集群都通过消除作为故障点的单个节点来提供冗余。 它们能够在这些场景中提供可用性：

{% data reusables.enterprise_installation.ha-and-clustering-failure-scenarios %}

## 可伸缩性

{% data reusables.enterprise_clustering.clustering-scalability %} 在 HA 中，设备的规模完全取决于主节点，并且负载不会分发到副本服务器。

## 故障切换方法和配置方面的差异

| 功能     | 故障切换配置     | 故障转移方法 |
| :------------- | :------------- | :--- |
| 高可用性配置       | TTL 较低的 DNS 记录指向主设备或负载均衡器。 | 您必须在 DNS 故障切换和负载均衡器配置中手动升级副本设备。 |
| 群集 | DNS 记录必须指向负载均衡器。 | 如果负载均衡器后面的节点发生故障，流量将自动发送到其他正常运行的节点。 |

## 备份和灾难恢复

HA 或集群都不应被视为常规备份的替代品。 有关详细信息，请参阅“[在设备上配置备份](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance)”。

## 监视

可用性功能，尤其是具有自动故障切换的功能（如集群）可以屏蔽故障，因为在发生故障时通常不会中断服务。 无论您使用的是 HA 还是集群，监视每个实例的状态都十分重要，这样您就可以了解何时发生了故障。 有关监视的详细信息，请参阅“[建议的警报阈值](/enterprise/admin/guides/installation/recommended-alert-thresholds/)”和“[监视群集节点](/enterprise/{{ currentVersion}}/admin/guides/clustering/monitoring-cluster-nodes/)”。

## 延伸阅读
- 有关 {% data variables.product.prodname_ghe_server %} 群集的详细信息，请参阅“[关于群集](/enterprise/{{ currentVersion}}/admin/guides/clustering/about-clustering/)”。
- 有关 HA 的详细信息，请参阅“[为高可用性配置 {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)”。
