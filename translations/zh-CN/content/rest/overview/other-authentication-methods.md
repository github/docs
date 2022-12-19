---
title: 其他身份验证方法
intro: 您可以在非生产环境中使用基本身份验证进行测试。
redirect_from:
  - /v3/auth
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Other authentication methods
ms.openlocfilehash: a979c5e688f6f6942a56c9cff55386bb72a92e57
ms.sourcegitcommit: f392aa98511e0889d96af2e4a56e67f8adfb025f
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172715'
---
{% ifversion fpt or ghes or ghec %} 虽然 API 提供了多种身份验证方法，但我们强烈建议对生产应用程序使用 [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/)。 提供的其他方法旨在用于脚本或测试（即没有必要使用完整 OAuth 的情况）。 依赖 {% data variables.product.product_name %} 进行身份验证的第三方应用程序不应要求或收集 {% data variables.product.product_name %} 凭据。
相反，它们应该使用 [OAuth Web 流](/apps/building-oauth-apps/authorizing-oauth-apps/)。

{% endif %}

{% ifversion ghae %}

若要进行身份验证，我们建议使用 [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/) 令牌，此类 {% data variables.product.pat_generic %} 通过 [OAuth Web 流](/apps/building-oauth-apps/authorizing-oauth-apps/)。

{% endif %}

## 基本身份验证

