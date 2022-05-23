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
shortTitle: 配置维护模式
---

## 关于维护模式

某些操作类型要求您让 {% data variables.product.product_location %} 进入脱机状态并将其置于维护模式：
- 升级到新版本的 {% data variables.product.prodname_ghe_server %}
- 增加分配给虚拟机的 CPU、内存或存储资源
- 将数据从一台虚拟机迁移到另一台虚拟机
- 通过 {% data variables.product.prodname_enterprise_backup_utilities %} 快照还原数据
- 排查某些类型的关键应用程序问题

我们建议您至少将维护窗口排定在 30 分钟后，以便用户提前作好准备。 排定维护窗口后，所有用户在访问站点时都会看到横幅。



![关于已排定维护的最终用户横幅](/assets/images/enterprise/maintenance/maintenance-scheduled.png)

在实例进入维护模式后，所有正常 HTTP 和 Git 访问都会遭到拒绝。 Git 提取、克隆和推送操作也会被拒绝，并显示一条错误消息，指示站点暂时不可用。 在高可用性配置中，Git 复制将暂停。 GitHub Actions 作业不会执行。 在浏览器中访问该站点会显示维护页面。

![维护模式启动屏幕](/assets/images/enterprise/maintenance/maintenance-mode-maintenance-page.png)

{% if ip-exception-list %}

您可以通过配置 IP 例外列表来执行维护操作的初始验证，以仅允许从提供的 IP 地址和范围访问 {% data variables.product.product_location %}。 尝试从 IP 例外列表中未指定的 IP 地址访问 {% data variables.product.product_location %} 将收到与实例处于维护模式时发送的响应一致的响应。

{% endif %}

## 立即启用维护模式或排定在未来的某个时间进行维护

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. 在 {% data variables.enterprise.management_console %} 顶部，单击 **Maintenance**。 ![Maintenance 选项卡](/assets/images/enterprise/management-console/maintenance-tab.png)
3. 在“Enable and schedule”下，决定立即启用维护模式还是排定在未来的某个时间进行维护。
    - 要立即启用维护模式，请使用下拉菜单，然后单击 **now**。 ![包含已选择立即启用维护模式的选项的下拉菜单](/assets/images/enterprise/maintenance/enable-maintenance-mode-now.png)
    - 要排定在未来的某个时间进行维护，请使用下拉菜单，然后单击开始时间。 ![包含已选择排定在两小时后进行维护的选项的下拉菜单](/assets/images/enterprise/maintenance/schedule-maintenance-mode-two-hours.png)
4. 选择 **Enable maintenance mode**。 ![启用或排定维护模式的复选框](/assets/images/enterprise/maintenance/enable-maintenance-mode-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}

{% if ip-exception-list %}

## 在维护模式下使用 IP 例外列表验证更改

IP 例外列表提供对 {% data variables.product.product_location %} 的受控和受限访问，这非常适合在维护操作后对服务器运行状况进行初始验证。 启用后，{% data variables.product.product_location %} 将退出维护模式，并且仅对配置的 IP 地址可用。 将更新维护模式复选框以反映状态更改。

如果重新启用维护模式，IP 例外列表将被禁用，{% data variables.product.product_location %} 将恢复到维护模式。 如果只是禁用 IP 例外列表，{% data variables.product.product_location %} 将恢复正常操作。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. 在 {% data variables.enterprise.management_console %} 顶部，单击 **Maintenance（维护）**，然后确认已启用维护模式。 ![Maintenance 选项卡](/assets/images/enterprise/management-console/maintenance-tab.png)
1. 选择 **Enable IP exception list（启用 IP 例外列表）**。 ![用于启用 IP 例外列表的复选框](/assets/images/enterprise/maintenance/enable-ip-exception-list.png)
1. 在文本框中，键入应允许访问 {% data variables.product.product_location %} 的空格分隔 IP 地址或 CIDR 块有效列表。 ![已完成的 IP 地址字段](/assets/images/enterprise/maintenance/ip-exception-list-ip-addresses.png)
1. 单击 **Save（保存）**。 ![IP 例外列表保存后](/assets/images/enterprise/maintenance/ip-exception-save.png)

{% endif %}

## 通过 {% data variables.product.prodname_enterprise_api %} 排定维护模式

您可以通过 {% data variables.product.prodname_enterprise_api %} 排定在其他时间或日期进行维护。 更多信息请参阅“[管理控制台](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode)”。

## 为集群中的所有节点启用或禁用维护模式

您可以通过 `ghe-cluster-maintenance` 实用程序为集群中的每个节点设置或取消设置维护模式。

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
