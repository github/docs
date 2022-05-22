---
title: Secret scanningパートナープログラム
intro: 'サービスプロバイダーは、{% data variables.product.prodname_dotcom %}とパートナーになり、シークレットスキャンニングを通じてシークレットトークンのフォーマットを保護できます。シークレットスキャンニングは、そのシークレットのフォーマットで誤って行われたコミットを検索し、サービスプロバイダーの検証用エンドポイントに送信します。'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /partnerships/token-scanning/
  - /partnerships/secret-scanning
  - /developers/overview/secret-scanning
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
shortTitle: Secret scanning
---

{% data variables.product.prodname_dotcom %}は、既知のシークレットフォーマットに対してリポジトリをスキャンし、誤ってコミットされたクレデンシャルが不正利用されることを防ぎます。 {% data variables.product.prodname_secret_scanning_caps %}は、デフォルトでパブリックなリポジトリで行われ、プライベートリポジトリではリポジトリ管理者またはOrganizationのオーナーが有効化できます。 サービスプロバイダーは{% data variables.product.prodname_dotcom %}と連携し、シークレットのフォーマットが{% data variables.product.prodname_secret_scanning %}に含まれるようにすることができます。

シークレットのフォーマットに対する一致がパブリックリポジトリで見つかった場合、選択したHTTPのエンドポイントにペイロードが送信されます。

{% data variables.product.prodname_secret_scanning %}が設定されたプライベートリポジトリでシークレットフォーマットへの一致が見つかった場合、リポジトリの管理者とコミッターにアラートが発せられ、{% data variables.product.prodname_dotcom %}上で{% data variables.product.prodname_secret_scanning %}の結果を見て管理できます。 詳しい情報については、「[{% data variables.product.prodname_secret_scanning %} からのアラートを管理する](/github/administering-a-repository/managing-alerts-from-secret-scanning)」を参照してください。

この記事では、サービスプロバイダーとして{% data variables.product.prodname_dotcom %}とパートナーになり、{% data variables.product.prodname_secret_scanning %}パートナープログラムに参加する方法を説明します。

## {% data variables.product.prodname_secret_scanning %}のプロセス

#### パブリックリポジトリにおける{% data variables.product.prodname_secret_scanning %}の動作

以下の図は、パブリックリポジトリに対する{% data variables.product.prodname_secret_scanning %}のプロセスをまとめたもので、一致があった場合にサービスプロバイダへの検証エンドポイントに送信されています。

![シークレットのスキャンニングと、サービスプロバイダーの検証エンドポイントへの一致の送信のプロセスのフロー図。](/assets/images/secret-scanning-flow.png "{% data variables.product.prodname_secret_scanning_caps %}フロー")

## {% data variables.product.prodname_dotcom %}の{% data variables.product.prodname_secret_scanning %}プログラムへの参加

1. プロセスを開始するために、{% data variables.product.prodname_dotcom %}に連絡してください。
1. スキャンしたい関連シークレットを特定し、それらを捕捉するための正規表現を作成してください。
1. パブリックリポジトリで見つかったシークレットの一致に対応するために、{% data variables.product.prodname_secret_scanning %}のメッセージペイロードを含む{% data variables.product.prodname_dotcom %}からのwebhookを受け付けるシークレットアラートサービスを作成してください。
1. シークレットアラートサービスに、署名検証を実装してください。
1. シークレットアラートサービスに、シークレットの破棄とユーザへの通知を実装してください。
1. 誤検知に対するフィードバックを行ないます (任意)。

### プロセスを開始するための{% data variables.product.prodname_dotcom %}への連絡

登録のプロセスを開始するには、<a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>にメールを送信してください。

{% data variables.product.prodname_secret_scanning %}プログラムの詳細が送信されます。手続きを進めるには、{% data variables.product.prodname_dotcom %}の参加規約に同意する必要があります。

### シークレットの特定と正規表現の作成

シークレットをスキャンするには、{% data variables.product.prodname_dotcom %}は{% data variables.product.prodname_secret_scanning %}に含める各シークレットについて以下の情報が必要です。

* シークレットの種類に対する、ユニークで人が読める名前。 後にこれを使って、メッセージペイロード中の`Type`値が生成されます。
* このシークレットの種類を見つける正規表現。 できるかぎり正確にしてください。そうすることで、誤検知の数を減らすことができます。
* {% data variables.product.prodname_dotcom %}からのメッセージを受信するエンドポイントのURL。 これは各シークレットの種類ごとにユニークである必要はありません。

この情報を<a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>に送信してください。

### シークレットアラートサービスの作成

