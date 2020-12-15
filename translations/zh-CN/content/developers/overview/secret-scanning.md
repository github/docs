---
title: 秘密扫描
intro: '作为服务提供者，您可以与 {% data variables.product.prodname_dotcom %} 合作，通过密码扫描保护您的密码令牌格式，该扫描将搜索意外提交的密码格式，并且可以发送到服务提供者的验证端点。'
redirect_from:
  - /partnerships/token-scanning/
  - /partnerships/secret-scanning
versions:
  free-pro-team: '*'
---


{% data variables.product.prodname_dotcom %} 扫描仓库查找已知的密码格式，以防止欺诈性使用意外提交的凭据。 默认情况下，密码扫描发生在公共仓库上，但仓库管理员或组织所有者可以在私有仓库上启用它。 作为服务提供者，您可以与 {% data variables.product.prodname_dotcom %} 合作，让您的密码格式包含在我们的密码扫描中。

在公共仓库中找到密码格式的匹配项时，将发送有效负载到您选择的 HTTP 端点。

在配置为密码扫描的私有仓库中找到密码格式的匹配项时，仓库管理员将收到警报，并且可以查看和管理 {% data variables.product.prodname_dotcom %} 上的密码扫描结果。 更多信息请参阅“[管理来自密码扫描的警报](/github/administering-a-repository/managing-alerts-from-secret-scanning)”。

{% note %}

**注：**私有仓库的密码扫描目前处于测试阶段。

{% endnote %}

本文介绍作为服务提供者如何与 {% data variables.product.prodname_dotcom %} 合作并加入密码扫描计划。

### 密码扫描流程

##### 密码扫描在公共仓库中的工作方式

下图总结了在公共仓库中进行密码扫描并将任何匹配项发送到服务提供者的验证端点的流程。

![显示扫描密码并向服务提供者的验证端点发送匹配项的流程图](/assets/images/secret-scanning-flow.png "密码扫描流程")

### 在 {% data variables.product.prodname_dotcom %} 上加入密码扫描计划

1. 联系 {% data variables.product.prodname_dotcom %} 以启动流程。
1. 识别要扫描的相关密码，并创建正则表达式来捕获它们。
1. 针对在公共仓库中发现的密码匹配项，创建一个密码警报服务，以便从 {% data variables.product.prodname_dotcom %} 接受包含密码扫描消息有效负载的 web 挂钩。
1. 在密码警报服务中实施签名验证。
1. 在密码警报服务中实施密码撤销和用户通知。

#### 联系 {% data variables.product.prodname_dotcom %} 以启动流程

要启动注册流程，请发送电子邮件至 secret-scanning@github.com。

您将收到有关密码扫描计划的详细信息，您需要同意 {% data variables.product.prodname_dotcom %} 的参与条款才能继续。

#### 识别您的密码并创建正则表达式

要扫描您的密码，{% data variables.product.prodname_dotcom %} 需要您要包含在密码扫描计划中的每个密码的以下信息：

* 密码类型的唯一、人类可读的名称。 稍后我们将使用它来生成消息有效负载中的 `Type` 值。
* 查找密码类型的正则表达式。 尽可能精确，因为这样可以减少误报的数量。
* 从 {% data variables.product.prodname_dotcom %} 接收消息的端点的 URL。 对于每个密码类型，这不必是唯一的。

将此信息发送到 secret-scanning@github.com。

#### 创建密码警报服务

在您提供给我们的 URL 上创建一个可访问互联网的公共 HTTP 端点。 在公共仓库中找到正则表达式的匹配项时，{% data variables.product.prodname_dotcom %} 将发送 HTTP `POST` 消息到您的端点。

##### 发送到端点的 POST 示例

