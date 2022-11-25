---
title: 使用 IP 允许列表限制到企业的网络流量
shortTitle: Restricting network traffic
intro: 可以使用 IP 允许列表限制对企业的访问，仅允许从指定的 IP 地址访问资源。
permissions: Enterprise owners can configure IP allow lists.
miniTocMaxHeadingLevel: 3
versions:
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Fundamentals
  - Networking
  - Security
redirect_from:
  - /admin/configuration/restricting-network-traffic-to-your-enterprise
  - /admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise
ms.openlocfilehash: cd0c5b4bafc5226a99a75d3632fc5072233f5c1c
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180096'
---
## 关于网络流量限制

默认情况下，授权用户可以从任何 IP 地址访问您的企业。 可以通过为特定 IP 地址配置允许列表来限制对{% ifversion ghec %}企业帐户中组织拥有的{% endif %}资源的访问。 {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% ifversion ghec %}

 如果你的企业将 {% data variables.product.prodname_emus %} 与 OIDC 配合使用，你则可以选择是使用 {% data variables.product.company_short %} 的 IP 允许列表功能，还是为标识提供者 (IdP) 使用允许列表限制。 如果你的企业未将 {% data variables.product.prodname_emus %} 与 OIDC 配合使用，你则可以使用 {% data variables.product.company_short %} 的允许列表功能。 

{% elsif ghae %}

默认情况下，Azure 网络安全组 (NSG) 规则允许所有入站流量在端口 22、80、443 和 25 打开。 可以联系 {% data variables.contact.github_support %} 为 {% data variables.product.product_name %} 配置访问限制。

对于使用 Azure NSG 的限制，请联系 {% data variables.contact.github_support %} 以获取应允许访问 {% data variables.product.product_name %} 的 IP 地址。 使用标准 CIDR（无类域间路由）格式指定地址范围。 {% data variables.contact.github_support %} 将配置合适的防火墙规则，以限制通过 HTTP、SSH、HTTPS 和 SMTP 的网络访问。 有关详细信息，请参阅“[从 {% data variables.contact.github_support %} 获取帮助](/admin/enterprise-support/receiving-help-from-github-support)”。

{% endif %}

{% ifversion ghec %}

## 关于 {% data variables.product.company_short %} 的 IP 允许列表

可以使用 {% data variables.product.company_short %} 的 IP 允许列表来控制对企业和企业中组织拥有的资产的访问。 

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %} 

{% data reusables.identity-and-permissions.ip-allow-lists-enable %} {% data reusables.identity-and-permissions.ip-allow-lists-enterprise %} 

您还可以为单个组织配置允许的 IP 地址。 有关详细信息，请参阅“[为组织管理允许的 IP 地址](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)”。

## 关于 IdP 的允许列表

如果将 {% data variables.product.prodname_emus %} 与 OIDC 配合使用，则可以使用 IdP 的允许列表。 

使用 IdP 的允许列表会停用企业中所有组织的 {% data variables.product.company_short %} IP 允许列表配置，并停用 GraphQL API 以启用和管理 IP 允许列表。 

默认情况下，你的 IdP 会在初始交互式 SAML 或 OIDC 登录到 {% data variables.product.company_short %} 时为你所选择的任何 IP 允许列表配置运行 CAP。

OIDC CAP 仅适用于使用用户到服务器令牌对 API 的请求，例如 {% data variables.product.prodname_oauth_app %} 或代表用户操作的 {% data variables.product.prodname_github_app %} 的令牌。 当 {% data variables.product.prodname_github_app %} 使用服务器到服务器令牌时，OIDC CAP 不适用。 有关详细信息，请参阅“[使用 {% data variables.product.prodname_github_apps %} 进行身份验证](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-an-installation)”和“[关于对 IdP 条件访问策略的支持](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy#github-apps-and-oauth-apps)”。

为了确保在将策略应用到用户到服务器令牌的同时无缝使用 OIDC CAP，必须将企业使用的每个 {% data variables.product.prodname_github_app %} 中的所有 IP 范围复制到 IdP 策略。 

## 使用 {% data variables.product.company_short %} 的 IP 允许列表

### 启用 {% data variables.product.company_short %} 的 IP 允许列表
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. 在“IP 允许列表”下，启用 IP 允许列表。 
   - 如果将 {% data variables.product.prodname_emus %} 与 OIDC 配合使用，请选择下拉菜单并单击“GitHub”。
      ![显示三个 IP 允许列表配置选项“已禁用”、“标识提供者”和“GitHub”的下拉菜单的屏幕截图](/assets/images/help/security/enable-github-ip-allow-list.png)
   
      选择“启用 IP 允许列表”。
      ![允许 IP 地址的复选框的屏幕截图](/assets/images/help/security/enable-ip-allow-list-ghec.png)

   - 如果未将 {% data variables.product.prodname_emus %} 与 OIDC 配合使用，请选择“启用 IP 允许列表”。
     ![允许 IP 地址的复选框的屏幕截图](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
1. 单击“ **保存**”。

### 添加允许的 IP 地址

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %}

{% data reusables.identity-and-permissions.ipv6-allow-lists %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

### 允许 {% data variables.product.prodname_github_apps %} 访问

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

### 编辑允许的 IP 地址

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. 单击“更新”。
{% data reusables.identity-and-permissions.check-ip-address %}

### 检查是否允许使用 IP 地址

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.check-ip-address-step %}

### 删除允许的 IP 地址

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## 使用标识提供者的允许列表

如果将 {% data variables.product.prodname_emus %} 与 OIDC 配合使用，则可以使用 IdP 的允许列表。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. 在“IP 允许列表”下，选择下拉列表并单击“标识提供者”。

   ![显示三个 IP 允许列表配置选项“已禁用”、“标识提供者”和“GitHub”的下拉菜单的屏幕截图](/assets/images/help/security/enable-identity-provider-ip-allow-list.png)
   - （可选）若要允许已安装的 {% data variables.product.company_short %} 和 {% data variables.product.prodname_oauth_apps %} 从任意 IP 地址访问你的企业，请选择“为应用程序跳过 IdP 检查”。

   ![允许 IP 地址的复选框](/assets/images/help/security/ip-allow-list-skip-idp-check.png)
1. 单击“ **保存**”。

{% endif %}

{% ifversion ghae %}

## 启用允许的 IP 地址

{% data reusables.identity-and-permissions.about-enabling-allowed-ip-addresses %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. 在“IP 允许列表”下，选择“启用 IP 允许列表”。
  ![允许 IP 地址的复选框](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. 单击“ **保存**”。

## 添加允许的 IP 地址

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

## 允许 {% data variables.product.prodname_github_apps %} 访问

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

## 编辑允许的 IP 地址

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. 单击“更新”。
{% data reusables.identity-and-permissions.check-ip-address %}

## 检查是否允许使用 IP 地址

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.check-ip-address-step %}

## 删除允许的 IP 地址

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

{% endif %}

## 对 {% data variables.product.prodname_actions %} 使用 IP 允许列表

{% data reusables.actions.ip-allow-list-self-hosted-runners %}
