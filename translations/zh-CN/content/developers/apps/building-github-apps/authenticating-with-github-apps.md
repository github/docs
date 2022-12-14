---
title: 使用 GitHub 应用程序进行身份验证
intro: '{% data reusables.shortdesc.authenticating_with_github_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-authentication-options-for-github-apps
  - /apps/building-github-apps/authentication-options-for-github-apps
  - /apps/building-github-apps/authenticating-with-github-apps
  - /developers/apps/authenticating-with-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Authentication
ms.openlocfilehash: 093988bd48aafc9f7551d305726409349d5b620e
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: '146769195'
---
## <a name="generating-a-private-key"></a>生成私钥

创建 GitHub 应用程序 后，您需要生成一个或多个私钥。 私钥可用于签署访问令牌请求。

您可以创建多个私钥，然后轮流使用，以防某个私钥被盗或丢失造成停工。 要验证私钥是否与公钥匹配，请参阅[验证私钥](#verifying-private-keys)。

要生成私钥：

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %} {% data reusables.user-settings.modify_github_app %}
5. 在“私钥”中，单击“生成私钥”。
![生成私钥](/assets/images/github-apps/github_apps_generate_private_keys.png)
6. 您将看到一个以 PEM 格式下载至您的计算机的私钥。 确保将此文件存储下来，因为 GitHub 仅存储密钥的公共部分。

{% note %}

注意：如果你使用的库需要特定文件格式，你下载的 PEM 文件将采用 `PKCS#1 RSAPrivateKey` 格式。

{% endnote %}

## <a name="verifying-private-keys"></a>验证私钥
{% data variables.product.product_name %} 使用 SHA-256 哈希函数为每对私钥和公钥生成指纹。 您可以生成私钥指纹，然后与 {% data variables.product.product_name %} 显示的指纹相比较，以验证私钥是否与 {% data variables.product.product_name %} 上存储的公钥匹配。

要验证私钥：

