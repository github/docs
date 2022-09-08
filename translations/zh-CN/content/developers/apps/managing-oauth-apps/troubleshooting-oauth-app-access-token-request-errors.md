---
title: 排查 OAuth 应用程序访问令牌请求错误
intro: '{% data reusables.shortdesc.troubleshooting_access_token_reques_errors_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors
  - /apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors
  - /developers/apps/troubleshooting-oauth-app-access-token-request-errors
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
shortTitle: Troubleshoot token request
ms.openlocfilehash: 7764d0e1f23a3d2dac841412ea0120487c8f6560
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084995'
---
{% note %}

注意：这些示例仅显示 JSON 响应。

{% endnote %}

## 客户端凭据不正确

如果你传递的客户端\_ID 和/或客户端\_密码不正确，将收到此错误响应。

```json
{
  "error": "incorrect_client_credentials",
  "error_description": "The client_id and/or client_secret passed are incorrect.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#incorrect-client-credentials"
}
```

要解决此错误，请确保您拥有 {% data variables.product.prodname_oauth_app %} 的正确凭据。 仔细检查 `client_id` 和 `client_secret`，并确保它们正确无误，并将其正确传递给 {% data variables.product.product_name %}。

## 重定向 URI 不匹配

如果你提供的 `redirect_uri` 与你在 {% data variables.product.prodname_oauth_app %} 中注册的 URL 不匹配，将收到此错误消息：

```json
{
  "error": "redirect_uri_mismatch",
  "error_description": "The redirect_uri MUST match the registered callback URL for this application.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-authorization-request-errors/#redirect-uri-mismatch2"
}
```

要更正此错误，请提供一个与你注册的 URL 匹配的 `redirect_uri`，或者忽略此参数以使用在应用程序中注册的默认 URL。

## 验证码错误

```json
{
  "add_scopes": [
    "repo"
  ],
  "note": "admin script"
}
```

如果你传递的验证码不正确、已过期或与你在第一次授权请求中收到的验证码不匹配，将收到此错误。

```json
{
  "error": "bad_verification_code",
  "error_description": "The code passed is incorrect or expired.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#bad-verification-code"
}
```

若要解决此错误，请再次启动 [OAuth 授权过程](/apps/building-oauth-apps/authorizing-oauth-apps/)，并获取新代码。
