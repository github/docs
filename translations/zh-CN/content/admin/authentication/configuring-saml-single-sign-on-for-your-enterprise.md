---
title: 为企业配置 SAML 单点登录
shortTitle: 配置 SAML SSO
intro: '您可以为企业配置 SAML 单点登录 (SSO)，这允许您使用身份提供程序 (IdP) 集中控制 {% data variables.product.product_location %} 的身份验证。'
product: '{% data reusables.gated-features.saml-sso %}'
permissions: 'Enterprise owners can configure SAML SSO for an enterprise on {% data variables.product.product_name %}.'
versions:
  github-ae: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
---

### 关于 SAML SSO

{% if currentVersion == "github-ae@latest" %}

SAML SSO 允许您从 SAML IDP 集中控制和安全访问 {% data variables.product.product_location %}。 当未经身份验证的用户在浏览器中访问 {% data variables.product.product_location %} 时，{% data variables.product.product_name %} 会将用户重定向到您的 SAML IDP 进行身份验证。 在用户使用 IdP 上的帐户成功进行身份验证后，IdP 会将用户重定向回 {% data variables.product.product_location %}。 {% data variables.product.product_name %} 将验证 IdP 的响应，然后授予用户访问权限。

当用户在 IdP 上成功进行身份验证后，用户对 {% data variables.product.product_location %} 的 SAML 会话将在浏览器中激活 24 小时。 24 小时后，用户必须再次使用您的 IdP 进行身份验证。

{% data reusables.saml.assert-the-administrator-attribute %}

{% data reusables.scim.after-you-configure-saml %} 更多信息请参阅“[配置企业的用户预配](/admin/authentication/configuring-user-provisioning-for-your-enterprise)”。

{% endif %}

### 支持的身份提供程序

{% data variables.product.product_name %} 支持 SAML SSO 与采用 SAML 2.0 标准的 IdP 一起使用。 更多信息请参阅 OASIS 网站上的 [SAML Wiki](https://wiki.oasis-open.org/security)。

{% data variables.product.company_short %} 已使用以下 IdP 测试 {% data variables.product.product_name %} 的 SAML SSO。

{% if currentVersion == "github-ae@latest" %}
- Azure AD
{% endif %}

### 启用 SAML SSO

{% if currentVersion == "github-ae@latest" %}

{% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

以下 IdP 提供有关为 {% data variables.product.product_name %} 配置 SAML SSO 的文档。 如果您的 IdP 未列出，请与您的 IdP 联系，以请求 {% data variables.product.product_name %}。

 | IdP      | 更多信息                                                                                                                                                                                               |
 |:-------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 | Azure AD | [教程： Microsoft 文档中的“与 {% data variables.product.prodname_ghe_managed %}](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial) 的 Azure Active Directory 单点登录 (SSO) 集成” |

在 {% data variables.product.product_name %} 的初始化期间，您必须在 IdP 上将 {% data variables.product.product_name %} 配置为 SAML 服务提供程序 (SP)。 您必须在 IdP 上输入多个唯一值以将 {% data variables.product.product_name %} 配置为有效的 SP。

| 值                    | 其他名称   | 描述                                                         | 示例                        |
|:-------------------- |:------ |:---------------------------------------------------------- |:------------------------- |
| SP 实体 ID             | SP URL | {% data variables.product.prodname_ghe_managed %} 顶级 URL | <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em></code> |
| SP 断言使用者服务 (ACS) URL | 回复 URL | IdP 发送 SAML 响应的 URL                                        | <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em>/saml/consume</code> |
| SP 单点登录 (SSO) URL    |        | IdP 开始 SSO 的 URL                                           | <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em>/sso</code> |

{% endif %}

### 编辑 SAML SSO 配置

如果 IdP 的详细信息发生更改，则需要编辑 {% data variables.product.product_location %} 的 SAML SSO 配置。 例如，如果 IdP 的证书过期，您可以编辑公共证书的值。

{% if currentVersion == "github-ae@latest" %}

{% note %}

**注**：{% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. 在“SAML single sign-on（SAML 单点登录）”下，键入 IdP 的新详细信息。 ![包含企业 SAML SSO 配置 IdP 详细信息的文本输入字段](/assets/images/help/saml/ae-edit-idp-details.png)
1. （可选）单击 {% octicon "pencil" aria-label="The edit icon" %} 以配置新的签名或摘要方法。 ![用于更改签名和摘要方法的编辑图标](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest.png)

    - 使用下拉菜单并选择新的签名或摘要方法。 ![用于选择新签名或摘要方法的下拉菜单](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest-drop-down-menus.png)
1. 为确保输入的信息正确，请单击 **Test SAML configuration（测试 SAML 配置）**。 !["Test SAML configuration（测试 SAML 配置）"按钮](/assets/images/help/saml/ae-edit-idp-details-test-saml-configuration.png)
1. 单击 **Save（保存）**。 ![用于 SAML SSO 配置的"Save（保存）"按钮](/assets/images/help/saml/ae-edit-idp-details-save.png)
1. （可选）要自动预配和取消预配 {% data variables.product.product_location %} 的用户帐户，请使用 SCIM 重新配置用户预配。 更多信息请参阅“[配置企业的用户预配](/admin/authentication/configuring-user-provisioning-for-your-enterprise)”。

{% endif %}

### 禁用 SAML SSO

{% if currentVersion == "github-ae@latest" %}

{% warning %}

**警告**：如果您对 {% data variables.product.product_location %} 禁用 SAML SSO，则没有现有 SAML SSO 会话的用户无法登录 {% data variables.product.product_location %}。 {% data variables.product.product_location %} 上的 SAML SSO 会话在 24 小时后结束。

{% endwarning %}

{% note %}

**注**：{% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. 在“SAML single sign-on”（SAML 单点登录）下，取消选择 **Enable SAML authentication（启用 SAML 身份验证）**。 !["Enable SAML authentication（启用 SAML 身份验证）"的复选框](/assets/images/help/saml/ae-saml-disabled.png)
1. 要禁用 SAML SSO 并要求使用在初始化期间创建的内置用户帐户登录，请单击“**Save（保存）**”。 ![用于 SAML SSO 配置的"Save（保存）"按钮](/assets/images/help/saml/ae-saml-disabled-save.png)

{% endif %}