1. 在 {% data variables.product.prodname_github_app %} 开发者设置页面的“私钥”部分，查找要验证的私钥和公钥对的指纹。 有关详细信息，请参阅[生成私钥](#generating-a-private-key)。
![私钥指纹](/assets/images/github-apps/github_apps_private_key_fingerprint.png)
2. 使用以下命令在本地生成私钥指纹 (PEM)：
    ```shell
    $ openssl rsa -in <em>PATH_TO_PEM_FILE</em> -pubout -outform DER | openssl sha256 -binary | openssl base64
    ```
3. 比较本地生成的指纹结果与 {% data variables.product.product_name %} 中显示的指纹。

## <a name="deleting-private-keys"></a>删除私钥
您可以通过删除功能删除丢失或被盗的私钥，但至少必须有一个私钥。 如果只有一个密钥，需要生成一个新钥，然后才能删除旧钥。
![删除最后一个私钥](/assets/images/github-apps/github_apps_delete_key.png)

## <a name="authenticating-as-a--data-variablesproductprodname_github_app-"></a>验证为 {% data variables.product.prodname_github_app %}

通过验证为 {% data variables.product.prodname_github_app %}，您可以执行以下操作：

* 检索关于您的 {% data variables.product.prodname_github_app %} 的高级管理信息。
* 为应用程序安装申请访问令牌。

要以 {% data variables.product.prodname_github_app %} 身份进行身份验证，请以 PEM 格式[生成私钥](#generating-a-private-key)并将其下载到本地计算机上。 你将使用此密钥对 [JSON Web 令牌 (JWT)](https://jwt.io/introduction) 进行签名，并使用 `RS256` 算法对其进行编码。 {% data variables.product.product_name %} 将使用应用程序存储的公钥验证令牌，以检查请求是否已通过身份验证。

下面是一段快速 Ruby 脚本，可用于生成 JWT。 请注意，必须先运行 `gem install jwt`，然后才能使用。

<a name="jwt-payload"></a>
```ruby
require 'openssl'
require 'jwt'  # https://rubygems.org/gems/jwt

# Private key contents
private_pem = File.read("YOUR_PATH_TO_PEM")
private_key = OpenSSL::PKey::RSA.new(private_pem)

# Generate the JWT
payload = {
  # issued at time, 60 seconds in the past to allow for clock drift
  iat: Time.now.to_i - 60,
  # JWT expiration time (10 minute maximum)
  exp: Time.now.to_i + (10 * 60),
  # {% data variables.product.prodname_github_app %}'s identifier
  iss: "YOUR_APP_ID"
}

jwt = JWT.encode(payload, private_key, "RS256")
puts jwt
```

必须替换 `YOUR_PATH_TO_PEM` 和 `YOUR_APP_ID` 值。 请确保以双引号括住值。

将 {% data variables.product.prodname_github_app %} 的标识符 (`YOUR_APP_ID`) 用作 JWT [iss](https://tools.ietf.org/html/rfc7519#section-4.1.1)（颁发者）声明的值。 可在[创建应用](/apps/building-github-apps/creating-a-github-app/)后通过初始 Webhook ping 获取 {% data variables.product.prodname_github_app %} 标识符，也可随时从 GitHub.com UI 的应用设置页面获取。

创建 JWT 后，在 API 请求的 `Header` 中设置它：

```shell
$ curl -i -H "Authorization: Bearer YOUR_JWT" -H "Accept: application/vnd.github+json" {% data variables.product.api_url_pre %}/app
```

`YOUR_JWT` 值必须替换。

上述示例使用的最长过期时间为 10 分钟，到期后，API 将开始返回 `401` 错误。

```json
{
  "message": "'Expiration' claim ('exp') must be a numeric value representing the future time at which the assertion expires.",
  "documentation_url": "{% data variables.product.doc_url_pre %}"
}
```

到期后，您需要创建新 JWT。

## <a name="accessing-api-endpoints-as-a--data-variablesproductprodname_github_app-"></a>作为 {% data variables.product.prodname_github_app %} 访问 API 端点

有关可用于获取关于 {% data variables.product.prodname_github_app %} 的高级信息的 REST API 终结点列表，请参阅“[GitHub 应用](/rest/reference/apps)”。

## <a name="authenticating-as-an-installation"></a>验证为安装

通过验证为安装，您可以在 API 中为此安装执行操作。 验证为安装之前，必须创建安装访问令牌。 确保您已将 GitHub 应用安装到至少一个仓库；如果没有单个安装，就无法创建安装令牌。 这些安装访问令牌由 {% data variables.product.prodname_github_apps %} 用于进行身份验证。 有关详细信息，请参阅“[安装 GitHub Apps](/developers/apps/managing-github-apps/installing-github-apps)”。

默认情况下，安装访问令牌的作用域为安装可访问的所有仓库。 可使用 `repository_ids` 参数将安装访问令牌的范围限定于特定存储库。 有关更多详细信息，请参阅[为应用创建安装访问令牌](/rest/reference/apps#create-an-installation-access-token-for-an-app)终结点。 安装访问令牌具有由 {% data variables.product.prodname_github_app %} 配置的权限，一个小时后到期。

要列出经过身份验证的应用的安装，请在 API 请求的授权标头中包含[上面生成](#jwt-payload)的 JWT：

```shell
$ curl -i -X GET \
-H "Authorization: Bearer YOUR_JWT" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/app/installations
```

响应将包括一个安装列表，其中每个安装的 `id` 可用来创建一个安装访问令牌。 有关响应格式的详细信息，请参阅“[列出经过身份验证的应用的安装](/rest/reference/apps#list-installations-for-the-authenticated-app)”。

要创建安装访问令牌，请在 API 请求的授权标头中包含[上面生成](#jwt-payload)的 JWT，并将 `:installation_id` 替换为安装的 `id`：

```shell
$ curl -i -X POST \
-H "Authorization: Bearer YOUR_JWT" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/app/installations/:installation_id/access_tokens
```

响应将包括您的安装访问令牌、到期日期、令牌权限及令牌可访问的仓库。 有关响应格式的详细信息，请参阅[为应用创建安装访问令牌](/rest/reference/apps#create-an-installation-access-token-for-an-app)。

要使用安装访问令牌进行身份验证，请将其加入 API 请求的“授权”标头中。

```shell
$ curl -i \
-H "Authorization: token YOUR_INSTALLATION_ACCESS_TOKEN" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/installation/repositories
```

`YOUR_INSTALLATION_ACCESS_TOKEN` 值必须替换。

## <a name="accessing-api-endpoints-as-an-installation"></a>作为安装访问 API 端点

有关使用安装访问令牌的 {% data variables.product.prodname_github_apps %} 可用的 REST API 终结点列表，请参阅“[可用终结点](/rest/overview/endpoints-available-for-github-apps)”。

有关与安装相关的终结点的列表，请参阅“[安装](/rest/reference/apps#installations)”。

## <a name="http-based-git-access-by-an-installation"></a>由安装验证基于 HTTP 的 Git 访问权限

在存储库的 `contents` 上拥有[权限](/apps/building-github-apps/setting-permissions-for-github-apps/)的安装可以使用其安装访问令牌对 Git 访问进行身份验证。 使用安装访问令牌作为 HTTP 密码：

```shell
git clone https://x-access-token:&lt;token&gt;@github.com/owner/repo.git
```
