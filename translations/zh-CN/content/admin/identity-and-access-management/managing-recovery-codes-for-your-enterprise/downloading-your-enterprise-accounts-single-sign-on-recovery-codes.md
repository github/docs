---
title: Downloading your enterprise account's single sign-on recovery codes
shortTitle: 下载恢复代码
intro: 'To ensure that you can access {% data variables.product.product_name %} if your identity provider (IdP) is unavailable, you should download your enterprise account''s single sign-on (SSO) recovery codes.'
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
---

如果您的 IdP 不可用，您可以使用恢复代码登录并通过 {% data variables.product.product_location %} 访问您的企业。 更多信息请参阅“[在身份提供程序不可用时访问企业帐户](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)”。

If you did not save your recovery codes when you configured SSO, you can still access the codes from your enterprise's settings.



{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}

1. Under{% if oidc-for-emu %} either{% endif %} "Require SAML authentication"{% if oidc-for-emu %} or "Require OIDC authentication"{% endif %}, click **Save your recovery codes**.{% if oidc-for-emu %}
  {% note %}

  **Note:** OIDC SSO is only available for {% data variables.product.prodname_emus %}. 更多信息请参阅“[关于企业管理用户](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)”。

  {% endnote %}{% endif %}

  ![用于在强制实施之前测试 SAML 配置的按钮屏幕截图](/assets/images/help/enterprises/saml-recovery-codes-link.png)
1. 要保存恢复代码，请单击 **Download（下载）**、**Print（打印）**或 **Copy（复制）**。 ![用于下载、打印或复制恢复代码的按钮屏幕截图](/assets/images/help/saml/saml_recovery_code_options.png)
