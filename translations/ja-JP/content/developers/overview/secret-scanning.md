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

![シークレットのスキャンニングと、サービスプロバイダーの検証エンドポイントへの一致の送信のプロセスのフロー図。](/assets/images/secret-scanning-flow.png "シークレットスキャンニングのフロー")

### {% data variables.product.prodname_dotcom %}上のシークレットスキャンニングプログラムへの参加

1. プロセスを開始するために、{% data variables.product.prodname_dotcom %}に連絡してください。
1. スキャンしたい関連シークレットを特定し、それらを捕捉するための正規表現を作成してください。
1. パブリックリポジトリで見つかったシークレットの一致に対応するために、シークレットスキャンニングのメッセージペイロードを含む{% data variables.product.prodname_dotcom %}からのwebhookを受け付けるシークレットアラートサービスを作成してください。
1. シークレットアラートサービスに、署名検証を実装してください。
1. シークレットアラートサービスに、シークレットの破棄とユーザへの通知を実装してください。

#### プロセスを開始するための{% data variables.product.prodname_dotcom %}への連絡

登録のプロセスを開始するために、secret-scanning@github.comにメールしてください。

シークレットスキャンニングプログラムの詳細が送られてくるので、先へ進む前に{% data variables.product.prodname_dotcom %}の参加規約に同意しなければなりません。

#### シークレットの特定と正規表現の作成

シークレットをスキャンするために、{% data variables.product.prodname_dotcom %}はシークレットスキャンニングプログラムに含めたいそれぞれのシークレットについて以下の情報を必要とします。

* シークレットの種類に対する、ユニークで人が読める名前。 後にこれを使って、メッセージペイロード中の`Type`値が生成されます。
* このシークレットの種類を見つける正規表現。 できるかぎり正確にしてください。そうすることで、誤検知の数を減らすことができます。
* {% data variables.product.prodname_dotcom %}からのメッセージを受信するエンドポイントのURL。 これは各シークレットの種類ごとにユニークである必要はありません。

この情報をsecret-scanning@github.comに送信してください。

#### シークレットアラートサービスの作成

提供したURLに、パブリックでインターネットからアクセスできるHTTPエンドポイントを作成してください。 パブリックリポジトリで正規表現への一致が見つかった場合、{% data variables.product.prodname_dotcom %}はHTTPの`POST`メッセージをエンドポイントに送信します。

##### エンドポイントに送信されるPOSTの例

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

メッセージのボディはJSONの配列で、以下の内容を持つ1つ以上のオブジェクトを含みます。 複数の一致が見つかった場合には、{% data variables.product.prodname_dotcom %}は複数のシークレットの一致を含む1つのメッセージを送信することがあります。 エンドポイントは、タイムアウトすることなく大量の一致を含むリクエストを処理できなければなりません。

* **Token**: シークレットの一致の値。
* **Type**: 正規表現を特定するために渡されたユニークな名前。
* **URL**: マッチが見つかったパブリックなコミットURL。

#### シークレットアラートサービスへの署名検証の実装

シークレットサービスには署名検証サービスを実装して、受信したメッセージが本当に{% data variables.product.prodname_dotcom %}からのものであり、悪意がないことを保証することを強くおすすめします。

{% data variables.product.prodname_dotcom %}のシークレットスキャンニング公開鍵はhttps://api.github.com/meta/public_keys/secret_scanningから取得でき、`ECDSA-NIST-P256V1-SHA256`アルゴリズムを使ってメッセージを検証できます。

次のメッセージを受信したとして、以下のコードは署名検証の方法を示しています。 このコードはまた、`GITHUB_PRODUCTION_TOKEN`という環境変数に生成されたPATが設定されているものとしています(https://github.com/settings/tokens)。 このトークンには権限が設定されている必要はありません。

**検証エンドポイントに送信されたサンプルのメッセージ**
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
  payload := `[{"token": "some_token", "type": "some_type", "url": "some_url"}]`

  kID := "90a421169f0a406205f1563a953312f0be898d3c7b6c06b681aa86a874555f4a"

  kSig := "MEUCICxTWEpKo7BorLKutFZDS6ie+YFg6ecU7kEA6rUUSJqsAiEA9bK0Iy6vk2QpZOOg2IpBhZ3JRVdwXx1zmgmNAR7Izpc="

  // GitHub公開鍵のリストをフェッチ
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

  // webhookの署名に使われた鍵を見つける
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

  // 公開鍵のデコード
  block, _ := pem.Decode([]byte(pubKey))
  if block == nil {
    fmt.Println("Error parsing PEM block with GitHub public key")
    os.Exit(5)
  }

  // ECDSA公開鍵の生成
  key, err := x509.ParsePKIXPublicKey(block.Bytes)
  if err != nil {
    fmt.Printf("Error parsing DER encoded public key: %s\n", err)
    os.Exit(6)
  }

  // ドキュメントから、これが*ecdsa.PublicKeyであることは分かっている
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

#### シークレットアラートサービスへのシークレットの破棄とユーザ通知の実装

パブリックリポジトリでのシークレットスキャンニングでは、シークレットアラートサービスを拡張して、公開されたシークレットを取り除き、影響されたユーザに通知できます。 これをシークレットアラートサービスへどのように実装するかは実装者に任されていますが、{% data variables.product.prodname_dotcom %}がメッセージを送信したすべてのシークレットは、公開され、侵害されたものと考えることをおすすめします。
