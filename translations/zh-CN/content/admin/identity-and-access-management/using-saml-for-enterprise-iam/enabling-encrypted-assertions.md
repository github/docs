---
title: 启用加密断言
shortTitle: Enable encrypted assertions
intro: '通过加密 SAML 标识提供者 (IdP) 发送的消息，可以使用 SAML 单一登录 (SSO) 提高 {% data variables.product.product_location %} 的安全性。'
permissions: 'Site administrators can configure encrypted assertions for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '> 3.3'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
ms.openlocfilehash: ecb60a4398993155fa7498f26e7628660e88e54a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063776'
---
## 关于加密断言

如果 IdP 支持断言加密，则可以在 {% data variables.product.product_name %} 上配置加密断言，以提高身份验证过程中的安全性。

## 先决条件

若要启用加密断言以对 {% data variables.product.product_name %} 进行身份验证，则必须配置 SAML 身份验证，并且 IdP 必须支持加密断言。

## 启用加密断言

要启用加密断言，必须向 IdP 提供 {% data variables.product.product_location %} 的公共证书，并配置与 IdP 匹配的加密设置。

{% note %}

注意：{% data reusables.enterprise.test-in-staging %}

{% endnote %}

1. （可选）启用 SAML 调试。 SAML 调试在 {% data variables.product.product_name %} 的身份验证日志中记录详细条目，并且可以帮助你排查身份验证尝试失败的问题。 有关详细信息，请参阅“[对 SAML 身份验证进行故障排除](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging)”。
{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
1. 选择“需要加密断言”。

   ![管理控制台“身份验证”部分中“启用加密断言”复选框的屏幕截图](/assets/images/help/saml/management-console-enable-encrypted-assertions.png)
1. 在“加密证书”右侧，单击“下载”，将 {% data variables.product.product_location %} 的公共证书副本保存在本地计算机上。

   ![用于加密断言的公共证书的“下载”按钮的屏幕截图](/assets/images/help/saml/management-console-encrypted-assertions-download-certificate.png)
1. 以管理员身份登录到 SAML IdP。
1. 在 {% data variables.product.product_location %} 的应用程序中，启用加密断言。
   - 请注意加密方法和密钥传输方法。
   - 提供你在步骤 7 中下载的公共证书。
1. 返回到 {% data variables.product.product_location %} 上的管理控制台。
1. 在“加密方法”的右侧，选择步骤 9 中的 IdP 加密方法。

   ![加密断言的“加密方法”屏幕截图](/assets/images/help/saml/management-console-encrypted-assertions-encryption-method.png)
1. 在“密钥传输方法”的右侧，选择步骤 9 中的 IdP 密钥传输方法。

   ![加密断言的“密钥传输方法”屏幕截图](/assets/images/help/saml/management-console-encrypted-assertions-key-transport-method.png)
1. 单击“保存设置”。 
{% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}

如果启用了 SAML 调试以使用加密断言测试身份验证，请在完成测试后禁用 SAML 调试。 有关详细信息，请参阅“[对 SAML 身份验证进行故障排除](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging)”。
