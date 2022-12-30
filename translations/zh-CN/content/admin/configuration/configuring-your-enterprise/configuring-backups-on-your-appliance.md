---
title: 在设备上配置备份
shortTitle: Configuring backups
redirect_from:
  - /enterprise/admin/categories/backups-and-restores
  - /enterprise/admin/articles/backup-and-recovery
  - /enterprise/admin/articles/backing-up-github-enterprise
  - /enterprise/admin/articles/restoring-github-enterprise
  - /enterprise/admin/articles/backing-up-repository-data
  - /enterprise/admin/articles/restoring-enterprise-data
  - /enterprise/admin/articles/restoring-repository-data
  - /enterprise/admin/articles/backing-up-enterprise-data
  - /enterprise/admin/guides/installation/backups-and-disaster-recovery
  - /enterprise/admin/installation/configuring-backups-on-your-appliance
  - /enterprise/admin/configuration/configuring-backups-on-your-appliance
  - /admin/configuration/configuring-backups-on-your-appliance
intro: '作为灾难恢复计划的一部分，你可以通过配置自动备份的方式保护 {% data variables.product.product_location %} 中的生产数据。'
versions:
  ghes: '*'
type: how_to
topics:
  - Backups
  - Enterprise
  - Fundamentals
  - Infrastructure
ms.openlocfilehash: 4403ec24aa3da63f6700ae4bfcd2392ec0cfd194
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147861650'
---
## 关于 {% data variables.product.prodname_enterprise_backup_utilities %}

{% data variables.product.prodname_enterprise_backup_utilities %} 是安装在单独主机上的备份系统，它通过安全的 SSH 网络连接定期对 {% data variables.product.product_location %} 进行备份快照。 您可以使用快照将现有的 {% data variables.product.prodname_ghe_server %} 实例从备份主机还原为上一个状态。

只有自上一个快照之后添加的数据将通过网络传输并占用额外的物理存储空间。 要最大限度地减小对性能的影响，会以最低 CPU/IO 优先级在线执行备份。 您不需要排定维护窗口来执行备份。

{% data variables.product.prodname_enterprise_backup_utilities %} 的主要版本和版本号与 {% data variables.product.product_name %} 的功能版一致。 我们支持这两种产品的四个最新版本。 有关详细信息，请参阅“[{% data variables.product.product_name %} 版本](/admin/all-releases)”。

