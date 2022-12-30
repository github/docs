---
title: Ressourcen in der REST-API
intro: 'Hier erfährst du, wie du mit den von der {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API bereitgestellten Ressourcen umgehst.'
redirect_from:
  - /rest/initialize-the-repo
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
topics:
  - API
ms.openlocfilehash: 4fd3e2aad72ee0ffc4778a86dc99cd5bb6f9d2c5
ms.sourcegitcommit: 4daa156856e651cb3854ead40e35bd918e481ad6
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/02/2022
ms.locfileid: '148190399'
---
{% ifversion api-date-versioning %}
## API-Version

Die verfügbaren Ressourcen können sich je nach REST-API-Version unterscheiden. Du solltest den `X-GitHub-Api-Version`-Header verwenden, um eine API-Version anzugeben. Weitere Informationen findest du unter [API-Versionen](/rest/overview/api-versions).

{% endif %}

## Schema

{% ifversion fpt or ghec %}Der gesamte API-Zugriff erfolgt über HTTPS und{% else %}auf die API wird{% endif %} über `{% data variables.product.api_url_code %}` zugegriffen.  Alle Daten werden im JSON-Format gesendet und empfangen.

```shell
$ curl -I {% data variables.product.api_url_pre %}/users/octocat/orgs

> HTTP/2 200
> Server: nginx
> Date: Fri, 12 Oct 2012 23:33:14 GMT
> Content-Type: application/json; charset=utf-8
> ETag: "a00049ba79152d03380c34652f2cb612"
> X-GitHub-Media-Type: github.v3
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4987
> x-ratelimit-reset: 1350085394{% ifversion ghes %}
> X-GitHub-Enterprise-Version: {{ currentVersion | remove: "enterprise-server@" }}.0{% elsif ghae %}
> X-GitHub-Enterprise-Version: GitHub AE{% endif %}
> Content-Length: 5
> Cache-Control: max-age=0, private, must-revalidate
> X-Content-Type-Options: nosniff
```

Leere Felder werden mit `null` angegeben anstatt ausgelassen zu werden.

Alle Zeitstempel werden im UTC-Zeitformat im ISO 8601-Format zurückgegeben:

    YYYY-MM-DDTHH:MM:SSZ

