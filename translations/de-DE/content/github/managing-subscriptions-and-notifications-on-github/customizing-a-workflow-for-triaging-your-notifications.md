---
title: Anpassen eines Workflows zum Selektieren Deiner Benachrichtigungen
intro: 'Um einen idealen Workflow für das Selektieren Deiner Benachrichtigungen zu erstellen, kannst Du diese Workflow-Beispiele übernehmen und anpassen.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
topics:
  - notifications
---

### Beginne Deine Posteingang-Selektion

Bevor Du mit der Selektion in Deinem Posteingang beginnst, überlege Dir, ob Du zuerst die wichtigsten Aktualisierungen finden und beantworten möchtest, oder ob Du zuerst Deinen Posteingang von störenden Benachrichtigungen leeren möchtest, die einfach zu finden und zu entfernen sind.

Ja nach Anzahl Deiner Benachrichtigungen kannst Du zu verschiedenen Zeiten auch eine Kombination der beiden Ansätze wählen.

Ein Workflow-Beispiel zum Finden und Beantworten der wichtigsten Benachrichtigungen findest Du unter „[Deine Benachrichtigungen mit höchster Priorität prüfen](#checking-your-highest-notification-priorities)."

Ein Workflow-Beispiel zum Entfernen von Benachrichtigungen, die einfach zu selektieren und löschen sind, findest Du unter „[Deine am wenigsten wichtigen Benachrichtigungen löschen](#clearing-your-least-important-notifications)."

### Deine Benachrichtigungen mit höchster Priorität prüfen

Entscheide, welche Art von Benachrichtigungen am dringendsten überprüft werden müssen und wähle einen Zeitpunkt für den Review, der für Dich am besten ist. Du solltest Dir überlegen „Wen blockiere ich?"

Du kannst Dich beispielsweise dazu entscheiden, Deine Benachrichtigungen am Morgen während Deiner Tages-Planungszeit in folgender Reihenfolge zu prüfen:
  - Pull Requests, bei denen Dein Review angefordert ist. (gefiltert nach `reason:review-requested` (Grund: Review angefordert))
  - Ereignisse, in denen Deine Benutzername @erwähnt ist, auch direkte Erwähnungen genannt. (gefiltert nach `reason:mention` (Grund: erwähnt))
  - Ereignisse, in denen ein Team @erwähnt ist, in dem Du Mitglied bist, auch Team-Erwähnungen genannt. (gefiltert nach `reason:team-mention` (Grund: Team-Erwähnung))
  - CI-Workflow-Fehler für ein bestimmtest Repository. (filtere nach `reason:ci-activity` (Grund: CI-Aktivität) und `repo:owner/repo-name` (Grund: Inhaber/Repository-Name) und stelle sicher, dass Du CI-Aktivitätsbenachrichtigungen für Workflow-Fehler in Deinen Benachrichtigungseinstellungen aktiviert hast)

  {% tip %}

  **Tipp:** Um Deine höchsten Prioritäten schnell zu überprüfen, richte benutzerdefinierte Filter in der Reihenfolge ihrer Überprüfungspriorität ein. Weitere Informationen findest Du unter „[Benachrichtigungen über Deinen Posteingang verwalten](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#customizing-your-inbox-with-custom-filters)."

  {% endtip %}

### Nachverfolgung laufender Benachrichtigungsaktualisierungen

Um Benachrichtigungen nachzuverfolgen, überlege Dir auch „Über was wurde ich blockiert und bin es nicht mehr?" Wähle dann Die Prioritäten der Nachverfolgung Deiner Benachrichtigungen.

Beispielsweise kannst Du folgende Reihenfolge für die Nachverfolgung wählen:
  - Issues und Pull Requests, denen Du zugeordnet bist. Schließe sofort alle möglichen Issues und Pull Requests und füge Aktualisierungen hinzu. Bei Bedarf sicherer Benachrichtigungen für eine spätere Überprüfung.
  - Überprüfe Benachrichtigungen, die Du in Deinem Posteingang gesichert hast, vor allem ungelesene Aktualisierungen. Wenn der Thread nicht mehr relevant ist, deaktiviere {% octicon "bookmark" aria-label="The bookmark icon" %} um die Benachrichtigung aus Deinem Posteingang gesicherter Benachrichtigungen zu entfernen.

### Benachrichtigungen mit niedriger Priorität verwalten

Nach der Prüfung der Benachrichtigungen mit höherer Priorität überprüfe nun die verbleibenden Benachrichtigungen, wie beispielsweise Teilnahmebenachrichtigungen. Betrachte dazu diese Fragen:
  - Kann ich diese Benachrichtigung abmelden? Ist diese Benachrichtigung abgeschlossen und kann als **Done** (Erledigt) markiert werden?
  {% tip %}

  **Tipp:** Wenn Du Dich von einer Benachrichtigung abmeldest, erhältst Du keine neuen Updates, es sei denn, Du beginnst am Thread teilzunehmen oder Du wirst @erwähnt oder ein Team, dem Du angehörst wird @erwähnt. Wenn Du einen Benachrichtigung als **Done**(Erledigt) markierst, wird die Benachrichtigung aus der Hauptansicht Deines Posteingangs entfernt und kann mit der Abfrage `is:read` (ist gelesen) gefunden werden. Weitere Informationen findest du unter „[Benachrichtigungen über Deinen Posteingang verwalten](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-options)."

  {% endtip %}
  - Möchtest Du zukünftige Aktualisierungen erhalten, wenn dieser Issue oder Pull Request geschlossen oder wieder geöffnet wird oder wenn ein Pull Request zusammengeführt wird? Weitere Informationen zu diesen Möglichkeiten findest Du unter „[Eine einzelne Benachrichtigung selektieren](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification#customizing-when-to-receive-future-updates-for-an-issue-or-pull-request)."
  - Möchtest Du in Zukunft keine solchen Benachrichtigungen mehr erhalten? Falls ja, erwäge Dich abzumelden. Weitere Informationen findest Du unter „[Abonnements für Aktivitäten auf GitHub verwalten](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)."

### Deine am wenigsten wichtigen Benachrichtigungen löschen

Wähle aus, welche Art von Benachrichtigungen für Dich am schnellsten und am einfachsten zu selektieren und aus Deinem Posteingang zu entfernen sind, wobei Du idealerweise mehrere Benachrichtigungen gleichzeitig selektieren kannst.

For example, you may decide to clear notifications in this order:
  - Teilnahmebenachrichtigungen, von denen Du Dich abmelden kannst.
  - Aktualisierungen von Repositorys, die nicht relevant sind um aufbewahrt oder nachverfolgt zu werden.

Weitere Informationen zum gleichzeitigen Verwalten von mehreren Benachrichtigungen in Deinem Posteingang findest Du unter „[ Benachrichtigungen über Deinen Posteingang verwalten](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-multiple-notifications-at-the-same-time)."

Du kannst auch erwägen, Deine Benachrichtigungseinstellungen zu ändern oder Dich wenn möglich von diesen Aktualisierungen abzumelden. Weitere Informationen findest Du unter „[Benachrichtigungen konfigurieren](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)" oder „[Abonnements für Aktivitäten auf GitHub verwalten](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)."