有关功能、要求和高级使用情况的更多详细信息，请参阅 {% data variables.product.prodname_enterprise_backup_utilities %} 项目文档中的 [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#readme)。

## 先决条件

若要使用 {% data variables.product.prodname_enterprise_backup_utilities %}，必须将 Linux 或 Unix 主机系统与 {% data variables.product.product_location %} 分开。

您还可以将 {% data variables.product.prodname_enterprise_backup_utilities %} 集成到现有环境中，以便长期、永久地存储重要数据。

建议将备份主机和 {% data variables.product.product_location %} 放置在相距较远的地理位置。 这样可以确保在主要站点发生重大事故或网络故障的情况下通过备份进行还原。

物理存储要求将因 Git 仓库磁盘使用情况以及预计的增长情况而异：

| 硬件 | 建议 |
| -------- | --------- |
| **vCPU**  | 2 |
| **内存** | 2 GB |
| **存储** | 等于为主要实例分配的存储空间的五倍 |

根据您的使用情况（例如用户活动和选定的集成），可能需要更多资源。

有关详细信息，请参阅 {% data variables.product.prodname_enterprise_backup_utilities %} 项目文档中的 [{% data variables.product.prodname_enterprise_backup_utilities %} 要求](https://github.com/github/backup-utils/blob/master/docs/requirements.md)。

## 安装 {% data variables.product.prodname_enterprise_backup_utilities %}

若要在备份主机上安装 {% data variables.product.prodname_enterprise_backup_utilities %}，建议克隆项目的 Git 存储库。 使用此方法可以直接使用 Git 提取新版本，并且会在安装新版本时保留现有备份配置文件 `backup.config`。

或者，如果主机无法访问 Internet，你可以将每个 {% data variables.product.prodname_enterprise_backup_utilities %} 版本下载为压缩存档，然后解压缩并安装这些内容。 有关详细信息，请参阅 {% data variables.product.prodname_enterprise_backup_utilities %} 项目文档中的[入门指南](https://github.com/github/backup-utils/blob/master/docs/getting-started.md)。

备份快照会写入通过 `backup.config` 文件中的 `GHE_DATA_DIR` 数据目录变量设置的磁盘路径。 快照需要存储在支持符号链接和硬链接的文件系统上。

{% note %}

注意：建议确保快照未保存在 {% data variables.product.prodname_enterprise_backup_utilities %} 安装目录的子目录中，以避免在升级 {% data variables.product.prodname_enterprise_backup_utilities %} 版本时意外覆盖数据目录。

{% endnote %}

1. 若要将 [{% data variables.product.prodname_enterprise_backup_utilities %} 项目存储库](https://github.com/github/backup-utils/)克隆到备份主机上的本地目录，请运行以下命令。

  ```
  $ git clone https://github.com/github/backup-utils.git /path/to/target/directory/backup-utils
  ```
1. 若要更改为本地存储库目录，请运行以下命令。

  ```
  cd backup-utils
  ```
{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-update-repo %}
1. 若要将包含的 `backup.config-example` 文件复制到 `backup.config`，请运行以下命令。

   ```shell
   cp backup.config-example backup.config
   ```
1. 若要自定义配置，请在文本编辑器中编辑 `backup.config`。
   1. 将 `GHE_HOSTNAME` 值设置为主要 {% data variables.product.prodname_ghe_server %} 实例的主机名或 IP 地址。

     {% note %}

     注意：如果使用负载均衡器将 {% data variables.product.product_location %} 部署为群集或部署在高可用性配置中，则 `GHE_HOSTNAME` 可以是负载均衡器主机名，只要它允许对 {% data variables.product.product_location %} 进行 SSH 访问（在端口 122 上）。

     为确保恢复的设备立即可用，即使在异地复制配置中也应针对主实例执行备份。

     {% endnote %}
   1. 将 `GHE_DATA_DIR` 值设置为要存储备份快照的文件系统位置。 建议在备份主机所在的同一文件系统上选择一个位置，但在步骤 1 中克隆 Git 存储库的位置除外。
1. 若要授予备份主机对实例的访问权限，请在 `http(s)://HOSTNAME/setup/settings` 上打开主实例的设置页，并将备份主机的 SSH 密钥添加到授权的 SSH 密钥列表中。 有关详细信息，请参阅“[访问管理 shell (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh#enabling-access-to-the-administrative-shell-via-ssh)”。
1. 在备份主机上，使用 `ghe-host-check` 命令验证与 {% data variables.product.product_location %} 的 SSH 连接。

  ```shell
  ./bin/ghe-host-check
  ```         
1. 若要创建初始完整备份，请运行以下命令。

  ```shell
  ./bin/ghe-backup
  ```

有关高级使用情况的更多详细信息，请参阅 {% data variables.product.prodname_enterprise_backup_utilities %} 项目文档中的 [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#readme)。

## 升级 {% data variables.product.prodname_enterprise_backup_utilities %}

升级 {% data variables.product.prodname_enterprise_backup_utilities %} 时，必须选择适用于当前版本的 {% data variables.product.product_name %} 的版本。 安装的 {% data variables.product.prodname_enterprise_backup_utilities %} 的版本必须至少与 {% data variables.product.product_location %} 的版本相同，并且不能低于两个版本。 有关详细信息，请参阅 {% data variables.product.prodname_enterprise_backup_utilities %} 项目文档中的 [{% data variables.product.prodname_ghe_server %} 要求](https://github.com/github/backup-utils/blob/master/docs/requirements.md#github-enterprise-server-version-requirements)。
可以通过提取和签出最新更改来升级 Git 存储库中的 {% data variables.product.prodname_enterprise_backup_utilities %}。

或者，如果不使用 Git 存储库进行安装，则可以将新存档提取到适当位置，也可以更改方法，改为使用 Git 存储库。

### 验证安装类型

可以验证 {% data variables.product.prodname_enterprise_backup_utilities %} 的安装方法，并确定升级安装的最佳方法。

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-directory %}
1. 若要检查 Git 存储库中是否存在有效的工作目录，请运行以下命令。

   ```
   git rev-parse --is-inside-work-tree
   ```

   如果输出为 `true`，则已通过克隆项目的 Git 存储库安装 {% data variables.product.prodname_enterprise_backup_utilities %}。 如果输出包含 `fatal: not a git repository (or any of the parent directories)`，则可能已通过提取压缩存储文件安装 {% data variables.product.prodname_enterprise_backup_utilities %}。
如果在 Git 存储库中进行安装，则可以使用 Git 安装最新版本。 如果从压缩存档文件进行安装，则可以下载并提取最新版本，也可以使用 Git 重新安装 {% data variables.product.prodname_enterprise_backup_utilities %} 以简化未来的升级。

- [升级 Git 存储库中的安装](#upgrading-an-installation-in-a-git-repository)
- [使用 Git 而不是压缩存档进行升级](#using-git-instead-of-compressed-archives-for-upgrades)

### 升级 Git 存储库中的安装

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-directory %} {% note %}

  注意：建议在升级 {% data variables.product.prodname_enterprise_backup_utilities %} 之前在临时位置（如 `$HOME/backup.config`）创建现有 `backup.config` 文件的副本。

  {% endnote %}

1. 通过运行 `git fetch` 命令下载最新的项目更新。

  ```shell
  git fetch
  ```

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-update-repo %} {% data reusables.enterprise_backup_utilities.enterprise-backup-utils-verify-upgrade %}

### 使用 Git 而不是压缩存档进行升级

如果备份主机具有 Internet 连接，并且你之前使用了压缩存档 (`.tar.gz`) 来安装或升级 {% data variables.product.prodname_enterprise_backup_utilities %}，建议改用 Git 存储库进行安装。 使用 Git 进行升级需要执行的工作量更少，并可保留备份配置。

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-directory %}
1. 若要备份现有 {% data variables.product.prodname_enterprise_backup_utilities %} 配置，请将当前 `backup.config` 文件复制到安全位置，例如主目录。

  ```
  $ cp backup.config $HOME/backup.config.saved-$(date +%Y%m%d-%H%M%S)
  ```

1. 更改为备份主机上要安装 {% data variables.product.prodname_enterprise_backup_utilities %} Git 存储库的本地目录。
1. 若要将[项目存储库](https://github.com/github/backup-utils/)克隆到备份主机上的目录，请运行以下命令。

  ```
  git clone https://github.com/github/backup-utils.git
  ```
1. 若要更改为克隆的存储库，请运行以下命令。

  ```
  cd backup-utils
  ```
{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-update-repo %}
1. 若要还原之前的备份配置，请将现有备份配置文件复制到本地存储库目录。 将命令中的路径替换为步骤 2 中保存的文件的位置。

  ```
  $ cp PATH/TO/BACKUP/FROM/STEP/2 backup.config
  ```
  
  {% note %}

  注意：可以选择在克隆后将备份配置文件还原到的位置。 有关可放置配置文件的位置的详细信息，请参阅 {% data variables.product.prodname_enterprise_backup_utilities %} 项目文档中的[入门指南](https://github.com/github/backup-utils/blob/master/docs/getting-started.md)。

  {% endnote %}

1. 若要确认指向备份配置文件中目录或脚本的路径是否正确，请查看文本编辑器中的文件。
{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-verify-upgrade %}
1. 删除步骤 1 中的旧 GitHub Enterprise Server 备份实用程序目录（压缩存档安装所在的位置）。

## 排定备份

可以使用 `cron(8)` 命令或类似的命令调度服务在备份主机上调度定期备份。 配置的备份频率将决定您的恢复计划中的最坏情况恢复点目标 (RPO)。 例如，如果您已排定在每天午夜运行备份，则在发生灾难的情况下，可能丢失长达 24 小时的数据。 建议在开始时采用每小时备份日程，从而确保在主要站点数据受到破坏时，最坏情况下最多会丢失一小时的数据。

如果备份尝试重叠，`ghe-backup` 命令将以错误消息中止，指示存在同时备份。 如果出现这种情况，建议降低已排定的备份的频率。 有关详细信息，请参阅 {% data variables.product.prodname_enterprise_backup_utilities %} 项目文档中的 [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#scheduling-backups) 的“计划备份”部分。

## 还原备份

如果主站点发生长时间故障或灾难性事件，则可以通过预配另一台 {% data variables.product.prodname_enterprise %} 设备并从备份主机执行还原 {% data variables.product.product_location %}。 在还原设备之前，您必须将备份主机的 SSH 密钥作为已授权 SSH 密钥添加到目标 {% data variables.product.prodname_enterprise %} 设备。

{% note %}

**注意：** 当执行备份还原到 {% data variables.product.product_location %} 时，同样的版本支持性规则也适用。 您最多只能从后面两个功能版本恢复数据。

例如，如果从 {% data variables.product.product_name %} 3.0.x 获取备份，则可以将备份还原到 {% data variables.product.product_name %} 3.2.x 实例。 无法将数据从 {% data variables.product.product_name %} 2.22.x 的备份还原到运行 3.2.x 的实例，因为这样会跨过三个版本（2.22 到 3.0 到 3.1 到 3.2）。 需要先还原到运行 3.1.x 的实例，然后升级到 3.2.x。

{% endnote %}

若要从上次成功快照还原 {% data variables.product.product_location %}，请使用 `ghe-restore` 命令。

{% note %}

注意：还原备份之前，请确保：
- 在主实例上启用了维护模式，并且所有活动进程都已完成。 有关详细信息，请参阅“[启用维护模式](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/)”。
- 在高可用性配置中的所有副本上停止复制。 有关详细信息，请参阅“[关于高可用性配置](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration#ghe-repl-stop)”中的 `ghe-repl-stop` 命令。
- 如果 {% data variables.product.product_location %} 启用了 {% data variables.product.prodname_actions %}，则必须在替换设备上配置 {% data variables.product.prodname_actions %} 外部存储提供程序。 有关详细信息，请参阅“[在启用 {% data variables.product.prodname_actions %} 的情况下备份和还原 {% data variables.product.prodname_ghe_server %}](/admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled)”。

{% endnote %}

运行 `ghe-restore` 命令之后，你应该会看到类似于以下内容的输出：

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

{% ifversion ip-exception-list %}（可选）若要验证还原，请配置 IP 例外列表以允许访问指定 IP 地址列表。 有关详细信息，请参阅“[使用 IP 异常列表在维护模式下验证更改](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list)”。
{% endif %}

{% note %}

**注意：** 网络设置会排除在备份快照之外。 您必须根据环境的要求在目标 {% data variables.product.prodname_ghe_server %} 设备上手动配置网络。

{% endnote %}

可以使用 `ghe-restore` 命令使用这些附加选项：
- 即使已配置 `-c` 标志，该标志也会覆盖目标主机上的设置、证书和许可证数据。 如果您要为测试设置暂存实例，并且希望在目标设备上保留现有配置，请省略此标志。 有关详细信息，请参阅 {% data variables.product.prodname_enterprise_backup_utilities %} 项目文档中的 [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#using-the-backup-and-restore-commands) 的“使用备份和还原命令”部分。
- `-s` 标志让你能够选择不同的备份快照。