Weitere Informationen zu Zeitzonen in Zeitstempeln findest du in [diesem Abschnitt](#timezones).

### Zusammenfassungsdarstellungen

Wenn du eine Liste von Ressourcen abrufst, enthält die Antwort eine _Teilmenge_ der Attribute für diese Ressource. Dies ist die „Zusammenfassungsdarstellung“ der Ressource. (Einige Attribute sind für die zu bereitstellende API berechnungsintensiv.
Aus Leistungsgründen schließt die Zusammenfassungsdarstellung diese Attribute aus.
Um diese Attribute abzurufen, ruf die „detaillierte“ Darstellung ab.)

**Beispiel:** Wenn du eine Liste von Repositorys erhältst, erhältst du die Zusammenfassungsdarstellung jedes Repositorys. Hier wird die Liste der Repositorys abgerufen, die der Organisation [octokit](https://github.com/octokit) gehört:

    GET /orgs/octokit/repos

### Detaillierte Darstellungen

Wenn du eine einzelne Ressource abrufst, enthält die Antwort normalerweise _alle_ Attribute für diese Ressource. Dies ist die „detaillierte“ Darstellung der Ressource. (Beachte, dass die Autorisierung manchmal die Anzahl der Details in der Darstellung beeinflusst.)

**Beispiel:** Wenn du ein einzelnes Repository erhältst, erhältst du die detaillierte Darstellung des Repositorys. Hier rufst du das Repository [octokit/octokit.rb](https://github.com/octokit/octokit.rb) ab:

    GET /repos/octokit/octokit.rb

Die Dokumentation enthält eine Beispielantwort für jede API-Methode. Die Beispielantwort zeigt alle Attribute an, die von dieser Methode zurückgegeben werden.

## Authentifizierung

{% ifversion ghae %} Es wird empfohlen, dich bei der {% data variables.product.product_name %}-REST-API zu authentifizieren, indem du über den [Webanwendungsfluss](/developers/apps/authorizing-oauth-apps#web-application-flow) ein OAuth2-Token erstellst. {% else %} Es gibt zwei Möglichkeiten, die Authentifizierung über die {% data variables.product.product_name %}-REST-API durchzuführen.{% endif %} Anforderungen, die eine Authentifizierung erfordern, geben an einigen Stellen `404 Not Found` anstelle von `403 Forbidden` zurück.  Auf diese Weise soll die versehentliche Veröffentlichung privater Repositorys für nicht autorisierte Benutzer*innen verhindert werden.

### Standardauthentifizierung

```shell
$ curl -u "username" {% data variables.product.api_url_pre %}
```

### OAuth2-Token (gesendet in einem Header)

```shell
$ curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}
```

{% note %}

Hinweis: GitHub empfiehlt das Senden von OAuth-Token mithilfe des Autorisierungsheaders.

{% endnote %}

{% note %}

**Hinweis:** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

Informiere dich weiter über [OAuth2](/apps/building-oauth-apps/).  Beachte, dass OAuth2-Token mithilfe des [Webanwendungsflow](/developers/apps/authorizing-oauth-apps#web-application-flow) für Produktionsanwendungen abgerufen werden können.

{% ifversion fpt or ghes or ghec %}
### OAuth2-Schlüssel bzw. -Geheimnis

{% data reusables.apps.deprecating_auth_with_query_parameters %}

```shell
curl -u my_client_id:my_client_secret '{% data variables.product.api_url_pre %}/user/repos'
```

Wenn du deine `client_id` und dein `client_secret` verwendest, wirst du _nicht_ als Benutzer*in authentifiziert. Stattdessen wird nur deine OAuth-App identifiziert, um deine Ratenbegrenzung zu erhöhen. Berechtigungen werden nur Benutzer*innen und keinen Anwendungen gewährt. Zudem erhältst du nur Daten, die nicht authentifizierte Benutzer*innen sehen würden. Aus diesem Grund solltest du nur den OAuth2-Schlüssel bzw. das OAuth2-Geheimnis in Server-zu-Server-Szenarios verwenden. Veröffentliche den geheimen Clientschlüssel deiner OAuth-App nicht für deine Benutzer*innen.

{% ifversion ghes %} Im privaten Modus kannst du dich nicht mit deinem OAuth2-Schlüssel bzw. -Geheimnis authentifizieren, und bei einem Authentifizierungsversuch wird `401 Unauthorized` zurückgegeben. Weitere Informationen findest du unter [Aktivieren des privaten Modus](/admin/configuration/configuring-your-enterprise/enabling-private-mode).
{% endif %} {% endif %}

{% ifversion fpt or ghec %}

Informiere dich weiter über die [nicht authentifizierte Ratenbegrenzung](#increasing-the-unauthenticated-rate-limit-for-oauth-apps).

{% endif %}

### Grenzwert für fehlgeschlagene Anmeldeversuche

Bei der Authentifizierung mit ungültigen Anmeldeinformationen wird `401 Unauthorized` zurückgegeben:

```shell
$ curl -I {% data variables.product.api_url_pre %} -u foo:bar
> HTTP/2 401

> {
>   "message": "Bad credentials",
>   "documentation_url": "{% data variables.product.doc_url_pre %}"
> }
```

Nach der Erkennung mehrerer Anforderungen mit ungültigen Anmeldeinformationen innerhalb eines kurzen Zeitraums lehnt die API vorübergehend alle Authentifizierungsversuche für diese*n Benutzer*in (auch Benutzer*innen mit gültigen Anmeldeinformationen) mit der Fehlermeldung `403 Forbidden` ab:

```shell
$ curl -i {% data variables.product.api_url_pre %} -u {% ifversion fpt or ghae or ghec %}
-u VALID_USERNAME:VALID_TOKEN {% endif %}{% ifversion ghes %}-u VALID_USERNAME:VALID_PASSWORD {% endif %}
> HTTP/2 403
> {
>   "message": "Maximum number of login attempts exceeded. Please try again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}"
> }
```

## Parameter

Viele API-Methoden verwenden optionale Parameter. Für `GET`-Anforderungen können alle Parameter, die nicht als Segment im Pfad angegeben werden, als HTTP-Abfragezeichenfolgenparameter übergeben werden:

```shell
$ curl -i "{% data variables.product.api_url_pre %}/repos/vmg/redcarpet/issues?state=closed"
```

In diesem Beispiel werden die Werte „vmg“ und „redcarpet“ für die Parameter `:owner` und `:repo` im Pfad angegeben, während `:state` in der Abfragezeichenfolge übergeben wird.

Für die Anforderungen `POST`, `PATCH`, `PUT` und `DELETE` sollten Parameter, die nicht in der URL enthalten sind, als JSON mit einem Inhaltstyp von „application/json“ codiert werden:

```shell
$ curl -i -u username -d '{"scopes":["repo_deployment"]}' {% data variables.product.api_url_pre %}/authorizations
```

## Stammendpunkt

Du kannst eine `GET`-Anforderung an den Stammendpunkt stellen, um alle Endpunktkategorien abzurufen, die die REST-API unterstützt:

```shell
$ curl {% ifversion fpt or ghae or ghec %}
-u USERNAME:TOKEN {% endif %}{% ifversion ghes %}-u USERNAME:PASSWORD {% endif %}{% data variables.product.api_url_pre %}
```

## Globale GraphQL-Knoten-IDs

Weitere Informationen zum Suchen von [-Elementen über die REST-API und die Verwendung in GraphQL-Vorgängen findest du in der Anleitung zur ](/graphql/guides/using-global-node-ids)Verwendung globaler Knoten-IDs`node_id`.

## Clientfehler

Es gibt drei mögliche Arten von Clientfehlern bei API-Aufrufen, die Anforderungstexte erhalten:

1. Das Senden ungültiger JSON-Daten führt zu einer `400 Bad Request`-Antwort.

        HTTP/2 400
        Content-Length: 35

        {"message":"Problems parsing JSON"}

2. Das Senden des falschen Typs von JSON-Werten führt zu einer `400 Bad
   Request`-Antwort.

        HTTP/2 400
        Content-Length: 40

        {"message":"Body should be a JSON object"}

3. Das Senden ungültiger Felder führt zu einer `422 Unprocessable Entity`-Antwort.

        HTTP/2 422
        Content-Length: 149

        {
          "message": "Validation Failed",
          "errors": [
            {
              "resource": "Issue",
              "field": "title",
              "code": "missing_field"
            }
          ]
        }

Alle Fehlerobjekte verfügen über Ressourcen- und Feldeigenschaften, damit dein Client genauere Angaben zum Problem machen kann.  Es gibt auch einen Fehlercode, um Ihnen mitzuteilen, welches Problem im Zusammenhang mit dem Feld vorliegt.  Dies sind die möglichen Überprüfungsfehlercodes:

Fehlercodename | BESCHREIBUNG
-----------|-----------|
`missing` | Eine Ressource ist nicht vorhanden.
`missing_field` | Ein erforderliches Feld für eine Ressource wurde nicht festgelegt.
`invalid` | Die Formatierung eines Felds ist ungültig.  Weitere spezifische Informationen findest du in der Dokumentation.
`already_exists` | Eine andere Ressource hat den gleichen Wert wie dieses Feld.  Dies kann bei Ressourcen der Fall sein, die einen eindeutigen Schlüssel haben müssen (z. B. Bezeichnungsnamen).
`unprocessable` | Die bereitgestellten Eingaben waren ungültig.

Ressourcen können auch benutzerdefinierte Überprüfungsfehler senden (wobei `code` `custom` entspricht). Benutzerdefinierte Fehler enthalten immer ein `message`-Feld, in dem der Fehler beschrieben wird. Die meisten Fehler umfassen zudem ein `documentation_url`-Feld, in dem auf Inhalte verwiesen wird, die beim Beheben des Fehlers helfen können.

## HTTP-Umleitungen

Die {% data variables.product.product_name %}-REST-API verwendet ggf. die HTTP-Umleitung. Clients sollten davon ausgehen, dass jede Anforderung zu einer Umleitung führen kann. Der Empfang einer HTTP-Umleitung ist *kein* Fehler, und Clients sollten dieser Umleitung folgen. Umleitungsantworten verfügen über ein `Location`-Headerfeld, das den URI der Ressource enthält, für die der Client die Anforderungen wiederholen sollte.

Statuscode | BESCHREIBUNG
-----------|-----------|
`301` | Permanente Umleitung. Der URI, den du zum Erstellen der Anforderung verwendet hast, wurde durch den im `Location`-Headerfeld angegebenen URI ersetzt. Diese und alle zukünftigen Anforderungen an diese Ressource sollten an den neuen URI weitergeleitet werden.
`302`, `307` | Temporäre Umleitung. Die Anforderung sollte für den im `Location`-Headerfeld angegebenen URI unverändert wiederholt werden, aber die Clients sollten weiterhin den ursprünglichen URI für zukünftige Anforderungen verwenden.

Andere Umleitungsstatuscodes können gemäß der HTTP 1.1-Spezifikation verwendet werden.

## HTTP-Verben

Sofern möglich, bemüht sich die {% data variables.product.product_name %}-REST-API, geeignete HTTP-Verben für jede Aktion zu verwenden. Bei HTTP-Verben muss Groß-/Kleinschreibung beachtet werden.

Verb | BESCHREIBUNG
-----|-----------
`HEAD` | Kann für jede Ressource ausgestellt werden, um nur die HTTP-Headerinformationen abzurufen.
`GET` | Wird zum Abrufen von Ressourcen verwendet.
`POST` | Wird zum Erstellen von Ressourcen verwendet.
`PATCH` | Wird zum Aktualisieren von Ressourcen mit teilweisen JSON-Daten verwendet. Beispielsweise verfügt eine Issue-Ressource über die Attribute `title` und `body`. Eine `PATCH`-Anforderung kann eines oder mehrere der Attribute akzeptieren, um die Ressource zu aktualisieren.
`PUT` | Wird zum Ersetzen von Ressourcen oder Sammlungen verwendet. Stelle für `PUT`-Anforderungen ohne `body`-Attribut sicher, dass der `Content-Length`-Header auf null (0) festgelegt wird.
`DELETE` |Wird zum Löschen von Ressourcen verwendet.

## Hypermedia

Alle Ressourcen verfügen möglicherweise über eine oder mehrere `*_url`-Eigenschaften, die sie mit anderen Ressourcen verknüpfen.  Hiermit sollen explizite URLs bereitgestellt werden, damit richtige API-Clients keine URLs selbst erstellen müssen.  Es wird dringend empfohlen, dass API-Clients diese verwenden.  Auf diese Weise werden zukünftige Upgrades der API für Entwickler*innen einfacher.  Es wird erwartet, dass alle URLs ordnungsgemäße [RFC 6570][rfc]-URI-Vorlagen sind.

Anschließend kannst du diese Vorlagen mithilfe des [uri_template][uri]-Gems erweitern:

    >> tmpl = URITemplate.new('/notifications{?since,all,participating}')
    >> tmpl.expand
    => "/notifications"

    >> tmpl.expand all: 1
    => "/notifications?all=1"

    >> tmpl.expand all: 1, participating: 1
    => "/notifications?all=1&participating=1"

[rfc]: https://datatracker.ietf.org/doc/html/rfc6570
[uri]: https://github.com/hannesg/uri_template

## Paginierung

Anforderungen, die mehrere Elemente zurückgeben, werden standardmäßig auf 30 Elemente paginiert.  Du kannst weitere Seiten mit dem `page`-Parameter angeben. Für einige Ressourcen kannst du mit dem `per_page`-Parameter auch eine benutzerdefinierte Seitengröße bis 100 festlegen.
Beachte, dass aus technischen Gründen nicht alle Endpunkte den `per_page`-Parameter berücksichtigen (siehe [Ereignisse](/rest/reference/activity#events) für ein Beispiel).

```shell
$ curl '{% data variables.product.api_url_pre %}/user/repos?page=2&per_page=100'
```

Beachte, dass die Seitennummerierung 1-basiert ist und die erste Seite zurückgegeben wird, wenn der `page`-Parameter ausgelassen wird.

Einige Endpunkte verwenden die cursorbasierte Paginierung. Ein Cursor ist eine Zeichenfolge, die auf einen Speicherort im Resultset verweist.
Bei der cursorbasierten Paginierung gibt es kein festes Konzept von „Seiten“ im Resultset, sodass du nicht zu einer bestimmten Seite navigieren kannst.
Stattdessen kannst du die Ergebnisse mithilfe des Parameters `before` oder `after` durchlaufen.

Weitere Informationen zur Paginierung findest du im Leitfaden zum [Durchlaufen mit der Paginierung][pagination-guide].

### Link-Header

{% note %}

**Hinweis:** Es ist wichtig, Aufrufe mit Link-Headerwerten zu erstellen, anstatt eigene URLs zu erstellen.

{% endnote %}

Der [Link-Header](https://datatracker.ietf.org/doc/html/rfc5988) enthält Paginierungsinformationen. Beispiel:

    Link: <{% data variables.product.api_url_code %}/user/repos?page=3&per_page=100>; rel="next",
      <{% data variables.product.api_url_code %}/user/repos?page=50&per_page=100>; rel="last"

_Das Beispiel enthält aus Gründen der Lesbarkeit einen Zeilenumbruch._

Der Endpunkt kann alternativ auch eine cursorbasierte Paginierung verwenden:

    Link: <{% data variables.product.api_url_code %}/orgs/ORG/audit-log?after=MTYwMTkxOTU5NjQxM3xZbGI4VE5EZ1dvZTlla09uWjhoZFpR&before=>; rel="next",

Dieser `Link`-Antwortheader enthält eine oder mehrere [Hypermedia](/rest#hypermedia)-Linkbeziehungen, von denen einige möglicherweise die Erweiterung als [URI-Vorlagen](https://datatracker.ietf.org/doc/html/rfc6570) erfordern.

Dies sind die möglichen `rel`-Werte:

Name | BESCHREIBUNG
-----------|-----------|
`next` |Linkbeziehung für die unmittelbare nächste Seite der Ergebnisse.
`last` |Linkbeziehung für die letzte Seite der Ergebnisse.
`first` |Linkbeziehung für die erste Seite der Ergebnisse.
`prev` |Linkbeziehung für die unmittelbar vorherige Seite der Ergebnisse.

## Zeitlimits

Wenn die Verarbeitung einer API-Anforderung durch {% data variables.product.prodname_dotcom %} länger als zehn Sekunden dauert, wird die Anforderung durch {% data variables.product.prodname_dotcom %} beendet, und du erhältst eine Timeoutantwort wie die folgende:

```json
{
    "message": "Server Error"
}
```

{% data variables.product.product_name %} behält sich das Recht vor, das Timeoutfenster zu ändern, um die Geschwindigkeit und Zuverlässigkeit der API zu schützen.

## Ratenbegrenzung

Die unterschiedlichen Arten von API-Anforderungen an {% data variables.location.product_location %} unterliegen unterschiedlichen Ratenbegrenzungen. 

Darüber hinaus verfügt die Such-API über dedizierte Grenzwerte. Weitere Informationen findest du unter [Suche](/rest/reference/search#rate-limit) in der REST-API-Dokumentation.

{% data reusables.enterprise.rate_limit %}

{% data reusables.rest-api.always-check-your-limit %}

### Anforderungen von persönlichen Konten

Direkte API-Anforderungen, die du mit einem {% data variables.product.pat_generic %} authentifizierst, sind Benutzer-zu-Server-Anforderungen. Eine OAuth-App oder GitHub-App kann auch eine Benutzer-zu-Server-Anforderung in deinem Namen vornehmen, nachdem du die App autorisiert hast. Weitere Informationen findest du unter [Erstellen eines {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token), [Autorisieren von OAuth-Apps](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps) und [Autorisieren von GitHub-Apps](/authentication/keeping-your-account-and-data-secure/authorizing-github-apps).

{% data variables.product.product_name %} ordnet den authentifizierten Benutzer*innen alle Benutzer-zu-Server-Anforderungen zu. Für OAuth-Apps und GitHub-Apps sind dies die Benutzer*innen, die die App autorisiert haben. Alle Benutzer-zu-Server-Anforderungen werden zur Ratenbegrenzung der authentifizierten Benutzer*innen hinzugezählt.

{% data reusables.apps.user-to-server-rate-limits %}

{% ifversion fpt or ghec %}

{% data reusables.apps.user-to-server-rate-limits-ghec %}

{% ifversion fpt or ghec or ghes %}

Für nicht authentifizierte Anforderungen ermöglicht die Ratenbegrenzung bis zu 60 Anforderungen pro Stunde. Nicht authentifizierte Anforderungen sind der ursprünglichen IP-Adresse und nicht der Person zugeordnet, die Anforderungen erstellt.

{% endif %}

{% endif %}

### Anforderungen über GitHub-Apps

Anforderungen über eine GitHub-App können entweder Benutzer-zu-Server- oder Server-zu-Server-Anforderungen sein. Weitere Informationen zu Ratenbegrenzungen für GitHub-Apps findest du unter [Ratenbegrenzungen für GitHub-Apps](/developers/apps/building-github-apps/rate-limits-for-github-apps). 

### Anforderungen über GitHub Actions

Du kannst das integrierte `GITHUB_TOKEN` verwenden, um Anforderungen in GitHub Actions-Workflows zu authentifizieren. Weitere Informationen findest du unter [Automatische Tokenauthentifizierung](/actions/security-guides/automatic-token-authentication).

Bei Verwendung von `GITHUB_TOKEN` beträgt die Ratenbegrenzung 1.000 Anforderungen pro Stunde und Repository.{% ifversion fpt or ghec %} Für Anforderungen an Ressourcen, die zu einem Unternehmenskonto auf {% data variables.location.product_location %} gehören, gilt die Ratenbegrenzung von {% data variables.product.prodname_ghe_cloud %}, und der Grenzwert beträgt 15.000 Anforderungen pro Stunde und Repository.{% endif %}

### Überprüfen des Status der Ratenbegrenzung

Die Ratenbegrenzungs-API und die HTTP-Header einer Antwort sind autoritative Quellen für die aktuelle Anzahl von API-Aufrufen, die dir oder deiner App jederzeit zur Verfügung stehen.

#### Ratenbegrenzungs-API

Du kannst die Ratenbegrenzungs-API verwenden, um den Status der Ratenbegrenzung zu überprüfen, ohne dass diese Anfrage zum aktuellen Grenzwert hinzugezählt wird. Weitere Informationen findest du unter [Ratenbegrenzung](/rest/reference/rate-limit).

#### HTTP-Header für die Ratenbegrenzung

In den zurückgegebenen HTTP-Headern einer API-Anforderung wird der aktuelle Status der Ratenbegrenzung angezeigt:

```shell
$ curl -I {% data variables.product.api_url_pre %}/users/octocat
> HTTP/2 200
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> x-ratelimit-limit: 60
> x-ratelimit-remaining: 56
> x-ratelimit-used: 4
> x-ratelimit-reset: 1372700873
```

Headername | BESCHREIBUNG
-----------|-----------|
`x-ratelimit-limit` | Die maximale Anzahl von Anforderungen, die du pro Stunde stellen darfst.
`x-ratelimit-remaining` | Die Anzahl der Anforderungen, die im aktuellen Ratenbegrenzungsfenster verbleiben.
`x-ratelimit-used` | Die Anzahl der Anforderungen, die du im aktuellen Ratenbegrenzungsfenster gesendet hast
`x-ratelimit-reset` | Die Zeit in [Sekunden seit der UTC-Epoche](http://en.wikipedia.org/wiki/Unix_time), zu der das aktuelle Ratenbegrenzungsfenster zurückgesetzt wird.

Wenn du die Zeit in einem anderen Format benötigst, kann jede moderne Programmiersprache diese Anforderung erfüllen. Wenn du beispielsweise die Konsole in deinem Webbrowser öffnest, kannst du die Rückstellzeit einfach als JavaScript-Date-Objekt abrufen.

``` javascript
new Date(1372700873 * 1000)
// => Mon Jul 01 2013 13:47:53 GMT-0400 (EDT)
```

Wenn du die Ratenbegrenzung überschreitest, wird eine Fehlerantwort zurückgegeben:

```shell
> HTTP/2 403
> Date: Tue, 20 Aug 2013 14:50:41 GMT
> x-ratelimit-limit: 60
> x-ratelimit-remaining: 0
> x-ratelimit-used: 60
> x-ratelimit-reset: 1377013266

> {
>    "message": "API rate limit exceeded for xxx.xxx.xxx.xxx. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
>    "documentation_url": "{% data variables.product.doc_url_pre %}/overview/resources-in-the-rest-api#rate-limiting"
> }
```

### Erhöhen der nicht authentifizierten Ratenbegrenzung für OAuth-Apps

Wenn deine OAuth-App nicht authentifizierte Aufrufe mit einer höheren Ratenbegrenzung vornehmen muss, kannst du die Client-ID und den geheimen Schlüssel deiner App vor der Endpunktroute übergeben.

```shell
$ curl -u my_client_id:my_client_secret -I {% data variables.product.api_url_pre %}/user/repos
> HTTP/2 200
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4966
> x-ratelimit-used: 34
> x-ratelimit-reset: 1372700873
```

{% note %}

**Hinweis:** Teile deinen geheimen Clientschlüssel niemals mit anderen Personen, und füge ihn nicht in clientseitigen Browsercode ein. Verwende die hier gezeigte Methode nur für Server-zu-Server-Aufrufe.

{% endnote %}

### Einhalten der Ratenbegrenzung

Wenn du bei Verwendung der Standardauthentifizierung oder OAuth die Ratenbegrenzung überschreitest, kannst du das Problem wahrscheinlich beheben, indem du API-Antworten zwischenspeicherst und [bedingte Anforderungen](#conditional-requests) verwendest.

### Sekundäre Ratenbegrenzungen

Um den Qualitätsdienst für {% data variables.product.product_name %} bereitzustellen, gelten bei Verwendung der API möglicherweise zusätzliche Ratenbegrenzungen für einige Aktionen. Wenn du beispielsweise die API verwendest, um schnell Inhalte zu erstellen, du anstelle der Verwendung von Webhooks offensiv abfragst, mehrere gleichzeitige Anforderungen stellst oder wiederholt berechnungsintensive Daten anforderst, kann dies zu einer sekundären Ratenbegrenzung führen.

Sekundäre Ratenbegrenzungen sollen nicht die legitime Verwendung der API beeinträchtigen. Deine normalen Ratenbegrenzungen sollten die einzige Grenze sein, die du erreichst. Lies die [Anleitung mit bewährten Methoden](/guides/best-practices-for-integrators/), um sicherzustellen, dass du die API ordnungsgemäß verwendest.

Wenn deine Anwendung diese Ratenbegrenzung auslöst, erhältst du eine informative Antwort:

```shell
> HTTP/2 403
> Content-Type: application/json; charset=utf-8
> Connection: close

> {
>   "message": "You have exceeded a secondary rate limit and have been temporarily blocked from content creation. Please retry your request again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}/overview/resources-in-the-rest-api#secondary-rate-limits"
> }
```

{% ifversion fpt or ghec %}

## Benutzer-Agent erforderlich

Alle API-Anforderungen MÜSSEN einen gültigen `User-Agent`-Header enthalten. Anforderungen ohne `User-Agent`-Header werden abgelehnt. Du musst deinen {% data variables.product.product_name %}-Benutzernamen oder den Namen deiner Anwendung für den `User-Agent`-Headerwert verwenden. Auf diese Weise kannst du im Fall von Problemen kontaktiert werden.

Hier sehen Sie ein Beispiel:

```shell
User-Agent: Awesome-Octocat-App
```

cURL sendet standardmäßig einen gültigen `User-Agent`-Header. Wenn du einen ungültigen `User-Agent`-Header über cURL (oder über einen alternativen Client) bereitstellst, erhältst du eine `403 Forbidden`-Antwort:

```shell
$ curl -IH 'User-Agent: ' {% data variables.product.api_url_pre %}/meta
> HTTP/1.0 403 Forbidden
> Connection: close
> Content-Type: text/html

> Request forbidden by administrative rules.
> Please make sure your request has a User-Agent header.
> Check  for other possible causes.
```

{% endif %}

## Bedingte Anforderungen

Die meisten Antworten geben einen `ETag`-Header zurück. Viele Antworten geben auch einen `Last-Modified`-Header zurück. Du kannst die Werte dieser Header verwenden, um mithilfe der Header `If-None-Match` bzw. `If-Modified-Since` nachfolgende Anforderungen an diese Ressourcen zu stellen. Wenn die Ressource nicht geändert wurde, gibt der Server `304 Not Modified` zurück.

{% ifversion fpt or ghec %}

{% tip %}

**Hinweis:** Das Senden einer bedingten Anforderung und das Empfangen einer 304-Antwort werden nicht auf deine [Ratenbegrenzung](#rate-limiting) angerechnet, weshalb empfohlen wird, diesen Ansatz nach Möglichkeit immer zu verwenden.

{% endtip %}

{% endif %}

```shell
$ curl -I {% data variables.product.api_url_pre %}/user
> HTTP/2 200
> Cache-Control: private, max-age=60
> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4996
> x-ratelimit-reset: 1372700873

$ curl -I {% data variables.product.api_url_pre %}/user -H 'If-None-Match: "644b5b0155e6404a9cc4bd9d8b1ae730"'
> HTTP/2 304
> Cache-Control: private, max-age=60
> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4996
> x-ratelimit-reset: 1372700873

$ curl -I {% data variables.product.api_url_pre %}/user -H "If-Modified-Since: Thu, 05 Jul 2012 15:31:30 GMT"
> HTTP/2 304
> Cache-Control: private, max-age=60
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4996
> x-ratelimit-reset: 1372700873
```

## Cross-Origin Resource Sharing

Die API unterstützt CORS (Cross-Origin Resource Sharing) für AJAX-Anforderungen aus jedem Ursprung.
Du kannst die [CORS-W3C-Empfehlung](http://www.w3.org/TR/cors/) oder [diese Einführung](https://code.google.com/archive/p/html5security/wikis/CrossOriginRequestSecurity.wiki) im HTML 5-Sicherheitsleitfaden lesen.

Im Folgenden findest du eine Beispielanforderung, die von einem Browser gesendet wird, der `http://example.com` aufruft:

```shell
$ curl -I {% data variables.product.api_url_pre %} -H "Origin: http://example.com"
HTTP/2 302
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, x-ratelimit-limit, x-ratelimit-remaining, x-ratelimit-reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
```

Die CORS-Preflight-Anforderung lautet wie folgt:

```shell
$ curl -I {% data variables.product.api_url_pre %} -H "Origin: http://example.com" -X OPTIONS
HTTP/2 204
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, X-GitHub-OTP, X-Requested-With
Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, x-ratelimit-limit, x-ratelimit-remaining, x-ratelimit-reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
Access-Control-Max-Age: 86400
```

## JSON-P-Rückrufe

Du kannst einen `?callback`-Parameter an einen beliebigen GET-Aufruf senden, um die Ergebnisse in einer JSON-Funktion zu umschließen.  Dieser Ansatz wird in der Regel verwendet, wenn Browser {% data variables.product.product_name %}-Inhalte in Webseiten einbetten möchten, indem domänenübergreifende Probleme umgangen werden.  Die Antwort enthält die gleiche Datenausgabe wie die reguläre API sowie die relevanten HTTP-Headerinformationen.

```shell
$ curl {% data variables.product.api_url_pre %}?callback=foo

> /**/foo({
>   "meta": {
>     "status": 200,
>     "x-ratelimit-limit": "5000",
>     "x-ratelimit-remaining": "4966",
>     "x-ratelimit-reset": "1372700873",
>     "Link": [ // pagination headers and other links
>       ["{% data variables.product.api_url_pre %}?page=2", {"rel": "next"}]
>     ]
>   },
>   "data": {
>     // the data
>   }
> })
```

Du kannst einen JavaScript-Handler schreiben, um den Rückruf zu verarbeiten. Hier findest du ein minimales Beispiel, das du ausprobieren kannst:

    <html>
    <head>
    <script type="text/javascript">
    function foo(response) {
      var meta = response.meta;
      var data = response.data;
      console.log(meta);
      console.log(data);
    }

    var script = document.createElement('script');
    script.src = '{% data variables.product.api_url_code %}?callback=foo';

    document.getElementsByTagName('head')[0].appendChild(script);
    </script>
    </head>

    <body>
      <p>Open up your browser's console.</p>
    </body>
    </html>

Alle Header haben den gleichen Zeichenfolgenwert wie die HTTP-Header mit einer wichtigen Ausnahme: Link.  Link-Header werden vorab für dich analysiert und als Array von `[url, options]`-Tupeln angezeigt.

Ein Link wie der folgende ...

    Link: <url1>; rel="next", <url2>; rel="foo"; bar="baz"

... sieht in der Rückrufausgabe wie folgt aus:

```json
{
  "Link": [
    [
      "url1",
      {
        "rel": "next"
      }
    ],
    [
      "url2",
      {
        "rel": "foo",
        "bar": "baz"
      }
    ]
  ]
}
```

## Zeitzonen

Einige Anforderungen, die neue Daten erstellen (z. B. das Erstellen eines neuen Commits), ermöglichen es dir, Zeitzoneninformationen bereitzustellen, wenn du Zeitstempel angibst oder generierst. Du wendest die folgenden Regeln in der Reihenfolge ihrer Priorität an, um Zeitzoneninformationen für solche API-Aufrufe zu ermitteln.

* [Explizites Bereitstellen eines ISO 8601-Zeitstempels mit Zeitzoneninformationen](#explicitly-providing-an-iso-8601-timestamp-with-timezone-information)
* [Verwenden des `Time-Zone`-Headers](#using-the-time-zone-header)
* [Verwenden der letzten bekannten Zeitzone für Benutzer*innen](#using-the-last-known-timezone-for-the-user)
* [Standardmäßiges Festlegen auf UTC ohne andere Zeitzoneninformationen](#defaulting-to-utc-without-other-timezone-information)

Beachte, dass diese Regeln nur für Daten gelten, die an die API übergeben werden, und nicht für Daten, die von der API zurückgegeben werden. Wie unter [Schema](#schema) erwähnt liegen von der API zurückgegebene Zeitstempel im UTC-Zeitformat gemäß ISO 8601 vor.

### Explizites Bereitstellen eines ISO 8601-Zeitstempels mit Zeitzoneninformationen

API-Aufrufe, die das Angeben eines Zeitstempels ermöglichen, wird dieser genaue Zeitstempel verwendet. Ein Beispiel hierfür ist die [Commits-API](/rest/reference/git#commits).

Diese Zeitstempel sehen in etwa wie `2014-02-27T15:05:06+01:00` aus. In [diesem Beispiel](/rest/reference/git#example-input) wird gezeigt, wie diese Zeitstempel angegeben werden können.

### Verwenden des `Time-Zone`-Headers

Es ist möglich, einen `Time-Zone`-Header zu geben, der eine Zeitzone gemäß der [Liste der Namen aus der Olson-Datenbank](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) definiert.

```shell
$ curl -H "Time-Zone: Europe/Amsterdam" -X POST {% data variables.product.api_url_pre %}/repos/github/linguist/contents/new_file.md
```

Dies bedeutet, dass du einen Zeitstempel für den Zeitpunkt generierst, zu dem dein API-Aufruf in der Zeitzone erfolgt, die dieser Header definiert. Die [Inhalts-API](/rest/reference/repos#contents) generiert beispielsweise einen Git-Commit für jede Ergänzung oder Änderung und verwendet die aktuelle Uhrzeit als Zeitstempel. Dieser Header bestimmt die Zeitzone, die zum Generieren dieses aktuellen Zeitstempels verwendet wird.

### Verwenden der letzten bekannten Zeitzone für Benutzer*innen

Wenn kein `Time-Zone`-Header angegeben ist und du einen authentifizierten Aufruf der API vornimmst, verwende die letzte bekannte Zeitzone für die authentifizierten Benutzer*innen. Die letzte bekannte Zeitzone wird aktualisiert, wenn du die {% data variables.product.product_name %}-Website durchsuchst.

### Standardmäßiges Festlegen auf UTC ohne andere Zeitzoneninformationen

Wenn die obigen Schritte keine Informationen bereitstellen, verwende UTC als Zeitzone, um den Git-Commit zu erstellen.

[pagination-guide]: /guides/traversing-with-pagination
