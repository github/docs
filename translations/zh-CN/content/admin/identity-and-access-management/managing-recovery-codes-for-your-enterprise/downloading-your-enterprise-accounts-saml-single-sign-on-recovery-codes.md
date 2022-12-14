---
title: 下载企业帐户的 SAML 单一登录恢复代码
shortTitle: Download recovery codes
intro: To ensure that you can access {% data variables.product.product_name %} if your identity provider (IdP) is unavailable, you should download your enterprise account's SAML single sign-on (SSO) recovery codes.
versions:
  ghec: '*'
type: how_to
topics:
- Accounts
- Authentication
- Enterprise
- SSO
permissions: Enterprise owners can download the SAML SSO recovery codes for the enterprise account.
ms.openlocfilehash: cd06d34b2dbf3e0c3b0a96bc3b92b2fb2b78e080
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 05/17/2022
ms.locfileid: "145099047"
---
如果 IdP 不可用，可以使用恢复代码在 {% data variables.product.product_location %} 上登录和访问企业。 有关详细信息，请参阅“[在标识提供者不可用时访问企业帐户](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)”。

如果在配置 SAML SSO 时未保存恢复代码，你仍可从企业的设置中访问代码。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}

1. 在“需要 SAML 身份验证”下，单击“保存恢复代码”。
![实施前测试 SAML 配置的按钮的屏幕截图](/assets/images/help/enterprises/saml-recovery-codes-link.png)

2. 要保存恢复代码，请单击“下载”、“打印”或“复制”  。
![下载、打印或复制恢复代码的按钮的屏幕截图](/assets/images/help/saml/saml_recovery_code_options.png)
