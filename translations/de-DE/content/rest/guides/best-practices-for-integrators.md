---
title: Bewährte Methoden für Integratoren
intro: 'Erstelle eine App, die zuverlässig mit der {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API interagiert und deine Benutzer*innen begeistert.'
redirect_from:
  - /guides/best-practices-for-integrators
  - /v3/guides/best-practices-for-integrators
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Integrator best practices
ms.openlocfilehash: 76e0a405394529bb8b40b0a0af10d5e19fbbf3a5
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882271'
---
Du möchtest deine App gerne in die GitHub-Plattform integrieren? [Damit befindest du dich in guter Gesellschaft](https://github.com/integrations). In dieser Anleitung erfährst du, wie du eine App erstellst, die deinen Benutzer*innen eine optimale Oberfläche bietet *und* verlässlich mit der API interagiert. 

## Schützen von Nutzlasten, die von GitHub bereitgestellt werden

[Die von GitHub gesendeten Nutzlasten][event-types] sollten unbedingt geschützt werden. Auch wenn in einer Nutzlast keine persönlichen Informationen (wie z. B. Kennwörter) übertragen werden, sollte *jegliche Art* von Datenverlust vermieden werden. Möglicherweise vertrauliche Informationen sind etwa E-Mail-Adressen von Committern oder die Namen privater Repositorys.

Führe zum Schutz der von GitHub übermittelten Nutzlasten die folgenden Schritte aus:

1. Stelle sicher, dass der Empfangsserver über eine HTTPS-Verbindung verfügt. Standardmäßig überprüft GitHub beim Bereitstellen von Nutzlasten die SSL-Zertifikate.{% ifversion fpt or ghec %}
1. Füge der Liste zugelassener IP-Adressen auf deinem Server die [IP-Adresse hinzu, die zum Bereitstellen von Hooks](/github/authenticating-to-github/about-githubs-ip-addresses) verwendet wird. [Suche mithilfe des Endpunkts `/meta`](/rest/reference/meta#meta) nach der verwendeten Adresse, um sicherzustellen, dass die korrekte IP-Adresse überprüft wird.{% endif %}
1. Stelle über [ein geheimes Token](/webhooks/securing/) sicher, dass die Nutzlasten definitiv von GitHub stammen. Indem du ein geheimes Token erzwingst, kannst du dir sicher sein, dass alle von deinem Server empfangenen Daten auch wirklich von GitHub stammen. Idealerweise erhalten alle Benutzer*innen deines Diensts ein *unterschiedliches* geheimes Token. Auf diese Weise sind im Fall eines kompromittierten Tokens keine weiteren Benutzer*innen betroffen.

## Ausführen asynchroner Arbeit anstelle von synchroner Arbeit

GitHub erwartet, dass Integrationen innerhalb von {% ifversion fpt or ghec %}10{% else %}30{% endif %} Sekunden nach Empfang der Webhooknutzlast reagieren. Benötigt dein Dienst länger, beendet GitHub die Verbindung, und die Nutzlast geht verloren.

Da die Geschwindigkeit deines Diensts nicht vorhergesagt werden kann, solltest du die „eigentliche Arbeit“ in einem Hintergrundauftrag ausführen. [Resque](https://github.com/resque/resque/) (für Ruby), [RQ](http://python-rq.org/) (für Python) oder [RabbitMQ](http://www.rabbitmq.com/) (für Java) sind Beispiele für Bibliotheken, die Warteschlangen und die Verarbeitung von Hintergrundaufträgen behandeln.

Beachte, dass GitHub auch bei einem parallel ausgeführten Hintergrundauftrag erwartet, dass dein Server innerhalb von {% ifversion fpt or ghec %}zehn{% else %}dreißig{% endif %} Sekunden reagiert. Dein Server muss den Empfang der Nutzlast durch eine Antwort bestätigen. Es ist entscheidend, dass dein Dienst die Nutzlast so schnell wie möglich überprüft, damit du korrekt darüber berichten kannst, ob der Server die Anforderung fortsetzt.

## Verwenden geeigneter HTTP-Statuscodes für die Antwort an GitHub

Jeder Webhook verfügt über den Abschnitt „Aktuelle Übermittlungen“, in dem aufgelistet wird, ob eine Bereitstellung erfolgreich war oder nicht.

![Ansicht „Aktuelle Übermittlungen“](/assets/images/webhooks_recent_deliveries.png)

Verwende geeignete HTTP-Statuscodes, um deine Benutzer*innen zu informieren. Bestätige mit den Codes `201` oder `202` den Empfang einer Nutzlast, die nicht verarbeitet wird (etwa weil sie von einem anderen Branch als dem Standardbranch übermittelt wurde). Nutze den Fehlercode `500` nur für schwerwiegende Fehler.

## Bereitstellen möglichst vieler Informationen

Deine Benutzer*innen können die Serverantworten, die du an GitHub sendest, genauer untersuchen. Stelle daher sicher, dass die Meldungen klar und aussagekräftig sind.

![Anzeigen einer Nutzlastantwort](/assets/images/payload_response_tab.png)

## Folgen von Umleitungen, die die API sendet

Wurde eine Ressource verschoben, gibt GitHub dies direkt über einen Umleitungsstatuscode an. Diesen Umleitungen solltest du unbedingt folgen. Jede Umleitungsantwort legt im Header `Location` den neuen URI fest, zu dem gewechselt werden soll. Wenn du eine Umleitung erhältst, solltest du deinen Code mit dem neuen URI aktualisieren, falls du einen veralteten Pfad anforderst, der möglicherweise entfernt wird.

Informationen zur Konfiguration deiner App für Umleitungen findest du in der [Liste der HTTP-Statuscodes](/rest#http-redirects).

## Vermeiden manueller URL-Analysen

Häufig enthalten API-Antworten Daten in Form von URLs. Wenn du beispielsweise ein Repository anforderst, erhältst du einen Schlüssel namens `clone_url` mit einer URL zum Klonen des Repositorys.

Aus Stabilitätsgründen solltest du diese Daten nicht analysieren oder versuchen, das Format zukünftiger URLs daraus zu erstellen. Deine App funktioniert bei einer Änderung der URL möglicherweise nicht mehr.

Wenn du beispielsweise mit paginierten Ergebnissen arbeitest, erscheint es zunächst verlockend, URLs durch Anfügen von `?page=<number>` zu erstellen. Widerstehe dieser Versuchung. In dieser [Paginierungsanleitung](/guides/traversing-with-pagination) findest du Tipps für das sichere Folgen paginierter Ergebnisse.

## Überprüfen von Ereignistyp und Aktion vor der Verarbeitung des Ereignisses

Es gibt mehrere [Typen von Webhookereignissen][event-types], von denen jedes Ereignis wiederum über mehrere Aktionen verfügen kann. Mit steigender Anzahl von GitHub-Features werden gelegentlich neue Ereignistypen bzw. vorhandenen Ereignistypen neue Aktionen hinzugefügt. Stelle sicher, dass deine Anwendung Typ und Aktion eines Ereignisses explizit überprüft, bevor Webhooks verarbeitet werden. Frage mit dem Anforderungsheader `X-GitHub-Event` den Typ des empfangenen Ereignisses ab, um eine geeignete Verarbeitung zu gewährleisten. Analog dazu kannst du mit dem `action`-Nutzlastschlüssel der obersten Ebene abfragen, welche Aktion für das entsprechende Objekt ausgeführt wurde.

Wenn du beispielsweise einen GitHub-Webhook für „**Alles** senden“ konfigurierst, empfängt deine Anwendung neue Ereignistypen und Aktionen, wenn diese hinzugefügt werden. Die **Nutzung einer ELSE-Klausel vom Typ „catch-all“ wird daher nicht empfohlen**. Betrachte das folgende Codebeispiel:

```ruby
# Not recommended: a catch-all else clause
def receive
  event_type = request.headers["X-GitHub-Event"]
  payload    = request.body

  case event_type
  when "repository"
    process_repository(payload)
  when "issues"
    process_issues(payload)
  else
    process_pull_requests
  end
end
```

In diesem Codebeispiel werden die Methoden `process_repository` und `process_issues` ordnungsgemäß aufgerufen, wenn ein Ereignis vom Typ `repository` oder `issues` empfangen wird. Jeder andere Ereignistyp würde jedoch zum Aufruf von `process_pull_requests` führen. Werden neue Ereignistypen hinzugefügt, würde dies zu einem falschen Verhalten führen, bei dem neue Ereignistypen auf dieselbe Weise wie das Ereignis `pull_request` verarbeitet werden.

Es wird daher empfohlen, Ereignistypen explizit zu überprüfen und entsprechend zu handeln. Im folgenden Codebeispiel wird explizit überprüft, ob das Ereignis `pull_request` vorhanden ist, und die `else`-Klausel protokolliert, dass ein neuer Ereignistyp empfangen wurde:

```ruby
# Recommended: explicitly check each event type
def receive
  event_type = request.headers["X-GitHub-Event"]
  payload    = JSON.parse(request.body)

  case event_type
  when "repository"
    process_repository(payload)
  when "issues"
    process_issue(payload)
  when "pull_request"
    process_pull_requests(payload)
  else
    puts "Oooh, something new from GitHub: #{event_type}"
  end
end
```

Da jedes Ereignis zudem mehrere Aktionen umfassen kann, wird auch die Überprüfung der Aktionen empfohlen. Das Ereignis [`IssuesEvent`](/webhooks/event-payloads/#issues) verfügt beispielsweise über mehrere mögliche Aktionen. Dazu gehören `opened` beim Erstellen des Issues, `closed` beim Schließen des Issues und `assigned` beim Zuweisen des Issues.

Zusätzlich zu Ereignistypen sollen möglicherweise vorhandenen Ereignissen neue Aktionen hinzugefügt werden. Daher wird auch bei der Überprüfung von Ereignisaktionen die **Nutzung einer ELSE-Klausel vom Typ „catch-all“ nicht empfohlen**. Führe stattdessen eine explizite Überprüfung der Ereignisaktionen ähnlich wie bei den Ereignistypen aus. Das folgende Codebeispiel weist viele Gemeinsamkeiten mit dem vorherigen Beispiel für die Ereignistypen auf:

```ruby
# Recommended: explicitly check each action
def process_issue(payload)
  case payload["action"]
  when "opened"
    process_issue_opened(payload)
  when "assigned"
    process_issue_assigned(payload)
  when "closed"
    process_issue_closed(payload)
  else
    puts "Oooh, something new from GitHub: #{payload["action"]}"
  end
end
```

In diesem Beispiel wird zunächst die Aktion `closed` überprüft, bevor die Methode `process_closed` aufgerufen wird. Alle nicht identifizierten Aktionen werden zur späteren Verwendung protokolliert.

{% ifversion fpt or ghec or ghae %}

## Umgang mit Ratenbegrenzungen

Die [Ratenbegrenzung](/rest/overview/resources-in-the-rest-api#rate-limiting) der GitHub-API stellt sicher, dass die API schnell und für alle verfügbar ist.

Wenn du den Grenzwert erreicht hast, solltest du mit dem Senden von Anforderungen warten, bis du wieder dazu berechtigt bist. Ansonsten wird deine App möglicherweise gesperrt.

Du kannst den [Status deiner Ratenbegrenzung](/rest/reference/rate-limit) jederzeit überprüfen. Die Überprüfung deiner Ratenbegrenzung erhöht deine Rate nicht.

## Umgang mit sekundären Ratenbegrenzungen

Auch mit [sekundären Ratenbegrenzungen](/rest/overview/resources-in-the-rest-api#secondary-rate-limits) soll die Verfügbarkeit der API sichergestellt werden.
Befolge mit deiner Anwendung die folgenden Richtlinien, um unterhalb des Grenzwerts zu bleiben:

* Sende authentifizierte Anforderungen, oder verwende die Client-ID und das Geheimnis deiner Anwendung. Nicht authentifizierte Anforderungen unterliegen aggressiveren Ratenbegrenzungen.
* Sende Anforderungen für einzelne Benutzer*innen oder eine einzelne Client-ID nacheinander. Sende solche Anforderungen nicht gleichzeitig.
* Warte bei vielen `POST`-, `PATCH`-, `PUT`- oder `DELETE`-Anforderungen für einzelne Benutzer*innen oder eine einzelne Client-ID mindestens eine Sekunde zwischen den jeweiligen Anforderungen.
* Wurde deine Rate begrenzt, nutze den Antwortheader `Retry-After`, um die Geschwindigkeit zu drosseln. Der Wert des `Retry-After`-Headers muss eine ganze Zahl sein, die für die Anzahl der Sekunden steht, die vor einer erneuten Anforderung verstreichen soll. So bedeutet `Retry-After: 30` beispielsweise, dass mit dem Senden weiterer Anforderungen 30 Sekunden gewartet werden soll.
* Anforderungen zum Erstellen von Inhalten, die Benachrichtigungen auslösen, wie etwa Issues, Kommentare und Pull Requests, können weiter eingeschränkt werden und enthalten keinen `Retry-After`-Header in der Antwort. Gehe beim Erstellen solcher Inhalte maßvoll vor, um weitere Begrenzungen zu vermeiden.

Wir behalten uns das Recht vor, diese Richtlinien nach Bedarf zu ändern, um die Verfügbarkeit zu gewährleisten.

{% endif %}

## Umgang mit API-Fehlern

Obwohl dein Code keine Fehler enthält, kann es vorkommen, dass beim Zugreifen auf die API nacheinander mehrere Fehler auftreten.

Wiederholte Statuscodes vom Typ `4xx` und `5xx` solltest du nicht ignorieren. Stelle stattdessen sicher, dass die Interaktion mit der API korrekt ausgeführt wird. Wenn z. B. ein Endpunkt eine Zeichenfolge anfordert, du aber einen numerischen Wert übergibst, erhältst du einen Überprüfungsfehler vom Typ `5xx`, und dein Aufruf wird nicht erfolgreich ausgeführt. Ebenso verursacht der Zugriffsversuch auf einen nicht autorisierten oder nicht vorhandenen Endpunkt einen Fehler vom Typ `4xx`.

Wenn du wiederholte Überprüfungsfehler bewusst ignorierst, wird deine App möglicherweise wegen missbräuchlicher Nutzung gesperrt.

[event-types]: /webhooks/event-payloads
