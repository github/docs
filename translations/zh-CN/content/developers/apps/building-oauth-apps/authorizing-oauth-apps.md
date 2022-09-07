---
title: 授权 OAuth 应用
intro: '{% data reusables.shortdesc.authorizing_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/about-authorization-options-for-oauth-apps
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/directing-users-to-review-their-access
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/creating-multiple-tokens-for-oauth-apps
  - /v3/oauth
  - /apps/building-oauth-apps/authorization-options-for-oauth-apps
  - /apps/building-oauth-apps/authorizing-oauth-apps
  - /developers/apps/authorizing-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
ms.openlocfilehash: 10aa111156377c08f0dc4ad0210cf8ad30b8a3ac
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147717787'
---
{% data variables.product.product_name %} 的 OAuth 实现支持标准[授权代码授权类型](https://tools.ietf.org/html/rfc6749#section-4.1)和对无权访问 Web 浏览器的应用的 OAuth 2.0 [设备授权](https://tools.ietf.org/html/rfc8628)。

如果想跳过以标准方式授权应用（例如在测试应用时），可以使用[非 Web 应用程序流](#non-web-application-flow)。

要授权您的 OAuth 应用程序，请考虑哪个授权流程最适合您的应用程序。

- [Web 应用程序流](#web-application-flow)：用于授权用户使用在浏览器中运行的标准 OAuth 应用。 （不支持[隐式授权类型](https://tools.ietf.org/html/rfc6749#section-4.2)。）
- [设备流](#device-flow)：用于无外设应用，例如 CLI 工具。

## Web 应用程序流程

{% note %}

注意：如果要生成 GitHub 应用，仍可以使用 OAuth Web 应用程序流，但设置方面有一些重要差别。 有关详细信息，请参阅“[标识和授权 GitHub 应用的用户](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)”。

{% endnote %}

授权应用程序用户的 web 应用程序流程是：

1. 用户被重定向，以请求他们的 GitHub 身份
2. 用户被 GitHub 重定向回您的站点
3. 您的应用程序使用用户的访问令牌访问 API

### 1. 请求用户的 GitHub 标识

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

当 GitHub 应用指定 `login` 参数时，它将提示用户使用他们可用于登录和授权你的应用的特定帐户。

#### 参数

名称 | 类型 | 说明
-----|------|--------------
`client_id`|`string` | “必需”。 {% ifversion fpt or ghec %}[注册](https://github.com/settings/applications/new){% else %}registered{% endif %}时从 GitHub 收到的客户端 ID。
`redirect_uri`|`string` | 用户获得授权后被发送到的应用程序中的 URL。 请参阅以下有关[重定向 URL](#redirect-urls) 的详细信息。
`login` | `string` | 提供用于登录和授权应用程序的特定账户。
`scope`|`string` | [范围](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)的空格分隔列表。 如果未提供，则 `scope` 默认为未授权应用程序的任何范围的用户的空列表。 对于已向应用程序授权作用域的用户，不会显示含作用域列表的 OAuth 授权页面。 相反，通过用户向应用程序授权的作用域集，此流程步骤将自动完成。 例如，如果用户已经执行了两次 Web 流，并且已授权一个具有 `user` 范围的令牌和另一个具有 `repo` 范围的令牌，则不提供 `scope` 的第三个 Web 流将收到具有 `user` 和 `repo` 范围的令牌。
`state` | `string` | {% data reusables.apps.state_description %}
`allow_signup`|`string` | 在 OAuth 流程中，是否向经过验证的用户提供注册 GitHub 的选项。 默认为 `true`。 在策略禁止注册时使用 `false`。

### 2. 用户被 GitHub 重定向回你的站点

如果用户接受你的请求，{% data variables.product.product_name %} 会使用代码参数中的临时 `code` 以及你在上一步的 `state` 参数中提供的状态重定向回你的站点。 临时代码将在 10 分钟后到期。 如果状态不匹配，然后第三方创建了请求，您应该中止此过程。

将此 `code` 交换为访问令牌：

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

#### 参数

名称 | 类型 | 说明
-----|------|--------------
`client_id` | `string` | **必填。** 从 {% data variables.product.product_name %} 收到的 {% data variables.product.prodname_oauth_app %} 的客户端 ID。
`client_secret` | `string` | **必填。** 从 {% data variables.product.product_name %} 收到的 {% data variables.product.prodname_oauth_app %} 的客户端密码。
`code` | `string` | **必填。** 收到的作为对步骤 1 的响应的代码。
`redirect_uri` | `string` | 用户获得授权后被发送到的应用程序中的 URL。

#### 响应

默认情况下，响应采用以下形式：

```
access_token=gho_16C7e42F292c6912E7710c838347Ae178B4a&scope=repo%2Cgist&token_type=bearer
```

{% data reusables.apps.oauth-auth-vary-response %}

```json
Accept: application/json
{
  "access_token":"gho_16C7e42F292c6912E7710c838347Ae178B4a",
  "scope":"repo,gist",
  "token_type":"bearer"
}
```

```xml
Accept: application/xml
<OAuth>
  <token_type>bearer</token_type>
  <scope>repo,gist</scope>
  <access_token>gho_16C7e42F292c6912E7710c838347Ae178B4a</access_token>
</OAuth>
```

### 3. 使用访问令牌访问 API

访问令牌可用于代表用户向 API 提出请求。

    Authorization: Bearer OAUTH-TOKEN
    GET {% data variables.product.api_url_code %}/user

例如，您可以像以下这样在 curl 中设置“授权”标头：

```shell
curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}/user
```

## 设备流程

{% note %}

注意：设备流处于公开测试阶段，可能会发生更改。

{% endnote %}

设备流程允许您授权用户使用无头应用程序，例如 CLI 工具或 Git 凭据管理器。

{% ifversion device-flow-is-opt-in %}

在使用设备流识别和授权用户之前，必须先在应用的设置中启用它。 有关在应用中启用设备流的详细信息，请参阅“[修改 OAuth 应用](/developers/apps/managing-oauth-apps/modifying-an-oauth-app)”（适用于 OAuth 应用）和“[修改 GitHub 应用](/developers/apps/managing-github-apps/modifying-a-github-app)”（适用于 GitHub 应用）。

{% endif %}

### 设备流程概述

1. 您的应用程序会请求设备和用户验证码，并获取用户将在其中输入用户验证码的授权 URL。
2. 应用程序提示用户在 {% data variables.product.device_authorization_url %} 中输入用户验证码。
3.  应用程序轮询用户身份验证状态。 用户授权设备后，应用程序将能够使用新的访问令牌进行 API 调用。

### 第 1 步：应用程序从 GitHub 请求设备和用户验证码

    POST {% data variables.product.oauth_host_code %}/login/device/code

您的应用程序必须请求用户验证码和验证 URL，因为应用程序在下一步中提示用户进行身份验证时将使用它们。 此请求还返回设备验证代码，应用程序必须使用它们来接收访问令牌和检查用户身份验证的状态。

#### 输入参数

名称 | 类型 | 说明
-----|------|--------------
`client_id` | `string` | **必填。** 从 {% data variables.product.product_name %} 收到的应用的客户端 ID。
`scope` | `string` | 应用程序请求访问的范围。

#### 响应

默认情况下，响应采用以下形式：

```
device_code=3584d83530557fdd1f46af8289938c8ef79f9dc5&expires_in=900&interval=5&user_code=WDJB-MJHT&verification_uri=https%3A%2F%{% data variables.product.product_url %}%2Flogin%2Fdevice
```

{% data reusables.apps.oauth-auth-vary-response %}

```json
Accept: application/json
{
  "device_code": "3584d83530557fdd1f46af8289938c8ef79f9dc5",
  "user_code": "WDJB-MJHT",
  "verification_uri": "{% data variables.product.oauth_host_code %}/login/device",
  "expires_in": 900,
  "interval": 5
}
```

```xml
Accept: application/xml
<OAuth>
  <device_code>3584d83530557fdd1f46af8289938c8ef79f9dc5</device_code>
  <user_code>WDJB-MJHT</user_code>
  <verification_uri>{% data variables.product.oauth_host_code %}/login/device</verification_uri>
  <expires_in>900</expires_in>
  <interval>5</interval>
</OAuth>
```

#### 响应参数

名称 | 类型 | 说明
-----|------|--------------
`device_code` | `string` | 设备验证码为 40 个字符，用于验证设备。
`user_code` | `string` | 用户验证码显示在设备上，以便用户可以在浏览器中输入该代码。 此代码为 8 个字符，中间有连字符。
`verification_uri` | `string` | 用户需要在其中输入 `user_code` 的验证 URL：{% data variables.product.device_authorization_url %}。
`expires_in` | `integer`| `device_code` 和 `user_code` 过期之前的秒数。 默认值为 900 秒或 15 分钟。
`interval` | `integer` | 在能够发出新的访问令牌请求 (`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`) 以完成设备授权之前必须经过的最短秒数。 例如，如果间隔为 5，则只有经过 5 秒后才能发出新请求。 如果在 5 秒内发出多个请求，则将达到速率限制并收到 `slow_down` 错误。

### 第 2 步：提示用户在浏览器中输入用户代码

您的设备将显示用户验证码并提示用户在 {% data variables.product.device_authorization_url %} 中输入该代码。

  ![用于输入设备上显示的用户验证码的字段](/assets/images/github-apps/device_authorization_page_for_user_code.png)

### 第 3 步：应用程序轮询 GitHub 以检查用户是否授权设备

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

应用将发出轮询 `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token` 的设备授权请求，直到设备和用户代码过期，或者用户已使用有效的用户代码成功授权应用。 应用必须使用在步骤 1 中检索到的最短轮询 `interval`，以免出现速率限制错误。 有关详细信息，请参阅“[设备流的速率限制](#rate-limits-for-the-device-flow)”。

用户必须在 15 分钟（或 900 秒内）内输入有效代码。 15 分钟后，需要使用 `POST {% data variables.product.oauth_host_code %}/login/device/code` 请求新的设备授权代码。

一旦用户授权， 应用程序将收到一个访问令牌，该令牌可用于代表用户向 API 发出请求。

#### 输入参数

名称 | 类型 | 说明
-----|------|--------------
`client_id` | `string` | **必填。** 从 {% data variables.product.product_name %} 收到的 {% data variables.product.prodname_oauth_app %} 的客户端 ID。
`device_code` | `string` | **必填。** 从 `POST {% data variables.product.oauth_host_code %}/login/device/code` 请求收到的设备验证码。
`grant_type` | `string` | **必填。** 授权类型必须是 `urn:ietf:params:oauth:grant-type:device_code`。

#### 响应

默认情况下，响应采用以下形式：

```
access_token=gho_16C7e42F292c6912E7710c838347Ae178B4a&token_type=bearer&scope=repo%2Cgist
```

{% data reusables.apps.oauth-auth-vary-response %}

```json
Accept: application/json
{
 "access_token": "gho_16C7e42F292c6912E7710c838347Ae178B4a",
  "token_type": "bearer",
  "scope": "repo,gist"
}
```

```xml
Accept: application/xml
<OAuth>
  <access_token>gho_16C7e42F292c6912E7710c838347Ae178B4a</access_token>
  <token_type>bearer</token_type>
  <scope>gist,repo</scope>
</OAuth>
```

### 设备流程的速率限制

当用户在浏览器上提交验证码时，每个应用程序在一个小时内的提交速率限制为 50 个。

如果在请求之间所需的最小时间范围（即 `interval`）内发出多个访问令牌请求 (`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`)，你将达到速率限制，并收到 `slow_down` 错误响应。 `slow_down` 错误响应向上一个 `interval` 添加 5 秒钟的时间。 有关详细信息，请参阅[设备流错误](#errors-for-the-device-flow)。

### 设备流程的错误代码

| 错误代码 | 说明 |
|----|----|
| `authorization_pending`| 授权请求待处理并且用户尚未输入用户代码时，将发生此错误。 应用应在不超出 [`interval`](#response-parameters) 的情况下继续轮询 `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token` 请求，这需要每个请求之间的最短秒数。 |
| `slow_down` | 收到 `slow_down` 错误时，会使用 `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token` 向请求之间所需的最短 `interval` 或时间范围添加 5 秒钟的额外时间。 例如，如果请求之间的启动间隔至少需要 5 秒，并且你收到了 `slow_down` 错误响应，那么现在必须等待至少 10 秒，然后才能发出新的 OAuth 访问令牌请求。 错误响应包括必须使用的新 `interval`。
| `expired_token` | 如果设备代码已过期，则将看到 `token_expired` 错误。 您必须发出新的设备代码请求。
| `unsupported_grant_type` | 轮询 OAuth 令牌请求 `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token` 时，授权类型必须为 `urn:ietf:params:oauth:grant-type:device_code` 并且必须作为输入参数包含在内。
| `incorrect_client_credentials` | 对于设备流程，您必须传递应用程序的客户端 ID，您可以在应用程序设置页面上找到该 ID。 设备流不需要 `client_secret`。
| `incorrect_device_code` | 提供的 device_code 无效。
| `access_denied` | 当用户在授权过程中单击取消时，你将收到 `access_denied` 错误，该用户将无法再次使用验证码。{% ifversion device-flow-is-opt-in %}
| `device_flow_disabled` | 尚未在应用的设置中启用设备流。 有关详细信息，请参阅“[设备流](#device-flow)”。{% endif %}

有关详细信息，请参阅“[OAuth 2.0 设备授权](https://tools.ietf.org/html/rfc8628#section-3.5)”。

## 非 Web 应用程序流程

非 web 身份验证适用于测试等有限的情况。 如果需要，可以使用[基本身份验证](/rest/overview/other-authentication-methods#basic-authentication)通过[个人访问令牌设置页](/articles/creating-an-access-token-for-command-line-use)创建个人访问令牌。 此方法支持用户随时撤销访问权限。

{% ifversion fpt or ghes or ghec %} {% note %}

注意：使用非 Web 应用程序流创建 OAuth2 令牌时，如果你或你的用户启用了双因素身份验证，请确保了解如何[使用双因素身份验证](/rest/overview/other-authentication-methods#working-with-two-factor-authentication)。

{% endnote %} {% endif %}

## 重定向 URL

`redirect_uri` 参数是可选的。 如果忽略该参数，GitHub 会将用户重定向到 OAuth 应用程序设置中配置的回叫 URL。 如果提供该参数，重定向 URL 的主机和端口必须与回叫 URL 完全匹配。 重定向 URL 的路径必须引用回叫 URL 的子目录。

    CALLBACK: http://example.com/path

    GOOD: http://example.com/path
    GOOD: http://example.com/path/subdir/other
    BAD:  http://example.com/bar
    BAD:  http://example.com/
    BAD:  http://example.com:8080/path
    BAD:  http://oauth.example.com:8080/path
    BAD:  http://example.org

### 本地主机重定向 URL

可选 `redirect_uri` 参数还可用于本地主机 URL。 如果应用程序指定 URL 和端口，授权后，应用程序用户将被重定向到提供的 URL 和端口。 `redirect_uri` 不需要与应用的回叫 URL 中指定的端口匹配。

对于 `http://127.0.0.1/path` 回叫 URL，可以使用以下 `redirect_uri`：

```
http://127.0.0.1:1234/path
```

## 为 OAuth 应用程序创建多个令牌

您可以为用户/应用程序/作用域组合创建多个令牌，以便为特定用例创建令牌。

如果您的 OAuth 应用程序支持一个使用 GitHub 登录且只需基本用户信息的工作流程，此方法将非常有用。 另一个工作流程可能需要访问用户的私有仓库。 您的 OAuth 应用程序可以使用多个令牌为每个用例执行 web 流程，只需要所需的作用域。 如果用户仅使用您的应用程序登录，则无需向他们的私有仓库授予您的 OAuth 应用程序访问权限。

{% data reusables.apps.oauth-token-limit %}

{% data reusables.apps.deletes_ssh_keys %}

## 指示用户审查其访问权限

您可以链接至 OAuth 应用程序的授权信息，以便用户审查和撤销其应用程序授权。

若要生成此链接，需要使用在注册应用程序时从 GitHub 收到的 OAuth 应用 `client_id`。

```
{% data variables.product.oauth_host_code %}/settings/connections/applications/:client_id
```

{% tip %}

提示：若要详细了解 OAuth 应用可以为用户访问的资源，请参阅“[为用户发现资源](/rest/guides/discovering-resources-for-a-user)”。

{% endtip %}

## 故障排除

* “[排查授权请求错误](/apps/managing-oauth-apps/troubleshooting-authorization-request-errors)”
* “[排查 OAuth 应用访问令牌请求错误](/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors)”
* “[设备流错误](#error-codes-for-the-device-flow)”{% ifversion fpt or ghae or ghes > 3.2 or ghec %}
* “[令牌过期和吊销](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)”{% endif %}

## 延伸阅读

- “[关于对 {% data variables.product.prodname_dotcom %} 进行身份验证](/github/authenticating-to-github/about-authentication-to-github)”
