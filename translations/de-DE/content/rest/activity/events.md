---
title: Events
intro: 'Die Ereignis-API ist eine schreibgeschützte API für die {% data variables.product.prodname_dotcom %}-Ereignisse.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064306'
---
Diese Ereignisse ermöglichen die verschiedene Aktivitätsströme auf der Website.

Die Ereignis-API kann verschiedene Typen von Ereignissen zurückgeben, die durch Aktivität auf {% data variables.product.product_name %} ausgelöst werden. Weitere Informationen zu bestimmten Ereignissen, die du von der Ereignis-API empfangen kannst, findest du unter [{% data variables.product.prodname_dotcom %}-Ereignistypen](/developers/webhooks-and-events/github-event-types). Eine Ereignis-API für Repository-Issues ist ebenso verfügbar. Weitere Informationen findest du unter [Issue-Ereignis-API](/rest/reference/issues#events).

Ereignisse werden für den Abruf mit dem Header „ETag“ optimiert. Wenn keine neuen Ereignisse ausgelöst wurden, wird die Antwort „304 Not Modified“ angezeigt, und das aktuelle Ratenlimit bleibt unverändert. Es gibt einen „X-Poll-Intervall“-Header, der angibt, wie oft der Abruf erfolgen darf (in Sekunden). In Zeiten hoher Serverauslastung kann dieser Zeitraum erhöht werden. Beachte den Header.

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

Nur Ereignisse, die in den letzten 90 Tagen erstellt wurden, werden in den Zeitachsen eingeschlossen. Ereignisse, die älter als 90 Tage sind, werden nicht einbezogen (auch wenn die Gesamtanzahl der Ereignisse in der Zeitachse kleiner als 300 ist).
