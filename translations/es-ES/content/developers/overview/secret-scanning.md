---
title: Escaneo de secretos
intro: 'Como proveedor de servicios, puedes asociarte con {% data variables.product.prodname_dotcom %} para que se aseguren nuestros formatos de token secretos a través de un escaneo de secretos, el cual busca las confirmaciones accidentales de tus formatos secretos y puede enviarse a la terminal de verificación de un proveedor de servicios.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /partnerships/token-scanning/
  - /partnerships/secret-scanning
versions:
  free-pro-team: '*'
topics:
  - API
---

{% data variables.product.prodname_dotcom %} escanea los repositorios en busca de formatos secretos para prevenir el uso fraudulento de las credenciales que se confirmaron por accidente. El {% data variables.product.prodname_secret_scanning_caps %} ocurre predeterminadamente en los repositorios públicos y los administradores de repositorio o propietarios de la organización pueden habilitarlo en los repositorios privados. Como proveedor de servicios, puedes asociarte con {% data variables.product.prodname_dotcom %} para que tus formatos de secreto se incluyan en nuestro {% data variables.product.prodname_secret_scanning %}.

Cuando se encuentra una coincidencia de tu formato secreto en un repositorio público, se envía una carga útil a una terminal HTTP de tu elección.

Cuando se encuentra una coincidencia de tu formato de secreto en un repositorio privado, la cual esté configurada para el {% data variables.product.prodname_secret_scanning %}, entonces los administradores del repositorio y el confirmante recibirán una alerta y podrán ver y administrar el resultado del {% data variables.product.prodname_secret_scanning %} en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "[Administrar alertas de {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)".

Este artículo describe la forma en la que puedes asociarte con {% data variables.product.prodname_dotcom %} como proveedor de servicios y unirte al programa asociado del {% data variables.product.prodname_secret_scanning %}.

### El proceso del {% data variables.product.prodname_secret_scanning %}

##### Cómo funciona el {% data variables.product.prodname_secret_scanning %} en un repositorio público

El siguiente diagrama resume el proceso del {% data variables.product.prodname_secret_scanning %} para los repositorios públicos y muestra como cualquier coincidencia se envía a la terminal de verificación de un proveedor de servicios.

![Diagrama de flujo que muestra el proceso de escaneo para un secreto y el envío de coincidencias a una terminal de verificación del proveedor de servicios](/assets/images/secret-scanning-flow.png "Flujo del {% data variables.product.prodname_secret_scanning_caps %}")

### Unirse al programa del {% data variables.product.prodname_secret_scanning %} en {% data variables.product.prodname_dotcom %}

1. Contacta a {% data variables.product.prodname_dotcom %} para iniciar el proceso.
1. Identifica los secretos relevantes que quieres escanear y crea expresiones regulares para capturarlos.
1. Para las coincidencias de secretos que se encuentran en los repositorios públicos, crea un servicio de alerta de secretos que acepte webhooks de {% data variables.product.prodname_dotcom %}, el cual contenga la carga últil del mensaje del {% data variables.product.prodname_secret_scanning %}.
1. Implementa la verificación de firmas en tu servicio de alerta secreto.
1. Implementa la revocación de secretos y las notificaciones al usuario en tu servicio de alerta de secretos.
1. Proporciona retroalimentación para los falsos positivos (opcional).

#### Contacta a {% data variables.product.prodname_dotcom %} para iniciar el proceso

Para iniciar con el proceso de inscripción, manda un correo electrónico a <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>.

Recibirás los detalles del programa del {% data variables.product.prodname_secret_scanning %} y necesitarás aceptar las condiciones de participación de {% data variables.product.prodname_dotcom %} antes de proceder.

#### Identifica tus secretos y crea expresiones regulares

Para escanear tus secretos, {% data variables.product.prodname_dotcom %} necesita la siguiente información de cada secreto que quieras incluir en el programa del {% data variables.product.prodname_secret_scanning %}:

* Un nombre único y legible para las personas para el tipo de secreto. Lo utilizaremos para generar el valor `Type` en la carga útil del mensaje más adelante.
* Una expresión regular que encuentre el tipo de secreto. Sé tan preciso como sea posible, ya que esto reducirá la cantidad de falsos positivos.
* La URL de la terminal que recibe mensajes de {% data variables.product.prodname_dotcom %}. Esto no tiene que ser único para cada tipo de secreto.

Envía esta información a <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>.

#### Crea un servicio de alerta de secretos

Crea una terminal HTTP pública y accesible desde la internet en la URL que nos proporcionaste. Cuando se encuentre una coincidencia de tu expresión regular en un repositorio público, {% data variables.product.prodname_dotcom %} enviará un mensaje HTTP de tipo `POST` a tu terminal.

##### Ejemplo del POST que se envía a tu terminal

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

