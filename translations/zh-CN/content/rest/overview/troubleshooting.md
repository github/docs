---
title: 故障排除
intro: 学习如何解决用户在 REST API 中遇到的最常见问题。
redirect_from:
  - /v3/troubleshooting
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: ecfa3a360ef9b042d96a1f80a2f0cde49390727f
ms.sourcegitcommit: d2f0b59ed096b9e68ef8f6fa019cd925165762ec
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184229'
---
如果你在 API 中遇到一些奇怪的问题，下面列出了你可能会遇到的一些问题的解决方案。

{% ifversion api-date-versioning %}

## `400` 错误，表示 API 版本不受支持

应使用 `X-GitHub-Api-Version` 标头指定 API 版本。 例如：

```shell
$ curl {% data reusables.rest-api.version-header %} https://api.github.com/zen
```

如果指定的版本不存在，将出现 `400` 错误。

有关详细信息，请参阅“[API 版本](/rest/overview/api-versions)”。

{% endif %}

## 现有存储库的 `404` 错误

一般来说，客户端没有正确通过身份验证时，我们会发送 `404` 错误。
在这些情况下，你可能会看到 `403 Forbidden`。 但是，由于我们不想提供有关专用存储库的任何信息，API 会改为返回 `404` 错误。

若要进行故障排除，请确保[正确进行身份验证](/guides/getting-started/)、[OAuth 访问令牌具有所需的范围](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)、[第三方应用程序限制][oap-guide]不会阻止访问，并且[令牌未过期或已吊销](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)。

## 并非所有结果都返回

大多数 API 调用访问资源列表（例如，用户、问题等）支持分页 。 如果你发出请求但收到的结果集不完整，你可能只会看到第一页。 为了获得更多结果，你需要请求剩余的页面。

请务必不要尝试和猜测分页 URL 的格式。 并非每个 API 调用都使用相同的结构， 而是从[链接标头](/rest#pagination)中提取分页信息，该标头随每个请求一起发送。

[oap-guide]: https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/

{% ifversion fpt or ghec %}
## 基本身份验证错误

从 2020 年 11 月 13 日起，REST API 和 OAuth 授权 API 的用户名和密码身份验证被弃用，不再有效。

### 使用 `username`/`password` 进行基本身份验证

如果使用的是 `username` 和 `password` 进行 API 调用，则它们将无法再进行身份验证。 例如：

```bash
curl -u my_user:my_password https://api.github.com/user/repos
```

改为在测试终结点或执行本地开发时使用 [{% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)：

```bash
curl -H 'Authorization: Bearer my_access_token' https://api.github.com/user/repos
```

对于 OAuth 应用，应使用 [Web 应用程序流](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) 生成要在 API 调用标头中使用的 OAuth 令牌：

```bash
curl -H 'Authorization: Bearer my-oauth-token' https://api.github.com/user/repos
```

## 超时

如果  {% data variables.product.product_name %} 需要超过 10 秒来处理一个 API 请求， {% data variables.product.product_name %} 将会终止请求，并且您将收到超时响应。

{% endif %}
