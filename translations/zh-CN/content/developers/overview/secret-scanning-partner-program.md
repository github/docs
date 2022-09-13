---
title: 密码扫描合作伙伴计划
intro: '作为服务提供者，您可以与 {% data variables.product.prodname_dotcom %} 合作，通过密码扫描保护您的密码令牌格式，该扫描将搜索意外提交的密码格式，并且可以发送到服务提供者的验证端点。'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /partnerships/token-scanning
  - /partnerships/secret-scanning
  - /developers/overview/secret-scanning
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
shortTitle: Secret scanning
ms.openlocfilehash: f935b849bb43e99fd3959db3920fd4d632bf54f7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145097997'
---
{% data variables.product.prodname_dotcom %} 扫描仓库查找已知的密码格式，以防止欺诈性使用意外提交的凭据。 {% data variables.product.prodname_secret_scanning_caps %} 默认情况下发生在公共仓库上，但仓库管理员或组织所有者可以在私有仓库上启用它。 作为服务提供者，您可以与 {% data variables.product.prodname_dotcom %} 合作，让您的密码格式包含在我们的 {% data variables.product.prodname_secret_scanning %} 中。

在公共仓库中找到密码格式的匹配项时，将发送有效负载到您选择的 HTTP 端点。

在为 {% data variables.product.prodname_secret_scanning %} 配置的私有仓库中找到密码格式的匹配项时，仓库管理员和提交者将收到警报，并且可以查看和管理 {% data variables.product.prodname_dotcom %} 上的 {% data variables.product.prodname_secret_scanning %} 结果。 有关详细信息，请参阅“[管理来自 {% data variables.product.prodname_secret_scanning %} 的警报](/github/administering-a-repository/managing-alerts-from-secret-scanning)。”

本文介绍作为服务提供者如何与 {% data variables.product.prodname_dotcom %} 合作并加入 {% data variables.product.prodname_secret_scanning %} 合作伙伴计划。

## {% data variables.product.prodname_secret_scanning %} 流程

#### {% data variables.product.prodname_secret_scanning %} 如何在公共仓库中工作

下图总结了在公共仓库中进行 {% data variables.product.prodname_secret_scanning %} 并将任何匹配项发送到服务提供者的验证端点的流程。

![显示扫描密码并向服务提供者的验证终结点发送匹配项的流程图](/assets/images/secret-scanning-flow.png "{% data variables.product.prodname_secret_scanning_caps %} 流程")

## 在 {% data variables.product.prodname_dotcom %} 上加入 {% data variables.product.prodname_secret_scanning %} 计划

1. 联系 {% data variables.product.prodname_dotcom %} 以启动流程。
1. 识别要扫描的相关密码，并创建正则表达式来捕获它们。
1. 针对在公共仓库中发现的密码匹配项，创建一个密码警报服务，以便从 {% data variables.product.prodname_dotcom %} 接受包含 {% data variables.product.prodname_secret_scanning %} 消息有效负载的 web 挂钩。
1. 在密码警报服务中实施签名验证。
1. 在密码警报服务中实施密码撤销和用户通知。
1. 提供误报的反馈（可选）。

### 联系 {% data variables.product.prodname_dotcom %} 以启动流程

若要开始注册过程，请发送电子邮件到 <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>。

您将收到有关 {% data variables.product.prodname_secret_scanning %} 计划的详细信息，您需要同意 {% data variables.product.prodname_dotcom %} 的参与条款才能继续。

### 识别您的密码并创建正则表达式

要扫描您的密码，{% data variables.product.prodname_dotcom %} 需要您要包含在 {% data variables.product.prodname_secret_scanning %} 计划中的每个密码的以下信息：

* 密码类型的唯一、人类可读的名称。 稍后我们将使用它在消息有效负载中生成 `Type` 值。
* 查找密码类型的正则表达式。 尽可能精确，因为这样可以减少误报的数量。
* 从 {% data variables.product.prodname_dotcom %} 接收消息的端点的 URL。 对于每个密码类型，这不必是唯一的。

将此信息发送到 <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>。

### 创建密码警报服务

