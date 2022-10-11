---
title: Escaneo de secretos
intro: 'Como proveedor de servicios, puedes asociarte con {% data variables.product.prodname_dotcom %} para que se aseguren nuestros formatos de token secretos a través de un escaneo de secretos, el cual busca las confirmaciones accidentales de tus formatos secretos y puede enviarse a la terminal de verificación de un proveedor de servicios.'
redirect_from:
  - /partnerships/token-scanning/
  - /partnerships/secret-scanning
versions:
  free-pro-team: '*'
miniTocMaxHeadingLevel: 4
topics:
  - API
---


{% data variables.product.prodname_dotcom %} escanea los repositorios en busca de formatos secretos para prevenir el uso fraudulento de las credenciales que se confirmaron por accidente. El escaneo de secretos ocurre predeterminadamente en los repositorios públicos, y se puede habilitar en los privados por parte de los administradores de dicho repositorio o de los propietarios de la organización. Como proveedor de servicios, puedes asociarte con {% data variables.product.prodname_dotcom %} para que tus formatos secretos se incluyan en nuestro escaneo de secretos.

Cuando se encuentra una coincidencia de tu formato secreto en un repositorio público, se envía una carga útil a una terminal HTTP de tu elección.

Cuando se encuentra una coincidencia de tu formato secreto en un repositorio privado configurado para el escaneo de secretos, entonces se les alerta a los administradores del repositorio y estos pueden ver y administrar los resultados del escaneo de secretos en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "[Administrar alertas del escaneo de secretos](/github/administering-a-repository/managing-alerts-from-secret-scanning)".

{% note %}

**Nota:** El escaneo de secretos para repositorios privados se encuentra actualmente en beta.

{% endnote %}

Este artículo describe cómo puedes asociarte con {% data variables.product.prodname_dotcom %} como un proveedor de servicios y unirte al programa de escaneo de secretos.

### El proceso de escaneo de secretos

##### Cómo funciona el escaneo de secretos en un repositorio público

El siguiente diagrama resume el proceso de escaneo de secretos para los repositorios públicos y cualquier coincidencia se envía a una terminal de verificación de un proveedor de servicios.

![Diagrama de flujo que muestra el proceso de escaneo para un secreto y el envío de coincidencias a una terminal de verificación del proveedor de servicios](/assets/images/secret-scanning-flow.png "Flujo de escaneo de secretos")

### Unirse al programa de escaneo de secretos en {% data variables.product.prodname_dotcom %}

1. Contacta a {% data variables.product.prodname_dotcom %} para iniciar el proceso.
1. Identifica los secretos relevantes que quieres escanear y crea expresiones regulares para capturarlos.
1. Para las coincidencias de secretos que estén en repositorios públicos, crea un servicio de alerta de secretos que acepte webhooks de {% data variables.product.prodname_dotcom %} que contengan la carga útil del mensaje del escaneo de secretos.
1. Implementa la verificación de firmas en tu servicio de alerta secreto.
1. Implementa la revocación de secretos y las notificaciones al usuario en tu servicio de alerta de secretos.

#### Contacta a {% data variables.product.prodname_dotcom %} para iniciar el proceso

Para iniciar con el proceso de inscripción, manda un mensaje de correo electrónico a secret-scanning@github.com.

Recibirás los detalles del programa de escane de secretos, y necesitarás aceptar las condiciones de participación de {% data variables.product.prodname_dotcom %} antes de seguir con el proceso.

#### Identifica tus secretos y crea expresiones regulares

Para escanear en busca de tus secretos, {% data variables.product.prodname_dotcom %} necesita saber los siguientes detalles de cada secreto que quieras incluir en el programa de escaneo de secretos:

* Un nombre único y legible para las personas para el tipo de secreto. Lo utilizaremos para generar el valor `Type` en la carga útil del mensaje más adelante.
* Una expresión regular que encuentre el tipo de secreto. Sé tan preciso como sea posible, ya que esto reducirá la cantidad de falsos positivos.
* La URL de la terminal que recibe mensajes de {% data variables.product.prodname_dotcom %}. Esto no tiene que ser único para cada tipo de secreto.

Envía esta información a secret-scanning@github.com.

#### Crea un servicio de alerta de secretos

Crea una terminal HTTP pública y accesible desde la internet en la URL que nos proporcionaste. Cuando se encuentre una coincidencia de tu expresión regular en un repositorio público, {% data variables.product.prodname_dotcom %} enviará un mensaje HTTP de tipo `POST` a tu terminal.

