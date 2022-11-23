---
title: webhooks
intro: Mit der Webhooks-API kannst du Webhooks für deine Repositorys erstellen und verwalten.
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882343'
---
Repositorywebhooks ermöglichen es dir, `POST`-HTTP-Nutzdaten zu empfangen, wenn bestimmte Ereignisse in einem Repository auftreten. {% data reusables.webhooks.webhooks-rest-api-links %}

Wenn du einen einzelnen Webhook einrichten möchtest, um Ereignisse aus allen Repositorys deiner Organisation zu empfangen, findest du in der API-Dokumentation für [Organisationswebhooks](/rest/reference/orgs#webhooks) hilfreiche Informationen.

Zusätzlich zur REST-API kann {% data variables.product.prodname_dotcom %} auch als [PubSubHubbub](#pubsubhubbub)-Hub für Repositorys fungieren.

## Empfangen von Webhooknutzdaten

Damit {% data variables.product.product_name %} Webhooknutzlasten senden kann, muss ein Zugriff auf deinen Server über das Internet möglich sein. Zudem wird dringend empfohlen, SSL zu verwenden, sodass verschlüsselte Nutzdaten über das HTTPS gesendet werden können.

### Webhookheader

{% data variables.product.product_name %} sendet mehrere HTTP-Header, um zwischen Ereignistypen und Nutzdatenbezeichnern zu unterscheiden. Details findest du unter [Webhookheader](/developers/webhooks-and-events/webhook-events-and-payloads#delivery-headers).

## PubSubHubbub

GitHub kann auch als [PubSubHubbub](https://github.com/pubsubhubbub/PubSubHubbub)-Hub für alle Repositorys fungieren. PSHB ist ein einfaches Veröffentlichungs- bzw. Abonnementprotokoll, mit dem Server registriert werden können, um im Falle einer Aktualisierung eines Themas Updates zu erhalten. Die Updates werden mit einer HTTP POST-Anforderung an eine Rückruf-URL gesendet.
Themen-URLs für Pushvorgänge eines GitHub-Repositorys haben das folgende Format:

`https://github.com/{owner}/{repo}/events/{event}`

Das Ereignis kann ein beliebiges verfügbares Webhookereignis sein. Weitere Informationen findest du unter [Webhookereignisse und Nutzdaten](/developers/webhooks-and-events/webhook-events-and-payloads).

### Antwortformat

Das Standardformat ist das, was [vorhandene post-receive-Hooks erwarten sollten](/post-receive-hooks/): ein JSON-Textkörper, der als `payload`-Parameter in einer POST-Anforderung gesendet wird.  Du kannst auch angeben, dass der unformatierte JSON-Textkörper entweder mit einem `Accept`-Header oder einer `.json`-Erweiterung empfangen wird.

    Accept: application/json
    https://github.com/{owner}/{repo}/events/push.json

### Rückruf-URLs

Rückruf-URLs können das `http://`-Protokoll verwenden.

    # Send updates to postbin.org
    http://postbin.org/123

### Abonnieren

Der GitHub-PubSubHubbub-Endpunkt ist `{% data variables.product.api_url_code %}/hub`. Eine erfolgreiche Anforderung mit curl sieht wie folgt aus:

``` shell
curl -u "user" -i \
  {% data variables.product.api_url_pre %}/hub \
  -F "hub.mode=subscribe" \
  -F "hub.topic=https://github.com/{owner}/{repo}/events/push" \
  -F "hub.callback=http://postbin.org/123"
```

PubSubHubbub-Anforderungen können mehrmals gesendet werden. Wenn der Hook bereits vorhanden ist, wird er der Anforderung entsprechend geändert.

#### Parameter

Name | type | BESCHREIBUNG
-----|------|--------------
``hub.mode``|`string` | **Erforderlich**. Entweder `subscribe` oder `unsubscribe`
``hub.topic``|`string` |**Erforderlich**.  Dies ist der URI des GitHub-Repositorys, das abonniert werden soll.  Der Pfad muss das Format `/{owner}/{repo}/events/{event}` aufweisen.
``hub.callback``|`string` | Dies ist der URI zum Empfangen der Updates für das Thema.
``hub.secret``|`string` | Dies ist ein freigegebener geheimer Schlüssel, der eine Hashsignatur des ausgehenden Textinhalts generiert.  Du kannst überprüfen, ob ein Push von GitHub stammt, indem du den unformatierten Anforderungstext mit dem Inhalt des {% ifversion fpt or ghes or ghec %}`X-Hub-Signature`- oder `X-Hub-Signature-256`-Headers{% elsif ghae %}`X-Hub-Signature-256`-Headers{% endif %} vergleichst. In der [PubSubHubbub-Dokumentation](https://pubsubhubbub.github.io/PubSubHubbub/pubsubhubbub-core-0.4.html#authednotify) findest du weitere Details.
