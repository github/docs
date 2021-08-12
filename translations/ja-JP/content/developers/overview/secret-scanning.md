---
title: Secret scanning
intro: 'サービスプロバイダーは、{% data variables.product.prodname_dotcom %}とパートナーになり、シークレットスキャンニングを通じてシークレットトークンのフォーマットを保護できます。シークレットスキャンニングは、そのシークレットのフォーマットで誤って行われたコミットを検索し、サービスプロバイダーの検証用エンドポイントに送信します。'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /partnerships/token-scanning/
  - /partnerships/secret-scanning
versions:
  free-pro-team: '*'
topics:
  - API
---

{% data variables.product.prodname_dotcom %}は、既知のシークレットフォーマットに対してリポジトリをスキャンし、誤ってコミットされたクレデンシャルが不正利用されることを防ぎます。 {% data variables.product.prodname_secret_scanning_caps %} happens by default on public repositories, and can be enabled on private repositories by repository administrators or organization owners. As a service provider, you can partner with {% data variables.product.prodname_dotcom %} so that your secret formats are included in our {% data variables.product.prodname_secret_scanning %}.

シークレットのフォーマットに対する一致がパブリックリポジトリで見つかった場合、選択したHTTPのエンドポイントにペイロードが送信されます。

When a match of your secret format is found in a private repository configured for {% data variables.product.prodname_secret_scanning %}, then repository admins and the committer are alerted and can view and manage the {% data variables.product.prodname_secret_scanning %} result on {% data variables.product.prodname_dotcom %}. 詳しい情報については、「[{% data variables.product.prodname_secret_scanning %} からのアラートを管理する](/github/administering-a-repository/managing-alerts-from-secret-scanning)」を参照してください。

This article describes how you can partner with {% data variables.product.prodname_dotcom %} as a service provider and join the {% data variables.product.prodname_secret_scanning %} partner program.

### The {% data variables.product.prodname_secret_scanning %} process

##### How {% data variables.product.prodname_secret_scanning %} works in a public repository

The following diagram summarizes the {% data variables.product.prodname_secret_scanning %} process for public repositories, with any matches sent to a service provider's verify endpoint.

![シークレットのスキャンニングと、サービスプロバイダーの検証エンドポイントへの一致の送信のプロセスのフロー図。](/assets/images/secret-scanning-flow.png "{% data variables.product.prodname_secret_scanning_caps %} flow")

### Joining the {% data variables.product.prodname_secret_scanning %} program on {% data variables.product.prodname_dotcom %}

1. プロセスを開始するために、{% data variables.product.prodname_dotcom %}に連絡してください。
1. スキャンしたい関連シークレットを特定し、それらを捕捉するための正規表現を作成してください。
1. For secret matches found in public repositories, create a secret alert service which accepts webhooks from {% data variables.product.prodname_dotcom %}  that contain the {% data variables.product.prodname_secret_scanning %} message payload.
1. シークレットアラートサービスに、署名検証を実装してください。
1. シークレットアラートサービスに、シークレットの破棄とユーザへの通知を実装してください。
1. Provide feedback for false positives (optional).

#### プロセスを開始するための{% data variables.product.prodname_dotcom %}への連絡

To get the enrollment process started, email <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>.

You will receive details on the {% data variables.product.prodname_secret_scanning %} program, and you will need to agree to {% data variables.product.prodname_dotcom %}'s terms of participation before proceeding.

#### シークレットの特定と正規表現の作成

To scan for your secrets, {% data variables.product.prodname_dotcom %} needs the following pieces of information for each secret that you want included in the {% data variables.product.prodname_secret_scanning %} program:

* シークレットの種類に対する、ユニークで人が読める名前。 後にこれを使って、メッセージペイロード中の`Type`値が生成されます。
* このシークレットの種類を見つける正規表現。 できるかぎり正確にしてください。そうすることで、誤検知の数を減らすことができます。
* {% data variables.product.prodname_dotcom %}からのメッセージを受信するエンドポイントのURL。 これは各シークレットの種類ごとにユニークである必要はありません。

Send this information to <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>.

#### シークレットアラートサービスの作成

提供したURLに、パブリックでインターネットからアクセスできるHTTPエンドポイントを作成してください。 When a match of your regular expression is found in a public repository, {% data variables.product.prodname_dotcom %} will send an HTTP `POST` message to your endpoint.

##### エンドポイントに送信されるPOSTの例

