---
title: 비밀 검사 파트너 프로그램
intro: '서비스 공급자는 {% data variables.product.prodname_dotcom %}와 협력하여 비밀 검색을 통해 비밀 토큰 형식을 보호하도록 할 수 있습니다. 그러면 커밋한 비밀 형식을 검색하고 서비스 공급자의 확인 엔드포인트로 보낼 수 있습니다.'
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
ms.openlocfilehash: 1fcda97f00dd0ab35c0d4da7797ee9f8716b6be8
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094595'
---
{% data variables.product.prodname_dotcom %}는 실수로 커밋된 자격 증명이 사기에 사용되지 않도록 알려진 비밀 형식이 있는지 리포지토리를 검색합니다. 기본적으로 {% data variables.product.prodname_secret_scanning_caps %}은(는) 퍼블릭 리포지토리에서 수행되며, 리포지토리 관리자 또는 조직 소유자가 프라이빗 리포지토리에서 사용하도록 설정할 수 있습니다. 서비스 공급자는 {% data variables.product.prodname_dotcom %}과 협력하여 비밀 형식이 {% data variables.product.prodname_secret_scanning %}에 포함되도록 할 수 있습니다.

비밀 형식의 일치 항목이 퍼블릭 리포지토리에 있으면 선택한 HTTP 엔드포인트로 페이로드가 전송됩니다.

{% data variables.product.prodname_secret_scanning %}에 대해 구성된 프라이빗 리포지토리에서 비밀 형식 일치 항목이 발견되면 리포지토리 관리자와 커밋한 사람이 알림을 받고 {% data variables.product.prodname_dotcom %}에서 {% data variables.product.prodname_secret_scanning %} 결과를 보고 관리할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_secret_scanning %}의 알림 관리](/github/administering-a-repository/managing-alerts-from-secret-scanning)”를 참조하세요.

이 문서에서는 서비스 공급자로 {% data variables.product.prodname_dotcom %}와 협력하는 방법과 {% data variables.product.prodname_secret_scanning %} 파트너 프로그램에 가입하는 방법을 설명합니다.

## {% data variables.product.prodname_secret_scanning %} 프로세스

#### 퍼블릭 리포지토리에서 {% data variables.product.prodname_secret_scanning %}가 작동하는 방식

다음 다이어그램은 서비스 공급자의 확인 엔드포인트로 전송된 모든 일치 항목과 함께 퍼블릭 리포지토리에 대한 {% data variables.product.prodname_secret_scanning %} 프로세스가 요약되어 나와 있습니다.

![비밀을 검색하고 서비스 공급자의 확인 엔드포인트에 일치 항목을 보내는 프로세스를 보여 주는 흐름 다이어그램](/assets/images/secret-scanning-flow.png "{% data variables.product.prodname_secret_scanning_caps %} 흐름")

## {% data variables.product.prodname_dotcom %}에서 {% data variables.product.prodname_secret_scanning %} 프로그램에 조인

1. {% data variables.product.prodname_dotcom %}에 문의하여 이 프로세스를 시작합니다.
1. 검색하려는 관련 비밀을 식별하고 해당 비밀을 캡처하는 정규식을 만듭니다.
1. 퍼블릭 리포지토리에 있는 비밀 일치 항목의 경우 {% data variables.product.prodname_dotcom %}의 웹후크를 허용하는 비밀 알림 서비스를 만듭니다. 이 서비스에는 {% data variables.product.prodname_secret_scanning %} 메시지 페이로드가 포함되어 있습니다.
1. 비밀 알림 서비스에서 서명 확인을 구현합니다.
1. 비밀 알림 서비스에서 비밀 해지 및 사용자 알림을 구현합니다.
1. 가양성(선택 사항)에 대한 피드백을 제공합니다.

### {% data variables.product.prodname_dotcom %}에 문의하여 이 프로세스를 시작합니다.

등록 프로세스를 시작하려면 <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>으로 메일을 보내세요.

{% data variables.product.prodname_secret_scanning %} 프로그램에 대한 세부 정보를 받게 되며 계속 진행하기 전에 {% data variables.product.prodname_dotcom %}의 참여 약관에 동의해야 합니다.

### 비밀 식별 및 정규식 만들기

비밀을 검색하려면 {% data variables.product.prodname_dotcom %}에는 {% data variables.product.prodname_secret_scanning %} 프로그램에 포함하려는 각 비밀에 대해 다음 정보가 필요합니다.

* 사람이 읽을 수 있는, 비밀 형식에 대한 고유한 이름. 이 정보를 사용하여 나중에 메시지 페이로드에서 `Type` 값을 만들 수 있습니다.
* 비밀 형식을 찾는 정규식. 이로 인해 가양성의 수가 줄어들기 때문에 가능한 한 정확해야 합니다.
* {% data variables.product.prodname_dotcom %}에서 메시지를 받는 엔드포인트의 URL. 이 URL은 각 비밀 유형에 대해 고유할 필요는 없습니다.

