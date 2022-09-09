---
title: 下载企业帐户的单一登录恢复代码
shortTitle: Download recovery codes
intro: '如果标识提供者 (IdP) 不可用，为了确保你可以访问 {% data variables.product.product_name %}，应下载企业帐户的单一登录 (SSO) 恢复代码。'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
redirect_from:
  - /admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-saml-single-sign-on-recovery-codes
permissions: Enterprise owners can download the SSO recovery codes for the enterprise account.
ms.openlocfilehash: 82f44654b18a36d2fb29797fe8b6e0426785522b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063592'
---
如果 IdP 不可用，可以使用恢复代码在 {% data variables.product.product_location %} 上登录和访问企业。 有关详细信息，请参阅“[在标识提供者不可用时访问企业帐户](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)”。

如果在配置 SSO 时未保存恢复代码，你仍可从企业的设置中访问代码。



{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}

1. 在{% ifversion oidc-for-emu %}{% endif %}“需要 SAML 身份验证”{% ifversion oidc-for-emu %}或“需要 OIDC 身份验证”{% endif %}下，单击“保存恢复代码”。{% ifversion oidc-for-emu %} {% note %}
  
  注意：OIDC SSO 仅适用于 {% data variables.product.prodname_emus %}。 有关详细信息，请参阅“[关于企业托管用户](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)”。
  
  {% endnote %}{% endif %}
  
  ![实施前测试 SAML 配置的按钮的屏幕截图](/assets/images/help/enterprises/saml-recovery-codes-link.png)
1. 要保存恢复代码，请单击“下载”、“打印”或“复制”  。
  ![下载、打印或复制恢复代码的按钮的屏幕截图](/assets/images/help/saml/saml_recovery_code_options.png)
