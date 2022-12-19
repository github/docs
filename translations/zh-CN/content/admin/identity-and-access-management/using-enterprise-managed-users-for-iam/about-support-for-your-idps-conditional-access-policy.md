---
title: 关于对 IdP 的条件访问策略的支持
shortTitle: Conditional access policy
intro: '企业使用 OIDC SSO 时，{% data variables.product.prodname_dotcom %} 可以使用 IdP 的条件访问策略 (CAP) 验证对企业及其资源的访问。'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: aed7008bd008ccfd6303ccbb36f4d6f3bd7002ca
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/22/2022
ms.locfileid: '148179995'
---
{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## 关于对条件访问策略的支持

{% data reusables.enterprise-accounts.emu-cap-validates %}

{% data variables.product.product_name %} 支持对启用了 OIDC SSO 的任何 {% data variables.enterprise.prodname_emu_enterprise %} 使用 CAP。 {% data variables.product.product_name %} 强制实施你的 IdP 的 IP 条件，但不能强制实施你设备的合规性条件。 企业所有者可以选择使用此 IP 允许列表配置，而不是 {% data variables.product.product_name %} 的 IP 允许列表，并且可以在配置 OIDC SSO 后执行此操作。 有关 IP 允许列表的详细信息，请参阅“[使用 IP 允许列表限制网络流量](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)”和“[管理组织的允许 IP 地址](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)”。


有关将 OIDC 与 {% data variables.product.prodname_emus %} 结合使用的详细信息，请参阅“[为企业托管用户配置 OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)”和“[从 SAML 迁移到 OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)”。

## 集成和自动化的注意事项

{% data variables.product.prodname_dotcom %} 将发起的 IP 地址发送到你的 IdP 以针对你的 CAP 进行验证。 若要确保 IdP 的 CAP 未阻止操作和应用，需要对配置进行更改。

{% data reusables.enterprise-accounts.oidc-gei-warning %}

### {% data variables.product.prodname_actions %}

使用 {% data variables.product.pat_generic %} 的操作可能将被你的 IdP 的 CAP 阻止。 我们建议由服务帐户创建 {% data variables.product.pat_generic %}，该服务帐户随后会从 IdP 的 CAP 中的 IP 控制中豁免。 

如果无法使用服务帐户，则取消阻止使用 {% data variables.product.pat_generic %} 的操作的另一个选项是允许 {% data variables.product.prodname_actions %} 使用的 IP 范围。 有关详细信息，请参阅“[关于 GitHub 的 IP 地址](/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses)”。

### {% data variables.product.prodname_github_apps %} 和 {% data variables.product.prodname_oauth_apps %} 

当 {% data variables.product.prodname_github_apps %} 和 {% data variables.product.prodname_oauth_apps %} 代表成员发出请求时，{% data variables.product.prodname_dotcom %} 会将应用的服务器的 IP 地址发送到 IdP 进行验证。 如果 IdP 的 CAP 未验证应用的服务器的 IP 地址，请求将失败。

可以联系要使用的应用的所有者，询问其 IP 范围，并配置 IdP 的 CAP，以允许从这些 IP 范围进行访问。 如果无法联系所有者，可以查看 IdP 登录日志，查看请求中显示的 IP 地址，然后允许列出这些地址。 

如果不希望允许所有企业应用的所有 IP 范围，还可以从 IdP 允许列表中免除已安装的 {% data variables.product.prodname_github_apps %} 以及授权的 {% data variables.product.prodname_oauth_apps %}。 如果这样做，无论起始 IP 地址如何，这些应用都将继续工作。 有关详细信息，请参阅“[为企业中的安全设置强制实施策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#allowing-access-by-github-apps)”。
