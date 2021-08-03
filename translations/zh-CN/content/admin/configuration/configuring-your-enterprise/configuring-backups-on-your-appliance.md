---
title: 在设备上配置备份
shortTitle: Configuring backups
redirect_from:
  - /enterprise/admin/categories/backups-and-restores/
  - /enterprise/admin/articles/backup-and-recovery/
  - /enterprise/admin/articles/backing-up-github-enterprise/
  - /enterprise/admin/articles/restoring-github-enterprise/
  - /enterprise/admin/articles/backing-up-repository-data/
  - /enterprise/admin/articles/restoring-enterprise-data/
  - /enterprise/admin/articles/restoring-repository-data/
  - /enterprise/admin/articles/backing-up-enterprise-data/
  - /enterprise/admin/guides/installation/backups-and-disaster-recovery/
  - /enterprise/admin/installation/configuring-backups-on-your-appliance
  - /enterprise/admin/configuration/configuring-backups-on-your-appliance
  - /admin/configuration/configuring-backups-on-your-appliance
intro: '作为灾难恢复计划的一部分，您可以通过配置自动备份的方式保护 {% data variables.product.product_location %} 中的生产数据。'
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Backups
  - Enterprise
  - Fundamentals
  - Infrastructure
---
### 关于 {% data variables.product.prodname_enterprise_backup_utilities %}

{% data variables.product.prodname_enterprise_backup_utilities %} 是在单独主机上安装的备份系统，会通过安全的 SSH 网络连接定期生成 {% data variables.product.product_location %} 的备份快照。 您可以使用快照将现有的 {% data variables.product.prodname_ghe_server %} 实例从备份主机还原为上一个状态。

只有自上一个快照之后添加的数据将通过网络传输并占用额外的物理存储空间。 要最大限度地减小对性能的影响，会以最低 CPU/IO 优先级在线执行备份。 您不需要排定维护窗口来执行备份。

