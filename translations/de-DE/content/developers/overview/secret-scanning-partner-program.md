---
title: Partnerprogramm für die Geheimnisüberprüfung
intro: 'Als Dienstanbieter kannst du eine Partnerschaft mit {% data variables.product.prodname_dotcom %} eingehen, um deine geheimen Tokenformate durch die Geheimnisüberprüfung zu sichern, die nach versehentlichen Commits deines geheimen Formats sucht und an den Überprüfungsendpunkt eines Dienstanbieters gesendet werden kann.'
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
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145102804'
---
{% data variables.product.prodname_dotcom %} überprüft Repositorys auf bekannte Geheimnisformate, um die betrügerische Verwendung von Anmeldeinformationen zu verhindern, die versehentlich veröffentlicht wurden. {% data variables.product.prodname_secret_scanning_caps %} wird standardmäßig in öffentlichen Repositorys ausgeführt und kann von Repositoryadministratoren oder Organisationsbesitzern für private Repositorys aktiviert werden. Als Dienstanbieter kannst du eine Partnerschaft mit {% data variables.product.prodname_dotcom %} eingehen, um deine Geheimnisformate in {% data variables.product.prodname_secret_scanning %} einzubeziehen.

Wird in einem öffentlichen Repository eine Übereinstimmung mit deinem Geheimnisformat gefunden, werden Nutzdaten an einen HTTP-Endpunkt deiner Wahl gesendet.

