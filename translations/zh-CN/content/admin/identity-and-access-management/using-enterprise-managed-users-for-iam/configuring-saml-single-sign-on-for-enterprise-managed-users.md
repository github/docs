---
title: 为企业托管用户配置 SAML 单一登录
shortTitle: SAML for managed users
intro: '可以通过配置安全断言标记语言 (SAML) 单一登录 (SSO) 来自动管理对 {% data variables.product.prodname_dotcom %} 上企业帐户的访问。'
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/configuring-saml-single-sign-on-for-enterprise-managed-users
versions:
  ghec: '*'
type: tutorial
topics:
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: 8464afda7b87f23d7466851901536668c4440944
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145955501'
---
## 关于 {% data variables.product.prodname_emus %} 的 SAML 单一登录

通过 {% data variables.product.prodname_emus %}，企业使用 SAML SSO 对所有成员进行身份验证。 你的企业成员将通过 IdP 登录，而不是使用 {% data variables.product.prodname_dotcom %} 用户名和密码登录到 {% data variables.product.prodname_dotcom %}。

{% data variables.product.prodname_emus %} 支持以下 IdP：

{% data reusables.enterprise-accounts.emu-supported-idps %}

配置 SAML SSO 后，我们建议存储恢复代码，以便在标识提供者不可用时恢复对企业的访问权限。

{% note %}

注意：启用 SAML SSO 后，可在 {% data variables.product.prodname_dotcom %} 上为现有的 SAML 配置所更新的唯一设置是 SAML 证书。 如果需要更新登录 URL 或颁发者，必须首先禁用 SAML SSO，然后使用新设置重新配置 SAML SSO。

{% endnote %}

## 配置 {% data variables.product.prodname_emus %} 的 SAML 单一登录

要为 {% data variables.product.prodname_emu_enterprise %} 配置 SAML SSO，需要在 IdP 上配置应用程序，然后在 GitHub.com 上配置企业。 配置 SAML SSO 后，可以配置用户预配。 

要在 IdP 上安装和配置 {% data variables.product.prodname_emu_idp_application %} 应用程序，必须在受支持的 IdP 上拥有租户和管理访问权限。

{% note %}

{% data reusables.enterprise-accounts.emu-password-reset-session %}

{% endnote %}

1. [配置标识提供者](#configuring-your-identity-provider)
2. [配置企业](#configuring-your-enterprise)
3. [启用设置](#enabling-provisioning)

### 配置标识提供者

要配置 IdP，请按照他们提供的说明在 IdP 上配置 {% data variables.product.prodname_emu_idp_application %} 应用程序。

1. 要安装 {% data variables.product.prodname_emu_idp_application %} 应用程序，请单击下面的 IdP 链接：

     - [Azure Active Directory 上的 {% data variables.product.prodname_emu_idp_application %} 应用程序](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/aad.githubenterprisemanageduser?tab=Overview)
     - [Okta 上的 {% data variables.product.prodname_emu_idp_application %} 应用程序](https://www.okta.com/integrations/github-enterprise-managed-user)

1. 要配置 {% data variables.product.prodname_emu_idp_application %} 应用程序和 IdP，请单击以下链接，并按照 IdP 提供的说明进行操作：

     - [{% data variables.product.prodname_emus %} 的 Azure Active Directory 教程](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-tutorial)
     - [{% data variables.product.prodname_emus %} 的 Okta 文档](https://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-GitHub-Enterprise-Managed-User.html)

1. 因此，你可以测试和配置企业，将自己或将在 {% data variables.product.prodname_dotcom %} 上配置 SAML SSO 的用户分配到 IdP 上的 {% data variables.product.prodname_emu_idp_application %} 应用程序。

1. 若要能够继续在 {% data variables.product.prodname_dotcom %} 上配置企业，请找到并记下在 IdP 上安装的应用程序的以下信息：

    | 值 | 其他名称 | 说明 |
    | :- | :- | :- |
    | IdP 登录 URL | 登录 URL、IdP URL | IdP 上的应用程序的 URL |
    | IdP 标识符 URL | 颁发者 | 用于 SAML 身份验证的服务提供商的 IdP 标识符 |
    | 签名证书，Base64 编码 | 公用证书 | IdP 用于对身份验证请求进行签名的公共证书 |

### 配置企业

在标识提供者上安装并配置 {% data variables.product.prodname_emu_idp_application %} 应用程序之后，便可以配置企业。 

1. 使用用户名“@<em>SHORT-CODE</em>_admin”以新企业的安装用户身份登录到 {% data variables.product.prodname_dotcom_the_website %}。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}

1. 在“SAML 单一登录”下，选择“要求 SAML 身份验证”。
  ![用于启用 SAML SSO 的复选框](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)

1. 在“登录 URL”下，键入在配置 IdP 时记下的用于单一登录请求的 IdP 的 HTTPS 终结点。
![登录时将成员转发到的 URL 字段](/assets/images/help/saml/saml_sign_on_url_business.png)

1. （可选）在“颁发者”字段下，输入在配置 IdP 时记下的 SAML 颁发者 URL，以验证发送的消息的真实性。
![SAML 颁发者的姓名字段](/assets/images/help/saml/saml_issuer.png)

1. 在“公共证书”下，粘贴在配置 IdP 时记下的证书以验证 SAML 响应。
![标识提供程序的公共证书字段](/assets/images/help/saml/saml_public_certificate.png)

1. 要验证来自 SAML 签发者的请求的完整性，请单击 {% octicon "pencil" aria-label="The edit icon" %}。 然后，在“签名方法”和“摘要方法”下拉菜单中，选择 SAML 签发者使用的哈希算法。
![SAML 颁发者使用的签名方法和摘要方法哈希算法下拉列表](/assets/images/help/saml/saml_hashing_method.png)

1. 在为企业启用 SAML SSO 之前，单击“测试 SMAL 配置”，以确保已输入的信息正确。 ![实施前测试 SAML 配置的按钮](/assets/images/help/saml/saml_test.png)

1. 单击“ **保存**”。

    {% note %}

    注意：当企业需要 SAML SSO 时，安装用户将不再有权访问企业，但将保持登录到 GitHub。 只有 IdP 预配的 {% data variables.product.prodname_managed_users %} 才能访问企业。

    {% endnote %}

{% data reusables.enterprise-accounts.download-recovery-codes %}


### 启用设置

启用 SAML SSO 后，启用预配。 有关详细信息，请参阅“[为企业托管用户配置 SCIM 预配](//admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)”。

