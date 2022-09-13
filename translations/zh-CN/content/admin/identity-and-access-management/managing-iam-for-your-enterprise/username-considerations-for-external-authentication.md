---
title: 外部身份验证的用户名注意事项
shortTitle: Username considerations
intro: '{% ifversion ghes or ghec %}当你使用 {% ifversion ghes %}CAS、LDAP 或 SAML 进行身份验证时{% elsif ghec %}{% data variables.product.prodname_emus %}{% endif %}，{% endif %}{% data variables.product.product_name %} 遵循某些规则来确定{% ifversion ghec or ghae %}企业中{% elsif ghes %}实例上每个用户帐户的用户名{% endif %}。'
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 72f83b870e2c0ea13d95511ce4fc000b3ccfcfc5
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717995'
---
{% ifversion ghec %} {% note %}

注意：本文仅适用于 {% data variables.product.prodname_emus %}。 如果使用 {% data variables.product.prodname_ghe_cloud %} 而不使用 {% data variables.product.prodname_emus %}，则用户名由用户创建，而不是由 {% data variables.product.prodname_dotcom %} 创建。

{% endnote %} {% endif %}

## 关于使用外部身份验证的用户名

{% ifversion ghes %}

可以使用 CAS、LDAP 或 SAML 为 {% data variables.product.product_name %} 配置外部身份验证。 有关详细信息，请参阅“[关于企业身份验证](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server)”。

如果使用外部身份验证，当用户首次通过外部身份验证系统登录 {% data variables.product.product_location %} 时，{% data variables.product.product_location %} 会自动为每个用户创建一个用户名。

{% elsif ghec %}

如果使用具有 {% data variables.product.prodname_emus %} 的企业，则企业成员将通过 SAML 标识提供者 (IdP) 进行身份验证以访问 {% data variables.product.prodname_dotcom %}。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)”和“[关于企业身份验证](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server)”。

{% data variables.product.product_name %} 通过规范 IdP 提供的标识符，在通过 SCIM 预配用户帐户时自动为每个用户创建用户名。 如果将多个标识符规范化为相同的用户名，则会发生用户名冲突，并且将仅创建第一个用户帐户。 可以通过更改 IdP 来解决用户名冲突，以便规范化的用户名是唯一的。

{% elsif ghae %}

{% data variables.product.product_name %} 使用 SAML SSO 进行身份验证，并在用户首次通过标识提供者 (IdP) 登录时自动为其创建一个用户名。

{% endif %}

{% ifversion ghec %}
## 关于 {% data variables.product.prodname_managed_users %} 的用户名

创建 {% data variables.product.prodname_emu_enterprise %} 后，需要选择一个短代码作为企业成员用户名的后缀。 {% data reusables.enterprise-accounts.emu-shortcode %} 配置 SAML SSO 的设置用户的用户名格式为 @SHORT-CODE_admin  。 

通过标识提供者预配新用户时，新的 {% data variables.product.prodname_managed_user %} 将有一个 {% data variables.product.prodname_dotcom %} 用户名，格式为 @IDP-USERNAME_SHORT-CODE  。 IDP-USERNAME 组件是通过规范从 IdP 发送的 SCIM `userName` 特性值而形成的。 

| 标识提供者                 | {% data variables.product.prodname_dotcom %} 用户名  |
|-----------------------------------|----------------------|
| Azure Active Directory (Azure AD)租户 | IDP-USERNAME 是通过规范 UPN（用户主体名称）中 `@` 字符之前的字符而形成的，不包括来宾帐户的 `#EXT#`。 |
| Okta                              | IDP-USERNAME 是 IdP 提供的规范化用户名属性。               |

这些规则可能会导致 IdP 为多个用户提供相同的 IDP-USERNAME。 例如，对于 Azure AD，以下 UPN 将产生相同的用户名：

- `bob@contoso.com`
- `bob@fabrikam.com`
- `bob#EXT#fabrikamcom@contoso.com`

