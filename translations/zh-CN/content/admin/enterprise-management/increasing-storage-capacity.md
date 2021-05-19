---
title: 增加存储容量
intro: 您可以增加或更改可供 Git 仓库、数据库、搜索索引和其他持久应用程序数据使用的存储容量。
redirect_from:
  - /enterprise/admin/installation/increasing-storage-capacity
  - /enterprise/admin/enterprise-management/increasing-storage-capacity
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
  - Storage
---

{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

随着更多的用户加入 {% data variables.product.product_location %}，您可能需要调整存储卷大小。 有关调整存储容量的信息，请参阅虚拟平台的相关文档。

### 要求与建议

{% note %}

**注**：调整用户存储卷之前，请将实例置于维护模式。 更多信息请参阅“[启用和排定维护模式](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)”。

{% endnote %}

#### 最低要求

{% data reusables.enterprise_installation.hardware-rec-table %}

### 增加数据分区大小

1. 使用虚拟平台工具调整现有用户卷磁盘大小。
{% data reusables.enterprise_installation.ssh-into-instance %}
3. 将设备置于维护模式。 更多信息请参阅“[启用和排定维护模式](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)”。
4. 重启设备，以检测新存储分配。
  ```shell
  $ sudo reboot
  ```
5. 运行 `ghe-storage-extend` 命令以展开 `/data/user` 文件系统：
  ```shell
  $ ghe-storage-extend
  ```

### 使用新设备增加根分区大小

1. 使用版本与当前设备相同的较大根磁盘来设置新的 {% data variables.product.prodname_ghe_server %} 实例。 更多信息请参阅“[设置 {% data variables.product.prodname_ghe_server %} 实例](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-up-a-github-enterprise-server-instance)”。
2. 关闭当前设备：
  ```shell
  $ sudo poweroff
  ```
3. 使用虚拟平台工具将数据磁盘从当前设备中拆下。
4. 将数据磁盘安装到根磁盘较大的新设备上。

### 使用现有设备增加根分区大小

1. 将新磁盘连接到 {% data variables.product.prodname_ghe_server %} 设备。
2. 运行 `parted` 命令，将磁盘格式化：
  ```shell
  $ sudo parted /dev/xvdg mklabel msdos
  $ sudo parted /dev/xvdg mkpart primary ext4 0% 50%
  $ sudo parted /dev/xvdg mkpart primary ext4 50% 100%
  ```
3. 运行 `ghe-upgrade` 命令，将完整的平台特定包安装到新分区的磁盘中。 `github-enterprise-2.11.9.hpkg` 等通用热补丁升级包将无法按预期运行。
  ```shell
  $ ghe-upgrade PACKAGE-NAME.pkg -s -t /dev/xvdg1
  ```
4. 关闭设备：
  ```shell
  $ sudo poweroff
  ```
5. 在虚拟机监控程序中，移除旧的根磁盘，并将新的根磁盘连接到旧的根磁盘的位置。
6. 启动设备。
