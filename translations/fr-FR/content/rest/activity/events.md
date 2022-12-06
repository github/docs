---
title: Événements
intro: 'L’API Événements est une API en lecture seule pour les événements {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 09ad462fe00e84344bd1f0a33f97380a3f03e656
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064305'
---
Ces événements alimentent les différents flux d’activité sur le site.

L’API Événements peut retourner différents types d’événements déclenchés par l’activité sur {% data variables.product.product_name %}. Pour plus d’informations sur les événements spécifiques que vous pouvez recevoir de l’API Événements, consultez « [{% data variables.product.prodname_dotcom %} Types d’événements](/developers/webhooks-and-events/github-event-types) ». Une API d’événements pour les problèmes de dépôt est également disponible. Pour plus d’informations, consultez « [API Événements de problème](/rest/reference/issues#events) ».

Les événements sont optimisés pour interrogation avec l’en-tête « ETag ». Si aucun nouvel événement n’a été déclenché, vous verrez une réponse « 304 Non modifié » et votre limite de débit actuelle ne changera pas. Il existe également un en-tête « X-Poll-Interval » qui spécifie la fréquence (en secondes) à laquelle vous êtes autorisé à interroger. En cas de charge élevée du serveur, le temps peut augmenter. Respectez l’en-tête.

``` shell
$ curl -I {% data variables.product.api_url_pre %}/users/tater/events
> HTTP/2 200
> X-Poll-Interval: 60
> ETag: "a18c3bded88eb5dbb5c849a489412bf3"

# The quotes around the ETag value are important
$ curl -I {% data variables.product.api_url_pre %}/users/tater/events \
$    -H 'If-None-Match: "a18c3bded88eb5dbb5c849a489412bf3"'
> HTTP/2 304
> X-Poll-Interval: 60
```

Seuls des événements créés au cours des 90 derniers jours seront inclus dans des chronologies. Les événements datant de plus de 90 jours ne sont pas inclus (même si le nombre total d’événements dans la chronologie est inférieur à 300).
