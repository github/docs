---
title: 为企业配置包生态系统支持
intro: '可通过全局启用或禁用企业上的单个包生态系统（包括 {% ifversion ghes > 3.4 %}{% data variables.product.prodname_container_registry %}、{% endif %}Docker 和 npm），为企业配置 {% data variables.product.prodname_registry %}。 了解支持特定包生态系统的其他配置要求。'
redirect_from:
  - /enterprise/admin/packages/configuring-packages-support-for-your-enterprise
  - /admin/packages/configuring-packages-support-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Packages
shortTitle: Configure package ecosystems
ms.openlocfilehash: 83de80e4233f671a7a923394d2fd3f6e554bba10
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147062544'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

## 启用或禁用单个包生态系统

要防止上传新包，可以将以前启用的生态系统设置为“只读”，同时仍允许下载现有包。

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %}
1. 在“生态系统切换”下，对于每个包类型，选择“已启用”、“只读”或“已禁用”。
   {%- ifversion ghes > 3.4 %}{% note -%} 注意：必须启用子域隔离才能切换 {% data variables.product.prodname_container_registry %} 选项。
   {%- endnote %}{%- endif %}{%- ifversion ghes %} ![生态系统切换](/assets/images/enterprise/site-admin-settings/ecosystem-toggles.png){% else %} ![生态系统切换](/assets/images/enterprise/3.1/site-admin-settings/ecosystem-toggles.png){% endif %} {% data reusables.enterprise_management_console.save-settings %}

{% ifversion ghes %}
## 连接到官方 npm 注册表

如果您已在企业中启用了 npm 包，并希望允许访问官方 npm 注册表以及 {% data variables.product.prodname_registry %} npm 注册表，则必须执行一些附加配置。

{% data variables.product.prodname_registry %} 使用透明的网络流量代理连接到 `registry.npmjs.com` 上的官方 npm 注册表。 代理在默认情况下已启用，不能禁用。

要允许与 npm 注册表之间的网络连接，需要配置网络 ACL，以允许 {% data variables.product.prodname_ghe_server %} 通过端口 443 将 HTTPS 流量发送到 `registry.npmjs.com`：

| 源 | 目标 | 端口 | 类型 |
|---|---|---|---|
| {% data variables.product.prodname_ghe_server %} | `registry.npmjs.com` | TCP/443 | HTTPS |

请注意，与 `registry.npmjs.com` 的连接遍历 Cloudflare 网络，但此后不连接至单个静态 IP 地址；而是连接到此处列出的 CIDR 范围内的 IP 地址： https://www.cloudflare.com/ips/ 。

如果要启用 npm 上游源，请为 `npm upstreaming` 选择 `Enabled`。

{% endif %}

## 后续步骤

下一步，我们建议您检查是否需要更新或上传包主机 URL 的 TLS 证书。 有关详细信息，请参阅“[企业 GitHub Packages 使用入门](/admin/packages/getting-started-with-github-packages-for-your-enterprise)”。
