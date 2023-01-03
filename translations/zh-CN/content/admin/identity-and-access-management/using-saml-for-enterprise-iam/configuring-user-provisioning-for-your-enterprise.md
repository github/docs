---
title: 为企业配置用户预配
shortTitle: Configure user provisioning
intro: 您可以为企业配置跨域身份管理 (SCIM)，以在将 {% data variables.product.product_location %} 的应用程序分配给身份提供商 (IdP) 上的用户时，就自动在 {% data variables.product.product_location %} 上预配用户帐户。
permissions: Enterprise owners can configure user provisioning for an enterprise on {% data variables.product.product_name %}.
versions:
  ghae: '*'
type: how_to
topics:
- Accounts
- Authentication
- Enterprise
- Identity
- SSO
redirect_from:
- /admin/authentication/configuring-user-provisioning-for-your-enterprise
- /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-user-provisioning-for-your-enterprise
ms.openlocfilehash: c76cf3a3245b272fc61db68470e7a34796a89e42
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145098052"
---
## 关于企业的用户预配

{% data reusables.saml.ae-uses-saml-sso %} 有关详细信息，请参阅“[为企业配置 SAML 单一登录](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)”。

在 IdP 上分配或取消分配应用程序时，可以使用 SCIM 配置用户预配以自动创建或暂停用户帐户并授予 {% data variables.product.product_name %} 访问权限。 有关 SCIM 的详细信息，请参阅 IETF 网站上的[跨域身份管理系统：协议 (RFC 7644)](https://tools.ietf.org/html/rfc7644)。

如果不使用 SCIM 配置用户预配，则向用户分配或取消分配应用程序时，IdP 将不会自动与 {% data variables.product.product_name %} 通信。 如果没有 SCIM，{% data variables.product.product_name %} 会在有人第一次导航到 {% data variables.product.product_name %} 并通过 IdP 进行身份验证来登录时使用 SAML 实时 (JIT) 预配创建用户帐户。

配置预配允许 IdP 在您将 {% data variables.product.product_name %} 的应用程序分配或取消分配给 IdP 上的用户时与 {% data variables.product.product_location %} 通信。 当您分配应用程序时，IdP 将提示 {% data variables.product.product_location %} 创建帐户并向用户发送一封登录电子邮件。 取消分配应用程序时，IdP 将与 {% data variables.product.product_name %} 通信以取消任何 SAML 会话并禁用成员的帐户。

要为企业配置预配，必须在 {% data variables.product.product_name %} 上启用预配，然后在 IdP 上安装和配置预配应用程序。

IdP 上的预配应用程序通过企业的 SCIM API 与 {% data variables.product.product_name %} 通信。 有关详细信息，请参阅 {% data variables.product.prodname_dotcom %} REST API 文档中的“[GitHub Enterprise 管理](/rest/reference/enterprise-admin#scim)”。

## 支持的身份提供程序

支持以下 IdP 用于通过 {% data variables.product.prodname_ghe_managed %} 的 SSO：

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

对于支持团队映射的 IdP，您可以将 {% data variables.product.product_name %} 应用程序分配给或取消分配给 IdP 中的用户组。 然后，这些组可供 {% data variables.product.product_location %} 中的组织所有者和团队维护员用来映射到 {% data variables.product.product_name %} 团队。 有关详细信息，请参阅“[将 Okta 组映射到团队](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”。

## 先决条件

要自动预配和解除预配从 IdP 访问 {% data variables.product.product_location %}，必须先在初始化 {% data variables.product.product_name %} 时配置 SAML SSO。 有关详细信息，请参阅“[初始化 {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)”。

您必须对 IdP 具有管理访问权限，才能配置应用程序进行 {% data variables.product.product_name %} 的用户预配。

## 为企业启用用户预配

1. 当以企业所有者身份登录到 {% data variables.product.product_location %} 时，需创建一个具有 admin:enterprise 作用域的个人访问令牌。 有关详细信息，请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。
  {% note %}

  **注释**：
    - 要创建个人访问令牌，我们建议使用初始化期间创建的第一个企业所有者的帐户。 有关详细信息，请参阅“[初始化 {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)”。
    - 您需要此个人访问令牌在 IdP 上为 SCIM 配置应用程序。 将令牌安全地存储在密码管理器中，直到您稍后在这些说明中再次需要该令牌。

  {% endnote %} {% warning %}

  警告：如果创建个人访问令牌的企业所有者的用户帐户被停用或取消预配，IdP 将不再自动为企业预配和取消预配用户帐户。 另一个企业所有者必须创建新的个人访问令牌，并在 IdP 上重新配置预配。

  {% endwarning %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. 在“SCIM 用户预配”下，选择“需要 SCIM 用户预配”。
  ![企业安全设置中的“需要 SCIM 用户预配”复选框](/assets/images/help/enterprises/settings-require-scim-user-provisioning.png)
1. 单击“ **保存**”。
  ![企业安全设置中“需要 SCIM 用户预配”下的“保存”按钮](/assets/images/help/enterprises/settings-scim-save.png)
1. 在 IdP 上 {% data variables.product.product_name %} 的应用程序中配置用户预配。

  以下 IdP 提供有关为 {% data variables.product.product_name %} 配置预配的文档。 如果您的 IdP 未列出，请与您的 IdP 联系，以请求 {% data variables.product.product_name %}。

  | IdP | 详细信息 |
  | :- | :- |
  | Azure AD | [教程：在 Microsoft Docs 中配置 {% data variables.product.prodname_ghe_managed %} 以实现自动用户预配](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-provisioning-tutorial)。若要为 {% data variables.product.prodname_ghe_managed %} 配置 Azure AD，请参阅“[使用 Azure AD 为企业配置身份验证和进行预配](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)”。|
| Okta | （beta 版本）若要为 {% data variables.product.prodname_ghe_managed %} 配置 Okta，请参阅“[使用 Okta 为企业配置身份验证和进行预配](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta)”。|

  IdP 上的应用程序需要两个值来预配或取消预配 {% data variables.product.product_location %} 上的用户帐户。

  | 值 | 其他名称 | 说明 | 示例 |
  | :- | :- | :- | :- |
  | URL | 租户 URL | {% data variables.product.prodname_ghe_managed %} 上企业的 SCIM 预配 API 的 URL | <nobr><code>{% data variables.product.api_url_pre %}/scim/v2</nobr></code> |
  | 共享密钥 | 个人访问令牌、机密令牌 | IdP 上的应用程序用于代表企业所有者执行预配任务的令牌 | 您在步骤 1 中创建的个人访问令牌 |
