---
title: 配置时间同步
intro: '{% data variables.product.prodname_ghe_server %} 通过连接到 NTP 服务器自动同步其时钟。 您可以设置用于同步时钟的 NTP 服务器，也可以使用默认 NTP 服务器。'
redirect_from:
  - /enterprise/admin/articles/adjusting-the-clock
  - /enterprise/admin/articles/configuring-time-zone-and-ntp-settings
  - /enterprise/admin/articles/setting-ntp-servers
  - /enterprise/admin/categories/time
  - /enterprise/admin/installation/configuring-time-synchronization
  - /enterprise/admin/configuration/configuring-time-synchronization
  - /admin/configuration/configuring-time-synchronization
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure time settings
ms.openlocfilehash: 34ab851e50467a06eb0003d32306d1cd26e9a2d8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145098101'
---
## 更改默认 NTP 服务器

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. 在左侧边栏中，单击“时间”。
    ![{% data variables.enterprise.management_console %} 边栏中的“时间”按钮](/assets/images/enterprise/management-console/sidebar-time.png)
3. 在“Primary NTP server”下，输入主 NTP 服务器的主机名。 在“Secondary NTP server”下，输入辅助 NTP 服务器的主机名。
    ![{% data variables.enterprise.management_console %} 中用于主 NTP 服务器和辅助 NTP 服务器的字段](/assets/images/enterprise/management-console/ntp-servers.png)
4. 在页面的底部，单击“保存更改”。
    ![{% data variables.enterprise.management_console %} 中的“保存设置”按钮](/assets/images/enterprise/management-console/save-settings.png)
5. 等待配置运行完毕。

## 更正较大的时间偏差

NTP 协议会持续更正较小的时间同步偏差。 您可以使用管理 shell 立即同步时间。

{% note %}

**注意：**
 - 您无法修改协调世界时 (UTC) 时区。
 - 您应阻止虚拟机监控程序设置虚拟机时钟。 更多信息请参阅虚拟化提供商提供的文档。

{% endnote %}

- 使用 `chronyc` 命令将服务器与配置的 NTP 服务器同步。 例如：

```shell
$ sudo chronyc -a makestep
```