这将导致用户名冲突，并且只会预配第一个用户。 有关详细信息，请参阅“[解决用户名冲突](#resolving-username-conflicts)”。
{% endif %}

用户名{% ifversion ghec %}，包括下划线和短代码，{% endif %}不得超过 39 个字符。

## 关于用户名规范化

{% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_dotcom_the_website %}{% endif %} 上的用户帐户的用户名只能包含字母数字字符和短划线 (`-`)。

{% ifversion ghec %} 配置 SAML 身份验证时，{% data variables.product.product_name %} 使用从 IdP 发送的 SCIM `userName` 特性值来确定 {% data variables.product.prodname_dotcom_the_website %} 上相应用户帐户的用户名。 如果此值包含不受支持的字符，{% data variables.product.product_name %} 将按照以下规则规范化用户名。
{% elsif ghes %} 配置 CAS、LDAP 或 SAML 身份验证时，{% data variables.product.product_name %} 使用外部身份验证提供程序上用户帐户的标识符来确定 {% data variables.product.product_name %} 上相应用户帐户的用户名。 如果此标识符包含不受支持的字符，{% data variables.product.product_name %} 将按照以下规则规范化用户名。
{% elsif ghae %} 配置 SAML 身份验证时，{% data variables.product.product_name %} 使用 IdP 上用户帐户的标识符来确定 {% data variables.product.product_name %} 上相应用户帐户的用户名。 如果此标识符包含不受支持的字符，{% data variables.product.product_name %} 将按照以下规则规范化用户名。
{% endif %}

1. {% data variables.product.product_name %} 会将帐户用户名中的所有非字母数字字符规范化为短划线。 例如，用户名 `mona.the.octocat` 将规范化为 `mona-the-octocat`。 请注意，标准化的用户名也不能以短划线开头或结尾。 它们还不能包含两个连续的短划线。

1. 创建自电子邮件地址的用户名使用 `@` 字符前面的规范化字符创建。

1. 如果将多个帐户规范化为相同的 {% data variables.product.product_name %} 用户名，则将仅创建第一个用户帐户。 使用相同用户名的后续用户无法登录。 {% ifversion ghec %}有关详细信息，请参阅“[解决用户名冲突](#resolving-username-conflicts)”。{% endif %}

### 用户名规范化示例

| 提供程序上的标识符 | {% data variables.product.prodname_dotcom %} 上的规范化用户名 | 结果 |
| :- | :- | :- |
| The.Octocat | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | 此用户名已成功创建。 |
| !The.Octocat | `-the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | 此用户名无法创建，因其以短划线开头。 |
| The.Octocat! | `the-octocat-{% ifversion ghec %}_SHORT-CODE{% endif %}` | 此用户名无法创建，因其以短划线结尾。 |
| The!!Octocat | `the--octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | 此用户名无法创建，因其包含两个连续的短划线。 |
| The!Octocat | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | 此用户名无法创建。 虽然标准化的用户名有效，但它已经存在。 |
| `The.Octocat@example.com` | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | 此用户名无法创建。 虽然标准化的用户名有效，但它已经存在。 |
| `mona.lisa.the.octocat.from.github.united.states@example.com` | `mona-lisa-the-octocat-from-github-united-states{% ifversion ghec %}_SHORT-CODE{% endif %}` | 不会创建此用户名，因为它超出了 39 个字符的限制。 |

{% ifversion not ghec %}
### 关于使用 SAML 的用户名规范化

{% ifversion ghes %}如果为 {% data variables.product.product_location %} 配置 SAML 身份验证，则 {% endif %}{% data variables.product.product_name %} 通过 SAML 响应中的以下断言之一确定每个人的用户名，这些断言按优先级降序排列。

1. 自定义 `username` 特性（如果定义且存在）
1. `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name` 断言（如果存在）
1. `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` 断言（如果存在）
1. `NameID` 元素

{% data variables.product.product_name %} 需要 `NameID` 元素，即使存在其他特性也是如此。 有关详细信息，请参阅“[SAML 配置参考](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-attributes)”。

{% data variables.product.product_name %} 在来自 IdP 的 `NameID` 和 {% data variables.product.product_location %} {% ifversion ghae %}中{% else %}上{% endif %}的用户名间创建一个映射，因此 `NameID` 应是持久、唯一的，并且在用户生命周期内不会发生变化。

{% ifversion ghes %} {% note %}

注意：如果用户的 `NameID` 确实在 IdP 上发生了更改，则该用户在登录 {% data variables.product.product_location %} 时会看到一条错误消息。 若要恢复用户的访问权限，需要更新用户帐户的 `NameID` 映射。 有关详细信息，请参阅“[更新用户的 SAML `NameID`](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid)”。

{% endnote %} {% endif %} {% endif %}

{% ifversion ghec %}
## 解决用户名冲突

预配新用户时，如果用户的规范化用户名与企业中的现有用户冲突，则预配尝试将失败并出现 `409` 错误。 

若要解决此问题，必须在 IdP 中进行更改，以便规范化的用户名是唯一的。 如果无法更改要规范化的标识符，可以更改 `userName` 特性的特性映射。 如果更改特性映射，现有 {% data variables.product.prodname_managed_users %} 的用户名将更新，但有关帐户的其他任何内容都不会更改，包括活动历史记录。

{% note %}

注意：{% data variables.contact.github_support %} 无法为自定义特性映射或配置自定义表达式提供帮助。 如有任何问题，可以联系 IdP。

{% endnote %}

### 解决与 Azure AD 的用户名冲突

若要解决 Azure AD 中的用户名冲突，请修改冲突用户的用户主体名称值或修改 `userName` 特性的特性映射。 如果修改特性映射，可以选择现有特性或使用表达式来确保所有预配的用户都具有唯一的规范化别名。

1. 在 Azure AD 中，打开 {% data variables.product.prodname_emu_idp_application %} 应用程序。
1. 在左侧边栏中，单击“预配”。
1. 单击“编辑预配”。
1. 展开“映射”，然后单击“预配 Azure Active Directory 用户” 。
1. 单击 {% data variables.product.prodname_dotcom %} `userName` 特性映射。 
1. 更改特性映射。
   - 若要将 Azure AD 中的现有特性映射到 {% data variables.product.prodname_dotcom %} 中的 `userName` 特性，请单击所需的特性字段。 然后，保存并等待，预配周期将在大约 40 分钟内发生。
   - 若要使用表达式而不是现有特性，请将映射类型更改为“表达式”，然后添加自定义表达式，使该值对所有用户都是唯一的。 例如，可以使用 `[FIRST NAME]-[LAST NAME]-[EMPLOYEE ID]`。 有关详细信息，请参阅 Microsoft Docs 中的[有关在 Azure Active Directory 中编写特性映射表达式的参考](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/functions-for-customizing-application-data)。

### 解决与 Okta 的用户名冲突

若要解决 Okta 中的用户名冲突，请更新 {% data variables.product.prodname_emu_idp_application %} 应用程序的特性映射设置。

1. 在 Okta 中，打开 {% data variables.product.prodname_emu_idp_application %} 应用程序。
1. 单击“登录”。
1. 在“设置”部分，单击“编辑”。
1. 更新“应用程序用户名格式”。
{% endif %}
