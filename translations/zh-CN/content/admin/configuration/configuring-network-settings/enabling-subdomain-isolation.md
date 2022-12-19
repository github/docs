---
title: 启用子域隔离
intro: '您可以设置子域隔离，将用户提供的内容与 {% data variables.product.prodname_ghe_server %} 设备的其他部分安全地隔离。'
redirect_from:
  - /enterprise/admin/guides/installation/about-subdomain-isolation
  - /enterprise/admin/installation/enabling-subdomain-isolation
  - /enterprise/admin/configuration/enabling-subdomain-isolation
  - /admin/configuration/enabling-subdomain-isolation
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Security
shortTitle: Enable subdomain isolation
ms.openlocfilehash: 6ce23de3646d3ca3f4523ec7716907f8b5430564
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193095'
---
## 关于子域隔离

子域隔离可以减少跨站脚本和其他相关漏洞。 有关详细信息，请参阅维基百科上的“[跨站脚本](http://en.wikipedia.org/wiki/Cross-site_scripting)”。 强烈建议在 {% data variables.location.product_location %} 上启用子域隔离。

启用子域隔离后，{% data variables.product.prodname_ghe_server %} 会以子域替代多个路径。 启用子域隔离后，尝试访问某些用户提供内容的以前的路径（如 `http(s)://HOSTNAME/raw/`）可能会返回 `404` 错误。

{% data reusables.enterprise_site_admin_settings.3-7-new-subdomains %}

| 未使用子域隔离的路径  | 使用子域隔离的路径   |
| --- | --- |
| `http(s)://HOSTNAME/` | `http(s)://docker.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/npm/` | `https://npm.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/rubygems/` | `https://rubygems.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/maven/` | `https://maven.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/nuget/` | `https://nuget.HOSTNAME/` |
| `http(s)://HOSTNAME/assets/` | `http(s)://assets.HOSTNAME/` |
| `http(s)://HOSTNAME/avatars/` | `http(s)://avatars.HOSTNAME/` |
| `http(s)://HOSTNAME/codeload/` | `http(s)://codeload.HOSTNAME/` |
| `http(s)://HOSTNAME/gist/` | `http(s)://gist.HOSTNAME/` |
| `http(s)://HOSTNAME/media/` | `http(s)://media.HOSTNAME/` |
{%- ifversion viewscreen-and-notebooks %} | `http(s)://HOSTNAME/notebooks/` | `http(s)://notebooks.HOSTNAME/` | {%- endif %} | `http(s)://HOSTNAME/pages/` | `http(s)://pages.HOSTNAME/` | | `http(s)://HOSTNAME/raw/` | `http(s)://raw.HOSTNAME/` | {%- ifversion ghes < 3.7 %} | `http(s)://HOSTNAME/render/` | `http(s)://render.HOSTNAME/` | {%- endif %} | `http(s)://HOSTNAME/reply/` | `http(s)://reply.HOSTNAME/` | | `http(s)://HOSTNAME/uploads/` | `http(s)://uploads.HOSTNAME/` | {%- ifversion viewscreen-and-notebooks %} | `http(s)://HOSTNAME/viewscreen/` | `http(s)://viewscreen.HOSTNAME/` | {%- endif %} {%- ifversion ghes > 3.4 %} | Not supported | `https://containers.HOSTNAME/` | {%- endif %}

## 先决条件

{% data reusables.enterprise_installation.disable-github-pages-warning %}

启用子域隔离之前，您必须为新域配置网络设置。

- 指定有效域名作为主机名，而不是指定 IP 地址。 有关详细信息，请参阅“[配置主机名](/enterprise/admin/guides/installation/configuring-a-hostname)”。

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

- 为上文列出的子域设置通配符域名系统 (DNS) 记录或单独的 DNS 记录。 建议为指向服务器 IP 地址的 `*.HOSTNAME` 创建一条 A 记录，从而无需为各个子域创建多条记录。
- 为 `*.HOSTNAME` 获取一个使用者可选名称 (SAN) 同时适用于 `HOSTNAME` 和通配符域 `*.HOSTNAME` 的通配符传输层安全 (TLS) 证书。 例如，如果主机名为 `github.octoinc.com`，则获取一个公用名值设为 `*.github.octoinc.com`、SAN 值同时设为 `github.octoinc.com` 和 `*.github.octoinc.com` 的证书。
- 在设备上启用 TLS。 有关详细信息，请参阅“[配置 TLS](/enterprise/admin/guides/installation/configuring-tls/)”。

## 启用子域隔离

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.hostname-menu-item %}
4. 选择“子域隔离(建议)”。
  ![用于启用子域隔离的复选框](/assets/images/enterprise/management-console/subdomain-isolation.png) {% data reusables.enterprise_management_console.save-settings %}
