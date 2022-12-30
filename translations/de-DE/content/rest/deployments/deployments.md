---
title: Bereitstellungen
intro: Mit der Bereitstellungs-API kannst du Bereitstellungen und Umgebungen erstellen und löschen.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 59567f92afddb8941005146a3fa92fd20549fa61
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147687052'
---
## Informationen zur Bereitstellungs-API

Bereitstellungen sind Anforderungen, mit denen einer bestimmter Verweis (Branch, SHA, Tag) bereitgestellt werden kann. GitHub sendet ein [-`deployment`Ereignis](/developers/webhooks-and-events/webhook-events-and-payloads#deployment), auf das externe Dienste bei der Erstellung neuer Bereitstellungen lauschen und reagieren können. Mit Bereitstellungen können Entwickler*innen und Organisationen lose gekoppelte Tools auf Basis von Bereitstellungen erstellen, ohne sich über die Implementierungsdetails der Bereitstellung verschiedener Arten von Anwendungen Gedanken machen zu müssen (z. B. Web, nativ).

Mit Bereitstellungsstatus können externe Dienste Bereitstellungen mit dem Status `error`, `failure`, `pending`, `in_progress`, `queued` oder `success` kennzeichnen, den Systeme nutzen können, die auf [-`deployment_status`Ereignisse](/developers/webhooks-and-events/webhook-events-and-payloads#deployment_status) lauschen.

Bereitstellungsstatus können optional auch eine `description` und eine `log_url` enthalten. Dies wird dringend empfohlen, da sie Bereitstellungsstatus nützlicher machen. Die `log_url` ist die vollständige URL der Bereitstellungsausgabe, und bei der `description` handelt es sich um eine allgemeine Zusammenfassung der Ereignisse in der Bereitstellung.

GitHub sendet `deployment`- und `deployment_status`-Ereignisse, wenn neue Bereitstellungen und Bereitstellungsstatus erstellt werden. Dank dieser Ereignisse können Drittanbieterintegrationen Bereitstellungsanforderungen empfangen und darauf antworten und den Status einer Bereitstellung aktualisieren, wenn Fortschritte gemacht werden.

Nachfolgend findest du ein einfaches Sequenzdiagramm zur Funktionsweise dieser Interaktionen.

```
+---------+             +--------+            +-----------+        +-------------+
| Tooling |             | GitHub |            | 3rd Party |        | Your Server |
+---------+             +--------+            +-----------+        +-------------+
     |                      |                       |                     |
     |  Create Deployment   |                       |                     |
     |--------------------->|                       |                     |
     |                      |                       |                     |
     |  Deployment Created  |                       |                     |
     |<---------------------|                       |                     |
     |                      |                       |                     |
     |                      |   Deployment Event    |                     |
     |                      |---------------------->|                     |
     |                      |                       |     SSH+Deploys     |
     |                      |                       |-------------------->|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
     |                      |                       |   Deploy Completed  |
     |                      |                       |<--------------------|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
```

Denke daran, dass GitHub niemals auf deine Server zugreift. Deine Drittanbieterintegration ist für die Interaktion mit Bereitstellungsereignissen zuständig. Mehrere Systeme können auf Bereitstellungsereignisse lauschen, und jedes dieser Systeme muss entscheiden, ob es für das Pushen des Codes auf deine Server, das Erstellen des nativen Codes usw. verantwortlich ist.

Beachte, dass der `repo_deployment`-[OAuth-Bereich](/developers/apps/scopes-for-oauth-apps) gezielten Zugriff auf Bereitstellungen und Bereitstellungsstatus gewährt, **ohne** Zugriff auf den Repositorycode zu gewähren, während die Bereiche {% ifversion not ghae %}`public_repo` und{% endif %}`repo` ebenfalls dazu befähigen, Code zu schreiben.

### Inaktive Bereitstellungen

Wenn du den Status einer Bereitstellung auf `success` festlegst, werden alle vorherigen, nicht vorübergehenden und nicht produktionsbezogenen Umgebungsbereitstellungen im selben Repository mit demselben Umgebungsnamen `inactive`. Um dies zu vermeiden, kannst du `auto_inactive` beim Erstellen des Bereitstellungsstatus auf `false` festlegen.

Du kannst angeben, dass eine vorübergehende Umgebung nicht mehr vorhanden ist, indem du ihre `state` auf `inactive` festlegst.  Wenn du den `state` auf `inactive` festlegst, wird die Bereitstellung in {% data variables.product.prodname_dotcom %} als `destroyed` angezeigt, und der Zugriff darauf wird entfernt.
