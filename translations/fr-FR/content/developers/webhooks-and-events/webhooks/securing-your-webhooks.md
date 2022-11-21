---
title: Sécurisation de vos webhooks
intro: 'Vérifiez que votre serveur reçoit uniquement les demandes {% data variables.product.prodname_dotcom %} attendues pour des raisons de sécurité.'
redirect_from:
  - /webhooks/securing
  - /developers/webhooks-and-events/securing-your-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: c3597365ae7cf9f96375201d6938c4f6675a8eae
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147707478'
---
Une fois que votre serveur est configuré pour recevoir des charges utiles, il écoute toutes les charges utiles envoyées au point de terminaison que vous avez configuré. Pour des raisons de sécurité, vous pouvez limiter les demandes à celles envoyées par GitHub. Il existe plusieurs moyens de le faire, par exemple, vous pouvez choisir d’autoriser les demandes envoyées par l’adresse IP de GitHub, mais la méthode la plus facile est de configurer un jeton secret et de valider les informations.

{% data reusables.webhooks.webhooks-rest-api-links %}

## Définition de votre jeton secret

Vous devez configurer votre jeton secret à deux endroits : GitHub et votre serveur.

Pour définir votre jeton sur GitHub :

1. Accédez au dépôt dans lequel vous avez configuré votre webhook.
2. Remplissez la zone de texte Secret. Utilisez une chaîne aléatoire avec une forte entropie (par exemple, prenez la sortie de `ruby -rsecurerandom -e 'puts SecureRandom.hex(20)'` dans le terminal).
![Champ du jeton de secret du webhook](/assets/images/webhook_secret_token.png)
3. Cliquez sur **Mettre à jour le webhook**.

Ensuite, configurez une variable d’environnement sur votre serveur pour stocker ce jeton. En règle générale, ça revient à simplement exécuter :

```shell
$ export SECRET_TOKEN=<em>your_token</em>
```

Ne codez **jamais** en dur le jeton dans votre application !

## Validation des charges utiles provenant de GitHub

Quand votre jeton secret est défini, {% data variables.product.product_name %} l’utilise pour créer une signature de hachage avec chaque charge utile. Cette signature de hachage est ajoutée aux en-têtes de chaque demande sous la forme `x-hub-signature-256`.

{% ifversion fpt or ghes or ghec %} {% note %}

**Remarque :** Pour la compatibilité descendante, nous ajoutons également l’en-tête `x-hub-signature` qui est généré avec la fonction de hachage SHA-1. Si possible, nous vous recommandons d’utiliser l’en-tête `x-hub-signature-256` pour améliorer la sécurité. L’exemple ci-dessous montre l’utilisation de l’en-tête `x-hub-signature-256`.

{% endnote %} {% endif %}

Par exemple, si vous avez un serveur de base qui écoute des webhooks, il peut être configuré de la façon suivante :

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  request.body.rewind
  push = JSON.parse(request.body.read)
  "I got some JSON: #{push.inspect}"
end
```

L’intention est de calculer un hachage en utilisant votre `SECRET_TOKEN` et de vérifier que le résultat correspond au hachage de {% data variables.product.product_name %}. {% data variables.product.product_name %} utilise un code de hachage hexadécimal HMAC pour calculer le hachage, vous pouvez donc reconfigurer votre serveur pour qu’il ressemble un peu à ceci :

``` ruby
post '/payload' do
  request.body.rewind
  payload_body = request.body.read
  verify_signature(payload_body)
  push = JSON.parse(payload_body)
  "I got some JSON: #{push.inspect}"
end

def verify_signature(payload_body)
  signature = 'sha256=' + OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new('sha256'), ENV['SECRET_TOKEN'], payload_body)
  return halt 500, "Signatures didn't match!" unless Rack::Utils.secure_compare(signature, request.env['HTTP_X_HUB_SIGNATURE_256'])
end
```

{% note %}

**Remarque :** Les charges utiles de webhook peuvent contenir des caractères Unicode. Si votre implémentation de langage et de serveur spécifie un codage de caractères, vérifiez que vous traitez la charge utile en UTF-8.

{% endnote %}

Vos implémentations de langage et de serveur peuvent différer de cet exemple de code. Toutefois, il y a un certain nombre de choses très importantes à souligner :

* Quelle que soit l’implémentation que vous utilisez, la signature de hachage commence par `sha256=`, et utilise la clé de votre jeton secret et le corps de votre charge utile.

* L’utilisation d’un opérateur `==` brut n’est **pas recommandée**. Une méthode comme [`secure_compare`][secure_compare] effectue une comparaison de chaînes de « temps constant », qui permet d’atténuer certaines attaques de minutage contre les opérateurs d’égalité classiques.

[secure_compare]: https://rubydoc.info/github/rack/rack/main/Rack/Utils:secure_compare
