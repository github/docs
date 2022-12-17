---
title: 发起到副本设备的故障转移
intro: '您可以使用命令行故障转移到 {% data variables.product.prodname_ghe_server %} 副本设备以进行维护和测试，也可以在主设备发生故障时进行故障转移。'
redirect_from:
  - /enterprise/admin/installation/initiating-a-failover-to-your-replica-appliance
  - /enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-appliance
  - /admin/enterprise-management/initiating-a-failover-to-your-replica-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Initiate failover to appliance
ms.openlocfilehash: e2c15dab0a812fe6031f78e7edbccaff6a2503c0
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192991'
---
故障转移所需的时间取决于手动升级副本和重定向流量所需的时长。 平均时间范围为 20-30 分钟。

{% data reusables.enterprise_installation.promoting-a-replica %}

1. 如果主设备可用，要在切换设备之前允许复制完成，请在主设备上将主设备置于维护模式。

    - 将设备置于维护模式。

       - 若要使用管理控制台，请参阅“[启用和安排维护模式](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/)”

       - 也可使用 `ghe-maintenance -s` 命令。
         ```shell
         $ ghe-maintenance -s
         ```

   - 当活动 Git 操作、MySQL 查询和 Resque 作业数量达到零时，等待 30 秒。 

      {% note %}

      注意：Nomad 将始终有作业在运行，即使是在维护模式下，因此你可以安全地忽略这些作业。
    
      {% endnote %}

   - 若要验证所有复制通道均报告 `OK`，请使用 `ghe-repl-status -vv` 命令。

      ```shell
      $ ghe-repl-status -vv
      ```

4. 在副本设备上，要停止复制并将副本设备提升为主状态，请使用 `ghe-repl-promote` 命令。 如果可访问，此节点也会自动将主节点置于维护节点中。
  ```shell
  $ ghe-repl-promote
  ```

   {% note %}

   注意：如果主节点不可用，则可能会出现警告和超时，但可以忽略。

  {% endnote %}

5. 将 DNS 记录更新为指向副本的 IP 地址。 流量会在经过 TTL 周期后定向到副本。 如果您要使用负载均衡器，请务必将其配置为向副本发送流量。
6. 通知用户他们可以恢复正常操作。
7. 如有需要，请设置从新的主设备复制到现有设备和之前的主设备。 有关详细信息，请参阅“[关于高可用性配置](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)”。
8. 您不打算在故障转移之前将复制设置为高可用性配置一部分的设备需由 UUID 从高可用性配置中删除。
    - 在以前的设备上，通过 `cat /data/user/common/uuid` 获取其 UUID。
      ```shell
      $ cat /data/user/common/uuid
      ```
    - 在新的主设备上，使用 `ghe-repl-teardown` 删除 UUID。 请将 `UUID` 替换为你在上一步中检索到的 UUID。
      ```shell
      $ ghe-repl-teardown -u  UUID
      ```

## 延伸阅读

- “[用于复制管理的实用程序](/enterprise/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)”
