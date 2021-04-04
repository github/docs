---
title: 保护 web 挂钩
intro: '出于安全原因，请确保您的服务器仅接收预期的 {% data variables.product.prodname_dotcom %} 请求。'
redirect_from:
  - /webhooks/securing
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - web 挂钩
---



一旦服务器配置为接收有效负载，它将侦听发送到您配置的端点的任何有效负载。 出于安全原因，您可能需要将请求限制为来自 GitHub 的请求。 有几种方法可以做到这一点，例如，您可以选择允许来自 GitHub 的 IP 地址的请求，但更简单的方法是设置一个密钥令牌并验证信息。

{% data reusables.webhooks.webhooks-rest-api-links %}

### 设置密钥令牌

您需要在两个地方设置您的密钥令牌：GitHub 和您的服务器。

要在 GitHub 上设置令牌：

1. 导航到您设置 web 挂钩的仓库。
2. 填写密钥文本框。 使用高熵值随机字符串（例如，通过在终端获取 `ruby -rsecurerandom -e 'puts SecureRandom.hex(20)'` 的输出）。 ![Web 挂钩密钥令牌字段](/assets/images/webhook_secret_token.png)
3. 单击 **Update Webhook（更新 web 挂钩）**。

接下来，在服务器上设置存储此令牌的环境变量。 通常，这简单如运行以下命令：

```shell
$ export SECRET_TOKEN=<em>your_token</em>
```

**切勿**将令牌硬编码到您的应用程序中！

### 验证来自 GitHub 的有效负载

设置密钥令牌后，{% data variables.product.product_name %} 使用它为每个有效负载创建一个哈希签名。 此哈希签名包含在每个请求的标头中，例如 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}`X-Hub-Signature-256`{% elsif currentVersion ver_lt "enterprise-server@2.23" %}`X-Hub-Signature`{% endif %}。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
{% note %}

**注：** 为了向后兼容，我们还包括使用 SHA-1 哈希函数生成的 `X-Hub-Signature` 标头。 如果可能，我们建议您使用 `X-Hub-Signature-256` 标头以提高安全性。 下面的示例演示使用 `X-Hub-Signature-256` 标头。

{% endnote %}
{% endif %}

例如，如果您有一个侦听 web 挂钩的基本服务器，则配置可能类似于：

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  push = JSON.parse(params[:payload])
  "I got some JSON: #{push.inspect}"
end
```

目的是使用您的 `SECRET_TOKEN` 计算哈希值，并确保结果与来自 {% data variables.product.product_name %} 的哈希匹配。 {% data variables.product.product_name %} 使用 HMAC 十六进制摘要计算哈希，因此您可以重新配置服务器，如下所示：

``` ruby
post '/payload' do
  request.body.rewind
  payload_body = request.body.read
  verify_signature(payload_body)
  push = JSON.parse(params[:payload])
  "I got some JSON: #{push.inspect}"
end

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
def verify_signature(payload_body)
  signature = 'sha256=' + OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new('sha256'), ENV['SECRET_TOKEN'], payload_body)
  return halt 500, "Signatures didn't match!" unless Rack::Utils.secure_compare(signature, request.env['HTTP_X_HUB_SIGNATURE_256'])
end{% elsif currentVersion ver_lt "enterprise-server@2.23" %}
def verify_signature(payload_body)
  signature = 'sha1=' + OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new('sha1'), ENV['SECRET_TOKEN'], payload_body)
  return halt 500, "Signatures didn't match!" unless Rack::Utils.secure_compare(signature, request.env['HTTP_X_HUB_SIGNATURE'])
end{% endif %}
```

{% note %}

**注意：**web 挂钩有效载荷可以包含 unicode 字符。 如果您的语言和服务器实现指定了字符编码，请确保您将有效负载处理为 UTF-8。

{% endnote %}

您的语言和服务器实现可能与此示例代码不同。 但是，需要指出一些非常重要的事情：

* 无论您使用哪种实现，哈希签名都以 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or "github-ae@latest" %}`sha256=`{% elsif currentVersion ver_lt "enterprise-server@2.23" %}`sha1=`{% endif %} 开头，使用密钥令牌和有效负载正文的键。

* **不建议**使用普通的 `==` 运算符。 像 [`secure_compare`][secure_compare] 这样的方法执行“恒定时间”字符串比较，这有助于减轻针对常规相等运算符的某些定时攻击。

[secure_compare]: http://rubydoc.info/github/rack/rack/master/Rack/Utils.secure_compare
