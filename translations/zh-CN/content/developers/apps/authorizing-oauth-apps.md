---
title: 授权 OAuth 应用程序
intro: '{% data reusables.shortdesc.authorizing_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/about-authorization-options-for-oauth-apps/
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/directing-users-to-review-their-access/
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/creating-multiple-tokens-for-oauth-apps/
  - /v3/oauth/
  - /apps/building-oauth-apps/authorization-options-for-oauth-apps/
  - /apps/building-oauth-apps/authorizing-oauth-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data variables.product.product_name %}'s OAuth implementation supports the standard [authorization code grant type](https://tools.ietf.org/html/rfc6749#section-4.1){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %} and the OAuth 2.0 [Device Authorization Grant](https://tools.ietf.org/html/rfc8628) for apps that don't have access to a web browser{% endif %}.

If you want to skip authorizing your app in the standard way, such as when testing your app, you can use the [non-web application flow](#non-web-application-flow).

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

To authorize your OAuth app, consider which authorization flow best fits your app.

- [web application flow](#web-application-flow): Used to authorize users for standard OAuth apps that run in the browser. （不支持[隐式授予类型](https://tools.ietf.org/html/rfc6749#section-4.2)。）
- [device flow](#device-flow):  Used for headless apps, such as CLI tools.

{% else %}

For standard apps that run in the browser, use the [web application flow](#web-application-flow) to obtain an authorization code and exchange it for a token. （不支持[隐式授予类型](https://tools.ietf.org/html/rfc6749#section-4.2)。）

{% endif %}

### Web 应用程序流程

{% note %}

**注：**如果您要构建 GitHub 应用程序，依然可以使用 OAuth web 应用程序流程，但设置方面有一些重要差异。 See "[Identifying and authorizing users for GitHub Apps](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" for more information.

{% endnote %}

The web application flow to authorize users for your app is:

1. 用户被重定向，以请求他们的 GitHub 身份
2. 用户被 GitHub 重定向回您的站点
3. 您的应用程序使用用户的访问令牌访问 API

#### 1. 请求用户的 GitHub 身份

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

当您的 GitHub 应用程序指定 `login` 参数后，它将提示拥有特定账户的用户可以用来登录和授权您的应用程序。

##### 参数

| 名称             | 类型    | 描述                                                                                                                                                                                                                                                                                                                    |
| -------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`    | `字符串` | **必填**。 您{% if currentVersion == "free-pro-team@latest" %}[注册 ](https://github.com/settings/applications/new){% else %}registered{% endif %} 时从 GitHub 收到的客户端 ID。                                                                                                                                                                     |
| `redirect_uri` | `字符串` | 用户获得授权后被发送到的应用程序中的 URL。 有关[重定向 url](#redirect-urls)，请参阅下方的详细信息。                                                                                                                                                                                                                                                       |
| `login`        | `字符串` | 提供用于登录和授权应用程序的特定账户。                                                                                                                                                                                                                                                                                                   |
| `作用域`          | `字符串` | 用空格分隔的[作用域](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)列表。 如果未提供，对于未向应用程序授权任何作用域的用户，`scope` 将默认为空白列表。 对于已向应用程序授权作用域的用户，不会显示含作用域列表的 OAuth 授权页面。 相反，通过用户向应用程序授权的作用域集，此流程步骤将自动完成。 例如，如果用户已执行两次 web 流程，且授权了一个拥有 `user` 作用域的令牌和一个拥有 `repo` 作用域的令牌，未提供 `scope` 的第三次 web 流程将收到拥有 `user` 和 `repo` 作用域的令牌。 |
| `state`        | `字符串` | {% data reusables.apps.state_description %}                                                                                                                                                                                                                                                                      |
| `allow_signup` | `字符串` | 在 OAuth 流程中，是否向经过验证的用户提供注册 GitHub 的选项。 默认值为 `true`。 如有政策禁止注册，请使用 `false`。                                                                                                                                                                                                                                             |

#### 2. 用户被 GitHub 重定向回您的站点

如果用户接受您的请求，{% data variables.product.product_name %} 将重定向回您的站点，其中，代码参数为临时 `code`，`state` 参数为您在上一步提供的状态。 临时代码将在 10 分钟后到期。 如果状态不匹配，然后第三方创建了请求，您应该中止此过程。

用此 `code` 换访问令牌：

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

##### 参数

| 名称              | 类型    | 描述                                                                                                                            |
| --------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------- |
| `client_id`     | `字符串` | **必填。**您从 {% data variables.product.product_name %} 收到的 {% data variables.product.prodname_github_app %} 的客户端 ID。 |
| `client_secret` | `字符串` | **必填。**您从 {% data variables.product.product_name %} 收到的 {% data variables.product.prodname_github_app %} 的客户端密钥。  |
| `代码`            | `字符串` | **必填。**您收到的响应第 1 步的代码。                                                                                                        |
| `redirect_uri`  | `字符串` | 用户获得授权后被发送到的应用程序中的 URL。                                                                                                       |
| `state`         | `字符串` | 您在第 1 步提供的不可猜测的随机字符串。                                                                                                         |

##### 响应

默认情况下，响应采用以下形式：

    access_token=e72e16c7e42f292c6912e7710c838347ae178b4a&token_type=bearer

您也可以根据“接受”标头接收不同格式的内容：

    Accept: application/json
    {"access_token":"e72e16c7e42f292c6912e7710c838347ae178b4a", "scope":"repo,gist", "token_type":"bearer"}
    
    Accept: application/xml
    <OAuth>
      <token_type>bearer</token_type>
      <scope>repo,gist</scope>
      <access_token>e72e16c7e42f292c6912e7710c838347ae178b4a</access_token>
    </OAuth>

#### 3. 使用访问令牌访问 API

访问令牌可用于代表用户向 API 提出请求。

    Authorization: token OAUTH-TOKEN
    GET {% data variables.product.api_url_code %}/user

例如，您可以像以下这样在 curl 中设置“授权”标头：

```shell
curl -H "Authorization: token OAUTH-TOKEN" {% data variables.product.api_url_pre %}/user
```

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
### Device flow

{% note %}

**Note:** The device flow is in public beta and subject to change.{% if currentVersion == "free-pro-team@latest" %} To enable this beta feature, see "[Activating beta features for apps](/developers/apps/activating-beta-features-for-apps)."{% endif %}

{% endnote %}

The device flow allows you to authorize users for a headless app, such as a CLI tool or Git credential manager.

#### Overview of the device flow

1. Your app requests device and user verification codes and gets the authorization URL where the user will enter the user verification code.
2. The app prompts the user to enter a user verification code at {% data variables.product.device_authorization_url %}.
3.  The app polls for the user authentication status. Once the user has authorized the device, the app will be able to make API calls with a new access token.

#### Step 1: App requests the device and user verification codes from GitHub

    POST {% data variables.product.oauth_host_code %}/login/device/code

Your app must request a user verification code and verification URL that the app will use to prompt the user to authenticate in the next step. This request also returns a device verification code that the app must use to receive an access token and check the status of user authentication.

##### Input Parameters

| 名称          | 类型    | 描述                                                                                                         |
| ----------- | ----- | ---------------------------------------------------------------------------------------------------------- |
| `client_id` | `字符串` | **Required.** The client ID you received from {% data variables.product.product_name %} for your app. |
| `作用域`       | `字符串` | The scope that your app is requesting access to.                                                           |

##### 响应


{% if currentVersion == "free-pro-team@latest" %}
  ```JSON
  {
    "device_code": "3584d83530557fdd1f46af8289938c8ef79f9dc5",
    "user_code": "WDJB-MJHT",
    "verification_uri": "https://github.com/login/device",
    "expires_in": 900,
    "interval": 5
  }
  ```
{% else %}
  ```JSON
  {
    "device_code": "3584d83530557fdd1f46af8289938c8ef79f9dc5",
    "user_code": "WDJB-MJHT",
    "verification_uri": "http(s)://[hostname]/login/device",
    "expires_in": 900,
    "interval": 5
  }
  ```
{% endif %}

##### Response parameters

| 名称                 | 类型    | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `device_code`      | `字符串` | The device verification code is 40 characters and used to verify the device.                                                                                                                                                                                                                                                                                                                                                          |
| `user_code`        | `字符串` | The user verification code is displayed on the device so the user can enter the code in a browser. This code is 8 characters with a hyphen in the middle.                                                                                                                                                                                                                                                                             |
| `verification_uri` | `字符串` | The verification URL where users need to enter the `user_code`: {% data variables.product.device_authorization_url %}.                                                                                                                                                                                                                                                                                                         |
| `expires_in`       | `整数`  | The number of seconds before the `device_code` and `user_code` expire. The default is 900 seconds or 15 minutes.                                                                                                                                                                                                                                                                                                                      |
| `interval`         | `整数`  | The minimum number of seconds that must pass before you can make a new access token request (`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`) to complete the device authorization. For example, if the interval is 5, then you cannot make a new request until 5 seconds pass. If you make more than one request over 5 seconds, then you will hit the rate limit and receive a `slow_down` error. |

#### Step 2: Prompt the user to enter the user code in a browser

Your device will show the user verification code and prompt the user to enter the code at {% data variables.product.device_authorization_url %}.

  ![Field to enter the user verification code displayed on your device](/assets/images/github-apps/device_authorization_page_for_user_code.png)

#### Step 3: App polls GitHub to check if the user authorized the device

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

Your app will make device authorization requests that poll `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`, until the device and user codes expire or the user has successfully authorized the app with a valid user code. The app must use the minimum polling `interval` retrieved in step 1 to avoid rate limit errors. For more information, see "[Rate limits for the device flow](#rate-limits-for-the-device-flow)."

The user must enter a valid code within 15 minutes (or 900 seconds). After 15 minutes, you will need to request a new device authorization code with `POST {% data variables.product.oauth_host_code %}/login/device/code`.

Once the user has authorized, the app will receive an access token that can be used to make requests to the API on behalf of a user.

##### Input parameters

| 名称            | 类型    | 描述                                                                                                                                                   |
| ------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`   | `字符串` | **必填。**您从 {% data variables.product.product_name %} 收到的 {% data variables.product.prodname_oauth_app %} 的客户端 ID。                         |
| `device_code` | `字符串` | **Required.** The device verification code you received from the `POST {% data variables.product.oauth_host_code %}/login/device/code` request. |
| `grant_type`  | `字符串` | **Required.** The grant type must be `urn:ietf:params:oauth:grant-type:device_code`.                                                                 |

##### 响应

```json
{
 "access_token": "e72e16c7e42f292c6912e7710c838347ae178b4a",
  "token_type": "bearer",
  "scope": "user"
}
```

#### Rate limits for the device flow

When a user submits the verification code on the browser, there is a there is a rate limit of 50 submissions in an hour per application.

If you make more than one access token request (`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`) within the required minimum timeframe between requests (or `interval`), you'll hit the rate limit and receive a `slow_down` error response. The `slow_down` error response adds 5 seconds to the last `interval`. For more information, see the [Errors for the device flow](#errors-for-the-device-flow).

#### Error codes for the device flow

| Error code                     | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `authorization_pending`        | This error occurs when the authorization request is pending and the user hasn't entered the user code yet. The app is expected to keep polling the `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token` request without exceeding the [`interval`](#response-parameters), which requires a minimum number of seconds between each request.                                                                                                                                                          |
| `slow_down`                    | When you receive the `slow_down` error, 5 extra seconds are added to the minimum `interval` or timeframe required between your requests using `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`. For example, if the starting interval required at least 5 seconds between requests and you get a `slow_down` error response, you must now wait a minimum of 10 seconds before making a new request for an OAuth access token. The error response includes the new `interval` that you must use. |
| `expired_token`                | If the device code expired, then you will see the `token_expired` error. You must make a new request for a device code.                                                                                                                                                                                                                                                                                                                                                                                                          |
| `unsupported_grant_type`       | The grant type must be `urn:ietf:params:oauth:grant-type:device_code` and included as an input parameter when you poll the OAuth token request `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`.                                                                                                                                                                                                                                                                                                |
| `incorrect_client_credentials` | For the device flow, you must pass your app's client ID, which you can find on your app settings page. The `client_secret` is not needed for the device flow.                                                                                                                                                                                                                                                                                                                                                                    |
| `incorrect_device_code`        | The device_code provided is not valid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `access_denied`                | When a user clicks cancel during the authorization process, you'll receive a `access_denied` error and the user won't be able to use the verification code again.                                                                                                                                                                                                                                                                                                                                                                |

For more information, see the "[OAuth 2.0 Device Authorization Grant](https://tools.ietf.org/html/rfc8628#section-3.5)."

{% endif %}

### 非 Web 应用程序流程

非 web 身份验证适用于测试等有限的情况。 如果您需要，可以使用[基本验证](/v3/auth#basic-authentication)，通过[个人访问令牌设置页面](/articles/creating-an-access-token-for-command-line-use)创建个人访问令牌。 此方法支持用户随时撤销访问权限。

{% note %}

**注：**使用非 web 应用流程创建 OAuth2 令牌时，如果您或您的用户已启用双重身份验证，请确保明白如何[使用双重身份验证](/v3/auth/#working-with-two-factor-authentication)。

{% endnote %}

### 重定向 URL

`redirect_uri` 参数是可选参数。 如果遗漏，GitHub 则将用户重定向到 OAuth 应用程序设置中配置的回调 URL。 如果提供，重定向 URL 的主机和端口必须完全匹配回调 URL。 重定向 URL 的路径必须引用回调 URL 的子目录。

    CALLBACK: http://example.com/path
    
    GOOD: http://example.com/path
    GOOD: http://example.com/path/subdir/other
    BAD:  http://example.com/bar
    BAD:  http://example.com/
    BAD:  http://example.com:8080/path
    BAD:  http://oauth.example.com:8080/path
    BAD:  http://example.org

#### 本地主机重定向 URL

可选的 `redirect_uri` 参数也可用于本地主机 URL。 如果应用程序指定 URL 和端口，授权后，应用程序用户将被重定向到提供的 URL 和端口。 `redirect_uri` 不需要匹配应用程序回调 url 中指定的端口。

对于 `http://localhost/path` 回调 URL，您可以使用此 `redirect_uri`：

   http://localhost:1234/path

### 为 OAuth 应用程序创建多个令牌

您可以为用户/应用程序/作用域组合创建多个令牌，以便为特定用例创建令牌。

如果您的 OAuth 应用程序支持一个使用 GitHub 登录且只需基本用户信息的工作流程，此方法将非常有用。 另一个工作流程可能需要访问用户的私有仓库。 您的 OAuth 应用程序可以使用多个令牌为每个用例执行 web 流程，只需要所需的作用域。 如果用户仅使用您的应用程序登录，则无需向他们的私有仓库授予您的 OAuth 应用程序访问权限。

每个用户/应用程序/作用域组合签发的令牌数量有限。 如果您的应用程序请求足够的令牌超越其中一个限制，_所请求的作用域相同的_旧令牌将停止工作。

{% data reusables.apps.deletes_ssh_keys %}

### 指示用户审查其访问权限

您可以链接至 OAuth 应用程序的授权信息，以便用户审查和撤销其应用程序授权。

要构建此链接，需要使用注册应用程序时从 GitHub 收到的 OAuth 应用程序 `client_id`。

```
{% data variables.product.oauth_host_code %}/settings/connections/applications/:client_id
```

{% tip %}

**提示：**要详细了解您的 OAuth 应用程序可以为用户访问的资源，请参阅“[为用户发现资源](/v3/guides/discovering-resources-for-a-user/)。”

{% endtip %}

### 疑难解答

* "[对授权请求错误进行故障排除](/apps/managing-oauth-apps/troubleshooting-authorization-request-errors)"
* "[对 OAuth 应用程序访问令牌请求错误进行故障排除](/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors)"
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
* "[Device flow errors](#errors-for-the-device-flow)"
{% endif %}
