---
title: 为企业配置包生态系统支持
intro: '您可以通过全局启用或禁用企业上的单个包生态系统（包括 Docker、RubyGems、npm、Apache Maven、Gradle 或 NuGet）为企业配置 {% data variables.product.prodname_registry %} 。 了解支持特定包生态系统的其他配置要求。'
redirect_from:
  - /enterprise/admin/packages/configuring-packages-support-for-your-enterprise
  - /admin/packages/configuring-packages-support-for-your-enterprise
versions:
  enterprise-server: '>=2.22'
topics:
  - 企业
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### 启用或禁用单个包生态系统

要防止上传新包，可以将以前启用的生态系统设置为**只读**，同时仍允许下载现有包。

{% if currentVersion == "enterprise-server@2.22" %}
要将
{% data variables.product.prodname_registry %} 用于 Docker，您必须为实例启用子域隔离。 更多信息请参阅“[启用子域隔离](/enterprise/admin/configuration/enabling-subdomain-isolation)”。
{% endif %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
1. 在“Ecosystem Toggles（生态系统切换）”下，为每个包类型选择 **Enabled（启用）**、**Read-Only（只读）**或 **Disabled（禁用）**。 ![生态系统切换](/assets/images/enterprise/site-admin-settings/ecosystem-toggles.png)
{% data reusables.enterprise_management_console.save-settings %}

{% if currentVersion == "enterprise-server@3.0" or currentVersion ver_gt "enterprise-server@3.0" %}
### 连接到官方 npm 注册表

如果您已在企业中启用了 npm 包，并希望允许访问官方 npm 注册表以及 {% data variables.product.prodname_registry %} npm 注册表，则必须执行一些附加配置。

{% data variables.product.prodname_registry %} 使用透明的网络流量代理连接到 `registry.npmjs.com` 上的官方 npm 注册表。 代理在默认情况下已启用，不能禁用。

要允许网络连接到 npm 注册表，您需要配置网络 ACL，以允许 {% data variables.product.prodname_ghe_server %} 将 HTTPS 流量通过端口 443 发送到 `registry.npmjs.com`：

| 源                                                  | 目标                   | 端口      | 类型    |
| -------------------------------------------------- | -------------------- | ------- | ----- |
| {% data variables.product.prodname_ghe_server %} | `registry.npmjs.com` | TCP/443 | HTTPS |

请注意，`registry.npmjs.com` 的连接遍历 Cloudflare 网络，但此后不连接至单个静态 IP 地址；而是连接到此处列出的 CIDR 范围内的 IP 地址：https://www.cloudflare.com/ips/。

{% endif %}

### 后续步骤

下一步，我们建议您检查是否需要更新或上传包主机 URL 的 TLS 证书。 更多信息请参阅“[企业的 GitHub Packages 使用入门](/admin/packages/getting-started-with-github-packages-for-your-enterprise)”。