이 정보를 <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>으로 보냅니다.

### 비밀 경고 서비스 만들기

사용자가 제공한 URL에서 인터넷에 액세스할 수 있는 퍼블릭 HTTP 엔드포인트를 만듭니다. 퍼블릭 리포지토리에서 정규식의 일치 항목이 발견되면 {% data variables.product.prodname_dotcom %}가 엔드포인트에 HTTP `POST` 메시지를 보냅니다.

#### 요청 본문 예제

```json
[
  {
    "token":"NMIfyYncKcRALEXAMPLE",
    "type":"mycompany_api_token",
    "url":"https://github.com/octocat/Hello-World/blob/12345600b9cbe38a219f39a9941c9319b600c002/foo/bar.txt",
    "source":"content"
  }
]
```

메시지 본문은 하나 이상의 개체를 포함하는 JSON 배열이며 각 개체는 단일 비밀 일치를 나타냅니다. 엔드포인트는 시간 제한 없이 많은 수의 일치 항목으로 요청을 처리할 수 있어야 합니다. 각 비밀 일치의 키는 다음과 같습니다.

* **token**: 비밀 일치 값입니다.
* **형식**: 정규식을 식별하기 위해 제공한 고유한 이름입니다.
* **url**: 일치 항목이 발견된 공용 URL(비어 있을 수 있음)
* **원본**: {% 데이터 variables.product.prodname_dotcom %}에서 토큰이 발견된 위치입니다.

유효한 값 `source` 목록은 다음과 같습니다.

* 콘텐츠
* 커밋(commit)
* pull_request_description
* pull_request_comment
* issue_description
* issue_comment
* discussion_body
* discussion_comment
* commit_comment
* gist_content
* gist_comment
* 알 수 없음

### 비밀 알림 서비스에서 서명 확인을 구현합니다.

서비스에 대한 HTTP 요청에는 수신한 메시지가 {% 데이터 variables.product.prodname_dotcom %}에서 온 것이며 악의적이지 않은지 확인하는 데 사용하는 것이 좋습니다.

찾을 두 HTTP 헤더는 다음과 같습니다.

* `GITHUB-PUBLIC-KEY-IDENTIFIER``key_identifier`: API에서 사용할 작업
* `GITHUB-PUBLIC-KEY-SIGNATURE`: 페이로드의 서명

https://api.github.com/meta/public_keys/secret_scanning 에서 {% data variables.product.prodname_dotcom %} 비밀 검사 퍼블릭 키를 검색하고 `ECDSA-NIST-P256V1-SHA256` 알고리즘을 사용하여 메시지의 유효성을 검사할 수 있습니다. 엔드포인트는 여러 공개 `key_identifier` 키를 제공합니다. 의 값 `GITHUB-PUBLIC-KEY-IDENTIFIER`에 따라 사용할 공개 키를 결정할 수 있습니다.

{% note %}

