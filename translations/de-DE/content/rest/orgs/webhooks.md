---
title: Organisationswebhooks
allowTitleToDifferFromFilename: true
shortTitle: Webhooks
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 68b043b92589bf1c1b3a6b543168d5b5b8c85118
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066842'
---
## Informationen zur Organisationswebhooks-API

Organisationswebhooks ermöglichen es dir, `POST`-HTTP-Nutzdaten zu empfangen, wenn bestimmte Ereignisse in einer Organisation auftreten. {% data reusables.webhooks.webhooks-rest-api-links %}

Weitere Informationen zu Aktionen, die du abonnieren kannst, findest du unter[{% data variables.product.prodname_dotcom %}-Ereignistypen](/developers/webhooks-and-events/github-event-types).

### Bereiche und Einschränkungen

Alle Aktionen für Organisationswebhooks erfordern, dass der authentifizierte Benutzer ein Administrator der Organisation sein muss, die verwaltet wird. Darüber hinaus benötigen OAuth-Token den `admin:org_hook`-Bereich. Weitere Informationen findest du unter [Bereiche für OAuth-Apps](/developers/apps/scopes-for-oauth-apps).

Um vertrauliche Daten zu schützen, die in Webhook-Konfigurationen vorhanden sein können, erzwingen wir auch die folgenden Zugriffssteuerungsregeln:

- OAuth-Anwendungen können keine Webhooks auflisten, anzeigen oder bearbeiten, die sie nicht erstellt haben.
- Benutzer*innen können Webhooks, die von OAuth-Anwendungen erstellt wurden, nicht auflisten, anzeigen oder bearbeiten.

### Empfangen von Webhooknutzdaten

Damit {% data variables.product.product_name %} Webhooknutzlasten senden kann, muss ein Zugriff auf deinen Server über das Internet möglich sein. Zudem wird dringend empfohlen, SSL zu verwenden, sodass verschlüsselte Nutzdaten über HTTPS gesendet werden können.

Weitere Best Practices findest du in [unserem Leitfaden](/guides/best-practices-for-integrators/).

#### Webhookheader

{% data variables.product.product_name %} sendet mehrere HTTP-Header, um zwischen Ereignistypen und Nutzdatenbezeichnern zu unterscheiden. Details findest du unter [Webhookheader](/webhooks/event-payloads/#delivery-headers).
