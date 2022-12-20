---
title: Programme de partenariat d’analyse des secrets
intro: 'En tant que fournisseur de services, vous pouvez collaborer avec {% data variables.product.prodname_dotcom %} pour sécuriser vos formats de jeton secret via une analyse secrète qui recherche les commits accidentels de votre format de secret et peuvent être envoyés au point de terminaison de vérification d’un fournisseur de services.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145102805'
---
{% data variables.product.prodname_dotcom %} analyse les dépôts pour rechercher les formats de secret connus afin d’empêcher l’utilisation frauduleuse d’informations d’identification commitées par erreur. Par défaut, l’{% data variables.product.prodname_secret_scanning_caps %} se produit sur les dépôts publics, et peut être activée sur les dépôts privés par les administrateurs de dépôt ou les propriétaires d’organisation. En tant que fournisseur de services, vous pouvez vous associer à {% data variables.product.prodname_dotcom %} pour ajouter vos formats de secret à notre {% data variables.product.prodname_secret_scanning %}.

Quand une correspondance de votre format de secret est trouvée dans un dépôt public, une charge utile est envoyée au point de terminaison HTTP de votre choix.

Quand une correspondance de votre format de secret est trouvée dans un dépôt privé configuré pour l’{% data variables.product.prodname_secret_scanning %}, les administrateurs du dépôt et le commiteur sont avertis, et peuvent voir et gérer le résultat de l’{% data variables.product.prodname_secret_scanning %} sur {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [Gestion des alertes de l’{% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning) ».

Cet article explique comment vous associer à {% data variables.product.prodname_dotcom %} en tant que fournisseur de services et rejoindre le programme de partenariat d’{% data variables.product.prodname_secret_scanning %}.

## Processus d’{% data variables.product.prodname_secret_scanning %}

#### Comment fonctionne l’{% data variables.product.prodname_secret_scanning %} dans un dépôt public

Le diagramme suivant récapitule le processus d’{% data variables.product.prodname_secret_scanning %} pour les dépôts publics, toutes les correspondances étant envoyées au point de terminaison de vérification d’un fournisseur de services.

![Diagramme de flux montrant le processus d’analyse d’un secret et l’envoi des correspondances au point de terminaison de vérification d’un fournisseur de services](/assets/images/secret-scanning-flow.png "Flux d’{% data variables.product.prodname_secret_scanning_caps %}")

## Adhésion au programme d’{% data variables.product.prodname_secret_scanning %} sur {% data variables.product.prodname_dotcom %}

1. Contactez {% data variables.product.prodname_dotcom %} pour lancer le processus.
1. Identifiez les secrets pertinents que vous voulez analyser et créez des expressions régulières pour les capturer.
1. Pour les correspondances de secret trouvées dans les dépôts publics, créez un service d’alerte de secret qui accepte les webhooks de {% data variables.product.prodname_dotcom %} contenant la charge utile du message d’{% data variables.product.prodname_secret_scanning %}.
1. Implémentez la vérification de signature dans votre service d’alerte de secret.
1. Implémentez la révocation de secret et la notification utilisateur dans votre service d’alerte de secret.
1. Fournissez des commentaires pour les faux positifs (facultatif).

### Contacter {% data variables.product.prodname_dotcom %} pour lancer le processus

Pour lancer le processus d’inscription, envoyez un e-mail à <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>.

Vous recevez ensuite les détails du programme d’{% data variables.product.prodname_secret_scanning %} et devez accepter les conditions de participation de {% data variables.product.prodname_dotcom %} avant de continuer.

### Identifier vos secrets et créer des expressions régulières

Pour rechercher vos secrets, {% data variables.product.prodname_dotcom %} a besoin des informations suivantes pour chaque secret à ajouter au programme d’{% data variables.product.prodname_secret_scanning %} :

* Un nom unique et lisible pour le type de secret. Nous l’utilisons par la suite pour générer la valeur `Type` dans la charge utile du message.
* Expression régulière qui recherche le type de secret. Soyez aussi précis que possible pour réduire le nombre de faux positifs.
* URL du point de terminaison qui reçoit des messages de {% data variables.product.prodname_dotcom %}. N’a pas besoin d’être unique pour chaque type de secret.

Envoyez ces informations à <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>.

### Créer un service d’alerte de secret

Créez un point de terminaison HTTP public accessible sur Internet au niveau de l’URL que vous nous avez fournie. Quand une correspondance de votre expression régulière est trouvée dans un dépôt public, {% data variables.product.prodname_dotcom %} envoie un message HTTP `POST` à votre point de terminaison.

#### Exemple de POST envoyé à votre point de terminaison

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

Le corps du message est un tableau JSON qui contient un ou plusieurs objets avec le contenu suivant. Quand plusieurs correspondances sont trouvées, {% data variables.product.prodname_dotcom %} peut envoyer un seul message avec plusieurs correspondances de secret. Votre point de terminaison doit pouvoir traiter sans délai les demandes contenant un grand nombre de correspondances.

* **Jeton** : valeur de la correspondance du secret.
* **Type** : nom unique que vous avez fourni pour identifier votre expression régulière.
* **URL** : URL de commit publique où la correspondance a été trouvée.

### Implémenter la vérification de signature dans votre service d’alerte de secret

Nous vous recommandons vivement d’implémenter une validation de signature dans votre service d’alerte de secret pour vérifier que les messages que vous recevez proviennent réellement de {% data variables.product.prodname_dotcom %} et ne sont pas malveillants.

Vous pouvez récupérer la clé publique de l’analyse des secrets {% data variables.product.prodname_dotcom %} sur https://api.github.com/meta/public_keys/secret_scanning et valider le message avec l’algorithme `ECDSA-NIST-P256V1-SHA256`.

{% note %}

**Remarque** : quand vous envoyez une demande au point de terminaison de clé publique ci-dessus, vous risquez d’atteindre les limites de débit. Pour l’éviter, vous pouvez utiliser un jeton d’accès personnel (aucune étendue nécessaire) comme suggéré dans les exemples ci-dessous ou utiliser une demande conditionnelle. Pour plus d’informations, consultez « [Bien démarrer avec l’API REST](/rest/guides/getting-started-with-the-rest-api#conditional-requests) ».

{% endnote %}

En supposant que vous recevez le message suivant, les extraits de code ci-dessous montrent comment effectuer la validation de signature.
Les extraits de code supposent que vous avez défini une variable d’environnement appelée `GITHUB_PRODUCTION_TOKEN` avec un jeton PAT généré (https://github.com/settings/tokens) pour éviter d’atteindre les limites de débit. Le jeton PAT n’a besoin ni d’étendues ni d’autorisations.

{% note %}

**Remarque** : La signature a été générée à partir du corps du message brut. Vous devez donc utiliser également le corps du message brut pour la validation de signature, au lieu d’analyser et de stringifier le JSON, pour éviter de réorganiser le message ou de changer l’espacement.

{% endnote %}

**Exemple de message envoyé pour vérifier le point de terminaison**
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

**Exemple de validation dans Go**
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

**Exemple de validation dans Ruby**
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

**Exemple de validation dans JavaScript**
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

### Implémenter la révocation de secret et la notification utilisateur dans votre service d’alerte de secret

Pour l’{% data variables.product.prodname_secret_scanning %} dans les dépôts publics, vous pouvez renforcer votre service d’alerte de secret en lui permettant de révoquer les secrets exposés et d’avertir les utilisateurs affectés. Vous pouvez choisir la façon dont vous implémentez ces fonctionnalités dans votre service d’alerte de secret, mais nous vous recommandons de considérer tous les secrets pour lesquels {% data variables.product.prodname_dotcom %} vous envoie des messages les indiquant comme étant publics et compromis.

### Fournir des commentaires pour les faux positifs

Nous collectons des commentaires sur la validité des secrets individuels détectés dans les réponses des partenaires. Si vous voulez participer, envoyez-nous un e-mail à <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>.

Quand nous vous signalons des secrets, nous envoyons un tableau JSON dont chaque élément contient le jeton, l’identificateur du type et l’URL de commit. Quand vous nous envoyez des commentaires, vous nous indiquez si le jeton détecté correspondait à des informations d’identification réelles ou erronées. Nous acceptons les commentaires dans les formats suivants.

Vous pouvez nous envoyer le jeton brut :

```
[
  {
    "token_raw": "The raw token",
    "token_type": "ACompany_API_token",
    "label": "true_positive"
  }
]
```
Vous pouvez également fournir le jeton haché après avoir appliqué un hachage de chiffrement unidirectionnel du jeton brut avec SHA-256 :

```
[
  {
    "token_hash": "The SHA-256 hashed form of the raw token",
    "token_type": "ACompany_API_token",
    "label": "false_positive"
  }
]
```
Voici quelques points importants :
- Vous devez nous envoyer uniquement la forme brute du jeton (« token_raw ») ou la forme hachée (« token_hash »), mais pas les deux.
- Pour la forme hachée du jeton brut, vous pouvez uniquement utiliser SHA-256 pour hacher le jeton et aucun autre algorithme de hachage.
- L’étiquette indique si le jeton est un vrai positif (« true_positive ») ou un faux positif (« false_positive »). Seules ces deux chaînes littérales en minuscules sont autorisées.

{% note %}

**Remarque :** Notre délai d’expiration de demande est défini sur une valeur supérieure (c’est-à-dire, 30 secondes) pour les partenaires qui fournissent des données sur les faux positifs. Si vous avez besoin d’un délai d’expiration supérieur à 30 secondes, envoyez-nous un e-mail à <a href="mailto:secret-scanning@github.com">secret-scanning@github.com</a>.

{% endnote %}
