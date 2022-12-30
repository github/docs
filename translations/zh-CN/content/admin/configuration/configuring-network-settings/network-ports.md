---
title: 网络端口
redirect_from:
  - /enterprise/admin/articles/configuring-firewalls
  - /enterprise/admin/articles/firewall
  - /enterprise/admin/guides/installation/network-configuration
  - /enterprise/admin/guides/installation/network-ports-to-open
  - /enterprise/admin/installation/network-ports
  - /enterprise/admin/configuration/network-ports
  - /admin/configuration/network-ports
intro: 根据您需要为管理员、最终用户和电子邮件支持显示的网络服务有选择地打开网络端口。
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - Infrastructure
  - Networking
  - Security
ms.openlocfilehash: 048b27ed44cea11057c781ae3043078a825f8d1a
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160652'
---
## 管理端口

配置 {% data variables.location.product_location %} 并运行某些功能需要一些管理端口。 最终用户在使用基本应用程序时不需要管理端口。

| 端口 | 服务 | 说明 |
|---|---|---|
| 8443 | HTTPS | 基于安全 Web 的 {% data variables.enterprise.management_console %}。 进行基本安装和配置时需要。 |
| 8080 | HTTP | 基于纯文本 Web 的 {% data variables.enterprise.management_console %}。 除非手动禁用 TLS，否则不需要。 |
| 122 | SSH | {% data variables.location.product_location %} 的 shell 访问权限。 需要对高可用性配置中所有节点之间的传入连接开放。 默认 SSH 端口 (22) 专用于 Git 和 SSH 应用程序网络流量。 |
| 1194/UDP | VPN | 采用高可用性配置的安全复制网络隧道。 需要对配置中所有节点之间的通信开放。|
| 123/UDP| NTP | 为时间协议操作所需。 |
| 161/UDP | SNMP | 为网络监视协议操作所需。 |

## 最终用户的应用程序端口

应用程序端口为最终用户提供 Web 应用程序和 Git 访问。

| 端口 | 服务 | 说明 |
|---|---|---|
| 443 | HTTPS | 通过 HTTPS 访问 Web 应用程序和 Git。 |
| 80 | HTTP | 访问 Web 应用程序。 如果配置了 TLS，则所有请求都将重定向到 HTTPS 端口。 |
| 22 | SSH | 通过 SSH 访问 Git。 支持对公共和私有仓库执行克隆、提取和推送操作。 |
| 9418 | Git | Git 协议端口支持通过未加密网络通信对公共仓库执行克隆和提取操作。 {% data reusables.enterprise_installation.when-9418-necessary %} |

{% data reusables.enterprise_installation.terminating-tls %}

## 电子邮件端口

电子邮件端口必须可直接访问或通过中继访问，以便为最终用户提供入站电子邮件支持。

| 端口 | 服务 | 说明 |
|---|---|---|
| 25 | SMTP | 支持采用加密的 SMTP (STARTTLS)。 |

## {% data variables.product.prodname_actions %} 端口

{% data variables.product.prodname_actions %} 端口必须可供自托管运行器访问才能连接到 {% data variables.location.product_location %}。 有关详细信息，请参阅[关于自承载运行器](/actions/hosting-your-own-runners/about-self-hosted-runners#communication-between-self-hosted-runners-and-github-enterprise-server)。

| 端口 | 服务 | 说明 |
|---|---|---|
| 443 | HTTPS | 自托管运行器连接到 {% data variables.location.product_location %} 以接收作业分配并下载新版本的运行器应用程序。 如果配置了 TLS 则必填。
| 80 | HTTP | 自托管运行器连接到 {% data variables.location.product_location %} 以接收作业分配并下载新版本的运行器应用程序。 如果未配置 TLS 则必填。

如果启用对 {% data variables.product.prodname_dotcom_the_website %} 操作的自动访问，{% data variables.product.prodname_actions %} 将始终先通过这些端口搜索 {% data variables.location.product_location %} 上的操作，然后再检查 {% data variables.product.prodname_dotcom_the_website %}。 有关详细信息，请参阅“[使用 {% data variables.product.prodname_github_connect %} 启用对 {% data variables.product.prodname_dotcom_the_website %} 操作的自动访问](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#about-resolution-for-actions-using-github-connect)。”

## {% data variables.product.prodname_github_connect %} 端口

如果启用 {% data variables.product.prodname_github_connect %}，则 {% data variables.product.product_name %} 和 {% data variables.product.prodname_dotcom_the_website %} 之间的连接使用 HTTPS 通过端口 443 或 80，并且需要 TLS。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)”。

## 延伸阅读

- “[配置 TLS](/admin/configuration/configuring-network-settings/configuring-tls)”
