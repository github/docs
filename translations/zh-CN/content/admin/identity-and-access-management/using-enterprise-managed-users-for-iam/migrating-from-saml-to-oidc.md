---
title: 从 SAML 迁移到 OIDC
shortTitle: Migrating from SAML to OIDC
intro: '如果使用 SAML 对 {% data variables.enterprise.prodname_emu_enterprise %} 中的成员进行身份验证，则可以迁移到 OpenID Connect (OIDC)，并受益于对 IdP 的条件访问策略的支持。'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: 36c93c94bfda1d0ebc951b0a8325691afa0199bb
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180043'
---
{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## 关于将 {% data variables.enterprise.prodname_emu_enterprise %} 从 SAML 迁移到 OIDC

如果 {% data variables.enterprise.prodname_emu_enterprise %} 使用 SAML SSO 通过 Azure Active Directory (Azure AD) 进行身份验证，则可以迁移到 OIDC。 {% data reusables.enterprise-accounts.emu-cap-validates %}

从 SAML 迁移到 OIDC 时，{% data variables.enterprise.prodname_managed_users %} 和以前为 SAML 预配但未由 {% data variables.product.prodname_emu_idp_oidc_application %} 应用程序预配的组会将“(SAML)”追加到其显示名称。

如果你不熟悉 {% data variables.product.prodname_emus %} 并且尚未为企业配置身份验证，则无需迁移，并且可以立即设置 OIDC 单一登录。 有关详细信息，请参阅“[为 Enterprise Managed User 配置 OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)”。

## 迁移企业

{% note %}

注意：若要以设置用户身份登录，则需要恢复代码。 如果还没有恢复代码，则可以在以企业所有者身份登录时访问这些代码。 有关详细信息，请参阅“[下载企业帐户的单一登录恢复代码](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes)”。

{% endnote %}

1. 在开始迁移之前，请登录到 Azure，并在现有 {% data variables.product.prodname_emu_idp_application %} 应用程序中禁用预配。
1. 如果在 Azure AD 中使用[条件访问 (CA) 网络位置策略](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition)，并且当前在 {% data variables.product.prodname_dotcom_the_website %} 上将 IP 允许列表与企业帐户或企业帐户拥有的任何组织一起使用，则禁用 IP 允许列表。 有关详细信息，请参阅“[在企业中实施安全设置](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)”和“[管理组织允许的 IP 地址](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)”。
1.  使用用户名“@<em>SHORT-CODE</em>_admin”以企业的设置用户身份登录到 {% data variables.product.prodname_dotcom_the_website %}。 
1. 当系统提示继续访问标识提供者时，请单击“使用恢复代码”，并使用企业恢复代码之一登录。
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. 在页面底部的“迁移到 OpenID Connect 单一登录”旁边，单击“使用 Azure 进行配置”。  
   {% warning %} 

   警告：迁移可能需要长达一个小时，并且迁移期间不会预配任何用户。 可通过返回到企业的安全设置页，确认迁移是否仍在进行中；如果“需要 SAML 身份验证”仍处于选中状态，则迁移仍在进行中。

   {% endwarning %}

   ![显示“使用 Azure 进行配置”按钮的屏幕截图](/assets/images/help/enterprises/saml-to-oidc-button.png)
1. 阅读这两个警告，然后单击以继续。
{% data reusables.enterprise-accounts.emu-azure-admin-consent %}
1. 在新选项卡或窗口中，在 {% data variables.product.prodname_dotcom_the_website %} 上以设置用户身份登录时，请使用 admin:enterprise 范围和 no expiration 创建 {% data variables.product.pat_v1 %}，并将其复制到剪贴板 。 有关创建新令牌的详细信息，请参阅“[创建 {% data variables.product.pat_generic %}](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token)”。
1. 在 Azure 门户中 {% data variables.product.prodname_emu_idp_oidc_application %} 应用程序的设置中，在“租户 URL”下键入 `https://api.github.com/scim/v2/enterprises/YOUR_ENTERPRISE`，将 YOUR_ENTERPRISE 替换为企业帐户的名称。  
   
   例如，如果企业帐户的 URL 为 `https://github.com/enterprises/octo-corp`，则企业帐户的名称为 `octo-corp`。
1. 在“机密令牌”下，粘贴之前创建的带有 admin:enterprise 范围的 {% data variables.product.pat_v1 %}。
1. 要测试配置，请单击“测试连接”。
1. 要保存更改，请在窗体顶部单击“保存”。
1. 在 Azure 门户中，将用户和组从旧 {% data variables.product.prodname_emu_idp_application %} 应用程序复制到新的 {% data variables.product.prodname_emu_idp_oidc_application %} 应用程序。
1. 通过预配单个新用户来测试配置。
1. 如果测试成功，请单击“开始预配”，开始为所有用户预配。
