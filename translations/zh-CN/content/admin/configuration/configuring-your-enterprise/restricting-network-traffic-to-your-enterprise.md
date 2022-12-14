---
title: 限制到企业的网络流量
shortTitle: Restricting network traffic
intro: 您可以使用 IP 允许列表将企业访问权限限制为来自指定 IP 地址的连接。
versions:
  ghae: '*'
type: how_to
topics:
- Access management
- Enterprise
- Fundamentals
- Networking
- Security
redirect_from:
- /admin/configuration/restricting-network-traffic-to-your-enterprise
ms.openlocfilehash: 4172596d7907cd7aab809d34cf5953eec3956329
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: "145100063"
---
## <a name="about-ip-allow-lists"></a>关于 IP 允许列表

默认情况下，授权用户可以从任何 IP 地址访问您的企业。 企业所有者可以通过为特定 IP 地址配置允许列表，来限制对企业帐户中组织拥有的资产的访问。 {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %} {% data reusables.identity-and-permissions.ip-allow-lists-enterprise %} 

您还可以为单个组织配置允许的 IP 地址。 有关详细信息，请参阅“[为组织管理允许的 IP 地址](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)”。

默认情况下，Azure 网络安全组 (NSG) 规则允许所有入站流量在端口 22、80、443 和 25 打开。 企业所有者可以联系 {% data variables.contact.github_support %} 配置您实例的访问限制。

对于使用 Azure NSG 的实例级限制，请联系 {% data variables.contact.github_support %} 以获取应允许访问您的企业实例的 IP 地址。 使用标准 CIDR（无类域间路由）格式指定地址范围。 {% data variables.contact.github_support %} 将为您的企业配置合适的防火墙规则，以限制 HTTP、SSH、HTTPS 和 SMTP 网络访问。 有关详细信息，请参阅“[从 {% data variables.contact.github_support %} 获得帮助](/admin/enterprise-support/receiving-help-from-github-support)”。

## <a name="adding-an-allowed-ip-address"></a>添加允许的 IP 地址

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

## <a name="allowing-access-by--data-variablesproductprodname_github_apps-"></a>允许 {% data variables.product.prodname_github_apps %} 访问

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

## <a name="enabling-allowed-ip-addresses"></a>启用允许的 IP 地址

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. 在“IP 允许列表”下，选择“启用 IP 允许列表”。
  ![允许 IP 地址的复选框](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. 单击“ **保存**”。

## <a name="editing-an-allowed-ip-address"></a>编辑允许的 IP 地址

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. 单击“更新”。

## <a name="deleting-an-allowed-ip-address"></a>删除允许的 IP 地址

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## <a name="using--data-variablesproductprodname_actions--with-an-ip-allow-list"></a>对 {% data variables.product.prodname_actions %} 使用 IP 允许列表

{% data reusables.actions.ip-allow-list-self-hosted-runners %}
