---
title: 访问管理控制台
intro: '{% data reusables.enterprise_site_admin_settings.about-the-management-console %}'
redirect_from:
  - /enterprise/admin/articles/about-the-management-console/
  - /enterprise/admin/articles/management-console-for-emergency-recovery/
  - /enterprise/admin/articles/web-based-management-console/
  - /enterprise/admin/categories/management-console/
  - /enterprise/admin/articles/accessing-the-management-console/
  - /enterprise/admin/guides/installation/web-based-management-console/
  - /enterprise/admin/installation/accessing-the-management-console
  - /enterprise/admin/configuration/accessing-the-management-console
  - /admin/configuration/accessing-the-management-console
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
---

### 关于 {% data variables.enterprise.management_console %}

使用 {% data variables.enterprise.management_console %} 执行基本管理活动：
- **初始设置**：首次启动 {% data variables.product.product_location %} 时，在浏览器中访问 {% data variables.product.product_location %} 的 IP 地址，简单了解初始设置流程。
- **配置实例的基本设置**：在“Settings”页面上配置 DNS、主机名、SSL、用户身份验证、电子邮件、监视服务和日志转发。
- **排定维护窗口**：使用 {% data variables.enterprise.management_console %} 或管理 shell 执行维护时，使 {% data variables.product.product_location %} 进入脱机状态。
- **排查问题**：生成支持包或查看高级诊断信息。
- **许可管理**：查看或更新 {% data variables.product.prodname_enterprise %} 许可。

即使在实例处于维护模式，存在重大应用程序故障或者主机名或 SSL 错误配置的情况下，您也始终可以通过 {% data variables.product.product_location %} 的 IP 地址访问 {% data variables.enterprise.management_console %}。

要访问 {% data variables.enterprise.management_console %}，您必须使用在 {% data variables.product.product_location %} 初始设置期间确定的管理员密码。 您还必须能够连接到端口 8443 上的虚拟机主机。 如果无法访问 {% data variables.enterprise.management_console %}，请检查中间防火墙和安全组配置。

### 以站点管理员身份访问 {% data variables.enterprise.management_console %}

第一次以网站管理员身份访问 {% data variables.enterprise.management_console %} 时，必须上传您的 {% data variables.product.prodname_enterprise %} 许可文件以向应用程序验证。 更多信息请参阅“[管理您的 {% data variables.product.prodname_enterprise %} 许可](/enterprise/{{ currentVersion }}/admin/guides/installation/managing-your-github-enterprise-license)”。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}

### 以未验证用户身份访问 {% data variables.enterprise.management_console %}

1. 在浏览器中访问此 URL，用您的实际 {% data variables.product.prodname_ghe_server %} 主机名或 IP 地址替换 `hostname`：
  ```shell
  http(s)://HOSTNAME/setup
  ```
{% data reusables.enterprise_management_console.type-management-console-password %}

### 登录尝试失败后解锁 {% data variables.enterprise.management_console %}

如果十分钟内登录尝试失败十次，{% data variables.enterprise.management_console %} 将锁定。 您必须等待登录屏幕自动解锁，然后才能再次尝试登录。 一旦前十分钟内登录尝试失败次数不足十次，登录屏幕便会自动解锁。 成功登录后，计数器会复位。

要立即解锁 {% data variables.enterprise.management_console %}，请通过管理 shell 使用 `ghe-reactivate-admin-login` 命令。 更多信息请参阅“[命令行实用程序](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-reactivate-admin-login)”和“[访问管理 shell (SSH)](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)”。
