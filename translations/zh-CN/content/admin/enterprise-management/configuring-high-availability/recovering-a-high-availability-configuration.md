---
title: 恢复高可用性配置
intro: '在故障转移到 {% data variables.product.prodname_ghe_server %} 设备后，您应尽快恢复冗余，而不应依赖于一台设备。'
redirect_from:
  - /enterprise/admin/installation/recovering-a-high-availability-configuration
  - /enterprise/admin/enterprise-management/recovering-a-high-availability-configuration
  - /admin/enterprise-management/recovering-a-high-availability-configuration
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: 恢复 HA 配置
---

## 关于高可用性配置的恢复

如果故障转移是在计划内进行的，或者与设备的健康状态无关，则可以将之前的主设备用作新的副本设备。 如果故障转移与主设备的问题相关，则最好创建新的副本设备。 更多信息请参阅“[创建高可用性副本](/enterprise/{{ currentVersion }}/admin/guides/installation/creating-a-high-availability-replica/)”。

{% warning %}

**警告：** 在将以前的主设备配置为新副本之前，必须启用维护模式。 如果不启用维护模式，将导致生产中断。

{% endwarning %}

## 将之前的主设备配置为新副本

1. 使用 SSH 连接到之前的主设备的 IP 地址。
  ```shell
  $ ssh -p 122 admin@<em>FORMER PRIMARY IP</em>
  ```
1. 在以前的主设备上启用维护模式。 更多信息请参阅“[启用和排定维护模式](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)”。
1. 在之前的主设备上，使用之前副本的 IP 地址运行 `ghe-repl-setup`。
  ```shell
  $ ghe-repl-setup <em>FORMER REPLICA IP</em>
  ```
{% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. 要验证与新的主设备的连接并为新副本启用副本模式，请再次运行 `ghe-repl-setup`。
  ```shell
  $ ghe-repl-setup <em>FORMER REPLICA IP</em>
  ```
{% data reusables.enterprise_installation.replication-command %}
