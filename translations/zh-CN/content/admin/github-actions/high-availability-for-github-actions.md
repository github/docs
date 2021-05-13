---
title: GitHub Actions 的高可用性
intro: '在高可用性配置中管理 {% data variables.product.prodname_actions %} 有一些特殊注意事项。'
versions:
  enterprise-server: '>=3.0'
topics:
  - Enterprise
---

### {% data variables.product.prodname_actions %} 数据的复制或冗余

{% data reusables.actions.enterprise-storage-ha-backups %}

我们强烈建议您配置 {% data variables.product.prodname_actions %} 外部存储设备以使用数据冗余或复制功能。 更多信息请参阅存储提供商的文档。

* [Azure 存储冗余文档](https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy)
* [Amazon S3 复制文档](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html)

### 高可用性副本

#### 升级副本

启用高可用性配置时，任何副本都会自动配置为使用 {% data variables.product.prodname_actions %} 外部存储配置。 如果您需要启动故障转移来升级副本，则 {% data variables.product.prodname_actions %} 不需要额外的配置更改。

更多信息请参阅“[发起到副本设备的故障转移](/admin/enterprise-management/initiating-a-failover-to-your-replica-appliance)”。

#### 移除高可用性副本

避免让多个实例写入同一 {% data variables.product.prodname_actions %} 外部存储。 当使用 `ghe-rewardown` 命令停止并永久移除启用 {% data variables.product.prodname_actions %} 的副本时，可能会发生这种情况。 这是因为副本将转换为独立的 {% data variables.product.prodname_ghe_server %}，在拆解后仍将使用与原本相同的外部存储配置。

为了帮助避免这个问题，我们建议停用副本服务器或使用不同的外部存储更新其 {% data variables.product.prodname_actions %} 配置。
