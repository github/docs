---
title: webhooks
intro: L’API webhooks vous permet de créer et de gérer des webhooks pour vos référentiels.
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
children:
  - /repo-config
  - /repo-deliveries
  - /repos
redirect_from:
  - /rest/reference/webhooks
ms.openlocfilehash: 9216b892bbc19752266cea22d88bec655363ecaf
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882342'
---
Les webhooks de référentiel vous permettent de recevoir des charges utiles HTTP `POST` chaque fois que certains événements se produisent dans un référentiel. {% data reusables.webhooks.webhooks-rest-api-links %}

Si vous souhaitez configurer un webhook unique pour recevoir des événements de tous les référentiels de votre organisation, consultez la documentation de notre API pour les [Webhooks d’organisation](/rest/reference/orgs#webhooks).

Outre l’API REST, {% data variables.product.prodname_dotcom %} peut également servir de hub [PubSubHubbub](#pubsubhubbub) pour les référentiels.

## Réception de webhooks

Pour que {% data variables.product.product_name %} envoie des charges utiles de webhook, votre serveur doit être accessible à partir d’Internet. Nous vous suggérons également vivement d’utiliser SSL afin que nous puissions envoyer des charges utiles chiffrées via HTTPS.

### En-têtes de webhook

{% data variables.product.product_name %} envoie plusieurs en-têtes HTTP pour différencier les types d’événements et les identificateurs de charge utile. Consultez [En-têtes de webhook](/developers/webhooks-and-events/webhook-events-and-payloads#delivery-headers) pour plus de détails.

## PubSubHubbub

GitHub peut également servir de hub [PubSubHubbub](https://github.com/pubsubhubbub/PubSubHubbub) pour tous les référentiels. PSHB est un protocole de publication/abonnement simple qui permet aux serveurs de s’inscrire pour recevoir des mises à jour lorsqu’une rubrique est mise à jour. Les mises à jour sont envoyées avec une requête HTTP POST à une URL de rappel.
Les URL de rubrique pour les pushs d’un référentiel GitHub sont au format suivant :

`https://github.com/{owner}/{repo}/events/{event}`

L’événement peut être n’importe quel événement de webhook disponible. Pour plus d’informations, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhook-events-and-payloads) ».

### Format de la réponse

Le format par défaut est ce que [les hooks post-réception existants doivent attendre](/post-receive-hooks/) : un corps JSON envoyé en tant que paramètre `payload` dans un POST.  Vous pouvez également spécifier de recevoir le corps JSON brut avec un en-tête `Accept` ou une extension `.json`.

    Accept: application/json
    https://github.com/{owner}/{repo}/events/push.json

### URL de rappel

Les URL de rappel peuvent utiliser le protocole `http://`.

    # Send updates to postbin.org
    http://postbin.org/123

### Abonnement

Le point de terminaison PubSubHubbub de GitHub est : `{% data variables.product.api_url_code %}/hub`. Une requête réussie avec curl ressemble à :

``` shell
curl -u "user" -i \
  {% data variables.product.api_url_pre %}/hub \
  -F "hub.mode=subscribe" \
  -F "hub.topic=https://github.com/{owner}/{repo}/events/push" \
  -F "hub.callback=http://postbin.org/123"
```

Les requêtes PubSubHubbub peuvent être envoyées plusieurs fois. Si le hook existe déjà, il sera modifié en fonction de la requête.

#### Paramètres

Nom | Type | Description
-----|------|--------------
``hub.mode``|`string` | **Requis**. `subscribe` ou `unsubscribe`.
``hub.topic``|`string` |**Requis**.  URI du référentiel GitHub auquel s’abonner.  Le chemin d’accès doit être au format `/{owner}/{repo}/events/{event}`.
``hub.callback``|`string` | URI pour recevoir les mises à jour de la rubrique.
``hub.secret``|`string` | Clé secrète partagée qui génère une signature de hachage du contenu du corps sortant.  Vous pouvez vérifier qu’une transmission de type push provient de GitHub en comparant le corps de la requête brute au contenu de {% ifversion fpt or ghes or ghec %} `X-Hub-Signature` ou `X-Hub-Signature-256`des en-têtes{% elsif ghae %}`X-Hub-Signature-256` en-tête{% endif %}. Pour plus d’informations, consultez la [documentation PubSubHubbub](https://pubsubhubbub.github.io/PubSubHubbub/pubsubhubbub-core-0.4.html#authednotify).
