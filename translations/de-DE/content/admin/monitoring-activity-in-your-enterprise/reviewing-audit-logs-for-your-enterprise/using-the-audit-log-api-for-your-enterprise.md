---
title: Verwenden der Überwachungsprotokoll-API für dein Unternehmen
intro: Du kannst Unternehmensereignisse programmgesteuert über die REST- oder GraphQL-API abrufen.
shortTitle: Audit log API
permissions: 'Enterprise owners {% ifversion ghes %}and site administrators {% endif %}can use the audit log API.'
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
  - API
ms.openlocfilehash: b3c0f2756873494effd0a7fa3e65d4c87e24c01a
ms.sourcegitcommit: d2f0b59ed096b9e68ef8f6fa019cd925165762ec
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184253'
---
## Verwenden der Überwachungsprotokoll-API

Du kannst mit dem Überwachungsprotokoll mithilfe der GraphQL-API oder der REST-API interagieren. {% ifversion read-audit-scope %} Du kannst den `read:audit_log`-Bereich verwenden, um über die APIs auf das Überwachungsprotokoll zuzugreifen.{% endif %}

Zeitstempel und Datumsfelder in der API-Antwort werden in [UTC-Epochenmillisekunden](http://en.wikipedia.org/wiki/Unix_time) gemessen.

## Abfragen der GraphQL-API des Überwachungsprotokolls

Zur Sicherstellung, dass dein geistiges Eigentum sicher ist und du die Compliance für dein Unternehmen aufrechterhältst, kannst du die GraphQL-API des Überwachungsprotokolls verwenden, um Kopien deiner Überwachungsprotokolldaten aufzubewahren und zu überwachen: {% data reusables.audit_log.audit-log-api-info %}

Beachte, dass du Git-Ereignisse nicht mithilfe der {% ifversion not ghec %}Überwachungsprotokoll-API abrufen kannst.{% else %}GraphQL-API. Verwende zum Abrufen von Git-Ereignissen stattdessen die REST-API. Weitere Informationen findest du unter den `git`-Kategorieaktionen in [Überwachungsprotokollaktionen für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#git-category-actions) und außerdem in den Artikel [Unternehmensverwaltung](/rest/reference/enterprise-admin#audit-log) und [Organisationen](/rest/reference/orgs#get-the-audit-log-for-an-organization) in der REST-API-Dokumentation.{% endif %}

Die GraphQL-Antwort kann Daten für bis zu 90 bis 120 Tage beinhalten.

### Beispiel 1: Mitglieder, die in einem Unternehmen Organisationen hinzugefügt oder daraus entfernt wurden

Die folgende Abfrage ruft die Überwachungsprotokolle für das Unternehmen `avocado-corp` ab und gibt die ersten 10 Organisationen im Unternehmen zurück, in denen die einzigen ausgeführten Aktionen darin bestanden, ein Mitglied einer Organisation hinzuzufügen oder daraus zu entfernen. Die ersten 20 Überwachungsprotokolleinträge für jede Organisation werden zurückgegeben. 

Diese Abfrage verwendet das Feld [auditlog](/graphql/reference/objects) (Überwachungsprotokoll) aus dem Objekt „Organization“ sowie die Objekte [OrgAddMemberAuditEntry](/graphql/reference/objects#orgaddmemberauditentry) und [OrgRemoveMemberAuditEntry](/graphql/reference/objects#orgremovememberauditentry). Das {% data variables.product.prodname_dotcom %}-Konto, von dem das Überwachungsprotokoll für das Unternehmen abgefragt wird, muss ein Organisationsbesitzer für jede Organisation innerhalb des Unternehmens sein.

```shell
{
  enterprise(slug: "avocado-corp") {
    organizations(first: 10, orderBy: {field: LOGIN, direction: DESC}) {
      nodes {
        name
        auditLog(first: 20) {
          edges {
            node {
              ... on OrgAddMemberAuditEntry {
                action
                actorLogin
                createdAt
              }
              ... on OrgRemoveMemberAuditEntry {
                action
                actorLogin
                createdAt
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}
```

Die GraphQL-API gibt maximal 100 Knoten pro Abfrage zurück. Zum Abrufen zusätzlicher Ergebnisse musst du die Paginierung implementieren. Weitere Informationen findest du in der GraphQL-API-Dokumentation unter [Ressourcenbeschränkungen](/graphql/overview/resource-limitations#node-limit) und in der offiziellen GraphQL-Dokumentation unter [Paginierung](https://graphql.org/learn/pagination/).
### Beispiel 2: Ereignisse in einer Organisation, für ein bestimmtes Datum und einen bestimmten Akteur

Du kannst mehrere Suchbegriffe wie z. B. `created` und `actor` angeben, indem du sie in deiner Abfragezeichenfolge durch ein Leerzeichen trennst.

Die folgende Abfrage ruft alle Überwachungsprotokolle für das Unternehmen `avocado-corp` ab, die sich auf die Organisation `octo-org` beziehen und bei denen die Aktionen vom Benutzer `octocat` am oder nach dem 1. Januar 2022 ausgeführt wurden. Die ersten 20 Überwachungsprotokolleinträge werden zurückgegeben, wobei der neueste Protokolleintrag zuerst angezeigt wird. 

Diese Abfrage verwendet die Schnittstelle [AuditEntry](/graphql/reference/interfaces#auditentry). Das Konto {% data variables.product.prodname_dotcom %}, von dem das Überwachungsprotokoll für das Unternehmen abgefragt wird, muss ein Besitzer der Organisation `octo-org` sein.

```shell
{
  enterprise(slug: "avocado-corp") {
    organizations(first: 1, query: "octo-org") {
      nodes {
        name
        auditLog(first: 20, query: "actor:octocat created:>=2022-01-01T00:00:00.000Z", orderBy: {field: CREATED_AT, direction: DESC}) {
          edges {
            node {
              ... on AuditEntry {
                action
                actorLogin
                createdAt
                user {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
}
```

Weitere Abfragebeispiele findest du im [Repository für Plattformbeispiele](https://github.com/github/platform-samples/blob/master/graphql/queries).

## Abfragen der REST-API des Überwachungsprotokolls

Zur Sicherstellung, dass dein geistiges Eigentum sicher ist und du die Compliance für dein Unternehmen aufrechterhältst, kannst du die REST-API des Überwachungsprotokolls verwenden, um Kopien deiner Überwachungsprotokolldaten aufzubewahren und zu überwachen: {% data reusables.audit_log.audited-data-list %}

{% data reusables.audit_log.retention-periods %}

Weitere Informationen zur REST-API des Überwachungsprotokolls findest du unter [Unternehmensverwaltung](/rest/reference/enterprise-admin#audit-log) und [Organisationen](/rest/reference/orgs#get-the-audit-log-for-an-organization).

### Beispiel 1: Alle Ereignisse in einem Unternehmen, für ein bestimmtes Datum, mit Paginierung

Du kannst die seitenbasierte oder cursorbasierte Paginierung verwenden. Weitere Informationen findest du unter [Durchlaufen mit Paginierung](/rest/guides/traversing-with-pagination).

#### Beispiel mit seitenbasierter Paginierung

Die folgende Abfrage sucht nach Überwachungsprotokollereignissen, die am 1. Januar 2022 im Unternehmen `avocado-corp` erstellt wurden, und gibt die erste Seite mit maximal 100 Elementen pro Seite mithilfe der [REST-API-Paginierung](/rest/overview/resources-in-the-rest-api#pagination) zurück:

```shell
curl -H "Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=created:2022-01-01&page=1&per_page=100"
```

#### Beispiel mit cursorbasierter Paginierung

Die folgende Abfrage sucht nach Überwachungsprotokollereignissen, die am 1. Januar 2022 im Unternehmen `avocado-corp` erstellt wurden, und gibt die erste Seite mit maximal 100 Elementen pro Seite mithilfe der [REST-API-Paginierung](/rest/overview/resources-in-the-rest-api#pagination) zurück. Das Flag `--include` bewirkt, dass die Header zusammen mit der Antwort zurückgegeben werden.

```
curl --include -H "Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=created:2022-01-01&per_page=100"
```

Wenn mehr als 100 Ergebnisse vorhanden sind, enthält der `link`-Header URLs zum Abrufen der nächsten, ersten und vorherigen Ergebnisseiten.

```
link: <https://api.github.com/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=MS42NjQzODMzNTk5MjdlKzEyfDloQzBxdURzaFdVbVlLWjkxRU9mNXc%3D&before=>; rel="next", 
<https://api.github.com/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=&before=>; rel="first", 
<https://api.github.com/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=&before=MS42Njc4NDA2MjM4MzNlKzEyfExqeG5sUElvNEZMbG1XZHA5akdKTVE%3D>; rel="prev"
```

Kopiere den entsprechenden Paginierungslink in deine nächste Anforderung. Beispiel:

```shell
curl -I -H "Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=MS42Njc4NDA2MjM5NDFlKzEyfHRYa3AwSkxUd2xyRjA5bWxfOS1RbFE%3D&before="
```

### Beispiel 2: Ereignisse bei Pullanforderungen in einem Unternehmen, für ein bestimmtes Datum und einen bestimmten Akteur

Du kannst mehrere Suchbegriffe wie z. B. `created` und `actor` angeben, indem du sie in deiner formatierten URL mit dem Symbol `+` oder dem ASCII-Zeichencode `%20` trennst.

Die folgende Abfrage sucht nach Überwachungsprotokollereignissen für Pullanforderungen, bei denen das Ereignis am oder nach dem 1. Januar 2022 im `avocado-corp` Unternehmen eingetreten ist und die Aktion vom Benutzer `octocat` ausgeführt wurde:

```shell
curl -H "Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=action:pull_request+created:>=2022-01-01+actor:octocat"
```