##### Ejemplo del POST que se envía a tu terminal

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

El cuerpo del mensaje es una matriz de JSON que contiene uno o más objetos con el siguiente contenido. Cuando se encuentran coincidencias múltiples, {% data variables.product.prodname_dotcom %} podría enviar un solo mensaje con más de una coincidencia del secreto.

* **Token**: El valor de la coincidencia del secreto.
* **Tipo**: El nombre único que proporcionaste para identificar tu expresión regular.
* **URL**: La URL de la confirmación pública en donde se encontró la coincidencia.

#### Implementa la verificación de firmas en tu servicio de alerta de secretos

Te recomendamos que implementes la validación de firmas en tu servicio de alerta de secretos para garantizar que los mensajes que recibes son auténticamente de {% data variables.product.prodname_dotcom %} y no son malintencionados.

Puedes recuperar la llave pública del escaneo de secretos de {% data variables.product.prodname_dotcom %} desde https://api.github.com/meta/public_keys/secret_scanning y validar el mensaje utilizando el algoritmo `ECDSA-NIST-P256V1-SHA256`.

Asumiendo que recibes el siguiente mensaje, los extractos de código que presentamos a continuación demuestran cómo pudiste realizar la validación de firmas. El código también asume que configuraste una variable de ambiente llamada `GITHUB_PRODUCTION_TOKEN` con un PAT generado (https://github.com/settings/tokens). El token no necesita que se configure ningún permiso.

**Mensaje de ejemplo que se envía a tu terminal de verificación**
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

**Ejemplo de validación en Go**
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

  if len(os.Getenv("GITHUB_PRODUCTION_TOKEN")) == 0 {
    fmt. Println("Need to define environment variable GITHUB_PRODUCTION_TOKEN")
    os. Exit(1)
  }

  req. Header.Add("Authorization", "Bearer "+os.Getenv("GITHUB_PRODUCTION_TOKEN"))

  resp, err := http. DefaultClient.Do(req)
  if err != nil {
    fmt. Printf("Error requesting GitHub signing keys: %s\n", err)
    os. Exit(2)
  }

  decoder := json. NewDecoder(resp.Body)
  var keys GitHubSigningKeys
  if err := decoder. Decode(&keys); err != nil {
    fmt. Printf("Error decoding GitHub signing key request: %s\n", err)
    os. Exit(3)
  }

  // Find the Key used to sign our webhook
  pubKey, err := func() (string, error) {
    for _, v := range keys. PublicKeys {
      if v. KeyIdentifier == kID {
        return v. Key, nil

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
  key, err := x509.ParsePKIXPublicKey(block.Bytes)
  if err != nil {
    fmt. Printf("Error parsing DER encoded public key: %s\n", err)
    os. Exit(6)
  }

  // Because of documentation, we know it's a *ecdsa.PublicKey
  ecdsaKey, ok := key.(*ecdsa.PublicKey)
  if !ok {
    fmt.
    Exit(7)
  }

  // Parse the Webhook Signature
  parsedSig := asn1Signature{}
  asnSig, err := base64.StdEncoding.DecodeString(kSig)
  if err != nil {
    fmt. Printf("unable to base64 decode signature: %s\n", err)
    os. Exit(8)
  }
  rest, err := asn1.Unmarshal(asnSig, &parsedSig)
  if err != nil || len(rest) != 0 {
    fmt. Printf("Error unmarshalling asn.1 signature: %s\n", err)
    os. Exit(9)
  }

  // Verify the SHA256 encoded payload against the signature with GitHub's Key
  digest := sha256.Sum256([]byte(payload))
  keyOk := ecdsa. Verify(ecdsaKey, digest[:], parsedSig.R, parsedSig.S)

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
  R *big.Int
  S *big.Int
}
```

**Ejemplo de validación en Ruby**
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

#### Implementa la revocación de secretos y la notificación a usuarios en tu servicio de alerta de secretos

Para escanear secretos en los repositorios públicos, puedes ampliar tu servicio de alerta de secretos para revocar los secretos expuestos y notificar a los usuarios afectados. Depende de ti el cómo implementas esto en tu servicio de alerta de secretos, pero te recomendamos considerar cualquier secreto del cual {% data variables.product.prodname_dotcom %} te envíe mensajes de que es público y está puesto en riesgo.
