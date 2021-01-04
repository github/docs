---
title: Varredura secreta
intro: 'Como um provedor de serviço, você pode associar-se ao {% data variables.product.prodname_dotcom %} para proteger os seus formatos de token secretos por varredura de segredos, que pesquisa commits acidentais no seu formato secreto e que pode ser enviado para o ponto de extremidade de verificação de um provedor de serviços.'
redirect_from:
  - /partnerships/token-scanning/
  - /partnerships/secret-scanning
versions:
  free-pro-team: '*'
---


O {% data variables.product.prodname_dotcom %} faz a varredura de repositórios de formatos secretos conhecidos para evitar uso fraudulento de credenciais confirmadas acidentalmente. A verificação secreta acontece por padrão em repositórios públicos e pode ser ativada em repositórios privados por administradores de repositórios ou proprietários de organizações. Como um provedor de serviço, você pode associar-se ao {% data variables.product.prodname_dotcom %} para que seus formatos secretos estejam incluídos em nossa varredura de segredos.

Quando uma correspondência do seu formato secreto é encontrada em um repositório público, uma carga é enviada para um ponto de extremidade HTTP de sua escolha.

Quando uma correspondência do seu formato secreto é encontrada em um repositório privado configurado para varredura de segredos, os administradores do repositório são alertados e podem visualizar e gerenciar os resultados da varredura secreta em {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Gerenciar alertas do varredura de segredos](/github/administering-a-repository/managing-alerts-from-secret-scanning)".

{% note %}

**Observação:** A verificação secreta de repositórios privados encontra-se atualmente em beta.

{% endnote %}

Este artigo descreve como você pode associar-se ao {% data variables.product.prodname_dotcom %}  como um provedor de serviço e participar do programa de varredura secreto.

### O processo de varredura de segredo

##### Como funciona a varredura de segredo em um repositório público

O diagrama a seguir resume o processo de varredura de segredo de repositórios públicos, com quaisquer correspondências enviadas para o ponto de extremidade de verificação de um provedor de serviços.

![Diagrama do fluxo que mostra o processo de varredura de um segredo e envio de correspondências para o ponto de extremidade de verificação de um provedor de serviços](/assets/images/secret-scanning-flow.png "Fluxo de varredura de segredo")

### Associar-se ao programa de varredura secreto em {% data variables.product.prodname_dotcom %}

1. Entre em contato com {% data variables.product.prodname_dotcom %} para dar início ao processo.
1. Identifique os segredos relevantes cuja varredura você deseja realizar e crie expressões regulares para capturá-los.
1. Para correspondências secretas encontradas em repositórios públicos, crie um serviço de alerta secreto que aceita webhooks do {% data variables.product.prodname_dotcom %}, que contêm a carga da mensagem da varredura de segredo.
1. Implemente a verificação de assinatura em seu serviço de alerta secreto.
1. Implemente revogação do segredo e notificação do usuário no seu serviço de alerta secreto.

#### Entre em contato com {% data variables.product.prodname_dotcom %} para dar início ao processo

Para iniciar o processo de inscrição, envie um e-mail para secret-scanning@github.com.

Você receberá os detalhes sobre o programa de verificação secreta e deverá concordar com os termos de participação de {% data variables.product.prodname_dotcom %} antes de prosseguir.

#### Identifique seus segredos e crie expressões regulares

Para fazer a varredura dos seus segredos, o {% data variables.product.prodname_dotcom %} precisa das seguintes informações para cada segredo que você desejar incluir no programa de varredura de segredo:

* Um nome único e legível para o tipo do segredo. Nós vamos usá-lo para gerar o valor `Tipo` na carga da mensagem posteriormente.
* Uma expressão regular que encontra o tipo do segredo. Seja o mais preciso possível, pois isso reduzirá o número de falsos positivos.
* A URL do ponto de extremidade que recebe mensagens de {% data variables.product.prodname_dotcom %}. Isso não precisa ser único para cada tipo de segredo.

Envie esta informação para o secret-scanning@github.com.

#### Crie um serviço de alerta secreto

Crie um ponto de extremidade HTTP público e acessível à internet na URL que você nos forneceu. Quando uma correspondência de sua expressão regular é encontrada em um repositório público, o {% data variables.product.prodname_dotcom %} enviará uma mensagem HTTP de `POST` para o seu ponto de extremidade.

##### Exemplo de POST enviado para seu ponto de extremidade

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

O corpo da mensagem é um array do JSON que contém um ou mais objetos com o seguinte conteúdo. Quando várias correspondências forem encontradas, o {% data variables.product.prodname_dotcom %} pode enviar uma única mensagem com mais de uma correspondência secreta. Seu ponto de extremidade deve ser capaz de lidar com solicitações com um grande número de correspondências sem exceder o tempo.

