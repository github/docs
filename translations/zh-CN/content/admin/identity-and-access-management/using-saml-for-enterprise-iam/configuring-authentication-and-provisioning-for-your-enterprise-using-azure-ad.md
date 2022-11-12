---
title: 使用 Azure AD 为企业配置身份验证和预配
shortTitle: Configure with Azure AD
intro: '可以使用 Azure Active Directory (Azure AD) 中的租户作为标识提供者 (IdP) 来集中管理{% data variables.location.product_location %}的身份验证和用户预配。'
permissions: 'Enterprise owners can configure authentication and provisioning for an enterprise on {% data variables.product.product_name %}.'
versions:
  ghae: '*'
  feature: scim-for-ghes
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
redirect_from:
  - /admin/authentication/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
ms.openlocfilehash: 10b6fdaa2014836e7a709bc94920dea6331ed030
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107507'
---
## 关于使用 Azure AD 进行身份验证和用户预配

Azure Active Directory (Azure AD) 是一项来自 Microsoft 的服务，它允许您集中管理用户帐户和 web 应用程序访问。 有关详细信息，请参阅 Microsoft Docs 中的[什么是 Azure Active Directory？](https://docs.microsoft.com/azure/active-directory/fundamentals/active-directory-whatis)

要管理身份以及对 {% data variables.product.product_name %} 的访问，您可以使用 Azure AD 租户作为 SAML IdP 进行身份验证。 也可以配置 Azure AD 以自动预配帐户并获取 SCIM 成员资格，这样你可以创建 {% data variables.product.product_name %} 用户，并从你的 Azure AD 租户管理团队和组织成员资格。

{% data reusables.scim.ghes-beta-note %}

使用 Azure AD 对 {% data variables.product.product_name %} 启用 SAML SSO 和 SCIM 后，你可以从 Azure AD 租户完成以下任务。

* 将 Azure AD 上的 {% data variables.product.product_name %} 应用程序分配给用户帐户，以便在 {% data variables.product.product_name %} 上自动创建并授予对相应用户帐户的访问权限。
* 为 Azure AD 上的用户帐户取消分配 {% data variables.product.product_name %} 应用程序，以便在 {% data variables.product.product_name %} 上停用相应的用户帐户。
* 为 Azure AD 上的 IdP 组分配 {% data variables.product.product_name %} 应用程序，以便为 IdP 组的所有成员自动创建并授予对 {% data variables.product.product_name %} 上用户帐户的访问权限。 此外，IdP 组也可以在 {% data variables.product.product_name %} 上连接到团队及其父组织。
* 从 IdP 组取消分配 {% data variables.product.product_name %} 应用程序来停用仅通过该 IdP 组访问的所有 IdP 用户的 {% data variables.product.product_name %} 用户帐户，并从父组织中删除这些用户。 IdP 组将与 {% data variables.product.product_name %} 上的任何团队断开连接。

有关在{% data variables.location.product_location %}上管理企业的身份验证和访问控制的详细信息，请参阅“[管理企业的身份验证和访问控制](/admin/authentication/managing-identity-and-access-for-your-enterprise)”。 有关将团队与 IdP 组同步的详细信息，请参阅“[将团队与标识提供者组同步](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group)”。

## 先决条件

- 要使用 Azure AD 配置 {% data variables.product.product_name %} 的身份验证和用户预配，您必须有 Azure AD 帐户和租户。 有关详细信息，请参阅 [Azure AD 网站](https://azure.microsoft.com/free/active-directory)和 Microsoft Docs 中的[快速入门：创建 Azure Active Directory 租户](https://docs.microsoft.com/azure/active-directory/develop/quickstart-create-new-tenant)。

{%- ifversion scim-for-ghes %}
- {% data reusables.saml.ghes-you-must-configure-saml-sso %} {%- endif %}

- {% data reusables.saml.assert-the-administrator-attribute %} 有关在 Azure AD 的 SAML 声明中包含 `administrator` 属性的详细信息，请参阅 Microsoft Docs 中的[如何：为企业应用程序自定义 SAML 令牌中颁发的声明](https://docs.microsoft.com/azure/active-directory/develop/active-directory-saml-claims-customization)。

- {% data reusables.saml.create-a-machine-user %}

## 使用 Azure AD 配置身份验证和用户预配

在 Azure AD 租户中，添加 {% data variables.product.product_name %} 的应用程序，然后配置预配。

{% ifversion ghae %}

1. 在 Azure AD 中，将 {% data variables.enterprise.ae_azure_ad_app_link %} 添加到租户并配置单一登录。 有关详细信息，请参阅 Microsoft Docs 中的[教程：Azure Active Directory 单一登录 (SSO) 与 {% data variables.product.product_name %} 的集成](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial)。

1. 在 {% data variables.product.product_name %} 中，输入 Azure AD 租户的详细信息。

    - {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

    - 如果已使用其他 IdP 为{% data variables.location.product_location %}配置 SAML SSO，并且希望改为使用 Azure AD，你可以编辑配置。 有关详细信息，请参阅“[为企业配置 SAML 单一登录](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise#editing-the-saml-sso-configuration)”。

1. 在 {% data variables.product.product_name %} 中启用用户预配，并在 Azure AD 中配置用户预配。 有关详细信息，请参阅“[为企业配置用户预配](/admin/authentication/configuring-user-provisioning-for-your-enterprise#enabling-user-provisioning-for-your-enterprise)”。

{% elsif scim-for-ghes %}

1. 在 Azure AD 租户的左侧栏中，单击“预配”。

1. 在“租户 URL”下，键入 {% data variables.location.product_location %}上 SCIM 的完整终结点 URL。 有关详细信息，请参阅 REST API 文档中的“[SCIM](/rest/enterprise-admin/scim#scim-endpoint-urls)”。

1. 在“机密令牌”下，输入在“[使用 SCIM 为企业配置用户配置](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise#enabling-user-provisioning-for-your-enterprise)”的步骤 4 中创建的{% data variables.product.pat_v1 %}。

1. 要确保从 Azure AD 成功连接到 {% data variables.location.product_location %}，请单击“测试连接”。

1. 确保连接成功后，单击页面顶部的“保存”。

{% endif %}
