---
title: 访问管理控制台
intro: '{% data reusables.enterprise_site_admin_settings.about-the-management-console %}'
redirect_from:
  - /enterprise/admin/articles/about-the-management-console
  - /enterprise/admin/articles/management-console-for-emergency-recovery
  - /enterprise/admin/articles/web-based-management-console
  - /enterprise/admin/categories/management-console
  - /enterprise/admin/articles/accessing-the-management-console
  - /enterprise/admin/guides/installation/web-based-management-console
  - /enterprise/admin/installation/accessing-the-management-console
  - /enterprise/admin/configuration/accessing-the-management-console
  - /admin/configuration/accessing-the-management-console
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
shortTitle: Access the management console
ms.openlocfilehash: 3ddf8deb75c72679fc3e446127fc43ae6f5de4d3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332374'
---
## 关于 {% data variables.enterprise.management_console %}

使用 {% data variables.enterprise.management_console %} 执行基本管理活动：
- **初始设置**：首次启动 {% data variables.product.product_location %} 时，在浏览器中访问 {% data variables.product.product_location %} 的 IP 地址，简单了解初始设置流程。
- **配置实例的基本设置**：在“设”页面上配置 DNS、主机名、SSL、用户身份验证、电子邮件、监视服务和日志转发。
- **预定维护窗口**：使用 {% data variables.enterprise.management_console %} 或管理 shell 执行维护时，使 {% data variables.product.product_location %} 进入脱机状态。
- **故障排除**：生成支持包或查看高级诊断信息。
- **许可证管理**：查看或更新 {% data variables.product.prodname_enterprise %} 许可证。

即使在实例处于维护模式、存在重大应用程序故障或者主机名或 SSL 错误配置的情况下，你也始终可以通过 {% data variables.product.product_location %} 的 IP 地址访问 {% data variables.enterprise.management_console %}。

要访问 {% data variables.enterprise.management_console %}，必须使用在 {% data variables.product.product_location %} 初始设置期间确定的管理员密码。 您还必须能够连接到端口 8443 上的虚拟机主机。 如果无法访问 {% data variables.enterprise.management_console %}，请检查中间防火墙和安全组配置。

{% data variables.enterprise.management_console %} 密码哈希存储在 `/data/user/common/secrets.conf` 中，该文件会自动从主设备同步到任何高可用性副本。 对主数据库密码的任何更改都将自动复制到高可用性副本。 有关高可用性的详细信息，请参阅“[关于高可用性配置](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration)”。

## 以站点管理员身份访问 {% data variables.enterprise.management_console %}

第一次以网站管理员身份访问 {% data variables.enterprise.management_console %} 时，必须上传您的 {% data variables.product.prodname_enterprise %} 许可文件以向应用程序验证。 有关详细信息，请参阅“[管理 {% data variables.product.prodname_enterprise %} 的许可证](/billing/managing-your-license-for-github-enterprise)”。

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %}

## 以未验证用户身份访问 {% data variables.enterprise.management_console %}

1. 在浏览器中访问此 URL，将 `hostname` 替换为实际的 {% data variables.product.prodname_ghe_server %} 主机名或 IP 地址：
  ```shell
  http(s)://HOSTNAME/setup
  ```
{% data reusables.enterprise_management_console.type-management-console-password %}

## 登录尝试失败后解锁 {% data variables.enterprise.management_console %}

如果十分钟内登录尝试失败十次，{% data variables.enterprise.management_console %} 将锁定。 您必须等待登录屏幕自动解锁，然后才能再次尝试登录。 一旦前十分钟内登录尝试失败次数不足十次，登录屏幕便会自动解锁。 成功登录后，计数器会复位。

要立即解锁 {% data variables.enterprise.management_console %}，请通过管理 shell 使用 `ghe-reactivate-admin-login` 命令。 有关详细信息，请参阅“[命令行实用工具](/enterprise/admin/guides/installation/command-line-utilities#ghe-reactivate-admin-login)”和“[访问管理 shell (SSH)](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/)”。

## 排查未能连接到 {% data variables.enterprise.management_console %} 的问题

如果无法连接到 {% data variables.product.product_location %} 上的 {% data variables.enterprise.management_console %}，可查看以下信息来排查问题。

### 错误：对于通过负载均衡器的连接，“会话已过期”

如果通过负载均衡器访问 {% data variables.product.product_location %}，并且与 {% data variables.enterprise.management_console %} 的连接失败且显示“会话已过期”消息，则可能需要重新配置负载均衡器。 有关详细信息，请参阅“[将 {% data variables.product.product_name %} 与负载均衡器配合使用](/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#error-your-session-has-expired-for-connections-to-the-management-console)”。