Wird in einem für {% data variables.product.prodname_secret_scanning %} konfigurierten privaten Repository eine Übereinstimmung mit deinem Geheimnisformat gefunden, werden Repositoryadministratoren und Committer benachrichtigt und können das {% data variables.product.prodname_secret_scanning %}-Ergebnis auf {% data variables.product.prodname_dotcom %} anzeigen und verwalten. Weitere Informationen findest du unter [Verwalten von Warnungen aus {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning).

In diesem Artikel wird beschrieben, wie du als Dienstanbieter mit {% data variables.product.prodname_dotcom %} zusammenarbeiten und dem {% data variables.product.prodname_secret_scanning %}-Partnerprogramm beitreten kannst.

## Der {% data variables.product.prodname_secret_scanning %}-Prozess

#### Funktionsweise von {% data variables.product.prodname_secret_scanning %} in einem öffentlichen Repository

Im folgenden Diagramm siehst du eine Zusammenfassung des {% data variables.product.prodname_secret_scanning %}-Prozesses für öffentliche Repositorys, bei dem alle Übereinstimmungen an einen Überprüfungsendpunkt des Dienstanbieters gesendet werden.

![Flussdiagramm: Prozess der Geheimnisüberprüfung und Senden von Übereinstimmungen an den Überprüfungsendpunkt eines Dienstanbieters](/assets/images/secret-scanning-flow.png "{% data variables.product.prodname_secret_scanning_caps %}-Flow")

## Teilnehmen am {% data variables.product.prodname_secret_scanning %}-Programm auf {% data variables.product.prodname_dotcom %}

1. Wende dich zunächst an {% data variables.product.prodname_dotcom %}.
1. Identifiziere die relevanten Geheimnisse, die du überprüfen möchtest, und erstelle reguläre Ausdrücke, um diese zu erfassen.
1. Erstelle für Geheimnisübereinstimmungen in öffentlichen Repositorys einen Benachrichtigungsdienst für Geheimnisse, der Webhooks von {% data variables.product.prodname_dotcom %} mit den Nutzdaten der {% data variables.product.prodname_secret_scanning %}-Nachricht akzeptiert.
1. Implementiere im Benachrichtigungsdienst für Geheimnisse eine Signaturüberprüfung.
1. Implementiere im Benachrichtigungsdienst die Sperrung von Geheimnissen sowie Benutzerbenachrichtigungen.
1. Stelle für falsch positive Ergebnisse Feedback bereit (optional).

### Kontaktieren von {% data variables.product.prodname_dotcom %}

Sende eine E-Mail an <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>, um den Registrierungsvorgang zu beginnen.

Daraufhin erhältst du Informationen zum {% data variables.product.prodname_secret_scanning %}-Programm, und du wirst zur Bestätigung der Nutzungsbedingungen von {% data variables.product.prodname_dotcom %} aufgefordert.

### Identifizieren von Geheimnissen und Erstellen regulärer Ausdrücke

Für eine Geheimnisüberprüfung benötigt {% data variables.product.prodname_dotcom %} die folgenden Informationen für jedes Geheimnis, das im {% data variables.product.prodname_secret_scanning %}-Programm enthalten sein soll:

* Einen eindeutigen lesbaren Name für den Geheimnistyp. Dieser wird später zur Angabe des `Type`-Werts in der Nachrichtennutzlast verwendet.
* Einen regulären Ausdruck für die Suche des Geheimnistyps. Je genauer dieser Ausdruck ist, desto weniger falsch positive Ergebnisse werden später erzeugt.
* Die URL des Endpunkts, an den Nachrichten von {% data variables.product.prodname_dotcom %} gesendet werden. Diese muss nicht für jeden Geheimnistyp eindeutig sein.

Sende diese Informationen an <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>.

### Erstellen eines Benachrichtigungsdiensts für Geheimnisse

Erstelle einen öffentlichen, über das Internet zugänglichen HTTP-Endpunkt unter der bereitgestellten URL. Wird in einem öffentlichen Repository eine Übereinstimmung mit deinem regulären Ausdruck gefunden, sendet {% data variables.product.prodname_dotcom %} an diesen Endpunkt eine HTTP-Nachricht vom Typ `POST`.

#### Beispiel einer POST-Nachricht an deinen Endpunkt

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

Der Nachrichtentext ist ein JSON-Array, das mindestens ein Objekt mit dem nachfolgenden Inhalt enthält. Bei mehreren Übereinstimmungen sendet {% data variables.product.prodname_dotcom %} eine einzelne Nachricht mit mehreren Geheimnisübereinstimmungen. Der Endpunkt sollte Anforderungen mit einer großen Anzahl von Übereinstimmungen ohne Timeout verarbeiten können.

* **Token**: Wert der Geheimnisübereinstimmung.
* **Typ**: Der bereitgestellte eindeutige Name zur Identifikation des regulären Ausdrucks.
* **URL**: Öffentliche Commit-URL, unter der die Übereinstimmung gefunden wurde.

### Implementieren einer Signaturüberprüfung im Benachrichtigungsdienst für Geheimnisse

Es wird dringend empfohlen, im Benachrichtigungsdienst für Geheimnisse eine Signaturüberprüfung zu implementieren. Damit wird sichergestellt, dass die empfangenen Nachrichten wirklich von {% data variables.product.prodname_dotcom %} stammen und nicht bösartig sind.

Du kannst den öffentlichen {% data variables.product.prodname_dotcom %}-Schlüssel für die Geheimnisüberprüfung unter https://api.github.com/meta/public_keys/secret_scanning abrufen und die Nachricht mithilfe des Algorithmus `ECDSA-NIST-P256V1-SHA256` überprüfen.

{% note %}

**Hinweis**: Wenn du eine Anforderung an den oben genannten Endpunkt für den öffentlichen Schlüssel sendest, überschreitest du möglicherweise die Ratenbegrenzung. Um dies zu vermeiden, kannst du entweder, wie in den folgenden Beispielen, ein persönliches Zugriffstoken (ohne Bereichsangabe) oder eine bedingte Anforderung verwenden. Weitere Informationen findest du unter [Erste Schritte mit der REST-API](/rest/guides/getting-started-with-the-rest-api#conditional-requests).

{% endnote %}

Wenn du z. B. die folgende Nachricht erhältst, kannst du die Signaturüberprüfung wie in den Codeausschnitten unten implementieren.
In den Codeausschnitten wird davon ausgegangen, dass du eine Umgebungsvariable namens `GITHUB_PRODUCTION_TOKEN` mit einem generierten persönlichen Zugriffstoken (https://github.com/settings/tokens) festgelegt hast, um eine Überschreitung der Ratenbegrenzung zu vermeiden. Das persönliche Zugriffstoken benötigt keine Bereiche/Berechtigungen.

{% note %}

**Hinweis**: Die Signatur wurde mithilfe des unformatierten Nachrichtentexts generiert. Daher musst du auch für die Signaturüberprüfung den unformatierten Nachrichtentext verwenden, anstatt das JSON-Array zu analysieren und in eine Zeichenfolge umzuwandeln. So verhinderst du, die Nachricht neu ordnen oder Abstände ändern zu müssen.

{% endnote %}

**Beispielnachricht an den Überprüfungsendpunkt**
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

**Beispiel für eine Überprüfung in Go**
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

**Beispiel für eine Überprüfung in Ruby**
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

**Beispiel für eine Überprüfung in JavaScript**
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

### Implementieren der Sperrung von Geheimnissen und von Benutzerbenachrichtigungen im Benachrichtigungsdienst

Für {% data variables.product.prodname_secret_scanning %} in öffentlichen Repositorys kannst du den Benachrichtigungsdienst für Geheimnisse dahingehend erweitern, dass verfügbar gemachte Geheimnisse gesperrt und betroffene Benutzer*innen benachrichtigt werden. Die konkrete Implementierung im Benachrichtigungsdienst bleibt dir überlassen. Doch es wird empfohlen, alle Geheimnisse als öffentlich und kompromittiert zu betrachten, zu denen du eine Nachricht von {% data variables.product.prodname_dotcom %} erhalten hast.

### Bereitstellen von Feedback für falsch positive Ergebnisse

Wir sammeln Feedback zur Gültigkeit aller identifizierten Geheimnisse in Partnerantworten. Wenn du daran teilnehmen möchtest, sende eine E-Mail an <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>.

Die Nachricht, die du von uns zu einem Geheimnis erhältst, besteht aus einem JSON-Array mit dem Token, dem Typbezeichner und der Commit-URL. Informiere uns in deinem Feedback darüber, ob es sich bei dem erkannten Token um echte oder falsche Anmeldeinformationen handelte. Nutze für das Feedback eines der folgenden Formate.

Du kannst das unformatierte Token senden:

```
[
  {
    "token_raw": "The raw token",
    "token_type": "ACompany_API_token",
    "label": "true_positive"
  }
]
```
Du kannst das Token auch in Form eines kryptografischen Hashs des unformatierten Tokens mit SHA-256 bereitstellen:

```
[
  {
    "token_hash": "The SHA-256 hashed form of the raw token",
    "token_type": "ACompany_API_token",
    "label": "false_positive"
  }
]
```
Einige wichtige Punkte:
- Sende uns das Token entweder unformatiert („token_raw“) oder als Hash („token_hash“), nicht beides.
- Verwende zum Erstellen der Hashform des unformatierten Tokens nur SHA-256, keinen anderen Hashalgorithmus.
- Die Bezeichnung gibt an, ob es sich bei dem Token um ein echtes („true_positive“) oder ein falsch positives („false_positive“) Ergebnis handelt. Nur diese beiden Literalzeichenfolgen in Kleinbuchstaben sind zulässig.

{% note %}

**Hinweis:** Das Anforderungstimeout für Partner, die Daten zu falsch positiven Ergebnissen bereitstellen, ist höher (und liegt bei 30 Sekunden). Solltest du ein Timeout höher als 30 Sekunden benötigen, sende eine E-Mail an <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>.

{% endnote %}