El cuerpo del mensaje es una matriz de JSON que contiene uno o más objetos con el siguiente contenido. Cuando se encuentran coincidencias múltiples, {% data variables.product.prodname_dotcom %} podría enviar un solo mensaje con más de una coincidencia del secreto. Tu terminal deberá poder gestionar las solicitudes con una gran cantidad de coincidencias sin exceder el tiempo.

* **Token**: El valor de la coincidencia del secreto.
* **Tipo**: El nombre único que proporcionaste para identificar tu expresión regular.
* **URL**: La URL de la confirmación pública en donde se encontró la coincidencia.

#### Implementa la verificación de firmas en tu servicio de alerta de secretos

Te recomendamos que implementes la validación de firmas en tu servicio de alerta de secretos para garantizar que los mensajes que recibes son auténticamente de {% data variables.product.prodname_dotcom %} y no son malintencionados.

Puedes recuperar la llave pública del escaneo de secretos de {% data variables.product.prodname_dotcom %} desde https://api.github.com/meta/public_keys/secret_scanning y validar el mensaje utilizando el algoritmo `ECDSA-NIST-P256V1-SHA256`.

{% note %}

**Nota**: Cuando envías una solicitud a la terminal de la llave pública anterior, podrías llegar a los límites de tasa. Para evitar lelgar a estos límites de tasa, puedes utilizar un token de acceso personal (no se necesitan alcances) de acuerdo con lo que se sugiere en los ejemplos siguientes, o bien, utilizar una solicitud condicional. Para obtener más información, consulta la sección "[Comenzar con la API de REST](/rest/guides/getting-started-with-the-rest-api#conditional-requests)".

{% endnote %}

Asumiendo que recibes el siguiente mensaje, los extractos de código que presentamos a continuación demuestran cómo pudiste realizar la validación de firmas. Los fragmentos de código asumen que configuraste una variable de ambiente llamada `GITHUB_PRODUCTION_TOKEN` con un PAT generado (https://github.com/settings/tokens) para evitar llegar a los límites de tasa. Este PAT no necesita alcances/permisos.

{% note %}

**Nota**: La firma se generó utilizando el cuerpo del mensaje sin procesar. Así que es importante que también utilices el cuerpo del mensaje sin procesar para la validación de la firma en vez de interpretar y convertir en secuencias el JSON, para evitar volver a arreglar dicho mensaje o cambiar los espacios.

{% endnote %}

**Mensaje de ejemplo que se envía a tu terminal de verificación**
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

**Ejemplo de validación en JavaScript**
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

#### Implementa la revocación de secretos y la notificación a usuarios en tu servicio de alerta de secretos

Para el {% data variables.product.prodname_secret_scanning %} en repositorios públicos, puedes ampliar tu servicio de alerta de secretos para que revoque los secretos expuestos y notifique a los usuarios afectados. Depende de ti el cómo implementas esto en tu servicio de alerta de secretos, pero te recomendamos considerar cualquier secreto del cual {% data variables.product.prodname_dotcom %} te envíe mensajes de que es público y está puesto en riesgo.

#### Proporciona retroalimentación sobre los falsos positivos

Recolectamos la retroalimentación sobre la validez de los secretos individuales que se detectan en las respuestas de los socios. Si quieres formar parte, mándanos un correo electrónico a <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>.

Cuando te reportamos los secretos, enviamos un arreglo de JSON con cada elemento que contiene el token, identificador de tipo y URL de confirmación. Cuando envías retroalimentación, nos envías información sobre si el token que se detectó fue una credencial real o falsa. Aceptamos la retroalimentación en los siguientes formatos.

Puedes enviarnos el token sin procesar:

```
[
  {
    "token_raw": "The raw token",
    "token_type": "ACompany_API_token",
    "label": "true_positive"
  }
]
```
También puedes proporcionar el token en forma de hash después de realizar un hash criptográfico de una sola vía para el token sin procesar utilizando SHA-256:

```
[
  {
    "token_hash": "The SHA-256 hashed form of the raw token",
    "token_type": "ACompany_API_token",
    "label": "false_positive"
  }
]
```
Algunos puntos importantes:
- Solo debes enviarnos ya sea la forma sin procesar del token ("token raw") o la forma en hash ("token_hash"), pero no ambas.
- En el caso de la forma en hash del token sin procesar, solo puedes utilizar SHA-256 para crear el hash del token y no algún otro algoritmo.
- La etiqueta indica si un token es un positivo verdadero ("true_positive") o falso ("false_positive"). Solo se permiten estas secuencias en minúsculas.

{% note %}

**Nota:** Nuestro tiempo límite se configura para que sea mayor (es decir, 30 segundos) para los socios que proporcionen datos sobre falsos positivos. Si requieres de un tiempo límite mayor a 30 segundos, envíanos un correo electrónico a <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>.

{% endnote %}
