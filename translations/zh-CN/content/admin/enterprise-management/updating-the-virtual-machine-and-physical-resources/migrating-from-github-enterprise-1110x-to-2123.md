---
title: 从 GitHub Enterprise 11.10.x 迁移到 2.1.23
redirect_from:
  - /enterprise/admin/installation/migrating-from-github-enterprise-1110x-to-2123
  - /enterprise/admin-guide/migrating/
  - /enterprise/admin/articles/migrating-github-enterprise/
  - /enterprise/admin/guides/installation/migrating-from-github-enterprise-v11-10-34x/
  - /enterprise/admin/articles/upgrading-to-a-newer-release/
  - /enterprise/admin/guides/installation/migrating-to-a-different-platform-or-from-github-enterprise-11-10-34x/
  - /enterprise/admin/guides/installation/migrating-from-github-enterprise-11-10-x-to-2-1-23
  - /enterprise/admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123
  - /admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123
intro: '要从 {% data variables.product.prodname_enterprise %} 11.10.x 迁移到 2.1.23，您需要设置新的设备实例并迁移之前实例中的数据。'
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Migration
  - Upgrades
---
支持从 {% data variables.product.prodname_enterprise %} 11.10.348 及更高版本进行迁移。 不支持从 {% data variables.product.prodname_enterprise %} 11.10.348 及更低版本进行迁移。 您必须先通过多次升级过程升级到 11.10.348。 更多信息请参阅 11.10.348 升级程序“[升级到最新版本](/enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release/)”。

要升级到最新版 {% data variables.product.prodname_enterprise %}，您必须先迁移到 {% data variables.product.prodname_ghe_server %} 2.1，然后才能执行正常升级过程。 更多信息请参阅“[升级 {% data variables.product.prodname_enterprise %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)”。

### 准备迁移

1. 查看配置和安装指南，并检查在您的环境中配置 {% data variables.product.prodname_enterprise %} 2.1.23 的所有基本要求是否已得到满足。 更多信息请参阅“[配置和安装](/enterprise/2.1/admin/guides/installation/provisioning-and-installation/)”。
2. 验证当前实例正在运行受支持的升级版本。
3. 设置最新版本的 {% data variables.product.prodname_enterprise_backup_utilities %}。 更多信息请参阅“[{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils)”。
    - 如果已使用 {% data variables.product.prodname_enterprise_backup_utilities %} 配置排定的备份，请确保您已更新为最新版本。
    - 如果您当前未运行排定的备份，请设置 {% data variables.product.prodname_enterprise_backup_utilities %}。
4. 使用 `ghe-backup` 命令生成当前实例的初始完整备份快照。 如果您已为当前实例配置排定的备份，则不需要生成实例快照。

   {% tip %}

   **提示**：在快照生成期间，您可以使实例保持在线激活状态。 您将在迁移的维护过程中生成另一个快照。 由于备份的递增，此初始快照会减少在最终快照中传输的数据量，从而可能缩短维护窗口。

   {% endtip %}

5. 确定用于将用户网络流量切换到新实例的方法。 迁移完毕后，所有 HTTP 和 Git 网络流量都将定向到新实例。
    - **DNS** - 建议为所有环境使用此方法，因为此方法简单易用，即使在从一个数据中心迁移到另一个数据中心的情况下也能正常使用。 开始迁移之前，请将现有 DNS 记录的 TTL 缩减为 5 分钟或更短时间，并允许更改传播。 迁移完成后，将 DNS 记录更新为指向新实例的 IP 地址。
    - **IP 地址分配** - 此方法仅适用于 VMware 到 VMware 的迁移，除非 DNS 方法不可用，否则不建议使用此方法。 开始迁移之前，您需要关闭旧实例并将其 IP 地址分配给新实例。
6. 排定维护窗口。 维护窗口的时间应足够长，以便将数据从备份主机传输到新实例，并根据备份快照的大小和可用网络带宽而变化。 在此期间，如果要迁移到新实例，当前实例将不可用，且处于维护模式。

### 执行迁移

1. 配置新的 {% data variables.product.prodname_enterprise %} 2.1 实例。 更多信息请参阅您的目标平台的“[配置和安装](/enterprise/2.1/admin/guides/installation/provisioning-and-installation/)”指南。
2. 在浏览器中，导航到新副本设备的 IP 地址并上传您的 {% data variables.product.prodname_enterprise %} 许可。
3. 设置管理员密码。
5. 单击 **Migrate**。 ![选择安装类型](/assets/images/enterprise/migration/migration-choose-install-type.png)
6. 将备份主机访问 SSH 密钥粘贴到“Add new SSH key”中。 ![授权备份](/assets/images/enterprise/migration/migration-authorize-backup-host.png)
7. 单击 **Add key（添加密钥）**，然后单击 **Continue（继续）**。
8. 复制您将在备份主机上运行的 `ghe-restore` 命令，将数据迁移到新实例。 ![开始迁移](/assets/images/enterprise/migration/migration-restore-start.png)
9. 在旧实例上启用维护模式，并等待所有活动进程完成。 更多信息请参阅“[启用和排定维护模式](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)”。

  {% note %}

  **注**：从现在开始，此实例将无法正常使用。

  {% endnote %}

10. 在备份主机上，运行 `ghe-backup` 命令以生成最终的备份快照。 这样可以确保捕获来自旧实例的所有数据。
11. 在备份主机上，运行您在新实例的恢复状态屏幕上复制的 `ghe-restore` 命令以恢复最新快照。
  ```shell
  $ ghe-restore 169.254.1.1
  The authenticity of host '169.254.1.1:122' can't be established.
  RSA key fingerprint is fe:96:9e:ac:d0:22:7c:cf:22:68:f2:c3:c9:81:53:d1.
  Are you sure you want to continue connecting (yes/no)? yes
  Connect 169.254.1.1:122 OK (v2.0.0)
  Starting restore of 169.254.1.1:122 from snapshot 20141014T141425
  Restoring Git repositories ...
  Restoring GitHub Pages ...
  Restoring asset attachments ...
  Restoring hook deliveries ...
  Restoring MySQL database ...
  Restoring Redis database ...
  Restoring SSH authorized keys ...
  Restoring Elasticsearch indices ...
  Restoring SSH host keys ...
  Completed restore of 169.254.1.1:122 from snapshot 20141014T141425
  Visit https://169.254.1.1/setup/settings to review appliance configuration.
  ```

12. 返回到新实例的恢复状态屏幕，查看恢复是否已完成。 ![恢复整个屏幕](/assets/images/enterprise/migration/migration-status-complete.png)
13. 单击 **Continue to settings**，检查并调整从之前的实例中导入的配置信息和设置。 ![检查导入的设置](/assets/images/enterprise/migration/migration-status-complete.png)
14. 单击 **Save settings（保存设置）**。

  {% note %}

  **注**：您可以在应用配置设置并重新启动服务器后使用新实例。

  {% endnote %}

15. 使用 DNS 或 IP 地址分配将用户网络流量从旧实例切换到新实例。
16. 升级到 {{ currentVersion }} 的最新补丁版本。 更多信息请参阅“[升级 {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)。”
