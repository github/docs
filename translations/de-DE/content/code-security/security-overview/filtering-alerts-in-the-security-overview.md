---
title: Filtern von Warnungen in der Sicherheitsübersicht
intro: Verwenden von Filtern zum Anzeigen bestimmter Kategorien von Warnungen
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
allowTitleToDifferFromFilename: true
versions:
  ghae: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: Filtering the security overview
ms.openlocfilehash: 60ff823ab0303dfb8fce788e708cb1cd61a9f8e2
ms.sourcegitcommit: 094dff459fcbf7d0634930e02405606dfffd7f0a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/12/2022
ms.locfileid: '148163195'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

## Informationen zum Filtern der Sicherheitsübersicht

Du kannst in einer Sicherheitsübersicht Filter verwenden, um dich auf eine Reihe von Faktoren zu konzentrieren, z. B. auf die Warnungsrisikostufe, den Warnungstyp und die Featureaktivierung. Je nach Ansicht{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %} und abhängig davon, ob du die Daten auf Unternehmens- oder Organisationsebene betrachtest,{% endif %} stehen unterschiedliche Filter zur Verfügung.

{% ifversion security-overview-displayed-alerts %} {% note %} {% data reusables.security-overview.information-varies-GHAS %} {% endnote %} {% endif %}

## Filtern nach Repository

| Qualifizierer | BESCHREIBUNG |
| -------- | -------- |
| `repo:REPOSITORY-NAME` | Zeigt Daten für das angegebene Repository an. |

## Filtern nach der Angabe, ob Sicherheitsfeatures aktiviert sind

Ersetze in den folgenden Beispielen `:enabled` durch `:not-enabled`, um Repositorys anzuzeigen, in denen die Sicherheitsfunktionen nicht aktiviert sind. Diese Qualifizierer sind in den Hauptübersichtsansichten verfügbar.

| Qualifizierer | BESCHREIBUNG |
| -------- | -------- |
| `code-scanning:enabled` | Zeigt Repositorys an, für die die {% data variables.product.prodname_code_scanning %} eingerichtet wurde. | 
| `dependabot:enabled` | Zeigt Repositorys an, für die {% data variables.product.prodname_dependabot_alerts %} aktiviert wurden. |
| `secret-scanning:enabled` | Zeigt Repositorys an, für die Warnungen der {% data variables.product.prodname_secret_scanning %} aktiviert wurden. {% ifversion security-overview-org-risk-coverage %} |
| `any-feature:enabled` | Zeigt Repositorys an, bei denen mindestens eine Sicherheitsfunktion aktiviert ist. |{% else %}
| `not-enabled:any` | Anzeigen von Repositorys mit mindestens einem Sicherheitsfeature, das nicht aktiviert ist |{% endif %}

{% ifversion security-overview-org-risk-coverage %} Die Ansicht „Sicherheitsabdeckung“ auf Organisationsebene enthält zusätzliche Filter.

{% data reusables.security-overview.beta-org-risk-coverage %}

| Qualifizierer | BESCHREIBUNG |
| -------- | -------- |
| `code-scanning-pull-request-alerts:enabled`| Zeigt Repositorys an, für die die {% data variables.product.prodname_code_scanning %} zur Ausführung bei Pull Requests konfiguriert wurde. |
| `dependabot-security-updates:enabled` | Zeigt Repositorys an, für die {% data variables.product.prodname_dependabot %}-Warnungen aktiviert wurden.  |
| `secret-scanning-push-protection:enabled` | Zeigt Repositorys an, für die der Pushschutz für die {% data variables.product.prodname_secret_scanning %} eingerichtet wurde. |
{% endif %}

## Filtern nach Repositorytyp

Diese Qualifizierer sind in den Hauptübersichtsansichten verfügbar.

| Qualifizierer | BESCHREIBUNG |
| -------- | -------- |
{%- ifversion ghes or ghec %} | `is:public` | Anzeigen öffentlicher Repositorys | {%- endif %} | `is:internal` | Anzeigen interner Repositorys | | `is:private` | Anzeigen privater Repositorys | | `archived:true` | Anzeigen archivierter Repositorys | | `archived:false` | Auslassen archivierter Repositorys |

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## Filtern nach Risikostufe für Repositorys

Die Risikostufe für ein Repository wird durch die Anzahl und dem Schweregrad der Warnungen von Sicherheitsfeatures bestimmt. Wenn ein oder mehrere Sicherheitsfeatures für ein Repository nicht aktiviert sind, hat das Repository ein unbekanntes Risikoniveau. Wenn ein Repository keine Risiken aufweist, die von Sicherheitsfeatures erkannt werden, hat das Repository ein klares Risikoniveau. 

{% ifversion security-overview-org-risk-coverage %} Diese Qualifizierer sind in der Ansicht auf Unternehmensebene verfügbar.
{% endif %}

| Qualifizierer | BESCHREIBUNG |
| -------- | -------- |
| `risk:high` | Anzeigen von Repositorys, die ein hohes Risiko haben |
| `risk:medium` | Anzeigen von Repositorys, die ein mittleres Risiko haben |
| `risk:low` | Anzeigen von Repositorys, die mit geringem Risiko verbunden sind |
| `risk:unknown` | Anzeigen von Repositorys, die ein unbekanntes Risikoniveau aufweisen |
| `risk:clear` | Anzeigen von Repositorys, die kein erkanntes Risikoniveau aufweisen |
{% endif %}

