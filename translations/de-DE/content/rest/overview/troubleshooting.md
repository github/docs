---
title: Problembehandlung
intro: 'Erfahre, wie du die häufigsten Probleme mit der REST-API lösen kannst.'
redirect_from:
  - /v3/troubleshooting
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: ecfa3a360ef9b042d96a1f80a2f0cde49390727f
ms.sourcegitcommit: d2f0b59ed096b9e68ef8f6fa019cd925165762ec
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184232'
---
Solltest du in der API auf etwas Eigenartiges stoßen, findest du hier eine Liste mit Lösungen für einige mögliche Probleme.

{% ifversion api-date-versioning %}

## Fehler `400` aufgrund nicht unterstützter API-Version

Du solltest den `X-GitHub-Api-Version`-Header verwenden, um eine API-Version anzugeben. Beispiel:

```shell
$ curl {% data reusables.rest-api.version-header %} https://api.github.com/zen
```

Wenn du eine nicht vorhandene Version angibst, wird der Fehler `400` ausgelöst.

Weitere Informationen findest du unter [API-Versionen](/rest/overview/api-versions).

{% endif %}

## Fehler `404` für ein vorhandenes Repository

Der Fehler `404` wird für gewöhnlich ausgegeben, wenn dein Client nicht ordnungsgemäß authentifiziert ist.
In diesen Fällen erwartest du möglicherweise einen Fehler vom Typ `403 Forbidden`. Da wir jedoch _keinerlei_ Informationen zu privaten Repositorys angeben möchten, gibt die API stattdessen einen Fehler vom Typ `404` zurück.

Stelle zur Behandlung des Problems Folgendes sicher: [Du authentifizierst dich ordnungsgemäß](/guides/getting-started/), [dein OAuth-Zugriffstoken verfügt über die erforderlichen Bereiche](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), der Zugriff wird nicht durch [Einschränkungen von Drittanbieteranwendungen][oap-guide] blockiert, und [das Token ist nicht abgelaufen und wurde nicht widerrufen](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation).

## Nicht alle Ergebnisse zurückgegeben

Die meisten API-Aufrufe, die auf eine Liste von Ressourcen zugreifen (_z._ B. Benutzer, Probleme _usw._) unterstützen die Pagination. Wenn du bei Anforderungen unvollständige Ergebnisse erhältst, siehst du wahrscheinlich nur die erste Seite. Du musst die restlichen Seiten anfordern, um weitere Ergebnisse zu erhalten.

Wichtig: Versuche *nicht*, das Format der Paginierungs-URL zu erraten. Nicht jeder API-Aufruf verwendet die gleiche Struktur. Extrahiere stattdessen die Paginierungsinformationen aus dem [Linkheader](/rest#pagination), der mit jeder Anforderung gesendet wird.

[oap-guide]: https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/

{% ifversion fpt or ghec %}
## Standardauthentifizierungsfehler

Am 13. November 2020 wurde die Authentifizierung mit Benutzername und Kennwort für die REST-API und für die API für die OAuth-Autorisierung als veraltet eingestuft, und sie funktioniert nicht mehr.

### Verwenden von `username`/`password` für die Standardauthentifizierung

Wenn du `username` und `password` für API-Aufrufe verwendest, ist keine Authentifizierung mehr möglich. Beispiel:

```bash
curl -u my_user:my_password https://api.github.com/user/repos
```

Verwende beim Testen von Endpunkten oder bei der lokalen Entwicklung stattdessen ein [{% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line):

```bash
curl -H 'Authorization: Bearer my_access_token' https://api.github.com/user/repos
```

Bei OAuth-Apps empfiehlt sich die Verwendung des [Webanwendungsflusses](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow), um ein OAuth-Token für den Header des API-Aufrufs zu generieren:

```bash
curl -H 'Authorization: Bearer my-oauth-token' https://api.github.com/user/repos
```

## Zeitlimits

Wenn die Verarbeitung einer API-Anforderung durch {% data variables.product.product_name %} länger als zehn Sekunden dauert, wird die Anforderung durch {% data variables.product.product_name %} beendet, und du erhältst eine Timeoutantwort.

{% endif %}
