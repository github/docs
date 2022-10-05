---
title: 在启用 GitHub Actions 的情况下备份和恢复 GitHub Enterprise Server
shortTitle: Backing up and restoring
intro: '外部存储提供程序上的 {% data variables.product.prodname_actions %} 数据不会包含在常规 {% data variables.product.prodname_ghe_server %} 备份中，必须单独备份。'
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
ms.openlocfilehash: def12b4e9e93a75ee1aa58f8290ca1b6e7d13cd5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145100008'
---
{% data reusables.actions.enterprise-storage-ha-backups %}

如果您使用 {% data variables.product.prodname_enterprise_backup_utilities %} 来备份 {% data variables.product.product_location %}，请务必注意，存储在外部存储提供程序上的 {% data variables.product.prodname_actions %} 数据不会包含在备份中。

以下是将带有 {% data variables.product.prodname_actions %} 的 {% data variables.product.product_location %} 恢复到新设备所需步骤的概述：

1. 确认原始设备处于脱机状态。
1. 在替换 {% data variables.product.prodname_ghe_server %} 设备上手动配置网络设置。 网络设置被排除在备份快照之外，不会被 `ghe-restore` 覆盖。
1. 若要将替换设备配置为使用与原始设备相同的 {% data variables.product.prodname_actions %} 外部存储配置，请从新设备使用 `ghe-config` 命令设置所需的参数。
    
    - Azure Blob 存储
    ```shell
    ghe-config secrets.actions.storage.blob-provider "azure"
    ghe-config secrets.actions.storage.azure.connection-string "_Connection_String_"
    ```
    - Amazon S3
    ```shell
    ghe-config secrets.actions.storage.blob-provider "s3"
    ghe-config secrets.actions.storage.s3.bucket-name "_S3_Bucket_Name"
    ghe-config secrets.actions.storage.s3.service-url "_S3_Service_URL_"
    ghe-config secrets.actions.storage.s3.access-key-id "_S3_Access_Key_ID_"
    ghe-config secrets.actions.storage.s3.access-secret "_S3_Access_Secret_"
    ```
    - （可选）要启用 S3 强制路径样式，请输入以下命令：
    ```shell
    ghe-config secrets.actions.storage.s3.force-path-style true
    ```
      

1. 在替换设备上启用 {% data variables.product.prodname_actions %}。 这将把替换设备连接到 {% data variables.product.prodname_actions %} 的相同外部存储。

    ```shell
    ghe-config app.actions.enabled true
    ghe-config-apply
    ```

1. 配置并启用 {% data variables.product.prodname_actions %} 后，使用 `ghe-restore` 命令从备份中还原其余数据。 有关详细信息，请参阅“[还原备份](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup)”。
1. 在替换设备上重新注册自托管运行器。 有关详细信息，请参阅[添加自托管运行器](/actions/hosting-your-own-runners/adding-self-hosted-runners)。

有关备份和还原 {% data variables.product.prodname_ghe_server %} 的详细信息，请参阅“[在设备上配置备份](/admin/configuration/configuring-backups-on-your-appliance)”。
