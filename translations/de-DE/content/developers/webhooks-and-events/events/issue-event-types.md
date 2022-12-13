---
title: Issue-Ereignistypen
intro: 'Erfahre mehr über die einzelnen Ereignistypen, die auslösende Aktion auf {% data variables.product.prodname_dotcom %} und die besonderen Eigenschaften der einzelnen Ereignisse für die Issue-Ereignis-API und Zeitachsenereignis-API.'
redirect_from:
  - /v3/issues/issue-event-types
  - /developers/webhooks-and-events/issue-event-types
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Events
ms.openlocfilehash: 2459e4fbdcd4e857c603b7aa7354d4f2d5d6a062
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876785'
---
Issue-Ereignisse werden durch Aktivität in Issues und Pull Requests ausgelöst und sind in der [Issue-Ereignis-API](/rest/reference/issues#events) und der [Zeitachsenereignis-API](/rest/reference/issues#timeline) verfügbar. Jeder Ereignistyp gibt an, ob das Ereignis in der Issue-Ereignis-API oder in der Zeitachsenereignis-API verfügbar ist.

Die GitHub-REST-API betrachtet alle Pull Requests als Issue, doch nicht jedes Issue ist ein Pull Request. Aus diesem Grund können die Issue-Ereignis- und Zeitachsenereignisendpunkte sowohl Issues als auch Pull Requests in der Antwort zurückgeben. Pull Requests weisen im `issue`-Objekt eine `pull_request`-Eigenschaft auf. Da es sich bei Pull Requests um Issues handelt, treten bei Issue- und Pull Request-Nummern in einem Repository keine Überlappungen auf. Beispiel: Wenn du dein erstes Issue in einem Repository öffnest, lautet die Nummer 1. Öffne anschließend ein Pull Request, weist dieses die Nummer 2 auf. Jeder Ereignistyp gibt an, ob das Ereignis in Pull Requests, Issues oder beidem auftritt.

## Gemeinsame Eigenschaften in Issue-Ereignisobjekten

Alle Issue-Ereignisse weisen dieselbe Objektstruktur auf. Die einzige Ausnahme sind Ereignisse, die ausschließlich in der Zeitachsenereignis-API verfügbar sind. Einige Ereignisse enthalten zudem zusätzliche Eigenschaften, die weiteren Kontext zu den Ereignisressourcen bieten. Einzelheiten zu Eigenschaften, die von diesem Objektformat abweichen, findest du im jeweiligen Ereignis.

{% data reusables.issue-events.issue-event-common-properties %}

## added_to_project

Das Issue oder der Pull Request wurde zu einem Projektboard hinzugefügt. {% data reusables.projects.disabled-projects %}

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li><li>Pull Request</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %}

## zugewiesen

Das Issue oder der Pull Request wurde einer bzw. einem Benutzer*in zugewiesen.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li><li>Pull Requests</li></ul> | **X** | **X**  |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.assignee-properties %}

## automatic_base_change_failed

GitHub hat versucht, den Basisbranch des Pull Requests automatisch zu ändern, der Versuch war jedoch nicht erfolgreich.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Requests</li></ul> | **X** |  |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %}

## automatic_base_change_succeeded

GitHub hat erfolgreich versucht, den Basisbranch des Pull Requests automatisch zu ändern.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Requests</li></ul> | **X** | |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %}

## base_ref_changed

Der Basisverweisbranch des Pull Requests wurde geändert.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Requests</li></ul> | **X** | |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %}

## closed

Das Issue oder der Pull Request wurde geschlossen. Wenn `commit_id` vorhanden ist, gibt diese ID den Commit an, mit dem das Issue unter Verwendung der „closes/fixes“-Syntax geschlossen wurde. Weitere Informationen zu dieser Syntax findest du unter [Linking a pull request to an issue](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword) („Verknüpfen eines Pull Requests mit einem Issue“).

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %}

## kommentiert

