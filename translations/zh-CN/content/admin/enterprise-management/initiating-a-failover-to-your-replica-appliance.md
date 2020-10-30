---
title: 发起到副本设备的故障转移
intro: '您可以使用命令行故障转移到 {% data variables.product.prodname_ghe_server %} 副本设备以进行维护和测试，也可以在主设备发生故障时进行故障转移。'
redirect_from:
  - /enterprise/admin/installation/initiating-a-failover-to-your-replica-appliance
  - /enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-appliance
versions:
  enterprise-server: '*'
---

故障转移所需的时间取决于手动升级副本和重定向流量所需的时长。 平均时间范围为 2-10 分钟。

{% data reusables.enterprise_installation.promoting-a-replica %}

1. 要允许复制在切换设备之前完成，请将主设备置于维护模式：
    - 要使用 Management Console，请参阅“[启用和排定维护模式](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/)”。
    - 您也可以使用 `ghe-maintenance -s` 命令。
      ```shell
      $ ghe-maintenance -s
      ```
2. 当活动 Git 操作的数量达到零时，请等待 30 秒。
3. 要验证所有复制通道均报告 `OK`，请使用 `ghe-repl-status -vv` 命令。
  ```shell
  $ ghe-repl-status -vv
  ```
4. 要停止复制并将副本设备升级为主设备，请使用 `ghe-repl-promote` 命令。 此操作还会自动将主节点（若可到达）置于维护模式。
  ```shell
  $ ghe-repl-promote
  ```
5. 将 DNS 记录更新为指向副本的 IP 地址。 流量会在经过 TTL 周期后定向到副本。 如果您要使用负载均衡器，请务必将其配置为向副本发送流量。
6. 通知用户他们可以恢复正常操作。
7. 如有需要，请设置从新的主设备复制到现有设备和之前的主设备。 更多信息请参阅“[关于高可用性配置](/enterprise/{{ currentVersion }}/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)”。

### 延伸阅读

- "[用于复制管理的实用程序](/enterprise/{{ currentVersion }}/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)"