在您提供给我们的 URL 上创建一个可访问互联网的公共 HTTP 端点。 在公共存储库中找到正则表达式的匹配项时，{% data variables.product.prodname_dotcom %} 将发送 HTTP `POST` 消息到你的终结点。

#### 发送到端点的 POST 示例

```http
POST / HTTP/2
Host: HOST
Accept: */*
Content-Type: application/json
GITHUB-PUBLIC-KEY-IDENTIFIER: 90a421169f0a406205f1563a953312f0be898d3c7b6c06b681aa86a874555f4a
GITHUB-PUBLIC-KEY-SIGNATURE: MEQCIA6C6L8ZYvZnqgV0zwrrmRab10QmIFV396gsba/WYm9oAiAI6Q+/jNaWqkgG5YhaWshTXbRwIgqIK6Ru7LxVYDbV5Q==
Content-Length: 0123

[{"token":"NMIfyYncKcRALEXAMPLE","type":"mycompany_api_token","url":"https://github.com/octocat/Hello-World/blob/12345600b9cbe38a219f39a9941c9319b600c002/foo/bar.txt"}]
```

消息正文是一个 JSON 数组，其中包含一个或多个具有以下内容的对象。 找到多个匹配项时，{% data variables.product.prodname_dotcom %} 可能发送一条包含多个密码匹配项的消息。 您的端点应该能够在不超时的情况下处理包含大量匹配项的请求。

* 令牌：机密匹配的值。
* 类型：提供用于标识正则表达式的唯一名称。
* URL：匹配项所处的公共提交 URL。

### 在密码警报服务中实施签名验证

我们强烈建议您在密码警报服务中实施签名验证，以确保您收到的消息确实来自 {% data variables.product.prodname_dotcom %}，而不是恶意消息。

可以从 https://api.github.com/meta/public_keys/secret_scanning 检索 {% data variables.product.prodname_dotcom %} 机密扫描公钥并使用 `ECDSA-NIST-P256V1-SHA256` 算法验证消息。

{% note %}

