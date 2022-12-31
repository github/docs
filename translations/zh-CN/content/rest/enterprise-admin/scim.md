---
title: SCIM
intro: 可以使用 SCIM API 自动创建用户和团队成员身份。
versions:
  ghes: '>=3.6'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ef20e958e8a0680425e116f9d7e576291b793766
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107275'
---
{% data reusables.scim.ghes-beta-note %}

{% data reusables.user-settings.enterprise-admin-api-classic-pat-only %}
## 关于 SCIM API

{% data variables.product.product_name %} 提供 SCIM API 供启用 SCIM 的标识提供者 (IdP) 使用。 IdP 上的集成可以使用 API 在使用 SAML 单一登录 (SSO) 进行身份验证的 {% data variables.product.product_name %} 实例上自动预配、管理或取消预配用户帐户。 有关 SAML SSO 的详细信息，请参阅“[关于适用于企业 IAM 的 SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)”。

SCIM API 基于 SCIM 2.0。 有关详细信息，请参阅[规范](https://www.simplecloud.info/#Specification)。

### SCIM 终结点 URL

IdP 可以使用以下根 URL 与 {% data variables.product.product_name %} 实例的 SCIM API 进行通信。

```
{% data variables.product.api_url_code %}/scim/v2/
```

SCIM API 的终结点 URL 区分大小写。 例如，`Users` 终结点中的第一个字母必须大写。

```shell
GET /scim/v2/Users/{scim_user_id}
```

### 向 SCIM API 验证调用

IdP 上的 SCIM 集成代表 {% data variables.product.product_name %} 实例的一个企业所有者执行操作。 有关详细信息，请参阅[企业中的角色](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owners)。

若要对 API 的请求进行身份验证，在 IdP 上配置 SCIM 的用户必须使用具有 `admin:enterprise` 范围的 {% data variables.product.pat_v1 %}，IdP 必须在请求的 `Authorization` 标头中提供该信息。 有关 {% data variables.product.pat_v1_plural %} 的详细信息，请参阅“[创建 {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)”。

{% note %}

注意：企业所有者必须生成并使用 {% data variables.product.pat_v1 %} 对 SCIM API 的请求进行身份验证。 目前不支持 {% ifversion ghes > 3.8 %}{% data variables.product.pat_v2_caps %} 和 {% endif %}GitHub 应用调用方。

{% endnote %}

### 关于映射 SAML 和 SCIM 数据
  
{% data variables.product.product_name %} 实例将每个通过 SAML SSO 成功进行身份验证的用户链接到 SCIM 标识。 若要成功链接标识，SAML IdP 和 SCIM 集成必须为每个用户使用匹配的 SAML `NameID` 和 SCIM `userName` 值。

{% ifversion ghes > 3.7 %} {% note %}

注意：如果 {% data variables.product.product_name %} 将 Azure AD 用作 SAML IdP，{% data variables.product.product_name %} 首先会检查 SCIM `externalId` 声明和 SAML `http://schemas.microsoft.com/identity/claims/objectidentifier` 声明是否与用户相匹配，而不是使用 `NameID` 和 `userName`。 

{% endnote %} {% endif %}

### 支持的 SCIM 用户属性

SCIM API 的 `User` 终结点支持在请求参数中使用以下属性。

| 名称 | 类型 | 说明 |
| :- | :- | :- |
| `displayName` | String | 用户的人类可读名称。 |
| `name.formatted` | String | 用户的全名，包括所有中间名、称谓和后缀，经过格式化以便显示。
| `name.givenName` | String | 用户的名字。 |
| `name.familyName` | String | 用户的姓氏。 |
| `userName` | String | 由 IdP 生成的用户的用户名。 使用前经过[规范化](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#about-username-normalization)处理。 
| `emails` | Array | 用户的电子邮件列表。 |
| `roles` | Array | 用户角色的列表。 |
| `externalId` | String | 此标识符由 IdP 提供程序生成。 可以在 IdP 上查找用户的 `externalId`，也可以使用[列出 SCIM 预配的标识](#list-scim-provisioned-identities-for-an-enterprise)终结点并筛选其他已知属性，例如 {% data variables.product.product_name %} 实例上用户的用户名或电子邮件地址。 |
| `id` | String | 实例的 SCIM 终结点生成的标识符。 |
| `active` | 布尔 | 指示标识处于活动状态 (`true`) 还是应暂停 (`false`)。 |

