---
title: 使用 SCIM 为企业配置用户预配
shortTitle: Configure SCIM user provisioning
intro: '可以为 {% ifversion scim-for-ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} 配置跨域标识管理系统 (SCIM)，当将{% ifversion scim-for-ghes %}你的实例{% elsif ghae %}{% data variables.product.product_name %}{% endif %} 的应用程序分配给标识提供者上的用户时，该系统会自动预配用户帐户。'
permissions: '{% ifversion scim-for-ghes %}Site administrators{% elsif ghae %}Enterprise owners{% endif %} can configure user provisioning for {% ifversion scim-for-ghes %}a {% data variables.product.product_name %} instance{% elsif ghae %}an enterprise on {% data variables.product.product_name %}{% endif %}.'
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
  - /admin/authentication/configuring-user-provisioning-for-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-user-provisioning-for-your-enterprise
  - /admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-for-your-enterprise
ms.openlocfilehash: ded93a01d14d1a5e26cdf35efed4f13afc832ca1
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192663'
---
{% data reusables.scim.ghes-beta-note %}

## 关于 {% data variables.product.product_name %} 的用户预配

{% ifversion ghae %}

{% data reusables.saml.ae-uses-saml-sso %} 有关详细信息，请参阅“[为企业配置 SAML 单一登录](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)”。

{% endif %}

