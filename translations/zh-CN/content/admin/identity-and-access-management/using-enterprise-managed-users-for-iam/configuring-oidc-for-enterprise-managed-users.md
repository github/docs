---
title: 为企业托管用户配置 OIDC
shortTitle: OIDC for managed users
intro: '可以通过配置 OpenID Connect (OIDC) 单一登录 (SSO) 自动管理对 {% data variables.product.prodname_dotcom %} 上的企业帐户的访问，并启用对 IdP 的条件访问策略 (CAP) 的支持。'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: caa557cb976fb60a59572e1623db6be87efeee54
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/22/2022
ms.locfileid: '148179987'
---
{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## 关于适用于企业托管用户的 OIDC

通过 {% data variables.product.prodname_emus %}，企业使用标识提供者 (IdP) 对所有成员进行身份验证。 可以使用 OpenID Connect (OIDC) 管理 {% data variables.enterprise.prodname_emu_enterprise %} 的身份验证。 启用 OIDC SSO 是一个一键式设置过程，证书由 {% data variables.product.prodname_dotcom %} 和你的 IdP 管理。

{% data reusables.enterprise-accounts.emu-cap-validates %} 有关详细信息，请参阅“[关于对 IdP 的条件访问策略的支持](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy)”。

可以通过从 IdP 更改为 {% data variables.product.prodname_dotcom %} 颁发的 ID 令牌的生存期属性，调整会话的生存期，以及 {% data variables.enterprise.prodname_managed_user %} 需要对 IdP 重新进行身份验证的频率。 默认生存期为 1 小时。 有关详细信息，请参阅 Azure AD 文档中的“[Microsoft 标识平台中的可配置令牌生存期](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-configurable-token-lifetimes)”。

{% data reusables.enterprise_user_management.SAML-to-OIDC-migration-for-EMU %}

{% data reusables.enterprise-accounts.oidc-gei-warning %}

## 标识提供者支持

对 OIDC 的支持可供使用 Azure Active Directory (Azure AD) 的客户使用。 

每个 Azure AD 租户只能支持一个与 {% data variables.product.prodname_emus %} 的 OIDC 集成。 如果要将 Azure AD 连接到 {% data variables.product.prodname_dotcom %} 上的多个企业，请改用 SAML。 有关详细信息，请参阅“[为 {% data variables.product.prodname_emus %} 配置 SAML 单一登录](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-saml-single-sign-on-for-enterprise-managed-users)”。

## 为企业托管用户配置 OIDC

1. 使用用户名“@<em>SHORT-CODE</em>_admin”以新企业的安装用户身份登录到 {% data variables.product.prodname_dotcom_the_website %}。
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. 选择“要求 OIDC 单一登录”。  
   ![显示“要求 OIDC 单一登录”复选框的屏幕截图](/assets/images/help/enterprises/require-oidc.png)
1. 若要继续设置并重定向到 Azure AD，请单击“保存”。
{% data reusables.enterprise-accounts.emu-azure-admin-consent %} {% data reusables.enterprise-accounts.download-recovery-codes %}

## 启用设置

启用 OIDC SSO 后，启用预配。 有关详细信息，请参阅“[为企业托管用户配置 SCIM 预配](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)”。
