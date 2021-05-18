---
title: 为企业配置用户预配
shortTitle: 配置用户预配
intro: '您可以为企业配置跨域身份管理 (SCIM)，以在将 {% data variables.product.product_location %} 的应用程序分配给身份提供商 (IdP) 上的用户时，就自动在 {% data variables.product.product_location %} 上预配用户帐户。'
permissions: 'Enterprise owners can configure user provisioning for an enterprise on {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.saml-sso %}'
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

### 关于企业的用户预配

{% data reusables.saml.ae-uses-saml-sso %} 更多信息请参阅“[配置企业的 SAML 单点登录](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)”。

{% data reusables.scim.after-you-configure-saml %} 有关 SCIM 的更多信息，请参阅 IETF 网站上的[跨域身份管理系统：协议 (RFC 7644)](https://tools.ietf.org/html/rfc7644)。

{% if currentVersion == "github-ae@latest" %}

配置预配允许 IdP 在您将 {% data variables.product.product_name %} 的应用程序分配或取消分配给 IdP 上的用户时与 {% data variables.product.product_location %} 通信。 当您分配应用程序时，IdP 将提示 {% data variables.product.product_location %} 创建帐户并向用户发送一封登录电子邮件。 取消分配应用程序时，IdP 将与 {% data variables.product.product_name %} 通信以取消任何 SAML 会话并禁用成员的帐户。

要为企业配置预配，必须在 {% data variables.product.product_name %} 上启用预配，然后在 IdP 上安装和配置预配应用程序。

IdP 上的预配应用程序通过企业的 SCIM API 与 {% data variables.product.product_name %} 通信。 更多信息请参阅 {% data variables.product.prodname_dotcom %} REST API 文档中的“[GitHub Enterprise 管理](/rest/reference/enterprise-admin#scim)”。

{% endif %}

### 支持的身份提供程序

{% data reusables.scim.supported-idps %}

在使用支持的 IdP 设置用户预配时，您也可以将 {% data variables.product.product_name %} 的应用程序分配或取消分配给用户组。 然后，这些组可供 {% data variables.product.product_location %} 中的组织所有者和团队维护员用来映射到 {% data variables.product.product_name %} 团队。 更多信息请参阅“[同步团队与身份提供程序组](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group)”。

### 基本要求

{% if currentVersion == "github-ae@latest" %}

要自动预配和解除预配从 IdP 访问 {% data variables.product.product_location %}，必须先在初始化 {% data variables.product.product_name %} 时配置 SAML SSO。 更多信息请参阅“[初始化 {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)。”

您必须对 IdP 具有管理访问权限，才能配置应用程序进行 {% data variables.product.product_name %} 的用户预配。

{% endif %}

### 为企业启用用户预配

{% if currentVersion == "github-ae@latest" %}

1. 作为企业所有者登录到

{% data variables.product.product_location %} 时，创建作用域为 **admin:enterprise** 的个人访问令牌。 更多信息请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。
  {% note %}

  **注意**：
    - 要创建个人访问令牌，我们建议使用初始化期间创建的第一个企业所有者的帐户。 更多信息请参阅“[初始化 {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)。”
    - 您需要此个人访问令牌在 IdP 上为 SCIM 配置应用程序。 将令牌安全地存储在密码管理器中，直到您稍后在这些说明中再次需要该令牌。

  {% endnote %}
  {% warning %}

  **警告**：如果创建个人访问令牌的企业所有者的用户帐户已停用或取消预配，则您的 IdP 将不再自动预配和取消预配企业用户帐户。 另一个企业所有者必须创建新的个人访问令牌，并在 IdP 上重新配置预配。

  {% endwarning %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. 在“SAML User Provisioning（SAML 用户预配）”下，选择 **Require SCIM user provisioning（需要 SAML 用户预配）**。 ![企业安全性设置内的"Require SCIM user provisioning（需要 SCIM 用户预配）"复选框](/assets/images/help/enterprises/settings-require-scim-user-provisioning.png)
1. 单击 **Save（保存）**。 ![企业安全性设置中"Require SCIM user provisioning（需要 SCIM 用户预配）"下的 Save（保存）按钮](/assets/images/help/enterprises/settings-scim-save.png)
1. 在 IdP 上 {% data variables.product.product_name %} 的应用程序中配置用户预配。

  以下 IdP 提供有关为 {% data variables.product.product_name %} 配置预配的文档。 如果您的 IdP 未列出，请与您的 IdP 联系，以请求 {% data variables.product.product_name %}。

  | IdP      | 更多信息                                                                                                                                                                              |
  |:-------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | Azure AD | [教程：Microsoft 文档中的“配置 {% data variables.product.prodname_ghe_managed %} 进行自动用户预配](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-provisioning-tutorial)” |

  IdP 上的应用程序需要两个值来预配或取消预配 {% data variables.product.product_location %} 上的用户帐户。

  | 值    | 其他名称        | 描述                                                                         | 示例                        |
  |:---- |:----------- |:-------------------------------------------------------------------------- |:------------------------- |
  | URL  | 租户 URL      | {% data variables.product.prodname_ghe_managed %} 上企业的 SCIM 预配 API 的 URL | <pre>https&colon;//api.<em>YOUR-GITHUB-AE-HOSTNAME</em>/scim/v2</pre> |
  | 共享机密 | 个人访问令牌、机密令牌 | IdP 上的应用程序用于代表企业所有者执行预配任务的令牌                                               | 您在步骤 1 中创建的个人访问令牌         |

{% endif %}
