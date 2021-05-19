---
title: 刷新用户到服务器访问令牌
intro: '要实施定期令牌轮换并减少受威胁令牌的影响，您可以配置 {% data variables.product.prodname_github_app %} 以使用过期用户访问令牌。'
redirect_from:
  - /apps/building-github-apps/refreshing-user-to-server-access-tokens
  - /developers/apps/refreshing-user-to-server-access-tokens
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
topics:
  - GitHub Apps
---
{% data reusables.pre-release-program.expiring-user-access-tokens %}


### 关于过期用户访问令牌

要实施定期令牌轮换并减少受威胁令牌的影响，您可以配置 {% data variables.product.prodname_github_app %} 以使用过期用户访问令牌。 有关发出用户到服务器请求的更多信息，请参阅“[识别和授权 GitHub 应用程序用户](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)”。

过期用户令牌在 8 小时后过期。 当您收到新的用户到服务器访问令牌时，响应还将包含刷新令牌，可以将其交换为新的用户令牌和刷新令牌。 刷新令牌的有效期为 6 个月。

### 使用刷新令牌续订用户令牌

要续订过期的用户到服务器访问令牌，您可以将 `refresh_token` 交换为新的访问令牌和 `refresh_token`。

  `POST https://github.com/login/oauth/access_token`

此回调请求将向您发送新的访问令牌和新的刷新令牌。  此回调请求类似于用来将临时 `code` 交换为访问令牌的 OAuth 请求。 更多信息请参阅“[识别和授权 GitHub 应用程序用户](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#2-users-are-redirected-back-to-your-site-by-github)”和“[身份验证基础知识](/rest/guides/basics-of-authentication#providing-a-callback)”。

#### 参数

| 名称              | 类型    | 描述                                                                                      |
| --------------- | ----- | --------------------------------------------------------------------------------------- |
| `refresh_token` | `字符串` | **必填。**当 {% data variables.product.prodname_github_app %} 所有者启用过期令牌并颁发新的用户访问令牌时生成的令牌。 |
| `grant_type`    | `字符串` | **必填。**值必须为 `refresh_token`（OAuth 规范要求）。                                                |
| `client_id`     | `字符串` | **必填。**{% data variables.product.prodname_github_app %} 的客户端 ID。                      |
| `client_secret` | `字符串` | **必填。**{% data variables.product.prodname_github_app %} 的客户端密钥。                       |

#### 响应

```json
{
  "access_token": "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghu_16C7e42F292c6912E7710c838347Ae178B4a{% else %}e72e16c7e42f292c6912e7710c838347ae178b4a{% endif %}",
  "expires_in": "28800",
  "refresh_token": "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghr_1B4a2e77838347a7E420ce178F2E7c6912E169246c34E1ccbF66C46812d16D5B1A9Dc86A1498{% else %}r1.c1b4a2e77838347a7e420ce178f2e7c6912e169246c34e1ccbf66c46812d16d5b1a9dc86a149873c{% endif %}",
  "refresh_token_expires_in": "15811200",
  "scope": "",
  "token_type": "bearer"
}
```
### 为现有 GitHub 应用程序配置过期用户令牌

您可以在 {% data variables.product.prodname_github_app %} 设置中启用或禁用过期用户到服务器授权令牌

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
4. 单击所选 {% data variables.product.prodname_github_app %} 旁边的 **Edit（编辑）**。 ![编辑 GitHub 应用程序的设置](/assets/images/github-apps/edit-test-app.png)
5. 在左侧栏中，单击 **{% if currentVersion ver_lt "enterprise-server@3.1" %} 测试 {% else %} 可选 {% endif %} 功能**。
  {% if currentVersion ver_lt "enterprise-server@3.1" %} ![Beta features tab](/assets/images/github-apps/beta-features-option.png) {% else %} ![Optional features tab](/assets/images/github-apps/optional-features-option.png) {% endif %}
6. 在“User-to-server token expiration（用户到服务器令牌过期）”旁边，单击 **Opt-in（选择加入）**或 **Opt-out（选择退出）**。 应用此设置可能需要几秒钟的时间。

### 为新的 GitHub 应用程序选择退出过期令牌

当您创建新的 {% data variables.product.prodname_github_app %} 时，默认情况下，您的应用程序将使用过期用户到服务器访问令牌。

如果希望应用程序使用不过期用户到服务器访问令牌，您可以在应用程序设置页面上取消选择“Expire user authorization tokens（过期用户授权令牌）”。

![在 GitHub 应用程序设置过程中选择加入过期用户令牌的选项](/assets/images/github-apps/expire-user-tokens-selection.png)

仅当应用程序所有者为其应用程序启用了过期用户令牌时，使用用户到服务器授权令牌的现有 {% data variables.product.prodname_github_app %} 才会受到这个新流程的影响。

要为现有 {% data variables.product.prodname_github_app %} 启用过期用户令牌，需要通过 OAuth 流程发送用户以重新颁发将在 8 小时后过期的新用户令牌，并使用刷新令牌发出请求以获取新的访问令牌和刷新令牌。 更多信息请参阅“[识别和授权 GitHub 应用程序用户](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)”。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}

### 延伸阅读

- “[关于 {% data variables.product.prodname_dotcom %} 向验证身份](/github/authenticating-to-github/about-authentication-to-github#githubs-token-formats)”

{% endif %}