更多关于功能、要求和高级用法的详细信息，请参阅 [{% data variables.product.prodname_enterprise_backup_utilities %} 自述文件](https://github.com/github/backup-utils#readme)。

### 基本要求

要使用 {% data variables.product.prodname_enterprise_backup_utilities %}，您必须将 Linux 或 Unix 主机系统与 {% data variables.product.product_location %} 分开。

您还可以将 {% data variables.product.prodname_enterprise_backup_utilities %} 集成到现有环境中，以便长期、永久地存储重要数据。

建议将备份主机和 {% data variables.product.product_location %} 放置在相距较远的位置。 这样可以确保在主要站点发生重大事故或网络故障的情况下通过备份进行还原。

物理存储要求将因 Git 仓库磁盘使用情况以及预计的增长情况而异：

| 硬件       | 建议                |
| -------- | ----------------- |
| **vCPU** | 2                 |
| **内存**   | 2 GB              |
| **存储器**  | 等于为主要实例分配的存储空间的五倍 |

根据您的使用情况（例如用户活动和选定的集成），可能需要更多资源。

### 安装 {% data variables.product.prodname_enterprise_backup_utilities %}

{% note %}

**注**：为确保还原的设备立即可用，即使采用 Geo-replication 配置，也应针对主要实例执行备份。

{% endnote %}

1. 下载最新的 [{% data variables.product.prodname_enterprise_backup_utilities %} 版本](https://github.com/github/backup-utils/releases)并使用 `tar` 命令解压文件。
  ```shell
  $ tar -xzvf /path/to/github-backup-utils-v<em>MAJOR.MINOR.PATCH</em>.tar.gz     
  ```
2. 将包含的 `backup.config-example` 文件复制到 `backup.config`，并在编辑器中打开。
3. 将 `GHE_HOSTNAME` 值设为主要 {% data variables.product.prodname_ghe_server %} 实例的主机名或 IP 地址。
4. 将 `GHE_DATA_DIR` 值设为您希望存储备份快照的文件系统位置。
5. 打开主要实例的设置页面（网址为 `https://HOSTNAME/setup/settings`），并将备份主机的 SSH 密钥添加到已授权 SSH 密钥列表中。 更多信息请参阅[访问管理 shell (SSH)](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)。
5. 使用 `ghe-host-chec` 命令确认与 {% data variables.product.product_location %} 的 SSH 连接。
  ```shell
  $ bin/ghe-host-check        
  ```
  6. 要创建初次完整备份，请运行 `ghe-backup` 命令。
  ```shell
  $ bin/ghe-backup        
  ```

有关高级用法的更多信息，请参阅 [{% data variables.product.prodname_enterprise_backup_utilities %} 自述文件](https://github.com/github/backup-utils#readme)。

### 排定备份

您可以使用 `cron(8)` 命令或类似的命令排定服务在备份主机上排定定期备份。 配置的备份频率将决定您的恢复计划中的最坏情况恢复点目标 (RPO)。 例如，如果您已排定在每天午夜运行备份，则在发生灾难的情况下，可能丢失长达 24 小时的数据。 建议在开始时采用每小时备份日程，从而确保在主要站点数据受到破坏时，最坏情况下最多会丢失一小时的数据。

如果备份尝试重复，`ghe-backup` 命令将中止并显示错误消息，指示存在同时备份。 如果出现这种情况，建议降低已排定的备份的频率。 更多信息请参阅 [{% data variables.product.prodname_enterprise_backup_utilities %} 自述文件](https://github.com/github/backup-utils#scheduling-backups)的“排定备份”部分。

### 还原备份

如果主要站点发生的故障或灾难性事件的时间较长，要还原 {% data variables.product.product_location %}，请提供另一个 {% data variables.product.prodname_enterprise %} 设备并从备份主机执行还原。 在还原设备之前，您必须将备份主机的 SSH 密钥作为已授权 SSH 密钥添加到目标 {% data variables.product.prodname_enterprise %} 设备。

{%if currentVersion ver_gt "enterprise-server@2.22"%}
{% note %}

**注：**如果 {% data variables.product.product_location %} 已启用 {% data variables.product.prodname_actions %}，则必须先在替换设备上配置 {% data variables.product.prodname_actions %} 外部存储提供程序，然后再运行 `ghe-restore` 命令。 更多信息请参阅“[在启用 {% data variables.product.prodname_actions %} 的情况下备份和恢复 {% data variables.product.prodname_ghe_server %}](/admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled)”。

{% endnote %}
{% endif %}

要通过上一个成功快照还原 {% data variables.product.product_location %}，请使用 `ghe-restore` 命令。 您看到的输出应类似于：

```shell
$ ghe-restore -c 169.154.1.1
> Checking for leaked keys in the backup snapshot that is being restored ...
> * No leaked keys found
> Connect 169.154.1.1:122 OK (v2.9.0)

> WARNING: All data on GitHub Enterprise appliance 169.154.1.1 (v2.9.0)
>          will be overwritten with data from snapshot 20170329T150710.
> Please verify that this is the correct restore host before continuing.
> Type 'yes' to continue: <em>yes</em>

> Starting restore of 169.154.1.1:122 from snapshot 20170329T150710
# ...output truncated
> Completed restore of 169.154.1.1:122 from snapshot 20170329T150710
> Visit https://169.154.1.1/setup/settings to review appliance configuration.
```

{% note %}

**注**：网络设置不包含在备份快照中。 您必须根据环境的要求在目标 {% data variables.product.prodname_ghe_server %} 设备上手动配置网络。

{% endnote %}

您可以将以下附加选项与 `ghe-restore` 命令结合使用：
- `-c` 标志会重写目标主机上的设置、证书和许可数据，即使已配置也不例外。 如果您要为测试设置暂存实例，并且希望在目标设备上保留现有配置，请省略此标志。 更多信息请参阅 [{% data variables.product.prodname_enterprise_backup_utilities %} 自述文件](https://github.com/github/backup-utils#using-the-backup-and-restore-commands)的“使用备份和还原命令”部分。
- `-s` 标志允许您选择其他备份快照。
