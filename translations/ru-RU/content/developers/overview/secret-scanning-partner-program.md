---
title: Партнерская программа сканирования секретов
intro: 'Поставщики услуг могут сотрудничать с {% data variables.product.prodname_dotcom %} для защиты форматов секретных маркеров с помощью проверки секретов, в рамках которой выполняется поиск случайных фиксаций в формате секрета, результаты которого можно отправить в конечную точку проверки поставщика услуг.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094596'
---
{% data variables.product.prodname_dotcom %} сканирует репозитории известных форматов секретов, чтобы предотвратить случайное использование учетных данных, которые были зафиксированы случайно. {% data variables.product.prodname_secret_scanning_caps %} по умолчанию выполняется в общедоступных репозиториях и может быть активировано в частных репозиториях администраторами репозитория или владельцами организации. Как поставщик услуг вы можете сотрудничать с {% data variables.product.prodname_dotcom %}, чтобы форматы секретов были включены в наше {% data variables.product.prodname_secret_scanning %}.

При обнаружении соответствия формата секрета в общедоступном репозитории полезные данные передаются в конечную точку HTTP на ваше усмотрение.

При обнаружении соответствия формата секрета в частном репозитории, настроенном для {% data variables.product.prodname_secret_scanning %}, об этом оповещаются администраторы репозитория и средство фиксации, которые могут просматривать результат {% data variables.product.prodname_secret_scanning %} в {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в статье «[Управление оповещениями из {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)».

В этой статье описывается способ сотрудничества с {% data variables.product.prodname_dotcom %} в качестве поставщика услуг и присоединения к партнерской программе {% data variables.product.prodname_secret_scanning %}.

## Процесс {% data variables.product.prodname_secret_scanning %}

#### Принцип работы {% data variables.product.prodname_secret_scanning %} в общедоступном репозитории

На следующей схеме показан процесс {% data variables.product.prodname_secret_scanning %} для общедоступных репозиториев с любыми совпадениями, отправленными в конечную точку проверки поставщика услуг.

![Схема, показывающая процесс сканирования секрета и отправки совпадений в конечную точку проверки поставщика услуг](/assets/images/secret-scanning-flow.png "Поток {% data variables.product.prodname_secret_scanning_caps %}")

## Присоединение программы {% data variables.product.prodname_secret_scanning %} на {% data variables.product.prodname_dotcom %}

1. Чтобы начать процесс, обратитесь к {% data variables.product.prodname_dotcom %}.
1. Определите соответствующие секреты, которые необходимо сканировать, и создайте регулярные выражения для их записи.
1. Для совпадений секретов, найденных в общедоступных репозиториях, создайте службу оповещений о секретах, которая принимает веб-перехватчики из {% data variables.product.prodname_dotcom %}, где содержатся полезные данные сообщения {% data variables.product.prodname_secret_scanning %}.
1. Реализуйте проверку подписи в службе оповещений о секретах.
1. Реализуйте отзыв секретов и уведомление пользователя в службе оповещений о секретах.
1. Предоставьте отзыв о ложноположительных результатах (необязательно).

### Чтобы начать процесс, обратитесь к {% data variables.product.prodname_dotcom %}

Чтобы начать процесс регистрации, отправьте сообщение электронной почты <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>.

Вы получите сведения о программе {% data variables.product.prodname_secret_scanning %}, и перед продолжением необходимо согласиться с условиями участия {% data variables.product.prodname_dotcom %}.

### Определение секретов и создание регулярных выражений

Для сканирования секретов {% data variables.product.prodname_dotcom %} требуются следующие фрагменты информации для каждого секрета, который требуется включить в программу {% data variables.product.prodname_secret_scanning %}:

* Понятное уникальное имя для типа секрета. Мы будем использовать его позже для создания значения `Type` в полезных данных сообщения.
* Регулярное выражение, которое позволяет найти тип секрета. Будьте как можно точнее, так как это сократит число ложноположительных результатов.
* URL-адрес конечной точки, получающей сообщения от {% data variables.product.prodname_dotcom %}. Он не обязательно должен быть уникальным для каждого типа секрета.

Отправьте эти сведения в <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>.

### Создание службы оповещений о секрете

Создайте общедоступную в Интернете конечную точку HTTP по URL-адресу, который вы нам предоставили. Если в общедоступном репозитории обнаружено совпадение регулярного выражения, {% data variables.product.prodname_dotcom %} отправит HTTP-сообщение `POST` в конечную точку.

#### Примеры текста запроса

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

Текст сообщения представляет собой массив JSON, содержащий один или несколько объектов, каждый из которых представляет одно совпадение секретов. Конечная точка должна иметь возможность обрабатывать запросы с большим количеством совпадений без истечения времени ожидания. Ключи для каждого соответствия секрета:

* **токен**: значение совпадения секрета.
* **тип**: уникальное имя, предоставленное для идентификации регулярного выражения.
* **URL-адрес**: общедоступный URL-адрес, в котором найдено совпадение (может быть пустым)
* **источник**: где маркер найден на {% данных variables.product.prodname_dotcom %}.

Список допустимых значений:`source`

* содержимое
* фиксация
* pull_request_description
* pull_request_comment
* issue_description
* issue_comment
* discussion_body
* discussion_comment
* commit_comment
* gist_content
* gist_comment
* неизвестно

### Реализуйте проверку подписи в службе оповещений о секретах

HTTP-запрос к службе также будет содержать заголовки, которые мы настоятельно рекомендуем использовать для проверки сообщений, которые вы получаете, действительно от {% данных variables.product.prodname_dotcom %}, и не являются вредоносными.

Два заголовка HTTP для поиска:

* `GITHUB-PUBLIC-KEY-IDENTIFIER`: какие `key_identifier` следует использовать из нашего API.
* `GITHUB-PUBLIC-KEY-SIGNATURE`: подпись полезных данных.

Открытый ключ сканирования секрета {% data variables.product.prodname_dotcom %} можно получить из https://api.github.com/meta/public_keys/secret_scanning и проверить сообщение с помощью алгоритма `ECDSA-NIST-P256V1-SHA256`. Конечная точка предоставит несколько открытых `key_identifier` ключей. Вы можете определить, какой открытый ключ следует использовать на основе значения `GITHUB-PUBLIC-KEY-IDENTIFIER`.

{% note %}

**Примечание.** При отправке запроса в конечную точку вышеупомянутого открытого ключа можно достигнуть ограничений скорости. Чтобы избежать достижения пределов скорости, можно использовать {% данных variables.product.pat_v1 %} (без необходимых областей){% ifversion pat-v2 %} или {% данных variables.product.pat_v2 %} (требуется только автоматический доступ на чтение общедоступных репозиториев){% endif %}, как показано в примерах ниже, или использовать условный запрос. Дополнительные сведения см. в статье «[Начало работы с REST API](/rest/guides/getting-started-with-the-rest-api#conditional-requests)».

{% endnote %}

{% note %}

**Примечание:** подпись была создана с помощью необработанного текста сообщения. Поэтому так важно для проверки подписи использовать необработанный текст сообщения, а не синтаксический анализ и преобразование JSON в строку, чтобы избежать изменения содержимого сообщения или изменения интервала.

{% endnote %}

**Пример HTTP POST, отправленный для проверки конечной точки**

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

**Примечание.** Идентификатор ключа и подпись из примера полезных данных являются производными от тестового ключа.
Открытый ключ для них:

```
-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEsz9ugWDj5jK5ELBK42ynytbo38gP
HzZFI03Exwz8Lh/tCfL3YxwMdLjB+bMznsanlhK0RwcGP3IDb34kQDIo3Q==
-----END PUBLIC KEY-----
```

{% endnote %}

В следующих фрагментах кода показано, как можно выполнить проверку подписи.
В примерах кода предполагается, что вы установили переменную среды, вызываемую `GITHUB_PRODUCTION_TOKEN` с созданными [{% данными variables.product.pat_generic %}](https://github.com/settings/tokens) , чтобы избежать достижения пределов скорости. Для {% данных variables.product.pat_generic %} не требуются области и разрешения.

**Пример проверки в Go**
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

**Пример проверки в Ruby**
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

**Пример проверки в JavaScript**
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

### Реализуйте отзыв секретов и уведомление пользователя в службе оповещений о секретах

Для {% data variables.product.prodname_secret_scanning %} в общедоступных репозиториях можно улучшить службу оповещений о секретах, чтобы отозвать предоставленные секреты и уведомить пользователей, на которых это повлияет. Как вы реализуете это в своей службе оповещения о секретах зависит от вас. Рекомендуется учитывать все секреты, о которых {% data variables.product.prodname_dotcom %} отправляет вам сообщения как общедоступные и скомпрометированные.

### Отправка отзыва о ложноположительных результатах

Мы собираем отзывы о допустимости обнаруженных отдельных секретах в ответах партнера. Если вы хотите принять участие в этом, отправьте нам письмо по адресу <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>.

При передаче вам секретов мы отправляем массив JSON с каждым элементом, содержащим маркер, идентификатор типа и URL-адрес фиксации. При передаче нам вашего отзыва вы отправляете нам сведения о том, является ли обнаруженный маркер реальными или ложными учетными данными. Мы принимаем отзывы в следующих форматах.

Вы можете отправить нам необработанный маркер:

```
[
  {
    "token_raw": "The raw token",
    "token_type": "ACompany_API_token",
    "label": "true_positive"
  }
]
```
Вы также можете указать маркер в хэшированных формах после выполнения одностороннего криптографического хэша необработанного маркера с помощью SHA-256:

```
[
  {
    "token_hash": "The SHA-256 hashed form of the raw token",
    "token_type": "ACompany_API_token",
    "label": "false_positive"
  }
]
```
Некоторые важные моменты:
- Вы должны отправить нам либо необработанную форму маркера ("token_raw"), либо хэшированную форму ("token_hash"), но не обе одновременно.
- Для хэшированной формы необработанного маркера вы можете использовать только SHA-256 для хэширования маркера, а не любой другой хэш-алгоритм.
- Метка указывает на то, является ли маркер истинноположительным ("true_positive") или ложноположительным результатом ("false_positive"). Допускаются только эти две строки литерала в нижнем регистре.

{% note %}

**Примечание:** для партнеров, которые предоставляют данные о ложноположительных результатах, наше время ожидания запроса должно быть установлено выше (т. е. 30 секунд). Если вам требуется время ожидания, превышающее 30 секунд, отправьте нам сообщение по адресу <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>.

{% endnote %}
