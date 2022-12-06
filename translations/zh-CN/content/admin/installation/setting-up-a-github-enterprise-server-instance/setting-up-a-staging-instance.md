---
title: 设置暂存实例
intro: '可在单独的隔离环境中设置 {% data variables.product.product_name %} 实例，并使用该实例来验证和测试更改。'
redirect_from:
  - /enterprise/admin/installation/setting-up-a-staging-instance
  - /admin/installation/setting-up-a-staging-instance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Upgrades
shortTitle: Set up a staging instance
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ce7d9dde9f86ea5159657203e13d9d191b6b7466
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106859'
---
## 关于暂存实例

{% data variables.product.company_short %} 建议将单独的环境设置为测试对 {% data variables.location.product_location %} 的配置的备份、更新或更改。 此环境应与生产系统隔离，称为过渡环境。

例如，为了防止数据丢失，可以定期验证生产实例的备份。 可以定期在过渡环境中将生产数据的备份还原到单独的 {% data variables.product.product_name %} 实例。 在此暂存实例上，还可以测试是否升级到 {% data variables.product.product_name %} 的最新功能版。

{% tip %}

提示：只要暂存实例未用于生产容量，便可以重复使用现有 {% data variables.product.prodname_enterprise %} 许可证文件。

{% endtip %}

## 过渡环境的注意事项

若要完全测试 {% data variables.product.product_name %} 并尽可能重新创建与生产环境类似的环境，请考虑与实例交互的外部系统。 例如，你可能想要在过渡环境中测试以下内容。

- 身份验证，特别是在使用外部身份验证提供程序（如 SAML）的情况下
- 与外部事件单记录系统的集成
- 与持续集成服务器的集成
- 使用 {% data variables.product.prodname_enterprise_api %} 的外部脚本或软件
- 用于发送电子邮件通知的外部 SMTP 服务器

## 设置暂存实例

可以从头开始设置暂存实例并根据需要配置实例。 有关详细信息，请参阅“[设置 {% data variables.product.product_name %} 实例](/admin/installation/setting-up-a-github-enterprise-server-instance)”和“[配置企业](/admin/configuration/configuring-your-enterprise)”。

也可以创建反映生产配置的暂存实例，方法是将生产实例的备份还原到暂存实例。

