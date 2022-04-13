---
title: 下载企业帐户的 SAML 单点登录恢复代码
shortTitle: 下载恢复代码
intro: '为确保在身份提供程序 (IdP) 不可用时可以访问 {% data variables.product.product_name %} ，应下载企业帐户的 SAML 单点登录 (SSO) 恢复代码。'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
permissions: Enterprise owners can download the SAML SSO recovery codes for the enterprise account.
---

如果您的 IdP 不可用，您可以使用恢复代码登录并通过 {% data variables.product.product_location %} 访问您的企业。 更多信息请参阅“[在身份提供程序不可用时访问企业帐户](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)”。

如果在配置 SAML SSO 时未保存恢复代码，您仍然可以从企业的设置中访问这些代码。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}

1. 在“Require SAML authentication（要求 SAML 身份验证）”下，单击 **Save your recovery codes（保存恢复代码）**。 ![用于在强制实施之前测试 SAML 配置的按钮屏幕截图](/assets/images/help/enterprises/saml-recovery-codes-link.png)

2. 要保存恢复代码，请单击 **Download（下载）**、**Print（打印）**或 **Copy（复制）**。 ![用于下载、打印或复制恢复代码的按钮屏幕截图](/assets/images/help/saml/saml_recovery_code_options.png)