**참고**: 위의 퍼블릭 키 엔드포인트에 요청을 보내면 속도 제한에 도달할 수 있습니다. 속도 제한에 도달하지 않도록 하려면 {% 데이터 variables.product.pat_v1 %}(범위 필요 없음){% ifversion pat-v2 %} 또는 {% 데이터 variables.product.pat_v2 %}(자동 공용 리포지토리 읽기 액세스만 필요){% endif %}를 아래 샘플에 제안된 대로 사용하거나 조건부 요청을 사용할 수 있습니다. 자세한 내용은 “[ 시작](/rest/guides/getting-started-with-the-rest-api#conditional-requests)”을 참조하세요.

{% endnote %}

{% note %}

**참고**: 서명은 원시 메시지 본문을 사용하여 생성되었습니다. 따라서 메시지를 다시 정렬하거나 간격을 변경하지 않도록 JSON을 구문 분석하고 문자열로 변환하는 대신 서명 유효성 검사에 원시 메시지 본문을 사용하는 것도 중요합니다.

{% endnote %}

**엔드포인트를 확인하기 위해 전송된 샘플 HTTP POST**

```http
POST / HTTP/2
Host: HOST
Accept: */*
content-type: application/json
GITHUB-PUBLIC-KEY-IDENTIFIER: f9525bf080f75b3506ca1ead061add62b8633a346606dc5fe544e29231c6ee0d
GITHUB-PUBLIC-KEY-SIGNATURE: MEUCIFLZzeK++IhS+y276SRk2Pe5LfDrfvTXu6iwKKcFGCrvAiEAhHN2kDOhy2I6eGkOFmxNkOJ+L2y8oQ9A2T9GGJo6WJY=
Content-Length: 83

[{"token":"some_token","type":"some_type","url":"some_url","source":"some_source"}]
```

{% note %}

**참고**: 예제 페이로드의 키 ID 및 서명은 테스트 키에서 파생됩니다.
공개 키는 다음과 같습니다.

```
-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEsz9ugWDj5jK5ELBK42ynytbo38gP
HzZFI03Exwz8Lh/tCfL3YxwMdLjB+bMznsanlhK0RwcGP3IDb34kQDIo3Q==
-----END PUBLIC KEY-----
```

{% endnote %}

다음 코드 조각에서는 서명 유효성 검사를 수행하는 방법을 보여 줍니다.
코드 예제에서는 속도 제한에 도달하지 않도록 생성된 [{% 데이터 variables.product.pat_generic %}](https://github.com/settings/tokens)로 호출 `GITHUB_PRODUCTION_TOKEN` 된 환경 변수를 설정했다고 가정합니다. {% 데이터 variables.product.pat_generic %}에는 범위/권한이 필요하지 않습니다.

**Go의 유효성 검사 샘플**
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
  payload := `[{"token":"some_token","type":"some_type","url":"some_url","source":"some_source"}]`

  kID := "f9525bf080f75b3506ca1ead061add62b8633a346606dc5fe544e29231c6ee0d"

  kSig := "MEUCIFLZzeK++IhS+y276SRk2Pe5LfDrfvTXu6iwKKcFGCrvAiEAhHN2kDOhy2I6eGkOFmxNkOJ+L2y8oQ9A2T9GGJo6WJY="

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

**Go의 유효성 검사 샘플**
```ruby
require 'openssl'
require 'net/http'
require 'uri'
require 'json'
require 'base64'

payload = <<-EOL
[{"token":"some_token","type":"some_type","url":"some_url","source":"some_source"}]
EOL

payload = payload

signature = "MEUCIFLZzeK++IhS+y276SRk2Pe5LfDrfvTXu6iwKKcFGCrvAiEAhHN2kDOhy2I6eGkOFmxNkOJ+L2y8oQ9A2T9GGJo6WJY="

key_id = "f9525bf080f75b3506ca1ead061add62b8633a346606dc5fe544e29231c6ee0d"

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

**의 유효성 검사 샘플**
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

### 비밀 알림 서비스에서 비밀 해지 및 사용자 알림을 구현합니다.

퍼블릭 리포지토리의 {% data variables.product.prodname_secret_scanning %}의 경우 비밀 알림 서비스를 개선하여 노출된 비밀을 해지하고 영향을 받는 사용자에게 알릴 수 있습니다. 비밀 알림 서비스에서 이를 구현하는 방법은 사용자에게 달려 있지만 {% data variables.product.prodname_dotcom %}가 퍼블픽 및 손상에 대한 메시지를 보내는 비밀을 고려하는 것이 좋습니다.

### 가양성에 대한 피드백 제공

파트너 응답에서 검색된 개별 비밀의 유효성에 대한 피드백을 수집합니다. 참여하려면 <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>으로 이메일을 보내주세요.

귀하에게 비밀을 보고할 때 토큰, 형식 식별자 및 커밋 URL을 포함하고 있는 각 요소가 포함된 JSON 배열을 보냅니다. 귀하가 피드백을 보낼 때 검색된 토큰이 실제 또는 거짓 자격 증명인지에 대한 정보를 같이 보냅니다. 다음과 같은 형식의 피드백을 수락합니다.

원시 토큰을 보낼 수 있습니다.

```
[
  {
    "token_raw": "The raw token",
    "token_type": "ACompany_API_token",
    "label": "true_positive"
  }
]
```
또한 SHA-256을 사용하여 원시 토큰의 단방향 암호화 해시를 수행한 후 해시된 형식으로 토큰을 제공할 수도 있습니다.

```
[
  {
    "token_hash": "The SHA-256 hashed form of the raw token",
    "token_type": "ACompany_API_token",
    "label": "false_positive"
  }
]
```
몇 가지 중요 사항:
- 토큰의 원시 형식(“token_raw”) 또는 해시된 양식(“token_hash”)만 보내야 하지만 둘 다 보내지는 않습니다.
- 원시 토큰의 해시된 형식의 경우 SHA-256만 사용하여 다른 해시 알고리즘이 아닌 토큰을 해시할 수 있습니다.
- 레이블은 토큰이 진양성(“true_positive”) 또는 가양성(“false_positive”)인지 여부를 나타냅니다. 이러한 소문자 리터럴 문자열 두 개만 허용됩니다.

{% note %}

**참고:** 가양성에 대한 데이터를 제공하는 파트너의 경우 요청 시간 제한이 더 높게(즉, 30초) 설정됩니다. 30초보다 더 높은 시간 제한이 필요한 경우 <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>으로 메일을 보내 주세요.

{% endnote %}