## Filtern nach Anzahl von Warnungen

{% ifversion security-overview-org-risk-coverage %}Diese Qualifizierer sind in der Übersicht auf Unternehmensebene und in der Ansicht „Sicherheitsrisiko“ auf Organisationsebene verfügbar.{% else %}Diese Qualifizierer sind in den Hauptübersichtsansichten verfügbar.{% endif %}

| Qualifizierer | BESCHREIBUNG |
| -------- | -------- |
| <code>code-scanning:<em>n</em></code> | Anzeigen von Repositorys, die *n* {% data variables.product.prodname_code_scanning %}-Warnungen aufweisen. Dieser Qualifizierer kann die Vergleichsoperatoren `=`, `>` und `<` verwenden. |
| <code>secret-scanning:<em>n</em></code> | Anzeigen von Repositorys, die *n* {% data variables.product.prodname_secret_scanning %}-Warnungen aufweisen. Dieser Qualifizierer kann die Vergleichsoperatoren `=`, `>` und `<` verwenden. |
| <code>dependabot:<em>n</em></code> | Anzeigen von Repositorys, die *n* {% data variables.product.prodname_dependabot_alerts %} besitzen. Dieser Qualifizierer kann die Vergleichsoperatoren `=`, `>` und `<` verwenden. |


## Filtern nach Team

Diese Qualifizierer sind in den Hauptübersichtsansichten verfügbar.

| Qualifizierer | BESCHREIBUNG |
| -------- | -------- |
| <code>team:<em>TEAM-NAME</em></code> | Zeigt Repositorys an, die für *TEAM-NAME* Administratorrechte besitzen. |

## Filtern nach Thema

Diese Qualifizierer sind in den Hauptübersichtsansichten verfügbar.

| Qualifizierer | BESCHREIBUNG |
| -------- | -------- |
| <code>topic:<em>TOPIC-NAME</em></code> | Zeigt Repositorys an, die mit *TOPIC-NAME* klassifiziert werden. |

{% ifversion security-overview-alert-views %}

## Zusätzliche Filter für Warnungsansichten der {% data variables.product.prodname_code_scanning %}

Alle Codeüberprüfungsbenachrichtigungen weisen eine der unten aufgeführten Kategorien auf. Du kannst auf ein beliebiges Ergebnis klicken, um alle Details zur entsprechenden Abfrage sowie die Codezeile anzuzeigen, die die Warnmeldung ausgelöst hat.

| Qualifizierer | BESCHREIBUNG |
| -------- | -------- |
|`severity:critical`|Zeigt {% data variables.product.prodname_code_scanning %}-Warnungen an, die als kritisch kategorisiert sind|
|`severity:high`|Zeigt {% data variables.product.prodname_code_scanning %}-Warnungen an, die als hoch kategorisiert sind|
|`severity:medium`|Zeigt {% data variables.product.prodname_code_scanning %}-Warnungen an, die als mittel kategorisiert sind|
|`severity:low`|Zeigt {% data variables.product.prodname_code_scanning %}-Warnungen an, die als niedrig kategorisiert sind|
|`severity:error`|Zeigt {% data variables.product.prodname_code_scanning %}-Warnungen an, die als Fehler kategorisiert sind|
|`severity:warning`|Zeigt {% data variables.product.prodname_code_scanning %}-Warnungen an, die als Warnung kategorisiert sind|
|`severity:note`|Zeigt {% data variables.product.prodname_code_scanning %}-Warnungen an, die als Hinweise kategorisiert sind|

{% ifversion dependabot-alerts-vulnerable-calls %}
## Zusätzliche Filter für {% data variables.product.prodname_dependabot %}-Warnungsansichten

Du kannst die Ansicht filtern, um {% data variables.product.prodname_dependabot_alerts %} anzuzeigen, die behoben werden können oder für die Informationen zur Offenlegung verfügbar sind. Du kannst auf ein beliebiges Ergebnis klicken, um vollständige Details der Warnung anzuzeigen.

| Qualifizierer | BESCHREIBUNG |
| -------- | -------- |
|`has:patch`|Zeigt {% data variables.product.prodname_dependabot %}-Warnungen für Sicherheitsrisiken an, für die bereits eine sichere Version verfügbar ist|
|`has:vulnerable-calls`|Zeigt {% data variables.product.prodname_dependabot %}-Warnungen an, bei denen mindestens ein Aufruf vom Repository von einer anfälligen Funktion erkannt wird. Weitere Informationen findest du unter [Anzeigen und Aktualisieren von Dependabot-Warnungen](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#about-the-detection-of-calls-to-vulnerable-functions).|
{% endif %}

{% endif %}

## Zusätzliche Filter für Warnungsansichten der {% data variables.product.prodname_secret_scanning %}

| Qualifizierer | BESCHREIBUNG |
| -------- | -------- |
|`provider:PROVIDER_NAME` | Zeigt Warnungen für alle Geheimnis-Issues des angegebenen Anbieters an.  |
| `secret-type:SERVICE_PROVIDER` | Zeigt Warnungen für das bestimmte Geheimnis und den Anbieter an. |
| `secret-type:CUSTOM-PATTERN` | Zeigt Warnungen für Geheime an, die dem angegebenen benutzerdefinierten Muster entsprechen.  |

Weitere Informationen findest du unter [{% data variables.product.prodname_secret_scanning_caps %}-Muster](/code-security/secret-scanning/secret-scanning-patterns).