1. [备份生产实例](#1-back-up-your-production-instance)。
2. [设置暂存实例](#2-set-up-a-staging-instance)。
3. [配置 {% data variables.product.prodname_actions %}](#3-configure-github-actions)。
4. [配置 {% data variables.product.prodname_registry %}](#4-configure-github-packages)。
5. [还原生产备份](#5-restore-your-production-backup)。
6. [查看实例的配置](#6-review-the-instances-configuration)。
7. [实例的配置](#7-apply-the-instances-configuration)。

### 1. 备份生产实例

如果要在某个实例上测试更改（该实例所包含的数据和配置与生产实例相同），请使用 {% data variables.product.prodname_enterprise_backup_utilities %} 在生产实例中备份数据和配置。 有关详细信息，请参阅“[在设备上配置备份](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)”。

{% warning %}

警告：如果在生产中使用 {% data variables.product.prodname_actions %} 或 {% data variables.product.prodname_registry %}，备份将包括外部存储的生产配置。 为避免从暂存实例写入生产存储而导致数据丢失，必须在还原备份之前配置步骤 3 和 4 中的每个功能。

{% endwarning %}

### 2. 设置暂存实例

设置新实例作为暂存环境。 配置和安装暂存实例的方法与生产实例所用方法相同。 有关详细信息，请参阅“[设置 {% data variables.product.prodname_ghe_server %} 实例](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance/)”。

如果计划还原生产实例的备份，请继续执行下一步。 也可以手动配置实例，并跳过以下步骤。

### 3. 配置 {% data variables.product.prodname_actions %}

（可选）如果在生产实例上使用 {% data variables.product.prodname_actions %}，请在还原生产备份之前在暂存实例上配置该功能。 如果不使用 {% data variables.product.prodname_actions %}，请跳到“[4. 配置 {% data variables.product.prodname_registry %}](#4-configure-github-packages)”。

{% warning %}

警告：如果在还原生产备份之前未在暂存实例上配置 {% data variables.product.prodname_actions %}，暂存实例将使用生产实例的外部存储，这可能会导致数据丢失。 强烈建议为暂存实例使用不同的外部存储。 有关详细信息，请参阅“[使用过渡环境](/admin/github-actions/advanced-configuration-and-troubleshooting/using-a-staging-environment)”。

{% endwarning %}

{% data reusables.enterprise_installation.ssh-into-staging-instance %}
1. 若要将暂存实例配置为对 {% data variables.product.prodname_actions %} 使用外部存储提供程序，请输入以下命令之一。
{% indented_data_reference reusables.actions.configure-storage-provider-platform-commands spaces=3 %} {% data reusables.actions.configure-storage-provider %}
1. 若要准备在暂存实例上启用 {% data variables.product.prodname_actions %}，请输入以下命令。

   ```shell{:copy}
   ghe-config app.actions.enabled true
   ```

### 4. 配置 {% data variables.product.prodname_registry %}

（可选）如果在生产实例上使用 {% data variables.product.prodname_registry %}，请在还原生产备份之前在暂存实例上配置该功能。 如果不使用 {% data variables.product.prodname_registry %}，请跳到“[5. 还原生产备份](#5-restore-your-production-backup)”。

{% warning %}

警告：如果在还原生产备份之前未在暂存实例上配置 {% data variables.product.prodname_registry %}，暂存实例将使用生产实例的外部存储，这可能会导致数据丢失。 强烈建议为暂存实例使用不同的外部存储。

{% endwarning %}

1. 查看将还原到暂存实例的备份。
   - 如果使用 {% data variables.product.prodname_enterprise_backup_utilities %} 3.5 或更高版本进行备份，备份将包括 {% data variables.product.prodname_registry %} 的配置。 继续执行下一步。
   - 如果使用 {% data variables.product.prodname_enterprise_backup_utilities %} 3.4 或更早版本进行备份，请在暂存实例上配置 {% data variables.product.prodname_registry %}。 有关详细信息，请参阅“[企业的 {% data variables.product.prodname_registry %} 入门指南](/admin/packages/getting-started-with-github-packages-for-your-enterprise)”。
{% data reusables.enterprise_installation.ssh-into-staging-instance %}
1. 通过输入以下命令配置外部存储连接，将占位符值替换为连接的实际值。
   - Azure Blob 存储：

     ```shell{:copy}
     ghe-config secrets.packages.blob-storage-type "azure"
     ghe-config secrets.packages.azure-container-name "AZURE CONTAINER NAME"
     ghe-config secrets.packages.azure-connection-string "CONNECTION STRING"
     ```
   - Amazon S3：

     ```shell{:copy}
     ghe-config secrets.packages.blob-storage-type "s3"
     ghe-config secrets.packages.service-url "S3 SERVICE URL"
     ghe-config secrets.packages.s3-bucket "S3 BUCKET NAME"
     ghe-config secrets.packages.aws-access-key "S3 ACCESS KEY ID"
     ghe-config secrets.packages.aws-secret-key "S3 ACCESS SECRET"
     ```
1. 若准备在暂存实例上启用 {% data variables.product.prodname_registry %}，请输入以下命令。

   ```shell{:copy}
   ghe-config app.packages.enabled true
   ```

### 5. 还原生产备份

使用 `ghe-restore` 命令从备份中还原其余数据。 有关详细信息，请参阅“[还原备份](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup)”。

如果暂存实例已配置并且你想要覆盖设置、证书和许可证数据，请将 `-c` 选项添加到命令中。 有关该选项的详细信息，请参阅 {% data variables.product.prodname_enterprise_backup_utilities %} 文档中的[使用备份和还原命令](https://github.com/github/backup-utils/blob/master/docs/usage.md#restoring-settings-tls-certificate-and-license)。

### 6. 查看实例的配置

若要使用相同的主机名访问暂存实例，请通过编辑 macOS 或 Linux 中的 `/etc/hosts` 文件或 Windows 中的 `C:\Windows\system32\drivers\etc` 文件，更新本地 hosts 文件以通过 IP 地址解析暂存实例的主机名。

{% note %}

注意：暂存实例必须可通过与生产实例相同的主机名进行访问。 不支持更改 {% data variables.location.product_location %} 的主机名。 有关详细信息，请参阅“[配置主机名](/admin/configuration/configuring-network-settings/configuring-a-hostname)”。

{% endnote %}

然后，在 {% data variables.enterprise.management_console %} 中查看暂存实例的配置。 有关详细信息，请参阅“[访问 {% data variables.enterprise.management_console %}](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)”。

{% warning %}

警告：如果为暂存实例配置了 {% data variables.product.prodname_actions %} 或 {% data variables.product.prodname_registry %}，为避免覆盖生产数据，请确保 {% data variables.enterprise.management_console %} 中的外部存储配置与生产实例不匹配。

{% endwarning %}

### 7. 应用实例的配置

若要在 {% data variables.enterprise.management_console %} 中应用配置，请单击“保存设置”。

## 延伸阅读

- “[关于升级到新版本](/admin/overview/about-upgrades-to-new-releases)”