* **Token**: O valor da correspondência secreta.
* **Tipo**: O nome único que você forneceu para identificar sua expressão regular.
* **URL**: A URL de commit pública onde a correspondência foi encontrada.

#### Implemente a verificação de assinatura em seu serviço de alerta secreto

É altamente recomendável que você implemente a validação da assinatura no seu serviço de alerta de segredo para garantir que as mensagens que você recebe sejam genuinamente de {% data variables.product.prodname_dotcom %} e não sejam maliciosas.

Você pode recuperar a chave pública de da varredura secreta do segredo do {% data variables.product.prodname_dotcom %} em https://api.github.com/meta/public_keys/secret_scanning e validar a mensagem usando o algoritmo `ECDSA-NIST-P256V1-SHA256`.

Supondo que você receba a mensagem a seguir, os trechos de código abaixo demonstram como você poderia efetuar a validação da assinatura. O código também assume que você definiu uma variável de ambiente denominada `GITHUB_PRODUCTION_TOKEN` com um PAT gerado (https://github.com/settings/tokens). O token não precisa de nenhuma permissão definida.

**Mensagem de exemplo enviada para verificar o ponto de extremidade**
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

**Exemplo de validação em Go**
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
  req, err := http. NewRequest("GET", "https://api.github.com/meta/public_keys/token_scanning", nil)
  if err != nil {
    fmt. Printf("Error preparing request: %s\n", err)
    os. Exit(1)
  }

  if len(os. Getenv("GITHUB_PRODUCTION_TOKEN")) == 0 {
    fmt. Println("Need to define environment variable GITHUB_PRODUCTION_TOKEN")
    os. Exit(1)
  }

  req. Header. Add("Authorization", "Bearer "+os. Getenv("GITHUB_PRODUCTION_TOKEN"))

  resp, err := http. DefaultClient. Do(req)
  if err != nil {
    fmt. Printf("Error requesting GitHub signing keys: %s\n", err)
    os. Exit(2)
  }

  decoder := json. NewDecoder(resp. Body)
  var keys GitHubSigningKeys
  if err := decoder. Decode(&keys); err != nil {
    fmt. Printf("Error decoding GitHub signing key request: %s\n", err)
    os. Exit(3)
  }

  // Find the Key used to sign our webhook
  pubKey, err := func() (string, error) {
    for _, v := range keys. PublicKeys {
      if v.KeyIdentifier == kID {
        return v.Key, nil

      }
    }
    return "", errors. New("specified key was not found in GitHub key list")
  }()

  if err != nil {
    fmt. Printf("Error finding GitHub signing key: %s\n", err)
    os. Exit(4)
  }

  // Decode the Public Key
  block, _ := pem.Decode([]byte(pubKey))
  if block == nil {
    fmt. Println("Error parsing PEM block with GitHub public key")
    os. Exit(5)
  }

  // Create our ECDSA Public Key
  key, err := x509. ParsePKIXPublicKey(block. Bytes)
  if err != nil {
    fmt. Printf("Error parsing DER encoded public key: %s\n", err)
    os. Exit(6)
  }

  // Because of documentation, we know it's a *ecdsa. PublicKey
  ecdsaKey, ok := key.(*ecdsa. PublicKey)
  if !ok {
    fmt.
    Exit(7)
  }

  // Parse the Webhook Signature
  parsedSig := asn1Signature{}
  asnSig, err := base64. StdEncoding. DecodeString(kSig)
  if err != nil {
    fmt. Printf("unable to base64 decode signature: %s\n", err)
    os. Exit(8)
  }
  rest, err := asn1. Unmarshal(asnSig, &parsedSig)
  if err != nil || len(rest) != 0 {
    fmt. Printf("Error unmarshalling asn.1 signature: %s\n", err)
    os. Exit(9)
  }

  // Verify the SHA256 encoded payload against the signature with GitHub's Key
  digest := sha256. Sum256([]byte(payload))
  keyOk := ecdsa. Verify(ecdsaKey, digest[:], parsedSig. R, parsedSig. S)

  if keyOk {
    fmt.
  Println("the payload is invalid :(")
    os. Exit(10)
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
  R *big. Int
  S *big. Int
}
```

**Exemplo de validação no Ruby**
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

#### Implemente revogação do segredo e notificação do usuário no seu serviço de alerta secreto

Para a verificação de segredo de repositórios públicos, é possível melhorar o serviço de alerta de segredo para revogar os segredos expostos e notificar os usuários afetados. Você define como implementa isso no seu serviço de alerta de segredo, mas recomendamos considerar qualquer segredo que {% data variables.product.prodname_dotcom %} envie mensagens de que é público e que está comprometido.
