---
title: Secret scanning
intro: 'サービスプロバイダーは、{% data variables.product.prodname_dotcom %}とパートナーになり、シークレットスキャンニングを通じてシークレットトークンのフォーマットを保護できます。シークレットスキャンニングは、そのシークレットのフォーマットで誤って行われたコミットを検索し、サービスプロバイダーの検証用エンドポイントに送信します。'
redirect_from:
  - /partnerships/token-scanning/
  - /partnerships/secret-scanning
versions:
  free-pro-team: '*'
---


{% data variables.product.prodname_dotcom %}は、既知のシークレットフォーマットに対してリポジトリをスキャンし、誤ってコミットされたクレデンシャルが不正利用されることを防ぎます。 シークレットスキャンニングは、デフォルトでパブリックなリポジトリで行われ、プライベートリポジトリではリポジトリ管理者もしくはOrganizationのオーナーが有効化できます。 サービスプロバイダーは{% data variables.product.prodname_dotcom %}とパートナーになり、シークレットのフォーマットがシークレットスキャンニングに含まれるようにすることができます。

シークレットのフォーマットに対する一致がパブリックリポジトリで見つかった場合、選択したHTTPのエンドポイントにペイロードが送信されます。

シークレットスキャンニングが設定されたプライベートリポジトリでシークレットフォーマットへの一致が見つかった場合、リポジトリの管理者にはアラートが発せられ、{% data variables.product.prodname_dotcom %}上でシークレットスキャンニングの結果を見て管理できます。 詳しい情報については「[シークレットスキャンニングからのアラートの管理](/github/administering-a-repository/managing-alerts-from-secret-scanning)」を参照してください。

{% note %}

**ノート:** プライベートリポジトリに対するシークレットスキャンニングは、現在ベータです。

{% endnote %}

この記事では、サービスプロバイダーとして{% data variables.product.prodname_dotcom %}とパートナーになり、シークレットスキャンニングプログラムに参加する方法を説明します。

### シークレットスキャンニングのプロセス

##### パブリックリポジトリでのシークレットスキャンニングの動作

以下の図は、パブリックリポジトリに対するシークレットスキャンニングのプロセスをまとめたもので、一致があった場合にサービスプロバイダへの検証エンドポイントに送信されています。

![Flow diagram showing the process of scanning for a secret and sending matches to a service provider's verify endpoint](/assets/images/secret-scanning-flow.png "Secret scanning flow")

### {% data variables.product.prodname_dotcom %}上のシークレットスキャンニングプログラムへの参加

1. プロセスを開始するために、{% data variables.product.prodname_dotcom %}に連絡してください。
1. スキャンしたい関連シークレットを特定し、それらを捕捉するための正規表現を作成してください。
1. パブリックリポジトリで見つかったシークレットの一致に対応するために、シークレットスキャンニングのメッセージペイロードを含む{% data variables.product.prodname_dotcom %}からのwebhookを受け付けるシークレットアラートサービスを作成してください。
1. シークレットアラートサービスに、署名検証を実装してください。
1. シークレットアラートサービスに、シークレットの破棄とユーザへの通知を実装してください。

#### プロセスを開始するための{% data variables.product.prodname_dotcom %}への連絡

登録のプロセスを開始するために、secret-scanning@github.comにメールしてください。

You will receive details on the secret scanning program, and you will need to agree to {% data variables.product.prodname_dotcom %}'s terms of participation before proceeding.

#### Identify your secrets and create regular expressions

To scan for your secrets, {% data variables.product.prodname_dotcom %} needs the following pieces of information for each secret that you want included in the secret scanning program:

* A unique, human readable name for the secret type. We'll use this to generate the `Type` value in the message payload later.
* A regular expression which finds the secret type. Be as precise as possible, because this will reduce the number of false positives.
* The URL of the endpoint that receives messages from {% data variables.product.prodname_dotcom %}. This does not have to be unique for each secret type.

Send this information to secret-scanning@github.com.

#### Create a secret alert service

Create a public, internet accessible HTTP endpoint at the URL you provided to us. When a match of your regular expression is found in a public repository, {% data variables.product.prodname_dotcom %} will send a HTTP `POST` message to your endpoint.

##### Example POST sent to your endpoint

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

The message body is a JSON array that contains one or more objects with the following contents. When multiple matches are found, {% data variables.product.prodname_dotcom %}  may send a single message with more than one secret match. Your endpoint should be able to handle requests with a large number of matches without timing out.

* **Token**: The value of the secret match.
* **Type**: The unique name you provided to identify your regular expression.
* **URL**: The public commit URL where the match was found.

#### Implement signature verification in your secret alert service

We strongly recommend you implement signature validation in your secret alert service to ensure that the messages you receive are genuinely from {% data variables.product.prodname_dotcom %} and not malicious.

You can retrieve the {% data variables.product.prodname_dotcom %} secret scanning public key from https://api.github.com/meta/public_keys/secret_scanning and validate the message using the `ECDSA-NIST-P256V1-SHA256` algorithm.

Assuming you receive the following message, the code snippets below demonstrate how you could perform signature validation. The code also assumes you've set an environment variable called `GITHUB_PRODUCTION_TOKEN` with a generated PAT (https://github.com/settings/tokens). The token does not need any permissions set.

**Sample message sent to verify endpoint**
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

**Validation sample in Go**
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
```

**Validation sample in Ruby**
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

#### Implement secret revocation and user notification in your secret alert service

For secret scanning in public repositories, you can enhance your secret alert service to revoke the exposed secrets and notify the affected users. How you implement this in your secret alert service is up to you, but we recommend considering any secrets that {% data variables.product.prodname_dotcom %} sends you messages about as public and compromised.
