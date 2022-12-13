---
title: Benachrichtigungen
intro: 'Mit der Benachrichtigungs-API kannst du {% data variables.product.product_name %}-Benachrichtigungen verwalten.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147064274'
---
## Informationen zur Benachrichtigungs-API

Mit der Benachrichtigungs-API kannst du {% data variables.product.product_name %}-Benachrichtigungen verwalten. Weitere Informationen zu Benachrichtigungen findest du unter [Informationen zu Benachrichtigungen](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications).

Alle Aufrufe der Benachrichtigungs-API erfordern die API-Bereiche `notifications` oder `repo`.  Dadurch erhältst du schreibgeschützten Zugriff auf einige Issue- und Commitinhalte. Du benötigst weiterhin den `repo`-Bereich, um auf Issues und Commits aus den jeweiligen Endpunkten zuzugreifen.

Benachrichtigungen werden als „Threads“ zurückgegeben.  Ein Thread enthält Informationen zur aktuellen Diskussion eines Issues, eines Pull Requests oder eines Commits.

Benachrichtigungen werden für den Abruf mit dem `Last-Modified`-Header optimiert.  Wenn keine neuen Benachrichtigungen vorliegen, wird eine `304 Not Modified`-Antwort angezeigt, und die aktuelle Ratenbegrenzung bleibt unberührt.  Es gibt einen `X-Poll-Interval`-Header, der angibt, wie oft der Abruf erfolgen darf (in Sekunden).  In Zeiten hoher Serverlast kann dieser Zeitraum erhöht werden.  Beachte den Header.

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

### Informationen zu Benachrichtigungsgründen

Beim Abrufen von Antworten aus der Benachrichtigungs-API weisen alle Nutzdaten einen Schlüssel namens `reason` auf. Dieser entspricht den Ereignissen, die eine Benachrichtigung auslösen.

Für den Empfang einer Benachrichtigung sind folgende `reason`-Angaben möglich:

Name des Grunds | BESCHREIBUNG
------------|------------
`assign` | Das Issue wurde dir zugewiesen.
`author` | Du hast den Thread erstellt.
`comment` | Du hast den Thread kommentiert.
`ci_activity` | Eine von dir ausgelöste {% data variables.product.prodname_actions %}-Workflowausführung wurde abgeschlossen.
`invitation` | Du hast eine Einladung zum Mitwirken am Repository angenommen.
`manual` | Du hast den Thread abonniert (über ein Issue oder einen Pull Request).
`mention` | Du wurdest im Inhalt über **@mentioned** explizit erwähnt.
`review_requested` | Du oder ein Team, in dem du Mitglied bist, wurde aufgefordert, einen Pull Request zu überprüfen.{% ifversion fpt or ghec %}
`security_alert` | {% data variables.product.prodname_dotcom %} hat ein [Sicherheitsrisiko](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) in deinem Repository entdeckt.{% endif %}
`state_change` | Du hast den Threadstatus geändert (z. B. durch Schließen eines Issues oder Mergen eines Pull Requests).
`subscribed` | Du überwachst das Repository.
`team_mention` | Du bist Mitglied eines Teams, das erwähnt wurde.

Beachte, dass `reason` auf Threadbasis geändert wird und sich ändern kann, wenn die `reason`-Angabe für eine spätere Benachrichtigung anders lautet.

Wenn du beispielsweise der Autor eines Issues bist, weist `reason` bei nachfolgenden Benachrichtigungen zu diesem Issue den Wert `author` auf. Wenn du dann in demselben Issue über **@mentioned** erwähnt wirst, verfügen danach abgerufene Benachrichtigungen über den `reason`-Wert `mention`. Diese `reason`-Angabe bleibt `mention` unabhängig davon, ob du jemals wieder erwähnt wirst.