注意：向上述公钥终结点发送请求时，可能会达到速率限制。 为了避免达到速率限制，您可以使用下面示例建议的个人访问令牌（无需范围），或使用条件请求。 有关详细信息，请参阅“[REST API 入门](/rest/guides/getting-started-with-the-rest-api#conditional-requests)”。

{% endnote %}

假设您收到以下消息，下面的代码段演示如何执行签名验证。
代码片段假定已使用生成的 PAT (https://github.com/settings/tokens) 设置名为 `GITHUB_PRODUCTION_TOKEN` 的环境变量以避免达到速率限制。 PAT 不需要任何范围/权限。

{% note %}

注意：签名是使用原始消息正文生成的。 因此，您也必须使用原始消息正文进行签名验证，而不是解析和串联 JSON，以避免重新排列消息或更改间距，这一点很重要。

{% endnote %}

发送的用于验证终结点的消息示例
```http
POST / HTTP/2
Host: HOST
Accept: */*
content-type: application/json
GITHUB-PUBLIC-KEY-IDENTIFIER: 90a421169f0a406205f1563a953312f0be898d3c7b6c06b681aa86a874555f4a
GITHUB-PUBLIC-KEY-SIGNATURE: MEUCIQDKZokqnCjrRtw0tni+2Ltvl/uiMJ1EGumEsp1BsNr32AIgQY1YXD2nlj+XNfGK4rBfkMJ1JDOQcYXxa2sY8FNkrKc=
Content-Length: 0000

[{"token":"some_token","type":"some_type","url":"some_url"}]
```

Go 中的验证示例
```golang
package main

import (
  "crypto/ecdsa"
  "crypto/sha256"
  "crypto/x509"
  "encoding/asn1"
  "encoding/base64"
  "encoding/json"
  "encoding/pem"
  "errors"
  "fmt"
  "math/big"
  "net/http"
  "os"
)

func main() {
  payload := `[{"token":"some_token","type":"some_type","url":"some_url"}]`

  kID := "90a421169f0a406205f1563a953312f0be898d3c7b6c06b681aa86a874555f4a"

  kSig := "MEUCIQDKZokqnCjrRtw0tni+2Ltvl/uiMJ1EGumEsp1BsNr32AIgQY1YXD2nlj+XNfGK4rBfkMJ1JDOQcYXxa2sY8FNkrKc="

  // Fetch the list of GitHub Public Keys
  req, err := http.NewRequest("GET", "https://api.github.com/meta/public_keys/secret_scanning", nil)
  if err != nil {
    fmt.Printf("Error preparing request: %s\n", err)
    os.Exit(1)
  }

  if len(os.Getenv("GITHUB_PRODUCTION_TOKEN")) == 0 {
    fmt.Println("Need to define environment variable GITHUB_PRODUCTION_TOKEN")
    os.Exit(1)
  }

  req.Header.Add("Authorization", "Bearer "+os.Getenv("GITHUB_PRODUCTION_TOKEN"))

  resp, err := http.DefaultClient.Do(req)
  if err != nil {
    fmt.Printf("Error requesting GitHub signing keys: %s\n", err)
    os.Exit(2)
  }

  decoder := json.NewDecoder(resp.Body)
  var keys GitHubSigningKeys
  if err := decoder.Decode(&keys); err != nil {
    fmt.Printf("Error decoding GitHub signing key request: %s\n", err)
    os.Exit(3)
  }

  // Find the Key used to sign our webhook
  pubKey, err := func() (string, error) {
    for _, v := range keys.PublicKeys {
      if v.KeyIdentifier == kID {
        return v.Key, nil

      }
    }
    return "", errors.New("specified key was not found in GitHub key list")
  }()

  if err != nil {
    fmt.Printf("Error finding GitHub signing key: %s\n", err)
    os.Exit(4)
  }

  // Decode the Public Key
  block, _ := pem.Decode([]byte(pubKey))
  if block == nil {
    fmt.Println("Error parsing PEM block with GitHub public key")
    os.Exit(5)
  }

  // Create our ECDSA Public Key
  key, err := x509.ParsePKIXPublicKey(block.Bytes)
  if err != nil {
    fmt.Printf("Error parsing DER encoded public key: %s\n", err)
    os.Exit(6)
  }

  // Because of documentation, we know it's a *ecdsa.PublicKey
  ecdsaKey, ok := key.(*ecdsa.PublicKey)
  if !ok {
    fmt.Println("GitHub key was not ECDSA, what are they doing?!")
    os.Exit(7)
  }

  // Parse the Webhook Signature
  parsedSig := asn1Signature{}
  asnSig, err := base64.StdEncoding.DecodeString(kSig)
  if err != nil {
    fmt.Printf("unable to base64 decode signature: %s\n", err)
    os.Exit(8)
  }
  rest, err := asn1.Unmarshal(asnSig, &parsedSig)
  if err != nil || len(rest) != 0 {
    fmt.Printf("Error unmarshalling asn.1 signature: %s\n", err)
    os.Exit(9)
  }

  // Verify the SHA256 encoded payload against the signature with GitHub's Key
  digest := sha256.Sum256([]byte(payload))
  keyOk := ecdsa.Verify(ecdsaKey, digest[:], parsedSig.R, parsedSig.S)

  if keyOk {
    fmt.Println("THE PAYLOAD IS GOOD!!")
  } else {
    fmt.Println("the payload is invalid :(")
    os.Exit(10)
  }
}

type GitHubSigningKeys struct {
  PublicKeys []struct {
    KeyIdentifier string `json:"key_identifier"`
    Key           string `json:"key"`
    IsCurrent     bool   `json:"is_current"`
  } `json:"public_keys"`
}

// asn1Signature is a struct for ASN.1 serializing/parsing signatures.
type asn1Signature struct {
  R *big.Int
  S *big.Int
}
```

Ruby 中的验证示例
```ruby
require 'openssl'
require 'net/http'
require 'uri'
require 'json'
require 'base64'

payload = <<-EOL
[{"token":"some_token","type":"some_type","url":"some_url"}]
EOL

payload = payload

signature = "MEUCIQDKZokqnCjrRtw0tni+2Ltvl/uiMJ1EGumEsp1BsNr32AIgQY1YXD2nlj+XNfGK4rBfkMJ1JDOQcYXxa2sY8FNkrKc="

key_id = "90a421169f0a406205f1563a953312f0be898d3c7b6c06b681aa86a874555f4a"

url = URI.parse('https://api.github.com/meta/public_keys/secret_scanning')

raise "Need to define GITHUB_PRODUCTION_TOKEN environment variable" unless ENV['GITHUB_PRODUCTION_TOKEN']
request = Net::HTTP::Get.new(url.path)
request['Authorization'] = "Bearer #{ENV['GITHUB_PRODUCTION_TOKEN']}"

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = (url.scheme == "https")

response = http.request(request)

parsed_response = JSON.parse(response.body)

current_key_object = parsed_response["public_keys"].find { |key| key["key_identifier"] == key_id }

current_key = current_key_object["key"]

openssl_key = OpenSSL::PKey::EC.new(current_key)

puts openssl_key.verify(OpenSSL::Digest::SHA256.new, Base64.decode64(signature), payload.chomp)
```

JavaScript 中的验证示例
```js
const crypto = require("crypto");
const axios = require("axios");

const GITHUB_KEYS_URI = "https://api.github.com/meta/public_keys/secret_scanning";

/**
 * Verify a payload and signature against a public key
 * @param {String} payload the value to verify
 * @param {String} signature the expected value
 * @param {String} keyID the id of the key used to generated the signature
 * @return {void} throws if the signature is invalid
 */
const verify_signature = async (payload, signature, keyID) => {
  if (typeof payload !== "string" || payload.length === 0) {
    throw new Error("Invalid payload");
  }
  if (typeof signature !== "string" || signature.length === 0) {
    throw new Error("Invalid signature");
  }
  if (typeof keyID !== "string" || keyID.length === 0) {
    throw new Error("Invalid keyID");
  }

  const keys = (await axios.get(GITHUB_KEYS_URI)).data;
  if (!(keys?.public_keys instanceof Array) || keys.length === 0) {
    throw new Error("No public keys found");
  }

  const publicKey = keys.public_keys.find((k) => k.key_identifier === keyID) ?? null;
  if (publicKey === null) {
    throw new Error("No public key found matching key identifier");
  }

  const verify = crypto.createVerify("SHA256").update(payload);
  if (!verify.verify(publicKey.key, Buffer.from(signature, "base64"), "base64")) {
    throw new Error("Signature does not match payload");
  }
};
```

### 在密码警报服务中实施密码撤销和用户通知

对于公共仓库中的 {% data variables.product.prodname_secret_scanning %}，您可以增强密码警报服务，以撤销泄露的密码并通知受影响的用户。 如何在密码警报服务中实现此功能取决于您，但我们建议您考虑 {% data variables.product.prodname_dotcom %}向您发送的公开和泄露示警消息所涉及的任何密码。

### 提供误报的反馈

我们在合作伙伴响应中收集有关检测到的各个密码有效性的反馈。 如果你想参加，请发送电子邮件至 <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>。

向您报告密码时，我们会发送一个 JSON 数组，其中有包含令牌、类型标识符和提交 URL 的每个元素。 当您向我们发送反馈时，您将向我们发送有关检测到的令牌是真凭据还是假凭据的信息。 我们接受以下格式的反馈。

您可以向我们发送原始令牌：

```
[
  {
    "token_raw": "The raw token",
    "token_type": "ACompany_API_token",
    "label": "true_positive"
  }
]
```
您还可以使用 SHA-256 对原始令牌执行单向加密哈希后，以哈希形式提供令牌：

```
[
  {
    "token_hash": "The SHA-256 hashed form of the raw token",
    "token_type": "ACompany_API_token",
    "label": "false_positive"
  }
]
```
重要事项：
- 您应该只向我们发送令牌的原始形式 ("token_raw") 或哈希形式，而不要同时发送这两种形式。
- 对于原始令牌的哈希形式，您只能使用 SHA-256 对令牌进行哈希处理，而不能使用任何其他哈希算法。
- 用标签指示令牌为实报 ("true_positive") 还是误报 ("false_positive")。 只允许使用这两个小写的文字字符串。

{% note %}

注意：对于提供误报数据的合作伙伴，我们的请求超时设置得更高（即 30 秒）。 如果需要超过 30 秒的超时时间，请发送电子邮件至 <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>。

{% endnote %}