```http
POST / HTTP/2
Host: HOST
Accept: */*
Content-Type: application/json
GITHUB-PUBLIC-KEY-IDENTIFIER: 90a421169f0a406205f1563a953312f0be898d3c7b6c06b681aa86a874555f4a
GITHUB-PUBLIC-KEY-SIGNATURE: MEQCIA6C6L8ZYvZnqgV0zwrrmRab10QmIFV396gsba/WYm9oAiAI6Q+/jNaWqkgG5YhaWshTXbRwIgqIK6Ru7LxVYDbV5Q==
Content-Length: 0123

[{"token":"NMIfyYncKcRALEXAMPLE","type":"mycompany_api_token","url":"https://github.com/octocat/Hello-World/commit/123456718ee16e59dabbacb1b4049abc11abc123"}]
```

メッセージのボディはJSONの配列で、以下の内容を持つ1つ以上のオブジェクトを含みます。 複数の一致が見つかった場合には、{% data variables.product.prodname_dotcom %}は複数のシークレットの一致を含む1つのメッセージを送信することがあります。 エンドポイントは、タイムアウトすることなく大量の一致を含むリクエストを処理できなければなりません。

* **Token**: シークレットの一致の値。
* **Type**: 正規表現を特定するために渡されたユニークな名前。
* **URL**: マッチが見つかったパブリックなコミットURL。

#### シークレットアラートサービスへの署名検証の実装

シークレットサービスには署名検証サービスを実装して、受信したメッセージが本当に{% data variables.product.prodname_dotcom %}からのものであり、悪意がないことを保証することを強くおすすめします。

{% data variables.product.prodname_dotcom %}のシークレットスキャンニング公開鍵はhttps://api.github.com/meta/public_keys/secret_scanningから取得でき、`ECDSA-NIST-P256V1-SHA256`アルゴリズムを使ってメッセージを検証できます。

{% note %}

**Note**: When you send a request to the public key endpoint above, you may hit rate limits. To avoid hitting rate limits, you can use a personal access token (no scopes required) as suggested in the samples below, or use a conditional request. For more information, see "[Getting started with the REST API](/rest/guides/getting-started-with-the-rest-api#conditional-requests)."

{% endnote %}

次のメッセージを受信したとして、以下のコードは署名検証の方法を示しています。 The code snippets assume you've set an environment variable called `GITHUB_PRODUCTION_TOKEN` with a generated PAT (https://github.com/settings/tokens) to avoid hitting rate limits. The PAT does not need any scopes/permissions.

{% note %}

**Note**: The signature was generated using the raw message body. So it's important you also use the raw message body for signature validation, instead of parsing and stringifying the JSON, to avoid rearranging the message or changing spacing.

{% endnote %}

**検証エンドポイントに送信されたサンプルのメッセージ**
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

**Goでの検証のサンプル**
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
        os.Exit(8)
  }
  rest, err := asn1.Unmarshal(asnSig, &parsedSig)
  if err != nil || len(rest) != 0 {
    fmt.Printf("Error unmarshalling asn.1 signature: %s\n", err)
    os.Exit(9)
  }

  // SHA256エンコードされたペイロードをGitHubの鍵での署名に対して検証する
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

// asn1Signatureは ASN.1 シリアライズ/パース署名に対する構造体
type asn1Signature struct {
  R *big.Int
  S *big.Int
}
```

**Rubyでの検証サンプル**
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

**Validation sample in JavaScript**
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

#### シークレットアラートサービスへのシークレットの破棄とユーザ通知の実装

For {% data variables.product.prodname_secret_scanning %} in public repositories, you can enhance your secret alert service to revoke the exposed secrets and notify the affected users. これをシークレットアラートサービスへどのように実装するかは実装者に任されていますが、{% data variables.product.prodname_dotcom %}がメッセージを送信したすべてのシークレットは、公開され、侵害されたものと考えることをおすすめします。

#### Provide feedback for false positives

We collect feedback on the validity of the detected individual secrets in partner responses. If you wish to take part, email us at <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>.

When we report secrets to you, we send a JSON array with each element containing the token, type identifier, and commit URL. When you send us feedback, you send us information about whether the detected token was a real or false credential. We accept feedback in the following formats.

You can send us the raw token:

```
[
  {
    "token_raw": "The raw token",
    "token_type": "ACompany_API_token",
    "label": "true_positive"
  }
]
```
You may also provide the token in hashed form after performing a one way cryptographic hash of the raw token using SHA-256:

```
[
  {
    "token_hash": "The SHA-256 hashed form of the raw token",
    "token_type": "ACompany_API_token",
    "label": "false_positive"
  }
]
```
A few important points:
- You should only send us either the raw form of the token ("token_raw"), or the hashed form ("token_hash"), but not both.
- For the hashed form of the raw token, you can only use SHA-256 to hash the token, not any other hashing algorithm.
- The label indicates whether the token is a true ("true_positive") or a false positive ("false_positive"). Only these two lowercased literal strings are allowed.

{% note %}

**Note:** Our request timeout is set to be higher (that is, 30 seconds) for partners who provide data about false positives. If you require a timeout higher than 30 seconds, email us at <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>.

{% endnote %}