API 支持 [RFC2617](http://www.ietf.org/rfc/rfc2617.txt) 中定义的基本身份验证，但有一些细微差别。
主要区别在于，RFC 要求使用 `401 Unauthorized` 响应应答未经身份验证的请求。 在很多地方，这会暴露用户数据的存在。 相反，{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 通过 `404 Not Found` 进行响应。
这可能会导致假定 `401 Unauthorized` 响应的 HTTP 库出现问题。 解决方案是手动创建 `Authorization` 标头。

### 通过 {% data variables.product.pat_generic %}

建议使用 {% ifversion pat-v2%}{% data variables.product.pat_v2 %}{% else %}{% data variables.product.pat_generic %}{% endif %} 向 GitHub API 进行身份验证。

```shell
$ curl -u USERNAME:TOKEN {% data variables.product.api_url_pre %}/user
```

如果你的工具只支持基本身份验证，但你想要利用 {% data variables.product.pat_generic %} 安全功能，此方法非常有用。

{% ifversion not ghae %}
### 通过用户名和密码

{% ifversion fpt or ghec %} {% note %}

注意：从 2020 年 11 月 13 日起，{% data variables.product.prodname_dotcom %} 停止对所有 {% data variables.product.prodname_dotcom_the_website %} 帐户的 API 密码验证，包括 {% data variables.product.prodname_free_user %}、{% data variables.product.prodname_pro %}、{% data variables.product.prodname_team %} 或 {% data variables.product.prodname_ghe_cloud %} 计划。 现在，你必须使用 API 令牌（如 OAuth 访问令牌、GitHub 应用程序安装访问令牌或 {% data variables.product.pat_generic %}，具体取决于你需要使用令牌执行的操作）向 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 进行身份验证。 有关详细信息，请参阅“[故障排除](/rest/overview/troubleshooting#basic-authentication-errors)”。
 
{% endnote %} {% else %}

要将基本身份验证与 {% data variables.product.product_name %} API 结合使用，只需发送与帐户关联的用户名和密码。

例如，如果要通过 [cURL][curl] 访问 API，如果使用 {% data variables.product.product_name %} 用户名替换 `<username>`，则以下命令将对你进行身份验证。
（cURL 将提示您输入密码。）

```shell
$ curl -u USERNAME {% data variables.product.api_url_pre %}/user
```
如果启用了双因素身份验证，请确保了解如何[使用双因素身份验证](/rest/overview/other-authentication-methods#working-with-two-factor-authentication)。
{% endif %} {% endif %}

{% ifversion fpt or ghec %}
### SAML SSO 身份验证

{% note %}

注意：代表其他工具生成令牌的集成和 OAuth 应用程序将自动获得授权。

{% endnote %}

{% note %}

注意：{% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

如果使用 API 访问强制实施 [SAML SSO][saml-sso] 以进行身份验证的组织，则需要创建 {% data variables.product.pat_generic %} 并为该组织[授权该令牌][allowlist]。 访问 `X-GitHub-SSO` 中指定的 URL 为组织授权令牌。

```shell
$ curl -v -H "Authorization: Bearer TOKEN" {% data variables.product.api_url_pre %}/repos/octodocs-test/test

> X-GitHub-SSO: required; url=https://github.com/orgs/octodocs-test/sso?authorization_request=AZSCKtL4U8yX1H3sCQIVnVgmjmon5fWxks5YrqhJgah0b2tlbl9pZM4EuMz4
{
  "message": "Resource protected by organization SAML enforcement. You must grant your personal token access to this organization.",
  "documentation_url": "https://docs.github.com"
}
```

当请求可能来自多个组织的数据（例如，[请求用户创建的问题列表][user-issues]）时，`X-GitHub-SSO` 标头指示哪些组织要求你授权 {% data variables.product.pat_generic %}：

```shell
$ curl -v -H "Authorization: Bearer TOKEN" {% data variables.product.api_url_pre %}/user/issues

> X-GitHub-SSO: partial-results; organizations=21955855,20582480
```

值 `organizations` 是一个以逗号分隔的组织 ID 列表，这些组织需要你的 {% data variables.product.pat_generic %} 授权。
{% endif %}

{% ifversion fpt or ghes or ghec %}
## 使用双重身份验证

启用双因素身份验证后，REST API 中的大多数终结点的[基本身份验证](#basic-authentication)要求你使用 {% data variables.product.pat_generic %}{% ifversion ghes %} 或 OAuth 令牌，而不是用户名和密码{% endif %}。

可以{% ifversion fpt or ghec %}使用 [{% data variables.product.product_name %} 开发人员设置](https://github.com/settings/tokens/new){% endif %}{% ifversion ghes %}或使用 OAuth 授权 API 中的“[创建新的授权][/rest/reference/oauth-authorizations#create-a-new-authorization]”终结点生成新的 OAuth 令牌{% endif %}来生成新的 {% data variables.product.pat_generic %}。 有关详细信息，请参阅“[为命令行创建 {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)”。 然后，你将使用这些令牌通过 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API [使用 OAuth 令牌进行身份验证][oauth-auth]。{% ifversion ghes %} 只有在创建 OAuth 令牌或使用 OAuth 授权 API 时，才需要使用用户名和密码进行身份验证。{% endif %}

{% endif %}

{% ifversion ghes %}
### 结合使用 OAuth 授权 API 与双重身份验证

当您调用 OAuth 授权 API 时，基本身份验证会要求您使用一次性密码 (OTP) 以及您的用户名和密码，而不是令牌。 在尝试使用 OAuth 授权 API 进行身份验证时，服务器将通过 `401 Unauthorized` 和以下标头之一进行响应，让你知道需要双因素身份验证代码：

`X-GitHub-OTP: required; SMS` 或 `X-GitHub-OTP: required; app`。  

此标头指示您的帐户如何接收其双重身份验证代码。 您将通过 SMS 接收 OTP 代码，或者使用 Google Authenticator 或 1Password 等应用程序，具体取决于您的帐户设置。 有关详细信息，请参阅“[配置双因素身份验证](/articles/configuring-two-factor-authentication)”。 在标头中传递 OTP：

```shell
$ curl --request POST \
  --url https://api.github.com/authorizations \
  --header 'authorization: Basic PASSWORD' \
  --header 'content-type: application/json' \
  --header 'x-github-otp: OTP' \
  --data '{"scopes": ["public_repo"], "note": "test"}'
```
{% endif %}

[curl]: http://curl.haxx.se/
[oauth-auth]: /rest/overview/resources-in-the-rest-api#authentication
[personal-access-tokens]: /articles/creating-a-personal-access-token-for-the-command-line
[saml-sso]: /articles/about-identity-and-access-management-with-saml-single-sign-on
[saml-sso-tokens]: https://github.com/settings/tokens
[allowlist]: /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
[user-issues]: /rest/reference/issues#list-issues-assigned-to-the-authenticated-user
