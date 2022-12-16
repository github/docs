---
title: Testen von Webhooks
intro: 'Überprüfe deine Webhookübermittlungen auf {% data variables.product.prodname_dotcom %} einschließlich HTTP-Anforderung und Nutzlast sowie der Antwort.'
redirect_from:
  - /webhooks/testing
  - /developers/webhooks-and-events/testing-webhooks
  - /articles/testing-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: 5b9287030169ecac751b407ad915d4fa69bf8182
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145996217'
---
Nachdem du deinen [lokalen Server konfiguriert hast](/webhooks/configuring/), möchtest du vielleicht die Grenzen deines Codes austesten. Zu diesem Zweck bietet die Webhookansicht von GitHub einige Tools zum Testen deiner bereitgestellten Nutzdaten.

## Auflisten der letzten Übermittlungen

Jeder Webhook verfügt über einen eigenen Abschnitt „Letzte Übermittlungen“, der auf einen Blick zeigt, ob eine Übermittlung erfolgreich war (grünes Häkchen) oder fehlgeschlagen ist (rotes X). Du kannst auch feststellen, wann die einzelnen Übermittlungsversuche stattgefunden haben.

{% data variables.product.product_name %} speichert ein Protokoll jeder Webhookübermittlung für {% ifversion fpt or ghec %} 30 {% else %} 8 {% endif %}Tage.

![Ansicht „Aktuelle Übermittlungen“](/assets/images/webhooks_recent_deliveries.png)

## Untersuchen der Ergebnisse

Indem du eine einzelne Übermittlung erweiterst, kannst du *genau* sehen, welche Informationen GitHub an deinen Server zu senden versucht. Dies schließt sowohl die HTTP-Anforderung als auch die Antwort ein.

### Anforderung

Die Ansicht zur Webhookübermittlung gibt Auskunft darüber, welche Header von GitHub gesendet wurden.
Sie enthält außerdem Details zu den JSON-Nutzdaten.

![Anzeigen einer Nutzdatenanforderung](/assets/images/payload_request_tab.png)

### Antwort

Die Registerkarte „Antwort“ zeigt, wie dein Server geantwortet hat, nachdem er die Nutzdaten von GitHub empfangen hat. Dies schließt den Statuscode, die Header und alle zusätzlichen Daten innerhalb des Antworttexts ein.

![Anzeigen einer Nutzlastantwort](/assets/images/payload_response_tab.png)
