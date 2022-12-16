---
title: 启用和排定维护模式
intro: '一些标准维护程序（例如升级 {% data variables.product.product_location %} 或还原备份）要求实例进入脱机状态才能正常使用。'
redirect_from:
  - /enterprise/admin/maintenance-mode
  - /enterprise/admin/categories/maintenance-mode
  - /enterprise/admin/articles/maintenance-mode
  - /enterprise/admin/articles/enabling-maintenance-mode
  - /enterprise/admin/articles/disabling-maintenance-mode
  - /enterprise/admin/guides/installation/maintenance-mode
  - /enterprise/admin/installation/enabling-and-scheduling-maintenance-mode
  - /enterprise/admin/configuration/enabling-and-scheduling-maintenance-mode
  - /admin/configuration/enabling-and-scheduling-maintenance-mode
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Maintenance
  - Upgrades
shortTitle: Configure maintenance mode
ms.openlocfilehash: 45ac412b1ae13e69d710c4dd93072143f6ffa502
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331766'
---
## 关于维护模式

某些操作类型要求你让 {% data variables.product.product_location %} 进入脱机状态并将其置于维护模式：
- 升级到新版本的 {% data variables.product.prodname_ghe_server %}
- 增加分配给虚拟机的 CPU、内存或存储资源
- 将数据从一台虚拟机迁移到另一台虚拟机
- 通过 {% data variables.product.prodname_enterprise_backup_utilities %} 快照还原数据
- 排查某些类型的关键应用程序问题

我们建议您至少将维护窗口排定在 30 分钟后，以便用户提前作好准备。 排定维护窗口后，所有用户在访问站点时都会看到横幅。



![关于已排定维护的最终用户横幅](/assets/images/enterprise/maintenance/maintenance-scheduled.png)

在实例进入维护模式后，所有正常 HTTP 和 Git 访问都会遭到拒绝。 Git 提取、克隆和推送操作也会被拒绝，并显示一条错误消息，指示站点暂时不可用。 在高可用性配置中，Git 复制将暂停。 GitHub Actions 作业不会执行。 在浏览器中访问该站点会显示维护页面。

![维护模式启动屏幕](/assets/images/enterprise/maintenance/maintenance-mode-maintenance-page.png)

{% ifversion ip-exception-list %}

可以通过配置 IP 例外列表来执行维护操作的初始验证，以仅允许从提供的 IP 地址和范围访问 {% data variables.product.product_location %}。 尝试从未在 IP 例外列表中指定的 IP 地址访问 {% data variables.product.product_location %} 时收到的响应与实例处于维护模式时发送的响应一致。 

{% endif %}

## 立即启用维护模式或排定在未来的某个时间进行维护

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. 在 {% data variables.enterprise.management_console %} 顶部，单击“维护”。
  ![“维护”选项卡](/assets/images/enterprise/management-console/maintenance-tab.png)
3. 在“Enable and schedule”下，决定立即启用维护模式还是排定在未来的某个时间进行维护。
    - 若要立即启用维护模式，请使用下拉菜单，然后单击“立即”。
    ![包含已选择立即启用维护模式的选项的下拉菜单](/assets/images/enterprise/maintenance/enable-maintenance-mode-now.png)
    - 要排定在未来的某个时间进行维护，请使用下拉菜单，然后单击开始时间。
    ![包含已选择排定在两小时后进行维护的选项的下拉菜单](/assets/images/enterprise/maintenance/schedule-maintenance-mode-two-hours.png)
4. 选择“启用维护模式”。
  ![用于启用或计划维护模式的复选框](/assets/images/enterprise/maintenance/enable-maintenance-mode-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}

{% ifversion ip-exception-list %}

## 使用 IP 例外列表在维护模式下验证更改

IP 例外列表提供对 {% data variables.product.product_location %} 的受控和受限访问，这非常适合在执行维护操作后对服务器运行状况进行初始验证。 启用后，{% data variables.product.product_location %} 将退出维护模式，并且仅适用于配置的 IP 地址。 维护模式复选框将更新，以反映状态更改。

如果重新启用维护模式，将禁用 IP 例外列表，并且 {% data variables.product.product_location %} 将恢复维护模式。 如果只是禁用 IP 例外列表，{% data variables.product.product_location %} 将恢复正常操作。

还可以使用命令行实用程序配置 IP 异常列表。 有关详细信息，请参阅“[命令行实用程序](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-maintenance)”和“[访问管理 shell (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)”。

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
1. 在 {% data variables.enterprise.management_console %} 顶部，单击“维护”，并确认已启用维护模式。
  ![“维护”选项卡](/assets/images/enterprise/management-console/maintenance-tab.png)
1. 选择“启用 IP 例外列表”。
 ![“启用 IP 例外列表”复选框](/assets/images/enterprise/maintenance/enable-ip-exception-list.png)
1. 在文本框中，键入应允许访问 {% data variables.product.product_location %} 的以空格分隔的 IP 地址或 CIDR 块的有效列表。
 ![IP 地址的已完成字段](/assets/images/enterprise/maintenance/ip-exception-list-ip-addresses.png)
1. 单击“ **保存**”。
![保存 IP 例外列表后](/assets/images/enterprise/maintenance/ip-exception-save.png)

{% endif %}

## 通过 {% data variables.product.prodname_enterprise_api %} 排定维护模式

您可以通过 {% data variables.product.prodname_enterprise_api %} 排定在其他时间或日期进行维护。 有关详细信息，请参阅“[管理控制台](/enterprise/user/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode)”。

## 为集群中的所有节点启用或禁用维护模式

使用 `ghe-cluster-maintenance` 实用工具，可以为群集中的每个节点设置或取消设置维护模式。

```shell
$ ghe-cluster-maintenance -h
# Shows options
$ ghe-cluster-maintenance -q
# Queries the current mode
$ ghe-cluster-maintenance -s
# Sets maintenance mode
$ ghe-cluster-maintenance -u
# Unsets maintenance mode
```
