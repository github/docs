---
title: SCIM
redirect_from:
  - /v3/scim
versions:
  free-pro-team: '*'
---

### 组织的 SCIM 预配

SCIM API 由 SCIM 启用的身份提供程序 (IdP) 用来自动预配 {% data variables.product.product_name %} 组织成员身份。 {% data variables.product.product_name %} API 基于[SCIM 标准](http://www.simplecloud.info/)的 2.0 版本。 IdP 应使用的 {% data variables.product.product_name %} SCIM 端点是：`{% data variables.product.api_url_code %}/scim/v2/organisation/{org}/`。

{% note %}

**注：**SCIM API 仅适用于 [{% data variables.product.prodname_ghe_cloud %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-accounts) 上启用了 [SAML SSO](/rest/overview/other-authentication-methods#authenticating-for-saml-sso) 的组织。 有关 SCIM 的更多信息，请参阅“[关于 SCIM](/github/setting-up-and-managing-organizations-and-teams/about-scim)”。

{% endnote %}

### 向 SCIM API 验证调用

您必须验证为 {% data variables.product.product_name %} 组织的所有者才可使用其 SCIM API。 API 预期 [OAuth 2.0 Bearer](/developers/apps/authenticating-with-github-apps) 令牌包含在`授权`标头中。 您也可以使用个人访问令牌，但必须先[授权它与您的 SAML SSO 组织一起使用](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)。

### SAML 和 SCIM 数据的映射

SAML IdP 和 SCIM 客户端必须对每个用户使用匹配的 `NameID` 和 `userName` 值。 这允许通过 SAML 进行身份验证的用户链接到其预配的 SCIM 标识。

### 支持的 SCIM 用户属性

| 名称               | 类型    | 描述                                                                                                                                                                                    |
| ---------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userName`       | `字符串` | 用户的用户名。                                                                                                                                                                               |
| `name.givenName` | `字符串` | 用户的名字                                                                                                                                                                                 |
| `name.lastName`  | `字符串` | 用户的姓氏。                                                                                                                                                                                |
| `emails`         | `数组`  | 用户电子邮件列表。                                                                                                                                                                             |
| `externalId`     | `字符串` | 此标识符由 SAML 提供程序生成，并且被 SAML 提供程序用作唯一 ID 来匹配 GitHub 用户。 您可以在 SAML 提供程序上查找用户的 `externalID`，或者使用 [List SCIM 预配的身份](#list-scim-provisioned-identities)端点并过滤其他已知的属性，如用户的 GitHub 用户名或电子邮件地址。 |
| `id`             | `字符串` | GitHub SCIM 端点生成的标识符。                                                                                                                                                                 |
| `active`         | `布尔值` | 用于表示身份是处于活动状态 (true) 还是应解除预配 (false)。                                                                                                                                                 |

{% note %}

**注：**SCIM API 的端点 URL 区分大小写。 例如，`Users` 端点中的第一个字母必须大写：

```shell
GET /scim/v2/organizations/{org}/Users/{scim_user_id}
```

{% endnote %}

{% include rest_operations_at_current_path %}
