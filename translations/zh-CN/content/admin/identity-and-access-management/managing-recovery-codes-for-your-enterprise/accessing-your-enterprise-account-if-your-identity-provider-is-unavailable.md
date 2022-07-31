---
title: 身份提供程序不可用时访问企业帐户
shortTitle: 访问您的企业帐户
intro: '即使身份提供程序不可用，您也可以使用恢复代码绕过单点登录 (SSO) 登录到 {% data variables.product.product_name %}。'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
permissions: Enterprise owners can use a recovery code to access an enterprise account.
---

当身份验证配置错误或身份提供程序 (IdP) 问题阻止您使用 SSO 时，您可以使用恢复代码访问您的企业帐户。

要以这种方式访问您的企业帐户，您必须以前下载并存储了企业的恢复代码。 更多信息请参阅“[下载企业帐户的单点登录恢复代码](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes)”。

{% data reusables.saml.recovery-code-caveats %}

{% note %}

**注意：** 如果您的企业使用 {% data variables.product.prodname_emus %}，则必须以安装用户身份登录才能使用恢复代码。

{% endnote %}

{% data reusables.saml.recovery-code-access %}
