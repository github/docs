---
title: 配置出站 Web 代理服务器
intro: '代理服务器为 {% data variables.product.product_location %} 额外提供了一级安全性。'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-a-proxy-server
  - /enterprise/admin/installation/configuring-an-outbound-web-proxy-server
  - /enterprise/admin/configuration/configuring-an-outbound-web-proxy-server
  - /admin/configuration/configuring-an-outbound-web-proxy-server
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure an outbound proxy
ms.openlocfilehash: 4285f24dd45d127efec4ace66729bf6fd1f188c5
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147875991'
---
## 关于 {% data variables.product.product_name %} 的代理

为 {% data variables.product.product_location %} 启用代理服务器后，除非已将目标主机添加为 HTTP 代理排除项，否则会先通过代理服务器发送由 {% data variables.product.prodname_ghe_server %} 发送的出站消息。 出站消息类型包括传出 web 挂钩、上传包和提取旧头像。 代理服务器的 URL 由协议、域或 IP 地址外加端口号构成，例如 `http://127.0.0.1:8123`。

{% note %}

注意：若要将 {% data variables.product.product_location %} 连接到 {% data variables.product.prodname_dotcom_the_website %}，代理配置必须允许与 `github.com` 和 `api.github.com` 的连接。 有关详细信息，请参阅“[将企业帐户连接到 {% data variables.product.prodname_dotcom_the_website %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)”。

{% endnote %}

{% data reusables.actions.proxy-considerations %} 有关将 {% data variables.product.prodname_actions %} 与 {% data variables.product.prodname_ghe_server %} 结合使用的详细信息，请参阅“[{% data variables.product.prodname_ghe_server %} 的 {% data variables.product.prodname_actions %} 入门](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)”。

## 配置出站 Web 代理服务器

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
1. 在“HTTP 代理服务器”下，键入代理服务器的 URL。
  ![用于输入 HTTP 代理服务器 URL 的字段](/assets/images/enterprise/management-console/http-proxy-field.png)
  
5. 或者在“HTTP 代理排除项”下输入不需要进行代理访问权限的任意主机，并以逗号分隔主机。 要将域中的所有主机排除在“需要代理访问权限”的要求之外，可以使用 `.` 作为通配符前缀。  例如：`.octo-org.tentacle`
  ![键入任何 HTTP 代理排除项的字段](/assets/images/enterprise/management-console/http-proxy-exclusion-field.png)

{% data reusables.enterprise_management_console.save-settings %}
