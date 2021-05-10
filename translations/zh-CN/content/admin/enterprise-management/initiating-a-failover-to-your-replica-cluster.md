---
title: 发起到副本群集的故障转移
intro: '如果 {% data variables.product.prodname_ghe_server %} 群集失败，可以故障转移到被动副本 。'
redirect_from:
  - /enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster
versions:
  enterprise-server: '>2.21'
topics:
  - Enterprise
---

### 关于到副本群集的故障转移

如果为主动群集中的每个节点配置被动副本节点，当主数据中心发生故障时可以故障转移到辅助数据中心的副本节点。

故障转移所需的时间取决于手动升级副本群集和重定向流量所需的时长。

升级副本群集不会自动为现有群集创建副本。 升级副本群集后，可以重新配置新的主动群集复制。 更多信息请参阅“[为群集配置高可用性](/enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster#reconfiguring-high-availability-replication-after-a-failover)”。

### 基本要求

要故障转移到被动副本节点，必须为群集配置了高可用性。 更多信息请参阅“[为群集配置高可用性](/enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster)”。

### 发起到副本群集的故障转移

1. SSH 到群集的辅助数据中心中的任何被动节点。 更多信息请参阅“[访问管理 shell (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh#enabling-access-to-the-administrative-shell-via-ssh)。”

2. 初始化到辅助群集的故障转移并将其配置为主动节点。

    ```shell
  ghe-cluster-failover
  ```

{% data reusables.enterprise_clustering.configuration-finished %}

3. 更新 DNS 记录以指向被动群集的负载均衡器的 IP 地址。 流量会在经过 TTL 周期后定向到副本。

在 {% data variables.product.prodname_ghe_server %} 返回提示并且 DNS 更新传播后，您便已完成故障转移。 用户可以使用群集的主机名访问 {% data variables.product.prodname_ghe_server %}。