```
POST / HTTP/1.1
Host: HOST
Accept: */*
Content-Type: application/json
GITHUB-PUBLIC-KEY-IDENTIFIER: 90a421169f0a406205f1563a953312f0be898d3c7b6c06b681aa86a874555f4a
GITHUB-PUBLIC-KEY-SIGNATURE: MEUCICop4nvIgmcY4+mBG6Ek=
Content-Length: 0123

[
  {
    "token": "X-Header-Bearer: as09dalkjasdlfkjasdf09a",
    "type": "ACompany_API_token",
    "url": "https://github.com/octocat/Hello-World/commit/123456718ee16e59dabbacb1b4049abc11abc123"
  }
]
```

消息正文是一个 JSON 数组，其中包含一个或多个具有以下内容的对象。 找到多个匹配项时，{% data variables.product.prodname_dotcom %} 可能发送一条包含多个密码匹配项的消息。 您的端点应该能够在不超时的情况下处理包含大量匹配项的请求。

* **令牌**：密码匹配项的值。
* **类型**：您提供的用于识别正则表达式的唯一名称。
* **URL**：在其中找到匹配项的公共提交 URL。

#### 在密码警报服务中实施签名验证

我们强烈建议您在密码警报服务中实施签名验证，以确保您收到的消息确实来自 {% data variables.product.prodname_dotcom %}，而不是恶意消息。

您可以从 https://api.github.com/meta/public_keys/secret_scanning 检索 {% data variables.product.prodname_dotcom %} 密码扫描公钥，并使用 `ECDSA-NIST-P256V1-SHA256` 算法验证消息。

假设您收到以下消息，下面的代码段演示如何执行签名验证。 该代码还假设您已经使用生成的 PAT 设置了一个名为 `GITHUB_PRODUCTION_TOKEN` 的环境变量 (https://github.com/settings/tokens)。 该令牌不需要设置任何权限。

**发送到验证端点的消息示例**
```
POST / HTTP/1.1
Host: HOST
Accept: */*
content-type: application/json
GITHUB-PUBLIC-KEY-IDENTIFIER: 90a421169f0a406205f1563a953312f0be898d3c7b6c06b681aa86a874555f4a
GITHUB-PUBLIC-KEY-SIGNATURE: MEUCICxTWEpKo7BorLKutFZDS6ie+YFg6ecU7kEA6rUUSJqsAiEA9bK0Iy6vk2QpZOOg2IpBhZ3JRVdwXx1zmgmNAR7Izpc=
Content-Length: 0000

[{"token": "some_token", "type": "some_type", "url": "some_url"}]
```

**Go 中的验证示例**
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
  payload := `[{"token": "some_token", "type": "some_type", "url": "some_url"}]`

  kID := "90a421169f0a406205f1563a953312f0be898d3c7b6c06b681aa86a874555f4a"

  kSig := "MEUCICxTWEpKo7BorLKutFZDS6ie+YFg6ecU7kEA6rUUSJqsAiEA9bK0Iy6vk2QpZOOg2IpBhZ3JRVdwXx1zmgmNAR7Izpc="

  // Fetch the list of GitHub Public Keys
  req, err := http.NewRequest("GET", "https://api.github.com/meta/public_keys/token_scanning", nil)
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

**Ruby 中的验证示例**
```ruby
require 'openssl'
require 'net/http'
require 'uri'
require 'json'
require 'base64'

payload = <<-EOL
[{"token": "some_token", "type": "some_type", "url": "some_url"}]
EOL

payload = payload

signature = "MEUCICxTWEpKo7BorLKutFZDS6ie+YFg6ecU7kEA6rUUSJqsAiEA9bK0Iy6vk2QpZOOg2IpBhZ3JRVdwXx1zmgmNAR7Izpc="

key_id = "90a421169f0a406205f1563a953312f0be898d3c7b6c06b681aa86a874555f4a"

url = URI.parse('https://api.github.com/meta/public_keys/token_scanning')

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

#### 在密码警报服务中实施密码撤销和用户通知

对于公共仓库中的密码扫描，您可以增强密码警报服务，以撤销泄露的密码并通知受影响的用户。 如何在密码警报服务中实现此功能取决于您，但我们建议您考虑 {% data variables.product.prodname_dotcom %}向您发送的公开和泄露示警消息所涉及的任何密码。
