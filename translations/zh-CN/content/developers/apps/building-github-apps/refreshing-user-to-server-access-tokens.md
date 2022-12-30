---
title: 刷新用户到服务器访问令牌
intro: '要实施定期令牌轮换并减少受威胁令牌的影响，您可以配置 {% data variables.product.prodname_github_app %} 以使用过期用户访问令牌。'
redirect_from:
  - /apps/building-github-apps/refreshing-user-to-server-access-tokens
  - /developers/apps/refreshing-user-to-server-access-tokens
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Refresh user-to-server access
ms.openlocfilehash: a288fcdd7eca423c9087a1a8ca4948e043de645b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064408'
---
{% data reusables.pre-release-program.expiring-user-access-tokens %}

## 关于过期用户访问令牌

要实施定期令牌轮换并减少受威胁令牌的影响，您可以配置 {% data variables.product.prodname_github_app %} 以使用过期用户访问令牌。 有关发出用户到服务器请求的详细信息，请参阅“[识别和授权 GitHub 应用用户](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)”。

过期用户令牌在 8 小时后过期。 当您收到新的用户到服务器访问令牌时，响应还将包含刷新令牌，可以将其交换为新的用户令牌和刷新令牌。 刷新令牌的有效期为 6 个月。 

## 使用刷新令牌续订用户令牌

若要续订即将过期的用户到服务器访问令牌，可以将 `refresh_token` 交换为新的访问令牌和 `refresh_token`。

  `POST https://github.com/login/oauth/access_token`

此回调请求将向您发送新的访问令牌和新的刷新令牌。  此回调请求类似于用来将临时 `code` 交换为访问令牌的 OAuth 请求。 有关详细信息，请参阅“[标识和授权 GitHub 应用用户](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#2-users-are-redirected-back-to-your-site-by-github)”和“[身份验证基础知识](/rest/guides/basics-of-authentication#providing-a-callback)”。

### 参数

名称 | 类型 | 说明
-----|------|------------
`refresh_token` | `string` | **必填。** 当 {% data variables.product.prodname_github_app %} 所有者启用即将过期的令牌并颁发新的用户访问令牌时，将生成此令牌。
`grant_type` | `string` | **必填。** 值必须为 `refresh_token`（OAuth 规范要求）。
`client_id` | `string` | **必填。** {% data variables.product.prodname_github_app %} 的客户端 ID。
`client_secret` | `string`   | **必填。** {% data variables.product.prodname_github_app %} 的客户端密码。

### 响应

```json
{
  "access_token": "ghu_16C7e42F292c6912E7710c838347Ae178B4a",
  "expires_in": "28800",
  "refresh_token": "ghr_1B4a2e77838347a7E420ce178F2E7c6912E169246c34E1ccbF66C46812d16D5B1A9Dc86A1498",
  "refresh_token_expires_in": "15811200",
  "scope": "",
  "token_type": "bearer"
}
```
## 为现有 GitHub 应用程序配置过期用户令牌

您可以在 {% data variables.product.prodname_github_app %} 设置中启用或禁用过期用户到服务器授权令牌

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
4. 单击所选 {% data variables.product.prodname_github_app %} 旁边的“编辑”。
  ![编辑 GitHub 应用的设置](/assets/images/github-apps/edit-test-app.png)
5. 在左侧边栏中，单击“可选功能”。
   ![“可选功能”选项卡](/assets/images/github-apps/optional-features-option.png) 
6. 在“用户到服务器令牌过期”旁边，单击“选择加入”或“选择退出”。此设置可能需要几秒钟才能应用 。

## 为新的 GitHub 应用程序选择退出过期令牌

当您创建新的 {% data variables.product.prodname_github_app %} 时，默认情况下，您的应用程序将使用过期用户到服务器访问令牌。

如果希望应用程序使用不过期用户到服务器访问令牌，您可以在应用程序设置页面上取消选择“Expire user authorization tokens（过期用户授权令牌）”。

![在 GitHub 应用程序设置过程中选择加入过期用户令牌的选项](/assets/images/github-apps/expire-user-tokens-selection.png)

仅当应用程序所有者为其应用程序启用了过期用户令牌时，使用用户到服务器授权令牌的现有 {% data variables.product.prodname_github_apps %} 才会受到这个新流程的影响。

要为现有 {% data variables.product.prodname_github_apps %} 启用过期用户令牌，需要通过 OAuth 流程发送用户以重新颁发将在 8 小时后过期的新用户令牌，并使用刷新令牌发出请求以获取新的访问令牌和刷新令牌。 有关详细信息，请参阅“[标识和授权 GitHub 应用用户](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)”。

## 延伸阅读

- “[关于对 {% data variables.product.prodname_dotcom %} 进行身份验证](/github/authenticating-to-github/about-authentication-to-github#githubs-token-formats)”