Dem Issue oder Pull Request wurde ein Kommentar hinzugefügt.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li><li>Pull Requests</li></ul> |  | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.timeline_events_object_properties %}

Name | type | BESCHREIBUNG
-----|------|--------------
`url` | `string` | Die REST-API-URL zum Abrufen des Issue-Kommentars.
`html_url` | `string` | Die HTML-URL des Issue-Kommentars.
`issue_url` | `string` | Die HTML-URL des Issues.
`id` | `integer` | Der eindeutige Bezeichner des Ereignisses.
`node_id` | `string` | Die [globale Knoten-ID](/graphql/guides/using-global-node-ids) des Ereignisses.
`user` | `object` | Die Person, die das Issue kommentiert hat.
`created_at` | `string` | Der Zeitstempel für den Zeitpunkt, zu dem der Kommentar hinzugefügt wurde.
`updated_at` | `string` | Der Zeitstempel für den Zeitpunkt, zu dem der Kommentar aktualisiert bzw. erstellt wurde (falls der Kommentar nicht aktualisiert wurde).
`author_association` | `string` | Die Berechtigungen der Benutzerin oder des Benutzers für das Repository des Issues. Wenn die oder der Besitzer*in des Repositorys einen Kommentar erstellt hat, lautet der Wert z. B. `"OWNER"`.
`body` | `string` | Der Kommentartext.
`event` | `string` | Der Ereigniswert lautet `"commented"`.
`actor` | `object` | Die Person, die das Ereignis generiert hat.

## Commit wurde ausgeführt

Ein Commit wurde zum `HEAD`-Branch des Pull Requests hinzugefügt.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Requests</li></ul> |  | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.timeline_events_object_properties %}

Name | type | BESCHREIBUNG
-----|------|--------------
`sha` | `string` | Der SHA des Commits im Pull Request.
`node_id` | `string` | Die [globale Knoten-ID](/graphql/guides/using-global-node-ids) des Ereignisses.
`url` | `string` | Die REST-API-URL zum Abrufen des Commits.
`html_url` | `string` | Die HTML-URL des Commits.
`author` | `object` | Die Person, die den Commit erstellt hat.
`committer` | `object` | Die Person, die den Commit im Namen des Erstellers committet hat.
`tree` | `object` | Die Git-Struktur des Commits.
`message` | `string` | Die Commitnachricht.
`parents` | `array of objects` | Eine Liste mit übergeordneten Commits.
`verification` | `object` | Das Ergebnis der Signaturüberprüfung für den Commit. Weitere Informationen findest du unter [Signature verification object](/rest/reference/git#get-a-commit) („Signaturüberprüfungsobjekt“).
`event` | `string` | Der Ereigniswert lautet `"committed"`.

## connected

Das Issue oder der Pull Request wurde mit einem anderen Issue oder Pull Request verknüpft. Weitere Informationen findest du unter [Linking a pull request to an issue](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue) („Verknüpfen eines Pull Requests mit einem Issue“).

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %}

## convert_to_draft

Der Pull Request wurde in den Entwurfsmodus konvertiert.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %}

## converted_note_to_issue

Das Issue wurde erstellt, indem ein Hinweis in einem Projektboard in ein Issue konvertiert wurde. {% data reusables.projects.disabled-projects %}

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %}

## cross-referenced

Auf das Issue oder den Pull Request wurde in einem anderen Issue oder Pull Request verwiesen.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li><li>Pull Requests</li></ul> |  | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.timeline_events_object_properties %}