提供したURLに、パブリックでインターネットからアクセスできるHTTPエンドポイントを作成してください。 パブリックリポジトリで正規表現への一致が見つかった場合、{% data variables.product.prodname_dotcom %}はHTTPの`POST`メッセージをエンドポイントに送信します。

#### エンドポイントに送信されるPOSTの例

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

メッセージのボディはJSONの配列で、以下の内容を持つ1つ以上のオブジェクトを含みます。 複数の一致が見つかった場合には、{% data variables.product.prodname_dotcom %}は複数のシークレットの一致を含む1つのメッセージを送信することがあります。 エンドポイントは、タイムアウトすることなく大量の一致を含むリクエストを処理できなければなりません。

* **Token**: シークレットの一致の値。
* **Type**: 正規表現を特定するために渡されたユニークな名前。
* **URL**: マッチが見つかったパブリックなコミットURL。

### シークレットアラートサービスへの署名検証の実装

シークレットサービスには署名検証サービスを実装して、受信したメッセージが本当に{% data variables.product.prodname_dotcom %}からのものであり、悪意がないことを保証することを強くおすすめします。

{% data variables.product.prodname_dotcom %}のシークレットスキャンニング公開鍵はhttps://api.github.com/meta/public_keys/secret_scanningから取得でき、`ECDSA-NIST-P256V1-SHA256`アルゴリズムを使ってメッセージを検証できます。

{% note %}

**注釈**: 上記の公開鍵エンドポイントにリクエストを送信する際、レート制限に達する場合があります。 レート制限を回避するには、以下のサンプルで示すように個人アクセストークン (スコープ不要) を使うか、条件付きリクエストを利用できます。 詳しい情報については、「[REST APIを使ってみる](/rest/guides/getting-started-with-the-rest-api#conditional-requests)」を参照してください。

{% endnote %}

次のメッセージを受信したとして、以下のコードは署名検証の方法を示しています。 このコードスニペットは、レート制限を回避するため、`GITHUB_PRODUCTION_TOKEN`という環境変数に生成されたPATが設定されていることを前提としています (https://github.com/settings/tokens)。 このPATには、スコープや権限は不要です。

{% note %}

**注釈**: 署名は生のメッセージ本文を利用して生成されます。 そのため、署名の検証にもJSONの文字列を解析して変換するのではなく、生のメッセージ本文を利用することが重要です。これは、メッセージの並べ替えやスペースの変更を避けるためです。

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

**JavaScriptでの検証サンプル**
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

### シークレットアラートサービスへのシークレットの破棄とユーザ通知の実装

パブリックリポジトリでの{% data variables.product.prodname_secret_scanning %}では、シークレットアラートサービスを拡張して、公開されたシークレットを取り除き、影響されたユーザに通知できます。 これをシークレットアラートサービスへどのように実装するかは実装者に任されていますが、{% data variables.product.prodname_dotcom %}がメッセージを送信したすべてのシークレットは、公開され、侵害されたものと考えることをおすすめします。

### 誤検知に対するフィードバック

当社は、パートナーのレスポンスにおいて検出された個々のシークレットについて、妥当性のフィードバックを収集しています。 参加を希望する場合は、<a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>までメールでご連絡ください。

当社がシークレットを報告する際は、トークン、型識別子、コミットURLを含む各要素のJSON配列を送信します。 当社がフィードバックを受け取る際、あなたは検出されたトークンが正しい認証情報を持っているかいないかについての情報を送信します。 フィードバックは以下のフォーマットで受け取ります。

生のトークンは以下のように送信できます。

```
[
  {
    "token_raw": "The raw token",
    "token_type": "ACompany_API_token",
    "label": "true_positive"
  }
]
```
また、SHA-256を使用して一方向暗号化ハッシュを実行した後、ハッシュ形式でトークンを提供することも可能です。

```
[
  {
    "token_hash": "The SHA-256 hashed form of the raw token",
    "token_type": "ACompany_API_token",
    "label": "false_positive"
  }
]
```
重要な点をいくつか挙げます。
- トークンは、生の形式 ("token_raw") またはハッシュ形式 ("token_hash") のいずれか1つだけを送信してください。両方を送信しないでください。
- 生のトークンをハッシュ化する場合、SHA-256のみを使用します。他のハッシュ化アルゴリズムは使用しないでください。
- ラベルは、トークンが真陽性 ("true_positive") か誤検知 ("false_positive") かを示します。 これら2つの、小文字のリテラル文字列のみを受け付けます。

{% note %}

**注釈:** 誤検知に関するデータを提供するパートナーに対しては、リクエストタイムアウトの値を大きめ (30秒) に設定します。 30秒よりも長めのタイムアウトが必要な場合、<a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>までメールでご連絡ください。

{% endnote %}
