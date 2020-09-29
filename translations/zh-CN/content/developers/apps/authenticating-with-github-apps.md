---
title: 使用 GitHub 应用程序进行身份验证
intro: '{% data reusables.shortdesc.authenticating_with_github_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-authentication-options-for-github-apps/
  - /apps/building-github-apps/authentication-options-for-github-apps/
  - /apps/building-github-apps/authenticating-with-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
{% data reusables.pre-release-program.machine-man-preview %}
{% data reusables.pre-release-program.api-preview-warning %}
{% endif %}

### 生成私钥

创建 GitHub 应用程序 后，您需要生成一个或多个私钥。 私钥可用于签署访问令牌请求。

您可以创建多个私钥，然后轮流使用，以防某个私钥被盗或丢失造成停工。 要验证私钥是否与公钥匹配，请参阅[验证私钥](#verifying-private-keys)。

要生成私钥：

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
{% data reusables.user-settings.modify_github_app %}
5. 在“Private keys（私钥）”中，单击 **Generate a private key（生成私钥）**。 ![生成私钥](/assets/images/github-apps/github_apps_generate_private_keys.png)
6. 您将看到一个以 PEM 格式下载至您的计算机的私钥。 确保将此文件存储下来，因为 GitHub 仅存储密钥的公共部分。

{% note %}

**注：**如果您使用的库需要特定文件格式，您下载的 PEM 文件将呈现为 `PKCS#1 RSAPrivateKey` 格式。

{% endnote %}

### 验证私钥
{% data variables.product.product_name %} 使用 SHA-1 哈希函数为每对私钥和公钥生成指纹。 您可以生成私钥指纹，然后与 {% data variables.product.product_name %} 显示的指纹相比较，以验证私钥是否与 {% data variables.product.product_name %} 上存储的公钥匹配。

要验证私钥：

1. 在 {% data variables.product.prodname_github_app %} 开发者设置页面的“私钥”部分，查找要验证的私钥和公钥对的指纹。 更多信息请参阅[生成私钥](#generating-a-private-key)。 ![私钥指纹](/assets/images/github-apps/github_apps_private_key_fingerprint.png)
2. Generate the fingerprint of your private key (PEM) locally by using the following command:
    ```shell
    $ openssl rsa -in PATH_TO_PEM_FILE -pubout -outform DER | openssl sha1 -c
    ```
3. 比较本地生成的指纹结果与 {% data variables.product.product_name %} 中显示的指纹。

### 删除私钥
您可以通过删除功能删除丢失或被盗的私钥，但至少必须有一个私钥。 如果只有一个密钥，需要生成一个新钥，然后才能删除旧钥。 ![删除最后一个私钥](/assets/images/github-apps/github_apps_delete_key.png)

### 验证为 {% data variables.product.prodname_github_app %}

通过验证为 {% data variables.product.prodname_github_app %}，您可以执行以下操作：

* 检索关于您的 {% data variables.product.prodname_github_app %} 的高级管理信息。
* 为应用程序安装申请访问令牌。

要验证为 {% data variables.product.prodname_github_app %}，请以 PEM 格式[生成私钥](#generating-a-private-key)，并将其下载到本地机器上。 您可以使用此密钥签署 [JSON Web 令牌 (JWT)](https://jwt.io/introduction)，然后用 `RS256` 算法为它编码。 {% data variables.product.product_name %} 将使用应用程序存储的公钥验证令牌，以检查请求是否已通过身份验证。

下面是一段快速 Ruby 脚本，可用于生成 JWT。 请注意，您必须先运行 `gem install jwt`，然后才能使用。

<a name="jwt-payload"></a>

```ruby
require 'openssl'
require 'jwt'  # https://rubygems.org/gems/jwt

# Private key contents
private_pem = File.read(YOUR_PATH_TO_PEM)
private_key = OpenSSL::PKey::RSA.new(private_pem)

# Generate the JWT
payload = {
  # issued at time
  iat: Time.now.to_i,
  # JWT expiration time (10 minute maximum)
  exp: Time.now.to_i + (10 * 60),
  # {% data variables.product.prodname_github_app %}'s identifier
  iss: YOUR_APP_ID
}

jwt = JWT.encode(payload, private_key, "RS256")
puts jwt
```

`YOUR_PATH_TO_PEM` 和 `YOUR_APP_ID` 是必须替换的值。

使用 {% data variables.product.prodname_github_app %} 的标识符 (`YOUR_APP_ID`) 作为 JWT [iss](https://tools.ietf.org/html/rfc7519#section-4.1.1)（签发者）申请的值。 您可以在[创建应用程序](/apps/building-github-apps/creating-a-github-app/)后通过初始 web 挂钩，或随时从 GitHub.com UI 的应用程序设置页面获取 {% data variables.product.prodname_github_app %} 标识符。

创建 JWT 后，在 API 请求的 `Header` 中对它进行设置。

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
```shell
$ curl -i -H "Authorization: Bearer YOUR_JWT" -H "Accept: application/vnd.github.machine-man-preview+json" {% data variables.product.api_url_pre %}/app
```
{% else %}
```shell
$ curl -i -H "Authorization: Bearer YOUR_JWT" -H "Accept: application/vnd.github.v3+json" {% data variables.product.api_url_pre %}/app
```
{% endif %}

`YOUR_JWT` 是必须替换的值。

上述示例所用的最大到期时间为 10 分钟，到期后，API 将开始返回 `401` 错误。

```json
{
  "message": "'Expiration' claim ('exp') must be a numeric value representing the future time at which the assertion expires.",
  "documentation_url": "{% data variables.product.doc_url_pre %}/v3"
}
```

到期后，您需要创建新 JWT。

### 作为 {% data variables.product.prodname_github_app %} 访问 API 端点

有关获取关于 {% data variables.product.prodname_github_app %} 的高级信息所用的 REST API 端点列表，请参阅“[GitHub 应用程序](/v3/apps/)。”

### 验证为安装

通过验证为安装，您可以在 API 中为此安装执行操作。 验证为安装之前，必须创建安装访问令牌。 这些安装访问令牌由 {% data variables.product.prodname_github_app %} 用于进行身份验证。

默认情况下，安装访问令牌的作用域为安装可访问的所有仓库。 您可以使用 `repository_ids` 参数将安装访问令牌的作用域限定于特定仓库。 See the [Create an installation access token for an app](/v3/apps/#create-an-installation-access-token-for-an-app) endpoint for more details. 安装访问令牌具有由 {% data variables.product.prodname_github_app %} 配置的权限，一个小时后到期。

要创建安装访问令牌，请在 API 请求的“授权”标头中加入[上文生成的](#jwt-payload) JWT：

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
```shell
$ curl -i -X POST \
-H "Authorization: Bearer YOUR_JWT" \
-H "Accept: application/vnd.github.machine-man-preview+json" \
{% data variables.product.api_url_pre %}/app/installations/:installation_id/access_tokens
```
{% else %}
```shell
$ curl -i -X POST \
-H "Authorization: Bearer YOUR_JWT" \
-H "Accept: application/vnd.github.v3+json" \
{% data variables.product.api_url_pre %}/app/installations/:installation_id/access_tokens
```
{% endif %}

响应将包括您的安装访问令牌、到期日期、令牌权限及令牌可访问的仓库。 For more information about the response format, see the [Create an installation access token for an app](/v3/apps/#create-an-installation-access-token-for-an-app) endpoint.

要使用安装访问令牌进行身份验证，请将其加入 API 请求的“授权”标头中。

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
```shell
$ curl -i \
-H "Authorization: token YOUR_INSTALLATION_ACCESS_TOKEN" \
-H "Accept: application/vnd.github.machine-man-preview+json" \
{% data variables.product.api_url_pre %}/installation/repositories
```
{% else %}
```shell
$ curl -i \
-H "Authorization: token YOUR_INSTALLATION_ACCESS_TOKEN" \
-H "Accept: application/vnd.github.v3+json" \
{% data variables.product.api_url_pre %}/installation/repositories
```
{% endif %}

`YOUR_INSTALLATION_ACCESS_TOKEN` 是必须替换的值。

### 作为安装访问 API 端点

有关适用于使用安装访问令牌的 {% data variables.product.prodname_github_app %} 的 REST API 端点列表，请参阅“[可用端点](/v3/apps/available-endpoints/)。”

有关与安装相关的端点的列表，请参阅“[安装](/v3/apps/installations/)。”

### 由安装验证基于 HTTP 的 Git 访问权限

在仓库的 `contents` 上拥有[权限](/apps/building-github-apps/setting-permissions-for-github-apps/)的安装可以使用其安装访问令牌对 Git 访问权限进行身份验证。 使用安装访问令牌作为 HTTP 密码：

```shell
git clone https://x-access-token:&lt;token&gt;@github.com/owner/repo.git
```
