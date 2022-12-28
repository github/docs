---
title: 在启用 GitHub Actions 的情况下备份和恢复 GitHub Enterprise Server
shortTitle: Backing up and restoring
intro: '若要在启用 {% data variables.product.prodname_actions %} 时还原 {% data variables.location.product_location %} 的备份，必须先配置 {% data variables.product.prodname_actions %}，然后再使用 {% data variables.product.prodname_enterprise_backup_utilities %} 还原备份。'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Backups
  - Enterprise
  - Infrastructure
redirect_from:
  - /admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled
ms.openlocfilehash: 43279c6b99cce6618de9253c5d0451c0a661b095
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107307'
---
## 关于使用 {% data variables.product.prodname_actions %} 时备份 {% data variables.product.product_name %}

可以使用 {% data variables.product.prodname_enterprise_backup_utilities %} 将 {% data variables.location.product_location %} 的数据和配置备份和还原到新实例。 有关详细信息，请参阅“[在设备上配置备份](/admin/configuration/configuring-backups-on-your-appliance)”。

但是，并非所有 {% data variables.product.prodname_actions %} 的数据都包含在这些备份中。 {% data reusables.actions.enterprise-storage-ha-backups %}

## 启用 {% data variables.product.prodname_actions %} 时，还原 {% data variables.product.product_name %} 的备份

若要通过 {% data variables.product.prodname_actions %} 还原 {% data variables.location.product_location %} 的备份，必须先在目标实例上手动配置网络设置和外部存储，然后再从 {% data variables.product.prodname_enterprise_backup_utilities %} 还原备份。 

1. 确认源实例处于离线状态。
1. 在替换 {% data variables.product.prodname_ghe_server %} 实例上手动配置网络设置。 网络设置被排除在备份快照之外，不会被 `ghe-restore` 覆盖。 有关详细信息，请参阅“[配置网络设置](/admin/configuration/configuring-network-settings)”。
1. 通过 SSH 连接到目标实例。 有关详细信息，请参阅“[访问管理 shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)”。

   ```shell{:copy}
   $ ssh -p 122 admin@HOSTNAME
   ```
1. 通过输入以下命令之一，将目标实例配置为对 {% data variables.product.prodname_actions %} 使用相同的外部存储服务作为源实例。
{% indented_data_reference reusables.actions.configure-storage-provider-platform-commands spaces=3 %} {% data reusables.actions.configure-storage-provider %}
1. 若要准备在目标实例上启用 {% data variables.product.prodname_actions %}，请输入以下命令。

   ```shell{:copy}
   ghe-config app.actions.enabled true
   ```
{% data reusables.actions.apply-configuration-and-enable %}
1. 配置并启用 {% data variables.product.prodname_actions %} 后，使用 `ghe-restore` 命令从备份中还原其余数据。 有关详细信息，请参阅“[还原备份](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup)”。
1. 在目标实例上重新注册自托管运行器。 有关详细信息，请参阅“[添加自托管运行器](/actions/hosting-your-own-runners/adding-self-hosted-runners)”。
