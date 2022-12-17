---
title: Notifications
intro: 'L’API Notifications vous permet de gérer les notifications {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 2d68f2b563578608ab66eafbb055edbe5d88d172
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147064273'
---
## À propos de l’API Notifications

L’API Notifications vous permet de gérer les notifications {% data variables.product.product_name %}. Pour plus d'informations sur les notifications, consultez « [À propos des notifications](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications) ».

Tous les appels de l’API Notifications nécessitent les étendues d’API `notifications` ou `repo`.  Cela permet d’accéder en lecture seule au contenu de certains problèmes et commits. Vous avez toujours besoin de l’étendue `repo` pour accéder aux problèmes et aux commits à partir de leurs points de terminaison respectifs.

Les notifications reviennent sous forme de « threads ».  Un thread contient des informations sur la discussion actuelle d’un problème, d’une demande de tirage ou d’un commit.

Les notifications sont optimisées pour l’interrogation avec l’en-tête `Last-Modified`.  S’il n’y a pas de nouvelles notifications, vous voyez une réponse `304 Not Modified`, qui n’affecte pas votre limite de débit actuelle.  Il y a un en-tête `X-Poll-Interval` qui spécifie la fréquence d’interrogation (en secondes) à laquelle vous avez droit.  En cas de charge élevée du serveur, la durée peut augmenter.  Respectez l’en-tête.

``` shell
# Add authentication to your requests
$ curl -I {% data variables.product.api_url_pre %}/notifications
HTTP/2 200
Last-Modified: Thu, 25 Oct 2012 15:16:27 GMT
X-Poll-Interval: 60

# Pass the Last-Modified header exactly
$ curl -I {% data variables.product.api_url_pre %}/notifications
$    -H "If-Modified-Since: Thu, 25 Oct 2012 15:16:27 GMT"
> HTTP/2 304
> X-Poll-Interval: 60
```

### À propos des raisons de notification

Quand vous récupérez des réponses de l’API Notifications, chaque charge utile a une clé intitulée `reason`. Elle correspond aux événements qui déclenchent une notification.

Voici les `reason` potentielles de réception d’une notification :

Nom de la raison | Description
------------|------------
`assign` | Le problème vous a été attribué.
`author` | Vous avez créé le thread.
`comment` | Vous avez commenté le thread.
`ci_activity` | Une exécution de workflow {% data variables.product.prodname_actions %} que vous avez déclenchée s’est terminée.
`invitation` | Vous avez accepté une invitation à contribuer au dépôt.
`manual` | Vous vous êtes abonné au thread (via un problème ou une demande de tirage).
`mention` | Vous étiez spécifiquement **@mentioned** dans le contenu.
`review_requested` | Vous, ou une équipe dont vous êtes membre, avez été invité à réviser une demande de tirage.{% ifversion fpt or ghec %}
`security_alert` | {% data variables.product.prodname_dotcom %} a découvert une [vulnérabilité de sécurité](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) dans votre dépôt.{% endif %}
`state_change` | Vous avez changé l’état du thread (par exemple, en fermant un problème ou en fusionnant une demande de tirage).
`subscribed` | Vous surveillez le dépôt.
`team_mention` | Vous êtes dans une équipe qui a été mentionnée.

Notez que la `reason` est modifiée en fonction du thread et peut changer si la `reason` d’une notification ultérieure est différente.

Par exemple, si vous êtes l’auteur d’un problème, les notifications suivantes sur ce problème ont la `reason` `author`. Si vous êtes **@mentioned** sur le même problème, les notifications que vous récupérez par la suite ont la `reason` `mention`. La `reason` reste `mention`, même si vous n’êtes jamais rementionné.
