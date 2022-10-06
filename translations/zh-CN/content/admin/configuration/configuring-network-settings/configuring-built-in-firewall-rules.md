---
title: 配置内置防火墙规则
intro: '可以查看默认防火墙规则并自定义 {% data variables.product.product_location %} 的规则。'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-firewall-settings
  - /enterprise/admin/installation/configuring-built-in-firewall-rules
  - /enterprise/admin/configuration/configuring-built-in-firewall-rules
  - /admin/configuration/configuring-built-in-firewall-rules
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure firewall rules
ms.openlocfilehash: 7492f69c6b334847229c76f7462beaabbc4154a2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145100090'
---
## 关于 {% data variables.product.product_location %} 的防火墙

{% data variables.product.prodname_ghe_server %} 在虚拟设备上使用 Ubuntu 的简单防火墙 (UFW)。 有关详细信息，请参阅 Ubuntu 文档中的 [UFW](https://help.ubuntu.com/community/UFW)。 {% data variables.product.prodname_ghe_server %} 在每次发布时都会自动更新允许服务的防火墙允许名单。

安装 {% data variables.product.prodname_ghe_server %} 之后，所有必要的网络端口都会自动打开，以接受连接。 每个非必要的端口都会自动配置为 `deny`，默认传出策略会配置为 `allow`。 会为任何新连接启用状态跟踪；这些连接通常是设置了 `SYN` 位的网络数据包。 有关详细信息，请参阅“[网络端口](/enterprise/admin/guides/installation/network-ports)”。

UFW 防火墙还会打开 {% data variables.product.prodname_ghe_server %} 所需的其他多个端口才能正常运行。 有关 UFW 规则集的详细信息，请参阅 [UFW 自述文件](https://bazaar.launchpad.net/~jdstrand/ufw/0.30-oneiric/view/head:/README#L213)。

## 查看默认防火墙规则

{% data reusables.enterprise_installation.ssh-into-instance %}
2. 若要查看默认防火墙规则，请使用 `sudo ufw status` 命令。 此时会看到与下面类似的输出：
  ```shell
  $ sudo ufw status
  > Status: active
  > To                         Action      From
  > --                         ------      ----
  > ghe-1194                   ALLOW       Anywhere
  > ghe-122                    ALLOW       Anywhere
  > ghe-161                    ALLOW       Anywhere
  > ghe-22                     ALLOW       Anywhere
  > ghe-25                     ALLOW       Anywhere
  > ghe-443                    ALLOW       Anywhere
  > ghe-80                     ALLOW       Anywhere
  > ghe-8080                   ALLOW       Anywhere
  > ghe-8443                   ALLOW       Anywhere
  > ghe-9418                   ALLOW       Anywhere
  > ghe-1194 (v6)              ALLOW       Anywhere (v6)
  > ghe-122 (v6)               ALLOW       Anywhere (v6)
  > ghe-161 (v6)               ALLOW       Anywhere (v6)
  > ghe-22 (v6)                ALLOW       Anywhere (v6)
  > ghe-25 (v6)                ALLOW       Anywhere (v6)
  > ghe-443 (v6)               ALLOW       Anywhere (v6)
  > ghe-80 (v6)                ALLOW       Anywhere (v6)
  > ghe-8080 (v6)              ALLOW       Anywhere (v6)
  > ghe-8443 (v6)              ALLOW       Anywhere (v6)
  > ghe-9418 (v6)              ALLOW       Anywhere (v6)
  ```

## 添加自定义防火墙规则

{% warning %}

警告：在添加自定义防火墙规则之前，请备份当前规则，以便在需要时可以重置为已知的工作状态。 如果您被锁定在服务器之外，请与 {% data variables.contact.contact_ent_support %} 联系，以重新配置原始防火墙规则。 恢复原始防火墙规则会导致服务器停机。

{% endwarning %}

1. 配置自定义防火墙规则。
2. 使用 `status numbered` 命令检查每条新规则的状态。
  ```shell
  $ sudo ufw status numbered
  ```
3. 要备份自定义防火墙规则，请使用 `cp` 命令将规则移动到新文件。
  ```shell
  $ sudo cp -r /etc/ufw ~/ufw.backup
  ```

升级 {% data variables.product.product_location %} 后，必须重新应用自定义防火墙规则。 我们建议您创建脚本来重新应用防火墙自定义规则。

## 恢复默认防火墙规则

如果更改防火墙规则后出现问题，您可以通过原始备份重置规则。

{% warning %}

警告：如果对防火墙进行更改之前未备份原始规则，请联系 {% data variables.contact.contact_ent_support %} 获取更多帮助。

{% endwarning %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. 要还原之前的备份规则，请使用 `cp` 命令将规则复制到防火墙。
  ```shell
  $ sudo cp -f ~/ufw.backup/*rules /etc/ufw
  ```
3. 使用 `systemctl` 命令重启防火墙。
  ```shell
  $ sudo systemctl restart ufw
  ```
4. 使用 `ufw status` 命令确认规则已恢复为默认状态。
  ```shell
  $ sudo ufw status
  > Status: active
  > To                         Action      From
  > --                         ------      ----
  > ghe-1194                   ALLOW       Anywhere
  > ghe-122                    ALLOW       Anywhere
  > ghe-161                    ALLOW       Anywhere
  > ghe-22                     ALLOW       Anywhere
  > ghe-25                     ALLOW       Anywhere
  > ghe-443                    ALLOW       Anywhere
  > ghe-80                     ALLOW       Anywhere
  > ghe-8080                   ALLOW       Anywhere
  > ghe-8443                   ALLOW       Anywhere
  > ghe-9418                   ALLOW       Anywhere
  > ghe-1194 (v6)              ALLOW       Anywhere (v6)
  > ghe-122 (v6)               ALLOW       Anywhere (v6)
  > ghe-161 (v6)               ALLOW       Anywhere (v6)
  > ghe-22 (v6)                ALLOW       Anywhere (v6)
  > ghe-25 (v6)                ALLOW       Anywhere (v6)
  > ghe-443 (v6)               ALLOW       Anywhere (v6)
  > ghe-80 (v6)                ALLOW       Anywhere (v6)
  > ghe-8080 (v6)              ALLOW       Anywhere (v6)
  > ghe-8443 (v6)              ALLOW       Anywhere (v6)
  > ghe-9418 (v6)              ALLOW       Anywhere (v6)
  ```
