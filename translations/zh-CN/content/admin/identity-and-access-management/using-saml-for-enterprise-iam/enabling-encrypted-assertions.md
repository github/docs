---
title: 启用加密断言
shortTitle: 启用加密断言
intro: '您可以通过加密 SAML 身份提供程序 (IdP) 发送的消息，使用 SAML 单点登录 (SSO) 提高 {% data variables.product.product_location %} 的安全性。'
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
---

## 关于加密断言

如果您的 IdP 支持断言加密，则可以在 {% data variables.product.product_name %} 上配置加密断言，以提高身份验证过程中的安全性。

## 基本要求

要启用加密断言以向 {% data variables.product.product_name %} 验证，您必须配置 SAML 身份验证，并且您的 IdP 必须支持加密断言。

## 启用加密断言

要启用加密断言，您必须向 IdP 提供 {% data variables.product.product_location %} 的公共证书，并配置与您的 IdP 匹配的加密设置。

{% note %}

**注**：{% data reusables.enterprise.test-in-staging %}

{% endnote %}

1. （可选）启用 SAML 调试。 SAML 调试会在 {% data variables.product.product_name %} 的身份验证日志中记录详细条目，并可以帮助您排查失败的身份验证尝试。 更多信息请参阅“[SAML 身份验证疑难解答](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging)”。
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
1. 选择 **Require encrypted assertions（需要加密的断言）**。

   ![管理控制台的"身份验证"部分中"启用加密断言"复选框的屏幕截图](/assets/images/help/saml/management-console-enable-encrypted-assertions.png)
1. 在“Encryption Certificate（加密证书）”的右侧，单击 **Download（下载）**以在本地计算机上保存 {% data variables.product.product_location %} 公共证书的副本。

   ![加密断言的公共证书的"下载"按钮屏幕截图](/assets/images/help/saml/management-console-encrypted-assertions-download-certificate.png)
1. 以管理员身份登录您的 SAML IdP。
1. 在 {% data variables.product.product_location %} 的应用程序中，启用加密断言。
   - 请注意加密方法和密钥传输方法。
   - 提供在步骤 7 中下载的公共证书。
1. 返回到 {% data variables.product.product_location %} 上的管理控制台。
1. 在“Encryption Method（加密方法）”的右侧，从步骤 9 中选择 IdP 的加密方法。

   ![加密断言的"加密方法"屏幕截图](/assets/images/help/saml/management-console-encrypted-assertions-encryption-method.png)
1. 在“Key Transport Method（密钥传输方法）”的右侧，从步骤 9 中选择 IdP 的密钥传输方法。

   ![加密断言的"密钥传输方法"屏幕截图](/assets/images/help/saml/management-console-encrypted-assertions-key-transport-method.png)
1. 单击 **Save settings（保存设置）**。
{% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}

如果启用了 SAML 调试以使用加密断言测试身份验证，请在完成测试后禁用 SAML 调试。 更多信息请参阅“[SAML 身份验证疑难解答](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging)”。
