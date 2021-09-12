---
title: 在启用 GitHub Actions 的情况下备份和恢复 GitHub Enterprise Server
shortTitle: 备份和恢复
intro: '外部存储提供程序上的 {% data variables.product.prodname_actions %} 数据不会包含在常规 {% data variables.product.prodname_ghe_server %} 备份中，必须单独备份。'
versions:
  enterprise-server: '>=3.0'
type: how_to
topics:
  - Actions
  - Backups
  - Enterprise
  - Infrastructure
redirect_from:
  - /admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled
---

{% data reusables.actions.enterprise-storage-ha-backups %}

如果您使用 {% data variables.product.prodname_enterprise_backup_utilities %} 来备份 {% data variables.product.product_location %}，请务必注意，存储在外部存储提供程序上的 {% data variables.product.prodname_actions %} 数据不会包含在备份中。

以下是将带有 {% data variables.product.prodname_actions %} 的 {% data variables.product.product_location %} 恢复到新设备所需步骤的概述：

1. 确认原始设备处于脱机状态。
1. 在替换 {% data variables.product.prodname_ghe_server %} 设备上手动配置网络设置。 网络设置被排除在备份快照之外，不会被 `ghe-resturn` 覆盖。
1. 配置替换设备以使用与原设备相同的 {% data variables.product.prodname_actions %} 外部存储配置。
1. 在替换设备上启用 {% data variables.product.prodname_actions %}。 这将把替换设备连接到 {% data variables.product.prodname_actions %} 的相同外部存储。
1. 在使用外部存储提供程序配置 {% data variables.product.prodname_actions %} 后，使用 `ghe-resting` 命令从备份中恢复其余数据。 更多信息请参阅“[恢复备份](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup)”。
1. 在替换设备上重新注册自托管运行器。 更多信息请参阅[添加自托管运行器](/actions/hosting-your-own-runners/adding-self-hosted-runners)。

有关备份和恢复 {% data variables.product.prodname_ghe_server %} 的更多信息，请参阅“[在设备上配置备份](/admin/configuration/configuring-backups-on-your-appliance)”。
