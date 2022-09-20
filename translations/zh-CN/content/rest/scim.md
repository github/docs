---
title: SCIM
intro: 可使用 SCIM API 控制和管理 GitHub 组织成员访问权限。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/scim
ms.openlocfilehash: 314ed9433ffeb1ef3f189795727a3b654c529c96
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883041'
---
## 关于 SCIM API

### 组织的 SCIM 预配

SCIM API 由 SCIM 启用的身份提供程序 (IdP) 用来自动预配 {% data variables.product.product_name %} 组织成员身份。 {% ifversion fpt or ghec %} {% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 基于 [ 的 2.0 版 SCIM 标准](http://www.simplecloud.info/)。 IdP 应使用的 {% data variables.product.product_name %} SCIM 终结点是：`{% data variables.product.api_url_code %}/scim/v2/organizations/{org}/`。

{% note %}

**注意：** 
  - SCIM API 仅适用于启用了 [SAML SSO](/rest/overview/other-authentication-methods#authenticating-for-saml-sso) 的 [{% data variables.product.prodname_ghe_cloud %}](/billing/managing-billing-for-your-github-account/about-billing-for-github-accounts) 使用的个人组织。 有关 SCIM 的详细信息，请参阅“[关于组织的 SCIM](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)”。
  - SCIM API 不能与企业帐户或 {% data variables.product.prodname_emu_org %} 一起使用。

{% endnote %}

### 向 SCIM API 验证调用

您必须验证为 {% data variables.product.product_name %} 组织的所有者才可使用其 SCIM API。 该 API 要求将 [OAuth 2.0 持有者](/developers/apps/authenticating-with-github-apps)令牌包含在 `Authorization` 标头中。 还可以使用个人访问令牌，但必须先[授权它与 SAML SSO 组织一起使用](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)。

### SAML 和 SCIM 数据的映射

{% data reusables.scim.nameid-and-username-must-match %}

### 支持的 SCIM 用户属性

名称 | 类型 | 说明
-----|------|--------------
`userName`|`string` | 用户的用户名。
`name.givenName`|`string` | 用户的名字。
`name.familyName`|`string` | 用户的姓氏。
`emails` | `array` | 用户电子邮件列表。
`externalId` | `string` | 此标识符由 SAML 提供程序生成，并且被 SAML 提供程序用作唯一 ID 来匹配 GitHub 用户。 可以在 SAML 提供程序上查找用户的 `externalID`，也可以使用[列出 SCIM 预配的身份](#list-scim-provisioned-identities)终结点并筛选其他已知属性，例如用户的 GitHub 用户名或电子邮件地址。
`id` | `string` | GitHub SCIM 端点生成的标识符。
`active` | `boolean` | 用于表示身份是处于活动状态 (true) 还是应解除预配 (false)。

{% note %}

注意：SCIM API 的终结点 URL 区分大小写。 例如，`Users` 终结点中的第一个字母必须大写：

```shell
GET /scim/v2/organizations/{org}/Users/{scim_user_id}
```

{% endnote %}