Name | type | BESCHREIBUNG
-----|------|--------------
`actor` | `object` | Die Person, die das Ereignis generiert hat.
`created_at` | `string` | Der Zeitstempel für den Zeitpunkt, zu dem der Querverweis hinzugefügt wurde.
`updated_at` | `string` | Der Zeitstempel für den Zeitpunkt, zu dem der Querverweis aktualisiert oder erstellt wurde (falls der Querverweis nicht aktualisiert wurde).
`source` | `object` | Das Issue oder der Pull Request, in dem ein Querverweis hinzugefügt wurde.
`source[type]` | `string` | Da Pull Requests den Typ „Issue“ aufweisen, lautet dieser Wert immer `"issue"`. In der Zeitachsenereignis-API werden nur Querverweisereignisse zurückgegeben, die von Issues oder Pull Requests ausgelöst wurden. Wenn du feststellen möchtest, ob das Issue, das das Ereignis ausgelöst hat, ein Pull Request ist, kannst du überprüfen, ob das `source[issue][pull_request]`-Objekt vorhanden ist.
`source[issue]` | `object` | Das `issue`-Objekt, das den Querverweis hinzugefügt hat.
`event` | `string` | Der Ereigniswert lautet `"cross-referenced"`.

## demilestoned

Das Issue oder der Pull Request wurde aus einem Meilenstein entfernt.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %} `milestone` | `object` | Das Meilensteinobjekt.
`milestone[title]` | `string` | Der Titel des Meilensteins.

## deployed

Der Pull Request wurde bereitgestellt.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %}

## deployment_environment_changed

Die Pull Request-Bereitstellungsumgebung wurde geändert.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Requests</li></ul> | **X** |  |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %}

## getrennt

Die Verknüpfung des Issues oder Pull Requests mit einem anderen Issue oder Pull Request wurde entfernt. Weitere Informationen findest du unter [Linking a pull request to an issue](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue) („Verknüpfen eines Pull Requests mit einem Issue“).

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %}

## head_ref_deleted

Der `HEAD`-Branch des Pull Requests wurde gelöscht.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %}

## head_ref_restored

Der `HEAD`-Branch des Pull Requests wurde beim letzten bekannten Commit wiederhergestellt.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Requests</li></ul> | **X** | **X** |

## head_ref_force_pushed

Für den HEAD-Branch des Pull Requests wurde ein Push erzwungen.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %}

## bezeichnet

Dem Issue oder Pull Request wurde eine Bezeichnung hinzugefügt.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.label-properties %}

## locked

Das Issue oder der Pull Request wurde gesperrt.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %} `lock_reason` | `string` | Der Grund, weshalb eine Issue- oder Pull Request-Konversation gesperrt wurde (sofern angegeben).

## mentioned

Die `actor`-Angabe in einem Issue- oder Pull Request-Text lautete `@mentioned`.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %}

## marked_as_duplicate

Ein*e Benutzer*in mit Schreibberechtigungen hat ein Issue als Duplikat eines anderen Issues bzw. einen Pull Request als Duplikat eines anderen Pull Requests markiert.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %}

## Zusammengeführt

Der Pull Request wurde zusammengeführt. Das Attribut `commit_id` ist der SHA1 des `HEAD`-Commits, der zusammengeführt wurde. `commit_repository` stimmt immer mit dem Hauptrepository überein.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %}

## milestoned

Das Issue oder der Pull Request wurde zu einem Meilenstein hinzugefügt.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %} `milestone` | `object` | Das Meilensteinobjekt.
`milestone[title]` | `string` | Der Titel des Meilensteins.

## moved_columns_in_project

Das Issue oder der Pull Request wurde innerhalb der Spalten eines Projektboards verschoben. {% data reusables.projects.disabled-projects %}

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %} `previous_column_name` | `string` | Der Name der Spalte, aus der das Issue verschoben wurde.

## pinned

Das Issue wurde angeheftet.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %}

## ready_for_review

Ein Pull Request-Entwurf wurde als zum Review bereit markiert.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %}

## referenced

In einer Commitnachricht wurde auf das Issue verwiesen. Das Attribut `commit_id` ist der entsprechende Commit-SHA1, und commit_repository gibt an, wo dieser Commit gepusht wurde.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %}

## removed_from_project

Das Issue oder der Pull Request wurde aus einem Projektboard entfernt. {% data reusables.projects.disabled-projects %}

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %}

