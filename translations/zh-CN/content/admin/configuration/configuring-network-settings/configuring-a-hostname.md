---
title: 配置主机名
intro: 我们建议为您的设备设置主机名，不建议使用硬编码 IP 地址。
redirect_from:
  - /enterprise/admin/guides/installation/configuring-hostnames
  - /enterprise/admin/installation/configuring-a-hostname
  - /enterprise/admin/configuration/configuring-a-hostname
  - /admin/configuration/configuring-a-hostname
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
ms.openlocfilehash: 120827f8eca8061d90d397a7e2a21d46ae33f243
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: '146681315'
---
如果配置的是主机名，而不是硬编码 IP 地址，你将能够更改运行 {% data variables.product.product_location %} 的物理硬件，而不会影响用户或客户端软件。

{% data variables.enterprise.management_console %} 中的主机名设置应设置为合适的完全限定域名 (FQDN)，此域名可在互联网上或您的内部网络内解析。 例如，你的主机名设置可能是 `github.companyname.com.` Web 和 API 请求将自动重定向到 {% data variables.enterprise.management_console %} 中配置的主机名。 请注意，`localhost` 不是有效的主机名设置。

配置主机名后，可以启用子域隔离以进一步提高 {% data variables.product.product_location %} 的安全性。 有关详细信息，请参阅“[启用子域隔离](/enterprise/admin/guides/installation/enabling-subdomain-isolation/)”。

有关支持的主机名类型的详细信息，请参阅 [HTTP RFC 第 2.1 节](https://tools.ietf.org/html/rfc1123#section-2)。

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.hostname-menu-item %}
4. 键入要为 {% data variables.product.product_location %} 设置的主机名。
  ![用于设置主机名的字段](/assets/images/enterprise/management-console/hostname-field.png)
5. 要测试新主机名的 DNS 和 SSL 设置，请单击“测试域设置”。
  ![“测试域设置”按钮](/assets/images/enterprise/management-console/test-domain-settings.png) {% data reusables.enterprise_management_console.test-domain-settings-failure %} {% data reusables.enterprise_management_console.save-settings %}

为了帮助缓解各种跨站点脚本漏洞，我们建议您在配置主机名后为 {% data variables.product.product_location %} 启用子域隔离。 有关详细信息，请参阅“[启用子域隔离](/enterprise/admin/guides/installation/enabling-subdomain-isolation/)”。
