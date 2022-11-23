---
title: Anpassen eines Workflows zum Selektieren deiner Benachrichtigungen
intro: 'Um einen idealen Workflow für das Selektieren deiner Benachrichtigungen zu erstellen, kannst du diese Beispielworkflows übernehmen und anpassen.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
redirect_from:
  - /github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications
  - /github/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/customizing-a-workflow-for-triaging-your-notifications
shortTitle: Triage your notifications
ms.openlocfilehash: 9e5771dff52408a1b6967a3792eb36eefebefd72
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104559'
---
## Beginne deine Posteingang-Selektion

Bevor du mit der Selektion in deinem Posteingang beginnst, überlege Dir, ob du zuerst die wichtigsten Aktualisierungen finden und beantworten möchtest, oder ob du zuerst deinen Posteingang von störenden Benachrichtigungen leeren möchtest, die einfach zu finden und zu entfernen sind.

Ja nach Anzahl deiner Benachrichtigungen kannst du zu verschiedenen Zeiten auch eine Kombination der beiden Ansätze wählen.

Ein Beispiel für den Workflow zum Suchen und Reagieren auf die wichtigsten Benachrichtigungen findest du unter [Überprüfen der Benachrichtigungen mit den höchsten Prioritäten](#checking-your-highest-notification-priorities).

Ein Beispiel für den Workflow zum Entfernen von Benachrichtigungen, die einfach entfernt oder selektiert werden können, findest du unter [Löschen der am wenigsten wichtigen Benachrichtigungen](#clearing-your-least-important-notifications).

## Deine Benachrichtigungen mit höchster Priorität prüfen

Entscheide, welche Art von Benachrichtigungen am dringendsten überprüft werden müssen und wähle einen Zeitpunkt für den Review, der für Dich am besten ist. Du solltest Dir überlegen „Wen blockiere ich?"

Du kannst dich beispielsweise dazu entscheiden, deine Benachrichtigungen morgens während deiner Tagesplanung in folgender Reihenfolge zu prüfen:
  - Pull Requests, bei denen dein Review angefordert ist. (Filtere nach `reason:review-requested`.)
  - Ereignisse, in denen dein Benutzername durch @mentioned erwähnt wird, auch als „direkte Erwähnungen“ bezeichnet. (Filtere nach `reason:mention`.)
  - Ereignisse, in denen ein Team, dem du angehörst, durch @mentioned erwähnt wird, auch als „Teamerwähnungen“ bezeichnet. (Filtere nach `reason:team-mention`.)
  - CI-Workflow-Fehler für ein bestimmtest Repository. (Filtere nach `reason:ci-activity` und `repo:owner/repo-name`, und stelle sicher, dass du CI-Aktivitätsbenachrichtigungen für Workflowfehler in deinen Benachrichtigungseinstellungen aktiviert hast.)

  {% tip %}

  **Tipp**: Um Benachrichtigungen mit der höchsten Prioritäten schnell zu überprüfen, richte benutzerdefinierte Filter in der Reihenfolge ihrer Überprüfungspriorität ein. Weitere Informationen findest du unter [Verwalten von Benachrichtigungen aus deinem Posteingang](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#customizing-your-inbox-with-custom-filters).

  {% endtip %}

## Nachverfolgung laufender Benachrichtigungsaktualisierungen

Um Benachrichtigungen nachzuverfolgen, überlege Dir auch „Über was wurde ich blockiert und bin es nicht mehr?" Wähle dann Die Prioritäten der Nachverfolgung deiner Benachrichtigungen.

Beispielsweise kannst du folgende Reihenfolge für die Nachverfolgung wählen:
  - Issues und Pull Requests, denen du zugeordnet bist. Schließe sofort alle möglichen Issues und Pull Requests und füge Aktualisierungen hinzu. Bei Bedarf sicherer Benachrichtigungen für eine spätere Überprüfung.
  - Überprüfe Benachrichtigungen, die du in deinem Posteingang gesichert hast, vor allem ungelesene Aktualisierungen. Wenn der Thread nicht mehr relevant ist, deaktiviere {% octicon "bookmark" aria-label="The bookmark icon" %}, um die Benachrichtigung aus dem gespeicherten Posteingang zu entfernen, und hebe die Speicherung auf.

## Benachrichtigungen mit niedriger Priorität verwalten

Nach der Prüfung der Benachrichtigungen mit höherer Priorität überprüfe nun die verbleibenden Benachrichtigungen, wie beispielsweise Teilnahmebenachrichtigungen. Stellen Sie sich die folgenden Fragen:
  - Kann ich diese Benachrichtigung abmelden? Ist diese Benachrichtigung abgeschlossen und kann als **Erledigt** gekennzeichnet werden?
  {% tip %}

  **Tipp**: Wenn du dich von einer Benachrichtigung abmeldest, erhältst du erst dann neue Updates, wenn du am Thread teilzunehmen beginnst oder wenn du oder ein Team, dem du angehörst, über @mentioned erwähnt wird. Wenn du eine Benachrichtigung als **Erledigt** markierst, wird die Benachrichtigung aus der Hauptansicht deines Posteingangs entfernt und kann mit der Abfrage `is:read` angezeigt werden. Weitere Informationen findest du unter [Verwalten von Benachrichtigungen aus deinem Posteingang](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-options).

  {% endtip %}
  - Möchtest du zukünftige Aktualisierungen erhalten, wenn dieser Issue oder Pull Request geschlossen oder wieder geöffnet wird oder wenn ein Pull Request zusammengeführt wird? Weitere Informationen findest du unter [Selektieren einer einzelnen Benachrichtigung](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification#customizing-when-to-receive-future-updates-for-an-issue-or-pull-request).
  - Möchtest du in Zukunft keine solchen Benachrichtigungen mehr erhalten? Falls ja, erwäge Dich abzumelden. Weitere Informationen findest du unter [Verwalten von Abonnement für Aktivitäten auf GitHub](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github).

## Deine am wenigsten wichtigen Benachrichtigungen löschen

Wähle aus, welche Art von Benachrichtigungen für Dich am schnellsten und am einfachsten zu selektieren und aus deinem Posteingang zu entfernen sind, wobei du idealerweise mehrere Benachrichtigungen gleichzeitig selektieren kannst.

Du kannst beispielsweise festlegen, dass Benachrichtigungen in dieser Reihenfolge gelöscht werden sollen:
  - Teilnahmebenachrichtigungen, von denen du Dich abmelden kannst.
  - Aktualisierungen von Repositorys, die nicht relevant sind um aufbewahrt oder nachverfolgt zu werden.

Weitere Informationen zum gleichzeitigen Verwalten mehrerer Benachrichtigungen in deinem Posteingang findest du unter [Verwalten von Benachrichtigungen über deinen Posteingang](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-multiple-notifications-at-the-same-time).

Du kannst auch erwägen, deine Benachrichtigungseinstellungen zu ändern oder diese Aktualisierungen nach Möglichkeit zu deaktivieren. Weitere Informationen findest du unter [Konfigurieren von Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications) oder unter [Verwalten von Abonnements für Aktivitäten auf GitHub](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github).