## renamed

Der Titel des Issues oder Pull Requests wurde geändert.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %} `rename` | `object` | Die Namendetails.
`rename[from]` | `string` | Der vorherige Name.
`rename[to]` | `string` | Der neue Name.

## Erneut öffnen

Das Issue oder der Pull Request wurde erneut geöffnet.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %}

## review_dismissed

Der Review des Pull Requests wurde verworfen.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.review-dismissed-properties %}

## review_requested

Ein Pull Request-Review wurde angefordert.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.review-request-properties %}

## review_request_removed

Die Anforderung eines Pull Request-Reviews wurde entfernt.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.review-request-properties %}

## reviewed

Der Pull Request wurde überprüft.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Requests</li></ul> |  | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.timeline_events_object_properties %}

Name | type | BESCHREIBUNG
-----|------|--------------
`id` | `integer` | Der eindeutige Bezeichner des Ereignisses.
`node_id` | `string` | Die [globale Knoten-ID](/graphql/guides/using-global-node-ids) des Ereignisses.
`user` | `object` | Die Person, die das Issue kommentiert hat.
`body` | `string` | Die Zusammenfassung des Reviews.
`commit_id` | `string` | Der SHA des letzten Commits im Pull Request zum Zeitpunkt des Reviews.
`submitted_at` | `string` | Der Zeitstempel für den Zeitpunkt, zu dem der Review übermittelt wurde.
`state` | `string` | Der Status des übermittelten Reviews. Mögliche Werte: `commented`, `changes_requested` oder `approved`.
`html_url` | `string` | Die HTML-URL des Reviews.
`pull_request_url` | `string` | Die REST-API-URL zum Abrufen des Pull Requests.
`author_association` | `string` | Die Berechtigungen der Benutzerin oder des Benutzers für das Repository des Issues. Wenn die oder der Besitzer*in des Repositorys einen Kommentar erstellt hat, lautet der Wert z. B. `"OWNER"`.
`_links` | `object` | `html_url` und `pull_request_url`.
`event` | `string` | Der Ereigniswert lautet `"reviewed"`.

## subscribed

Jemand hat Benachrichtigungen zu einem Issue oder Pull Request abonniert.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %}

## transferred

Das Issue wurde an ein anderes Repository übertragen.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %}

## Nicht zugewiesen

Die Zuweisung einer Benutzerin oder eines Benutzers zum Issue wurde aufgehoben.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.assignee-properties %}

## unlabeled

Eine Bezeichnung wurde vom Issue entfernt.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.label-properties %}

## unlocked

Das Issue wurde entsperrt.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %} `lock_reason` | `string` | Der Grund, weshalb eine Issue- oder Pull Request-Konversation gesperrt wurde (sofern angegeben).

## unmarked_as_duplicate

Ein Issue oder Pull Request, das bzw. der zuvor als Duplikat eines anderen Issues oder Pull Requests markiert wurde, wird nicht mehr als Duplikat betrachtet.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %}

## unpinned

Das Issue wurde getrennt.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %}

## unsubscribed

Jemand, der Benachrichtigungen zu einem Issue oder Pull Request abonniert hatte, hat dieses Abonnement entfernt.

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li><li>Pull Requests</li></ul> |  | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %}

{% ifversion fpt or ghec %}
## user_blocked

Ein*e Organisationsbesitzer*in hat eine*n Benutzer*in blockiert. Dies erfolgte über [einen Kommentar der blockierten Benutzerin oder des blockierten Benutzers zum Issue](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization#blocking-a-user-in-a-comment).

### Verfügbarkeit

|Typ des Problems | Issue-Ereignis-API | Zeitachsenereignis-API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Probleme</li><li>Pull Requests</li></ul> | **X** | **X** |

### Ereignisobjekteigenschaften

{% data reusables.issue-events.issue-event-common-properties %}

{% endif %}
