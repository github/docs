---
title: 为企业托管用户配置 SAML 单点登录
shortTitle: 托管用户的 SAML
intro: '您可以通过配置安全断言标记语言 (SAML) 单点登录 (SSO) 来自动管理对 {% data variables.product.prodname_dotcom %} 企业帐户的访问。'
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users
versions:
  ghec: '*'
type: tutorial
topics:
  - Authentication
  - Enterprise
  - SSO
---

## 关于 {% data variables.product.prodname_emus %} 的 SAML 单点登录

通过 {% data variables.product.prodname_emus %}，您的企业使用 SAML SSO 对所有成员进行身份验证。 您的企业成员将通过您的 IdP 登录，而不是使用 {% data variables.product.prodname_dotcom %} 用户名和密码登录 {% data variables.product.prodname_dotcom %}。

{% data variables.product.prodname_emus %} 支持以下 IdP：

{% data reusables.enterprise-accounts.emu-supported-idps %}

配置 SAML SSO 后，我们建议您存储恢复代码，以便在身份提供商不可用时恢复对企业的访问权限。

{% note %}

**注意：** 启用 SAML SSO 后，您可以在 {% data variables.product.prodname_dotcom %} 上更新现有 SAML 配置的唯一设置是 SAML 证书。 如果需要更新登录 URL或颁发者，则必须先禁用 SAML SSO，然后使用新设置重新配置 SAML SSO。

{% endnote %}

## 为 {% data variables.product.prodname_emus %} 配置 SAML 单点登录

要为您的 {% data variables.product.prodname_emu_enterprise %} 配置 SAML SSO，您必须在 IdP 上配置应用程序，然后在 GitHub.com 上配置您的企业。 配置 SAML SSO 后，您可以配置用户预配。

要在 IdP 上安装和配置 {% data variables.product.prodname_emu_idp_application %} 应用程序，您必须在受支持的 IdP 上具有租户和管理访问权限。

{% note %}

{% data reusables.enterprise-accounts.emu-password-reset-session %}

{% endnote %}

1. [配置身份提供程序](#configuring-your-identity-provider)
2. [配置企业](#configuring-your-enterprise)
3. [启用预配](#enabling-provisioning)

### 配置身份提供程序

要配置您的 IdP，请按照他们提供的用于在 IdP 上配置 {% data variables.product.prodname_emu_idp_application %} 应用程序的说明进行操作。

1. 要安装 {% data variables.product.prodname_emu_idp_application %} 应用程序，请单击下面您的 IdP 的链接：

     - [Azure Active Directory 上的 {% data variables.product.prodname_emu_idp_application %} 应用程序](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/aad.githubenterprisemanageduser?tab=Overview)
     - [Okta 上的 {% data variables.product.prodname_emu_idp_application %} 应用程序](https://www.okta.com/integrations/github-enterprise-managed-user)

1. 要配置 {% data variables.product.prodname_emu_idp_application %} 应用程序和您的 IdP，请单击下面的链接，然后按照您的 IdP 提供的说明进行操作：

     - [{% data variables.product.prodname_emus %} 的 Azure Active Directory 教程](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-tutorial)
     - [{% data variables.product.prodname_emus %} 的 Okta 文档](https://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-GitHub-Enterprise-Managed-User.html)

1. 因此，您可以测试和配置您的企业，将您自己或将在 {% data variables.product.prodname_dotcom %} 上配置 SAML SSO 的用户分配到 IdP 上的 {% data variables.product.prodname_emu_idp_application %} 应用程序。

1. 为使您能够继续在 {% data variables.product.prodname_dotcom %} 上配置企业，请从您在 IdP 上安装的应用程序中找到并记下以下信息：

    | 值              | 其他名称           | 描述                          |
    |:-------------- |:-------------- |:--------------------------- |
    | IdP 登录 URL     | 登录 URL，IdP URL | IdP 上的应用程序 URL              |
    | IdP 标识符 URL    | 颁发者            | IdP 对服务提供商的标识符，用于 SAML 身份验证 |
    | 签名证书，Base64 编码 | 公共证书           | IdP 用于对身份验证请求进行签名的公共证书      |

### 配置企业

在身份提供程序上安装和配置 {% data variables.product.prodname_emu_idp_application %} 应用程序后，可以配置企业。

1. 以新企业的设置用户身份登录 {% data variables.product.prodname_dotcom_the_website %} ，用户名为 **@<em>SHORT-CODE</em>_admin**。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}

1. 在“SAML single sign-on”（SAML 单点登录）下，选择 **Require SAML authentication（需要 SAML 身份验证）**。 ![用于启用 SAML SSO 的复选框](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)

1. 在 **Sign on URL（登录 URL）**下，键入您在配置 IdP 时记录的单点登录请求的 IdP 的 HTTPS 终端节点。 ![登录时将成员转发到的 URL 字段](/assets/images/help/saml/saml_sign_on_url_business.png)

1. 在 **颁发者（Issuer）**下，键入您在配置 IdP 时记下的 SAML 颁发者 URL，以验证已发送邮件的真实性。 ![SAML 签发者姓名字段](/assets/images/help/saml/saml_issuer.png)

1. 在 **Public Certificate（公共证书）**下，粘贴您在配置 IdP 时记下的证书，以验证 SAML 响应。 ![身份提供程序的公共证书字段](/assets/images/help/saml/saml_public_certificate.png)

1. 要验证来自 SAML 签发者的请求的完整性，请单击 {% octicon "pencil" aria-label="The edit icon" %}。 然后，在“Signature Method（签名方法）”和“Digest Method（摘要方法）”下拉菜单中，选择 SAML 签发者使用的哈希算法。 ![SAML 签发者使用的签名方法和摘要方法哈希算法下拉列表](/assets/images/help/saml/saml_hashing_method.png)

1. 在为企业启用 SAML SSO 之前，为确保输入的信息正确，请单击 **Test SAML configuration（测试 SAML 配置）**。 ![实施前测试 SAML 配置的按钮](/assets/images/help/saml/saml_test.png)

1. 单击 **Save（保存）**。

    {% note %}

    **注意：** 当您的企业需要 SAML SSO 时，设置用户将不再有权访问企业，但仍会登录到 GitHub。 只有您的 IdP 预置的 {% data variables.product.prodname_managed_users %} 才能访问企业。

    {% endnote %}

{% data reusables.enterprise-accounts.download-recovery-codes %}


### 启用预配

启用 SAML SSO 后，请启用置备。 更多信息请参阅“[配置企业托管用户的 SCIM 预配](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users)”。

