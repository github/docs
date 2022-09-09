---
title: 增加存储容量
intro: 您可以增加或更改可供 Git 仓库、数据库、搜索索引和其他持久应用程序数据使用的存储容量。
redirect_from:
  - /enterprise/admin/installation/increasing-storage-capacity
  - /enterprise/admin/enterprise-management/increasing-storage-capacity
  - /admin/enterprise-management/increasing-storage-capacity
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
  - Storage
shortTitle: Increase storage capacity
ms.openlocfilehash: b6542e1f43ce4111358de3940c8e46dea2afd5d5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065390'
---
{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

随着更多的用户加入 {% data variables.product.product_location %}，你可能需要调整存储卷大小。 有关调整存储容量的信息，请参阅虚拟平台的相关文档。

## 要求和建议

{% note %}

注意：在重新调整任何存储卷的大小之前，请将实例置于维护模式。{% ifversion ip-exception-list %} 你可以通过配置 IP 例外列表来验证更改，从而允许从指定 IP 地址进行访问。 {% endif %} 有关详细信息，请参阅“[启用和排定维护模式](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)”。

{% endnote %}

### 最低要求

{% data reusables.enterprise_installation.hardware-rec-table %}

## 增加数据分区大小

1. 使用虚拟平台工具调整现有用户卷磁盘大小。
{% data reusables.enterprise_installation.ssh-into-instance %}
3. 将设备置于维护模式。 有关详细信息，请参阅“[启用和安排维护模式](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)”。
4. 重启设备，以检测新存储分配。
  ```shell
  $ sudo reboot
  ```
5. 运行 `ghe-storage-extend` 命令以扩展 `/data/user` 文件系统：
  ```shell
  $ ghe-storage-extend
  ```

## 使用新设备增加根分区大小

1. 使用版本与当前设备相同的较大根磁盘来设置新的 {% data variables.product.prodname_ghe_server %} 实例。 有关详细信息，请参阅“[设置 {% data variables.product.prodname_ghe_server %} 实例](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance)”。
2. 关闭当前设备：
  ```shell
  $ sudo poweroff
  ```
3. 使用虚拟平台工具将数据磁盘从当前设备中拆下。
4. 将数据磁盘安装到根磁盘较大的新设备上。

## 使用现有设备增加根分区大小

{% warning %}

警告：在增加根分区大小之前，你必须将你的实例置于维护模式。 有关详细信息，请参阅“[启用和安排维护模式](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)”。

{% endwarning %}

1. 将新磁盘连接到 {% data variables.product.prodname_ghe_server %} 设备。
1. 运行 `lsblk` 命令以标识新磁盘的设备名称。
1. 运行 `parted` 命令以设置磁盘格式，用你的设备名称取代 `/dev/xvdg`：
  ```shell
  $ sudo parted /dev/xvdg mklabel msdos
  $ sudo parted /dev/xvdg mkpart primary ext4 0% 50%
  $ sudo parted /dev/xvdg mkpart primary ext4 50% 100%
  ```
1. 若要停止复制，请运行 `ghe-repl-stop` 命令。

   ```shell
   $ ghe-repl-stop
   ```
   
1. 运行 `ghe-upgrade` 命令，将完整的平台特定包安装到新分区的磁盘中。 通用热补丁升级包（例如 `github-enterprise-2.11.9.hpkg`）无法按预期工作。 在 `ghe-upgrade` 命令完成后，应用程序服务将自动终止。

  ```shell
  $ ghe-upgrade PACKAGE-NAME.pkg -s -t /dev/xvdg1
  ```
1. 关闭设备：
  ```shell
  $ sudo poweroff
  ```
1. 在虚拟机监控程序中，移除旧的根磁盘，并将新的根磁盘连接到旧的根磁盘的位置。
1. 启动设备。
1. 确保系统服务正常运行，然后释放维护模式。 有关详细信息，请参阅“[启用和安排维护模式](/admin/guides/installation/enabling-and-scheduling-maintenance-mode)”。

如果你的设备配置为高可用性或异地复制，请记住在所有节点上的存储升级后，使用 `ghe-repl-start` 在每个副本节点上开始复制。