{% ifversion scim-for-ghes %}如果对 {% data variables.location.product_location %} 使用 SAML 单一登录 (SSO)，{% elsif ghae %}你{% endif %}可以配置 SCIM 以自动创建或暂停用户帐户，并且在 IdP 上分配或取消分配应用程序时，可{% ifversion scim-for-ghes %}向实例{% elsif ghae %} 授予 {% data variables.product.product_name %}{% endif %} 的访问权限。 有关 SCIM 的详细信息，请参阅 IETF 网站上的[跨域身份管理系统：协议 (RFC 7644)](https://tools.ietf.org/html/rfc7644)。

如果不使用 SCIM 配置用户预配，则向用户分配或取消分配应用程序时，IdP 将不会自动与 {% data variables.product.product_name %} 通信。 如果没有 SCIM，{% data variables.product.product_name %} 会在有人第一次导航到 {% data variables.product.product_name %} 并通过 IdP 进行身份验证来登录时使用 SAML 实时 (JIT) 预配创建用户帐户。

配置预配使 IdP 能够在将 {% data variables.product.product_name %} 的应用程序分配或取消分配给 IdP 上的用户时与 {% data variables.location.product_location %} 通信。 当你在分配应用程序时，IdP 将提示 {% data variables.location.product_location %} 创建帐户并向用户发送一封登录电子邮件。 取消分配应用程序时，IdP 将与 {% data variables.product.product_name %} 通信以取消任何 SAML 会话并禁用成员的帐户。

要为企业配置预配，必须在 {% data variables.product.product_name %} 上启用预配，然后在 IdP 上安装和配置预配应用程序。

{% ifversion scim-for-ghes %}

IdP 上的预配应用程序使用 SCIM API 与 {% data variables.product.product_name %} 通信。 有关详细信息，请参阅 REST API 文档中的“[SCIM](/rest/enterprise-admin/scim)”。

{% endif %}

## 关于标识和声明

在 IdP 管理员授予对 {% data variables.location.product_location %} 的访问权限后，用户可以通过 IdP 进行身份验证，以使用 SAML SSO 访问 {% data variables.product.product_name %}。

在身份验证期间，{% ifversion scim-for-ghes %}实例{% elsif ghae %}{% data variables.product.product_name %}{% endif %}会尝试将用户与 SAML 标识相关联。 默认情况下，{% ifversion scim-for-ghes %}实例{% elsif ghae %}{% data variables.product.product_name %}{% endif %} 会将 IdP 中的 `NameID` 声明与帐户的用户名进行比较。 为进行比较，{% data variables.product.product_name %} 会将 `NameID` 值规范化。 有关用户名规范化等的详细信息，请参阅“[外部身份验证的用户名注意事项](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#about-username-normalization)。“

如果实例上没有具有匹配用户名的现有帐户，用户将无法登录。{% ifversion scim-for-ghes %} 若要进行此匹配，{% data variables.product.product_name %} 会将 IdP 中的 SAML `NameId` 声明与实例上 SCIM 预配的每个用户帐户的 `username` 声明进行比较。{% endif %}

{% ifversion scim-for-ghes %}

{% note %}

注意：在 SAML 身份验证期间，某些环境可能会使用除  **以外的值作为唯一标识声明**`NameID`。 目前，如果使用 SCIM 预配，则不支持 SAML 用户属性的自定义映射。

{% endnote %}

{% endif %}

如果 {% data variables.product.product_name %} 成功标识 IdP 中的用户，但帐户详细信息（如电子邮件地址、名字或姓氏）不匹配，则实例会使用 IdP 中的值覆盖详细信息。 除 SCIM 预配的主电子邮件以外的任何电子邮件地址也将从用户帐户中删除。

## 支持的身份提供程序

{% ifversion ghes %}

在专用 beta 版本中，帐户团队将提供在支持的 IdP 上为 {% data variables.product.product_name %} 配置 SCIM 的文档。

{% elsif ghae %}

以下 IdP 支持对 {% data variables.product.product_name %} 使用 SCIM 进行用户预配。

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

{% data reusables.scim.ghes-scim-beta-note %}

{% data reusables.scim.ghes-scim-idp-table %}

对于支持团队映射的 IdP，您可以将 {% data variables.product.product_name %} 应用程序分配给或取消分配给 IdP 中的用户组。 然后，这些组可供 {% data variables.location.product_location %} 中的组织所有者和团队维护员来映射到 {% data variables.product.product_name %} 团队。 有关详细信息，请参阅“[将 Okta 组映射到团队](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”。

{% endif %}

## 先决条件

{% ifversion ghae %}

- 初始化 {% data variables.product.product_name %} 时，必须配置 SAML SSO。 有关详细信息，请参阅“[初始化 {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)”。

{% elsif scim-for-ghes %}

- {% data reusables.saml.ghes-you-must-configure-saml-sso %}

- 必须允许对 IdP 上没有帐户的用户使用内置身份验证。 有关详细信息，请参阅“[允许对提供者外部的用户使用内置身份验证](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider)”。

- IdP 必须支持对服务提供商 (SP) 进行 SCIM 调用。

{% endif %}

- 您必须对 IdP 具有管理访问权限，才能配置应用程序进行 {% data variables.product.product_name %} 的用户预配。

## 为企业启用用户预配

{% ifversion scim-for-ghes %}

若要对实例执行预配操作，你将创建内置用户帐户，并将帐户提升为企业所有者。

在 {% data variables.product.product_name %} 实例上启用 SCIM 后，所有用户帐户都会暂停。 内置用户帐户将继续执行预配操作。 在授予用户从 IdP 访问实例的权限后，IdP 将使用 SCIM 与实例通信，以取消暂停用户帐户。

{% endif %}

{%- ifversion ghae %}
1. 当以企业所有者身份登录到 {% data variables.location.product_location %} 时，需创建一个范围为 admin:enterprise 的 {% data variables.product.pat_v1 %}。 有关详细信息，请参阅“[创建{% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)”。
  {% note %}

  **注释**：
    - 要创建 {% data variables.product.pat_generic %}，建议使用初始化期间创建的第一个企业所有者的帐户。 有关详细信息，请参阅“[初始化 {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)”。
    - 在 IdP 上为 SCIM 配置应用程序时需要此 {% data variables.product.pat_generic %}。 将令牌安全地存储在密码管理器中，直到您稍后在这些说明中再次需要该令牌。

  {% endnote %} {% warning %}

  **警告**：如果创建 {% data variables.product.pat_generic %} 的企业所有者的用户帐户已停用或取消预配，IdP 将不再自动为企业预配和取消预配用户帐户。 其他企业所有者必须创建新的 {% data variables.product.pat_generic %}，并在 IdP 上重新配置预配。

  {% endwarning %} {%- elsif scim-for-ghes %}
1. 创建内置用户帐户，对实例执行预配操作。 有关详细信息，请参阅“[允许对提供者外部的用户使用内置身份验证](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider#inviting-users-outside-your-provider-to-authenticate-to-your-instance)”。
1. 将专用用户帐户提升至企业所有者。 有关详细信息，请参阅[邀请人员管理企业](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#adding-an-enterprise-administrator-to-your-enterprise-account)。
1. 以新企业所有者身份登录到实例。
1. 在 admin:enterprise 范围内创建 {% data variables.product.pat_v1 %}。 请不要为 {% data variables.product.pat_v1 %} 指定到期日期。 有关详细信息，请参阅“[创建 {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)”。

   {% warning %}
   
   警告：请确保不为 {% data variables.product.pat_v1 %} 指定到期日期。 如果指定过期日期，则 SCIM 在到期日期过后将不再有效。
   
   {% endwarning %} {% note %}

   注意：测试 SCIM 配置和在 IdP 上为 SCIM 配置应用程序时需要此 {% data variables.product.pat_generic %}。 将令牌安全地存储在密码管理器中，直到您稍后在这些说明中再次需要该令牌。

   {% endnote %} {% data reusables.enterprise_installation.ssh-into-instance %}
1. 若要启用 SCIM，请在 {% data variables.contact.contact_enterprise_sales %} 上运行客户经理提供的命令。
{% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}
1. 若要验证 SCIM 是否正常运行，请运行以下命令。 将 _步骤 3 中的 PAT_ 和 _实例的主机名_ 替换为实际值。

   ```shell
   $ GHES_PAT="PAT FROM STEP 3"
   $ GHES_HOSTNAME="YOUR INSTANCE'S HOSTNAME"
   $ curl --location --request GET 'https://$GHES_HOSTNAME/api/v3/scim/v2/Users' \
       --header 'Content-Type: application/scim' \
       --header 'Authorization: Bearer $GHES_PAT'
   ```
   
   该命令应返回空数组。
{%- endif %} {%- ifversion ghae %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. 在“SCIM 用户预配”下，选择“需要 SCIM 用户预配”。
  ![企业安全设置中的“需要 SCIM 用户预配”复选框](/assets/images/help/enterprises/settings-require-scim-user-provisioning.png)
1. 单击“ **保存**”。
  ![企业安全设置中“需要 SCIM 用户预配”下的“保存”按钮](/assets/images/help/enterprises/settings-scim-save.png) {%- endif %}
1. 在 IdP 上 {% data variables.product.product_name %} 的应用程序中配置用户预配。{% ifversion scim-for-ghes %} 若要请求受支持 IdP 的文档，请在 {% data variables.contact.contact_enterprise_sales %} 上联系客户经理。 如果 IdP 不受支持，则必须手动创建应用程序并配置 SCIM。{% elsif ghae %}

  以下 IdP 提供有关为 {% data variables.product.product_name %} 配置预配的文档。 如果您的 IdP 未列出，请与您的 IdP 联系，以请求 {% data variables.product.product_name %}。

  | IdP | 详细信息 |
  | :- | :- |
  | Azure AD | [教程：在 Microsoft Docs 中配置 {% data variables.product.prodname_ghe_managed %} 以实现自动用户预配](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-provisioning-tutorial)。若要为 {% data variables.product.product_name %} 配置 Azure AD，请参阅“[使用 Azure AD 为企业配置身份验证和进行预配](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)”。 |
  | Okta | （beta 版本）若要为 {% data variables.product.product_name %} 配置 Okta，请参阅“[使用 Okta 为企业配置身份验证和进行预配](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-okta)”。 |

  IdP 上的应用程序需要两个值来预配或取消预配 {% data variables.location.product_location %} 上的用户帐户。

  | 值 | 其他名称 | 说明 | 示例 |
  | :- | :- | :- | :- |
  | URL | 租户 URL | {% data variables.product.product_name %} 上企业的 SCIM 预配 API 的 URL | <nobr><code>{% data variables.product.api_url_pre %}/scim/v2</nobr></code> |
  | 共享密钥 | {% data variables.product.pat_generic_caps %}，机密令牌 | IdP 上的应用程序用于代表企业所有者执行预配任务的令牌 | 在步骤 1 中创建的 {% data variables.product.pat_generic_caps %} |
  {%- endif %}
